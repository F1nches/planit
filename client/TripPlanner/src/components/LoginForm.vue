<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="login-username">Username</label>
      <input type="text" id="login-username" v-model="email" />
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
    handleSubmit: function(e) {

      e.preventDefault;
      console.log(this.email, this.password);

      this.axios.post(`http://localhost:8000/users/login`, {
        email: this.email,
        password: this.password
      })
      .then(response => { console.log(response); })
      .catch(e => {
        this.errors.push(e)
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
