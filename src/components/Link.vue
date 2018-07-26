<template>
  <div
    v-editable
    @click.stop.prevent="inspect(block)"
    :data-block="JSON.stringify({component: block.component, id: block.id})"
  >
    <a
      :id="block.component + block.id"
      :href="block.settings.url.value"
    >{{ block.settings.text.value }}</a>
    <style>{{ blockStyle }}</style>
  </div>
</template>

<script>
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin]
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
