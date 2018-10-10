<template>
  <header class="container">
    <div class="logo-container">
      <img src="@/assets/temp-logo.svg"/>
    </div>
    <div class="menu-items">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

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
</style>
