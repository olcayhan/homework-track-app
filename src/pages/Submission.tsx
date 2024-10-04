import { File } from "lucide-react";

export default function Submission() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-8">
      <File className="w-24 h-24" />
      <h1 className="font-bold text-xl">No submission found</h1>
      <p className="text-gray-500">You currently have no submission.</p>
    </div>
  );
}
