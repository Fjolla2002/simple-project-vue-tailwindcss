<template>
    <hero></hero>
    <our-team></our-team>
</template>

<script>
import Hero from "../components/AboutHero.vue";
import OurTeam from "../components/OurTeam.vue";

export default {
  name: "AboutView",
  components: {
    Hero,
    OurTeam
  },
};
</script>
