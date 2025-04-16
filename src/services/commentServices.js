import axios from "axios";
import apiEndpoints from "../../src/config/apiEndpoint";

export const getCommentSummary = async () => {
  const response = await axios.get(apiEndpoints.comment.summary);
  return response.data;
};

export const getCommentsByProduct = async (productId) => {
  const response = await axios.get(apiEndpoints.comment.byProduct(productId));
  return response.data;
};
