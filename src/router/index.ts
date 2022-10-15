import { createRouter, createWebHistory } from 'vue-router'
import home from '@/router/home'
import settings from '@/router/settings'

const DefaultView = () => import('@/views/DefaultView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: DefaultView,
      children: [
        ...home,
        ...settings,
        {
          path: '/:pathMatch(.*)*',
          redirect: '/home',
        },
      ],
    },
  ],
})

export default router
