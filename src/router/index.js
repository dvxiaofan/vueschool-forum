import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import sourceData from '@/data.json'

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
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        return next()
      } else {
        // else redirect to not found
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    name: 'NotFound'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})