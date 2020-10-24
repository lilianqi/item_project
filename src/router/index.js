import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Hotelcopy from '../views/Hotelcopy.vue'
import layout from '../views/layout.vue'
import safe from '../views/safe.vue'
import  Caring from '../views/Caring.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path:'/hotelcopy',
    component:Hotelcopy
  },
  {
    path: '/layout',
    component: layout
  },
  {
    path: '/caring',
    component: Caring
  },
  {
    path: '/safe',
    component: safe
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
