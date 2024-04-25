<template>
  <div>
    <hero />
    <elevate />
    <elegance />
    <strategy />
    <statistics />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Elevate from '../components/Elevate.vue';
import Elegance from '../components/Elegance.vue';
import Strategy from '../components/Strategy.vue';
import Statistics from '../components/Statistics.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Elevate,
    Elegance,
    Strategy,
    Statistics
  }
}
</script>
