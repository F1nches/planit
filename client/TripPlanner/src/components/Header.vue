<template>
  <header class="container">
    <router-link to="/dashboard">
      <div class="logo-container">
        <h1>tripland</h1>
      </div>
    </router-link>
    <div class="menu-items">
      <router-link v-if="!loggedIn" to="/login">Login</router-link>
      <router-link v-if="!loggedIn" to="/register">Register</router-link>
      <router-link v-if="loggedIn" to="/dashboard">Dashboard</router-link>
      <router-link v-if="loggedIn" to="/logout">Logout</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header.container div {
    display: flex;
  }
  img {
    width: 75px;
    height: 100%;
  }
  .menu-container {
    margin-left: auto;
  }
  .menu-items a {
    padding: 10px;
  }
  .menu-items a:last-of-type {
    padding-right: 0;
  }
  .logo-container h1 {
    font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
  }

  header {
    margin-bottom: 50px;
  }
  a.router-link-active {
    font-weight: 600;
  }
</style>
