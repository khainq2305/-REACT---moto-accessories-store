import API from './common/api';
import { API_ENDPOINT } from '../config/apiEndpoint';

export const checkoutService = {
  getProvinces: () =>
    API.get(`${API_ENDPOINT.client.checkout.base}${API_ENDPOINT.client.checkout.provinces}`),

  getDistricts: (provinceId) =>
    API.get(`${API_ENDPOINT.client.checkout.base}${API_ENDPOINT.client.checkout.districts}/${provinceId}`),

  getWards: (districtId) =>
    API.get(`${API_ENDPOINT.client.checkout.base}${API_ENDPOINT.client.checkout.wards}/${districtId}`),

  getAvailableServices: (to_district) =>
    API.post(`${API_ENDPOINT.client.checkout.base}${API_ENDPOINT.client.checkout.availableServices}`, {
      to_district,
    }),

  calculateFee: (payload) =>
    API.post(`${API_ENDPOINT.client.checkout.base}${API_ENDPOINT.client.checkout.calculateFee}`, payload),
};
