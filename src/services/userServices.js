// src/services/userServices.js

import apiEndpoints from '../config/apiEndpoint';
import API from './common/api';
import { UploadAPI } from './common/uploadAPI'; // ✅ Có interceptor riêng cho multipart

export const createUser = (formData) => {
  const hasImage = formData instanceof FormData && formData.has("avatar");
  const client = hasImage ? UploadAPI : API;

  const url = apiEndpoints.admin.user.base + apiEndpoints.admin.user.list;

  return client.post(url, formData, {
    headers: hasImage ? { "Content-Type": "multipart/form-data" } : {},
  });
};


export const getUsers = (params) => {
  const url = apiEndpoints.admin.user.base + apiEndpoints.admin.user.list; 
  return API.get(url, { params });
};



export const resetUserPassword = (id) => {
  return API.patch(apiEndpoints.user.resetPassword(id));
};
export const updateUserStatus = (id, data) => {
  const url = apiEndpoints.admin.user.base + apiEndpoints.admin.user.updateStatus(id);
  return API.patch(url, data); // gửi nguyên object { status, reason }
};


export const deleteUser = (id) => {
  return API.delete(apiEndpoints.user.delete(id));
};
