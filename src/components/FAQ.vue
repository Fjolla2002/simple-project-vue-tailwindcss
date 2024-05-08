<template>
    <div class="bg-primaryWhite py-20">
      <container>
        <div class="flex flex-col items-center justify-center pt-10">
          <div class="w-full text-center lg:w-3/4">
            <section-title>Frequently Asked Questions</section-title>
            <subtitle>We've compiled a list of commonly asked questions to provide you with quick and informative answers.</subtitle>
          </div>
          <div class="flex flex-col items-center justify-center w-full  mt-12">
              <div v-for="(faq, index) in faqs" :key="index" class="w-full h-auto p-4 first:border-t-2 border-b-2 flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out" @click="toggleAnswer(index)">
                  <div class="w-9/12">
                      <h5 class="text-2xl font-ubuntu text-primaryBlack">{{ faq.question }}</h5>
                      <p class="text-base mt-4 font-openSans text-paragraphGray transition-all duration-300 ease-in-out" v-show="faq.showAnswer">{{ faq.answer }}</p>
                  </div>
                  <div class="text-2xl text-primaryBlack">
                      <font-awesome-icon :icon="faq.showAnswer ? 'chevron-up' : 'chevron-down'" />
                  </div>
              </div>
          </div>
        </div>
      </container>
    </div>
  </template>
  
  <script>
  import SectionTitle from "./Shared/Title.vue";
  import Subtitle from "./Shared/Subtitle.vue";
  import Container from "./Shared/Container.vue";
  import { data } from "@/assets/data/dummyData";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
  
  library.add(faChevronDown, faChevronUp);
  
  export default {
    name: "FrequentlyAskedQuestions",
    components: {
      SectionTitle,
      Container,
      Subtitle,
      FontAwesomeIcon,
    },
    data() {
      return {
          faqs: data.faq,
      };
    },
    methods: {
      toggleAnswer(index) {
        this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
      }
    }
  };
  </script>
  