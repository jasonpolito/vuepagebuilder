<template>
  <div class="footer" :style="{height: showEditor ? '45vh' : '0vh'}">
    <block-setting-rich-text v-if="showEditor" :setting="inspectedBlock.settings.content"></block-setting-rich-text>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";
import uiMixin from "~/mixins/ui";
import BlockSettingRichText from "~/components/Block/Settings/BlockSettingRichText";

export default {
  components: {
    BlockSettingRichText
  },
  mixins: [blockMixin, uiMixin],
  computed: {
    showEditor() {
      return (
        this.inspectedBlock &&
        this.inspectedBlock.component === "text-content" &&
        !this.previewingPage
      );
    }
  }
};
</script>

<style>
.footer {
  border-top: solid 1px #eaeaea;
}
</style>
