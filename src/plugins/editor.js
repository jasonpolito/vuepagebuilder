import Vue from "vue";
import mavonEditor from "mavon-editor";
import VueMarkdown from "vue-markdown";

import "mavon-editor/dist/css/index.css";

Vue.component("vue-markdown", VueMarkdown);
Vue.use(mavonEditor);
