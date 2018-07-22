<template>
  <div
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)">
    <no-ssr>
      <draggable v-model="list" :class="`grid py-4 ${block.settings.gutter.value} justify-${block.settings.justify.value} items-${block.settings.align.value}`" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)">
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
