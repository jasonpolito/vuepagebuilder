<template>
  <div>
    <div class="flex flex-col h-screen" :class="previewingPage ? 'previewing-page' : ''">
      <app-header v-if="!previewingPage"></app-header>
      <div class="flex flex-1">
        <app-sidebar-left v-if="leftSidebar" :style="{width: `${sidebarWidth}px`}"></app-sidebar-left>
        <div :style="{width: pageWidth}" class="flex flex-col h-full">
          <div class="flex-1 overflow-scroll bg-grey-lighter">
            <nuxt/>
          </div>
          <app-footer></app-footer>
        </div>
        <app-sidebar-right v-if="rightSidebar" :style="{width: `${sidebarWidth}px`}"></app-sidebar-right>
      </div>
    </div>
    <div class="fixed pin-t pin-r p-4 z-50">
      <el-button
        v-if="previewingPage"
        @click="togglePagePreview"
        class="shadow-lg"
        icon="icon-pencil"
        circle
      ></el-button>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/App/AppHeader";
import AppSidebarLeft from "@/components/App/AppSidebarLeft";
import AppSidebarRight from "@/components/App/AppSidebarRight";
import AppFooter from "@/components/App/AppFooter";
import uiMixin from "~/mixins/ui";

export default {
  mixins: [uiMixin],
  components: {
    AppHeader,
    AppFooter,
    AppSidebarRight,
    AppSidebarLeft
  }
};
</script>
