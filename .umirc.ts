import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/dashboard', component: '@/pages/Dashboard' },
  ],
  fastRefresh: {},
  title: 'HAYEK - Stablecoin & Forex Protocol',
});
