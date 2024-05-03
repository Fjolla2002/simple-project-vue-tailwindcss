<template>
  <div
    class="flex items-center justify-between lg:w-2/5 w-full mt-8 text-2xl"
    :class="textColor"
  >
    <font-awesome-icon
      :icon="['fab', 'facebook-f']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-125 transition-all duration-300 ease-in-out"
    />
    <font-awesome-icon
      :icon="['fab', 'twitter']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-125 transition-all duration-300 ease-in-out"
    />
    <font-awesome-icon
      :icon="['fab', 'instagram']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-125 transition-all duration-300 ease-in-out"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faTwitter, faInstagram);

export default {
  name: "SocialMedias",
  components: {
    FontAwesomeIcon,
  },
  props: {
    color: String,
  },
  computed: {
    textColor() {
      return `text-${this.color}`;
    },
  },
};
</script>
