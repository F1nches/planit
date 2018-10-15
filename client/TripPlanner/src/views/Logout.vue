<template>
  <div class="register-container">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 component-container" :style="{ background: 'url(' + backgroundImage + ') no-repeat center center/cover' }">
          <h1 class="main-heading">Are you sure you wish to logout?</h1>
          <p class="quote">{{quote}}<br>- {{quoteAuthor}}</p>
          <LogoutForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoutForm from '@/components/LogoutForm';

export default {
  name: 'Logout',
  components: {
    LogoutForm
  },
  data () {
    return {
      quote: '',
      quoteAuthor: ''
    }
  },
  mounted: function() {
    this.$store.dispatch('retrieveQuote')
    .then((response) => {
      this.quoteAuthor = response.data.author;
      this.quote = response.data.quote;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-container {
  padding-top: 100px;
  position: absolute;
  width: 100%;
  background: #fff;
}
.quote {
  font-style: italic;
  margin-bottom: 50px;
}
</style>
