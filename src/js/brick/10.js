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
        _this.idOrClassPrefix = 'brickPageHundredthLattice';
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var _b = _this.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, MAX_X = _b.maxX, MAX_Y = _b.maxY, pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight, list = _b.list;
            var css = "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\t\t";
            var html = '<page>';
            var usedX = 0;
            var usedY = 0;
            var currentRowHeight = 0;
            var svgIndex = 0;
            list.forEach(function (_a) {
                var length = _a.length, showNumber = _a.showNumber, digitalOverlay = _a.digitalOverlay, startNumber = _a.startNumber, count = _a.count, innerLineStyle = _a.innerLineStyle, outerLineStyle = _a.outerLineStyle, textStyle = _a.textStyle;
                var WIDTH = length * 10;
                var HEIGHT = length * 10;
                var numberOffset = 0;
                for (var regionIndex = 0; regionIndex < count; ++regionIndex) {
                    var newPage = usedY + HEIGHT > MAX_Y;
                    var newRow = false;
                    if (!newPage && usedX + WIDTH > MAX_X) {
                        usedY += currentRowHeight;
                        if (usedY + HEIGHT > MAX_Y) {
                            newPage = true;
                        }
                        else {
                            newRow = true;
                        }
                    }
                    if (newPage) {
                        html += '</page><page>';
                        usedX = 0;
                        usedY = 0;
                        currentRowHeight = 0;
                    }
                    else if (newRow) {
                        usedX = 0;
                        currentRowHeight = 0;
                    }
                    currentRowHeight = Math.max(currentRowHeight, HEIGHT);
                    usedX += WIDTH;
                    var _b = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _b.createSvg, appendOuterLine = _b.appendOuterLine, appendLine = _b.appendLine, appendText = _b.appendText, getTextStyleFontSizePatchCss = _b.getTextStyleFontSizePatchCss;
                    var svg = createSvg();
                    svg.id = "svg_" + ++svgIndex;
                    appendOuterLine(svg, WIDTH, HEIGHT, outerLineStyle);
                    for (var i = 1; i < 10; ++i) {
                        var X = length * i;
                        appendLine(svg, innerLineStyle, X, X, 0, HEIGHT, null);
                        var Y = length * i;
                        appendLine(svg, innerLineStyle, 0, WIDTH, Y, Y, null);
                    }
                    if (showNumber) {
                        for (var i = 0; i < 10; ++i) {
                            var Y = length * (i + 0.5);
                            for (var j = 0; j < 10; ++j) {
                                var X = length * (j + 0.5);
                                var NUMBER = numberOffset + startNumber + 10 * i + j;
                                appendText(svg, textStyle.concat(getTextStyleFontSizePatchCss(NUMBER, textStyle)), NUMBER.toString(), X, Y, 0, 'center', null, true);
                            }
                        }
                    }
                    html += svg.outerHTML;
                    if (digitalOverlay)
                        numberOffset += 100;
                }
            });
            html += '</page>';
            var en = FILENAME_POSTFIX + "hundredthLattice";
            var zh_cn = FILENAME_POSTFIX + "\u767E\u6570\u683C";
            var zh_tw = FILENAME_POSTFIX + "\u767E\u6578\u683C";
            computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
            computedData.css = css;
            computedData.html = html;
        };
        _this.createTableBodyRow = function (item) {
            var _a = item, length = _a.length, showNumber = _a.showNumber, digitalOverlay = _a.digitalOverlay, startNumber = _a.startNumber, count = _a.count, innerLineStyle = _a.innerLineStyle, outerLineStyle = _a.outerLineStyle, textStyle = _a.textStyle;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
            _this.appendCheckboxTdWithoutText(tr, showNumber, item, 'showNumber');
            _this.appendCheckboxTdWithoutText(tr, digitalOverlay, item, 'digitalOverlay');
            _this.appendNumberTd(tr, startNumber, item, 'startNumber', null, null, 1);
            _this.appendNumberTd(tr, count, item, 'count', 1, null, 1);
            _this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
            _this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
            _this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
        };
        _this.initTableHead = function () {
            _this.appendTableHeadCell({ en: 'Length', zh_cn: '边长', zh_tw: '邊長' });
            _this.appendTableHeadCell({
                en: 'Show Number',
                zh_cn: '显示数字',
                zh_tw: '顯示數字'
            });
            _this.appendTableHeadCell({
                en: 'Digital Overlay',
                zh_cn: '数字叠加',
                zh_tw: '數位疊加'
            });
            _this.appendTableHeadCell({
                en: 'Start Number',
                zh_cn: '开始值',
                zh_tw: '開始值'
            });
            _this.appendTableHeadCell({ en: 'Count', zh_cn: '数量', zh_tw: '數量' });
            _this.appendTableHeadCell({
                en: 'Inner Line Style',
                zh_cn: '内部线样式',
                zh_tw: '內部線樣式'
            });
            _this.appendTableHeadCell({
                en: 'Outer Line Style',
                zh_cn: '外边线样式',
                zh_tw: '外邊線樣式'
            });
            _this.appendTableHeadCell({
                en: 'Text Style',
                zh_cn: '文本样式',
                zh_tw: '文字樣式'
            });
        };
        _this.getUsableList = function () {
            var length = 10;
            var showNumber = true;
            var digitalOverlay = true;
            var startNumber = 1;
            var count = 1;
            var innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
            var outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
            var textStyle = 'font-size:6mm;';
            var buttonList = [
                {
                    nameI18n: {
                        en: 'Hide numbers',
                        zh_cn: '无数字',
                        zh_tw: '無數字'
                    },
                    info: {
                        length: length,
                        showNumber: false,
                        digitalOverlay: digitalOverlay,
                        startNumber: startNumber,
                        count: 2,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        textStyle: textStyle
                    }
                },
                {
                    nameI18n: {
                        en: 'Start from zero',
                        zh_cn: '从0开始',
                        zh_tw: '從0開始'
                    },
                    info: {
                        length: length,
                        showNumber: showNumber,
                        digitalOverlay: digitalOverlay,
                        startNumber: 0,
                        count: count,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        textStyle: textStyle
                    }
                },
                {
                    nameI18n: {
                        en: 'Start from one',
                        zh_cn: '从1开始',
                        zh_tw: '從1開始'
                    },
                    info: {
                        length: length,
                        showNumber: showNumber,
                        digitalOverlay: digitalOverlay,
                        startNumber: startNumber,
                        count: count,
                        innerLineStyle: innerLineStyle,
                        outerLineStyle: outerLineStyle,
                        textStyle: textStyle
                    }
                },
            ];
            var strongI18n = {
                en: 'Shortcuts',
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

__instantiate("10", false);

