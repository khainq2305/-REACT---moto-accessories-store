import { uniqueId } from 'lodash';
import {
  IconLayoutDashboard,
  IconPackage,
  IconUserCircle,
  IconShoppingCart,
  IconMessage2,
  IconList,
  IconPlus,
  IconPhone,
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
    href: '/admin/dashboard',
  },

  {
    navlabel: true,
    subheader: 'Apps',
  },
  {
    id: uniqueId(),
    title: 'Loại sản phẩm',
    icon: IconList,
    href: '/admin/category',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/category',
      },
      {
        id: uniqueId(),
        title: 'Thêm mới',
        icon: IconPlus,
        href: '/admin/category/create',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Người dùng',
    icon: IconUserCircle,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/users/userlist',
      },
      {
        id: uniqueId(),
        title: 'Thêm mới',
        icon: IconPlus,
        href: '/admin/users/useradd',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Bình luận',
    icon: IconMessage2,
    href: '/admin/comment',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/comment',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Liên hệ',
    icon: IconPhone,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/contact/contact',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Sản phẩm',
    icon: IconPackage,
    href: null,
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/products',
      },
      {
        id: uniqueId(),
        title: 'Thêm mới',
        icon: IconPlus,
        href: '/admin/products/add',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Đơn hàng',
    icon: IconShoppingCart,
    href: '#',
    children: [
      {
        id: uniqueId(),
        title: 'Danh sách',
        icon: IconList,
        href: '/admin/orders',
      },
    ],
  },
];

export default Menuitems;
