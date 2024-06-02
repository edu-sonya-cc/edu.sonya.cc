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

var RummikubPokerKind;
(function (RummikubPokerKind) {
    RummikubPokerKind[RummikubPokerKind["none"] = 0] = "none";
    RummikubPokerKind[RummikubPokerKind["diagonal"] = 1] = "diagonal";
    RummikubPokerKind[RummikubPokerKind["center"] = 2] = "center";
    RummikubPokerKind[RummikubPokerKind["diagonalExtends"] = 4] = "diagonalExtends";
    RummikubPokerKind[RummikubPokerKind["centerExtends"] = 8] = "centerExtends";
})(RummikubPokerKind || (RummikubPokerKind = {}));
var RummikubPokerKindCount = 4;
var DefaultRummikubPokerKind = 15;
var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, {
            pokerWidth: 20,
            pokerHeight: 28,
            backFontSize: "12px",
            pokerKind: DefaultRummikubPokerKind,
            centerTextShowed: false,
            includeZero: false,
            wholePage: false
        }, {
            count: 0,
            chars: [],
            backCovers: [],
            centerTexts: [],
            colors: [],
            isCenters: [],
            pokerCss: "\n      .double{display:flex;justify-content: space-around;}\n      .double b:first-child{position:relative;left:0.375em;}\n      .double b:last-child{position:relative;left:-0.375em;opacity:0.75;}\n\n      .discoloration{display:flex;width: 100%;position: relative;}\n      .discoloration b:first-child{overflow:hidden;position:relative;left:0.5em;}\n      .discoloration b:first-child i{position:relative;left:-0.5em;color:#000;}\n      .discoloration b:last-child{overflow:hidden;position:relative;left:-0.5em;}\n      .discoloration b:last-child i{position:relative;left:0em;color:#F00;}\n\n      .mirror{position:relative;margin-left:12%;width:88%;letter-spacing:0em;display:flex;}\n      .top-left .mirror,.bottom-right .mirror{width:40%;margin-left:6%;}\n      .mirror b:first-child{overflow:hidden;}\n      .mirror b:last-child{overflow:hidden;}\n      .mirror b:first-child i{position:relative;left:-0.475em;}\n      .mirror b:last-child i{position:relative;left: -0.15em;border-left:1px solid #888;}\n      "
        }) || this;
        _this.onPageSizeChanged = function (_newPageSize) { };
        _this.getForePageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, centerTextShowed = _b.centerTextShowed, _c = _a.computedData, COUNT = _c.count, CHARS = _c.chars, CENTER_TEXTS = _c.centerTexts, COLORS = _c.colors, IS_CENTERS = _c.isCenters;
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var PAGE_START = "<page class=\"forePage " + paperSize + "\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var TOP_START = "<top>", TOP_END = "</top>";
            var BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
            var CENTER_START = "<center>", CENTER_END = "</center>";
            var TEXT_END = "</text>";
            var ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
            var COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
            var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
            var PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
            var symbolIndex = 0;
            var html = "";
            for (var loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
                html += PAGE_START;
                for (var loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                    html += ROW_START;
                    for (var loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                        html += CELL_START;
                        if (symbolIndex <= MAX_SYMBOL_INDEX) {
                            var isCenter = IS_CENTERS[symbolIndex];
                            var char = CHARS[symbolIndex] || (isCenter ? "" : "_");
                            var color = COLORS[symbolIndex] || "-1";
                            if (isCenter) {
                                html += CENTER_START + "<text edu-color=\"" + color + "\">" + char.replace(/([69])/g, "<u>".concat("$1", "</u>")) + TEXT_END + CENTER_END;
                            }
                            else {
                                html +=
                                    TOP_START + "<text class=\"top-left\" edu-color=\"" + color + "\">" + char + TEXT_END + TOP_END;
                                if (centerTextShowed) {
                                    html += "" + CENTER_START + (CENTER_TEXTS[symbolIndex] ||
                                        "") + CENTER_END;
                                }
                                html +=
                                    BOTTOM_START + "<text class=\"bottom-right\" edu-color=\"" + color + "\">" + char + TEXT_END + BOTTOM_END;
                            }
                        }
                        html += CELL_END;
                        ++symbolIndex;
                    }
                    html += ROW_END;
                }
                html += PAGE_END;
            }
            return html;
        };
        _this.getBackPageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, _c = _a.computedData, COUNT = _c.count, BACK_COVERS = _c.backCovers;
            var PAGE_START = "<page class=\"backPage " + paperSize + "\" dir=\"rtl\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var CENTER_START = "<center>", CENTER_END = "</center>";
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
            var COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
            var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
            var PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
            var lastItem = BACK_COVERS[BACK_COVERS.length - 1];
            var symbolIndex = 0;
            var html = "";
            for (var loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
                html += PAGE_START;
                for (var loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                    html += ROW_START;
                    for (var loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                        html += CELL_START;
                        if (symbolIndex <= MAX_SYMBOL_INDEX) {
                            html += CENTER_START.concat(BACK_COVERS[symbolIndex] || lastItem, CENTER_END);
                        }
                        html += CELL_END;
                        ++symbolIndex;
                    }
                    html += ROW_END;
                }
                html += PAGE_END;
            }
            return html;
        };
        _this.DIAGONAL_NORMAL_CARD_TIMES = 2;
        _this.DIAGONAL_CHANGEABLE_CARD_COUNT = 2;
        _this.DIAGONAL_CENTER_TEXT = "<div>\n  <p><en_us>Same decor</en_us><zh_cn>\u540C\u8272\u8FDE\u7EED</zh_cn><zh_tw>\u540C\u8272\u8FDE\u7EED</zh_tw></p>\n  <p><en_us>Arithmetic sequence</en_us></p><br />\n  <p edu-color=\"1\">7,8,9,10,11,12,13</p>\n  <p edu-color=\"2\">1,2,3</p>\n  <p edu-color=\"1\">5,6,\u263A,8</p>\n\n  <p><en_us>Different decors</en_us><zh_cn>\u5F02\u8272\u540C\u503C</zh_cn><zh_tw>\u5F02\u8272\u540C\u503C</zh_tw></p>\n  <p><en_us>Same value</en_us></p>\n  <p><b edu-color=\"1\">2</b><b edu-color=\"2\">2</b><b edu-color=\"3\">2</b><b edu-color=\"3\">\u263A</b></p>\n  <p><b edu-color=\"1\">\u263A</b><b edu-color=\"2\">3</b><b edu-color=\"3\">3</b></p>\n </span></div>";
        _this.CENTER_NORMAL_CARD_TIMES = 2;
        _this.CENTER_CHANGEABLE_CARD_COUNT = 2;
        _this.CENTER_CENTER_TEXT = "";
        _this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES = 2;
        _this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
        _this.DIAGONAL_EXTENDS_CENTER_TEXT = _this.DIAGONAL_CENTER_TEXT;
        _this.CENTER_EXTENDS_NORMAL_CARD_TIMES = 2;
        _this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
        _this.CENTER_EXTENDS_CENTER_TEXT = "";
        _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
            if (pokerKind === 0)
                pokerKind = DefaultRummikubPokerKind;
            var en_us = FILENAME_POSTFIX + "Rummikub";
            var zh_cn = FILENAME_POSTFIX + "\u62C9\u5BC6";
            var zh_tw = FILENAME_POSTFIX + "\u62C9\u5BC6";
            var enBackCover = en_us.split("_").join("<br />");
            var zh_cnBackCover = zh_cn.split("_").join("<br />");
            var zh_twBackCover = zh_tw.split("_").join("<br />");
            var enArray = [];
            var enFullArray = [];
            var zh_cnArray = [];
            var zh_twArray = [];
            var backCover = "";
            var title = { en_us: en_us, zh_cn: zh_cn, zh_tw: zh_tw };
            var CENTER_TEXTS = [];
            var BACK_COVERS = [];
            var CHARS = [];
            var COLORS = [];
            var count = 0;
            var lastPokerKind = RummikubPokerKind.none;
            _this.computedData.isCenters.length = "";
            if (RummikubPokerKind.diagonal === (RummikubPokerKind.diagonal & pokerKind)) {
                enArray.push("diagonal");
                count += _this.countIt(_this.DIAGONAL_NORMAL_CARD_TIMES, _this.DIAGONAL_CHANGEABLE_CARD_COUNT, countPerPage, _this.DIAGONAL_CENTER_TEXT, CENTER_TEXTS, "diagonal", "对角线", "對角線", enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.diagonal);
                lastPokerKind = RummikubPokerKind.diagonal;
            }
            if (RummikubPokerKind.center === (RummikubPokerKind.center & pokerKind)) {
                enArray.push("center");
                count += _this.countIt(_this.CENTER_NORMAL_CARD_TIMES, _this.CENTER_CHANGEABLE_CARD_COUNT, countPerPage, _this.CENTER_CENTER_TEXT, CENTER_TEXTS, "center", "中心", "中心", enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.center);
                lastPokerKind = RummikubPokerKind.center;
            }
            if (RummikubPokerKind.diagonalExtends ===
                (RummikubPokerKind.diagonalExtends & pokerKind)) {
                enArray.push("diagonalExtends");
                count += _this.countIt(_this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES, _this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT, countPerPage, _this.DIAGONAL_EXTENDS_CENTER_TEXT, CENTER_TEXTS, "diagonal extends", "对角线扩展版", "對角線擴展版", enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.diagonalExtends);
                lastPokerKind = RummikubPokerKind.diagonalExtends;
            }
            if (RummikubPokerKind.centerExtends ===
                (RummikubPokerKind.centerExtends & pokerKind)) {
                enArray.push("centerExtends");
                count += _this.countIt(_this.CENTER_EXTENDS_NORMAL_CARD_TIMES, _this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT, countPerPage, _this.CENTER_EXTENDS_CENTER_TEXT, CENTER_TEXTS, "center extends", "中心扩展版", "中心擴展版", enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.centerExtends);
                lastPokerKind = RummikubPokerKind.centerExtends;
            }
            switch (enArray.length) {
                case 0:
                    backCover = getI18nInnerHTML({
                        en_us: enBackCover,
                        zh_cn: zh_cnBackCover,
                        zh_tw: zh_twBackCover
                    });
                    break;
                case 1:
                    var enFirstItem = enArray[0];
                    var zh_cnFirstItem = zh_cnArray[0];
                    var zh_twFirstItem = zh_twArray[0];
                    backCover = getI18nInnerHTML({
                        en_us: enBackCover.concat("<br /><br />", enFirstItem),
                        zh_cn: zh_cnBackCover.concat("<br /><br />", zh_cnFirstItem),
                        zh_tw: zh_twBackCover.concat("<br /><br />", zh_twFirstItem)
                    });
                    title.en_us += "_".concat(enFullArray[0]);
                    title.zh_cn += "_".concat(zh_cnFirstItem);
                    title.zh_tw += "_".concat(zh_twFirstItem);
                    break;
                default:
                    if (enArray.length === RummikubPokerKindCount) {
                        backCover = getI18nInnerHTML({
                            en_us: enBackCover,
                            zh_cn: zh_cnBackCover,
                            zh_tw: zh_twBackCover
                        });
                        title.en_us += " Mixed_ALL";
                        title.zh_cn += "混合_所有";
                        title.zh_tw += "混合_所有";
                    }
                    else {
                        backCover = getI18nInnerHTML({
                            en_us: enBackCover.concat("<br /><br /><small>", enArray.join("<br />"), "</small>"),
                            zh_cn: zh_cnBackCover.concat("<br /><br /><small>", zh_cnArray.join("<br />"), "</small>"),
                            zh_tw: zh_twBackCover.concat("<br /><br /><small>", zh_twArray.join("<br />"), "</small>")
                        });
                        title.en_us += " Mixed_".concat(enFullArray.join("_"));
                        title.zh_cn += "混合_".concat(zh_cnArray.join("_"));
                        title.zh_tw += "混合_".concat(zh_twArray.join("_"));
                    }
                    break;
            }
            _this.computedData.backCover = backCover;
            _this.computedData.title = title;
            _this.computedData.chars = CHARS;
            _this.computedData.colors = COLORS;
            _this.computedData.count = Math.ceil(count / countPerPage) * countPerPage;
            _this.computedData.backCovers = BACK_COVERS;
            _this.computedData.centerTexts = CENTER_TEXTS;
            var appendCount = _this.computedData.count - count;
            switch (lastPokerKind) {
                case RummikubPokerKind.diagonal:
                    pushSameValueTimes(_this.computedData.centerTexts, _this.DIAGONAL_CENTER_TEXT, appendCount);
                    break;
                case RummikubPokerKind.diagonalExtends:
                    pushSameValueTimes(_this.computedData.centerTexts, _this.DIAGONAL_EXTENDS_CENTER_TEXT, appendCount);
                    break;
                default:
                    pushSameValueTimes(_this.computedData.isCenters, true, appendCount);
                    break;
            }
        };
        _this.updateOtherDataOfPoker = function (newData) {
            var pokerKind = newData.pokerKind;
            for (var pokerKindIndex = 0; pokerKindIndex < RummikubPokerKindCount; ++pokerKindIndex) {
                var pokerKindValue = Math.pow(2, pokerKindIndex);
                var checkboxElement = _this
                    .pokerKindElementArray[pokerKindIndex];
                checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
            }
            var includeZero = newData.includeZero;
            _this.includeZeroElementArray.forEach(function (radioElement) {
                radioElement.checked = includeZero === (radioElement.value === "true");
            });
            _this.data.includeZero = includeZero;
            var wholePage = newData.wholePage;
            _this.wholePageElementArray.forEach(function (radioElement) {
                radioElement.checked = wholePage === (radioElement.value === "true");
            });
            _this.data.wholePage = wholePage;
        };
        _this.initOtherElements = function () {
            var _a;
            _this.paperSizeRadioArray.forEach(function (radioElement) {
                radioElement.onclick = function (event) {
                    var paperSizeValue = radioElement.value;
                    _this.data.paperSize = paperSizeValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
            });
            (_a = _this.configCoreElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll('[name="pokerSizeButtons"]').forEach(function (buttonElement, index) {
                if (index === 0) {
                    buttonElement.setAttribute("edu-to-width", "18");
                    buttonElement.setAttribute("edu-to-height", "25");
                }
                else {
                    buttonElement.setAttribute("edu-to-width", "20");
                    buttonElement.setAttribute("edu-to-height", "28");
                }
            });
            var wrapElement = _this.getWrapElement({
                en_us: "Include Zero",
                zh_cn: "包含0",
                zh_tw: "包含0"
            });
            _this.initIncludeZeroElements(wrapElement);
            wrapElement = _this.getWrapElement({
                en_us: "Whole Page",
                zh_cn: "每项补全整页",
                zh_tw: "每項補全整頁"
            });
            _this.initWholePageElements(wrapElement);
        };
        _this.initPokerKindElements = function (wrapElement) {
            var _a = _this, pokerKind = _a.data.pokerKind, pokerKindElementArray = _a.pokerKindElementArray;
            var pokerKindI18nHtmlArray = [
                getI18nInnerHTML({
                    en_us: "diagonal",
                    zh_cn: "对角线",
                    zh_tw: "對角線"
                }),
                getI18nInnerHTML({
                    en_us: "center",
                    zh_cn: "中心",
                    zh_tw: "中心"
                }),
                getI18nInnerHTML({
                    en_us: "diagonal extends",
                    zh_cn: "对角线扩展版",
                    zh_tw: "對角線擴展版"
                }),
                getI18nInnerHTML({
                    en_us: "center extends",
                    zh_cn: "中心扩展版",
                    zh_tw: "中心擴展版"
                }),
            ];
            var _loop_1 = function (pokerKindIndex) {
                var pokerKindValue = Math.pow(2, pokerKindIndex);
                var checkboxElement = createElement("input");
                checkboxElement.type = "checkbox";
                checkboxElement.name = "pokerKind";
                checkboxElement.value = pokerKindValue.toString();
                if ((pokerKind & pokerKindValue) === pokerKindValue) {
                    checkboxElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = pokerKindI18nHtmlArray[pokerKindIndex];
                checkboxElement.onclick = function () {
                    var newValue = 0;
                    pokerKindElementArray.forEach(function (item) {
                        if (item.checked) {
                            newValue |= parseInt(item.value, 0);
                        }
                    });
                    _this.data.pokerKind = newValue;
                    console.log(_this.data.pokerKind, pokerKindValue);
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    checkboxElement.click();
                };
                wrapElement.appendChild(checkboxElement);
                wrapElement.appendChild(spanElement);
                pokerKindElementArray.push(checkboxElement);
            };
            for (var pokerKindIndex = 0; pokerKindIndex < RummikubPokerKindCount; ++pokerKindIndex) {
                _loop_1(pokerKindIndex);
            }
        };
        _this.includeZeroElementArray = [];
        _this.initIncludeZeroElements = function (wrapElement) {
            var _a = _this, includeZero = _a.data.includeZero, includeZeroElementArray = _a.includeZeroElementArray;
            var i18nHtmlArray = [
                getI18nInnerHTML({
                    en_us: "Yes",
                    zh_cn: "是",
                    zh_tw: "是"
                }),
                getI18nInnerHTML({
                    en_us: "No",
                    zh_cn: "否",
                    zh_tw: "否"
                }),
            ];
            [true, false].forEach(function (includeZeroValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "includeZero";
                radioElement.value = includeZeroValue.toString();
                if (includeZero === includeZeroValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtmlArray[includeZeroValue ? 0 : 1];
                radioElement.onclick = function () {
                    _this.data.includeZero = includeZeroValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                includeZeroElementArray.push(radioElement);
            });
        };
        _this.wholePageElementArray = [];
        _this.initWholePageElements = function (wrapElement) {
            var _a = _this, wholePage = _a.data.wholePage, wholePageElementArray = _a.wholePageElementArray;
            var i18nHtmlArray = [
                getI18nInnerHTML({
                    en_us: "Yes",
                    zh_cn: "是",
                    zh_tw: "是"
                }),
                getI18nInnerHTML({
                    en_us: "No",
                    zh_cn: "否",
                    zh_tw: "否"
                }),
            ];
            [true, false].forEach(function (wholePageValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "wholePage";
                radioElement.value = wholePageValue.toString();
                if (wholePage === wholePageValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtmlArray[wholePageValue ? 0 : 1];
                radioElement.onclick = function () {
                    _this.data.wholePage = wholePageValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                wholePageElementArray.push(radioElement);
            });
        };
        _this.DECOR_COUNT = 4;
        _this.NORMAL_CARD_ARRAY = getNumbersArray(1, 13);
        _this.CHANGEABLE_CARD_ARRAY = [
            "☺",
            '<p class="double"><b><i>☺</i></b><b><i>☺</i></b></p>',
            '<p class="discoloration"><b><i>☺</i></b><b><i>☺</i></b></p>',
            '<p class="mirror"><b><i>☺</i></b><b><i>☺</i></b></p>',
        ];
        _this.countIt = function (normalCardTimes, changeableCardCount, countPerPage, centerText, CENTER_TEXTS, enAppend, zh_cnAppend, zh_twAppend, enFullArray, zh_cnArray, zh_twArray, en_us, zh_cn, zh_tw, CHARS, COLORS, BACK_COVERS, pokerKind) {
            enFullArray.push(enAppend);
            zh_cnArray.push(zh_cnAppend);
            zh_twArray.push(zh_twAppend);
            var notSameBackCover = getI18nInnerHTML({
                en_us: en_us.concat("<br /><small>", enAppend, "</small>"),
                zh_cn: zh_cn.concat("<br />", zh_cnAppend),
                zh_tw: zh_tw.concat("<br />", zh_twAppend)
            });
            var _a = _this, DECOR_COUNT = _a.DECOR_COUNT, NORMAL_CARD_ARRAY = _a.NORMAL_CARD_ARRAY, CHANGEABLE_CARD_ARRAY = _a.CHANGEABLE_CARD_ARRAY, _b = _a.data, includeZero = _b.includeZero, wholePage = _b.wholePage;
            var isCenters = pokerKind === RummikubPokerKind.center ||
                pokerKind === RummikubPokerKind.centerExtends;
            for (var normalCardLoop = 0; normalCardLoop < normalCardTimes; ++normalCardLoop) {
                var _loop_2 = function (colorIndex) {
                    var color = colorIndex.toString();
                    if (includeZero) {
                        CHARS.push("0");
                        CENTER_TEXTS.push(centerText);
                        COLORS.push(color);
                        _this.computedData.isCenters.push(isCenters);
                    }
                    NORMAL_CARD_ARRAY.forEach(function (char) {
                        CHARS.push(char);
                        CENTER_TEXTS.push(centerText);
                        COLORS.push(color);
                        _this.computedData.isCenters.push(isCenters);
                    });
                };
                for (var colorIndex = 1; colorIndex <= DECOR_COUNT; ++colorIndex) {
                    _loop_2(colorIndex);
                }
            }
            var CHANGEABLE_CARD_SYMBOL_COUNT = changeableCardCount / 2;
            for (var colorIndex = 0; colorIndex < 2; ++colorIndex) {
                var color = (colorIndex * 2).toString();
                for (var changeableCardLoop = 0; changeableCardLoop < CHANGEABLE_CARD_SYMBOL_COUNT; ++changeableCardLoop) {
                    var char = CHANGEABLE_CARD_ARRAY[changeableCardLoop];
                    CHARS.push(char);
                    CENTER_TEXTS.push(centerText);
                    COLORS.push(color);
                    _this.computedData.isCenters.push(isCenters);
                }
            }
            var arrayLength = ((includeZero ? 1 : 0) + NORMAL_CARD_ARRAY.length) * DECOR_COUNT *
                normalCardTimes +
                changeableCardCount;
            var countNotSameBackCoverIncrease = wholePage
                ? countPerPage * Math.ceil(arrayLength / countPerPage)
                : arrayLength;
            var appendCount = countNotSameBackCoverIncrease - arrayLength;
            pushSameValueTimes(CHARS, "", appendCount);
            pushSameValueTimes(CENTER_TEXTS, centerText, appendCount);
            pushSameValueTimes(COLORS, "", appendCount);
            pushSameValueTimes(_this.computedData.isCenters, isCenters, appendCount);
            pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
            return countNotSameBackCoverIncrease;
        };
        return _this;
    }
    return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("8", false);

