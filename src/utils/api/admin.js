// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Base URL only
  withCredentials: true,
});

export const companyService = {
  getAll: () => API.get("/api/v1/admin/companies/all-companies"),
  getById: (id) => API.get(`/api/v1/admin/companies/${id}`),
  block: (id,userId,reason) => API.put(`/api/v1/admin/companies/block-company/${id}/${userId}`, { reason }),
  unblock: (id, userId) => API.put(`/api/v1/admin/companies/unblock-company/${id}/${userId}`),
  create: (companyData) => API.post("/api/v1/admin/companies/add", companyData),
};

export const organizationService = {
  getAll: () => API.get("/api/v1/admin/organizations/all-organizations"),
  getById: (id) => API.get(`/api/v1/admin/organizations/${id}`),
  block: (id,userId,reason) => API.put(`/api/v1/admin/organizations/block-organization/${id}/${userId}`, { reason }),
  unblock: (id,userId) => API.put(`/api/v1/admin/organizations/unblock-organization/${id}/${userId}`),
  create: (companyData) => API.post("/api/v1/admin/organizations/add", companyData),
}

export const eventService = {
  getAll: () => API.get("/api/v1/admin/events/all-events")

}