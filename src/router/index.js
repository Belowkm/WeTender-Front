import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
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
      path: '/home',
      name: 'home-2',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),

      children: [
        {
          path: '/dashboard/town_gov',
          name: 'town_gov',
          component: () => import('../components/town_gov/index.vue'),
          children: [
            {
              path: '/dashboard/town_gov/table',
              name: 'town_table',
              component: () => import('../components/town_gov/table.vue')
            }]
        },
        {
          path: '/dashboard/county_gov',
          name: 'county_gov',
          component: () => import('../components/dashboards/county_gov.vue')
        },
        {
          path: '/dashboard/enterprise',
          name: 'enterprise',
          component: () => import('../components/dashboards/enterprise.vue')
        },
        {
          path: '/dashboard/',
          name: 'none',
          component: () => import('../components/dashboards/none.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Error
    }
  ]
})

export default router