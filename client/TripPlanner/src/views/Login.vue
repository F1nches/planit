<template>
  <div class="register-container">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-6">
          <h1>Welcome back. Let's plan a trip together.</h1>
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

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-container {
  margin-top: 100px;
}
</style>
