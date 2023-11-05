import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'

const routes = [
  {
    path: '/',
    component: PageHome,
    name: 'Home'
  },
  {
    path: '/thread/:id',
    component: PageThreadShow,
    name: 'ThreadShow',
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
