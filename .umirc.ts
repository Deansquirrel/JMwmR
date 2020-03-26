import { defineConfig } from 'umi';


export default defineConfig({
  favicon: '/favicon.ico',
  copy: [
    'assets',
  ],
  dynamicImport: {},
  routes: [
    { path: '/', exact: true, redirect: '/login' },
    {
      path: '/login',
      exact: true,
      component: '@/pages/login/login'
    },
    { path: '/management', exact: true, redirect: '/management/welcome' },
    {
      path: '/management',
      exact: false,
      component: '@/layouts/managementLayouts',
      routes: [
        {
          path: 'welcome',
          exact: true,
          component: '@/pages/management/welcome',
        },
        { path: 'record/add', exact: true, component: '@/pages/management/record/add' },
        { path: 'record/detail', exact: true, component: '@/pages/management/record/detailSearch' },
        { path: 'record/summary', exact: true, component: '@/pages/management/record/summarySearch' },
        { path: 'category/add', exact: true, component: '@/pages/management/category/add' },
        { path: 'category/list', exact: true, component: '@/pages/management/category/list' },
        { path: '*', component: "@/pages/404" },
      ],
    },
    {
      path: '/test',
      exact: false,
      component: '@/layouts/commonLayouts',
      routes: [
        {
          path: 'page1',
          exact: true,
          component: '@/pages/test/page1',
        },
        { path: 'pageDav', exact: true, component: '@/pages/test/pageDav' },
        { path: '*', component: "@/pages/404" },
      ],
    },
    { path: '/template', exact: true, component: '@/pages/template/index' },
    { path: '/*', component: "@/pages/404" },
  ],
});