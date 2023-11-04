<template>
  <div class="page-home">
    <div v-for="thread in threads" :key="thread.id">
      <h2>{{ thread.title }}</h2>
      <div v-for="postId in thread.posts" :key="postId">
        <p>{{users.find(u => u.id === posts.find(p => p.id === postId).userId).name}}</p>
        <p>{{ posts.find(p => p.id === postId).text }}</p>
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
  }
}
</script>

<style scoped></style>
