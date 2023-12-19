<template>
  <h1 class="push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'

export default {
  name: 'Home',
  components: {
    CategoryList
  },
  data () {
    return {}
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>
