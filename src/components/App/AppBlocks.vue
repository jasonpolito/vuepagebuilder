<template>
  <div>
    <el-menu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Available Child Blocks</span>
        </template>
        <draggable
          :value="sourceBlocks"
          :clone="onClone"
          @choose="onChoose"
          :options="listDaggableOptions"
        >
          <el-menu-item
            v-for="(block, i) in sourceBlocks"
            :key="block.id"
            :index="`1-${i}`"
            :data-block="JSON.stringify(block)"
          >
            {{ block.name }}
          </el-menu-item>
        </draggable>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-circle-plus-outline"></i>
          <span>Templates</span>
        </template>
        <draggable
          :value="blockCollections"
          :clone="onCloneCollection"
          @choose="onChoose"
          :options="listDaggableOptions"
        >
          <el-menu-item
            v-for="(collection, i) in blockCollections"
            :key="collection.name"
            :index="`2-${i}`"
            :data-block="JSON.stringify({component: 'template', name: 'Touts'})"
          >
            {{ collection.name }}
            <img :src="collection.image" alt="" class="w-full vertical-align: topn-top rounded shadow-md">
          </el-menu-item>
        </draggable>
      </el-submenu>
      <template v-if="inspectedBlock">
        <block-settings :block="inspectedBlock"></block-settings>
        <el-menu-item index="3" @click="duplicateBlock(inspectedBlock)">
          <i class="el-icon-plus"></i>
          <span>Duplicate Block</span>
        </el-menu-item>
        <el-menu-item index="4" @click="removeBlock(inspectedBlock)">
          <div class="text-red">
            <i class="el-icon-delete"></i>
            <span>Delete Block</span>
          </div>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import BlockSettings from "~/components/Block/BlockSettings";
import blockMixin from "~/mixins/block";
import uuid from "uuid/v4";
import _ from "lodash";
import {
  buildingBlocks,
  generateBlockTemplate,
  generateBlockIds
} from "~/plugins/components";
import { blockCollections } from "~/plugins/blockTemplates";

export default {
  components: {
    BlockSettings
  },
  data() {
    return {
      blockCollections: Object.keys(blockCollections).map(key => {
        let collection = blockCollections[key];
        return {
          name: key,
          image: "",
          blocks: collection
        };
      })
    };
  },
  mixins: [blockMixin],
  computed: {
    sourceBlocks() {
      if (this.inspectedBlock) {
        return this.availableChildren(this.inspectedBlock);
      } else {
        return this.blockChildren("source");
      }
    }
  },
  methods: {
    getRoot: blocks => {
      let ids = blocks.map(block => block.id);
      return blocks.filter(block => !ids.includes(block.parent))[0];
    },
    onCloneCollection(collection) {
      let blocks = generateBlockTemplate(collection.blocks, null);
      generateBlockIds(blocks);
      blocks.forEach(block => {
        this.addBlock(block);
      });
      return this.getRoot(blocks);
    },
    onClone(block) {
      let seed = _.cloneDeep(
        buildingBlocks.filter(b => b.component === block.component)[0]
      );
      seed.id = uuid();
      seed.parent = null;
      this.addBlock(seed);
      return seed;
    },
    duplicateBlock(block) {
      let children = this.blockChildrenDeep(block.id);
      let newBlock = _.cloneDeep(block);
      let newId = uuid();
      newBlock.id += newId;
      newBlock.order = newBlock.order + 1;
      this.addBlock(newBlock);
      children.forEach(block => {
        let newBlock = _.cloneDeep(block);
        newBlock.id += newId;
        newBlock.parent += newId;
        this.addBlock(newBlock);
      });
    }
  }
};
</script>


<style>
.el-menu-item * {
  vertical-align: top;
}
.el-submenu .el-menu-item {
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: auto;
  line-height: 1;
}
</style>
