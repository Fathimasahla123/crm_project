import axios from "axios";
import Cookies from "js-cookie";


const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  const token = Cookies.get("token");
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials, {
      withCredentials: true,
    });
    const token = response?.data?.token;
    if (token) {
      Cookies.set("token");
      return { success: true, user: response.data.user };
    } else {
      return { success: false, message: "Token missing in response" };
    }
  
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
  const token = Cookies.get("token");
  try {
    const response = await axios.get(`${API_URL}/users/profile`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    });
    return { success: true, data: response.data.data };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Unauthorized" };
  }
};

export const logoutUser = async () => {
  Cookies.remove("token"); 
  return Promise.resolve();
};
