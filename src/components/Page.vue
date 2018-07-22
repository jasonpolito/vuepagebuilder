<template>
  <div class="p-4">
    <div class="page" v-editable>
      <div style="zoom: 50%" class="pt-4">
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
