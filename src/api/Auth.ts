import axios from "axios";

const api = axios.create({
  baseURL: "/api/Course/",
});

export const register = async (data: any) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const login = async (data: any) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
