import uuid from "uuid/v4";
import Vue from "vue";
import { buildingBlocks, seedBlocks } from "~/plugins/components";

export const getBlockById = (blocks, id) => {
  let block = blocks.filter(block => block.id === id)[0];
  return block;
};

const getBlockIndexById = (state, id) => {
  let block = state.index.filter(block => block.id === id)[0];
  let index = state.index.indexOf(block);
  return index;
};

let rootBlock = {
  id: "root",
  component: "page",
  meta: {
    title: "Homepage"
  },
  name: "Homepage",
  parent: null
};

let sourceContainer = {
  id: "source",
  parent: null
};

console.log(seedBlocks);

export const state = () => ({
  history: [],
  index: [rootBlock, sourceContainer, ...buildingBlocks, ...seedBlocks],
  currentPage: "root",
  inspectedBlock: null,
  draggingBlock: null
});

export const getters = {
  index: state => state.index,
  inspectedBlock: state => state.inspectedBlock,
  draggingBlock: state => state.draggingBlock,
  currentPage: state => getBlockById(state.index, state.currentPage),
  source: state => state.index.filter(block => block.id === "source")[0],
  getPages: state => {
    return state.index.filter(
      block => block.component === "page" && block.id !== "source"
    );
  },
  blockChildren: state => id =>
    state.index
      .filter(block => block.parent === id)
      .sort((a, b) => (a.order < b.order ? -1 : 1))
};

export const actions = {
  setCurrentPage({ commit }, pageId) {
    commit("SET_CURRENT_PAGE", pageId);
  },
  inspectBlock({ commit }, block) {
    commit("INSPECT_BLOCK", block);
  },
  unInspectBlock({ commit }) {
    commit("INSPECT_BLOCK", null);
  },
  setDraggingBlock({ commit }, block) {
    commit("SET_DRAGGING_BLOCK", block);
  },
  updateBlocks({ commit, state }, blocks) {
    blocks.forEach((block, i) => {
      delete block.children;
      commit("UPDATE_BLOCKS", {
        index: getBlockIndexById(state, block.id),
        block
      });
    });
  },
  addBlock({ commit }, block) {
    commit("ADD_BLOCK", block);
  },
  removeBlock({ commit }, block) {
    commit("REMOVE_BLOCK", block);
    commit("INSPECT_BLOCK", null);
  },
  cloneBlock({ commit }, block) {
    commit("CLONE_BLOCK", block);
  }
};

export const mutations = {
  SET_CURRENT_PAGE(state, pageid) {
    state.currentPage = pageid;
  },
  INSPECT_BLOCK(state, block) {
    state.inspectedBlock = block;
  },
  UNINSPECT_BLOCK(state) {
    state.inspectedBlock = null;
  },
  SET_DRAGGING_BLOCK(state, block) {
    state.draggingBlock = block;
  },
  UPDATE_BLOCKS(state, { index, block }) {
    state.history.push(state);
    Vue.set(state.index, index, block);
  },
  ADD_BLOCK(state, block) {
    state.index.push(block);
  },
  REMOVE_BLOCK(state, block) {
    state.index.splice(state.index.indexOf(block), 1);
  },
  CLONE_BLOCK(state, block) {
    block.id = uuid();
    state.index.push(block);
  }
};
