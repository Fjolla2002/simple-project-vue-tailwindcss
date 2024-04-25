<template>
  <div>
    <hero />
    <elevate />
    <elegance />
    <strategy />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Elevate from '../components/Elevate.vue';
import Elegance from '../components/Elegance.vue';
import Strategy from '../components/Strategy.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Elevate,
    Elegance,
    Strategy
  }
}
</script>
