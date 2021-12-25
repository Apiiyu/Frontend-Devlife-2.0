import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    component: () => import('@/views/Home.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
