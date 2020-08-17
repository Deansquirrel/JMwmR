import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', exact: true, redirect: '/message' },
    { path: '/table', exact: true, component: '@/pages/index' },
    { path: '/message', exact: true, component: '@/demo/PageSocket' },
  ],
});
