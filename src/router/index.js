import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/registerpage',
      name: "RegisterPage",
      component: RegisterPage
    },
    {
      path: '/loginpage',
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: '/homepage',
      name: "HomePage",
      component: HomePage
    },
  ]
})

export default router
