import { CourseRequest, CourseResponse } from "@/types/Course";
import axios from "axios";

const getUserId = () => localStorage.getItem("id");
const getToken = () => localStorage.getItem("token");

const api = axios.create({
  baseURL: "/api/course/",
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export const createCourse = async (
  payload: Omit<CourseRequest, "teacherId">
): Promise<CourseResponse> => {
  try {
    const userId = getUserId();
    const response = await api.post("create/teacher/" + userId, payload);
    return response.data;
  } catch (error: unknown | any) {
    throw new Error(error);
  }
};

export const getCourses = async (): Promise<CourseResponse[]> => {
  try {
    const userId = getUserId();
    const response = await api.get("teacher/" + userId);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCourseById = async ({ queryKey }: any) => {
  try {
    const [_, id] = queryKey;
    const response = await api.get("course/" + id);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateCourse = async (payload: any) => {
  try {
    const response = await api.patch(
      "/course/update/" + payload.id,
      payload.data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteCourse = async (id: number) => {
  try {
    const response = await api.patch("/delete/" + id);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
