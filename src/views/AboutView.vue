<template>
    <hero></hero>
    <our-team></our-team>
    <f-a-q></f-a-q>
</template>

<script>
import Hero from "../components/AboutHero.vue";
import OurTeam from "../components/OurTeam.vue";
import FAQ from "../components/FAQ.vue";

export default {
  name: "AboutView",
  components: {
    Hero,
    OurTeam,
    FAQ
  },
};
</script>
