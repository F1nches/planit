<template>
  <div class="container">
    <div v-for="trip in trips" class="location-card">
      <router-link to="/singletrip">
        <div class="location-card-inner">
         <div class="location-image" :style="{ background: 'url(' + trip.backgroundImage + ') no-repeat center center/cover' }">
         </div>
         <div class="location-name">
           <h2>{{trip.destination}}</h2>
         </div>
         <div class="location-circle" :style="{ background: trip.backgroundColorOverlay }"></div>
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

  </div>
</template>

<script>
export default {
  name: 'TravelList',
  data () {
    return {
      trips: [
        {
          destination: 'Hawaii',
          backgroundImage: 'https://images.pexels.com/photos/965157/pexels-photo-965157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          backgroundColorOverlay: '#2980b9'
        },
        {
          destination: 'Iceland',
          backgroundImage: 'https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          backgroundColorOverlay: '#8e44ad'
        },
        {
          destination: 'Utah',
          backgroundImage: 'https://images.pexels.com/photos/967097/pexels-photo-967097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          backgroundColorOverlay: '#27ae60'
        },
        {
          destination: 'New York City',
          backgroundImage: 'https://images.pexels.com/photos/756908/pexels-photo-756908.jpeg?auto=compress&cs=tinysrgb&h=350',
          backgroundColorOverlay: '#c0392b'
        }
      ]
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
</style>
