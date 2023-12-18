<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <post-list :posts="threadPosts"></post-list>

    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea class="form-input" v-model="newPostText" placeholder="Write something..." name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList.vue'
export default {
  name: 'ThreadShow',
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      newPostText: ''
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost () {
      const postId = 'ggdd' + Math.random()
      const post = {
        id: postId,
        text: this.newPostText,
        userId: 'rgbB8C6ifrlkujsdlfjoiejwoeifjweljf'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)

      this.newPostText = ''
    }
  }
}
</script>

<style scoped></style>
