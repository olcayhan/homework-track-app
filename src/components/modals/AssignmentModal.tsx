import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AssignmentForm } from "../assignment/AssignmentForm";
import useModal from "@/hooks/useModal";
import { Plus } from "lucide-react";

export function AssignmentModal() {
  const { open, setOpen, edit, isEditing } = useModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full h-full"
          onClick={() => {
            isEditing(false, null);
            setOpen(true);
          }}
        >
          <Plus className="w-4 h-4 mr-1" />
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
