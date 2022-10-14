import { createRouter, createWebHistory } from 'vue-router'
import Default from '../views/Default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Default,
    },
  ],
})

export default router
