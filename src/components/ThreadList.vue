<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">
              {{ thread.title }} </router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >, <AppDate :timestamp="thread.publishedAt" />.
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.repliesCount }} replies</p>

          <img
            :src="userById(thread.userId).avatar"
            alt="avatar"
            class="avatar-medium"
          />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>

            <p class="text-xsmall text-faded">
              <AppDate :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findById } from '@/helpers'

export default {
  name: 'ThreadList',
  mixins: [],
  components: { },
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    posts () {
      return this.$store.state.posts
    },
    users () {
      return this.$store.state.users
    }
  },
  created () {},
  mounted () {},
  methods: {
    postById (postId) {
      return findById(this.posts, postId)
    },
    userById (userId) {
      return findById(this.users, userId) || {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
