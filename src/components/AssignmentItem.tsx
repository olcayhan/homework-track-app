import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { FileIcon } from "react-file-icon";
import { Assignment } from "@/types/Assignment";

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
            className="px-2 py-1 font-semibold text-white"
            target="_blank"
            href={file.url}
          >
            <div className="w-16 h-24">
              <FileIcon extension={file.path.split(".").pop()} />
              <p className="text-neutral-950 text-sm truncate hover:text-clip hover:text-wrap hover:overflow-visible">
                {file.path}
              </p>
            </div>
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
