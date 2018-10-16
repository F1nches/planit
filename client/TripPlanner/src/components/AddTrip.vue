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
          <input id="trip-packing-list" type="text" v-model="packingList"/>
        </div>
        <div class="form-group">
          <label for="trip-image">Trip Background Image</label>
          <input type="file" id="trip-image" @change="onFileSelected"/>
        </div>

        <div class="color-picker">
         <label>Select color for this trip</label>
         <div class="colors-container">
           <div v-for="color in colorPicker" :style="{background: color}" :data-color="color" @click="selectedColor = color" :class="{active: color === selectedColor}"></div>
         </div>
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
      tripImage: null,
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
      quote: '',
      colorPicker: ['#8e44ad', '#2980b9', '#16a085', '#27ae60', '#c0392b', '#d35400', '#f39c12'],
      selectedColor: '',
      selectedFile: null
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
    onFileSelected: function(event) {
      this.selectedFile = event.target.files[0];
    },
    submitTrip: function() {
      const token = this.$store.state.token;

      var fd = new FormData();

      fd.append('destination', this.destination);
      fd.append('packingList', this.packingList);
      fd.append('dateRange', this.dateRange.start + '-' + this.dateRange.end);
      fd.append('tripColor', this.selectedColor);
      fd.append('tripImage', this.selectedFile, this.selectedFile.name);

      console.log(fd);

      this.axios.post('http://localhost:8000/api/create',
        fd,
        {
          headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'multipart/form-data'}
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
.color-picker {
 text-align: center;
}
.colors-container > div {
 height: 25px;
 width: 25px;
 display: inline-block;
 margin: 10px;
 margin-top: 0;
 transition: 0.2s;
}
.colors-container > div:hover, .colors-container > div.active {
 transform: scale(1.1);
 transition: 0.2s;
 cursor: pointer;
}
</style>
