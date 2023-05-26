// import { FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML } from '../dom.ts';
// import { setCurrentLang, getCurrentLang, Language } from '../storage.ts';
// import { getI18nableWithSameContent } from '../utils.ts';
// // import { svgSpace } from '../svgHelper.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/utils.d.ts' />
/// <reference path='../../types/brickWithTableBase.d.ts' />

type QuestionAndAnswerType = {
  question: string;
  questionFull: string;
  answer: string;
  answerFull: string;
};
type RowsInfo = { rowsOccupied: number; rows: Array<HTMLDivElement> };
type ExhaustibleItemType = {
  kind: string;
  list: Array<QuestionAndAnswerType>;
  countPerSet: number;
  // rowsOccupied: number;
  // countPerRow: number;
  // rowCountPerPage: number;
};
type AMultiplyBType = { A: number; B: number; aMultiplyB: number }; // , aMultiplyBStr: string

/**
 * <en>Math Stage Information</en>
 * <zh_cn>数学闯关信息</zh_cn>
 * <zh_tw>數學闖關資訊</zh_tw>
 */
type MathStageInfo = {
  /**
   * <en>Kind</en>
   * <zh_cn>类型</zh_cn>
   * <zh_tw>類型</zh_tw>
   */
  kind: string;

  /**
   * <en>Catalog</en>
   * <zh_cn>大类</zh_cn>
   * <zh_tw>大類</zh_tw>
   */
  catalog: string;

  /**
   * <en>Scope</en>
   * <zh_cn>范围</zh_cn>
   * <zh_tw>範圍</zh_tw>
   */
  scope: string;

  /**
   * <en>Rows</en>
   * <zh_cn>行数</zh_cn>
   * <zh_tw>行數</zh_tw>
   */
  rows: number;

  /**
   * <en>Count Per Row</en>
   * <zh_cn>每行题目数</zh_cn>
   * <zh_tw>每行題目數</zh_tw>
   */
  countPerRow: number;

  /**
   * <en>Item Row Count</en>
   * <zh_cn>每題占用行数</zh_cn>
   * <zh_tw>每題佔用行數</zh_tw>
   */
  rowsOccupied: number;

  /**
   * <en>Item Count Per Page</en>
   * <zh_cn>每頁題目行數</zh_cn>
   * <zh_tw>每頁題目行數</zh_tw>
   */
  rowCountPerPage: number;

  /**
   * <en>Independent Pagination</en>
   * <zh_cn>独立分页</zh_cn>
   * <zh_tw>獨立分頁</zh_tw>
   */
  independentPagination: boolean;

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
 * 功能：生成数学阶段性闯关题目及配套答案
 * 初建：2022-11-27 安启
 * 历史：2022-09-30
 * 参考：P:/ecs_person/websites/sonya.cc/www/96_codes/00006_mathExercise/index.htm
 * 			P:\ecs_person\websites\sonya.cc\www\96_codes\00006_mathExercise
 * 说明：
 * 原页面参数：
 * 1. 边距：上、左
 * 2. 份数
 * 3. 字体
 * 4. 字号：页标题、页副标题、题目、页脚（隐藏）
 * 5. 题目类型
 *
 * 新设计：
 * 1. 锁定字体：'Times New Roman', 'KaiTi', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
 * 2. 锁定字号：根据报表页行高反算
 * 3. 锁定页标题与副标题行：暂定占用三实际行，页标题2行，副标题1行。左上角edu.sonya.cc及二维码，右上角页序及分类（题目页省略“题目”字样，答案页加“答案”）
 * 4. 每个类型隐藏以下信息：每行题目数、每行实际占用行数
 * 5. 列表与表格：类型（隐藏） 计算类型（只读） 范围（只读） 行数 独立分页 文本样式
 * 6. 隐藏页面方向，A3自动锁定横向，A4自动锁定纵向
 * 7. 页面级参数：
 * 		粗线样式（分隔题目）
 * 		细线样式（分隔题目与答案，或同一题目的不同答案）
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
  protected idOrClassPrefix = 'brickPageMathStage';

  /** OK
   * 构造方法
   */
  constructor() {
    const NOW = new Date();
    super(
      {
        onlyMentalArithmetic: false,
        pageSubjectFontSize: '22px',
        questionFontSize: '16px',
        // innerLineStyle: 'border:2px dotted #aaa;',
        // outerLineStyle: 'border:1px solid #aaa;',
        // 1px solid #555555;

        // 以下三项不放入本地缓存中
        year: NOW.getFullYear().toString(),
        month: (NOW.getMonth() + 1).toString(),
        day: NOW.getDate().toString(),
      },
      {},
    );

    this.initExhaustibleArray();

    this.initPlusOrSubtractDictionaryNotGreatThan100Array();

    this.initExhaustibleAMultiplyBInfo();
  }

  protected updateOtherDataLevel3 = (newData: any): void => {
    const {
      onlyMentalArithmetic,
      pageSubjectFontSize,
      questionFontSize,
      // innerLineStyle,
      // outerLineStyle,

      // year,
      // month,
      // day,
    } = newData;

    const {
      data,

      onlyMentalArithmeticRadioArray,

      pageSubjectFontSizeElement,
      questionFontSizeElement,
      // innerLineStyleElement,
      // outerLineStyleElement,

      // yearElement,
      // monthElement,
      // dayElement,
    } = this;

    data.onlyMentalArithmetic = onlyMentalArithmetic;
    data.pageSubjectFontSize = pageSubjectFontSize;
    data.questionFontSize = questionFontSize;
    // data.innerLineStyle = innerLineStyle;
    // data.outerLineStyle = outerLineStyle;

    onlyMentalArithmeticRadioArray[onlyMentalArithmetic ? 1 : 0].checked = true;

    pageSubjectFontSizeElement.value = pageSubjectFontSize;
    questionFontSizeElement.value = questionFontSize;
    // innerLineStyleElement.value = innerLineStyle;
    // outerLineStyleElement.value = outerLineStyle;

    // data.year = year;
    // data.month = month;
    // data.day = day;
  };

  private initExhaustibleAMultiplyBInfo = (): void => {
    const { exhaustibleAMultiplyBInfo } = this;
    const {
      aMultiplyBMaybeCarryArray,
      aMultiplyBMaybeNotCarryArray,
      aMultiplyBMaybeDebitMinusArray,
      aMultiplyBMaybeNotDebitMinusArray,
    } = exhaustibleAMultiplyBInfo;

    for (let a = 1; a < 10; ++a) {
      for (let b = 1; b < 10; ++b) {
        const aMultiplyB = a * b;
        const digits = aMultiplyB % 10;
        // const item = { A: a, B: b, aMultiplyB, aMultiplyBStr: `${a}×${b}` };
        const item = { A: a, B: b, aMultiplyB };
        if (digits > 0) {
          aMultiplyBMaybeCarryArray.push(item);

          // // 被减数个位为0时，不退位减时，减数必须个位也为0。这里特意避开这类情况
          // aMultiplyBMaybeNotDebitMinusArray.push(item);
        }
        if (digits < 9) {
          if (aMultiplyB > 9) aMultiplyBMaybeDebitMinusArray.push(item);

          // // 第一个加数个位为9时，如需不进位加，另一个加数个位必须为0。这里特意避开这类情况。
          // aMultiplyBMaybeNotCarryArray.push(item);
        }

        aMultiplyBMaybeNotDebitMinusArray.push(item);
        aMultiplyBMaybeNotCarryArray.push(item);
      }
    }

    exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryMaxIndex = aMultiplyBMaybeCarryArray.length - 1;
    exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryMaxIndex =
      aMultiplyBMaybeNotCarryArray.length - 1;
    exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusMaxIndex =
      aMultiplyBMaybeDebitMinusArray.length - 1;
    exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusMaxIndex =
      aMultiplyBMaybeNotDebitMinusArray.length - 1;
  };

  private initPlusOrSubtractDictionaryNotGreatThan100Array = (): void => {
    for (let a = 0; a <= 100; ++a) {
      const aDigits = a % 10;

      const addendWithCarryArray: Array<number> = [];
      const addendWithoutCarryArray: Array<number> = [];
      const subtractorWithDebitMinusArray: Array<number> = [];
      const subtractorWithoutDebitMinusArray: Array<number> = [];

      // const addendMax = 100 - a;
      // for(let addend = 0; addend <= addendMax; ++addend) {
      // 	if (addend % 10 + aDigits > 9) {
      // 		addendWithCarryArray.push(addend);
      // 	} else {
      // 		addendWithoutCarryArray.push(addend);
      // 	}
      // }

      // const subtractorMax = a;
      // for(let subtractor = 0; subtractor <= subtractorMax; ++subtractor) {
      // 	if (subtractor % 10 > aDigits) {
      // 		subtractorWithDebitMinusArray.push(subtractor);
      // 	} else {
      // 		subtractorWithoutDebitMinusArray.push(subtractor);
      // 	}
      // }

      const addendMax = 100 - a;
      const subtractorMax = a;
      const bMax = Math.max(addendMax, subtractorMax);
      const bDigitMinWhenCarry = Math.max(1, 10 - aDigits);
      for (let b = 0; b <= bMax; ++b) {
        const bDigits = b % 10;
        // console.log({ a, b, aDigits, bDigits });
        if (b <= addendMax) {
          if (bDigits >= bDigitMinWhenCarry) {
            addendWithCarryArray.push(b);
          } else {
            addendWithoutCarryArray.push(b);
          }
        }

        if (b <= subtractorMax) {
          if (bDigits > aDigits) {
            subtractorWithDebitMinusArray.push(b);
          } else {
            subtractorWithoutDebitMinusArray.push(b);
          }
        }
      }

      // console.log(a, { a, addendWithCarryArray, addendWithoutCarryArray, subtractorWithDebitMinusArray, subtractorWithoutDebitMinusArray });
      this.plusOrSubtractDictionaryNotGreatThan100Array.push({
        addendWithCarryArray,
        addendWithoutCarryArray,
        subtractorWithDebitMinusArray,
        subtractorWithoutDebitMinusArray,

        addendWithCarryMaxIndex: addendWithCarryArray.length - 1,
        addendWithoutCarryMaxIndex: addendWithoutCarryArray.length - 1,
        subtractorWithDebitMinusMaxIndex: subtractorWithDebitMinusArray.length - 1,
        subtractorWithoutDebitMinusMaxIndex: subtractorWithoutDebitMinusArray.length - 1,
        // addendWithCarryMaxIndex: Math.max(0, addendWithCarryArray.length - 1),
        // addendWithoutCarryMaxIndex: Math.max(0, addendWithoutCarryArray.length - 1),
        // subtractorWithDebitMinusMaxIndex: Math.max(0, subtractorWithDebitMinusArray.length - 1),
        // subtractorWithoutDebitMinusMaxIndex: Math.max(0, subtractorWithoutDebitMinusArray.length - 1),
      });
    }
  };

  private initExhaustibleArray = (): void => {
    this.fillExhaustibleArray1();
    this.fillExhaustibleArray2();
    this.fillExhaustibleArray3();
    this.fillExhaustibleArray4();
    this.fillExhaustibleArray5();
  };

  private exhaustibleAMultiplyBInfo: {
    aMultiplyBMaybeCarryArray: Array<AMultiplyBType>;
    aMultiplyBMaybeNotCarryArray: Array<AMultiplyBType>;
    aMultiplyBMaybeDebitMinusArray: Array<AMultiplyBType>;
    aMultiplyBMaybeNotDebitMinusArray: Array<AMultiplyBType>;

    aMultiplyBMaybeCarryMaxIndex: number;
    aMultiplyBMaybeNotCarryMaxIndex: number;
    aMultiplyBMaybeDebitMinusMaxIndex: number;
    aMultiplyBMaybeNotDebitMinusMaxIndex: number;
  } = {
    aMultiplyBMaybeCarryArray: [],
    aMultiplyBMaybeNotCarryArray: [],
    aMultiplyBMaybeDebitMinusArray: [],
    aMultiplyBMaybeNotDebitMinusArray: [],

    aMultiplyBMaybeCarryMaxIndex: -1,
    aMultiplyBMaybeNotCarryMaxIndex: -1,
    aMultiplyBMaybeDebitMinusMaxIndex: -1,
    aMultiplyBMaybeNotDebitMinusMaxIndex: -1,
  };

  /** OK
   * A+B=C
   */
  private fillExhaustibleArray1 = (): void => {
    const catalog = 'A+B=C';

    const { exhaustibleArray } = this;
    // const rowCountPerPage = 25;
    // const countPerRow = 5;
    // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
    ['1-5', '0-5', '0-10', '0-20'].forEach(scope => {
      const segArray = scope.split('-');
      const min = parseInt(segArray[0], 0);
      const max = parseInt(segArray[1], 0);
      // const lpad = max < 10;
      const list: Array<QuestionAndAnswerType> = [];
      // result也要满足min-max范围
      for (let a = min; a <= max; ++a) {
        const bMax = max - a;
        for (let b = min; b <= bMax; ++b) {
          const result = a + b;
          const commonHtml = `${a} + ${b} = `.replace(/ /g, '<i> </i>');
          const question = `<p>${commonHtml}</p>`;
          // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
          const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
          list.push({
            question,
            questionFull: question,
            answer,
            answerFull: answer,
          });
        }
      }
      exhaustibleArray.push({
        kind: `${catalog}_${scope}`,
        list,
        countPerSet: list.length,
        // countPerRow,
        // rowCountPerPage,
        // rowsOccupied,
      });
    });
  };

  /** OK
   * A-B=C
   */
  private fillExhaustibleArray2 = (): void => {
    const catalog = 'A-B=C';

    const { exhaustibleArray } = this;
    // const rowCountPerPage = 25;
    // const countPerRow = 5;
    // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
    ['1-5', '0-5', '0-10', '0-20'].forEach(scope => {
      const segArray = scope.split('-');
      const min = parseInt(segArray[0], 0);
      const max = parseInt(segArray[1], 0);
      // const lpad = max < 10;
      const list: Array<QuestionAndAnswerType> = [];
      // 因result也要满足min-max范围，所以a必须从min * 2开始
      for (let a = min * 2; a <= max; ++a) {
        const bMax = a - min;
        for (let b = min; b <= bMax; ++b) {
          const result = a - b;
          const commonHtml = `${a} - ${b} = `.replace(/ /g, '<i> </i>');
          const question = `<p>${commonHtml}</p>`;
          // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
          const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
          list.push({
            question,
            questionFull: question,
            answer,
            answerFull: answer,
          });
        }
      }
      exhaustibleArray.push({
        kind: `${catalog}_${scope}`,
        list,
        countPerSet: list.length,
        // countPerRow,
        // rowCountPerPage,
        // rowsOccupied,
      });
    });
  };

  /** OK
   * A+B=C D-E=F
   */
  private fillExhaustibleArray3 = (): void => {
    const catalog = 'A+B=C D-E=F';

    const { exhaustibleArray } = this;
    // const rowCountPerPage = 25;
    // const countPerRow = 5;
    // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
    ['1-5', '0-5', '0-10', '0-20'].forEach(scope => {
      const segArray = scope.split('-');
      const min = parseInt(segArray[0], 0);
      const max = parseInt(segArray[1], 0);
      // const lpad = max < 10;
      const list: Array<QuestionAndAnswerType> = [];

      // A+B=C段
      // result也要满足min-max范围
      for (let a = min; a <= max; ++a) {
        const bMax = max - a;
        for (let b = min; b <= bMax; ++b) {
          const result = a + b;
          const commonHtml = `${a} + ${b} = `.replace(/ /g, '<i> </i>');
          const question = `<p>${commonHtml}</p>`;
          // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
          const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
          list.push({
            question,
            questionFull: question,
            answer,
            answerFull: answer,
          });
        }
      }

      // D-E=F段
      // 因result也要满足min-max范围，所以a必须从min * 2开始
      for (let a = min * 2; a <= max; ++a) {
        const bMax = a - min;
        for (let b = min; b <= bMax; ++b) {
          const result = a - b;
          const commonHtml = `${a} - ${b} = `.replace(/ /g, '<i> </i>');
          const question = `<p>${commonHtml}</p>`;
          // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
          const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
          list.push({
            question,
            questionFull: question,
            answer,
            answerFull: answer,
          });
        }
      }

      exhaustibleArray.push({
        kind: `${catalog}_${scope}`,
        list,
        countPerSet: list.length,
        // countPerRow,
        // rowCountPerPage,
        // rowsOccupied,
      });
    });
  };

  /** OK
   * A×B=C
   */
  private fillExhaustibleArray4 = (): void => {
    const catalog = 'A×B=C';
    const { exhaustibleArray } = this;

    // 9×9A和9×9B分别表示小九九和大九九

    // const rowCountPerPage = 25;
    // const countPerRow = 4;
    // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
    ['9×9A', '9×9B'].forEach(scope => {
      const bStartFrom1 = scope === '9×9B';
      const list: Array<QuestionAndAnswerType> = [];
      for (let a = 1; a < 10; ++a) {
        for (let b = bStartFrom1 ? 1 : a; b < 10; ++b) {
          const result = a * b;
          const commonHtml = `${a} × ${b} = `.replace(/ /g, '<i> </i>');
          const question = `<p>${commonHtml}</p>`;
          const answer = `<p>${commonHtml}${result < 10 ? ' ' : ''}${result}</p>`;
          list.push({
            question,
            questionFull: question,
            answer,
            answerFull: answer,
          });
        }
      }
      exhaustibleArray.push({
        kind: `${catalog}_${scope}`,
        list,
        countPerSet: list.length,
        // countPerRow,
        // rowCountPerPage,
        // rowsOccupied,
      });
    });
  };

  /** OK
   * A+B+C=10/20/n
   */
  private fillExhaustibleArray5 = (): void => {
    const catalog = 'A+B+C=10/20/n';
    const { exhaustibleArray } = this;

    const scope = 'A';
    const list: Array<QuestionAndAnswerType> = [];
    // const rowCountPerPage = 25;
    // const countPerRow = 4;
    // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
    for (let a = 1; a < 10; ++a) {
      for (let b = 1; b < 10; ++b) {
        const c = (20 - a - b) % 10;
        const result = a + b + c;
        const commonHtml = `${a} + ${b} + ${c} = `.replace(/ /g, '<i> </i>');
        const question = `<p>${commonHtml}</p>`;
        const answer = `<p>${commonHtml}${result}</p>`;
        list.push({
          question,
          questionFull: question,
          answer,
          answerFull: answer,
        });
      }
    }
    exhaustibleArray.push({
      kind: `${catalog}_${scope}`,
      list,
      countPerSet: list.length,
      // countPerRow,
      // rowCountPerPage,
      // rowsOccupied,
    });
  };

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

      // onlyMentalArithmetic,
      pageSubjectFontSize,
      questionFontSize,
      // innerLineStyle,
      // outerLineStyle,

      // year,
      // month,
      // day,
    } = this.data;

    computedData.css = `/* common.css */
* { margin:0;border:0;padding:0; }
* { box-sizing:border-box; }

/* landscape 横向 portrait 纵向*/
@media print { @page { size: ${paperSize} ${
      isLandscape ? 'landscape' : 'portrait'
    }; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
page:not(page:last-child){page-break-after:always;}

html{font-size:${pageSubjectFontSize.length === 0 ? pageSubjectFontSize : 'inherit'};}
.questionPage row:not(row.subject), .answerPage row:not(row.subject)
{font-size:${questionFontSize.length === 0 ? questionFontSize : 'inherit'};}

body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}
page { display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start; }

/* page { width:${MAX_X}mm;height:${MAX_Y}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; } */
page { width:${
      MAX_X + pageMarginLeft
    }mm;padding-left:${pageMarginLeft}mm;padding-top:${pageMarginTop}mm; }
    page{height:${MAX_Y}mm;} /* 2023年5月25日重新加回 */

row{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;}
row.subject{justify-content:flex-start;align-items:flex-start;height:4%;}
row[row-count-per-page="6"]{height: 16%;}
row[row-count-per-page="8"]{height: 12%;}
row[row-count-per-page="10"]{height: 9.6%;}
row[row-count-per-page="25"]{height: 3.84%;}
row:not(row.subject) cell p{text-align:right;flex:1;}
row:not(row.subject) cell p i {font-size:0.8em;}

.questionPage row:not(row.subject) cell p{width:80%;}
.answerPage row:not(row.subject) cell p{width:96%;}
.questionPage row:not(row.subject) cell p,
.answerPage row:not(row.subject) cell p
{position:relative;}

.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}
.subjectCenter{flex:1;justify-content:center;align-items:flex-end;flex-direction:row;}
.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}

.subject{font-size:1em;}
.subtitle{font-size:0.6em;}

row.subject cell{display:inline-flex;}
row:not(row.subject) cell{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;height:100%;}
.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]){border-top:1px solid #aaaaaa;}
.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]):not(:last-child){border-right:1px solid #aaaaaa;}

row:not(row.subject) cell>div{display:flex;width:100%;align-items:flex-end;justify-content:space-evenly;letter-spacing:0.5em;}
/*
	div[edu-flex="3"]{flex:3;}
  div[edu-flex="4"]{flex:4;}
  div[edu-flex="6"]{flex:6;}
  div[edu-flex="8"]{flex:8;}
  div[edu-flex="9"]{flex:9;}
  div[edu-flex="10"]{flex:10;}
*/
row:not(row.subject) cell div[edu-flex] p {flex:unset;}
div[edu-flex="3"]{height:73%;} row:not(row.subject) cell div[edu-flex="3"] p {height:33%;}
div[edu-flex="4"]{height:78%;} row:not(row.subject) cell div[edu-flex="4"] p {height:25%;}
div[edu-flex="6"]{height:84%;} row:not(row.subject) cell div[edu-flex="6"] p {height:16.6%;}
div[edu-flex="8"]{height:86%;} row:not(row.subject) cell div[edu-flex="8"] p {height:12.5%;}
div[edu-flex="9"]{height:88%;} row:not(row.subject) cell div[edu-flex="9"] p {height:11.1%;}
div[edu-flex="10"]{height:88%;} row:not(row.subject) cell div[edu-flex="10"] p {height:10%;}
p.debit{top:-0.4em;}
div[edu-flex="4"] p.debit {top:0.1em;}

row:not(row.subject) cell div hr {margin-bottom:5%;}

cell answer-option{display:flex;height:100%;flex-direction:column;justify-content:flex-end;align-items:flex-end;}
answer-option:not(:last-child){border-right:1px solid #ff00ff;}
answer-option[edu-chars="2"]{width:2em;}
answer-option[edu-chars="3"]{width:3em;}
answer-option[edu-chars="4"]{width:4em;}
answer-option[edu-chars="5"]{width:5em;}
answer-option[edu-chars="6"]{width:6em;}
answer-option[edu-chars="7"]{width:7em;}
answer-option[edu-chars="8"]{width:8em;}
answer-option[edu-chars="9"]{width:9em;}

answer-option p{display:flex;width:100%;justify-content:flex-end;align-items:flex-end;}
operator{display:inline-block;width:1em;text-align:left;}
number{flex:1;}
carry{color:#ff0000;font-size:0.5em;position:absolute;bottom:0.15em;}

.questionPage row:not(row.subject) cell hr{width:80%;border:0;border-bottom:1px dashed #aaaaaa;}
.answerPage row:not(row.subject) cell hr{width:100%;border:0;border-bottom:1px solid #555555;}
.answerPage row:not(row.subject) cell hr.step{border-bottom:1px solid #ff00ff;}

carry[edu-digit="tens"]{right:1.3em;}
carry[edu-digit="hundreds"]{right:3.4em;}
carry[edu-digit="thousands"]{right:5.1em;}
carry[edu-digit="ten-thousands"]{right:7.9em;}
carry[edu-digit="hundred-thousands"]{right:10.1em;}
carry[edu-digit="millions"]{right:12.3em;}
carry[edu-digit="ten-millions"]{right:14.5em;}
carry[edu-digit="billions"]{right:16.7em;}
carry[edu-digit="ten-billions"]{right:18.9em;}
carry[edu-digit="hundrend-billions"]{right:21.1em;}
carry[edu-digit="thousands-billions"]{right:23.3em;}

answer{display:inline-block;}
answer[chars="1"]{width:0.5em;}
answer[chars="2"]{width:1.0em;}
answer[chars="3"]{width:1.5em;}
answer[chars="4"]{width:2.0em;}
answer[chars="5"]{width:2.5em;}
answer[chars="6"]{width:3.0em;}
answer[chars="7"]{width:3.5em;}
answer[chars="8"]{width:4.0em;}
answer[chars="9"]{width:4.5em;}
answer[chars="10"]{width:5.0em;}
answer[chars="11"]{width:5.5em;}
answer[chars="12"]{width:6.0em;}
answer[chars="13"]{width:6.5em;}
answer[chars="14"]{width:7.0em;}
answer[chars="15"]{width:7.5em;}

debit[edu-digit="digit"]{right:0.3em;}
debit[edu-digit="tens"]{right:1.2em;}
debit[edu-digit="hundreds"]{right:2.3em;}
debit{position:absolute;letter-spacing:0;width:1em;height:100%;display:inline-block;}

/*
debit{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;position:absolute;letter-spacing:0;}
debit-number, debit-circle{display:flex;align-items:flex-end;justify-content:center;flex-direction:row;}
debit-number{color:#aaa;font-size:0.8em;align-items:flex-end;flex:3;}
debit-circle{color:#ff0000;font-size:2em;align-items:center;flex:1;}
*/

debit-number, debit-circle{text-align:center;width:100%;height:100%;position:absolute;display:block;}
debit-number{color:#aaa;font-size:0.8em;top:10%;height:50%;z-index:1;}
debit-circle{color:#ff0000;font-size:2em;height:25%;top:-0.2em;}

p[edu-right-char="1"]{padding-right:1em;}
p[edu-right-char="2"]{padding-right:2em;}
p[edu-right-char="3"]{padding-right:3em;}
p[edu-right-char="4"]{padding-right:4em;}
p[edu-right-char="5"]{padding-right:5em;}
p[edu-right-char="6"]{padding-right:6em;}
p[edu-right-char="7"]{padding-right:7em;}
p[edu-right-char="8"]{padding-right:8em;}
p[edu-right-char="9"]{padding-right:9em;}
		`;

    const NOW = new Date();

    const LANG = getCurrentLang();
    const i18nSubject = {
      en: 'Five minute pass',
      zh_cn: '五分钟闯关',
      zh_tw: '五分鐘闖關',
    };
    const i18nSeparator = {
      en: '_',
      zh_cn: '：',
      zh_tw: '：',
    };
    const i18nSubtitlePrefix = {
      en: '____ ____, ',
      zh_cn: '',
      zh_tw: '',
    };
    const i18nSubtitlePostfix = {
      en: '',
      zh_cn: '年____月____日',
      zh_tw: '年____月____日',
    };
    const i18nAnswerFlag = {
      en: 'Answer',
      zh_cn: '答案',
      zh_tw: '答案',
    };
    const {
      data: { year, month, day },
    } = this;
    const i18nSubtitle = {
      en: `<span class="subtitleDay">${day}</span> <span class="subtitleMonth">${month}</span>, <span class="subtitleYear">${year}</span>`,
      zh_cn: `<span class="subtitleYear">${year}</span>年<span class="subtitleMonth">${month}</span>月<span class="subtitleDay">${day}</span>日`,
      zh_tw: `<span class="subtitleYear">${year}</span>年<span class="subtitleMonth">${month}</span>月<span class="subtitleDay">${day}</span>日`,
    };
    // const i18nCopies = {
    // 	en: ' copies',
    // 	zh_cn: '份',
    // 	zh_tw: '份',
    // };
    const HTML_SUBJECT = `<span class="subject">${i18nSubject[LANG]}&nbsp;</span>&nbsp;`;
    // const HTML_SUBTITLE = `<span class="subtitle">${i18nSubtitlePrefix[LANG]}${NOW.getFullYear()}${i18nSubtitlePostfix[LANG]}</span>`;
    const HTML_SUBTITLE = `<div class="subtitle">${i18nSubtitle[LANG]}</div>`;

    const titlePostfix = `_${NOW.getFullYear()}${'0'
      .concat((NOW.getMonth() + 1).toString())
      .substr(-2)}${'0'.concat(NOW.getDate().toString()).substr(-2)}`.concat(
      `_${'0'.concat(NOW.getHours().toString()).substr(-2)}${'0'
        .concat(NOW.getMinutes().toString())
        .substr(-2)}${'0'.concat(NOW.getSeconds().toString()).substr(-2)}`,
      list.length < 4
        ? '_'.concat((list as Array<{ kind: string }>).map(({ kind }) => kind).join('_and_'))
        : '',
    );
    // const title = ''.concat(
    // 	// PAGE_SIZE.substring(0, 2), PAGE_SIZE.split('_')[1] === 'LANDSCAPE' ? '横向' : '纵向',
    // 	'edu.sonya.cc_', i18nSubject[LANG], i18nSeparator[LANG], i18nSubjectPostfix[LANG],
    // 	COPIES_COUNT === 1 ? '' : ''.concat(COPIES_COUNT, i18nCopies[LANG]), titlePostfix,
    // );
    // const titleI18n = {
    // 	en: ''.concat('edu.sonya.cc_', i18nSubject.en, i18nSeparator.en, i18nSubjectPostfix.en,
    // 		COPIES_COUNT === 1 ? '' : ''.concat(COPIES_COUNT, i18nCopies.en), titlePostfix,
    // 	),
    // 	zh_cn: ''.concat('edu.sonya.cc_', i18nSubject.zh_cn, i18nSeparator.zh_cn, i18nSubjectPostfix.zh_cn,
    // 		COPIES_COUNT === 1 ? '' : ''.concat(COPIES_COUNT, i18nCopies.zh_cn), titlePostfix,
    // 	),
    // 	zh_tw: ''.concat('edu.sonya.cc_', i18nSubject.zh_tw, i18nSeparator.zh_tw, i18nSubjectPostfix.zh_tw,
    // 		COPIES_COUNT === 1 ? '' : ''.concat(COPIES_COUNT, i18nCopies.zh_tw), titlePostfix,
    // 	),
    // };
    const en = `${FILENAME_POSTFIX}mathStage_${titlePostfix}`;
    const zh_cn = `${FILENAME_POSTFIX}数学五分钟闯关_${titlePostfix}`;
    const zh_tw = `${FILENAME_POSTFIX}數學五分鐘闖關_${titlePostfix}`;
    computedData.title = { en, zh_cn, zh_tw };

    const pageSubjectRowLeftHtml = '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
    const pageSubjectRowCenterHtml = `<cell class="subjectCenter">${HTML_SUBJECT}${HTML_SUBTITLE}</cell>`;
    const questionPageSubjectRowRightHtml = `<cell class="subjectRight">~reporterPageIndex~/~reporterPageCount~</cell>`;
    const answerPageSubjectRowRightHtml = `<cell class="subjectRight">${i18nAnswerFlag[LANG]}~reporterPageIndex~/~reporterPageCount~</cell>`;

    const pageSubjectRowHtmlStart = `<row class="subject">${pageSubjectRowLeftHtml}${pageSubjectRowCenterHtml}`;
    const questionPageSubjectRowHtml = `${pageSubjectRowHtmlStart}${questionPageSubjectRowRightHtml}</row>`;
    const answerPageSubjectRowHtml = `${pageSubjectRowHtmlStart}${answerPageSubjectRowRightHtml}</row>`;

    const questionPageStartHtml = `<page class="questionPage">${questionPageSubjectRowHtml}`;
    const answerPageStartHtml = `<page class="answerPage">${answerPageSubjectRowHtml}`;

    computedData.html = this.getReportHtml(questionPageStartHtml, answerPageStartHtml);
  };

  /** OK
   *
   * @param questionPageStartHtml
   * @param answerPageStartHtml
   * @returns
   */
  private getReportHtml = (questionPageStartHtml: string, answerPageStartHtml: string): string => {
    const {
      data: { list },
    } = this;

    // TODO(@anqi) 增加页面级参数：预设年月日（各一个文本框，默认空，填写后写入报表中）
    // 副标题与主标题合并到同一行中，占页面2行

    // 当全部口算时，无论是问题行，还是答案行，都只占2行。
    // 每页行数（从排版角度）：9行/问 * 6问 + 3行 = 57行 => 8行/问 * 6问 + 2行 = 50行
    // 每问根据kind，可决定其占用行数。每种类型的题目，根据countPerRow，将题目组合成row，再加入page中
    // const questionElementArray: Array<HTMLDivElement | SVGElement> = [];
    // const answerElementArray: Array<HTMLDivElement | SVGElement> = [];
    const questionRowsArray: Array<RowsInfo> = [];
    const answerRowsArray: Array<RowsInfo> = [];

    let questionHtml = '';
    let answerHtml = '';
    let questionPageIndex = 0;
    let answerPageIndex = 0;

    // 先计算独立分页项
    list
      .filter(({ independentPagination }) => independentPagination)
      .forEach(info => {
        this.appendReportElements(info, questionRowsArray, answerRowsArray);
      });
    questionRowsArray.forEach(({ rowsOccupied, rows }) => {
      questionHtml += this.getIndependentPaginationHtml(
        rowsOccupied,
        rows,
        questionPageStartHtml,
        questionPageIndex,
      );
    });
    answerRowsArray.forEach(({ rowsOccupied, rows }) => {
      answerHtml += this.getIndependentPaginationHtml(
        rowsOccupied,
        rows,
        answerPageStartHtml,
        answerPageIndex,
      );
    });
    questionPageIndex = questionHtml.split('</page>').length - 1;
    answerPageIndex = answerHtml.split('</page>').length - 1;

    // 再计算非独立分页项
    questionRowsArray.length = 0;
    answerRowsArray.length = 0;
    list
      .filter(({ independentPagination }) => !independentPagination)
      .forEach(info => {
        this.appendReportElements(info, questionRowsArray, answerRowsArray);
      });
    questionHtml += this.getDependentPagingHtml(
      questionRowsArray,
      questionPageStartHtml,
      questionPageIndex,
    );
    answerHtml += this.getDependentPagingHtml(
      answerRowsArray,
      answerPageStartHtml,
      answerPageIndex,
    );

    const questionPageCount = (questionHtml.split('</page>').length - 1).toString();
    const answerPageCount = (answerHtml.split('</page>').length - 1).toString();
    return questionHtml
      .replace(/~reporterPageCount~/g, questionPageCount)
      .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
  };

  /** OK
   *
   * @param rowsOccupied
   * @param rows
   * @param pageStartHtml
   * @returns
   */
  private getIndependentPaginationHtml = (
    rowsOccupied: number,
    rows: HTMLDivElement[],
    pageStartHtml: string,
    pageIndex: number,
  ): string => {
    if (!rows.length) return '';
    if (this.data.onlyMentalArithmetic) rowsOccupied = this.defaultRowsOccupied;

    const { smallRowCountPerPage } = this;

    let html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
    let remainingRowCount = smallRowCountPerPage;

    rows.forEach(row => {
      if (rowsOccupied > remainingRowCount) {
        html += `</page>${pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString())}`;

        remainingRowCount = smallRowCountPerPage;
      }

      html += row.outerHTML;
      // remainingRowCount -= rowsOccupied;
      remainingRowCount = this.formatCentile(remainingRowCount - rowsOccupied);
    });
    html += '</page>';

    return html;
  };

  /** */
  private smallRowCountPerPage = 48;

  private defaultRowCountPerPage = 25;
  private defaultRowsOccupied = this.smallRowCountPerPage / this.defaultRowCountPerPage;
  /** OK
   *
   * @param rowArray
   * @param pageStartHtml
   * @returns
   */
  private getDependentPagingHtml = (
    rowArray: Array<RowsInfo>,
    pageStartHtml: string,
    pageIndex: number,
  ): string => {
    if (!rowArray.length) return '';

    const forceSetRowsOccupiedToDefault = this.data.onlyMentalArithmetic;
    const { smallRowCountPerPage, defaultRowsOccupied } = this;
    // console.log('getDependentPagingHtml()', JSON.stringify(rowArray), pageStartHtml, pageIndex, smallRowCountPerPage);

    let html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
    let remainingRowCount = smallRowCountPerPage;

    rowArray.forEach(({ rowsOccupied, rows }) => {
      // console.log('rowsOccupied:', rowsOccupied);
      if (forceSetRowsOccupiedToDefault) rowsOccupied = defaultRowsOccupied;
      rows.forEach(row => {
        // console.log(rowsOccupied, remainingRowCount, rowsOccupied > remainingRowCount);
        if (rowsOccupied > remainingRowCount) {
          html += `</page>${pageStartHtml.replace(
            '~reporterPageIndex~',
            (++pageIndex).toString(),
          )}`;

          remainingRowCount = smallRowCountPerPage;
        }

        html += row.outerHTML;
        // remainingRowCount -= rowsOccupied;
        remainingRowCount = this.formatCentile(remainingRowCount - rowsOccupied);
      });
    });
    html += '</page>';
    // console.log(html);

    return html;
  };

  // /**
  //  * 获取退位减的减数（不可为负数）
  //  * @params min 最小值
  //  * @params max 最大值
  //  * @params minuend 被减数
  //  * @return 减数（不可为负数），尽可能生成退位减相应减数
  // */
  // private getSubtractorOfDebitMinus = (min: number, max: number, minuend: number): number => {
  // 	const { getIntegerRandom } = this;
  // 	// minuend - subtractor = difference

  // 	// minuend => [0, 100]
  // 	minuend = Math.min(100, Math.max(0, minuend));

  // 	// min, max => [0, minuend]
  // 	min = Math.min(Math.max(0, min), minuend);
  // 	max = Math.min(Math.max(0, max), minuend);

  // 	// 如果只有一个可选数，直接返回
  // 	if (min === max) { return min; }

  // 	// 10以下（不含）的数，无法退位减，否则将得到负数
  // 	if (minuend < 10) { return getIntegerRandom(min, max); }

  // 	// 获取被减数的个位
  // 	const singleDigitOfMinuend = minuend % 10;

  // 	// 尾数是9的数，也无法退位减
  // 	if (singleDigitOfMinuend === 9) { return getIntegerRandom(min, max); }

  // 	const minuendTenDigit = Math.floor(minuend / 10);
  // 	const minTenDigit = Math.floor(min / 10);
  // 	const maxTenDigit = Math.floor(max / 10);
  // 	const resultMaxTenDigit = Math.min(minuendTenDigit, maxTenDigit);
  // 	const resultMinTenDigit = Math.min(resultMaxTenDigit, minTenDigit);

  // 	const resultArray: Array<number> = [];
  // 	for (let tensDigitIndex = resultMinTenDigit; tensDigitIndex <= resultMaxTenDigit; ++tensDigitIndex) {
  // 		const tensValue = 10 * tensDigitIndex;
  // 		for (let digitIndex = singleDigitOfMinuend + 1; digitIndex < 10; ++digitIndex) {
  // 			const numeral = tensValue + digitIndex;
  // 			if (numeral >= min && numeral <= max) {
  // 				resultArray.push(numeral);
  // 			}
  // 		}
  // 	}

  // 	return resultArray[getIntegerRandom(0, resultArray.length - 1)];
  // };

  // /**
  //  * 获取进位加的加数（不可为负数，结果不大于100）
  //  * @params min 最小值
  //  * @params max 最大值
  //  * @params other 另一加数
  //  * @return 加数（不可为负数，结果不可大于100），尽可能进位加
  // */
  // private getNumberOfAddWithCarry = (min: number, max: number, other: number): number => {
  // 	const { getIntegerRandom } = this;

  // 	// other => [0, 100]
  // 	other = Math.min(100, Math.max(0, other));

  // 	const difference = 100 - other;

  // 	// min, max => [0, difference]
  // 	min = Math.min(Math.max(0, min), difference);
  // 	max = Math.min(Math.max(0, max), difference);

  // 	// 如果只有一个可选数，直接返回
  // 	if (min === max) { return min; }

  // 	// 另一加数的个位
  // 	const singleDigitOfOther = other % 10;

  // 	// 如果另一加数是整十数，不可能产生进位加
  // 	if (singleDigitOfOther === 0) { return getIntegerRandom(min, max); }

  // 	// 如果另一加数大于等于90，直接返回个位
  // 	if (difference < 10) { return getIntegerRandom(10 - singleDigitOfOther, difference); }

  // 	const differenceTenDigit = Math.floor(difference / 10);
  // 	const minTenDigit = Math.floor(min / 10);
  // 	const maxTenDigit = Math.floor(max / 10);
  // 	const resultMaxTenDigit = Math.min(differenceTenDigit, maxTenDigit);
  // 	const resultMinTenDigit = Math.min(resultMaxTenDigit, minTenDigit);

  // 	const resultArray: Array<number> = [];
  // 	for (let tensDigitIndex = resultMinTenDigit; tensDigitIndex <= resultMaxTenDigit; ++tensDigitIndex) {
  // 		const tensValue = 10 * tensDigitIndex;
  // 		for (let digitIndex = 10 - singleDigitOfOther; digitIndex < 10; ++digitIndex) {
  // 			const numeral = tensValue + digitIndex;
  // 			if (numeral >= min && numeral <= max) {
  // 				resultArray.push(numeral);
  // 			}
  // 		}
  // 	}

  // 	return resultArray[getIntegerRandom(0, resultArray.length - 1)];
  // }

  private plusOrSubtractDictionaryNotGreatThan100Array: Array<{
    addendWithCarryArray: Array<number>;
    addendWithoutCarryArray: Array<number>;
    subtractorWithDebitMinusArray: Array<number>;
    subtractorWithoutDebitMinusArray: Array<number>;

    addendWithCarryMaxIndex: number;
    addendWithoutCarryMaxIndex: number;
    subtractorWithDebitMinusMaxIndex: number;
    subtractorWithoutDebitMinusMaxIndex: number;
  }> = [];

  private getAddendWithCarry = (other: number): number => {
    const plusOrSubtractDictionaryNotGreatThan100 =
      this.plusOrSubtractDictionaryNotGreatThan100Array[other];
    // console.log({ feature: 'getAddendWithCarry', plusOrSubtractDictionaryNotGreatThan100 });
    if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
      return 0;
    }

    return plusOrSubtractDictionaryNotGreatThan100.addendWithCarryArray[
      this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.addendWithCarryMaxIndex)
    ];
  };

  private getAddendWithoutCarry = (other: number): number => {
    const plusOrSubtractDictionaryNotGreatThan100 =
      this.plusOrSubtractDictionaryNotGreatThan100Array[other];
    if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
      return 0;
    }

    const array = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryArray;
    const maxIndex = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryMaxIndex;
    if (maxIndex === 0) return array[0];

    const { getIntegerRandom } = this;
    return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
  };

  private getSubtractorWithDebitMinus = (minuend: number): number => {
    const plusOrSubtractDictionaryNotGreatThan100 =
      this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
    if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
      return 0;
    }

    return plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusArray[
      this.getIntegerRandom(
        0,
        plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusMaxIndex,
      )
    ];
  };

  private getSubtractorWithoutDebitMinus = (minuend: number): number => {
    const plusOrSubtractDictionaryNotGreatThan100 =
      this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
    if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
      return 0;
    }

    // return plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusArray[this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusMaxIndex)];

    const array = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusArray;
    const maxIndex = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusMaxIndex;
    if (maxIndex === 0) return array[0];

    const { getIntegerRandom } = this;
    return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
  };

  /** OK
   * 获得三数相加（0-2次进位加）相关加数与和
   * @param has 有进位加
   * @returns 进位加的三个加数与和
   */
  private getMaybeCarryTwiceNumbers(has: boolean) {
    const { getIntegerRandom } = this;
    let a: number, b: number, c: number, d: number;
    if (has) {
      // 20%概率只进位加一次
      if (getIntegerRandom(1, 10) < 3) {
        const digitsOfC = getIntegerRandom(1, 9);
        const tensOfC = getIntegerRandom(0, 7);
        c = 10 * tensOfC + digitsOfC;

        let A_B = 0;
        if (getIntegerRandom(0, 2)) {
          A_B = 10 * getIntegerRandom(1, 10 - tensOfC) + getIntegerRandom(11 - digitsOfC, 9);
          if (A_B > 100) A_B -= 10;
          // if (A_B + C > 100) { A_B -= Math.floor((A_B + C - 100) / 10); }
          // if (A_B + C > 100) { A_B = 100 - C; }
          if (A_B + c > 100) A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
        } else {
          A_B = 100 - c;
        }

        const aMaxDigit = Math.floor(A_B % 10);
        a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) + getIntegerRandom(0, aMaxDigit);

        b = A_B - a;
        // 一半概率交换A和C
        if (getIntegerRandom(0, 1)) {
          a += c;
          c = a - c;
          a = a - c;
        }

        if (c === 0) c = 100 - a - b;
      } else {
        // C在2-79内，2到9结尾，才可能确保进位加两次
        const digitsOfC = getIntegerRandom(2, 9);
        const tensOfC = getIntegerRandom(0, 7);
        c = 10 * tensOfC + digitsOfC;

        // const A_B = getAddendWithCarry(C);
        let A_B = 0;
        if (getIntegerRandom(0, 2)) {
          A_B = 10 * getIntegerRandom(1, 10 - tensOfC) + getIntegerRandom(11 - digitsOfC, 9);
          if (A_B > 100) A_B -= 10;
          // if (A_B + C > 100) { A_B -= Math.floor((A_B + C - 100) / 10); }
          // if (A_B + C > 100) { A_B = 100 - C; }
          if (A_B + c > 100) A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
        } else {
          A_B = 100 - c;
        }

        const aMinDigit = (A_B % 10) + 1;
        if (A_B < 10) {
          a = getIntegerRandom(aMinDigit, 9);
        } else {
          a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) + getIntegerRandom(aMinDigit, 9);
          if (a > A_B) a -= 10;
        }
        // times = 100;
        // while(true) {
        // 	A = getIntegerRandom(0, A_B);
        // 	if (A % 10 >= aMinDigit) { break; }
        // 	if (--times === 10) { console.log('too times 3.'); break;}
        // }
        b = A_B - a;
      }
    } else {
      // A为20-88范围内的数（超过80时，可能随机减少0-40内整十数，以避免结果集中到90-99间），具有1%概率为整十数，4%概率以8结尾
      a = 10 * getIntegerRandom(2, 8);
      const randomA = getIntegerRandom(1, 100);
      if (randomA > 1) {
        if (randomA < 6) {
          a += 8;
        } else {
          a += getIntegerRandom(1, 7);
        }
      }
      if (a > 60) {
        a -= 10 * getIntegerRandom(0, 4);
      }
      const aDigits = a % 10;

      // B+C具有1%概率为整十数
      let B_C = 10 * getIntegerRandom(1, 10 - Math.floor(a / 10));
      const randomBC = getIntegerRandom(1, 100);
      if (randomBC > 1) {
        const maxDigitOfBPlusC = 9 - aDigits;
        if (maxDigitOfBPlusC <= 3) {
          B_C += maxDigitOfBPlusC;
        } else if (maxDigitOfBPlusC >= 6) {
          B_C += getIntegerRandom(6, maxDigitOfBPlusC);
        } else {
          B_C += getIntegerRandom(4, maxDigitOfBPlusC);
        }
      }

      if (a + B_C > 100) B_C -= 10;
      let tensOfBPlusC = Math.floor(B_C / 10);
      // if (A + B_C > 90 && B_C > 20) {
      //     B_C -= 10 * getIntegerRandom(0, tensOfBPlusC - 2);
      //     tensOfBPlusC = Math.floor(B_C / 10);
      // }
      b = 10 * getIntegerRandom(Math.floor(tensOfBPlusC / 2), tensOfBPlusC);

      const digitOfBPlusC = B_C % 10;
      if (B_C % 10) {
        b += getIntegerRandom(1, Math.min(digitOfBPlusC, Math.floor(digitOfBPlusC / 2) * 1.5));
      }

      c = B_C - b;
    }
    d = a + b + c;
    return { a, b, c, d };
  }

  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3 = '<div edu-flex="3"></div>';
  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4 = '<div edu-flex="4"></div>';
  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6 = '<div edu-flex="6"></div>';
  private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8 =
    '<div edu-flex="8"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
  // private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic6 =
  // '<div edu-flex="6"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
  private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4 =
    '<div edu-flex="4"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p></answer-option></div>';
  private questionElementHtmlAppendStart8 = '<div edu-flex="8">';
  private questionElementHtmlAppendStart6 = '<div edu-flex="6">';
  private questionElementHtmlAppendStart4 = '<div edu-flex="4">';
  private questionElementHtmlAppendStart3 = '<div edu-flex="3">';

  private fillElementArrayOfAPlusB(
    has: boolean,
    min: number,
    max: number,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
      getAddendWithCarry,
      getAddendWithoutCarry,
      getHtmlOfAPlusB,
    } = this;
    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3;

    let A: number;
    let B: number;
    if (has) {
      while (true) {
        A = getIntegerRandom(min, max);
        if (A % 10) break;
      }

      B = getAddendWithCarry(A);
    } else {
      A = getIntegerRandom(min, max);
      B = getAddendWithoutCarry(A);
    }

    const result = A + B;
    const commonHtml = `${A}<i> </i>+<i> </i>${B}<i> </i>=<i> </i>`;
    const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`; // .replace(/~charCount~/g, charsStr)
    let answerElementHtml = `<p>${commonHtml}${result}</p>`;

    if (!onlyMentalArithmetic) {
      const charsStr = (result.toString().length + 1).toString();
      answerElementHtml += `${
        this.questionElementHtmlAppendStart4
      }<answer-option edu-chars="${charsStr}"><p></p>${getHtmlOfAPlusB(
        A,
        B,
        result,
      )}</answer-option></div>`;
      // answerElementHtml += `${this.questionElementHtmlAppendStart3}<answer-option edu-chars="${charsStr}">${getHtmlOfAPlusB(A, B, result)}</answer-option></div>`;
    }

    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  }

  private getHtmlOfAPlusB(A: number, B: number, result: number): string {
    const tensCarryHtml = (A % 10) + (B % 10) > 9 ? '<carry edu-digit="tens">1</carry>' : '';
    const hundredsCarryHtml =
      (A % 100) + (B % 100) > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
    return `<p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
  }

  private getSimleHtmlOfAMultiplyB = (A: number, B: number, result: number): string => {
    return `<p><number>${A}</number></p><p><operator>×</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
  };

  private isOnlyFirstIsNotZero = (numberal: number): boolean => {
    let str = numberal.toString();
    let length = str.length;
    while (length) {
      const lastChar = str.substring(length - 1, length);
      if (lastChar === '0') {
        str = str.substring(0, length - 1);
        --length;
      } else {
        break;
      }
    }

    return length <= 1;
  };

  private getHtmlOfAMultiplyB(A: number, B: number, result: number): string {
    const { getSimleHtmlOfAMultiplyB } = this;
    if (B < 10) {
      return getSimleHtmlOfAMultiplyB(A, B, result);
    }
    if (A < 10) {
      return getSimleHtmlOfAMultiplyB(B, A, result);
    }

    const { isOnlyFirstIsNotZero } = this;
    if (isOnlyFirstIsNotZero(B)) {
      return getSimleHtmlOfAMultiplyB(A, B, result);
    }
    if (isOnlyFirstIsNotZero(A)) {
      return getSimleHtmlOfAMultiplyB(B, A, result);
    }

    // if (A < B) {
    // 	A += B;
    // 	B = A - B;
    // 	A = A - B;
    // }
    const aLength = A.toString().length;
    let bStr = B.toString();
    let bLength = bStr.length;
    if (aLength < bLength) {
      A += B;
      B = A - B;
      A = A - B;

      bStr = B.toString();
      bLength = bStr.length;
    }

    let html = `<p><number>${A}</number></p><p><operator>×</operator><number>${B}</number></p><hr>`;
    const numberArray: Array<number> = [];
    const carryArray: Array<number> = [];
    const resultLength = result.toString().length;
    for (let i = 0; i < resultLength; ++i) {
      carryArray.push(0);
      numberArray.push(0);
    }
    // carryArray.push(0);

    // console.log({ A, B, bStr, bLength });
    for (let i = bLength; i > 0; --i) {
      html += `<p edu-right-char="${bLength - i}">`;

      // if (i === 1) { html += '<operator>+</operator>' };
      const product = A * parseInt(bStr.substring(i - 1, i), 0);
      html += `<number>${product}</number>`;

      // product.toString().split('').forEach((char, index) => {
      // 	if (char !== '0') {
      // 		const arrayIndex = i - index;
      // 		numberArray.splice(arrayIndex, 1, numberArray[arrayIndex] + parseInt(char, 0));
      // 	}
      // });

      const productChars = product.toString().split('');
      const productCharCount = productChars.length;
      for (let charLoop = productCharCount; charLoop > 0; --charLoop) {
        const char = productChars[charLoop - 1];
        // 3-1-2+2=2
        const arrayIndex = resultLength - 1 - (bLength - i) - (productCharCount - charLoop);
        console.log(
          JSON.stringify({
            product,
            charLoop,
            char,
            resultLength,
            i,
            arrayIndex,
          }),
        );
        numberArray.splice(arrayIndex, 1, numberArray[arrayIndex] + parseInt(char, 0));
      }

      if (i !== 1) html += `</p>`;
    }
    console.log(A, B, result, JSON.stringify(numberArray));

    // let lastCarry = 0;
    // 最前面一个不处理
    for (let i = resultLength - 1; i > 0; --i) {
      const arrayIndex = i;
      const numeral = numberArray[arrayIndex];

      if (numeral > 9) {
        const carry = Math.floor(numeral / 10);

        const previousIndex = arrayIndex - 1;

        carryArray.splice(previousIndex, 1, carry);
        numberArray.splice(previousIndex, 1, numberArray[previousIndex] + carry);
      }
    }
    // carryArray.splice(0, 1, numberArray[0]);

    console.log(JSON.stringify(numberArray), JSON.stringify(carryArray));

    const { eduDigitArray } = this;
    for (let i = 0; i < resultLength; ++i) {
      const carryNumber = carryArray[i];
      if (carryNumber > 0) {
        // <carry edu-digit="tens">1</carry>
        html += `<carry edu-digit="${eduDigitArray[resultLength - 2 - i]}">${carryNumber}</carry>`;
      }
    }
    html += `</p>`;
    html += `<hr><p><number>${result}</number></p>`;
    return html;
  }
  private readonly eduDigitArray = [
    'tens',
    'hundreds',
    'thousands',
    'ten-thousands',
    'hundred-thousands',
    'millions',
    `ten-millions`,
    `billions`,
    `ten-billions`,
    `hundrend-billions`,
    `thousands-billions`,
  ];

  private fillElementArrayOfASubtractB(
    has: boolean,
    min: number,
    max: number,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
  ) {
    const {
      data: { onlyMentalArithmetic },
      getDebitHtml,
      getIntegerRandom,
      getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus,
    } = this;
    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;

    let A: number;
    let B: number;
    if (has) {
      while (true) {
        A = getIntegerRandom(min, max);
        if (A % 10 < 9) break;
      }

      B = getSubtractorWithDebitMinus(A);
    } else {
      A = getIntegerRandom(min, max);
      B = getSubtractorWithoutDebitMinus(A);
    }

    const charsStr = (A.toString().length + 1).toString();
    const result = A - B;
    const commonHtml = `${A} - ${B} = `;
    let questionElementHtml = `<p>${commonHtml.replace(
      / /g,
      '<i> </i>',
    )}</p>${questionElementHtmlAppend}`; // .replace(/4/g, charsStr)
    let answerElementHtml = `<p>${commonHtml.replace(/ /g, '<i> </i>')}${result}</p>`;

    if (!onlyMentalArithmetic) {
      const debitHtml = getDebitHtml(A, B);
      answerElementHtml += `${this.questionElementHtmlAppendStart4}<answer-option edu-chars="${charsStr}">${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p></answer-option></div>`;
    }

    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  }

  private getDebitHtml(A: number, B: number) {
    const aDigits = A % 10;
    const bDigits = B % 10;
    const tensNeedDebit = aDigits < bDigits;
    const aHundreds = A % 100;
    const hundredsNeedDebit = aHundreds < B % 100;
    const aThousands = A % 1000;
    const thousandsNeedDebit = aThousands < B % 1000;

    if (!tensNeedDebit && !hundredsNeedDebit) return '';

    const digitDebitHtml = tensNeedDebit
      ? `<debit edu-digit="digit"><debit-number>${10 + aDigits}</debit-number></debit>`
      : '';
    const tensDebitHtml =
      tensNeedDebit || hundredsNeedDebit
        ? `<debit edu-digit="tens"><debit-number>${
            (hundredsNeedDebit ? 10 : 0) + Math.floor(aHundreds / 10) - (tensNeedDebit ? 1 : 0)
          }</debit-number>${tensNeedDebit ? '<debit-circle>·</debit-circle>' : ''}</debit>`
        : '';
    const hundredsDebitHtml = hundredsNeedDebit
      ? `<debit edu-digit="hundreds"><debit-number>${
          (thousandsNeedDebit ? 10 : 0) + Math.floor((A % 1000) / 100) - (hundredsNeedDebit ? 1 : 0)
        }</debit-number><debit-circle>·</debit-circle></debit>`
      : '';

    // return debitHtml;

    return `<p class="debit">&nbsp;${hundredsDebitHtml}${tensDebitHtml}${digitDebitHtml}</p>`;
  }

  private getDebitHtmlOfASubstractB(A: number, B: number, aSubstractB: number) {
    return `${this.getDebitHtml(
      A,
      B,
    )}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${aSubstractB}</number></p>`;
  }

  private fillElementArrayOfAPlusBThenC = (
    has: boolean,
    questionElementHtmlAppend: string,
    onlyMentalArithmetic: any,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
    withBrackets: boolean = false,
  ): void => {
    let a: number, b: number, c: number, d: number;
    ({ a, b, c, d } = this.getMaybeCarryTwiceNumbers(has));

    const A: number = a;
    const B: number = b;
    const C: number = c;
    const result = d; // A + B + C;
    const charsStr = (result.toString().length + 1).toString();
    const commonHtml = withBrackets
      ? `${C}<i> </i>+<i> </i>(${A}<i> </i>+<i> </i>${B})<i> </i>=<i> </i>`
      : `${A}<i> </i>+<i> </i>${B}<i> </i>+<i> </i>${C}<i> </i>=<i> </i>`;
    const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`; // .replace(/~charCount~/g, charsStr)
    let answerElementHtml = `<p>${commonHtml}${result}</p>`;

    if (!onlyMentalArithmetic) {
      const A_B = A + B;

      const aDidits = A % 10;
      const bDidits = B % 10;
      const cDidits = C % 10;
      const abDidits = A_B % 10;

      const tensCarry1 = aDidits + bDidits > 9;
      const tensCarry2 = abDidits + cDidits > 9;
      const tensCarry = aDidits + bDidits + cDidits > 9;

      const aLastTowDigits = A % 100;
      const bLastTowDigits = B % 100;
      const cLastTowDigits = C % 100;
      const abLastTowDigits = A_B % 100;

      const hundredsCarry1 = aLastTowDigits + bLastTowDigits > 99;
      const hundredsCarry2 = abLastTowDigits + cLastTowDigits > 99;
      const hundredsCarry = aLastTowDigits + bLastTowDigits + cLastTowDigits > 99;

      const tensCarryHtml1 = tensCarry1 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml1 = hundredsCarry1 ? '<carry edu-digit="hundreds">1</carry>' : '';

      const tensCarryHtml2 = tensCarry2 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml2 = hundredsCarry2 ? '<carry edu-digit="hundreds">1</carry>' : '';

      const tensCarryHtml = tensCarry
        ? `<carry edu-digit="tens">${Math.floor((aDidits + bDidits + cDidits) / 10)}</carry>`
        : '';
      const hundredsCarryHtml = hundredsCarry
        ? `<carry edu-digit="hundreds">${Math.floor(
            (aLastTowDigits + bLastTowDigits + cLastTowDigits) / 100,
          )}</carry>`
        : '';

      answerElementHtml += this.questionElementHtmlAppendStart6;
      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `<p></p><p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml1}${tensCarryHtml1}</p><hr><p><number>${A_B}</number></p>`;
      answerElementHtml += '<hr class="step"/><p></p>';
      answerElementHtml += `<p></p><p><number>${A_B}</number></p><p><operator>+</operator><number>${C}</number>${hundredsCarryHtml2}${tensCarryHtml2}</p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';

      answerElementHtml += `<answer-option edu-chars="${charsStr}"><p></p><p></p>`;
      answerElementHtml += `<p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml1}${tensCarryHtml1}</p><hr><p><number>${A_B}</number></p>`;
      answerElementHtml += `<p><operator>+</operator><number>${C}</number>${hundredsCarryHtml2}${tensCarryHtml2}</p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';

      answerElementHtml += `<answer-option edu-chars="${charsStr}"><p></p><p></p><p></p><p>`;
      answerElementHtml += `<number>${A}</number></p><p><number>${B}</number></p>`;
      answerElementHtml += `<p><operator>+</operator><number>${C}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';

      answerElementHtml += '</div>';
    }

    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };

  private fillElementArrayOfASubtractBThenC = (
    has: boolean,
    questionElementHtmlAppend: string,
    onlyMentalArithmetic: boolean,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
    withBrackets: boolean = false,
  ): void => {
    const {
      getIntegerRandom,
      getAddendWithCarry,
      getAddendWithoutCarry,
      getDebitHtml,
      getHtmlOfAPlusB,
    } = this;
    let a: number, b: number, c: number, d: number;
    if (withBrackets) {
      // A - (B + C)
      if (has) {
        const bTens = getIntegerRandom(2, 8);
        const bDigits = getIntegerRandom(1, 9);
        b = 10 * bTens + bDigits;
        c = this.getAddendWithCarry(b);

        const bPlusC = b + c;
        if (bPlusC % 10 === 0) {
          a = bPlusC === 100 ? 100 : 10 * getIntegerRandom(Math.ceil(bPlusC / 10), 10);
        } else {
          a = bPlusC + getAddendWithCarry(bPlusC);
        }
      } else {
        const bTens = getIntegerRandom(2, 8);
        const bDigits = getIntegerRandom(1, 8);
        b = 10 * bTens + bDigits;
        c = this.getAddendWithoutCarry(b);

        const bPlusC = b + c;
        if (bPlusC % 10 === 0) {
          a = bPlusC === 100 ? 100 : 10 * getIntegerRandom(Math.ceil(bPlusC / 10), 10);
        } else {
          a = bPlusC + getAddendWithoutCarry(bPlusC);
        }
      }

      d = a - b - c;
      ({ a, b, c, d } = { a: b, b: c, c: d, d: a });
    } else {
      ({ a, b, c, d } = this.getMaybeCarryTwiceNumbers(has));
    }

    const A: number = d;
    const B: number = a;
    const C: number = b;
    const result = c; // A - B - C;

    const charsStr = (A.toString().length + 1).toString();
    const commonHtml = withBrackets
      ? `${A}<i> </i>-<i> </i>(${B}<i> </i>+<i> </i>${C})<i> </i>=<i> </i>`
      : `${A}<i> </i>-<i> </i>${B}<i> </i>-<i> </i>${C}<i> </i>=<i> </i>`;
    const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`; // .replace(/8/g, charsStr)
    let answerElementHtml = `<p>${commonHtml}${result}</p>`;
    if (onlyMentalArithmetic) {
      this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );
      return;
    }

    answerElementHtml += this.questionElementHtmlAppendStart8;

    const aDidits = A % 10;
    const bDidits = B % 10;
    const cDidits = C % 10;

    const aSubstractB = A - B;
    const bPlusC = B + C;

    function doneBPlusCAndThenASubstractIt() {
      const debitHtml = getDebitHtml(A, bPlusC);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += getHtmlOfAPlusB(B, C, bPlusC);
      answerElementHtml += '<hr class="step"/>';
      answerElementHtml += `${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${bPlusC}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';
    }

    function doneASubstractCSubstractB() {
      const aSubstractC = A - C;
      const debitHtmlStep1 = getDebitHtml(A, C);
      const debitHtmlStep2 = getDebitHtml(aSubstractC, B);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtmlStep1}<p><number>${A}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
      answerElementHtml += `${debitHtmlStep2}<p><number>${aSubstractC}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';
    }
    function doneASubstractBSubstractC() {
      const aSubstractB = A - B;
      const debitHtmlStep1 = getDebitHtml(A, B);
      const debitHtmlStep2 = getDebitHtml(aSubstractB, C);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtmlStep1}<p><number>${A}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
      answerElementHtml += `${debitHtmlStep2}<p><number>${aSubstractB}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';
    }

    if (withBrackets) {
      // 算法1：连续两式：B+C、A-(B+C)
      doneBPlusCAndThenASubstractIt();

      if (aDidits === cDidits && aDidits !== bDidits) {
        doneASubstractCSubstractB();
      } else if (aDidits === bDidits && aDidits !== cDidits) {
        doneASubstractBSubstractC();
      }
    } else {
      const debitHtml1 = getDebitHtml(A, B);
      const debitHtml2 = getDebitHtml(aSubstractB, C);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtml1}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${aSubstractB}</number></p>`;
      answerElementHtml += '<hr class="step"/>';
      answerElementHtml += `${debitHtml2}<p><number>${aSubstractB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += '</answer-option>';

      const htmlSubstractTwice = ''.concat(
        `<answer-option edu-chars="${charsStr}">`,
        `${debitHtml1}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr>`,
        `${debitHtml2}<p><number>${aSubstractB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`,
        '</answer-option>',
      );
      if (aDidits === cDidits && aDidits !== bDidits) {
        answerElementHtml += htmlSubstractTwice;
        doneASubstractCSubstractB();
      } else if ((bDidits + cDidits) % 10 === 0 || aDidits === (bDidits + cDidits) % 10) {
        answerElementHtml += htmlSubstractTwice;
        doneBPlusCAndThenASubstractIt();
      } else {
        doneBPlusCAndThenASubstractIt();
        answerElementHtml += htmlSubstractTwice;
      }
    }

    answerElementHtml += '</div>';
    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };

  private fillElementArrayOfASubtractBThenPlusC = (
    has: boolean,
    questionElementHtmlAppend: string,
    onlyMentalArithmetic: any,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
    withBrackets: boolean = false,
  ): void => {
    const {
      getIntegerRandom,
      getAddendWithCarry,
      getAddendWithoutCarry,
      getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus,
      getDebitHtml,
      getHtmlOfAPlusB,
    } = this;
    let A: number, B: number, C: number, aSubstractB: number;
    if (withBrackets) {
      // A - (B - C)
      const bRandom = getIntegerRandom(0, 99);
      const bTens = bRandom > 10 ? 10 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
      if (has) {
        const bDidits = bTens === 10 ? 0 : getIntegerRandom(0, 8);
        B = 10 * bTens + bDidits;
        C = getSubtractorWithDebitMinus(B);
        const bSubstractC = B - C;
        A =
          bSubstractC +
          (getIntegerRandom(0, 4) && bSubstractC % 10
            ? getAddendWithCarry(bSubstractC)
            : getAddendWithoutCarry(bSubstractC));
      } else {
        const bDidits = getIntegerRandom(1, 9);
        B = 10 * Math.min(9, bTens) + bDidits;
        C = getSubtractorWithoutDebitMinus(B);
        const bSubstractC = B - C;
        A =
          bSubstractC +
          (getIntegerRandom(0, 4) && bSubstractC % 10
            ? getAddendWithCarry(bSubstractC)
            : getAddendWithoutCarry(bSubstractC));
      }
      aSubstractB = A - B;
    } else {
      // A - B + C
      const aRandom = getIntegerRandom(0, 99);
      const aTens = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
      if (has) {
        const aDigits = getIntegerRandom(1, aRandom > 5 ? 5 : 8);
        A = 10 * aTens + aDigits;
        B = this.getSubtractorWithDebitMinus(A);
        aSubstractB = A - B;
        C =
          aRandom > 30
            ? this.getAddendWithCarry(aSubstractB)
            : this.getAddendWithoutCarry(aSubstractB);
      } else {
        const aDigits = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
        A = 10 * aTens + aDigits;
        B = this.getSubtractorWithoutDebitMinus(A);
        aSubstractB = A - B;
        C = this.getAddendWithoutCarry(aSubstractB);
      }
    }

    const result = A - B + C;
    const commonHtml = withBrackets
      ? `${A}<i> </i>-<i> </i>(${B}<i> </i>-<i> </i>${C})<i> </i>=<i> </i>`
      : `${A}<i> </i>-<i> </i>${B}<i> </i>+<i> </i>${C}<i> </i>=<i> </i>`;
    const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`; // .replace(/~charCount~/g, charsStr)
    let answerElementHtml = `<p>${commonHtml}${result}</p>`;
    if (onlyMentalArithmetic) {
      this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );

      return;
    }

    const aPlusC = A + C;

    const aDigits = A % 10;
    const bDigits = B % 10;
    const cDigits = C % 10;

    const aLastTowDigits = A % 100;
    const cLastTowDigits = C % 100;
    const acDigits = aPlusC % 10;

    const charsStr = (aPlusC.toString().length + 1).toString();
    answerElementHtml += `<div edu-flex="8">`;

    function doneAPlusCSubstractB() {
      const tensCarryHtml = aDigits + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml =
        aLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';

      const debitHtmlAPlusCSubstractB = getDebitHtml(aPlusC, B);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      // answerElementHtml += `${getHtmlOfAPlusB(A, C, aPlusC)}`;
      answerElementHtml += `<p><number>${A}</number></p><p><operator>+</operator><number>${C}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr>`;
      answerElementHtml += `${debitHtmlAPlusCSubstractB}<p><number>${aPlusC}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += `</answer-option>`;
    }

    if (withBrackets) {
      // 算法1：直接按顺序列出两个式子（减法、减法）：B-C、A-(B-C)
      // 最优算法（前提：B与C个位不同）：
      // 如果A大于等于B，且A与B个位相同，先A-B，再(A-B)+C
      // 否则，如果C不是整十数，且A+C为整十数或A+C与B个位相同，则先A+C，再(A+C)-B
      const bSubstractC = B - C;

      const debitHtmlStep1 = getDebitHtml(B, C);
      const debitHtmlStep2 = getDebitHtml(A, bSubstractC);
      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtmlStep1}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${bSubstractC}</number></p>`;
      answerElementHtml += '<hr class="step"/><p></p>';
      answerElementHtml += `${debitHtmlStep2}<p><number>${A}</number></p><p><operator>-</operator><number>${bSubstractC}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += `</answer-option>`;

      if (bDigits !== cDigits) {
        if (A >= B && aDigits === bDigits) {
          // (A-B)+C
          const debitHtmlASubstractB = getDebitHtml(A, B);
          answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
          answerElementHtml += `${debitHtmlASubstractB}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${aSubstractB}</number></p>`;
          answerElementHtml += `${getHtmlOfAPlusB(aSubstractB, C, result)}`;
          answerElementHtml += `</answer-option>`;
        } else if (cDigits && (acDigits === 0 || acDigits === bDigits)) {
          // (A+C)-B
          doneAPlusCSubstractB();
        }
      }
    } else {
      // 算法1：直接按顺序列出两个式子（减法、加法）
      // 算法2：两式合并

      const debitExtendHtmlASubstractB = `${getDebitHtml(
        A,
        B,
      )}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr>`;
      const htmlOfASubstractBPlubC = getHtmlOfAPlusB(aSubstractB, C, result);

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitExtendHtmlASubstractB}`;
      answerElementHtml += `<p><number>${aSubstractB}</number></p>`;
      answerElementHtml += '<hr class="step"/><p></p>';
      answerElementHtml += `${htmlOfASubstractBPlubC}`;
      answerElementHtml += `</answer-option>`;

      answerElementHtml += `<answer-option edu-chars="${charsStr}"><p></p><p></p>`;
      answerElementHtml += `${debitExtendHtmlASubstractB}`;
      answerElementHtml += `${htmlOfASubstractBPlubC}`;
      answerElementHtml += `</answer-option>`;

      // 最优算法：如果B与C个位相同（而A与B个位不同），则先计算C-B，再计算(C-B)+A；否则，若A+C与B个位相同或A+C为整十数，则先计算A+C，再计算(A+C)-B；否则，没有最优算法
      if (bDigits === cDigits && aDigits !== cDigits) {
        // 如果B与C个位相同（而A与B个位不同），则先计算C-B，再计算(C-B)+A；
        const BC = B - C;
        const debitHtml = getDebitHtml(B, C);

        answerElementHtml += `<answer-option edu-chars="${charsStr}"><p></p><p></p>`;
        answerElementHtml += `${debitHtml}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
        answerElementHtml += `${getHtmlOfAPlusB(BC, A, result)}`;
        answerElementHtml += `</answer-option>`;
      } else if (bDigits === acDigits || acDigits === 0) {
        // 否则，若A+C与B个位相同或A+C为整十数，则先计算A+C，再计算(A+C)-B
        doneAPlusCSubstractB();
      }
    }

    answerElementHtml += `</div>`;
    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };

  private fillElementArrayOfAPlusBThenSubtractC = (
    has: boolean,
    questionElementHtmlAppend: string,
    onlyMentalArithmetic: any,
    questionElementArray: HTMLElement[],
    answerElementArray: HTMLElement[],
    withBrackets: boolean = false,
  ): void => {
    const { getIntegerRandom, getDebitHtml, getHtmlOfAPlusB } = this;
    let A: number, B: number, C: number;

    if (withBrackets) {
      // A + (B - C)
      const bRandom = getIntegerRandom(0, 99);
      if (has) {
        const bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
        const bDigits = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 8);
        B = 10 * bTens + bDigits;
        C = this.getSubtractorWithDebitMinus(B);
        A = this.getAddendWithCarry(B - C);
      } else {
        const bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
        const bDigits = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
        B = 10 * bTens + bDigits;
        C = this.getSubtractorWithoutDebitMinus(B);
        A = this.getAddendWithoutCarry(B - C);
      }
    } else {
      // A + B - C
      if (has) {
        const aRandom = getIntegerRandom(0, 99);
        const aTens = getIntegerRandom(0, 9);
        const aDigits = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
        A = 10 * aTens + aDigits;
        B = this.getAddendWithCarry(A);
        C =
          aRandom > 30
            ? this.getSubtractorWithDebitMinus(A + B)
            : this.getSubtractorWithoutDebitMinus(A + B);
      } else {
        const cRandom = getIntegerRandom(0, 99);
        const cTens = getIntegerRandom(2, 10);
        if (!cRandom) {
          C = 10 * cTens;
          A = 10 * getIntegerRandom(1, cTens);
        } else {
          const cDigits = getIntegerRandom(cRandom > 5 ? 5 : 1, 9);
          C = 10 * Math.min(9, cTens) + cDigits;
          A = 10 * getIntegerRandom(1, cTens) + getIntegerRandom(0, cDigits);
        }
        B = C - A;
      }
    }

    const result = A + B - C;
    const commonHtml = withBrackets
      ? `${A}<i> </i>+<i> </i>(${B}<i> </i>-<i> </i>${C})<i> </i>=<i> </i>`
      : `${A}<i> </i>+<i> </i>${B}<i> </i>-<i> </i>${C}<i> </i>=<i> </i>`;
    const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`; // .replace(/~charCount~/g, charsStr)
    let answerElementHtml = `<p>${commonHtml}${result}</p>`;
    if (onlyMentalArithmetic) {
      this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );
      return;
    }

    const AB = A + B;
    const charsStr = (AB.toString().length + 1).toString();
    answerElementHtml += `<div edu-flex="8">`;

    const aDigits = A % 10;
    const bDigits = B % 10;
    const cDigits = C % 10;

    const aLastTowDigits = A % 100;
    const bLastTowDigits = B % 100;

    function doneASubstractCPlusB() {
      const AC = A - C;
      const debitHtml = getDebitHtml(A, C);

      const acDigits = AC % 10;
      const bDigits = B % 10;
      const acLastTowDigits = AC % 100;
      const bLastTowDigits = B % 100;
      const tensCarryHtml = acDigits + bDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml =
        acLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
      answerElementHtml += `<p><number>${AC}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
      answerElementHtml += `</answer-option>`;
    }

    function doneAPlusBSubstractC(twoOption: boolean = false) {
      const debitHtmlABSubstractC = getDebitHtml(AB, C);
      if (twoOption) {
        answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
        answerElementHtml += `<p></p>${getHtmlOfAPlusB(A, B, AB)}`;
        answerElementHtml += '<hr class="step"/><p></p>';
        answerElementHtml += `${debitHtmlABSubstractC}<p><number>${AB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`;
        answerElementHtml += `</answer-option>`;
      }

      const tensCarryHtml = aDigits + bDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml =
        aLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `<p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr>`;
      answerElementHtml += `${debitHtmlABSubstractC}<p><number>${AB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`;
      answerElementHtml += `</answer-option>`;
    }

    function doneBSubstractCThenPlusA(twoOption: boolean = false) {
      const BC = B - C;
      const debitHtml = getDebitHtml(B, C);

      const bcDigits = BC % 10;
      const cDigits = C % 10;
      const bcLastTowDigits = BC % 100;
      const cLastTowDigits = C % 100;
      const tensCarryHtml = bcDigits + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
      const hundredsCarryHtml =
        bcLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';

      if (twoOption) {
        answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
        answerElementHtml += `${debitHtml}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${BC}</number></p>`;
        answerElementHtml += '<hr class="step"/><p></p>';
        answerElementHtml += `<p><number>${BC}</number></p><p><operator>+</operator><number>${A}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
        answerElementHtml += `</answer-option>`;
      }

      answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
      answerElementHtml += `${debitHtml}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
      answerElementHtml += `<p><number>${BC}</number></p><p><operator>+</operator><number>${A}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
      answerElementHtml += `</answer-option>`;
    }

    if (withBrackets) {
      // 算法1：直接按顺序列出两个式子（减法、加法）
      // 算法2：两式合并
      doneBSubstractCThenPlusA();

      // 最优算法（前提是B与C个位不同）：如果B个位非0，A大于等于C，且A与C个位相同，则先计算A-C，再计算(A-C)+B；
      // 否则，如果A+B为整十数，则先计算A+B，再计算(A+B)-C
      // 否则，没有最优算法
      if (bDigits !== cDigits) {
        if (bDigits && A >= C && aDigits === cDigits) {
          // 如果B个位非0，A大于等于C，且A与C个位相同，则先计算A-C，再计算(A-C)+B；
          doneASubstractCPlusB();
        } else if ((aDigits + bDigits) % 10 === 0) {
          // 如果A+B为整十数，则先计算A+B，再计算(A+B)-C
          doneAPlusBSubstractC();
        }
      }
    } else {
      // 算法1：直接按顺序列出两个式子（加法、减法）
      // 算法2：两式合并
      doneAPlusBSubstractC(true);

      // 最优算法：如果B个位非0，A大于等于C，且A与C个位相同，则先计算A-C，再计算(A-C)+B；
      // 否则，若A个位非0，B大于等于C，B与C个位相同，则先计算B-C，再计算A+(B-C)；
      // 否则，没有最优算法
      if (bDigits && A >= C && aDigits === cDigits) {
        // 如果B个位非0，A大于等于C，且A与C个位相同，则先计算A-C，再计算(A-C)+B；
        doneASubstractCPlusB();
      } else if (aDigits && B >= C && bDigits === cDigits) {
        // 若A个位非0，B大于等于C，B与C个位相同，则先计算B-C，再计算(B-C) + A；
        doneBSubstractCThenPlusA();
      }
    }
    answerElementHtml += `</div>`;

    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };

  /** OK
   *
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   * @returns
   */
  private appendReportElements = (
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ): void => {
    const {
      data: {
        onlyMentalArithmetic,
        // innerLineStyle,
        // outerLineStyle,
      },
    } = this;

    const { kind, catalog } = info;

    // 如果onlyMentalArithmetic，那么所有答案都略过计算过程
    // 以下内容可穷举（正好也都可略过计算过程）：0-5，1-5，0-10，9*9（A/B）、A+B+C=10/20
    const filterResult = this.exhaustibleArray.filter(
      ({ kind: kindIndicator }) => kindIndicator === kind,
    );
    if (filterResult.length) {
      this.fillExhaustibleList(
        filterResult[0],
        info,
        onlyMentalArithmetic,
        questionRowsArray,
        answerRowsArray,
      );
      return;
    }

    switch (catalog) {
      case 'A+B=C':
        this.countByArithmetic1(info, questionRowsArray, answerRowsArray);
        break;
      case 'A-B=C':
        this.countByArithmetic2(info, questionRowsArray, answerRowsArray);
        break;
      case 'A+B=C D-E=F':
        this.countByArithmetic3(info, questionRowsArray, answerRowsArray);
        break;
      case 'A+B+C=D':
        this.countByArithmetic4(info, questionRowsArray, answerRowsArray);
        break;
      case 'A-B-C=D':
        this.countByArithmetic5(info, questionRowsArray, answerRowsArray);
        break;
      case 'A±B±C=D':
        this.countByArithmetic6(info, questionRowsArray, answerRowsArray);
        break;
      case 'A±(B±C)=D':
        this.countByArithmetic7(info, questionRowsArray, answerRowsArray);
        break;
      case 'A×B±C=D':
        this.countByArithmetic8(info, questionRowsArray, answerRowsArray);
        break;
      case 'A±B×C=D':
        this.countByArithmetic9(info, questionRowsArray, answerRowsArray);
        break;
      case 'A×(B±C)=D':
        this.countByArithmetic10(info, questionRowsArray, answerRowsArray);
        break;
      case 'A+B+C=10/20/n':
        this.countByArithmetic11(info, questionRowsArray, answerRowsArray);
        break;
      case 'A+B+C+D+E<br/>=10+n/20+n/n': // A/B
        this.countByArithmetic12(info, questionRowsArray, answerRowsArray);
        break;
      default:
        break;
    }
  };

  /** OK
   * A+B=C
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic1(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const { getIntegerRandom } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    const min = 11;
    const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
        // console.log({ mustHasnot, mustHas, maybeHas, has });

        this.fillElementArrayOfAPlusB(has, min, max, questionElementArray, answerElementArray);
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /** OK
   * A-B=C
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic2(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const { getIntegerRandom } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    const min = 11;
    const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
        // console.log({ mustHasnot, mustHas, maybeHas, has });

        this.fillElementArrayOfASubtractB(has, min, max, questionElementArray, answerElementArray);
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /** OK
   * A+B=C D-E=F
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic3(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
      getAddendWithCarry,
      getAddendWithoutCarry,
      getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus,
    } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];
    const questionElementHtmlAppendOfAddition = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4;
    const questionElementHtmlAppendOfSubstraction = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;

    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    const min = 11;
    const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
        // console.log({ mustHasnot, mustHas, maybeHas, has });

        if (getIntegerRandom(0, 1)) {
          // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
          this.fillElementArrayOfAPlusB(has, min, max, questionElementArray, answerElementArray);
        } else {
          // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
          this.fillElementArrayOfASubtractB(
            has,
            min,
            max,
            questionElementArray,
            answerElementArray,
          );
        }
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /** OK
   * A+B+C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic4(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6;

    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
        // console.log({ mustHasnot, mustHas, maybeHas, has });

        this.fillElementArrayOfAPlusBThenC(
          has,
          questionElementHtmlAppend,
          onlyMentalArithmetic,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**
   * A-B-C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic5(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;
    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;

    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
        // console.log({ mustHasnot, mustHas, maybeHas, has });

        this.fillElementArrayOfASubtractBThenC(
          has,
          questionElementHtmlAppend,
          onlyMentalArithmetic,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**
   * A±B±C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic6(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, false);
  }

  private countByArithmetic6Or7(
    info: MathStageInfo,
    questionRowsArray: RowsInfo[],
    answerRowsArray: RowsInfo[],
    withBrackets: boolean,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;
    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;

    const {
      // kind,
      // catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加或退位减
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        const operatorRandom = getIntegerRandom(0, 3);
        switch (operatorRandom) {
          case 0:
            this.fillElementArrayOfAPlusBThenC(
              has,
              questionElementHtmlAppend,
              onlyMentalArithmetic,
              questionElementArray,
              answerElementArray,
              withBrackets,
            );
            break;
          case 1:
            this.fillElementArrayOfASubtractBThenC(
              has,
              questionElementHtmlAppend,
              onlyMentalArithmetic,
              questionElementArray,
              answerElementArray,
              withBrackets,
            );
            break;
          default:
            if (operatorRandom === 2) {
              // A + B - C
              this.fillElementArrayOfAPlusBThenSubtractC(
                has,
                questionElementHtmlAppend,
                onlyMentalArithmetic,
                questionElementArray,
                answerElementArray,
                withBrackets,
              );
            } else {
              // A - B + C
              this.fillElementArrayOfASubtractBThenPlusC(
                has,
                questionElementHtmlAppend,
                onlyMentalArithmetic,
                questionElementArray,
                answerElementArray,
                withBrackets,
              );
            }
            break;
        }
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**
   * A±(B±C)=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic7(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, true);
  }

  /**
   * A×B±C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic8(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, false);
  }

  private countByArithmetic8Or9(
    info: MathStageInfo,
    questionRowsArray: RowsInfo[],
    answerRowsArray: RowsInfo[],
    switchOrder: boolean,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
      getAddendWithCarry,
      getAddendWithoutCarry,
      getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus,
    } = this;

    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
    const {
      kind,
      catalog,
      scope,
      rows,
      // independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];

    const {
      aMultiplyBMaybeCarryArray,
      aMultiplyBMaybeNotCarryArray,
      aMultiplyBMaybeDebitMinusArray,
      aMultiplyBMaybeNotDebitMinusArray,
      aMultiplyBMaybeCarryMaxIndex,
      aMultiplyBMaybeNotCarryMaxIndex,
      aMultiplyBMaybeDebitMinusMaxIndex,
      aMultiplyBMaybeNotDebitMinusMaxIndex,
    } = this.exhaustibleAMultiplyBInfo;

    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    const mustHasnot = scope === '0-100A';
    const mustHas = scope === '0-100B';
    const maybeHas = scope === '0-100C';

    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        const isPlus = getIntegerRandom(0, 1) === 1;
        const operator = isPlus ? '+' : '-';

        let A: number, B: number, aMultiplyB: number;
        let C: number;
        // 0 getAddendWithCarry, 1 getAddendWithoutCarry, 2 getSubtractorWithDebitMinus, 3 getSubtractorWithoutDebitMinus
        // let cCountMethod: number; // 0 getAddendWithCarry, 1 getAddendWithoutCarry, 2 getSubtractorWithDebitMinus, 3 getSubtractorWithoutDebitMinus
        switch ((isPlus ? 0 : 2) + (has ? 0 : 1)) {
          case 0:
            ({ A, B, aMultiplyB } =
              aMultiplyBMaybeCarryArray[getIntegerRandom(0, aMultiplyBMaybeCarryMaxIndex)]);
            C = getAddendWithCarry(aMultiplyB);
            break;
          case 1:
            ({ A, B, aMultiplyB } =
              aMultiplyBMaybeNotCarryArray[getIntegerRandom(0, aMultiplyBMaybeNotCarryMaxIndex)]);
            C = getAddendWithoutCarry(aMultiplyB);
            break;
          case 2:
            ({ A, B, aMultiplyB } =
              aMultiplyBMaybeDebitMinusArray[
                getIntegerRandom(0, aMultiplyBMaybeDebitMinusMaxIndex)
              ]);
            C = getSubtractorWithDebitMinus(aMultiplyB);
            if (switchOrder) C += aMultiplyB;
            break;
          case 3:
          default:
            ({ A, B, aMultiplyB } =
              aMultiplyBMaybeNotDebitMinusArray[
                getIntegerRandom(0, aMultiplyBMaybeNotDebitMinusMaxIndex)
              ]);
            C = getSubtractorWithoutDebitMinus(aMultiplyB);
            if (switchOrder) C += aMultiplyB;
            break;
        }

        const result = switchOrder ? A * B * (isPlus ? 1 : -1) + C : A * B + C * (isPlus ? 1 : -1);
        const charsStr = ((isPlus ? result : aMultiplyB).toString().length + 1).toString();

        // switchOrder:
        // true => A±B×C=D
        // false => A×B±C=D
        const commonHtml = switchOrder
          ? `<i> </i>${C}<i> </i>${operator}<i> </i>${A}<i> </i>×<i> </i>${B}<i> </i>=<i> </i>`
          : `${A}<i> </i>×<i> </i>${B}<i> </i>${operator}<i> </i>${C}<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml}${result}</p>`;
        if (!onlyMentalArithmetic) {
          answerElementHtml += `<div edu-flex="8">`;
          answerElementHtml += `<answer-option edu-chars="${charsStr}">`;

          answerElementHtml += this.getHtmlOfAMultiplyB(A, B, aMultiplyB);
          answerElementHtml += '<hr class="step"/>';

          if (isPlus) {
            answerElementHtml += this.getHtmlOfAPlusB(aMultiplyB, C, result);
          } else {
            answerElementHtml += switchOrder
              ? this.getDebitHtmlOfASubstractB(C, aMultiplyB, result)
              : this.getDebitHtmlOfASubstractB(aMultiplyB, C, result);
          }

          answerElementHtml += '</answer-option>';
          answerElementHtml += `</div>`;
        }

        this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**
   * A±B×C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic9(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, true);
  }

  /** OK
   * A×(B±C)=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic10(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;

    const questionElementHtmlAppend = onlyMentalArithmetic
      ? ''
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;

    const {
      kind,
      catalog,
      scope,
      rows,
      independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    let minMultiplier = 1;
    let maxMultiplier = 9;
    let fontSizeCss = '';
    let flexStr = '8';
    switch (scope) {
      case '20×20':
        minMultiplier = 11;
        maxMultiplier = 20;
        fontSizeCss = ' style="font-size:0.9em;"';
        flexStr = '10';
        break;
      case '100×100':
        minMultiplier = 11;
        maxMultiplier = 100;
        fontSizeCss = ' style="font-size:0.8em;"';
        flexStr = '10';
        break;
      case 'A':
      default:
        break;
    }

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        const A = getIntegerRandom(minMultiplier, maxMultiplier);
        const B_C = getIntegerRandom(1, maxMultiplier);

        const isPlus = B_C < 3 || getIntegerRandom(1, 2) < 2;

        // let A: number;
        let B: number;
        let C: number;

        if (isPlus) {
          B = getIntegerRandom(1, B_C);
          C = B_C - B;
        } else {
          C = getIntegerRandom(1, 100 - B_C);
          B = C + B_C;
        }

        const result = A * (B + C * (isPlus ? 1 : -1));
        const charsStr = ((isPlus ? result : Math.max(result, B)).toString().length + 1).toString();

        const commonHtml = `${A}<i> </i>×<i> </i>(${B}<i> </i>${
          isPlus ? '+' : '-'
        }<i> </i>${C})<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p${fontSizeCss}>${commonHtml}${result}</p>`;

        if (!onlyMentalArithmetic) {
          answerElementHtml += `<div edu-flex="${flexStr}">`;
          answerElementHtml += `<answer-option edu-chars="${charsStr}">`;

          if (isPlus) {
            answerElementHtml += this.getHtmlOfAPlusB(B, C, B_C);
          } else {
            answerElementHtml += this.getDebitHtmlOfASubstractB(B, C, B_C);
          }
          // answerElementHtml += '<hr class="step"/>';
          // answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
          // <p><number>${B_C}</number></p>
          if (A < 10) {
            answerElementHtml += `<p><operator>×</operator><number>${A}</number></p><hr><p><number>${result}</number></p>`;
          } else {
            answerElementHtml += '<hr class="step"/>';
            answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
          }

          answerElementHtml += '</answer-option>';
          answerElementHtml += `</div>`;
        }

        this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /** OK
   * A+B+C=10/20/n
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic11(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    // A属于可穷举项，不在此方法处理范围内。
    // 仅B，相对于A，增加了10%概率的无法凑出10或20的可能性
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic11', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        // A-C都是1-9的数字，scope为A时，必定能以3个数字凑出整十数；scope为B时，有10%的概率无法凑出整十数
        // let A: number;
        let B: number;
        let C: number;
        let questionElementHtml: string;
        let answerElementHtml: string;

        const A = getIntegerRandom(1, 9);
        while (true) {
          B = getIntegerRandom(1, 9);
          if ((A + B) % 10) break;
        }
        const A_B = A + B;
        if (getIntegerRandom(1, 10) < 2) {
          while (true) {
            C = getIntegerRandom(1, 9);
            if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) break;
          }

          // answerElementHtml = '×';
        } else {
          C = 10 - ((A + B) % 10);
          // answerElementHtml = [A, B, C].sort((prev, next) => prev - next).join(' '); // `${A} ${B} ${C}`;
        }
        answerElementHtml = (A + B + C).toString();

        // questionElementHtml = '10n?: '.concat([A, B, C].sort((prev, next) => prev - next).join(' '));
        const html = [A, B, C].join(' + ').concat(' = ');
        questionElementHtml = `<p>${html.replace(/ /g, '<i> </i>')}</p>`;
        answerElementHtml = `<p>${html.replace(/ /g, '<i> </i>')}${answerElementHtml}</p>`; // `${questionElementHtml}${answerElementHtml}`;
        this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**
   * A+B+C+D+E=10+n/20+n/n
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private countByArithmetic12(
    info: MathStageInfo,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const {
      data: { onlyMentalArithmetic },
      getIntegerRandom,
    } = this;
    const {
      kind,
      catalog,
      scope,
      rows,
      independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    // console.log('countByArithmetic12', rowsOccupied);
    const rowCountPerPageStr = rowCountPerPage.toString();

    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];
    for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
        // A-E都是1-9的数字，scope为A时，必定能以2-5个数字凑出整十数；scope为B时，有10%的概率无法凑出整十数
        // let A: number;
        let B: number;
        let C: number;
        let D: number;
        let E: number;
        let F: number;
        let A_B: number;
        let A_B_C: number;
        let A_B_C_D: number;
        let questionElementHtml: string;
        let answerElementHtml: string;

        const A = getIntegerRandom(1, 9);
        if (scope === 'B' && getIntegerRandom(1, 10) < 2) {
          while (true) {
            B = getIntegerRandom(1, 9);
            if ((A + B) % 10) break;
          }

          A_B = A + B;
          while (true) {
            C = getIntegerRandom(1, 9);
            if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) break;
          }

          A_B_C = A_B + C;
          while (true) {
            D = getIntegerRandom(1, 9);
            if (
              (A_B_C + D) % 10 &&
              (A + D) % 10 &&
              (B + D) % 10 &&
              (C + D) % 10 &&
              (A_B + D) % 10
            ) {
              break;
            }
          }

          A_B_C_D = A_B_C + D;
          while (true) {
            E = getIntegerRandom(1, 9);
            if ((A_B_C_D + E) % 10) break;
          }

          answerElementHtml = '×';
        } else {
          switch (getIntegerRandom(1, 4)) {
            case 1:
              B = 10 - A;
              C = getIntegerRandom(1, 9);
              D = getIntegerRandom(1, 9);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B].sort((prev, next) => prev - next).join(' '); // `${A} ${B}`;
              break;
            case 2:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) break;
              }
              C = 10 - ((A + B) % 10);
              D = getIntegerRandom(1, 9);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B, C].sort((prev, next) => prev - next).join(' '); // `${A} ${B} ${C}`;
              break;
            case 3:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) break;
              }

              A_B = A + B;
              while (true) {
                C = getIntegerRandom(1, 9);
                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) break;
              }

              D = 10 - ((A + B + C) % 10);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B, C, D].sort((prev, next) => prev - next).join(' '); // `${A} ${B} ${C} ${D}`;
              break;
            case 4:
            default:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) break;
              }

              A_B = A + B;
              while (true) {
                C = getIntegerRandom(1, 9);
                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) break;
              }

              A_B_C = A_B + C;
              while (true) {
                D = getIntegerRandom(1, 9);
                if (
                  (A_B_C + D) % 10 &&
                  (A + D) % 10 &&
                  (B + D) % 10 &&
                  (C + D) % 10 &&
                  (A_B + D) % 10
                ) {
                  break;
                }
              }

              E = 10 - ((A + B + C + D) % 10);
              answerElementHtml = [A, B, C, D, E].sort((prev, next) => prev - next).join(' '); // `${A} ${B} ${C} ${D} ${E}`;
              break;
          }
        }

        questionElementHtml = '10n: '.concat(
          [A, B, C, D, E].sort((prev, next) => prev - next).join(' '),
        );
        answerElementHtml = `${questionElementHtml} => ${answerElementHtml}`;
        this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  /**  */
  private exhaustibleArray: Array<ExhaustibleItemType> = [];
  /** OK
		生成min到max间整数随机数——包含min和max
		@params min 最小值（整数）
		@params max 最大值（整数）
		@return [min, max]范围内的整数
	*/
  private getIntegerRandom = (min, max): number => {
    // 不要进行参数修正，避免调用方误用！
    // if (min > max) { min += max; max = min - max; min = min - max; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /** OK
   *
   * @param onlyMentalArithmetic
   * @param item
   * @param kind
   * @param countPerRow
   * @param questionElementArray
   * @param answerElementArray
   */
  private fillElementList = (
    onlyMentalArithmetic: boolean,
    item: QuestionAndAnswerType,
    // kind: string,
    // countPerRow: number,
    questionElementArray: Array<HTMLElement>,
    answerElementArray: Array<HTMLElement>,
  ) => {
    const question = onlyMentalArithmetic ? item.question : item.questionFull;
    const answer = onlyMentalArithmetic ? item.answer : item.answerFull;

    // this.fillElementListCore(kind, countPerRow, question, questionElementArray, answer, answerElementArray);
    this.fillElementListCore(question, answer, questionElementArray, answerElementArray);
  };

  private fillElementListCore(
    // kind: string,
    // countPerRow: number,
    question: string,
    answer: string,
    questionElementArray: Array<HTMLElement>,
    answerElementArray: Array<HTMLElement>,
  ) {
    const questionElement = createElement('cell') as HTMLElement;
    // questionElement.setAttribute('edu-math-stage-kind', kind);
    // questionElement.setAttribute('edu-question', '');
    // questionElement.setAttribute('edu-count-per-row', countPerRow.toString());
    questionElement.innerHTML = question;
    questionElementArray.push(questionElement);

    const answerElement = createElement('cell') as HTMLElement;
    // answerElement.setAttribute('edu-math-stage-kind', kind);
    // answerElement.setAttribute('edu-answer', '');
    // answerElement.setAttribute('edu-count-per-row', countPerRow.toString());
    answerElement.innerHTML = answer;
    answerElementArray.push(answerElement);

    const withoutOuterLine = answer.indexOf('<div edu-flex=') === -1;
    if (withoutOuterLine) {
      // questionElement.setAttribute('', '');
      answerElement.setAttribute('edu-without-outer-line', '');
    }
  }

  /** OK
   * 创建表格行
   * @param item
   * @param tableBodyElement
   */
  protected createTableBodyRow = (item: object): void => {
    const {
      kind,
      catalog,
      scope,
      rows,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
      independentPagination,
      textStyle,
    } = item as MathStageInfo;
    const { tableBodyElement } = this;

    const tr = createElement('tr') as HTMLTableRowElement;
    tableBodyElement.appendChild(tr);

    this.appendOperationTd(tr, item);

    // this.appendReadonlyTd(tr, kind);
    this.appendReadonlyTd(tr, catalog);
    this.appendReadonlyTd(tr, scope);

    this.appendNumberTd(tr, rows, item, 'rows', 1, null, 1);
    this.appendCheckboxTdWithoutText(tr, independentPagination, item, 'independentPagination');

    // this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
    this.appendTextboxTd(tr, textStyle, item, 'textStyle');

    this.appendReadonlyTd(tr, countPerRow);
    this.appendReadonlyTd(tr, rowsOccupied);
    this.appendReadonlyTd(tr, rowCountPerPage);
  };

  /** OK
   * 初始化表头
   */
  protected initTableHead = (): void => {
    // this.appendTableHeadCell({ en: 'Kind', zh_cn: '类型', zh_tw: '類型' });

    this.appendTableHeadCell({ en: 'Catalog', zh_cn: '大类', zh_tw: '大類' });
    this.appendTableHeadCell({ en: 'Scope', zh_cn: '范围', zh_tw: '範圍' });
    this.appendTableHeadCell({ en: 'Rows', zh_cn: '行数', zh_tw: '行數' });
    this.appendTableHeadCell({
      en: 'Independent Pagination',
      zh_cn: '独立分页',
      zh_tw: '獨立分頁',
    });
    this.appendTableHeadCell({
      en: 'Text Style',
      zh_cn: '文本样式',
      zh_tw: '文字樣式',
    });
    this.appendTableHeadCell({
      en: 'Count Per Row',
      zh_cn: '每行题数',
      zh_tw: '每行題數',
    });
    this.appendTableHeadCell({
      en: 'Item Row Count',
      zh_cn: '题目占行',
      zh_tw: '題目占行',
    });
    this.appendTableHeadCell({
      en: 'Item Count Per Page',
      zh_cn: '每页题行',
      zh_tw: '每頁題行',
    });
  };

  /** OK
   * 事件：纸张大小更改后
   * @param newPageSize
   * @returns
   */
  protected onPageSizeChanged = (newPageSize: string): void => {
    const { isLandscapeRadioArray, data } = this;
    switch (newPageSize) {
      case 'A3':
        isLandscapeRadioArray[0].value = true;
        data.isLandscape = true;
        break;
      case 'A4':
        isLandscapeRadioArray[1].value = true;
        data.isLandscape = false;
        break;
      default:
        return;
    }

    // this.build();
  };

  /** OK
   * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
   * @returns 数组：信息数组
   */
  protected getUsableList = (): Array<object> => {
    // const length = 10;
    // const showNumber = true;
    // const digitalOverlay = true;
    // const startNumber = 1;
    // const count = 1;

    // const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
    // const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
    // const textStyle = 'font-size:6mm;';

    const { appendUsableItem, addCommonItem, smallRowCountPerPage, formatCentile } = this;

    const usableList: Array<{
      strongI18n: I18nable;
      buttonList: Array<{ nameI18n: I18nable; info: MathStageInfo }>;
    }> = [];

    const buttonList: Array<{ nameI18n: I18nable; info: MathStageInfo }> = [];
    // let strongI18n: I18nable;

    // let kind: string;
    let catalog: string;
    // let scope: string;
    const independentPagination = false;
    const textStyle = '';
    const countPerRow = 5;

    const rowCountPerPage = 25;
    const rowsOccupied = formatCentile(smallRowCountPerPage / rowCountPerPage);
    const rows = rowCountPerPage;

    const rowCountPerPageOf10 = 10;
    const rowsOccupiedOf10 = formatCentile(smallRowCountPerPage / rowCountPerPageOf10);
    const rowsOf10 = rowCountPerPageOf10;

    const rowCountPerPageOf8 = 8;
    const rowsOccupiedOf8 = formatCentile(smallRowCountPerPage / rowCountPerPageOf8);
    const rowsOf8 = rowCountPerPageOf8;

    const rowCountPerPageOf6 = 6;
    const rowsOccupiedOf6 = formatCentile(smallRowCountPerPage / rowCountPerPageOf6);
    const rowsOf6 = rowCountPerPageOf6;

    const kindArray: Array<string> = [];

    catalog = 'A+B=C';
    buttonList.length = 0;

    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '1-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-10',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-20',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );

    // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);

    // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 5, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 5, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 5, independentPagination, textStyle }, kindArray, buttonList);

    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf10,
        rowsOccupied: rowsOccupiedOf10,
        rowCountPerPage: rowCountPerPageOf10,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf10,
        rowsOccupied: rowsOccupiedOf10,
        rowCountPerPage: rowCountPerPageOf10,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf10,
        rowsOccupied: rowsOccupiedOf10,
        rowCountPerPage: rowCountPerPageOf10,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );

    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A-B=C';
    buttonList.length = 0;
    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '1-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-10',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-20',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );

    // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);

    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A+B=C D-E=F';
    buttonList.length = 0;
    // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '1-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-5',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-10',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-20',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );

    // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
    // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);

    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf8,
        rowsOccupied: rowsOccupiedOf8,
        rowCountPerPage: rowCountPerPageOf8,
        countPerRow: 5,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A+B+C=D';
    buttonList.length = 0;
    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A-B-C=D';
    buttonList.length = 0;
    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A±B±C=D';
    // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
    buttonList.length = 0;
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A±(B±C)=D';
    buttonList.length = 0;
    // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    // 以下乘法中，两个乘数都在1-9范围内
    catalog = 'A×B=C';
    buttonList.length = 0;
    // A/B分别表示小九九和大九九
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '9×9A',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '9×9B',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A×B±C=D';
    buttonList.length = 0;
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A±B×C=D';
    buttonList.length = 0;
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100A',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100B',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '0-100C',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A×(B±C)=D';
    buttonList.length = 0;
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '9×9',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '20×20',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: '100×100',
        rows: rowsOf6,
        rowsOccupied: rowsOccupiedOf6,
        rowCountPerPage: rowCountPerPageOf6,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A+B+C=10/20/n';
    buttonList.length = 0;
    // A：必定可得到10或20；B：部分无法得到10或20
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: 'A',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: 'B',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow: 4,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    catalog = 'A+B+C+D+E<br/>=10+n/20+n/n';
    buttonList.length = 0;
    // A：必定有三个可以凑足10或20；B：其中2-5个数可凑足整十数（10%概率无法凑出整十数）
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: 'A',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow: 3,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    addCommonItem(
      {
        kind: '',
        catalog,
        scope: 'B',
        rows,
        rowsOccupied,
        rowCountPerPage,
        countPerRow: 3,
        independentPagination,
        textStyle,
      },
      kindArray,
      buttonList,
    );
    appendUsableItem(catalog, buttonList, usableList);

    // console.log('kindArray:', JSON.stringify(kindArray));

    return usableList;
  };

  /** OK
   * 初始化表格上方控件（通用两行控件除外）
   */
  protected initCoreElementsBeforeTable = (): void => {
    const {
      configCoreElement,
      getWrapElement,
      idOrClassPrefix,
      initTextboxElement,
      initRadioGroupByBooleanOrNumberValue,
    } = this;

    let wrapElement: HTMLDivElement;

    wrapElement = getWrapElement({
      en: 'Date (Not Saved)',
      zh_cn: '日期（不存储）',
      zh_tw: '日期（不存儲）',
    });
    wrapElement.id = `${idOrClassPrefix}DateWrap`;
    this.initDateElements(wrapElement);

    // onlyMentalArithmetic
    // this.initRadioGroupWithLabelByBooleanOrNumberValue(
    // 	[
    // 		{ value: false, i18nHtml: getI18nInnerHTML({ en: 'No', zh_cn: '否', zh_tw: '否' })},
    // 		{ value: true, i18nHtml: getI18nInnerHTML({ en: 'Yes', zh_cn: '是', zh_tw: '是' })},
    // 	],
    // 	'onlyMentalArithmetic',
    // 	this.onlyMentalArithmeticRadioArray,
    // 	{ en: 'Only Mental Arithmetic', zh_cn: '全部口算', zh_tw: '全部口算' },
    // );
    wrapElement = getWrapElement({
      en: 'Arithmetic and Font Size',
      zh_cn: '算法与字号',
      zh_tw: '算法與字號',
    });
    wrapElement.id = `${idOrClassPrefix}ArithmeticAndTextStyleWrap`;
    // (radiosInfoArray, propertyName, radioElementArray, wrapElement);
    initRadioGroupByBooleanOrNumberValue(
      [
        {
          value: false,
          i18nHtml: getI18nInnerHTML({
            en: 'Normal',
            zh_cn: '常规',
            zh_tw: '常規',
          }),
        },
        {
          value: true,
          i18nHtml: getI18nInnerHTML({
            en: 'Mental',
            zh_cn: '口算',
            zh_tw: '口算',
          }),
        },
      ],
      'onlyMentalArithmetic',
      this.onlyMentalArithmeticRadioArray,
      wrapElement,
    );
    initTextboxElement(
      {
        en: 'Subject:',
        zh_cn: '标题：',
        zh_tw: '標題：',
      },
      'pageSubjectFontSize',
      this.pageSubjectFontSizeElement,
      wrapElement,
    );
    initTextboxElement(
      {
        en: 'Question:',
        zh_cn: '问题：',
        zh_tw: '問題：',
      },
      'questionFontSize',
      this.questionFontSizeElement,
      wrapElement,
    );

    // wrapElement = getWrapElement({
    //   en: 'Line Styles',
    //   zh_cn: '线条样式',
    //   zh_tw: '線條樣式',
    // });
    // wrapElement.id = `${idOrClassPrefix}LineStylesWrap`;
    // this.initLineStylesElements(wrapElement);

    hide(getElementById('brickPageBasePaperSizeOrDirectionWrap'));
    // hide(getElementById('brickPageBasePaperDirectionWrap'));
  };

  private pageSubjectFontSizeElement = createElement('input') as HTMLInputElement;
  private questionFontSizeElement = createElement('input') as HTMLInputElement;

  private onlyMentalArithmeticRadioArray: Array<HTMLInputElement> = [];

  // // private outerLineStyleElement = createElement('input') as HTMLInputElement;
  // // private innerLineStyleElement = createElement('input') as HTMLInputElement;
  // private outerLineStyleElement = createElement('textarea') as HTMLTextAreaElement;
  // private innerLineStyleElement = createElement('textarea') as HTMLTextAreaElement;
  // /** OK
  //  * 附加选项行：线条样式（粗、细）
  //  * @param wrapElement
  //  */
  // private initLineStylesElements = (wrapElement: HTMLDivElement): void => {
  //   const { data: { pageMarginLeft }, outerLineStyleElement, innerLineStyleElement } = this;

  //   const outerLabel = createElement('label') as HTMLLabelElement;
  //   outerLabel.innerHTML = getI18nInnerHTML({
  //     en: 'Thick Line:',
  //     zh_cn: '粗线：',
  //     zh_tw: '粗線：',
  //   });

  // 	outerLineStyleElement.value = this.data.outerLineStyle;
  // 	// outerLineStyleElement.type = 'text';
  // 	const onOuterLineStyleChanged = () => {
  // 		this.data.outerLineStyle = parseInt(outerLineStyleElement.value, 0);
  //     this.saveConfigAndBuildIfAllowed();
  // 	};
  // 	outerLineStyleElement.onchange = onOuterLineStyleChanged;
  // 	outerLineStyleElement.onblur = onOuterLineStyleChanged;

  // 	wrapElement.appendChild(outerLabel);
  // 	wrapElement.appendChild(outerLineStyleElement);

  //   const innerLabel = createElement('label') as HTMLLabelElement;
  //   innerLabel.innerHTML = getI18nInnerHTML({
  //     en: 'Thin Line:',
  //     zh_cn: '细线：',
  //     zh_tw: '細線：',
  //   });

  // 	innerLineStyleElement.value = this.data.innerLineStyle;
  // 	// innerLineStyleElement.type = 'text';
  // 	const onInnerLineStyleChanged = () => {
  // 		this.data.innerLineStyle = parseInt(innerLineStyleElement.value, 0);
  //     this.saveConfigAndBuildIfAllowed();
  // 	};
  // 	innerLineStyleElement.onchange = onInnerLineStyleChanged;
  // 	innerLineStyleElement.onblur = onInnerLineStyleChanged;

  // 	wrapElement.appendChild(innerLabel);
  // 	wrapElement.appendChild(innerLineStyleElement);
  // };

  private yearElement = createElement('input') as HTMLInputElement;
  private monthElement = createElement('input') as HTMLInputElement;
  private dayElement = createElement('input') as HTMLInputElement;
  /** OK
   *
   * @param wrapElement
   */
  private initDateElements = (wrapElement: HTMLDivElement): void => {
    const {
      data: { year, month, day },
      yearElement,
      monthElement,
      dayElement,
    } = this;

    const span = createElement('span') as HTMLSpanElement;
    wrapElement.appendChild(span);

    const yearLabel = createElement('label') as HTMLLabelElement;
    yearLabel.innerHTML = getI18nInnerHTML({
      en: 'Year:',
      zh_cn: '年：',
      zh_tw: '年：',
    });

    yearElement.value = year;
    yearElement.type = 'text';
    const onYearhanged = () => {
      this.data.year = parseInt(yearElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    yearElement.onchange = onYearhanged;
    yearElement.onblur = onYearhanged;

    span.appendChild(yearLabel);
    span.appendChild(yearElement);

    const monthLabel = createElement('label') as HTMLLabelElement;
    monthLabel.innerHTML = getI18nInnerHTML({
      en: 'Month:',
      zh_cn: '月：',
      zh_tw: '月：',
    });

    monthElement.value = this.data.month;
    monthElement.type = 'text';
    const onMonthChanged = () => {
      this.data.month = parseInt(monthElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    monthElement.onchange = onMonthChanged;
    monthElement.onblur = onMonthChanged;

    span.appendChild(monthLabel);
    span.appendChild(monthElement);

    const dayLabel = createElement('label') as HTMLLabelElement;
    dayLabel.innerHTML = getI18nInnerHTML({
      en: 'Day:',
      zh_cn: '日：',
      zh_tw: '日：',
    });

    dayElement.value = this.data.day;
    dayElement.type = 'text';
    const onDayChanged = () => {
      this.data.day = parseInt(dayElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    dayElement.onchange = onDayChanged;
    dayElement.onblur = onDayChanged;

    span.appendChild(dayLabel);
    span.appendChild(dayElement);
  };

  /** OK
   * 初始化表格下方的核心控件
   */
  protected initCoreElementsAfterTable = (): void => {};

  /** OK
   *
   * @param exhaustibleItem
   * @param questionCount
   * @param onlyMentalArithmetic
   * @param questionRowsArray
   * @param answerRowsArray
   */
  private fillExhaustibleList(
    exhaustibleItem: ExhaustibleItemType,
    info: MathStageInfo,
    onlyMentalArithmetic: boolean,
    // kind: string,
    // countPerRow: number,
    questionRowsArray: Array<RowsInfo>,
    answerRowsArray: Array<RowsInfo>,
  ) {
    const { getIntegerRandom } = this;

    const {
      // kind,
      catalog,
      // scope,
      rows,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
      // independentPagination,
      textStyle,
    } = info;
    const questionCount = countPerRow * rows;

    // const { kind, list, countPerSet, rowsOccupied, countPerRow, rowCountPerPage } = exhaustibleItem;
    const { list, countPerSet } = exhaustibleItem;
    const listJson = JSON.stringify(list);

    const itemList: Array<QuestionAndAnswerType> = [];
    let listClone: Array<QuestionAndAnswerType>;
    const fullSetCount = Math.floor(questionCount / countPerSet);
    for (let fullSetLoop = 0; fullSetLoop < fullSetCount; ++fullSetLoop) {
      listClone = JSON.parse(listJson);
      for (let itemLoop = countPerSet; itemLoop > 0; --itemLoop) {
        const currentIndex = getIntegerRandom(1, itemLoop) - 1;
        itemList.push(listClone.splice(currentIndex, 1)[0]);
      }
    }

    const remainingCount = questionCount - countPerSet * fullSetCount;
    if (remainingCount) {
      listClone = JSON.parse(listJson);
      let listRemainingCount = listClone.length;
      for (let itemLoop = remainingCount; itemLoop > 0; --itemLoop) {
        const currentIndex = getIntegerRandom(1, listRemainingCount--) - 1;
        itemList.push(listClone.splice(currentIndex, 1)[0]);
      }
    }

    // console.log(list.length , itemList.length, questionCount);
    const rowCountPerPageStr = rowCountPerPage.toString();
    const questionRows: Array<HTMLDivElement> = [];
    const answerRows: Array<HTMLDivElement> = [];
    const questionRowCount = questionCount / countPerRow;
    for (let index = 0; index < questionRowCount; ++index) {
      const offset = countPerRow * index;
      const questionElementArray: Array<HTMLElement> = [];
      const answerElementArray: Array<HTMLElement> = [];
      for (let subIndex = 0; subIndex < countPerRow; ++subIndex) {
        const item = itemList[subIndex + offset];
        // console.log(subIndex, offset, subIndex + offset);

        // this.fillElementList(onlyMentalArithmetic, item, kind, countPerRow, questionElementArray, answerElementArray);
        this.fillElementList(onlyMentalArithmetic, item, questionElementArray, answerElementArray);
      }

      this.fillRowsArray(
        rowCountPerPageStr,
        textStyle,
        questionElementArray,
        questionRows,
        answerElementArray,
        answerRows,
      );
    }

    questionRowsArray.push({ rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied, rows: answerRows });
  }

  private fillRowsArray(
    rowCountPerPageStr: string,
    textStyle: string,
    questionElementArray: HTMLElement[],
    questionRows: HTMLDivElement[],
    answerElementArray: HTMLElement[],
    answerRows: HTMLDivElement[],
  ) {
    if (this.data.onlyMentalArithmetic) {
      rowCountPerPageStr = this.defaultRowCountPerPage.toString();
    }

    const questionRow = createElement('row') as HTMLDivElement;
    questionRow.setAttribute('row-count-per-page', rowCountPerPageStr);
    questionElementArray.forEach(cell => questionRow.appendChild(cell));
    questionRows.push(questionRow);

    const answerRow = createElement('row') as HTMLDivElement;
    answerRow.setAttribute('row-count-per-page', rowCountPerPageStr);
    answerElementArray.forEach(cell => answerRow.appendChild(cell));
    answerRows.push(answerRow);

    if (textStyle.length) {
      questionRow.setAttribute('style', textStyle);
      answerRow.setAttribute('style', textStyle);
    }
  }

  /** OK
   *
   * @param info
   * @param kindArray
   * @param buttonList
   */
  private addCommonItem(
    info: MathStageInfo,
    kindArray: string[],
    buttonList: { nameI18n: I18nable; info: MathStageInfo }[],
  ) {
    const {
      // kind,
      catalog,
      scope,
      rows,
      independentPagination,
      textStyle,
      countPerRow,
      rowsOccupied,
      rowCountPerPage,
    } = info;
    const kind = `${catalog}_${scope}`;
    kindArray.push(kind);
    buttonList.push({
      nameI18n: getI18nableWithSameContent(scope),
      info: {
        kind,
        catalog,
        scope,
        rows,
        independentPagination,
        textStyle,
        countPerRow,
        rowsOccupied,
        rowCountPerPage,
      },
    });
  }

  /** OK
   *
   * @param label
   * @param buttonList
   * @param usableList
   * @returns
   */
  private appendUsableItem(
    label: string,
    buttonList: { nameI18n: I18nable; info: MathStageInfo }[],
    usableList: {
      strongI18n: I18nable;
      buttonList: Array<{ nameI18n: I18nable; info: MathStageInfo }>;
    }[],
  ) {
    let strongI18n = getI18nableWithSameContent(label);
    // usableList.push({ strongI18n, buttonList: buttonList.splice(0, buttonList.length) });
    usableList.push({
      strongI18n,
      buttonList: JSON.parse(JSON.stringify(buttonList)),
    });
    return strongI18n;
  }
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;
