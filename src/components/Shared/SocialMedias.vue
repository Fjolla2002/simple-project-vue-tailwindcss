<template>
  <div
    class="flex items-center justify-between lg:w-1/5 w-2/5 mt-8 text-2xl"
    :class="`text-${color}`"
  >
    <font-awesome-icon
      :icon="['fab', 'facebook-f']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-105 transition-all duration-300 ease-in-out"
    />
    <font-awesome-icon
      :icon="['fab', 'twitter']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-105 transition-all duration-300 ease-in-out"
    />
    <font-awesome-icon
      :icon="['fab', 'instagram']"
      class="cursor-pointer hover:text-secondaryGray hover:scale-105 transition-all duration-300 ease-in-out"
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
};
</script>
