<template>
  <div>
    <form @submit.prevent="login">
      <label for="login-email">Email</label>
      <input type="text" id="login-email" v-model="email" @click="resetErrors"/>
      <label for="login-password">Password</label>
      <input type="password" id="login-password" v-model="password" @click="resetErrors"/>
      <button type="submit">Submit</button>
    </form>
    <div class="error" v-if="errors">{{errors}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    resetErrors: function() {
      this.errors = '';
    },
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        this.errors = '';
        this.$router.push('/dashboard');
      })
      .catch(e => {
        this.errors = 'Please try again.'
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
  form button {
    margin: 25px auto;
  }
</style>
