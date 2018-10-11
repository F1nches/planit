<template>
  <div class="container">

    <div class="trip-card">
     <div class="trip-card-inner">
       <div class="trip-image" :style="{ background: 'linear-gradient(' + backgroundOverlayColor + ',' + backgroundOverlayColor + '), url(' + backgroundImage + ') no-repeat center center/cover' }">
         <div class="trip-name">
           <h1>{{tripName}}</h1>
           <h3>{{arrivalDate}} - {{departureDate}}</h3>
         </div>
       </div>
       <div class="row">
         <div class="col-md-6 packing-list-container">
           <h2>Packing List</h2>
           <div class="packing-list-items">
             <div v-for="item in packingList">{{item}} <span class="unpacked-packed">&#9633;</span></div>
           </div>
         </div>
         <div class="col-md-6 itinerary-container">
           <h2>Itinerary</h2>
           <div class="days">
             <div v-for="day in itinerary" class="day">{{day.day}}</div>
           </div>
           <div class="itinerary-details">
             <div class="single-itinerary-item" v-for="item in itinerary[0].activities">{{item.time}} <span class="itinerary-item-description">{{item.activity}}</span></div>
           </div>
         </div>
         <div class="col-md-6 packing-recommendations-container">
           <h2>Packing Recommendations</h2>
           <p>Don't forget this stuff (based on your trip location)...</p>
           <div class="packing-recommendations">
             <div class="recommendation">Sunscreen</div>
             <div class="recommendation">Sunglasses</div>
           </div>
         </div>
         <div class="col-md-6 packing-recommendations-container">
           <h2>Event Recommendations</h2>
           <p>Check out these activities (based on your trip location)...</p>
           <div class="packing-recommendations">
             <div class="recommendation">Parasailing with Hawaii Parasailing Co.</div>
             <div class="recommendation">Volcano Explorations with HV Tours</div>
           </div>
         </div>
       </div>
     </div>
   </div>

   <router-link to="/dashboard"><h3 class="back-link">Back to Dashboard</h3></router-link>

  </div>
</template>

<script>
export default {
  name: 'Trip',
  data () {
    return {
      tripName: 'Hawaii',
      backgroundImage: 'https://images.pexels.com/photos/965157/pexels-photo-965157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      backgroundOverlayColor: 'rgba(60,60,60,0.5)',
      arrivalDate: '12/10/2018',
      departureDate: '12/15/2018',
      packingList: ['toothbrush', 'sunglasses', 'sunscreen', 'swimtrunks', 'straw hat', 'waterproof bag', 'socks', 'sandals'],
      itinerary: [
        {
          day: 'day 1',
          activities: [
            {
              time: '9AM',
              activity: 'Breakfast'
            },
            {
              time: '12PM',
              activity: 'Lunch'
            },
            {
              time: '2PM',
              activity: 'Beach'
            }
          ]
        },
        {
          day: 'day 2',
          activities: [
            {
              time: '10AM',
              activity: 'Breakfast'
            },
            {
              time: '1PM',
              activity: 'Lunch'
            },
            {
              time: '3PM',
              activity: 'Hiking'
            }
          ]
        },
        {
          day: 'day 3',
          activities: [
            {
              time: '9AM',
              activity: 'Breakfast'
            },
            {
              time: '12PM',
              activity: 'Lunch'
            },
            {
              time: '2PM',
              activity: 'Beach'
            }
          ]
        },
        {
          day: 'day 4',
          activities: [
            {
              time: '9AM',
              activity: 'Breakfast'
            },
            {
              time: '12PM',
              activity: 'Lunch'
            },
            {
              time: '2PM',
              activity: 'Parasailing'
            }
          ]
        },
        {
          day: 'day 5',
          activities: [
            {
              time: '9AM',
              activity: 'Breakfast'
            },
            {
              time: '12PM',
              activity: 'Beach'
            },
            {
              time: '4PM',
              activity: 'Fireworks'
            }
          ]
        }
      ]
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
}

.trip-card {
  min-height: 50px;
  flex: 0 0 100%;
  padding: 10px;
  cursor: pointer;
}

.trip-card .trip-card-inner {
  box-shadow: 2px 2px 10px #ccc;
  padding: 15px;
}

.trip-image {
  min-height: 100px;
}

.trip-name h1, .trip-name h3 {
  color: #fff;
}
.days .day {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid #444;
  border-radius: 5px;
  margin: 5px;
  font-size: 10px;
  font-weight: 500;
}
.packing-list-items {
  text-align: left;
  padding: 10px;
}
.packing-list-items > div, .itinerary-details > div {
  border-bottom: 1px solid #444;
  padding: 5px;
}
.unpacked-packed {
  float: right;
}
.col-md-6 {
  margin-bottom: 25px;
}
.single-itinerary-item {
  text-align: left;
}
.single-itinerary-item span {
  float: right;
}
.itinerary-details {
  padding: 10px;
}
.container > a {
  margin: 0 auto;
}
.container > a:hover {
  text-decoration: none;
}
.back-link {
  color: #444;
}

</style>
