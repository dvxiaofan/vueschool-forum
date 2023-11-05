import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: PageHome, name: 'Home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const forumApp = createApp(App)
forumApp.component('NiceButton', {})
forumApp.use(router)
forumApp.mount('#app')

const forumApp2 = createApp(App)
forumApp2.component('NiceButton', {})
// forumApp.use(router)
forumApp2.mount('#app2')
