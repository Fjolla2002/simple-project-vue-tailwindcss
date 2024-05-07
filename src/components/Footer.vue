<template>
  <div class="bg-backgroundGray">
    <wrapper>
      <div class="w-full lg:w-1/2">
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
      <div class="w-full lg:w-1/2 lg:mt-0 mt-20">
        <div class="flex flex-col items-start justify-start">
          <section-title>Sign me up!</section-title>
          <p class="mt-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div
            class="w-full mt-8 h-30 flex flex-col items-center justify-start lg:flex-row lg:h-11"
          >
            <div class="relative w-full h-full lg:w-3/4">
              <input
                type="text"
                placeholder=""
                v-model="inputValue"
                class="px-4 py-2 w-full outline-none rounded-md bg-transparent border-2 border-secondaryGray focus:border-paragraphGray transition-all duration-300 ease-in-out"
                @focus="isFocused = true"
                @blur="(isFocused = false)"
              />
              <span
                class="absolute left-0 px-4 py-1 transition-all duration-300 ease-in-out"
                :class="{
                  'top-1': (!isFocused && inputValue == ''),
                  '-top-5': (isFocused || inputValue !== ''),
                  'scale-90': (isFocused || inputValue !== ''),
                  'bg-backgroundGray': (isFocused || inputValue !== ''),
                  'text-paragraphGray': (isFocused || inputValue !== ''),
                  'text-primaryGray': (!isFocused && inputValue == ''),
                }"
                >Enter your name</span
              >
            </div>
            <button
              @click="inputValue = ''"
              class="bg-primaryGray py-3 rounded-md w-full h-full text-base border-none uppercase font-bold font-openSans text-primaryBlack hover:bg-secondaryGray transition-all duration-300 ease-in-out lg:w-1/4 lg:mt-0 mt-4"
            >
              SUBMIT
            </button>
          </div>
          <div class="w-1/2">
            <social-medias :color="socialMediasColor" />
          </div>
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
      isFocused: false,
      inputValue: "",
    };
  },
};
</script>
