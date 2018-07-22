<template>
  <div>
    <no-ssr>
      <quill-editor
        v-model='content'
        ref='textEditor'
        :options='editorOption'
        @change="onEditorChange($event)"
       ></quill-editor>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: ["setting"],
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "What’s on your mind?",
        theme: "snow"
      }
    };
  },
  mounted() {
    this.content = this.setting.value;
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      this.setting.value = html;
    }
  }
};
</script>

<style>
.ql-container.ql-snow,
.ql-toolbar.ql-snow {
  border: 0;
}
</style>
