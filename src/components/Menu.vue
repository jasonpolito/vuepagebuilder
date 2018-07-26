<template>
  <div
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
  >

    <draggable
      class="grid grid-sm py-2"
      :data-block-content="JSON.stringify({component: block.component, id: block.id})"
      v-model="block.settings.links.value"
    >
      <component
        v-for="link in block.settings.links.value"
        :is="link.component"
        :key="link.id"
        :class="{'editable-focused': blockIsInspected(link)}"
        :block="link"
      >
      </component>
    </draggable>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";
import { generateBlockTemplate } from "~/plugins/components";

export default {
  mixins: [blockMixin],
  mounted() {
    if (!this.block.settings.links.value.length) {
      let child = generateBlockTemplate({ "v-link": {} }, this.block.id)[0];
      this.addBlock(child);
      this.block.settings.links.value.push(child);
    }
  }
};
</script>
