import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export type Assignment = {
  title: string;
  description: string;
  fileUpload: any[];
  expiredDate: Date;
};

const AssignmentItem = ({ assignment }: { assignment: Assignment }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <p>{assignment.title}</p>
          <p className="text-sm">
            Expired date: {assignment.expiredDate.toLocaleDateString("tr-TR")}
          </p>
        </CardTitle>
        <CardDescription
          dangerouslySetInnerHTML={{ __html: assignment.description }}
        ></CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 justify-start items-center flex-wrap">
        {assignment.fileUpload.map((file) => (
          <a
            key={file.url}
            className="bg-blue-500 px-2 py-1 font-semibold text-white"
            target="_blank"
            href={file.url}
          >
            {file.path}
          </a>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Edit</Button>
      </CardFooter>
    </Card>
  );
};

export default AssignmentItem;
