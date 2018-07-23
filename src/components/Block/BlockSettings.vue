<template>
  <div>
    <div v-if="Object.keys(filteredSettings).length">
      <div
        v-for="(option, setting) in filteredSettings"
        :key="setting"
        class="pb-4"
      >
        <div v-if="option.responsive">
          <el-tabs>
            <el-tab-pane
              v-for="(viewport, opt) in option.viewports"
              :key="opt"
              class="pb-4"
            >
              <span slot="label"><i :class="`icon-${icons[opt]}`"></i></span>
              <div class="text-grey-dark text-xs">{{ option.label }} <i>({{ labels[opt] }})</i></div>
              <component :is="viewport.component" :setting="viewport"></component>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-else>
          <div class="text-grey-dark text-xs">{{ option.label }}</div>
          <component :is="option.component" :setting="option"></component>
        </div>
      </div>
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
  data() {
    return {
      icons: {
        sm: "screen-smartphone",
        md: "screen-tablet",
        lg: "screen-desktop"
      },
      labels: {
        sm: "Mobile",
        md: "Tablet",
        lg: "Desktop"
      }
    };
  },
  computed: {
    filteredSettings() {
      let blockedComponents = ["block-setting-rich-text"];
      let filtered = {};
      for (let key in this.block.settings) {
        let setting = this.block.settings[key];
        console.log(key, setting.responsive, setting);
        if (!blockedComponents.includes(setting.component)) {
          filtered[key] = setting;
        }
      }
      return filtered;
    }
  }
};
</script>
