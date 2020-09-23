import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/assets/favicon.ico',
  exportStatic: {
    //   htmlSuffix: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  mock: {},
  routes: [
    { path: '/', exact: true, redirect: '/login' },
    {
      path: '/',
      component: '@/pages/Root',
      exact: false,
      routes: [
        {
          path: '/login',
          exact: true,
          component: '@/pages/login/login',
        },
        {
          path: '/management/',
          exact: false,
          component: '@/pages/management/Management',
          routes: [
            {
              path: '/management/welcome',
              exact: true,
              component: '@/pages/management/welcome/Welcome',
            },
          ],
        },
        //   {
        //     path: '/test',
        //     exact: true,
        //     component: '@/pages/test/test',
        //   },
      ],
    },
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
