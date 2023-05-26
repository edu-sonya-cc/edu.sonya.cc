"use strict";
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, stopEventBubble } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { getNumbersArray, pushSameValueTimes, getArrayRepeatSameValue } from '../utils.ts';
// // import { DPIHelper } from '../DPIHelper.ts';
// import { svgSpace } from '../svgHelper.ts';
// // import { BrickBase } from './brickBase.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';
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
 * 功能：生成足球纸模型（镂空、五边形、六边形、整体——12个五边形加20个六边形可拼装一个足球）
 * 初建：2022-11-21 安启
 * 历史：2020-11-14
 * 参考：P:\0\000007\_学习\亲子手工\football	P:\0\000007\_学习\亲子手工\regularPolygons
 * 			https://baijiahao.baidu.com/s?id=1604503977833266384
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
    _this.idOrClassPrefix = "brickPageFootball";
    /** OK
     * 计算data和computedData数据
     */
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var _a = _this,
        computedData = _a.computedData,
        mmToPxScale = _a.mmToPxScale;
      var _b = _this.data,
        paperSize = _b.paperSize,
        isLandscape = _b.isLandscape,
        MAX_X = _b.maxX,
        MAX_Y = _b.maxY,
        pageMarginTop = _b.pageMarginTop,
        pageMarginBottom = _b.pageMarginBottom,
        pageMarginLeft = _b.pageMarginLeft,
        pageMarginRight = _b.pageMarginRight;
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
      var list = [];
      JSON.parse(JSON.stringify(_this.data.list)).forEach(function (item) {
        list.push(item);
      });
      var html = "";
      var elementList = [];
      list.filter(function (_a) {
        var rowCount = _a.rowCount;
        return rowCount === 0;
      }).forEach(function (item) {
        var element = _this.getElement(item, mmToPxScale, MAX_X, MAX_Y);
        // elementList.push({ element, alone: true });
        html += "<page>".concat(element.outerHTML, "</page>");
      });
      list.filter(function (_a) {
        var rowCount = _a.rowCount;
        return rowCount > 0;
      }).forEach(function (item) {
        switch (item.kind) {
          case "interlacedHexagon":
            // elementList.push({ element: this.getElement(item, mmToPxScale, MAX_X, MAX_Y) });
            elementList.push(_this.getElement(item, mmToPxScale, MAX_X, MAX_Y));
            break;
          default:
            var fixedRowCount = 1;
            switch (item.kind) {
              case "hollowOut":
              case "hollowOutWithHole":
                fixedRowCount = 0;
                break;
              default:
                fixedRowCount = 1;
                break;
            }
            var rowCount = item.rowCount;
            for (var i = 0; i < rowCount; ++i) {
              // elementList.push({ element: this.getElement({ ...item, rowCount: fixedRowCount }, mmToPxScale, MAX_X, MAX_Y) });
              elementList.push(
                _this.getElement(
                  __assign(__assign({}, item), { rowCount: fixedRowCount }),
                  mmToPxScale,
                  MAX_X,
                  MAX_Y,
                ),
              );
            }
            break;
        }
      });
      html += _this.getAutomaticPaginationHtmlFromChildList(
        elementList,
        MAX_X,
        MAX_Y,
      );
      var en = "".concat(FILENAME_POSTFIX, "football");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u8DB3\u7403");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u8DB3\u7403");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      computedData.html = html;
    };
    /** OK
     * 获取html元素
     * @param item 相关信息
     * @param mmToPxScale 毫米到像素的转换比例
     * @returns 带以毫米为单位的宽高信息的html元素
     */
    _this.getElement = function (item, mmToPxScale, PAPER_WIDTH, PAPER_HEIGHT) {
      var createSvg = svgSpace.edu.sonya.cc.SvgHelper.createSvg;
      var svg = createSvg();
      // 'hollowOut' | 'hollowOutWithHole' | 'pentagon' | 'hexagon' | 'interlacedHexagon' | 'unify'
      switch (item.kind) {
        case "hollowOut":
          _this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 0);
          break;
        case "hollowOutWithHole":
          _this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 1);
          break;
        case "interlacedHexagon":
          _this.countInterlacedHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
          break;
        case "pentagon":
          _this.countPentagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
          break;
        case "hexagon":
          _this.countHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
          break;
        case "unify":
          _this.countUnifySvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
          break;
        default:
          break;
      }
      // appendOuterLine(svg, wholeWidth, wholeHeight, outerLineStyle);
      var widthMm = svg.widthMm, heightMm = svg.heightMm;
      svg.setAttribute("width", "".concat(widthMm, "mm"));
      svg.setAttribute("height", "".concat(heightMm, "mm"));
      // svg.setAttribute('style', `width:${widthMm}mm;height:${heightMm}mm;`);
      return svg;
    };
    /**
     * 计算镂空元素信息
     * @param svg 元素
     * @param item 相关信息
     * @param PAPER_WIDTH 页宽
     * @param PAPER_HEIGHT 页高
     * @param HOLLOW_STYLE 是否带孔
     */
    _this.countHollowOutSvg = function (
      svg,
      item,
      PAPER_WIDTH,
      PAPER_HEIGHT,
      HOLLOW_STYLE,
    ) {
      // P:\0\000007\_学习\亲子手工\football\index.htm
      var _a = svgSpace.edu.sonya.cc.SvgHelper,
        appendLine = _a.appendLine,
        appendCircle = _a.appendCircle;
      var SIDE_LENGTH = item.length,
        // kind,
        // rowCount,
        innerLineStyle = item.innerLineStyle,
        outerLineStyle = item.outerLineStyle,
        cutLineStyle = item.cutLineStyle;
      // let widthMm = 0, heightMm = 0;
      var RADIUS = 3;
      var RADIUS_MINI = 0.1;
      var ANGLE30 = Math.PI * 30 / 180;
      var ANGLE60 = Math.PI * 60 / 180;
      var SIN30 = Math.sin(ANGLE30);
      var SIN60 = Math.sin(ANGLE60);
      var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
      var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
      var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
      var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
      var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
      var OFFSET_X = SIDE_LENGTH * 0.2;
      var OFFSET_X_BIAS = OFFSET_X * SIN30;
      var OFFSET_Y_BIAS = OFFSET_X * SIN60;
      // 0镂空 1镂空带孔
      // const HOLLOW_STYLE = 1;
      var ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
      // const ROW_COUNT = Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
      var ROW_COUNT = Math.floor((Math.floor(PAPER_HEIGHT / ROW_HEIGHT)) / 9) *
        9;
      // console.log('ROW_COUNT:', ROW_COUNT);
      var WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
      var COL_GROUP_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE / 6);
      // const COL_COUNT = Math.min(Math.floor(PAPER_WIDTH / WIDTH_OF_ONE), 6);
      var COL_COUNT = 6;
      // console.log('COL_COUNT:', COL_COUNT);
      for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
        var rowGroupIndex = rowIndex === 0 ? 0 : Math.floor((rowIndex - 1) / 8);
        var TOP = ROW_HEIGHT * rowIndex;
        // const rowIndexInGroup = rowIndex - rowGroupIndex * 8 - (rowGroupIndex === 0 ? 0 : 1);
        var rowIndexInGroup = rowIndex - rowGroupIndex * 8;
        // console.log(rowIndex, '=>', rowGroupIndex, ' ', rowIndexInGroup);
        for (var groupIndex = 0; groupIndex < COL_GROUP_COUNT; ++groupIndex) {
          var LEFT_GROUP = SIDE_LENGTH * SIN30 +
            (rowIndex % 2 === 0
              ? 0
              : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH) +
            WIDTH_OF_ONE * 6 * groupIndex;
          for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
            // const LEFT = SIDE_LENGTH * SIN30 + WIDTH_OF_ONE * colIndex + (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH);
            // const LEFT = SIDE_LENGTH * SIN30 + (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH) + WIDTH_OF_ONE * colIndex;
            var LEFT = LEFT_GROUP + WIDTH_OF_ONE * colIndex;
            var Ax = 0, Ay = 0;
            var Bx = 0, By = 0;
            var Cx = 0, Cy = 0;
            var Dx = 0, Dy = 0;
            var Ex = 0, Ey = 0;
            var Fx = 0, Fy = 0;
            Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
            Bx = Ax + SIDE_LENGTH;
            Cx = LEFT + LONG_LINE_LENGTH;
            Dx = Bx;
            Ex = Ax;
            Fx = LEFT;
            Ay = TOP;
            By = Ay;
            Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
            Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
            Ey = Dy;
            Fy = Cy;
            var isBoundary = false;
            var isHide = false;
            isHide = rowIndexInGroup === 0 && colIndex === 0;
            isHide = isHide ||
              (colIndex === 0 &&
                (rowIndexInGroup === 4 || rowIndexInGroup === 8));
            isHide = isHide ||
              (colIndex === 5 &&
                (rowIndexInGroup === 4 || rowIndexInGroup === 5 ||
                  rowIndexInGroup === 7));
            // if (HOLLOW_STYLE === 0) { isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0); }
            isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0);
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 2 ||
                rowIndexInGroup === 4 ||
                rowIndexInGroup === 5 || rowIndexInGroup === 7;
            }
            isBoundary = rowIndexInGroup === 0 || rowIndexInGroup === 1;
            isBoundary = isBoundary || rowIndexInGroup === 8;
            isBoundary = isBoundary ||
              (rowIndexInGroup === 2 && colIndex === 0);
            if (!isHide) {
              appendLine(
                svg,
                isBoundary ? outerLineStyle : innerLineStyle,
                Ax,
                Bx,
                Ay,
                By,
                null,
              );
            }
            if (rowIndex % 2 === 0 || colIndex === COL_COUNT - 1) {
              isHide = rowIndexInGroup === 0 && colIndex === 0;
              isHide = isHide || (rowIndexInGroup === 7 && colIndex === 5);
              isHide = isHide || (rowIndexInGroup === 7 && colIndex === 4);
              // isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
              isHide = isHide ||
                (colIndex === 5 && rowIndexInGroup === 8 &&
                  (Ey + SIDE_LENGTH) >= PAPER_HEIGHT);
              isHide = isHide || (Ay + SIDE_LENGTH) >= PAPER_HEIGHT;
              // if (HOLLOW_STYLE === 0) { isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5); }
              isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
              // if (HOLLOW_STYLE > 0) { isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 6 && colIndex < 5); }
              if (HOLLOW_STYLE > 0) {
                isHide = isHide || rowIndexInGroup === 2 ||
                  rowIndexInGroup === 6;
              }
              isBoundary = rowIndexInGroup === 0 && colIndex > 0;
              isBoundary = isBoundary ||
                (colIndex === 5 && rowIndexInGroup % 2 === 1);
              isBoundary = isBoundary ||
                (colIndex === 0 && (rowIndexInGroup === 8));
              isBoundary = isBoundary ||
                (colIndex === 5 &&
                  (rowIndexInGroup === 5 || rowIndexInGroup === 6 ||
                    rowIndexInGroup === 8));
              isBoundary = isBoundary || rowIndexInGroup === 8;
              if (HOLLOW_STYLE === 0) {
                isBoundary = isBoundary ||
                  (rowIndexInGroup === 2 && colIndex === 0);
              }
              if (!isHide) {
                appendLine(
                  svg,
                  isBoundary ? outerLineStyle : innerLineStyle,
                  Bx,
                  Cx,
                  By,
                  Cy,
                  null,
                );
              }
              // if (Dy < PAPER_HEIGHT && !(colIndex === 5 && rowIndexInGroup === 7) && !(HOLLOW_STYLE === 0 && colIndex === 5 && rowIndexInGroup === 5)) {
              if (Dy < PAPER_HEIGHT) {
                isHide = colIndex === 5 &&
                  (rowIndexInGroup === 7 || rowIndexInGroup === 5);
                if (HOLLOW_STYLE > 0) {
                  isHide = isHide || (colIndex === 5 && rowIndexInGroup === 4);
                }
                isHide = isHide ||
                  (rowIndexInGroup === 8 && rowIndex === ROW_COUNT - 1);
                isBoundary = colIndex === 0 &&
                  (rowIndexInGroup === 0 || rowIndexInGroup === 8);
                isBoundary = isBoundary ||
                  (colIndex === 5 &&
                    (rowIndexInGroup % 2 === 1 || rowIndexInGroup === 6 ||
                      rowIndexInGroup === 4));
                if (HOLLOW_STYLE > 0) {
                  isBoundary = isBoundary &&
                    !(colIndex === 5 && rowIndexInGroup === 6);
                }
                if (HOLLOW_STYLE === 0) {
                  isBoundary = isBoundary ||
                    (rowIndexInGroup === 2 && colIndex === 0);
                }
                if (!isHide) {
                  if (isBoundary) {
                    appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
                  } else if (
                    rowIndexInGroup === 0 || rowIndexInGroup === 6 ||
                    rowIndexInGroup === 8
                  ) {
                    appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                  } else {
                    if (
                      HOLLOW_STYLE === 0 ||
                      !(rowIndexInGroup === 2 || rowIndexInGroup === 4)
                    ) {
                      appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
                    }
                  }
                }
              }
            }
            isHide = colIndex === 0 &&
              (rowIndexInGroup === 0 || rowIndexInGroup === 8);
            isHide = isHide ||
              (colIndex === 5 && rowIndexInGroup === 7 &&
                (Ey + SIDE_LENGTH) >= PAPER_HEIGHT);
            isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
            // if (HOLLOW_STYLE > 0) { isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0); }
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 2 || rowIndexInGroup === 5;
            }
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 0 || rowIndexInGroup === 3;
            }
            isBoundary = rowIndexInGroup === 7 ||
              (rowIndexInGroup === 3 && colIndex === 5);
            isBoundary = isBoundary ||
              (colIndex === 0 && (rowIndexInGroup === 6));
            isBoundary = isBoundary ||
              (rowIndexInGroup === 6 && (Ey + SIDE_LENGTH) >= PAPER_HEIGHT);
            if (HOLLOW_STYLE > 0) {
              isBoundary = isBoundary ||
                (rowIndexInGroup === 5 && colIndex === 5);
            }
            if (HOLLOW_STYLE === 0) {
              isBoundary = isBoundary ||
                (rowIndexInGroup === 2 && colIndex === 0);
            }
            if (!isHide) {
              appendLine(
                svg,
                isBoundary ? outerLineStyle : innerLineStyle,
                Dx,
                Ex,
                Dy,
                Ey,
                null,
              );
            }
            if (rowIndex % 2 === 0) {
              isHide = colIndex === 0 &&
                (rowIndexInGroup === 0 || rowIndexInGroup === 2 ||
                  rowIndexInGroup === 8);
              isHide = isHide || Ey >= PAPER_HEIGHT;
              if (HOLLOW_STYLE > 0) {
                isHide = isHide || rowIndexInGroup === 2 ||
                  (rowIndexInGroup === 4 && colIndex > 0);
              }
              isBoundary = colIndex === 0 &&
                (rowIndexInGroup === 4 || rowIndexInGroup === 6);
              isBoundary = isBoundary ||
                (rowIndexInGroup === 6 && (Ey + SIDE_LENGTH) >= PAPER_HEIGHT);
              if (!isHide) {
                appendLine(
                  svg,
                  isBoundary ? outerLineStyle : innerLineStyle,
                  Ex,
                  Fx,
                  Ey,
                  Fy,
                  null,
                );
              }
              isHide = colIndex === 0 &&
                (rowIndexInGroup === 0 || rowIndexInGroup === 2 ||
                  rowIndexInGroup === 8);
              isHide = isHide || (Ay + SIDE_LENGTH) >= PAPER_HEIGHT;
              if (HOLLOW_STYLE > 0) {
                isHide = isHide || rowIndexInGroup === 2 ||
                  (rowIndexInGroup === 6 && colIndex > 0);
              }
              isBoundary = rowIndexInGroup === 0 || colIndex === 0 ||
                rowIndexInGroup === 8;
              if (!isHide) {
                appendLine(
                  svg,
                  isBoundary ? outerLineStyle : innerLineStyle,
                  Fx,
                  Ax,
                  Fy,
                  Ay,
                  null,
                );
              }
            }
            switch (rowIndexInGroup) {
              case 2:
              case 5:
                // if ((rowIndexInGroup === 2 && colIndex > 0) || (rowIndexInGroup === 5 && colIndex % 6 < 5)) {
                if (rowIndexInGroup === 2 || rowIndexInGroup === 5) {
                  var circleX = (Ax + Bx + Cx + Dx + Ex + Fx) / 6;
                  var circleY = (Ay + By + Cy + Dy + Ey + Fy) / 6;
                  switch (HOLLOW_STYLE) {
                    case 0:
                      if (
                        (rowIndexInGroup === 2 && colIndex > 0) ||
                        (rowIndexInGroup === 5 && colIndex % 6 < 5)
                      ) {
                        // appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);
                        // appendLine(svg, outerLineStyle, Bx, Cx, By, Cy, null);
                        // appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
                        // appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);
                        // appendLine(svg, outerLineStyle, Ex, Fx, Ey, Fy, null);
                        // appendLine(svg, outerLineStyle, Fx, Ax, Fy, Ay, null);
                        appendLine(svg, cutLineStyle, Ax, Bx, Ay, By, null);
                        appendLine(svg, cutLineStyle, Bx, Cx, By, Cy, null);
                        appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                        appendLine(svg, cutLineStyle, Dx, Ex, Dy, Ey, null);
                        appendLine(svg, cutLineStyle, Ex, Fx, Ey, Fy, null);
                        appendLine(svg, cutLineStyle, Fx, Ax, Fy, Ay, null);
                      }
                      break;
                    case 1:
                      appendCircle(
                        svg,
                        innerLineStyle,
                        circleX,
                        circleY,
                        RADIUS,
                        null,
                      );
                      appendCircle(
                        svg,
                        innerLineStyle,
                        circleX,
                        circleY,
                        RADIUS_MINI,
                        null,
                      );
                      appendLine(svg, cutLineStyle, Ax, Bx, Ay, By, null);
                      appendLine(svg, cutLineStyle, Bx, Cx, By, Cy, null);
                      appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                      appendLine(svg, cutLineStyle, Dx, Ex, Dy, Ey, null);
                      appendLine(svg, cutLineStyle, Ex, Fx, Ey, Fy, null);
                      appendLine(svg, cutLineStyle, Fx, Ax, Fy, Ay, null);
                      switch (rowIndexInGroup) {
                        case 2:
                          appendLine(
                            svg,
                            outerLineStyle,
                            Bx,
                            circleX,
                            By,
                            circleY,
                            null,
                          );
                          appendLine(
                            svg,
                            outerLineStyle,
                            Ax,
                            circleX,
                            Ay,
                            circleY,
                            null,
                          );
                          break;
                        case 5:
                          appendLine(
                            svg,
                            outerLineStyle,
                            Ex,
                            circleX,
                            Ey,
                            circleY,
                            null,
                          );
                          appendLine(
                            svg,
                            outerLineStyle,
                            Dx,
                            circleX,
                            Dy,
                            circleY,
                            null,
                          );
                          break;
                        default:
                          break;
                      }
                      break;
                    case 2:
                      // appendLine(svg, innerLineStyle, Ax, circleX, Ay, circleY, null);
                      // appendLine(svg, rowIndexInGroup === 2 ? outerLineStyle : innerLineStyle, Bx, circleX, By, circleY, null);
                      // appendLine(svg, innerLineStyle, Cx, circleX, Cy, circleY, null);
                      // appendLine(svg, innerLineStyle, Dx, circleX, Dy, circleY, null);
                      // appendLine(svg, rowIndexInGroup === 5 ? outerLineStyle : innerLineStyle, Ex, circleX, Ey, circleY, null);
                      // appendLine(svg, innerLineStyle, Fx, circleX, Fy, circleY, null);
                      switch (rowIndexInGroup) {
                        case 2:
                          appendLine(
                            svg,
                            outerLineStyle,
                            Bx,
                            circleX,
                            By,
                            circleY,
                            null,
                          );
                          appendLine(
                            svg,
                            outerLineStyle,
                            Ax,
                            circleX,
                            Ay,
                            circleY,
                            null,
                          );
                          appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);
                          appendLine(
                            svg,
                            outerLineStyle,
                            Dx - OFFSET_X,
                            Ex + OFFSET_X,
                            Dy,
                            Dy,
                            null,
                          );
                          break;
                        case 5:
                          appendLine(
                            svg,
                            outerLineStyle,
                            Ex,
                            circleX,
                            Ey,
                            circleY,
                            null,
                          );
                          appendLine(
                            svg,
                            outerLineStyle,
                            Dx,
                            circleX,
                            Dy,
                            circleY,
                            null,
                          );
                          appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);
                          appendLine(
                            svg,
                            outerLineStyle,
                            Ax + OFFSET_X,
                            Bx - OFFSET_X,
                            Ay,
                            Ay,
                            null,
                          );
                          break;
                        default:
                          break;
                      }
                      // appendLine(svg, outerLineStyle, Ax + OFFSET_X, Bx - OFFSET_X, Ay, Ay, null);
                      appendLine(
                        svg,
                        outerLineStyle,
                        Bx + OFFSET_X_BIAS,
                        Cx - OFFSET_X_BIAS,
                        By + OFFSET_Y_BIAS,
                        Cy - OFFSET_Y_BIAS,
                        null,
                      );
                      appendLine(
                        svg,
                        outerLineStyle,
                        Cx - OFFSET_X_BIAS,
                        Dx + OFFSET_X_BIAS,
                        Cy + OFFSET_Y_BIAS,
                        Dy - OFFSET_Y_BIAS,
                        null,
                      );
                      // appendLine(svg, outerLineStyle, Dx - OFFSET_X, Ex + OFFSET_X, Dy, Dy, null);
                      appendLine(
                        svg,
                        outerLineStyle,
                        Ex - OFFSET_X_BIAS,
                        Fx + OFFSET_X_BIAS,
                        Ey - OFFSET_Y_BIAS,
                        Fy + OFFSET_Y_BIAS,
                        null,
                      );
                      appendLine(
                        svg,
                        outerLineStyle,
                        Fx + OFFSET_X_BIAS,
                        Ax - OFFSET_X_BIAS,
                        Fy - OFFSET_Y_BIAS,
                        Ay + OFFSET_Y_BIAS,
                        null,
                      );
                      break;
                    default:
                      break;
                  }
                }
                break;
              default:
                break;
            }
          }
        }
      }
      var widthMm = WIDTH_OF_ONE * 6 * COL_GROUP_COUNT +
        SIN30_MULTIPLY_SIDE_LENGTH +
        SIDE_LENGTH * 0.5;
      var heightMm = ROW_HEIGHT * ROW_COUNT + SIDE_LENGTH;
      svg.widthMm = widthMm;
      svg.heightMm = heightMm;
    };
    /**
     * 计算交错六边形元素信息
     * @param svg 元素
     * @param item 相关信息
     * @param PAPER_WIDTH 页宽
     * @param PAPER_HEIGHT 页高
     */
    _this.countInterlacedHexagonSvg = function (
      svg,
      item,
      PAPER_WIDTH,
      PAPER_HEIGHT,
    ) {
      // P:\0\000007\_学习\亲子手工\regularPolygons\regularHexagon\index.htm
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var SIDE_LENGTH = item.length,
        // kind,
        rowCount = item.rowCount,
        innerLineStyle = item.innerLineStyle,
        outerLineStyle = item.outerLineStyle,
        cutLineStyle = item.cutLineStyle;
      var ANGLE30 = Math.PI * 30 / 180;
      var ANGLE60 = Math.PI * 60 / 180;
      var SIN30 = Math.sin(ANGLE30);
      var SIN60 = Math.sin(ANGLE60);
      var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
      var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
      var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
      var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
      var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
      var ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
      var ROW_COUNT = rowCount
        ? (rowCount * 2)
        : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
      var WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
      // const COL_COUNT = Math.floor((PAPER_WIDTH - LONG_LINE_LENGTH) / WIDTH_OF_ONE) + 1;
      var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
      for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
        var TOP = ROW_HEIGHT * rowIndex;
        for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
          var LEFT = SIDE_LENGTH * SIN30 + WIDTH_OF_ONE * colIndex +
            (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH);
          var Ax = 0, Ay = 0;
          var Bx = 0, By = 0;
          var Cx = 0, Cy = 0;
          var Dx = 0, Dy = 0;
          var Ex = 0, Ey = 0;
          var Fx = 0, Fy = 0;
          Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
          Bx = Ax + SIDE_LENGTH;
          Cx = LEFT + LONG_LINE_LENGTH;
          Dx = Bx;
          Ex = Ax;
          Fx = LEFT;
          Ay = TOP;
          By = Ay;
          Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
          Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
          Ey = Dy;
          Fy = Cy;
          appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);
          if (rowIndex % 2 === 0 || colIndex === COL_COUNT - 1) {
            appendLine(svg, outerLineStyle, Bx, Cx, By, Cy, null);
            if (Dy < PAPER_HEIGHT) {
              appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
            }
          }
          appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);
          if (rowIndex % 2 === 0) {
            appendLine(svg, outerLineStyle, Ex, Fx, Ey, Fy, null);
            appendLine(svg, outerLineStyle, Fx, Ax, Fy, Ay, null);
          }
        }
      }
      // 如果计算出错，可直接修正widthMm为PAPER_WIDTH
      var widthMm = WIDTH_OF_ONE * COL_COUNT + SIN30_MULTIPLY_SIDE_LENGTH +
        SIDE_LENGTH * 0.5;
      var heightMm = ROW_HEIGHT * ROW_COUNT + 0.1;
      svg.widthMm = widthMm;
      svg.heightMm = heightMm;
    };
    /**
     * 计算五边形元素信息
     * @param svg 元素
     * @param item 相关信息
     * @param PAPER_WIDTH 页宽
     * @param PAPER_HEIGHT 页高
     */
    _this.countPentagonSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
      // P:\0\000007\_学习\亲子手工\regularPolygons\regularPentagon_alone\index.htm
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var SIDE_LENGTH = item.length,
        // kind,
        rowCount = item.rowCount,
        innerLineStyle = item.innerLineStyle,
        outerLineStyle = item.outerLineStyle;
      var OUTSIDE_SCALE = 0.4;
      var ANGLE18 = Math.PI * 18 / 180;
      var ANGLE36 = Math.PI * 36 / 180;
      var ANGLE54 = Math.PI * 54 / 180;
      var ANGLE72 = Math.PI * 72 / 180;
      var SIN18 = Math.sin(ANGLE18);
      var SIN36 = Math.sin(ANGLE36);
      var SIN54 = Math.sin(ANGLE54);
      var SIN72 = Math.sin(ANGLE72);
      var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
      var LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
      var HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
      var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
      var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
      var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
      var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
      var SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
      // 下句末尾的HALF_SIDE_LENGTH用于调节两个骰子之间距离
      var ROW_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH +
        SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
        SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
      var ROW_COUNT_PER_PAGE = Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
      // BUG: rowCount导致超过一页时，将溢出。为避免此Bug，强行修正（可能会与期望情况不一致）
      // 经修正，rowCount只可能为0或1，已避开此Bug
      var ROW_COUNT = rowCount
        ? Math.min(ROW_COUNT_PER_PAGE, rowCount)
        : ROW_COUNT_PER_PAGE;
      var WIDTH_OF_ONE = SIDE_LENGTH * 2.4;
      var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
      // let widthMm = 0;
      // let heightMm = 0;
      for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
        var TOP = ROW_HEIGHT * rowIndex;
        for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
          var LEFT = WIDTH_OF_ONE * colIndex;
          var A1x = 0, A1y = 0;
          var A2x = 0, A2y = 0;
          var A3x = 0, A3y = 0;
          var B1x = 0, B1y = 0;
          var B2x = 0, B2y = 0;
          var B3x = 0, B3y = 0;
          var C1x = 0, C1y = 0;
          var C2x = 0, C2y = 0;
          var C3x = 0, C3y = 0;
          var D1x = 0, D1y = 0;
          var D2x = 0, D2y = 0;
          var D3x = 0, D3y = 0;
          var E1x = 0, E1y = 0;
          var E2x = 0, E2y = 0;
          var E3x = 0, E3y = 0;
          A1x = LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) +
            LONG_SIDE_LENGTH * 0.5;
          B1x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
          E1x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
          C1x = B1x - SIN18_MULTIPLY_SIDE_LENGTH;
          D1x = E1x + SIN18_MULTIPLY_SIDE_LENGTH;
          A1y = TOP + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          B1y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
          E1y = B1y;
          C1y = B1y + SIN72_MULTIPLY_SIDE_LENGTH;
          D1y = C1y;
          A2x = A1x - SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          A3x = A1x + SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          A2y = TOP;
          A3y = TOP;
          B2x = B1x + SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          B2y = B1y - SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          B3x = B1x + SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          B3y = B1y + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          C2x = C1x + SIDE_LENGTH * OUTSIDE_SCALE;
          C3x = C1x - SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          C2y = C1y;
          C3y = C1y + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          D2x = D1x + SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          D3x = D1x - SIDE_LENGTH * OUTSIDE_SCALE;
          D2y = D1y + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          D3y = D1y;
          E2x = E1x - SIN54_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          E3x = E1x - SIN18_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          E2y = E1y + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          E3y = E1y - SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          appendLine(svg, innerLineStyle, A1x, B1x, A1y, B1y, null);
          appendLine(svg, innerLineStyle, B1x, C1x, B1y, C1y, null);
          appendLine(svg, innerLineStyle, C1x, D1x, C1y, D1y, null);
          appendLine(svg, innerLineStyle, D1x, E1x, D1y, E1y, null);
          appendLine(svg, innerLineStyle, E1x, A1x, E1y, A1y, null);
          appendLine(svg, outerLineStyle, A1x, A2x, A1y, A2y, null);
          appendLine(svg, outerLineStyle, A1x, A3x, A1y, A3y, null);
          appendLine(svg, outerLineStyle, B1x, B2x, B1y, B2y, null);
          appendLine(svg, outerLineStyle, B1x, B3x, B1y, B3y, null);
          appendLine(svg, outerLineStyle, C1x, C2x, C1y, C2y, null);
          appendLine(svg, outerLineStyle, C1x, C3x, C1y, C3y, null);
          appendLine(svg, outerLineStyle, D1x, D2x, D1y, D2y, null);
          appendLine(svg, outerLineStyle, D1x, D3x, D1y, D3y, null);
          appendLine(svg, outerLineStyle, E1x, E2x, E1y, E2y, null);
          appendLine(svg, outerLineStyle, E1x, E3x, E1y, E3y, null);
          appendLine(svg, outerLineStyle, A3x, B2x, A3y, B2y, null);
          appendLine(svg, outerLineStyle, B3x, C2x, B3y, C2y, null);
          appendLine(svg, outerLineStyle, C3x, D2x, C3y, D2y, null);
          appendLine(svg, outerLineStyle, D3x, E2x, D3y, E2y, null);
          appendLine(svg, outerLineStyle, E3x, A2x, E3y, A2y, null);
          // widthMm = Math.max(widthMm, A1x, A2x, A3x, B1x, B2x, B3x, C1x, C2x, C3x, D1x, D2x, D3x, E1x, E2x, E3x);
          // heightMm = Math.max(heightMm, A1y, A2y, A3y, B1y, B2y, B3y, C1y, C2y, C3y, D1y, D2y, D3y, E1y, E2y, E3y);
        }
      }
      // 如果计算出错，可直接修正widthMm为PAPER_WIDTH
      var widthMm = WIDTH_OF_ONE * COL_COUNT;
      var heightMm = ROW_HEIGHT * ROW_COUNT;
      svg.widthMm = widthMm;
      svg.heightMm = heightMm;
    };
    /**
     * 计算六边形元素信息
     * @param svg 元素
     * @param item 相关信息
     * @param PAPER_WIDTH 页宽
     * @param PAPER_HEIGHT 页高
     */
    _this.countHexagonSvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var SIDE_LENGTH = item.length,
        // kind,
        rowCount = item.rowCount,
        innerLineStyle = item.innerLineStyle,
        outerLineStyle = item.outerLineStyle,
        cutLineStyle = item.cutLineStyle;
      var ANGLE30 = Math.PI * 30 / 180;
      var ANGLE60 = Math.PI * 60 / 180;
      var SIN30 = Math.sin(ANGLE30);
      var SIN60 = Math.sin(ANGLE60);
      var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
      var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
      var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
      var LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;
      var SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      var HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;
      var ROW_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      var ROW_COUNT = rowCount
        ? rowCount
        : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
      var WIDTH_OF_ONE = LONG_LINE_LENGTH;
      var COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);
      for (var rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
        var TOP = ROW_HEIGHT * rowIndex;
        for (var colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
          var LEFT = WIDTH_OF_ONE * colIndex;
          var Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
          var Bx = Ax + SIDE_LENGTH;
          var Cx = LEFT + WIDTH_OF_ONE;
          var Dx = Bx;
          var Ex = Ax;
          var Fx = LEFT;
          var Ay = TOP;
          var By = Ay;
          var Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
          var Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
          var Ey = Dy;
          var Fy = Cy;
          appendLine(svg, innerLineStyle, Ax, Bx, Ay, By, null);
          appendLine(svg, innerLineStyle, Bx, Cx, By, Cy, null);
          appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
          appendLine(svg, innerLineStyle, Dx, Ex, Dy, Ey, null);
          appendLine(svg, innerLineStyle, Ex, Fx, Ey, Fy, null);
          appendLine(svg, innerLineStyle, Fx, Ax, Fy, Ay, null);
        }
      }
      // 如果计算出错，可直接修正widthMm为PAPER_WIDTH
      var widthMm = WIDTH_OF_ONE * COL_COUNT;
      var heightMm = ROW_HEIGHT * ROW_COUNT;
      svg.widthMm = widthMm;
      svg.heightMm = heightMm;
    };
    _this.appendPentagon = function (
      svg,
      SIDE_LENGTH,
      innerLineStyle,
      outerLineStyle,
      TOP,
      LEFT,
      kind,
      mirror,
      viewBox,
    ) {
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var OUTSIDE_SCALE = 0.4;
      var ANGLE18 = Math.PI * 18 / 180;
      var ANGLE36 = Math.PI * 36 / 180;
      var ANGLE54 = Math.PI * 54 / 180;
      var ANGLE72 = Math.PI * 72 / 180;
      var SIN18 = Math.sin(ANGLE18);
      var SIN36 = Math.sin(ANGLE36);
      var SIN54 = Math.sin(ANGLE54);
      var SIN72 = Math.sin(ANGLE72);
      var PENTAGON_LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
      var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
      var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
      var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
      var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
      var SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;
      var PENTAGON_CORE_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH;
      var PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH +
        SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
        SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
      var PENTAGON_CORE_WIDTH = SIN18_MULTIPLY_SIDE_LENGTH * 2;
      var PENTAGON_WIDTH = PENTAGON_CORE_WIDTH +
        PENTAGON_CORE_WIDTH * OUTSIDE_SCALE;
      var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
      var PENTAGON_HALF_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * 0.5;
      var MIRROR_SCALE = mirror ? -1 : 1;
      TOP -= (SIN72_MULTIPLY_LONG_SIDE_LENGTH +
        SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE) *
        MIRROR_SCALE;
      var A1x = LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2);
      var B1x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
      var E1x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
      var C1x = B1x - SIN18_MULTIPLY_SIDE_LENGTH;
      var D1x = E1x + SIN18_MULTIPLY_SIDE_LENGTH;
      var A2x = A1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
      var A3x = A1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
      var B2x = B1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
      var B3x = B1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
      var C2x = C1x + SIDE_LENGTH * 0.4;
      var C3x = C1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
      var D2x = D1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
      var D3x = D1x - SIDE_LENGTH * 0.4;
      var E2x = E1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
      var E3x = E1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
      var A1y = TOP + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var B1y = A1y + SIN36_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
      var E1y = B1y;
      var C1y = B1y + SIN72_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
      var D1y = C1y;
      var A2y = TOP;
      var A3y = TOP;
      var B2y = B1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var B3y = B1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var C2y = C1y;
      var C3y = C1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var D2y = D1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var D3y = D1y;
      var E2y = E1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      var E3y = E1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
      // appendLine(svg, innerLineStyle, A1x, B1x, A1y, B1y, viewBox);
      // appendLine(svg, innerLineStyle, B1x, C1x, B1y, C1y, viewBox);
      // appendLine(svg, innerLineStyle, C1x, D1x, C1y, D1y, viewBox);
      // appendLine(svg, innerLineStyle, D1x, E1x, D1y, E1y, viewBox);
      // appendLine(svg, innerLineStyle, E1x, A1x, E1y, A1y, viewBox);
      // appendLine(svg, outerLineStyle, A1x, A2x, A1y, A2y, viewBox);
      // appendLine(svg, outerLineStyle, A1x, A3x, A1y, A3y, viewBox);
      // appendLine(svg, outerLineStyle, B1x, B2x, B1y, B2y, viewBox);
      // appendLine(svg, outerLineStyle, B1x, B3x, B1y, B3y, viewBox);
      // appendLine(svg, outerLineStyle, C1x, C2x, C1y, C2y, viewBox);
      // appendLine(svg, outerLineStyle, C1x, C3x, C1y, C3y, viewBox);
      // appendLine(svg, outerLineStyle, D1x, D2x, D1y, D2y, viewBox);
      // appendLine(svg, outerLineStyle, D1x, D3x, D1y, D3y, viewBox);
      // appendLine(svg, outerLineStyle, E1x, E2x, E1y, E2y, viewBox);
      // appendLine(svg, outerLineStyle, E1x, E3x, E1y, E3y, viewBox);
      // appendLine(svg, outerLineStyle, A3x, B2x, A3y, B2y, viewBox);
      // appendLine(svg, outerLineStyle, B3x, C2x, B3y, C2y, viewBox);
      // appendLine(svg, outerLineStyle, C3x, D2x, C3y, D2y, viewBox);
      // appendLine(svg, outerLineStyle, D3x, E2x, D3y, E2y, viewBox);
      // appendLine(svg, outerLineStyle, E3x, A2x, E3y, A2y, viewBox);
      appendLine(svg, outerLineStyle, A1x, B1x, A1y, B1y, viewBox);
      appendLine(svg, outerLineStyle, B1x, C1x, B1y, C1y, viewBox);
      appendLine(svg, outerLineStyle, C1x, D1x, C1y, D1y, viewBox);
      appendLine(svg, outerLineStyle, D1x, E1x, D1y, E1y, viewBox);
      appendLine(svg, outerLineStyle, E1x, A1x, E1y, A1y, viewBox);
      appendLine(svg, outerLineStyle, A1x, A3x, A1y, A3y, viewBox);
      appendLine(svg, outerLineStyle, A1x, A2x, A1y, A2y, viewBox);
      if (kind === 0) {
        return;
      }
      // appendLine(svg, outerLineStyle, C1x, C3x, C1y, C3y, viewBox);
      // appendLine(svg, outerLineStyle, D1x, D2x, D1y, D2y, viewBox);
      // appendLine(svg, outerLineStyle, C3x, D2x, C3y, D2y, viewBox);
      if (kind === 2 || !mirror) {
        appendLine(svg, outerLineStyle, A3x, B2x, A3y, B2y, viewBox);
        appendLine(svg, outerLineStyle, B1x, B2x, B1y, B2y, viewBox);
        appendLine(svg, outerLineStyle, B1x, B3x, B1y, B3y, viewBox);
        appendLine(svg, outerLineStyle, B3x, C2x, B3y, C2y, viewBox);
        appendLine(svg, outerLineStyle, C1x, C2x, C1y, C2y, viewBox);
      }
      if (kind === 2 || mirror) {
        appendLine(svg, outerLineStyle, D1x, D3x, D1y, D3y, viewBox);
        appendLine(svg, outerLineStyle, E1x, E2x, E1y, E2y, viewBox);
        appendLine(svg, outerLineStyle, E1x, E3x, E1y, E3y, viewBox);
        appendLine(svg, outerLineStyle, D3x, E2x, D3y, E2y, viewBox);
        appendLine(svg, outerLineStyle, E3x, A2x, E3y, A2y, viewBox);
      }
    };
    _this.appendHexagon = function (
      svg,
      SIDE_LENGTH,
      LINE_STYLE,
      TOP,
      LEFT,
      ROTATE,
      viewBox,
    ) {
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var ANGLE30 = Math.PI * 30 / 180;
      var SIN30 = Math.sin(ANGLE30);
      var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
      // const ANGLE60 = Math.PI * 60 / 180;
      // const SIN60 = Math.sin(ANGLE60);
      // const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
      // const HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      // const WIDTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
      var Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
      var Ay = TOP;
      var ANGLE_AB = Math.PI * ROTATE / 180;
      var Bx = Ax + SIDE_LENGTH * Math.cos(ANGLE_AB); // Ax + SIDE_LENGTH
      var By = Ay + SIDE_LENGTH * Math.sin(ANGLE_AB); // Ay
      var ANGLE_BC = Math.PI * (ROTATE - 30) / 180;
      var Cx = Bx - SIDE_LENGTH * Math.sin(ANGLE_BC); // LEFT + WIDTH;
      var Cy = By + SIDE_LENGTH * Math.cos(ANGLE_BC); // Ay + SIN60_MULTIPLY_SIDE_LENGTH;
      // const ANGLE_CD = Math.PI * (60 + (ROTATE - 30)) / 180;
      var ANGLE_CD = Math.PI * (ROTATE + 30) / 180;
      var Dx = Cx - SIDE_LENGTH * Math.sin(ANGLE_CD); // Bx;
      var Dy = Cy + SIDE_LENGTH * Math.cos(ANGLE_CD); // Cy + SIN60_MULTIPLY_SIDE_LENGTH;
      var ANGLE_DE = Math.PI * ROTATE / 180; // ANGLE_CD - 30
      var Ex = Dx - SIDE_LENGTH * Math.cos(ANGLE_DE);
      var Ey = Dy - SIDE_LENGTH * Math.sin(ANGLE_DE);
      var ANGLE_AF = Math.PI * (60 - ROTATE) / 180;
      var Fx = Ax - SIDE_LENGTH * Math.cos(ANGLE_AF);
      var Fy = Ay + SIDE_LENGTH * Math.sin(ANGLE_AF);
      // const ANGLE_FE = Math.PI * (ROTATE - 30) / 180;
      // const Ex = Fx - SIDE_LENGTH * Math.sin(ANGLE_FE);
      // const Ey = Fy + SIDE_LENGTH * Math.cos(ANGLE_FE);
      appendLine(svg, LINE_STYLE, Ax, Bx, Ay, By, viewBox);
      appendLine(svg, LINE_STYLE, Bx, Cx, By, Cy, viewBox);
      appendLine(svg, LINE_STYLE, Cx, Dx, Cy, Dy, viewBox);
      appendLine(svg, LINE_STYLE, Dx, Ex, Dy, Ey, viewBox);
      appendLine(svg, LINE_STYLE, Ex, Fx, Ey, Fy, viewBox);
      appendLine(svg, LINE_STYLE, Fx, Ax, Fy, Ay, viewBox);
    };
    /**
     * 计算整体足球元素信息
     * @param svg 元素
     * @param item 相关信息
     * @param PAPER_WIDTH 页宽
     * @param PAPER_HEIGHT 页高
     */
    _this.countUnifySvg = function (svg, item, PAPER_WIDTH, PAPER_HEIGHT) {
      // P:\0\000007\_学习\数学\骰子\阿基米德多面体\06截角二十面体.jpg
      var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
      var SIDE_LENGTH = item.length,
        // kind,
        rowCount = item.rowCount,
        INNER_LINE_STYLE = item.innerLineStyle,
        OUTER_LINE_STYLE = item.outerLineStyle;
      var _a = _this,
        appendHexagon = _a.appendHexagon,
        appendPentagon = _a.appendPentagon;
      // Hexagon
      var ANGLE30 = Math.PI * 30 / 180;
      var SIN30 = Math.sin(ANGLE30);
      var SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
      var ANGLE60 = Math.PI * 60 / 180;
      var SIN60 = Math.sin(ANGLE60);
      var SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;
      var HEXAGON_WIDTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
      var HEXAGON_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
      var OUTSIDE_SCALE = 0.4;
      var HEXAGON_OUTSIDE = SIDE_LENGTH * OUTSIDE_SCALE;
      var HEXAGON_OUTSIDE_X = HEXAGON_OUTSIDE * SIN30;
      var HEXAGON_OUTSIDE_Y = HEXAGON_OUTSIDE * SIN60;
      var ANGLE18 = Math.PI * 18 / 180;
      var ANGLE36 = Math.PI * 36 / 180;
      var ANGLE54 = Math.PI * 54 / 180;
      var ANGLE72 = Math.PI * 72 / 180;
      var SIN18 = Math.sin(ANGLE18);
      var SIN36 = Math.sin(ANGLE36);
      var SIN54 = Math.sin(ANGLE54);
      var SIN72 = Math.sin(ANGLE72);
      var PENTAGON_LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
      var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
      var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
      var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
      var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
      var SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;
      // const PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH;
      // const PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
      var PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH +
        SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
      var PENTAGON_WIDTH = SIN54_MULTIPLY_SIDE_LENGTH * 2;
      var PENTAGON_FULL_WIDTH = PENTAGON_WIDTH + PENTAGON_WIDTH * OUTSIDE_SCALE;
      // console.log(PENTAGON_FULL_WIDTH, HEXAGON_WIDTH, PENTAGON_WIDTH, PENTAGON_FULL_WIDTH);
      var TOP = PENTAGON_HEIGHT;
      var LEFT = HEXAGON_OUTSIDE_X; // (PENTAGON_FULL_WIDTH - HEXAGON_WIDTH) * 0.5;
      var viewBox = {
        left: 999999,
        right: 0,
        top: 999999,
        bottom: 0,
      };
      var COLUMN_SPACE = HEXAGON_WIDTH + SIDE_LENGTH;
      var HEXAGON_Y1 = TOP;
      var HEXAGON_Y2 = TOP + HEXAGON_HEIGHT;
      var HEXAGON_Y3 = TOP + HEXAGON_HEIGHT * 1.5;
      var HEXAGON_Y4 = TOP + HEXAGON_HEIGHT * 2.5;
      for (var i = 0; i < 5; ++i) {
        var left = LEFT + COLUMN_SPACE * i;
        appendHexagon(
          svg,
          SIDE_LENGTH,
          OUTER_LINE_STYLE,
          HEXAGON_Y1,
          left,
          0,
          viewBox,
        );
        appendHexagon(
          svg,
          SIDE_LENGTH,
          OUTER_LINE_STYLE,
          HEXAGON_Y2,
          left,
          0,
          viewBox,
        );
        appendPentagon(
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          HEXAGON_Y2 + HEXAGON_HEIGHT,
          left + SIN30_MULTIPLY_SIDE_LENGTH,
          i > 0 ? 0 : 1,
          true,
          viewBox,
        );
        var leftOfBelow = left + SIDE_LENGTH * (1 + SIN30);
        appendHexagon(
          svg,
          SIDE_LENGTH,
          OUTER_LINE_STYLE,
          HEXAGON_Y3,
          leftOfBelow,
          0,
          viewBox,
        );
        appendHexagon(
          svg,
          SIDE_LENGTH,
          OUTER_LINE_STYLE,
          HEXAGON_Y4,
          leftOfBelow,
          0,
          viewBox,
        );
        appendPentagon(
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          HEXAGON_Y3,
          leftOfBelow + SIN30_MULTIPLY_SIDE_LENGTH,
          i < 4 ? 0 : 1,
          false,
          viewBox,
        ); // OK
        if (i === 4) {
          appendPentagon(
            svg,
            SIDE_LENGTH,
            INNER_LINE_STYLE,
            OUTER_LINE_STYLE,
            TOP,
            left + SIN30_MULTIPLY_SIDE_LENGTH,
            2,
            false,
            viewBox,
          ); // OK
          appendPentagon(
            svg,
            SIDE_LENGTH,
            INNER_LINE_STYLE,
            OUTER_LINE_STYLE,
            HEXAGON_Y3 + HEXAGON_HEIGHT * 2,
            leftOfBelow + SIN30_MULTIPLY_SIDE_LENGTH - HEXAGON_WIDTH -
              SIDE_LENGTH,
            2,
            true,
            viewBox,
          );
        }
        var skipAboveLines = false;
        var skipBelowLines = false;
        switch (i) {
          case 3:
            skipBelowLines = true;
            break;
          case 4:
            skipAboveLines = true;
            break;
          default:
            break;
        }
        if (!skipAboveLines) {
          var X1 = left + SIDE_LENGTH * 0.5, Y1 = HEXAGON_Y1;
          var X2 = X1 + HEXAGON_OUTSIDE_X, Y2 = Y1 - HEXAGON_OUTSIDE_Y;
          var X4 = X1 + SIDE_LENGTH, Y4 = Y1;
          var X3 = X4 - HEXAGON_OUTSIDE_X, Y3 = Y2;
          //  const X2 = X1 - SIN30_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE, Y2 = TOP + SIN60_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          var X5 = X4 + HEXAGON_OUTSIDE, Y5 = Y1;
          var X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH,
            Y7 = Y4 + SIN60_MULTIPLY_SIDE_LENGTH;
          var X6 = X7 + HEXAGON_OUTSIDE_X, Y6 = Y7 - HEXAGON_OUTSIDE_Y;
          var X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH,
            Y8 = Y1 + SIN60_MULTIPLY_SIDE_LENGTH;
          var X9 = X8 - HEXAGON_OUTSIDE_X, Y9 = Y8 - HEXAGON_OUTSIDE_Y;
          var X10 = X1 - HEXAGON_OUTSIDE, Y10 = Y1;
          appendLine(svg, OUTER_LINE_STYLE, X1, X2, Y1, Y2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X2, X3, Y2, Y3, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X3, X4, Y3, Y4, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X4, X5, Y4, Y5, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X5, X6, Y5, Y6, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X6, X7, Y6, Y7, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X8, X9, Y8, Y9, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X9, X10, Y9, Y10, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X10, X1, Y10, Y1, viewBox);
          if (i === 0) {
            var X11 = X9, Y11 = Y8 + HEXAGON_OUTSIDE_Y;
            var X13 = X8 + SIN30_MULTIPLY_SIDE_LENGTH,
              Y13 = Y8 + SIN60_MULTIPLY_SIDE_LENGTH;
            var X12 = X13 - HEXAGON_OUTSIDE, Y12 = Y13;
            appendLine(svg, OUTER_LINE_STYLE, X8, X11, Y8, Y11, viewBox);
            appendLine(svg, OUTER_LINE_STYLE, X11, X12, Y11, Y12, viewBox);
            appendLine(svg, OUTER_LINE_STYLE, X12, X13, Y12, Y13, viewBox);
          }
        }
        if (!skipBelowLines) {
          var X1 = leftOfBelow + SIDE_LENGTH * 0.5,
            Y1 = HEXAGON_Y4 + HEXAGON_HEIGHT;
          var X2 = X1 + HEXAGON_OUTSIDE_X, Y2 = Y1 + HEXAGON_OUTSIDE_Y;
          var X4 = X1 + SIDE_LENGTH, Y4 = Y1;
          var X3 = X4 - HEXAGON_OUTSIDE_X, Y3 = Y2;
          //  const X2 = X1 - SIN30_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE, Y2 = TOP + SIN60_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
          var X5 = X4 + HEXAGON_OUTSIDE, Y5 = Y1;
          var X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH,
            Y7 = Y4 - SIN60_MULTIPLY_SIDE_LENGTH;
          var X6 = X7 + HEXAGON_OUTSIDE_X, Y6 = Y7 + HEXAGON_OUTSIDE_Y;
          var X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH,
            Y8 = Y1 - SIN60_MULTIPLY_SIDE_LENGTH;
          var X9 = X8 - HEXAGON_OUTSIDE_X, Y9 = Y8 + HEXAGON_OUTSIDE_Y;
          var X10 = X1 - HEXAGON_OUTSIDE, Y10 = Y1;
          appendLine(svg, OUTER_LINE_STYLE, X1, X2, Y1, Y2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X2, X3, Y2, Y3, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X3, X4, Y3, Y4, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X4, X5, Y4, Y5, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X5, X6, Y5, Y6, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X6, X7, Y6, Y7, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X8, X9, Y8, Y9, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X9, X10, Y9, Y10, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X10, X1, Y10, Y1, viewBox);
          if (i === 4) {
            var X11 = X6, Y11 = Y7 - HEXAGON_OUTSIDE_Y;
            var X13 = X7 - SIN30_MULTIPLY_SIDE_LENGTH,
              Y13 = Y7 - SIN60_MULTIPLY_SIDE_LENGTH;
            var X12 = X13 + HEXAGON_OUTSIDE, Y12 = Y13;
            appendLine(svg, OUTER_LINE_STYLE, X7, X11, Y7, Y11, viewBox);
            appendLine(svg, OUTER_LINE_STYLE, X11, X12, Y11, Y12, viewBox);
            appendLine(svg, OUTER_LINE_STYLE, X12, X13, Y12, Y13, viewBox);
          }
        }
      }
      svg.widthMm = viewBox.right;
      svg.heightMm = viewBox.bottom;
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (item) {
      var _a = item,
        length = _a.length,
        kind = _a.kind,
        rowCount = _a.rowCount,
        innerLineStyle = _a.innerLineStyle,
        outerLineStyle = _a.outerLineStyle,
        cutLineStyle = _a.cutLineStyle;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, item);
      _this.appendNumberTd(tr, length, item, "length", 1, null, 1);
      _this.appendSelectTd(tr, kind, item, "kind", [
        // 'hollowOut' | 'hollowOutWithHole' | 'pentagon' | 'hexagon' | 'interlacedHexagon' | 'unify'
        {
          value: "hollowOut",
          captions: { en: "Hollow Out", zh_cn: "镂空", zh_tw: "鏤空" },
        },
        {
          value: "hollowOutWithHole",
          captions: {
            en: "Hollow Out with Hole",
            zh_cn: "镂空带孔",
            zh_tw: "鏤空帶孔",
          },
        },
        {
          value: "pentagon",
          captions: { en: "Pentagon", zh_cn: "五边形", zh_tw: "五邊形" },
        },
        {
          value: "hexagon",
          captions: { en: "Hexagon", zh_cn: "六边形", zh_tw: "六邊形" },
        },
        {
          value: "interlacedHexagon",
          captions: {
            en: "Interlaced Hexagon",
            zh_cn: "交错六边形",
            zh_tw: "交錯六邊形",
          },
        },
        {
          value: "unify",
          captions: { en: "Unify", zh_cn: "整体", zh_tw: "整體" },
        },
      ]);
      _this.appendNumberTd(tr, rowCount, item, "rowCount", 1, null, 1);
      _this.appendTextareaTd(
        tr,
        innerLineStyle,
        item,
        "innerLineStyle",
        "string",
      );
      _this.appendTextareaTd(
        tr,
        outerLineStyle,
        item,
        "outerLineStyle",
        "string",
      );
      _this.appendTextareaTd(tr, cutLineStyle, item, "cutLineStyle", "string");
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      _this.appendTableHeadCell({ en: "Length", zh_cn: "边长", zh_tw: "邊長" });
      _this.appendTableHeadCell({ en: "Kind", zh_cn: "类型", zh_tw: "類型" });
      _this.appendTableHeadCell({
        en: "Row Count",
        zh_cn: "行数",
        zh_tw: "數量",
      });
      _this.appendTableHeadCell({
        en: "Inner Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Outer Line Style",
        zh_cn: "外边线样式",
        zh_tw: "外邊線樣式",
      });
      _this.appendTableHeadCell({
        en: "Cut Line Style",
        zh_cn: "剪切线样式",
        zh_tw: "剪切線樣式",
      });
    };
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var length = 25;
      var digitalOverlay = true;
      var rowCount = 1;
      var innerLineStyle =
        "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;";
      var outerLineStyle = "stroke:#000;stroke-width:0.2mm;";
      var cutLineStyle = "stroke:#FF0000;stroke-width:0.1mm;";
      var buttonList = [
        {
          nameI18n: { en: "Hollow Out", zh_cn: "镂空", zh_tw: "鏤空" },
          info: {
            length: 10,
            kind: "hollowOut",
            digitalOverlay: digitalOverlay,
            rowCount: 0,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
        {
          nameI18n: {
            en: "Hollow Out with Hole",
            zh_cn: "镂空带孔",
            zh_tw: "鏤空帶孔",
          },
          info: {
            length: 10,
            kind: "hollowOutWithHole",
            digitalOverlay: digitalOverlay,
            rowCount: 0,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
        {
          nameI18n: { en: "Pentagon", zh_cn: "五边形", zh_tw: "五邊形" },
          info: {
            length: length,
            kind: "pentagon",
            digitalOverlay: digitalOverlay,
            rowCount: 5,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
        {
          nameI18n: { en: "Hexagon", zh_cn: "六边形", zh_tw: "六邊形" },
          info: {
            length: length,
            kind: "hexagon",
            digitalOverlay: digitalOverlay,
            rowCount: 5,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
        {
          nameI18n: {
            en: "Interlaced Hexagon",
            zh_cn: "交错六边形",
            zh_tw: "交錯六邊形",
          },
          info: {
            length: length,
            kind: "interlacedHexagon",
            digitalOverlay: 0,
            rowCount: rowCount,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
        {
          nameI18n: { en: "Unify", zh_cn: "整体", zh_tw: "整體" },
          info: {
            length: 10,
            kind: "unify",
            digitalOverlay: digitalOverlay,
            rowCount: rowCount,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            cutLineStyle: cutLineStyle,
          },
        },
      ];
      var strongI18n = {
        en: "Shortcuts",
        zh_cn: "快捷按钮",
        zh_tw: "快捷按鈕",
      };
      return [{ strongI18n: strongI18n, buttonList: buttonList }];
    };
    return _this;
  }
  return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
