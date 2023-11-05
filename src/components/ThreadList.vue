<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a href="#">{{ thread.title }}</a>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a
            >,{{ thread.publishedAt }},
          </p>
        </div>
        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img
            :src="userById(thread.userId).avatar"
            alt="avatar"
            class="avatar-medium"
          />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>

            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'ThreadList',
  mixins: [],
  components: {},
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  watch: {},
  computed: {},
  created () {},
  mounted () {},
  methods: {
    postById (postId) {
      return this.posts.find((p) => p.id === postId)
    },
    userById (userId) {
      return this.users.find((u) => u.id === userId)
    }
  }
}
</script>

<style lang="scss" scoped></style>
