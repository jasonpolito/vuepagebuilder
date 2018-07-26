<template>
  <el-color-picker
    v-model="setting.value"
    show-alpha
    :predefine="colors"
  ></el-color-picker>
</template>

<script>
export default {
  props: ["setting"],
  data() {
    return {
      colors: [
        "#e53935",
        "#d81b60",
        "#8e24aa",
        "#673ab7",
        "#3949ab",
        "#1e88e5",
        "#039be5",
        "#00897b",
        "#00acc1",
        "#43a047",
        "#7cb342",
        "#c0ca33",
        "#c0ca33",
        "#fdd835",
        "#ffb300",
        "#fb8c00",
        "#f4511e",
        "#757575",
        "#546e7a",
        "#6d4c41",
        "#ffffff",
        "#333333"
      ]
    };
  }
};
</script>

<style>
.el-color-picker,
.el-color-picker__trigger {
  width: 100%;
}
</style>
