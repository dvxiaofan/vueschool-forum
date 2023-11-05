<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads"/>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'
console.log(sourceData)

export default {
  name: 'PageHome',
  components: {
    ThreadList
  },
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>
