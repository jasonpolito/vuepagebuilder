<template>
  <div class="flex flex-col h-screen">
    <app-header></app-header>
    <div class="flex flex-1">
      <app-sidebar></app-sidebar>
      <div class="flex flex-col w-full">
        <div class="w-full overflow-scroll bg-grey-lighter">
          <nuxt/>
        </div>
        <app-footer></app-footer>
      </div>
      <app-sidebar></app-sidebar>
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/App/AppHeader";
import AppSidebar from "~/components/App/AppSidebar";
import AppFooter from "~/components/App/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppSidebar
  }
};
</script>
