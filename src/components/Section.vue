<template>
  <div
    v-editable
    :id="block.id"
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})">
    <div
      class="py-16 bg-cover bg-center"
      style="min-height: 8rem"
      :style="{'background-image': block.settings.backgroundImage.value ? `url(${block.settings.backgroundImage.value})` : '', backgroundColor: block.settings.backgroundColor.value, color: block.settings.textColor.value}"
    >
      <div class="container">
        <block-content :block="block"></block-content>
      </div>
    </div>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
