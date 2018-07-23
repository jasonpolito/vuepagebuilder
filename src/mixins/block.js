import { mapActions, mapGetters } from "vuex";
import { getBlockById } from "~/store/blocks";
import draggableMixin from "~/mixins/draggable";

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
    })
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
      if (this.blockIsInspected(target)) {
        this.unInspectBlock(target);
      } else {
        this.inspectBlock(target);
      }
    }
  }
};
