import axios from "axios";
import { API_ENDPOINT } from "../config/apiEndpoint";



export const getAllCategories = (params) => {
  return axios.get(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.list}`, { params });
};

export const AddCategories = (formData) => {
  return axios.post(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.add}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export const getCategoriesById = (id) => {
  return axios.get(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.getById(id)}`);
}

export const updateCategories = (id, formData) => {
  console.log("url cap nhat", `${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.update(id)}`)
  return axios.put(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.update(id)}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getSoftDeletedCategories = (params) => {
  return axios.get(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.listSoftDeleted}`, { params });
};


export const restoreCategories = (id) => {
  return axios.put(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.restore(id)}`);
}
export const deleteCategories = (id) => {
  return axios.put(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.softDelete(id)}`);
};
export const permanentDeleteCategories = (id) => {
  return axios.delete(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.permanentDelete(id)}`);
};
export const restoreMultipleCategories = (ids) => {
  return axios.put(`${API_ENDPOINT.admin.category.base}${API_ENDPOINT.admin.category.restoreMultiple}`, { ids });
};
export const categoriesService = {
  getAllCategories,
  AddCategories,
  updateCategories,
  getCategoriesById,
  getSoftDeletedCategories,
  restoreCategories,
  deleteCategories,
  permanentDeleteCategories,
  restoreMultipleCategories,
};
