<template>
  <div class="flex flex-col items-center justify-center text-center p-12 border-2 border-backgroundGray hover:bg-primaryWhite transition-all duration-300 ease-in-out">
    <h3 class="text-5xl text-statsGray font-roboto">{{ count }}%</h3>
    <p class="text-sm text-paragraphGray font-openSans pt-4 lg:pt-0">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    count: Number,
    text: String,
  },
};
</script>
