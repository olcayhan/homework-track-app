import AssignmentItem, { Assignment } from "./components/AssignmentItem";

function App() {
  const assignments: Assignment[] = [
    {
      id: "1",
      title: "Assignment 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta repudiandae quisquam asperiores, quibusdam repellendus a vero soluta ullam qui sit illo quae suscipit rem veritatis error? Magni at necessitatibus laboriosam iusto tenetur reprehenderit, veniam libero velit porro sequi? At officiis labore laborum temporibus optio architecto ipsum amet odit placeat.",
      images: [
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      ],
      expiredDate: "2021-12-31",
      status: "active",
    },
    {
      id: "2",
      title: "Assignment 2",
      description: "Assignment 2 Description",
      images: [],
      expiredDate: "2021-12-31",
      status: "active",
    },
    {
      id: "3",
      title: "Assignment 3",
      description: "Assignment 3 Description",
      images: [],
      expiredDate: "2021-12-31",
      status: "active",
    },
    {
      id: "4",
      title: "Assignment 4",
      description: "Assignment 4 Description",
      images: [],
      expiredDate: "2021-12-31",
      status: "active",
    },
    {
      id: "5",
      title: "Assignment 5",
      description: "Assignment 5 Description",
      images: [],
      expiredDate: "2021-12-31",
      status: "active",
    },
    {
      id: "6",
      title: "Assignment 6",
      description: "Assignment 6 Description",
      images: [],
      expiredDate: "2021-12-31",
      status: "active",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-row justify-center items-start p-6">
      <div className="w-full lg:w-3/4 h-full flex flex-col justify-start items-start p-3 gap-3">
        {assignments.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
}

export default App;
