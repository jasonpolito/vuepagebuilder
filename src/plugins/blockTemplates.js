export const blockTemplates = {
  grid: {
    component: "grid",
    name: "Grid",
    settings: {
      gutter: {
        label: "Gutter Width",
        Value: "normal",
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
      backgroundImage: {
        value: "",
        label: "Image",
        component: "block-setting-image"
      },
      backgroundColor: {
        label: "Background Color",
        value: "#3d9df7",
        component: "block-setting-color"
      },
      textColor: {
        label: "Text Color",
        value: "#fff",
        component: "block-setting-color"
      }
    }
  },
  "v-image": {
    component: "v-image",
    name: "Image",
    settings: {
      image: { value: "", label: "Image", component: "block-setting-image" }
    }
  },
  card: {
    component: "card",
    name: "Card",
    settings: {
      color: {
        label: "Background Color",
        value: "#fff",
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
      backgroundColor: {
        label: "Background Color",
        value: "#3d9df7",
        component: "block-setting-color"
      },
      textColor: {
        label: "Text Color",
        value: "#fff",
        component: "block-setting-color"
      }
    }
  },
  column: {
    component: "column",
    name: "Column",
    settings: {
      width: {
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
      }
    }
  }
};

export const blockCollections = {
  Grid: {
    "v-section": {
      settings: {
        backgroundColor: { value: "white" },
        textColor: { value: "#444444" }
      },
      children: [
        {
          grid: {
            children: [
              { column: { settings: { width: { value: "w-1/4" } } } },
              { column: { settings: { width: { value: "w-1/4" } } } },
              { column: { settings: { width: { value: "w-1/4" } } } },
              { column: { settings: { width: { value: "w-1/4" } } } }
            ]
          }
        }
      ]
    }
  },
  "Nice Section": {
    "v-section": {
      children: [
        {
          container: {
            children: [
              {
                grid: {
                  children: [
                    {
                      column: {
                        // settings: { width: "w-1/2" },
                        children: [
                          {
                            "text-content": {
                              settings: {
                                content: {
                                  value:
                                    "<h1>Big ol nice section with text!</h1>"
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
      ]
    }
  },
  Touts: {
    container: {
      children: [
        {
          grid: {
            children: [
              {
                column: {
                  children: [
                    {
                      card: {
                        children: [
                          {
                            "text-content": {
                              settings: {
                                content: { value: "<h2>Picklthz</h2>" }
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                column: {
                  children: [
                    {
                      card: {
                        children: [
                          {
                            "text-content": {
                              settings: { content: { value: "<h2>Monk</h2>" } }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                column: {
                  children: [
                    {
                      card: {
                        children: [
                          {
                            "text-content": {
                              settings: {
                                content: { value: "<h2>Wafflthz</h2>" }
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
      ]
    }
  }
};
