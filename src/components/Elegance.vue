<template>
  <div class="bg-backgroundGray">
    <container>
      <div class="py-32 h-full flex flex-col">
        <div class="lg:w-3/4 w-full flex justify-start">
          <section-title>
            We dwelling elegance do shutters appetite yourself diverted
          </section-title>
        </div>
        <div
          class="w-full mt-8 flex lg:justify-end justify-start font-openSans"
        >
          <div class="lg:w-1/2 w-full">
            <p class="text-primaryBlack text-justify text-base leading-7">
              Article evident arrived express highest men did boy. Mistress
              sensible entirely am so. Quick can manor smart money hopes worth
              too. Comfort produce husband boy her had hearing. Law others
              theirs passed but wishes. You day real less till dear read.
              Considered use dispatched melancholy sympathize discretion led. Oh
              feel if up to till like. He an thing rapid these after going drawn
              or.
            </p>
            <p class="mt-12 text-lg font-bold text-primaryGray italic">
              Article evident arrived express highest men did boy. Mistress
              sensible entirely am so. Quick can manor smart money hopes worth
              too. Comfort produce husband boy her had hearing. Law others
              theirs passed but wishes. You day real less till dear read.
              Considered use dispatched melancholy sympathize discretion led.
            </p>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import SectionTitle from "./Shared/Title.vue";
import Container from "./Shared/Container.vue";

export default {
  name: "Elegance",
  components: {
    SectionTitle,
    Container,
  },
};
</script>
