import draggable from "vuedraggable";
import uuid from "uuid/v4";
import { mapActions, mapGetters } from "vuex";
import { getBlockById } from "~/store/blocks";

const dropZoneMap = {
  card: ["column", "card", "container", "v-section"],
  template: ["page"],
  "v-section": ["page"],
  btn: ["card", "column", "card", "container", "v-section"],
  "v-image": ["card", "column", "card", "container", "v-section"],
  column: ["grid"],
  grid: ["card", "container", "v-section"],
  "text-content": ["column", "card", "container", "v-section"]
};

export default {
  props: ["block"],
  data() {
    return {
      color: null
    };
  },
  computed: {
    ...mapGetters({
      blockChildren: "blocks/blockChildren",
      blockIndex: "blocks/index",
      inspectedBlock: "blocks/inspectedBlock",
      draggingBlock: "blocks/draggingBlock",
      root: "blocks/root",
      source: "blocks/source"
    }),
    list: {
      get() {
        return this.blockChildren(this.block.id);
      },
      set(children) {
        children.forEach((child, i) => {
          child.order = i;
          child.parent = this.block.id;
        });
        this.updateBlocks(children);
      }
    },
    validDropZones() {
      return this.draggingBlock
        ? dropZoneMap[this.draggingBlock.component]
        : [];
    },
    pageDaggableOptions() {
      return {
        animation: 100,
        group: {
          name: "pageGroup",
          put: item => {
            let parsed = this.parseBlockContent(item.el);
            let target = parsed ? parsed.component : false;
            if (target && this.validDropZones.includes(target)) {
              return true;
            }
            return false;
          }
        }
      };
    },
    listDaggableOptions() {
      return {
        sort: false,
        animation: 100,
        group: {
          name: "sourceGroup",
          pull: true,
          put: false
        }
      };
    }
  },
  components: {
    draggable
  },
  methods: {
    ...mapActions({
      addBlock: "blocks/addBlock",
      setDraggingBlock: "blocks/setDraggingBlock",
      changeHistory: "blocks/changeHistory",
      removeBlock: "blocks/removeBlock",
      cloneBlock: "blocks/cloneBlock",
      undo: "blocks/undo",
      updateBlocks: "blocks/updateBlocks",
      inspectBlock: "blocks/inspectBlock",
      unInspectBlock: "blocks/unInspectBlock",
      openDialog: "ui/openInspectBlockDialog"
    }),
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
    availableChildren(target) {
      if (!target || !dropZoneMap[target.component]) return [];
      let avaiable = [];
      for (let key in dropZoneMap) {
        let opts = dropZoneMap[key];
        opts.forEach(opt => {
          if (opt === target.component) avaiable.push(key);
        });
      }
      let blocks = this.blockIndex.filter(
        block => avaiable.includes(block.component) && block.parent === "source"
      );
      return blocks;
    },
    blockIsInspected(block) {
      return this.inspectedBlock ? block.id === this.inspectedBlock.id : false;
    },
    parseBlockContent: target =>
      JSON.parse(target.getAttribute("data-block-content")),
    inspect(target) {
      if (this.blockIsInspected(target)) {
        this.unInspectBlock(target);
      } else {
        this.inspectBlock(target);
      }
    },
    onChoose(target) {
      let data = JSON.parse(target.item.getAttribute("data-block"));
      let block = getBlockById(this.blockIndex, data.id);
      this.setDraggingBlock(block ? block : data);
    }
    // generateBlockIds: (block, parent) => {
    //   let res = [];
    //   block.id = uuid();
    //   if (parent) block.parent = parent
    //   this.blockChildren()
    //   block.
    //     return[].concat.apply([], res);
    // }
  }
};
