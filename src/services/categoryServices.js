import axios from "axios";
import apiEndpoints from "../config/apiEndpoint"; 


export const getAllCategories = () => {
  return axios.get(apiEndpoints.category.list);
};
