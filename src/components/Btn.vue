<template>
  <div
    :class="`text-${block.settings.align.value}`"
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
  >
    <a
      :href="block.settings.link.value"
      :style="{background: block.settings.backgroundColor.value, color: block.settings.textColor.value}"
      class="btn"
    >
      {{ block.settings.text.value }}
    </a>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
