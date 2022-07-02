import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home' },
    { path: '/info', component: '@/pages/Info' },
    { path: '/ecosystem', component: '@/pages/Ecosystem' },
    { path: '/develop', component: '@/pages/Develop' },
    { path: '/developc', component: '@/pages/DevelopC' },
  ],
  fastRefresh: {},
  title: 'Fox Tech',
});
