<template>
  <div :class="{'p-4': !previewingPage}">
    <div
      class="page" 
      v-editable
      :style="{transform: `scale(${zoomLevel})`, width: computedPageStyle}" style="transform-origin: 0 0">
      <no-ssr>
        <draggable v-model="list" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)" style="min-height: 100vh">
          <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
        </draggable>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import blockMixin from "~/mixins/block";
import uiMixin from "~/mixins/ui";

export default {
  mixins: [uiMixin, blockMixin],
  computed: {
    ...mapGetters({
      editingPage: "ui/editingPage"
    }),
    zoomLevel() {
      let page = document.documentElement.clientWidth;
      return (page - this.totalSidebarWidth) / page;
    },
    computedPageStyle() {
      let subtract = 0;
      if (this.leftSidebar) subtract += this.sidebarWidth;
      if (this.rightSidebar) subtract += this.sidebarWidth;
      return `calc(100% + ${subtract}px)`;
    }
  },
  methods: {
    ...mapActions({
      editPage: "ui/editPage"
    })
  }
};
</script>

<style>
.page {
  pointer-events: all;
}
</style>
