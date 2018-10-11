<template>
  <div class="dashboard-wrapper">
    <TravelList/>
  </div>
</template>

<script>
import TravelList from '@/components/TravelList';

export default {
  name: 'Dashboard',
  components: {
    TravelList
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-wrapper {
  position: absolute;
  width: 100%;
  background: #fff;
}
</style>
