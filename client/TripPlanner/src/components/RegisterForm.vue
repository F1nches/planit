<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="register-email">Email</label>
      <input type="text" id="register-username" v-model="email"/>
      <label for="register-password">Password</label>
      <input type="password" id="register-password"/>
      <label for="register-password-again">Password (again)</label>
      <input type="password" id="register-password-again" v-model="password"/>
      <button class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
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

      this.axios.post(`http://localhost:8000/users/signup`, {
        email: this.email,
        password: this.password
      })
      .then(response => { console.log(response); })
      .catch(e => {
        this.errors.push(e)
      })

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
