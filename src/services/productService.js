// ✅ IMPORT axios đã cấu hình
import API from './common/api';
import { API_ENDPOINT } from '../config/apiEndpoint';
// 👉 Thêm sản phẩm mới (admin)
import { UploadAPI } from './common/uploadAPI';

// 👉 Gọi đúng base cho Admin và Client
const adminBase = API_ENDPOINT.admin.product.base;
const clientBase = API_ENDPOINT.client.product.base;

// 👉 Lấy danh sách sản phẩm (admin)
export const getProductList = (filters = {}) => {
  return API.get(`${adminBase}${API_ENDPOINT.admin.product.list}`, { params: filters });
};


export const addProduct = (formData) => {
  return UploadAPI.post(`${adminBase}${API_ENDPOINT.admin.product.add}`, formData);
};

export const updateProduct = (id, formData) => {
  return UploadAPI.put(`${adminBase}/${id}`, formData); // ✅ CHUẨN
};


// 👉 Lấy danh sách sản phẩm (client)
export const getAllProducts = (params = {}) => {
  return API.get(`${clientBase}`, { params });
};

// 👉 Lấy chi tiết sản phẩm (client)
export const getProductById = (id) => {
  return API.get(`${clientBase}/${id}`);
};

export const getFeaturedProducts = () => {
  return API.get(`${clientBase}/featured`);
};

// 👉 Xóa sản phẩm
export const deleteProduct = (id) => {
  return API.delete(`${adminBase}/delete/${id}`);
};

export const deleteMultipleProducts = (ids) => {
  return API.delete(`${adminBase}${API_ENDPOINT.admin.product.deleteMultiple}`, { data: { ids } });
};

export const restoreProduct = (id) => {
  return API.patch(`${adminBase}${API_ENDPOINT.admin.product.restore}/${id}`);
};

export const restoreMultipleProducts = (ids) => {
  return API.patch(`${adminBase}${API_ENDPOINT.admin.product.restoreMultiple}`, { ids });
};

export const permanentDeleteProduct = (id) => {
  return API.delete(`${adminBase}${API_ENDPOINT.admin.product.permanentDelete}/${id}`);
};

export const permanentDeleteMultipleProducts = (ids) => {
  return API.delete(`${adminBase}${API_ENDPOINT.admin.product.permanentDeleteMultiple}`, { data: { ids } });
};

export const getCategories = (params = {}) => {
  return API.get(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.list}`, {
    params,
  });
};


// ✅ Export chuẩn
export const productService = {
  getProductList,
  getProductById,
  addProduct,
  updateProduct, // 👈 THÊM
  deleteProduct,
  deleteMultipleProducts,
  restoreProduct,
  restoreMultipleProducts,
  permanentDeleteProduct,
  permanentDeleteMultipleProducts,
  getCategories,
  getFeaturedProducts,
};
