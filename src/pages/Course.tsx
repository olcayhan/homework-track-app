import { Book, Search } from "lucide-react";

import NotFound from "@/components/NotFound";
import { CourseModal } from "@/components/modals/CourseModal";
import useCourse from "@/hooks/useCourse";
import CourseItem from "@/components/course/CourseItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Course() {
  const courses = useCourse((state) => state.course);

  return (
    <div className="relative w-full h-full flex flex-col justify-start items-start gap-3">
      <div className="sticky bg-neutral-50 z-50 top-0 w-full flex gap-4 p-2 border-b-[1px] border-b-neutral-400">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search" type="text" className="flex-auto pl-8" />
        </div>
        <Button className="w-1/4">Filter</Button>
      </div>

      <div className="fixed right-10 bottom-10 w-64 h-12">
        <CourseModal />
      </div>
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
