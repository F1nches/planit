import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import SingleTrip from '@/views/SingleTrip'
import AddNewTrip from '@/views/AddNewTrip'
import Logout from '@/views/Logout'

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
      component: Register,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/singletrip',
      name: 'SingleTrip',
      component: SingleTrip,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addnewtrip',
      name: 'AddNewTrip',
      component: AddNewTrip,
      meta: {
        requiresAuth: true
      }
    },
  ]
})
