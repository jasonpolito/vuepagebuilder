<template>
  <div :class="!previewingPage ? 'p-4' : ''">
    <div class="fixed pin-t pin-r p-4 z-50">
      <el-button
        v-if="previewingPage"
        @click="togglePagePreview"
        class="shadow-lg"
        icon="icon-vector"
        circle
      ></el-button>
    </div>
    <div class="page" v-editable style="min-height: 87vh">
      <div :style="{zoom: zoomLevel}" class="anim">
        <no-ssr>
          <draggable v-model="list" :options="pageDaggableOptions" @choose="onChoose" :data-block-content="JSON.stringify(block)" style="min-height: 100vh">
            <component v-for="block in list" :is="block.component" :key="block.id" :block="block" :class="{'editable-focused': blockIsInspected(block)}"></component>
          </draggable>
        </no-ssr>
      </div>
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
      let page = document.documentElement.offsetWidth;
      return (page - this.totalSidebarWidth) / page;
    }
  },
  methods: {
    ...mapActions({
      editPage: "ui/editPage"
    })
  }
};
</script>
