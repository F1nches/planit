<template>
  <div class="container">
    <div v-for="trip in userTrips" class="location-card" @click="setActiveTrip(trip._id)">
      <router-link to="/singletrip">
        <div class="location-card-inner">
         <div class="location-image" :style="{ background: 'url(' + convertImageUrl(trip.tripImage) + ') no-repeat center center/cover' }">
         </div>
         <div class="location-name">
           <h2>{{trip.destination}}</h2>
         </div>
         <div class="location-circle" :style="{ background: trip.tripColor }"></div>
        </div>
      </router-link>
    </div>

    <div class="location-card add-card">
      <router-link to="/addnewtrip">
       <div class="location-card-inner">
         <div class="add-trip">
           <h1 class="plus-sign">+</h1>
           <h2>Add New Trip</h2>
         </div>
       </div>
     </router-link>
    </div>

    <div class="loading" v-if="loading">
      <div class="load-wrap">
            <div class="load-9">
                <p>Trips Loading</p>
                <div class="spinner">
                    <div class="bubble-1"></div>
                    <div class="bubble-2"></div>
                 </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TravelList',
  data () {
    return {
      userTrips: [],
      loading: true
    }
  },
  methods: {
    convertImageUrl: function(link) {
      return 'http://localhost:8000/' + link.replace("\\", "/");
    },
    showState: function() {
      console.log(this.$store.state.trips);
    },
    setActiveTrip: function(id) {
      this.$store.commit('setActiveTripMutation', id);
    }
  },
  created: function() {

    this.axios.get(`http://localhost:8000/api/all`, {
      headers: {'Authorization': 'Bearer ' + this.$store.state.token}
    })
    .then(response => {
      console.log(response.data);
      this.$store.state.trips = response.data;
      this.userTrips = this.$store.state.trips;

      this.loading = false;

    })
    .catch(e => {
      console.log(e);
      reject(error);
    })
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
}

.location-card {
min-height: 50px;
flex: 0 0 50%;
padding: 10px;
cursor: pointer;
}

.location-card.add-card {
  flex: 0 0 100%;
}

.location-card h2 {
font-weight: 400;
font-size: 36px;
}

.location-card-inner {
background: #fff;
height: 150px;
position: relative;
box-shadow: 2px 2px 10px #ddd;
overflow: hidden;
}

.add-card .location-card-inner {
  border: 2px dashed #ddd;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: 0.3s;
}

.add-card:hover .location-card-inner {
  background: #f7f7f7;
  transition: 0.3s;
}

.location-image {
position: absolute;
height: 150px;
width: 100%;
left: 0;
top: 0;
bottom: 0;
z-index: 2;
filter: grayscale(100%) contrast(60%);
transition: 1s;
}

.location-card-inner:hover .location-image {
filter: grayscale(0%) contrast(70%);
transition: 1s;
}

.location-name {
position: absolute;
z-index: 3;
color: #fff;
bottom: 0;
left: 10px;
}

.location-circle {
position: absolute;
left: -50px;
bottom: 14px;
width: 30px;
height: 30px;
background-color: #DA4D1D;
border: none;
border-radius: 30px;
cursor: pointer;
outline: none;
transition: all 0.5s ease;
mix-blend-mode: darken;
z-index: 2;
}

.location-card:hover .location-circle {
transform: scale(40);
}

.plus-sign {
  line-height: 20px;
}

/** Loader **/

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.load-wrap {
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    padding: 20px 20px 20px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
}

.spinner {
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 auto;
}

.bubble-1,
.bubble-2 {
    position: absolute;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-color: #444;
}

.bubble-2 {
    top: auto;
    bottom: 0;
}

.load-9 .spinner {animation: loadingI 2s linear infinite;}
.load-9 .bubble-1, .load-9 .bubble-2 {animation: bounce 2s ease-in-out infinite;}
.load-9 .bubble-2 {animation-delay: -1.0s;}

@keyframes loadingI {
    100% {transform: rotate(360deg);}
}

@keyframes bounce  {
  0%, 100% {transform: scale(0.0);}
  50% {transform: scale(1.0);}
}


</style>
