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
          <a href="#">
            <img class="avatar-small" src="https://pbs.twimg.com/profile_images/1188775562657091594/5mgkg44t_400x400.jpg" alt="avatar" />
            <span>
              Alex Cc
              <img class="icon-profile" src="../assets/svg/arrow-profile.svg" alt="icon" />
            </span>
          </a>

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

export default {
  name: 'TheNavbar',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
