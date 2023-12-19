import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const forumApp = createApp(App)
forumApp.component('NiceButton', {})
forumApp.use(router)

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(fileName => {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')

const forumApp2 = createApp(App)
forumApp2.component('NiceButton', {})
// forumApp.use(router)
forumApp2.mount('#app2')
