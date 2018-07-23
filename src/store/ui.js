export const state = () => ({
  sidebarWidth: 240,
  previewingPage: false,
  leftSidebar: true,
  rightSidebar: true
});

export const getters = {
  previewingPage: state => state.previewingPage,
  sidebarWidth: state => state.sidebarWidth,
  leftSidebar: state => state.leftSidebar,
  rightSidebar: state => state.rightSidebar,
  totalSidebarWidth: state => {
    let total = 0;
    if (state.leftSidebar) total += state.sidebarWidth;
    if (state.rightSidebar) total += state.sidebarWidth;
    return total;
  },
  pageWidth: state => {
    let total = 0;
    if (state.leftSidebar) total += state.sidebarWidth;
    if (state.rightSidebar) total += state.sidebarWidth;
    return `calc(100% - ${total}px)`;
  }
};

export const actions = {
  toggleLeftSidebar({ commit }) {
    commit("TOGGLE_LEFT_SIDEBAR");
  },
  toggleRightSidebar({ commit }) {
    commit("TOGGLE_RIGHT_SIDEBAR");
  },
  togglePagePreview({ commit }) {
    commit("TOGGLE_PAGE_PREVIEW");
  }
};

export const mutations = {
  TOGGLE_PAGE_PREVIEW(state) {
    state.leftSidebar = state.previewingPage;
    state.rightSidebar = state.previewingPage;
    state.previewingPage = !state.previewingPage;
  },
  TOGGLE_LEFT_SIDEBAR(state) {
    state.leftSidebar = !state.leftSidebar;
  },
  TOGGLE_RIGHT_SIDEBAR(state) {
    state.rightSidebar = !state.rightSidebar;
  }
};
