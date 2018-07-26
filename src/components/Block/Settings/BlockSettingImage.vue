<template>
  <div>

    <file-pond
      name="image"
      ref="pond"
      label-idle="Drop image here or browse"
      :allow-multiple="false"
      :instantUpload="true"
      accepted-file-types="image/jpeg, image/png"
      :server="server"
      :files="files"
      @processfileprogress="onProgress"
      @removefile="onRemove"
      @init="handleFilePondInit"
    >
    </file-pond>
    
    <!-- <el-upload
      class="anim avatar-uploader"
      action="https://api.imgur.com/3/image"
      :headers="{Authorization: 'Client-ID aafbdbef59c7422'}"
      :data="requestData"
      :show-file-list="false"
      :on-error="onError"
      :on-success="onSuccess"
      :on-progress="onProgress"
      :before-upload="onBeforeUpload"
      :style="{opacity: uploading ? 0 : 1}"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-progress
      :style="{opacity: uploading ? 1 : 0}"
      class="upload-progress anim"
      :percentage="uploadProgress"
    ></el-progress> -->
    <!-- <input type="file" ref="image"> -->
    <!-- <button @click="testUpload">Test</button> -->
  </div>
</template>

<script>
import axios from "axios";
import blockMixin from "~/mixins/block";
// aafbdbef59c7422
// 3afb4f9ea34718a5ee3f88732758b36e966a94dd
export default {
  props: ["setting"],
  mixins: [blockMixin],
  data() {
    return {
      imageUrl: "",
      uploading: false,
      files: [],
      uploadProgress: 0,
      requestData: {
        name: "test",
        description: "test"
      },
      server: {
        url: "https://api.imgur.com/",
        process: {
          url: "./3/image",
          method: "POST",
          headers: {
            Authorization: "Client-ID aafbdbef59c7422"
          },
          onload: this.onSuccess,
          onerror: res => console.log(res)
        }
      }
    };
  },
  methods: {
    onRemove(file, pro) {
      this.files = [];
      if (this.inspectedBlock.component === "image") {
        this.setting.value = "/imageplaceholder.png";
      } else {
        this.setting.value = "";
      }
    },
    onError(res) {
      this.uploading = false;
    },
    handleFilePondInit: function() {},
    onSuccess(res, file) {
      let data = JSON.parse(res).data;
      this.imageUrl = data.link;
      this.setting.value = this.imageUrl;
      this.uploading = false;
    },
    onProgress(res) {},
    onBeforeUpload(file) {
      this.requestData.image = file;
      this.uploading = true;
    }
  }
};
</script>

<style>
.upload-progress {
  position: absolute;
  top: 50%;
  left: 0;
  pointer-events: none;
  width: 100%;
  transform: translateY(-50%);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100%;
  display: block;
}
.filepond--root {
  font-size: 10px;
}
</style>
