import { Book } from "lucide-react";

import NotFound from "@/components/NotFound";
import { CourseModal } from "@/components/modals/CourseModal";
import CourseItem from "@/components/course/CourseItem";
import SearchFilterNavbar from "@/components/SearchFilterNavbar";
import AttendCourseModal from "@/components/modals/AttendCourseModal";
import { Role } from "@/types/Role";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/api/Course";
import { CourseResponse } from "@/types/Course";

export default function Course() {
  const { role } = useAuth();

  const {
    isLoading,
    data: courses,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="relative w-full h-full flex flex-col justify-start items-start gap-3">
      <SearchFilterNavbar />
      <div className="fixed right-10 bottom-10 w-64 h-12">
        {role === Role.Student && <AttendCourseModal />}
        {role === Role.Teacher && <CourseModal />}
      </div>
      {courses && courses.length > 0 ? (
        <div className="w-full flex flex-row justify-start items-center flex-wrap gap-3 p-3">
          {courses.map((course: CourseResponse) => (
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
