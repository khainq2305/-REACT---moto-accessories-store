const API_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINT = {
  client: {
    product: {
      base: `${API_URL}/products`,
    },
    cart: {
      base: `${API_URL}/cart`,
      add: '/add',
      getByUser: '/user',
      updateQuantity: '/update',
      deleteItem: '',
      deleteMultiple: '/delete-multiple',
    },
    checkout: {
      base: `${API_URL}/ghn`,
      provinces: '/provinces',
      districts: '/districts',
      wards: '/wards',
      availableServices: '/available-services',
      calculateFee: '/fee',
    },
    order: {
      base: `${API_URL}/orders`,
      place: '/place',
      getByUser: '/user',
    },
    auth: {
      base: `${API_URL}`,
      login: '/login',
      register: '/register',
    }
  },

  admin: {
    order: {
      base: `${API_URL}/admin/orders`,
      list: '/list',
      cancel: '/:id/cancel',
      updateStatus: '/:id/update-status',
    },
    product: {
      base: `${API_URL}/admin/products`,
      list: '/list',
      add: '/add',
      deleteMultiple: '/delete-multiple',
      restore: '/restore',
      restoreMultiple: '/restore-multiple',
      permanentDelete: '/permanent',
      permanentDeleteMultiple: '/permanent-delete-multiple',
    },
    category: {
      base: `${API_URL}/admin/categories`,
      list: '/list',
    }
  }
};
const ADMIN_API_BASE_URL = "http://localhost:3000/admin";
const CLIENT_API_BASE_URL = "http://localhost:3000";

const apiEndpoints = {
  user: {
    list: `${ADMIN_API_BASE_URL}/user`,
    resetPassword: (id) => `${ADMIN_API_BASE_URL}/user/${id}/reset-password`,
    updateStatus: (id) => `${ADMIN_API_BASE_URL}/user/${id}/status`,
    delete: (id) => `${ADMIN_API_BASE_URL}/user/${id}`,
  },

  comment: {
    list: `${ADMIN_API_BASE_URL}/comment`,
    create: `${ADMIN_API_BASE_URL}/comment`,
    delete: (id) => `${ADMIN_API_BASE_URL}/comment/${id}`,
    markSpam: (id) => `${ADMIN_API_BASE_URL}/comment/${id}/spam`,
    summary: `${ADMIN_API_BASE_URL}/comment/summary`,
    byProduct: (id) => `${ADMIN_API_BASE_URL}/comment/product/${id}`,
  },

  product: {
    list: `${CLIENT_API_BASE_URL}/products`,
    home: `${CLIENT_API_BASE_URL}/home-products`,
    detail: (id) => `${CLIENT_API_BASE_URL}/products/${id}`, 
    search: `${CLIENT_API_BASE_URL}/products/search`,

  },
  category: {
    list: `${CLIENT_API_BASE_URL}/categories`,
  }


};

export default apiEndpoints;
