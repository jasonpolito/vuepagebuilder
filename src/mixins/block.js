import uuid from "uuid/v1";
import { mapActions, mapGetters } from "vuex";
import { getBlockById } from "~/store/blocks";
import { blockTemplates } from "~/plugins/blockTemplates";
import draggableMixin from "~/mixins/draggable";

String.prototype.replaceAt = function(index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

export default {
  props: ["block"],
  mixins: [draggableMixin],
  computed: {
    ...mapGetters({
      blockChildren: "blocks/blockChildren",
      blockIndex: "blocks/index",
      inspectedBlock: "blocks/inspectedBlock",
      getPages: "blocks/getPages",
      draggingBlock: "blocks/draggingBlock",
      source: "blocks/source"
    }),
    responsiveSettings() {
      let settings = this.inspectedBlock.settings;
      let res = [];
      for (let option in settings) {
        let setting = settings[option];
        if (setting.responsive) {
          res.push(setting);
        }
      }
      return res;
    },
    blockStyle() {
      let settings = this.block.settings;
      let styleSettings = [
        "color",
        "background-color",
        "background-image",
        "text-align"
      ];
      let style = `#${this.block.component + this.block.id} {`;
      for (let option in settings) {
        if (styleSettings.includes(option)) {
          if (
            settings[option].value !==
            blockTemplates[this.block.component].settings[option].value
          ) {
            if (
              option === "background-image" &&
              settings[option].value.length
            ) {
              style += `${option}: url(${settings[option].value});`;
            } else {
              style += `${option}: ${settings[option].value};`;
            }
          }
        }
      }
      style += "}";
      style += `#${this.block.component + this.block.id} { ${this.block.css} }`;
      return style;
    }
  },
  methods: {
    ...mapActions({
      addBlock: "blocks/addBlock",
      removeBlock: "blocks/removeBlock",
      inspectBlock: "blocks/inspectBlock",
      unInspectBlock: "blocks/unInspectBlock"
    }),
    scopedStyle(block) {
      return `#${block.component + block.id} {${block.css}}`;
    },
    blockChildrenDeep(id) {
      let children = this.blockChildren(id);
      let res = [children];
      if (children.length) {
        children.forEach(child => {
          res.push(this.blockChildrenDeep(child.id));
        });
      }
      return [].concat.apply([], res);
    },
    blockHierarchy(block) {
      let res = [block];
      if (block.parent && block.parent !== "root") {
        res.push(
          this.blockHierarchy(getBlockById(this.blockIndex, block.parent))
        );
      }
      return [].concat.apply([], res);
    },
    blockIsInspected(block) {
      return this.inspectedBlock ? block.id === this.inspectedBlock.id : false;
    },
    inspect(target) {
      console.log(target);
      if (this.blockIsInspected(target)) {
        this.unInspectBlock(target);
      } else {
        console.log("tried");
        this.inspectBlock(target);
      }
    },
    duplicateBlock(block) {
      let children = this.blockChildrenDeep(block.id);
      let newBlock = _.cloneDeep(block);
      let index = Math.floor(Math.random() * 12) + 12;
      let shard = uuid().slice(2, 16);
      newBlock.id = newBlock.id.replaceAt(index, shard);
      newBlock.order = newBlock.order + 1;
      this.addBlock(newBlock);
      children.forEach(block => {
        let newBlock = _.cloneDeep(block);
        newBlock.id = newBlock.id.replaceAt(index, shard);
        newBlock.parent = newBlock.parent.replaceAt(index, shard);
        this.addBlock(newBlock);
      });
      this.inspect(newBlock);
    }
  }
};
