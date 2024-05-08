<template>
  <div class="bg-primaryWhite py-20">
    <container>
      <div class="flex flex-col items-center justify-center pt-10">
        <section-title>About Us</section-title>
        <div class="w-full text-center lg:w-3/4">
          <subtitle
            >At the intersection of expertise in various disciplines, locations,
            and sectors, we pioneer innovative architectural projects and urban
            strategies, shaping the start of something extraordinary in social
            practice.</subtitle
          >
        </div>
        <img :src="aboutImage" alt=" about" class="rounded-lg mt-12" />
      </div>
    </container>
  </div>
</template>

<script>
import SectionTitle from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import Container from "./Shared/Container.vue";
import about from "../assets/images/about.jpg";

export default {
  name: "AboutHero",
  components: {
    SectionTitle,
    Container,
    Subtitle,
  },
  data() {
    return {
      aboutImage: about,
    };
  },
};
</script>
