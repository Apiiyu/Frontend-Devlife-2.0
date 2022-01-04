import Vue from 'vue'
import VueRouter from 'vue-router'
import ProtectRoute from '@/utils/ProtectRoute'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    beforeEnter:ProtectRoute
  },
  
]

const router = new VueRouter({
  routes
})

export default router
