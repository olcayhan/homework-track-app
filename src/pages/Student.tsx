import { StudentModal } from "@/components/modals/StudentModal";
import NotFound from "@/components/NotFound";
import { User } from "lucide-react";

export default function Student() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-3 gap-3">
      <StudentModal />
      <NotFound
        Icon={User}
        title="No students found"
        description="You currently have no student."
      />
    </div>
  );
}
