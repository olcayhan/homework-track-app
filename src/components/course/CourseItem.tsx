import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import useModal from "@/hooks/useModal";
import { EllipsisVertical, Image, Pen, Trash } from "lucide-react";
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
import { Course } from "@/types/Course";
import useCourse from "@/hooks/useCourse";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useNavigate } from "react-router-dom";

const CourseItem = ({ course }: { course: Course }) => {
  const { setOpen, isEditing } = useModal();
  const navigate = useNavigate();
  const { deleteCourse } = useCourse();
  return (
    <Card className="cursor-pointer" onClick={() => navigate(`/course/${course.id}`)}>
      <CardHeader className="relative">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="absolute top-1 right-1"
              onClick={(e) => e.stopPropagation()}
            >
              <EllipsisVertical />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56" align="start">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Options</h4>
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    isEditing(true, course.id);
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
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          deleteCourse(course.id);
                        }}
                        className="bg-red-700 hover:bg-red-800"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        {course.imageURL ? (
          <img
            className="h-60 w-60 object-contain"
            src={course.imageURL}
            alt={course.name}
          />
        ) : (
          <Image className="h-60 w-60" />
        )}
        <CardTitle className="flex flex-row justify-between">
          <p>{course.name}</p>
        </CardTitle>
        <CardDescription
          dangerouslySetInnerHTML={{ __html: course.description }}
        ></CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CourseItem;
