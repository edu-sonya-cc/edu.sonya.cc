System.register("svgHelper", [], function (exports_1, context_1) {
    "use strict";
    var svgSpace;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (svgSpace) {
                var edu;
                (function (edu) {
                    var sonya;
                    (function (sonya) {
                        var cc;
                        (function (cc) {
                            var SVG_NS = "http://www.w3.org/2000/svg";
                            var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
                            var SvgHelper = (function () {
                                function SvgHelper() {
                                }
                                SvgHelper.appendLine = function (svg, STYLE, x1, x2, y1, y2, viewBox) {
                                    var line = document.createElementNS(SVG_NS, "line");
                                    line.setAttribute("x1", x1 + "mm");
                                    line.setAttribute("x2", x2 + "mm");
                                    line.setAttribute("y1", y1 + "mm");
                                    line.setAttribute("y2", y2 + "mm");
                                    if (viewBox) {
                                        viewBox.left = Math.min(viewBox.left, x1, x2);
                                        viewBox.right = Math.max(viewBox.right, x1, x2);
                                        viewBox.top = Math.min(viewBox.top, y1, y2);
                                        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                                    }
                                    line.setAttribute("style", STYLE);
                                    svg.appendChild(line);
                                };
                                SvgHelper.appendCircle = function (svg, STYLE, cx, cy, radius, viewBox) {
                                    var circle = document.createElementNS(SVG_NS, "circle");
                                    circle.setAttribute("cx", cx + "mm");
                                    circle.setAttribute("cy", cy + "mm");
                                    circle.setAttribute("r", radius + "mm");
                                    circle.setAttribute("fill", "#ffffff");
                                    if (viewBox) {
                                        viewBox.left = Math.min(viewBox.left, cx - radius);
                                        viewBox.right = Math.max(viewBox.right, cx + radius);
                                        viewBox.top = Math.min(viewBox.top, cy - radius);
                                        viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
                                    }
                                    circle.setAttribute("style", STYLE);
                                    svg.appendChild(circle);
                                };
                                SvgHelper.appendTspan = function (text, STYLE, CHAR, dx, dy) {
                                    var tspan = document.createElementNS(SVG_NS, "tspan");
                                    tspan.setAttribute("dx", "" + dx);
                                    tspan.setAttribute("dy", "" + dy);
                                    tspan.setAttribute("style", STYLE.concat("dominant-baseline:middle;text-anchor:middle;", CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "", CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : ""));
                                    tspan.innerHTML = CHAR;
                                    text.appendChild(tspan);
                                };
                                SvgHelper.appendText = function (svg, STYLE, CONTENT, x, y, rotate, transformOrigin, viewBox, maybeNumber) {
                                    if (maybeNumber === void 0) { maybeNumber = false; }
                                    var g = document.createElementNS(SVG_NS, "g");
                                    if (rotate) {
                                        g.setAttribute("style", "transform: rotate(" + rotate + "deg);transform-origin:" + transformOrigin + ";");
                                    }
                                    svg.appendChild(g);
                                    var text = document.createElementNS(SVG_NS, "text");
                                    text.setAttribute("x", x + "mm");
                                    text.setAttribute("y", y + "mm");
                                    text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");
                                    if (CONTENT.indexOf("<en>") > -1) {
                                        var lang = getCurrentLang();
                                        var startTag = "<" + lang + ">";
                                        var endTag = "</" + lang + ">";
                                        if (CONTENT.indexOf(startTag) > -1) {
                                            CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
                                        }
                                    }
                                    CONTENT = CONTENT.replace(/<br \/>/gi, "<br/>").replace(/<br\/>/gi, "<br>").replace(/\\n/gi, "<br>");
                                    if (CONTENT.indexOf("<br>") > -1) {
                                        var fontSize = STYLE.indexOf("font-size:") > -1
                                            ? STYLE.split("font-size:")[1].split(";")[0]
                                            : "2mm";
                                        var unit = fontSize.replace(/[0-9.]/gi, "");
                                        var dyNumber = parseFloat(fontSize.replace(unit, ""));
                                        var segs = CONTENT.split("<br>");
                                        var lastLength_1 = 0;
                                        var dyOffset_1 = "" + dyNumber + unit;
                                        segs.forEach(function (seg, index) {
                                            SvgHelper.appendTspan(text, "", seg, index ? "-" + lastLength_1 + "em" : "0", index ? dyOffset_1 : "0");
                                            lastLength_1 = seg.length;
                                        });
                                    }
                                    else {
                                        if (maybeNumber) {
                                            CONTENT.split("").forEach(function (char, index) {
                                                SvgHelper.appendTspan(text, "", char, "0", "0");
                                            });
                                        }
                                        else {
                                            SvgHelper.appendTspan(text, "", CONTENT, "0", "0");
                                        }
                                    }
                                    g.appendChild(text);
                                    if (viewBox) {
                                        var clientRects = text.getClientRects();
                                        var _a = (clientRects.length
                                            ? clientRects.item(0)
                                            : text.getBoundingClientRect()), x1 = _a.left, x2 = _a.right, y1 = _a.top, y2 = _a.bottom;
                                        viewBox.left = Math.min(viewBox.left, x1, x2);
                                        viewBox.right = Math.max(viewBox.right, x1, x2);
                                        viewBox.top = Math.min(viewBox.top, y1, y2);
                                        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                                    }
                                    text.setAttribute("style", STYLE);
                                };
                                SvgHelper.setSvgTextInfo = function (info, x, y, rotate) {
                                    info.x = x;
                                    info.y = y;
                                    info.rotate = rotate;
                                };
                                SvgHelper.appendOuterPath = function (svg, WIDTH, HEIGHT, mmToPxScale, OUTER_LINE_COLOR) {
                                    svg.setAttribute("width", WIDTH + "mm");
                                    svg.setAttribute("height", HEIGHT + "mm");
                                    var WIDTH_PX = mmToPxScale * WIDTH;
                                    var HEIGHT_PX = mmToPxScale * HEIGHT;
                                    var path = svgSpace.edu.sonya.cc.SvgHelper.createSvgPath();
                                    path.setAttribute("fill", "none");
                                    path.setAttribute("stroke", OUTER_LINE_COLOR);
                                    path.setAttribute("d", "M 0, 0 "
                                        .concat("h " + WIDTH_PX + " ", "v " + HEIGHT_PX + " ", "h -" + WIDTH_PX + " ", " z"));
                                    svg.appendChild(path);
                                };
                                SvgHelper.appendOuterLine = function (svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
                                    svg.setAttribute("width", WIDTH + "mm");
                                    svg.setAttribute("height", HEIGHT + "mm");
                                    var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
                                    appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
                                    appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
                                    appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
                                    appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
                                };
                                SvgHelper.getTextStyleFontSizePatchCss = function (NUMBER, TEXT_STYLE) {
                                    if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
                                        var fontSizeSeg = TEXT_STYLE.split("font-size:")[1].split(";")[0];
                                        var fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
                                        var fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
                                        return "font-size:" + fontValue * 2 /
                                            NUMBER.toString().length + fontUnit + ";";
                                    }
                                    return "";
                                };
                                SvgHelper.createSvg = function () {
                                    var svg = document.createElementNS(SVG_NS, "svg");
                                    svg.setAttribute("version", "1.1");
                                    svg.setAttribute("xmlns", SVG_NS);
                                    svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
                                    return svg;
                                };
                                SvgHelper.createSvgPath = function () {
                                    return document.createElementNS(SVG_NS, "path");
                                };
                                return SvgHelper;
                            }());
                            cc.SvgHelper = SvgHelper;
                        })(cc = sonya.cc || (sonya.cc = {}));
                    })(sonya = edu.sonya || (edu.sonya = {}));
                })(edu = svgSpace.edu || (svgSpace.edu = {}));
            })(svgSpace || (svgSpace = {}));
            exports_1("default", svgSpace.edu.sonya.cc);
        }
    };
});

__exp = __instantiate("svgHelper", false);

