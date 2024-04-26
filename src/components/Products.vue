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
            class="w-full h-full object-container hover:grayscale-[50%] transition-all duration-300 ease-in-out cursor-pointer"
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
import product1 from "../assets/images/product1.jpeg";
import product2 from "../assets/images/product2.jpeg";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product6 from "../assets/images/product6.jpeg";
import product7 from "../assets/images/product7.jpeg";
import product8 from "../assets/images/product8.jpg";
import SocialMedias from "./Shared/SocialMedias.vue";

export default {
  name: "Products",
  components: {
    SocialMedias,
  },
  data() {
    return {
      products: [
        {
          image: product1,
        },
        {
          image: product2,
        },
        {
          image: product3,
        },
        {
          image: product4,
        },
        {
          image: product5,
        },
        {
          image: product6,
        },
        {
          image: product7,
        },
        {
          image: product8,
        },
      ],
      socialMeadiasColor: "primaryGray",
    };
  },
};
</script>
