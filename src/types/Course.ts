export type CourseRequest = {
  name: string;
  description: string;
  imagePath?: string;
  teacherId: number;
};

export interface CourseResponse extends CourseRequest {
  id: number;
  code: string;
  status: string;
}
