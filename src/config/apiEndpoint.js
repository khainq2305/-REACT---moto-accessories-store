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
