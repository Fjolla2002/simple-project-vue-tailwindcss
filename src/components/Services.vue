<template>
    <div class="bg-backgroundGray">
      <div class="w-11/12 lg:w-3/5 mx-auto py-32 flex flex-col">
        <div class="flex justify-start lg:w-1/2 w-full">
          <Title>Customized Digital Marketing Service</Title>
        </div>
        <div class="mt-20 flex justify-center">
          <div class="lg:w-3/4 w-full flex lg:flex-row flex-col items-center justify-between lg:gap-24 gap-12">
            <ServiceCard
              v-for="(service, index) in services"
              :key="index"
              :image="service.image"
              :title="service.title"
              :desc="service.desc"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Title from "./Shared/Title.vue";
  import ServiceCard from "./Shared/ServiceCard.vue";
  import service1 from '../assets/images/service1.jpeg';
  import service2 from '../assets/images/service2.jpeg';
  
  export default {
    components: {
      Title,
      ServiceCard
    },
    data() {
      return {
        services: [
          {
            image: service1,
            title: "For business owners",
            desc: "Sample text. Click to select the text box. Click again or double click to start editing the text."
          },
          {
            image: service2,
            title: "For bloggers",
            desc: "Sample text. Click to select the text box. Click again or double click to start editing the text."
          }
        ]
      };
    }
  };
  </script>
  