import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";
import { getBlockById } from "~/store/blocks";

const dropZoneMap = {
  card: ["column", "card", "container", "v-section", "v-masonry"],
  template: ["*"],
  "v-section": ["page"],
  "v-masonry": ["page"],
  "v-menu": ["page", "column", "card"],
  "v-link": ["v-menu"],
  btn: ["card", "column", "card", "container", "v-section"],
  "v-image": ["card", "column", "card", "container", "v-section"],
  column: ["grid"],
  grid: ["card", "container", "v-section"],
  "text-content": ["column", "card", "container", "v-section"]
};

export default {
  components: {
    draggable
  },
  computed: {
    ...mapGetters({
      blockChildren: "blocks/blockChildren",
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
            if (
              target &&
              (this.validDropZones.includes(target) ||
                this.validDropZones[0] === "*")
            ) {
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
  methods: {
    ...mapActions({
      setDraggingBlock: "blocks/setDraggingBlock",
      updateBlocks: "blocks/updateBlocks"
    }),
    parseBlockContent: target =>
      JSON.parse(target.getAttribute("data-block-content")),
    onChoose(evt) {
      let data = JSON.parse(evt.item.getAttribute("data-block"));
      let block = getBlockById(this.blockIndex, data.id);
      this.setDraggingBlock(block ? block : data);
    }
  }
};
