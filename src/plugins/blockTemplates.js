export const blockTemplates = {
  "v-masonry": {
    component: "v-masonry",
    name: "Masonry",
    settings: {}
  },
  grid: {
    component: "grid",
    name: "Grid",
    actions: {
      addColumn: "Add Column"
    },
    settings: {
      gutter: {
        label: "Gutter Width",
        value: "normal",
        component: "block-setting-dropdown",
        options: [
          { label: "Normal", value: "normal" },
          { label: "Large", value: "grid-lg" }
        ]
      },
      justify: {
        label: "Justify Columns",
        value: "start",
        component: "block-setting-dropdown",
        options: [
          { label: "Start", value: "start" },
          { label: "Center", value: "center" },
          { label: "End", value: "end" },
          { label: "Between", value: "between" },
          { label: "Around", value: "around" }
        ]
      },
      align: {
        label: "Align Columns",
        value: "stretch",
        component: "block-setting-dropdown",
        options: [
          { label: "Stretch", value: "stretch" },
          { label: "Center", value: "center" }
        ]
      }
    }
  },
  container: { component: "container", name: "Container", settings: {} },
  "v-section": {
    component: "v-section",
    name: "Section",
    settings: {
      padding: {
        label: "Padding",
        value: "16",
        component: "block-setting-number"
      },
      "background-color": {
        label: "Background Color",
        value: "",
        component: "block-setting-color"
      },
      color: {
        label: "Text Color",
        value: "",
        component: "block-setting-color"
      },
      "background-image": {
        value: "",
        label: "Background Image",
        component: "block-setting-image"
      }
    }
  },
  "v-image": {
    component: "v-image",
    name: "Image",
    settings: {
      image: {
        value: "/imageplaceholder.png",
        label: "Image",
        component: "block-setting-image"
      },
      altText: {
        label: "Alt Text",
        value: "",
        component: "block-setting-text"
      }
    }
  },
  card: {
    component: "card",
    name: "Card",
    settings: {
      "background-color": {
        label: "Background Color",
        value: "",
        component: "block-setting-color"
      },
      color: {
        label: "Text Color",
        value: "",
        component: "block-setting-color"
      }
    }
  },
  btn: {
    component: "btn",
    name: "Button",
    settings: {
      text: {
        label: "Button Text",
        value: "Button",
        component: "block-setting-text"
      },
      link: {
        label: "Button Link",
        value: "#",
        component: "block-setting-text"
      },
      align: {
        label: "Align",
        value: "center",
        component: "block-setting-dropdown",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" }
        ]
      },
      "background-color": {
        label: "Background Color",
        value: "",
        component: "block-setting-color"
      },
      color: {
        label: "Text Color",
        value: "",
        component: "block-setting-color"
      }
    }
  },
  column: {
    component: "column",
    name: "Column",
    settings: {
      width: {
        responsive: true,
        responsiveDefaults: {
          sm: "w-full",
          md: "w-auto",
          lg: "w-auto"
        },
        value: "w-1/3",
        label: "Column Width",
        component: "block-setting-dropdown",
        options: [
          { label: "Auto", value: "w-auto" },
          { label: "Full", value: "w-full" },
          { label: "3/4", value: "w-3/4" },
          { label: "2/3", value: "w-2/3" },
          { label: "1/2", value: "w-1/2" },
          { label: "1/3", value: "w-1/3" },
          { label: "1/4", value: "w-1/4" }
        ]
      },
      alignSelf: {
        responsive: true,
        responsiveDefaults: {
          sm: "self-auto",
          md: "self-auto",
          lg: "self-auto"
        },
        value: "self-1/3",
        label: "Align Self",
        component: "block-setting-dropdown",
        options: [
          { label: "Auto", value: "self-auto" },
          { label: "Start", value: "self-start" },
          { label: "Center", value: "self-center" },
          { label: "End", value: "self-end" },
          { label: "Stretch", value: "self-stretch" }
        ]
      }
    }
  },
  "text-content": {
    component: "text-content",
    name: "Text Content",
    settings: {
      content: {
        label: "Content",
        value: "<h2>Text Content</h2>",
        component: "block-setting-rich-text"
      },
      "text-align": {
        label: "Align Text",
        value: "left",
        component: "block-setting-dropdown",
        options: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" }
        ]
      },
      color: {
        label: "Text Color",
        value: "",
        component: "block-setting-color"
      }
    }
  },
  "v-link": {
    component: "v-link",
    name: "Link",
    settings: {
      text: {
        label: "Link Text",
        value: "Link Text",
        component: "block-setting-text"
      },
      url: {
        label: "URL",
        value: "#",
        component: "block-setting-text"
      }
    }
  },
  "v-menu": {
    component: "v-menu",
    name: "Menu",
    settings: {
      links: {
        repeater: "v-link",
        value: [],
        component: "block-setting-repeater"
      }
    }
  }
};

export const blockCollections = {
  Image: {
    image: "/imageplaceholder.png",
    "v-image": {}
  },
  Masonry: {
    "v-masonry": {}
  },
  Menu: {
    "v-menu": {}
  },
  "Grid Column": {
    column: {
      settings: { width: { viewports: { lg: { value: "w-auto" } } } }
    }
  },
  "Text Content": {
    "text-content": {
      settings: { content: { value: "<h2>Some text content...</h2>" } }
    }
  },
  Card: {
    card: {
      children: [
        {
          "text-content": {
            settings: {
              content: { value: "Card content" }
            }
          }
        }
      ]
    }
  },
  Grid: {
    grid: {
      children: [
        {
          column: { settings: { width: { viewports: { lg: "w-auto" } } } }
        },
        {
          column: { settings: { width: { viewports: { lg: "w-auto" } } } }
        },
        {
          column: { settings: { width: { viewports: { lg: "w-auto" } } } }
        },
        {
          column: { settings: { width: { viewports: { lg: "w-auto" } } } }
        }
      ]
    }
  },
  Section: {
    image: "/section.png",
    "v-section": {
      children: [
        {
          grid: {
            children: [
              {
                column: {
                  children: [
                    {
                      "text-content": {
                        settings: {
                          content: {
                            value: "# Editable content..."
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
};
