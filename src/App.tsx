import AssignmentItem from "./components/AssignmentItem";
import { AssignmentModal } from "./components/modals/AssignmentModal";
import useAssignment from "./hooks/useAssignment";

function App() {
  const assignments = useAssignment((state) => state.assignment);
  return (
    <div className="w-full h-screen flex flex-row justify-center items-start p-6">
      <div className="w-full lg:w-3/4 h-full flex flex-col justify-start items-start p-3 gap-3">
        <AssignmentModal />
        {assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}

export default App;
