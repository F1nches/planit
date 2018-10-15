<template>
  <div class="container">

      <form class="add-trip-form" @submit.prevent="submitTrip">

        <div class="row">
          <div class="form-group col-md-6">
            <label for="trip-destination">Destination</label>
            <input id="trip-destination" type="text" v-model="destination"/>
          </div>
          <div class="form-group col-md-6">
            <label for="trip-dates">Dates of Trip</label>
            <v-date-picker id="trip-dates"
              mode='range'
              v-model='dateRange'
              :theme-styles='calendarStyles'
              :input-props='{ style: "border: 1px dashed #ddd; padding: 5px 10px; width: 100%;" }'>
            </v-date-picker>
          </div>
        </div>
        <div class="form-group">
          <label for="trip-packing-list">Packing list (items separated by comma)</label>
          <input id="trip-packing-list" type="text"/>
        </div>

        <div class="form-group quote">
          <p>"{{quote}}"<br> – {{quoteAuthor}}</p>
        </div>
        <div class="button-wrapper">
          <button type="submit" class="save-trip"><img :src="backIcon"/><h3 class="back-link">Save Trip</h3></button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTrip',
  data () {
    return {
      destination: '',
      backgroundImage: '',
      backgroundOverlayColor: '',
      packingList: '',
      dateRange: {
        start: new Date(),
        end: new Date()
      },
      selectedDates: {
        start: '',
        end: ''
      },
      calendarStyles: {
        wrapper: {
          background: '#fff',
          color: '#444'
        },
        headerArrows: {
          color: '#444'
        },
        header: {
          color: '#444'
        }
      },
      backIcon: require('@/assets/back.svg'),
      quoteAuthor: '',
      quote: ''
    }
  },
  mounted: function() {
    this.$store.dispatch('retrieveQuote')
    .then((response) => {
      this.quoteAuthor = response.data.author;
      this.quote = response.data.quote;
    })
  },
  methods: {
    submitTrip: function() {
      const token = this.$store.state.token;
      this.axios.post('http://localhost:8000/api/create',
        {
          destination: this.destination,
          packingList: this.packingList,
          dateRange: this.dateRange.start + '-' + this.dateRange.end
        },
        {
          headers: {'Authorization': 'Bearer ' + token}
        })
        .then(response => {
          console.log(response);
          this.$router.push('/dashboard');
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: 'Amatic SC', sans-serif;
  text-align: left;
}
form.add-trip-form {
  width: 100%;
}
.form-group {
  width: 100%;
}
form input {
  width: 100%;
}
.quote {
  width: 100%;
  text-align: center;
  font-style: italic;
}
.container .save-trip {
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
}
.container .save-trip img {
  height: 40px;
}
.button-wrapper {
  width: 100%;
  text-align: center;
}
button {
  background: none;
  border: none;
  box-shadow: none;
}
</style>
