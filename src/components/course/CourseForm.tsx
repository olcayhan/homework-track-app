import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import RichTextEditor from "../RichTextEditor";
import useModal from "@/hooks/useModal";
import { useEffect } from "react";
import ImageUpload from "../ImageUpload";
import useCourse from "@/hooks/useCourse";
import { useMutation } from "@tanstack/react-query";
import { createCourse } from "@/api/Course";
import useAuth from "@/hooks/useAuth";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  imagePath: z.string().optional(),
});

export function CourseForm() {
  const { editCourse } = useCourse();
  const { setOpen, edit } = useModal();
  const { id } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imagePath: "",
    },
  });

  const createMutation = useMutation({
    mutationFn: createCourse,
    onSuccess: (data: any) => {
      console.log(data);
      form.reset();
    },
    onError(error: any) {
      console.error(error);
    },
  });

  /*   useEffect(() => {
    if (edit.isEdit) {
      const selectedCourse = course.find((item) => item.id === edit.id);
      form.reset({
        name: selectedCourse?.name,
        description: selectedCourse?.description,
        imagePath: selectedCourse?.imageURL,
      });
    }
  }, [edit.isEdit, edit.id, course, form]); */

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (edit.isEdit && edit.id !== null) {
      editCourse({ ...values, id: edit.id });
    } else {
      id &&
        createMutation.mutate({
          id,
          data: { ...values, code: Date.now().toString(), teacherId: id },
        });
    }
    setOpen(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="imagePath"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageUpload value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Biology" {...field} />
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
        <Button disabled={createMutation.isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
