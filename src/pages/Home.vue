<template>
  <h1>Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import sourceData from '@/data.json'
import CategoryList from '@/components/CategoryList.vue'
console.log(sourceData)

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    CategoryList
  },
  data () {
    return {
      categories: sourceData.categories
    }
  }
}
</script>
