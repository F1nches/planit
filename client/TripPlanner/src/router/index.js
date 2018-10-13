import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import SingleTrip from '@/views/SingleTrip'
import AddNewTrip from '@/views/AddNewTrip'

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
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/singletrip',
      name: 'SingleTrip',
      component: SingleTrip
    },
    {
      path: '/addnewtrip',
      name: 'AddNewTrip',
      component: AddNewTrip
    },
  ]
})
