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
        name: 'Dashboard',
        component: () => import('@/views/Home.vue'),
        beforeEnter:ProtectRoute
    },
    {
        path: '/absensi',
        name: 'Absensi',
        component: () => import('@/views/Absensi.vue'),
        beforeEnter:ProtectRoute
    },
    {
        path: '/jadwal',
        name: 'Jadwal',
        component: () => import('@/views/Jadwal.vue'),
        beforeEnter:ProtectRoute
    },
    {

        path: '/mapel',
        name: 'Mata Pelajaran',
        component: () => import('@/views/Mapel.vue'),
        beforeEnter:ProtectRoute
    },
    {
        path: '/siswa',
        name: 'Siswa',
        component: () => import('@/views/Siswa.vue'),
        beforeEnter:ProtectRoute

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
        component: () => import('@/views/Settings.vue'),
        beforeEnter:ProtectRoute
    },
  
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router
