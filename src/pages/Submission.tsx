import { File } from "lucide-react";
import NotFound from "@/components/NotFound";

export default function Submission() {
  return (
    <NotFound
      Icon={File}
      title="No submission found"
      description="You currently have no submission."
    />
  );
}
