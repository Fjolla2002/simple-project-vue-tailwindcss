<template>
  <div class="bg-primaryWhite">
    <container>
      <div class="py-32 flex flex-col items-center justify-center">
        <div
          class="w-full grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-rows-2 sm:grid-cols-2"
        >
          <div
            class="w-full h-[350px]"
            v-for="(product, index) in products"
            :key="index"
          >
            <div
              class="w-full h-full bg-cover bg-center bg-no-repeat hover:grayscale-[50%] hover:scale-95 hover:rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
              :style="{ backgroundImage: 'url(' + product.image + ')'}"
            ></div>
          </div>
        </div>
        <div
          class="w-full p-12 flex flex-col items-center justify-center lg:w-1/2 md:w-3/5"
        >
          <p class="text-center text-base text-primaryBlack font-openSans">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <div class="w-1/2 flex items-center justify-center lg:w-full">
            <SocialMedias :color="socialMeadiasColor" />
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "./Shared/Container.vue";
import SocialMedias from "./Shared/SocialMedias.vue";
import { data } from "../assets/data/dummyData";

export default {
  name: "Products",
  components: {
    Container,
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
