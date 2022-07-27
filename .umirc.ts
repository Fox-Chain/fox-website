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
        { path: '/Docs', component: '@/pages/Docs' },
        { path: '/developc', component: '@/pages/DevelopC' },
        { path: '/team', component: '@/pages/Team' },
      ],
    },

  ],
  proxy:{
     '/api': {
      // target: 'http://localhost:8972',
      target: 'https://fox.tech',
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
