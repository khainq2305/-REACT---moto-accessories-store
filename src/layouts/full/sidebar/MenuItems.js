
import { uniqueId } from 'lodash';

import {
   IconLayoutDashboard,

  IconPoint,
  IconUserCircle,
  
  IconBasket,
  
  IconLogin,
  
  IconFileCheck,

   IconTable, 
  IconForms
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
    title: 'Ecommerce',
    icon: IconBasket,
    href: 'https://modernize-react.adminmart.com/apps/ecommerce/',
    chip: 'Pro',
    children: [
     
    
     
      {
        id: uniqueId(),
        title: 'Add Product',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/ecommerce/add-product',

        chip: 'Pro',
      },
      {
        id: uniqueId(),
        title: 'Edit Product',
        icon: IconPoint,
        href: 'https://modernize-react.adminmart.com/apps/ecommerce/edit-product',

        chip: 'Pro',
      },
    ],
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
