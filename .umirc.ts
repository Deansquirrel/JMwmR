import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/assets/favicon.ico',
  exportStatic: {
    //   htmlSuffix: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    { path: '/', exact: true, redirect: '/login' },

    {
      path: '/',
      component: '@/layouts/Root',
      exact: false,
      routes: [
        {
          path: '/login',
          exact: true,
          component: '@/pages/login/login',
        },
        {
          path: '/test',
          exact: true,
          component: '@/pages/test/test',
        },
      ],
    },

    // {
    //   path: '/login',
    //   component: '@/layouts/Common',
    //   routes: [
    //     {
    //       path: '/',
    //       exact: true,
    //       component: "@/pages/login/login"
    //     },
    //   ],

    //   // layou
    //   // component: '@/pages/login/login'
    //   // routes: [

    //   //   // ],
    // },
  ],

  // nodeModulesTransform: {
  //   type: 'none',
  // },
  // routes: [
  //   { path: '/', exact: true, redirect: '/login' },
  //   { path: '/login', exact: true, component: '@/pages/login/login' },
  //   // { path: '/message', exact: true, component: '@/demo/PageSocket' },
  // ],
});
