<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="getForumsForCategory(category)" :title="category.name" />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
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
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    getForumsForCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
