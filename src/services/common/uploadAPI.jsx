// src/services/common/uploadAPI.js
import axios from "axios";

export const UploadAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ Gán token nếu có (giống file api.js)
UploadAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // ❌ KHÔNG set Content-Type (axios sẽ tự set `multipart/form-data` cho FormData)
  return config;
});
