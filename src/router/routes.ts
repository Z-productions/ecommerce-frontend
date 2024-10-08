import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'page/my-profile',
        name: 'ProfilePage',
        component: () => import('pages/user/ProfilePage.vue'),
      },
    ],
  },
  {
    path: '/security',
    component: () => import('layouts/SecurityLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/user/LoginPage.vue'),
      },

      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/user/RegisterPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
