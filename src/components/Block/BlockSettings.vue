<template>
  <div>
    <div v-if="Object.keys(filteredSettings).length">
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Block Settings</span>
        </template>
        <div
          v-for="(option, setting, index) in filteredSettings"
          :key="setting"
          class="px-6 py-4"
          style="background: #ecf5ff"
          :index="`3-${index}`"
        >
          <div class="py-2 text-grey-dark text-xs">{{ option.label }}</div>
          <component :is="option.component" :setting="option"></component>
        </div>
      </el-submenu>
    </div>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";
import BlockSettingDropdown from "~/components/Block/Settings/BlockSettingDropdown";
import BlockSettingColor from "~/components/Block/Settings/BlockSettingColor";
import BlockSettingText from "~/components/Block/Settings/BlockSettingText";
import BlockSettingImage from "~/components/Block/Settings/BlockSettingImage";
import BlockSettingRichText from "~/components/Block/Settings/BlockSettingRichText";

export default {
  props: ["block"],
  components: {
    BlockSettingColor,
    BlockSettingText,
    BlockSettingRichText,
    BlockSettingImage,
    BlockSettingDropdown
  },
  mixins: [blockMixin],
  computed: {
    filteredSettings() {
      let blockedComponents = ["block-setting-rich-text"];
      let filtered = {};
      for (let key in this.block.settings) {
        let setting = this.block.settings[key];
        if (!blockedComponents.includes(setting.component)) {
          filtered[key] = setting;
        }
      }
      return filtered;
    }
  }
};
</script>
