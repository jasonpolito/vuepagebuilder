<template>
  <div
    class="text-content"
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
    :style="{color: block.settings.textColor.value}"
    >
    <div>
      <div class="ql-editor" style="padding: 0">
        <div v-html="block.settings.content.value" :id="block.component + block.id" style="min-height: 2rem"></div>
      </div>
      <style v-if="block.css">{{ scopedStyle(block) }}</style>
    </div>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
