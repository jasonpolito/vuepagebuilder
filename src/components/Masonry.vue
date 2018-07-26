<template>
  <div
    class="py-4"
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
  >
    <draggable
      v-model="list"
      element="masonry"
      class="py-8"
      :component-data="{props: {cols: 4, gutter: 40}}"
      :options="pageDaggableOptions"
      @choose="onChoose"
      :data-block-content="JSON.stringify({component: block.component, id: block.id})"
    >
      <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
    </draggable>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
