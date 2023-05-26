/**
 * <en>
 * Function: Generate Math Poker
 * Initial: 2021-10-04 Anqi
 * History: On November 2, 2022
 * Function: generate mathematical poker
 * Reference: skipped
 * Description: 1-9 (default), 1-5, 0-9, 0-20+- × ÷、1-100
 * </en>
 *
 * <zh_cn>
 * 功能：生成数学扑克
 * 初建：2021-10-04 安启
 * 历史：2022-11-02 安启 归档
 * 参考：
 *       2021-10-04 安启 P:\0\000007\_学习\数学\数学扑克\数字0-20加减大于小于.htm
 *       2021-10-04 安启 P:\0\000007\_学习\数学\数学扑克\数字0-24.htm
 *       2022-10-05 安启 P:\0\000007\_学习\数学\数学扑克\*1-9凑十专用扑克.htm
 * 说明：1-9凑十、1-5、0-9、0-20+-×÷、1-100
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成數學撲克
 * 初建：2021-10-04安啟
 * 歷史：2022-11-02安啟歸檔
 * 參攷：
 *  		 2021-10-04 安啟 P:\0\000007\_學習\數學\數學撲克\數位0-20加减大於小於.htm
 *  		 2021-10-04 安啟 P:\0\000007\_學習\數學\數學撲克\數位0-24.htm
 *  		 2022-10-05 安啟 P:\0\000007\_學習\數學\數學撲克\*1-9凑十專用撲克.htm
 * 說明：1-9凑十、1-5、0-9、0-20+-×÷、1-100
 * </zh_tw>
 */
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { global } from '../global.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
"use strict";
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/**
 * <en>Mathematical Poker Type</en>
 * <zh_cn>数学扑克类型</zh_cn>
 * <zh_tw>數學撲克類型</zh_tw>
 */
var MathPokerKind;
(function (MathPokerKind) {
  /**
     * <en></en>
     * <zh_cn></zh_cn>
     * <zh_tw></zh_tw>
     */
  MathPokerKind[MathPokerKind["none"] = 0] = "none";
  /**
     * <en>1-9 make up ten</en>
     * <zh_cn>1-9凑十</zh_cn>
     * <zh_tw>1-9凑十</zh_tw>
     */
  MathPokerKind[MathPokerKind["tens"] = 1] = "tens";
  /**
     * <en>1-5</en>
     * <zh_cn>1-5</zh_cn>
     * <zh_tw>1-5</zh_tw>
     */
  MathPokerKind[MathPokerKind["oneToFive"] = 2] = "oneToFive";
  /**
     * <en>0-9</en>
     * <zh_cn>0-9</zh_cn>
     * <zh_tw>0-9</zh_tw>
     */
  MathPokerKind[MathPokerKind["zeroToNine"] = 4] = "zeroToNine";
  /**
     * <en>0-20+-×÷</en>
     * <zh_cn>0-20+-×÷</zh_cn>
     * <zh_tw>0-20+-×÷</zh_tw>
     */
  MathPokerKind[MathPokerKind["zeroToTwentyAndFourSymbols"] = 8] =
    "zeroToTwentyAndFourSymbols";
  /**
     * <en>1-100</en>
     * <zh_cn>1-100</zh_cn>
     * <zh_tw>1-100</zh_tw>
     */
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
      tensCenterTextShowed: false,
    }, {
      count: 0,
      chars: [],
      backCovers: [],
      centerTexts: [],
      colors: [],
      pokerCss:
        "page.forePage div{display:inline-flex;font-size:0.5em;justify-content:space-between;flex:100%;width:70%;height:100%;line-height:1em;}",
    }) || this;
    _this.getForePageHtml = function () {
      var _a = _this,
        _b = _a.data,
        paperSize = _b.paperSize,
        // isLandscape,
        MAX_X = _b.maxX,
        MAX_Y = _b.maxY,
        // pageMarginTop,
        // pageMarginBottom,
        // pageMarginLeft,
        // pageMarginRight,
        CARD_WIDTH = _b.pokerWidth,
        CARD_HEIGHT = _b.pokerHeight,
        // fontSize,
        // backFontSize
        // pokerKind,
        tensCenterTextShowed = _b.tensCenterTextShowed,
        _c = _a.computedData,
        COUNT = _c.count,
        CHARS = _c.chars,
        // backCovers: [],
        CENTER_TEXTS = _c.centerTexts,
        COLORS = _c.colors;
      var MAX_SYMBOL_INDEX = COUNT - 1;
      var PAGE_START = '<page class="forePage ' + paperSize + '">',
        PAGE_END = "</page>";
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
              var char = CHARS[symbolIndex] || "_"; // ○
              var color = COLORS[symbolIndex] || "-1";
              html += TOP_START + '<text class="top-left" edu-color="' + color +
                '">' + char + TEXT_END + TOP_END;
              if (tensCenterTextShowed) {
                html += "" + CENTER_START + (CENTER_TEXTS[symbolIndex] || "") +
                  CENTER_END;
              }
              html += BOTTOM_START + '<text class="bottom-right" edu-color="' +
                color + '">' + char + TEXT_END + BOTTOM_END;
            }
            html += CELL_END;
            ++symbolIndex;
          }
          html += ROW_END;
        }
        html += PAGE_END;
      }
      return html; // .replace(/ü/gi, '<font style="font-size:0.9em;position:relative;top:-0.05em;font-weight:bold;">ü</font>')
      // .replace(/([āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ])/gi, '<font class="kaiti normal-weight">$1</font>')
    };
    _this.getBackPageHtml = function () {
      var _a = _this,
        _b = _a.data,
        paperSize = _b.paperSize,
        // isLandscape,
        MAX_X = _b.maxX,
        MAX_Y = _b.maxY,
        // pageMarginTop,
        // pageMarginBottom,
        // pageMarginLeft,
        // pageMarginRight,
        CARD_WIDTH = _b.pokerWidth,
        CARD_HEIGHT = _b.pokerHeight,
        _c = _a.computedData,
        COUNT = _c.count,
        // chars: CHARS,
        BACK_COVERS = _c.backCovers;
      var PAGE_START = '<page class="backPage ' + paperSize + '" dir="rtl">',
        PAGE_END = "</page>";
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
              html += CENTER_START.concat(
                BACK_COVERS[symbolIndex] || lastItem,
                CENTER_END,
              );
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
    /**
         * <en>Array: 1-9 make up ten</en>
         * <zh_cn>数组：1-9凑十</zh_cn>
         * <zh_tw>數組：1-9凑十</zh_tw>
         */
    _this.TENS_ARRAY = "1,1,1,1,2,3,4,5,6,7,8,9".split(",");
    /**
         * <en>Times of 1-9 make up ten</en>
         * <zh_cn>份数：1-9凑十</zh_cn>
         * <zh_tw>份數：1-9凑十</zh_tw>
         */
    _this.TENS_TIMES = 4;
    /**
         * <en>Tips of 1-9 make up ten</en>
         * <zh_cn>提示：1-9凑十</zh_cn>
         * <zh_tw>提示：1-9凑十</zh_tw>
         */
    _this.TENS_CENTER_TEXT =
      "<div><span><p>&nbsp;10&nbsp;</p><p>=1+9</p><p>=2+8</p><p>=3+7</p><p>=4+6</p><p>=5+5</p><p>&nbsp;</p></span><span><p>&nbsp;20&nbsp;&nbsp;&nbsp;</p><p>=2+9+9</p><p>=3+8+9</p><p>=4+8+8</p><p>=4+7+9</p><p>=5+6+9</p><p>=5+7+8</p></span></div>";
    /**
         * <en>Array: 1-5</en>
         * <zh_cn>数组：1-5</zh_cn>
         * <zh_tw>數組：1-5</zh_tw>
         */
    _this.ONE_TO_FIVE_ARRAY = "1,2,3,4,5".split(",");
    /**
         * <en>Times of 1-5</en>
         * <zh_cn>份数：1-5</zh_cn>
         * <zh_tw>份數：1-5</zh_tw>
         */
    _this.ONE_TO_FIVE_TIMES = 5;
    /**
         * <en>Tips of 1-5</en>
         * <zh_cn>提示：1-5</zh_cn>
         * <zh_tw>提示：1-5</zh_tw>
         */
    _this.ONE_TO_FIVE_CENTER_TEXT = "";
    /**
         * <en>Array: 0-9</en>
         * <zh_cn>数组：0-9</zh_cn>
         * <zh_tw>數組：0-9</zh_tw>
         */
    _this.ZERO_TO_NINE_ARRAY = "0,1,2,3,4,5,6,7,8,9".split(",");
    /**
         * <en>Times of 0-9</en>
         * <zh_cn>份数：0-9</zh_cn>
         * <zh_tw>份數：0-9</zh_tw>
         */
    _this.ZERO_TO_NINE_TIMES = 9;
    /**
         * <en>Tips of 0-9</en>
         * <zh_cn>提示：0-9</zh_cn>
         * <zh_tw>提示：0-9</zh_tw>
         */
    _this.ZERO_TO_NINE_CENTER_TEXT = "";
    /**
         * <en>Array: 0-20+-×÷</en>
         * <zh_cn>数组：0-20+-×÷</zh_cn>
         * <zh_tw>數組：0-20+-×÷</zh_tw>
         */
    _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY = getNumbersArray(0, 20).concat(
      [
        "+",
        "-",
        "×",
        "÷",
      ],
    );
    /**
         * <en>Times of 0-20+-×÷</en>
         * <zh_cn>份数：0-20+-×÷</zh_cn>
         * <zh_tw>份數：0-20+-×÷</zh_tw>
         */
    _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES = 3;
    /**
         * <en>Tips of 0-20+-×÷</en>
         * <zh_cn>提示：0-20+-×÷</zh_cn>
         * <zh_tw>提示：0-20+-×÷</zh_tw>
         */
    _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT = "";
    /**
         * <en>Array: 1-100</en>
         * <zh_cn>数组：1-100</zh_cn>
         * <zh_tw>數組：1-100</zh_tw>
         */
    _this.ONE_TO_HUNDRED_ARRAY = getNumbersArray(1, 100);
    /**
         * <en>Times of 1-100</en>
         * <zh_cn>份数：1-100</zh_cn>
         * <zh_tw>份數：1-100</zh_tw>
         */
    _this.ONE_TO_HUNDRED_TIMES = 4;
    /**
         * <en>Tips of 1-100</en>
         * <zh_cn>提示：1-100</zh_cn>
         * <zh_tw>提示：1-100</zh_tw>
         */
    _this.ONE_TO_HUNDRED_CENTER_TEXT = "";
    _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
      if (pokerKind === 0) {
        pokerKind = DefaultMathPokerKind;
      }
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
        count += _this.countIt(
          "1-9 make up ten",
          "1-9凑十",
          "1-9凑十",
          _this.TENS_ARRAY,
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CENTER_TEXTS,
          CHARS,
          countPerPage,
          BACK_COVERS,
          _this.TENS_TIMES,
          _this.TENS_CENTER_TEXT,
          COLORS,
        );
      }
      if (MathPokerKind.oneToFive === (MathPokerKind.oneToFive & pokerKind)) {
        enArray.push("oneToFive");
        count += _this.countIt(
          "1-5",
          "1-5",
          "1-5",
          _this.ONE_TO_FIVE_ARRAY,
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CENTER_TEXTS,
          CHARS,
          countPerPage,
          BACK_COVERS,
          _this.ONE_TO_FIVE_TIMES,
          _this.ONE_TO_FIVE_CENTER_TEXT,
          COLORS,
        );
      }
      if (MathPokerKind.zeroToNine === (MathPokerKind.zeroToNine & pokerKind)) {
        enArray.push("zeroToNine");
        count += _this.countIt(
          "0-9",
          "0-9",
          "0-9",
          _this.ZERO_TO_NINE_ARRAY,
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CENTER_TEXTS,
          CHARS,
          countPerPage,
          BACK_COVERS,
          _this.ZERO_TO_NINE_TIMES,
          _this.ZERO_TO_NINE_CENTER_TEXT,
          COLORS,
        );
      }
      if (
        MathPokerKind.zeroToTwentyAndFourSymbols ===
          (MathPokerKind.zeroToTwentyAndFourSymbols & pokerKind)
      ) {
        enArray.push("zeroToTwentyAndFourSymbols");
        count += _this.countIt(
          "0-20+-×÷",
          "0-20+-×÷",
          "0-20+-×÷",
          _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY,
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CENTER_TEXTS,
          CHARS,
          countPerPage,
          BACK_COVERS,
          _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES,
          _this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT,
          COLORS,
        );
      }
      if (
        MathPokerKind.oneToHundred === (MathPokerKind.oneToHundred & pokerKind)
      ) {
        enArray.push("oneToHundred");
        count += _this.countIt(
          "1-100",
          "1-100",
          "1-100",
          _this.ONE_TO_HUNDRED_ARRAY,
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CENTER_TEXTS,
          CHARS,
          countPerPage,
          BACK_COVERS,
          _this.ONE_TO_HUNDRED_TIMES,
          _this.ONE_TO_HUNDRED_CENTER_TEXT,
          COLORS,
        );
      }
      switch (enArray.length) {
        case 0:
          backCover = getI18nInnerHTML({
            en: enBackCover,
            zh_cn: zh_cnBackCover,
            zh_tw: zh_twBackCover,
          });
          break;
        case 1:
          var enFirstItem = enArray[0];
          var zh_cnFirstItem = zh_cnArray[0];
          var zh_twFirstItem = zh_twArray[0];
          backCover = getI18nInnerHTML({
            en: enBackCover.concat("<br /><br />", enFirstItem),
            zh_cn: zh_cnBackCover.concat("<br /><br />", zh_cnFirstItem),
            zh_tw: zh_twBackCover.concat("<br /><br />", zh_twFirstItem),
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
              zh_tw: zh_twBackCover,
            });
            title.en += " Mixed_ALL";
            title.zh_cn += "混合_所有";
            title.zh_tw += "混合_所有";
          } else {
            backCover = getI18nInnerHTML({
              en: enBackCover.concat(
                "<br /><br /><small>",
                enArray.join("<br />"),
                "</small>",
              ),
              zh_cn: zh_cnBackCover.concat(
                "<br /><br /><small>",
                zh_cnArray.join("<br />"),
                "</small>",
              ),
              zh_tw: zh_twBackCover.concat(
                "<br /><br /><small>",
                zh_twArray.join("<br />"),
                "</small>",
              ),
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
      // this.computedData.count = count;
      // this.computedData.count = Math.ceil(CHARS.length / countPerPage) * countPerPage;
      _this.computedData.count = Math.ceil(count / countPerPage) * countPerPage;
      _this.computedData.backCovers = BACK_COVERS;
      _this.computedData.centerTexts = CENTER_TEXTS;
      if (MathPokerKind.tens === pokerKind) {
        pushSameValueTimes(
          _this.computedData.centerTexts,
          _this.TENS_CENTER_TEXT,
          _this.computedData.count - count,
        );
      }
    };
    _this.updateOtherDataOfPoker = function (newData) {
      var pokerKind = newData.pokerKind;
      for (
        var pokerKindIndex = 0;
        pokerKindIndex < MathPokerKindCount;
        ++pokerKindIndex
      ) {
        var pokerKindValue = Math.pow(2, pokerKindIndex);
        var checkboxElement = _this
          .pokerKindElementArray[pokerKindIndex];
        checkboxElement.checked =
          (pokerKind & pokerKindValue) === pokerKindValue;
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
        zh_tw: "湊十顯示提示",
      });
      _this.initTensCenterTextShowedElements(wrapElement);
    };
    _this.initPokerKindElements = function (wrapElement) {
      var _a = _this,
        pokerKind = _a.data.pokerKind,
        pokerKindElementArray = _a.pokerKindElementArray;
      // const labelElement = createElement('label') as HTMLLabelElement;
      // wrapElement.appendChild(labelElement);
      // labelElement.innerHTML = getI18nInnerHTML({
      //   en: '',
      //   zh_cn: '',
      //   zh_tw: '',
      // });
      var pokerKindI18nHtmlArray = [
        getI18nInnerHTML({
          en: "1-9 make up ten",
          zh_cn: "1-9凑十",
          zh_tw: "1-9凑十",
        }),
        getI18nInnerHTML({
          en: "1-5",
          zh_cn: "1-5",
          zh_tw: "1-5",
        }),
        getI18nInnerHTML({
          en: "0-9",
          zh_cn: "0-9",
          zh_tw: "0-9",
        }),
        getI18nInnerHTML({
          en: "0-20+-×÷",
          zh_cn: "0-20+-×÷",
          zh_tw: "0-20+-×÷",
        }),
        getI18nInnerHTML({
          en: "1-100",
          zh_cn: "1-100",
          zh_tw: "1-100",
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
      for (
        var pokerKindIndex = 0;
        pokerKindIndex < MathPokerKindCount;
        ++pokerKindIndex
      ) {
        _loop_1(pokerKindIndex);
      }
    };
    _this.tensCenterTextShowedElementArray = [];
    _this.initTensCenterTextShowedElements = function (wrapElement) {
      var _a = _this,
        tensCenterTextShowed = _a.data.tensCenterTextShowed,
        tensCenterTextShowedElementArray = _a.tensCenterTextShowedElementArray;
      // const labelElement = createElement('label') as HTMLLabelElement;
      // wrapElement.appendChild(labelElement);
      // labelElement.innerHTML = getI18nInnerHTML({
      //   en: '',
      //   zh_cn: '',
      //   zh_tw: '',
      // });
      // labelElement.setAttribute('for', 'tensCenterTextShowed');
      var i18nHtmlArray = [
        getI18nInnerHTML({
          en: "Yes",
          zh_cn: "是",
          zh_tw: "是",
        }),
        getI18nInnerHTML({
          en: "No",
          zh_cn: "否",
          zh_tw: "否",
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
        spanElement.innerHTML = i18nHtmlArray[
          tensCenterTextShowedValue
            ? 0
            : 1
        ];
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
  BrickCore.prototype.countIt = function (
    enAppend,
    zh_cnAppend,
    zh_twAppend,
    charsArray,
    enFullArray,
    zh_cnArray,
    zh_twArray,
    en,
    zh_cn,
    zh_tw,
    CENTER_TEXTS,
    CHARS,
    countPerPage,
    BACK_COVERS,
    times,
    centerText,
    COLORS,
  ) {
    enFullArray.push(enAppend);
    zh_cnArray.push(zh_cnAppend);
    zh_twArray.push(zh_twAppend);
    var notSameBackCover = getI18nInnerHTML({
      en: en.concat("<br /><small>", enAppend, "</small>"),
      zh_cn: zh_cn.concat("<br />", zh_cnAppend),
      zh_tw: zh_tw.concat("<br />", zh_twAppend),
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
    // const countNotSameBackCoverIncrease = countPerPage * Math.ceil(arrayLength / countPerPage);
    var countNotSameBackCoverIncrease = arrayLength;
    pushSameValueTimes(CHARS, "", countNotSameBackCoverIncrease - arrayLength);
    pushSameValueTimes(
      BACK_COVERS,
      notSameBackCover,
      countNotSameBackCoverIncrease,
    );
    return countNotSameBackCoverIncrease;
  };
  return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
