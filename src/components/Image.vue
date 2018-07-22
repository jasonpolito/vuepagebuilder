<template>
  <div
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)"
    v-editable
    >
    <div>
      <img :src="block.settings.image.value" alt="" class="w-full align-top rounded shadow-lg bg-grey-light" style="min-width: 2rem; min-height: 2rem">
    </div>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
