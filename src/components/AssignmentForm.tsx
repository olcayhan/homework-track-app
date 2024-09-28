"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import RichTextEditor from "./RichTextEditor";
import useAssignment from "@/hooks/useAssignment";
import useModal from "@/hooks/useModal";
import FileUpload from "./FileUpload";
import { useEffect } from "react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  expiredDate: z.date({
    required_error: "Expired Date is required.",
  }),
  fileUpload: z.array(
    z.object({ path: z.string(), size: z.number(), url: z.string() })
  ),
});

export function AssignmentForm() {
  const { addAssignment, editAssignment, assignment } = useAssignment();
  const { setOpen, edit } = useModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      fileUpload: [],
    },
  });

  useEffect(() => {
    if (edit.isEdit) {
      const selectedAssignment = assignment.find((item) => item.id === edit.id);
      form.reset({
        title: selectedAssignment?.title,
        description: selectedAssignment?.description,
        expiredDate: selectedAssignment?.expiredDate,
        fileUpload: selectedAssignment?.fileUpload,
      });
    }
  }, [edit.isEdit, edit.id, assignment, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (edit.isEdit && edit.id !== null) {
      editAssignment({ ...values, id: edit.id });
    } else {
      addAssignment({ ...values, id: Date.now() });
    }
    setOpen(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Assignment 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <RichTextEditor value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiredDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Expired Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fileUpload"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File Upload</FormLabel>
              <FormControl>
                <FileUpload value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
