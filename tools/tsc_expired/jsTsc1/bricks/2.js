"use strict";
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
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  /** OK
   * 构造方法
   */
  function BrickCore() {
    var _this = this;
    var NOW = new Date();
    _this = _super.call(this, {
      onlyMentalArithmetic: false,
      pageSubjectFontSize: "22px",
      questionFontSize: "16px",
      // innerLineStyle: 'border:2px dotted #aaa;',
      // outerLineStyle: 'border:1px solid #aaa;',
      // 1px solid #555555;
      // 以下三项不放入本地缓存中
      year: NOW.getFullYear().toString(),
      month: (NOW.getMonth() + 1).toString(),
      day: NOW.getDate().toString(),
    }, {}) || this;
    _this.idOrClassPrefix = "brickPageMathStage";
    _this.updateOtherDataLevel3 = function (newData) {
      var onlyMentalArithmetic = newData.onlyMentalArithmetic,
        pageSubjectFontSize = newData.pageSubjectFontSize,
        questionFontSize = newData.questionFontSize;
      var _a = _this,
        data = _a.data,
        onlyMentalArithmeticRadioArray = _a.onlyMentalArithmeticRadioArray,
        pageSubjectFontSizeElement = _a.pageSubjectFontSizeElement,
        questionFontSizeElement = _a.questionFontSizeElement;
      data.onlyMentalArithmetic = onlyMentalArithmetic;
      data.pageSubjectFontSize = pageSubjectFontSize;
      data.questionFontSize = questionFontSize;
      // data.innerLineStyle = innerLineStyle;
      // data.outerLineStyle = outerLineStyle;
      onlyMentalArithmeticRadioArray[onlyMentalArithmetic ? 1 : 0].checked =
        true;
      pageSubjectFontSizeElement.value = pageSubjectFontSize;
      questionFontSizeElement.value = questionFontSize;
      // innerLineStyleElement.value = innerLineStyle;
      // outerLineStyleElement.value = outerLineStyle;
      // data.year = year;
      // data.month = month;
      // data.day = day;
    };
    _this.initExhaustibleAMultiplyBInfo = function () {
      var exhaustibleAMultiplyBInfo = _this.exhaustibleAMultiplyBInfo;
      var aMultiplyBMaybeCarryArray =
          exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryArray,
        aMultiplyBMaybeNotCarryArray =
          exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryArray,
        aMultiplyBMaybeDebitMinusArray =
          exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusArray,
        aMultiplyBMaybeNotDebitMinusArray =
          exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusArray;
      for (var a = 1; a < 10; ++a) {
        for (var b = 1; b < 10; ++b) {
          var aMultiplyB = a * b;
          var digits = aMultiplyB % 10;
          // const item = { A: a, B: b, aMultiplyB, aMultiplyBStr: `${a}×${b}` };
          var item = { A: a, B: b, aMultiplyB: aMultiplyB };
          if (digits > 0) {
            aMultiplyBMaybeCarryArray.push(item);
            // // 被减数个位为0时，不退位减时，减数必须个位也为0。这里特意避开这类情况
            // aMultiplyBMaybeNotDebitMinusArray.push(item);
          }
          if (digits < 9) {
            if (aMultiplyB > 9) {
              aMultiplyBMaybeDebitMinusArray.push(item);
            }
            // // 第一个加数个位为9时，如需不进位加，另一个加数个位必须为0。这里特意避开这类情况。
            // aMultiplyBMaybeNotCarryArray.push(item);
          }
          aMultiplyBMaybeNotDebitMinusArray.push(item);
          aMultiplyBMaybeNotCarryArray.push(item);
        }
      }
      exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryMaxIndex =
        aMultiplyBMaybeCarryArray.length - 1;
      exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryMaxIndex =
        aMultiplyBMaybeNotCarryArray.length - 1;
      exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusMaxIndex =
        aMultiplyBMaybeDebitMinusArray.length - 1;
      exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusMaxIndex =
        aMultiplyBMaybeNotDebitMinusArray.length - 1;
    };
    _this.initPlusOrSubtractDictionaryNotGreatThan100Array = function () {
      for (var a = 0; a <= 100; ++a) {
        var aDigits = a % 10;
        var addendWithCarryArray = [];
        var addendWithoutCarryArray = [];
        var subtractorWithDebitMinusArray = [];
        var subtractorWithoutDebitMinusArray = [];
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
        var addendMax = 100 - a;
        var subtractorMax = a;
        var bMax = Math.max(addendMax, subtractorMax);
        var bDigitMinWhenCarry = Math.max(1, 10 - aDigits);
        for (var b = 0; b <= bMax; ++b) {
          var bDigits = b % 10;
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
        _this.plusOrSubtractDictionaryNotGreatThan100Array.push({
          addendWithCarryArray: addendWithCarryArray,
          addendWithoutCarryArray: addendWithoutCarryArray,
          subtractorWithDebitMinusArray: subtractorWithDebitMinusArray,
          subtractorWithoutDebitMinusArray: subtractorWithoutDebitMinusArray,
          addendWithCarryMaxIndex: addendWithCarryArray.length - 1,
          addendWithoutCarryMaxIndex: addendWithoutCarryArray.length - 1,
          subtractorWithDebitMinusMaxIndex:
            subtractorWithDebitMinusArray.length - 1,
          subtractorWithoutDebitMinusMaxIndex:
            subtractorWithoutDebitMinusArray.length - 1,
        });
      }
    };
    _this.initExhaustibleArray = function () {
      _this.fillExhaustibleArray1();
      _this.fillExhaustibleArray2();
      _this.fillExhaustibleArray3();
      _this.fillExhaustibleArray4();
      _this.fillExhaustibleArray5();
    };
    _this.exhaustibleAMultiplyBInfo = {
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
    _this.fillExhaustibleArray1 = function () {
      var catalog = "A+B=C";
      var exhaustibleArray = _this.exhaustibleArray;
      // const rowCountPerPage = 25;
      // const countPerRow = 5;
      // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
      ["1-5", "0-5", "0-10", "0-20"].forEach(function (scope) {
        var segArray = scope.split("-");
        var min = parseInt(segArray[0], 0);
        var max = parseInt(segArray[1], 0);
        // const lpad = max < 10;
        var list = [];
        // result也要满足min-max范围
        for (var a = min; a <= max; ++a) {
          var bMax = max - a;
          for (var b = min; b <= bMax; ++b) {
            var result = a + b;
            var commonHtml = "".concat(a, " + ").concat(b, " = ").replace(
              / /g,
              "<i> </i>",
            );
            var question = "<p>".concat(commonHtml, "</p>");
            // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
            var answer = "<p>".concat(commonHtml, '<answer chars="2">').concat(
              result,
              "</answer></p>",
            );
            list.push({
              question: question,
              questionFull: question,
              answer: answer,
              answerFull: answer,
            });
          }
        }
        exhaustibleArray.push({
          kind: "".concat(catalog, "_").concat(scope),
          list: list,
          countPerSet: list.length,
        });
      });
    };
    /** OK
     * A-B=C
     */
    _this.fillExhaustibleArray2 = function () {
      var catalog = "A-B=C";
      var exhaustibleArray = _this.exhaustibleArray;
      // const rowCountPerPage = 25;
      // const countPerRow = 5;
      // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
      ["1-5", "0-5", "0-10", "0-20"].forEach(function (scope) {
        var segArray = scope.split("-");
        var min = parseInt(segArray[0], 0);
        var max = parseInt(segArray[1], 0);
        // const lpad = max < 10;
        var list = [];
        // 因result也要满足min-max范围，所以a必须从min * 2开始
        for (var a = min * 2; a <= max; ++a) {
          var bMax = a - min;
          for (var b = min; b <= bMax; ++b) {
            var result = a - b;
            var commonHtml = "".concat(a, " - ").concat(b, " = ").replace(
              / /g,
              "<i> </i>",
            );
            var question = "<p>".concat(commonHtml, "</p>");
            // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
            var answer = "<p>".concat(commonHtml, '<answer chars="2">').concat(
              result,
              "</answer></p>",
            );
            list.push({
              question: question,
              questionFull: question,
              answer: answer,
              answerFull: answer,
            });
          }
        }
        exhaustibleArray.push({
          kind: "".concat(catalog, "_").concat(scope),
          list: list,
          countPerSet: list.length,
        });
      });
    };
    /** OK
     * A+B=C D-E=F
     */
    _this.fillExhaustibleArray3 = function () {
      var catalog = "A+B=C D-E=F";
      var exhaustibleArray = _this.exhaustibleArray;
      // const rowCountPerPage = 25;
      // const countPerRow = 5;
      // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
      ["1-5", "0-5", "0-10", "0-20"].forEach(function (scope) {
        var segArray = scope.split("-");
        var min = parseInt(segArray[0], 0);
        var max = parseInt(segArray[1], 0);
        // const lpad = max < 10;
        var list = [];
        // A+B=C段
        // result也要满足min-max范围
        for (var a = min; a <= max; ++a) {
          var bMax = max - a;
          for (var b = min; b <= bMax; ++b) {
            var result = a + b;
            var commonHtml = "".concat(a, " + ").concat(b, " = ").replace(
              / /g,
              "<i> </i>",
            );
            var question = "<p>".concat(commonHtml, "</p>");
            // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
            var answer = "<p>".concat(commonHtml, '<answer chars="2">').concat(
              result,
              "</answer></p>",
            );
            list.push({
              question: question,
              questionFull: question,
              answer: answer,
              answerFull: answer,
            });
          }
        }
        // D-E=F段
        // 因result也要满足min-max范围，所以a必须从min * 2开始
        for (var a = min * 2; a <= max; ++a) {
          var bMax = a - min;
          for (var b = min; b <= bMax; ++b) {
            var result = a - b;
            var commonHtml = "".concat(a, " - ").concat(b, " = ").replace(
              / /g,
              "<i> </i>",
            );
            var question = "<p>".concat(commonHtml, "</p>");
            // const answer = `<p>${commonHtml}${lpad ? '' : (result < 10 ? ' ' : '')}${result}</p>`;
            var answer = "<p>".concat(commonHtml, '<answer chars="2">').concat(
              result,
              "</answer></p>",
            );
            list.push({
              question: question,
              questionFull: question,
              answer: answer,
              answerFull: answer,
            });
          }
        }
        exhaustibleArray.push({
          kind: "".concat(catalog, "_").concat(scope),
          list: list,
          countPerSet: list.length,
        });
      });
    };
    /** OK
     * A×B=C
     */
    _this.fillExhaustibleArray4 = function () {
      var catalog = "A×B=C";
      var exhaustibleArray = _this.exhaustibleArray;
      // 9×9A和9×9B分别表示小九九和大九九
      // const rowCountPerPage = 25;
      // const countPerRow = 4;
      // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
      ["9×9A", "9×9B"].forEach(function (scope) {
        var bStartFrom1 = scope === "9×9B";
        var list = [];
        for (var a = 1; a < 10; ++a) {
          for (var b = bStartFrom1 ? 1 : a; b < 10; ++b) {
            var result = a * b;
            var commonHtml = "".concat(a, " \u00D7 ").concat(b, " = ").replace(
              / /g,
              "<i> </i>",
            );
            var question = "<p>".concat(commonHtml, "</p>");
            var answer = "<p>".concat(commonHtml).concat(result < 10 ? " " : "")
              .concat(result, "</p>");
            list.push({
              question: question,
              questionFull: question,
              answer: answer,
              answerFull: answer,
            });
          }
        }
        exhaustibleArray.push({
          kind: "".concat(catalog, "_").concat(scope),
          list: list,
          countPerSet: list.length,
        });
      });
    };
    /** OK
     * A+B+C=10/20/n
     */
    _this.fillExhaustibleArray5 = function () {
      var catalog = "A+B+C=10/20/n";
      var exhaustibleArray = _this.exhaustibleArray;
      var scope = "A";
      var list = [];
      // const rowCountPerPage = 25;
      // const countPerRow = 4;
      // const rowsOccupied = this.rowCountPerPage / rowCountPerPage;
      for (var a = 1; a < 10; ++a) {
        for (var b = 1; b < 10; ++b) {
          var c = (20 - a - b) % 10;
          var result = a + b + c;
          var commonHtml = "".concat(a, " + ").concat(b, " + ").concat(c, " = ")
            .replace(/ /g, "<i> </i>");
          var question = "<p>".concat(commonHtml, "</p>");
          var answer = "<p>".concat(commonHtml).concat(result, "</p>");
          list.push({
            question: question,
            questionFull: question,
            answer: answer,
            answerFull: answer,
          });
        }
      }
      exhaustibleArray.push({
        kind: "".concat(catalog, "_").concat(scope),
        list: list,
        countPerSet: list.length,
      });
    };
    /**
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
        pageMarginRight = _b.pageMarginRight,
        list = _b.list,
        // onlyMentalArithmetic,
        pageSubjectFontSize = _b.pageSubjectFontSize,
        questionFontSize = _b.questionFontSize;
      computedData.css =
        "/* common.css */\n* { margin:0;border:0;padding:0; }\n* { box-sizing:border-box; }\n\n/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n@media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; margin:",
          ).concat(pageMarginTop, "mm ").concat(pageMarginRight, "mm ").concat(
            pageMarginBottom,
            "mm ",
          ).concat(
            pageMarginLeft,
            "mm; } }\npage:not(page:last-child){page-break-after:always;}\n\nhtml{font-size:",
          ).concat(
            pageSubjectFontSize.length === 0 ? pageSubjectFontSize : "inherit",
            ";}\n.questionPage row:not(row.subject), .answerPage row:not(row.subject)\n{font-size:",
          ).concat(
            questionFontSize.length === 0 ? questionFontSize : "inherit",
            ";}\n\nbody {width:",
          ).concat(
            MAX_X,
            "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\npage { display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start; }\npage { width:",
          ).concat(MAX_X, "mm;margin-left:").concat(
            pageMarginLeft,
            "mm;margin-top:",
          ).concat(pageMarginTop, "mm; }\npage { height:").concat(
            MAX_Y,
            'mm; }\n\nrow{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;}\nrow.subject{justify-content:flex-start;align-items:flex-start;height:4%;}\nrow[row-count-per-page="6"]{height: 16%;}\nrow[row-count-per-page="8"]{height: 12%;}\nrow[row-count-per-page="10"]{height: 9.6%;}\nrow[row-count-per-page="25"]{height: 3.84%;}\nrow:not(row.subject) cell p{text-align:right;flex:1;}\nrow:not(row.subject) cell p i {font-size:0.8em;}\n\n.questionPage row:not(row.subject) cell p{width:80%;}\n.answerPage row:not(row.subject) cell p{width:96%;}\n.questionPage row:not(row.subject) cell p,\n.answerPage row:not(row.subject) cell p\n{position:relative;}\n\n.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}\n.subjectCenter{flex:1;justify-content:center;align-items:flex-end;flex-direction:row;}\n.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}\n\n.subject{font-size:1em;}\n.subtitle{font-size:0.6em;}\n\nrow.subject cell{display:inline-flex;}\nrow:not(row.subject) cell{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;height:100%;}\n.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]){border-top:1px solid #aaaaaa;}\n.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]):not(:last-child){border-right:1px solid #aaaaaa;}\n\nrow:not(row.subject) cell>div{display:flex;width:100%;align-items:flex-end;justify-content:space-evenly;letter-spacing:0.5em;}\n/*\n\tdiv[edu-flex="3"]{flex:3;}\n  div[edu-flex="4"]{flex:4;}\n  div[edu-flex="6"]{flex:6;}\n  div[edu-flex="8"]{flex:8;}\n  div[edu-flex="9"]{flex:9;}\n  div[edu-flex="10"]{flex:10;}\n*/\nrow:not(row.subject) cell div[edu-flex] p {flex:unset;}\ndiv[edu-flex="3"]{height:73%;} row:not(row.subject) cell div[edu-flex="3"] p {height:33%;}\ndiv[edu-flex="4"]{height:78%;} row:not(row.subject) cell div[edu-flex="4"] p {height:25%;}\ndiv[edu-flex="6"]{height:84%;} row:not(row.subject) cell div[edu-flex="6"] p {height:16.6%;}\ndiv[edu-flex="8"]{height:86%;} row:not(row.subject) cell div[edu-flex="8"] p {height:12.5%;}\ndiv[edu-flex="9"]{height:88%;} row:not(row.subject) cell div[edu-flex="9"] p {height:11.1%;}\ndiv[edu-flex="10"]{height:88%;} row:not(row.subject) cell div[edu-flex="10"] p {height:10%;}\np.debit{top:-0.4em;}\ndiv[edu-flex="4"] p.debit {top:0.1em;}\n\nrow:not(row.subject) cell div hr {margin-bottom:5%;}\n\ncell answer-option{display:flex;height:100%;flex-direction:column;justify-content:flex-end;align-items:flex-end;}\nanswer-option:not(:last-child){border-right:1px solid #ff00ff;}\nanswer-option[edu-chars="2"]{width:2em;}\nanswer-option[edu-chars="3"]{width:3em;}\nanswer-option[edu-chars="4"]{width:4em;}\nanswer-option[edu-chars="5"]{width:5em;}\nanswer-option[edu-chars="6"]{width:6em;}\nanswer-option[edu-chars="7"]{width:7em;}\nanswer-option[edu-chars="8"]{width:8em;}\nanswer-option[edu-chars="9"]{width:9em;}\n\nanswer-option p{display:flex;width:100%;justify-content:flex-end;align-items:flex-end;}\noperator{display:inline-block;width:1em;text-align:left;}\nnumber{flex:1;}\ncarry{color:#ff0000;font-size:0.5em;position:absolute;bottom:0.15em;}\n\n.questionPage row:not(row.subject) cell hr{width:80%;border:0;border-bottom:1px dashed #aaaaaa;}\n.answerPage row:not(row.subject) cell hr{width:100%;border:0;border-bottom:1px solid #555555;}\n.answerPage row:not(row.subject) cell hr.step{border-bottom:1px solid #ff00ff;}\n\ncarry[edu-digit="tens"]{right:1.3em;}\ncarry[edu-digit="hundreds"]{right:3.4em;}\ncarry[edu-digit="thousands"]{right:5.1em;}\ncarry[edu-digit="ten-thousands"]{right:7.9em;}\ncarry[edu-digit="hundred-thousands"]{right:10.1em;}\ncarry[edu-digit="millions"]{right:12.3em;}\ncarry[edu-digit="ten-millions"]{right:14.5em;}\ncarry[edu-digit="billions"]{right:16.7em;}\ncarry[edu-digit="ten-billions"]{right:18.9em;}\ncarry[edu-digit="hundrend-billions"]{right:21.1em;}\ncarry[edu-digit="thousands-billions"]{right:23.3em;}\n\nanswer{display:inline-block;}\nanswer[chars="1"]{width:0.5em;}\nanswer[chars="2"]{width:1.0em;}\nanswer[chars="3"]{width:1.5em;}\nanswer[chars="4"]{width:2.0em;}\nanswer[chars="5"]{width:2.5em;}\nanswer[chars="6"]{width:3.0em;}\nanswer[chars="7"]{width:3.5em;}\nanswer[chars="8"]{width:4.0em;}\nanswer[chars="9"]{width:4.5em;}\nanswer[chars="10"]{width:5.0em;}\nanswer[chars="11"]{width:5.5em;}\nanswer[chars="12"]{width:6.0em;}\nanswer[chars="13"]{width:6.5em;}\nanswer[chars="14"]{width:7.0em;}\nanswer[chars="15"]{width:7.5em;}\n\ndebit[edu-digit="digit"]{right:0.3em;}\ndebit[edu-digit="tens"]{right:1.2em;}\ndebit[edu-digit="hundreds"]{right:2.3em;}\ndebit{position:absolute;letter-spacing:0;width:1em;height:100%;display:inline-block;}\n\n/*\ndebit{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;position:absolute;letter-spacing:0;}\ndebit-number, debit-circle{display:flex;align-items:flex-end;justify-content:center;flex-direction:row;}\ndebit-number{color:#aaa;font-size:0.8em;align-items:flex-end;flex:3;}\ndebit-circle{color:#ff0000;font-size:2em;align-items:center;flex:1;}\n*/\n\ndebit-number, debit-circle{text-align:center;width:100%;height:100%;position:absolute;display:block;}\ndebit-number{color:#aaa;font-size:0.8em;top:10%;height:50%;z-index:1;}\ndebit-circle{color:#ff0000;font-size:2em;height:25%;top:-0.2em;}\n\np[edu-right-char="1"]{padding-right:1em;}\np[edu-right-char="2"]{padding-right:2em;}\np[edu-right-char="3"]{padding-right:3em;}\np[edu-right-char="4"]{padding-right:4em;}\np[edu-right-char="5"]{padding-right:5em;}\np[edu-right-char="6"]{padding-right:6em;}\np[edu-right-char="7"]{padding-right:7em;}\np[edu-right-char="8"]{padding-right:8em;}\np[edu-right-char="9"]{padding-right:9em;}\n\t\t',
          );
      var NOW = new Date();
      var LANG = getCurrentLang();
      var i18nSubject = {
        en: "Five minute pass",
        zh_cn: "五分钟闯关",
        zh_tw: "五分鐘闖關",
      };
      var i18nSeparator = {
        en: "_",
        zh_cn: "：",
        zh_tw: "：",
      };
      var i18nSubtitlePrefix = {
        en: "____ ____, ",
        zh_cn: "",
        zh_tw: "",
      };
      var i18nSubtitlePostfix = {
        en: "",
        zh_cn: "年____月____日",
        zh_tw: "年____月____日",
      };
      var i18nAnswerFlag = {
        en: "Answer",
        zh_cn: "答案",
        zh_tw: "答案",
      };
      var _c = _this.data, year = _c.year, month = _c.month, day = _c.day;
      var i18nSubtitle = {
        en: '<span class="subtitleDay">'.concat(
          day,
          '</span> <span class="subtitleMonth">',
        ).concat(month, '</span>, <span class="subtitleYear">').concat(
          year,
          "</span>",
        ),
        zh_cn: '<span class="subtitleYear">'.concat(
          year,
          '</span>\u5E74<span class="subtitleMonth">',
        ).concat(month, '</span>\u6708<span class="subtitleDay">').concat(
          day,
          "</span>\u65E5",
        ),
        zh_tw: '<span class="subtitleYear">'.concat(
          year,
          '</span>\u5E74<span class="subtitleMonth">',
        ).concat(month, '</span>\u6708<span class="subtitleDay">').concat(
          day,
          "</span>\u65E5",
        ),
      };
      // const i18nCopies = {
      // 	en: ' copies',
      // 	zh_cn: '份',
      // 	zh_tw: '份',
      // };
      var HTML_SUBJECT = '<span class="subject">'.concat(
        i18nSubject[LANG],
        "&nbsp;</span>&nbsp;",
      );
      // const HTML_SUBTITLE = `<span class="subtitle">${i18nSubtitlePrefix[LANG]}${NOW.getFullYear()}${i18nSubtitlePostfix[LANG]}</span>`;
      var HTML_SUBTITLE = '<div class="subtitle">'.concat(
        i18nSubtitle[LANG],
        "</div>",
      );
      var titlePostfix = "_".concat(NOW.getFullYear()).concat(
        "0".concat((NOW.getMonth() + 1).toString()).substr(-2),
      ).concat("0".concat(NOW.getDate().toString()).substr(-2)).concat(
        "_".concat("0".concat(NOW.getHours().toString()).substr(-2)).concat(
          "0".concat(NOW.getMinutes().toString()).substr(-2),
        ).concat("0".concat(NOW.getSeconds().toString()).substr(-2)),
        list.length < 4
          ? "_".concat(
            list.map(function (_a) {
              var kind = _a.kind;
              return kind;
            }).join("_and_"),
          )
          : "",
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
      var en = "".concat(FILENAME_POSTFIX, "mathStage_").concat(titlePostfix);
      var zh_cn = "".concat(
        FILENAME_POSTFIX,
        "\u6570\u5B66\u4E94\u5206\u949F\u95EF\u5173_",
      ).concat(titlePostfix);
      var zh_tw = "".concat(
        FILENAME_POSTFIX,
        "\u6578\u5B78\u4E94\u5206\u9418\u95D6\u95DC_",
      ).concat(titlePostfix);
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      var pageSubjectRowLeftHtml =
        '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
      var pageSubjectRowCenterHtml = '<cell class="subjectCenter">'.concat(
        HTML_SUBJECT,
      ).concat(HTML_SUBTITLE, "</cell>");
      var questionPageSubjectRowRightHtml =
        '<cell class="subjectRight">~reporterPageIndex~/~reporterPageCount~</cell>';
      var answerPageSubjectRowRightHtml = '<cell class="subjectRight">'.concat(
        i18nAnswerFlag[LANG],
        "~reporterPageIndex~/~reporterPageCount~</cell>",
      );
      var pageSubjectRowHtmlStart = '<row class="subject">'.concat(
        pageSubjectRowLeftHtml,
      ).concat(pageSubjectRowCenterHtml);
      var questionPageSubjectRowHtml = "".concat(pageSubjectRowHtmlStart)
        .concat(questionPageSubjectRowRightHtml, "</row>");
      var answerPageSubjectRowHtml = "".concat(pageSubjectRowHtmlStart).concat(
        answerPageSubjectRowRightHtml,
        "</row>",
      );
      var questionPageStartHtml = '<page class="questionPage">'.concat(
        questionPageSubjectRowHtml,
      );
      var answerPageStartHtml = '<page class="answerPage">'.concat(
        answerPageSubjectRowHtml,
      );
      computedData.html = _this.getReportHtml(
        questionPageStartHtml,
        answerPageStartHtml,
      );
    };
    /** OK
     *
     * @param questionPageStartHtml
     * @param answerPageStartHtml
     * @returns
     */
    _this.getReportHtml = function (
      questionPageStartHtml,
      answerPageStartHtml,
    ) {
      var list = _this.data.list;
      // TODO(@anqi) 增加页面级参数：预设年月日（各一个文本框，默认空，填写后写入报表中）
      // 副标题与主标题合并到同一行中，占页面2行
      // 当全部口算时，无论是问题行，还是答案行，都只占2行。
      // 每页行数（从排版角度）：9行/问 * 6问 + 3行 = 57行 => 8行/问 * 6问 + 2行 = 50行
      // 每问根据kind，可决定其占用行数。每种类型的题目，根据countPerRow，将题目组合成row，再加入page中
      // const questionElementArray: Array<HTMLDivElement | SVGElement> = [];
      // const answerElementArray: Array<HTMLDivElement | SVGElement> = [];
      var questionRowsArray = [];
      var answerRowsArray = [];
      var questionHtml = "";
      var answerHtml = "";
      var questionPageIndex = 0;
      var answerPageIndex = 0;
      // 先计算独立分页项
      list.filter(function (_a) {
        var independentPagination = _a.independentPagination;
        return independentPagination;
      }).forEach(function (info) {
        _this.appendReportElements(info, questionRowsArray, answerRowsArray);
      });
      questionRowsArray.forEach(function (_a) {
        var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
        questionHtml += _this.getIndependentPaginationHtml(
          rowsOccupied,
          rows,
          questionPageStartHtml,
          questionPageIndex,
        );
      });
      answerRowsArray.forEach(function (_a) {
        var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
        answerHtml += _this.getIndependentPaginationHtml(
          rowsOccupied,
          rows,
          answerPageStartHtml,
          answerPageIndex,
        );
      });
      questionPageIndex = questionHtml.split("</page>").length - 1;
      answerPageIndex = answerHtml.split("</page>").length - 1;
      // 再计算非独立分页项
      questionRowsArray.length = 0;
      answerRowsArray.length = 0;
      list.filter(function (_a) {
        var independentPagination = _a.independentPagination;
        return !independentPagination;
      }).forEach(function (info) {
        _this.appendReportElements(info, questionRowsArray, answerRowsArray);
      });
      questionHtml += _this.getDependentPagingHtml(
        questionRowsArray,
        questionPageStartHtml,
        questionPageIndex,
      );
      answerHtml += _this.getDependentPagingHtml(
        answerRowsArray,
        answerPageStartHtml,
        answerPageIndex,
      );
      var questionPageCount = (questionHtml.split("</page>").length - 1)
        .toString();
      var answerPageCount = (answerHtml.split("</page>").length - 1).toString();
      return questionHtml.replace(/~reporterPageCount~/g, questionPageCount)
        .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
    };
    /** OK
     *
     * @param rowsOccupied
     * @param rows
     * @param pageStartHtml
     * @returns
     */
    _this.getIndependentPaginationHtml = function (
      rowsOccupied,
      rows,
      pageStartHtml,
      pageIndex,
    ) {
      if (!rows.length) {
        return "";
      }
      if (_this.data.onlyMentalArithmetic) {
        rowsOccupied = _this.defaultRowsOccupied;
      }
      var smallRowCountPerPage = _this.smallRowCountPerPage;
      var html = pageStartHtml.replace(
        "~reporterPageIndex~",
        (++pageIndex).toString(),
      );
      var remainingRowCount = smallRowCountPerPage;
      rows.forEach(function (row) {
        if (rowsOccupied > remainingRowCount) {
          html += "</page>".concat(
            pageStartHtml.replace(
              "~reporterPageIndex~",
              (++pageIndex).toString(),
            ),
          );
          remainingRowCount = smallRowCountPerPage;
        }
        html += row.outerHTML;
        // remainingRowCount -= rowsOccupied;
        remainingRowCount = _this.formatCentile(
          remainingRowCount - rowsOccupied,
        );
      });
      html += "</page>";
      return html;
    };
    /** */
    _this.smallRowCountPerPage = 48;
    _this.defaultRowCountPerPage = 25;
    _this.defaultRowsOccupied = _this.smallRowCountPerPage /
      _this.defaultRowCountPerPage;
    /** OK
     *
     * @param rowArray
     * @param pageStartHtml
     * @returns
     */
    _this.getDependentPagingHtml = function (
      rowArray,
      pageStartHtml,
      pageIndex,
    ) {
      if (!rowArray.length) {
        return "";
      }
      var forceSetRowsOccupiedToDefault = _this.data.onlyMentalArithmetic;
      var _a = _this,
        smallRowCountPerPage = _a.smallRowCountPerPage,
        defaultRowsOccupied = _a.defaultRowsOccupied;
      // console.log('getDependentPagingHtml()', JSON.stringify(rowArray), pageStartHtml, pageIndex, smallRowCountPerPage);
      var html = pageStartHtml.replace(
        "~reporterPageIndex~",
        (++pageIndex).toString(),
      );
      var remainingRowCount = smallRowCountPerPage;
      rowArray.forEach(function (_a) {
        var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
        // console.log('rowsOccupied:', rowsOccupied);
        if (forceSetRowsOccupiedToDefault) {
          rowsOccupied = defaultRowsOccupied;
        }
        rows.forEach(function (row) {
          // console.log(rowsOccupied, remainingRowCount, rowsOccupied > remainingRowCount);
          if (rowsOccupied > remainingRowCount) {
            html += "</page>".concat(
              pageStartHtml.replace(
                "~reporterPageIndex~",
                (++pageIndex).toString(),
              ),
            );
            remainingRowCount = smallRowCountPerPage;
          }
          html += row.outerHTML;
          // remainingRowCount -= rowsOccupied;
          remainingRowCount = _this.formatCentile(
            remainingRowCount - rowsOccupied,
          );
        });
      });
      html += "</page>";
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
    _this.plusOrSubtractDictionaryNotGreatThan100Array = [];
    _this.getAddendWithCarry = function (other) {
      var plusOrSubtractDictionaryNotGreatThan100 =
        _this.plusOrSubtractDictionaryNotGreatThan100Array[other];
      // console.log({ feature: 'getAddendWithCarry', plusOrSubtractDictionaryNotGreatThan100 });
      if (typeof plusOrSubtractDictionaryNotGreatThan100 === "undefined") {
        return 0;
      }
      return plusOrSubtractDictionaryNotGreatThan100
        .addendWithCarryArray[
        _this.getIntegerRandom(
          0,
          plusOrSubtractDictionaryNotGreatThan100.addendWithCarryMaxIndex,
        )
      ];
    };
    _this.getAddendWithoutCarry = function (other) {
      var plusOrSubtractDictionaryNotGreatThan100 =
        _this.plusOrSubtractDictionaryNotGreatThan100Array[other];
      if (typeof plusOrSubtractDictionaryNotGreatThan100 === "undefined") {
        return 0;
      }
      var array =
        plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryArray;
      var maxIndex =
        plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryMaxIndex;
      if (maxIndex === 0) {
        return array[0];
      }
      var getIntegerRandom = _this.getIntegerRandom;
      return array[
        getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)
      ];
    };
    _this.getSubtractorWithDebitMinus = function (minuend) {
      var plusOrSubtractDictionaryNotGreatThan100 =
        _this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
      if (typeof plusOrSubtractDictionaryNotGreatThan100 === "undefined") {
        return 0;
      }
      return plusOrSubtractDictionaryNotGreatThan100
        .subtractorWithDebitMinusArray[
        _this.getIntegerRandom(
          0,
          plusOrSubtractDictionaryNotGreatThan100
            .subtractorWithDebitMinusMaxIndex,
        )
      ];
    };
    _this.getSubtractorWithoutDebitMinus = function (minuend) {
      var plusOrSubtractDictionaryNotGreatThan100 =
        _this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
      if (typeof plusOrSubtractDictionaryNotGreatThan100 === "undefined") {
        return 0;
      }
      // return plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusArray[this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusMaxIndex)];
      var array = plusOrSubtractDictionaryNotGreatThan100
        .subtractorWithoutDebitMinusArray;
      var maxIndex = plusOrSubtractDictionaryNotGreatThan100
        .subtractorWithoutDebitMinusMaxIndex;
      if (maxIndex === 0) {
        return array[0];
      }
      var getIntegerRandom = _this.getIntegerRandom;
      return array[
        getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)
      ];
    };
    _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3 =
      '<div edu-flex="3"></div>';
    _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4 =
      '<div edu-flex="4"></div>';
    _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6 =
      '<div edu-flex="6"></div>';
    _this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8 =
      '<div edu-flex="8"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
    // private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic6 =
    // '<div edu-flex="6"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
    _this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4 =
      '<div edu-flex="4"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p></answer-option></div>';
    _this.questionElementHtmlAppendStart8 = '<div edu-flex="8">';
    _this.questionElementHtmlAppendStart6 = '<div edu-flex="6">';
    _this.questionElementHtmlAppendStart4 = '<div edu-flex="4">';
    _this.questionElementHtmlAppendStart3 = '<div edu-flex="3">';
    _this.getSimleHtmlOfAMultiplyB = function (A, B, result) {
      return "<p><number>".concat(
        A,
        "</number></p><p><operator>\u00D7</operator><number>",
      ).concat(B, "</number></p><hr><p><number>").concat(
        result,
        "</number></p>",
      );
    };
    _this.isOnlyFirstIsNotZero = function (numberal) {
      var str = numberal.toString();
      var length = str.length;
      while (length) {
        var lastChar = str.substring(length - 1, length);
        if (lastChar === "0") {
          str = str.substring(0, length - 1);
          --length;
        } else {
          break;
        }
      }
      return length <= 1;
    };
    _this.eduDigitArray = [
      "tens",
      "hundreds",
      "thousands",
      "ten-thousands",
      "hundred-thousands",
      "millions",
      "ten-millions",
      "billions",
      "ten-billions",
      "hundrend-billions",
      "thousands-billions",
    ];
    _this.fillElementArrayOfAPlusBThenC = function (
      has,
      questionElementHtmlAppend,
      onlyMentalArithmetic,
      questionElementArray,
      answerElementArray,
      withBrackets,
    ) {
      var _a;
      if (withBrackets === void 0) withBrackets = false;
      var a, b, c, d;
      (_a = _this.getMaybeCarryTwiceNumbers(has),
        a = _a.a,
        b = _a.b,
        c = _a.c,
        d = _a.d);
      var A = a;
      var B = b;
      var C = c;
      var result = d; // A + B + C;
      var charsStr = (result.toString().length + 1).toString();
      var commonHtml = withBrackets
        ? "".concat(C, "<i> </i>+<i> </i>(").concat(A, "<i> </i>+<i> </i>")
          .concat(B, ")<i> </i>=<i> </i>")
        : "".concat(A, "<i> </i>+<i> </i>").concat(B, "<i> </i>+<i> </i>")
          .concat(C, "<i> </i>=<i> </i>");
      var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
        questionElementHtmlAppend,
      ); // .replace(/~charCount~/g, charsStr)
      var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
      if (!onlyMentalArithmetic) {
        var A_B = A + B;
        var aDidits = A % 10;
        var bDidits = B % 10;
        var cDidits = C % 10;
        var abDidits = A_B % 10;
        var tensCarry1 = aDidits + bDidits > 9;
        var tensCarry2 = abDidits + cDidits > 9;
        var tensCarry = aDidits + bDidits + cDidits > 9;
        var aLastTowDigits = A % 100;
        var bLastTowDigits = B % 100;
        var cLastTowDigits = C % 100;
        var abLastTowDigits = A_B % 100;
        var hundredsCarry1 = aLastTowDigits + bLastTowDigits > 99;
        var hundredsCarry2 = abLastTowDigits + cLastTowDigits > 99;
        var hundredsCarry =
          aLastTowDigits + bLastTowDigits + cLastTowDigits > 99;
        var tensCarryHtml1 = tensCarry1
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml1 = hundredsCarry1
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        var tensCarryHtml2 = tensCarry2
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml2 = hundredsCarry2
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        var tensCarryHtml = tensCarry
          ? '<carry edu-digit="tens">'.concat(
            Math.floor((aDidits + bDidits + cDidits) / 10),
            "</carry>",
          )
          : "";
        var hundredsCarryHtml = hundredsCarry
          ? '<carry edu-digit="hundreds">'.concat(
            Math.floor(
              (aLastTowDigits + bLastTowDigits + cLastTowDigits) / 100,
            ),
            "</carry>",
          )
          : "";
        answerElementHtml += _this.questionElementHtmlAppendStart6;
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "<p></p><p><number>".concat(
          A,
          "</number></p><p><operator>+</operator><number>",
        ).concat(B, "</number>").concat(hundredsCarryHtml1).concat(
          tensCarryHtml1,
          "</p><hr><p><number>",
        ).concat(A_B, "</number></p>");
        answerElementHtml += '<hr class="step"/><p></p>';
        answerElementHtml += "<p></p><p><number>".concat(
          A_B,
          "</number></p><p><operator>+</operator><number>",
        ).concat(C, "</number>").concat(hundredsCarryHtml2).concat(
          tensCarryHtml2,
          "</p><hr><p><number>",
        ).concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '"><p></p><p></p>',
        );
        answerElementHtml += "<p><number>".concat(
          A,
          "</number></p><p><operator>+</operator><number>",
        ).concat(B, "</number>").concat(hundredsCarryHtml1).concat(
          tensCarryHtml1,
          "</p><hr><p><number>",
        ).concat(A_B, "</number></p>");
        answerElementHtml += "<p><operator>+</operator><number>".concat(
          C,
          "</number>",
        ).concat(hundredsCarryHtml2).concat(
          tensCarryHtml2,
          "</p><hr><p><number>",
        ).concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '"><p></p><p></p><p></p><p>',
        );
        answerElementHtml += "<number>".concat(A, "</number></p><p><number>")
          .concat(B, "</number></p>");
        answerElementHtml += "<p><operator>+</operator><number>".concat(
          C,
          "</number>",
        ).concat(hundredsCarryHtml).concat(tensCarryHtml, "</p><hr><p><number>")
          .concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
        answerElementHtml += "</div>";
      }
      _this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );
    };
    _this.fillElementArrayOfASubtractBThenC = function (
      has,
      questionElementHtmlAppend,
      onlyMentalArithmetic,
      questionElementArray,
      answerElementArray,
      withBrackets,
    ) {
      var _a, _b;
      if (withBrackets === void 0) withBrackets = false;
      var _c = _this,
        getIntegerRandom = _c.getIntegerRandom,
        getAddendWithCarry = _c.getAddendWithCarry,
        getAddendWithoutCarry = _c.getAddendWithoutCarry,
        getDebitHtml = _c.getDebitHtml,
        getHtmlOfAPlusB = _c.getHtmlOfAPlusB;
      var a, b, c, d;
      if (withBrackets) {
        // A - (B + C)
        if (has) {
          var bTens = getIntegerRandom(2, 8);
          var bDigits = getIntegerRandom(1, 9);
          b = 10 * bTens + bDigits;
          c = _this.getAddendWithCarry(b);
          var bPlusC_1 = b + c;
          if (bPlusC_1 % 10 === 0) {
            a = bPlusC_1 === 100
              ? 100
              : 10 * getIntegerRandom(Math.ceil(bPlusC_1 / 10), 10);
          } else {
            a = bPlusC_1 + getAddendWithCarry(bPlusC_1);
          }
        } else {
          var bTens = getIntegerRandom(2, 8);
          var bDigits = getIntegerRandom(1, 8);
          b = 10 * bTens + bDigits;
          c = _this.getAddendWithoutCarry(b);
          var bPlusC_2 = b + c;
          if (bPlusC_2 % 10 === 0) {
            a = bPlusC_2 === 100
              ? 100
              : 10 * getIntegerRandom(Math.ceil(bPlusC_2 / 10), 10);
          } else {
            a = bPlusC_2 + getAddendWithoutCarry(bPlusC_2);
          }
        }
        d = a - b - c;
        (_a = { a: b, b: c, c: d, d: a },
          a = _a.a,
          b = _a.b,
          c = _a.c,
          d = _a.d);
      } else {
        (_b = _this.getMaybeCarryTwiceNumbers(has),
          a = _b.a,
          b = _b.b,
          c = _b.c,
          d = _b.d);
      }
      var A = d;
      var B = a;
      var C = b;
      var result = c; // A - B - C;
      var charsStr = (A.toString().length + 1).toString();
      var commonHtml = withBrackets
        ? "".concat(A, "<i> </i>-<i> </i>(").concat(B, "<i> </i>+<i> </i>")
          .concat(C, ")<i> </i>=<i> </i>")
        : "".concat(A, "<i> </i>-<i> </i>").concat(B, "<i> </i>-<i> </i>")
          .concat(C, "<i> </i>=<i> </i>");
      var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
        questionElementHtmlAppend,
      ); // .replace(/8/g, charsStr)
      var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
      if (onlyMentalArithmetic) {
        _this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
        return;
      }
      answerElementHtml += _this.questionElementHtmlAppendStart8;
      var aDidits = A % 10;
      var bDidits = B % 10;
      var cDidits = C % 10;
      var aSubstractB = A - B;
      var bPlusC = B + C;
      function doneBPlusCAndThenASubstractIt() {
        var debitHtml = getDebitHtml(A, bPlusC);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += getHtmlOfAPlusB(B, C, bPlusC);
        answerElementHtml += '<hr class="step"/>';
        answerElementHtml += "".concat(debitHtml, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(bPlusC, "</number></p><hr><p><number>").concat(
          result,
          "</number></p>",
        );
        answerElementHtml += "</answer-option>";
      }
      function doneASubstractCSubstractB() {
        var aSubstractC = A - C;
        var debitHtmlStep1 = getDebitHtml(A, C);
        var debitHtmlStep2 = getDebitHtml(aSubstractC, B);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtmlStep1, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr>");
        answerElementHtml += "".concat(debitHtmlStep2, "<p><number>").concat(
          aSubstractC,
          "</number></p><p><operator>-</operator><number>",
        ).concat(B, "</number></p><hr><p><number>").concat(
          result,
          "</number></p>",
        );
        answerElementHtml += "</answer-option>";
      }
      function doneASubstractBSubstractC() {
        var aSubstractB = A - B;
        var debitHtmlStep1 = getDebitHtml(A, B);
        var debitHtmlStep2 = getDebitHtml(aSubstractB, C);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtmlStep1, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr>");
        answerElementHtml += "".concat(debitHtmlStep2, "<p><number>").concat(
          aSubstractB,
          "</number></p><p><operator>-</operator><number>",
        ).concat(B, "</number></p><hr><p><number>").concat(
          result,
          "</number></p>",
        );
        answerElementHtml += "</answer-option>";
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
        var debitHtml1 = getDebitHtml(A, B);
        var debitHtml2 = getDebitHtml(aSubstractB, C);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtml1, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(B, "</number></p><hr><p><number>").concat(
          aSubstractB,
          "</number></p>",
        );
        answerElementHtml += '<hr class="step"/>';
        answerElementHtml += "".concat(debitHtml2, "<p><number>").concat(
          aSubstractB,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr><p><number>").concat(
          result,
          "</number></p>",
        );
        answerElementHtml += "</answer-option>";
        var htmlSubstractTwice = "".concat(
          '<answer-option edu-chars="'.concat(charsStr, '">'),
          "".concat(debitHtml1, "<p><number>").concat(
            A,
            "</number></p><p><operator>-</operator><number>",
          ).concat(B, "</number></p><hr>"),
          "".concat(debitHtml2, "<p><number>").concat(
            aSubstractB,
            "</number></p><p><operator>-</operator><number>",
          ).concat(C, "</number></p><hr><p><number>").concat(
            result,
            "</number></p>",
          ),
          "</answer-option>",
        );
        if (aDidits === cDidits && aDidits !== bDidits) {
          answerElementHtml += htmlSubstractTwice;
          doneASubstractCSubstractB();
        } else if (
          (bDidits + cDidits) % 10 === 0 || aDidits === (bDidits + cDidits) % 10
        ) {
          answerElementHtml += htmlSubstractTwice;
          doneBPlusCAndThenASubstractIt();
        } else {
          doneBPlusCAndThenASubstractIt();
          answerElementHtml += htmlSubstractTwice;
        }
      }
      answerElementHtml += "</div>";
      _this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );
    };
    _this.fillElementArrayOfASubtractBThenPlusC = function (
      has,
      questionElementHtmlAppend,
      onlyMentalArithmetic,
      questionElementArray,
      answerElementArray,
      withBrackets,
    ) {
      if (withBrackets === void 0) withBrackets = false;
      var _a = _this,
        getIntegerRandom = _a.getIntegerRandom,
        getAddendWithCarry = _a.getAddendWithCarry,
        getAddendWithoutCarry = _a.getAddendWithoutCarry,
        getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus,
        getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus,
        getDebitHtml = _a.getDebitHtml,
        getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
      var A, B, C, aSubstractB;
      if (withBrackets) {
        // A - (B - C)
        var bRandom = getIntegerRandom(0, 99);
        var bTens = bRandom > 10
          ? 10
          : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
        if (has) {
          var bDidits = bTens === 10 ? 0 : getIntegerRandom(0, 8);
          B = 10 * bTens + bDidits;
          C = getSubtractorWithDebitMinus(B);
          var bSubstractC = B - C;
          A = bSubstractC +
            (getIntegerRandom(0, 4) && (bSubstractC % 10)
              ? getAddendWithCarry(bSubstractC)
              : getAddendWithoutCarry(bSubstractC));
        } else {
          var bDidits = getIntegerRandom(1, 9);
          B = 10 * Math.min(9, bTens) + bDidits;
          C = getSubtractorWithoutDebitMinus(B);
          var bSubstractC = B - C;
          A = bSubstractC +
            (getIntegerRandom(0, 4) && (bSubstractC % 10)
              ? getAddendWithCarry(bSubstractC)
              : getAddendWithoutCarry(bSubstractC));
        }
        aSubstractB = A - B;
      } else {
        // A - B + C
        var aRandom = getIntegerRandom(0, 99);
        var aTens = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
        if (has) {
          var aDigits_1 = getIntegerRandom(1, aRandom > 5 ? 5 : 8);
          A = 10 * aTens + aDigits_1;
          B = _this.getSubtractorWithDebitMinus(A);
          aSubstractB = A - B;
          C = aRandom > 30
            ? _this.getAddendWithCarry(aSubstractB)
            : _this.getAddendWithoutCarry(aSubstractB);
        } else {
          var aDigits_2 = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
          A = 10 * aTens + aDigits_2;
          B = _this.getSubtractorWithoutDebitMinus(A);
          aSubstractB = A - B;
          C = _this.getAddendWithoutCarry(aSubstractB);
        }
      }
      var result = A - B + C;
      var commonHtml = withBrackets
        ? "".concat(A, "<i> </i>-<i> </i>(").concat(B, "<i> </i>-<i> </i>")
          .concat(C, ")<i> </i>=<i> </i>")
        : "".concat(A, "<i> </i>-<i> </i>").concat(B, "<i> </i>+<i> </i>")
          .concat(C, "<i> </i>=<i> </i>");
      var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
        questionElementHtmlAppend,
      ); // .replace(/~charCount~/g, charsStr)
      var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
      if (onlyMentalArithmetic) {
        _this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
        return;
      }
      var aPlusC = A + C;
      var aDigits = A % 10;
      var bDigits = B % 10;
      var cDigits = C % 10;
      var aLastTowDigits = A % 100;
      var cLastTowDigits = C % 100;
      var acDigits = aPlusC % 10;
      var charsStr = (aPlusC.toString().length + 1).toString();
      answerElementHtml += '<div edu-flex="8">';
      function doneAPlusCSubstractB() {
        var tensCarryHtml = aDigits + cDigits > 9
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml = aLastTowDigits + cLastTowDigits > 99
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        var debitHtmlAPlusCSubstractB = getDebitHtml(aPlusC, B);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        // answerElementHtml += `${getHtmlOfAPlusB(A, C, aPlusC)}`;
        answerElementHtml += "<p><number>".concat(
          A,
          "</number></p><p><operator>+</operator><number>",
        ).concat(C, "</number>").concat(hundredsCarryHtml).concat(
          tensCarryHtml,
          "</p><hr>",
        );
        answerElementHtml += "".concat(debitHtmlAPlusCSubstractB, "<p><number>")
          .concat(aPlusC, "</number></p><p><operator>-</operator><number>")
          .concat(B, "</number></p><hr><p><number>").concat(
            result,
            "</number></p>",
          );
        answerElementHtml += "</answer-option>";
      }
      if (withBrackets) {
        // 算法1：直接按顺序列出两个式子（减法、减法）：B-C、A-(B-C)
        // 最优算法（前提：B与C个位不同）：
        // 如果A大于等于B，且A与B个位相同，先A-B，再(A-B)+C
        // 否则，如果C不是整十数，且A+C为整十数或A+C与B个位相同，则先A+C，再(A+C)-B
        var bSubstractC = B - C;
        var debitHtmlStep1 = getDebitHtml(B, C);
        var debitHtmlStep2 = getDebitHtml(A, bSubstractC);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtmlStep1, "<p><number>").concat(
          B,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr><p><number>").concat(
          bSubstractC,
          "</number></p>",
        );
        answerElementHtml += '<hr class="step"/><p></p>';
        answerElementHtml += "".concat(debitHtmlStep2, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(bSubstractC, "</number></p><hr><p><number>").concat(
          result,
          "</number></p>",
        );
        answerElementHtml += "</answer-option>";
        if (bDigits !== cDigits) {
          if (A >= B && aDigits === bDigits) {
            // (A-B)+C
            var debitHtmlASubstractB = getDebitHtml(A, B);
            answerElementHtml += '<answer-option edu-chars="'.concat(
              charsStr,
              '">',
            );
            answerElementHtml += "".concat(debitHtmlASubstractB, "<p><number>")
              .concat(A, "</number></p><p><operator>-</operator><number>")
              .concat(B, "</number></p><hr><p><number>").concat(
                aSubstractB,
                "</number></p>",
              );
            answerElementHtml += "".concat(
              getHtmlOfAPlusB(aSubstractB, C, result),
            );
            answerElementHtml += "</answer-option>";
          } else if (cDigits && (acDigits === 0 || acDigits === bDigits)) {
            // (A+C)-B
            doneAPlusCSubstractB();
          }
        }
      } else {
        // 算法1：直接按顺序列出两个式子（减法、加法）
        // 算法2：两式合并
        var debitExtendHtmlASubstractB = "".concat(
          getDebitHtml(A, B),
          "<p><number>",
        ).concat(A, "</number></p><p><operator>-</operator><number>").concat(
          B,
          "</number></p><hr>",
        );
        var htmlOfASubstractBPlubC = getHtmlOfAPlusB(aSubstractB, C, result);
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitExtendHtmlASubstractB);
        answerElementHtml += "<p><number>".concat(aSubstractB, "</number></p>");
        answerElementHtml += '<hr class="step"/><p></p>';
        answerElementHtml += "".concat(htmlOfASubstractBPlubC);
        answerElementHtml += "</answer-option>";
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '"><p></p><p></p>',
        );
        answerElementHtml += "".concat(debitExtendHtmlASubstractB);
        answerElementHtml += "".concat(htmlOfASubstractBPlubC);
        answerElementHtml += "</answer-option>";
        // 最优算法：如果B与C个位相同（而A与B个位不同），则先计算C-B，再计算(C-B)+A；否则，若A+C与B个位相同或A+C为整十数，则先计算A+C，再计算(A+C)-B；否则，没有最优算法
        if (bDigits === cDigits && aDigits !== cDigits) {
          // 如果B与C个位相同（而A与B个位不同），则先计算C-B，再计算(C-B)+A；
          var BC = B - C;
          var debitHtml = getDebitHtml(B, C);
          answerElementHtml += '<answer-option edu-chars="'.concat(
            charsStr,
            '"><p></p><p></p>',
          );
          answerElementHtml += "".concat(debitHtml, "<p><number>").concat(
            B,
            "</number></p><p><operator>-</operator><number>",
          ).concat(C, "</number></p><hr>");
          answerElementHtml += "".concat(getHtmlOfAPlusB(BC, A, result));
          answerElementHtml += "</answer-option>";
        } else if (bDigits === acDigits || acDigits === 0) {
          // 否则，若A+C与B个位相同或A+C为整十数，则先计算A+C，再计算(A+C)-B
          doneAPlusCSubstractB();
        }
      }
      answerElementHtml += "</div>";
      _this.fillElementListCore(
        questionElementHtml,
        answerElementHtml,
        questionElementArray,
        answerElementArray,
      );
    };
    _this.fillElementArrayOfAPlusBThenSubtractC = function (
      has,
      questionElementHtmlAppend,
      onlyMentalArithmetic,
      questionElementArray,
      answerElementArray,
      withBrackets,
    ) {
      if (withBrackets === void 0) withBrackets = false;
      var _a = _this,
        getIntegerRandom = _a.getIntegerRandom,
        getDebitHtml = _a.getDebitHtml,
        getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
      var A, B, C;
      if (withBrackets) {
        // A + (B - C)
        var bRandom = getIntegerRandom(0, 99);
        if (has) {
          var bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
          var bDigits_1 = !bRandom
            ? 0
            : getIntegerRandom(bRandom > 5 ? 5 : 1, 8);
          B = 10 * bTens + bDigits_1;
          C = _this.getSubtractorWithDebitMinus(B);
          A = _this.getAddendWithCarry(B - C);
        } else {
          var bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
          var bDigits_2 = !bRandom
            ? 0
            : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
          B = 10 * bTens + bDigits_2;
          C = _this.getSubtractorWithoutDebitMinus(B);
          A = _this.getAddendWithoutCarry(B - C);
        }
      } else {
        // A + B - C
        if (has) {
          var aRandom = getIntegerRandom(0, 99);
          var aTens = getIntegerRandom(0, 9);
          var aDigits_3 = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
          A = 10 * aTens + aDigits_3;
          B = _this.getAddendWithCarry(A);
          C = aRandom > 30
            ? _this.getSubtractorWithDebitMinus(A + B)
            : _this.getSubtractorWithoutDebitMinus(A + B);
        } else {
          var cRandom = getIntegerRandom(0, 99);
          var cTens = getIntegerRandom(2, 10);
          if (!cRandom) {
            C = 10 * cTens;
            A = 10 * getIntegerRandom(1, cTens);
          } else {
            var cDigits_1 = getIntegerRandom(cRandom > 5 ? 5 : 1, 9);
            C = 10 * Math.min(9, cTens) + cDigits_1;
            A = 10 * getIntegerRandom(1, cTens) +
              getIntegerRandom(0, cDigits_1);
          }
          B = C - A;
        }
      }
      var result = A + B - C;
      var commonHtml = withBrackets
        ? "".concat(A, "<i> </i>+<i> </i>(").concat(B, "<i> </i>-<i> </i>")
          .concat(C, ")<i> </i>=<i> </i>")
        : "".concat(A, "<i> </i>+<i> </i>").concat(B, "<i> </i>-<i> </i>")
          .concat(C, "<i> </i>=<i> </i>");
      var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
        questionElementHtmlAppend,
      ); // .replace(/~charCount~/g, charsStr)
      var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
      if (onlyMentalArithmetic) {
        _this.fillElementListCore(
          questionElementHtml,
          answerElementHtml,
          questionElementArray,
          answerElementArray,
        );
        return;
      }
      var AB = A + B;
      var charsStr = (AB.toString().length + 1).toString();
      answerElementHtml += '<div edu-flex="8">';
      var aDigits = A % 10;
      var bDigits = B % 10;
      var cDigits = C % 10;
      var aLastTowDigits = A % 100;
      var bLastTowDigits = B % 100;
      function doneASubstractCPlusB() {
        var AC = A - C;
        var debitHtml = getDebitHtml(A, C);
        var acDigits = AC % 10;
        var bDigits = B % 10;
        var acLastTowDigits = AC % 100;
        var bLastTowDigits = B % 100;
        var tensCarryHtml = acDigits + bDigits > 9
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml = acLastTowDigits + bLastTowDigits > 99
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtml, "<p><number>").concat(
          A,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr>");
        answerElementHtml += "<p><number>".concat(
          AC,
          "</number></p><p><operator>+</operator><number>",
        ).concat(B, "</number>").concat(hundredsCarryHtml).concat(
          tensCarryHtml,
          "</p><hr><p><number>",
        ).concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
      }
      function doneAPlusBSubstractC(twoOption) {
        if (twoOption === void 0) twoOption = false;
        var debitHtmlABSubstractC = getDebitHtml(AB, C);
        if (twoOption) {
          answerElementHtml += '<answer-option edu-chars="'.concat(
            charsStr,
            '">',
          );
          answerElementHtml += "<p></p>".concat(getHtmlOfAPlusB(A, B, AB));
          answerElementHtml += '<hr class="step"/><p></p>';
          answerElementHtml += "".concat(debitHtmlABSubstractC, "<p><number>")
            .concat(AB, "</number></p><p><operator>-</operator><number>")
            .concat(C, "</number></p><hr><p><number>").concat(
              result,
              "</number></p>",
            );
          answerElementHtml += "</answer-option>";
        }
        var tensCarryHtml = aDigits + bDigits > 9
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml = aLastTowDigits + bLastTowDigits > 99
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "<p><number>".concat(
          A,
          "</number></p><p><operator>+</operator><number>",
        ).concat(B, "</number>").concat(hundredsCarryHtml).concat(
          tensCarryHtml,
          "</p><hr>",
        );
        answerElementHtml += "".concat(debitHtmlABSubstractC, "<p><number>")
          .concat(AB, "</number></p><p><operator>-</operator><number>").concat(
            C,
            "</number></p><hr><p><number>",
          ).concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
      }
      function doneBSubstractCThenPlusA(twoOption) {
        if (twoOption === void 0) twoOption = false;
        var BC = B - C;
        var debitHtml = getDebitHtml(B, C);
        var bcDigits = BC % 10;
        var cDigits = C % 10;
        var bcLastTowDigits = BC % 100;
        var cLastTowDigits = C % 100;
        var tensCarryHtml = bcDigits + cDigits > 9
          ? '<carry edu-digit="tens">1</carry>'
          : "";
        var hundredsCarryHtml = bcLastTowDigits + cLastTowDigits > 99
          ? '<carry edu-digit="hundreds">1</carry>'
          : "";
        if (twoOption) {
          answerElementHtml += '<answer-option edu-chars="'.concat(
            charsStr,
            '">',
          );
          answerElementHtml += "".concat(debitHtml, "<p><number>").concat(
            B,
            "</number></p><p><operator>-</operator><number>",
          ).concat(C, "</number></p><hr><p><number>").concat(
            BC,
            "</number></p>",
          );
          answerElementHtml += '<hr class="step"/><p></p>';
          answerElementHtml += "<p><number>".concat(
            BC,
            "</number></p><p><operator>+</operator><number>",
          ).concat(A, "</number>").concat(hundredsCarryHtml).concat(
            tensCarryHtml,
            "</p><hr><p><number>",
          ).concat(result, "</number></p>");
          answerElementHtml += "</answer-option>";
        }
        answerElementHtml += '<answer-option edu-chars="'.concat(
          charsStr,
          '">',
        );
        answerElementHtml += "".concat(debitHtml, "<p><number>").concat(
          B,
          "</number></p><p><operator>-</operator><number>",
        ).concat(C, "</number></p><hr>");
        answerElementHtml += "<p><number>".concat(
          BC,
          "</number></p><p><operator>+</operator><number>",
        ).concat(A, "</number>").concat(hundredsCarryHtml).concat(
          tensCarryHtml,
          "</p><hr><p><number>",
        ).concat(result, "</number></p>");
        answerElementHtml += "</answer-option>";
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
      answerElementHtml += "</div>";
      _this.fillElementListCore(
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
    _this.appendReportElements = function (
      info,
      questionRowsArray,
      answerRowsArray,
    ) {
      var onlyMentalArithmetic = _this.data.onlyMentalArithmetic;
      var kind = info.kind, catalog = info.catalog;
      // 如果onlyMentalArithmetic，那么所有答案都略过计算过程
      // 以下内容可穷举（正好也都可略过计算过程）：0-5，1-5，0-10，9*9（A/B）、A+B+C=10/20
      var filterResult = _this.exhaustibleArray.filter(function (_a) {
        var kindIndicator = _a.kind;
        return kindIndicator === kind;
      });
      if (filterResult.length) {
        _this.fillExhaustibleList(
          filterResult[0],
          info,
          onlyMentalArithmetic,
          questionRowsArray,
          answerRowsArray,
        );
        return;
      }
      switch (catalog) {
        case "A+B=C":
          _this.countByArithmetic1(info, questionRowsArray, answerRowsArray);
          break;
        case "A-B=C":
          _this.countByArithmetic2(info, questionRowsArray, answerRowsArray);
          break;
        case "A+B=C D-E=F":
          _this.countByArithmetic3(info, questionRowsArray, answerRowsArray);
          break;
        case "A+B+C=D":
          _this.countByArithmetic4(info, questionRowsArray, answerRowsArray);
          break;
        case "A-B-C=D":
          _this.countByArithmetic5(info, questionRowsArray, answerRowsArray);
          break;
        case "A±B±C=D":
          _this.countByArithmetic6(info, questionRowsArray, answerRowsArray);
          break;
        case "A±(B±C)=D":
          _this.countByArithmetic7(info, questionRowsArray, answerRowsArray);
          break;
        case "A×B±C=D":
          _this.countByArithmetic8(info, questionRowsArray, answerRowsArray);
          break;
        case "A±B×C=D":
          _this.countByArithmetic9(info, questionRowsArray, answerRowsArray);
          break;
        case "A×(B±C)=D":
          _this.countByArithmetic10(info, questionRowsArray, answerRowsArray);
          break;
        case "A+B+C=10/20/n":
          _this.countByArithmetic11(info, questionRowsArray, answerRowsArray);
          break;
        case "A+B+C+D+E<br/>=10+n/20+n/n": // A/B
          _this.countByArithmetic12(info, questionRowsArray, answerRowsArray);
          break;
        default:
          break;
      }
    };
    /**  */
    _this.exhaustibleArray = [];
    /** OK
            生成min到max间整数随机数——包含min和max
            @params min 最小值（整数）
            @params max 最大值（整数）
            @return [min, max]范围内的整数
        */
    _this.getIntegerRandom = function (min, max) {
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
    _this.fillElementList = function (
      onlyMentalArithmetic,
      item,
      // kind: string,
      // countPerRow: number,
      questionElementArray,
      answerElementArray,
    ) {
      var question = onlyMentalArithmetic ? item.question : item.questionFull;
      var answer = onlyMentalArithmetic ? item.answer : item.answerFull;
      // this.fillElementListCore(kind, countPerRow, question, questionElementArray, answer, answerElementArray);
      _this.fillElementListCore(
        question,
        answer,
        questionElementArray,
        answerElementArray,
      );
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (item) {
      var _a = item,
        kind = _a.kind,
        catalog = _a.catalog,
        scope = _a.scope,
        rows = _a.rows,
        countPerRow = _a.countPerRow,
        rowsOccupied = _a.rowsOccupied,
        rowCountPerPage = _a.rowCountPerPage,
        independentPagination = _a.independentPagination,
        textStyle = _a.textStyle;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, item);
      // this.appendReadonlyTd(tr, kind);
      _this.appendReadonlyTd(tr, catalog);
      _this.appendReadonlyTd(tr, scope);
      _this.appendNumberTd(tr, rows, item, "rows", 1, null, 1);
      _this.appendCheckboxTdWithoutText(
        tr,
        independentPagination,
        item,
        "independentPagination",
      );
      // this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
      _this.appendTextboxTd(tr, textStyle, item, "textStyle");
      _this.appendReadonlyTd(tr, countPerRow);
      _this.appendReadonlyTd(tr, rowsOccupied);
      _this.appendReadonlyTd(tr, rowCountPerPage);
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      // this.appendTableHeadCell({ en: 'Kind', zh_cn: '类型', zh_tw: '類型' });
      _this.appendTableHeadCell({
        en: "Catalog",
        zh_cn: "大类",
        zh_tw: "大類",
      });
      _this.appendTableHeadCell({ en: "Scope", zh_cn: "范围", zh_tw: "範圍" });
      _this.appendTableHeadCell({ en: "Rows", zh_cn: "行数", zh_tw: "行數" });
      _this.appendTableHeadCell({
        en: "Independent Pagination",
        zh_cn: "独立分页",
        zh_tw: "獨立分頁",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
      _this.appendTableHeadCell({
        en: "Count Per Row",
        zh_cn: "每行题数",
        zh_tw: "每行題數",
      });
      _this.appendTableHeadCell({
        en: "Item Row Count",
        zh_cn: "题目占行",
        zh_tw: "題目占行",
      });
      _this.appendTableHeadCell({
        en: "Item Count Per Page",
        zh_cn: "每页题行",
        zh_tw: "每頁題行",
      });
    };
    /** OK
     * 事件：纸张大小更改后
     * @param newPageSize
     * @returns
     */
    _this.onPageSizeChanged = function (newPageSize) {
      var _a = _this,
        isLandscapeRadioArray = _a.isLandscapeRadioArray,
        data = _a.data;
      switch (newPageSize) {
        case "A3":
          isLandscapeRadioArray[0].value = true;
          data.isLandscape = true;
          break;
        case "A4":
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
    _this.getUsableList = function () {
      // const length = 10;
      // const showNumber = true;
      // const digitalOverlay = true;
      // const startNumber = 1;
      // const count = 1;
      // const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
      // const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
      // const textStyle = 'font-size:6mm;';
      var _a = _this,
        appendUsableItem = _a.appendUsableItem,
        addCommonItem = _a.addCommonItem,
        smallRowCountPerPage = _a.smallRowCountPerPage,
        formatCentile = _a.formatCentile;
      var usableList = [];
      var buttonList = [];
      // let strongI18n: I18nable;
      // let kind: string;
      var catalog;
      // let scope: string;
      var independentPagination = false;
      var textStyle = "";
      var countPerRow = 5;
      var rowCountPerPage = 25;
      var rowsOccupied = formatCentile(smallRowCountPerPage / rowCountPerPage);
      var rows = rowCountPerPage;
      var rowCountPerPageOf10 = 10;
      var rowsOccupiedOf10 = formatCentile(
        smallRowCountPerPage / rowCountPerPageOf10,
      );
      var rowsOf10 = rowCountPerPageOf10;
      var rowCountPerPageOf8 = 8;
      var rowsOccupiedOf8 = formatCentile(
        smallRowCountPerPage / rowCountPerPageOf8,
      );
      var rowsOf8 = rowCountPerPageOf8;
      var rowCountPerPageOf6 = 6;
      var rowsOccupiedOf6 = formatCentile(
        smallRowCountPerPage / rowCountPerPageOf6,
      );
      var rowsOf6 = rowCountPerPageOf6;
      var kindArray = [];
      catalog = "A+B=C";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "1-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-10",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-20",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
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
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf10,
          rowsOccupied: rowsOccupiedOf10,
          rowCountPerPage: rowCountPerPageOf10,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf10,
          rowsOccupied: rowsOccupiedOf10,
          rowCountPerPage: rowCountPerPageOf10,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf10,
          rowsOccupied: rowsOccupiedOf10,
          rowCountPerPage: rowCountPerPageOf10,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A-B=C";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "1-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-10",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-20",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A+B=C D-E=F";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "1-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-5",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-10",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-20",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      // addCommonItem({ kind: '', catalog, scope:'0-100A', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      // addCommonItem({ kind: '', catalog, scope:'0-100B', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      // addCommonItem({ kind: '', catalog, scope:'0-100C', rows: rowsOf8, rowsOccupied: rowsOccupiedOf8, rowCountPerPage: rowCountPerPageOf8, countPerRow: 4, independentPagination, textStyle }, kindArray, buttonList);
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf8,
          rowsOccupied: rowsOccupiedOf8,
          rowCountPerPage: rowCountPerPageOf8,
          countPerRow: 5,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A+B+C=D";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A-B-C=D";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A±B±C=D";
      // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
      buttonList.length = 0;
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A±(B±C)=D";
      buttonList.length = 0;
      // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加与退位减
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      // 以下乘法中，两个乘数都在1-9范围内
      catalog = "A×B=C";
      buttonList.length = 0;
      // A/B分别表示小九九和大九九
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "9×9A",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "9×9B",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: countPerRow,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A×B±C=D";
      buttonList.length = 0;
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A±B×C=D";
      buttonList.length = 0;
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100A",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100B",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "0-100C",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A×(B±C)=D";
      buttonList.length = 0;
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "9×9",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "20×20",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "100×100",
          rows: rowsOf6,
          rowsOccupied: rowsOccupiedOf6,
          rowCountPerPage: rowCountPerPageOf6,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A+B+C=10/20/n";
      buttonList.length = 0;
      // A：必定可得到10或20；B：部分无法得到10或20
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "A",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "B",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: 4,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      appendUsableItem(catalog, buttonList, usableList);
      catalog = "A+B+C+D+E<br/>=10+n/20+n/n";
      buttonList.length = 0;
      // A：必定有三个可以凑足10或20；B：其中2-5个数可凑足整十数（10%概率无法凑出整十数）
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "A",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: 3,
          independentPagination: independentPagination,
          textStyle: textStyle,
        },
        kindArray,
        buttonList,
      );
      addCommonItem(
        {
          kind: "",
          catalog: catalog,
          scope: "B",
          rows: rows,
          rowsOccupied: rowsOccupied,
          rowCountPerPage: rowCountPerPage,
          countPerRow: 3,
          independentPagination: independentPagination,
          textStyle: textStyle,
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
    _this.initCoreElementsBeforeTable = function () {
      var _a = _this,
        configCoreElement = _a.configCoreElement,
        getWrapElement = _a.getWrapElement,
        idOrClassPrefix = _a.idOrClassPrefix,
        initTextboxElement = _a.initTextboxElement,
        initRadioGroupByBooleanOrNumberValue =
          _a.initRadioGroupByBooleanOrNumberValue;
      var wrapElement;
      wrapElement = getWrapElement({
        en: "Date (Not Saved)",
        zh_cn: "日期（不存储）",
        zh_tw: "日期（不存儲）",
      });
      wrapElement.id = "".concat(idOrClassPrefix, "DateWrap");
      _this.initDateElements(wrapElement);
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
        en: "Arithmetic and Font Size",
        zh_cn: "算法与字号",
        zh_tw: "算法與字號",
      });
      wrapElement.id = "".concat(idOrClassPrefix, "ArithmeticAndTextStyleWrap");
      // (radiosInfoArray, propertyName, radioElementArray, wrapElement);
      initRadioGroupByBooleanOrNumberValue(
        [
          {
            value: false,
            i18nHtml: getI18nInnerHTML({
              en: "Normal",
              zh_cn: "常规",
              zh_tw: "常規",
            }),
          },
          {
            value: true,
            i18nHtml: getI18nInnerHTML({
              en: "Mental",
              zh_cn: "口算",
              zh_tw: "口算",
            }),
          },
        ],
        "onlyMentalArithmetic",
        _this.onlyMentalArithmeticRadioArray,
        wrapElement,
      );
      initTextboxElement(
        {
          en: "Subject:",
          zh_cn: "标题：",
          zh_tw: "標題：",
        },
        "pageSubjectFontSize",
        _this.pageSubjectFontSizeElement,
        wrapElement,
      );
      initTextboxElement(
        {
          en: "Question:",
          zh_cn: "问题：",
          zh_tw: "問題：",
        },
        "questionFontSize",
        _this.questionFontSizeElement,
        wrapElement,
      );
      // wrapElement = getWrapElement({
      //   en: 'Line Styles',
      //   zh_cn: '线条样式',
      //   zh_tw: '線條樣式',
      // });
      // wrapElement.id = `${idOrClassPrefix}LineStylesWrap`;
      // this.initLineStylesElements(wrapElement);
      hide(getElementById("brickPageBasePaperSizeOrDirectionWrap"));
      // hide(getElementById('brickPageBasePaperDirectionWrap'));
    };
    _this.pageSubjectFontSizeElement = createElement("input");
    _this.questionFontSizeElement = createElement("input");
    _this.onlyMentalArithmeticRadioArray = [];
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
    _this.yearElement = createElement("input");
    _this.monthElement = createElement("input");
    _this.dayElement = createElement("input");
    /** OK
     *
     * @param wrapElement
     */
    _this.initDateElements = function (wrapElement) {
      var _a = _this,
        _b = _a.data,
        year = _b.year,
        month = _b.month,
        day = _b.day,
        yearElement = _a.yearElement,
        monthElement = _a.monthElement,
        dayElement = _a.dayElement;
      var span = createElement("span");
      wrapElement.appendChild(span);
      var yearLabel = createElement("label");
      yearLabel.innerHTML = getI18nInnerHTML({
        en: "Year:",
        zh_cn: "年：",
        zh_tw: "年：",
      });
      yearElement.value = year;
      yearElement.type = "text";
      var onYearhanged = function () {
        _this.data.year = parseInt(yearElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      yearElement.onchange = onYearhanged;
      yearElement.onblur = onYearhanged;
      span.appendChild(yearLabel);
      span.appendChild(yearElement);
      var monthLabel = createElement("label");
      monthLabel.innerHTML = getI18nInnerHTML({
        en: "Month:",
        zh_cn: "月：",
        zh_tw: "月：",
      });
      monthElement.value = _this.data.month;
      monthElement.type = "text";
      var onMonthChanged = function () {
        _this.data.month = parseInt(monthElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      monthElement.onchange = onMonthChanged;
      monthElement.onblur = onMonthChanged;
      span.appendChild(monthLabel);
      span.appendChild(monthElement);
      var dayLabel = createElement("label");
      dayLabel.innerHTML = getI18nInnerHTML({
        en: "Day:",
        zh_cn: "日：",
        zh_tw: "日：",
      });
      dayElement.value = _this.data.day;
      dayElement.type = "text";
      var onDayChanged = function () {
        _this.data.day = parseInt(dayElement.value, 0);
        _this.saveConfigAndBuildIfAllowed();
      };
      dayElement.onchange = onDayChanged;
      dayElement.onblur = onDayChanged;
      span.appendChild(dayLabel);
      span.appendChild(dayElement);
    };
    /** OK
     * 初始化表格下方的核心控件
     */
    _this.initCoreElementsAfterTable = function () {};
    _this.initExhaustibleArray();
    _this.initPlusOrSubtractDictionaryNotGreatThan100Array();
    _this.initExhaustibleAMultiplyBInfo();
    return _this;
  }
  /** OK
   * 获得三数相加（0-2次进位加）相关加数与和
   * @param has 有进位加
   * @returns 进位加的三个加数与和
   */
  BrickCore.prototype.getMaybeCarryTwiceNumbers = function (has) {
    var getIntegerRandom = this.getIntegerRandom;
    var a, b, c, d;
    if (has) {
      // 20%概率只进位加一次
      if (getIntegerRandom(1, 10) < 3) {
        var digitsOfC = getIntegerRandom(1, 9);
        var tensOfC = getIntegerRandom(0, 7);
        c = 10 * tensOfC + digitsOfC;
        var A_B = 0;
        if (getIntegerRandom(0, 2)) {
          A_B = 10 * getIntegerRandom(1, 10 - tensOfC) +
            getIntegerRandom(11 - digitsOfC, 9);
          if (A_B > 100) {
            A_B -= 10;
          }
          // if (A_B + C > 100) { A_B -= Math.floor((A_B + C - 100) / 10); }
          // if (A_B + C > 100) { A_B = 100 - C; }
          if (A_B + c > 100) {
            A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
          }
        } else {
          A_B = 100 - c;
        }
        var aMaxDigit = Math.floor(A_B % 10);
        a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) +
          getIntegerRandom(0, aMaxDigit);
        b = A_B - a;
        // 一半概率交换A和C
        if (getIntegerRandom(0, 1)) {
          a += c;
          c = a - c;
          a = a - c;
        }
        if (c === 0) {
          c = 100 - a - b;
        }
      } else {
        // C在2-79内，2到9结尾，才可能确保进位加两次
        var digitsOfC = getIntegerRandom(2, 9);
        var tensOfC = getIntegerRandom(0, 7);
        c = 10 * tensOfC + digitsOfC;
        // const A_B = getAddendWithCarry(C);
        var A_B = 0;
        if (getIntegerRandom(0, 2)) {
          A_B = 10 * getIntegerRandom(1, 10 - tensOfC) +
            getIntegerRandom(11 - digitsOfC, 9);
          if (A_B > 100) {
            A_B -= 10;
          }
          // if (A_B + C > 100) { A_B -= Math.floor((A_B + C - 100) / 10); }
          // if (A_B + C > 100) { A_B = 100 - C; }
          if (A_B + c > 100) {
            A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
          }
        } else {
          A_B = 100 - c;
        }
        var aMinDigit = A_B % 10 + 1;
        if (A_B < 10) {
          a = getIntegerRandom(aMinDigit, 9);
        } else {
          a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) +
            getIntegerRandom(aMinDigit, 9);
          if (a > A_B) {
            a -= 10;
          }
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
      var randomA = getIntegerRandom(1, 100);
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
      var aDigits = a % 10;
      // B+C具有1%概率为整十数
      var B_C = 10 * getIntegerRandom(1, 10 - Math.floor(a / 10));
      var randomBC = getIntegerRandom(1, 100);
      if (randomBC > 1) {
        var maxDigitOfBPlusC = 9 - aDigits;
        if (maxDigitOfBPlusC <= 3) {
          B_C += maxDigitOfBPlusC;
        } else if (maxDigitOfBPlusC >= 6) {
          B_C += getIntegerRandom(6, maxDigitOfBPlusC);
        } else {
          B_C += getIntegerRandom(4, maxDigitOfBPlusC);
        }
      }
      if (a + B_C > 100) {
        B_C -= 10;
      }
      var tensOfBPlusC = Math.floor(B_C / 10);
      // if (A + B_C > 90 && B_C > 20) {
      //     B_C -= 10 * getIntegerRandom(0, tensOfBPlusC - 2);
      //     tensOfBPlusC = Math.floor(B_C / 10);
      // }
      b = 10 * getIntegerRandom(Math.floor(tensOfBPlusC / 2), tensOfBPlusC);
      var digitOfBPlusC = B_C % 10;
      if (B_C % 10) {
        b += getIntegerRandom(
          1,
          Math.min(digitOfBPlusC, Math.floor(digitOfBPlusC / 2) * 1.5),
        );
      }
      c = B_C - b;
    }
    d = a + b + c;
    return { a: a, b: b, c: c, d: d };
  };
  BrickCore.prototype.fillElementArrayOfAPlusB = function (
    has,
    min,
    max,
    questionElementArray,
    answerElementArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom,
      getAddendWithCarry = _a.getAddendWithCarry,
      getAddendWithoutCarry = _a.getAddendWithoutCarry,
      getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3;
    var A;
    var B;
    if (has) {
      while (true) {
        A = getIntegerRandom(min, max);
        if (A % 10) {
          break;
        }
      }
      B = getAddendWithCarry(A);
    } else {
      A = getIntegerRandom(min, max);
      B = getAddendWithoutCarry(A);
    }
    var result = A + B;
    var commonHtml = "".concat(A, "<i> </i>+<i> </i>").concat(
      B,
      "<i> </i>=<i> </i>",
    );
    var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
      questionElementHtmlAppend,
    ); // .replace(/~charCount~/g, charsStr)
    var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
    if (!onlyMentalArithmetic) {
      var charsStr = (result.toString().length + 1).toString();
      answerElementHtml += "".concat(
        this.questionElementHtmlAppendStart4,
        '<answer-option edu-chars="',
      ).concat(charsStr, '"><p></p>').concat(
        getHtmlOfAPlusB(A, B, result),
        "</answer-option></div>",
      );
      // answerElementHtml += `${this.questionElementHtmlAppendStart3}<answer-option edu-chars="${charsStr}">${getHtmlOfAPlusB(A, B, result)}</answer-option></div>`;
    }
    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };
  BrickCore.prototype.getHtmlOfAPlusB = function (A, B, result) {
    var tensCarryHtml = A % 10 + B % 10 > 9
      ? '<carry edu-digit="tens">1</carry>'
      : "";
    var hundredsCarryHtml = A % 100 + B % 100 > 99
      ? '<carry edu-digit="hundreds">1</carry>'
      : "";
    return "<p><number>".concat(
      A,
      "</number></p><p><operator>+</operator><number>",
    ).concat(B, "</number>").concat(hundredsCarryHtml).concat(
      tensCarryHtml,
      "</p><hr><p><number>",
    ).concat(result, "</number></p>");
  };
  BrickCore.prototype.getHtmlOfAMultiplyB = function (A, B, result) {
    var getSimleHtmlOfAMultiplyB = this.getSimleHtmlOfAMultiplyB;
    if (B < 10) {
      return getSimleHtmlOfAMultiplyB(A, B, result);
    }
    if (A < 10) {
      return getSimleHtmlOfAMultiplyB(B, A, result);
    }
    var isOnlyFirstIsNotZero = this.isOnlyFirstIsNotZero;
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
    var aLength = A.toString().length;
    var bStr = B.toString();
    var bLength = bStr.length;
    if (aLength < bLength) {
      A += B;
      B = A - B;
      A = A - B;
      bStr = B.toString();
      bLength = bStr.length;
    }
    var html = "<p><number>".concat(
      A,
      "</number></p><p><operator>\u00D7</operator><number>",
    ).concat(B, "</number></p><hr>");
    var numberArray = [];
    var carryArray = [];
    var resultLength = result.toString().length;
    for (var i = 0; i < resultLength; ++i) {
      carryArray.push(0);
      numberArray.push(0);
    }
    // carryArray.push(0);
    // console.log({ A, B, bStr, bLength });
    for (var i = bLength; i > 0; --i) {
      html += '<p edu-right-char="'.concat(bLength - i, '">');
      // if (i === 1) { html += '<operator>+</operator>' };
      var product = A * parseInt(bStr.substring(i - 1, i), 0);
      html += "<number>".concat(product, "</number>");
      // product.toString().split('').forEach((char, index) => {
      // 	if (char !== '0') {
      // 		const arrayIndex = i - index;
      // 		numberArray.splice(arrayIndex, 1, numberArray[arrayIndex] + parseInt(char, 0));
      // 	}
      // });
      var productChars = product.toString().split("");
      var productCharCount = productChars.length;
      for (var charLoop = productCharCount; charLoop > 0; --charLoop) {
        var char = productChars[charLoop - 1];
        // 3-1-2+2=2
        var arrayIndex = resultLength - 1 - (bLength - i) -
          (productCharCount - charLoop);
        console.log(
          JSON.stringify({
            product: product,
            charLoop: charLoop,
            char: char,
            resultLength: resultLength,
            i: i,
            arrayIndex: arrayIndex,
          }),
        );
        numberArray.splice(
          arrayIndex,
          1,
          numberArray[arrayIndex] + parseInt(char, 0),
        );
      }
      if (i !== 1) {
        html += "</p>";
      }
    }
    console.log(A, B, result, JSON.stringify(numberArray));
    // let lastCarry = 0;
    // 最前面一个不处理
    for (var i = resultLength - 1; i > 0; --i) {
      var arrayIndex = i;
      var numeral = numberArray[arrayIndex];
      if (numeral > 9) {
        var carry = Math.floor(numeral / 10);
        var previousIndex = arrayIndex - 1;
        carryArray.splice(previousIndex, 1, carry);
        numberArray.splice(
          previousIndex,
          1,
          numberArray[previousIndex] + carry,
        );
      }
    }
    // carryArray.splice(0, 1, numberArray[0]);
    console.log(JSON.stringify(numberArray), JSON.stringify(carryArray));
    var eduDigitArray = this.eduDigitArray;
    for (var i = 0; i < resultLength; ++i) {
      var carryNumber = carryArray[i];
      if (carryNumber > 0) {
        // <carry edu-digit="tens">1</carry>
        html += '<carry edu-digit="'.concat(
          eduDigitArray[resultLength - 2 - i],
          '">',
        ).concat(carryNumber, "</carry>");
      }
    }
    html += "</p>";
    html += "<hr><p><number>".concat(result, "</number></p>");
    return html;
  };
  BrickCore.prototype.fillElementArrayOfASubtractB = function (
    has,
    min,
    max,
    questionElementArray,
    answerElementArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getDebitHtml = _a.getDebitHtml,
      getIntegerRandom = _a.getIntegerRandom,
      getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
    var A;
    var B;
    if (has) {
      while (true) {
        A = getIntegerRandom(min, max);
        if (A % 10 < 9) {
          break;
        }
      }
      B = getSubtractorWithDebitMinus(A);
    } else {
      A = getIntegerRandom(min, max);
      B = getSubtractorWithoutDebitMinus(A);
    }
    var charsStr = (A.toString().length + 1).toString();
    var result = A - B;
    var commonHtml = "".concat(A, " - ").concat(B, " = ");
    var questionElementHtml = "<p>".concat(
      commonHtml.replace(/ /g, "<i> </i>"),
      "</p>",
    ).concat(questionElementHtmlAppend); // .replace(/4/g, charsStr)
    var answerElementHtml = "<p>".concat(commonHtml.replace(/ /g, "<i> </i>"))
      .concat(result, "</p>");
    if (!onlyMentalArithmetic) {
      var debitHtml = getDebitHtml(A, B);
      answerElementHtml += "".concat(
        this.questionElementHtmlAppendStart4,
        '<answer-option edu-chars="',
      ).concat(charsStr, '">').concat(debitHtml, "<p><number>").concat(
        A,
        "</number></p><p><operator>-</operator><number>",
      ).concat(B, "</number></p><hr><p><number>").concat(
        result,
        "</number></p></answer-option></div>",
      );
    }
    this.fillElementListCore(
      questionElementHtml,
      answerElementHtml,
      questionElementArray,
      answerElementArray,
    );
  };
  BrickCore.prototype.getDebitHtml = function (A, B) {
    var aDigits = A % 10;
    var bDigits = B % 10;
    var tensNeedDebit = aDigits < bDigits;
    var aHundreds = A % 100;
    var hundredsNeedDebit = aHundreds < B % 100;
    var aThousands = A % 1000;
    var thousandsNeedDebit = aThousands < B % 1000;
    if (!tensNeedDebit && !hundredsNeedDebit) {
      return "";
    }
    var digitDebitHtml = tensNeedDebit
      ? '<debit edu-digit="digit"><debit-number>'.concat(
        10 + aDigits,
        "</debit-number></debit>",
      )
      : "";
    var tensDebitHtml = tensNeedDebit || hundredsNeedDebit
      ? '<debit edu-digit="tens"><debit-number>'.concat(
        (hundredsNeedDebit ? 10 : 0) + Math.floor(aHundreds / 10) -
          (tensNeedDebit ? 1 : 0),
        "</debit-number>",
      ).concat(
        tensNeedDebit ? "<debit-circle>·</debit-circle>" : "",
        "</debit>",
      )
      : "";
    var hundredsDebitHtml = hundredsNeedDebit
      ? '<debit edu-digit="hundreds"><debit-number>'.concat(
        (thousandsNeedDebit ? 10 : 0) + Math.floor(A % 1000 / 100) -
          (hundredsNeedDebit ? 1 : 0),
        "</debit-number><debit-circle>\u00B7</debit-circle></debit>",
      )
      : "";
    // return debitHtml;
    return '<p class="debit">&nbsp;'.concat(hundredsDebitHtml).concat(
      tensDebitHtml,
    ).concat(digitDebitHtml, "</p>");
  };
  BrickCore.prototype.getDebitHtmlOfASubstractB = function (A, B, aSubstractB) {
    return "".concat(this.getDebitHtml(A, B), "<p><number>").concat(
      A,
      "</number></p><p><operator>-</operator><number>",
    ).concat(B, "</number></p><hr><p><number>").concat(
      aSubstractB,
      "</number></p>",
    );
  };
  /** OK
   * A+B=C
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic1 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var getIntegerRandom = this.getIntegerRandom;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    var min = 11;
    var max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 1));
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        this.fillElementArrayOfAPlusB(
          has,
          min,
          max,
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /** OK
   * A-B=C
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic2 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var getIntegerRandom = this.getIntegerRandom;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    var min = 11;
    var max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 1));
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        this.fillElementArrayOfASubtractB(
          has,
          min,
          max,
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /** OK
   * A+B=C D-E=F
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic3 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom,
      getAddendWithCarry = _a.getAddendWithCarry,
      getAddendWithoutCarry = _a.getAddendWithoutCarry,
      getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    var questionElementHtmlAppendOfAddition = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4;
    var questionElementHtmlAppendOfSubstraction = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    var min = 11;
    var max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 1));
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        if (getIntegerRandom(0, 1)) {
          // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
          this.fillElementArrayOfAPlusB(
            has,
            min,
            max,
            questionElementArray,
            answerElementArray,
          );
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /** OK
   * A+B+C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic4 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6;
    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 3));
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /**
   * A-B-C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic5 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    // 0-100A/0-100B/0-100C分别表示无退位减、必定有退位减、不确定是否有退位减
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 3));
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /**
   * A±B±C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic6 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, false);
  };
  BrickCore.prototype.countByArithmetic6Or7 = function (
    info,
    questionRowsArray,
    answerRowsArray,
    withBrackets,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
    var // kind,
    // catalog,
    scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    // 0-100A/0-100B/0-100C分别表示无进位加或退位减、必定有进位加或退位减、不确定是否有进位加或退位减
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    // 如果从0开始，会过于简单
    // const min = 11;
    // const max = 100;
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 3));
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        var operatorRandom = getIntegerRandom(0, 3);
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /**
   * A±(B±C)=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic7 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, true);
  };
  /**
   * A×B±C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic8 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, false);
  };
  BrickCore.prototype.countByArithmetic8Or9 = function (
    info,
    questionRowsArray,
    answerRowsArray,
    switchOrder,
  ) {
    var _a, _b, _c, _d;
    var _e = this,
      onlyMentalArithmetic = _e.data.onlyMentalArithmetic,
      getIntegerRandom = _e.getIntegerRandom,
      getAddendWithCarry = _e.getAddendWithCarry,
      getAddendWithoutCarry = _e.getAddendWithoutCarry,
      getSubtractorWithDebitMinus = _e.getSubtractorWithDebitMinus,
      getSubtractorWithoutDebitMinus = _e.getSubtractorWithoutDebitMinus;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      // independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    var _f = this.exhaustibleAMultiplyBInfo,
      aMultiplyBMaybeCarryArray = _f.aMultiplyBMaybeCarryArray,
      aMultiplyBMaybeNotCarryArray = _f.aMultiplyBMaybeNotCarryArray,
      aMultiplyBMaybeDebitMinusArray = _f.aMultiplyBMaybeDebitMinusArray,
      aMultiplyBMaybeNotDebitMinusArray = _f.aMultiplyBMaybeNotDebitMinusArray,
      aMultiplyBMaybeCarryMaxIndex = _f.aMultiplyBMaybeCarryMaxIndex,
      aMultiplyBMaybeNotCarryMaxIndex = _f.aMultiplyBMaybeNotCarryMaxIndex,
      aMultiplyBMaybeDebitMinusMaxIndex = _f.aMultiplyBMaybeDebitMinusMaxIndex,
      aMultiplyBMaybeNotDebitMinusMaxIndex =
        _f.aMultiplyBMaybeNotDebitMinusMaxIndex;
    // 0-100A/0-100B/0-100C分别表示无进位加、必定有进位加、不确定是否有进位加
    var mustHasnot = scope === "0-100A";
    var mustHas = scope === "0-100B";
    var maybeHas = scope === "0-100C";
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var has = mustHasnot
          ? false
          : (mustHas || (maybeHas && getIntegerRandom(1, 10) > 3));
        // console.log({ mustHasnot, mustHas, maybeHas, has });
        var isPlus = getIntegerRandom(0, 1) === 1;
        var operator = isPlus ? "+" : "-";
        var A = void 0, B = void 0, aMultiplyB = void 0;
        var C = void 0;
        // 0 getAddendWithCarry, 1 getAddendWithoutCarry, 2 getSubtractorWithDebitMinus, 3 getSubtractorWithoutDebitMinus
        // let cCountMethod: number; // 0 getAddendWithCarry, 1 getAddendWithoutCarry, 2 getSubtractorWithDebitMinus, 3 getSubtractorWithoutDebitMinus
        switch ((isPlus ? 0 : 2) + (has ? 0 : 1)) {
          case 0:
            (_a = aMultiplyBMaybeCarryArray[
              getIntegerRandom(0, aMultiplyBMaybeCarryMaxIndex)
            ],
              A = _a.A,
              B = _a.B,
              aMultiplyB = _a.aMultiplyB);
            C = getAddendWithCarry(aMultiplyB);
            break;
          case 1:
            (_b = aMultiplyBMaybeNotCarryArray[
              getIntegerRandom(0, aMultiplyBMaybeNotCarryMaxIndex)
            ],
              A = _b.A,
              B = _b.B,
              aMultiplyB = _b.aMultiplyB);
            C = getAddendWithoutCarry(aMultiplyB);
            break;
          case 2:
            (_c = aMultiplyBMaybeDebitMinusArray[
              getIntegerRandom(0, aMultiplyBMaybeDebitMinusMaxIndex)
            ],
              A = _c.A,
              B = _c.B,
              aMultiplyB = _c.aMultiplyB);
            C = getSubtractorWithDebitMinus(aMultiplyB);
            if (switchOrder) {
              C += aMultiplyB;
            }
            break;
          case 3:
          default:
            (_d = aMultiplyBMaybeNotDebitMinusArray[
              getIntegerRandom(0, aMultiplyBMaybeNotDebitMinusMaxIndex)
            ],
              A = _d.A,
              B = _d.B,
              aMultiplyB = _d.aMultiplyB);
            C = getSubtractorWithoutDebitMinus(aMultiplyB);
            if (switchOrder) {
              C += aMultiplyB;
            }
            break;
        }
        var result = switchOrder
          ? A * B * (isPlus ? 1 : -1) + C
          : A * B + C * (isPlus ? 1 : -1);
        var charsStr = ((isPlus ? result : aMultiplyB).toString().length + 1)
          .toString();
        // switchOrder:
        // true => A±B×C=D
        // false => A×B±C=D
        var commonHtml = switchOrder
          ? "<i> </i>".concat(C, "<i> </i>").concat(operator, "<i> </i>")
            .concat(A, "<i> </i>\u00D7<i> </i>").concat(B, "<i> </i>=<i> </i>")
          : "".concat(A, "<i> </i>\u00D7<i> </i>").concat(B, "<i> </i>").concat(
            operator,
            "<i> </i>",
          ).concat(C, "<i> </i>=<i> </i>");
        var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
          questionElementHtmlAppend,
        );
        var answerElementHtml = "<p>".concat(commonHtml).concat(result, "</p>");
        if (!onlyMentalArithmetic) {
          answerElementHtml += '<div edu-flex="8">';
          answerElementHtml += '<answer-option edu-chars="'.concat(
            charsStr,
            '">',
          );
          answerElementHtml += this.getHtmlOfAMultiplyB(A, B, aMultiplyB);
          answerElementHtml += '<hr class="step"/>';
          if (isPlus) {
            answerElementHtml += this.getHtmlOfAPlusB(aMultiplyB, C, result);
          } else {
            answerElementHtml += switchOrder
              ? this.getDebitHtmlOfASubstractB(C, aMultiplyB, result)
              : this.getDebitHtmlOfASubstractB(aMultiplyB, C, result);
          }
          answerElementHtml += "</answer-option>";
          answerElementHtml += "</div>";
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /**
   * A±B×C=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic9 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, true);
  };
  /** OK
   * A×(B±C)=D
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic10 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var questionElementHtmlAppend = onlyMentalArithmetic
      ? ""
      : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      independentPagination = info.independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var minMultiplier = 1;
    var maxMultiplier = 9;
    var fontSizeCss = "";
    var flexStr = "8";
    switch (scope) {
      case "20×20":
        minMultiplier = 11;
        maxMultiplier = 20;
        fontSizeCss = ' style="font-size:0.9em;"';
        flexStr = "10";
        break;
      case "100×100":
        minMultiplier = 11;
        maxMultiplier = 100;
        fontSizeCss = ' style="font-size:0.8em;"';
        flexStr = "10";
        break;
      case "A":
      default:
        break;
    }
    var questionRows = [];
    var answerRows = [];
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        var A = getIntegerRandom(minMultiplier, maxMultiplier);
        var B_C = getIntegerRandom(1, maxMultiplier);
        var isPlus = B_C < 3 || (getIntegerRandom(1, 2) < 2);
        // let A: number;
        var B = void 0;
        var C = void 0;
        if (isPlus) {
          B = getIntegerRandom(1, B_C);
          C = B_C - B;
        } else {
          C = getIntegerRandom(1, 100 - B_C);
          B = C + B_C;
        }
        var result = A * (B + C * (isPlus ? 1 : -1));
        var charsStr = ((isPlus
          ? result
          : Math.max(result, B)).toString().length + 1)
          .toString();
        var commonHtml = "".concat(A, "<i> </i>\u00D7<i> </i>(").concat(
          B,
          "<i> </i>",
        ).concat(isPlus ? "+" : "-", "<i> </i>").concat(
          C,
          ")<i> </i>=<i> </i>",
        );
        var questionElementHtml = "<p>".concat(commonHtml, "</p>").concat(
          questionElementHtmlAppend,
        );
        var answerElementHtml = "<p".concat(fontSizeCss, ">").concat(commonHtml)
          .concat(result, "</p>");
        if (!onlyMentalArithmetic) {
          answerElementHtml += '<div edu-flex="'.concat(flexStr, '">');
          answerElementHtml += '<answer-option edu-chars="'.concat(
            charsStr,
            '">',
          );
          if (isPlus) {
            answerElementHtml += this.getHtmlOfAPlusB(B, C, B_C);
          } else {
            answerElementHtml += this.getDebitHtmlOfASubstractB(B, C, B_C);
          }
          // answerElementHtml += '<hr class="step"/>';
          // answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
          // <p><number>${B_C}</number></p>
          if (A < 10) {
            answerElementHtml += "<p><operator>\u00D7</operator><number>"
              .concat(A, "</number></p><hr><p><number>").concat(
                result,
                "</number></p>",
              );
          } else {
            answerElementHtml += '<hr class="step"/>';
            answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
          }
          answerElementHtml += "</answer-option>";
          answerElementHtml += "</div>";
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /** OK
   * A+B+C=10/20/n
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic11 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    // A属于可穷举项，不在此方法处理范围内。
    // 仅B，相对于A，增加了10%概率的无法凑出10或20的可能性
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      independentPagination = info.independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic11', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        // A-C都是1-9的数字，scope为A时，必定能以3个数字凑出整十数；scope为B时，有10%的概率无法凑出整十数
        // let A: number;
        var B = void 0;
        var C = void 0;
        var questionElementHtml = void 0;
        var answerElementHtml = void 0;
        var A = getIntegerRandom(1, 9);
        while (true) {
          B = getIntegerRandom(1, 9);
          if ((A + B) % 10) {
            break;
          }
        }
        var A_B = A + B;
        if (getIntegerRandom(1, 10) < 2) {
          while (true) {
            C = getIntegerRandom(1, 9);
            if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) {
              break;
            }
          }
          // answerElementHtml = '×';
        } else {
          C = 10 - ((A + B) % 10);
          // answerElementHtml = [A, B, C].sort((prev, next) => prev - next).join(' '); // `${A} ${B} ${C}`;
        }
        answerElementHtml = (A + B + C).toString();
        // questionElementHtml = '10n?: '.concat([A, B, C].sort((prev, next) => prev - next).join(' '));
        var html = [A, B, C].join(" + ").concat(" = ");
        questionElementHtml = "<p>".concat(
          html.replace(/ /g, "<i> </i>"),
          "</p>",
        );
        answerElementHtml = "<p>".concat(html.replace(/ /g, "<i> </i>")).concat(
          answerElementHtml,
          "</p>",
        ); // `${questionElementHtml}${answerElementHtml}`;
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  /**
   * A+B+C+D+E=10+n/20+n/n
   * @param info
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.countByArithmetic12 = function (
    info,
    questionRowsArray,
    answerRowsArray,
  ) {
    var _a = this,
      onlyMentalArithmetic = _a.data.onlyMentalArithmetic,
      getIntegerRandom = _a.getIntegerRandom;
    var kind = info.kind,
      catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      independentPagination = info.independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    // console.log('countByArithmetic12', rowsOccupied);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
      var questionElementArray = [];
      var answerElementArray = [];
      for (
        var questionIndex = 0;
        questionIndex < countPerRow;
        ++questionIndex
      ) {
        // A-E都是1-9的数字，scope为A时，必定能以2-5个数字凑出整十数；scope为B时，有10%的概率无法凑出整十数
        // let A: number;
        var B = void 0;
        var C = void 0;
        var D = void 0;
        var E = void 0;
        var F = void 0;
        var A_B = void 0;
        var A_B_C = void 0;
        var A_B_C_D = void 0;
        var questionElementHtml = void 0;
        var answerElementHtml = void 0;
        var A = getIntegerRandom(1, 9);
        if (scope === "B" && getIntegerRandom(1, 10) < 2) {
          while (true) {
            B = getIntegerRandom(1, 9);
            if ((A + B) % 10) {
              break;
            }
          }
          A_B = A + B;
          while (true) {
            C = getIntegerRandom(1, 9);
            if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) {
              break;
            }
          }
          A_B_C = A_B + C;
          while (true) {
            D = getIntegerRandom(1, 9);
            if (
              (A_B_C + D) % 10 && (A + D) % 10 && (B + D) % 10 &&
              (C + D) % 10 && (A_B + D) % 10
            ) {
              break;
            }
          }
          A_B_C_D = A_B_C + D;
          while (true) {
            E = getIntegerRandom(1, 9);
            if ((A_B_C_D + E) % 10) {
              break;
            }
          }
          answerElementHtml = "×";
        } else {
          switch (getIntegerRandom(1, 4)) {
            case 1:
              B = 10 - A;
              C = getIntegerRandom(1, 9);
              D = getIntegerRandom(1, 9);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B].sort(function (prev, next) {
                return prev - next;
              }).join(" "); // `${A} ${B}`;
              break;
            case 2:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) {
                  break;
                }
              }
              C = 10 - ((A + B) % 10);
              D = getIntegerRandom(1, 9);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B, C].sort(function (prev, next) {
                return prev - next;
              }).join(" "); // `${A} ${B} ${C}`;
              break;
            case 3:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) {
                  break;
                }
              }
              A_B = A + B;
              while (true) {
                C = getIntegerRandom(1, 9);
                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) {
                  break;
                }
              }
              D = 10 - ((A + B + C) % 10);
              E = getIntegerRandom(1, 9);
              answerElementHtml = [A, B, C, D].sort(function (prev, next) {
                return prev - next;
              }).join(" "); // `${A} ${B} ${C} ${D}`;
              break;
            case 4:
            default:
              while (true) {
                B = getIntegerRandom(1, 9);
                if ((A + B) % 10) {
                  break;
                }
              }
              A_B = A + B;
              while (true) {
                C = getIntegerRandom(1, 9);
                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10) {
                  break;
                }
              }
              A_B_C = A_B + C;
              while (true) {
                D = getIntegerRandom(1, 9);
                if (
                  (A_B_C + D) % 10 && (A + D) % 10 && (B + D) % 10 &&
                  (C + D) % 10 && (A_B + D) % 10
                ) {
                  break;
                }
              }
              E = 10 - ((A + B + C + D) % 10);
              answerElementHtml = [A, B, C, D, E].sort(function (prev, next) {
                return prev - next;
              }).join(" "); // `${A} ${B} ${C} ${D} ${E}`;
              break;
          }
        }
        questionElementHtml = "10n: ".concat(
          [A, B, C, D, E].sort(function (prev, next) {
            return prev - next;
          }).join(" "),
        );
        answerElementHtml = "".concat(questionElementHtml, " => ").concat(
          answerElementHtml,
        );
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  BrickCore.prototype.fillElementListCore = function (
    // kind: string,
    // countPerRow: number,
    question,
    answer,
    questionElementArray,
    answerElementArray,
  ) {
    var questionElement = createElement("cell");
    // questionElement.setAttribute('edu-math-stage-kind', kind);
    // questionElement.setAttribute('edu-question', '');
    // questionElement.setAttribute('edu-count-per-row', countPerRow.toString());
    questionElement.innerHTML = question;
    questionElementArray.push(questionElement);
    var answerElement = createElement("cell");
    // answerElement.setAttribute('edu-math-stage-kind', kind);
    // answerElement.setAttribute('edu-answer', '');
    // answerElement.setAttribute('edu-count-per-row', countPerRow.toString());
    answerElement.innerHTML = answer;
    answerElementArray.push(answerElement);
    var withoutOuterLine = answer.indexOf("<div edu-flex=") === -1;
    if (withoutOuterLine) {
      // questionElement.setAttribute('', '');
      answerElement.setAttribute("edu-without-outer-line", "");
    }
  };
  /** OK
   *
   * @param exhaustibleItem
   * @param questionCount
   * @param onlyMentalArithmetic
   * @param questionRowsArray
   * @param answerRowsArray
   */
  BrickCore.prototype.fillExhaustibleList = function (
    exhaustibleItem,
    info,
    onlyMentalArithmetic,
    // kind: string,
    // countPerRow: number,
    questionRowsArray,
    answerRowsArray,
  ) {
    var getIntegerRandom = this.getIntegerRandom;
    var // kind,
    catalog = info.catalog,
      // scope,
      rows = info.rows,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage,
      // independentPagination,
      textStyle = info.textStyle;
    var questionCount = countPerRow * rows;
    // const { kind, list, countPerSet, rowsOccupied, countPerRow, rowCountPerPage } = exhaustibleItem;
    var list = exhaustibleItem.list, countPerSet = exhaustibleItem.countPerSet;
    var listJson = JSON.stringify(list);
    var itemList = [];
    var listClone;
    var fullSetCount = Math.floor(questionCount / countPerSet);
    for (var fullSetLoop = 0; fullSetLoop < fullSetCount; ++fullSetLoop) {
      listClone = JSON.parse(listJson);
      for (var itemLoop = countPerSet; itemLoop > 0; --itemLoop) {
        var currentIndex = getIntegerRandom(1, itemLoop) - 1;
        itemList.push(listClone.splice(currentIndex, 1)[0]);
      }
    }
    var remainingCount = questionCount - countPerSet * fullSetCount;
    if (remainingCount) {
      listClone = JSON.parse(listJson);
      var listRemainingCount = listClone.length;
      for (var itemLoop = remainingCount; itemLoop > 0; --itemLoop) {
        var currentIndex = getIntegerRandom(1, listRemainingCount--) - 1;
        itemList.push(listClone.splice(currentIndex, 1)[0]);
      }
    }
    // console.log(list.length , itemList.length, questionCount);
    var rowCountPerPageStr = rowCountPerPage.toString();
    var questionRows = [];
    var answerRows = [];
    var questionRowCount = questionCount / countPerRow;
    for (var index = 0; index < questionRowCount; ++index) {
      var offset = countPerRow * index;
      var questionElementArray = [];
      var answerElementArray = [];
      for (var subIndex = 0; subIndex < countPerRow; ++subIndex) {
        var item = itemList[subIndex + offset];
        // console.log(subIndex, offset, subIndex + offset);
        // this.fillElementList(onlyMentalArithmetic, item, kind, countPerRow, questionElementArray, answerElementArray);
        this.fillElementList(
          onlyMentalArithmetic,
          item,
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
    questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
    answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
  };
  BrickCore.prototype.fillRowsArray = function (
    rowCountPerPageStr,
    textStyle,
    questionElementArray,
    questionRows,
    answerElementArray,
    answerRows,
  ) {
    if (this.data.onlyMentalArithmetic) {
      rowCountPerPageStr = this.defaultRowCountPerPage.toString();
    }
    var questionRow = createElement("row");
    questionRow.setAttribute("row-count-per-page", rowCountPerPageStr);
    questionElementArray.forEach(function (cell) {
      return questionRow.appendChild(cell);
    });
    questionRows.push(questionRow);
    var answerRow = createElement("row");
    answerRow.setAttribute("row-count-per-page", rowCountPerPageStr);
    answerElementArray.forEach(function (cell) {
      return answerRow.appendChild(cell);
    });
    answerRows.push(answerRow);
    if (textStyle.length) {
      questionRow.setAttribute("style", textStyle);
      answerRow.setAttribute("style", textStyle);
    }
  };
  /** OK
   *
   * @param info
   * @param kindArray
   * @param buttonList
   */
  BrickCore.prototype.addCommonItem = function (info, kindArray, buttonList) {
    var // kind,
    catalog = info.catalog,
      scope = info.scope,
      rows = info.rows,
      independentPagination = info.independentPagination,
      textStyle = info.textStyle,
      countPerRow = info.countPerRow,
      rowsOccupied = info.rowsOccupied,
      rowCountPerPage = info.rowCountPerPage;
    var kind = "".concat(catalog, "_").concat(scope);
    kindArray.push(kind);
    buttonList.push({
      nameI18n: getI18nableWithSameContent(scope),
      info: {
        kind: kind,
        catalog: catalog,
        scope: scope,
        rows: rows,
        independentPagination: independentPagination,
        textStyle: textStyle,
        countPerRow: countPerRow,
        rowsOccupied: rowsOccupied,
        rowCountPerPage: rowCountPerPage,
      },
    });
  };
  /** OK
   *
   * @param label
   * @param buttonList
   * @param usableList
   * @returns
   */
  BrickCore.prototype.appendUsableItem = function (
    label,
    buttonList,
    usableList,
  ) {
    var strongI18n = getI18nableWithSameContent(label);
    // usableList.push({ strongI18n, buttonList: buttonList.splice(0, buttonList.length) });
    usableList.push({
      strongI18n: strongI18n,
      buttonList: JSON.parse(JSON.stringify(buttonList)),
    });
    return strongI18n;
  };
  return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
