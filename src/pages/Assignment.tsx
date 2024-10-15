import { File } from "lucide-react";

import { AssignmentModal } from "@/components/modals/AssignmentModal";
import AssignmentItem from "@/components/assignment/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";
import NotFound from "@/components/NotFound";

export default function Assignment() {
  const assignments = useAssignment((state) => state.assignment);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-3 gap-3">
      <AssignmentModal />
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))
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
