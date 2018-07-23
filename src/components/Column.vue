<template>
  <div
    :class="`flex-auto ${widthClass}`"
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
    v-editable
  >
    <block-content :block="block"></block-content>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin],
  computed: {
    widthClass() {
      let res = "";
      let viewports = this.block.settings.width.viewports;
      for (let key in viewports) {
        let value = viewports[key].value;
        if (key !== "sm") {
          res += ` ${key}:${value}`;
        } else {
          res += ` ${value}`;
        }
      }
      return res;
    }
  }
};
</script>
