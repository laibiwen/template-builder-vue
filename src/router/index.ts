import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'index',
          component: () => import('@/pages/index.vue')
        },
        {
          path: '/form-designer',
          name: 'form-designer',
          component: () => import('@/pages/form-designer.vue')
        }
      ]
    }
  ]
})

export default router
