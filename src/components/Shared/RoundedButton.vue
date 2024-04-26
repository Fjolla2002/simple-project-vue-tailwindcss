<template>
  <button
    class="mt-12 lg:px-14 px-8 py-4 rounded-full tracking-wider text-base border-none uppercase font-bold font-openSans transition-all duration-300 ease-in-out"
    :class="[colorVariants[color], backgroundVariants[background], hoverBackgroundVariants[hoverBackground]]"
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
  data() {
    return {
      colorVariants: {
        'primaryBlack': 'text-primaryBlack'
      },
      backgroundVariants: {
        'primaryWhite': 'bg-primaryWhite',
        'backgroundGray': 'bg-backgroundGray',
      },
      hoverBackgroundVariants: {
        'primaryGray': 'hover:bg-primaryGray',
      }
    }
  }
};
</script>
