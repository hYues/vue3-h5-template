import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const Layouts = () => import('@/layouts/index.vue');

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    name: 'redirect',
    component: Layouts,
    children: [
      {
        path: ':path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  if (to?.meta?.title) {
    document.title = to.meta.title as string;
  }

  next();
});

export default router;
