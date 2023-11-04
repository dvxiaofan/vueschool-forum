<template>
  <div class="page-home">
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{ thread.title }}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{userById(postById(postId).userId).name}}</p>
        <p>{{ postById(postId).text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SourceData from '@/data.json'

export default {
  name: 'PageHome',
  data () {
    return {
      threads: SourceData.threads,
      posts: SourceData.posts,
      users: SourceData.users
    }
  },
  methods: {
    postById (id) {
      return this.posts.find(p => p.id === id)
    },
    userById (id) {
      return this.users.find(u => u.id === id)
    }
  }
}
</script>

<style scoped></style>
