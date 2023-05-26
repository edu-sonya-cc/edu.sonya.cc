// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// // import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, stopEventBubble } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// import { getNumbersArray, pushSameValueTimes } from '../utils.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';
// import * as boxSpace from './box.ts';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/utils.d.ts' />

/// <reference path='../../types/brickWithTableBase.d.ts' />
/// <reference path='../../types/box.d.ts' />

type BoxParameter = boxSpace.edu.sonya.cc.BoxParameter;
export abstract class BoxBase extends BrickWithTableBase {
  protected idOrClassPrefix = 'brickPageBox';
  /** OK
   * 构造方法
   */
  constructor() {
    super(
      {
        topWithoutHalfCircle: false,
      },
      {},
    );
  }

  protected updateOtherDataLevel3 = (newData: any): void => {
    const { topWithoutHalfCircle } = newData;

    const {
      data,

      topWithoutHalfCircleRadioArray,
    } = this;

    data.topWithoutHalfCircle = topWithoutHalfCircle;

    topWithoutHalfCircleRadioArray[topWithoutHalfCircle ? 1 : 0].checked = true;
  };

  /** OK
   * 初始化表格上方控件（通用两行控件除外）
   */
  protected initCoreElementsBeforeTable = (): void => {
    const { configCoreElement, getWrapElement, idOrClassPrefix } = this;

    let wrapElement: HTMLDivElement;

    wrapElement = getWrapElement({
      en: 'Top Half Circle',
      zh_cn: '顶部半圆',
      zh_tw: '頂部半圓',
    });
    wrapElement.id = `${idOrClassPrefix}HalfCircleWrap`;

    this.initRadioGroupByBooleanOrNumberValue(
      [
        {
          value: false,
          i18nHtml: getI18nInnerHTML({ en: 'Hide', zh_cn: '无', zh_tw: '無' }),
        },
        {
          value: true,
          i18nHtml: getI18nInnerHTML({ en: 'Show', zh_cn: '有', zh_tw: '有' }),
        },
      ],
      'topWithoutHalfCircle',
      this.topWithoutHalfCircleRadioArray,
      wrapElement,
    );
  };
  private topWithoutHalfCircleRadioArray: Array<HTMLInputElement> = [];

  protected updateOtherDataOfBox = (newData: any): void => {};
  // protected abstract initOtherElements(): void;

  protected countDataAndComputedData = (): void => {
    this.countDataAndComputedDataInBrickWithTableBase();

    type BoxKind = boxSpace.edu.sonya.cc.BoxKind;
    const { BoxGenerator } = boxSpace.edu.sonya.cc;
    const boxGenerator = new BoxGenerator();

    const { data, computedData } = this;
    const {
      paperSize,
      isLandscape,

      maxX: MAX_X,
      maxY: MAX_Y,

      pageMarginTop,
      // pageMarginBottom,

      pageMarginLeft,
      // pageMarginRight,
      list,
      topWithoutHalfCircle,
    } = data;

    let css = `/* common.css */
    * { margin:0;border:0;padding:0; }
    * { box-sizing:border-box; }

    page { display:flex;flex-flow:wrap; }
    page:not(page:last-child){page-break-after:always;}

    /* landscape 横向 portrait 纵向*/
    @media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; } }
    /* page { width:${MAX_X}mm;height:${MAX_Y}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; } */
    page { width:${
      MAX_X + pageMarginLeft
    }mm;padding-left:${pageMarginLeft}mm;padding-top:${pageMarginTop}mm; }
    page{height:${MAX_Y}mm;} /* 2023年5月25日重新加回 */
    `;

    // let html = '';
    // const page = createElement('page') as HTMLElement;
    const svgList: Array<SVGElement> = [];
    list.forEach(
      ({
        id,
        boxKind,
        lengths,
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        options,
      }: BoxParameter) => {
        const { css: svgCss, svg } = boxGenerator.create({
          id,
          boxKind,
          lengths,
          contents,
          outerLineStyle,
          innerLineStyle,
          textStyle,
          rotate,
          move,
          topWithoutHalfCircle,
          options,
        });

        // html += svg.outerHTML;
        // page.appendChild(svg);
        svgList.push(svg);
        css += svgCss;
      },
    );

    const en = `${FILENAME_POSTFIX}Boxs`;
    const zh_cn = `${FILENAME_POSTFIX}盒子`;
    const zh_tw = `${FILENAME_POSTFIX}盒子`;
    computedData.title = { en, zh_cn, zh_tw };

    computedData.css = css;
    // computedData.html = html;
    computedData.html = this.getAutomaticPaginationHtmlFromChildList(svgList, MAX_X, MAX_Y); // page.outerHTML;
    // console.log('countDataAndComputedData()', list, computedData );
  };

  private idOrClassPrefix = 'brickPageBox';
  /** OK
   * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
   * @returns 数组：信息数组
   */
  protected getUsableList = (): Array<object> => {
    const usableBoxs: Array<{
      name: string;
      infos: Array<BoxParameter & { captionI18n: I18nable | string }>;
    }> = [];
    this.appendBoxOfCuboid(usableBoxs);

    const usableList: Array<{
      strongI18n: I18nable;
      buttonList: Array<{ nameI18n: I18nable; info: BoxParameter }>;
    }> = [];
    usableBoxs.forEach(
      ({
        name,
        infos,
      }: {
        name: string;
        infos: Array<BoxParameter & { captionI18n: I18nable }>;
      }) => {
        const strongI18n = { en: name, zh_cn: name, zh_tw: name };
        const buttonList: Array<{ nameI18n: I18nable; info: BoxParameter }> = [];

        infos.forEach((info: BoxParameter & { captionI18n: I18nable }) => {
          const { captionI18n } = info;

          buttonList.push({
            nameI18n:
              typeof captionI18n === 'string'
                ? {
                    en: captionI18n,
                    zh_cn: captionI18n,
                    zh_tw: captionI18n,
                  }
                : captionI18n,
            info,
          });
        });

        usableList.push({
          strongI18n,
          buttonList,
        });
      },
    );
    return usableList;
  };

  private appendBoxOfCuboid = (
    usableBoxs: {
      name: string;
      infos: Array<BoxParameter & { captionI18n: I18nable }>;
    }[],
  ): void => {
    const BoxKind = boxSpace.edu.sonya.cc.BoxKind;

    const outerLineStyle = 'stroke:#555;stroke-width:0.2mm;';
    const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
    const textStyle = 'font-size:6mm;font-family:"Times New Roman", "Kaiti";';
    const textStyleBig = 'font-size:8mm;font-family:"Times New Roman", "Kaiti";';
    const contents = getArrayRepeatSameValue('', 6);
    const rotate = false;
    const move = false;
    const otherSize = 10;
    const topWithoutHalfCircle = false;

    const i18nContentsOfRummikub = getArrayRepeatSameValue(
      getI18nInnerHTML({ en: 'Rummikub', zh_cn: '拉密', zh_tw: '拉密' }),
      6,
    );

    const infosCuboid: Array<BoxParameter & { captionI18n: I18nable }> = [];
    const infosCuboidCoverOnTheSameSide: Array<BoxParameter & { captionI18n: I18nable }> = [];
    [
      {
        lengths: [40, 20, 56],
        contents: getArrayRepeatSameValue('英文扑克', 6),
        textStyle,
        captionI18n: '&nbsp;&nbsp;40<br/>×20<br/>×56',
        captionI18nSameSide: `&nbsp;&nbsp;40<br/>×20<br/>×56<br/>+${otherSize}`,
        otherSize,
      },
      {
        lengths: [56, 50, 80],
        contents: getArrayRepeatSameValue('拼音扑克', 6),
        textStyle: textStyleBig,
        captionI18n: '&nbsp;&nbsp;56<br/>×50<br/>×80',
        captionI18nSameSide: `&nbsp;&nbsp;56<br/>×50<br/>×80<br/>+${otherSize}`,
        otherSize,
      },
      {
        lengths: [18, 50, 25],
        contents: i18nContentsOfRummikub,
        textStyle: textStyleBig,
        captionI18n: {
          en: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>Rummikub',
          zh_cn: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密',
          zh_tw: '&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密',
        },
        captionI18nSameSide: {
          en: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${otherSize}<br/>Rummikub`,
          zh_cn: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${otherSize}<br/>拉密`,
          zh_tw: `&nbsp;&nbsp;18<br/>×50<br/>×25<br/>+${otherSize}<br/>拉密`,
        },
        otherSize,
      },
      {
        lengths: [20, 50, 28],
        contents: i18nContentsOfRummikub,
        textStyle: textStyleBig,
        captionI18n: {
          en: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>Rummikub',
          zh_cn: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密',
          zh_tw: '&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密',
        },
        captionI18nSameSide: {
          en: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${otherSize}<br/>Rummikub`,
          zh_cn: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${otherSize}<br/>拉密`,
          zh_tw: `&nbsp;&nbsp;20<br/>×50<br/>×28<br/>+${otherSize}<br/>拉密`,
        },
        otherSize,
      },
    ].forEach(({ lengths, contents, textStyle, captionI18n, captionI18nSameSide, otherSize }) => {
      infosCuboid.push({
        id: '',
        boxKind: BoxKind.cuboid,
        lengths,
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        captionI18n,
      });
      infosCuboidCoverOnTheSameSide.push({
        id: '',
        boxKind: BoxKind.cuboidCoverOnTheSameSide,
        lengths: lengths.concat([otherSize]),
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        captionI18n: captionI18nSameSide,
      });
    });
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 10].forEach(size => {
      infosCuboid.push({
        id: '',
        boxKind: BoxKind.cuboid,
        lengths: [size, size, size],
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        captionI18n: `&nbsp;&nbsp;${size}<br/>×${size}<br/>×${size}`,
      });
      infosCuboidCoverOnTheSameSide.push({
        id: '',
        boxKind: BoxKind.cuboidCoverOnTheSameSide,
        lengths: [size, size, size, otherSize],
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        captionI18n: `&nbsp;&nbsp;${size}<br/>×${size}<br/>×${size}<br/>+${otherSize}`,
      });
    });

    const infosOfCuboidWithoutBottom: Array<BoxParameter & { captionI18n: I18nable }> = [];
    const infosOfCuboidCoverOnTheSameSideWithoutBottom: Array<
      BoxParameter & { captionI18n: I18nable }
    > = [];
    [
      [10, 10, 3],
      [20, 20, 8],
      [30, 30, 10],
      [40, 40, 10],
      [50, 50, 10],
      [60, 60, 10],
      [70, 70, 10],
      [80, 80, 10],
      [90, 90, 10],
    ].forEach(lengths => {
      const captionI18n = `&nbsp;&nbsp;${lengths[0]}<br/>×${lengths[1]}<br/>×${lengths[2]}`;
      const otherSize = lengths[2] * 0.5;
      const captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat(`<br/>+${otherSize}`);
      infosOfCuboidCoverOnTheSameSideWithoutBottom.push({
        id: '',
        boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutBottom,
        lengths: lengths.concat([otherSize]),
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        // captionI18n,
        captionI18n: captionI18nrOnTheSameSideWithoutBottom, // `&nbsp;&nbsp;${size}<br/>×${size}<br/>×${size}<br/>+${otherSize}`,
      });

      if (lengths[0] <= 80) {
        infosOfCuboidWithoutBottom.push({
          id: '',
          boxKind: BoxKind.cuboidWithoutBottom,
          lengths,
          contents,
          outerLineStyle,
          innerLineStyle,
          textStyle,
          rotate,
          move,
          topWithoutHalfCircle,
          options: {},
          captionI18n,
        });
      }
    });

    const infosOfCuboidWithoutTop: Array<BoxParameter & { captionI18n: I18nable }> = [];
    const infosOfCuboidCoverOnTheSameSideWithoutTop: Array<
      BoxParameter & { captionI18n: I18nable }
    > = [];
    [
      [9, 9, 10],
      [19, 19, 20],
      [29, 29, 30],
      [39, 39, 40],
      [49, 49, 50],
      [59, 59, 60],
      [69, 69, 70],
      [79, 79, 80],
      [89, 89, 90],
    ].forEach(lengths => {
      const captionI18n = `&nbsp;&nbsp;${lengths[0]}<br/>×${lengths[1]}<br/>×${lengths[2]}`;
      const otherSize = lengths[2] * 0.5;
      const captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat(`<br/>+${otherSize}`);
      infosOfCuboidCoverOnTheSameSideWithoutTop.push({
        id: '',
        boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutTop,
        lengths: lengths.concat([otherSize]),
        contents,
        outerLineStyle,
        innerLineStyle,
        textStyle,
        rotate,
        move,
        topWithoutHalfCircle,
        options: {},
        captionI18n: captionI18nrOnTheSameSideWithoutBottom,
      });

      if (lengths[0] <= 80) {
        infosOfCuboidWithoutTop.push({
          id: '',
          boxKind: BoxKind.cuboidWithoutTop,
          lengths,
          contents,
          outerLineStyle,
          innerLineStyle,
          textStyle,
          rotate,
          move,
          topWithoutHalfCircle,
          options: {},
          captionI18n,
        });
      }
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid',
        zh_cn: '异侧',
        zh_tw: '異側',
      }),
      infos: JSON.parse(JSON.stringify(infosCuboid)),
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid which cover on the same side',
        zh_cn: '盖子同侧',
        zh_tw: '蓋子同側',
      }),
      infos: JSON.parse(JSON.stringify(infosCuboidCoverOnTheSameSide)),
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid without top',
        zh_cn: '异侧无顶',
        zh_tw: '異側無頂',
      }),
      infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutTop)),
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid without bottom',
        zh_cn: '异侧无底',
        zh_tw: '異側無底',
      }),
      infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutBottom)),
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid which cover on the same side and without top',
        zh_cn: '盖子同侧无顶',
        zh_tw: '蓋子同側無頂',
      }),
      infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutTop)),
    });

    usableBoxs.push({
      name: getI18nInnerHTML({
        en: 'Cuboid which cover on the same side and without bottom',
        zh_cn: '盖子同侧无底',
        zh_tw: '蓋子同側無底',
      }),
      infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutBottom)),
    });
  };

  private createTableBodyRow = (item: BoxParameter): void => {
    const {
      id,
      boxKind,
      lengths,
      contents,
      outerLineStyle,
      innerLineStyle,
      textStyle,
      rotate,
      move,
      options,
    } = item;
    const { tableBodyElement, appendTextareaTd, appendCheckboxTdWithoutText } = this;

    const tr = createElement('tr') as HTMLTableRowElement;
    tableBodyElement.appendChild(tr);

    this.appendOperationTd(tr, item);

    // this.appendBoxKindTd(tr, item);
    this.appendLengthsTd(tr, item);
    this.appendContentsTd(tr, item);
    appendCheckboxTdWithoutText(tr, rotate, item, 'rotate');
    appendCheckboxTdWithoutText(tr, move, item, 'move');
    // this.appendTextareaTd(tr, lengths, item, 'lengths', 'numberArray');

    appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
    appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
    appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
  };

  /** OK
   * 初始化表头
   */
  protected initTableHead = (): void => {
    // this.appendTableHeadCell({ en: 'Id', zh_cn: 'id', zh_tw: 'id' });
    // this.appendTableHeadCell({ en: 'Box Type', zh_cn: '盒子类型', zh_tw: '骰子類型' });
    this.appendTableHeadCell({
      en: 'Relevant length, such as length, width and height',
      zh_cn: '相关长度，如长宽高',
      zh_tw: '相關長度，如長寬高',
    });
    this.appendTableHeadCell({
      en: 'Contents of all sides',
      zh_cn: '各面内容',
      zh_tw: '各面內容',
    });
    this.appendTableHeadCell({ en: 'Rotate', zh_cn: '旋转', zh_tw: '旋轉' });
    this.appendTableHeadCell({ en: 'Move', zh_cn: '上移', zh_tw: '上移' });
    this.appendTableHeadCell({
      en: 'Outside Boundary Line Style',
      zh_cn: '外边界线样式',
      zh_tw: '外邊界線樣式',
    });
    this.appendTableHeadCell({
      en: 'Interior Line Style',
      zh_cn: '内部线样式',
      zh_tw: '內部線樣式',
    });
    this.appendTableHeadCell({
      en: 'Text Style',
      zh_cn: '文本样式',
      zh_tw: '文字樣式',
    });
    // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
  };

  // private appendBoxKindTd = (tr: HTMLTableRowElement, box: {boxKind: boxSpace.edu.sonya.cc.BoxKind }):void => {
  //   const BoxKind = boxSpace.edu.sonya.cc.BoxKind;

  //   const td = createElement('td') as HTMLTableCellElement;
  //   tr.appendChild(td);

  //   const span = createElement('span') as HTMLSpanElement;
  //   td.appendChild(span);

  //   let value = '';
  //   switch(box.boxKind) {
  //     case BoxKind.cuboid:
  //       value = getI18nInnerHTML({
  //         en: 'Cuboid',
  //         zh_cn: '长方体',
  //         zh_tw: '長方體',
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  //   span.innerHTML = value;
  // }
  private appendLengthsTd = (tr: HTMLTableRowElement, box: { lengths: number[] }): void => {
    const td = createElement('td') as HTMLTableCellElement;
    tr.appendChild(td);

    box.lengths.forEach((length, index) => {
      const input = createElement('input') as HTMLInputElement;
      td.appendChild(input);
      input.type = 'number';
      input.setAttribute('min', '0');
      input.setAttribute('max', '200');
      input.value = length.toString();

      input.onchange = input.focus = () => {
        box.lengths[index] = parseFloat(input.value);
        this.build();
      };
    });
  };
  private appendContentsTd = (
    tr: HTMLTableRowElement,
    box: {
      boxKind: boxSpace.edu.sonya.cc.BoxKind;
      contents: Array<I18nable | string>;
    },
  ): void => {
    const td = createElement('td') as HTMLTableCellElement;
    tr.appendChild(td);

    const BoxKind = boxSpace.edu.sonya.cc.BoxKind;
    const { boxKind, contents } = box;
    const { idOrClassPrefix } = this;
    let count = 0;
    switch (boxKind) {
      // case BoxKind.four:
      //   count = 4;
      //   break;
      case BoxKind.cuboid:
      case BoxKind.cuboidWithoutTop:
      case BoxKind.cuboidWithoutBottom:
      case BoxKind.cuboidCoverOnTheSameSide:
      case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
      case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
        count = 6;
        break;
      // case BoxKind.eight:
      //   count = 8;
      //   break;
      // case BoxKind.twelve:
      //   count = 12;
      //   break;
      // case BoxKind.twenty:
      //   count = 20;
      //   break;
      // case BoxKind.twentyFour:
      //   count = 24;
      //   break;
      default:
        break;
    }

    const div = createElement('div') as HTMLDivElement;
    td.appendChild(div);
    div.className = `${idOrClassPrefix}ContentValueWrap`;

    const i18nNameArray = ['en', 'zh_cn', 'zh_tw'];
    const emptyArray: Array<string> = [];
    pushSameValueTimes(emptyArray, '\n', count);
    const isText = typeof contents[0] === 'string';
    if (isText) {
      const textarea = createElement('textarea') as HTMLTextAreaElement;
      td.appendChild(textarea);

      textarea.value = box.contents.join('\n');
      textarea.rows = count;

      textarea.onchange = textarea.focus = () => {
        textarea.value
          .split('\n')
          .concat(emptyArray)
          .slice(0, count)
          .forEach((item: string, index: number) => {
            box.contents[index] = item;
          });
        this.build();
      };
    } else {
      // Language
      i18nNameArray.forEach((lang: string) => {
        const textarea = createElement('textarea') as HTMLTextAreaElement;
        td.appendChild(textarea);

        textarea.value = box.contents.map(content => content[lang]).join('\n');
        textarea.rows = 4;

        textarea.onchange = textarea.focus = () => {
          textarea.value
            .split('\n')
            .concat(emptyArray)
            .slice(0, count)
            .forEach((item: string, index: number) => {
              box.contents[index][lang] = item;
            });
          this.build();
        };
      });
    }
  };
}
