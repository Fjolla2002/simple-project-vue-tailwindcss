<template>
    <div class="min-h-screen flex flex-col justify-center items-center bg-primaryGray text-primaryWhite">
        <h1 class="text-5xl text-center">Page Not Found</h1>
        <font-awesome-icon
        icon="face-frown"
        class="text-9xl mt-8"
      />
        <router-link to="/" class="mt-12 border-2 border-primaryWhite rounded-3xl px-6 py-2 hover:border-primaryBlack hover:text-primaryBlack transition-all duration-200 ease-in-out">Back to Home</router-link>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faFaceFrown } from "@fortawesome/free-solid-svg-icons";

library.add(faFaceFrown);

export default {
    components: {
        FontAwesomeIcon,
    }
}
</script>