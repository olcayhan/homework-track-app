import { File } from "lucide-react";

import { AssignmentModal } from "@/components/modals/AssignmentModal";
import AssignmentItem from "@/components/assignment/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";
import NotFound from "@/components/NotFound";
import SearchFilterNavbar from "@/components/SearchFilterNavbar";
import { Role } from "@/types/Role";
import useAuth from "@/hooks/useAuth";

export default function Assignment() {
  const assignments = useAssignment((state) => state.assignment);
  const { role } = useAuth();
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">
      <SearchFilterNavbar />
      <div className="fixed right-10 bottom-10 w-64 h-12">
        {role === Role.Teacher && <AssignmentModal />}
      </div>

      {assignments.length > 0 ? (
        <div className="w-full flex flex-row justify-start items-center flex-wrap gap-3 p-3">
          {assignments.map((assignment) => (
            <AssignmentItem key={assignment.id} assignment={assignment} />
          ))}
        </div>
      ) : (
        <NotFound
          Icon={File}
          title="No assignment found"
          description="You currently have no assignments."
        />
      )}
    </div>
  );
}
