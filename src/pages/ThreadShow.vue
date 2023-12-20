<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
      <router-link :to="{ name: 'ThreadEdit', id: thread.id }" class="btn-green btn-small">
        Edit Thread
      </router-link>
    </h1>
    <post-list :posts="threadPosts" />

    <post-editor @save="addPost" />

  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { findById } from '@/helpers'

export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    threads () {
      return this.$store.state.threads
    },
    thread () {
      return findById(this.threads, this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped></style>
