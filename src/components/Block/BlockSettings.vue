<template>
  <div>
    <div v-if="Object.keys(responsiveSettings).length" class="pr-4" style="margin-left: -3px">
      <el-tabs tab-position="left">
        <el-tab-pane
          v-for="(label, key) in labels"
          :key="key"
          class="pb-4"
        >
          <span slot="label"><i :class="`icon-${icons[key]}`"></i></span>
          <div
            class="py-2 pl-2"
            v-for="(setting, i) in responsiveSettings"
            :key="i"
          >
            <div class="text-grey-dark text-xs">{{ setting.label }} <span class="text-grey">({{ labels[key] }})</span></div>
            <component :is="setting.component" :setting="setting.viewports[key]"></component>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="Object.keys(standardSettings).length" class="px-4">
      <div
        v-for="(option, setting) in standardSettings"
        :key="setting"
        class="py-2"
      >
        <div>
          <div class="text-grey-dark text-xs">{{ option.label }}</div>
          <component :is="option.component" :setting="option"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  props: ["block"],
  mixins: [blockMixin],
  data() {
    return {
      icons: {
        lg: "screen-desktop",
        md: "screen-tablet",
        sm: "screen-smartphone"
      },
      labels: {
        lg: "Desktop",
        md: "Tablet",
        sm: "Mobile"
      }
    };
  },
  computed: {
    standardSettings() {
      let blockedComponents = ["block-setting-rich-text"];
      let filtered = {};
      for (let key in this.block.settings) {
        let setting = this.block.settings[key];
        if (
          !blockedComponents.includes(setting.component) &&
          !this.responsiveSettings.includes(setting)
        ) {
          filtered[key] = setting;
        }
      }
      return filtered;
    }
  }
};
</script>
