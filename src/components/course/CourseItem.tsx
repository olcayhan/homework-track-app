import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
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
import { CourseResponse } from "@/types/Course";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import { Role } from "@/types/Role";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { deleteCourse } from "@/api/Course";

const CourseItem = ({ course }: { course: CourseResponse }) => {
  const { openModal } = useModal();

  const handleDelete = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      console.log("Course deleted");
    },
  });

  const { role } = useAuth();
  return (
    <Card>
      <CardHeader className="relative">
        {role === Role.Teacher && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="absolute top-1 right-1"
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
                    onClick={() => openModal("edit", course.id)}
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
                          onClick={() => handleDelete.mutate(course.id)}
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
        )}

        {course.imagePath ? (
          <img
            className="h-60 w-60 object-contain"
            src={course.imagePath}
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
      <CardFooter>
        <div className="w-full space-y-2">
          <Button className="w-full" asChild>
            <Link to={`/course/${course.id}`}>Assignments</Link>
          </Button>
          {role === Role.Teacher && (
            <Button
              className="w-full bg-neutral-300 text-black hover:bg-neutral-400"
              asChild
            >
              <Link to={`/course/${course.id}/students`}>Students</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseItem;
