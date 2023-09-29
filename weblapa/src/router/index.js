import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gubernators from '../Gubernators.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // path ir no app vue gubernators
      path: '/gubernators',
      // stto name ko velak izmanntot
      name: 'lapa',
      // importe no augsas gubernators
      component: Gubernators
    }
  ]
})

export default router
