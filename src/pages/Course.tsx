import { Book } from "lucide-react";

import NotFound from "@/components/NotFound";
import { CourseModal } from "@/components/modals/CourseModal";
import useCourse from "@/hooks/useCourse";
import CourseItem from "@/components/course/CourseItem";

export default function Course() {
  const courses = useCourse((state) => state.course);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-3 gap-3">
      <CourseModal />
      {courses.length > 0 ? (
        <div className="w-full flex flex-row justify-start items-center flex-wrap gap-3">
          {courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <NotFound
          Icon={Book}
          title="No course found"
          description="You currently have no course."
        />
      )}
    </div>
  );
}
