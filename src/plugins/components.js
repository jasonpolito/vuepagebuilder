import uuid from "uuid";
import Vue from "vue";
import Page from "@/components/Page";
import Grid from "@/components/Grid";
import Column from "@/components/Column";
import EditableBlock from "@/components/EditableBlock";
import Card from "@/components/Card";
import TextContent from "@/components/TextContent";
import Btn from "@/components/Btn";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Section from "@/components/Section";
import { blockTemplates, blockCollections } from "~/plugins/blockTemplates";
import _ from "lodash";

let blockIds = [];
export const generateBlockTemplate = (template, parent) => {
  let res = [];
  for (let type in template) {
    let children = template[type].children;
    let block = _.merge(
      _.cloneDeep(blockTemplates[type]),
      _.cloneDeep(template[type])
    );
    delete block.children;
    block.id = uuid.v4();
    blockIds.push(block.id);
    res.push(block);
    block.parent = parent;
    if (children && children.length) {
      children.forEach(child => {
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
    block.id = id.slice(0, index) + part + id.slice(index);
    if (block.parent) {
      let parent = block.parent;
      block.parent = parent.slice(0, index) + part + parent.slice(index);
    }
  });
  return blocks;
};

export const buildingBlocks = generateBlockTemplate(blockTemplates, "source");
export const seedBlocks = [];

Vue.component("page", Page);
Vue.component("container", Container);
Vue.component("grid", Grid);
Vue.component("editable-block", EditableBlock);
Vue.component("column", Column);
Vue.component("card", Card);
Vue.component("v-section", Section);
Vue.component("text-content", TextContent);
Vue.component("btn", Btn);
Vue.component("v-image", Image);
