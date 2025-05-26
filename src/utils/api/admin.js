// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // change this to your backend URL
  withCredentials: true, // if you're using cookies/auth sessions
});

export const getAllCompanies = () => API.get("/api/v1/admin/all-companies");
export const getCompanyById = (id) => API.get(`/api/v1/admin/company/${id}`);
export const blockCompany = (id,blockReason) =>   API.put(`/api/v1/admin/company/block-company/${id}`, { reason: blockReason });
export const unblockCompany = (id) => API.put(`/api/v1/admin/company/unblock-company/${id}`);
export const createCompany = (companyData) => API.post("/api/v1/admin/company/add", companyData);