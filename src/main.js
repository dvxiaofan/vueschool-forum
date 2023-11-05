import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const forumApp = createApp(App)
forumApp.component('NiceButton', {})
forumApp.use(router)
forumApp.mount('#app')

const forumApp2 = createApp(App)
forumApp2.component('NiceButton', {})
// forumApp.use(router)
forumApp2.mount('#app2')
