<template>
  <div>
    <form>
      <label for="login-username">Username</label>
      <input type="text" id="login-username"/>
      <label for="login-password">Password</label>
      <input type="password" id="login-password"/>
      <button class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form input, form label {
    display: flex;
    width: 100%;
  }
  form input {
    margin-bottom: 20px;
  }
  form .submit {
    margin: 25px auto;
  }
</style>
