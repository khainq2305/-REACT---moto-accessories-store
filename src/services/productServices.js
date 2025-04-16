import axios from "axios";
import apiEndpoints from "../config/apiEndpoint";

export const getAllProducts = async (params = {}) => {
  const response = await axios.get(apiEndpoints.product.list, { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(apiEndpoints.product.detail(id));
  return response.data;
};
export const getHomeProducts = async () => {
  const res = await axios.get(apiEndpoints.product.home);
  return res.data;
};

export const searchProducts = async (query) => {
  const res = await axios.get("http://localhost:3000/search", {
    params: { q: query }
  });
  return res.data;
};

