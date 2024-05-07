<template>
  <div class="w-full">
    <container>
      <div
        class="flex flex-col justify-between items-center py-32 lg:flex-row lg:gap-20"
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
