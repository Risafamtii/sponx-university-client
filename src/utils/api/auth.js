import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // change this to your backend URL
  withCredentials: true, // if you're using cookies/auth sessions
});

export const loginUser = (credentials) => API.post("/api/v1/auth/login", credentials);
export const signup = (finalPayload) => API.post("/api/v1/auth/signup", finalPayload);