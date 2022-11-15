<template>
  <PulseLoader :loading="true" :color="color" />
</template>

<script>

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "my-loader",
  props: {
    color: {
      type: String,
      default: "blue",
    },
  },
  components: {
    PulseLoader,
  },
};
</script>
