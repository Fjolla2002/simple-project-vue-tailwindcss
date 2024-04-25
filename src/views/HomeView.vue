<template>
  <div>
    <hero />
    <elevate />
    <elegance />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Elevate from '../components/Elevate.vue';
import Elegance from '../components/Elegance.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Elevate,
    Elegance
  }
}
</script>
