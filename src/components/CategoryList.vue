<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

export default {
  name: 'CategoryList',
  mixins: [],
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
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
