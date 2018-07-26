<template>
  <div>
    <el-collapse v-model="activeTab" accordion class="-mr-4">
      <draggable
        v-model="setting.value"
        :options="{handle: '.handle'}"
      >
        <el-collapse-item
          v-for="(item, index) in setting.value"
          :key="index"
          :name="`${index}`"
        >
          <template slot="title"><i class="icon-cursor-move pr-2 text-grey handle"></i>{{ item.settings.text.value }}</template>
          <div
            v-for="(option, key) in item.settings"
            :key="key"
            class="pb-4 pr-4"
          >
            <div class="text-grey-dark text-xs">{{ option.label }}</div>
            <component
              :is="option.component"
              :setting="option"
            ></component>
          </div>
          <el-button
            @click="removeItem(item)"
            size="mini"
          >
            Remove
          </el-button>
        </el-collapse-item>
      </draggable>
    </el-collapse>
    <div class="pt-4">
      <el-button size="mini" @click="addItem">Add Item</el-button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { generateBlockTemplate } from "~/plugins/components";
import blockMixin from "~/mixins/block";

export default {
  props: ["setting"],
  mixins: [blockMixin],
  components: {
    draggable
  },
  data() {
    return {
      activeTab: null
    };
  },
  methods: {
    addItem() {
      let template = {};
      template[this.setting.repeater] = {};
      let block = generateBlockTemplate(template, this.inspectedBlock.id)[0];
      this.setting.value.push(block);
      this.activeTab = `${this.setting.value.length - 1}`;
    },
    removeItem(item) {
      this.setting.value.splice(this.setting.value.indexOf(item), 1);
    }
  },
  mounted() {}
};
</script>]