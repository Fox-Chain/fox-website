import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/info', component: '@/pages/Info' },
  ],
  fastRefresh: {},
  title: 'Fox',
});
