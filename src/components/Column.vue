<template>
  <div
  :class="`${block.settings.width.value}`"
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)"
     v-editable class="py-4">
        <no-ssr>
          <draggable v-model="list" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)">
            <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
          </draggable>
        </no-ssr>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
