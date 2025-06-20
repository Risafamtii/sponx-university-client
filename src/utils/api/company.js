import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Base URL only
  withCredentials: true,
});

export const eventService = {
  getAll: () => API.get("/api/v1/company/events/all-events"),
  getById: (id) => API.get(`/api/v1/company/events/${id}`),
};
