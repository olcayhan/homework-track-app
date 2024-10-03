import { AssignmentModal } from "@/components/modals/AssignmentModal";
import AssignmentItem from "@/components/AssignmentItem";
import useAssignment from "@/hooks/useAssignment";

export default function Home() {
  const assignments = useAssignment((state) => state.assignment);
  return (
    <div className="w-full lg:w-3/4 h-full flex flex-col justify-start items-start p-3 gap-3">
      <AssignmentModal />
      {assignments.map((assignment) => (
        <AssignmentItem key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
}
