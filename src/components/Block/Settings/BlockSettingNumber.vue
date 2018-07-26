<template>
  <el-input-number
    :min="0"
    :max="32"
    v-model="setting.value"
  ></el-input-number>
</template>

<script>
export default {
  props: ["setting"]
};
</script>
