<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="register-email">Email</label>
      <input type="text" id="register-username" v-model="email" @click="resetErrors"/>
      <label for="register-password">Password (minimum 8 characters)</label>
      <input type="password" id="register-password" v-model="passwordFirst" @click="resetErrors"/>
      <label for="register-password-again">Password (again)</label>
      <input type="password" id="register-password-again" v-model="passwordSecond" @click="resetErrors"/>
      <button class="submit">Submit</button>
    </form>
    <div class="error" v-if="errors">Oops. Something went wrong... {{errors}}</div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      passwordSecond: '',
      passwordFirst: '',
      errors: ''
    }
  },
  methods: {
    resetErrors: function() {
      this.errors = '';
    },
    handleSubmit: function(e) {
      e.preventDefault;
      if (this.passwordSecond.length >= 8 && this.passwordFirst === this.passwordSecond) {
        this.axios.post(`http://localhost:8000/users/signup`, {
          email: this.email,
          password: this.passwordSecond
        })
        .then(response => {
          console.log(response);
          this.$router.push('/login');
        })
        .catch(e => {
          this.errors = 'This user may already exist or your email/password were invalid.';
        })
      } else {
        this.errors = 'Passwords do not match or are too short.';
      }

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
