<template>
  <div class="w-full">
    <container>
      <div
        class="flex lg:flex-row flex-col justify-between lg:gap-20 items-center py-32"
      >
        <slot></slot>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "./Container.vue";

export default {
  name: "TwoPiecesWrapper",
  components: {
    Container,
  },
};
</script>
