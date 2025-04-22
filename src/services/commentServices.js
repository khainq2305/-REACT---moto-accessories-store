// src/services/commentServices.js

import API from './common/api'; // ✅ dùng instance có interceptor
import API_ENDPOINT from "../config/apiEndpoint"; // ✅ dùng default export



// ✅ Lấy tổng quan đánh giá
export const getCommentSummary = async () => {
  const response = await API.get(API_ENDPOINT.admin.comment.base + API_ENDPOINT.admin.comment.summary);

  return response.data;
};

// ✅ Lấy đánh giá theo sản phẩm
export const getCommentsByProduct = async (productId) => {
  const url = API_ENDPOINT.admin.comment.base + API_ENDPOINT.admin.comment.byProduct(productId);
  const response = await API.get(url);
  return response.data;
};

export const createComment = async (commentData) => {
  const { data } = await API.post(API_ENDPOINT.admin.comment.base + API_ENDPOINT.admin.comment.create, commentData);
  return data;
};
export const getCommentsByProductAndUser = async (productId, userId) => {
    return axios.get(`${API_URL}/comments`, {
      params: { productId, userId },
    });
  }

export const commentServices = {
  createComment,
  getCommentsByProductAndUser,
  getCommentsByProduct
}