<template>
  <div class="col-full push-top">
    <h1>
      Editing <i>{{ thread.title }}</i>
    </h1>

    <ThreadEditor :title="thread.title" :text="text" @save="save" @cancel="cancel" />
  </div>
</template>

<script>

import ThreadEditor from '@/components/ThreadEditor.vue'

export default {
  name: 'ThreadEdit',
  mixins: [],
  components: { ThreadEditor },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    thread () {
      return this.$store.state.threads.find(t => t.id === this.id)
    },
    text () {
      return this.$store.state.posts.find(p => p.threadId === this.thread[0]).text
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    async save ({ title, text }) {
      const thread = await this.$store.dispatch('updateThread', {
        forumId: this.forum.id,
        title,
        text
      })
      this.$router.push({
        name: 'ThreadShow',
        params: {
          id: thread.id
        }
      })
    },
    cancel () {
      this.$router.push({
        name: 'Forum',
        params: {
          id: this.forum.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
