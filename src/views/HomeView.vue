<template>
  <hero></hero>
  <elevate></elevate>
  <elegance></elegance>
  <strategy></strategy>
  <statistics></statistics>
  <services></services>
  <products></products>
</template>

<script>
import Hero from "../components/Hero.vue";
import Elevate from "../components/Elevate.vue";
import Elegance from "../components/Elegance.vue";
import Strategy from "../components/Strategy.vue";
import Statistics from "../components/Statistics.vue";
import Services from "../components/Services.vue";
import Products from "../components/Products.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Elevate,
    Elegance,
    Strategy,
    Statistics,
    Services,
    Products,
  },
};
</script>
