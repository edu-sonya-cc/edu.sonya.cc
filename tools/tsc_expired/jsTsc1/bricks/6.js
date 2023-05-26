"use strict";
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, stopEventBubble } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { getNumbersArray, pushSameValueTimes, getArrayRepeatSameValue } from '../utils.ts';
// import { svgSpace } from '../svgHelper.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';
// // import { BrickBase } from './brickBase.ts';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/svgHelper.d.ts' />
/// <reference path='../../types/brickWithTableBase.d.ts' />
/**
 * <en>
 * Function:
 * Create:
 * History:
 * Reference:
 * Description:
 * </en>
 *
 * <zh_cn>
 * 功能：古氏积木
 * 初建：2022-11-19 安启
 * 历史：2020-05-14
 * 参考：P:\0\000007\_学习\数学\古氏积木
 * 说明：
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：
 * 初建：
 * 歷史：
 * 參攷：
 * 說明：
 * </zh_tw>
 */
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  /** OK
   * 构造方法
   */
  function BrickCore() {
    var _this = _super.call(this, {}, {}) || this;
    _this.idOrClassPrefix = "brickPageCuisenaireRod";
    /** OK
     * 计算data和computedData数据
     */
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var _a = _this,
        data = _a.data,
        computedData = _a.computedData,
        mmToPxScale = _a.mmToPxScale;
      // const { CHARS } = this;
      var paperSize = data.paperSize,
        isLandscape = data.isLandscape,
        MAX_X = data.maxX,
        MAX_Y = data.maxY,
        pageMarginTop = data.pageMarginTop,
        pageMarginBottom = data.pageMarginBottom,
        pageMarginLeft = data.pageMarginLeft,
        pageMarginRight = data.pageMarginRight,
        list = data.list;
      var css =
        "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n\t\t@media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; margin:",
          ).concat(pageMarginTop, "mm ").concat(pageMarginRight, "mm ").concat(
            pageMarginBottom,
            "mm ",
          ).concat(
            pageMarginLeft,
            "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:",
          ).concat(
            MAX_X,
            "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\t\t/* page { height:",
          ).concat(MAX_Y, "mm; } */\n\t\tpage { width:").concat(
            MAX_X,
            "mm;margin-left:",
          ).concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm; }\n\t\t",
          );
      var html = "";
      var NUMBER_MIN = 1;
      list.forEach(function (_a) {
        var onlyWhitePaper = _a.onlyWhitePaper,
          digitalOverlay = _a.digitalOverlay,
          sealingStyle = _a.sealingStyle,
          length = _a.length,
          innerLineStyleArray = _a.innerLineStyle,
          cutLineStyleArray = _a.cutLineStyle,
          outerLineStyleArray = _a.outerLineStyle,
          textStyleArray = _a.textStyle,
          pages = _a.pages,
          paperThickness = _a.paperThickness;
        var NUMBER_COUNT = pages.length;
        var INNER_LINE_STYLE_COUNT = innerLineStyleArray.length;
        var CUT_LINE_STYLE_COUNT = cutLineStyleArray.length;
        var OUTER_LINE_STYLE_COUNT = outerLineStyleArray.length;
        var TEXT_STYLE_COUNT = textStyleArray.length;
        var LAST_INNER_LINE_STYLE =
          innerLineStyleArray[INNER_LINE_STYLE_COUNT - 1];
        var LAST_CUT_LINE_STYLE = cutLineStyleArray[CUT_LINE_STYLE_COUNT - 1];
        var LAST_OUTER_LINE_STYLE =
          outerLineStyleArray[OUTER_LINE_STYLE_COUNT - 1];
        var LAST_TEXT_STYLE = textStyleArray[TEXT_STYLE_COUNT - 1];
        var CUISENAIRE_ROD_BEST_FIT_WIDTH = length * 5 - paperThickness;
        var CUISENAIRE_ROD_MIN_WIDTH = length * 4.5;
        // const CUISENAIRE_ROD_WIDTH = CUISENAIRE_ROD_BEST_FIT_WIDTH;
        // const VERTICAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_WIDTH);
        var VERTICAL_RODS_COL_COUNT = Math.floor(
          MAX_X / CUISENAIRE_ROD_MIN_WIDTH,
        );
        var CUISENAIRE_ROD_WIDTH = VERTICAL_RODS_COL_COUNT === 0 ? 0 : Math.min(
          MAX_X / VERTICAL_RODS_COL_COUNT,
          CUISENAIRE_ROD_BEST_FIT_WIDTH,
        );
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
          var textStyle = numberIndex < TEXT_STYLE_COUNT
            ? textStyleArray[numberIndex]
            : LAST_TEXT_STYLE;
          var NUMBER_MAX = numberIndex + 1;
          // 'none' | 'onlyAbove' | 'onlyBelow' | 'both'
          var CELL_COUNT_BY_SEALING_STYLE = sealingStyle === "both"
            ? 2
            : (sealingStyle === "none" ? 0 : 1);
          var CUISENAIRE_ROD_HEIGHT = length * NUMBER_MAX +
            CELL_HEGIHT *
              (NUMBER_MAX === 1
                ? (sealingStyle === "none" ? 0 : 1)
                : CELL_COUNT_BY_SEALING_STYLE);
          var VERTICAL_RODS_ROW_COUNT = Math.floor(
            MAX_Y / CUISENAIRE_ROD_HEIGHT,
          );
          var VERTICAL_RODS_COUNT = VERTICAL_RODS_COL_COUNT *
            VERTICAL_RODS_ROW_COUNT;
          var HORIZONTAL_RODS_START_Y = CUISENAIRE_ROD_HEIGHT *
            VERTICAL_RODS_ROW_COUNT;
          var REMAINING_HEIGHT = MAX_Y - HORIZONTAL_RODS_START_Y;
          var HORIZONTAL_RODS_ROW_COUNT = Math.floor(
            REMAINING_HEIGHT / CUISENAIRE_ROD_MIN_WIDTH,
          );
          var HORIZONTAL_RODS_COL_HEIGHT = HORIZONTAL_RODS_ROW_COUNT === 0
            ? 0
            : Math.min(
              MAX_X / VERTICAL_RODS_COL_COUNT,
              CUISENAIRE_ROD_BEST_FIT_WIDTH,
            );
          // const HORIZONTAL_RODS_ROW_WIDTH = CUISENAIRE_ROD_HEIGHT;
          var HORIZONTAL_RODS_COL_COUNT = Math.floor(
            MAX_X / CUISENAIRE_ROD_HEIGHT,
          );
          var HORIZONTAL_RODS_COUNT = HORIZONTAL_RODS_COL_COUNT *
            HORIZONTAL_RODS_ROW_COUNT;
          var RODS_COUNT_PER_PAGE = VERTICAL_RODS_COUNT + HORIZONTAL_RODS_COUNT;
          for (var pageIndex = 0; pageIndex < PAGE_COUNT; ++pageIndex) {
            html += "<page>";
            var startNumberOffset = digitalOverlay
              ? NUMBER_MAX * RODS_COUNT_PER_PAGE * pageIndex
              : 0;
            for (
              var rowIndex = 0;
              rowIndex < VERTICAL_RODS_ROW_COUNT;
              ++rowIndex
            ) {
              for (
                var colIndex = 0;
                colIndex < VERTICAL_RODS_COL_COUNT;
                ++colIndex
              ) {
                html += _this.getVerticalRodHtml(
                  digitalOverlay,
                  startNumberOffset,
                  NUMBER_MAX,
                  sealingStyle,
                  length,
                  CUISENAIRE_ROD_WIDTH,
                  CUISENAIRE_ROD_HEIGHT,
                  mmToPxScale,
                  innerLineStyle,
                  cutLineStyle,
                  outerLineStyle,
                  textStyle,
                  paperThickness,
                );
                startNumberOffset += digitalOverlay ? NUMBER_MAX : 0;
              }
            }
            for (
              var rowIndex = 0;
              rowIndex < HORIZONTAL_RODS_ROW_COUNT;
              ++rowIndex
            ) {
              for (
                var colIndex = 0;
                colIndex < HORIZONTAL_RODS_COL_COUNT;
                ++colIndex
              ) {
                html += _this.getHorizontalRodHtml(
                  digitalOverlay,
                  startNumberOffset,
                  NUMBER_MAX,
                  sealingStyle,
                  length,
                  CUISENAIRE_ROD_HEIGHT,
                  HORIZONTAL_RODS_COL_HEIGHT,
                  mmToPxScale,
                  innerLineStyle,
                  cutLineStyle,
                  outerLineStyle,
                  textStyle,
                  paperThickness,
                );
                startNumberOffset += digitalOverlay ? NUMBER_MAX : 0;
              }
            }
            html += "</page>";
          }
        });
      });
      var en = "".concat(FILENAME_POSTFIX, "cuisenaireRods");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u53E4\u6C0F\u79EF\u6728");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u53E4\u6C0F\u7A4D\u6728");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      computedData.html = html;
    };
    _this.getHorizontalRodHtml = function (
      digitalOverlay,
      startNumberOffset,
      NUMBER_MAX,
      sealingStyle,
      length,
      CUISENAIRE_ROD_WIDTH,
      CUISENAIRE_ROD_HEIGHT,
      mmToPxScale,
      INNER_LINE_STYLE,
      CUT_LINE_STYLE,
      OUTER_LINE_COLOR,
      TEXT_STYLE,
      paperThickness,
    ) {
      var _a = svgSpace.edu.sonya.cc.SvgHelper,
        createSvg = _a.createSvg,
        appendLine = _a.appendLine,
        appendText = _a.appendText,
        getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss,
        appendOuterLine = _a.appendOuterLine;
      TEXT_STYLE += getTextStyleFontSizePatchCss(
        NUMBER_MAX + startNumberOffset,
        TEXT_STYLE,
      );
      var ROTATE = 90;
      var svg = createSvg();
      appendOuterLine(
        svg,
        CUISENAIRE_ROD_WIDTH,
        CUISENAIRE_ROD_HEIGHT,
        mmToPxScale,
        OUTER_LINE_COLOR,
      );
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
      // let normalTextStartX = length * 0.5;
      var textY1 = CUISENAIRE_ROD_WIDTH - (length - paperThickness) +
        length * 0.5;
      var textY3 = (length - paperThickness) * 0.5;
      var NUMBER_MAX_STRING = (NUMBER_MAX + startNumberOffset).toString();
      var NUMBER_MIN_STRING =
        (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
      switch (sealingStyle) {
        case "onlyAbove":
          // normalTextStartX += X1;
          appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            X1,
            X1,
            length,
            CUISENAIRE_ROD_HEIGHT,
            null,
          );
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MAX_STRING,
            textX1,
            -textY1,
            ROTATE,
            "left top",
            null,
            true,
          );
          if (NUMBER_MAX === 1) {
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MAX_STRING,
              textX3,
              -textY1,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          break;
        case "onlyBelow":
          appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            X2,
            X2,
            length,
            CUISENAIRE_ROD_HEIGHT,
            null,
          );
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MIN_STRING,
            textX1,
            -textY3,
            ROTATE,
            "left top",
            null,
            true,
          );
          if (NUMBER_MAX === 1) {
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MIN_STRING,
              textX3,
              -textY3,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          break;
        case "both":
          // normalTextStartX += X1;
          appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            X1,
            X1,
            length,
            CUISENAIRE_ROD_HEIGHT,
            null,
          );
          if (NUMBER_MAX > 1) {
            appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
            appendLine(
              svg,
              CUT_LINE_STYLE,
              X2,
              X2,
              length,
              CUISENAIRE_ROD_HEIGHT,
              null,
            );
          }
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MIN_STRING,
            textX1,
            -textY3,
            ROTATE,
            "left top",
            null,
            true,
          );
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MAX_STRING,
            textX1,
            -textY1,
            ROTATE,
            "left top",
            null,
            true,
          );
          // if (NUMBER_MAX === 1) {
          // 	appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, -textY3, ROTATE, 'left top', null, true);
          // }
          break;
        case "none":
        default:
          break;
      }
      var normalTextStartY = length * 0.5;
      var normalTextStartX = length * 0.5;
      for (var numberLoop = 1; numberLoop <= NUMBER_MAX; ++numberLoop) {
        var Y = normalTextStartY + length * numberLoop;
        for (var i = 0; i < 4; ++i) {
          appendText(
            svg,
            TEXT_STYLE,
            (numberLoop + startNumberOffset).toString(),
            normalTextStartX + length * i,
            -Y,
            ROTATE,
            "left top",
            null,
            true,
          );
        }
      }
      return svg.outerHTML;
    };
    _this.getVerticalRodHtml = function (
      digitalOverlay,
      startNumberOffset,
      NUMBER_MAX,
      sealingStyle,
      length,
      CUISENAIRE_ROD_WIDTH,
      CUISENAIRE_ROD_HEIGHT,
      mmToPxScale,
      INNER_LINE_STYLE,
      CUT_LINE_STYLE,
      OUTER_LINE_COLOR,
      TEXT_STYLE,
      paperThickness,
    ) {
      var _a = svgSpace.edu.sonya.cc.SvgHelper,
        createSvg = _a.createSvg,
        appendLine = _a.appendLine,
        appendText = _a.appendText,
        getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss,
        appendOuterLine = _a.appendOuterLine;
      TEXT_STYLE += getTextStyleFontSizePatchCss(
        NUMBER_MAX + startNumberOffset,
        TEXT_STYLE,
      );
      var ROTATE = 0;
      var svg = createSvg();
      appendOuterLine(
        svg,
        CUISENAIRE_ROD_WIDTH,
        CUISENAIRE_ROD_HEIGHT,
        mmToPxScale,
        OUTER_LINE_COLOR,
      );
      for (var i = 0; i < 4; ++i) {
        var X = length * (i + 1);
        appendLine(svg, INNER_LINE_STYLE, X, X, 0, CUISENAIRE_ROD_HEIGHT, null);
      }
      // 'none' | 'onlyAbove' | 'onlyBelow' | 'both'
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
      var NUMBER_MIN_STRING =
        (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
      switch (sealingStyle) {
        case "onlyAbove":
          normalTextStartY += Y1;
          appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            length,
            CUISENAIRE_ROD_WIDTH,
            Y1,
            Y1,
            null,
          );
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MAX_STRING,
            textX1,
            aboveTextY,
            ROTATE,
            "left top",
            null,
            true,
          );
          if (NUMBER_MAX === 1) {
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MAX_STRING,
              textX3,
              aboveTextY,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          break;
        case "onlyBelow":
          appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            length,
            CUISENAIRE_ROD_WIDTH,
            Y2,
            Y2,
            null,
          );
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MIN_STRING,
            textX1,
            belowTextY,
            ROTATE,
            "left top",
            null,
            true,
          );
          if (NUMBER_MAX === 1) {
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MIN_STRING,
              textX3,
              belowTextY,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          break;
        case "both":
          normalTextStartY += Y1;
          appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
          appendLine(
            svg,
            CUT_LINE_STYLE,
            length,
            CUISENAIRE_ROD_WIDTH,
            Y1,
            Y1,
            null,
          );
          if (NUMBER_MAX > 1) {
            appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
            appendLine(
              svg,
              CUT_LINE_STYLE,
              length,
              CUISENAIRE_ROD_WIDTH,
              Y2,
              Y2,
              null,
            );
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MIN_STRING,
              textX1,
              belowTextY,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MAX_STRING,
            textX1,
            aboveTextY,
            ROTATE,
            "left top",
            null,
            true,
          );
          if (NUMBER_MAX === 1) {
            appendText(
              svg,
              TEXT_STYLE,
              NUMBER_MAX_STRING,
              textX3,
              aboveTextY,
              ROTATE,
              "left top",
              null,
              true,
            );
          }
          break;
        case "none":
        default:
          break;
      }
      var normalTextStartX = length * 0.5;
      for (var numberLoop = NUMBER_MAX; numberLoop > 0; --numberLoop) {
        var Y = normalTextStartY + length * (NUMBER_MAX - numberLoop);
        for (var i = 0; i < 4; ++i) {
          appendText(
            svg,
            TEXT_STYLE,
            (numberLoop + startNumberOffset).toString(),
            normalTextStartX + length * i,
            Y,
            ROTATE,
            "left top",
            null,
            true,
          );
        }
      }
      return svg.outerHTML;
    };
    // private idOrClassPrefix = 'brickPageCuisenaireRod';
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var pages = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      // const innerLineStyle = getArrayRepeatSameValue('stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;', 10);
      // const cutLineStyle = getArrayRepeatSameValue('stroke:#555;stroke-width:0.2mm;', 10);
      // // const outerLineStyle = getArrayRepeatSameValue('#000000', 10);
      // const outerLineStyle = getArrayRepeatSameValue('stroke:#000;stroke-width:0.2mm;', 10);
      // const textStyle = getArrayRepeatSameValue('font-size:6mm;', 10); // stroke:#555;stroke-width:0.2mm;
      var innerLineStyle = [
        "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
      ];
      var cutLineStyle = ["stroke:#555;stroke-width:0.2mm;"];
      var outerLineStyle = ["stroke:#000;stroke-width:0.2mm;"];
      var textStyle = ["font-size:6mm;"];
      var onlyWhitePaper = false;
      var length = 10;
      var paperThickness = 0;
      var otherParameters = {};
      var usableList = [];
      [
        {
          digitalOverlay: false,
          strongI18n: { en: "Not Overlay", zh_cn: "无叠加", zh_tw: "無疊加" },
        },
        {
          digitalOverlay: true,
          strongI18n: { en: "Overlay", zh_cn: "叠加", zh_tw: "疊加" },
        },
      ].forEach(function (_a) {
        var digitalOverlay = _a.digitalOverlay, strongI18n = _a.strongI18n;
        usableList.push({
          strongI18n: strongI18n,
          buttonList: [
            {
              nameI18n: {
                en: "Full sealing",
                zh_cn: "全封口",
                zh_tw: "全封口",
              },
              sealingStyle: "both",
            },
            {
              nameI18n: {
                en: "Capped",
                zh_cn: "封顶",
                zh_tw: "封頂",
              },
              sealingStyle: "onlyAbove",
            },
            {
              nameI18n: {
                en: "No overlap on the back cover",
                zh_cn: "封底",
                zh_tw: "封底",
              },
              sealingStyle: "onlyBelow",
            },
            {
              nameI18n: {
                en: "No sealing, no stacking",
                zh_cn: "无封口",
                zh_tw: "無封口",
              },
              sealingStyle: "none",
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
                otherParameters: otherParameters,
              },
            };
          }),
        });
      });
      return usableList;
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      // this.appendTableHeadCell({ en: 'Only white paper', zh_cn: '只有白纸', zh_tw: '只有白紙' });
      _this.appendTableHeadCell({
        en: "Digital Overlay",
        zh_cn: "数字叠加",
        zh_tw: "數位疊加",
      });
      _this.appendTableHeadCell({
        en: "Sealing style",
        zh_cn: "封口方式",
        zh_tw: "封口方式",
      });
      _this.appendTableHeadCell({ en: "Length", zh_cn: "边长", zh_tw: "邊長" });
      _this.appendTableHeadCell({
        en: "Inner Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Cut Line Style",
        zh_cn: "剪开线样式",
        zh_tw: "剪開線樣式",
      });
      _this.appendTableHeadCell({
        en: "Outer Line Color",
        zh_cn: "外边线样式",
        zh_tw: "外邊線線樣",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
      _this.appendTableHeadCell({
        en: "Pages",
        zh_cn: "各色页数",
        zh_tw: "各色頁數",
      });
      _this.appendTableHeadCell({
        en: "Paper thickness",
        zh_cn: "纸厚",
        zh_tw: "紙厚",
      });
      // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (item) {
      var _a = item,
        onlyWhitePaper = _a.onlyWhitePaper,
        digitalOverlay = _a.digitalOverlay,
        sealingStyle = _a.sealingStyle,
        length = _a.length,
        innerLineStyle = _a.innerLineStyle,
        cutLineStyle = _a.cutLineStyle,
        outerLineStyle = _a.outerLineStyle,
        textStyle = _a.textStyle,
        pages = _a.pages,
        paperThickness = _a.paperThickness;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      // this.appendNormalTd(tr, id.length === 0 ? `svg_${(index + 1)}` : id, cuisenaireRod, 'id');
      // const tdOperation = createElement('td') as HTMLTableCellElement;
      // tr.appendChild(tdOperation);
      _this.appendOperationTd(tr, item);
      // , getI18nInnerHTML({ en: '', zh_cn: '', zh_tw: '' })
      // this.appendCheckboxTdWithoutText(tr, onlyWhitePaper, cuisenaireRod, 'onlyWhitePaper');
      _this.appendCheckboxTdWithoutText(
        tr,
        digitalOverlay,
        item,
        "digitalOverlay",
      );
      _this.appendSelectTd(tr, sealingStyle, item, "sealingStyle", [
        { value: "none", captions: { en: "None", zh_cn: "无", zh_tw: "無" } },
        {
          value: "onlyAbove",
          captions: { en: "Only Above", zh_cn: "仅顶", zh_tw: "僅頂" },
        },
        {
          value: "onlyBelow",
          captions: { en: "Only Below", zh_cn: "仅底", zh_tw: "僅底" },
        },
        {
          value: "both",
          captions: { en: "Both", zh_cn: "全部", zh_tw: "全部" },
        },
      ]);
      _this.appendNumberTd(tr, length, item, "length", 1, null, 1);
      _this.appendTextareaTd(
        tr,
        innerLineStyle.join("\n"),
        item,
        "innerLineStyle",
        "stringArray",
      );
      _this.appendTextareaTd(
        tr,
        cutLineStyle.join("\n"),
        item,
        "cutLineStyle",
        "stringArray",
      );
      _this.appendTextareaTd(
        tr,
        outerLineStyle.join("\n"),
        item,
        "outerLineStyle",
        "stringArray",
      );
      _this.appendTextareaTd(
        tr,
        textStyle.join("\n"),
        item,
        "textStyle",
        "stringArray",
      );
      _this.appendTextareaTd(
        tr,
        pages.join("\n"),
        item,
        "pages",
        "numberArray",
      );
      _this.appendNumberTd(
        tr,
        paperThickness,
        item,
        "paperThickness",
        0,
        null,
        null,
      );
    };
    return _this;
  }
  return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
