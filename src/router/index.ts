import { createRouter, createWebHistory } from 'vue-router'
import LoginService from '@/service/login'

const loginService = new LoginService()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        needAuthenticate: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginPage.vue'),
      meta: {
        needAuthenticate: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuthenticate) {
    if (!loginService.isTokenExist()) {
      next({
        name: 'login'
      })
    }
  }
  next()
})

export default router
