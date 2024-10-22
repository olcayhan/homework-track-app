import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "@/hooks/useModal";
import { Paperclip } from "lucide-react";
import FileUpload from "../FileUpload";
import { useState } from "react";
import { FileType } from "@/types/Assignment";

export function SubmitAssignModal() {
  const [files, setFiles] = useState<FileType[]>([]);
  const { open, setOpen, edit, isEditing } = useModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => {
            isEditing(false, null);
            setOpen(true);
          }}
        >
          <Paperclip className="w-4 h-4 mr-1" />
          Submit Assignment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px] lg:max-h-[700px] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {edit.isEdit ? "Edit Submission" : "Add Submission"}
          </DialogTitle>
          <DialogDescription>
            {edit.isEdit
              ? "Edit your submission and save it"
              : "Add your submission and send to teacher"}
          </DialogDescription>
        </DialogHeader>
        <div>
          <FileUpload
            value={files}
            onChange={(e) => {
              setFiles(e);
            }}
            multiple
          />
        </div>
        <DialogFooter>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
