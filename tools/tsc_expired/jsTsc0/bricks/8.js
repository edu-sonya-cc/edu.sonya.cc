"use strict";
/**
 * <en>
 * Function: Generate Israeli Lami (from Chinese Mahjong)
 * Initial construction: Anqi, October 5, 2021
 * History: On November 2, 2022
 * Reference:
 * 						2021-10-05 Anqi P: 0 00007\_Learning\Mathematics\Mahjong
 * Description: Regular (2 for each of the four patterns 1-13, plus 2 or 8 changeable cards)
 * </en>
 *
 * <zh_cn>
 * 功能：生成以色列拉密（源于中国麻将）
 * 初建：2021-10-05 安启
 * 历史：2022-11-02 安启 归档
 * 参考：
 *       2021-10-05 安启 P:\0\000007\_学习\数学\麻将
 *       https://zhuanlan.zhihu.com/p/460599620
 *       https://www.zhihu.com/question/336450751/answer/761175318
 *       https://zhuanlan.zhihu.com/p/76597144
 * 说明：常规（四花色1-13各2份加2或8张百变牌），27*38mm或26*35mm。
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成以色列拉密（源於中國麻將）
 * 初建：2021-10-05 安啟
 * 歷史：2022-11-02 安啟 歸檔
 * 參攷：
 *  		 2021-10-05 安啟 P:\0\000007\_學習\數學\麻將
 * 說明：常規（四花色1-13各2份加2或8張百變牌），27*38mm或26*35mm。
 * </zh_tw>
 */
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { global } from '../global.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/**
 * <en>Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型</zh_cn>
 * <zh_tw>拉密麻將類型</zh_tw>
 */
var RummikubPokerKind;
(function (RummikubPokerKind) {
  /**
     * <en>None</en>
     * <zh_cn>无</zh_cn>
     * <zh_tw>無</zh_tw>
     */
  RummikubPokerKind[RummikubPokerKind["none"] = 0] = "none";
  /**
     * <en>diagonal</en>
     * <zh_cn>对角线</zh_cn>
     * <zh_tw>對角線</zh_tw>
     */
  RummikubPokerKind[RummikubPokerKind["diagonal"] = 1] = "diagonal";
  /**
     * <en>center</en>
     * <zh_cn>中心</zh_cn>
     * <zh_tw>中心</zh_tw>
     */
  RummikubPokerKind[RummikubPokerKind["center"] = 2] = "center";
  /**
     * <en>diagonal extends</en>
     * <zh_cn>对角线扩展版</zh_cn>
     * <zh_tw>對角線擴展版</zh_tw>
     */
  RummikubPokerKind[RummikubPokerKind["diagonalExtends"] = 4] =
    "diagonalExtends";
  /**
     * <en>center extends</en>
     * <zh_cn>中心扩展版</zh_cn>
     * <zh_tw>中心擴展版</zh_tw>
     */
  RummikubPokerKind[RummikubPokerKind["centerExtends"] = 8] = "centerExtends";
})(RummikubPokerKind || (RummikubPokerKind = {}));
/**
 * <en>Count of Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型数量</zh_cn>
 * <zh_tw>拉密麻將類型數量</zh_tw>
 */
var RummikubPokerKindCount = 4;
/**
 * <en>Default Value of Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型默认值</zh_cn>
 * <zh_tw>拉密麻將類型默認值</zh_tw>
 */
var DefaultRummikubPokerKind = 15;
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  function BrickCore() {
    var _this = _super.call(this, {
      pokerWidth: 20,
      pokerHeight: 28,
      backFontSize: "12px",
      pokerKind: DefaultRummikubPokerKind,
      centerTextShowed: false,
      includeZero: false,
      wholePage: false,
    }, {
      count: 0,
      chars: [],
      backCovers: [],
      centerTexts: [],
      colors: [],
      isCenters: [],
      pokerCss:
        "\n      .double{display:flex;justify-content: space-around;}\n      .double b:first-child{position:relative;left:0.375em;}\n      .double b:last-child{position:relative;left:-0.375em;opacity:0.75;}\n  \n      .discoloration{display:flex;width: 100%;position: relative;}\n      .discoloration b:first-child{overflow:hidden;position:relative;left:0.5em;}\n      .discoloration b:first-child i{position:relative;left:-0.5em;color:#000;}\n      .discoloration b:last-child{overflow:hidden;position:relative;left:-0.5em;}\n      .discoloration b:last-child i{position:relative;left:0em;color:#F00;}\n  \n      .mirror{position:relative;margin-left:12%;width:88%;letter-spacing:0em;display:flex;}\n      .top-left .mirror,.bottom-right .mirror{width:40%;margin-left:6%;}\n      .mirror b:first-child{overflow:hidden;}\n      .mirror b:last-child{overflow:hidden;}\n      .mirror b:first-child i{position:relative;left:-0.475em;}\n      .mirror b:last-child i{position:relative;left: -0.15em;border-left:1px solid #888;}\n      ",
    }) || this;
    _this.onPageSizeChanged = function (_newPageSize) {};
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
        centerTextShowed = _b.centerTextShowed,
        _c = _a.computedData,
        COUNT = _c.count,
        CHARS = _c.chars,
        // backCovers: [],
        CENTER_TEXTS = _c.centerTexts,
        COLORS = _c.colors,
        IS_CENTERS = _c.isCenters;
      var MAX_SYMBOL_INDEX = COUNT - 1;
      var PAGE_START = '<page class="forePage '.concat(paperSize, '">'),
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
              var isCenter = IS_CENTERS[symbolIndex];
              // const char = CHARS[symbolIndex] || '';
              // const color = COLORS[symbolIndex] || '0';
              var char = CHARS[symbolIndex] || (isCenter ? "" : "_"); // ○
              var color = COLORS[symbolIndex] || "-1";
              if (isCenter) {
                html += "".concat(CENTER_START, '<text edu-color="').concat(
                  color,
                  '">',
                ).concat(char.replace(/([69])/g, "<u>".concat("$1", "</u>")))
                  .concat(TEXT_END).concat(CENTER_END);
              } else {
                html += "".concat(
                  TOP_START,
                  '<text class="top-left" edu-color="',
                ).concat(color, '">').concat(char).concat(TEXT_END).concat(
                  TOP_END,
                );
                if (centerTextShowed) {
                  html += "".concat(CENTER_START).concat(
                    CENTER_TEXTS[symbolIndex] || "",
                  ).concat(CENTER_END);
                }
                html += "".concat(
                  BOTTOM_START,
                  '<text class="bottom-right" edu-color="',
                ).concat(color, '">').concat(char).concat(TEXT_END).concat(
                  BOTTOM_END,
                );
              }
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
      var PAGE_START = '<page class="backPage '.concat(
          paperSize,
          '" dir="rtl">',
        ),
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
    //   private readonly CENTER_TEXT = `"<div><span>
    // <p><en>Same decor</en><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
    // <p><en>Arithmetic sequence</en></p><br />
    // <p edu-color=""1"">7,8,9,10,11,12,13</p>
    // <p edu-color=""2"">1,2,3</p>
    // <p edu-color=""3"">2,3,4,5</p>
    // <p edu-color=""4"">5,6,7,8</p>
    // <p edu-color=""1"">5,6,☺,8</p>
    // </span><span>
    // <p><en>Different decors</en><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
    // <p><en>Same value</en></p>
    // <p><b edu-color=""1"">1</b><b edu-color=""2"">1</b><b edu-color=""3"">1</b></p>
    // <p><b edu-color=""1"">2</b><b edu-color=""2"">2</b><b edu-color=""3"">2</b><b edu-color=""3"">☺</b></p>
    // <p><b edu-color=""1"">☺</b><b edu-color=""2"">3</b><b edu-color=""3"">3</b></p>
    // <p><b edu-color=""1"">☺</b><b edu-color=""2"">4</b><b edu-color=""3"">☺</b></p>
    // </span></div>"
    //  `;
    /**
         * <en>Count of normal card: diagonal</en>
         * <zh_cn>普通牌份数：对角线</zh_cn>
         * <zh_tw>普通牌份數：對角線</zh_tw>
         */
    _this.DIAGONAL_NORMAL_CARD_TIMES = 2;
    /**
         * <en>Count of changeable carddiagonal</en>
         * <zh_cn>百变牌数：对角线</zh_cn>
         * <zh_tw>百变牌數：對角線</zh_tw>
         */
    _this.DIAGONAL_CHANGEABLE_CARD_COUNT = 2;
    /**
         * <en>Tips of diagonal</en>
         * <zh_cn>提示：对角线</zh_cn>
         * <zh_tw>提示：對角線</zh_tw>
         */
    _this.DIAGONAL_CENTER_TEXT =
      '<div>\n  <p><en>Same decor</en><zh_cn>\u540C\u8272\u8FDE\u7EED</zh_cn><zh_tw>\u540C\u8272\u8FDE\u7EED</zh_tw></p>\n  <p><en>Arithmetic sequence</en></p><br />\n  <p edu-color="1">7,8,9,10,11,12,13</p>\n  <p edu-color="2">1,2,3</p>\n  <p edu-color="1">5,6,\u263A,8</p>\n \n  <p><en>Different decors</en><zh_cn>\u5F02\u8272\u540C\u503C</zh_cn><zh_tw>\u5F02\u8272\u540C\u503C</zh_tw></p>\n  <p><en>Same value</en></p>\n  <p><b edu-color="1">2</b><b edu-color="2">2</b><b edu-color="3">2</b><b edu-color="3">\u263A</b></p>\n  <p><b edu-color="1">\u263A</b><b edu-color="2">3</b><b edu-color="3">3</b></p>\n </span></div>';
    /**
         * <en>Count of normal card: center</en>
         * <zh_cn>普通牌份数：中心</zh_cn>
         * <zh_tw>普通牌份數：中心</zh_tw>
         */
    _this.CENTER_NORMAL_CARD_TIMES = 2;
    /**
         * <en>Count of changeable cardcenter</en>
         * <zh_cn>百变牌数：中心</zh_cn>
         * <zh_tw>百变牌數：中心</zh_tw>
         */
    _this.CENTER_CHANGEABLE_CARD_COUNT = 2;
    /**
         * <en>Tips of center</en>
         * <zh_cn>提示：中心</zh_cn>
         * <zh_tw>提示：中心</zh_tw>
         */
    _this.CENTER_CENTER_TEXT = "";
    /**
         * <en>Count of normal card: diagonal extends</en>
         * <zh_cn>普通牌份数：对角线扩展版</zh_cn>
         * <zh_tw>普通牌份數：對角線擴展版</zh_tw>
         */
    _this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES = 2;
    /**
         * <en>Count of changeable carddiagonal extends</en>
         * <zh_cn>百变牌数：对角线扩展版</zh_cn>
         * <zh_tw>百变牌數：對角線擴展版</zh_tw>
         */
    _this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
    /**
         * <en>Tips of diagonal extends</en>
         * <zh_cn>提示：对角线扩展版</zh_cn>
         * <zh_tw>提示：對角線擴展版</zh_tw>
         */
    _this.DIAGONAL_EXTENDS_CENTER_TEXT = _this.DIAGONAL_CENTER_TEXT;
    // 	private DIAGONAL_EXTENDS_CENTER_TEXT = `<div><span>
    //  <p><en>Same decor</en><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
    //  <p><en>Arithmetic sequence</en></p><br />
    //  <p edu-color="1">7,8,9,10,11,12,13</p>
    //  <p edu-color="2">1,2,3</p>
    //  <p edu-color="3">2,3,4,5</p>
    //  <p edu-color="4">5,6,7,8</p>
    //  <p edu-color="1">5,6,☺,8</p>
    // </span><span>
    //  <p><en>Different decors</en><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
    //  <p><en>Same value</en></p>
    //  <p><b edu-color="1">1</b><b edu-color="2">1</b><b edu-color="3">1</b></p>
    //  <p><b edu-color="1">2</b><b edu-color="2">2</b><b edu-color="3">2</b><b edu-color="3">☺</b></p>
    //  <p><b edu-color="1">☺</b><b edu-color="2">3</b><b edu-color="3">3</b></p>
    //  <p><b edu-color="1">☺</b><b edu-color="2">4</b><b edu-color="3">☺</b></p>
    // </span></div>`;
    /**
         * <en>Count of normal card: center extends</en>
         * <zh_cn>普通牌份数：中心扩展版</zh_cn>
         * <zh_tw>普通牌份數：中心擴展版</zh_tw>
         */
    _this.CENTER_EXTENDS_NORMAL_CARD_TIMES = 2;
    /**
         * <en>Count of changeable cardcenter extends</en>
         * <zh_cn>百变牌数：中心扩展版</zh_cn>
         * <zh_tw>百变牌數：中心擴展版</zh_tw>
         */
    _this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
    /**
         * <en>Tips of center extends</en>
         * <zh_cn>提示：中心扩展版</zh_cn>
         * <zh_tw>提示：中心擴展版</zh_tw>
         */
    _this.CENTER_EXTENDS_CENTER_TEXT = "";
    _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
      if (pokerKind === 0) {
        pokerKind = DefaultRummikubPokerKind;
      }
      var en = "".concat(FILENAME_POSTFIX, "Rummikub");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u62C9\u5BC6");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u62C9\u5BC6");
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
      var lastPokerKind = RummikubPokerKind.none;
      _this.computedData.isCenters.length = "";
      if (
        RummikubPokerKind.diagonal === (RummikubPokerKind.diagonal & pokerKind)
      ) {
        enArray.push("diagonal");
        count += _this.countIt(
          _this.DIAGONAL_NORMAL_CARD_TIMES,
          _this.DIAGONAL_CHANGEABLE_CARD_COUNT,
          countPerPage,
          _this.DIAGONAL_CENTER_TEXT,
          CENTER_TEXTS,
          "diagonal",
          "对角线",
          "對角線",
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CHARS,
          COLORS,
          BACK_COVERS,
          RummikubPokerKind.diagonal,
        );
        lastPokerKind = RummikubPokerKind.diagonal;
      }
      if (RummikubPokerKind.center === (RummikubPokerKind.center & pokerKind)) {
        enArray.push("center");
        count += _this.countIt(
          _this.CENTER_NORMAL_CARD_TIMES,
          _this.CENTER_CHANGEABLE_CARD_COUNT,
          countPerPage,
          _this.CENTER_CENTER_TEXT,
          CENTER_TEXTS,
          "center",
          "中心",
          "中心",
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CHARS,
          COLORS,
          BACK_COVERS,
          RummikubPokerKind.center,
        );
        lastPokerKind = RummikubPokerKind.center;
      }
      if (
        RummikubPokerKind.diagonalExtends ===
          (RummikubPokerKind.diagonalExtends & pokerKind)
      ) {
        enArray.push("diagonalExtends");
        count += _this.countIt(
          _this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES,
          _this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT,
          countPerPage,
          _this.DIAGONAL_EXTENDS_CENTER_TEXT,
          CENTER_TEXTS,
          "diagonal extends",
          "对角线扩展版",
          "對角線擴展版",
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CHARS,
          COLORS,
          BACK_COVERS,
          RummikubPokerKind.diagonalExtends,
        );
        lastPokerKind = RummikubPokerKind.diagonalExtends;
      }
      if (
        RummikubPokerKind.centerExtends ===
          (RummikubPokerKind.centerExtends & pokerKind)
      ) {
        enArray.push("centerExtends");
        count += _this.countIt(
          _this.CENTER_EXTENDS_NORMAL_CARD_TIMES,
          _this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT,
          countPerPage,
          _this.CENTER_EXTENDS_CENTER_TEXT,
          CENTER_TEXTS,
          "center extends",
          "中心扩展版",
          "中心擴展版",
          enFullArray,
          zh_cnArray,
          zh_twArray,
          enBackCover,
          zh_cnBackCover,
          zh_twBackCover,
          CHARS,
          COLORS,
          BACK_COVERS,
          RummikubPokerKind.centerExtends,
        );
        lastPokerKind = RummikubPokerKind.centerExtends;
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
          if (enArray.length === RummikubPokerKindCount) {
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
      var appendCount = _this.computedData.count - count;
      switch (lastPokerKind) {
        case RummikubPokerKind.diagonal:
          pushSameValueTimes(
            _this.computedData.centerTexts,
            _this.DIAGONAL_CENTER_TEXT,
            appendCount,
          );
          break;
        case RummikubPokerKind.diagonalExtends:
          pushSameValueTimes(
            _this.computedData.centerTexts,
            _this.DIAGONAL_EXTENDS_CENTER_TEXT,
            appendCount,
          );
          break;
        default:
          pushSameValueTimes(_this.computedData.isCenters, true, appendCount);
          break;
      }
    };
    _this.updateOtherDataOfPoker = function (newData) {
      var pokerKind = newData.pokerKind;
      for (
        var pokerKindIndex = 0;
        pokerKindIndex < RummikubPokerKindCount;
        ++pokerKindIndex
      ) {
        var pokerKindValue = Math.pow(2, pokerKindIndex);
        var checkboxElement = _this
          .pokerKindElementArray[pokerKindIndex];
        checkboxElement.checked =
          (pokerKind & pokerKindValue) === pokerKindValue;
      }
      // const { centerTextShowed } = newData;
      // this.centerTextShowedElementArray.forEach((radioElement: HTMLInputElement) => {
      //   radioElement.checked = centerTextShowed === (radioElement.value === 'true');
      // });
      // this.data.centerTextShowed = centerTextShowed;
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
      // let wrapElement = this.getWrapElement({
      //   en: 'Show tips',
      //   zh_cn: '显示提示',
      //   zh_tw: '顯示提示',
      // });
      // this.initCenterTextShowedElements(wrapElement);
      var _a;
      _this.paperSizeRadioArray.forEach(function (radioElement) {
        radioElement.onclick = function (event) {
          var paperSizeValue = radioElement.value;
          _this.data.paperSize = paperSizeValue;
          // switch (paperSizeValue) {
          //   case 'A3':
          //     this.data.pokerWidth = 48;
          //     this.data.pokerHeight = 68;
          //     break;
          //   case 'A4':
          //     this.data.pokerWidth = 40;
          //     this.data.pokerHeight = 56;
          //     break;
          //   default:
          //     break;
          // }
          // (this.pokerWidthElement as HTMLInputElement).value = this.data.pokerWidth.toString();
          // (this.pokerHeightElement as HTMLInputElement).value = this.data.pokerHeight.toString();
          _this.saveConfigAndBuildIfAllowed();
        };
      });
      (_a = _this.configCoreElement) === null || _a === void 0
        ? void 0
        : _a.querySelectorAll('[name="pokerSizeButtons"]').forEach(
          function (buttonElement, index) {
            if (index === 0) {
              buttonElement.setAttribute("edu-to-width", "18");
              buttonElement.setAttribute("edu-to-height", "25");
              // buttonElement.innerHTML = getI18nInnerHTML({
              //   en: 'Default',
              //   zh_cn: '默认',
              //   zh_tw: '默認',
              // });
            } else {
              // hide(buttonElement);
              buttonElement.setAttribute("edu-to-width", "20");
              buttonElement.setAttribute("edu-to-height", "28");
            }
          },
        );
      var wrapElement = _this.getWrapElement({
        en: "Include Zero",
        zh_cn: "包含0",
        zh_tw: "包含0",
      });
      _this.initIncludeZeroElements(wrapElement);
      wrapElement = _this.getWrapElement({
        en: "Whole Page",
        zh_cn: "每项补全整页",
        zh_tw: "每項補全整頁",
      });
      _this.initWholePageElements(wrapElement);
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
          en: "diagonal",
          zh_cn: "对角线",
          zh_tw: "對角線",
        }),
        getI18nInnerHTML({
          en: "center",
          zh_cn: "中心",
          zh_tw: "中心",
        }),
        getI18nInnerHTML({
          en: "diagonal extends",
          zh_cn: "对角线扩展版",
          zh_tw: "對角線擴展版",
        }),
        getI18nInnerHTML({
          en: "center extends",
          zh_cn: "中心扩展版",
          zh_tw: "中心擴展版",
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
        pokerKindIndex < RummikubPokerKindCount;
        ++pokerKindIndex
      ) {
        _loop_1(pokerKindIndex);
      }
    };
    // protected centerTextShowedElementArray: Array<HTMLInputElement> = [];
    // protected initCenterTextShowedElements = (wrapElement: HTMLDivElement): void => {
    //   const { data: { centerTextShowed }, centerTextShowedElementArray } = this;
    //   // const labelElement = createElement('label') as HTMLLabelElement;
    //   // wrapElement.appendChild(labelElement);
    //   // labelElement.innerHTML = getI18nInnerHTML({
    //   //   en: '',
    //   //   zh_cn: '',
    //   //   zh_tw: '',
    //   // });
    //   // labelElement.setAttribute('for', 'centerTextShowed');
    // 	const i18nHtmlArray = [
    //     getI18nInnerHTML({
    //       en: 'Yes',
    //       zh_cn: '是',
    //       zh_tw: '是',
    //     }),
    //     getI18nInnerHTML({
    //       en: 'No',
    //       zh_cn: '否',
    //       zh_tw: '否',
    //     }),
    // 	];
    //   [true, false].forEach((centerTextShowedValue: boolean) => {
    //     const radioElement = createElement('input') as HTMLInputElement & { onclick: (event: Event) => void; };
    //     radioElement.type = 'radio';
    //     radioElement.name  = 'centerTextShowed';
    //     radioElement.value = centerTextShowedValue.toString();
    //     if (centerTextShowed === centerTextShowedValue) {
    //       radioElement.checked = true;
    //     }
    //     const spanElement = createElement('span') as HTMLSpanElement;
    //     spanElement.innerHTML = i18nHtmlArray[centerTextShowedValue ? 0 : 1];
    //     radioElement.onclick = () => {
    //       this.data.centerTextShowed = centerTextShowedValue;
    //       this.saveConfigAndBuildIfAllowed();
    //     };
    //     spanElement.onclick = () => { radioElement.click(); };
    //     wrapElement.appendChild(radioElement);
    //     wrapElement.appendChild(spanElement);
    //     centerTextShowedElementArray.push(radioElement);
    //   });
    // };
    _this.includeZeroElementArray = [];
    _this.initIncludeZeroElements = function (wrapElement) {
      var _a = _this,
        includeZero = _a.data.includeZero,
        includeZeroElementArray = _a.includeZeroElementArray;
      // const labelElement = createElement('label') as HTMLLabelElement;
      // wrapElement.appendChild(labelElement);
      // labelElement.innerHTML = getI18nInnerHTML({
      //   en: '',
      //   zh_cn: '',
      //   zh_tw: '',
      // });
      // labelElement.setAttribute('for', 'includeZero');
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
      var _a = _this,
        wholePage = _a.data.wholePage,
        wholePageElementArray = _a.wholePageElementArray;
      // const labelElement = createElement('label') as HTMLLabelElement;
      // wrapElement.appendChild(labelElement);
      // labelElement.innerHTML = getI18nInnerHTML({
      //   en: '',
      //   zh_cn: '',
      //   zh_tw: '',
      // });
      // labelElement.setAttribute('for', 'wholePage');
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
    // https://zhuanlan.zhihu.com/p/76597144
    _this.CHANGEABLE_CARD_ARRAY = [
      "☺",
      '<p class="double"><b><i>☺</i></b><b><i>☺</i></b></p>',
      '<p class="discoloration"><b><i>☺</i></b><b><i>☺</i></b></p>',
      '<p class="mirror"><b><i>☺</i></b><b><i>☺</i></b></p>',
    ];
    _this.countIt = function (
      normalCardTimes,
      changeableCardCount,
      countPerPage,
      centerText,
      CENTER_TEXTS,
      enAppend,
      zh_cnAppend,
      zh_twAppend,
      enFullArray,
      zh_cnArray,
      zh_twArray,
      en,
      zh_cn,
      zh_tw,
      CHARS,
      COLORS,
      BACK_COVERS,
      pokerKind,
    ) {
      enFullArray.push(enAppend);
      zh_cnArray.push(zh_cnAppend);
      zh_twArray.push(zh_twAppend);
      var notSameBackCover = getI18nInnerHTML({
        en: en.concat("<br /><small>", enAppend, "</small>"),
        zh_cn: zh_cn.concat("<br />", zh_cnAppend),
        zh_tw: zh_tw.concat("<br />", zh_twAppend),
      });
      var _a = _this,
        DECOR_COUNT = _a.DECOR_COUNT,
        NORMAL_CARD_ARRAY = _a.NORMAL_CARD_ARRAY,
        CHANGEABLE_CARD_ARRAY = _a.CHANGEABLE_CARD_ARRAY,
        _b = _a.data,
        includeZero = _b.includeZero,
        wholePage = _b.wholePage;
      var isCenters = pokerKind === RummikubPokerKind.center ||
        pokerKind === RummikubPokerKind.centerExtends;
      for (
        var normalCardLoop = 0;
        normalCardLoop < normalCardTimes;
        ++normalCardLoop
      ) {
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
        var color = (colorIndex * 2).toString(); // => 0, 2
        for (
          var changeableCardLoop = 0;
          changeableCardLoop < CHANGEABLE_CARD_SYMBOL_COUNT;
          ++changeableCardLoop
        ) {
          var char = CHANGEABLE_CARD_ARRAY[changeableCardLoop];
          CHARS.push(char);
          CENTER_TEXTS.push(centerText);
          COLORS.push(color);
          _this.computedData.isCenters.push(isCenters);
        }
      }
      var arrayLength =
        ((includeZero ? 1 : 0) + NORMAL_CARD_ARRAY.length) * DECOR_COUNT *
          normalCardTimes +
        changeableCardCount;
      // const countNotSameBackCoverIncrease = countPerPage * Math.ceil(arrayLength / countPerPage);
      // const countNotSameBackCoverIncrease = arrayLength;
      var countNotSameBackCoverIncrease = wholePage
        ? countPerPage * Math.ceil(arrayLength / countPerPage)
        : arrayLength;
      var appendCount = countNotSameBackCoverIncrease - arrayLength;
      pushSameValueTimes(CHARS, "", appendCount);
      pushSameValueTimes(CENTER_TEXTS, centerText, appendCount);
      pushSameValueTimes(COLORS, "", appendCount);
      pushSameValueTimes(_this.computedData.isCenters, isCenters, appendCount);
      pushSameValueTimes(
        BACK_COVERS,
        notSameBackCover,
        countNotSameBackCoverIncrease,
      );
      return countNotSameBackCoverIncrease;
    };
    return _this;
  }
  return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
