<template>
  <div class="col-full push-top">
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
      return this.$store.state.threads.filter(t => t.forumId === this.id)
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
