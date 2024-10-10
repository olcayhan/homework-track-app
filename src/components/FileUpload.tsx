import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Progress } from "./ui/progress";
import { FileIcon } from "react-file-icon";
import { FileType } from "@/types/Assignment";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";

function FileUpload({
  multiple = false,
  value,
  onChange,
}: {
  multiple?: boolean;
  value: FileType[];
  onChange: (event: FileType[]) => void;
}) {
  const [progress, setProgress] = useState<number | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: globalThis.File[]) => {
      if (!acceptedFiles || acceptedFiles.length === 0) return;

      const uploadPromises = acceptedFiles.map((file: globalThis.File) => {
        return new Promise<FileType>((resolve, reject) => {
          const storageRef = ref(storage, `files/${Date.now() + file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setProgress(prog);
            },
            (error) => {
              console.error("Upload error:", error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  resolve({
                    path: file.name,
                    size: file.size,
                    url: downloadURL,
                  });
                })
                .catch((error) => reject(error));
            }
          );
        });
      });

      Promise.all(uploadPromises)
        .then((uploadedFiles) => {
          multiple
            ? onChange([...value, ...uploadedFiles])
            : onChange(uploadedFiles);
          setProgress(null);
        })
        .catch((error) => {
          console.error("Error uploading one or more files:", error);
        });
    },
    [onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
  });

  const files = value.map((file: FileType) => (
    <li className="relative" key={file.url}>
      <Button
        className="absolute right-0 top-4 rounded-full bg-red-600 hover:bg-red-700"
        type="button"
        size={"icon"}
        onClick={(e) => {
          e.stopPropagation();
          onChange(value.filter((f) => f.url !== file.url));
        }}
      >
        <Trash className="w-4 h-4" />
      </Button>
      <a
        key={file.url}
        className="px-2 py-1 font-semibold text-white"
        target="_blank"
        href={file.url}
      >
        <div className="w-16 h-24">
          <FileIcon extension={file.path.split(".").pop()} />
          <p className="text-neutral-950 text-sm truncate hover:text-clip hover:text-wrap hover:overflow-visible">
            {file.path}
          </p>
        </div>
      </a>
    </li>
  ));

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 rounded-lg border-neutral-400 p-10 border-dashed"
      >
        <input {...getInputProps()} />
        <p className="text-center">
          {isDragActive
            ? " Drop the files here ..."
            : "Drag and drop some files here, or click to select files"}
        </p>
      </div>

      <div className="mt-2">
        {progress !== null && <Progress value={progress} className="mt-2" />}
        <ul className="flex flex-row gap-8 justify-start">{files}</ul>
      </div>
    </div>
  );
}

export default FileUpload;
