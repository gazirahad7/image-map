(function ($, window, document, undefined) {
  $(document).ready(function () {
    $("#image-map-pro-container").imageMapPro({
      id: 3,
      general: {
        name: "apartment",
        shortcode: "apartment_layer1",
        width: 1180,
        height: 400,
        naturalWidth: 1180,
        naturalHeight: 400,
      },
      image: {
        url: "assets/js/Layer_1.svg",
      },
      layer: {
        id: "layer-1-apartment",
        title: "Apartment Layer 1",
        image_url: "assets/js/Layer_1.svg",
        image_width: 1180,
        image_height: 400,
      },
      spots: [
        {
          id: "apt-unit-1",
          title: "Unit 1",
          type: "poly",
          x: 0,
          y: 0,

          width: 8.5,
          height: 25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#E8FB61",
            background_opacity: 0.7,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 12,
            padding: 10,
            background_color: "#E8FB61",
            width: "265px",
            height: "auto",
            max_width: "265px",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-1",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Image",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          image: {
                            url: "https://primyte.webermelon.dev/wp-content/themes/primyte/assets/images/image-map-pro/office_map/A2B-lowres-107.jpg",
                            alt: "Cover Image",
                            width: "234px",
                            height: "auto",
                          },

                          general: {
                            css: {
                              "background-color": "red",
                              width: "10px",
                              height: "auto",
                            },
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          text: {
                            text: "Office A2 B - 590 000 €",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#000",
                          },
                        },
                      },

                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "139,85 m2",
                          },
                          font: {
                            font_family: "Oswald",
                            font_size: "18",
                            font_weight: "300",
                            line_height: "28.8",
                            text_color: "#5C6668",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 40, y: 31 },
            { x: 38, y: 196 },
            { x: 146, y: 198 },
            { x: 147, y: 177 },
            { x: 178, y: 179 },
            { x: 175, y: 29 },
          ],
        },
        {
          id: "apt-unit-2",
          title: "Unit 2",
          type: "poly",
          x: 12.54237288135593,
          y: 32.75,
          width: 11.440677966101696,
          height: 23.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-2",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 2",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 12.542372881, y: 32.75 },
            { x: 12.542372881, y: 56.0 },
            { x: 23.983050847, y: 56.0 },
            { x: 23.983050847, y: 32.75 },
          ],
        },
        {
          id: "apt-unit-3",
          title: "Unit 3",
          type: "poly",
          x: 48.22033898305084,
          y: 9.5,
          width: 38.05084745762712,
          height: 23.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-3",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 3",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 48.220338983, y: 9.5 },
            { x: 48.220338983, y: 32.75 },
            { x: 86.271186441, y: 32.75 },
            { x: 86.271186441, y: 9.5 },
          ],
        },
        {
          id: "apt-unit-4",
          title: "Unit 4",
          type: "poly",
          x: 48.22033898305084,
          y: 32.75,
          width: 38.05084745762712,
          height: 23.25,

          x_image_background: 0,
          y_image_background: 0,

          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0,
            border_radius: 50,
            icon_size: 3.093,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 50,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-4",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 4",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 48.220338983, y: 32.75 },
            { x: 48.220338983, y: 56.0 },
            { x: 86.271186441, y: 56.0 },
            { x: 86.271186441, y: 32.75 },
          ],
        },
        {
          id: "apt-unit-5",
          title: "Unit 5",
          type: "poly",
          x: 48.22033898305084,
          y: 56.0,
          width: 38.05084745762712,
          height: 41.75,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-5",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 5",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 48.220338983, y: 56.0 },
            { x: 48.220338983, y: 97.75 },
            { x: 86.271186441, y: 97.75 },
            { x: 86.271186441, y: 56.0 },
          ],
        },
        {
          id: "apt-unit-6",
          title: "Unit 6",
          type: "poly",
          x: 60.16949152542373,
          y: 8.25,
          width: 11.864406779661017,
          height: 23.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-6",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 6",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 60.169491525, y: 8.25 },
            { x: 60.169491525, y: 31.5 },
            { x: 72.033898305, y: 31.5 },
            { x: 72.033898305, y: 8.25 },
          ],
        },
        {
          id: "apt-unit-7",
          title: "Unit 7",
          type: "poly",
          x: 55.08474576271186,
          y: 56.0,
          width: 8.135593220338984,
          height: 35.75,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-7",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 7",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 55.084745763, y: 56.0 },
            { x: 55.084745763, y: 91.75 },
            { x: 63.220338983, y: 91.75 },
            { x: 63.220338983, y: 56.0 },
          ],
        },
        {
          id: "apt-unit-8",
          title: "Unit 8",
          type: "poly",
          x: 62.20338983050847,
          y: 8.25,
          width: 13.135593220338984,
          height: 23.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-8",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 8",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 62.203389831, y: 8.25 },
            { x: 62.203389831, y: 31.5 },
            { x: 75.338983051, y: 31.5 },
            { x: 75.338983051, y: 8.25 },
          ],
        },
        {
          id: "apt-unit-9",
          title: "Unit 9",
          type: "poly",
          x: 75.16949152542373,
          y: 8.25,
          width: 13.389830508474576,
          height: 38.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-9",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 9",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 75.169491525, y: 8.25 },
            { x: 75.169491525, y: 46.5 },
            { x: 88.559322034, y: 46.5 },
            { x: 88.559322034, y: 8.25 },
          ],
        },
        {
          id: "apt-unit-10",
          title: "Unit 10",
          type: "poly",
          x: 75.16949152542373,
          y: 54.0,
          width: 13.559322033898305,
          height: 38.25,
          x_image_background: 0,
          y_image_background: 0,
          layerID: "layer-1-apartment",
          default_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.2,
            border_radius: 0,
          },
          mouseover_style: {
            background_color: "#4C9EAA",
            background_opacity: 0.5,
            border_radius: 0,
          },
          tooltip_style: {
            border_radius: 0,
            padding: 10,
            background_color: "#ffffff",
          },
          tooltip_content: {
            squares_settings: {
              containers: [
                {
                  id: "sq-container-unit-10",
                  settings: {
                    elements: [
                      {
                        settings: {
                          name: "Heading",
                          iconClass: "fa fa-header",
                        },
                        options: {
                          heading: {
                            text: "Unit 10",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "24",
                            font_weight: "700",
                            line_height: "30",
                            text_color: "#000000",
                          },
                        },
                      },
                      {
                        settings: {
                          name: "Paragraph",
                          iconClass: "fa fa-paragraph",
                        },
                        options: {
                          text: {
                            text: "Available",
                          },
                          font: {
                            font_family: "Arial",
                            font_size: "16",
                            font_weight: "400",
                            line_height: "22",
                            text_color: "#4C9EAA",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          points: [
            { x: 75.169491525, y: 54.0 },
            { x: 75.169491525, y: 92.25 },
            { x: 88.728813559, y: 92.25 },
            { x: 88.728813559, y: 54.0 },
          ],
        },
      ],
    });
  });
})(jQuery, window, document);
