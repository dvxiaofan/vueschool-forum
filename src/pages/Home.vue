<template>
  <div v-if="ready" class="container">
    <h1 class="push-top">Welcome to the Forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    CategoryList
  },
  data () {
    return {
      ready: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  async created () {
    const categories = await this.fetchAllCategories()
    const forumIds = categories.map(category => category.forums).flat()
    await this.fetchForums({ ids: forumIds })
    this.ready = true
  },
  methods: {
    ...mapActions(['fetchAllCategories', 'fetchForums'])
  }
}
</script>
