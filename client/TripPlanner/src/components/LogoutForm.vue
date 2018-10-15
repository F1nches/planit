<template>
  <div>
    <button id="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'LogoutForm',
  data () {
    return {

    }
  },
  methods: {
    logout() {
      this.$store.dispatch('destroyToken');
      this.$router.push('/login');
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
