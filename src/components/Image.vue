<template>
  <div
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)"
    v-editable
    >
    <div>
      <img
        :id="block.component + block.id"
        :alt="block.settings.altText.value"
        :src="block.settings.image.value"
        class="w-full align-top rounded shadow-lg bg-grey-light"
      >
    </div>
    <style>{{ blockStyle }}</style>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
