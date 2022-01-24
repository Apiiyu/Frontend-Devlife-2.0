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
    name: 'Sign Up',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: () => import('@/views/Home.vue'),
    // beforeEnter:ProtectRoute
  },
  {
    path: '/absensi',
    name: 'Absensi',
    component: () => import('@/views/Absensi.vue')
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    component: () => import('@/views/Jadwal.vue')
  },
  {
    path: '/guru',
    name: 'Guru',
    component: () => import('@/views/Mapel.vue')
  },
  {
    path: '/izin',
    name: 'Izin',
    component: () => import('@/views/Izin.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  },
  
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
