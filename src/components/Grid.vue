<template>
  <div
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})">
    <no-ssr>
      <block-content :block="block" :content-class="`grid ${block.settings.gutter.value} justify-${block.settings.justify.value} items-${block.settings.align.value}`"></block-content>
    </no-ssr>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
