<template>
  <div class="container">

      <form class="add-trip-form">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="trip-destination">Destination</label>
            <input id="trip-destination" type="text"/>
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
      </form>
      <div class="form-group quote">
        <p>"Live your life by a compass not a clock." <br> – Stephen Covey</p>
      </div>
      <router-link to="/dashboard"><img :src="backIcon"/><h3 class="back-link">Back to Dashboard</h3></router-link>

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
      arrivalDate: '',
      departureDate: '',
      packingList: [],
      dateRange: {
        start: new Date(),
        end: new Date()
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
      backIcon: require('@/assets/back.svg')
    }
  },
  methods: {

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
.container a {
  margin: 0 auto;
  text-align: center;
}
.container a img {
  height: 40px;
}
</style>
