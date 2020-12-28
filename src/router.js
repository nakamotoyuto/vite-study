import { createRouter, createWebHistory } from 'vue-router';

import About from './views/About.vue'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'

export const router =  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    }
  ]
})

export default router