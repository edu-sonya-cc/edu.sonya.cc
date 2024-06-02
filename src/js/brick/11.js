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

var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, {}, {}) || this;
        _this.idOrClassPrefix = 'brickPageFootball';
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var _b = _this.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, MAX_X = _b.maxX, MAX_Y = _b.maxY, pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight;
            var css = "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\t\t";
            var list = [];
            JSON.parse(JSON.stringify(_this.data.list)).forEach(function (item) {
                list.push(item);
            });
            var html = '';
            var elementList = [];
            list
                .filter(function (_a) {
                var rowCount = _a.rowCount;
                return rowCount === 0;
            })
                .forEach(function (item) {
                var element = _this.getElement(item, mmToPxScale, MAX_X, MAX_Y);
                html += "<page>" + element.outerHTML + "</page>";
            });
            list
                .filter(function (_a) {
                var rowCount = _a.rowCount;
                return rowCount > 0;
            })
                .forEach(function (item) {
                switch (item.kind) {
                    case 'interlacedHexagon':
                        elementList.push(_this.getElement(item, mmToPxScale, MAX_X, MAX_Y));
                        break;
                    default:
                        var fixedRowCount = 1;
                        switch (item.kind) {
                            case 'hollowOut':
                            case 'hollowOutWithHole':
                                fixedRowCount = 0;
                                break;
                            default:
                                fixedRowCount = 1;
                                break;
                        }
                        var rowCount = item.rowCount;
                        for (var i = 0; i < rowCount; ++i) {
                            elementList.push(_this.getElement(__assign(__assign({}, item), { rowCount: fixedRowCount }), mmToPxScale, MAX_X, MAX_Y));
                        }
                        break;
                }
            });
            html += _this.getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);
            var en_us = FILENAME_POSTFIX + "football";
            var zh_cn = FILENAME_POSTFIX + "\u8DB3\u7403";
            var zh_tw = FILENAME_POSTFIX + "\u8DB3\u7403";
            computedData.title = { en_us: en_us, zh_cn: zh_cn, zh_tw: zh_tw };
            computedData.css = css;
            computedData.html = html;
        };
        _this.getElement = function (item, mmToPxScale, PAPER_WIDTH, PAPER_HEIGHT) {
            var createSvg = svgSpace.edu.sonya.cc.SvgHelper.createSvg;
            var svg = createSvg();
            switch (item.kind) {
                case 'hollowOut':
                    _this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 0);
                    break;
                case 'hollowOutWithHole':
                    _this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 1);
                    break;
                case 'interlacedHexagon':
                    _this.countInterlacedHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
                    break;
                case 'pentagon':
                    _this.countPentagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
                    break;
                case 'hexagon':
                    _this.countHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
                    break;
                case 'unify':
                    _this.countUnifySvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
                    break;
                default:
                    break;
            }
            var widthMm = svg.widthMm, heightMm = svg.heightMm;
            svg.setAttribute('width', widthMm + "mm");
            svg.setAttribute('height', heightMm + "mm");
            return svg;
        };
        _this.countHollowOutSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT, HOLLOW_STYLE) {
            var _a = svgSpace.edu.sonya.cc.SvgHelper, appendLine = _a.appendLine, appendCircle = _a.appendCircle;
            var SIDE_LENGTH = item.length, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, cutLineStyle = item.cutLineStyle;
            var RADIUS = 3;
            var RADIUS_MINI = 0.1;
            var ANGLE30 = (Math.PI * 30) / 180;
            var ANGLE60 = (Math.PI * 60) / 180;
            var SIN30 = Math.sin(ANGLE30);
            var SIN60 = Math.sin(ANGLE60);
            var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
            var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
            var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
            var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
            var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
            var OFFSET_X = SIDE_LENGTH * 0.2;
            var OFFSET_X_BIAS = OFFSET_X * SIN30;
            var OFFSET_Y_BIAS = OFFSET_X * SIN60;
            var ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
            var ROW_COUNT = Math.floor(Math.floor(PAPER_HEIGHT / ROW_HEIGHT) / 9) * 9;
            var WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
            var COL_GROUP_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE / 6);
            var COL_COUNT = 6;
            for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
                var rowGroupIndex = rowIndex === 0 ? 0 : Math.floor((rowIndex - 1) / 8);
                var TOP = ROW_HEIGHT * rowIndex;
                var rowIndexInGroup = rowIndex - rowGroupIndex * 8;
                for (var groupIndex = 0; groupIndex < COL_GROUP_COUNT; ++groupIndex) {
                    var LEFT_GROUP = SIDE_LENGTH * SIN30 +
                        (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH) +
                        WIDTH_OF_ONE * 6 * groupIndex;
                    for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
                        var LEFT = LEFT_GROUP + WIDTH_OF_ONE * colIndex;
                        var Ax = 0, Ay = 0;
                        var Bx = 0, By = 0;
                        var Cx = 0, Cy = 0;
                        var Dx = 0, Dy = 0;
                        var Ex = 0, Ey = 0;
                        var Fx = 0, Fy = 0;
                        Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
                        Bx = Ax + SIDE_LENGTH;
                        Cx = LEFT + LONG_LINE_LENGTH;
                        Dx = Bx;
                        Ex = Ax;
                        Fx = LEFT;
                        Ay = TOP;
                        By = Ay;
                        Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
                        Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
                        Ey = Dy;
                        Fy = Cy;
                        var isBoundary = false;
                        var isHide = false;
                        isHide = rowIndexInGroup === 0 && colIndex === 0;
                        isHide = isHide || (colIndex === 0 && (rowIndexInGroup === 4 || rowIndexInGroup === 8));
                        isHide =
                            isHide ||
                                (colIndex === 5 &&
                                    (rowIndexInGroup === 4 || rowIndexInGroup === 5 || rowIndexInGroup === 7));
                        isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0);
                        if (HOLLOW_STYLE > 0) {
                            isHide =
                                isHide ||
                                    rowIndexInGroup === 2 ||
                                    rowIndexInGroup === 4 ||
                                    rowIndexInGroup === 5 ||
                                    rowIndexInGroup === 7;
                        }
                        isBoundary = rowIndexInGroup === 0 || rowIndexInGroup === 1;
                        isBoundary = isBoundary || rowIndexInGroup === 8;
                        isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
                        if (!isHide) {
                            appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Ax, Bx, Ay, By, null);
                        }
                        if (rowIndex % 2 === 0 || colIndex === COL_COUNT - 1) {
                            isHide = rowIndexInGroup === 0 && colIndex === 0;
                            isHide = isHide || (rowIndexInGroup === 7 && colIndex === 5);
                            isHide = isHide || (rowIndexInGroup === 7 && colIndex === 4);
                            isHide =
                                isHide ||
                                    (colIndex === 5 && rowIndexInGroup === 8 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
                            isHide = isHide || Ay + SIDE_LENGTH >= PAPER_HEIGHT;
                            isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
                            if (HOLLOW_STYLE > 0) {
                                isHide = isHide || rowIndexInGroup === 2 || rowIndexInGroup === 6;
                            }
                            isBoundary = rowIndexInGroup === 0 && colIndex > 0;
                            isBoundary = isBoundary || (colIndex === 5 && rowIndexInGroup % 2 === 1);
                            isBoundary = isBoundary || (colIndex === 0 && rowIndexInGroup === 8);
                            isBoundary =
                                isBoundary ||
                                    (colIndex === 5 &&
                                        (rowIndexInGroup === 5 || rowIndexInGroup === 6 || rowIndexInGroup === 8));
                            isBoundary = isBoundary || rowIndexInGroup === 8;
                            if (HOLLOW_STYLE === 0) {
                                isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
                            }
                            if (!isHide) {
                                appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Bx, Cx, By, Cy, null);
                            }
                            if (Dy < PAPER_HEIGHT) {
                                isHide = colIndex === 5 && (rowIndexInGroup === 7 || rowIndexInGroup === 5);
                                if (HOLLOW_STYLE > 0) {
                                    isHide = isHide || (colIndex === 5 && rowIndexInGroup === 4);
                                }
                                isHide = isHide || (rowIndexInGroup === 8 && rowIndex === ROW_COUNT - 1);
                                isBoundary = colIndex === 0 && (rowIndexInGroup === 0 || rowIndexInGroup === 8);
                                isBoundary =
                                    isBoundary ||
                                        (colIndex === 5 &&
                                            (rowIndexInGroup % 2 === 1 || rowIndexInGroup === 6 || rowIndexInGroup === 4));
                                if (HOLLOW_STYLE > 0) {
                                    isBoundary = isBoundary && !(colIndex === 5 && rowIndexInGroup === 6);
                                }
                                if (HOLLOW_STYLE === 0) {
                                    isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
                                }
                                if (!isHide) {
                                    if (isBoundary) {
                                        appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
                                    }
                                    else if (rowIndexInGroup === 0 ||
                                        rowIndexInGroup === 6 ||
                                        rowIndexInGroup === 8) {
                                        appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                                    }
                                    else {
                                        if (HOLLOW_STYLE === 0 || !(rowIndexInGroup === 2 || rowIndexInGroup === 4)) {
                                            appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
                                        }
                                    }
                                }
                            }
                        }
                        isHide = colIndex === 0 && (rowIndexInGroup === 0 || rowIndexInGroup === 8);
                        isHide =
                            isHide || (colIndex === 5 && rowIndexInGroup === 7 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
                        isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
                        if (HOLLOW_STYLE > 0) {
                            isHide = isHide || rowIndexInGroup === 2 || rowIndexInGroup === 5;
                        }
                        if (HOLLOW_STYLE > 0) {
                            isHide = isHide || rowIndexInGroup === 0 || rowIndexInGroup === 3;
                        }
                        isBoundary = rowIndexInGroup === 7 || (rowIndexInGroup === 3 && colIndex === 5);
                        isBoundary = isBoundary || (colIndex === 0 && rowIndexInGroup === 6);
                        isBoundary = isBoundary || (rowIndexInGroup === 6 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
                        if (HOLLOW_STYLE > 0) {
                            isBoundary = isBoundary || (rowIndexInGroup === 5 && colIndex === 5);
                        }
                        if (HOLLOW_STYLE === 0) {
                            isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
                        }
                        if (!isHide) {
                            appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Dx, Ex, Dy, Ey, null);
                        }
                        if (rowIndex % 2 === 0) {
                            isHide =
                                colIndex === 0 &&
                                    (rowIndexInGroup === 0 || rowIndexInGroup === 2 || rowIndexInGroup === 8);
                            isHide = isHide || Ey >= PAPER_HEIGHT;
                            if (HOLLOW_STYLE > 0) {
                                isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 4 && colIndex > 0);
                            }
                            isBoundary = colIndex === 0 && (rowIndexInGroup === 4 || rowIndexInGroup === 6);
                            isBoundary = isBoundary || (rowIndexInGroup === 6 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
                            if (!isHide) {
                                appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Ex, Fx, Ey, Fy, null);
                            }
                            isHide =
                                colIndex === 0 &&
                                    (rowIndexInGroup === 0 || rowIndexInGroup === 2 || rowIndexInGroup === 8);
                            isHide = isHide || Ay + SIDE_LENGTH >= PAPER_HEIGHT;
                            if (HOLLOW_STYLE > 0) {
                                isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 6 && colIndex > 0);
                            }
                            isBoundary = rowIndexInGroup === 0 || colIndex === 0 || rowIndexInGroup === 8;
                            if (!isHide) {
                                appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Fx, Ax, Fy, Ay, null);
                            }
                        }
                        switch (rowIndexInGroup) {
                            case 2:
                            case 5:
                                if (rowIndexInGroup === 2 || rowIndexInGroup === 5) {
                                    var circleX = (Ax + Bx + Cx + Dx + Ex + Fx) / 6;
                                    var circleY = (Ay + By + Cy + Dy + Ey + Fy) / 6;
                                    switch (HOLLOW_STYLE) {
                                        case 0:
                                            if ((rowIndexInGroup === 2 && colIndex > 0) ||
                                                (rowIndexInGroup === 5 && colIndex % 6 < 5)) {
                                                appendLine(svg, cutLineStyle, Ax, Bx, Ay, By, null);
                                                appendLine(svg, cutLineStyle, Bx, Cx, By, Cy, null);
                                                appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                                                appendLine(svg, cutLineStyle, Dx, Ex, Dy, Ey, null);
                                                appendLine(svg, cutLineStyle, Ex, Fx, Ey, Fy, null);
                                                appendLine(svg, cutLineStyle, Fx, Ax, Fy, Ay, null);
                                            }
                                            break;
                                        case 1:
                                            appendCircle(svg, innerLineStyle, circleX, circleY, RADIUS, null);
                                            appendCircle(svg, innerLineStyle, circleX, circleY, RADIUS_MINI, null);
                                            appendLine(svg, cutLineStyle, Ax, Bx, Ay, By, null);
                                            appendLine(svg, cutLineStyle, Bx, Cx, By, Cy, null);
                                            appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                                            appendLine(svg, cutLineStyle, Dx, Ex, Dy, Ey, null);
                                            appendLine(svg, cutLineStyle, Ex, Fx, Ey, Fy, null);
                                            appendLine(svg, cutLineStyle, Fx, Ax, Fy, Ay, null);
                                            switch (rowIndexInGroup) {
                                                case 2:
                                                    appendLine(svg, outerLineStyle, Bx, circleX, By, circleY, null);
                                                    appendLine(svg, outerLineStyle, Ax, circleX, Ay, circleY, null);
                                                    break;
                                                case 5:
                                                    appendLine(svg, outerLineStyle, Ex, circleX, Ey, circleY, null);
                                                    appendLine(svg, outerLineStyle, Dx, circleX, Dy, circleY, null);
                                                    break;
                                                default:
                                                    break;
                                            }
                                            break;
                                        case 2:
                                            switch (rowIndexInGroup) {
                                                case 2:
                                                    appendLine(svg, outerLineStyle, Bx, circleX, By, circleY, null);
                                                    appendLine(svg, outerLineStyle, Ax, circleX, Ay, circleY, null);
                                                    appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);
                                                    appendLine(svg, outerLineStyle, Dx - OFFSET_X, Ex + OFFSET_X, Dy, Dy, null);
                                                    break;
                                                case 5:
                                                    appendLine(svg, outerLineStyle, Ex, circleX, Ey, circleY, null);
                                                    appendLine(svg, outerLineStyle, Dx, circleX, Dy, circleY, null);
                                                    appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);
                                                    appendLine(svg, outerLineStyle, Ax + OFFSET_X, Bx - OFFSET_X, Ay, Ay, null);
                                                    break;
                                                default:
                                                    break;
                                            }
                                            appendLine(svg, outerLineStyle, Bx + OFFSET_X_BIAS, Cx - OFFSET_X_BIAS, By + OFFSET_Y_BIAS, Cy - OFFSET_Y_BIAS, null);
                                            appendLine(svg, outerLineStyle, Cx - OFFSET_X_BIAS, Dx + OFFSET_X_BIAS, Cy + OFFSET_Y_BIAS, Dy - OFFSET_Y_BIAS, null);
                                            appendLine(svg, outerLineStyle, Ex - OFFSET_X_BIAS, Fx + OFFSET_X_BIAS, Ey - OFFSET_Y_BIAS, Fy + OFFSET_Y_BIAS, null);
                                            appendLine(svg, outerLineStyle, Fx + OFFSET_X_BIAS, Ax - OFFSET_X_BIAS, Fy - OFFSET_Y_BIAS, Ay + OFFSET_Y_BIAS, null);
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            var widthMm = WIDTH_OF_ONE * 6 * COL_GROUP_COUNT + SIN30_MULTIPLY_SIDE_LENGTH + SIDE_LENGTH * 0.5;
            var heightMm = ROW_HEIGHT * ROW_COUNT + SIDE_LENGTH;
            svg.widthMm = widthMm;
            svg.heightMm = heightMm;
        };
        _this.countInterlacedHexagonSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var SIDE_LENGTH = item.length, rowCount = item.rowCount, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, cutLineStyle = item.cutLineStyle;
            var ANGLE30 = (Math.PI * 30) / 180;
            var ANGLE60 = (Math.PI * 60) / 180;
            var SIN30 = Math.sin(ANGLE30);
            var SIN60 = Math.sin(ANGLE60);
            var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
            var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
            var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
            var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
            var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
            var ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
            var ROW_COUNT = rowCount ? rowCount * 2 : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
            var WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
            var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
            for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
                var TOP = ROW_HEIGHT * rowIndex;
                for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
                    var LEFT = SIDE_LENGTH * SIN30 +
                        WIDTH_OF_ONE * colIndex +
                        (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH);
                    var Ax = 0, Ay = 0;
                    var Bx = 0, By = 0;
                    var Cx = 0, Cy = 0;
                    var Dx = 0, Dy = 0;
                    var Ex = 0, Ey = 0;
                    var Fx = 0, Fy = 0;
                    Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
                    Bx = Ax + SIDE_LENGTH;
                    Cx = LEFT + LONG_LINE_LENGTH;
                    Dx = Bx;
                    Ex = Ax;
                    Fx = LEFT;
                    Ay = TOP;
                    By = Ay;
                    Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
                    Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
                    Ey = Dy;
                    Fy = Cy;
                    appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);
                    if (rowIndex % 2 === 0 || colIndex === COL_COUNT - 1) {
                        appendLine(svg, outerLineStyle, Bx, Cx, By, Cy, null);
                        if (Dy < PAPER_HEIGHT) {
                            appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
                        }
                    }
                    appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);
                    if (rowIndex % 2 === 0) {
                        appendLine(svg, outerLineStyle, Ex, Fx, Ey, Fy, null);
                        appendLine(svg, outerLineStyle, Fx, Ax, Fy, Ay, null);
                    }
                }
            }
            var widthMm = WIDTH_OF_ONE * COL_COUNT + SIN30_MULTIPLY_SIDE_LENGTH + SIDE_LENGTH * 0.5;
            var heightMm = ROW_HEIGHT * ROW_COUNT + 0.1;
            svg.widthMm = widthMm;
            svg.heightMm = heightMm;
        };
        _this.countPentagonSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var SIDE_LENGTH = item.length, rowCount = item.rowCount, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle;
            var OUTSIDE_SCALE = 0.4;
            var ANGLE18 = (Math.PI * 18) / 180;
            var ANGLE36 = (Math.PI * 36) / 180;
            var ANGLE54 = (Math.PI * 54) / 180;
            var ANGLE72 = (Math.PI * 72) / 180;
            var SIN18 = Math.sin(ANGLE18);
            var SIN36 = Math.sin(ANGLE36);
            var SIN54 = Math.sin(ANGLE54);
            var SIN72 = Math.sin(ANGLE72);
            var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
            var LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;
            var HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
            var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
            var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
            var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
            var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
            var SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
            var ROW_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH +
                SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
                SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
            var ROW_COUNT_PER_PAGE = Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
            var ROW_COUNT = rowCount ? Math.min(ROW_COUNT_PER_PAGE, rowCount) : ROW_COUNT_PER_PAGE;
            var WIDTH_OF_ONE = SIDE_LENGTH * 2.4;
            var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
            for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
                var TOP = ROW_HEIGHT * rowIndex;
                for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
                    var LEFT = WIDTH_OF_ONE * colIndex;
                    var A1x = 0, A1y = 0;
                    var A2x = 0, A2y = 0;
                    var A3x = 0, A3y = 0;
                    var B1x = 0, B1y = 0;
                    var B2x = 0, B2y = 0;
                    var B3x = 0, B3y = 0;
                    var C1x = 0, C1y = 0;
                    var C2x = 0, C2y = 0;
                    var C3x = 0, C3y = 0;
                    var D1x = 0, D1y = 0;
                    var D2x = 0, D2y = 0;
                    var D3x = 0, D3y = 0;
                    var E1x = 0, E1y = 0;
                    var E2x = 0, E2y = 0;
                    var E3x = 0, E3y = 0;
                    A1x =
                        LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) + LONG_SIDE_LENGTH * 0.5;
                    B1x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
                    E1x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
                    C1x = B1x - SIN18_MULTIPLY_SIDE_LENGTH;
                    D1x = E1x + SIN18_MULTIPLY_SIDE_LENGTH;
                    A1y = TOP + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    B1y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
                    E1y = B1y;
                    C1y = B1y + SIN72_MULTIPLY_SIDE_LENGTH;
                    D1y = C1y;
                    A2x = A1x - SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    A3x = A1x + SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    A2y = TOP;
                    A3y = TOP;
                    B2x = B1x + SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    B2y = B1y - SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    B3x = B1x + SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    B3y = B1y + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    C2x = C1x + SIDE_LENGTH * OUTSIDE_SCALE;
                    C3x = C1x - SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    C2y = C1y;
                    C3y = C1y + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    D2x = D1x + SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    D3x = D1x - SIDE_LENGTH * OUTSIDE_SCALE;
                    D2y = D1y + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    D3y = D1y;
                    E2x = E1x - SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    E3x = E1x - SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    E2y = E1y + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    E3y = E1y - SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
                    appendLine(svg, innerLineStyle, A1x, B1x, A1y, B1y, null);
                    appendLine(svg, innerLineStyle, B1x, C1x, B1y, C1y, null);
                    appendLine(svg, innerLineStyle, C1x, D1x, C1y, D1y, null);
                    appendLine(svg, innerLineStyle, D1x, E1x, D1y, E1y, null);
                    appendLine(svg, innerLineStyle, E1x, A1x, E1y, A1y, null);
                    appendLine(svg, outerLineStyle, A1x, A2x, A1y, A2y, null);
                    appendLine(svg, outerLineStyle, A1x, A3x, A1y, A3y, null);
                    appendLine(svg, outerLineStyle, B1x, B2x, B1y, B2y, null);
                    appendLine(svg, outerLineStyle, B1x, B3x, B1y, B3y, null);
                    appendLine(svg, outerLineStyle, C1x, C2x, C1y, C2y, null);
                    appendLine(svg, outerLineStyle, C1x, C3x, C1y, C3y, null);
                    appendLine(svg, outerLineStyle, D1x, D2x, D1y, D2y, null);
                    appendLine(svg, outerLineStyle, D1x, D3x, D1y, D3y, null);
                    appendLine(svg, outerLineStyle, E1x, E2x, E1y, E2y, null);
                    appendLine(svg, outerLineStyle, E1x, E3x, E1y, E3y, null);
                    appendLine(svg, outerLineStyle, A3x, B2x, A3y, B2y, null);
                    appendLine(svg, outerLineStyle, B3x, C2x, B3y, C2y, null);
                    appendLine(svg, outerLineStyle, C3x, D2x, C3y, D2y, null);
                    appendLine(svg, outerLineStyle, D3x, E2x, D3y, E2y, null);
                    appendLine(svg, outerLineStyle, E3x, A2x, E3y, A2y, null);
                }
            }
            var widthMm = WIDTH_OF_ONE * COL_COUNT;
            var heightMm = ROW_HEIGHT * ROW_COUNT;
            svg.widthMm = widthMm;
            svg.heightMm = heightMm;
        };
        _this.countHexagonSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var SIDE_LENGTH = item.length, rowCount = item.rowCount, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, cutLineStyle = item.cutLineStyle;
            var ANGLE30 = (Math.PI * 30) / 180;
            var ANGLE60 = (Math.PI * 60) / 180;
            var SIN30 = Math.sin(ANGLE30);
            var SIN60 = Math.sin(ANGLE60);
            var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
            var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
            var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
            var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
            var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
            var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
            var ROW_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
            var ROW_COUNT = rowCount ? rowCount : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
            var WIDTH_OF_ONE = LONG_LINE_LENGTH;
            var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
            for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
                var TOP = ROW_HEIGHT * rowIndex;
                for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
                    var LEFT = WIDTH_OF_ONE * colIndex;
                    var Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
                    var Bx = Ax + SIDE_LENGTH;
                    var Cx = LEFT + WIDTH_OF_ONE;
                    var Dx = Bx;
                    var Ex = Ax;
                    var Fx = LEFT;
                    var Ay = TOP;
                    var By = Ay;
                    var Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
                    var Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
                    var Ey = Dy;
                    var Fy = Cy;
                    appendLine(svg, innerLineStyle, Ax, Bx, Ay, By, null);
                    appendLine(svg, innerLineStyle, Bx, Cx, By, Cy, null);
                    appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
                    appendLine(svg, innerLineStyle, Dx, Ex, Dy, Ey, null);
                    appendLine(svg, innerLineStyle, Ex, Fx, Ey, Fy, null);
                    appendLine(svg, innerLineStyle, Fx, Ax, Fy, Ay, null);
                }
            }
            var widthMm = WIDTH_OF_ONE * COL_COUNT;
            var heightMm = ROW_HEIGHT * ROW_COUNT;
            svg.widthMm = widthMm;
            svg.heightMm = heightMm;
        };
        _this.appendPentagon = function (svg, SIDE_LENGTH, innerLineStyle, outerLineStyle, TOP, LEFT, kind, mirror, viewBox) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var OUTSIDE_SCALE = 0.4;
            var ANGLE18 = (Math.PI * 18) / 180;
            var ANGLE36 = (Math.PI * 36) / 180;
            var ANGLE54 = (Math.PI * 54) / 180;
            var ANGLE72 = (Math.PI * 72) / 180;
            var SIN18 = Math.sin(ANGLE18);
            var SIN36 = Math.sin(ANGLE36);
            var SIN54 = Math.sin(ANGLE54);
            var SIN72 = Math.sin(ANGLE72);
            var PENTAGON_LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;
            var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
            var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
            var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
            var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
            var SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;
            var PENTAGON_CORE_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH;
            var PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH +
                SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
                SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
            var PENTAGON_CORE_WIDTH = SIN18_MULTIPLY_SIDE_LENGTH * 2;
            var PENTAGON_WIDTH = PENTAGON_CORE_WIDTH + PENTAGON_CORE_WIDTH * OUTSIDE_SCALE;
            var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
            var PENTAGON_HALF_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * 0.5;
            var MIRROR_SCALE = mirror ? -1 : 1;
            TOP -=
                (SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE) * MIRROR_SCALE;
            var A1x = LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2);
            var B1x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
            var E1x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
            var C1x = B1x - SIN18_MULTIPLY_SIDE_LENGTH;
            var D1x = E1x + SIN18_MULTIPLY_SIDE_LENGTH;
            var A2x = A1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
            var A3x = A1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
            var B2x = B1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
            var B3x = B1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
            var C2x = C1x + SIDE_LENGTH * 0.4;
            var C3x = C1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
            var D2x = D1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
            var D3x = D1x - SIDE_LENGTH * 0.4;
            var E2x = E1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
            var E3x = E1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
            var A1y = TOP + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var B1y = A1y + SIN36_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
            var E1y = B1y;
            var C1y = B1y + SIN72_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
            var D1y = C1y;
            var A2y = TOP;
            var A3y = TOP;
            var B2y = B1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var B3y = B1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var C2y = C1y;
            var C3y = C1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var D2y = D1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var D3y = D1y;
            var E2y = E1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            var E3y = E1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
            appendLine(svg, outerLineStyle, A1x, B1x, A1y, B1y, viewBox);
            appendLine(svg, outerLineStyle, B1x, C1x, B1y, C1y, viewBox);
            appendLine(svg, outerLineStyle, C1x, D1x, C1y, D1y, viewBox);
            appendLine(svg, outerLineStyle, D1x, E1x, D1y, E1y, viewBox);
            appendLine(svg, outerLineStyle, E1x, A1x, E1y, A1y, viewBox);
            appendLine(svg, outerLineStyle, A1x, A3x, A1y, A3y, viewBox);
            appendLine(svg, outerLineStyle, A1x, A2x, A1y, A2y, viewBox);
            if (kind === 0)
                return;
            if (kind === 2 || !mirror) {
                appendLine(svg, outerLineStyle, A3x, B2x, A3y, B2y, viewBox);
                appendLine(svg, outerLineStyle, B1x, B2x, B1y, B2y, viewBox);
                appendLine(svg, outerLineStyle, B1x, B3x, B1y, B3y, viewBox);
                appendLine(svg, outerLineStyle, B3x, C2x, B3y, C2y, viewBox);
                appendLine(svg, outerLineStyle, C1x, C2x, C1y, C2y, viewBox);
            }
            if (kind === 2 || mirror) {
                appendLine(svg, outerLineStyle, D1x, D3x, D1y, D3y, viewBox);
                appendLine(svg, outerLineStyle, E1x, E2x, E1y, E2y, viewBox);
                appendLine(svg, outerLineStyle, E1x, E3x, E1y, E3y, viewBox);
                appendLine(svg, outerLineStyle, D3x, E2x, D3y, E2y, viewBox);
                appendLine(svg, outerLineStyle, E3x, A2x, E3y, A2y, viewBox);
            }
        };
        _this.appendHexagon = function (svg, SIDE_LENGTH, LINE_STYLE, TOP, LEFT, ROTATE, viewBox) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var ANGLE30 = (Math.PI * 30) / 180;
            var SIN30 = Math.sin(ANGLE30);
            var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
            var Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
            var Ay = TOP;
            var ANGLE_AB = (Math.PI * ROTATE) / 180;
            var Bx = Ax + SIDE_LENGTH * Math.cos(ANGLE_AB);
            var By = Ay + SIDE_LENGTH * Math.sin(ANGLE_AB);
            var ANGLE_BC = (Math.PI * (ROTATE - 30)) / 180;
            var Cx = Bx - SIDE_LENGTH * Math.sin(ANGLE_BC);
            var Cy = By + SIDE_LENGTH * Math.cos(ANGLE_BC);
            var ANGLE_CD = (Math.PI * (ROTATE + 30)) / 180;
            var Dx = Cx - SIDE_LENGTH * Math.sin(ANGLE_CD);
            var Dy = Cy + SIDE_LENGTH * Math.cos(ANGLE_CD);
            var ANGLE_DE = (Math.PI * ROTATE) / 180;
            var Ex = Dx - SIDE_LENGTH * Math.cos(ANGLE_DE);
            var Ey = Dy - SIDE_LENGTH * Math.sin(ANGLE_DE);
            var ANGLE_AF = (Math.PI * (60 - ROTATE)) / 180;
            var Fx = Ax - SIDE_LENGTH * Math.cos(ANGLE_AF);
            var Fy = Ay + SIDE_LENGTH * Math.sin(ANGLE_AF);
            appendLine(svg, LINE_STYLE, Ax, Bx, Ay, By, viewBox);
            appendLine(svg, LINE_STYLE, Bx, Cx, By, Cy, viewBox);
            appendLine(svg, LINE_STYLE, Cx, Dx, Cy, Dy, viewBox);
            appendLine(svg, LINE_STYLE, Dx, Ex, Dy, Ey, viewBox);
            appendLine(svg, LINE_STYLE, Ex, Fx, Ey, Fy, viewBox);
            appendLine(svg, LINE_STYLE, Fx, Ax, Fy, Ay, viewBox);
        };
        _this.countUnifySvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            var SIDE_LENGTH = item.length, rowCount = item.rowCount, INNER_LINE_STYLE = item.innerLineStyle, OUTER_LINE_STYLE = item.outerLineStyle;
            var _a = _this, appendHexagon = _a.appendHexagon, appendPentagon = _a.appendPentagon;
            var ANGLE30 = (Math.PI * 30) / 180;
            var SIN30 = Math.sin(ANGLE30);
            var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
            var ANGLE60 = (Math.PI * 60) / 180;
            var SIN60 = Math.sin(ANGLE60);
            var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
            var HEXAGON_WIDTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
            var HEXAGON_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
            var OUTSIDE_SCALE = 0.4;
            var HEXAGON_OUTSIDE = SIDE_LENGTH * OUTSIDE_SCALE;
            var HEXAGON_OUTSIDE_X = HEXAGON_OUTSIDE * SIN30;
            var HEXAGON_OUTSIDE_Y = HEXAGON_OUTSIDE * SIN60;
            var ANGLE18 = (Math.PI * 18) / 180;
            var ANGLE36 = (Math.PI * 36) / 180;
            var ANGLE54 = (Math.PI * 54) / 180;
            var ANGLE72 = (Math.PI * 72) / 180;
            var SIN18 = Math.sin(ANGLE18);
            var SIN36 = Math.sin(ANGLE36);
            var SIN54 = Math.sin(ANGLE54);
            var SIN72 = Math.sin(ANGLE72);
            var PENTAGON_LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;
            var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
            var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
            var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
            var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
            var SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;
            var PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
            var PENTAGON_WIDTH = SIN54_MULTIPLY_SIDE_LENGTH * 2;
            var PENTAGON_FULL_WIDTH = PENTAGON_WIDTH + PENTAGON_WIDTH * OUTSIDE_SCALE;
            var TOP = PENTAGON_HEIGHT;
            var LEFT = HEXAGON_OUTSIDE_X;
            var viewBox = {
                left: 999999,
                right: 0,
                top: 999999,
                bottom: 0
            };
            var COLUMN_SPACE = HEXAGON_WIDTH + SIDE_LENGTH;
            var HEXAGON_Y1 = TOP;
            var HEXAGON_Y2 = TOP + HEXAGON_HEIGHT;
            var HEXAGON_Y3 = TOP + HEXAGON_HEIGHT * 1.5;
            var HEXAGON_Y4 = TOP + HEXAGON_HEIGHT * 2.5;
            for (var i = 0; i < 5; ++i) {
                var left = LEFT + COLUMN_SPACE * i;
                appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y1, left, 0, viewBox);
                appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y2, left, 0, viewBox);
                appendPentagon(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, HEXAGON_Y2 + HEXAGON_HEIGHT, left + SIN30_MULTIPLY_SIDE_LENGTH, i > 0 ? 0 : 1, true, viewBox);
                var leftOfBelow = left + SIDE_LENGTH * (1 + SIN30);
                appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y3, leftOfBelow, 0, viewBox);
                appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y4, leftOfBelow, 0, viewBox);
                appendPentagon(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, HEXAGON_Y3, leftOfBelow + SIN30_MULTIPLY_SIDE_LENGTH, i < 4 ? 0 : 1, false, viewBox);
                if (i === 4) {
                    appendPentagon(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, TOP, left + SIN30_MULTIPLY_SIDE_LENGTH, 2, false, viewBox);
                    appendPentagon(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, HEXAGON_Y3 + HEXAGON_HEIGHT * 2, leftOfBelow + SIN30_MULTIPLY_SIDE_LENGTH - HEXAGON_WIDTH - SIDE_LENGTH, 2, true, viewBox);
                }
                var skipAboveLines = false;
                var skipBelowLines = false;
                switch (i) {
                    case 3:
                        skipBelowLines = true;
                        break;
                    case 4:
                        skipAboveLines = true;
                        break;
                    default:
                        break;
                }
                if (!skipAboveLines) {
                    var X1 = left + SIDE_LENGTH * 0.5, Y1 = HEXAGON_Y1;
                    var X2 = X1 + HEXAGON_OUTSIDE_X, Y2 = Y1 - HEXAGON_OUTSIDE_Y;
                    var X4 = X1 + SIDE_LENGTH, Y4 = Y1;
                    var X3 = X4 - HEXAGON_OUTSIDE_X, Y3 = Y2;
                    var X5 = X4 + HEXAGON_OUTSIDE, Y5 = Y1;
                    var X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH, Y7 = Y4 + SIN60_MULTIPLY_SIDE_LENGTH;
                    var X6 = X7 + HEXAGON_OUTSIDE_X, Y6 = Y7 - HEXAGON_OUTSIDE_Y;
                    var X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH, Y8 = Y1 + SIN60_MULTIPLY_SIDE_LENGTH;
                    var X9 = X8 - HEXAGON_OUTSIDE_X, Y9 = Y8 - HEXAGON_OUTSIDE_Y;
                    var X10 = X1 - HEXAGON_OUTSIDE, Y10 = Y1;
                    appendLine(svg, OUTER_LINE_STYLE, X1, X2, Y1, Y2, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X2, X3, Y2, Y3, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X3, X4, Y3, Y4, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X4, X5, Y4, Y5, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X5, X6, Y5, Y6, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X6, X7, Y6, Y7, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X8, X9, Y8, Y9, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X9, X10, Y9, Y10, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X10, X1, Y10, Y1, viewBox);
                    if (i === 0) {
                        var X11 = X9, Y11 = Y8 + HEXAGON_OUTSIDE_Y;
                        var X13 = X8 + SIN30_MULTIPLY_SIDE_LENGTH, Y13 = Y8 + SIN60_MULTIPLY_SIDE_LENGTH;
                        var X12 = X13 - HEXAGON_OUTSIDE, Y12 = Y13;
                        appendLine(svg, OUTER_LINE_STYLE, X8, X11, Y8, Y11, viewBox);
                        appendLine(svg, OUTER_LINE_STYLE, X11, X12, Y11, Y12, viewBox);
                        appendLine(svg, OUTER_LINE_STYLE, X12, X13, Y12, Y13, viewBox);
                    }
                }
                if (!skipBelowLines) {
                    var X1 = leftOfBelow + SIDE_LENGTH * 0.5, Y1 = HEXAGON_Y4 + HEXAGON_HEIGHT;
                    var X2 = X1 + HEXAGON_OUTSIDE_X, Y2 = Y1 + HEXAGON_OUTSIDE_Y;
                    var X4 = X1 + SIDE_LENGTH, Y4 = Y1;
                    var X3 = X4 - HEXAGON_OUTSIDE_X, Y3 = Y2;
                    var X5 = X4 + HEXAGON_OUTSIDE, Y5 = Y1;
                    var X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH, Y7 = Y4 - SIN60_MULTIPLY_SIDE_LENGTH;
                    var X6 = X7 + HEXAGON_OUTSIDE_X, Y6 = Y7 + HEXAGON_OUTSIDE_Y;
                    var X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH, Y8 = Y1 - SIN60_MULTIPLY_SIDE_LENGTH;
                    var X9 = X8 - HEXAGON_OUTSIDE_X, Y9 = Y8 + HEXAGON_OUTSIDE_Y;
                    var X10 = X1 - HEXAGON_OUTSIDE, Y10 = Y1;
                    appendLine(svg, OUTER_LINE_STYLE, X1, X2, Y1, Y2, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X2, X3, Y2, Y3, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X3, X4, Y3, Y4, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X4, X5, Y4, Y5, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X5, X6, Y5, Y6, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X6, X7, Y6, Y7, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X8, X9, Y8, Y9, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X9, X10, Y9, Y10, viewBox);
                    appendLine(svg, OUTER_LINE_STYLE, X10, X1, Y10, Y1, viewBox);
                    if (i === 4) {
                        var X11 = X6, Y11 = Y7 - HEXAGON_OUTSIDE_Y;
                        var X13 = X7 - SIN30_MULTIPLY_SIDE_LENGTH, Y13 = Y7 - SIN60_MULTIPLY_SIDE_LENGTH;
                        var X12 = X13 + HEXAGON_OUTSIDE, Y12 = Y13;
                        appendLine(svg, OUTER_LINE_STYLE, X7, X11, Y7, Y11, viewBox);
                        appendLine(svg, OUTER_LINE_STYLE, X11, X12, Y11, Y12, viewBox);
                        appendLine(svg, OUTER_LINE_STYLE, X12, X13, Y12, Y13, viewBox);
                    }
                }
            }
            svg.widthMm = viewBox.right;
            svg.heightMm = viewBox.bottom;
        };
        _this.createTableBodyRow = function (item) {
            var _a = item, length = _a.length, kind = _a.kind, rowCount = _a.rowCount, innerLineStyle = _a.innerLineStyle, outerLineStyle = _a.outerLineStyle, cutLineStyle = _a.cutLineStyle;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
            _this.appendSelectTd(tr, kind, item, 'kind', [
                {
                    value: 'hollowOut',
                    captions: { en_us: 'Hollow Out', zh_cn: '镂空', zh_tw: '鏤空' }
                },
                {
                    value: 'hollowOutWithHole',
                    captions: {
                        en_us: 'Hollow Out with Hole',
                        zh_cn: '镂空带孔',
                        zh_tw: '鏤空帶孔'
                    }
                },
                {
                    value: 'pentagon',
                    captions: { en_us: 'Pentagon', zh_cn: '五边形', zh_tw: '五邊形' }
                },
                {
                    value: 'hexagon',
                    captions: { en_us: 'Hexagon', zh_cn: '六边形', zh_tw: '六邊形' }
                },
                {
                    value: 'interlacedHexagon',
                    captions: {
                        en_us: 'Interlaced Hexagon',
                        zh_cn: '交错六边形',
                        zh_tw: '交錯六邊形'
                    }
                },
                {
                    value: 'unify',
                    captions: { en_us: 'Unify', zh_cn: '整体', zh_tw: '整體' }
                },
            ]);
            _this.appendNumberTd(tr, rowCount, item, 'rowCount', 1, null, 1);
            _this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
            _this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
            _this.appendTextareaTd(tr, cutLineStyle, item, 'cutLineStyle', 'string');
        };
        _this.initTableHead = function () {
            _this.appendTableHeadCell({ en_us: 'Length', zh_cn: '边长', zh_tw: '邊長' });
            _this.appendTableHeadCell({ en_us: 'Kind', zh_cn: '类型', zh_tw: '類型' });
            _this.appendTableHeadCell({ en_us: 'Row Count', zh_cn: '行数', zh_tw: '數量' });
            _this.appendTableHeadCell({
                en_us: 'Inner Line Style',
                zh_cn: '内部线样式',
                zh_tw: '內部線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Outer Line Style',
                zh_cn: '外边线样式',
                zh_tw: '外邊線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Cut Line Style',
                zh_cn: '剪切线样式',
                zh_tw: '剪切線樣式'
            });
        };
        _this.getUsableList = function () {
            var length = 25;
            var digitalOverlay = true;
            var rowCount = 1;
            var innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
            var outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
            var cutLineStyle = 'stroke:#FF0000;stroke-width:0.1mm;';
            var buttonList = [
                {
                    nameI18n: { en_us: 'Hollow Out', zh_cn: '镂空', zh_tw: '鏤空' },
                    info: {
                        length: 10,
                        kind: 'hollowOut',
                        digitalOverlay: digitalOverlay,
                        rowCount: 0,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
                {
                    nameI18n: {
                        en_us: 'Hollow Out with Hole',
                        zh_cn: '镂空带孔',
                        zh_tw: '鏤空帶孔'
                    },
                    info: {
                        length: 10,
                        kind: 'hollowOutWithHole',
                        digitalOverlay: digitalOverlay,
                        rowCount: 0,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
                {
                    nameI18n: { en_us: 'Pentagon', zh_cn: '五边形', zh_tw: '五邊形' },
                    info: {
                        length: length,
                        kind: 'pentagon',
                        digitalOverlay: digitalOverlay,
                        rowCount: 5,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
                {
                    nameI18n: { en_us: 'Hexagon', zh_cn: '六边形', zh_tw: '六邊形' },
                    info: {
                        length: length,
                        kind: 'hexagon',
                        digitalOverlay: digitalOverlay,
                        rowCount: 5,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
                {
                    nameI18n: {
                        en_us: 'Interlaced Hexagon',
                        zh_cn: '交错六边形',
                        zh_tw: '交錯六邊形'
                    },
                    info: {
                        length: length,
                        kind: 'interlacedHexagon',
                        digitalOverlay: 0,
                        rowCount: rowCount,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
                {
                    nameI18n: { en_us: 'Unify', zh_cn: '整体', zh_tw: '整體' },
                    info: {
                        length: 10,
                        kind: 'unify',
                        digitalOverlay: digitalOverlay,
                        rowCount: rowCount,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        cutLineStyle: cutLineStyle
                    }
                },
            ];
            var strongI18n = {
                en_us: 'Shortcuts',
                zh_cn: '快捷按钮',
                zh_tw: '快捷按鈕'
            };
            return [{ strongI18n: strongI18n, buttonList: buttonList }];
        };
        return _this;
    }
    return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("11", false);

