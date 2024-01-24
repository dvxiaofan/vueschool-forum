<template>
  <the-navbar/>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

import TheNavbar from '@/components/TheNavbar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheNavbar
  },
  created () {
    this.fetchAuthUser()
  },
  methods: {
    ...mapActions(['fetchAuthUser'])
  }
}
</script>

<style>
@import "assets/style.css";
</style>
