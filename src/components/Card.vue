<template>
  <div
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)"
    class="my-4"
  >
    <div
      class="card"
      v-editable
      :style="{background: block.settings.color.value}"
    >
      <no-ssr>
        <draggable v-model="list" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)">
          <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
        </draggable>
      </no-ssr>
    </div>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
