import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/info', component: '@/pages/Info' },
    { path: '/portal', component: '@/pages/Testnet' },
    { path: '/bridge', component: '@/pages/Bridge' },
  ],
  fastRefresh: {},
  title: 'Fox',
});
