<template>
  <div class="h-full markdown-editor">
    <no-ssr>
      <mavon-editor
        v-model="setting.value"
        language="en"
        :boxShadow="false"
        :toolbars="toolbars"
        :subfield="false"
        defaultOpen="editor"
        ref="editor"
        @imgAdd="uploadImage"
        @change="updateValue"
      ></mavon-editor>
    </no-ssr>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["setting"],
  data() {
    return {
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        fullscreen: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        table: true,
        undo: true,
        redo: true
      }
    };
  },
  methods: {
    updateValue(val) {
      this.setting.value = val;
    },
    uploadImage(pos, $file) {
      var formdata = new FormData();
      formdata.append("image", $file);
      axios({
        url: "https://api.imgur.com/3/image",
        method: "post",
        data: formdata,
        headers: { Authorization: "Client-ID aafbdbef59c7422" }
      }).then(res => {
        this.$refs.editor.$img2Url(pos, res.data.data.link);
      });
    }
  }
};
</script>

<style>
.v-note-wrapper {
  min-height: 100%;
  max-height: 100%;
}
.v-note-wrapper .v-note-op .v-right-item {
  max-width: 2rem !important;
  /* display: none; */
}
</style>
