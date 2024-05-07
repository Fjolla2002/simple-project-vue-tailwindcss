<template>
  <div class="bg-primaryWhite">
    <wrapper>
      <div
        class="w-full flex flex-col items-center justify-center text-center lg:w-1/2"
      >
        <section-title>
          We are the experts in quality business strategy
        </section-title>
        <img
          src="@/assets/images/strategy1.jpeg"
          alt="strategy1"
          className="mt-12 w-10/12 h-[400px] hover:brightness-90 hover:scale-95 transition-all duration-300 ease-in-out lg:w-3/5"
        />
      </div>
      <div class="w-10/12 lg:w-1/2">
        <div class="flex-col items-center justify-center">
          <img
            src="@/assets/images/strategy2.jpeg"
            alt="strategy1"
            className="mt-12 w-4/5 h-[350px] hover:brightness-90 hover:scale-105 transition-all duration-300 ease-in-out lg:w-3/5"
          />
          <p class="mt-12 text-base text-primaryBlack font-openSans">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <rounded-button
            :color="btnTextColor"
            :background="btnBackground"
            :hoverBackground="btnHoverBackground"
          >
            Learn more
          </rounded-button>
        </div>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from "./Shared/TwoPiecesWrapper.vue";
import SectionTitle from "./Shared/Title.vue";
import RoundedButton from "./Shared/RoundedButton.vue";

export default {
  name: "Strategy",
  components: {
    Wrapper,
    SectionTitle,
    RoundedButton,
  },
  data() {
    return {
      btnTextColor: "primaryBlack",
      btnBackground: "backgroundGray",
      btnHoverBackground: "primaryGray",
    };
  },
};
</script>
