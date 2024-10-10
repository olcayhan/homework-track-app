import { School } from "lucide-react";

import AssignmentItem from "@/components/assignment/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";
import NotFound from "@/components/NotFound";
import { ClassModal } from "@/components/modals/ClassModal";

export default function Class() {
  const assignments = useAssignment((state) => state.assignment);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-3 gap-3">
      <ClassModal />
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))
      ) : (
        <NotFound
          Icon={School}
          title="No class found"
          description="You currently have no class."
        />
      )}
    </div>
  );
}
