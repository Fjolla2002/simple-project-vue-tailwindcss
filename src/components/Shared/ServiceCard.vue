<template>
  <div class="flex flex-col items-start justify-center">
    <img
      :src="image"
      alt="service"
      class="w-full lg:h-[330px] h-[530px] object-cover"
    />
    <h5 class="text-2xl text-primaryBlack font-ubuntu font-bold my-8">
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
