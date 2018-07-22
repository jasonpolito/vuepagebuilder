<template>
  <div class="editable">
    <component :is="block.component" :block="block"></component>
    <slot></slot>
    <div class="editable-overlay"></div>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
