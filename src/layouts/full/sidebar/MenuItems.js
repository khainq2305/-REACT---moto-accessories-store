
import { uniqueId } from 'lodash';


import {
   IconLayoutDashboard,
   IconPackage,
  IconPoint,
  IconUserCircle,
  IconShoppingCart,
  IconBasket,
  
  IconLogin,
  
  IconFileCheck,

   IconTable, 
  IconForms,
<<<<<<< HEAD
  IconPackage
=======
  IconListDetails,
  IconMessage2 
>>>>>>> c35abda ([ADMIN-UI] - Add UI components for Category)
} from '@tabler/icons-react';


const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Quản lý loại danh mục',
    icon: IconListDetails,
    href: '/category',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconPoint,
        href: '/category',
      },
      {
        id: uniqueId(),
        title: 'Thêm mới',
        icon: IconPoint,
        href: '/category/create',
      }
    ]
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
  {
    navlabel: true,
    subheader: 'Apps',
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUserCircle,
    href: 'https://modernize-react.adminmart.com/apps/ecommerce/',
    chip: 'Pro',
    children: [
     
    
     
=======
  {
    id: uniqueId(),
    title: 'Quản lý bình luận',
    icon: IconMessage2,
    href: '/comment',
    children: [
>>>>>>> c35abda ([ADMIN-UI] - Add UI components for Category)
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconPoint,
<<<<<<< HEAD
        href: '/Users/userlist',
      },
      {
        id: uniqueId(),
        title: 'Thêm Người Dùng',
        icon: IconPoint,
        href: '/Users/useradd',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Liên hệ',
    icon: IconPackage,
    href: 'https://modernize-react.adminmart.com/apps/ecommerce/',
    chip: 'Pro',
    children: [
     
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconPoint,
        href: '/contact/contact',
      },
    ],
  },
<<<<<<< HEAD
=======
=======
>>>>>>> 5483f35 (Quan ly san pham)
  // ✅ Thêm mục Quản lý sản phẩm
  {
    id: uniqueId(),
    title: 'Quản lý sản phẩm',
    icon: IconPackage, // Icon cho sản phẩm
    href: null,
    
    children: [
      {
        id: uniqueId(),
        title: "Danh sách sản phẩm",
        icon: IconPoint,
        href: "/products", // ✅ Đúng đường dẫn
      },
      
      {
        id: uniqueId(),
        title: 'Thêm mới sản phẩm',
        icon: IconPoint,
        href: '/products/add',
      },
    ],
  },
<<<<<<< HEAD
=======
=======
        href: '/comment'
      }
    ]
  },
>>>>>>> c35abda ([ADMIN-UI] - Add UI components for Category)

{
  id: uniqueId(),
  title: 'Quản lý đơn hàng',
  icon: IconShoppingCart, // Icon cho sản phẩm
  href: '#',
  children: [
    {
      id: uniqueId(),
      title: "Danh sách đơn hàng",
      icon: IconPoint,
      href: "/orders", 
    },
  ],
},
>>>>>>> 5483f35 (Quan ly san pham)

{
  id: uniqueId(),
  title: 'Quản lý đơn hàng',
  icon: IconShoppingCart, // Icon cho sản phẩm
  href: '#',
  children: [
    {
      id: uniqueId(),
      title: "Danh sách đơn hàng",
      icon: IconPoint,
      href: "/orders", 
    },
  ],
},

>>>>>>> 5483f35 (Quan ly san pham)
=======
>>>>>>> cdf9d17 (First commit)
  {
    id: uniqueId(),
    title: 'Tables',
    icon: IconTable,
    href: '/tables/basic-table',
  },
  {
    id: uniqueId(),
    title: 'Form Layouts',
    icon: IconForms,
    href: '/form-layouts',
  },
  
  {
    navlabel: true,
    subheader: 'Apps',
  },
  
  
  {
    id: uniqueId(),
    title: 'Invoice',
    icon: IconFileCheck,
    href: 'https://modernize-react.adminmart.com/apps/invoice/list',
    chip: 'Pro',
    children: [
      {
        id: uniqueId(),
        title: 'List',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/invoice/list',

        chip: 'Pro',
      },
      {
        id: uniqueId(),
        title: 'Details',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/invoice/detail/PineappleInc',

        chip: 'Pro',
      },
      {
        id: uniqueId(),
        title: 'Create',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/invoice/create',

        chip: 'Pro',
      },
      {
        id: uniqueId(),
        title: 'Edit',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/invoice/edit/PineappleInc',

        chip: 'Pro',
      },
    ],
  },


  
  
  
  
  


  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserCircle,
    href: '/auth/register',
  },
  


];

export default Menuitems;
