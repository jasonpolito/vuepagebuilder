<template>
  <div style="width: 360px" class="h-full sidebar  overflow-scroll">
    <app-blocks></app-blocks>
  </div>
</template>


<script>
import blockMixin from "~/mixins/block";
import AppBlocks from "~/components/App/AppBlocks";
import uuid from "uuid/v4";

export default {
  components: {
    AppBlocks
  },
  mixins: [blockMixin],
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    addChild(block) {
      this.addBlock({
        parent: this.inspectedBlock.id,
        component: block.component,
        name: block.name,
        value: "",
        order: this.blockChildren(this.inspectedBlock.id).length,
        id: uuid()
      });
    }
  }
};
</script>

<style>
.sidebar {
  border-right: solid 1px #eaeaea;
}
</style>
