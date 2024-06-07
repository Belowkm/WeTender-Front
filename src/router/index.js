import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Error from '../views/404.vue'
import Dashboard from '../views/dashboard.vue'

///Town_gov
import Town_gov from '../components/town_gov/index.vue'
import Town_gov_home from '../components/town_gov/overview.vue'
import Town_gov_overview from '../components/town_gov/overview.vue'
import Town_gov_project from '../components/town_gov/project.vue'
import Town_gov_budget from '../components/town_gov/budget.vue'

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
      component: Dashboard,
      children: [
        {

          path: '/dashboard/town_gov',
          name: 'town_gov',
          component: Town_gov,
          children: [
            {
              path: '/dashboard/town_gov/',
              name: 'town_gov_home',
              component: Town_gov_home
            },
            {
              path: '/dashboard/town_gov/overview',
              name: 'town_overview',
              component: Town_gov_overview
            },
            {
              path: '/dashboard/town_gov/project',
              name: 'town_project',
              component: Town_gov_project
            },
            {
              path: '/dashboard/town_gov/budget',
              name: 'town_budget',
              component: Town_gov_budget
            },
            ////{
            ///  path: '/dashboard/town_gov/contract',
            ///  name: 'town_contract',
            ///  component: () => import('../components/town_gov/contract.vue')
            ////}
          ]
        },
        {
          path: '/dashboard/enterprise',
          name: 'enterprise',
          component: () => import('../components/enterprise/index.vue'),
          children: [
            {
              path: '/dashboard/enterprise/overview',
              name: 'enterprise_overview',
              component: () => import('../components/enterprise/overview.vue')
            },
            {
              path: '/dashboard/enterprise/table',
              name: 'enterprise_table',
              component: () => import('../components/enterprise/table.vue')
            },
            {
              path: '/dashboard/enterprise/assets',
              name: 'enterprise_assets',
              component: () => import('../components/enterprise/Assets.vue')
            },
            ////{
            ///  path: '/dashboard/enterprise/contract',
            ///  name: 'enterprise_contract',
            ///  component: () => import('../components/enterprise/contract.vue')
            ////}
          ]
        },
        {
          path: '/dashboard/county_gov',
          name: 'county_gov',
          component: () => import('../components/dashboards/county_gov.vue')
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