<template>
  <div class="bg-primaryWhite">
    <Wrapper>
      <div class="lg:w-1/2 w-full">
        <div class="flex-col items-center justify-start">
          <Title> We are the best agency to improve your deals </Title>
          <Subtitle>
            We work directly for our clients and put client’s interests first.
          </Subtitle>
          <p class="mt-6 text-base text-paragraphGray">
            Everything that can be necessary to create and manage new projects
            (startups) in modern conditions. From development of concept,
            business plan and project management plan, to marketing strategy and
            tactics, as well as the system of customer attraction via the
            Internet and sales system.
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 w-3/5 lg:mt-0 mt-20">
        <div
          class="h-full bg-backgroundGray grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4"
        >
          <StatCard
            v-for="(stat, index) in stats"
            :key="index"
            :count="stat.count"
            :text="stat.text"
          />
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "./Shared/TwoPiecesWrapper.vue";
import Title from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import StatCard from "./Shared/StatCard.vue";

export default {
  name: "Statistics",
  components: {
    Wrapper,
    Title,
    Subtitle,
    StatCard,
  },
  data() {
    return {
      stats: [
        {
          count: 50,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        },
        {
          count: 17,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        },
        {
          count: 20,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        },
        {
          count: 13,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        },
      ],
    };
  },
};
</script>
