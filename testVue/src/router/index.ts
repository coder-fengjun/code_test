import { createRouter, createWebHistory } from 'vue-router'
import CloudDesktop from '../views/CloudDesktop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cloud-desktop',
      component: CloudDesktop
    }
  ]
})

export default router