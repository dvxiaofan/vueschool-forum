<template>
  <div v-if="forum" class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
          :to="{name:'ThreadCreate', params: {forumId: forum.id}}"
          class="btn-green btn-small"
      >
        Start a thread
      </router-link>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
import { findById } from '@/helpers'

export default {
  name: 'Forum',
  mixins: [],
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return { }
  },
  watch: {},
  computed: {
    forum () {
      return findById(this.$store.state.forums, this.id)
    },
    threads () {
      if (!this.forum) return []
      return this.forum.threads.map(threadId => this.$store.getters.thread(threadId))
    }
  },
  async created () {
    const forum = await this.$store.dispatch('fetchForum', { id: this.id })
    const threads = await this.$store.dispatch('fetchThreads', { ids: forum.threads })
    this.$store.dispatch('fetchUsers', { ids: threads.map(t => t.userId) })
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
