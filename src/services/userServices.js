// src/services/userServices.js

import apiEndpoints from '../config/apiEndpoint';
import API from './common/api';
import { UploadAPI } from './common/uploadAPI'; // ✅ Có interceptor riêng cho multipart

// ✅ Nếu có file (ảnh): dùng UploadAPI
export const createUser = (formData) => {
  const hasImage = formData instanceof FormData && formData.has('avatar');
  const client = hasImage ? UploadAPI : API;

  return client.post(apiEndpoints.user.list, formData, {
    headers: hasImage ? { 'Content-Type': 'multipart/form-data' } : {},
  });
};

export const getUsers = (params) => {
  return API.get(apiEndpoints.user.list, { params });
};

export const resetUserPassword = (id) => {
  return API.patch(apiEndpoints.user.resetPassword(id));
};

export const updateUserStatus = (id, status) => {
  return API.patch(apiEndpoints.user.updateStatus(id), { status });
};

export const deleteUser = (id) => {
  return API.delete(apiEndpoints.user.delete(id));
};
