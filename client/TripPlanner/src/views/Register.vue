<template>
  <div class="register-container">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-6">
          <h1>Your first step towards superior trip preparation begins here...</h1>
          <RegisterForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';

export default {
  name: 'Register',
  components: {
    RegisterForm
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
