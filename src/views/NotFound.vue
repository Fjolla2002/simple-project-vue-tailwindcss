<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-backgroundGray text-primaryBlack"
  >
    <section-title>Page Not Found</section-title>
    <font-awesome-icon icon="face-frown" class="text-9xl mt-8" />
    <router-link
      to="/"
      class="mt-12 border-2 border-primaryBlack rounded-3xl px-6 py-2 hover:bg-secondaryGray hover:scale-105 transition-all duration-200 ease-in-out"
      >Back to Home</router-link
    >
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/Shared/Title.vue";

library.add(faFaceFrown);

export default {
  components: {
    FontAwesomeIcon,
    SectionTitle,
  },
};
</script>
