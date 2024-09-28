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
import useModal from "@/hooks/useModal";

export function AssignmentModal() {
  const { open, setOpen, edit, isEditing } = useModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full"
          onClick={() => {
            isEditing(false, 0);
            setOpen(true);
          }}
        >
          Add Assignment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] lg:max-h-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {edit.isEdit ? "Edit Assignment" : "Add Assignment"}
          </DialogTitle>
          <DialogDescription>
            {edit.isEdit
              ? "Edit your assignment and update"
              : "Create a new assignment for your students."}
          </DialogDescription>
        </DialogHeader>
        <AssignmentForm />
      </DialogContent>
    </Dialog>
  );
}
