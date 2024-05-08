<template>
  <div class="bg-backgroundGray">
    <container>
      <div class="flex flex-col items-center justify-center pt-10">
        <div class="w-full text-center lg:w-3/4">
          <section-title>Our Amazing Team</section-title>
          <subtitle>Get to know the faces behind our success.</subtitle>
        </div>
        <div
          class="mt-12 w-full grid grid-cols-1 gap-20 xlg:grid-cols-4 xlg:grid-rows-1 md:grid-cols-2 md:grid-rows-2"
        >
          <div
            v-for="teammate in team"
            class="w-full flex flex-col items-center justify-center text-center"
          >
            <div
              class="rounded-full w-[200px] h-[200px] overflow-hidden hover:scale-95 transition-all duration-300 ease-in-out"
            >
              <div
                class="w-full h-full bg-cover bg-center bg-no-repeat"
                :style="{ backgroundImage: 'url(' + teammate.image + ')' }"
              ></div>
            </div>
            <h4
              class="my-4 text-2xl font-montserrat font-semibold text-secondaryBlack"
            >
              {{ teammate.name }}
            </h4>
            <h6 class="my-2 text-xl text-primaryBlack italic">
              {{ teammate.position }}
            </h6>
            <p class="my-4 text-base text-paragraphGray">{{ teammate.desc }}</p>
            <div class="w-2/5 flex items-center justify-center lg:w-full">
              <social-medias :color="socialMeadiasColor"></social-medias>
            </div>
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
import SocialMedias from "./Shared/SocialMedias.vue";

export default {
  name: "OurTeam",
  components: {
    SectionTitle,
    Container,
    Subtitle,
    SocialMedias,
  },
  data() {
    return {
      team: data.team,
      socialMeadiasColor: "paragraphGray",
    };
  },
};
</script>
