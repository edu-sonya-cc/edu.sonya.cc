/*
  Author: anqisoft@gmail.com
  Date: 2023-09-09
*/

var svgSpace;
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

var boxSpace;
(function (boxSpace) {
  var edu;
  (function (edu) {
    var sonya;
    (function (sonya) {
      var cc;
      (function (cc) {
        var BoxKind;
        (function (BoxKind) {
          BoxKind[BoxKind["none"] = 0] = "none";
          BoxKind[BoxKind["cuboid"] = 1] = "cuboid";
          BoxKind[BoxKind["cuboidWithoutTop"] = 2] = "cuboidWithoutTop";
          BoxKind[BoxKind["cuboidWithoutBottom"] = 3] = "cuboidWithoutBottom";
          BoxKind[BoxKind["cuboidCoverOnTheSameSide"] = 4] = "cuboidCoverOnTheSameSide";
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutTop"] = 5] = "cuboidCoverOnTheSameSideWithoutTop";
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutBottom"] = 6] = "cuboidCoverOnTheSameSideWithoutBottom";
        })(BoxKind = cc.BoxKind || (cc.BoxKind = {}));
        var SVG_NS = "http://www.w3.org/2000/svg";
        var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        var BoxGenerator = (function () {
          function BoxGenerator() {
          }
          BoxGenerator.prototype.batchCreate = function (createParameters) {
            var _this = this;
            createParameters.forEach(function (createParameter, index) {
              if (createParameter.id.length === 0) {
                createParameter.id = "svg_index";
              }
            });
            return createParameters.map(function (createParameter) {
              return _this.create(createParameter);
            });
          };
          BoxGenerator.prototype.create = function (_a) {
            var id = _a.id, boxKind = _a.boxKind, LENGTHS = _a.lengths, CONTENTS = _a.contents, OUTER_LINE_STYLE = _a.outerLineStyle, INNER_LINE_STYLE = _a.innerLineStyle, TEXT_STYLE = _a.textStyle, ROTATE = _a.rotate, MOVE = _a.move, TOP_WITHOUT_HALF_CIRCLE = _a.topWithoutHalfCircle, OPTIONS = _a.options;
            if (id.length === 0)
              id = "svg_0";
            var FIRST_LENGTH = LENGTHS[0];
            var FIXED_FIRST_LENGTH = FIRST_LENGTH;
            var nested = false;
            var _b = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _b.createSvg, appendText = _b.appendText;
            var svg = createSvg();
            svg.setAttribute("id", id);
            var viewBox = {
              left: 999999,
              right: 0,
              top: 999999,
              bottom: 0
            };
            var infos = [];
            switch (boxKind) {
              default:
                CONTENTS.forEach(function (content) {
                  infos.push({ content: content, x: 0, y: 0, rotate: 0 });
                });
                break;
            }
            var mmToPxScale = (new DPIHelper()).getMmToPxScale();
            switch (boxKind) {
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                this.drawGraphsOfCuboidBox(svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE);
                this.drawTextsOfCuboiBox(infos, LENGTHS, boxKind);
                break;
              default:
                break;
            }
            infos.forEach(function (_a) {
              var content = _a.content, x = _a.x, y = _a.y, rotate = _a.rotate;
              appendText(svg, TEXT_STYLE, content, x, y, rotate, "left top", null);
            });
            var width = viewBox.right + "mm";
            var height = viewBox.bottom + "mm";
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            var outerSvg = createElement("wrap");
            outerSvg.appendChild(svg);
            outerSvg.setAttribute("id", id.concat("_wrapper"));
            if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
              var scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;
              var widthOuterSvg = scale * viewBox.right + "mm";
              var heightOuterSvg = scale * viewBox.bottom + "mm";
              var transformScale = mmToPxScale * (scale - 1) / 2;
              outerSvg.setAttribute("style", "width:" + widthOuterSvg + ";height:" + heightOuterSvg + ";display:inline-block;");
              svg.setAttribute("transform", "translate(" + viewBox.right * transformScale + ", " + viewBox.bottom *
                transformScale + ") scale(" + scale + ", " + scale + ")");
              svg.setAttribute("transform-origin", "center");
            }
            var css = "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
            return { id: id, svg: nested ? outerSvg : svg, css: css };
          };
          BoxGenerator.prototype.drawGraphsOfCuboidBox = function (svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE) {
            var isSameSide = boxKind >= 4;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var LENGTH_PX = LENGTH * mmToPxScale;
            var WIDTH_PX = WIDTH * mmToPxScale;
            var HEIGHT_PX = HEIGHT * mmToPxScale;
            var OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var duckTongueHeightPx = duckTongueHeight * mmToPxScale;
            var pasteRegionScale = 0.45;
            var pasteRegionHeight = LENGTH * pasteRegionScale;
            var pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;
            var offsetScale = 0.1;
            var offsetXPx = LENGTH_PX * offsetScale;
            var pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;
            var duckTongueWidth = LENGTH * (1 - offsetScale * 2);
            var duckTongueWidthPx = duckTongueWidth * mmToPxScale;
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
              boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var YDifferencePx = YDifference * mmToPxScale;
            var diameter = duckTongueHeight * 0.8;
            var radius = diameter * 0.5;
            var lengthSubtractDiameter = LENGTH - diameter;
            var halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
            var halfLengthSubtractDiameterPx = halfLengthSubtractDiameter *
              mmToPxScale;
            var radiusPx = radius * mmToPxScale;
            var diameterPx = diameter * mmToPxScale;
            var smallDiameter = diameter * 0.5;
            var smallRadius = smallDiameter * 0.5;
            var smallDiameterPx = smallDiameter * mmToPxScale;
            var smallRadiusPx = smallRadius * mmToPxScale;
            var pasteRegionHeightSubtractSmallRadiusPx = pasteRegionHeightPx -
              smallRadiusPx;
            var pasteRegionWidthSubtractSmallDiameterPx = pasteRegionWidthPx -
              smallDiameterPx;
            var duckTongueHeightSubtractRadiusPx = duckTongueHeightPx -
              radiusPx;
            var duckTongueWidthSubtractDiameterPx = duckTongueWidthPx -
              diameterPx;
            var pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
            var path = document.createElementNS(SVG_NS, "path");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000000");
            if (boxKind < 4) {
              path.setAttribute("d", ("M 0, " + pathStartY + " ")
                .concat(boxKind === BoxKind.cuboidWithoutTop
                  ? "h " + (HEIGHT_PX * 3 + LENGTH_PX * 2) + " "
                  : "".concat(TOP_WITHOUT_HALF_CIRCLE
                    ? "".concat("h " + (HEIGHT_PX + halfLengthSubtractDiameterPx) + " ", "a " + radiusPx + " " + radiusPx + " 0 1 0 " + diameterPx + " 0", "h " + halfLengthSubtractDiameterPx + " ")
                    : "".concat("h " + (HEIGHT_PX + LENGTH_PX) + " "), "l " + offsetXPx + ", -" + pasteRegionHeightPx + " ", "h " + pasteRegionWidthPx + " ", "l " + offsetXPx + ", " + pasteRegionHeightPx + " ", "v -" + HEIGHT_PX + " ", "l " + offsetXPx + ", -" + duckTongueHeightPx + " ", "h " + duckTongueWidthPx + " ", "l " + offsetXPx + ", " + duckTongueHeightPx + " ", "v " + HEIGHT_PX + " ", "l " + offsetXPx + ", -" + pasteRegionHeightPx + " ", "h " + pasteRegionWidthPx + " ", "l " + offsetXPx + ", " + pasteRegionHeightPx + " "), "v " + WIDTH_PX + " ", "h -" + (LENGTH_PX + HEIGHT_PX) + " ", boxKind === BoxKind.cuboidWithoutBottom
                  ? "h -" + (HEIGHT_PX * 2 + LENGTH_PX) + " "
                  : "".concat("l -" + offsetXPx + ", " + pasteRegionHeightPx + " ", "h -" + pasteRegionWidthPx + " ", "l -" + offsetXPx + ", -" + pasteRegionHeightPx + " ", "v " + HEIGHT_PX + " ", "l -" + offsetXPx + ", " + duckTongueHeightPx + " ", "h -" + duckTongueWidthPx + " ", "l -" + offsetXPx + ", -" + duckTongueHeightPx + " ", "v -" + HEIGHT_PX + " ", "l -" + offsetXPx + ", " + pasteRegionHeightPx + " ", "h -" + pasteRegionWidthPx + " ", "l -" + offsetXPx + ", -" + pasteRegionHeightPx + " "), " z"));
            }
            else {
              path.setAttribute("d", ("M 0, " + pathStartY + " ")
                .concat(boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop
                  ? "h " + (HEIGHT_PX * 2 + LENGTH_PX * 2 + OTHER_SIZE_PX) + " "
                  : "".concat("l " + offsetXPx + ", -" + pasteRegionHeightPx + " ", "h " + pasteRegionWidthPx + " ", "l " + offsetXPx + ", " + pasteRegionHeightPx + " ", "v -" + HEIGHT_PX + " ", "l " + offsetXPx + ", -" + duckTongueHeightPx + " ", "h " + duckTongueWidthPx + " ", "l " + offsetXPx + ", " + duckTongueHeightPx + " ", "v " + HEIGHT_PX + " ", "l " + offsetXPx + ", -" + pasteRegionHeightPx + " ", "h " + pasteRegionWidthPx + " ", "l " + offsetXPx + ", " + pasteRegionHeightPx + " ", TOP_WITHOUT_HALF_CIRCLE
                    ? "".concat("h " + halfLengthSubtractDiameterPx + " ", "a " + radiusPx + " " + radiusPx + " 0 1 0 " + diameterPx + " 0", "h " + (halfLengthSubtractDiameterPx +
                      OTHER_SIZE_PX) + " ")
                    : "".concat("h " + (LENGTH_PX + OTHER_SIZE_PX) + " ")), "v " + WIDTH_PX + " ", "h -" + (LENGTH_PX + OTHER_SIZE_PX) + " ", boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom
                  ? "h -" + (HEIGHT_PX * 2 + LENGTH_PX) + " "
                  : "".concat("l -" + offsetXPx + ", " + pasteRegionHeightPx + " ", "h -" + pasteRegionWidthPx + " ", "l -" + offsetXPx + ", -" + pasteRegionHeightPx + " ", "v " + HEIGHT_PX + " ", "l -" + offsetXPx + ", " + duckTongueHeightPx + " ", "h -" + duckTongueWidthPx + " ", "l -" + offsetXPx + ", -" + duckTongueHeightPx + " ", "v -" + HEIGHT_PX + " ", "l -" + offsetXPx + ", " + pasteRegionHeightPx + " ", "h -" + pasteRegionWidthPx + " ", "l -" + offsetXPx + ", -" + pasteRegionHeightPx + " "), " z"));
            }
            svg.appendChild(path);
            var style = "";
            if (ROTATE) {
              style = "transform:rotate(180deg);";
            }
            if (MOVE) {
              style += "position:relative;margin-top:-" + (HEIGHT +
                duckTongueHeight -
                Math.max(0, pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight))) + "mm;";
            }
            if (style.length) {
              svg.setAttribute("style", style);
            }
            var X1 = 0;
            var X2 = X1 + HEIGHT;
            var X3 = X2 + LENGTH;
            var X4 = X3 + HEIGHT;
            var X5 = X4 + LENGTH;
            var X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);
            var Y1 = 0 - YDifference;
            var Y2 = Y1 + duckTongueHeight;
            var Y4 = Y2 + HEIGHT;
            var Y5 = Y4 + WIDTH;
            var Y7 = Y5 + HEIGHT;
            var Y8 = Y7 + duckTongueHeight;
            var Y3 = Y4 - pasteRegionHeight;
            var Y6 = Y5 + duckTongueHeight;
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            if (boxKind < 4) {
              if (boxKind !== BoxKind.cuboidWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
              }
            }
            else {
              if (boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X2, X3, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X1, X4, Y4, Y4, null);
              }
            }
            if (boxKind !== BoxKind.cuboidWithoutBottom &&
              boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutBottom) {
              appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
            }
            appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
            viewBox.left = 0;
            viewBox.top = 0;
            viewBox.right = X6;
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                viewBox.bottom = Y8 - (duckTongueHeight + HEIGHT);
                break;
              default:
                viewBox.bottom = Y8;
                break;
            }
          };
          BoxGenerator.prototype.drawTextsOfCuboiBox = function (infos, LENGTHS, boxKind) {
            var setSvgTextInfo = svgSpace.edu.sonya.cc.SvgHelper.setSvgTextInfo;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
              boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
            var X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var X3 = HEIGHT + LENGTH * 0.5;
            var X4 = X1;
            var X5 = -X2;
            var X6 = X3;
            var Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
            var Y2 = -1 * (HEIGHT * 0.5);
            var Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var Y4 = -1 *
              (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
            var Y5 = HEIGHT * 1.5 + LENGTH;
            var Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 -
              YDifference;
            switch (boxKind) {
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                infos[0].content = "";
                break;
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutBottom:
                setSvgTextInfo(infos[0], X1, Y1, 180);
                break;
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                setSvgTextInfo(infos[0], -1 * (HEIGHT + LENGTH * 0.5), Y1, 180);
                break;
              default:
                break;
            }
            setSvgTextInfo(infos[1], X2, Y2, 90);
            setSvgTextInfo(infos[2], X3, Y3, 0);
            setSvgTextInfo(infos[3], X4, Y4, 180);
            setSvgTextInfo(infos[4], X5, Y5, -90);
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                infos[5].content = "";
                break;
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboid:
              case BoxKind.cuboidCoverOnTheSameSide:
                setSvgTextInfo(infos[5], X6, Y6, 0);
                break;
              default:
                break;
            }
          };
          return BoxGenerator;
        }());
        cc.BoxGenerator = BoxGenerator;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
