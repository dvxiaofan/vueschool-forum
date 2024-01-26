<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea class="form-input" v-model="postCopy.text" placeholder="Write something..." name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">{{ post.id ? 'Update Post' : 'Submit Post' }}</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'PostEditor',
  props: {
    post: {
      type: Object,
      default: () => ({ text: null })
    }
  },
  data () {
    return {
      postCopy: { ...this.post }
    }
  },
  methods: {
    save () {
      this.$emit('save', this.postCopy)
      this.postCopy.text = ''
    }
  }
}

</script>

<style scoped>

</style>
