<template>
  <div class="bg-primaryWhite text-primaryBlack">
    <container>
      <div class="min-h-screen flex flex-col justify-center items-center">
        <h2 class="text-9xl font-ubuntu font-bold mb-8">404</h2>
        <div class="text-center">
          <section-title
            >Page not found <font-awesome-icon icon="face-frown"
          /></section-title>
        </div>
        <div class="text-center">
          <subtitle
            >Oops! The page you are looking for does not exist.</subtitle
          >
        </div>
        <router-link to="/" class="mt-12">
          <rounded-button
            :color="btnTextColor"
            :background="btnBackground"
            :hoverBackground="btnHoverBackground"
          >
            Back to home
          </rounded-button>
        </router-link>
      </div>
    </container>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../components/Shared/Title.vue";
import Subtitle from "../components/Shared/Subtitle.vue";
import Container from "../components/Shared/Container.vue";
import RoundedButton from "../components/Shared/RoundedButton.vue";

library.add(faFaceFrown);

export default {
  components: {
    FontAwesomeIcon,
    SectionTitle,
    Subtitle,
    Container,
    RoundedButton,
  },
  data() {
    return {
      btnTextColor: "primaryBlack",
      btnBackground: "secondaryGray",
      btnHoverBackground: "primaryGray",
    };
  },
};
</script>
