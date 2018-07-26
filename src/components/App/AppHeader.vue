<template>
  <div class="p-4 text-sm header">
    <div class="flex items-center justify-between">
      <div class="grid items-center">
        <div>
            <el-button
              @click="toggleLeftSidebar"
              :icon="leftSidebar ? 'icon-arrow-left' : 'icon-arrow-right'"
              circle
            ></el-button>
        </div>
        <div class="flex text-xs text-grey-dark">
            <template v-if="inspectedBlock">
              <div
                v-for="(block, i) in blockHierarchy(inspectedBlock).reverse()"
                :key="block.id"
              >
                <span class="px-1" @click="inspect(block)">{{ block.name }}</span>
                <i class="px-1 el-icon-arrow-right" v-if="i < blockHierarchy(inspectedBlock).length - 1"></i>
              </div>
            </template>
        </div>
      </div>
      <div class="pr-4">
        <div class="grid">
          <el-button
            @click="toggleLeftSidebar"
            icon="icon-plus"
            circle
          ></el-button>
          <div>
            <el-select v-model="value8" filterable placeholder="Pages">
              <el-option
                v-for="item in pages"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <el-button
            @click="togglePagePreview"
            icon="icon-eye"
            circle
          ></el-button>
          <el-button
            @click="toggleRightSidebar"
            :icon="rightSidebar ? 'icon-arrow-right' : 'icon-arrow-left'"
            circle
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import blockMixin from "~/mixins/block";
import uuid from "uuid/v4";
import uiMixin from "~/mixins/ui";

export default {
  mixins: [uiMixin, blockMixin],
  data() {
    return {
      value8: "",
      dialogVisible: false
    };
  },
  computed: {
    ...mapGetters({
      pages: "blocks/getPages"
    })
  },
  methods: {
    addChild(block) {
      let newBlock = {
        parent: this.inspectedBlock.id,
        component: block.component,
        name: block.name,
        value: "",
        order: this.blockChildren(this.inspectedBlock.id).length,
        id: uuid()
      };
      this.addBlock(newBlock);
      this.inspect(newBlock);
    }
  }
};
</script>

<style scoped>
.header {
  border-bottom: solid 1px #eaeaea;
}
</style>