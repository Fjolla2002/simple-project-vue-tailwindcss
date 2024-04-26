<template>
  <div class="bg-backgroundGray">
    <wrapper>
      <div class="lg:w-1/2 w-full">
        <div class="flex flex-col items-start justify-start">
          <section-title>Contact Us</section-title>
          <p class="text-xl text-primaryBlack font-openSans mt-10">
            New York, 4140 Parker Rd. <br />
            Allentown, <br />
            New Mexico 31134
          </p>
          <div
            class="flex flex-col items-start justify-start mt-8 font-ubuntu text-2xl font-bold"
          >
            <a :href="`tel:+15556567789`" class="text-primaryGray">
              +1 (555) 656 77 89
            </a>
            <a :href="`mailto:info@sample.com`"> info@sample.com </a>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 w-full lg:mt-0 mt-20">
        <div class="flex flex-col items-start justify-start">
          <section-title>Sign me up!</section-title>
          <p class="mt-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div
            class="w-full mt-8 flex lg:flex-row flex-col items-center justify-start"
          >
            <input
              type="text"
              placeholder="Enter your Name"
              class="lg:w-3/4 px-4 py-2 w-full"
            />
            <button
              class="bg-primaryGray px-8 py-2 lg:w-1/4 w-full lg:mt-0 mt-4 text-base border-none uppercase font-bold font-openSans text-primaryBlack hover:bg-secondaryGray transition-all duration-300 ease-in-out"
            >
              SUBMIT
            </button>
          </div>
          <social-medias :color="socialMediasColor" />
        </div>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "./Shared/TwoPiecesWrapper.vue";
import SectionTitle from "./Shared/Title.vue";
import SocialMedias from "./Shared/SocialMedias.vue";

export default {
  name: "Footer",
  components: {
    Wrapper,
    SectionTitle,
    SocialMedias,
  },
  data() {
    return {
      socialMediasColor: "primaryBlack",
    };
  },
};
</script>
