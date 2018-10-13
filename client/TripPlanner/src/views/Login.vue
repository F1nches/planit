<template>
  <div class="register-container">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 component-container" :style="{ background: 'url(' + backgroundImage + ') no-repeat center center/cover' }">
          <h1 class="main-heading">Welcome back.</h1>
          <LoginForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {
      backgroundImage: require('@/assets/topography.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-container {
  padding-top: 100px;
  position: absolute;
  width: 100%;
  background: #fff;
}
</style>
