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
  const response = await API.get(API_ENDPOINT.comment.byProduct(productId));
  return response.data;
};
