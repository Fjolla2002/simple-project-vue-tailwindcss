<template>
  <div class="bg-primaryWhite">
    <Wrapper>
      <div
        class="lg:w-1/2 w-full flex flex-col items-center justify-center text-center"
      >
        <Title>We are the experts in quality business strategy</Title>
        <img
          src="@/assets/images/strategy1.jpeg"
          alt="strategy1"
          className="mt-12 lg:w-4/5 w-10/12 h-[400px]"
        />
      </div>
      <div class="lg:w-1/2 w-10/12">
        <div class="flex-col items-center justify-center">
          <img
            src="@/assets/images/strategy2.jpeg"
            alt="strategy1"
            className="mt-12 w-4/5 h-[350px]"
          />
          <p class="mt-12 text-base text-primaryBlack font-openSans">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <RoundedButton
            :color="primaryBlack"
            :background="backgroundGray"
            :hoverBackground="primaryGray"
          >
            Learn more
          </RoundedButton>
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "./Shared/TwoPiecesWrapper.vue";
import Title from "./Shared/Title.vue";
import RoundedButton from "./Shared/RoundedButton.vue";
export default {
  components: {
    Wrapper,
    Title,
    RoundedButton,
  },
  data() {
    return {
      primaryBlack: "primaryBlack",
      backgroundGray: "backgroundGray",
      primaryGray: "primaryGray",
    };
  },
};
</script>
