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
import { ClassForm } from "../class/ClassForm";

export function ClassModal() {
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
          Add Class
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] lg:max-h-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {edit.isEdit ? "Edit Class" : "Add Class"}
          </DialogTitle>
          <DialogDescription>
            {edit.isEdit
              ? "Edit your class and update"
              : "Create a new class for your students."}
          </DialogDescription>
        </DialogHeader>
        <ClassForm />
      </DialogContent>
    </Dialog>
  );
}
