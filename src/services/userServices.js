import axios from 'axios';
import apiEndpoints from '../config/apiEndpoint';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000',
});

export const createUser = (formData) => {
  return api.post(apiEndpoints.user.list, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getUsers = (params) => {
  return api.get(apiEndpoints.user.list, { params });
};

export const resetUserPassword = (id) => {
  return api.patch(apiEndpoints.user.resetPassword(id));
};

export const updateUserStatus = (id, status) => {
  return api.patch(apiEndpoints.user.updateStatus(id), { status });
};

export const deleteUser = (id) => {
  return api.delete(apiEndpoints.user.delete(id));
};
