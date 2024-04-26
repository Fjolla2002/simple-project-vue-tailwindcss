<template>
  <button
    class="mt-12 lg:px-14 px-8 py-4 rounded-full tracking-wider text-base border-none uppercase font-bold font-openSans transition-all duration-300 ease-in-out"
    :class="style"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "RoundedButton",
  props: {
    color: String,
    background: String,
    hoverBackground: String,
  },
  computed: {
    style() {
      return `text-${this.color} bg-${this.background} hover:bg-${this.hoverBackground}`;
    },
  },
};
</script>
