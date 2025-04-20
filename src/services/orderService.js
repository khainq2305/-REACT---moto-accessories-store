import API from '../services/common/api';
import { API_ENDPOINT } from '../config/apiEndpoint';

// ✅ ADMIN - QUẢN LÝ ĐƠN HÀNG
export const adminOrderService = {
  getOrders: (params) =>
    API.get(`${API_ENDPOINT.admin.order.base}${API_ENDPOINT.admin.order.list}`, { params }),

  getOrderById: (id) =>
    API.get(`${API_ENDPOINT.admin.order.base}/${id}`),

  cancelOrder: (id, reason) =>
    API.put(`${API_ENDPOINT.admin.order.base}/${id}/cancel`, { reason }),

  updateOrderStatus: (id, status) =>
    API.put(`${API_ENDPOINT.admin.order.base}/${id}/update-status`, { status }),
};

// ✅ CLIENT - ĐẶT HÀNG & XEM ĐƠN
// ✅ CLIENT - ĐẶT HÀNG & XEM ĐƠN
export const clientOrderService = {
  placeOrder: (data) =>
    API.post(`${API_ENDPOINT.client.order.base}${API_ENDPOINT.client.order.place}`, data),

  getOrdersByUser: (params) =>
    API.get(`${API_ENDPOINT.client.order.base}${API_ENDPOINT.client.order.getByUser}`, {
      params,
    }),
};
