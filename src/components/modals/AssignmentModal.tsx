import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AssignmentForm } from "../AssignmentForm";

export function AssignmentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Add Assignment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Add Assignment</DialogTitle>
          <DialogDescription>
            Create a new assignment for your students.
          </DialogDescription>
        </DialogHeader>
        <AssignmentForm />
      </DialogContent>
    </Dialog>
  );
}
