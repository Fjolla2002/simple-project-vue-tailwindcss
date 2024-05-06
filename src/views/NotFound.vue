<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-primaryWhite text-primaryBlack"
  >
    <h2 class="text-9xl font-ubuntu font-bold mb-8">404</h2>
    <section-title
      >Page not found <font-awesome-icon icon="face-frown"
    /></section-title>
    <subtitle>Oops! The page you are looking for does not exist. </subtitle>
    <router-link
      to="/"
      class="mt-12 border-2 border-primaryBlack rounded-3xl px-6 py-2 hover:scale-105 transition-all duration-200 ease-in-out"
      >Back to Home</router-link
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/Shared/Title.vue";
import Subtitle from "../components/Shared/Subtitle.vue";

library.add(faFaceFrown);

export default {
  components: {
    FontAwesomeIcon,
    SectionTitle,
    Subtitle,
  },
};
</script>
