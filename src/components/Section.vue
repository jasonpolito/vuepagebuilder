<template>
  <div
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)">
    <div
      class="py-16 bg-cover bg-center"
      style="min-height: 8rem"
      :style="{'background-image': block.settings.backgroundImage.value ? `url(${block.settings.backgroundImage.value})` : '', backgroundColor: block.settings.backgroundColor.value, color: block.settings.textColor.value}"
    >
      <div class="container">
        <no-ssr>
          <draggable v-model="list" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)">
            <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
          </draggable>
        </no-ssr>
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
