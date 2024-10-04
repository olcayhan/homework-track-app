import NotFound from "@/components/NotFound";
import { User } from "lucide-react";

export default function Student() {
  return (
    <NotFound
      Icon={User}
      title="No students found"
      description="You currently have no student."
    />
  );
}
