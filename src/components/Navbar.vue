<template>
  <div
    class="w-full mx-auto bg-primaryWhite py-6 fixed shadow-sm shadow-primaryGray z-50"
  >
    <!-- <container> -->
      <div class="flex items-center justify-end pr-8">
        <font-awesome-icon
          icon="bars"
          class="text-2xl cursor-pointer text-primaryBlack hover:text-primaryGray transition-all duration-300 ease-in-out"
          @click="toggleMenu"
        />
      </div>
    <!-- </container> -->
    <div
      class="w-full min-h-screen absolute top-0 left-0 z-50 bg-black/[.7]"
      :class="{ hidden: !navbarVisible }"
    >
      <span
        class="absolute top-0 left-0 w-full h-full bg-transparent"
        @click="toggleMenu"
      ></span>
      <div
        class="absolute top-0 right-0 h-full w-1/2 bg-secondaryBlack text-primaryWhite transition-all duration-300 ease-in-out lg:w-1/6"
      >
        <div class="relative flex flex-col items-center p-8">
          <font-awesome-icon
            icon="x"
            class="absolute top-0 left-0 p-8 text-2xl cursor-pointer text-primaryWhite hover:text-primaryGray"
            @click="toggleMenu"
          />
          <ul class="text-center text-2xl mt-12 lg:text-xl">
            <li
              class="my-2 hover:text-primaryGray hover:tracking-widest transition-all duration-300 ease-in-out"
            >
              <router-link to="/" @click="toggleMenu">Home</router-link>
            </li>
            <li
              class="my-4 hover:text-primaryGray hover:tracking-widest transition-all duration-300 ease-in-out"
            >
              <router-link to="/about" @click="toggleMenu">About</router-link>
            </li>
            <li
              class="my-2 hover:text-primaryGray hover:tracking-widest transition-all duration-300 ease-in-out"
            >
              <router-link to="/contact" @click="toggleMenu"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "./Shared/Container.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faX);

export default {
  components: {
    Container,
    FontAwesomeIcon,
  },
  data() {
    return {
      navbarVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.navbarVisible = !this.navbarVisible;
      // document.body.style.overflow = this.navbarVisible ? "hidden" : "auto";
    },
  },
};
</script>
