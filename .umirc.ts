import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/info', component: '@/pages/Info' },
    { path: '/ecosystem', component: '@/pages/Ecosystem' },
    { path: '/developers', component: '@/pages/Developers' },
    { path: '/developc', component: '@/pages/DevelopC' },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/Home' },
      ],
    },
    
  ],
  fastRefresh: {},
  title: 'Fox Tech',
});
