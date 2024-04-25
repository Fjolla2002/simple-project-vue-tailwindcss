<template>
  <div class="bg-cover" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div
      class="w-11/12 lg:w-3/5 mx-auto lg:h-[900px] h-[1020px] flex flex-col justify-end items-start pb-20"
    >
      <h1
        class="text-primaryWhite lg:text-6xl text-5xl font-bold font-ubuntu mb-2"
      >
        Rent your home.
      </h1>
      <h1
        class="text-primaryWhite lg:text-6xl text-5xl font-bold font-ubuntu mb-2"
      >
        Own your life.
      </h1>
      <h1 class="text-primaryWhite lg:text-6xl text-5xl font-bold font-ubuntu">
        Start of something great.
      </h1>
      <p class="mt-12 text-primaryWhite text-lg lg:w-1/3 w-full font-openSans">
        We combine expertise across disciplines, locations, and sectors. The
        practice is an active thought leader in social practice, developing
        award-winning architectural projects and urban strategies at a variety
        of scales.
      </p>
      <RoundedButton
        color="primaryBlack"
        background="primaryWhite"
        hoverBackground="primaryGray"
      >
        Book Now
      </RoundedButton>
    </div>
  </div>
</template>

<script>
import RoundedButton from "./Shared/RoundedButton.vue";
import background from "../assets/images/hero.jpeg";
export default {
  components: {
    RoundedButton,
  },
  data() {
    return {
      backgroundImage: background,
    };
  },
};
</script>
