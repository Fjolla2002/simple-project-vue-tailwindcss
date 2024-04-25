<template>
  <div>
    <hero />
    <elevate />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Elevate from '../components/Elevate.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Elevate
  }
}
</script>
