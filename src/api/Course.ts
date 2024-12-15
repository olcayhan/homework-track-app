import axios from "axios";

const API_ENDPOINT = "/api/Course";
const userId = localStorage.getItem("id");
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const createCourse = async (payload: any) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/createCourseByTeacher/${userId}`,
      payload.data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCourses = async () => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/getCoursesByTeacher/${userId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCourseById = async ({ queryKey }: any) => {
  try {
    const [_, id] = queryKey;
    console.log(id);
    const response = await axios.get(`${API_ENDPOINT}/getCourseBy/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateCourse = async (payload: any) => {
  try {
    const response = await axios.patch(
      `${API_ENDPOINT}/updateCourseBy/${payload.id}`,
      payload.data
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteCourse = async (id: number) => {
  try {
    const response = await axios.patch(
      `${API_ENDPOINT}/softDeleteCourseBy/${id}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
