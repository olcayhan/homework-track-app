import { createCourse, getCourseById, updateCourse } from "@/api/Course";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCourseForm = (editId: number | null) => {
  const { data: course } = useQuery({
    queryKey: ["course", editId],
    queryFn: getCourseById,
    enabled: editId ? true : false,
  });

  const createMutation = useMutation({
    mutationFn: createCourse,
    onSuccess: (data: any) => {
      console.log(data);
    },
    onError(error: any) {
      console.error(error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCourse,
    onSuccess: (data: any) => {
      console.log(data);
    },
    onError(error: any) {
      console.error(error);
    },
  });

  return { createMutation, updateMutation, course };
};
