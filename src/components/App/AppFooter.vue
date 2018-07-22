<template>
  <div class="anim footer" :style="{height: showEditor ? '30vh' : '0vh'}">
    <div v-if="showEditor">
      <block-setting-rich-text :setting="inspectedBlock.settings.content"></block-setting-rich-text>
    </div>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";
import BlockSettingRichText from "~/components/Block/Settings/BlockSettingRichText";

export default {
  components: {
    BlockSettingRichText
  },
  mixins: [blockMixin],
  computed: {
    showEditor() {
      return (
        this.inspectedBlock && this.inspectedBlock.component === "text-content"
      );
    }
  }
};
</script>

<style>
.quill-editor {
  height: 30vh;
}
.footer {
  border-top: solid 1px #eaeaea;
}
</style>
