// Main
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

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
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),
      children: [
        {
          path: 'town_gov',
          name: 'town_gov',
          component: () => import('../components/town_gov/index.vue'),
          children: [
            {
              path: '',
              name: 'town_gov_home',
              component: () => import('../components/town_gov/overview.vue'),
            },
            {
              path: 'overview',
              name: 'town_overview',
              component: () => import('../components/town_gov/overview.vue'),
            },
            {
              path: 'project',
              name: 'town_project',
              component: () => import('../components/town_gov/project.vue'),
            },
            {
              path: 'budget',
              name: 'town_budget',
              component: () => import('../components/town_gov/budget.vue'),
            },
            ////{
            ///  path: 'contract',
            ///  name: 'town_contract',
            ///  component: () => import('../components/town_gov/contract.vue')
            ////}
          ]
        },
        {
          path: 'enterprise',
          name: 'enterprise',
          component: () => import('../components/enterprise/index.vue'),
          children: [
            {
              path: '',
              name: 'enterprise_home',
              component: () => import('../components/enterprise/overview.vue'),
            },
            {
              path: 'overview',
              name: 'enterprise_overview',
              component: () => import('../components/enterprise/overview.vue'),
            },
            {
              path: 'project',
              name: 'enterprise_project',
              component: () => import('../components/enterprise/project.vue'),
            },
            {
              path: 'assets',
              name: 'enterprise_assets',
              component: () => import('../components/enterprise/Assets.vue'),
            },
            ////{
            ///  path: 'contract',
            ///  name: 'enterprise_contract',
            ///  component: () => import('../components/enterprise/contract.vue')
            ////}
          ]
        },
        {
          path: 'county_gov',
          name: 'county_gov',
          component: () => import('../components/county_gov/index.vue'),
          children: [
            {
              path: '',
              name: 'county_gov_home',
              component: () => import('../components/county_gov/overview.vue'),
            },
            {
              path: 'overview',
              name: 'county_overview',
              component: () => import('../components/county_gov/overview.vue'),
            },
            {
              path: 'project',
              name: 'county_project',
              component: () => import('../components/county_gov/project.vue'),
            },
            {
              path: 'budget',
              name: 'county_budget',
              component: () => import('../components/county_gov/budget.vue'),
            },
            {
              path: 'sub_gov',
              name: 'sub_gov',
              component: () => import('../components/county_gov/sub_gov.vue'),
            }
            ////{
            ///  path: 'contract',
            ///  name: 'county_contract',
            ///  component: () => import('../components/county_gov/contract.vue')
            ////}
          ]
        },
        {
          path: '',
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
      component: () => import('../views/404.vue')
    }
  ]
})

export default router