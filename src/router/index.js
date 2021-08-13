import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Register2 from '../views/Register2.vue'

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  {
    path: '/register2',
    name: 'Register2',
    component: Register2,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
