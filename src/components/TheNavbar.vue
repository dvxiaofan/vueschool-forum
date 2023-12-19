<template>
  <header class="header" id="header">

    <router-link to="{name: 'Home'}" class="logo">
      <img src="../assets/svg/vueschool-logo.svg" alt="Vue Forum" />
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <router-link to="{name: 'Profile'}">
            <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile picture`" />
            <span>
              {{ authUser.name }}
              <img class="icon-profile" src="../assets/svg/arrow-profile.svg" alt="icon" />
            </span>
          </router-link>

          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbar',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {
    ...mapGetters(['authUser'])
  },
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
