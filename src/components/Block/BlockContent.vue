<template>
  <no-ssr>
    <draggable v-model="list" :class="contentClass ? contentClass : ''" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify({component: block.component, id: block.id})">
      <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
    </draggable>
  </no-ssr>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  props: ["contentClass"],
  mixins: [blockMixin]
};
</script>
