<template>
  <div class="w-full mx-auto bg-primaryWhite py-6">
    <div class="w-11/12 lg:w-3/5 mx-auto flex items-center justify-center">
        <font-awesome-icon icon="bars" class="text-2xl"/>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

library.add(faBars)

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>


