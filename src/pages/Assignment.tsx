import { File } from "lucide-react";

import { AssignmentModal } from "@/components/modals/AssignmentModal";
import AssignmentItem from "@/components/assignment/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";
import NotFound from "@/components/NotFound";
import SearchFilterNavbar from "@/components/SearchFilterNavbar";

export default function Assignment() {
  const assignments = useAssignment((state) => state.assignment);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-3">
      <SearchFilterNavbar />
      <div className="fixed right-10 bottom-10 w-64 h-12">
        <AssignmentModal />
      </div>

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
