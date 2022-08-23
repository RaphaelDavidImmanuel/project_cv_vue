import { createRouter, createWebHistory } from 'vue-router'
import PersonalView from '../views/PersonalView.vue'
import FortoView from '../views/FortoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: PersonalView
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue')
    },
    {
      path: '/forto',
      name: 'forto',
      component: () => import('../views/FortoView.vue')
    }
  ]
})

export default router
