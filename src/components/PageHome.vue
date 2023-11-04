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

<script setup>
import sourceData from '@/data.json'
import { ref } from 'vue'

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

function postById (id) {
  return posts.value.find(p => p.id === id)
}

function userById (id) {
  return users.value.find(u => u.id === id)
}
</script>

<style scoped></style>
