import { AssignmentModal } from "@/components/modals/AssignmentModal";
import AssignmentItem from "@/components/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";
import { File } from "lucide-react";

export default function Home() {
  const assignments = useAssignment((state) => state.assignment);

  return (
    <div className="w-full lg:w-3/4 h-full flex flex-col justify-start items-start p-3 gap-3">
      <AssignmentModal />
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))
      ) : (
        <div className="flex flex-col justify-start items-center w-full p-8">
          <File className="w-16 h-16" />
          <h1 className="font-bold text-lg">No assignment found</h1>
          <p className="text-gray-500">You currently have no assignments.</p>
        </div>
      )}
    </div>
  );
}
