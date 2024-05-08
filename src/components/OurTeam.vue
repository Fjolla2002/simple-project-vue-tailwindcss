<template>
  <div class="bg-backgroundGray">
    <container>
      <div class="flex flex-col items-center justify-center pt-10">
        <section-title>Our Amazing Team</section-title>
        <div class="w-full text-center lg:w-3/4">
          <subtitle>Get to know the faces behind our success.</subtitle>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import SectionTitle from "./Shared/Title.vue";
import Subtitle from "./Shared/Subtitle.vue";
import Container from "./Shared/Container.vue";

export default {
  name: "OurTeam",
  components: {
    SectionTitle,
    Container,
    Subtitle,
  },
};
</script>
