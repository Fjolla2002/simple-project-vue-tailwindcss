<template>
  <div class="bg-backgroundGray">
    <container>
      <div class="flex flex-col items-center justify-center pt-10">
        <section-title>Our Amazing Team</section-title>
        <div class="w-full text-center lg:w-3/4">
          <subtitle>Get to know the faces behind our success.</subtitle>
        </div>
        <div
          class="mt-12 w-full grid grid-cols-1 gap-20 lg:grid-cols-4 md:grid-rows-2 sm:grid-cols-2"
        >
          <div
            v-for="(teammate, index) in team"
            class="w-full flex flex-col items-center justify-center text-center"
          >
            <div
              class="bg-cover bg-center bg-no-repeat rounded-full w-3/4 h-[240px]"
              :style="{ backgroundImage: 'url(' + teammate.image + ')' }"
            ></div>
            <h4 class="my-4 text-2xl">{{ teammate.name }}</h4>
            <h6 class="my-2 text-xl">{{ teammate.position }}</h6>
            <p class="my-4 text-base">{{ teammate.desc }}</p>
          </div>
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
  name: "OurTeam",
  components: {
    SectionTitle,
    Container,
    Subtitle,
  },
  data() {
    return {
      team: data.team,
    };
  },
};
</script>
