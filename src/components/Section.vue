<template>
  <div
    v-editable
    :id="block.component + block.id"
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
    class="bg-cover bg-center anim"
    :class="`py-${block.settings.padding.value}`"
    style="min-height: 2rem"
  >
    <div class="container">
      <block-content :block="block"></block-content>
    </div>
    <style>{{ blockStyle }}</style>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin],
  computed: {}
};
</script>
