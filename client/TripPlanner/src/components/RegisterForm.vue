<template>
  <div>
    <form>
      <label for="register-username">Username</label>
      <input type="text" id="register-username"/>
      <label for="register-password">Password</label>
      <input type="password" id="register-password"/>
      <label for="register-password-again">Password (again)</label>
      <input type="password" id="register-password-again"/>
      <button class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
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
