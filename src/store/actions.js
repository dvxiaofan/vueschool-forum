import firebase from 'firebase'
import { findById } from '@/helpers'

export default {
  createPost ({ commit, state }, post) {
    post.id = 'ggg' + Math.random()
    post.userId = state.authId
    post.publishedAt = Math.floor(Date.now() / 1000)
    commit('setItem', { resource: 'posts', item: post })
    commit('appendPostToThread', { parentId: post.threadId, childId: post.id })
    commit('appendContributorToThread', { parentId: post.threadId, childId: post.userId })
  },
  async createThread ({ commit, state, dispatch }, { text, title, forumId }) {
    const threadId = 'ggg' + Math.random()
    const userId = state.authId
    const publishedAt = Math.floor(Date.now() / 1000)
    const thread = { forumId, publishedAt, title, userId, threadId }
    commit('setItem', { resource: 'threads', item: thread })
    commit('appendThreadToForum', { parentId: forumId, childId: threadId })
    commit('appendThreadToUser', { parentId: userId, childId: threadId })
    dispatch('createPost', { text, threadId })
    return findById(state.threads, threadId)
  },
  updateUser ({ commit }, user) {
    commit('setItem', { resource: 'users', item: user })
  },
  fetchCategory: ({ dispatch }, { id }) => dispatch('fetchItem', { resource: 'categories', id, emoji: '🏷' }),
  fetchForum: ({ dispatch }, { id }) => dispatch('fetchItem', { resource: 'forums', id, emoji: '🌧' }),
  fetchThread: ({ dispatch }, { id }) => dispatch('fetchItem', { resource: 'threads', id, emoji: '📄' }),
  fetchPost: ({ dispatch }, { id }) => dispatch('fetchItem', { resource: 'posts', id, emoji: '💬' }),
  fetchUser: ({ dispatch }, { id }) => dispatch('fetchItem', { resource: 'users', id, emoji: '🙋‍♂️' }),
  fetchAllCategories ({ commit }) {
    console.log('🔥', '🏷', 'all')
    return new Promise((resolve) => {
      firebase.firestore().collection('categories').onSnapshot((querySnapshot) => {
        const categories = querySnapshot.docs?.map(doc => {
          const item = { id: doc.id, ...doc.data() }
          commit('setItem', { resource: 'categories', item })
          return item
        })
        resolve(categories)
      })
    })
  },
  fetchCategories: ({ dispatch }, { ids }) => dispatch('fetchItems', { resource: 'categories', ids, emoji: '🏷' }),
  fetchForums: ({ dispatch }, { ids }) => dispatch('fetchItems', { resource: 'forums', ids, emoji: '🌧' }),
  fetchThreads: ({ dispatch }, { ids }) => dispatch('fetchItems', { resource: 'threads', ids, emoji: '📄' }),
  fetchPosts: ({ dispatch }, { ids }) => dispatch('fetchItems', { resource: 'posts', ids, emoji: '💬' }),
  fetchUsers: ({ dispatch }, { ids }) => dispatch('fetchItems', { resource: 'users', ids, emoji: '🙋‍♂️' }),
  fetchItem ({ state, commit }, { id, emoji, resource }) {
    console.log('🔥', emoji, id)
    return new Promise((resolve) => {
      firebase.firestore().collection(resource).doc(id).onSnapshot((doc) => {
        const item = { id: doc.id, ...doc.data() }
        commit('setItem', { resource, item })
        resolve(item)
      })
    })
  },
  fetchItems ({ dispatch }, { ids, resource, emoji }) {
    return Promise.all(ids?.map(id => dispatch('fetchItem', { id, resource, emoji })))
  }
}
