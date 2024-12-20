import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useModal from "@/hooks/useModal";
import { useEffect } from "react";
import { CustomFormField } from "../CustomFormField";
import { useCourseForm } from "@/hooks/useCourseForm";
import { courseFormFields } from "@/data/Course";

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
  const { closeModal, mode, id } = useModal();
  const { course, updateMutation, createMutation } = useCourseForm(
    mode === "edit" ? id : null
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      imagePath: "",
    },
  });

  useEffect(() => {
    if (course) form.reset(course.data);
  }, [course, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (mode === "edit") {
      console.log(course);
      updateMutation.mutate({ ...course.data, ...values });
    } else {
      createMutation.mutate(values);
    }
    closeModal();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {courseFormFields.map((field) => (
          <CustomFormField key={field.name} control={form.control} {...field} />
        ))}
        <Button disabled={createMutation.isPending} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
