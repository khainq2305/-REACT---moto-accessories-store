import axios from 'axios';
import { API_ENDPOINT } from '../config/apiEndpoint';

// 👉 Gọi đúng base cho Admin và Client
const adminBase = API_ENDPOINT.admin.product.base;
const clientBase = API_ENDPOINT.client.product.base;

// 👉 Lấy danh sách sản phẩm (admin)
export const getProductList = (filters = {}) => {
  return axios.get(`${adminBase}${API_ENDPOINT.admin.product.list}`, { params: filters });
};
// 👉 Thêm sản phẩm mới (admin)
export const addProduct = (formData) => {
  return axios.post(`${adminBase}${API_ENDPOINT.admin.product.add}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 👉 Lấy chi tiết sản phẩm (client)
export const getProductById = (id) => {
  return axios.get(`${clientBase}/${id}`);
};

// 👉 Admin - Xoá, khôi phục, xoá vĩnh viễn sản phẩm
export const deleteProduct = (id) => {
  return axios.delete(`${adminBase}/delete/${id}`);
};

export const deleteMultipleProducts = (ids) => {
  return axios.delete(`${adminBase}${API_ENDPOINT.admin.product.deleteMultiple}`, { data: { ids } });
};

export const restoreProduct = (id) => {
  return axios.patch(`${adminBase}${API_ENDPOINT.admin.product.restore}/${id}`);
};

export const restoreMultipleProducts = (ids) => {
  return axios.patch(`${adminBase}${API_ENDPOINT.admin.product.restoreMultiple}`, { ids });
};

export const permanentDeleteProduct = (id) => {
  return axios.delete(`${adminBase}${API_ENDPOINT.admin.product.permanentDelete}/${id}`);
};

export const permanentDeleteMultipleProducts = (ids) => {
  return axios.delete(`${adminBase}${API_ENDPOINT.admin.product.permanentDeleteMultiple}`, { data: { ids } });
};

// 👉 Lấy danh mục (admin)
export const getCategories = () => {
  return axios.get(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.list}`, {
    params: { status: 1 },
  });
};

// ✅ Export service chuẩn
export const productService = {
  getProductList,
  getProductById,
  deleteProduct,
  deleteMultipleProducts,
  getCategories,
  restoreProduct,
  restoreMultipleProducts,
  permanentDeleteProduct,
  permanentDeleteMultipleProducts,
  addProduct, // 👈 thêm dòng này vào!
};
