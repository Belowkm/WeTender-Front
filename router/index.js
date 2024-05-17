import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Login from '../views/login.vue'
//import Register from '../views/register.vue'
import Error from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/home',
      name:'home-2',
      component: HomeView
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },

      /// path:'/register',
      /// name:'register',
      /// component: Register

    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Error
    }
  ]
})
