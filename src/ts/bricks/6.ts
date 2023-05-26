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
 * <en>Gucci building block information</en>
 * <zh_cn>古氏积木信息</zh_cn>
 * <zh_tw>古氏積木資訊</zh_tw>
 */
type CuisenaireRodInfo = {
  /**
   * <en>Only white paper</en>
   * <zh_cn>只有白纸</zh_cn>
   * <zh_tw>只有白紙</zh_tw>
   */
  onlyWhitePaper: boolean;

  /**
   * <en>Digital Overlay</en>
   * <zh_cn>数字叠加</zh_cn>
   * <zh_tw>數位疊加</zh_tw>
   */
  digitalOverlay: boolean;

  /**
   * <en>Sealing style</en>
   * <zh_cn>封口方式</zh_cn>
   * <zh_tw>封口方式</zh_tw>
   */
  sealingStyle: 'none' | 'onlyAbove' | 'onlyBelow' | 'both';

  /**
   * <en>Length</en>
   * <zh_cn>边长</zh_cn>
   * <zh_tw>邊長</zh_tw>
   */
  length: number;

  /**
   * <en>Inner Line Style</en>
   * <zh_cn>内部线样式</zh_cn>
   * <zh_tw>內部線樣式</zh_tw>
   */
  innerLineStyle: string[];

  /**
   * <en>Cut Line Style</en>
   * <zh_cn>剪开线样式</zh_cn>
   * <zh_tw>剪開線樣式</zh_tw>
   */
  cutLineStyle: string[];

  /**
   * <en>Outer Line Color</en>
   * <zh_cn>外边线样式</zh_cn>
   * <zh_tw>外邊線線樣</zh_tw>
   */
  outerLineStyle: string[];

  /**
   * <en>Text Style</en>
   * <zh_cn>文本样式</zh_cn>
   * <zh_tw>文字樣式</zh_tw>
   */
  textStyle: string[];

  /**
   * <en>Pages</en>
   * <zh_cn>各色页数</zh_cn>
   * <zh_tw>各色頁數</zh_tw>
   */
  pages: number[];

  /**
   * <en>Paper thickness</en>
   * <zh_cn>纸厚</zh_cn>
   * <zh_tw>紙厚</zh_tw>
   */
  paperThickness: number;

  /**
   * <en>Other parameters</en>
   * <zh_cn>其它参数</zh_cn>
   * <zh_tw>其它參數</zh_tw>
   */
  otherParameters: object;
};

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
class BrickCore extends BrickWithTableBase {
  protected idOrClassPrefix = 'brickPageCuisenaireRod';

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

    const { data, computedData, mmToPxScale } = this;
    // const { CHARS } = this;
    const {
      paperSize,
      isLandscape,

      maxX: MAX_X,
      maxY: MAX_Y,

      pageMarginTop,
      pageMarginBottom,

      pageMarginLeft,
      pageMarginRight,

      list,
    } = data;

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

    let html = '';
    const NUMBER_MIN = 1;
    list.forEach(
      ({
        onlyWhitePaper,
        digitalOverlay,
        sealingStyle,
        length,
        innerLineStyle: innerLineStyleArray,
        cutLineStyle: cutLineStyleArray,
        outerLineStyle: outerLineStyleArray,
        textStyle: textStyleArray,
        pages,
        paperThickness,
        // otherParameters,
      }) => {
        const NUMBER_COUNT = pages.length;
        const INNER_LINE_STYLE_COUNT = innerLineStyleArray.length;
        const CUT_LINE_STYLE_COUNT = cutLineStyleArray.length;
        const OUTER_LINE_STYLE_COUNT = outerLineStyleArray.length;
        const TEXT_STYLE_COUNT = textStyleArray.length;

        const LAST_INNER_LINE_STYLE = innerLineStyleArray[INNER_LINE_STYLE_COUNT - 1];
        const LAST_CUT_LINE_STYLE = cutLineStyleArray[CUT_LINE_STYLE_COUNT - 1];
        const LAST_OUTER_LINE_STYLE = outerLineStyleArray[OUTER_LINE_STYLE_COUNT - 1];
        const LAST_TEXT_STYLE = textStyleArray[TEXT_STYLE_COUNT - 1];

        const CUISENAIRE_ROD_BEST_FIT_WIDTH = length * 5 - paperThickness;
        const CUISENAIRE_ROD_MIN_WIDTH = length * 4.5;

        // const CUISENAIRE_ROD_WIDTH = CUISENAIRE_ROD_BEST_FIT_WIDTH;
        // const VERTICAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_WIDTH);

        const VERTICAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_MIN_WIDTH);
        const CUISENAIRE_ROD_WIDTH =
          VERTICAL_RODS_COL_COUNT === 0
            ? 0
            : Math.min(MAX_X / VERTICAL_RODS_COL_COUNT, CUISENAIRE_ROD_BEST_FIT_WIDTH);

        const CELL_HEGIHT = length - paperThickness;
        pages.forEach((PAGE_COUNT, numberIndex) => {
          const innerLineStyle =
            numberIndex < INNER_LINE_STYLE_COUNT
              ? innerLineStyleArray[numberIndex]
              : LAST_INNER_LINE_STYLE;
          const cutLineStyle =
            numberIndex < CUT_LINE_STYLE_COUNT
              ? cutLineStyleArray[numberIndex]
              : LAST_CUT_LINE_STYLE;
          const outerLineStyle =
            numberIndex < OUTER_LINE_STYLE_COUNT
              ? outerLineStyleArray[numberIndex]
              : LAST_OUTER_LINE_STYLE;
          const textStyle =
            numberIndex < TEXT_STYLE_COUNT ? textStyleArray[numberIndex] : LAST_TEXT_STYLE;

          const NUMBER_MAX = numberIndex + 1;

          // 'none' | 'onlyAbove' | 'onlyBelow' | 'both'
          const CELL_COUNT_BY_SEALING_STYLE =
            sealingStyle === 'both' ? 2 : sealingStyle === 'none' ? 0 : 1;
          const CUISENAIRE_ROD_HEIGHT =
            length * NUMBER_MAX +
            CELL_HEGIHT *
              (NUMBER_MAX === 1 ? (sealingStyle === 'none' ? 0 : 1) : CELL_COUNT_BY_SEALING_STYLE);
          const VERTICAL_RODS_ROW_COUNT = Math.floor(MAX_Y / CUISENAIRE_ROD_HEIGHT);
          const VERTICAL_RODS_COUNT = VERTICAL_RODS_COL_COUNT * VERTICAL_RODS_ROW_COUNT;

          const HORIZONTAL_RODS_START_Y = CUISENAIRE_ROD_HEIGHT * VERTICAL_RODS_ROW_COUNT;
          const REMAINING_HEIGHT = MAX_Y - HORIZONTAL_RODS_START_Y;
          const HORIZONTAL_RODS_ROW_COUNT = Math.floor(REMAINING_HEIGHT / CUISENAIRE_ROD_MIN_WIDTH);
          const HORIZONTAL_RODS_COL_HEIGHT =
            HORIZONTAL_RODS_ROW_COUNT === 0
              ? 0
              : Math.min(MAX_X / VERTICAL_RODS_COL_COUNT, CUISENAIRE_ROD_BEST_FIT_WIDTH);
          // const HORIZONTAL_RODS_ROW_WIDTH = CUISENAIRE_ROD_HEIGHT;
          const HORIZONTAL_RODS_COL_COUNT = Math.floor(MAX_X / CUISENAIRE_ROD_HEIGHT);
          const HORIZONTAL_RODS_COUNT = HORIZONTAL_RODS_COL_COUNT * HORIZONTAL_RODS_ROW_COUNT;

          const RODS_COUNT_PER_PAGE = VERTICAL_RODS_COUNT + HORIZONTAL_RODS_COUNT;

          for (let pageIndex = 0; pageIndex < PAGE_COUNT; ++pageIndex) {
            html += '<page>';
            let startNumberOffset = digitalOverlay
              ? NUMBER_MAX * RODS_COUNT_PER_PAGE * pageIndex
              : 0;

            for (let rowIndex = 0; rowIndex < VERTICAL_RODS_ROW_COUNT; ++rowIndex) {
              for (let colIndex = 0; colIndex < VERTICAL_RODS_COL_COUNT; ++colIndex) {
                html += this.getVerticalRodHtml(
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

            for (let rowIndex = 0; rowIndex < HORIZONTAL_RODS_ROW_COUNT; ++rowIndex) {
              for (let colIndex = 0; colIndex < HORIZONTAL_RODS_COL_COUNT; ++colIndex) {
                html += this.getHorizontalRodHtml(
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

            html += '</page>';
          }
        });
      },
    );

    const en = `${FILENAME_POSTFIX}cuisenaireRods`;
    const zh_cn = `${FILENAME_POSTFIX}古氏积木`;
    const zh_tw = `${FILENAME_POSTFIX}古氏積木`;
    computedData.title = { en, zh_cn, zh_tw };

    computedData.css = css;
    computedData.html = html;
  };

  private getHorizontalRodHtml = (
    digitalOverlay: boolean,
    startNumberOffset: number,
    NUMBER_MAX: number,
    sealingStyle: any,
    length: number,
    CUISENAIRE_ROD_WIDTH: number,
    CUISENAIRE_ROD_HEIGHT: number,
    mmToPxScale: number,
    INNER_LINE_STYLE: string,
    CUT_LINE_STYLE: string,
    OUTER_LINE_COLOR: string,
    TEXT_STYLE: string,
    paperThickness: number,
  ): string => {
    const { createSvg, appendLine, appendText, getTextStyleFontSizePatchCss, appendOuterLine } =
      svgSpace.edu.sonya.cc.SvgHelper;
    TEXT_STYLE += getTextStyleFontSizePatchCss(NUMBER_MAX + startNumberOffset, TEXT_STYLE);

    const ROTATE = 90;
    const svg = createSvg();
    appendOuterLine(
      svg,
      CUISENAIRE_ROD_WIDTH,
      CUISENAIRE_ROD_HEIGHT,
      mmToPxScale,
      OUTER_LINE_COLOR,
    );
    for (let i = 0; i < 4; ++i) {
      const Y = length * (i + 1);
      appendLine(svg, INNER_LINE_STYLE, 0, CUISENAIRE_ROD_WIDTH, Y, Y, null);
    }
    const X1 = length - paperThickness;
    for (let i = 1; i < NUMBER_MAX; ++i) {
      const X = X1 + length * i;
      appendLine(svg, INNER_LINE_STYLE, X, X, 0, CUISENAIRE_ROD_HEIGHT, null);
    }
    const X2 = CUISENAIRE_ROD_WIDTH - X1;
    const textX1 = length * 0.5;
    const textX3 = length * 2.5;
    // let normalTextStartX = length * 0.5;
    const textY1 = CUISENAIRE_ROD_WIDTH - (length - paperThickness) + length * 0.5;
    const textY3 = (length - paperThickness) * 0.5;
    const NUMBER_MAX_STRING = (NUMBER_MAX + startNumberOffset).toString();
    const NUMBER_MIN_STRING = (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
    switch (sealingStyle) {
      case 'onlyAbove':
        // normalTextStartX += X1;
        appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
        appendLine(svg, CUT_LINE_STYLE, X1, X1, length, CUISENAIRE_ROD_HEIGHT, null);
        appendText(
          svg,
          TEXT_STYLE,
          NUMBER_MAX_STRING,
          textX1,
          -textY1,
          ROTATE,
          'left top',
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
            'left top',
            null,
            true,
          );
        }
        break;
      case 'onlyBelow':
        appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
        appendLine(svg, CUT_LINE_STYLE, X2, X2, length, CUISENAIRE_ROD_HEIGHT, null);
        appendText(
          svg,
          TEXT_STYLE,
          NUMBER_MIN_STRING,
          textX1,
          -textY3,
          ROTATE,
          'left top',
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
            'left top',
            null,
            true,
          );
        }
        break;
      case 'both':
        // normalTextStartX += X1;
        appendLine(svg, INNER_LINE_STYLE, X1, X1, 0, length, null);
        appendLine(svg, CUT_LINE_STYLE, X1, X1, length, CUISENAIRE_ROD_HEIGHT, null);
        if (NUMBER_MAX > 1) {
          appendLine(svg, INNER_LINE_STYLE, X2, X2, 0, length, null);
          appendLine(svg, CUT_LINE_STYLE, X2, X2, length, CUISENAIRE_ROD_HEIGHT, null);
        }
        appendText(
          svg,
          TEXT_STYLE,
          NUMBER_MIN_STRING,
          textX1,
          -textY3,
          ROTATE,
          'left top',
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
          'left top',
          null,
          true,
        );
        // if (NUMBER_MAX === 1) {
        // 	appendText(svg, TEXT_STYLE, NUMBER_MIN_STRING, textX1, -textY3, ROTATE, 'left top', null, true);
        // }
        break;
      case 'none':
      default:
        break;
    }

    const normalTextStartY = length * 0.5;
    const normalTextStartX = length * 0.5;
    for (let numberLoop = 1; numberLoop <= NUMBER_MAX; ++numberLoop) {
      const Y = normalTextStartY + length * numberLoop;
      for (let i = 0; i < 4; ++i) {
        appendText(
          svg,
          TEXT_STYLE,
          (numberLoop + startNumberOffset).toString(),
          normalTextStartX + length * i,
          -Y,
          ROTATE,
          'left top',
          null,
          true,
        );
      }
    }
    return svg.outerHTML;
  };

  private getVerticalRodHtml = (
    digitalOverlay: boolean,
    startNumberOffset: number,
    NUMBER_MAX: number,
    sealingStyle: any,
    length: number,
    CUISENAIRE_ROD_WIDTH: number,
    CUISENAIRE_ROD_HEIGHT: number,
    mmToPxScale: number,
    INNER_LINE_STYLE: string,
    CUT_LINE_STYLE: string,
    OUTER_LINE_COLOR: string,
    TEXT_STYLE: string,
    paperThickness: number,
  ): string => {
    const { createSvg, appendLine, appendText, getTextStyleFontSizePatchCss, appendOuterLine } =
      svgSpace.edu.sonya.cc.SvgHelper;
    TEXT_STYLE += getTextStyleFontSizePatchCss(NUMBER_MAX + startNumberOffset, TEXT_STYLE);
    const ROTATE = 0;

    const svg = createSvg();
    appendOuterLine(
      svg,
      CUISENAIRE_ROD_WIDTH,
      CUISENAIRE_ROD_HEIGHT,
      mmToPxScale,
      OUTER_LINE_COLOR,
    );

    for (let i = 0; i < 4; ++i) {
      const X = length * (i + 1);
      appendLine(svg, INNER_LINE_STYLE, X, X, 0, CUISENAIRE_ROD_HEIGHT, null);
    }

    // 'none' | 'onlyAbove' | 'onlyBelow' | 'both'
    const Y1 = length - paperThickness;
    for (let i = 1; i < NUMBER_MAX; ++i) {
      const Y = Y1 + length * i;
      appendLine(svg, INNER_LINE_STYLE, 0, CUISENAIRE_ROD_WIDTH, Y, Y, null);
    }
    const Y2 = CUISENAIRE_ROD_HEIGHT - Y1;
    const aboveTextY = (length - paperThickness) * 0.5;
    const belowTextY = Y2 + aboveTextY;
    let normalTextStartY = length * 0.5;

    const textX1 = length * 0.5;
    const textX3 = textX1 + length * 2;
    const NUMBER_MAX_STRING = (NUMBER_MAX + startNumberOffset).toString();
    const NUMBER_MIN_STRING = (digitalOverlay ? 1 + startNumberOffset : NUMBER_MAX).toString();
    switch (sealingStyle) {
      case 'onlyAbove':
        normalTextStartY += Y1;
        appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
        appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y1, Y1, null);

        appendText(
          svg,
          TEXT_STYLE,
          NUMBER_MAX_STRING,
          textX1,
          aboveTextY,
          ROTATE,
          'left top',
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
            'left top',
            null,
            true,
          );
        }
        break;
      case 'onlyBelow':
        appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
        appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y2, Y2, null);

        appendText(
          svg,
          TEXT_STYLE,
          NUMBER_MIN_STRING,
          textX1,
          belowTextY,
          ROTATE,
          'left top',
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
            'left top',
            null,
            true,
          );
        }
        break;
      case 'both':
        normalTextStartY += Y1;

        appendLine(svg, INNER_LINE_STYLE, 0, length, Y1, Y1, null);
        appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y1, Y1, null);
        if (NUMBER_MAX > 1) {
          appendLine(svg, INNER_LINE_STYLE, 0, length, Y2, Y2, null);
          appendLine(svg, CUT_LINE_STYLE, length, CUISENAIRE_ROD_WIDTH, Y2, Y2, null);
          appendText(
            svg,
            TEXT_STYLE,
            NUMBER_MIN_STRING,
            textX1,
            belowTextY,
            ROTATE,
            'left top',
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
          'left top',
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
            'left top',
            null,
            true,
          );
        }
        break;
      case 'none':
      default:
        break;
    }

    const normalTextStartX = length * 0.5;
    for (let numberLoop = NUMBER_MAX; numberLoop > 0; --numberLoop) {
      const Y = normalTextStartY + length * (NUMBER_MAX - numberLoop);
      for (let i = 0; i < 4; ++i) {
        appendText(
          svg,
          TEXT_STYLE,
          (numberLoop + startNumberOffset).toString(),
          normalTextStartX + length * i,
          Y,
          ROTATE,
          'left top',
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
  protected getUsableList = (): Array<object> => {
    const pages = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // const innerLineStyle = getArrayRepeatSameValue('stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;', 10);
    // const cutLineStyle = getArrayRepeatSameValue('stroke:#555;stroke-width:0.2mm;', 10);
    // // const outerLineStyle = getArrayRepeatSameValue('#000000', 10);
    // const outerLineStyle = getArrayRepeatSameValue('stroke:#000;stroke-width:0.2mm;', 10);
    // const textStyle = getArrayRepeatSameValue('font-size:6mm;', 10); // stroke:#555;stroke-width:0.2mm;

    const innerLineStyle = ['stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;'];
    const cutLineStyle = ['stroke:#555;stroke-width:0.2mm;'];
    const outerLineStyle = ['stroke:#000;stroke-width:0.2mm;'];
    const textStyle = ['font-size:6mm;'];

    const onlyWhitePaper = false;
    const length = 10;
    const paperThickness = 0;
    const otherParameters = {};

    const usableList: Array<{
      strongI18n: I18nable;
      buttonList: Array<{ nameI18n: I18nable; info: CuisenaireRodInfo }>;
    }> = [];

    [
      {
        digitalOverlay: false,
        strongI18n: { en: 'Not Overlay', zh_cn: '无叠加', zh_tw: '無疊加' },
      },
      {
        digitalOverlay: true,
        strongI18n: { en: 'Overlay', zh_cn: '叠加', zh_tw: '疊加' },
      },
    ].forEach(({ digitalOverlay, strongI18n }) => {
      usableList.push({
        strongI18n,
        buttonList: [
          {
            nameI18n: {
              en: 'Full sealing',
              zh_cn: '全封口',
              zh_tw: '全封口',
            },
            sealingStyle: 'both',
          },
          {
            nameI18n: {
              en: 'Capped',
              zh_cn: '封顶',
              zh_tw: '封頂',
            },
            sealingStyle: 'onlyAbove',
          },
          {
            nameI18n: {
              en: 'No overlap on the back cover',
              zh_cn: '封底',
              zh_tw: '封底',
            },
            sealingStyle: 'onlyBelow',
          },
          {
            nameI18n: {
              en: 'No sealing, no stacking',
              zh_cn: '无封口',
              zh_tw: '無封口',
            },
            sealingStyle: 'none',
          },
        ].map(({ nameI18n, sealingStyle }) => {
          return {
            nameI18n,
            info: {
              onlyWhitePaper,
              digitalOverlay,
              sealingStyle,
              length,
              innerLineStyle,
              cutLineStyle,
              outerLineStyle,
              textStyle,
              pages,
              paperThickness,
              otherParameters,
            },
          } as { nameI18n: I18nable; info: CuisenaireRodInfo };
        }),
      });
    });
    return usableList;
  };

  /** OK
   * 初始化表头
   */
  protected initTableHead = (): void => {
    // this.appendTableHeadCell({ en: 'Only white paper', zh_cn: '只有白纸', zh_tw: '只有白紙' });

    this.appendTableHeadCell({
      en: 'Digital Overlay',
      zh_cn: '数字叠加',
      zh_tw: '數位疊加',
    });
    this.appendTableHeadCell({
      en: 'Sealing style',
      zh_cn: '封口方式',
      zh_tw: '封口方式',
    });
    this.appendTableHeadCell({ en: 'Length', zh_cn: '边长', zh_tw: '邊長' });
    this.appendTableHeadCell({
      en: 'Inner Line Style',
      zh_cn: '内部线样式',
      zh_tw: '內部線樣式',
    });
    this.appendTableHeadCell({
      en: 'Cut Line Style',
      zh_cn: '剪开线样式',
      zh_tw: '剪開線樣式',
    });
    this.appendTableHeadCell({
      en: 'Outer Line Color',
      zh_cn: '外边线样式',
      zh_tw: '外邊線線樣',
    });
    this.appendTableHeadCell({
      en: 'Text Style',
      zh_cn: '文本样式',
      zh_tw: '文字樣式',
    });
    this.appendTableHeadCell({
      en: 'Pages',
      zh_cn: '各色页数',
      zh_tw: '各色頁數',
    });
    this.appendTableHeadCell({
      en: 'Paper thickness',
      zh_cn: '纸厚',
      zh_tw: '紙厚',
    });

    // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
  };

  /** OK
   * 创建表格行
   * @param item
   * @param tableBodyElement
   */
  protected createTableBodyRow = (item: object): void => {
    const {
      onlyWhitePaper,
      digitalOverlay,
      sealingStyle,
      length,
      innerLineStyle,
      cutLineStyle,
      outerLineStyle,
      textStyle,
      pages,
      paperThickness,
      // otherParameters,
    } = item as CuisenaireRodInfo;
    const { tableBodyElement } = this;

    const tr = createElement('tr') as HTMLTableRowElement;
    tableBodyElement.appendChild(tr);

    // this.appendNormalTd(tr, id.length === 0 ? `svg_${(index + 1)}` : id, cuisenaireRod, 'id');
    // const tdOperation = createElement('td') as HTMLTableCellElement;
    // tr.appendChild(tdOperation);
    this.appendOperationTd(tr, item);

    // , getI18nInnerHTML({ en: '', zh_cn: '', zh_tw: '' })
    // this.appendCheckboxTdWithoutText(tr, onlyWhitePaper, cuisenaireRod, 'onlyWhitePaper');
    this.appendCheckboxTdWithoutText(tr, digitalOverlay, item, 'digitalOverlay');

    this.appendSelectTd(tr, sealingStyle, item, 'sealingStyle', [
      { value: 'none', captions: { en: 'None', zh_cn: '无', zh_tw: '無' } },
      {
        value: 'onlyAbove',
        captions: { en: 'Only Above', zh_cn: '仅顶', zh_tw: '僅頂' },
      },
      {
        value: 'onlyBelow',
        captions: { en: 'Only Below', zh_cn: '仅底', zh_tw: '僅底' },
      },
      { value: 'both', captions: { en: 'Both', zh_cn: '全部', zh_tw: '全部' } },
    ]);
    this.appendNumberTd(tr, length, item, 'length', 1, null, 1);

    this.appendTextareaTd(tr, innerLineStyle.join('\n'), item, 'innerLineStyle', 'stringArray');
    this.appendTextareaTd(tr, cutLineStyle.join('\n'), item, 'cutLineStyle', 'stringArray');
    this.appendTextareaTd(tr, outerLineStyle.join('\n'), item, 'outerLineStyle', 'stringArray');
    this.appendTextareaTd(tr, textStyle.join('\n'), item, 'textStyle', 'stringArray');
    this.appendTextareaTd(tr, pages.join('\n'), item, 'pages', 'numberArray');
    this.appendNumberTd(tr, paperThickness, item, 'paperThickness', 0, null, null);
  };
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;
