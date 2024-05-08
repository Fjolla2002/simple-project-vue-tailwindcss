<template>
  <div class="flex flex-col items-start justify-center hover:shadow-lg hover:shadow-paragraphGray transition-all duration-300 ease-in-out">
    <div
      class="w-full h-[430px] bg-cover bg-center bg-no-repeat object-cover hover:grayscale-[50%] xlg:h-[390px]"
      :style="{ backgroundImage: 'url(' + image + ')'}"
    ></div>
    <div class="p-8">
      <h5 class="text-2xl text-primaryBlack font-ubuntu font-bold mb-8">
      {{ title }}
    </h5>
    <p class="text-base text-primaryBlack font-openSans mb-12">{{ desc }}</p>
    <router-link
      to="/"
      class="text-3xl text-primaryGray hover:text-secondaryGray transition-colors duration-300 ease-in-out"
    >
      <font-awesome-icon icon="arrow-right" class="text-2xl" />
    </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight);

export default {
  name: "ServiceCard",
  props: {
    image: String,
    title: String,
    desc: String,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
