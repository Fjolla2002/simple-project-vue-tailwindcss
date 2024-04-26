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
  props: {
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    hoverBackground: {
      type: String,
    },
  },
  computed: {
    style() {
      return `text-${this.color} bg-${this.background} hover:bg-${this.hoverBackground}`
    }
  }
};
</script>
