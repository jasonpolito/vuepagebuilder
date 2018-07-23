<template>
  <div>
    <el-menu>
      <!-- <draggable
        :value="sourceBlocks"
        :clone="onClone"
        @choose="onChoose"
        :options="listDaggableOptions"
      >
        <el-menu-item
          v-for="(block, i) in sourceBlocks"
          :key="block.id"
          :index="`${i}`"
          :data-block="JSON.stringify(block)"
        >
          {{ block.name }}
        </el-menu-item>
      </draggable> -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-circle-plus-outline"></i>
          <span>Elements</span>
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
            :data-block="JSON.stringify(getRoot(generateBlockTemplate(collection.blocks)))"
          >
            {{ collection.name }}
            <img :src="collection.image" alt="" class="w-full vertical-align: topn-top rounded shadow-md">
          </el-menu-item>
        </draggable>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
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
    generateBlockTemplate,
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