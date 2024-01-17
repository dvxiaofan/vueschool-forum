import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
import sourceData from '@/data.json'
import Forum from '@/pages/Forum.vue'
import Category from '@/pages/Category.vue'
import Profile from '@/pages/Profile.vue'
import ThreadCreate from '@/pages/ThreadCreate.vue'
import ThreadEdit from '@/pages/ThreadEdit.vue'
import { findById } from '@/helpers'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/me',
    component: Profile,
    name: 'Profile',
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/me/edit',
    component: Profile,
    name: 'ProfileEdit',
    props: { edit: true }
  },
  {
    path: '/category/:id',
    component: Category,
    name: 'Category',
    props: true
  },
  {
    path: '/forum/:id',
    component: Forum,
    name: 'Forum',
    props: true
  },
  {
    path: '/thread/:id',
    component: ThreadShow,
    name: 'ThreadShow',
    props: true
    // beforeEnter (to, from, next) {
    //   // check if thread exists
    //   const threadExists = findById(sourceData.threads, to.params.id)
    //   // if exists continue
    //   if (threadExists) {
    //     return next()
    //   } else {
    //     // else redirect to not found
    //     next({
    //       name: 'NotFound',
    //       params: { pathMatch: to.path.substring(1).split('/') },
    //       // preserve existing query and hash
    //       query: to.query,
    //       hash: to.hash
    //     })
    //   }
    // }
  },
  {
    path: '/forum/:forumId/thread/create',
    component: ThreadCreate,
    name: 'ThreadCreate',
    props: true
  },
  {
    path: '/thread/:id/edit',
    component: ThreadEdit,
    name: 'ThreadEdit',
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    name: 'NotFound'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) {
      scroll.top = 0
    }
    if (to.meta.smoothScroll) {
      scroll.behavior = 'smooth'
    }
    return scroll
  }
})
