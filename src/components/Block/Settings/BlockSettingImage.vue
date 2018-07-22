<template>
  <div>
    <input type="file" ref="image">
    <button @click="testUpload">Test</button>
  </div>
</template>

<script>
import axios from "axios";
// aafbdbef59c7422
// 3afb4f9ea34718a5ee3f88732758b36e966a94dd
export default {
  props: ["setting"],
  data() {
    return {
      imageUrl: ""
    };
  },
  mounted() {
    this.imageUrl = this.setting.value;
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.setting.value = this.imageUrl;
    },
    testUpload(file) {
      var form = new FormData();
      let image = this.$refs.image.files[0];
      form.append("image", image);
      form.append("name", "test");
      form.append("description", "test description");

      const config = {
        baseURL: "https://api.imgur.com",
        headers: {
          Authorization: "Client-ID " + "aafbdbef59c7422"
        }
      };
      axios
        .post("/3/image", form, config)
        .then(result => {
          console.log("image post success");
          console.log(result);
          this.setting.value = result.data.data.link;
        })
        .catch(error => {
          console.log("image post error");
          console.log(error);
        });
    }
  }
};
</script>