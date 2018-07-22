export const state = () => ({
  inspectBlockDialog: false
});

export const getters = {
  inspectBlockDialog: state => state.inspectBlockDialog
};

export const actions = {
  toggleInspectBlockDialog({ commit }) {
    commit("TOGGLE_INSPECT_BLOCK_DIALOG");
  },
  closeInspectBlockDialog({ commit }) {
    commit("CLOSE_INSPECT_BLOCK_DIALOG");
  },
  setInspectBlockDialogState({ commit }, val) {
    commit("SET_INSPECT_BLOCK_DIALOG", val);
  },
  openInspectBlockDialog({ commit }) {
    commit("OPEN_INSPECT_BLOCK_DIALOG");
  }
};

export const mutations = {
  SET_INSPECT_BLOCK_DIALOG(state, val) {
    state.inspectBlockDialog = val;
  },
  TOGGLE_INSPECT_BLOCK_DIALOG(state) {
    state.inspectBlockDialog = !state.inspectBlockDialog;
  },
  OPEN_INSPECT_BLOCK_DIALOG(state) {
    state.inspectBlockDialog = true;
  },
  CLOSE_INSPECT_BLOCK_DIALOG(state) {
    state.inspectBlockDialog = false;
  }
};
