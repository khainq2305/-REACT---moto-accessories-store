import API from '../services/common/api'; // ✅ import đúng instance đã có interceptor
import { API_ENDPOINT } from '../config/apiEndpoint';

// Sửa ở đây ✅
const base = API_ENDPOINT.client.auth.base;

export const registerUser = (data) => {
  return API.post(`${base}${API_ENDPOINT.client.auth.register}`, data);
};

export const loginUser = (data) => {
  return API.post(`${base}${API_ENDPOINT.client.auth.login}`, data);
};

export const googleLogin = (token) => {
  return API.post(`${base}${API_ENDPOINT.client.auth.google}`, { token });
};

export const authService = {
  registerUser,
  loginUser,
  googleLogin, // ✅ thêm vào đây
};

