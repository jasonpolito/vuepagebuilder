<template>
  <div class="h-full sidebar left-sidebar overflow-scroll">
    <app-blocks></app-blocks>
  </div>
</template>


<script>
import AppBlocks from "~/components/App/AppBlocks";

export default {
  components: {
    AppBlocks
  }
};
</script>

<style>
.sidebar {
  border-right: solid 1px #eaeaea;
  border-left: solid 1px #eaeaea;
}
</style>
