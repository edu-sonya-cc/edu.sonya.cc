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

var MathPokerKind;
(function (MathPokerKind) {
    MathPokerKind[MathPokerKind["none"] = 0] = "none";
    MathPokerKind[MathPokerKind["tens"] = 1] = "tens";
    MathPokerKind[MathPokerKind["oneToFive"] = 2] = "oneToFive";
    MathPokerKind[MathPokerKind["zeroToNine"] = 4] = "zeroToNine";
    MathPokerKind[MathPokerKind["zeroToTwentyAndFourSymbols"] = 8] = "zeroToTwentyAndFourSymbols";
    MathPokerKind[MathPokerKind["oneToHundred"] = 16] = "oneToHundred";
})(MathPokerKind || (MathPokerKind = {}));
var MathPokerKindCount = 5;
var DefaultMathPokerKind = 31;
var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, {
            pokerWidth: 40,
            pokerHeight: 56,
            pokerKind: DefaultMathPokerKind,
            tensCenterTextShowed: false
        }, {
            count: 0,
            chars: [],
            backCovers: [],
            centerTexts: [],
            colors: [],
            pokerCss: "page.forePage div{display:inline-flex;font-size:0.5em;justify-content:space-between;flex:100%;width:70%;height:100%;line-height:1em;}"
        }) || this;
        _this.getForePageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, tensCenterTextShowed = _b.tensCenterTextShowed, _c = _a.computedData, COUNT = _c.count, CHARS = _c.chars, CENTER_TEXTS = _c.centerTexts, COLORS = _c.colors;
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
                            var char = CHARS[symbolIndex] || "_";
                            var color = COLORS[symbolIndex] || "-1";
                            html +=
                                TOP_START + "<text class=\"top-left\" edu-color=\"" + color + "\">" + char + TEXT_END + TOP_END;
                            if (tensCenterTextShowed) {
                                html += "" + CENTER_START + (CENTER_TEXTS[symbolIndex] ||
                                    "") + CENTER_END;
                            }
                            html +=
                                BOTTOM_START + "<text class=\"bottom-right\" edu-color=\"" + color + "\">" + char + TEXT_END + BOTTOM_END;
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
        _this.TENS_ARRAY = "1,1,1,1,2,3,4,5,6,7,8,9".split(",");
        _this.TENS_TIMES = 4;
        _this.TENS_CENTER_TEXT = "<div><span><p>&nbsp;10&nbsp;</p><p>=1+9</p><p>=2+8</p><p>=3+7</p><p>=4+6</p><p>=5+5</p><p>&nbsp;</p></span><span><p>&nbsp;20&nbsp;&nbsp;&nbsp;</p><p>=2+9+9</p><p>=3+8+9</p><p>=4+8+8</p><p>=4+7+9</p><p>=5+6+9</p><p>=5+7+8</p></span></div>";
        _this.ONE_TO_FIVE_ARRAY = "1,2,3,4,5".split(",");
        _this.ONE_TO_FIVE_TIMES = 5;
        _this.ONE_TO_FIVE_CENTER_TEXT = "";
        _this.ZERO_TO_NINE_ARRAY = "0,1,2,3,4,5,6,7,8,9".split(",");
        _this.ZERO_TO_NINE_TIMES = 9;
        _this.ZERO_TO_NINE_CENTER_TEXT = "";
        _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY = getNumbersArray(0, 20).concat([
            "+",
            "-",
            "×",
            "÷",
        ]);
        _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES = 3;
        _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT = "";
        _this.ONE_TO_HUNDRED_ARRAY = getNumbersArray(1, 100);
        _this.ONE_TO_HUNDRED_TIMES = 4;
        _this.ONE_TO_HUNDRED_CENTER_TEXT = "";
        _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
            if (pokerKind === 0)
                pokerKind = DefaultMathPokerKind;
            var en = FILENAME_POSTFIX + "Math Poker";
            var zh_cn = FILENAME_POSTFIX + "\u6570\u5B66\u6251\u514B";
            var zh_tw = FILENAME_POSTFIX + "\u6578\u5B78\u64B2\u514B";
            var enBackCover = en.split("_").join("<br />");
            var zh_cnBackCover = zh_cn.split("_").join("<br />");
            var zh_twBackCover = zh_tw.split("_").join("<br />");
            var enArray = [];
            var enFullArray = [];
            var zh_cnArray = [];
            var zh_twArray = [];
            var backCover = "";
            var title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
            var CENTER_TEXTS = [];
            var BACK_COVERS = [];
            var CHARS = [];
            var COLORS = [];
            var count = 0;
            if (MathPokerKind.tens === (MathPokerKind.tens & pokerKind)) {
                enArray.push("tens");
                count += _this.countIt("1-9 make up ten", "1-9凑十", "1-9凑十", _this.TENS_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, _this.TENS_TIMES, _this.TENS_CENTER_TEXT, COLORS);
            }
            if (MathPokerKind.oneToFive === (MathPokerKind.oneToFive & pokerKind)) {
                enArray.push("oneToFive");
                count += _this.countIt("1-5", "1-5", "1-5", _this.ONE_TO_FIVE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, _this.ONE_TO_FIVE_TIMES, _this.ONE_TO_FIVE_CENTER_TEXT, COLORS);
            }
            if (MathPokerKind.zeroToNine === (MathPokerKind.zeroToNine & pokerKind)) {
                enArray.push("zeroToNine");
                count += _this.countIt("0-9", "0-9", "0-9", _this.ZERO_TO_NINE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, _this.ZERO_TO_NINE_TIMES, _this.ZERO_TO_NINE_CENTER_TEXT, COLORS);
            }
            if (MathPokerKind.zeroToTwentyAndFourSymbols ===
                (MathPokerKind.zeroToTwentyAndFourSymbols & pokerKind)) {
                enArray.push("zeroToTwentyAndFourSymbols");
                count += _this.countIt("0-20+-×÷", "0-20+-×÷", "0-20+-×÷", _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES, _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT, COLORS);
            }
            if (MathPokerKind.oneToHundred === (MathPokerKind.oneToHundred & pokerKind)) {
                enArray.push("oneToHundred");
                count += _this.countIt("1-100", "1-100", "1-100", _this.ONE_TO_HUNDRED_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, _this.ONE_TO_HUNDRED_TIMES, _this.ONE_TO_HUNDRED_CENTER_TEXT, COLORS);
            }
            switch (enArray.length) {
                case 0:
                    backCover = getI18nInnerHTML({
                        en: enBackCover,
                        zh_cn: zh_cnBackCover,
                        zh_tw: zh_twBackCover
                    });
                    break;
                case 1:
                    var enFirstItem = enArray[0];
                    var zh_cnFirstItem = zh_cnArray[0];
                    var zh_twFirstItem = zh_twArray[0];
                    backCover = getI18nInnerHTML({
                        en: enBackCover.concat("<br /><br />", enFirstItem),
                        zh_cn: zh_cnBackCover.concat("<br /><br />", zh_cnFirstItem),
                        zh_tw: zh_twBackCover.concat("<br /><br />", zh_twFirstItem)
                    });
                    title.en += "_".concat(enFullArray[0]);
                    title.zh_cn += "_".concat(zh_cnFirstItem);
                    title.zh_tw += "_".concat(zh_twFirstItem);
                    break;
                default:
                    if (enArray.length === MathPokerKindCount) {
                        backCover = getI18nInnerHTML({
                            en: enBackCover,
                            zh_cn: zh_cnBackCover,
                            zh_tw: zh_twBackCover
                        });
                        title.en += " Mixed_ALL";
                        title.zh_cn += "混合_所有";
                        title.zh_tw += "混合_所有";
                    }
                    else {
                        backCover = getI18nInnerHTML({
                            en: enBackCover.concat("<br /><br /><small>", enArray.join("<br />"), "</small>"),
                            zh_cn: zh_cnBackCover.concat("<br /><br /><small>", zh_cnArray.join("<br />"), "</small>"),
                            zh_tw: zh_twBackCover.concat("<br /><br /><small>", zh_twArray.join("<br />"), "</small>")
                        });
                        title.en += " Mixed_".concat(enFullArray.join("_"));
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
            if (MathPokerKind.tens === pokerKind) {
                pushSameValueTimes(_this.computedData.centerTexts, _this.TENS_CENTER_TEXT, _this.computedData.count - count);
            }
        };
        _this.updateOtherDataOfPoker = function (newData) {
            var pokerKind = newData.pokerKind;
            for (var pokerKindIndex = 0; pokerKindIndex < MathPokerKindCount; ++pokerKindIndex) {
                var pokerKindValue = Math.pow(2, pokerKindIndex);
                var checkboxElement = _this
                    .pokerKindElementArray[pokerKindIndex];
                checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
            }
            var tensCenterTextShowed = newData.tensCenterTextShowed;
            _this.tensCenterTextShowedElementArray.forEach(function (radioElement) {
                radioElement.checked =
                    tensCenterTextShowed === (radioElement.value === "true");
            });
            _this.data.tensCenterTextShowed = tensCenterTextShowed;
        };
        _this.initOtherElements = function () {
            var wrapElement = _this.getWrapElement({
                en: "Tens show tips",
                zh_cn: "凑十显示提示",
                zh_tw: "湊十顯示提示"
            });
            _this.initTensCenterTextShowedElements(wrapElement);
        };
        _this.initPokerKindElements = function (wrapElement) {
            var _a = _this, pokerKind = _a.data.pokerKind, pokerKindElementArray = _a.pokerKindElementArray;
            var pokerKindI18nHtmlArray = [
                getI18nInnerHTML({
                    en: "1-9 make up ten",
                    zh_cn: "1-9凑十",
                    zh_tw: "1-9凑十"
                }),
                getI18nInnerHTML({
                    en: "1-5",
                    zh_cn: "1-5",
                    zh_tw: "1-5"
                }),
                getI18nInnerHTML({
                    en: "0-9",
                    zh_cn: "0-9",
                    zh_tw: "0-9"
                }),
                getI18nInnerHTML({
                    en: "0-20+-×÷",
                    zh_cn: "0-20+-×÷",
                    zh_tw: "0-20+-×÷"
                }),
                getI18nInnerHTML({
                    en: "1-100",
                    zh_cn: "1-100",
                    zh_tw: "1-100"
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
            for (var pokerKindIndex = 0; pokerKindIndex < MathPokerKindCount; ++pokerKindIndex) {
                _loop_1(pokerKindIndex);
            }
        };
        _this.tensCenterTextShowedElementArray = [];
        _this.initTensCenterTextShowedElements = function (wrapElement) {
            var _a = _this, tensCenterTextShowed = _a.data.tensCenterTextShowed, tensCenterTextShowedElementArray = _a.tensCenterTextShowedElementArray;
            var i18nHtmlArray = [
                getI18nInnerHTML({
                    en: "Yes",
                    zh_cn: "是",
                    zh_tw: "是"
                }),
                getI18nInnerHTML({
                    en: "No",
                    zh_cn: "否",
                    zh_tw: "否"
                }),
            ];
            [true, false].forEach(function (tensCenterTextShowedValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "tensCenterTextShowed";
                radioElement.value = tensCenterTextShowedValue.toString();
                if (tensCenterTextShowed === tensCenterTextShowedValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtmlArray[tensCenterTextShowedValue ? 0 : 1];
                radioElement.onclick = function () {
                    _this.data.tensCenterTextShowed = tensCenterTextShowedValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                tensCenterTextShowedElementArray.push(radioElement);
            });
        };
        return _this;
    }
    BrickCore.prototype.countIt = function (enAppend, zh_cnAppend, zh_twAppend, charsArray, enFullArray, zh_cnArray, zh_twArray, en, zh_cn, zh_tw, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, times, centerText, COLORS) {
        enFullArray.push(enAppend);
        zh_cnArray.push(zh_cnAppend);
        zh_twArray.push(zh_twAppend);
        var notSameBackCover = getI18nInnerHTML({
            en: en.concat("<br /><small>", enAppend, "</small>"),
            zh_cn: zh_cn.concat("<br />", zh_cnAppend),
            zh_tw: zh_tw.concat("<br />", zh_twAppend)
        });
        var _loop_2 = function (i) {
            var color = (i + 1).toString();
            charsArray.forEach(function (char) {
                CHARS.push(char);
                CENTER_TEXTS.push(centerText);
                COLORS.push(color);
            });
        };
        for (var i = 0; i < times; ++i) {
            _loop_2(i);
        }
        var arrayLength = charsArray.length * times;
        var countNotSameBackCoverIncrease = arrayLength;
        pushSameValueTimes(CHARS, "", countNotSameBackCoverIncrease - arrayLength);
        pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
        return countNotSameBackCoverIncrease;
    };
    return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("7", false);

