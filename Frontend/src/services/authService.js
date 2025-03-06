import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials, {
      withCredentials: true,
    });
    return { success: true, message: "Login successful" };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Error occurred",
    };
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData, {
      withCredentials: true,
    });
    return { success: true, message: "Signup successfull" };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Error",
    };
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`, {
      withCredentials: true,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unauthorized" };
  }
};

export const logoutUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials, {
      withCredentials: true,
    });
    return { success: true, message: "Logout successful" };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Error occurred",
    };
  }
};
