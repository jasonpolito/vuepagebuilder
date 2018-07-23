<template>
  <div class="h-full sidebar overflow-scroll">
    <template v-if="inspectedBlock">
      <div class="p-4">
        <div class="flex items-center justify-between pb-4">
          <div>
            <div class="h1">{{ inspectedBlock.name }}</div>
          </div>
          <div class="flex">
            <div class="pr-2">
              <el-button size="mini" icon="icon-docs" @click="duplicateBlock(inspectedBlock)" circle></el-button>
            </div>
            <div>
              <el-button size="mini" icon="icon-trash" @click="removeBlock(inspectedBlock)" circle></el-button>
            </div>
          </div>
        </div>
        <div v-if="inspectedBlock.actions">
          <div v-for="(text, action) in inspectedBlock.actions" :key="text">
            <el-button size="mini" @click="callMethod(action)">{{ text }}</el-button>
          </div>
        </div>
        <el-collapse v-model="activeTab" accordion>
          <el-collapse-item name="settings">
            <template slot="title">
              <i class="icon-settings pr-2"></i>Settings
            </template>
            <block-settings :block="inspectedBlock"></block-settings>
          </el-collapse-item>
          <el-collapse-item name="styles">
            <template slot="title">
              <i class="icon-drop pr-2"></i>Custom CSS
            </template>
            <div class="text-xs text-grey font-mono">.element {</div>
            <div class="text-xs">
              <el-input
                type="textarea"
                :rows="10"
                class="font-mono"
                placeholder="Custom CSS"
                v-model="inspectedBlock.css">
              </el-input>
            </div>
            <div class="text-xs text-grey font-mono">}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </template>
  </div>
</template>

<script>
import uuid from "uuid/v1";
import BlockSettings from "~/components/Block/BlockSettings";
import blockMixin from "~/mixins/block";
import html2canvas from "html2canvas";
import { generateBlockTemplate } from "~/plugins/components";

function blobToDataURL(blob, callback) {
  var a = new FileReader();
  a.onload = function(e) {
    callback(e.target.result);
  };
  return a.readAsDataURL(blob);
}

export default {
  components: {
    BlockSettings
  },
  data() {
    return {
      activeTab: "settings",
      css: "{background: red;}"
    };
  },
  mixins: [blockMixin],
  methods: {
    callMethod(name) {
      console.log(name);
      this[name]();
    },
    addColumn() {
      let block = generateBlockTemplate(
        { column: {} },
        this.inspectedBlock.id
      )[0];
      block.order = this.blockChildren(this.inspectedBlock.id).length;
      console.log(block);
      this.addBlock(block);
    },
    captureScreenShot() {
      html2canvas(document.querySelector("#" + this.inspectedBlock.id)).then(
        function(canvas) {
          canvas.toBlob(blob => {
            blobToDataURL(blob, dataurl => {
              document.querySelector("#test").setAttribute("src", dataurl);
            });
          });
        }
      );
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
      this.inspect(newBlock);
    }
  }
};
</script>