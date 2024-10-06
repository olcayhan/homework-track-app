import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { FileIcon } from "react-file-icon";
import { Assignment } from "@/types/Assignment";
import useModal from "@/hooks/useModal";
import { Pen, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../ui/alert-dialog";
import useAssignment from "@/hooks/useAssignment";

const AssignmentItem = ({ assignment }: { assignment: Assignment }) => {
  const { setOpen, isEditing } = useModal();
  const { deleteAssignment } = useAssignment();
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
      <CardFooter className="justify-end gap-3">
        <Button
          variant="outline"
          onClick={() => {
            isEditing(true, assignment.id);
            setOpen(true);
          }}
        >
          <Pen className="mr-2 w-4 h-4" />
          Edit
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="text-white bg-red-700 hover:bg-red-800">
              <Trash className="mr-2 w-4 h-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteAssignment(assignment.id);
                }}
                className="bg-red-700 hover:bg-red-800"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default AssignmentItem;
