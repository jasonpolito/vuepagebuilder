import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      leftSidebar: "ui/leftSidebar",
      rightSidebar: "ui/rightSidebar",
      pageWidth: "ui/pageWidth",
      totalSidebarWidth: "ui/totalSidebarWidth",
      previewingPage: "ui/previewingPage",
      sidebarWidth: "ui/sidebarWidth",
      editingPage: "ui/editingPage"
    })
  },
  methods: {
    ...mapActions({
      toggleLeftSidebar: "ui/toggleLeftSidebar",
      toggleRightSidebar: "ui/toggleRightSidebar",
      togglePagePreview: "ui/togglePagePreview"
    })
  }
};
