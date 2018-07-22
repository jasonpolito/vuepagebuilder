<template>
  <el-input
    :placeholder="setting.label"
    v-model="setting.value"
  ></el-input>
</template>

<script>
export default {
  props: ["setting"]
};
</script>
