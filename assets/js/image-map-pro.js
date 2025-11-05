!(function (s, o) {
    var e = {
        name: "Paragraph",
        iconClass: "fa fa-paragraph",
        controls: { text: { text: { name: "Text", type: "textarea", default: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." } } },
        controlGroupIcons: { text: "fa fa-ellipsis-h" },
        content: function () {
            var e = this.controls.text.text.getVal();
            return (
                (e = (e = e.replace(/\\(.)/gm, "$1")).replace(/\n/gm, "<br>")),
                '<p id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + this.fontStyles + ' margin: 0; padding: 0;" class="' + this.controls.general.classes.getVal() + '">' + e + "</p>"
            );
        },
        render: function (e) {
            var t = e.text.text;
            return (t = (t = t.replace(/\\(.)/gm, "$1")).replace(/\n/gm, "<br>")), '<p id="' + e.general.id + '" style="' + e.general.css + e.fontStyles + ' margin: 0; padding: 0;" class="' + e.general.classes + '">' + t + "</p>";
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(e), s.squaresRendererRegisterElement(e);
    var t = {
        name: "Heading",
        iconClass: "fa fa-header",
        controls: { heading: { text: { name: "Text", type: "text", default: "Lorem Ipsum" }, heading: { name: "Heading", type: "select", options: ["h1", "h2", "h3"], default: "h3" } } },
        controlGroupIcons: { heading: "fa fa-header" },
        content: function () {
            return (
                "<" +
                this.controls.heading.heading.getVal() +
                ' id="' +
                this.controls.general.id.getVal() +
                '" style="' +
                this.controls.general.css.getVal() +
                this.fontStyles +
                ' margin: 0; padding: 0;" class="' +
                this.controls.general.classes.getVal() +
                '">' +
                this.controls.heading.text.getVal() +
                "</" +
                this.controls.heading.heading.getVal() +
                ">"
            );
        },
        render: function (e) {
            return "<" + e.heading.heading + ' id="' + e.general.id + '" style="' + e.general.css + e.fontStyles + ' margin: 0; padding: 0;" class="' + e.general.classes + '">' + e.heading.text + "</" + e.heading.heading + ">";
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(t), s.squaresRendererRegisterElement(t);
    var a = {
        name: "Image",
        iconClass: "fa fa-camera",
        controls: {
            image: {
                url: { name: "Image URL", type: "text", default: "https://webcraftplugins.com/uploads/placeholder_image.png" },
                image_is_a_link: { name: "Image is a Link", type: "switch", default: 0 },
                link_to: { name: "Link to", type: "text", default: "#" },
            },
        },
        controlGroupIcons: { image: "fa fa-camera" },
        useFontControls: !1,
        content: function () {
            var e = "";
            1 == parseInt(this.controls.image.image_is_a_link.getVal(), 10) && (e += '<a href="' + this.controls.image.link_to.getVal() + '">'),
                (e += '<img src="' + this.controls.image.url.getVal() + '" id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">'),
                1 == parseInt(this.controls.image.image_is_a_link.getVal(), 10) && (e += "</a>");
            var t = new Image();
            function a() { }
            return (t.src = this.controls.image.url.getVal()), t.complete || t.addEventListener("load", a), e;
        },
        render: function (e) {
            var t = "";
            1 == parseInt(e.image.image_is_a_link, 10) && (t += '<a href="' + e.image.link_to + '">'),
                (t += '<img src="' + e.image.url + '" id="' + e.general.id + '" data="hello" style="' + e.general.css + '" class="' + e.general.classes + '">'),
                1 == parseInt(e.image.image_is_a_link, 10) && (t += "</a>");
            var a = new Image();
            function l() {
                s(o).trigger("squares_image_loaded");
            }
            return (a.src = e.image.url), a.complete ? l() : a.addEventListener("load", l), t;
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(a), s.squaresRendererRegisterElement(a);
    var l = {
        name: "Video",
        iconClass: "fa fa-video-camera",
        controls: {
            video: {
                mp4_url: { name: "MP4 URL", type: "text", default: "http://webcraftplugins.com/uploads/example_video.mp4" },
                webm_url: { name: "WEBM URL", type: "text", default: "http://webcraftplugins.com/uploads/example_video.webm" },
                ogv_url: { name: "OGV URL", type: "text", default: "http://webcraftplugins.com/uploads/example_video.ogv" },
                video_is_a_link: { name: "Video is a Link", type: "switch", default: 0 },
                link_to: { name: "Link to", type: "text", default: "#" },
                autoplay: { name: "Autoplay", type: "switch", default: 0 },
                loop: { name: "Loop", type: "switch", default: 0 },
                controls: { name: "Controls", type: "switch", default: 0 },
            },
        },
        useFontControls: !1,
        controlGroupIcons: { video: "fa fa-video-camera" },
        content: function () {
            var e = "";
            1 == parseInt(this.controls.video.video_is_a_link.getVal(), 10) && (e += '<a href="' + this.controls.video.link_to.getVal() + '">');
            var t = "";
            return (
                1 == parseInt(this.controls.video.autoplay.getVal(), 10) && (t += " autoplay "),
                1 == parseInt(this.controls.video.loop.getVal(), 10) && (t += " loop "),
                1 == parseInt(this.controls.video.controls.getVal(), 10) && (t += " controls "),
                (e +=
                    "<video " +
                    t +
                    ' id="' +
                    this.controls.general.id.getVal() +
                    '" style="' +
                    this.controls.general.css.getVal() +
                    '" class="' +
                    this.controls.general.classes.getVal() +
                    '"><source src="' +
                    this.controls.video.mp4_url.getVal() +
                    '" type="video/mp4"><source src="' +
                    this.controls.video.webm_url.getVal() +
                    '" type="video/webm"><source src="' +
                    this.controls.video.ogv_url.getVal() +
                    '" type="video/ogv"></video>'),
                1 == parseInt(this.controls.video.video_is_a_link.getVal(), 10) && (e += "</a>"),
                e
            );
        },
        render: function (e) {
            var t = "";
            1 == parseInt(e.video.video_is_a_link, 10) && (t += '<a href="' + e.video.link_to + '">');
            var a = "";
            return (
                1 == parseInt(e.video.autoplay, 10) && (a += " autoplay "),
                1 == parseInt(e.video.loop, 10) && (a += " loop "),
                1 == parseInt(e.video.controls, 10) && (a += " controls "),
                (t +=
                    "<video " +
                    a +
                    ' id="' +
                    e.general.id +
                    '" style="' +
                    e.general.css +
                    '" class="' +
                    e.general.classes +
                    '"><source src="' +
                    e.video.mp4_url +
                    '" type="video/mp4"><source src="' +
                    e.video.webm_url +
                    '" type="video/webm"><source src="' +
                    e.video.ogv_url +
                    '" type="video/ogv"></video>'),
                1 == parseInt(e.video.video_is_a_link, 10) && (t += "</a>"),
                t
            );
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(l), s.squaresRendererRegisterElement(l);
    var n = {
        name: "YouTube",
        iconClass: "fa fa-youtube",
        useStyleControls: !1,
        useFontControls: !1,
        controls: {
            youtube: {
                embed_code: { name: "Embed Code", type: "textarea", default: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6NC_ODHu5jg" frameborder="0" allowfullscreen></iframe>' },
                allow_fullscreen: { name: "Allow Fullscreen", type: "switch", default: 1 },
                iframe_width: { name: "iframe Width", type: "int", default: 320 },
                iframe_auto_width: { name: "iframe Auto Width", type: "switch", default: 1 },
                iframe_height: { name: "iframe Height", type: "int", default: 320 },
            },
        },
        controlGroupIcons: { youtube: "fa fa-youtube" },
        content: function () {
            var e = this.controls.youtube.embed_code.getVal(),
                t = "";
            return (
                (t += '<div id="' + this.controls.general.id.getVal() + '" style="' + this.controls.general.css.getVal() + '" class="' + this.controls.general.classes.getVal() + '">'),
                (e = e.replace("allowfullscreen", "")),
                1 == parseInt(this.controls.youtube.allow_fullscreen.getVal(), 10) && -1 == e.indexOf("allowfullscreen") && (e = e.replace("></iframe>", " allowfullscreen></iframe>")),
                (t += e = (e =
                    1 == parseInt(this.controls.youtube.iframe_auto_width.getVal(), 10) ? e.replace(/width="\d+"/g, 'width="100%"') : e.replace(/width="\d+"/g, 'width="' + this.controls.youtube.iframe_width.getVal() + 'px"')).replace(
                        /height="\d+"/g,
                        'height="' + this.controls.youtube.iframe_height.getVal() + 'px"'
                    )),
                (t += "</div>")
            );
        },
        render: function (e) {
            var t = e.youtube.embed_code,
                a = "";
            return (
                (a += '<div id="' + e.general.id + '" style="' + e.general.css + '" class="' + e.general.classes + '">'),
                (t = t.replace("allowfullscreen", "")),
                1 == parseInt(e.youtube.allow_fullscreen, 10) && -1 == t.indexOf("allowfullscreen") && (t = t.replace("></iframe>", " allowfullscreen></iframe>")),
                (a += t = (t = 1 == parseInt(e.youtube.iframe_auto_width, 10) ? t.replace(/width="\d+"/g, 'width="100%"') : t.replace(/width="\d+"/g, 'width="' + e.youtube.iframe_width + 'px"')).replace(
                    /height="\d+"/g,
                    'height="' + e.youtube.iframe_height + 'px"'
                )),
                (a += "</div>")
            );
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(n), s.squaresRendererRegisterElement(n);
    var r = {
        name: "Button",
        iconClass: "fa fa-link",
        controls: {
            button: {
                text: { name: "Text", type: "text", default: "Button" },
                link_to: { name: "Link to", type: "text", default: "#" },
                new_tab: { name: "Open in New Tab", type: "switch", default: 0 },
                display: { name: "Display", type: "button group", options: ["inline-block", "block"], default: "inline-block" },
                height: { name: "Height", type: "int", default: 44 },
                bg_color: { name: "Background Color", type: "color", default: "#2196f3" },
                text_color: { name: "Text Color", type: "color", default: "#ffffff" },
                border_radius: { name: "Border Radius", type: "int", default: 10 },
                padding: { name: "Padding Left/Right", type: "int", default: 20 },
            },
        },
        controlGroupIcons: { button: "fa fa-link" },
        content: function () {
            var e = "";
            (e += "display: " + this.controls.button.display.getVal() + "; "),
                (e += "height: " + this.controls.button.height.getVal() + "px; "),
                (e += "line-height: " + this.controls.button.height.getVal() + "px; "),
                (e += "background-color: " + this.controls.button.bg_color.getVal() + "; "),
                (e += "color: " + this.controls.button.text_color.getVal() + "; "),
                (e += "border-radius: " + this.controls.button.border_radius.getVal() + "px; "),
                (e += "padding-left: " + this.controls.button.padding.getVal() + "px; "),
                (e += "padding-right: " + this.controls.button.padding.getVal() + "px; ");
            var t = "";
            return (
                1 == parseInt(this.controls.button.new_tab.getVal(), 10) && (t = 'target="_blank"'),
                '<div id="' +
                this.controls.general.id.getVal() +
                '" style="' +
                this.controls.general.css.getVal() +
                '" class="' +
                this.controls.general.classes.getVal() +
                '"><a href="' +
                this.controls.button.link_to.getVal() +
                '" style="' +
                e +
                '" ' +
                t +
                ' class="squares-button">' +
                this.controls.button.text.getVal() +
                "</a></div>"
            );
        },
        render: function (e) {
            var t = "";
            (t += "display: " + e.button.display + "; "),
                (t += "height: " + e.button.height + "px; "),
                (t += "line-height: " + e.button.height + "px; "),
                (t += "background-color: " + e.button.bg_color + "; "),
                (t += "color: " + e.button.text_color + "; "),
                (t += "border-radius: " + e.button.border_radius + "px; "),
                (t += "padding-left: " + e.button.padding + "px; "),
                (t += "padding-right: " + e.button.padding + "px; ");
            var a = "";
            return (
                1 == parseInt(e.button.new_tab, 10) && (a = 'target="_blank"'),
                '<div id="' + e.general.id + '" style="' + e.general.css + '" class="' + e.general.classes + '"><a href="' + e.button.link_to + '" style="' + t + '" ' + a + ' class="squares-button">' + e.button.text + "</a></div>"
            );
        },
    };
    s.squaresRegisterElement && s.squaresRegisterElement(r), s.squaresRendererRegisterElement(r);
})(jQuery, (window, document));
