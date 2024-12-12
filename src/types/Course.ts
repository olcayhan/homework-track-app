export type Course = {
  $id: string;
  code?: string;
  description: string;
  name: string;
  imagePath?: string;
  homeworks?: any;
  id: number;
  status: string;
  studentCourses?: any;
  teacherId?: number;
};
