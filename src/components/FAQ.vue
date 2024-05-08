<template>
  <div class="bg-primaryWhite py-20">
    <container>
      <div class="flex flex-col items-center justify-center pt-10">
        <div class="w-full text-center lg:w-3/4">
          <section-title>Frequently Asked Questions</section-title>
          <subtitle>We've compiled a list of commonly asked questions to provide you with quick and informative answers.</subtitle>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import SectionTitle from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import Container from "./Shared/Container.vue";
import { data } from "@/assets/data/dummyData";

export default {
  name: "FrequentlyAskedQuestions",
  components: {
    SectionTitle,
    Container,
    Subtitle,
  },
  data() {
    return {};
  },
};
</script>
