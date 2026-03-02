import axios from "axios";

const API = axios.create({
  baseURL: "https://bitespeed-backend-e8s5.onrender.com", 
});

export const identifyContact = (data) => API.post("/identify", data);