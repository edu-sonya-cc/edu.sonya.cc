// import { FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement } from '../dom.ts';
// import { svgSpace } from '../svgHelper.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/svgHelper.d.ts' />
/// <reference path='../../types/brickWithTableBase.d.ts' />

/**
 * <en>Hundredth lattice information</en>
 * <zh_cn>百数格信息</zh_cn>
 * <zh_tw>百數格資訊</zh_tw>
 */
type HundredthLatticeInfo = {
  /**
   * <en>Length</en>
   * <zh_cn>边长</zh_cn>
   * <zh_tw>邊長</zh_tw>
   */
  length: number;

  /**
   * <en>Show Number</en>
   * <zh_cn>显示数字</zh_cn>
   * <zh_tw>顯示數字</zh_tw>
   */
  showNumber: boolean;

  /**
   * <en>Digital Overlay</en>
   * <zh_cn>数字叠加</zh_cn>
   * <zh_tw>數位疊加</zh_tw>
   */
  digitalOverlay: boolean;

  /**
   * <en>Start Number</en>
   * <zh_cn>开始值</zh_cn>
   * <zh_tw>開始值</zh_tw>
   */
  startNumber: number;

  /**
   * <en>Count</en>
   * <zh_cn>数量</zh_cn>
   * <zh_tw>數量</zh_tw>
   */
  count: number;

  /**
   * <en>Inner Line Style</en>
   * <zh_cn>内部线样式</zh_cn>
   * <zh_tw>內部線樣式</zh_tw>
   */
  innerLineStyle: string;

  /**
   * <en>Outer Line Style</en>
   * <zh_cn>外边线样式</zh_cn>
   * <zh_tw>外邊線線樣</zh_tw>
   */
  outerLineStyle: string;

  /**
   * <en>Text Style</en>
   * <zh_cn>文本样式</zh_cn>
   * <zh_tw>文字樣式</zh_tw>
   */
  textStyle: string;
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
 * 功能：
 * 初建：2022-11-19 安启
 * 历史：2020-04-01
 * 参考：P:\0\000007\_学习\数学\百数格	P:\0\000007\_学习\数学\百格游戏
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
  protected idOrClassPrefix = 'brickPageHundredthLattice';

  /** OK
   * 构造方法
   */
  constructor() {
    super({}, {});
  }

  /**
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

      list,
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

    let html = '<page>';

    let usedX = 0;
    let usedY = 0;
    let currentRowHeight = 0;
    let svgIndex = 0;
    list.forEach(
      ({
        length,
        showNumber,
        digitalOverlay,
        startNumber,
        count,
        innerLineStyle,
        outerLineStyle,
        textStyle,
      }) => {
        const WIDTH = length * 10;
        const HEIGHT = length * 10;
        let numberOffset = 0;
        for (let regionIndex = 0; regionIndex < count; ++regionIndex) {
          let newPage = usedY + HEIGHT > MAX_Y;
          let newRow = false;
          if (!newPage && usedX + WIDTH > MAX_X) {
            usedY += currentRowHeight;
            if (usedY + HEIGHT > MAX_Y) {
              newPage = true;
            } else {
              newRow = true;
            }
          }

          if (newPage) {
            html += '</page><page>';
            usedX = 0;
            usedY = 0;
            currentRowHeight = 0;
          } else if (newRow) {
            usedX = 0;
            currentRowHeight = 0;
          }

          currentRowHeight = Math.max(currentRowHeight, HEIGHT);
          usedX += WIDTH;

          const {
            createSvg,
            appendOuterLine,
            appendLine,
            appendText,
            getTextStyleFontSizePatchCss,
          } = svgSpace.edu.sonya.cc.SvgHelper;
          const svg = createSvg() as SVGElement;
          svg.id = `svg_${++svgIndex}`;
          appendOuterLine(svg, WIDTH, HEIGHT, outerLineStyle);

          for (let i = 1; i < 10; ++i) {
            const X = length * i;
            appendLine(svg, innerLineStyle, X, X, 0, HEIGHT, null);

            const Y = length * i;
            appendLine(svg, innerLineStyle, 0, WIDTH, Y, Y, null);
          }

          if (showNumber) {
            for (let i = 0; i < 10; ++i) {
              const Y = length * (i + 0.5);
              for (let j = 0; j < 10; ++j) {
                const X = length * (j + 0.5);
                const NUMBER = numberOffset + startNumber + 10 * i + j;
                appendText(
                  svg,
                  textStyle.concat(getTextStyleFontSizePatchCss(NUMBER, textStyle)),
                  NUMBER.toString(),
                  X,
                  Y,
                  0,
                  'center',
                  null,
                  true,
                );
              }
            }
          }

          html += svg.outerHTML;

          if (digitalOverlay) numberOffset += 100;
        }
      },
    );
    html += '</page>';

    const en = `${FILENAME_POSTFIX}hundredthLattice`;
    const zh_cn = `${FILENAME_POSTFIX}百数格`;
    const zh_tw = `${FILENAME_POSTFIX}百數格`;
    computedData.title = { en, zh_cn, zh_tw };

    computedData.css = css;
    computedData.html = html;
  };

  /** OK
   * 创建表格行
   * @param item
   * @param tableBodyElement
   */
  protected createTableBodyRow = (item: object): void => {
    const {
      length,
      showNumber,
      digitalOverlay,
      startNumber,
      count,

      innerLineStyle,
      outerLineStyle,
      textStyle,
      // otherParameters,
    } = item as HundredthLatticeInfo;
    const { tableBodyElement } = this;

    const tr = createElement('tr') as HTMLTableRowElement;
    tableBodyElement.appendChild(tr);

    this.appendOperationTd(tr, item);

    this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
    this.appendCheckboxTdWithoutText(tr, showNumber, item, 'showNumber');
    this.appendCheckboxTdWithoutText(tr, digitalOverlay, item, 'digitalOverlay');
    this.appendNumberTd(tr, startNumber, item, 'startNumber', null, null, 1);
    this.appendNumberTd(tr, count, item, 'count', 1, null, 1);

    this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
    this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
    this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
  };

  /** OK
   * 初始化表头
   */
  protected initTableHead = (): void => {
    this.appendTableHeadCell({ en: 'Length', zh_cn: '边长', zh_tw: '邊長' });
    this.appendTableHeadCell({
      en: 'Show Number',
      zh_cn: '显示数字',
      zh_tw: '顯示數字',
    });
    this.appendTableHeadCell({
      en: 'Digital Overlay',
      zh_cn: '数字叠加',
      zh_tw: '數位疊加',
    });
    this.appendTableHeadCell({
      en: 'Start Number',
      zh_cn: '开始值',
      zh_tw: '開始值',
    });
    this.appendTableHeadCell({ en: 'Count', zh_cn: '数量', zh_tw: '數量' });
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
      en: 'Text Style',
      zh_cn: '文本样式',
      zh_tw: '文字樣式',
    });
  };

  /** OK
   * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
   * @returns 数组：信息数组
   */
  protected getUsableList = (): Array<object> => {
    const length = 10;
    const showNumber = true;
    const digitalOverlay = true;
    const startNumber = 1;
    const count = 1;

    const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
    const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
    const textStyle = 'font-size:6mm;';

    const buttonList = [
      {
        nameI18n: {
          en: 'Hide numbers',
          zh_cn: '无数字',
          zh_tw: '無數字',
        },
        info: {
          length,
          showNumber: false,
          digitalOverlay,
          startNumber,
          count: 2,
          innerLineStyle,
          outerLineStyle,
          textStyle,
        },
      },
      {
        nameI18n: {
          en: 'Start from zero',
          zh_cn: '从0开始',
          zh_tw: '從0開始',
        },
        info: {
          length,
          showNumber,
          digitalOverlay,
          startNumber: 0,
          count,
          innerLineStyle,
          outerLineStyle,
          textStyle,
        },
      },
      {
        nameI18n: {
          en: 'Start from one',
          zh_cn: '从1开始',
          zh_tw: '從1開始',
        },
        info: {
          length,
          showNumber,
          digitalOverlay,
          startNumber,
          count,
          innerLineStyle,
          outerLineStyle,
          textStyle,
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
