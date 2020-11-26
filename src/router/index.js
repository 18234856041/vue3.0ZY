import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home/Home'
import Login from '../views/Login/Login'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
