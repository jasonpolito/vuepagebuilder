<template>
  <div class="py-2">
    <page :block="root"></page>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      root: "blocks/root"
    })
  }
};
</script>
