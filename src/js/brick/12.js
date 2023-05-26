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
        _this.idOrClassPrefix = 'brickPageMultiplicationTable';
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var _b = _this.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, MAX_X = _b.maxX, MAX_Y = _b.maxY, pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight;
            var css = "\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\n\t\t/* [edu-mirror=\"horizonal\"] svg text{transform:rotateY(180deg);} */\n\n    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */\n    /* \u9ED1/\u7EA2/\u6A59/\u9EC4/\u7EFF/\u9752/\u84DD/\u7D2B/\u7C89/\u6DE1\u7EFF/\t*/\n    /* \u9ED1/\u7D05/\u6A59/\u9EC3/\u7DA0/\u9752/\u85CD/\u7D2B/\u7C89/\u6DE1\u7DA0/\t*/\n    [edu-color=\"1\"] {color:#000000;}\n    [edu-color=\"2\"] {color:#FF0000;}\n    [edu-color=\"3\"] {color:#FF7F00;}\n    [edu-color=\"4\"] {color:#FFFF00;}\n    [edu-color=\"5\"] {color:#00FF00;}\n    [edu-color=\"6\"] {color:#00FFFF;}\n    [edu-color=\"7\"] {color:#0000FF;}\n    [edu-color=\"8\"] {color:#8B00FF;}\n    [edu-color=\"9\"] {color:#F19EC2;}\n    [edu-color=\"10\"]{color:#6B8E23;}\n\t\t";
            computedData.css = css;
            var formatCentile = _this.formatCentile;
            var list = [];
            JSON.parse(JSON.stringify(_this.data.list)).forEach(function (item) {
                list.push(item);
            });
            list.forEach(function (item) { return (item.length = formatCentile(item.length)); });
            var elementList = [];
            var latticeKindArray = ['vertical', 'horizontal'];
            list
                .filter(function (_a) {
                var kind = _a.kind;
                return latticeKindArray.indexOf(kind) > -1;
            })
                .forEach(function (item) {
                return _this.getLatticeOutSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach(function (element) {
                    elementList.push(element);
                });
            });
            var getAutomaticPaginationHtmlFromChildList = _this.getAutomaticPaginationHtmlFromChildList;
            var latticeHtml = getAutomaticPaginationHtmlFromChildList(elementList.splice(0, elementList.length / 2), MAX_X, MAX_Y);
            var latticeHtmlMirror = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y).replace(/<page>/g, '<page style="flex-direction:row-reverse;">');
            elementList.length = 0;
            list
                .filter(function (_a) {
                var kind = _a.kind;
                return latticeKindArray.indexOf(kind) === -1;
            })
                .forEach(function (item) {
                return _this.getPokerSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach(function (element) {
                    elementList.push(element);
                });
            });
            var pokerHtml = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);
            computedData.html = latticeHtml.concat(latticeHtmlMirror, pokerHtml, pokerHtml.replace(/<page>/g, '<page style="flex-direction:row-reverse;">'));
            var en = FILENAME_POSTFIX + "multiplicationtable";
            var zh_cn = FILENAME_POSTFIX + "\u4E58\u6CD5\u53E3\u8BC0\u8868";
            var zh_tw = FILENAME_POSTFIX + "\u4E58\u6CD5\u53E3\u8A23\u8868";
            computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
        };
        _this.getElementList = function (item, mmToPxScale, PAPER_WIDTH, PAPER_HEIGHT) {
            switch (item.kind) {
                case 'vertical':
                case 'horizontal':
                    return _this.getLatticeOutSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
                case 'numberPoker':
                case 'numberPokerFull':
                case 'chinesePoker':
                case 'chinesePokerFull':
                    return _this.getPokerSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
                default:
                    return [];
            }
        };
        _this.getPokerSvgList = function (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale) {
            var list = [];
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var width = item.length, scope = item.scope, kind = item.kind, pokerIncludeZero = item.pokerIncludeZero, copies = item.copies, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, textStyle = item.textStyle;
            var stroke = innerLineStyle.indexOf('stroke:')
                ? innerLineStyle.split('stroke:')[1].split(';')[0]
                : '#888';
            var height = formatMillimeter(width * 1.414);
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
            var RADIUS_PX = formatMillimeter(width * 0.1 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
            var chineseChars = '零一二三四五六七八九十'.split('');
            var westChars = chineseChars.concat(['十一', '十二']);
            var indiaChars = westChars.concat(['十三', '十四', '十五', '十六', '十七', '十八', '十九']);
            var chars = scope === 'chinese' ? chineseChars : scope === 'west' ? westChars : indiaChars;
            var isChinese = kind.indexOf('chinese') > -1;
            var isFull = kind.indexOf('Full') > -1;
            var contents = [];
            var MIN = pokerIncludeZero ? 0 : 1;
            var MAX = scope === 'chinese' ? 9 : scope === 'west' ? 12 : 19;
            for (var i = MIN; i <= MAX; ++i) {
                var iStr = isChinese ? chars[i] : i.toString();
                for (var j = isFull ? MIN : i; j <= MAX; ++j) {
                    var product = i * j;
                    var jStr = '';
                    var productStr = '';
                    if (isChinese) {
                        jStr = chars[j];
                        var hundreds = Math.floor((product % 1000) / 100);
                        var onesPlace = product % 10;
                        var tens = Math.floor((product % 100) / 10);
                        var onesPlaceStr = chars[onesPlace];
                        if (product < 10) {
                            productStr = "\u5F97<br/>" + onesPlaceStr;
                        }
                        else if (product === 10) {
                            productStr = '一<br/>十';
                        }
                        else if (product < 20) {
                            productStr = "\u5341<br/>" + onesPlaceStr;
                        }
                        else {
                            if (scope === 'chinese' || product % 100 === 0 || product < 100) {
                                if (product % 100 === 0) {
                                    productStr = chars[hundreds] + "<br/>\u767E";
                                }
                                else {
                                    productStr += chars[tens] + "<br/>\u5341";
                                    if (onesPlace > 0) {
                                        productStr += "<br/>" + onesPlaceStr;
                                    }
                                }
                            }
                            else {
                                productStr = hundreds > 0 ? chars[hundreds] + "\u767E<br/>" : '';
                                if (hundreds && tens === 0 && onesPlace)
                                    productStr += '零';
                                productStr += tens > 0 ? chars[tens] + "\u5341" + (onesPlace > 0 ? '<br/>' : '') : '';
                                productStr += onesPlace > 0 ? onesPlaceStr : '';
                            }
                        }
                    }
                    else {
                        jStr = "\u00D7" + j;
                        productStr = "\uFF1D" + product;
                    }
                    contents.push(iStr);
                    contents.push(jStr);
                    contents.push(productStr);
                }
            }
            var HALF_WIDTH = width * 0.5;
            var HALF_HEIGHT = height * 0.5;
            var CSS_COLOR_ARRAY = ['fill:#FF0000;', 'fill:#0000FF;', 'fill:#FF00FF;'];
            var fontSize = !isChinese || textStyle.indexOf('font-size:') === -1
                ? 0
                : parseFloat(textStyle.split('font-size:')[1].split('mm;')[0]);
            for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                contents.forEach(function (content, index) {
                    var svg = createSvg();
                    var contentRowCount = content.split('<br/>').length - 1;
                    _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                    var fixY = fontSize * contentRowCount * 0.5;
                    appendText(svg, textStyle.concat(isChinese ? '' : getTextStyleFontSizePatchCss(parseInt(content, 0), textStyle), CSS_COLOR_ARRAY[index % 3]), content, HALF_WIDTH, formatMillimeter(HALF_HEIGHT - fixY), 0, 'center', null, true);
                    svg.setAttribute('width', width + "mm");
                    svg.setAttribute('height', height + "mm");
                    list.push(svg);
                });
            }
            var COUNT_PER_PAGE = Math.floor(PAPER_WIDTH / width) * Math.floor(PAPER_HEIGHT / height);
            var pokerCountHasNumber = contents.length * copies;
            var totalCount = Math.ceil(pokerCountHasNumber / COUNT_PER_PAGE) * COUNT_PER_PAGE;
            var emptyCount = totalCount - pokerCountHasNumber;
            for (var i = 0; i < emptyCount; ++i) {
                var svg = createSvg();
                _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                svg.setAttribute('width', width + "mm");
                svg.setAttribute('height', height + "mm");
                list.push(svg);
            }
            return list;
        };
        _this.getLatticeOutSvgList = function (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale) {
            var list = [];
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var SIDE_LENGTH = item.length, kind = item.kind, scope = item.scope, copies = item.copies, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, textStyle = item.textStyle;
            var isVertical = kind === 'vertical';
            var COL_COUNT = Math.floor(PAPER_WIDTH / SIDE_LENGTH);
            var ROW_COUNT = Math.floor(PAPER_HEIGHT / SIDE_LENGTH);
            var NUMBER_SERIES = [];
            var OTHER_NUMBER_SERIES = [];
            var maxNumber = 9;
            switch (scope) {
                case 'chinese':
                    _this.fillChineseNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                case 'west':
                    maxNumber = 12;
                    _this.fillWestNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                case 'india':
                    maxNumber = 19;
                    _this.fillIndiaNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                default:
                    break;
            }
            var NORMAL_NUMBERS = [];
            var OTHER_NUMBERS = [];
            NUMBER_SERIES.forEach(function (series) {
                for (var digit = maxNumber; digit > 0; --digit) {
                    for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                        NORMAL_NUMBERS.push({ digit: digit, series: series });
                    }
                }
            });
            OTHER_NUMBER_SERIES.forEach(function (rowCount) {
                for (var digit = maxNumber; digit > 0; --digit) {
                    for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                        OTHER_NUMBERS.push({ digit: digit, rowCount: rowCount });
                    }
                }
            });
            var pages = [];
            var outerLineStroke = outerLineStyle.indexOf('stroke:')
                ? outerLineStyle.split('stroke:')[1].split(';')[0]
                : '#888';
            if (NORMAL_NUMBERS) {
                while (true) {
                    var currentPage = {
                        mainWrapper: createElement('div'),
                        mainWrapperColCount: 0,
                        otherWrapper: createElement('div'),
                        otherWrapperColCount: 0,
                        mainWrapperMirror: createElement('div'),
                        otherWrapperMirror: createElement('div')
                    };
                    currentPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 1.');
                    currentPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 1.');
                    currentPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 1.');
                    currentPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 1.');
                    pages.push(currentPage);
                    var firstItem = NORMAL_NUMBERS.splice(0, 1)[0];
                    _this.appendNormalNumbersToPage(SIDE_LENGTH, firstItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                    var remainingColCount = COL_COUNT - currentPage.mainWrapperColCount;
                    var searchMax = Math.min(maxNumber, remainingColCount);
                    while (remainingColCount > 0) {
                        var find = false;
                        var _loop_1 = function (findNum) {
                            var filterResult = NORMAL_NUMBERS.filter(function (_a) {
                                var digit = _a.digit;
                                return digit === findNum;
                            });
                            if (filterResult.length) {
                                var nextItem = filterResult[0];
                                _this.appendNormalNumbersToPage(SIDE_LENGTH, nextItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                                NORMAL_NUMBERS.splice(NORMAL_NUMBERS.indexOf(nextItem), 1);
                                remainingColCount -= findNum;
                                find = true;
                                return "break";
                            }
                        };
                        for (var findNum = searchMax; findNum > 0; --findNum) {
                            var state_1 = _loop_1(findNum);
                            if (state_1 === "break")
                                break;
                        }
                        if (!find)
                            break;
                        searchMax = Math.min(maxNumber, remainingColCount);
                    }
                    if (!NORMAL_NUMBERS.length)
                        break;
                }
            }
            console.log('OTHER_NUMBER_SERIES.length', OTHER_NUMBER_SERIES.length, scope, ROW_COUNT);
            console.log('OTHER_NUMBERS.length', OTHER_NUMBERS.length, scope, ROW_COUNT);
            if (OTHER_NUMBERS.length && pages.length) {
                var lastPage = pages[pages.length - 1];
                var remainingColCount = COL_COUNT - lastPage.mainWrapperColCount;
                if (remainingColCount > 0) {
                    lastPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 2.');
                    lastPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 2.');
                    lastPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 2.');
                    lastPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 2.');
                    _this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, remainingColCount, true, isVertical);
                }
            }
            while (OTHER_NUMBERS.length) {
                var lastPage = {
                    mainWrapper: createElement('div'),
                    mainWrapperColCount: 0,
                    otherWrapper: createElement('div'),
                    otherWrapperColCount: 0,
                    mainWrapperMirror: createElement('div'),
                    otherWrapperMirror: createElement('div')
                };
                lastPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 3.');
                lastPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 3.');
                lastPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 3.');
                lastPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 3.');
                pages.push(lastPage);
                _this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, COL_COUNT, false, isVertical);
            }
            var cssHeight = SIDE_LENGTH * ROW_COUNT + "mm";
            var cssFlex = 'display:flex;flex-wrap:wrap;';
            pages.forEach(function (page) {
                var mainWrapper = page.mainWrapper, mainWrapperColCount = page.mainWrapperColCount, otherWrapper = page.otherWrapper, mainWrapperMirror = page.mainWrapperMirror, otherWrapperMirror = page.otherWrapperMirror;
                var otherWrapperColCount = COL_COUNT - mainWrapperColCount;
                page.otherWrapperColCount = otherWrapperColCount;
                var mainWrapperCss = "width:" + SIDE_LENGTH * mainWrapperColCount + "mm;height:" + cssHeight + ";" + cssFlex;
                mainWrapper.setAttribute('style', mainWrapperCss);
                mainWrapperMirror.setAttribute('style', mainWrapperCss.concat('flex-direction:row-reverse;'));
                list.push(mainWrapper);
                if (otherWrapperColCount) {
                    var otherWrapperCss = "width:" + SIDE_LENGTH * otherWrapperColCount + "mm;height:" + cssHeight + ";" + cssFlex;
                    otherWrapper.setAttribute('style', otherWrapperCss);
                    otherWrapperMirror.setAttribute('style', otherWrapperCss.concat('flex-direction:row-reverse;'));
                    list.push(otherWrapper);
                }
            });
            console.log('first list.length:', list.length);
            pages.forEach(function (_a) {
                var mainWrapperMirror = _a.mainWrapperMirror, otherWrapperMirror = _a.otherWrapperMirror, otherWrapperColCount = _a.otherWrapperColCount;
                list.push(mainWrapperMirror);
                if (otherWrapperColCount)
                    list.push(otherWrapperMirror);
            });
            console.log('second list.length:', list.length);
            return list;
        };
        _this.appendOtherNumbers = function (SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, maxNumber, remainingColCount, isOtherWrapper, isVertical) {
            var list = [];
            OTHER_NUMBERS.forEach(function (item) { return list.push(item); });
            list.sort(function (prev, next) { return next.rowCount * 100 + next.digit - (prev.rowCount * 100 + prev.digit); });
            var colCountArray = [];
            list.forEach(function (_a) {
                var rowCount = _a.rowCount;
                if (colCountArray.indexOf(rowCount) === -1)
                    colCountArray.push(rowCount);
            });
            var fixedMaxNumber = maxNumber === 9 ? 10 : maxNumber;
            var searchMax = Math.min(fixedMaxNumber, remainingColCount);
            var subWrapperHeight = SIDE_LENGTH * ROW_COUNT;
            var colCountCount = colCountArray.length;
            while (remainingColCount > 0) {
                var find = false;
                var _loop_2 = function (i) {
                    var findNum = colCountArray[i];
                    if (findNum > searchMax)
                        return "continue";
                    var filterResult = list.filter(function (_a) {
                        var rowCount = _a.rowCount;
                        return rowCount === findNum;
                    });
                    if (filterResult.length) {
                        find = true;
                        var firstItem = filterResult[0];
                        OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(firstItem), 1);
                        list.splice(list.indexOf(firstItem), 1);
                        remainingColCount -= findNum;
                        var subWrapperWidth = SIDE_LENGTH * findNum;
                        var mmSubWrapperWidth = subWrapperWidth + "mm";
                        var mmSubWrapperHeight = subWrapperHeight + "mm";
                        var subWrapperCss = "display:flex;flex-wrap:wrap;flex-direction:column;width:" + subWrapperWidth + "mm;height:" + subWrapperHeight + "mm;";
                        var subWrapper = createElement('div');
                        subWrapper.setAttribute('style', subWrapperCss);
                        subWrapper.setAttribute('width', mmSubWrapperWidth);
                        subWrapper.setAttribute('height', mmSubWrapperHeight);
                        var subWrapperMirror = createElement('div');
                        subWrapperMirror.setAttribute('style', subWrapperCss);
                        subWrapperMirror.setAttribute('width', mmSubWrapperWidth);
                        subWrapperMirror.setAttribute('height', mmSubWrapperHeight);
                        if (isOtherWrapper) {
                            currentPage.otherWrapperColCount += findNum;
                            currentPage.otherWrapper.appendChild(subWrapper);
                            currentPage.otherWrapperMirror.appendChild(subWrapperMirror);
                        }
                        else {
                            currentPage.mainWrapperColCount += findNum;
                            currentPage.mainWrapper.appendChild(subWrapper);
                            currentPage.mainWrapperMirror.appendChild(subWrapperMirror);
                        }
                        _this.appendOtherNumberItem(SIDE_LENGTH, firstItem, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                        var subWrapperRemainRow = ROW_COUNT - firstItem.digit;
                        _this.fillHorizontalSubWrapper(subWrapperRemainRow, searchMax, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical);
                        searchMax = Math.min(searchMax, remainingColCount);
                    }
                    if (find)
                        return "break";
                };
                for (var i = 0; i < colCountCount; ++i) {
                    var state_2 = _loop_2(i);
                    if (state_2 === "break")
                        break;
                }
                if (!find) {
                    console.log('appendOtherNumbersToOtherWrapper(), not find');
                    return;
                }
                searchMax = Math.min(maxNumber, remainingColCount);
            }
        };
        _this.appendOtherNumberItem = function (SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical) {
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendLine = _a.appendLine, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var svg = createSvg();
            subWrapper.appendChild(svg);
            var svgMirror = createSvg();
            subWrapperMirror.appendChild(svgMirror);
            var digit = item.digit, trueColCount = item.rowCount;
            var digitCss = _this.textFillStyleArray[(digit - 1) % 10];
            var RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var width = SIDE_LENGTH * trueColCount;
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var height = SIDE_LENGTH * digit;
            var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
            var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
            var mmSvgWidth = width + "mm";
            var mmSvgHeight = height + "mm";
            svg.setAttribute('width', mmSvgWidth);
            svg.setAttribute('height', mmSvgHeight);
            svgMirror.setAttribute('width', mmSvgWidth);
            svgMirror.setAttribute('height', mmSvgHeight);
            _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
            _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svgMirror);
            for (var colIndex = 1; colIndex < trueColCount; ++colIndex) {
                var X = SIDE_LENGTH * colIndex;
                appendLine(svg, innerLineStyle, X, X, 0, height, null);
                appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
            }
            for (var rowIndex = 1; rowIndex < digit; ++rowIndex) {
                var Y = height - SIDE_LENGTH * rowIndex;
                appendLine(svg, innerLineStyle, 0, width, Y, Y, null);
                appendLine(svgMirror, innerLineStyle, 0, width, Y, Y, null);
            }
            var textXOrY = SIDE_LENGTH * 0.5;
            var mmSubSvgWidthOrHeight = SIDE_LENGTH + "mm";
            for (var colIndex = 0; colIndex < trueColCount; ++colIndex) {
                var mmX = SIDE_LENGTH * colIndex + "mm";
                for (var rowIndex = 0; rowIndex < digit; ++rowIndex) {
                    var mmY = height - SIDE_LENGTH * rowIndex - SIDE_LENGTH + "mm";
                    var subSvg = createSvg();
                    svg.appendChild(subSvg);
                    subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('x', mmX);
                    subSvg.setAttribute('y', mmY);
                    var subSvgMirror = createSvg();
                    svgMirror.appendChild(subSvgMirror);
                    subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('x', mmX);
                    subSvgMirror.setAttribute('y', mmY);
                    var numLeftToRight = rowIndex + 1 + digit * colIndex;
                    var numberRightToLeft = digit - rowIndex + digit * colIndex;
                    if (isVertical) {
                        var num = numLeftToRight;
                        var numMirror = numLeftToRight;
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                    }
                    else {
                        var num = numberRightToLeft;
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                        var numMirror = numberRightToLeft;
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                    }
                }
            }
        };
        _this.textFillStyleArray = [
            'fill:#000000;',
            'fill:#FF0000;',
            'fill:#FF7F00;',
            'fill:#FFFF00;',
            'fill:#00FF00;',
            'fill:#00FFFF;',
            'fill:#0000FF;',
            'fill:#8B00FF;',
            'fill:#F19EC2;',
            'fill:#6B8E23;',
        ];
        _this.appendNormalNumbersToPage = function (SIDE_LENGTH, _a, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical) {
            var digit = _a.digit, series = _a.series;
            currentPage.mainWrapperColCount += digit;
            var digitCss = _this.textFillStyleArray[(digit - 1) % 10];
            var _b = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _b.createSvg, createSvgPath = _b.createSvgPath, appendLine = _b.appendLine, appendText = _b.appendText, getTextStyleFontSizePatchCss = _b.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var width = SIDE_LENGTH * digit;
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var mainWrapper = currentPage.mainWrapper, mainWrapperMirror = currentPage.mainWrapperMirror;
            var mainWrapperSub = createElement('div');
            mainWrapper.appendChild(mainWrapperSub);
            var mainWrapperSubMirror = createElement('div');
            mainWrapperMirror.appendChild(mainWrapperSubMirror);
            var css = 'display:flex;flex-direction:column;';
            mainWrapperSub.setAttribute('style', css);
            mainWrapperSubMirror.setAttribute('style', css);
            series.forEach(function (rowCount) {
                var height = SIDE_LENGTH * rowCount;
                var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
                var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
                var svg = createSvg();
                mainWrapperSub.appendChild(svg);
                var svgMirror = createSvg();
                mainWrapperSubMirror.appendChild(svgMirror);
                var mmWidth = width + "mm";
                var mmHeight = height + "mm";
                svg.setAttribute('width', mmWidth);
                svg.setAttribute('height', mmHeight);
                svgMirror.setAttribute('width', mmWidth);
                svgMirror.setAttribute('height', mmHeight);
                _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                for (var colIndex = 1; colIndex < digit; ++colIndex) {
                    var X = SIDE_LENGTH * colIndex;
                    appendLine(svg, innerLineStyle, X, X, 0, height, null);
                    appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
                }
                for (var rowIndex = 1; rowIndex < rowCount; ++rowIndex) {
                    var lineY = height - SIDE_LENGTH * rowIndex;
                    appendLine(svg, innerLineStyle, 0, width, lineY, lineY, null);
                    appendLine(svgMirror, innerLineStyle, 0, width, lineY, lineY, null);
                }
                var mmSubSvgWidthOrHeight = SIDE_LENGTH + "mm";
                var textXOrY = SIDE_LENGTH * 0.5;
                for (var rowIndex = 0; rowIndex < rowCount; ++rowIndex) {
                    var mmY = height - SIDE_LENGTH * rowIndex - SIDE_LENGTH + "mm";
                    var numberOffset = digit * (isVertical ? rowCount - rowIndex - 1 : rowIndex);
                    for (var colIndex = 0; colIndex < digit; ++colIndex) {
                        var mmX = SIDE_LENGTH * colIndex + "mm";
                        var subSvg = createSvg();
                        svg.appendChild(subSvg);
                        subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                        subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                        subSvg.setAttribute('x', mmX);
                        subSvg.setAttribute('y', mmY);
                        var subSvgMirror = createSvg();
                        svgMirror.appendChild(subSvgMirror);
                        subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                        subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                        subSvgMirror.setAttribute('x', mmX);
                        subSvgMirror.setAttribute('y', mmY);
                        var numLeftToRight = colIndex + 1 + numberOffset;
                        var numberRightToLeft = digit - colIndex + numberOffset;
                        if (isVertical) {
                            var num = numLeftToRight;
                            var numMirror = numLeftToRight;
                            appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                            appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                        }
                        else {
                            var num = numLeftToRight;
                            appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                            var numMirror = num;
                            appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                        }
                    }
                }
            });
        };
        _this.kindTableColumnInfo = [
            {
                value: 'numberPoker',
                captions: { en: 'Number Poker', zh_cn: '数字扑克', zh_tw: '數位撲克' }
            },
            {
                value: 'chinesePoker',
                captions: { en: 'Chinese Poker', zh_cn: '汉字扑克', zh_tw: '漢字撲克' }
            },
            {
                value: 'numberPokerFull',
                captions: {
                    en: 'Number Poker Full',
                    zh_cn: '完整数字扑克',
                    zh_tw: '完整數位撲克'
                }
            },
            {
                value: 'chinesePokerFull',
                captions: {
                    en: 'Chinese Poker Full',
                    zh_cn: '完整汉字扑克',
                    zh_tw: '完整漢字撲克'
                }
            },
            {
                value: 'vertical',
                captions: { en: 'Vertical', zh_cn: '竖格', zh_tw: '豎格' }
            },
            {
                value: 'horizontal',
                captions: { en: 'Horizontal', zh_cn: '横格', zh_tw: '橫格' }
            },
        ];
        _this.scopeTableColumnInfo = [
            {
                value: 'chinese',
                captions: { en: 'Chinese', zh_cn: '中式9×9', zh_tw: '中式9×9' }
            },
            {
                value: 'west',
                captions: { en: 'West', zh_cn: '西式12×12', zh_tw: '西式12×12' }
            },
            {
                value: 'india',
                captions: { en: 'India', zh_cn: '印式19×19', zh_tw: '印式19×19' }
            },
        ];
        _this.createTableBodyRow = function (item) {
            var _a = item, length = _a.length, scope = _a.scope, kind = _a.kind, pokerIncludeZero = _a.pokerIncludeZero, copies = _a.copies, innerLineStyle = _a.innerLineStyle, outerLineStyle = _a.outerLineStyle, textStyle = _a.textStyle;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendNumberTd(tr, length, item, 'length', 1, null, 0.1);
            _this.appendSelectTd(tr, scope, item, 'scope', _this.scopeTableColumnInfo);
            _this.appendSelectTd(tr, kind, item, 'kind', _this.kindTableColumnInfo);
            _this.appendCheckboxTdWithoutText(tr, pokerIncludeZero, item, 'pokerIncludeZero');
            _this.appendNumberTd(tr, copies, item, 'copies', 1, null, 1);
            _this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
            _this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
            _this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
        };
        _this.initTableHead = function () {
            _this.appendTableHeadCell({ en: 'Length', zh_cn: '边长', zh_tw: '邊長' });
            _this.appendTableHeadCell({ en: 'Scope', zh_cn: '范围', zh_tw: '範圍' });
            _this.appendTableHeadCell({ en: 'Kind', zh_cn: '类型', zh_tw: '類型' });
            _this.appendTableHeadCell({
                en: 'Poker Include Zero',
                zh_cn: '扑克带零',
                zh_tw: '撲克帶零'
            });
            _this.appendTableHeadCell({ en: 'Copies', zh_cn: '份数', zh_tw: '份數' });
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
            var pokerLength = 16;
            var pokerIncludeZero = false;
            var copies = 1;
            var innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
            var outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
            var textStyle = 'font-size:6mm;';
            var textStyleOfNumberPoker = 'font-size:7.5mm;';
            var textStyleOfChinesePoker = 'font-size:6.5mm;';
            var kinds = _this.kindTableColumnInfo.map(function (_a) {
                var value = _a.value;
                return value;
            });
            var kindI18n = _this.kindTableColumnInfo.map(function (_a) {
                var captions = _a.captions;
                return captions;
            });
            var usableList = [];
            _this.scopeTableColumnInfo.forEach(function (_a) {
                var value = _a.value, captions = _a.captions;
                var scope = value;
                var buttonList = [];
                kinds.forEach(function (kind, index) {
                    buttonList.push({
                        nameI18n: kindI18n[index],
                        info: {
                            length: kind === 'vertical' || kind === 'horizontal' ? length : pokerLength,
                            scope: scope,
                            kind: kind,
                            pokerIncludeZero: pokerIncludeZero,
                            copies: copies,
                            innerLineStyle: innerLineStyle,
                            outerLineStyle: outerLineStyle,
                            textStyle: kind.indexOf('numberPoker') > -1
                                ? textStyleOfNumberPoker
                                : kind.indexOf('chinesePoker') > -1
                                    ? textStyleOfChinesePoker
                                    : textStyle
                        }
                    });
                });
                var strongI18n = captions;
                usableList.push({
                    strongI18n: strongI18n,
                    buttonList: buttonList
                });
            });
            return usableList;
        };
        return _this;
    }
    BrickCore.prototype.fillHorizontalSubWrapper = function (subWrapperRemainRow, maxColCount, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical) {
        if (subWrapperRemainRow === 0)
            return;
        var colCountCount = colCountArray.length;
        var _loop_3 = function (i) {
            var searchRowCount = colCountArray[i];
            if (searchRowCount > maxColCount)
                return "continue";
            var others = list.filter(function (_a) {
                var rowCount = _a.rowCount;
                return rowCount === searchRowCount;
            });
            var count = others.length;
            for (var i_1 = 0; i_1 < count; ++i_1) {
                var item = others[i_1];
                var digit = item.digit;
                if (subWrapperRemainRow >= digit) {
                    OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(item), 1);
                    list.splice(list.indexOf(item), 1);
                    subWrapperRemainRow -= digit;
                    this_1.appendOtherNumberItem(SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                    if (subWrapperRemainRow === 0)
                        return { value: void 0 };
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < colCountCount; ++i) {
            var state_3 = _loop_3(i);
            if (typeof state_3 === "object")
                return state_3.value;
        }
    };
    BrickCore.prototype.appendSvgPath = function (createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg) {
        var path = createSvgPath();
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', stroke);
        path.setAttribute('d', ("M 0, " + RADIUS_PX).concat(" a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 " + RADIUS_PX + " -" + RADIUS_PX, " h " + WIDTH_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 " + RADIUS_PX + " " + RADIUS_PX, " v " + HEIGHT_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 -" + RADIUS_PX + " " + RADIUS_PX, " h -" + WIDTH_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 -" + RADIUS_PX + " -" + RADIUS_PX, ' z'));
        svg.appendChild(path);
    };
    BrickCore.prototype.fillIndiaNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([19, 10]);
                NUMBER_SERIES.push([18, 11]);
                NUMBER_SERIES.push([17, 12]);
                NUMBER_SERIES.push([16, 13]);
                NUMBER_SERIES.push([15, 14]);
                NUMBER_SERIES.push([9, 8, 7, 5]);
                [6, 4, 3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 28:
                NUMBER_SERIES.push([19, 9]);
                NUMBER_SERIES.push([18, 10]);
                NUMBER_SERIES.push([17, 11]);
                NUMBER_SERIES.push([16, 12]);
                NUMBER_SERIES.push([15, 13]);
                NUMBER_SERIES.push([14, 8, 6]);
                NUMBER_SERIES.push([7, 5, 4, 3, 2, 1, 1, 3]);
                break;
            case 27:
                NUMBER_SERIES.push([19, 8]);
                NUMBER_SERIES.push([18, 9]);
                NUMBER_SERIES.push([17, 10]);
                NUMBER_SERIES.push([16, 11]);
                NUMBER_SERIES.push([15, 12]);
                NUMBER_SERIES.push([14, 13]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 2]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 26:
                NUMBER_SERIES.push([19, 7]);
                NUMBER_SERIES.push([18, 8]);
                NUMBER_SERIES.push([17, 9]);
                NUMBER_SERIES.push([16, 10]);
                NUMBER_SERIES.push([15, 11]);
                NUMBER_SERIES.push([14, 12]);
                NUMBER_SERIES.push([13, 6, 5, 2]);
                [4, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 25:
                NUMBER_SERIES.push([19, 6]);
                NUMBER_SERIES.push([18, 7]);
                NUMBER_SERIES.push([17, 8]);
                NUMBER_SERIES.push([16, 9]);
                NUMBER_SERIES.push([15, 10]);
                NUMBER_SERIES.push([14, 11]);
                NUMBER_SERIES.push([13, 12]);
                NUMBER_SERIES.push([5, 4, 3, 2, 1, 1, 2, 3, 4]);
                break;
            case 24:
                NUMBER_SERIES.push([19, 5]);
                NUMBER_SERIES.push([18, 6]);
                NUMBER_SERIES.push([17, 7]);
                NUMBER_SERIES.push([16, 8]);
                NUMBER_SERIES.push([15, 9]);
                NUMBER_SERIES.push([14, 10]);
                NUMBER_SERIES.push([13, 11]);
                NUMBER_SERIES.push([12, 4, 3, 2, 1, 2]);
                break;
            case 23:
                NUMBER_SERIES.push([19, 4]);
                NUMBER_SERIES.push([18, 5]);
                NUMBER_SERIES.push([17, 6]);
                NUMBER_SERIES.push([16, 7]);
                NUMBER_SERIES.push([15, 8]);
                NUMBER_SERIES.push([14, 9]);
                NUMBER_SERIES.push([13, 10]);
                NUMBER_SERIES.push([12, 11]);
                [3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 22:
                NUMBER_SERIES.push([19, 3]);
                NUMBER_SERIES.push([18, 4]);
                NUMBER_SERIES.push([17, 5]);
                NUMBER_SERIES.push([16, 6]);
                NUMBER_SERIES.push([15, 7]);
                NUMBER_SERIES.push([14, 8]);
                NUMBER_SERIES.push([13, 9]);
                NUMBER_SERIES.push([12, 10]);
                [11, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 21:
                NUMBER_SERIES.push([19, 2]);
                NUMBER_SERIES.push([18, 3]);
                NUMBER_SERIES.push([17, 4]);
                NUMBER_SERIES.push([16, 5]);
                NUMBER_SERIES.push([15, 6]);
                NUMBER_SERIES.push([14, 7]);
                NUMBER_SERIES.push([13, 8]);
                NUMBER_SERIES.push([12, 9]);
                NUMBER_SERIES.push([11, 10]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 20:
                NUMBER_SERIES.push([19, 1]);
                NUMBER_SERIES.push([18, 2]);
                NUMBER_SERIES.push([17, 3]);
                NUMBER_SERIES.push([16, 4]);
                NUMBER_SERIES.push([15, 5]);
                NUMBER_SERIES.push([14, 6]);
                NUMBER_SERIES.push([13, 7]);
                NUMBER_SERIES.push([12, 8]);
                NUMBER_SERIES.push([11, 9]);
                [10].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 19:
                NUMBER_SERIES.push([19]);
                NUMBER_SERIES.push([18, 1]);
                NUMBER_SERIES.push([17, 2]);
                NUMBER_SERIES.push([16, 3]);
                NUMBER_SERIES.push([15, 4]);
                NUMBER_SERIES.push([14, 5]);
                NUMBER_SERIES.push([13, 6]);
                NUMBER_SERIES.push([12, 7]);
                NUMBER_SERIES.push([11, 8]);
                NUMBER_SERIES.push([10, 9]);
                break;
            default:
                break;
        }
    };
    BrickCore.prototype.fillWestNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([12, 11, 6]);
                NUMBER_SERIES.push([10, 9, 8, 2]);
                NUMBER_SERIES.push([7, 5, 4, 3, 1, 2, 3, 4]);
                break;
            case 28:
                NUMBER_SERIES.push([12, 11, 5]);
                NUMBER_SERIES.push([10, 9, 8, 1]);
                NUMBER_SERIES.push([7, 6, 4, 3, 2, 1, 2, 3]);
                break;
            case 27:
                NUMBER_SERIES.push([12, 11, 4]);
                NUMBER_SERIES.push([10, 9, 8]);
                NUMBER_SERIES.push([7, 6, 5, 3, 2, 1, 1, 2]);
                break;
            case 26:
                NUMBER_SERIES.push([12, 11, 3]);
                NUMBER_SERIES.push([10, 9, 7]);
                NUMBER_SERIES.push([8, 6, 5, 4, 2, 1]);
                break;
            case 25:
                NUMBER_SERIES.push([12, 11, 2]);
                NUMBER_SERIES.push([10, 9, 6]);
                NUMBER_SERIES.push([8, 7, 5, 4, 1]);
                [3].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 24:
                NUMBER_SERIES.push([12, 11, 1]);
                NUMBER_SERIES.push([10, 9, 5]);
                NUMBER_SERIES.push([8, 7, 6, 3]);
                [2, 4].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 23:
                NUMBER_SERIES.push([12, 11]);
                NUMBER_SERIES.push([10, 9, 4]);
                NUMBER_SERIES.push([8, 7, 6, 2]);
                NUMBER_SERIES.push([5, 4, 3, 1, 1, 2, 3, 4]);
                break;
            case 22:
                NUMBER_SERIES.push([12, 10]);
                NUMBER_SERIES.push([11, 9, 2]);
                NUMBER_SERIES.push([8, 7, 6, 1]);
                NUMBER_SERIES.push([5, 4, 3, 1, 2, 3, 4]);
                break;
            case 21:
                NUMBER_SERIES.push([12, 9]);
                NUMBER_SERIES.push([11, 10]);
                NUMBER_SERIES.push([8, 7, 6]);
                NUMBER_SERIES.push([5, 4, 3, 2, 1, 1, 2, 3]);
                break;
            case 20:
                NUMBER_SERIES.push([12, 8]);
                NUMBER_SERIES.push([11, 9]);
                NUMBER_SERIES.push([10, 7, 3]);
                NUMBER_SERIES.push([6, 5, 4, 2, 1, 2]);
                break;
            case 19:
                NUMBER_SERIES.push([12, 7]);
                NUMBER_SERIES.push([11, 8]);
                NUMBER_SERIES.push([10, 9]);
                NUMBER_SERIES.push([6, 5, 4, 3, 1]);
                [2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 18:
                NUMBER_SERIES.push([12, 6]);
                NUMBER_SERIES.push([11, 7]);
                NUMBER_SERIES.push([10, 8]);
                NUMBER_SERIES.push([9, 5, 4]);
                [3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 17:
                NUMBER_SERIES.push([12, 5]);
                NUMBER_SERIES.push([11, 6]);
                NUMBER_SERIES.push([10, 7]);
                NUMBER_SERIES.push([9, 8]);
                [4, 3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 16:
                NUMBER_SERIES.push([12, 4]);
                NUMBER_SERIES.push([11, 5]);
                NUMBER_SERIES.push([10, 6]);
                NUMBER_SERIES.push([9, 7]);
                NUMBER_SERIES.push([8, 2, 1, 2, 3]);
                break;
            default:
                break;
        }
    };
    BrickCore.prototype.fillChineseNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([10, 9, 8, 2]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 1, 1, 2]);
                break;
            case 28:
                NUMBER_SERIES.push([10, 9, 8, 1]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 2, 1]);
                break;
            case 27:
                NUMBER_SERIES.push([10, 9, 8]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 1]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 26:
                NUMBER_SERIES.push([10, 9, 7]);
                NUMBER_SERIES.push([8, 6, 5, 4, 3]);
                [2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 25:
                NUMBER_SERIES.push([10, 9, 6]);
                NUMBER_SERIES.push([8, 7, 5, 4, 1]);
                [3, 2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 24:
                NUMBER_SERIES.push([10, 9, 5]);
                NUMBER_SERIES.push([8, 7, 6, 3]);
                [4, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 23:
                NUMBER_SERIES.push([10, 9, 4]);
                NUMBER_SERIES.push([8, 7, 6, 2]);
                [5, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 22:
                NUMBER_SERIES.push([10, 9, 3]);
                NUMBER_SERIES.push([8, 7, 6, 1]);
                [5, 4, 2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 21:
                NUMBER_SERIES.push([10, 9, 2]);
                NUMBER_SERIES.push([8, 7, 6]);
                [5, 4, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 20:
                NUMBER_SERIES.push([10, 9, 1]);
                NUMBER_SERIES.push([8, 2, 7, 3]);
                NUMBER_SERIES.push([6, 4, 5, 5]);
                break;
            case 19:
                NUMBER_SERIES.push([10, 9]);
                NUMBER_SERIES.push([8, 7, 4]);
                NUMBER_SERIES.push([6, 5, 3, 2, 1, 2]);
                break;
            case 18:
                NUMBER_SERIES.push([10, 8]);
                NUMBER_SERIES.push([9, 7, 2]);
                NUMBER_SERIES.push([6, 3, 5, 4]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 17:
                NUMBER_SERIES.push([10, 7]);
                NUMBER_SERIES.push([9, 8]);
                NUMBER_SERIES.push([6, 5, 4, 2]);
                [3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 16:
                NUMBER_SERIES.push([10, 6]);
                NUMBER_SERIES.push([9, 7]);
                NUMBER_SERIES.push([8, 5, 3]);
                [4, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            default:
                break;
        }
    };
    return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("12", false);

