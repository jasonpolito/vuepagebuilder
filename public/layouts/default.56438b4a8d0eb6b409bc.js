webpackJsonp([0],{"+hzF":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["setting"],data:function(){return{content:"",editorOption:{placeholder:"What’s on your mind?",theme:"snow"}}},mounted:function(){this.content=this.setting.value},methods:{onEditorChange:function(e){e.quill;var t=e.html;e.text;this.setting.value=t}}}},"/2ex":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("k150"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("ZZ0g"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="components/Block/Settings/BlockSettingDropdown.vue",t.default=r.exports},"/lMw":function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("input",{ref:"image",attrs:{type:"file"}}),t("button",{on:{click:this.testUpload}},[this._v("Test")])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},"9JMY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(n("HBrT")),o=l(n("DtRx"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={mixins:[i.default],data:function(){return{dialogVisible:!1}},methods:{addChild:function(e){var t={parent:this.inspectedBlock.id,component:e.component,name:e.name,value:"",order:this.blockChildren(this.inspectedBlock.id).length,id:(0,o.default)()};this.addBlock(t),this.inspect(t)}}}},DLCH:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex flex-col h-screen"},[t("app-header"),t("div",{staticClass:"flex flex-1"},[t("app-sidebar"),t("div",{staticClass:"flex flex-col w-full"},[t("div",{staticClass:"w-full overflow-scroll bg-grey-lighter"},[t("nuxt")],1),t("app-footer")],1)],1)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},DMtR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(n("HBrT")),o=l(n("NV5f"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{BlockSettingRichText:o.default},mixins:[i.default],computed:{showEditor:function(){return this.inspectedBlock&&"text-content"===this.inspectedBlock.component}}}},ESHX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("EgCo"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("iOC4"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="components/Block/BlockSettings.vue",t.default=r.exports},EgCo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(n("HBrT")),o=c(n("/2ex")),l=c(n("flr+")),s=c(n("LXyg")),r=c(n("zzMR")),a=c(n("NV5f"));function c(e){return e&&e.__esModule?e:{default:e}}t.default={props:["block"],components:{BlockSettingColor:l.default,BlockSettingText:s.default,BlockSettingRichText:a.default,BlockSettingImage:r.default,BlockSettingDropdown:o.default},mixins:[i.default],computed:{filteredSettings:function(){var e=["block-setting-rich-text"],t={};for(var n in this.block.settings){var i=this.block.settings[n];e.includes(i.component)||(t[n]=i)}return t}}}},EsmE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("yjQh"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("pRUp"),r=!1;var a=function(e){r||n("zMyF")},c=n("VU/8")(o.a,s.a,!1,a,null,null);c.options.__file="components/App/AppBlocks.vue",t.default=c.exports},H4L9:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".quill-editor{height:30vh}.footer{border-top:1px solid #eaeaea}",""])},HISs:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-color-picker",{model:{value:e.setting.value,callback:function(t){e.$set(e.setting,"value",t)},expression:"setting.value"}})};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},J5jv:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".el-menu-item *{vertical-align:top}.el-submenu .el-menu-item{padding-top:1rem;padding-bottom:1rem;height:auto;line-height:1}",""])},JEaJ:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".sidebar{border-right:1px solid #eaeaea}",""])},KE4C:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["setting"]}},LXyg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("KE4C"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("noRM"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="components/Block/Settings/BlockSettingText.vue",t.default=r.exports},MNcH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(n("zLYB")),o=s(n("bYze")),l=s(n("fFAU"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={components:{AppHeader:i.default,AppFooter:l.default,AppSidebar:o.default}}},Ma2J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("MNcH"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("DLCH"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="layouts/default.vue",t.default=r.exports},NV5f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("+hzF"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("oWCM"),r=!1;var a=function(e){r||n("efho")},c=n("VU/8")(o.a,s.a,!1,a,null,null);c.options.__file="components/Block/Settings/BlockSettingRichText.vue",t.default=c.exports},Nnme:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"h-full sidebar  overflow-scroll",staticStyle:{width:"360px"}},[t("app-blocks")],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},T91b:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4 text-sm header"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"opacity-0"},[e._v(".")]),e.inspectedBlock?n("div",[n("div",{staticClass:"flex"},e._l(e.blockHierarchy(e.inspectedBlock).reverse(),function(t,i){return n("div",{key:t.id,staticClass:"text-grey"},[n("span",{staticClass:"px-1",on:{click:function(n){e.inspect(t)}}},[e._v(e._s(t.name))]),i<e.blockHierarchy(e.inspectedBlock).length-1?n("i",{staticClass:"px-1 el-icon-arrow-right"}):e._e()])}))]):e._e(),e._m(0)])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("i",{staticClass:"el-icon-edit"})])}]};t.a=o},Z9ae:function(e,t,n){var i=n("JEaJ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("077040d2",i,!1,{sourceMap:!1})},ZZ0g:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{staticStyle:{width:"100%"},attrs:{size:"large",placeholder:e.setting.label},model:{value:e.setting.value,callback:function(t){e.$set(e.setting,"value",t)},expression:"setting.value"}},e._l(e.setting.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},bYze:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("s8fX"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("Nnme"),r=!1;var a=function(e){r||n("Z9ae")},c=n("VU/8")(o.a,s.a,!1,a,null,null);c.options.__file="components/App/AppSidebar.vue",t.default=c.exports},dDuO:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".header[data-v-1697d435]{border-bottom:1px solid #eaeaea}",""])},efho:function(e,t,n){var i=n("zHt6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("6309e630",i,!1,{sourceMap:!1})},fFAU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("DMtR"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("jX3g"),r=!1;var a=function(e){r||n("z/Xc")},c=n("VU/8")(o.a,s.a,!1,a,null,null);c.options.__file="components/App/AppFooter.vue",t.default=c.exports},"flr+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("osEc"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("HISs"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="components/Block/Settings/BlockSettingColor.vue",t.default=r.exports},iOC4:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[Object.keys(e.filteredSettings).length?n("div",[n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-setting"}),n("span",[e._v("Block Settings")])]),e._l(e.filteredSettings,function(t,i,o){return n("div",{key:i,staticClass:"px-6 py-4",staticStyle:{background:"#ecf5ff"},attrs:{index:"3-"+o}},[n("div",{staticClass:"py-2 text-grey-dark text-xs"},[e._v(e._s(t.label))]),n(t.component,{tag:"component",attrs:{setting:t}})],1)})],2)],1):e._e()])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},jX3g:function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"anim footer",style:{height:this.showEditor?"30vh":"0vh"}},[this.showEditor?t("div",[t("block-setting-rich-text",{attrs:{setting:this.inspectedBlock.settings.content}})],1):this._e()])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},k150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["setting"]}},noRM:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",{attrs:{placeholder:e.setting.label},model:{value:e.setting.value,callback:function(t){e.$set(e.setting,"value",t)},expression:"setting.value"}})};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},oWCM:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("no-ssr",[n("quill-editor",{ref:"textEditor",attrs:{options:e.editorOption},on:{change:function(t){e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},onxN:function(e,t,n){var i=n("dDuO");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("047b721e",i,!1,{sourceMap:!1})},osEc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["setting"]}},pRUp:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[e._v("Available Child Blocks")])]),n("draggable",{attrs:{value:e.sourceBlocks,clone:e.onClone,options:e.listDaggableOptions},on:{choose:e.onChoose}},e._l(e.sourceBlocks,function(t,i){return n("el-menu-item",{key:t.id,attrs:{index:"1-"+i,"data-block":JSON.stringify(t)}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-circle-plus-outline"}),n("span",[e._v("Templates")])]),n("draggable",{attrs:{value:e.blockCollections,clone:e.onCloneCollection,options:e.listDaggableOptions},on:{choose:e.onChoose}},e._l(e.blockCollections,function(t,i){return n("el-menu-item",{key:t.name,attrs:{index:"2-"+i,"data-block":JSON.stringify({component:"template",name:"Touts"})}},[e._v("\n          "+e._s(t.name)+"\n          "),n("img",{staticClass:"w-full vertical-align: topn-top rounded shadow-md",attrs:{src:t.image,alt:""}})])}))],2),e.inspectedBlock?[n("block-settings",{attrs:{block:e.inspectedBlock}}),n("el-menu-item",{attrs:{index:"3"},on:{click:function(t){e.duplicateBlock(e.inspectedBlock)}}},[n("i",{staticClass:"el-icon-plus"}),n("span",[e._v("Duplicate Block")])]),n("el-menu-item",{attrs:{index:"4"},on:{click:function(t){e.removeBlock(e.inspectedBlock)}}},[n("div",{staticClass:"text-red"},[n("i",{staticClass:"el-icon-delete"}),n("span",[e._v("Delete Block")])])])]:e._e()],2)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o},pn5o:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(n("mtWM"));t.default={props:["setting"],data:function(){return{imageUrl:""}},mounted:function(){this.imageUrl=this.setting.value},methods:{handleAvatarSuccess:function(e,t){console.log(e),this.imageUrl=URL.createObjectURL(t.raw),this.setting.value=this.imageUrl},testUpload:function(e){var t=this,n=new FormData,o=this.$refs.image.files[0];n.append("image",o),n.append("name","test"),n.append("description","test description");i.default.post("/3/image",n,{baseURL:"https://api.imgur.com",headers:{Authorization:"Client-ID aafbdbef59c7422"}}).then(function(e){console.log("image post success"),console.log(e),t.setting.value=e.data.data.link}).catch(function(e){console.log("image post error"),console.log(e)})}}}},s8fX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(n("HBrT")),o=s(n("EsmE")),l=s(n("DtRx"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={components:{AppBlocks:o.default},mixins:[i.default],data:function(){return{dialogVisible:!1}},methods:{addChild:function(e){this.addBlock({parent:this.inspectedBlock.id,component:e.component,name:e.name,value:"",order:this.blockChildren(this.inspectedBlock.id).length,id:(0,l.default)()})}}}},yjQh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=u(n("fZjL")),o=u(n("ESHX")),l=u(n("HBrT")),s=u(n("DtRx")),r=u(n("M4fF")),a=n("MaNx"),c=n("0d/V");function u(e){return e&&e.__esModule?e:{default:e}}t.default={components:{BlockSettings:o.default},data:function(){return{blockCollections:(0,i.default)(c.blockCollections).map(function(e){return{name:e,image:"",blocks:c.blockCollections[e]}})}},mixins:[l.default],computed:{sourceBlocks:function(){return this.inspectedBlock?this.availableChildren(this.inspectedBlock):this.blockChildren("source")}},methods:{getRoot:function(e){var t=e.map(function(e){return e.id});return e.filter(function(e){return!t.includes(e.parent)})[0]},onCloneCollection:function(e){var t=this,n=(0,a.generateBlockTemplate)(e.blocks,null);return(0,a.generateBlockIds)(n),n.forEach(function(e){t.addBlock(e)}),this.getRoot(n)},onClone:function(e){var t=r.default.cloneDeep(a.buildingBlocks.filter(function(t){return t.component===e.component})[0]);return t.id=(0,s.default)(),t.parent=null,this.addBlock(t),t},duplicateBlock:function(e){var t=this,n=this.blockChildrenDeep(e.id),i=r.default.cloneDeep(e),o=(0,s.default)();i.id+=o,i.order=i.order+1,this.addBlock(i),n.forEach(function(e){var n=r.default.cloneDeep(e);n.id+=o,n.parent+=o,t.addBlock(n)})}}}},"z/Xc":function(e,t,n){var i=n("H4L9");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("2330aab0",i,!1,{sourceMap:!1})},zHt6:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".ql-container.ql-snow,.ql-toolbar.ql-snow{border:0}",""])},zLYB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("9JMY"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("T91b"),r=!1;var a=function(e){r||n("onxN")},c=n("VU/8")(o.a,s.a,!1,a,"data-v-1697d435",null);c.options.__file="components/App/AppHeader.vue",t.default=c.exports},zMyF:function(e,t,n){var i=n("J5jv");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("4850c3c8",i,!1,{sourceMap:!1})},zzMR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("pn5o"),o=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);var s=n("/lMw"),r=n("VU/8")(o.a,s.a,!1,null,null,null);r.options.__file="components/Block/Settings/BlockSettingImage.vue",t.default=r.exports}});