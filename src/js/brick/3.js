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

var EnglishLettersPokerKind;
(function (EnglishLettersPokerKind) {
    EnglishLettersPokerKind[EnglishLettersPokerKind["none"] = 0] = "none";
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyLowerCase"] = 1] = "onlyLowerCase";
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyUpperCase"] = 2] = "onlyUpperCase";
    EnglishLettersPokerKind[EnglishLettersPokerKind["both"] = 3] = "both";
    EnglishLettersPokerKind[EnglishLettersPokerKind["kk1"] = 4] = "kk1";
    EnglishLettersPokerKind[EnglishLettersPokerKind["kk2"] = 8] = "kk2";
})(EnglishLettersPokerKind || (EnglishLettersPokerKind = {}));
var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, { pokerKind: EnglishLettersPokerKind.onlyLowerCase }, {}) || this;
        _this.POKER_COUNT = 26;
        _this.getForePageHtml = function () {
            var _a = _this.data, paperSize = _a.paperSize, MAX_X = _a.maxX, MAX_Y = _a.maxY, CARD_WIDTH = _a.pokerWidth, CARD_HEIGHT = _a.pokerHeight, pokerKind = _a.pokerKind;
            var LOWERCASE_ARRAY = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
            var UPPERCASE_ARRAY = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
            var KK_ARRAY = "i,ɪ,e,ɛ,æ,ɑ,ɑr,ɔ,ɔr,ɔɪ,o,u,ᴜ,ᴜr,ʌ,ə,ɝ,ɚ,aɪ,aᴜ,ɛr,ɪr,ɪə,iə,p,b,t,d,k,ɡ,f,v,θ,ð,s,z,ʃ,ʒ,tʃ,dʒ,m,n,ŋ,l,r,j,h,w".split(",");
            var KK_ARRAY_2 = KK_ARRAY.map(function (c) { return "/" + c + "/"; });
            var IS_KK = pokerKind >= EnglishLettersPokerKind.kk1;
            var IS_KK_2 = pokerKind >= EnglishLettersPokerKind.kk2;
            var COUNT = IS_KK ? KK_ARRAY.length : _this.computedData.count;
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var PAGE_START = "<page class=\"forePage " + paperSize + "\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var TOP_START = "<top>", TOP_END = "</top>";
            var BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
            var TEXT_END = "</text>";
            var TEXT_START_TOP_LEFT = '<text class="top-left">';
            var TEXT_START_BOTTOM_LEFT = '<text class="bottom-left">';
            var TEXT_START_TOP_RIGHT = '<text class="top-right">';
            var TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
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
                            var LOWERCASE = (IS_KK ? (IS_KK_2 ? KK_ARRAY_2[symbolIndex] : KK_ARRAY[symbolIndex]) : LOWERCASE_ARRAY[symbolIndex]) || "";
                            var UPPERCASE = (IS_KK ? '' : UPPERCASE_ARRAY[symbolIndex]) || "";
                            switch (pokerKind) {
                                case EnglishLettersPokerKind.onlyLowerCase:
                                case EnglishLettersPokerKind.kk1:
                                case EnglishLettersPokerKind.kk2:
                                    html += TOP_START.concat(TEXT_START_TOP_LEFT, LOWERCASE, TEXT_END, TOP_END);
                                    html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, LOWERCASE, TEXT_END, BOTTOM_END);
                                    break;
                                case EnglishLettersPokerKind.onlyUpperCase:
                                    html += TOP_START.concat(TEXT_START_TOP_LEFT, UPPERCASE, TEXT_END, TOP_END);
                                    html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, UPPERCASE, TEXT_END, BOTTOM_END);
                                    break;
                                case EnglishLettersPokerKind.both:
                                    html += TOP_START.concat(TEXT_START_TOP_LEFT, LOWERCASE, TEXT_END, TEXT_START_TOP_RIGHT, UPPERCASE, TEXT_END, TOP_END);
                                    html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, LOWERCASE, TEXT_END, TEXT_START_BOTTOM_LEFT, UPPERCASE, TEXT_END, BOTTOM_END);
                                    break;
                                default:
                                    break;
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
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, MAX_X = _b.maxX, MAX_Y = _b.maxY, CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, _c = _a.computedData, COVER = _c.backCover, COUNT = _c.count;
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
                            html += CENTER_START.concat(COVER, CENTER_END);
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
        _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
            var backCover = "";
            var title = { en: "", zh_cn: "", zh_tw: "" };
            switch (pokerKind) {
                case EnglishLettersPokerKind.onlyLowerCase:
                    backCover = "a-z<br /><br />" + getI18nInnerHTML({
                        en: "English Letters",
                        zh_cn: "英语小写字母",
                        zh_tw: "英語小寫字母"
                    });
                    title.en = FILENAME_POSTFIX + "English Letters_a-z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5C0F\u5199\u5B57\u6BCD_a-z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5C0F\u5BEB\u5B57\u6BCD_a-z";
                    break;
                case EnglishLettersPokerKind.onlyUpperCase:
                    backCover = "A-Z<br /><br />" + getI18nInnerHTML({
                        en: "English Letters",
                        zh_cn: "英语大写字母",
                        zh_tw: "英語大寫字母"
                    });
                    title.en = FILENAME_POSTFIX + "English Letters_A-Z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5927\u5199\u5B57\u6BCD_A-Z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5927\u5BEB\u5B57\u6BCD_A-Z";
                    break;
                case EnglishLettersPokerKind.both:
                    backCover = "a-z & A-Z<br /><br />" + getI18nInnerHTML({
                        en: "English Letters",
                        zh_cn: "英语字母<br />（大小写）",
                        zh_tw: "英語字母<br />（大小寫）"
                    });
                    title.en = FILENAME_POSTFIX + "English Letters_a-z&A-Z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5B57\u6BCD\uFF08\u5927\u5C0F\u5199\uFF09_a-z&A-Z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5B57\u6BCD\uFF08\u5927\u5C0F\u5BEB\uFF09_a-z&A-Z";
                    break;
                case EnglishLettersPokerKind.kk1:
                    backCover = "" + getI18nInnerHTML({
                        en: "KK<br />Phonetic<br />Symbols",
                        zh_cn: "KK音标<br />（扑克）",
                        zh_tw: "KK音標<br />（撲克）"
                    });
                    title.en = FILENAME_POSTFIX + "KK Phonetic Symbols Pokers";
                    title.zh_cn = FILENAME_POSTFIX + "KK\u97F3\u6807\u6251\u514B";
                    title.zh_tw = FILENAME_POSTFIX + "KK\u97F3\u6807\u64B2\u514B";
                    break;
                case EnglishLettersPokerKind.kk2:
                    backCover = "" + getI18nInnerHTML({
                        en: "KK<br />Phonetic<br />Symbols<br />with Bias",
                        zh_cn: "KK音标2<br />（扑克）<br />带斜线",
                        zh_tw: "KK音標2<br />（撲克）<br />帶斜線"
                    });
                    title.en = FILENAME_POSTFIX + "KK Phonetic Symbols Pokers with Bias";
                    title.zh_cn = FILENAME_POSTFIX + "KK\u97F3\u6807\u6251\u514B2";
                    title.zh_tw = FILENAME_POSTFIX + "KK\u97F3\u6807\u64B2\u514B2";
                    break;
                default:
                    break;
            }
            _this.computedData.backCover = backCover;
            _this.computedData.count = Math.ceil(_this.POKER_COUNT / countPerPage) *
                countPerPage;
            _this.computedData.title = title;
        };
        _this.initPokerKindElements = function (wrapElement) {
            var _a = _this, pokerKind = _a.data.pokerKind, pokerKindElementArray = _a.pokerKindElementArray;
            var pokerKindI18nHtmlArray = [
                getI18nInnerHTML({
                    en: "Only lowercase letters",
                    zh_cn: "仅小写字母",
                    zh_tw: "僅小寫字母"
                }),
                getI18nInnerHTML({
                    en: "Only uppercase letters",
                    zh_cn: "仅大写字母",
                    zh_tw: "僅大寫字母"
                }),
                getI18nInnerHTML({
                    en: "Both",
                    zh_cn: "两者都有",
                    zh_tw: "兩者都有"
                }),
                getI18nInnerHTML({
                    en: "KK1",
                    zh_cn: "KK音标",
                    zh_tw: "KK音标"
                }),
                getI18nInnerHTML({
                    en: "KK2",
                    zh_cn: "KK音标带斜线",
                    zh_tw: "KK音标帶斜線"
                }),
            ];
            [1, 2, 3, 4, 8].forEach(function (pokerKindValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "pokerKind";
                radioElement.value = pokerKindValue.toString();
                if (pokerKind === pokerKindValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = pokerKindValue > 4 ? pokerKindI18nHtmlArray[Math.log2(pokerKindValue) + 1] : pokerKindI18nHtmlArray[pokerKindValue - 1];
                radioElement.onclick = function () {
                    _this.data.pokerKind = pokerKindValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                pokerKindElementArray.push(radioElement);
            });
        };
        return _this;
    }
    return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("3", false);

