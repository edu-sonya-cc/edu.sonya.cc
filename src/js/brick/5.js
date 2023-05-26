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

var PinyinPokerKind;
(function (PinyinPokerKind) {
    PinyinPokerKind[PinyinPokerKind["none"] = 0] = "none";
    PinyinPokerKind[PinyinPokerKind["initials"] = 1] = "initials";
    PinyinPokerKind[PinyinPokerKind["finals"] = 2] = "finals";
    PinyinPokerKind[PinyinPokerKind["overallRecognition"] = 4] = "overallRecognition";
    PinyinPokerKind[PinyinPokerKind["threeSyllablesAndTone"] = 8] = "threeSyllablesAndTone";
    PinyinPokerKind[PinyinPokerKind["simpleFinalWithTone"] = 16] = "simpleFinalWithTone";
})(PinyinPokerKind || (PinyinPokerKind = {}));
var PinyinPokerKindCount = 5;
var DefaultPinyinPokerKind = 31;
var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, {
            pokerWidth: 40,
            pokerHeight: 56,
            pokerKind: DefaultPinyinPokerKind,
            useSameBackCover: true
        }, {
            chars: [],
            charsNotSameBackCover: [],
            countNotSameBackCover: 0,
            backCoversWhenNotSame: [],
            pokerCss: "\n      page.forePage{font-family:'KaiTi';}\n      .kaiti{font-family:kaiti;}\n      .normal-weight {font-weight:normal; }\n      "
        }) || this;
        _this.getForePageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, useSameBackCover = _b.useSameBackCover, _c = _a.computedData, count = _c.count, chars = _c.chars, charsNotSameBackCover = _c.charsNotSameBackCover, countNotSameBackCover = _c.countNotSameBackCover;
            var COUNT = useSameBackCover ? count : countNotSameBackCover;
            var CHARS = [];
            (useSameBackCover ? chars : charsNotSameBackCover).forEach(function (char) {
                return CHARS.push(char);
            });
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var PAGE_START = "<page class=\"forePage " + paperSize + "\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var TOP_START = "<top>", TOP_END = "</top>";
            var BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
            var TEXT_END = "</text>";
            var TEXT_START_TOP_LEFT = '<text class="top-left">';
            var TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
            var TEXT_START_TOP_LEFT_USE_KAITI = '<text class="top-left kaiti">';
            var TEXT_START_BOTTOM_RIGHT_USE_KAITI = '<text class="bottom-right kaiti">';
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
                            var char = CHARS[symbolIndex] || "";
                            var useKaiti = "ˉ,ˊ,ˇ,ˋ".indexOf(char) > -1;
                            html += TOP_START.concat(useKaiti ? TEXT_START_TOP_LEFT_USE_KAITI : TEXT_START_TOP_LEFT, char, TEXT_END, TOP_END);
                            html += BOTTOM_START.concat(useKaiti
                                ? TEXT_START_BOTTOM_RIGHT_USE_KAITI
                                : TEXT_START_BOTTOM_RIGHT, char, TEXT_END, BOTTOM_END);
                        }
                        html += CELL_END;
                        ++symbolIndex;
                    }
                    html += ROW_END;
                }
                html += PAGE_END;
            }
            return html
                .replace(/ü/gi, '<font style="font-size:0.9em;position:relative;top:-0.05em;font-weight:bold;">ü</font>')
                .replace(/([āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ])/gi, '<font class="kaiti normal-weight">$1</font>');
        };
        _this.getBackPageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, useSameBackCover = _b.useSameBackCover, _c = _a.computedData, COVER = _c.backCover, count = _c.count, countNotSameBackCover = _c.countNotSameBackCover, backCoversWhenNotSame = _c.backCoversWhenNotSame;
            var COUNT = useSameBackCover ? count : countNotSameBackCover;
            var PAGE_START = "<page class=\"backPage " + paperSize + "\" dir=\"rtl\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var CENTER_START = "<center>", CENTER_END = "</center>";
            var MAX_SYMBOL_INDEX = COUNT - 1;
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
                            html += CENTER_START.concat(useSameBackCover ? COVER : backCoversWhenNotSame[symbolIndex], CENTER_END);
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
        _this.INITIAL_ARRAY = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,"
            .split(",");
        _this.VOWEL_ARRAY = "a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong"
            .split(",");
        _this.OVERALL_READING_ARRAY = "zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying".split(",");
        _this.THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY = "ia,ua,uo,uai,iao,ian,iang,uan,uang,iong,üan,ˉ,ˊ,ˇ,ˋ,ˉ,ˊ,ˇ,ˋ,".split(",");
        _this.SINGLE_VOWEL_WITH_TONE_ARRAY = "a,ā,á,ǎ,à,o,ō,ó,ǒ,ò,e,ē,é,ě,è,i,ī,í,ǐ,ì,u,ū,ú,ǔ,ù,ü,ǖ,ǘ,ǚ,ǜ".replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(",");
        _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
            if (pokerKind === 0)
                pokerKind = DefaultPinyinPokerKind;
            var en = FILENAME_POSTFIX + "Pinyin Poker";
            var zh_cn = FILENAME_POSTFIX + "\u62FC\u97F3\u6251\u514B";
            var zh_tw = FILENAME_POSTFIX + "\u62FC\u97F3\u64B2\u514B";
            var enBackCover = en.split("_").join("<br />");
            var zh_cnBackCover = zh_cn.split("_").join("<br />");
            var zh_twBackCover = zh_tw.split("_").join("<br />");
            var enArray = [];
            var enFullArray = [];
            var zh_cnArray = [];
            var zh_twArray = [];
            var backCover = "";
            var title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
            var CHARS = [];
            var BACK_COVERS = [];
            var CHARS_NOT_SAME_BACK_COVER = [];
            var countNotSameBackCover = 0;
            if (PinyinPokerKind.initials === (PinyinPokerKind.initials & pokerKind)) {
                enArray.push("initials");
                countNotSameBackCover += _this.countIt("Initials", "声母", "聲母", _this.INITIAL_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
            }
            if (PinyinPokerKind.finals === (PinyinPokerKind.finals & pokerKind)) {
                enArray.push("finals");
                countNotSameBackCover += _this.countIt("Finals", "韵母", "韻母", _this.VOWEL_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
            }
            if (PinyinPokerKind.overallRecognition ===
                (PinyinPokerKind.overallRecognition & pokerKind)) {
                enArray.push("overallRecognition");
                countNotSameBackCover += _this.countIt("Overall recognition", "整体认读", "整體認讀", _this.OVERALL_READING_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
            }
            if (PinyinPokerKind.threeSyllablesAndTone ===
                (PinyinPokerKind.threeSyllablesAndTone & pokerKind)) {
                enArray.push("threeSyllablesAndTone");
                countNotSameBackCover += _this.countIt("Three syllables and tone", "三拼音节与声调", "三拼音節與聲調", _this.THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
            }
            if (PinyinPokerKind.simpleFinalWithTone ===
                (PinyinPokerKind.simpleFinalWithTone & pokerKind)) {
                enArray.push("simpleFinalWithTone");
                countNotSameBackCover += _this.countIt("Simple final with tone", "带声调单韵母", "帶聲調單韻母", _this.SINGLE_VOWEL_WITH_TONE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
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
                    if (enArray.length === PinyinPokerKindCount) {
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
            _this.computedData.count = Math.ceil(CHARS.length / countPerPage) *
                countPerPage;
            _this.computedData.title = title;
            _this.computedData.chars = CHARS;
            _this.computedData.charsNotSameBackCover = CHARS_NOT_SAME_BACK_COVER;
            _this.computedData.countNotSameBackCover = countNotSameBackCover;
            _this.computedData.backCoversWhenNotSame = BACK_COVERS;
        };
        _this.updateOtherDataOfPoker = function (newData) {
            var pokerKind = newData.pokerKind, useSameBackCover = newData.useSameBackCover;
            for (var pokerKindIndex = 0; pokerKindIndex < PinyinPokerKindCount; ++pokerKindIndex) {
                var pokerKindValue = Math.pow(2, pokerKindIndex);
                var checkboxElement = _this
                    .pokerKindElementArray[pokerKindIndex];
                checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
            }
            _this.useSameBackCoverElementArray.forEach(function (radioElement) {
                radioElement.checked =
                    useSameBackCover === (radioElement.value === "true");
            });
        };
        _this.initOtherElements = function () {
            var wrapElement = _this.getWrapElement({
                en: "Use Same Back Cover",
                zh_cn: "统一背面",
                zh_tw: "統一背面"
            });
            _this.initUseSameBackCoverElements(wrapElement);
        };
        _this.initPokerKindElements = function (wrapElement) {
            var _a = _this, pokerKind = _a.data.pokerKind, pokerKindElementArray = _a.pokerKindElementArray;
            var pokerKindI18nHtmlArray = [
                getI18nInnerHTML({
                    en: "Initials",
                    zh_cn: "声母",
                    zh_tw: "聲母"
                }),
                getI18nInnerHTML({
                    en: "Finals",
                    zh_cn: "韵母",
                    zh_tw: "韻母"
                }),
                getI18nInnerHTML({
                    en: "Overall recognition and tone",
                    zh_cn: "整体认读与声调",
                    zh_tw: "整體認讀與聲調"
                }),
                getI18nInnerHTML({
                    en: "Three syllables",
                    zh_cn: "三拼音节",
                    zh_tw: "三拼音節"
                }),
                getI18nInnerHTML({
                    en: "Simple final with tone",
                    zh_cn: "带声调单韵母",
                    zh_tw: "帶聲調單韻母"
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
            for (var pokerKindIndex = 0; pokerKindIndex < PinyinPokerKindCount; ++pokerKindIndex) {
                _loop_1(pokerKindIndex);
            }
        };
        _this.useSameBackCoverElementArray = [];
        _this.initUseSameBackCoverElements = function (wrapElement) {
            var _a = _this, useSameBackCover = _a.data.useSameBackCover, useSameBackCoverElementArray = _a.useSameBackCoverElementArray;
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
            [true, false].forEach(function (useSameBackCoverValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "useSameBackCover";
                radioElement.value = useSameBackCoverValue.toString();
                if (useSameBackCover === useSameBackCoverValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtmlArray[useSameBackCoverValue ? 0 : 1];
                radioElement.onclick = function () {
                    _this.data.useSameBackCover = useSameBackCoverValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                useSameBackCoverElementArray.push(radioElement);
            });
        };
        return _this;
    }
    BrickCore.prototype.countIt = function (enAppend, zh_cnAppend, zh_twAppend, charsArray, enFullArray, zh_cnArray, zh_twArray, en, zh_cn, zh_tw, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS) {
        enFullArray.push(enAppend);
        zh_cnArray.push(zh_cnAppend);
        zh_twArray.push(zh_twAppend);
        var notSameBackCover = getI18nInnerHTML({
            en: en.concat("<br /><small>", enAppend, "</small>"),
            zh_cn: zh_cn.concat("<br />", zh_cnAppend),
            zh_tw: zh_tw.concat("<br />", zh_twAppend)
        });
        charsArray.forEach(function (char) {
            CHARS.push(char);
            CHARS_NOT_SAME_BACK_COVER.push(char);
        });
        var arrayLength = charsArray.length;
        var countNotSameBackCoverIncrease = countPerPage *
            Math.ceil(arrayLength / countPerPage);
        pushSameValueTimes(CHARS_NOT_SAME_BACK_COVER, "", countNotSameBackCoverIncrease - arrayLength);
        pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
        return countNotSameBackCoverIncrease;
    };
    return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("5", false);

