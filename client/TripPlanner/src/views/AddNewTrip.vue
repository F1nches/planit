<template>
  <div class="add-trip-wrapper">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-md-6 component-container" :style="{ background: 'url(' + backgroundImage + ') no-repeat center center/cover' }">
          <h1 class="main-heading">Let's plan a trip together.</h1>
          <AddTrip/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTrip from '@/components/AddTrip';

export default {
  name: 'AddNewTrip',
  components: {
    AddTrip
  },
  data () {
    return {
      backgroundImage: require('@/assets/topography.svg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-trip-wrapper {
  position: absolute;
  padding-top: 100px;
  width: 100%;
  background: #fff;
}
</style>
