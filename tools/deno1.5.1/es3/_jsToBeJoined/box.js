"use strict";

// @ts-nocheck
/* eslint-disable */
var System, __instantiate;
(function () {
	// deno-fmt-ignore
  var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  // deno-fmt-ignore
  var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var r = Object.create(null);
  System = {
    register: function (id, d, f) {
      r[id] = { d: d, f: f, exp: {} };
    },
  };
  function dI(mid, src) {
    return __awaiter(this, void 0, void 0, function () {
      var id, _a, o, ia, _b, sa, oa, s, i;
      return __generator(this, function (_c) {
        id = mid.replace(/\.\w+$/i, "");
        if (id.includes("./")) {
          (_a = id.split("/").reverse()),
            (o = _a[0]),
            (ia = _a.slice(1)),
            (_b = src.split("/").reverse()),
            (sa = _b.slice(1)),
            (oa = [o]);
          (s = 0), (i = void 0);
          while ((i = ia.shift())) {
            if (i === "..") s++;
            else if (i === ".") break;
            else oa.push(i);
          }
          if (s < sa.length) oa.push.apply(oa, sa.slice(s));
          id = oa.reverse().join("/");
        }
        return [
          2,
          id in r ? gExpA(id) : Promise.resolve().then(function () {
            return require(mid);
          }),
        ];
      });
    });
  }
  function gC(id, main) {
    return {
      id: id,
      import: function (m) {
        return dI(m, id);
      },
      meta: { url: id, main: main },
    };
  }
  function gE(exp) {
    return function (id, v) {
      var _a;
      var e = typeof id === "string" ? ((_a = {}), (_a[id] = v), _a) : id;
      for (var _i = 0, _b = Object.entries(e); _i < _b.length; _i++) {
        var _c = _b[_i],
          id_1 = _c[0],
          value = _c[1];
        Object.defineProperty(exp, id_1, {
          value: value,
          writable: true,
          enumerable: true,
        });
      }
      return v;
    };
  }
  function rF(main) {
    var m;
    for (var id in r) {
      m = r[id];
      var f = m.f,
        exp = m.exp;
      var _a = f(gE(exp), gC(id, id === main)),
        e = _a.execute,
        s = _a.setters;
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }
  function gExpA(id) {
    return __awaiter(this, void 0, void 0, function () {
      var m, d, e, s, i, _a, _b, r_1;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(id in r)) return [2];
            m = r[id];
            if (!m.s) return [3, 6];
            (d = m.d), (e = m.e), (s = m.s);
            delete m.s;
            delete m.e;
            i = 0;
            _c.label = 1;
          case 1:
            if (!(i < s.length)) return [3, 4];
            _b = (_a = s)[i];
            return [4, gExpA(d[i])];
          case 2:
            _b.apply(_a, [_c.sent()]);
            _c.label = 3;
          case 3:
            i++;
            return [3, 1];
          case 4:
            r_1 = e();
            if (!r_1) return [3, 6];
            return [4, r_1];
          case 5:
            _c.sent();
            _c.label = 6;
          case 6:
            return [2, m.exp];
        }
      });
    });
  }
  function gExp(id) {
    if (!(id in r)) return;
    var m = r[id];
    if (m.s) {
      var d = m.d,
        e = m.e,
        s = m.s;
      delete m.s;
      delete m.e;
      for (var i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = function (m, a) {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

"use strict";
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

__instantiate("box", false);

