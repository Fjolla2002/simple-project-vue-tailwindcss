<template>
  <div class="w-full mx-auto bg-primaryWhite py-6">
    <div class="w-11/12 lg:w-3/5 mx-auto flex items-center justify-center">
      <font-awesome-icon icon="bars" class="text-2xl cursor-pointer" @click="toggleMenu" />
    </div>
    <div
      class="w-full min-h-screen absolute top-0 left-0 z-50 overflow-hidden bg-black/[.7]"
      :class="navbarHidden"
    >
      <span class="absolute top-0 left-0 w-full h-full bg-transparent" @click="toggleMenu"></span>
      <div
        class="absolute h-full lg:w-1/6 w-1/2 bg-secondaryBlack text-primaryWhite"
      >
        <div class="relative flex flex-col items-center p-8">
          <font-awesome-icon icon="x" class="absolute top-0 right-0 p-8 text-2xl cursor-pointer" @click="toggleMenu" />
          <ul class="text-center lg:text-xl text-2xl mt-12">
            <li class="my-2"><a href="/" @click="toggleMenu">Home</a></li>
            <li class="my-"><a href="/#statistics" @click="toggleMenu">About</a></li>
            <li class="my-2"><a href="/#contact" @click="toggleMenu">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faX);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      navbarVisible: false,
      navbarHidden: "hidden",
    };
  },
  methods: {
    toggleMenu() {
      this.navbarVisible = !this.navbarVisible;
      this.navbarHidden = this.navbarVisible ? "" : "hidden";
    },
  },
};
</script>
