<template>
  <div
    class="text-content"
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
    >
    <div>
      <!-- <mavon-editor
        :toolbarsFlag="false"
        :subfield="false"
        :imageClick="() => false"
        defaultOpen="preview"
        :value="block.settings.content.value"
      ></mavon-editor> -->
      <vue-markdown
        :id="block.component + block.id"
        style="min-height: 2rem"
        :source="block.settings.content.value"
      ></vue-markdown>
    </div>
    <style>{{ blockStyle }}</style>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>
