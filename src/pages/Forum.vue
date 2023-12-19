<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
      return this.$store.state.forums.find(f => f.id === this.id)
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
