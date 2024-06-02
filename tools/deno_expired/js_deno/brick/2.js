// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BrickCore extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageMathStage';
    constructor() {
        const NOW = new Date();
        super({
            onlyMentalArithmetic: false,
            pageSubjectFontSize: '22px',
            questionFontSize: '16px',
            year: NOW.getFullYear().toString(),
            month: (NOW.getMonth() + 1).toString(),
            day: NOW.getDate().toString()
        }, {});
        this.initExhaustibleArray();
        this.initPlusOrSubtractDictionaryNotGreatThan100Array();
        this.initExhaustibleAMultiplyBInfo();
    }
    updateOtherDataLevel3 = (newData) => {
        const {
            onlyMentalArithmetic,
            pageSubjectFontSize,
            questionFontSize
        } = newData;
        const {
            data,
            onlyMentalArithmeticRadioArray,
            pageSubjectFontSizeElement,
            questionFontSizeElement
        } = this;
        data.onlyMentalArithmetic = onlyMentalArithmetic;
        data.pageSubjectFontSize = pageSubjectFontSize;
        data.questionFontSize = questionFontSize;
        onlyMentalArithmeticRadioArray[onlyMentalArithmetic ? 1 : 0].checked = true;
        pageSubjectFontSizeElement.value = pageSubjectFontSize;
        questionFontSizeElement.value = questionFontSize;
    };
    initExhaustibleAMultiplyBInfo = () => {
        const {
            exhaustibleAMultiplyBInfo
        } = this;
        const {
            aMultiplyBMaybeCarryArray,
            aMultiplyBMaybeNotCarryArray,
            aMultiplyBMaybeDebitMinusArray,
            aMultiplyBMaybeNotDebitMinusArray
        } = exhaustibleAMultiplyBInfo;
        for (let a = 1; a < 10; ++a) {
            for (let b = 1; b < 10; ++b) {
                const aMultiplyB = a * b;
                const digits = aMultiplyB % 10;
                const item = {
                    A: a,
                    B: b,
                    aMultiplyB
                };
                if (digits > 0) {
                    aMultiplyBMaybeCarryArray.push(item);
                }
                if (digits < 9) {
                    if (aMultiplyB > 9) aMultiplyBMaybeDebitMinusArray.push(item);
                }
                aMultiplyBMaybeNotDebitMinusArray.push(item);
                aMultiplyBMaybeNotCarryArray.push(item);
            }
        }
        exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryMaxIndex = aMultiplyBMaybeCarryArray.length - 1;
        exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryMaxIndex = aMultiplyBMaybeNotCarryArray.length - 1;
        exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusMaxIndex = aMultiplyBMaybeDebitMinusArray.length - 1;
        exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusMaxIndex = aMultiplyBMaybeNotDebitMinusArray.length - 1;
    };
    initPlusOrSubtractDictionaryNotGreatThan100Array = () => {
        for (let a = 0; a <= 100; ++a) {
            const aDigits = a % 10;
            const addendWithCarryArray = [];
            const addendWithoutCarryArray = [];
            const subtractorWithDebitMinusArray = [];
            const subtractorWithoutDebitMinusArray = [];
            const addendMax = 100 - a;
            const subtractorMax = a;
            const bMax = Math.max(addendMax, subtractorMax);
            const bDigitMinWhenCarry = Math.max(1, 10 - aDigits);
            for (let b = 0; b <= bMax; ++b) {
                const bDigits = b % 10;
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
            this.plusOrSubtractDictionaryNotGreatThan100Array.push({
                addendWithCarryArray,
                addendWithoutCarryArray,
                subtractorWithDebitMinusArray,
                subtractorWithoutDebitMinusArray,
                addendWithCarryMaxIndex: addendWithCarryArray.length - 1,
                addendWithoutCarryMaxIndex: addendWithoutCarryArray.length - 1,
                subtractorWithDebitMinusMaxIndex: subtractorWithDebitMinusArray.length - 1,
                subtractorWithoutDebitMinusMaxIndex: subtractorWithoutDebitMinusArray.length - 1
            });
        }
    };
    initExhaustibleArray = () => {
        this.fillExhaustibleArray1();
        this.fillExhaustibleArray2();
        this.fillExhaustibleArray3();
        this.fillExhaustibleArray4();
        this.fillExhaustibleArray5();
    };
    exhaustibleAMultiplyBInfo = {
        aMultiplyBMaybeCarryArray: [],
        aMultiplyBMaybeNotCarryArray: [],
        aMultiplyBMaybeDebitMinusArray: [],
        aMultiplyBMaybeNotDebitMinusArray: [],
        aMultiplyBMaybeCarryMaxIndex: -1,
        aMultiplyBMaybeNotCarryMaxIndex: -1,
        aMultiplyBMaybeDebitMinusMaxIndex: -1,
        aMultiplyBMaybeNotDebitMinusMaxIndex: -1
    };
    fillExhaustibleArray1 = () => {
        const catalog = 'A+B=C';
        const {
            exhaustibleArray
        } = this;
        [
            '1-5',
            '0-5',
            '0-10',
            '0-20'
        ].forEach((scope) => {
            const segArray = scope.split('-');
            const min = parseInt(segArray[0], 0);
            const max = parseInt(segArray[1], 0);
            const list = [];
            for (let a = min; a <= max; ++a) {
                const bMax = max - a;
                for (let b = min; b <= bMax; ++b) {
                    const result = a + b;
                    const commonHtml = `${a} + ${b} = `.replace(/ /g, '<i> </i>');
                    const question = `<p>${commonHtml}</p>`;
                    const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
                    list.push({
                        question,
                        questionFull: question,
                        answer,
                        answerFull: answer
                    });
                }
            }
            exhaustibleArray.push({
                kind: `${catalog}_${scope}`,
                list,
                countPerSet: list.length
            });
        });
    };
    fillExhaustibleArray2 = () => {
        const catalog = 'A-B=C';
        const {
            exhaustibleArray
        } = this;
        [
            '1-5',
            '0-5',
            '0-10',
            '0-20'
        ].forEach((scope) => {
            const segArray = scope.split('-');
            const min = parseInt(segArray[0], 0);
            const max = parseInt(segArray[1], 0);
            const list = [];
            for (let a = min * 2; a <= max; ++a) {
                const bMax = a - min;
                for (let b = min; b <= bMax; ++b) {
                    const result = a - b;
                    const commonHtml = `${a} - ${b} = `.replace(/ /g, '<i> </i>');
                    const question = `<p>${commonHtml}</p>`;
                    const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
                    list.push({
                        question,
                        questionFull: question,
                        answer,
                        answerFull: answer
                    });
                }
            }
            exhaustibleArray.push({
                kind: `${catalog}_${scope}`,
                list,
                countPerSet: list.length
            });
        });
    };
    fillExhaustibleArray3 = () => {
        const catalog = 'A+B=C D-E=F';
        const {
            exhaustibleArray
        } = this;
        [
            '1-5',
            '0-5',
            '0-10',
            '0-20'
        ].forEach((scope) => {
            const segArray = scope.split('-');
            const min = parseInt(segArray[0], 0);
            const max = parseInt(segArray[1], 0);
            const list = [];
            for (let a = min; a <= max; ++a) {
                const bMax = max - a;
                for (let b = min; b <= bMax; ++b) {
                    const result = a + b;
                    const commonHtml = `${a} + ${b} = `.replace(/ /g, '<i> </i>');
                    const question = `<p>${commonHtml}</p>`;
                    const answer = `<p>${commonHtml}<answer chars="2">${result}</answer></p>`;
                    list.push({
                        question,
                        questionFull: question,
                        answer,
                        answerFull: answer
                    });
                }
            }
            for (let a1 = min * 2; a1 <= max; ++a1) {
                const bMax1 = a1 - min;
                for (let b1 = min; b1 <= bMax1; ++b1) {
                    const result1 = a1 - b1;
                    const commonHtml1 = `${a1} - ${b1} = `.replace(/ /g, '<i> </i>');
                    const question1 = `<p>${commonHtml1}</p>`;
                    const answer1 = `<p>${commonHtml1}<answer chars="2">${result1}</answer></p>`;
                    list.push({
                        question: question1,
                        questionFull: question1,
                        answer: answer1,
                        answerFull: answer1
                    });
                }
            }
            exhaustibleArray.push({
                kind: `${catalog}_${scope}`,
                list,
                countPerSet: list.length
            });
        });
    };
    fillExhaustibleArray4 = () => {
        const catalog = 'A×B=C';
        const {
            exhaustibleArray
        } = this;
        [
            '9×9A',
            '9×9B'
        ].forEach((scope) => {
            const bStartFrom1 = scope === '9×9B';
            const list = [];
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
                        answerFull: answer
                    });
                }
            }
            exhaustibleArray.push({
                kind: `${catalog}_${scope}`,
                list,
                countPerSet: list.length
            });
        });
    };
    fillExhaustibleArray5 = () => {
        const catalog = 'A+B+C=10/20/n';
        const {
            exhaustibleArray
        } = this;
        const scope = 'A';
        const list = [];
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
                    answerFull: answer
                });
            }
        }
        exhaustibleArray.push({
            kind: `${catalog}_${scope}`,
            list,
            countPerSet: list.length
        });
    };
    countDataAndComputedData = () => {
        this.countDataAndComputedDataInBrickWithTableBase();
        const {
            computedData,
            mmToPxScale
        } = this;
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
            pageSubjectFontSize,
            questionFontSize
        } = this.data;
        computedData.css = `/* common.css */
* { margin:0;border:0;padding:0; }
* { box-sizing:border-box; }

/* landscape 横向 portrait 纵向*/
@media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
page:not(page:last-child){page-break-after:always;}

html{font-size:${pageSubjectFontSize.length === 0 ? pageSubjectFontSize : 'inherit'};}
.questionPage row:not(row.subject), .answerPage row:not(row.subject)
{font-size:${questionFontSize.length === 0 ? questionFontSize : 'inherit'};}

body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}
page { display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start; }
page { width:${MAX_X}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; }
page { height:${MAX_Y}mm; }

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
            en_us: 'Five minute pass',
            zh_cn: '五分钟闯关',
            zh_tw: '五分鐘闖關'
        };
        const i18nAnswerFlag = {
            en_us: 'Answer',
            zh_cn: '答案',
            zh_tw: '答案'
        };
        const {
            data: {
                year,
                month,
                day
            }
        } = this;
        const i18nSubtitle = {
            en_us: `<span class="subtitleDay">${day}</span> <span class="subtitleMonth">${month}</span>, <span class="subtitleYear">${year}</span>`,
            zh_cn: `<span class="subtitleYear">${year}</span>年<span class="subtitleMonth">${month}</span>月<span class="subtitleDay">${day}</span>日`,
            zh_tw: `<span class="subtitleYear">${year}</span>年<span class="subtitleMonth">${month}</span>月<span class="subtitleDay">${day}</span>日`
        };
        const HTML_SUBJECT = `<span class="subject">${i18nSubject[LANG]}&nbsp;</span>&nbsp;`;
        const HTML_SUBTITLE = `<div class="subtitle">${i18nSubtitle[LANG]}</div>`;
        const titlePostfix = `_${NOW.getFullYear()}${'0'.concat((NOW.getMonth() + 1).toString()).substr(-2)}${'0'.concat(NOW.getDate().toString()).substr(-2)}`.concat(`_${'0'.concat(NOW.getHours().toString()).substr(-2)}${'0'.concat(NOW.getMinutes().toString()).substr(-2)}${'0'.concat(NOW.getSeconds().toString()).substr(-2)}`, list.length < 4 ? '_'.concat(list.map(({
            kind
        }) => kind).join('_and_')) : '');
        const en_us = `${FILENAME_POSTFIX}mathStage_${titlePostfix}`;
        const zh_cn = `${FILENAME_POSTFIX}数学五分钟闯关_${titlePostfix}`;
        const zh_tw = `${FILENAME_POSTFIX}數學五分鐘闖關_${titlePostfix}`;
        computedData.title = {
            en_us,
            zh_cn,
            zh_tw
        };
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
    getReportHtml = (questionPageStartHtml, answerPageStartHtml) => {
        const {
            data: {
                list
            }
        } = this;
        const questionRowsArray = [];
        const answerRowsArray = [];
        let questionHtml = '';
        let answerHtml = '';
        let questionPageIndex = 0;
        let answerPageIndex = 0;
        list.filter(({
            independentPagination
        }) => independentPagination).forEach((info) => {
            this.appendReportElements(info, questionRowsArray, answerRowsArray);
        });
        questionRowsArray.forEach(({
            rowsOccupied,
            rows
        }) => {
            questionHtml += this.getIndependentPaginationHtml(rowsOccupied, rows, questionPageStartHtml, questionPageIndex);
        });
        answerRowsArray.forEach(({
            rowsOccupied,
            rows
        }) => {
            answerHtml += this.getIndependentPaginationHtml(rowsOccupied, rows, answerPageStartHtml, answerPageIndex);
        });
        questionPageIndex = questionHtml.split('</page>').length - 1;
        answerPageIndex = answerHtml.split('</page>').length - 1;
        questionRowsArray.length = 0;
        answerRowsArray.length = 0;
        list.filter(({
            independentPagination
        }) => !independentPagination).forEach((info) => {
            this.appendReportElements(info, questionRowsArray, answerRowsArray);
        });
        questionHtml += this.getDependentPagingHtml(questionRowsArray, questionPageStartHtml, questionPageIndex);
        answerHtml += this.getDependentPagingHtml(answerRowsArray, answerPageStartHtml, answerPageIndex);
        const questionPageCount = (questionHtml.split('</page>').length - 1).toString();
        const answerPageCount = (answerHtml.split('</page>').length - 1).toString();
        return questionHtml.replace(/~reporterPageCount~/g, questionPageCount).concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
    };
    getIndependentPaginationHtml = (rowsOccupied, rows, pageStartHtml, pageIndex) => {
        if (!rows.length) return '';
        if (this.data.onlyMentalArithmetic) rowsOccupied = this.defaultRowsOccupied;
        const {
            smallRowCountPerPage
        } = this;
        let html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
        let remainingRowCount = smallRowCountPerPage;
        rows.forEach((row) => {
            if (rowsOccupied > remainingRowCount) {
                html += `</page>${pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString())}`;
                remainingRowCount = smallRowCountPerPage;
            }
            html += row.outerHTML;
            remainingRowCount = this.formatCentile(remainingRowCount - rowsOccupied);
        });
        html += '</page>';
        return html;
    };
    smallRowCountPerPage = 48;
    defaultRowCountPerPage = 25;
    defaultRowsOccupied = this.smallRowCountPerPage / this.defaultRowCountPerPage;
    getDependentPagingHtml = (rowArray, pageStartHtml, pageIndex) => {
        if (!rowArray.length) return '';
        const forceSetRowsOccupiedToDefault = this.data.onlyMentalArithmetic;
        const {
            smallRowCountPerPage,
            defaultRowsOccupied
        } = this;
        let html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
        let remainingRowCount = smallRowCountPerPage;
        rowArray.forEach(({
            rowsOccupied,
            rows
        }) => {
            if (forceSetRowsOccupiedToDefault) rowsOccupied = defaultRowsOccupied;
            rows.forEach((row) => {
                if (rowsOccupied > remainingRowCount) {
                    html += `</page>${pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString())}`;
                    remainingRowCount = smallRowCountPerPage;
                }
                html += row.outerHTML;
                remainingRowCount = this.formatCentile(remainingRowCount - rowsOccupied);
            });
        });
        html += '</page>';
        return html;
    };
    plusOrSubtractDictionaryNotGreatThan100Array = [];
    getAddendWithCarry = (other) => {
        const plusOrSubtractDictionaryNotGreatThan100 = this.plusOrSubtractDictionaryNotGreatThan100Array[other];
        if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') return 0;
        return plusOrSubtractDictionaryNotGreatThan100.addendWithCarryArray[this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.addendWithCarryMaxIndex)];
    };
    getAddendWithoutCarry = (other) => {
        const plusOrSubtractDictionaryNotGreatThan100 = this.plusOrSubtractDictionaryNotGreatThan100Array[other];
        if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') return 0;
        const array = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryArray;
        const maxIndex = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryMaxIndex;
        if (maxIndex === 0) return array[0];
        const {
            getIntegerRandom
        } = this;
        return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
    };
    getSubtractorWithDebitMinus = (minuend) => {
        const plusOrSubtractDictionaryNotGreatThan100 = this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
        if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') return 0;
        return plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusArray[this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusMaxIndex)];
    };
    getSubtractorWithoutDebitMinus = (minuend) => {
        const plusOrSubtractDictionaryNotGreatThan100 = this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
        if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') return 0;
        const array = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusArray;
        const maxIndex = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusMaxIndex;
        if (maxIndex === 0) return array[0];
        const {
            getIntegerRandom
        } = this;
        return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
    };
    getMaybeCarryTwiceNumbers(has) {
        const {
            getIntegerRandom
        } = this;
        let a, b, c, d;
        if (has) {
            if (getIntegerRandom(1, 10) < 3) {
                const digitsOfC = getIntegerRandom(1, 9);
                const tensOfC = getIntegerRandom(0, 7);
                c = 10 * tensOfC + digitsOfC;
                let A_B = 0;
                if (getIntegerRandom(0, 2)) {
                    A_B = 10 * getIntegerRandom(1, 10 - tensOfC) + getIntegerRandom(11 - digitsOfC, 9);
                    if (A_B > 100) A_B -= 10;
                    if (A_B + c > 100) A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
                } else {
                    A_B = 100 - c;
                }
                const aMaxDigit = Math.floor(A_B % 10);
                a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) + getIntegerRandom(0, aMaxDigit);
                b = A_B - a;
                if (getIntegerRandom(0, 1)) {
                    a += c;
                    c = a - c;
                    a = a - c;
                }
                if (c === 0) c = 100 - a - b;
            } else {
                const digitsOfC1 = getIntegerRandom(2, 9);
                const tensOfC1 = getIntegerRandom(0, 7);
                c = 10 * tensOfC1 + digitsOfC1;
                let A_B1 = 0;
                if (getIntegerRandom(0, 2)) {
                    A_B1 = 10 * getIntegerRandom(1, 10 - tensOfC1) + getIntegerRandom(11 - digitsOfC1, 9);
                    if (A_B1 > 100) A_B1 -= 10;
                    if (A_B1 + c > 100) A_B1 -= 10 * Math.ceil((A_B1 + c - 100) / 10);
                } else {
                    A_B1 = 100 - c;
                }
                const aMinDigit = A_B1 % 10 + 1;
                if (A_B1 < 10) {
                    a = getIntegerRandom(aMinDigit, 9);
                } else {
                    a = 10 * getIntegerRandom(0, Math.floor(A_B1 / 10)) + getIntegerRandom(aMinDigit, 9);
                    if (a > A_B1) a -= 10;
                }
                b = A_B1 - a;
            }
        } else {
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
            b = 10 * getIntegerRandom(Math.floor(tensOfBPlusC / 2), tensOfBPlusC);
            const digitOfBPlusC = B_C % 10;
            if (B_C % 10) {
                b += getIntegerRandom(1, Math.min(digitOfBPlusC, Math.floor(digitOfBPlusC / 2) * 1.5));
            }
            c = B_C - b;
        }
        d = a + b + c;
        return {
            a,
            b,
            c,
            d
        };
    }
    questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3 = '<div edu-flex="3"></div>';
    questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4 = '<div edu-flex="4"></div>';
    questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6 = '<div edu-flex="6"></div>';
    questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8 = '<div edu-flex="8"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
    questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4 = '<div edu-flex="4"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p></answer-option></div>';
    questionElementHtmlAppendStart8 = '<div edu-flex="8">';
    questionElementHtmlAppendStart6 = '<div edu-flex="6">';
    questionElementHtmlAppendStart4 = '<div edu-flex="4">';
    questionElementHtmlAppendStart3 = '<div edu-flex="3">';
    fillElementArrayOfAPlusB(has, min, max, questionElementArray, answerElementArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom,
            getAddendWithCarry,
            getAddendWithoutCarry,
            getHtmlOfAPlusB
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3;
        let A;
        let B;
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
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml}${result}</p>`;
        if (!onlyMentalArithmetic) {
            const charsStr = (result.toString().length + 1).toString();
            answerElementHtml += `${this.questionElementHtmlAppendStart4}<answer-option edu-chars="${charsStr}"><p></p>${getHtmlOfAPlusB(A, B, result)}</answer-option></div>`;
        }
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    }
    getHtmlOfAPlusB(A, B, result) {
        const tensCarryHtml = A % 10 + B % 10 > 9 ? '<carry edu-digit="tens">1</carry>' : '';
        const hundredsCarryHtml = A % 100 + B % 100 > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
        return `<p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
    }
    getSimleHtmlOfAMultiplyB = (A, B, result) => {
        return `<p><number>${A}</number></p><p><operator>×</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
    };
    isOnlyFirstIsNotZero = (numberal) => {
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
    getHtmlOfAMultiplyB(A, B, result) {
        const {
            getSimleHtmlOfAMultiplyB
        } = this;
        if (B < 10) {
            return getSimleHtmlOfAMultiplyB(A, B, result);
        }
        if (A < 10) {
            return getSimleHtmlOfAMultiplyB(B, A, result);
        }
        const {
            isOnlyFirstIsNotZero
        } = this;
        if (isOnlyFirstIsNotZero(B)) {
            return getSimleHtmlOfAMultiplyB(A, B, result);
        }
        if (isOnlyFirstIsNotZero(A)) {
            return getSimleHtmlOfAMultiplyB(B, A, result);
        }
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
        const numberArray = [];
        const carryArray = [];
        const resultLength = result.toString().length;
        for (let i = 0; i < resultLength; ++i) {
            carryArray.push(0);
            numberArray.push(0);
        }
        for (let i1 = bLength; i1 > 0; --i1) {
            html += `<p edu-right-char="${bLength - i1}">`;
            const product = A * parseInt(bStr.substring(i1 - 1, i1), 0);
            html += `<number>${product}</number>`;
            const productChars = product.toString().split('');
            const productCharCount = productChars.length;
            for (let charLoop = productCharCount; charLoop > 0; --charLoop) {
                const __char = productChars[charLoop - 1];
                const arrayIndex = resultLength - 1 - (bLength - i1) - (productCharCount - charLoop);
                console.log(JSON.stringify({
                    product,
                    charLoop,
                    char: __char,
                    resultLength,
                    i: i1,
                    arrayIndex
                }));
                numberArray.splice(arrayIndex, 1, numberArray[arrayIndex] + parseInt(__char, 0));
            }
            if (i1 !== 1) html += `</p>`;
        }
        console.log(A, B, result, JSON.stringify(numberArray));
        for (let i2 = resultLength - 1; i2 > 0; --i2) {
            const arrayIndex1 = i2;
            const numeral = numberArray[arrayIndex1];
            if (numeral > 9) {
                const carry = Math.floor(numeral / 10);
                const previousIndex = arrayIndex1 - 1;
                carryArray.splice(previousIndex, 1, carry);
                numberArray.splice(previousIndex, 1, numberArray[previousIndex] + carry);
            }
        }
        console.log(JSON.stringify(numberArray), JSON.stringify(carryArray));
        const {
            eduDigitArray
        } = this;
        for (let i3 = 0; i3 < resultLength; ++i3) {
            const carryNumber = carryArray[i3];
            if (carryNumber > 0) {
                html += `<carry edu-digit="${eduDigitArray[resultLength - 2 - i3]}">${carryNumber}</carry>`;
            }
        }
        html += `</p>`;
        html += `<hr><p><number>${result}</number></p>`;
        return html;
    }
    eduDigitArray = [
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
        `thousands-billions`
    ];
    fillElementArrayOfASubtractB(has, min, max, questionElementArray, answerElementArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getDebitHtml,
            getIntegerRandom,
            getSubtractorWithDebitMinus,
            getSubtractorWithoutDebitMinus
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
        let A;
        let B;
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
        let questionElementHtml = `<p>${commonHtml.replace(/ /g, '<i> </i>')}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml.replace(/ /g, '<i> </i>')}${result}</p>`;
        if (!onlyMentalArithmetic) {
            const debitHtml = getDebitHtml(A, B);
            answerElementHtml += `${this.questionElementHtmlAppendStart4}<answer-option edu-chars="${charsStr}">${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p></answer-option></div>`;
        }
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    }
    getDebitHtml(A, B) {
        const aDigits = A % 10;
        const bDigits = B % 10;
        const tensNeedDebit = aDigits < bDigits;
        const aHundreds = A % 100;
        const hundredsNeedDebit = aHundreds < B % 100;
        const aThousands = A % 1000;
        const thousandsNeedDebit = aThousands < B % 1000;
        if (!tensNeedDebit && !hundredsNeedDebit) return '';
        const digitDebitHtml = tensNeedDebit ? `<debit edu-digit="digit"><debit-number>${10 + aDigits}</debit-number></debit>` : '';
        const tensDebitHtml = tensNeedDebit || hundredsNeedDebit ? `<debit edu-digit="tens"><debit-number>${(hundredsNeedDebit ? 10 : 0) + Math.floor(aHundreds / 10) - (tensNeedDebit ? 1 : 0)}</debit-number>${tensNeedDebit ? '<debit-circle>·</debit-circle>' : ''}</debit>` : '';
        const hundredsDebitHtml = hundredsNeedDebit ? `<debit edu-digit="hundreds"><debit-number>${(thousandsNeedDebit ? 10 : 0) + Math.floor(A % 1000 / 100) - (hundredsNeedDebit ? 1 : 0)}</debit-number><debit-circle>·</debit-circle></debit>` : '';
        return `<p class="debit">&nbsp;${hundredsDebitHtml}${tensDebitHtml}${digitDebitHtml}</p>`;
    }
    getDebitHtmlOfASubstractB(A, B, aSubstractB) {
        return `${this.getDebitHtml(A, B)}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${aSubstractB}</number></p>`;
    }
    fillElementArrayOfAPlusBThenC = (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets = false) => {
        let a, b, c, d;
        ({
            a,
            b,
            c,
            d
        } = this.getMaybeCarryTwiceNumbers(has));
        const A = a;
        const B = b;
        const C = c;
        const result = d;
        const charsStr = (result.toString().length + 1).toString();
        const commonHtml = withBrackets ? `${C}<i> </i>+<i> </i>(${A}<i> </i>+<i> </i>${B})<i> </i>=<i> </i>` : `${A}<i> </i>+<i> </i>${B}<i> </i>+<i> </i>${C}<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
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
            const tensCarryHtml = tensCarry ? `<carry edu-digit="tens">${Math.floor((aDidits + bDidits + cDidits) / 10)}</carry>` : '';
            const hundredsCarryHtml = hundredsCarry ? `<carry edu-digit="hundreds">${Math.floor((aLastTowDigits + bLastTowDigits + cLastTowDigits) / 100)}</carry>` : '';
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
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    fillElementArrayOfASubtractBThenC = (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets = false) => {
        const {
            getIntegerRandom,
            getAddendWithCarry,
            getAddendWithoutCarry,
            getDebitHtml,
            getHtmlOfAPlusB
        } = this;
        let a, b, c, d;
        if (withBrackets) {
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
                const bTens1 = getIntegerRandom(2, 8);
                const bDigits1 = getIntegerRandom(1, 8);
                b = 10 * bTens1 + bDigits1;
                c = this.getAddendWithoutCarry(b);
                const bPlusC1 = b + c;
                if (bPlusC1 % 10 === 0) {
                    a = bPlusC1 === 100 ? 100 : 10 * getIntegerRandom(Math.ceil(bPlusC1 / 10), 10);
                } else {
                    a = bPlusC1 + getAddendWithoutCarry(bPlusC1);
                }
            }
            d = a - b - c;
            ({
                a,
                b,
                c,
                d
            } = {
                a: b,
                b: c,
                c: d,
                d: a
            });
        } else {
            ({
                a,
                b,
                c,
                d
            } = this.getMaybeCarryTwiceNumbers(has));
        }
        const A = d;
        const B = a;
        const C = b;
        const result = c;
        const charsStr = (A.toString().length + 1).toString();
        const commonHtml = withBrackets ? `${A}<i> </i>-<i> </i>(${B}<i> </i>+<i> </i>${C})<i> </i>=<i> </i>` : `${A}<i> </i>-<i> </i>${B}<i> </i>-<i> </i>${C}<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml}${result}</p>`;
        if (onlyMentalArithmetic) {
            this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            return;
        }
        answerElementHtml += this.questionElementHtmlAppendStart8;
        const aDidits = A % 10;
        const bDidits = B % 10;
        const cDidits = C % 10;
        const aSubstractB = A - B;
        const bPlusC2 = B + C;

        function doneBPlusCAndThenASubstractIt() {
            const debitHtml = getDebitHtml(A, bPlusC2);
            answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
            answerElementHtml += getHtmlOfAPlusB(B, C, bPlusC2);
            answerElementHtml += '<hr class="step"/>';
            answerElementHtml += `${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${bPlusC2}</number></p><hr><p><number>${result}</number></p>`;
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
            const htmlSubstractTwice = ''.concat(`<answer-option edu-chars="${charsStr}">`, `${debitHtml1}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr>`, `${debitHtml2}<p><number>${aSubstractB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`, '</answer-option>');
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
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    fillElementArrayOfASubtractBThenPlusC = (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets = false) => {
        const {
            getIntegerRandom,
            getAddendWithCarry,
            getAddendWithoutCarry,
            getSubtractorWithDebitMinus,
            getSubtractorWithoutDebitMinus,
            getDebitHtml,
            getHtmlOfAPlusB
        } = this;
        let A, B, C, aSubstractB;
        if (withBrackets) {
            const bRandom = getIntegerRandom(0, 99);
            const bTens = bRandom > 10 ? 10 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
            if (has) {
                const bDidits = bTens === 10 ? 0 : getIntegerRandom(0, 8);
                B = 10 * bTens + bDidits;
                C = getSubtractorWithDebitMinus(B);
                const bSubstractC = B - C;
                A = bSubstractC + (getIntegerRandom(0, 4) && bSubstractC % 10 ? getAddendWithCarry(bSubstractC) : getAddendWithoutCarry(bSubstractC));
            } else {
                const bDidits1 = getIntegerRandom(1, 9);
                B = 10 * Math.min(9, bTens) + bDidits1;
                C = getSubtractorWithoutDebitMinus(B);
                const bSubstractC1 = B - C;
                A = bSubstractC1 + (getIntegerRandom(0, 4) && bSubstractC1 % 10 ? getAddendWithCarry(bSubstractC1) : getAddendWithoutCarry(bSubstractC1));
            }
            aSubstractB = A - B;
        } else {
            const aRandom = getIntegerRandom(0, 99);
            const aTens = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
            if (has) {
                const aDigits = getIntegerRandom(1, aRandom > 5 ? 5 : 8);
                A = 10 * aTens + aDigits;
                B = this.getSubtractorWithDebitMinus(A);
                aSubstractB = A - B;
                C = aRandom > 30 ? this.getAddendWithCarry(aSubstractB) : this.getAddendWithoutCarry(aSubstractB);
            } else {
                const aDigits1 = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
                A = 10 * aTens + aDigits1;
                B = this.getSubtractorWithoutDebitMinus(A);
                aSubstractB = A - B;
                C = this.getAddendWithoutCarry(aSubstractB);
            }
        }
        const result = A - B + C;
        const commonHtml = withBrackets ? `${A}<i> </i>-<i> </i>(${B}<i> </i>-<i> </i>${C})<i> </i>=<i> </i>` : `${A}<i> </i>-<i> </i>${B}<i> </i>+<i> </i>${C}<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml}${result}</p>`;
        if (onlyMentalArithmetic) {
            this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            return;
        }
        const aPlusC = A + C;
        const aDigits2 = A % 10;
        const bDigits = B % 10;
        const cDigits = C % 10;
        const aLastTowDigits = A % 100;
        const cLastTowDigits = C % 100;
        const acDigits = aPlusC % 10;
        const charsStr = (aPlusC.toString().length + 1).toString();
        answerElementHtml += `<div edu-flex="8">`;

        function doneAPlusCSubstractB() {
            const tensCarryHtml = aDigits2 + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
            const hundredsCarryHtml = aLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
            const debitHtmlAPlusCSubstractB = getDebitHtml(aPlusC, B);
            answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
            answerElementHtml += `<p><number>${A}</number></p><p><operator>+</operator><number>${C}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr>`;
            answerElementHtml += `${debitHtmlAPlusCSubstractB}<p><number>${aPlusC}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${result}</number></p>`;
            answerElementHtml += `</answer-option>`;
        }
        if (withBrackets) {
            const bSubstractC2 = B - C;
            const debitHtmlStep1 = getDebitHtml(B, C);
            const debitHtmlStep2 = getDebitHtml(A, bSubstractC2);
            answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
            answerElementHtml += `${debitHtmlStep1}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${bSubstractC2}</number></p>`;
            answerElementHtml += '<hr class="step"/><p></p>';
            answerElementHtml += `${debitHtmlStep2}<p><number>${A}</number></p><p><operator>-</operator><number>${bSubstractC2}</number></p><hr><p><number>${result}</number></p>`;
            answerElementHtml += `</answer-option>`;
            if (bDigits !== cDigits) {
                if (A >= B && aDigits2 === bDigits) {
                    const debitHtmlASubstractB = getDebitHtml(A, B);
                    answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
                    answerElementHtml += `${debitHtmlASubstractB}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr><p><number>${aSubstractB}</number></p>`;
                    answerElementHtml += `${getHtmlOfAPlusB(aSubstractB, C, result)}`;
                    answerElementHtml += `</answer-option>`;
                } else if (cDigits && (acDigits === 0 || acDigits === bDigits)) {
                    doneAPlusCSubstractB();
                }
            }
        } else {
            const debitExtendHtmlASubstractB = `${getDebitHtml(A, B)}<p><number>${A}</number></p><p><operator>-</operator><number>${B}</number></p><hr>`;
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
            if (bDigits === cDigits && aDigits2 !== cDigits) {
                const BC = B - C;
                const debitHtml = getDebitHtml(B, C);
                answerElementHtml += `<answer-option edu-chars="${charsStr}"><p></p><p></p>`;
                answerElementHtml += `${debitHtml}<p><number>${B}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
                answerElementHtml += `${getHtmlOfAPlusB(BC, A, result)}`;
                answerElementHtml += `</answer-option>`;
            } else if (bDigits === acDigits || acDigits === 0) {
                doneAPlusCSubstractB();
            }
        }
        answerElementHtml += `</div>`;
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    fillElementArrayOfAPlusBThenSubtractC = (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets = false) => {
        const {
            getIntegerRandom,
            getDebitHtml,
            getHtmlOfAPlusB
        } = this;
        let A, B, C;
        if (withBrackets) {
            const bRandom = getIntegerRandom(0, 99);
            if (has) {
                const bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
                const bDigits = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 8);
                B = 10 * bTens + bDigits;
                C = this.getSubtractorWithDebitMinus(B);
                A = this.getAddendWithCarry(B - C);
            } else {
                const bTens1 = getIntegerRandom(2, !bRandom ? 10 : 9);
                const bDigits1 = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
                B = 10 * bTens1 + bDigits1;
                C = this.getSubtractorWithoutDebitMinus(B);
                A = this.getAddendWithoutCarry(B - C);
            }
        } else {
            if (has) {
                const aRandom = getIntegerRandom(0, 99);
                const aTens = getIntegerRandom(0, 9);
                const aDigits = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
                A = 10 * aTens + aDigits;
                B = this.getAddendWithCarry(A);
                C = aRandom > 30 ? this.getSubtractorWithDebitMinus(A + B) : this.getSubtractorWithoutDebitMinus(A + B);
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
        const commonHtml = withBrackets ? `${A}<i> </i>+<i> </i>(${B}<i> </i>-<i> </i>${C})<i> </i>=<i> </i>` : `${A}<i> </i>+<i> </i>${B}<i> </i>-<i> </i>${C}<i> </i>=<i> </i>`;
        const questionElementHtml = `<p>${commonHtml}</p>${questionElementHtmlAppend}`;
        let answerElementHtml = `<p>${commonHtml}${result}</p>`;
        if (onlyMentalArithmetic) {
            this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            return;
        }
        const AB = A + B;
        const charsStr = (AB.toString().length + 1).toString();
        answerElementHtml += `<div edu-flex="8">`;
        const aDigits1 = A % 10;
        const bDigits2 = B % 10;
        const cDigits1 = C % 10;
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
            const hundredsCarryHtml = acLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
            answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
            answerElementHtml += `${debitHtml}<p><number>${A}</number></p><p><operator>-</operator><number>${C}</number></p><hr>`;
            answerElementHtml += `<p><number>${AC}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr><p><number>${result}</number></p>`;
            answerElementHtml += `</answer-option>`;
        }

        function doneAPlusBSubstractC(twoOption = false) {
            const debitHtmlABSubstractC = getDebitHtml(AB, C);
            if (twoOption) {
                answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
                answerElementHtml += `<p></p>${getHtmlOfAPlusB(A, B, AB)}`;
                answerElementHtml += '<hr class="step"/><p></p>';
                answerElementHtml += `${debitHtmlABSubstractC}<p><number>${AB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`;
                answerElementHtml += `</answer-option>`;
            }
            const tensCarryHtml = aDigits1 + bDigits2 > 9 ? '<carry edu-digit="tens">1</carry>' : '';
            const hundredsCarryHtml = aLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
            answerElementHtml += `<answer-option edu-chars="${charsStr}">`;
            answerElementHtml += `<p><number>${A}</number></p><p><operator>+</operator><number>${B}</number>${hundredsCarryHtml}${tensCarryHtml}</p><hr>`;
            answerElementHtml += `${debitHtmlABSubstractC}<p><number>${AB}</number></p><p><operator>-</operator><number>${C}</number></p><hr><p><number>${result}</number></p>`;
            answerElementHtml += `</answer-option>`;
        }

        function doneBSubstractCThenPlusA(twoOption = false) {
            const BC = B - C;
            const debitHtml = getDebitHtml(B, C);
            const bcDigits = BC % 10;
            const cDigits = C % 10;
            const bcLastTowDigits = BC % 100;
            const cLastTowDigits = C % 100;
            const tensCarryHtml = bcDigits + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
            const hundredsCarryHtml = bcLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
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
            doneBSubstractCThenPlusA();
            if (bDigits2 !== cDigits1) {
                if (bDigits2 && A >= C && aDigits1 === cDigits1) {
                    doneASubstractCPlusB();
                } else if ((aDigits1 + bDigits2) % 10 === 0) {
                    doneAPlusBSubstractC();
                }
            }
        } else {
            doneAPlusBSubstractC(true);
            if (bDigits2 && A >= C && aDigits1 === cDigits1) {
                doneASubstractCPlusB();
            } else if (aDigits1 && B >= C && bDigits2 === cDigits1) {
                doneBSubstractCThenPlusA();
            }
        }
        answerElementHtml += `</div>`;
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    appendReportElements = (info, questionRowsArray, answerRowsArray) => {
        const {
            data: {
                onlyMentalArithmetic
            }
        } = this;
        const {
            kind,
            catalog
        } = info;
        const filterResult = this.exhaustibleArray.filter(({
            kind: kindIndicator
        }) => kindIndicator === kind);
        if (filterResult.length) {
            this.fillExhaustibleList(filterResult[0], info, onlyMentalArithmetic, questionRowsArray, answerRowsArray);
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
            case 'A+B+C+D+E<br/>=10+n/20+n/n':
                this.countByArithmetic12(info, questionRowsArray, answerRowsArray);
                break;
            default:
                break;
        }
    };
    countByArithmetic1(info, questionRowsArray, answerRowsArray) {
        const {
            getIntegerRandom
        } = this;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 1;
                this.fillElementArrayOfAPlusB(has, 11, 100, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic2(info, questionRowsArray, answerRowsArray) {
        const {
            getIntegerRandom
        } = this;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 1;
                this.fillElementArrayOfASubtractB(has, 11, 100, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic3(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom,
            getAddendWithCarry,
            getAddendWithoutCarry,
            getSubtractorWithDebitMinus,
            getSubtractorWithoutDebitMinus
        } = this;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4;
        onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 1;
                if (getIntegerRandom(0, 1)) {
                    this.fillElementArrayOfAPlusB(has, 11, 100, questionElementArray, answerElementArray);
                } else {
                    this.fillElementArrayOfASubtractB(has, 11, 100, questionElementArray, answerElementArray);
                }
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic4(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
        } = this;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6;
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 3;
                this.fillElementArrayOfAPlusBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic5(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 3;
                this.fillElementArrayOfASubtractBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic6(info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, false);
    }
    countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, withBrackets) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        const {
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 3;
                const operatorRandom = getIntegerRandom(0, 3);
                switch (operatorRandom) {
                    case 0:
                        this.fillElementArrayOfAPlusBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        break;
                    case 1:
                        this.fillElementArrayOfASubtractBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        break;
                    default:
                        if (operatorRandom === 2) {
                            this.fillElementArrayOfAPlusBThenSubtractC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        } else {
                            this.fillElementArrayOfASubtractBThenPlusC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        }
                        break;
                }
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic7(info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, true);
    }
    countByArithmetic8(info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, false);
    }
    countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, switchOrder) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom,
            getAddendWithCarry,
            getAddendWithoutCarry,
            getSubtractorWithDebitMinus,
            getSubtractorWithoutDebitMinus
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        const {
            kind,
            catalog,
            scope,
            rows,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const {
            aMultiplyBMaybeCarryArray,
            aMultiplyBMaybeNotCarryArray,
            aMultiplyBMaybeDebitMinusArray,
            aMultiplyBMaybeNotDebitMinusArray,
            aMultiplyBMaybeCarryMaxIndex,
            aMultiplyBMaybeNotCarryMaxIndex,
            aMultiplyBMaybeDebitMinusMaxIndex,
            aMultiplyBMaybeNotDebitMinusMaxIndex
        } = this.exhaustibleAMultiplyBInfo;
        const mustHasnot = scope === '0-100A';
        const mustHas = scope === '0-100B';
        const maybeHas = scope === '0-100C';
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const has = mustHasnot ? false : mustHas || maybeHas && getIntegerRandom(1, 10) > 3;
                const isPlus = getIntegerRandom(0, 1) === 1;
                const operator = isPlus ? '+' : '-';
                let A, B, aMultiplyB;
                let C;
                switch ((isPlus ? 0 : 2) + (has ? 0 : 1)) {
                    case 0:
                        ({
                            A,
                            B,
                            aMultiplyB
                        } = aMultiplyBMaybeCarryArray[getIntegerRandom(0, aMultiplyBMaybeCarryMaxIndex)]);
                        C = getAddendWithCarry(aMultiplyB);
                        break;
                    case 1:
                        ({
                            A,
                            B,
                            aMultiplyB
                        } = aMultiplyBMaybeNotCarryArray[getIntegerRandom(0, aMultiplyBMaybeNotCarryMaxIndex)]);
                        C = getAddendWithoutCarry(aMultiplyB);
                        break;
                    case 2:
                        ({
                            A,
                            B,
                            aMultiplyB
                        } = aMultiplyBMaybeDebitMinusArray[getIntegerRandom(0, aMultiplyBMaybeDebitMinusMaxIndex)]);
                        C = getSubtractorWithDebitMinus(aMultiplyB);
                        if (switchOrder) C += aMultiplyB;
                        break;
                    case 3:
                    default:
                        ({
                            A,
                            B,
                            aMultiplyB
                        } = aMultiplyBMaybeNotDebitMinusArray[getIntegerRandom(0, aMultiplyBMaybeNotDebitMinusMaxIndex)]);
                        C = getSubtractorWithoutDebitMinus(aMultiplyB);
                        if (switchOrder) C += aMultiplyB;
                        break;
                }
                const result = switchOrder ? A * B * (isPlus ? 1 : -1) + C : A * B + C * (isPlus ? 1 : -1);
                const charsStr = ((isPlus ? result : aMultiplyB).toString().length + 1).toString();
                const commonHtml = switchOrder ? `<i> </i>${C}<i> </i>${operator}<i> </i>${A}<i> </i>×<i> </i>${B}<i> </i>=<i> </i>` : `${A}<i> </i>×<i> </i>${B}<i> </i>${operator}<i> </i>${C}<i> </i>=<i> </i>`;
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
                        answerElementHtml += switchOrder ? this.getDebitHtmlOfASubstractB(C, aMultiplyB, result) : this.getDebitHtmlOfASubstractB(aMultiplyB, C, result);
                    }
                    answerElementHtml += '</answer-option>';
                    answerElementHtml += `</div>`;
                }
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic9(info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, true);
    }
    countByArithmetic10(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
        } = this;
        const questionElementHtmlAppend = onlyMentalArithmetic ? '' : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        const {
            kind,
            catalog,
            scope,
            rows,
            independentPagination,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
        } = info;
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
        const questionRows = [];
        const answerRows = [];
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                const A = getIntegerRandom(minMultiplier, maxMultiplier);
                const B_C = getIntegerRandom(1, maxMultiplier);
                const isPlus = B_C < 3 || getIntegerRandom(1, 2) < 2;
                let B;
                let C;
                if (isPlus) {
                    B = getIntegerRandom(1, B_C);
                    C = B_C - B;
                } else {
                    C = getIntegerRandom(1, 100 - B_C);
                    B = C + B_C;
                }
                const result = A * (B + C * (isPlus ? 1 : -1));
                const charsStr = ((isPlus ? result : Math.max(result, B)).toString().length + 1).toString();
                const commonHtml = `${A}<i> </i>×<i> </i>(${B}<i> </i>${isPlus ? '+' : '-'}<i> </i>${C})<i> </i>=<i> </i>`;
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
                    if (A < 10) {
                        answerElementHtml += `<p><operator>×</operator><number>${A}</number></p><hr><p><number>${result}</number></p>`;
                    } else {
                        answerElementHtml += '<hr class="step"/>';
                        answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
                    }
                    answerElementHtml += '</answer-option>';
                    answerElementHtml += `</div>`;
                }
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic11(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
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
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                let B;
                let C;
                let questionElementHtml;
                let answerElementHtml;
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
                } else {
                    C = 10 - (A + B) % 10;
                }
                answerElementHtml = (A + B + C).toString();
                const html = [
                    A,
                    B,
                    C
                ].join(' + ').concat(' = ');
                questionElementHtml = `<p>${html.replace(/ /g, '<i> </i>')}</p>`;
                answerElementHtml = `<p>${html.replace(/ /g, '<i> </i>')}${answerElementHtml}</p>`;
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    countByArithmetic12(info, questionRowsArray, answerRowsArray) {
        const {
            data: {
                onlyMentalArithmetic
            },
            getIntegerRandom
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
            rowCountPerPage
        } = info;
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        for (let rowIndex = 0; rowIndex < rows; ++rowIndex) {
            const questionElementArray = [];
            const answerElementArray = [];
            for (let questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                let B;
                let C;
                let D;
                let E;
                let A_B;
                let A_B_C;
                let A_B_C_D;
                let questionElementHtml;
                let answerElementHtml;
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
                        if ((A_B_C + D) % 10 && (A + D) % 10 && (B + D) % 10 && (C + D) % 10 && (A_B + D) % 10) break;
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
                            answerElementHtml = [
                                A,
                                B
                            ].sort((prev, next) => prev - next).join(' ');
                            break;
                        case 2:
                            while (true) {
                                B = getIntegerRandom(1, 9);
                                if ((A + B) % 10) break;
                            }
                            C = 10 - (A + B) % 10;
                            D = getIntegerRandom(1, 9);
                            E = getIntegerRandom(1, 9);
                            answerElementHtml = [
                                A,
                                B,
                                C
                            ].sort((prev, next) => prev - next).join(' ');
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
                            D = 10 - (A + B + C) % 10;
                            E = getIntegerRandom(1, 9);
                            answerElementHtml = [
                                A,
                                B,
                                C,
                                D
                            ].sort((prev, next) => prev - next).join(' ');
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
                                if ((A_B_C + D) % 10 && (A + D) % 10 && (B + D) % 10 && (C + D) % 10 && (A_B + D) % 10) break;
                            }
                            E = 10 - (A + B + C + D) % 10;
                            answerElementHtml = [
                                A,
                                B,
                                C,
                                D,
                                E
                            ].sort((prev, next) => prev - next).join(' ');
                            break;
                    }
                }
                questionElementHtml = '10n: '.concat([
                    A,
                    B,
                    C,
                    D,
                    E
                ].sort((prev, next) => prev - next).join(' '));
                answerElementHtml = `${questionElementHtml} => ${answerElementHtml}`;
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    exhaustibleArray = [];
    getIntegerRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    fillElementList = (onlyMentalArithmetic, item, questionElementArray, answerElementArray) => {
        const question = onlyMentalArithmetic ? item.question : item.questionFull;
        const answer = onlyMentalArithmetic ? item.answer : item.answerFull;
        this.fillElementListCore(question, answer, questionElementArray, answerElementArray);
    };
    fillElementListCore(question, answer, questionElementArray, answerElementArray) {
        const questionElement = createElement('cell');
        questionElement.innerHTML = question;
        questionElementArray.push(questionElement);
        const answerElement = createElement('cell');
        answerElement.innerHTML = answer;
        answerElementArray.push(answerElement);
        const withoutOuterLine = answer.indexOf('<div edu-flex=') === -1;
        if (withoutOuterLine) {
            answerElement.setAttribute('edu-without-outer-line', '');
        }
    }
    createTableBodyRow = (item) => {
        const {
            kind,
            catalog,
            scope,
            rows,
            countPerRow,
            rowsOccupied,
            rowCountPerPage,
            independentPagination,
            textStyle
        } = item;
        const {
            tableBodyElement
        } = this;
        const tr = createElement('tr');
        tableBodyElement.appendChild(tr);
        this.appendOperationTd(tr, item);
        this.appendReadonlyTd(tr, catalog);
        this.appendReadonlyTd(tr, scope);
        this.appendNumberTd(tr, rows, item, 'rows', 1, null, 1);
        this.appendCheckboxTdWithoutText(tr, independentPagination, item, 'independentPagination');
        this.appendTextboxTd(tr, textStyle, item, 'textStyle');
        this.appendReadonlyTd(tr, countPerRow);
        this.appendReadonlyTd(tr, rowsOccupied);
        this.appendReadonlyTd(tr, rowCountPerPage);
    };
    initTableHead = () => {
        this.appendTableHeadCell({
            en_us: 'Catalog',
            zh_cn: '大类',
            zh_tw: '大類'
        });
        this.appendTableHeadCell({
            en_us: 'Scope',
            zh_cn: '范围',
            zh_tw: '範圍'
        });
        this.appendTableHeadCell({
            en_us: 'Rows',
            zh_cn: '行数',
            zh_tw: '行數'
        });
        this.appendTableHeadCell({
            en_us: 'Independent Pagination',
            zh_cn: '独立分页',
            zh_tw: '獨立分頁'
        });
        this.appendTableHeadCell({
            en_us: 'Text Style',
            zh_cn: '文本样式',
            zh_tw: '文字樣式'
        });
        this.appendTableHeadCell({
            en_us: 'Count Per Row',
            zh_cn: '每行题数',
            zh_tw: '每行題數'
        });
        this.appendTableHeadCell({
            en_us: 'Item Row Count',
            zh_cn: '题目占行',
            zh_tw: '題目占行'
        });
        this.appendTableHeadCell({
            en_us: 'Item Count Per Page',
            zh_cn: '每页题行',
            zh_tw: '每頁題行'
        });
    };
    onPageSizeChanged = (newPageSize) => {
        const {
            isLandscapeRadioArray,
            data
        } = this;
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
    };
    getUsableList = () => {
        const {
            appendUsableItem,
            addCommonItem,
            smallRowCountPerPage,
            formatCentile
        } = this;
        const usableList = [];
        const buttonList = [];
        let catalog;
        const textStyle = '';
        const rowsOccupied = formatCentile(smallRowCountPerPage / 25);
        const rowsOccupiedOf10 = formatCentile(smallRowCountPerPage / 10);
        const rowsOccupiedOf8 = formatCentile(smallRowCountPerPage / 8);
        const rowsOccupiedOf6 = formatCentile(smallRowCountPerPage / 6);
        const kindArray = [];
        catalog = 'A+B=C';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '1-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-10',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-20',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 10,
            rowsOccupied: rowsOccupiedOf10,
            rowCountPerPage: 10,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 10,
            rowsOccupied: rowsOccupiedOf10,
            rowCountPerPage: 10,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 10,
            rowsOccupied: rowsOccupiedOf10,
            rowCountPerPage: 10,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A-B=C';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '1-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-10',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-20',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A+B=C D-E=F';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '1-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-5',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-10',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-20',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 8,
            rowsOccupied: rowsOccupiedOf8,
            rowCountPerPage: 8,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A+B+C=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A-B-C=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A±B±C=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A±(B±C)=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A×B=C';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '9×9A',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '9×9B',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 5,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A×B±C=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A±B×C=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100A',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100B',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '0-100C',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A×(B±C)=D';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: '9×9',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '20×20',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: '100×100',
            rows: 6,
            rowsOccupied: rowsOccupiedOf6,
            rowCountPerPage: 6,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A+B+C=10/20/n';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: 'A',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: 'B',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 4,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        catalog = 'A+B+C+D+E<br/>=10+n/20+n/n';
        buttonList.length = 0;
        addCommonItem({
            kind: '',
            catalog,
            scope: 'A',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 3,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        addCommonItem({
            kind: '',
            catalog,
            scope: 'B',
            rows: 25,
            rowsOccupied,
            rowCountPerPage: 25,
            countPerRow: 3,
            independentPagination: false,
            textStyle
        }, kindArray, buttonList);
        appendUsableItem(catalog, buttonList, usableList);
        return usableList;
    };
    initCoreElementsBeforeTable = () => {
        const {
            configCoreElement,
            getWrapElement,
            idOrClassPrefix,
            initTextboxElement,
            initRadioGroupByBooleanOrNumberValue
        } = this;
        let wrapElement;
        wrapElement = getWrapElement({
            en_us: 'Date (Not Saved)',
            zh_cn: '日期（不存储）',
            zh_tw: '日期（不存儲）'
        });
        wrapElement.id = `${idOrClassPrefix}DateWrap`;
        this.initDateElements(wrapElement);
        wrapElement = getWrapElement({
            en_us: 'Arithmetic and Font Size',
            zh_cn: '算法与字号',
            zh_tw: '算法與字號'
        });
        wrapElement.id = `${idOrClassPrefix}ArithmeticAndTextStyleWrap`;
        initRadioGroupByBooleanOrNumberValue([{
                value: false,
                i18nHtml: getI18nInnerHTML({
                    en_us: 'Normal',
                    zh_cn: '常规',
                    zh_tw: '常規'
                })
            },
            {
                value: true,
                i18nHtml: getI18nInnerHTML({
                    en_us: 'Mental',
                    zh_cn: '口算',
                    zh_tw: '口算'
                })
            }
        ], 'onlyMentalArithmetic', this.onlyMentalArithmeticRadioArray, wrapElement);
        initTextboxElement({
            en_us: 'Subject:',
            zh_cn: '标题：',
            zh_tw: '標題：'
        }, 'pageSubjectFontSize', this.pageSubjectFontSizeElement, wrapElement);
        initTextboxElement({
            en_us: 'Question:',
            zh_cn: '问题：',
            zh_tw: '問題：'
        }, 'questionFontSize', this.questionFontSizeElement, wrapElement);
        hide(getElementById('brickPageBasePaperSizeOrDirectionWrap'));
    };
    pageSubjectFontSizeElement = createElement('input');
    questionFontSizeElement = createElement('input');
    onlyMentalArithmeticRadioArray = [];
    yearElement = createElement('input');
    monthElement = createElement('input');
    dayElement = createElement('input');
    initDateElements = (wrapElement) => {
        const {
            data: {
                year,
                month,
                day
            },
            yearElement,
            monthElement,
            dayElement
        } = this;
        const span = createElement('span');
        wrapElement.appendChild(span);
        const yearLabel = createElement('label');
        yearLabel.innerHTML = getI18nInnerHTML({
            en_us: 'Year:',
            zh_cn: '年：',
            zh_tw: '年：'
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
        const monthLabel = createElement('label');
        monthLabel.innerHTML = getI18nInnerHTML({
            en_us: 'Month:',
            zh_cn: '月：',
            zh_tw: '月：'
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
        const dayLabel = createElement('label');
        dayLabel.innerHTML = getI18nInnerHTML({
            en_us: 'Day:',
            zh_cn: '日：',
            zh_tw: '日：'
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
    initCoreElementsAfterTable = () => {};
    fillExhaustibleList(exhaustibleItem, info, onlyMentalArithmetic, questionRowsArray, answerRowsArray) {
        const {
            getIntegerRandom
        } = this;
        const {
            catalog,
            rows,
            countPerRow,
            rowsOccupied,
            rowCountPerPage,
            textStyle
        } = info;
        const questionCount = countPerRow * rows;
        const {
            list,
            countPerSet
        } = exhaustibleItem;
        const listJson = JSON.stringify(list);
        const itemList = [];
        let listClone;
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
            for (let itemLoop1 = remainingCount; itemLoop1 > 0; --itemLoop1) {
                const currentIndex1 = getIntegerRandom(1, listRemainingCount--) - 1;
                itemList.push(listClone.splice(currentIndex1, 1)[0]);
            }
        }
        const rowCountPerPageStr = rowCountPerPage.toString();
        const questionRows = [];
        const answerRows = [];
        const questionRowCount = questionCount / countPerRow;
        for (let index = 0; index < questionRowCount; ++index) {
            const offset = countPerRow * index;
            const questionElementArray = [];
            const answerElementArray = [];
            for (let subIndex = 0; subIndex < countPerRow; ++subIndex) {
                const item = itemList[subIndex + offset];
                this.fillElementList(onlyMentalArithmetic, item, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({
            rowsOccupied,
            rows: questionRows
        });
        answerRowsArray.push({
            rowsOccupied,
            rows: answerRows
        });
    }
    fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows) {
        if (this.data.onlyMentalArithmetic) rowCountPerPageStr = this.defaultRowCountPerPage.toString();
        const questionRow = createElement('row');
        questionRow.setAttribute('row-count-per-page', rowCountPerPageStr);
        questionElementArray.forEach((cell) => questionRow.appendChild(cell));
        questionRows.push(questionRow);
        const answerRow = createElement('row');
        answerRow.setAttribute('row-count-per-page', rowCountPerPageStr);
        answerElementArray.forEach((cell) => answerRow.appendChild(cell));
        answerRows.push(answerRow);
        if (textStyle.length) {
            questionRow.setAttribute('style', textStyle);
            answerRow.setAttribute('style', textStyle);
        }
    }
    addCommonItem(info, kindArray, buttonList) {
        const {
            catalog,
            scope,
            rows,
            independentPagination,
            textStyle,
            countPerRow,
            rowsOccupied,
            rowCountPerPage
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
                rowCountPerPage
            }
        });
    }
    appendUsableItem(label, buttonList, usableList) {
        let strongI18n = getI18nableWithSameContent(label);
        usableList.push({
            strongI18n,
            buttonList: JSON.parse(JSON.stringify(buttonList))
        });
        return strongI18n;
    }
}
const brickCore = new BrickCore();
window.brickCore = brickCore;