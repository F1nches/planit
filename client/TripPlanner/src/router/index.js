import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
