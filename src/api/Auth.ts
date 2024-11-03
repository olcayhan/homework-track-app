import axios from "axios";

const API_ENDPOINT = "/api/Auth/";
export const register = async (data: any) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const login = async (data: any) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/login`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};
