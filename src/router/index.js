import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/page/Home.vue';
import Products from '@/components/page/Products.vue';
import ProductDetails from '@/components/page/ProductDetails.vue';
import Cart from '@/components/page/Cart.vue';
import Checkout from '@/components/page/Checkout.vue';
import Orders from '@/components/page/Orders.vue';
import SignIn from '@/components/page/SignIn.vue';
import Dashboard from '@/components/page/Dashboard.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: ProductDetails,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
  },
  // 後台
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  // {
  //   path: '/products-management',
  //   name: 'product-management',
  //   component: () => import('@/pages/admin/ProductManagement.vue'),
  // },
  // {
  //   path: '/categories-management',
  //   name: 'categories-management',
  //   component: () => import('@/pages/admin/CategoryManagement.vue'),
  // },
  // {
  //   path: '/orders-management',
  //   name: 'order-management',
  //   component: () => import('@/pages/admin/OrderManagement.vue'),
  // },
  // {
  //   path: '/users-management',
  //   name: 'user-management',
  //   component: () => import('@/pages/admin/UserManagement.vue'),
  // },
  // 共用
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
