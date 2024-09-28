import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Progress } from "./ui/progress";
import { FileIcon } from "react-file-icon";
import { FileType } from "@/types/Assignment";

function FileUpload({
  value,
  onChange,
}: {
  value: FileType[];
  onChange: (event:FileType[]) => void;
}) {
  const [progress, setProgress] = useState<number | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: globalThis.File[]) => {
      if (!acceptedFiles) return;
      acceptedFiles.map((file: globalThis.File) => {
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
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              onChange([
                ...value,
                { path: file.name, size: file.size, url: downloadURL },
              ]);
              setProgress(null);
            });
          }
        );
      });
    },
    [onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const files = value.map((file: FileType) => (
    <li key={file.url}>
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
        className="border-2 border-neutral-400 p-10 border-dashed"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>

      <div className="mt-2">
        {progress !== null && <Progress value={progress} className="mt-2" />}
        <ul className="flex flex-row gap-8 justify-start">{files}</ul>
      </div>
    </div>
  );
}

export default FileUpload;
