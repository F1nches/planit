<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1C2028;
  margin-top: 60px;
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
}
p, span, label {
  font-family: 'Catamaran', sans-serif;
  font-weight: 300;
}
</style>
