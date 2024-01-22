import { createStore } from 'vuex'
// import sourceData from '@/data.json'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default createStore({
  state: {
    // ...sourceData,
    categories: [],
    forums: [],
    posts: [],
    threads: [],
    users: [],
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters,
  mutations,
  actions
})
