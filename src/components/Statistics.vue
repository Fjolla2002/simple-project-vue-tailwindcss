<template>
  <div class="bg-primaryWhite">
    <wrapper>
      <div class="w-full lg:w-1/2">
        <div class="flex-col items-center justify-start">
          <section-title>
            We are the best agency to improve your deals
          </section-title>
          <subtitle>
            We work directly for our clients and put client’s interests first.
          </subtitle>
          <p class="mt-6 text-base text-paragraphGray">
            Everything that can be necessary to create and manage new projects
            (startups) in modern conditions. From development of concept,
            business plan and project management plan, to marketing strategy and
            tactics, as well as the system of customer attraction via the
            Internet and sales system.
          </p>
        </div>
      </div>
      <div class="w-4/5 lg:w-1/2 lg:mt-0 mt-20">
        <div
          class="h-full bg-backgroundGray grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2"
        >
          <stat-card
            v-for="(stat, index) in stats"
            :key="index"
            :count="stat.count"
            :text="stat.text"
          />
        </div>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "./Shared/TwoPiecesWrapper.vue";
import SectionTitle from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import StatCard from "./Shared/StatCard.vue";
import { data } from "../assets/data/dummyData";

export default {
  name: "Statistics",
  components: {
    Wrapper,
    SectionTitle,
    Subtitle,
    StatCard,
  },
  data() {
    return {
      stats: data.statistics,
    };
  },
};
</script>
