<template>
  <div class="bg-primaryWhite">
    <div
      class="w-11/12 lg:w-3/5 mx-auto py-32 flex flex-col items-center justify-center"
    >
      <div
        class="w-full grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4"
      >
        <div
          class="w-full md:h-[300px] h-[400px]"
          v-for="(product, index) in products"
          :key="index"
        >
          <img
            :src="product.image"
            alt="product"
            class="w-full h-full hover:grayscale-[50%] transition-all duration-300 ease-in-out cursor-pointer"
          />
        </div>
      </div>
      <div
        class="lg:w-1/2 md:w-3/5 w-full p-12 flex flex-col items-center justify-center"
      >
        <p class="text-center text-base text-primaryBlack font-openSans">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <SocialMedias :color="socialMeadiasColor" />
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedias from "./Shared/SocialMedias.vue";
import { data } from "../assets/data/dummyData";

export default {
  name: "Products",
  components: {
    SocialMedias,
  },
  data() {
    return {
      products: data.products,
      socialMeadiasColor: "primaryGray",
    };
  },
};
</script>
