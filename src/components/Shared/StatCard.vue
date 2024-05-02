<template>
  <div class="flex flex-col items-center justify-center text-center p-12">
    <h3 class="text-5xl text-statsGray font-roboto">{{ count }}%</h3>
    <p class="text-sm text-paragraphGray font-openSans lg:pt-0 pt-4">
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
