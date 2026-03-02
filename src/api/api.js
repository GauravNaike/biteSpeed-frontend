import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000, 
});

export const identifyContact = async (data) => {
  return await API.post("/identify", data);
};