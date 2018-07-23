<template>
  <page :block="currentPage"></page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentPage: "blocks/currentPage"
    })
  }
};
</script>
