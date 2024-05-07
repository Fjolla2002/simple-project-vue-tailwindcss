<template>
  <div class="bg-backgroundGray">
    <container>
      <div class="py-32 flex flex-col">
        <div class="flex justify-start w-full lg:w-1/2">
          <section-title>Customized Digital Marketing Service</section-title>
        </div>
        <div class="mt-20 flex justify-center">
          <div
            class="w-full flex flex-col items-center justify-between gap-12 lg:w-3/4 lg:flex-row lg:gap-24"
          >
            <service-card
              v-for="(service, index) in services"
              :key="index"
              :image="service.image"
              :title="service.title"
              :desc="service.desc"
            />
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "./Shared/Container.vue";
import SectionTitle from "./Shared/Title.vue";
import ServiceCard from "./Shared/ServiceCard.vue";
import { data } from "../assets/data/dummyData";

export default {
  name: "Services",
  components: {
    Container,
    SectionTitle,
    ServiceCard,
  },
  data() {
    return {
      services: data.services,
    };
  },
};
</script>
