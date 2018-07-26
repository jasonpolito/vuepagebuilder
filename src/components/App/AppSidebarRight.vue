<template>
  <div class="h-full flex flex-col sidebar overflow-scroll">
    <template v-if="inspectedBlock">
      <div class="p-4 pb-0" style="border-bottom: solid 1px #eaeaea;">
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
      </div>
      <div class="py-4 flex-1 overflow-scroll">
        <div v-if="inspectedBlock.actions" class="pb-4 px-4">
          <div v-for="(text, action) in inspectedBlock.actions" :key="text">
            <el-button size="mini" @click="callMethod(action)" v-html="text"></el-button>
          </div>
        </div>
        <el-collapse v-model="activeTab" accordion>
          <el-collapse-item name="settings">
            <template slot="title">
              <i class="icon-settings pr-2 pl-4"></i>Block Settings
            </template>
            <block-settings :block="inspectedBlock"></block-settings>
          </el-collapse-item>
          <el-collapse-item name="position">
            <template slot="title">
              <i class="icon-frame pr-2 pl-4"></i>Block Position
            </template>
            <div class="px-4">
              <div class="p-4 bg-grey-lighter rounded">
                <el-input-number size="mini" v-model="padding.top"></el-input-number>
                <div class="p-4 bg-white rounded"></div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="customCSS">
            <template slot="title">
              <i class="icon-drop pr-2 pl-4"></i>Custom CSS
            </template>
            <div class="px-4">
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
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="font-thin text-grey-dark p-4 font-mono" style="font-size: 8px">{{ inspectedBlock.id }}</div>
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
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      css: "{background: red;}"
    };
  },
  mixins: [blockMixin],
  methods: {
    callMethod(name) {
      this[name]();
    },
    addColumn() {
      let block = generateBlockTemplate(
        { column: {} },
        this.inspectedBlock.id
      )[0];
      block.order = this.blockChildren(this.inspectedBlock.id).length;
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
    }
  }
};
</script>