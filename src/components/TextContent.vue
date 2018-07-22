<template>
  <div
    class="text-content"
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify(block)"
    >
    <div class="pb-4">
      <div class="ql-editor" style="padding: 0">
        <div v-html="block.settings.content.value" style="min-height: 2rem"></div>
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
