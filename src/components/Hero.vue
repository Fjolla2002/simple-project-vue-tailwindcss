<template>
  <div class="bg-cover" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <container>
      <div
        class="h-[1020px] flex flex-col justify-end items-start pb-20 lg:h-[900px]"
      >
        <h1
          class="text-primaryWhite text-5xl font-bold font-ubuntu mb-2 lg:text-6xl"
        >
          Rent your home. <br />
          Own your life. <br />
          Start of something great.
        </h1>
        <p
          class="mt-12 text-primaryWhite text-lg w-full font-openSans lg:w-1/3"
        >
          We combine expertise across disciplines, locations, and sectors. The
          practice is an active thought leader in social practice, developing
          award-winning architectural projects and urban strategies at a variety
          of scales.
        </p>
        <rounded-button
          :color="btnTextColor"
          :background="btnBackground"
          :hoverBackground="btnHoverBackground"
        >
          Book Now
        </rounded-button>
      </div>
    </container>
  </div>
</template>

<script>
import RoundedButton from "./Shared/RoundedButton.vue";
import background from "../assets/images/hero.jpeg";
import Container from "./Shared/Container.vue";

export default {
  name: "Hero",
  components: {
    RoundedButton,
    Container,
  },
  data() {
    return {
      backgroundImage: background,
      btnTextColor: "primaryBlack",
      btnBackground: "primaryWhite",
      btnHoverBackground: "primaryGray",
    };
  },
};
</script>
