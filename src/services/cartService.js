import API from './common/api';
import { API_ENDPOINT } from '../config/apiEndpoint';

export const cartService = {
  addToCart: (data) => {
    return API.post(`${API_ENDPOINT.client.cart.base}${API_ENDPOINT.client.cart.add}`, data);
  },
  getCartByUser: (idUser) => {
    return API.get(`${API_ENDPOINT.client.cart.base}${API_ENDPOINT.client.cart.getByUser}/${idUser}`);
  },
  updateQuantity: (id, quantity) => {
    return API.put(`${API_ENDPOINT.client.cart.base}${API_ENDPOINT.client.cart.updateQuantity}/${id}`, { quantity });
  },
  deleteItem: (id) => {
    return API.delete(`${API_ENDPOINT.client.cart.base}/${id}`);
  },
  deleteMultiple: (ids) => {
    return API.delete(`${API_ENDPOINT.client.cart.base}${API_ENDPOINT.client.cart.deleteMultiple}`, {
      data: { ids },
    });
  },
  
};
