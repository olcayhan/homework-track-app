import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Progress } from "./ui/progress";

function ImageUpload({ value, onChange }: { value: any[]; onChange: any }) {
  const [progress, setProgress] = useState<any>(null);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (!acceptedFiles) return;
      acceptedFiles.map((file: any) => {
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

  const files = value.map((file: any) => (
    <li key={file.url}>
      {file.path} - {file.size} bytes -{" "}
      <a
        className="bg-blue-500 px-2 py-1 font-semibold text-white"
        target="_blank"
        href={file.url}
      >
        Download
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
        <ul className="flex flex-col gap-2 justify-start">{files}</ul>
      </div>
    </div>
  );
}

export default ImageUpload;
