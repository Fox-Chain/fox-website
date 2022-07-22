import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [

    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/Home' },
        { path: '/info', component: '@/pages/Info' },
        { path: '/ecosystem', component: '@/pages/Ecosystem' },
        { path: '/developers', component: '@/pages/Developers' },
        { path: '/developc', component: '@/pages/DevelopC' },
      ],
    },

  ],
  proxy:{
     '/api': {
      target: 'http://localhost:8972',
      changeOrigin: true,
      cookieDomainRewrite: 'localhost',
    },
  },
  fastRefresh: {},
  title: 'Fox Tech',
  history: {
    type: 'hash'
  }
});
