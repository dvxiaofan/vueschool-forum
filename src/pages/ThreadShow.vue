<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
      <router-link :to="{ name: 'ThreadEdit', id: thread.id }" class="btn-green btn-small">
        Edit Thread
      </router-link>
    </h1>

    <p>
      By <a href="#" class="link-unstyled">{{ thread.author.name }}</a>, <AppDate :timestamp="thread.publishedAt" />.
      <span style="float: right; margin-top: 2px;" class="hide-mobile text-faded text-small">
        {{ thread.repliesCount }} replies by {{ thread.contributorsCount }} contributors
      </span>
    </p>

    <post-list :posts="threadPosts" />

    <post-editor @save="addPost" />

  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'
import { mapActions } from 'vuex'

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
      return this.$store.getters.thread(this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  async created () {
    // fetch the thread
    const thread = await this.fetchThread({ id: this.id })

    // fetch the posts
    const posts = await this.fetchPosts({ ids: thread.posts })
    const users = posts.map(post => post.userId).concat(thread.userId)
    this.fetchUsers({ ids: users })
  },
  methods: {
    ...mapActions(['fetchThread', 'fetchPosts', 'fetchUsers', 'createPost']),
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.createPost(post)
    }
  }
}
</script>

<style scoped></style>
