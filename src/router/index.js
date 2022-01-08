import Vue from 'vue'
import VueRouter from 'vue-router'
// import ProtectRoute from '@/utils/ProtectRoute'

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
    name: 'Sign up',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    // beforeEnter:ProtectRoute
  },
  {
    path: '/absensi',
    name: 'Absensi',
    component: () => import('@/views/Absensi.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
