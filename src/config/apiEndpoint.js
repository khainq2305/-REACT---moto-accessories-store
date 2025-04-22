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
      google: '/google', // ✅ thêm dòng này
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
      add: '/add',
      getById: (id) => `/${id}`,
      update: (id) => `/update/${id}`,
      softDelete: (id) => `/soft-delete/${id}`,
      listSoftDeleted: '/soft-delete/list',
      restore: (id) => `/restore/${id}`,
      restoreMultiple: '/restore/list',
      permanentDelete: (id) => `/delete/${id}`,
    },
    user: {
      base: `${API_URL}/admin/user`,
      list: '', 
      resetPassword: (id) => `/${id}/reset-password`,
      updateStatus: (id) => `/${id}/status`,
      delete: (id) => `/${id}`,
    },
    

    comment: {
      base: `${API_URL}/admin/comment`,
      list: '',
      create: '',
      delete: (id) => `/${id}`,
      markSpam: (id) => `/${id}/spam`,
      summary: '/summary',
      byProduct: (id) => `/product/${id}`,
      checkCommentExists: (userId, productId) => `/check?product_id=${productId}&idUser=${userId}`,
    },

    
  
  }
};

export const API_IMAGE = import.meta.env.VITE_API_IMAGE_URL || "http://localhost:3000/uploads";
export const DEFAULT_IMAGE = import.meta.env.VITE_DEFAULT_IMAGE || "http://localhost:3000/uploads/default.jpg";

export default API_ENDPOINT;

