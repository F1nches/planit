<template>
  <div>
    <form @submit.prevent="login">
      <label for="login-email">Email</label>
      <input type="text" id="login-email" v-model="email" />
      <label for="login-password">Password</label>
      <input type="password" id="login-password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        this.$router.push('/dashboard');
      })
    }
  },
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
