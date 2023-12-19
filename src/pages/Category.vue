<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="getForumsForCategory(category)" :title="category.name" />
</template>

<script>
import ForumList from '@/components/ForumList.vue'

export default {
  name: 'Category',
  mixins: [],
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
