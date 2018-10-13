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
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
input {
  border: 1px dashed #ddd;
  padding: 5px 10px;
}
input:focus {
  border: 1px dashed #81ecec;
  transition: 0.3s;
}
button {
  border: 1px solid #ddd;
  border-radius: 3px;
  transition: 0.3s;
  background: #fff;
  padding: 10px 20px;
  box-shadow: 4px 4px 10px #eee;
  transition: 0.2s;
}
button:hover {
  transition: 0.2s;
  box-shadow: 2px 2px 3px #ddd;
}
.main-heading {
  margin-bottom: 50px;
}
.component-container {
  padding: 20px;
  /* border: 1px solid #eee; */
}
</style>
