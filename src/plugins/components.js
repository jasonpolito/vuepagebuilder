import uuid from "uuid";
import Vue from "vue";
import Page from "@/components/Page";
import Grid from "@/components/Grid";
import Column from "@/components/Column";
import EditableBlock from "@/components/EditableBlock";
import BlockContent from "@/components/Block/BlockContent";
import Card from "@/components/Card";
import TextContent from "@/components/TextContent";
import Btn from "@/components/Btn";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Section from "@/components/Section";
import Menu from "@/components/Menu";
import Link from "@/components/Link";
import Masonry from "@/components/Masonry";
import BlockSettingDropdown from "@/components/Block/Settings/BlockSettingDropdown";
import BlockSettingColor from "@/components/Block/Settings/BlockSettingColor";
import BlockSettingText from "@/components/Block/Settings/BlockSettingText";
import BlockSettingImage from "@/components/Block/Settings/BlockSettingImage";
import BlockSettingRichText from "@/components/Block/Settings/BlockSettingRichText";
import BlockSettingRepeater from "@/components/Block/Settings/BlockSettingRepeater";
import BlockSettingNumber from "@/components/Block/Settings/BlockSettingNumber";

import { getBlockById } from "~/store/blocks";
import { blockTemplates, blockCollections } from "~/plugins/blockTemplates";
import _ from "lodash";

let blockIds = [];
export const generateBlockTemplate = (template, parent) => {
  let res = [];
  for (let type in template) {
    let children = template[type].children;
    let deepClone = _.cloneDeep(blockTemplates[type]);
    let deepCloneBlock = _.cloneDeep(template[type]);
    let block = _.merge(deepClone, deepCloneBlock);
    delete block.children;
    block.id = uuid.v4();
    block.css = "";
    block.order = template.order;
    blockIds.push(block.id);
    res.push(block);
    block.parent = parent;
    for (let key in block.settings) {
      let setting = block.settings[key];
      if (setting.responsive) {
        setting.viewports = {};
        ["lg", "md", "sm"].forEach(size => {
          setting.viewports[size] = {
            label: setting.label,
            options: setting.options,
            value: setting.responsiveDefaults[size]
          };
        });
      }
    }
    if (children && children.length) {
      children.forEach((child, i) => {
        child.order = i;
        res.push(generateBlockTemplate(child, block.id));
      });
    }
  }
  return [].concat.apply([], res);
};

export const generateBlockIds = (blocks, parent) => {
  let index = Math.floor(Math.random() * 12) + 12;
  let newId = uuid();
  let part = newId.slice(0, 6);
  blocks.forEach(block => {
    let id = block.id;
    block.id = id.slice(0, index) + part + id.slice(index - 6);
    if (block.parent) {
      let parent = block.parent;
      block.parent = parent.slice(0, index) + part + parent.slice(index - 6);
    }
  });
  return blocks;
};

export const buildingBlocks = generateBlockTemplate(blockTemplates, "source");
export const seedBlocks = [];
// export const seedBlocks = generateBlockTemplate(blockCollections, "root");

Vue.component("page", Page);
Vue.component("container", Container);
Vue.component("block-content", BlockContent);
Vue.component("grid", Grid);
Vue.component("v-menu", Menu);
Vue.component("editable-block", EditableBlock);
Vue.component("column", Column);
Vue.component("card", Card);
Vue.component("v-section", Section);
Vue.component("text-content", TextContent);
Vue.component("btn", Btn);
Vue.component("v-image", Image);
Vue.component("v-link", Link);
Vue.component("v-masonry", Masonry);

Vue.component("block-setting-dropdown", BlockSettingDropdown);
Vue.component("block-setting-color", BlockSettingColor);
Vue.component("block-setting-text", BlockSettingText);
Vue.component("block-setting-image", BlockSettingImage);
Vue.component("block-setting-rich-text", BlockSettingRichText);
Vue.component("block-setting-repeater", BlockSettingRepeater);
Vue.component("block-setting-number", BlockSettingNumber);
