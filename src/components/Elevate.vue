<template>
  <div class="bg-primaryWhite">
    <wrapper>
      <div class="w-full flex flex-col items-start justify-center lg:w-1/2">
        <section-title> We Elevate the Beauty of Your Home </section-title>
        <subtitle>
          We created our own Digital Transformation Methodology
        </subtitle>
        <p class="mt-6 text-justify font-openSans">
          We want to understand who your clients are, how digital-savvy and
          engaged your employees are, what you are already doing to build a
          future-proof organisation and absorb anything you’re willing to throw
          at us. To do this, we gather insights from your employees, we
          interview key stakeholders and thoroughly look into your organisation.
        </p>
        <a
          :href="`tel:0123456789`"
          class="mt-6 py-4 flex items-center text-2xl font-semibold text-secondaryBlack hover:text-primaryGray hover:scale-95 transition-all duration-300 ease-in-out"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
          <span class="ml-2">Chat Now</span>
        </a>
      </div>
      <div class="w-full relative lg:w-1/2 lg:px-0 md:px-28">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primaryGray h-1/4 w-2/5 text-5xl flex items-center justify-center z-40 lg:w-1/3"
        >
          <h3 class="font-montserrat text-center text-primaryBlack font-bold">
            30k
          </h3>
        </div>
        <div class="flex justify-end">
          <img
            src="@/assets/images/elevate1.jpeg"
            alt="elevate2"
            class="w-7/12 h-80 object-cover cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out lg:w-1/2"
          />
        </div>
        <div class="flex justify-start">
          <img
            src="@/assets/images/elevate2.jpeg"
            alt="elevate2"
            class="w-7/12 h-80 object-cover cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out lg:w-1/2"
          />
        </div>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "../components/Shared/TwoPiecesWrapper.vue";
import SectionTitle from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(faWhatsapp);

export default {
  name: "Elevate",
  components: {
    Wrapper,
    SectionTitle,
    Subtitle,
    FontAwesomeIcon,
  },
};
</script>
