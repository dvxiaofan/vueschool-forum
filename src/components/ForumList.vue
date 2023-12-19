<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">Forums</a>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link :to="{name: 'Forum', params: {id: forum.id}}" class="text-xlarge">
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadWords(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      required: true,
      type: Array
    }
  },
  methods: {
    forumThreadWords (forum) {
      // 检查论坛是否存在主题
      if (forum.threads?.length) {
        // 如果主题数大于1，返回“threads”，否则返回“thread”
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        // 如果没有主题，返回“No threads”
        return 'No threads'
      }
    }
  }
}
</script>

<style scoped>

</style>
