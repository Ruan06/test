import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home, meta: {headShow: true} },
    { path: '/login', name: 'Login', component: Login, meta: {headShow: false} }
  ]
})
