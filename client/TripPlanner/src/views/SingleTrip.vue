<template>
  <div class="single-trip-wrapper">
    <Trip/>
  </div>
</template>

<script>
import Trip from '@/components/Trip';

export default {
  name: 'Dashboard',
  components: {
    Trip
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-trip-wrapper {
  position: absolute;
  width: 100%;
  background: #fff;
}
</style>
