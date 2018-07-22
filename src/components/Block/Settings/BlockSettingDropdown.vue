<template>
  <el-select
    size="large"
    style="width: 100%"
    v-model="setting.value"
    :placeholder="setting.label">
    <el-option
      v-for="item in setting.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: ["setting"]
};
</script>
