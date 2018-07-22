<template>
  <div class="p-4 text-sm header">
    <div class="flex">
      <div class="opacity-0">.</div>
      <div v-if="inspectedBlock">
          <div class="flex">
            <div
              v-for="(block, i) in blockHierarchy(inspectedBlock).reverse()"
              :key="block.id"
            >
              <span class="px-1" @click="inspect(block)">{{ block.name }}</span>
              <i class="px-1 el-icon-arrow-right" v-if="i < blockHierarchy(inspectedBlock).length - 1"></i>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";
import uuid from "uuid/v4";
export default {
  mixins: [blockMixin],
  data() {
    return {
      dialogVisible: false
    };
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