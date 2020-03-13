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
        { path: 'hello', exact: true, component: '@/pages/management/hello' },
        { path: '*', component: "@/pages/404" },
      ],
    },
    { path: '/template', exact: true, component: '@/pages/template/index' },
    { path: '/*', component: "@/pages/404" },
  ],
});