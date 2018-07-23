<template>
  <div
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
    class="my-4 card"
      v-editable
      :id="block.component + block.id"
      :style="{background: block.settings.backgroundColor.value, color: block.settings.textColor.value}"
    >
      <block-content :block="block"></block-content>
      <style v-if="block.css">{{ scopedStyle(block) }}</style>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
