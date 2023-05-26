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
 * <en>Football information</en>
 * <zh_cn>足球信息</zh_cn>
 * <zh_tw>足球資訊</zh_tw>
 */
type FootballInfo = {
  /**
   * <en>Length</en>
   * <zh_cn>边长</zh_cn>
   * <zh_tw>邊長</zh_tw>
   */
  length: number;

  /**
   * <en>Kind</en>
   * <zh_cn>类型</zh_cn>
   * <zh_tw>類型</zh_tw>
   */
  kind: 'hollowOut' | 'hollowOutWithHole' | 'pentagon' | 'hexagon' | 'interlacedHexagon' | 'unify';

  /**
   * <en>Row Count</en>
   * <zh_cn>行数</zh_cn>
   * <zh_tw>數量</zh_tw>
   */
  rowCount: number;

  /**
   * <en>Inner Line Style</en>
   * <zh_cn>内部线样式</zh_cn>
   * <zh_tw>內部線樣式</zh_tw>
   */
  innerLineStyle: string;

  /**
   * <en>Outer Line Style</en>
   * <zh_cn>外边线样式</zh_cn>
   * <zh_tw>外邊線樣式</zh_tw>
   */
  outerLineStyle: string;

  /**
   * <en>Cut Line Style</en>
   * <zh_cn>剪切线样式</zh_cn>
   * <zh_tw>剪切線樣式</zh_tw>
   */
  cutLineStyle: string;
};

type ViewBoxType = svgSpace.edu.sonya.cc.ViewBoxType;
type DivOrSvgElementWithSize = svgSpace.edu.sonya.cc.DivOrSvgElementWithSize;
type WrapElementWithInfo = svgSpace.edu.sonya.cc.WrapElementWithInfo;

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
class BrickCore extends BrickWithTableBase {
  protected idOrClassPrefix = 'brickPageFootball';

  /** OK
   * 构造方法
   */
  constructor() {
    super({}, {});
  }

  /** OK
   * 计算data和computedData数据
   */
  protected countDataAndComputedData = (): void => {
    this.countDataAndComputedDataInBrickWithTableBase();
    const { computedData, mmToPxScale } = this;
    const {
      paperSize,
      isLandscape,

      maxX: MAX_X,
      maxY: MAX_Y,

      pageMarginTop,
      pageMarginBottom,

      pageMarginLeft,
      pageMarginRight,
      // list,
    } = this.data;

    const css = `/* common.css */
		* { margin:0;border:0;padding:0; }
		* { box-sizing:border-box; }

		/* landscape 横向 portrait 纵向*/
		@media print { @page { size: ${paperSize} ${
      isLandscape ? 'landscape' : 'portrait'
    }; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
		page:not(page:last-child){page-break-after:always;}

		body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}
		page { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }

    /* page { width:${MAX_X}mm;height:${MAX_Y}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; } */
    page { width:${
      MAX_X + pageMarginLeft
    }mm;padding-left:${pageMarginLeft}mm;padding-top:${pageMarginTop}mm; }
    page{height:${MAX_Y}mm;} /* 2023年5月25日重新加回 */
		`;

    const list: Array<FootballInfo> = [];
    JSON.parse(JSON.stringify(this.data.list)).forEach((item: FootballInfo) => {
      list.push(item);
    });

    let html = '';
    const elementList: Array<WrapElementWithInfo> = [];
    list
      .filter(({ rowCount }) => rowCount === 0)
      .forEach(item => {
        const element = this.getElement(item, mmToPxScale, MAX_X, MAX_Y);
        // elementList.push({ element, alone: true });
        html += `<page>${element.outerHTML}</page>`;
      });
    list
      .filter(({ rowCount }) => rowCount > 0)
      .forEach(item => {
        switch (item.kind) {
          case 'interlacedHexagon':
            // elementList.push({ element: this.getElement(item, mmToPxScale, MAX_X, MAX_Y) });
            elementList.push(this.getElement(item, mmToPxScale, MAX_X, MAX_Y));
            break;
          default:
            let fixedRowCount = 1;
            switch (item.kind) {
              case 'hollowOut':
              case 'hollowOutWithHole':
                fixedRowCount = 0;
                break;
              default:
                fixedRowCount = 1;
                break;
            }

            const rowCount = item.rowCount;
            for (let i = 0; i < rowCount; ++i) {
              // elementList.push({ element: this.getElement({ ...item, rowCount: fixedRowCount }, mmToPxScale, MAX_X, MAX_Y) });
              elementList.push(
                this.getElement({ ...item, rowCount: fixedRowCount }, mmToPxScale, MAX_X, MAX_Y),
              );
            }
            break;
        }
      });
    html += this.getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);

    const en = `${FILENAME_POSTFIX}football`;
    const zh_cn = `${FILENAME_POSTFIX}足球`;
    const zh_tw = `${FILENAME_POSTFIX}足球`;
    computedData.title = { en, zh_cn, zh_tw };

    computedData.css = css;
    computedData.html = html;
  };

  /** OK
   * 获取html元素
   * @param item 相关信息
   * @param mmToPxScale 毫米到像素的转换比例
   * @returns 带以毫米为单位的宽高信息的html元素
   */
  private getElement = (
    item: FootballInfo,
    mmToPxScale: number,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
  ): DivOrSvgElementWithSize => {
    const { createSvg } = svgSpace.edu.sonya.cc.SvgHelper;
    const svg = createSvg() as DivOrSvgElementWithSize;

    // 'hollowOut' | 'hollowOutWithHole' | 'pentagon' | 'hexagon' | 'interlacedHexagon' | 'unify'
    switch (item.kind) {
      case 'hollowOut':
        this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 0);
        break;
      case 'hollowOutWithHole':
        this.countHollowOutSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT, 1);
        break;
      case 'interlacedHexagon':
        this.countInterlacedHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
        break;
      case 'pentagon':
        this.countPentagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
        break;
      case 'hexagon':
        this.countHexagonSvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
        break;
      case 'unify':
        this.countUnifySvg(svg, item, PAPER_WIDTH, PAPER_HEIGHT);
        break;
      default:
        break;
    }

    // appendOuterLine(svg, wholeWidth, wholeHeight, outerLineStyle);

    const { widthMm, heightMm } = svg;
    svg.setAttribute('width', `${widthMm}mm`);
    svg.setAttribute('height', `${heightMm}mm`);
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
  private countHollowOutSvg = (
    svg: DivOrSvgElementWithSize,
    item: FootballInfo,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
    HOLLOW_STYLE: number,
  ): void => {
    // P:\0\000007\_学习\亲子手工\football\index.htm
    const { appendLine, appendCircle } = svgSpace.edu.sonya.cc.SvgHelper;
    const {
      length: SIDE_LENGTH,
      // kind,
      // rowCount,
      innerLineStyle,
      outerLineStyle,
      cutLineStyle,
    } = item;

    // let widthMm = 0, heightMm = 0;

    const RADIUS = 3;
    const RADIUS_MINI = 0.1;

    const ANGLE30 = (Math.PI * 30) / 180;
    const ANGLE60 = (Math.PI * 60) / 180;

    const SIN30 = Math.sin(ANGLE30);
    const SIN60 = Math.sin(ANGLE60);

    const SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
    const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;

    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
    const LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;

    const SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;

    const OFFSET_X = SIDE_LENGTH * 0.2;
    const OFFSET_X_BIAS = OFFSET_X * SIN30;
    const OFFSET_Y_BIAS = OFFSET_X * SIN60;

    // 0镂空 1镂空带孔
    // const HOLLOW_STYLE = 1;

    const ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
    // const ROW_COUNT = Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
    const ROW_COUNT = Math.floor(Math.floor(PAPER_HEIGHT / ROW_HEIGHT) / 9) * 9;
    // console.log('ROW_COUNT:', ROW_COUNT);

    const WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
    const COL_GROUP_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE / 6);
    // const COL_COUNT = Math.min(Math.floor(PAPER_WIDTH / WIDTH_OF_ONE), 6);
    const COL_COUNT = 6;
    // console.log('COL_COUNT:', COL_COUNT);

    for (let rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
      const rowGroupIndex = rowIndex === 0 ? 0 : Math.floor((rowIndex - 1) / 8);
      const TOP = ROW_HEIGHT * rowIndex;

      // const rowIndexInGroup = rowIndex - rowGroupIndex * 8 - (rowGroupIndex === 0 ? 0 : 1);
      const rowIndexInGroup = rowIndex - rowGroupIndex * 8;
      // console.log(rowIndex, '=>', rowGroupIndex, ' ', rowIndexInGroup);

      for (let groupIndex = 0; groupIndex < COL_GROUP_COUNT; ++groupIndex) {
        const LEFT_GROUP =
          SIDE_LENGTH * SIN30 +
          (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH) +
          WIDTH_OF_ONE * 6 * groupIndex;

        for (let colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
          // const LEFT = SIDE_LENGTH * SIN30 + WIDTH_OF_ONE * colIndex + (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH);
          // const LEFT = SIDE_LENGTH * SIN30 + (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH) + WIDTH_OF_ONE * colIndex;
          const LEFT = LEFT_GROUP + WIDTH_OF_ONE * colIndex;

          let Ax = 0,
            Ay = 0;
          let Bx = 0,
            By = 0;
          let Cx = 0,
            Cy = 0;
          let Dx = 0,
            Dy = 0;
          let Ex = 0,
            Ey = 0;
          let Fx = 0,
            Fy = 0;

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

          let isBoundary = false;
          let isHide = false;

          isHide = rowIndexInGroup === 0 && colIndex === 0;
          isHide = isHide || (colIndex === 0 && (rowIndexInGroup === 4 || rowIndexInGroup === 8));
          isHide =
            isHide ||
            (colIndex === 5 &&
              (rowIndexInGroup === 4 || rowIndexInGroup === 5 || rowIndexInGroup === 7));
          // if (HOLLOW_STYLE === 0) { isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0); }
          isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0);
          if (HOLLOW_STYLE > 0) {
            isHide =
              isHide ||
              rowIndexInGroup === 2 ||
              rowIndexInGroup === 4 ||
              rowIndexInGroup === 5 ||
              rowIndexInGroup === 7;
          }
          isBoundary = rowIndexInGroup === 0 || rowIndexInGroup === 1;
          isBoundary = isBoundary || rowIndexInGroup === 8;
          isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);

          if (!isHide) {
            appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Ax, Bx, Ay, By, null);
          }

          if (rowIndex % 2 === 0 || colIndex === COL_COUNT - 1) {
            isHide = rowIndexInGroup === 0 && colIndex === 0;
            isHide = isHide || (rowIndexInGroup === 7 && colIndex === 5);
            isHide = isHide || (rowIndexInGroup === 7 && colIndex === 4);
            // isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
            isHide =
              isHide ||
              (colIndex === 5 && rowIndexInGroup === 8 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
            isHide = isHide || Ay + SIDE_LENGTH >= PAPER_HEIGHT;
            // if (HOLLOW_STYLE === 0) { isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5); }
            isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
            // if (HOLLOW_STYLE > 0) { isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 6 && colIndex < 5); }
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 2 || rowIndexInGroup === 6;
            }
            isBoundary = rowIndexInGroup === 0 && colIndex > 0;
            isBoundary = isBoundary || (colIndex === 5 && rowIndexInGroup % 2 === 1);
            isBoundary = isBoundary || (colIndex === 0 && rowIndexInGroup === 8);
            isBoundary =
              isBoundary ||
              (colIndex === 5 &&
                (rowIndexInGroup === 5 || rowIndexInGroup === 6 || rowIndexInGroup === 8));
            isBoundary = isBoundary || rowIndexInGroup === 8;
            if (HOLLOW_STYLE === 0) {
              isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
            }
            if (!isHide) {
              appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Bx, Cx, By, Cy, null);
            }

            // if (Dy < PAPER_HEIGHT && !(colIndex === 5 && rowIndexInGroup === 7) && !(HOLLOW_STYLE === 0 && colIndex === 5 && rowIndexInGroup === 5)) {
            if (Dy < PAPER_HEIGHT) {
              isHide = colIndex === 5 && (rowIndexInGroup === 7 || rowIndexInGroup === 5);
              if (HOLLOW_STYLE > 0) {
                isHide = isHide || (colIndex === 5 && rowIndexInGroup === 4);
              }
              isHide = isHide || (rowIndexInGroup === 8 && rowIndex === ROW_COUNT - 1);

              isBoundary = colIndex === 0 && (rowIndexInGroup === 0 || rowIndexInGroup === 8);
              isBoundary =
                isBoundary ||
                (colIndex === 5 &&
                  (rowIndexInGroup % 2 === 1 || rowIndexInGroup === 6 || rowIndexInGroup === 4));
              if (HOLLOW_STYLE > 0) {
                isBoundary = isBoundary && !(colIndex === 5 && rowIndexInGroup === 6);
              }
              if (HOLLOW_STYLE === 0) {
                isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
              }
              if (!isHide) {
                if (isBoundary) {
                  appendLine(svg, outerLineStyle, Cx, Dx, Cy, Dy, null);
                } else if (
                  rowIndexInGroup === 0 ||
                  rowIndexInGroup === 6 ||
                  rowIndexInGroup === 8
                ) {
                  appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                } else {
                  if (HOLLOW_STYLE === 0 || !(rowIndexInGroup === 2 || rowIndexInGroup === 4)) {
                    appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
                  }
                }
              }
            }
          }

          isHide = colIndex === 0 && (rowIndexInGroup === 0 || rowIndexInGroup === 8);
          isHide =
            isHide || (colIndex === 5 && rowIndexInGroup === 7 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
          isHide = isHide || (rowIndexInGroup === 5 && colIndex === 5);
          // if (HOLLOW_STYLE > 0) { isHide = isHide || (rowIndexInGroup === 2 && colIndex === 0); }
          if (HOLLOW_STYLE > 0) {
            isHide = isHide || rowIndexInGroup === 2 || rowIndexInGroup === 5;
          }
          if (HOLLOW_STYLE > 0) {
            isHide = isHide || rowIndexInGroup === 0 || rowIndexInGroup === 3;
          }
          isBoundary = rowIndexInGroup === 7 || (rowIndexInGroup === 3 && colIndex === 5);
          isBoundary = isBoundary || (colIndex === 0 && rowIndexInGroup === 6);
          isBoundary = isBoundary || (rowIndexInGroup === 6 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
          if (HOLLOW_STYLE > 0) {
            isBoundary = isBoundary || (rowIndexInGroup === 5 && colIndex === 5);
          }
          if (HOLLOW_STYLE === 0) {
            isBoundary = isBoundary || (rowIndexInGroup === 2 && colIndex === 0);
          }
          if (!isHide) {
            appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Dx, Ex, Dy, Ey, null);
          }

          if (rowIndex % 2 === 0) {
            isHide =
              colIndex === 0 &&
              (rowIndexInGroup === 0 || rowIndexInGroup === 2 || rowIndexInGroup === 8);
            isHide = isHide || Ey >= PAPER_HEIGHT;
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 4 && colIndex > 0);
            }
            isBoundary = colIndex === 0 && (rowIndexInGroup === 4 || rowIndexInGroup === 6);
            isBoundary = isBoundary || (rowIndexInGroup === 6 && Ey + SIDE_LENGTH >= PAPER_HEIGHT);
            if (!isHide) {
              appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Ex, Fx, Ey, Fy, null);
            }

            isHide =
              colIndex === 0 &&
              (rowIndexInGroup === 0 || rowIndexInGroup === 2 || rowIndexInGroup === 8);
            isHide = isHide || Ay + SIDE_LENGTH >= PAPER_HEIGHT;
            if (HOLLOW_STYLE > 0) {
              isHide = isHide || rowIndexInGroup === 2 || (rowIndexInGroup === 6 && colIndex > 0);
            }
            isBoundary = rowIndexInGroup === 0 || colIndex === 0 || rowIndexInGroup === 8;
            if (!isHide) {
              appendLine(svg, isBoundary ? outerLineStyle : innerLineStyle, Fx, Ax, Fy, Ay, null);
            }
          }

          switch (rowIndexInGroup) {
            case 2:
            case 5:
              // if ((rowIndexInGroup === 2 && colIndex > 0) || (rowIndexInGroup === 5 && colIndex % 6 < 5)) {
              if (rowIndexInGroup === 2 || rowIndexInGroup === 5) {
                const circleX = (Ax + Bx + Cx + Dx + Ex + Fx) / 6;
                const circleY = (Ay + By + Cy + Dy + Ey + Fy) / 6;

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
                    appendCircle(svg, innerLineStyle, circleX, circleY, RADIUS, null);
                    appendCircle(svg, innerLineStyle, circleX, circleY, RADIUS_MINI, null);

                    appendLine(svg, cutLineStyle, Ax, Bx, Ay, By, null);
                    appendLine(svg, cutLineStyle, Bx, Cx, By, Cy, null);
                    appendLine(svg, cutLineStyle, Cx, Dx, Cy, Dy, null);
                    appendLine(svg, cutLineStyle, Dx, Ex, Dy, Ey, null);
                    appendLine(svg, cutLineStyle, Ex, Fx, Ey, Fy, null);
                    appendLine(svg, cutLineStyle, Fx, Ax, Fy, Ay, null);

                    switch (rowIndexInGroup) {
                      case 2:
                        appendLine(svg, outerLineStyle, Bx, circleX, By, circleY, null);
                        appendLine(svg, outerLineStyle, Ax, circleX, Ay, circleY, null);
                        break;
                      case 5:
                        appendLine(svg, outerLineStyle, Ex, circleX, Ey, circleY, null);
                        appendLine(svg, outerLineStyle, Dx, circleX, Dy, circleY, null);
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
                        appendLine(svg, outerLineStyle, Bx, circleX, By, circleY, null);
                        appendLine(svg, outerLineStyle, Ax, circleX, Ay, circleY, null);
                        appendLine(svg, outerLineStyle, Ax, Bx, Ay, By, null);

                        appendLine(svg, outerLineStyle, Dx - OFFSET_X, Ex + OFFSET_X, Dy, Dy, null);
                        break;
                      case 5:
                        appendLine(svg, outerLineStyle, Ex, circleX, Ey, circleY, null);
                        appendLine(svg, outerLineStyle, Dx, circleX, Dy, circleY, null);
                        appendLine(svg, outerLineStyle, Dx, Ex, Dy, Ey, null);

                        appendLine(svg, outerLineStyle, Ax + OFFSET_X, Bx - OFFSET_X, Ay, Ay, null);
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

    const widthMm =
      WIDTH_OF_ONE * 6 * COL_GROUP_COUNT + SIN30_MULTIPLY_SIDE_LENGTH + SIDE_LENGTH * 0.5;
    const heightMm = ROW_HEIGHT * ROW_COUNT + SIDE_LENGTH;
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
  private countInterlacedHexagonSvg = (
    svg: DivOrSvgElementWithSize,
    item: FootballInfo,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
  ): void => {
    // P:\0\000007\_学习\亲子手工\regularPolygons\regularHexagon\index.htm
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
    const {
      length: SIDE_LENGTH,
      // kind,
      rowCount,
      innerLineStyle,
      outerLineStyle,
      cutLineStyle,
    } = item;

    const ANGLE30 = (Math.PI * 30) / 180;
    const ANGLE60 = (Math.PI * 60) / 180;

    const SIN30 = Math.sin(ANGLE30);
    const SIN60 = Math.sin(ANGLE60);

    const SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
    const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;

    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
    const LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;

    const SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;

    const ROW_HEIGHT = HALF_SHORT_LINE_LENGTH;
    const ROW_COUNT = rowCount ? rowCount * 2 : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);

    const WIDTH_OF_ONE = SIDE_LENGTH + LONG_LINE_LENGTH;
    // const COL_COUNT = Math.floor((PAPER_WIDTH - LONG_LINE_LENGTH) / WIDTH_OF_ONE) + 1;
    const COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);

    for (let rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
      const TOP = ROW_HEIGHT * rowIndex;

      for (let colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
        const LEFT =
          SIDE_LENGTH * SIN30 +
          WIDTH_OF_ONE * colIndex +
          (rowIndex % 2 === 0 ? 0 : SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH);

        let Ax = 0,
          Ay = 0;
        let Bx = 0,
          By = 0;
        let Cx = 0,
          Cy = 0;
        let Dx = 0,
          Dy = 0;
        let Ex = 0,
          Ey = 0;
        let Fx = 0,
          Fy = 0;

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
    const widthMm = WIDTH_OF_ONE * COL_COUNT + SIN30_MULTIPLY_SIDE_LENGTH + SIDE_LENGTH * 0.5;
    const heightMm = ROW_HEIGHT * ROW_COUNT + 0.1;

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
  private countPentagonSvg = (
    svg: DivOrSvgElementWithSize,
    item: FootballInfo,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
  ): void => {
    // P:\0\000007\_学习\亲子手工\regularPolygons\regularPentagon_alone\index.htm
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
    const {
      length: SIDE_LENGTH,
      // kind,
      rowCount,
      innerLineStyle,
      outerLineStyle,
      // cutLineStyle,
    } = item;

    const OUTSIDE_SCALE = 0.4;

    const ANGLE18 = (Math.PI * 18) / 180;
    const ANGLE36 = (Math.PI * 36) / 180;
    const ANGLE54 = (Math.PI * 54) / 180;
    const ANGLE72 = (Math.PI * 72) / 180;

    const SIN18 = Math.sin(ANGLE18);
    const SIN36 = Math.sin(ANGLE36);
    const SIN54 = Math.sin(ANGLE54);
    const SIN72 = Math.sin(ANGLE72);

    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
    const LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;
    const HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;

    const SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
    const SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
    const SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
    const SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;

    const SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;

    // 下句末尾的HALF_SIDE_LENGTH用于调节两个骰子之间距离
    const ROW_HEIGHT =
      SIN72_MULTIPLY_LONG_SIDE_LENGTH +
      SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
      SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
    const ROW_COUNT_PER_PAGE = Math.floor(PAPER_HEIGHT / ROW_HEIGHT);
    // BUG: rowCount导致超过一页时，将溢出。为避免此Bug，强行修正（可能会与期望情况不一致）
    // 经修正，rowCount只可能为0或1，已避开此Bug
    const ROW_COUNT = rowCount ? Math.min(ROW_COUNT_PER_PAGE, rowCount) : ROW_COUNT_PER_PAGE;

    const WIDTH_OF_ONE = SIDE_LENGTH * 2.4;
    const COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);

    // let widthMm = 0;
    // let heightMm = 0;
    for (let rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
      const TOP = ROW_HEIGHT * rowIndex;

      for (let colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
        const LEFT = WIDTH_OF_ONE * colIndex;

        let A1x = 0,
          A1y = 0;
        let A2x = 0,
          A2y = 0;
        let A3x = 0,
          A3y = 0;

        let B1x = 0,
          B1y = 0;
        let B2x = 0,
          B2y = 0;
        let B3x = 0,
          B3y = 0;

        let C1x = 0,
          C1y = 0;
        let C2x = 0,
          C2y = 0;
        let C3x = 0,
          C3y = 0;

        let D1x = 0,
          D1y = 0;
        let D2x = 0,
          D2y = 0;
        let D3x = 0,
          D3y = 0;

        let E1x = 0,
          E1y = 0;
        let E2x = 0,
          E2y = 0;
        let E3x = 0,
          E3y = 0;

        A1x =
          LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) + LONG_SIDE_LENGTH * 0.5;
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
    const widthMm = WIDTH_OF_ONE * COL_COUNT;
    const heightMm = ROW_HEIGHT * ROW_COUNT;

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
  private countHexagonSvg = (
    svg: DivOrSvgElementWithSize,
    item: FootballInfo,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
  ): void => {
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
    const {
      length: SIDE_LENGTH,
      // kind,
      rowCount,
      innerLineStyle,
      outerLineStyle,
      cutLineStyle,
    } = item;

    const ANGLE30 = (Math.PI * 30) / 180;
    const ANGLE60 = (Math.PI * 60) / 180;

    const SIN30 = Math.sin(ANGLE30);
    const SIN60 = Math.sin(ANGLE60);

    const SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;
    const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;

    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
    const LONG_LINE_LENGTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_LONG_LINE_LENGTH = LONG_LINE_LENGTH * 0.5;

    const SHORT_LINE_LENGTH = SIN60_MULTIPLY_SIDE_LENGTH * 2;
    const HALF_SHORT_LINE_LENGTH = SHORT_LINE_LENGTH * 0.5;

    const ROW_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
    const ROW_COUNT = rowCount ? rowCount : Math.floor(PAPER_HEIGHT / ROW_HEIGHT);

    const WIDTH_OF_ONE = LONG_LINE_LENGTH;
    const COL_COUNT = Math.floor(PAPER_WIDTH / WIDTH_OF_ONE);

    for (let rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex) {
      const TOP = ROW_HEIGHT * rowIndex;

      for (let colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
        const LEFT = WIDTH_OF_ONE * colIndex;

        const Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
        const Bx = Ax + SIDE_LENGTH;
        const Cx = LEFT + WIDTH_OF_ONE;
        const Dx = Bx;
        const Ex = Ax;
        const Fx = LEFT;

        const Ay = TOP;
        const By = Ay;
        const Cy = Ay + SIN60_MULTIPLY_SIDE_LENGTH;
        const Dy = Cy + SIN60_MULTIPLY_SIDE_LENGTH;
        const Ey = Dy;
        const Fy = Cy;

        appendLine(svg, innerLineStyle, Ax, Bx, Ay, By, null);
        appendLine(svg, innerLineStyle, Bx, Cx, By, Cy, null);
        appendLine(svg, innerLineStyle, Cx, Dx, Cy, Dy, null);
        appendLine(svg, innerLineStyle, Dx, Ex, Dy, Ey, null);
        appendLine(svg, innerLineStyle, Ex, Fx, Ey, Fy, null);
        appendLine(svg, innerLineStyle, Fx, Ax, Fy, Ay, null);
      }
    }

    // 如果计算出错，可直接修正widthMm为PAPER_WIDTH
    const widthMm = WIDTH_OF_ONE * COL_COUNT;
    const heightMm = ROW_HEIGHT * ROW_COUNT;

    svg.widthMm = widthMm;
    svg.heightMm = heightMm;
  };

  private appendPentagon = (
    svg: DivOrSvgElementWithSize,
    SIDE_LENGTH: number,
    innerLineStyle: string,
    outerLineStyle: string,
    TOP: number,
    LEFT: number,
    kind: number,
    mirror: boolean,
    viewBox: ViewBoxType | null,
  ): void => {
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;

    const OUTSIDE_SCALE = 0.4;

    const ANGLE18 = (Math.PI * 18) / 180;
    const ANGLE36 = (Math.PI * 36) / 180;
    const ANGLE54 = (Math.PI * 54) / 180;
    const ANGLE72 = (Math.PI * 72) / 180;

    const SIN18 = Math.sin(ANGLE18);
    const SIN36 = Math.sin(ANGLE36);
    const SIN54 = Math.sin(ANGLE54);
    const SIN72 = Math.sin(ANGLE72);

    const PENTAGON_LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;

    const SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
    const SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
    const SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
    const SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;

    const SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;

    const PENTAGON_CORE_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH;
    const PENTAGON_HEIGHT =
      SIN72_MULTIPLY_LONG_SIDE_LENGTH +
      SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE +
      SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;

    const PENTAGON_CORE_WIDTH = SIN18_MULTIPLY_SIDE_LENGTH * 2;

    const PENTAGON_WIDTH = PENTAGON_CORE_WIDTH + PENTAGON_CORE_WIDTH * OUTSIDE_SCALE;

    const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
    const PENTAGON_HALF_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * 0.5;

    const MIRROR_SCALE = mirror ? -1 : 1;
    TOP -=
      (SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE) * MIRROR_SCALE;

    const A1x = LEFT + SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2);
    const B1x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
    const E1x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
    const C1x = B1x - SIN18_MULTIPLY_SIDE_LENGTH;
    const D1x = E1x + SIN18_MULTIPLY_SIDE_LENGTH;

    const A2x = A1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
    const A3x = A1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
    const B2x = B1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
    const B3x = B1x + SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
    const C2x = C1x + SIDE_LENGTH * 0.4;
    const C3x = C1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
    const D2x = D1x + SIN18_MULTIPLY_SIDE_LENGTH * 0.4;
    const D3x = D1x - SIDE_LENGTH * 0.4;
    const E2x = E1x - SIN54_MULTIPLY_SIDE_LENGTH * 0.4;
    const E3x = E1x - SIN18_MULTIPLY_SIDE_LENGTH * 0.4;

    const A1y = TOP + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const B1y = A1y + SIN36_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
    const E1y = B1y;
    const C1y = B1y + SIN72_MULTIPLY_SIDE_LENGTH * MIRROR_SCALE;
    const D1y = C1y;

    const A2y = TOP;
    const A3y = TOP;
    const B2y = B1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const B3y = B1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const C2y = C1y;
    const C3y = C1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const D2y = D1y + SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const D3y = D1y;
    const E2y = E1y + SIN36_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;
    const E3y = E1y - SIN72_MULTIPLY_SIDE_LENGTH * 0.4 * MIRROR_SCALE;

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

    if (kind === 0) return;

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

  private appendHexagon = (
    svg: DivOrSvgElementWithSize,
    SIDE_LENGTH: number,
    LINE_STYLE: string,
    TOP: number,
    LEFT: number,
    ROTATE: number,
    viewBox: ViewBoxType | null,
  ): void => {
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;

    const ANGLE30 = (Math.PI * 30) / 180;
    const SIN30 = Math.sin(ANGLE30);
    const SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;

    // const ANGLE60 = Math.PI * 60 / 180;
    // const SIN60 = Math.sin(ANGLE60);
    // const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;

    // const HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;
    // const WIDTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;

    const Ax = LEFT + SIN30_MULTIPLY_SIDE_LENGTH;
    const Ay = TOP;

    const ANGLE_AB = (Math.PI * ROTATE) / 180;
    const Bx = Ax + SIDE_LENGTH * Math.cos(ANGLE_AB); // Ax + SIDE_LENGTH
    const By = Ay + SIDE_LENGTH * Math.sin(ANGLE_AB); // Ay

    const ANGLE_BC = (Math.PI * (ROTATE - 30)) / 180;
    const Cx = Bx - SIDE_LENGTH * Math.sin(ANGLE_BC); // LEFT + WIDTH;
    const Cy = By + SIDE_LENGTH * Math.cos(ANGLE_BC); // Ay + SIN60_MULTIPLY_SIDE_LENGTH;

    // const ANGLE_CD = Math.PI * (60 + (ROTATE - 30)) / 180;
    const ANGLE_CD = (Math.PI * (ROTATE + 30)) / 180;
    const Dx = Cx - SIDE_LENGTH * Math.sin(ANGLE_CD); // Bx;
    const Dy = Cy + SIDE_LENGTH * Math.cos(ANGLE_CD); // Cy + SIN60_MULTIPLY_SIDE_LENGTH;

    const ANGLE_DE = (Math.PI * ROTATE) / 180; // ANGLE_CD - 30
    const Ex = Dx - SIDE_LENGTH * Math.cos(ANGLE_DE);
    const Ey = Dy - SIDE_LENGTH * Math.sin(ANGLE_DE);

    const ANGLE_AF = (Math.PI * (60 - ROTATE)) / 180;
    const Fx = Ax - SIDE_LENGTH * Math.cos(ANGLE_AF);
    const Fy = Ay + SIDE_LENGTH * Math.sin(ANGLE_AF);

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
  private countUnifySvg = (
    svg: DivOrSvgElementWithSize,
    item: FootballInfo,
    PAPER_WIDTH: number,
    PAPER_HEIGHT: number,
  ): void => {
    // P:\0\000007\_学习\数学\骰子\阿基米德多面体\06截角二十面体.jpg
    const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
    const {
      length: SIDE_LENGTH,
      // kind,
      rowCount,
      innerLineStyle: INNER_LINE_STYLE,
      outerLineStyle: OUTER_LINE_STYLE,
      // cutLineStyle,
    } = item;
    const { appendHexagon, appendPentagon } = this;

    // Hexagon
    const ANGLE30 = (Math.PI * 30) / 180;
    const SIN30 = Math.sin(ANGLE30);
    const SIN30_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN30;

    const ANGLE60 = (Math.PI * 60) / 180;
    const SIN60 = Math.sin(ANGLE60);
    const SIN60_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN60;

    const HEXAGON_WIDTH = SIDE_LENGTH + SIN30_MULTIPLY_SIDE_LENGTH * 2;
    const HEXAGON_HEIGHT = SIN60_MULTIPLY_SIDE_LENGTH * 2;

    const OUTSIDE_SCALE = 0.4;
    const HEXAGON_OUTSIDE = SIDE_LENGTH * OUTSIDE_SCALE;
    const HEXAGON_OUTSIDE_X = HEXAGON_OUTSIDE * SIN30;
    const HEXAGON_OUTSIDE_Y = HEXAGON_OUTSIDE * SIN60;

    const ANGLE18 = (Math.PI * 18) / 180;
    const ANGLE36 = (Math.PI * 36) / 180;
    const ANGLE54 = (Math.PI * 54) / 180;
    const ANGLE72 = (Math.PI * 72) / 180;
    const SIN18 = Math.sin(ANGLE18);
    const SIN36 = Math.sin(ANGLE36);
    const SIN54 = Math.sin(ANGLE54);
    const SIN72 = Math.sin(ANGLE72);
    const PENTAGON_LONG_SIDE_LENGTH = (SIDE_LENGTH * 0.5) / SIN18;
    const SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
    const SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
    const SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
    const SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
    const SIN72_MULTIPLY_LONG_SIDE_LENGTH = PENTAGON_LONG_SIDE_LENGTH * SIN72;
    // const PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH;
    // const PENTAGON_HEIGHT = SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE + SIN72_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
    const PENTAGON_HEIGHT =
      SIN72_MULTIPLY_LONG_SIDE_LENGTH + SIN36_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;
    const PENTAGON_WIDTH = SIN54_MULTIPLY_SIDE_LENGTH * 2;
    const PENTAGON_FULL_WIDTH = PENTAGON_WIDTH + PENTAGON_WIDTH * OUTSIDE_SCALE;
    // console.log(PENTAGON_FULL_WIDTH, HEXAGON_WIDTH, PENTAGON_WIDTH, PENTAGON_FULL_WIDTH);

    const TOP = PENTAGON_HEIGHT;
    const LEFT = HEXAGON_OUTSIDE_X; // (PENTAGON_FULL_WIDTH - HEXAGON_WIDTH) * 0.5;
    const viewBox = {
      left: 999999,
      right: 0,
      top: 999999,
      bottom: 0,
    };
    const COLUMN_SPACE = HEXAGON_WIDTH + SIDE_LENGTH;
    const HEXAGON_Y1 = TOP;
    const HEXAGON_Y2 = TOP + HEXAGON_HEIGHT;
    const HEXAGON_Y3 = TOP + HEXAGON_HEIGHT * 1.5;
    const HEXAGON_Y4 = TOP + HEXAGON_HEIGHT * 2.5;
    for (let i = 0; i < 5; ++i) {
      const left = LEFT + COLUMN_SPACE * i;
      appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y1, left, 0, viewBox);
      appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y2, left, 0, viewBox);
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

      const leftOfBelow = left + SIDE_LENGTH * (1 + SIN30);
      appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y3, leftOfBelow, 0, viewBox);
      appendHexagon(svg, SIDE_LENGTH, OUTER_LINE_STYLE, HEXAGON_Y4, leftOfBelow, 0, viewBox);
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
          leftOfBelow + SIN30_MULTIPLY_SIDE_LENGTH - HEXAGON_WIDTH - SIDE_LENGTH,
          2,
          true,
          viewBox,
        );
      }

      let skipAboveLines = false;
      let skipBelowLines = false;
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
        const X1 = left + SIDE_LENGTH * 0.5,
          Y1 = HEXAGON_Y1;
        const X2 = X1 + HEXAGON_OUTSIDE_X,
          Y2 = Y1 - HEXAGON_OUTSIDE_Y;
        const X4 = X1 + SIDE_LENGTH,
          Y4 = Y1;
        const X3 = X4 - HEXAGON_OUTSIDE_X,
          Y3 = Y2;
        //  const X2 = X1 - SIN30_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE, Y2 = TOP + SIN60_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;

        const X5 = X4 + HEXAGON_OUTSIDE,
          Y5 = Y1;
        const X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH,
          Y7 = Y4 + SIN60_MULTIPLY_SIDE_LENGTH;
        const X6 = X7 + HEXAGON_OUTSIDE_X,
          Y6 = Y7 - HEXAGON_OUTSIDE_Y;

        const X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH,
          Y8 = Y1 + SIN60_MULTIPLY_SIDE_LENGTH;
        const X9 = X8 - HEXAGON_OUTSIDE_X,
          Y9 = Y8 - HEXAGON_OUTSIDE_Y;
        const X10 = X1 - HEXAGON_OUTSIDE,
          Y10 = Y1;

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
          const X11 = X9,
            Y11 = Y8 + HEXAGON_OUTSIDE_Y;
          const X13 = X8 + SIN30_MULTIPLY_SIDE_LENGTH,
            Y13 = Y8 + SIN60_MULTIPLY_SIDE_LENGTH;
          const X12 = X13 - HEXAGON_OUTSIDE,
            Y12 = Y13;
          appendLine(svg, OUTER_LINE_STYLE, X8, X11, Y8, Y11, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X11, X12, Y11, Y12, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X12, X13, Y12, Y13, viewBox);
        }
      }
      if (!skipBelowLines) {
        const X1 = leftOfBelow + SIDE_LENGTH * 0.5,
          Y1 = HEXAGON_Y4 + HEXAGON_HEIGHT;
        const X2 = X1 + HEXAGON_OUTSIDE_X,
          Y2 = Y1 + HEXAGON_OUTSIDE_Y;
        const X4 = X1 + SIDE_LENGTH,
          Y4 = Y1;
        const X3 = X4 - HEXAGON_OUTSIDE_X,
          Y3 = Y2;
        //  const X2 = X1 - SIN30_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE, Y2 = TOP + SIN60_MULTIPLY_SIDE_LENGTH * OUTSIDE_SCALE;

        const X5 = X4 + HEXAGON_OUTSIDE,
          Y5 = Y1;
        const X7 = X4 + SIN30_MULTIPLY_SIDE_LENGTH,
          Y7 = Y4 - SIN60_MULTIPLY_SIDE_LENGTH;
        const X6 = X7 + HEXAGON_OUTSIDE_X,
          Y6 = Y7 + HEXAGON_OUTSIDE_Y;

        const X8 = X1 - SIN30_MULTIPLY_SIDE_LENGTH,
          Y8 = Y1 - SIN60_MULTIPLY_SIDE_LENGTH;
        const X9 = X8 - HEXAGON_OUTSIDE_X,
          Y9 = Y8 + HEXAGON_OUTSIDE_Y;
        const X10 = X1 - HEXAGON_OUTSIDE,
          Y10 = Y1;

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
          const X11 = X6,
            Y11 = Y7 - HEXAGON_OUTSIDE_Y;
          const X13 = X7 - SIN30_MULTIPLY_SIDE_LENGTH,
            Y13 = Y7 - SIN60_MULTIPLY_SIDE_LENGTH;
          const X12 = X13 + HEXAGON_OUTSIDE,
            Y12 = Y13;
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
  protected createTableBodyRow = (item: object): void => {
    const { length, kind, rowCount, innerLineStyle, outerLineStyle, cutLineStyle } =
      item as FootballInfo;
    const { tableBodyElement } = this;

    const tr = createElement('tr') as HTMLTableRowElement;
    tableBodyElement.appendChild(tr);

    this.appendOperationTd(tr, item);

    this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
    this.appendSelectTd(tr, kind, item, 'kind', [
      // 'hollowOut' | 'hollowOutWithHole' | 'pentagon' | 'hexagon' | 'interlacedHexagon' | 'unify'
      {
        value: 'hollowOut',
        captions: { en: 'Hollow Out', zh_cn: '镂空', zh_tw: '鏤空' },
      },
      {
        value: 'hollowOutWithHole',
        captions: {
          en: 'Hollow Out with Hole',
          zh_cn: '镂空带孔',
          zh_tw: '鏤空帶孔',
        },
      },
      {
        value: 'pentagon',
        captions: { en: 'Pentagon', zh_cn: '五边形', zh_tw: '五邊形' },
      },
      {
        value: 'hexagon',
        captions: { en: 'Hexagon', zh_cn: '六边形', zh_tw: '六邊形' },
      },
      {
        value: 'interlacedHexagon',
        captions: {
          en: 'Interlaced Hexagon',
          zh_cn: '交错六边形',
          zh_tw: '交錯六邊形',
        },
      },
      {
        value: 'unify',
        captions: { en: 'Unify', zh_cn: '整体', zh_tw: '整體' },
      },
    ]);
    this.appendNumberTd(tr, rowCount, item, 'rowCount', 1, null, 1);

    this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
    this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
    this.appendTextareaTd(tr, cutLineStyle, item, 'cutLineStyle', 'string');
  };

  /** OK
   * 初始化表头
   */
  protected initTableHead = (): void => {
    this.appendTableHeadCell({ en: 'Length', zh_cn: '边长', zh_tw: '邊長' });
    this.appendTableHeadCell({ en: 'Kind', zh_cn: '类型', zh_tw: '類型' });
    this.appendTableHeadCell({ en: 'Row Count', zh_cn: '行数', zh_tw: '數量' });

    this.appendTableHeadCell({
      en: 'Inner Line Style',
      zh_cn: '内部线样式',
      zh_tw: '內部線樣式',
    });
    this.appendTableHeadCell({
      en: 'Outer Line Style',
      zh_cn: '外边线样式',
      zh_tw: '外邊線樣式',
    });
    this.appendTableHeadCell({
      en: 'Cut Line Style',
      zh_cn: '剪切线样式',
      zh_tw: '剪切線樣式',
    });
  };

  /** OK
   * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
   * @returns 数组：信息数组
   */
  protected getUsableList = (): Array<object> => {
    const length = 25;
    const digitalOverlay = true;
    const rowCount = 1;

    const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
    const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
    const cutLineStyle = 'stroke:#FF0000;stroke-width:0.1mm;';

    const buttonList = [
      {
        nameI18n: { en: 'Hollow Out', zh_cn: '镂空', zh_tw: '鏤空' },
        info: {
          length: 10,
          kind: 'hollowOut',
          digitalOverlay,
          rowCount: 0,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
      {
        nameI18n: {
          en: 'Hollow Out with Hole',
          zh_cn: '镂空带孔',
          zh_tw: '鏤空帶孔',
        },
        info: {
          length: 10,
          kind: 'hollowOutWithHole',
          digitalOverlay,
          rowCount: 0,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
      {
        nameI18n: { en: 'Pentagon', zh_cn: '五边形', zh_tw: '五邊形' },
        info: {
          length,
          kind: 'pentagon',
          digitalOverlay,
          rowCount: 5,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
      {
        nameI18n: { en: 'Hexagon', zh_cn: '六边形', zh_tw: '六邊形' },
        info: {
          length,
          kind: 'hexagon',
          digitalOverlay,
          rowCount: 5,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
      {
        nameI18n: {
          en: 'Interlaced Hexagon',
          zh_cn: '交错六边形',
          zh_tw: '交錯六邊形',
        },
        info: {
          length,
          kind: 'interlacedHexagon',
          digitalOverlay: 0,
          rowCount,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
      {
        nameI18n: { en: 'Unify', zh_cn: '整体', zh_tw: '整體' },
        info: {
          length: 10,
          kind: 'unify',
          digitalOverlay,
          rowCount,
          innerLineStyle,
          outerLineStyle,
          cutLineStyle,
        },
      },
    ];
    const strongI18n: I18nable = {
      en: 'Shortcuts',
      zh_cn: '快捷按钮',
      zh_tw: '快捷按鈕',
    };
    return [{ strongI18n, buttonList }];
  };
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;
