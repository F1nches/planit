<template>
  <div id="app">
    <Header/>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
p, span, label, div {
  font-family: 'Catamaran', sans-serif;
  font-weight: 300;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
a {
  color: #222;
}
a:hover {
  color: #333;
  text-decoration: none;
}
</style>
