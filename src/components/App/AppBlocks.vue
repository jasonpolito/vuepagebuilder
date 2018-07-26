<template>
  <div class="p-4">
    <el-collapse accordion>
      <el-collapse-item name='elements'>
        <template slot="title">
          <i class="icon-grid pr-2"></i>
          <span>Elements</span>
        </template>
        <draggable
          :value="blockCollections"
          :clone="onCloneCollection"
          @choose="onChoose"
          :options="listDaggableOptions"
        >
          <div
            v-for="(collection, i) in blockCollections"
            :key="collection.name"
            :index="`1-${i}`"
            class="py-2"
            :data-block="JSON.stringify(blockJSON(getRoot(generateBlockTemplate(collection.blocks))))"
          >
            <img v-if="collection.image" :src="collection.image" alt="" class="w-full align-top rounded shadow-md">
            <span v-else>{{ collection.name }}</span>
          </div>
        </draggable>
      </el-collapse-item>
    </el-collapse>
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
        let collection = _.cloneDeep(blockCollections[key]);
        let image = collection.image;
        delete collection.image;
        console.log(collection);
        return {
          name: key,
          image: image,
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
    blockJSON: block => {
      return { id: block.id, component: block.component };
    },
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
    }
  }
};
</script>

<style>
.drag-handle-name {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  padding: 4px 6px;
  border-radius: 4px;
  background: white;
  transform: translate(-50%, -50%);
}
</style>
