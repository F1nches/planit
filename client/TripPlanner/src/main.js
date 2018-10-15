// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import { store } from './store/store';

Vue.use(VueAxios, axios);

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
  firstDayOfWeek: 1
});

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // This route requires auth, check if logged in - if not logged in, redirect to login page
    if(!store.getters.loggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // This route requires auth, check if logged in - if not logged in, redirect to login page
    if(store.getters.loggedIn) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
