import axios from "axios";

const API_ENDPOINT = "/api/Course";
const id = localStorage.getItem("id");
const token = localStorage.getItem("token");

export const createCourse = async (payload: any) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/createCourseByTeacher/${id}`,
      payload.data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCourses = async () => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/getCourseByTeacher/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
