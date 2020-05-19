import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favicon.ico',
  copy: ['assets'],
  dynamicImport: {},
  routes: [
    { path: '/', exact: true, redirect: '/login' },
    { path: '/login', exact: true, component: '@/pages/login/login' },
    { path: '/management', exact: true, redirect: '/management/welcome' },
    {
      path: '/management',
      exact: false,
      component: '@/layouts/common',
      routes: [
        {
          path: 'welcome',
          exact: true,
          component: '@/pages/management/welcome',
        },
        // { path: 'record/add', exact: true, component: '@/pages/management/record/add' },
        // { path: 'record/detail', exact: true, component: '@/pages/management/record/detailSearch' },
        // { path: 'record/summary', exact: true, component: '@/pages/management/record/summarySearch' },
        // { path: 'category/add', exact: true, component: '@/pages/management/category/add' },
        // { path: 'category/list', exact: true, component: '@/pages/management/category/list' },
        // { path: '*', component: '@/pages/404' },
      ],
    },
  ],
});
