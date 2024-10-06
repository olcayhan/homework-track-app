import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "@/hooks/useModal";
import { Plus } from "lucide-react";
import { StudentForm } from "../student/StudentForm";

export function StudentModal() {
  const { open, setOpen, edit, isEditing } = useModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full"
          onClick={() => {
            isEditing(false, null);
            setOpen(true);
          }}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] lg:max-h-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {edit.isEdit ? "Edit Student" : "Add Student"}
          </DialogTitle>
          <DialogDescription>
            {edit.isEdit
              ? "Edit your student information and save it"
              : "Add your student and assign them to the assignment"}
          </DialogDescription>
        </DialogHeader>
        <StudentForm />
      </DialogContent>
    </Dialog>
  );
}
