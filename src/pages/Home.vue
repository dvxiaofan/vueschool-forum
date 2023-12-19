<template>
  <h1>Welcome to the Forum</h1>
  <ForumList :forums="forums"/>
</template>

<script>
import sourceData from '@/data.json'
import ForumList from '@/components/ForumList.vue'
console.log(sourceData)

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    ForumList
  },
  data () {
    return {
      forums: sourceData.forums
    }
  }
}
</script>
