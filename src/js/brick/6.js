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
        _this.idOrClassPrefix = 'brickPageCuisenaireRod';
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, data = _a.data, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var paperSize = data.paperSize, isLandscape = data.isLandscape, MAX_X = data.maxX, MAX_Y = data.maxY, pageMarginTop = data.pageMarginTop, pageMarginBottom = data.pageMarginBottom, pageMarginLeft = data.pageMarginLeft, pageMarginRight = data.pageMarginRight, list = data.list;
            var css = "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\t\t";
            var html = '';
            var NUMBER_MIN = 1;
            list.forEach(function (_a) {
                var onlyWhitePaper = _a.onlyWhitePaper, digitalOverlay = _a.digitalOverlay, sealingStyle = _a.sealingStyle, length = _a.length, innerLineStyleArray = _a.innerLineStyle, cutLineStyleArray = _a.cutLineStyle, outerLineStyleArray = _a.outerLineStyle, textStyleArray = _a.textStyle, pages = _a.pages, paperThickness = _a.paperThickness;
                var NUMBER_COUNT = pages.length;
                var INNER_LINE_STYLE_COUNT = innerLineStyleArray.length;
                var CUT_LINE_STYLE_COUNT = cutLineStyleArray.length;
                var OUTER_LINE_STYLE_COUNT = outerLineStyleArray.length;
                var TEXT_STYLE_COUNT = textStyleArray.length;
                var LAST_INNER_LINE_STYLE = innerLineStyleArray[INNER_LINE_STYLE_COUNT - 1];
                var LAST_CUT_LINE_STYLE = cutLineStyleArray[CUT_LINE_STYLE_COUNT - 1];
                var LAST_OUTER_LINE_STYLE = outerLineStyleArray[OUTER_LINE_STYLE_COUNT - 1];
                var LAST_TEXT_STYLE = textStyleArray[TEXT_STYLE_COUNT - 1];
                var CUISENAIRE_ROD_BEST_FIT_WIDTH = length * 5 - paperThickness;
                var CUISENAIRE_ROD_MIN_WIDTH = length * 4.5;
                var VERTICAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_MIN_WIDTH);
                var CUISENAIRE_ROD_WIDTH = VERTICAL_RODS_COL_COUNT === 0
                    ? 0
                    : Math.min(MAX_X / VERTICAL_RODS_COL_COUNT, CUISENAIRE_ROD_BEST_FIT_WIDTH);
                var CELL_HEGIHT = length - paperThickness;
                pages.forEach(function (PAGE_COUNT, numberIndex) {
                    var innerLineStyle = numberIndex < INNER_LINE_STYLE_COUNT
                        ? innerLineStyleArray[numberIndex]
                        : LAST_INNER_LINE_STYLE;
                    var cutLineStyle = numberIndex < CUT_LINE_STYLE_COUNT
                        ? cutLineStyleArray[numberIndex]
                        : LAST_CUT_LINE_STYLE;
                    var outerLineStyle = numberIndex < OUTER_LINE_STYLE_COUNT
                        ? outerLineStyleArray[numberIndex]
                        : LAST_OUTER_LINE_STYLE;
                    var textStyle = numberIndex < TEXT_STYLE_COUNT ? textStyleArray[numberIndex] : LAST_TEXT_STYLE;
                    var NUMBER_MAX = numberIndex + 1;
                    var CELL_COUNT_BY_SEALING_STYLE = sealingStyle === 'both' ? 2 : sealingStyle === 'none' ? 0 : 1;
                    var CUISENAIRE_ROD_HEIGHT = length * NUMBER_MAX +
                        CELL_HEGIHT *
                            (NUMBER_MAX === 1 ? (sealingStyle === 'none' ? 0 : 1) : CELL_COUNT_BY_SEALING_STYLE);
                    var VERTICAL_RODS_ROW_COUNT = Math.floor(MAX_Y / CUISENAIRE_ROD_HEIGHT);
                    var VERTICAL_RODS_COUNT = VERTICAL_RODS_COL_COUNT * VERTICAL_RODS_ROW_COUNT;
                    var HORIZONTAL_RODS_START_Y = CUISENAIRE_ROD_HEIGHT * VERTICAL_RODS_ROW_COUNT;
                    var REMAINING_HEIGHT = MAX_Y - HORIZONTAL_RODS_START_Y;
                    var HORIZONTAL_RODS_ROW_COUNT = Math.floor(REMAINING_HEIGHT / CUISENAIRE_ROD_MIN_WIDTH);
                    var HORIZONTAL_RODS_COL_HEIGHT = HORIZONTAL_RODS_ROW_COUNT === 0
                        ? 0
                        : Math.min(MAX_X / VERTICAL_RODS_COL_COUNT, CUISENAIRE_ROD_BEST_FIT_WIDTH);
                    var HORIZONTAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_HEIGHT);
                    var HORIZONTAL_RODS_COUNT = HORIZONTAL_RODS_COL_COUNT * HORIZONTAL_RODS_ROW_COUNT;
                    var RODS_COUNT_PER_PAGE = VERTICAL_RODS_COUNT + HORIZONTAL_RODS_COUNT;
                    for (var pageIndex = 0; pageIndex < PAGE_COUNT; ++pageIndex) {
                        html += '<page>';
                        var startNumberOffset = digitalOverlay
                            ? NUMBER_MAX * RODS_COUNT_PER_PAGE * pageIndex
                            : 0;
                        for (var rowIndex = 0; rowIndex < VERTICAL_RODS_ROW_COUNT; ++rowIndex) {
                            for (var colIndex = 0; colIndex < VERTICAL_RODS_COL_COUNT; ++colIndex) {
                                html += _this.getVerticalRodHtml(digitalOverlay, startNumberOffset, NUMBER_MAX, sealingStyle, length, CUISENAIRE_ROD_WIDTH, CUISENAIRE_ROD_HEIGHT, mmToPxScale, innerLineStyle, cutLineStyle, outerLineStyle, textStyle, paperThickness);
                                startNumberOffset += digitalOverlay ? NUMBER_MAX : 0;
                            }
                        }
                        for (var rowIndex = 0; rowIndex < HORIZONTAL_RODS_ROW_COUNT; ++rowIndex) {
                            for (var colIndex = 0; colIndex < HORIZONTAL_RODS_COL_COUNT; ++colIndex) {
                                html += _this.getHorizontalRodHtml(digitalOverlay, startNumberOffset, NUMBER_MAX, sealingStyle, length, CUISENAIRE_ROD_HEIGHT, HORIZONTAL_RODS_COL_HEIGHT, mmToPxScale, innerLineStyle, cutLineStyle, outerLineStyle, textStyle, paperThickness);
                                startNumberOffset += digitalOverlay ? NUMBER_MAX : 0;
                            }
                        }
                        html += '</page>';
                    }
                });
            });
            var en_us = FILENAME_POSTFIX + "cuisenaireRods";
            var zh_cn = FILENAME_POSTFIX + "\u53E4\u6C0F\u79EF\u6728";
            var zh_tw = FILENAME_POSTFIX + "\u53E4\u6C0F\u7A4D\u6728";
            computedData.title = { en_us: en_us, zh_cn: zh_cn, zh_tw: zh_tw };
            computedData.css = css;
            computedData.html = html;
        };
        _this.getHorizontalRodHtml = function (digitalOverlay, startNumberOffset, NUMBER_MAX, sealingStyle, length, CUISENAIRE_ROD_WIDTH, CUISENAIRE_ROD_HEIGHT, mmToPxScale, INNER_LINE_STYLE, CUT_LINE_STYLE, OUTER_LINE_COLOR, TEXT_STYLE, paperThickness) {
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, appendLine = _a.appendLine, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss, appendOuterLine = _a.appendOuterLine;
            TEXT_STYLE += getTextStyleFontSizePatchCss(NUMBER_MAX + startNumberOffset, TEXT_STYLE);
            var ROTATE = 90;
            var svg = createSvg();
            appendOuterLine(svg, CUISENAIRE_ROD_WIDTH, CUISENAIRE_ROD_HEIGHT, mmToPxScale, OUTER_LINE_COLOR);
            for (var i = 0; i < 4; ++i) {
                var Y = length * (i + 1);
                appendLine(svg, INNER_LINE_STYLE, 0, CUISENAIRE_ROD_WIDTH, Y, Y, null);
            }
            var X1 = length - paperThickness;
            for (var i = 1; i < NUMBER_MAX; ++i) {
                var X = X1 + length * i;
                appendLine(svg, INNER_LINE_STYLE, X, X, 0, CUISENAIRE_ROD_HEIGHT, null);
            }
            var X2 = CUISENAIRE_ROD_WIDTH - X1;
            var textX1 = length * 0.5;
            var textX3 = length * 2.5;
            var textY1 = CUISENAIRE_ROD_WIDTH - (length - paperThickness) + length * 0.5;
            var textY3 = (length - paperThickness) * 0.5;
            var NUMBER_MAX_STRING = (NUMBER_MAX + startNumberOffset).toString();
            var NUMBER_MIN_STRING = (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
            switch (sealingStyle) {
                case 'onlyAbove':
                    appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
                    appendLine(svg, CUT_LINE_STYLE, X1, X1, length, CUISENAIRE_ROD_HEIGHT, null);
                    appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX1, -textY1, ROTATE, 'left top', null, true);
                    if (NUMBER_MAX === 1) {
                        appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX3, -textY1, ROTATE, 'left top', null, true);
                    }
                    break;
                case 'onlyBelow':
                    appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
                    appendLine(svg, CUT_LINE_STYLE, X2, X2, length, CUISENAIRE_ROD_HEIGHT, null);
                    appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, -textY3, ROTATE, 'left top', null, true);
                    if (NUMBER_MAX === 1) {
                        appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX3, -textY3, ROTATE, 'left top', null, true);
                    }
                    break;
                case 'both':
                    appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
                    appendLine(svg, CUT_LINE_STYLE, X1, X1, length, CUISENAIRE_ROD_HEIGHT, null);
                    if (NUMBER_MAX > 1) {
                        appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
                        appendLine(svg, CUT_LINE_STYLE, X2, X2, length, CUISENAIRE_ROD_HEIGHT, null);
                    }
                    appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, -textY3, ROTATE, 'left top', null, true);
                    appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX1, -textY1, ROTATE, 'left top', null, true);
                    break;
                case 'none':
                default:
                    break;
            }
            var normalTextStartY = length * 0.5;
            var normalTextStartX = length * 0.5;
            for (var numberLoop = 1; numberLoop <= NUMBER_MAX; ++numberLoop) {
                var Y = normalTextStartY + length * numberLoop;
                for (var i = 0; i < 4; ++i) {
                    appendText(svg, TEXT_STYLE, (numberLoop + startNumberOffset).toString(), normalTextStartX + length * i, -Y, ROTATE, 'left top', null, true);
                }
            }
            return svg.outerHTML;
        };
        _this.getVerticalRodHtml = function (digitalOverlay, startNumberOffset, NUMBER_MAX, sealingStyle, length, CUISENAIRE_ROD_WIDTH, CUISENAIRE_ROD_HEIGHT, mmToPxScale, INNER_LINE_STYLE, CUT_LINE_STYLE, OUTER_LINE_COLOR, TEXT_STYLE, paperThickness) {
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, appendLine = _a.appendLine, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss, appendOuterLine = _a.appendOuterLine;
            TEXT_STYLE += getTextStyleFontSizePatchCss(NUMBER_MAX + startNumberOffset, TEXT_STYLE);
            var ROTATE = 0;
            var svg = createSvg();
            appendOuterLine(svg, CUISENAIRE_ROD_WIDTH, CUISENAIRE_ROD_HEIGHT, mmToPxScale, OUTER_LINE_COLOR);
            for (var i = 0; i < 4; ++i) {
                var X = length * (i + 1);
                appendLine(svg, INNER_LINE_STYLE, X, X, 0, CUISENAIRE_ROD_HEIGHT, null);
            }
            var Y1 = length - paperThickness;
            for (var i = 1; i < NUMBER_MAX; ++i) {
                var Y = Y1 + length * i;
                appendLine(svg, INNER_LINE_STYLE, 0, CUISENAIRE_ROD_WIDTH, Y, Y, null);
            }
            var Y2 = CUISENAIRE_ROD_HEIGHT - Y1;
            var aboveTextY = (length - paperThickness) * 0.5;
            var belowTextY = Y2 + aboveTextY;
            var normalTextStartY = length * 0.5;
            var textX1 = length * 0.5;
            var textX3 = textX1 + length * 2;
            var NUMBER_MAX_STRING = (NUMBER_MAX + startNumberOffset).toString();
            var NUMBER_MIN_STRING = (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
            switch (sealingStyle) {
                case 'onlyAbove':
                    normalTextStartY += Y1;
                    appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
                    appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y1, Y1, null);
                    appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX1, aboveTextY, ROTATE, 'left top', null, true);
                    if (NUMBER_MAX === 1) {
                        appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX3, aboveTextY, ROTATE, 'left top', null, true);
                    }
                    break;
                case 'onlyBelow':
                    appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
                    appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y2, Y2, null);
                    appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, belowTextY, ROTATE, 'left top', null, true);
                    if (NUMBER_MAX === 1) {
                        appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX3, belowTextY, ROTATE, 'left top', null, true);
                    }
                    break;
                case 'both':
                    normalTextStartY += Y1;
                    appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
                    appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y1, Y1, null);
                    if (NUMBER_MAX > 1) {
                        appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
                        appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y2, Y2, null);
                        appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, belowTextY, ROTATE, 'left top', null, true);
                    }
                    appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX1, aboveTextY, ROTATE, 'left top', null, true);
                    if (NUMBER_MAX === 1) {
                        appendText(svg, TEXT_STYLE, NUMBER_MAX_STRING, textX3, aboveTextY, ROTATE, 'left top', null, true);
                    }
                    break;
                case 'none':
                default:
                    break;
            }
            var normalTextStartX = length * 0.5;
            for (var numberLoop = NUMBER_MAX; numberLoop > 0; --numberLoop) {
                var Y = normalTextStartY + length * (NUMBER_MAX - numberLoop);
                for (var i = 0; i < 4; ++i) {
                    appendText(svg, TEXT_STYLE, (numberLoop + startNumberOffset).toString(), normalTextStartX + length * i, Y, ROTATE, 'left top', null, true);
                }
            }
            return svg.outerHTML;
        };
        _this.getUsableList = function () {
            var pages = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            var innerLineStyle = ['stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;'];
            var cutLineStyle = ['stroke:#555;stroke-width:0.2mm;'];
            var outerLineStyle = ['stroke:#000;stroke-width:0.2mm;'];
            var textStyle = ['font-size:6mm;'];
            var onlyWhitePaper = false;
            var length = 10;
            var paperThickness = 0;
            var otherParameters = {};
            var usableList = [];
            [
                {
                    digitalOverlay: false,
                    strongI18n: { en_us: 'Not Overlay', zh_cn: '无叠加', zh_tw: '無疊加' }
                },
                {
                    digitalOverlay: true,
                    strongI18n: { en_us: 'Overlay', zh_cn: '叠加', zh_tw: '疊加' }
                },
            ].forEach(function (_a) {
                var digitalOverlay = _a.digitalOverlay, strongI18n = _a.strongI18n;
                usableList.push({
                    strongI18n: strongI18n,
                    buttonList: [
                        {
                            nameI18n: {
                                en_us: 'Full sealing',
                                zh_cn: '全封口',
                                zh_tw: '全封口'
                            },
                            sealingStyle: 'both'
                        },
                        {
                            nameI18n: {
                                en_us: 'Capped',
                                zh_cn: '封顶',
                                zh_tw: '封頂'
                            },
                            sealingStyle: 'onlyAbove'
                        },
                        {
                            nameI18n: {
                                en_us: 'No overlap on the back cover',
                                zh_cn: '封底',
                                zh_tw: '封底'
                            },
                            sealingStyle: 'onlyBelow'
                        },
                        {
                            nameI18n: {
                                en_us: 'No sealing, no stacking',
                                zh_cn: '无封口',
                                zh_tw: '無封口'
                            },
                            sealingStyle: 'none'
                        },
                    ].map(function (_a) {
                        var nameI18n = _a.nameI18n, sealingStyle = _a.sealingStyle;
                        return {
                            nameI18n: nameI18n,
                            info: {
                                onlyWhitePaper: onlyWhitePaper,
                                digitalOverlay: digitalOverlay,
                                sealingStyle: sealingStyle,
                                length: length,
                                innerLineStyle: innerLineStyle,
                                cutLineStyle: cutLineStyle,
                                outerLineStyle: outerLineStyle,
                                textStyle: textStyle,
                                pages: pages,
                                paperThickness: paperThickness,
                                otherParameters: otherParameters
                            }
                        };
                    })
                });
            });
            return usableList;
        };
        _this.initTableHead = function () {
            _this.appendTableHeadCell({
                en_us: 'Digital Overlay',
                zh_cn: '数字叠加',
                zh_tw: '數位疊加'
            });
            _this.appendTableHeadCell({
                en_us: 'Sealing style',
                zh_cn: '封口方式',
                zh_tw: '封口方式'
            });
            _this.appendTableHeadCell({ en_us: 'Length', zh_cn: '边长', zh_tw: '邊長' });
            _this.appendTableHeadCell({
                en_us: 'Inner Line Style',
                zh_cn: '内部线样式',
                zh_tw: '內部線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Cut Line Style',
                zh_cn: '剪开线样式',
                zh_tw: '剪開線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Outer Line Color',
                zh_cn: '外边线样式',
                zh_tw: '外邊線線樣'
            });
            _this.appendTableHeadCell({
                en_us: 'Text Style',
                zh_cn: '文本样式',
                zh_tw: '文字樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Pages',
                zh_cn: '各色页数',
                zh_tw: '各色頁數'
            });
            _this.appendTableHeadCell({
                en_us: 'Paper thickness',
                zh_cn: '纸厚',
                zh_tw: '紙厚'
            });
        };
        _this.createTableBodyRow = function (item) {
            var _a = item, onlyWhitePaper = _a.onlyWhitePaper, digitalOverlay = _a.digitalOverlay, sealingStyle = _a.sealingStyle, length = _a.length, innerLineStyle = _a.innerLineStyle, cutLineStyle = _a.cutLineStyle, outerLineStyle = _a.outerLineStyle, textStyle = _a.textStyle, pages = _a.pages, paperThickness = _a.paperThickness;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendCheckboxTdWithoutText(tr, digitalOverlay, item, 'digitalOverlay');
            _this.appendSelectTd(tr, sealingStyle, item, 'sealingStyle', [
                { value: 'none', captions: { en_us: 'None', zh_cn: '无', zh_tw: '無' } },
                {
                    value: 'onlyAbove',
                    captions: { en_us: 'Only Above', zh_cn: '仅顶', zh_tw: '僅頂' }
                },
                {
                    value: 'onlyBelow',
                    captions: { en_us: 'Only Below', zh_cn: '仅底', zh_tw: '僅底' }
                },
                { value: 'both', captions: { en_us: 'Both', zh_cn: '全部', zh_tw: '全部' } },
            ]);
            _this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
            _this.appendTextareaTd(tr, innerLineStyle.join('\n'), item, 'innerLineStyle', 'stringArray');
            _this.appendTextareaTd(tr, cutLineStyle.join('\n'), item, 'cutLineStyle', 'stringArray');
            _this.appendTextareaTd(tr, outerLineStyle.join('\n'), item, 'outerLineStyle', 'stringArray');
            _this.appendTextareaTd(tr, textStyle.join('\n'), item, 'textStyle', 'stringArray');
            _this.appendTextareaTd(tr, pages.join('\n'), item, 'pages', 'numberArray');
            _this.appendNumberTd(tr, paperThickness, item, 'paperThickness', 0, null, null);
        };
        return _this;
    }
    return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("6", false);

