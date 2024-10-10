import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { Progress } from "./ui/progress";
import { Image } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function ImageUpload({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: string) => void;
}) {
  const [progress, setProgress] = useState<number | null>(null);

  const onDrop = useCallback((acceptedFiles: globalThis.File[]) => {
    if (!acceptedFiles || acceptedFiles.length === 0) return;

    const storageRef = ref(storage, `files/${Date.now() + "profile-image"}`);
    const uploadTask = uploadBytesResumable(storageRef, acceptedFiles[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => {
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          onChange(downloadURL);
          setProgress(null);
        });
      }
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Avatar className="w-32 h-32 cursor-pointer" {...getRootProps()}>
        <AvatarImage src={value} alt="@shadcn" />
        <AvatarFallback>
          <Image className="h-12 w-12" />
        </AvatarFallback>
        <input {...getInputProps()} />
      </Avatar>
      {progress !== null && <Progress value={progress} className="mt-2 w-32" />}
      {isDragActive ? (
        <p className="text-xs font-semibold">Drop the files here ...</p>
      ) : (
        <p className="text-xs font-semibold">
          Drag and drop some images here, or click to select files
        </p>
      )}
    </div>
  );
}

export default ImageUpload;
