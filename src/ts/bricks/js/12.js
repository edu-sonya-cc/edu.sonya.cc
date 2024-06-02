// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, stopEventBubble } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { getNumbersArray, pushSameValueTimes, getArrayRepeatSameValue } from '../utils.ts';
// // import { DPIHelper } from '../DPIHelper.ts';
// import { svgSpace } from '../svgHelper.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * <en_us>
 * Function:
 * Create:
 * History:
 * Reference:
 * Description:
 * </en_us>
 *
 * <zh_cn>
 * 功能：生成乘法口诀表辅助教具
 * 初建：2022-11-23 安启
 * 历史：
 * 参考：
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
        _this.idOrClassPrefix = 'brickPageMultiplicationTable';
        /** OK
         * 计算data和computedData数据
         */
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var _b = _this.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, MAX_X = _b.maxX, MAX_Y = _b.maxY, pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight;
            var css = "\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\n\t\t/* [edu-mirror=\"horizonal\"] svg text{transform:rotateY(180deg);} */\n\n    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */\n    /* \u9ED1/\u7EA2/\u6A59/\u9EC4/\u7EFF/\u9752/\u84DD/\u7D2B/\u7C89/\u6DE1\u7EFF/\t*/\n    /* \u9ED1/\u7D05/\u6A59/\u9EC3/\u7DA0/\u9752/\u85CD/\u7D2B/\u7C89/\u6DE1\u7DA0/\t*/\n    [edu-color=\"1\"] {color:#000000;}\n    [edu-color=\"2\"] {color:#FF0000;}\n    [edu-color=\"3\"] {color:#FF7F00;}\n    [edu-color=\"4\"] {color:#FFFF00;}\n    [edu-color=\"5\"] {color:#00FF00;}\n    [edu-color=\"6\"] {color:#00FFFF;}\n    [edu-color=\"7\"] {color:#0000FF;}\n    [edu-color=\"8\"] {color:#8B00FF;}\n    [edu-color=\"9\"] {color:#F19EC2;}\n    [edu-color=\"10\"]{color:#6B8E23;}\n\t\t";
            computedData.css = css;
            var formatCentile = _this.formatCentile;
            var list = [];
            JSON.parse(JSON.stringify(_this.data.list)).forEach(function (item) {
                list.push(item);
            });
            list.forEach(function (item) { return (item.length = formatCentile(item.length)); });
            var elementList = [];
            var latticeKindArray = ['vertical', 'horizontal'];
            // list.filter(({ kind }) => latticeKindArray.indexOf(kind) > -1).forEach((item) =>
            // 	this.getElementList(item, mmToPxScale, MAX_X, MAX_Y).forEach((element) => {
            // 		// elementList.push({ element, alone: true });
            // 		// html += `<page>${element.outerHTML}</page>`;
            // 		elementList.push(element);
            // 	})
            // );
            list
                .filter(function (_a) {
                var kind = _a.kind;
                return latticeKindArray.indexOf(kind) > -1;
            })
                .forEach(function (item) {
                return _this.getLatticeOutSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach(function (element) {
                    elementList.push(element);
                });
            });
            // const { appendAutomaticPaginationControls } = this;
            // const wrapper = createElement('div') as HTMLDivElement;
            // appendAutomaticPaginationControls(wrapper, elementList, MAX_X, MAX_Y);
            // elementList.length = 0;
            // list.filter(({ kind }) => latticeKindArray.indexOf(kind) === -1).forEach((item) => {
            // 	this.getElementList(item, mmToPxScale, MAX_X, MAX_Y).forEach((element) => {
            // 		// elementList.push({ element });
            // 		elementList.push(element);
            // 	})
            // });
            // appendAutomaticPaginationControls(wrapper, elementList, MAX_X, MAX_Y);
            // computedData.html = wrapper.innerHTML;
            var getAutomaticPaginationHtmlFromChildList = _this.getAutomaticPaginationHtmlFromChildList;
            // const latticeHtml = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);
            // // mirror
            // // const latticeHtmlMirror = latticeHtml.replace(/<page>/g, '<page style="flex-direction:row-reverse;">'.replace('flex-direction:column;', 'flex-direction:column-reverse;'));
            // // const latticeHtmlMirror = latticeHtml.replace(/<page>/g, '<page style="transform:rotateY(180deg);" edu-mirror="horizonal">');
            // const latticeHtmlMirror = '';
            // console.log(elementList.length, elementList.length /2);
            var latticeHtml = getAutomaticPaginationHtmlFromChildList(elementList.splice(0, elementList.length / 2), MAX_X, MAX_Y);
            // console.log('after append half, ', elementList.length);
            var latticeHtmlMirror = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y).replace(/<page>/g, '<page style="flex-direction:row-reverse;">');
            elementList.length = 0;
            list
                .filter(function (_a) {
                var kind = _a.kind;
                return latticeKindArray.indexOf(kind) === -1;
            })
                .forEach(function (item) {
                // this.getElementList(item, mmToPxScale, MAX_X, MAX_Y).forEach((element) => {
                // 	// elementList.push({ element });
                // 	elementList.push(element);
                // })
                return _this.getPokerSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach(function (element) {
                    elementList.push(element);
                });
            });
            var pokerHtml = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);
            // elementList.forEach((element) => {
            // 	(element as HTMLDivElement).querySelectorAll('text').forEach((text) => {
            // 		text.innerHTML = '';
            // 	});
            // });
            computedData.html = latticeHtml.concat(latticeHtmlMirror, pokerHtml, pokerHtml.replace(/<page>/g, '<page style="flex-direction:row-reverse;">'));
            var en_us = FILENAME_POSTFIX + "multiplicationtable";
            var zh_cn = FILENAME_POSTFIX + "\u4E58\u6CD5\u53E3\u8BC0\u8868";
            var zh_tw = FILENAME_POSTFIX + "\u4E58\u6CD5\u53E3\u8A23\u8868";
            computedData.title = { en_us: en_us, zh_cn: zh_cn, zh_tw: zh_tw };
        };
        /** OK
         * 获取html元素
         * @param item 相关信息
         * @param mmToPxScale 毫米到像素的转换比例
         * @returns 带以毫米为单位的宽高信息的html元素
         */
        _this.getElementList = function (item, mmToPxScale, PAPER_WIDTH, PAPER_HEIGHT) {
            // 'numberPoker' | 'chinesePoker' | 'numberPokerFull' | 'chinesePokerFull' | 'vertical' | 'horizontal'
            switch (item.kind) {
                case 'vertical':
                case 'horizontal':
                    return _this.getLatticeOutSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
                case 'numberPoker':
                case 'numberPokerFull':
                case 'chinesePoker':
                case 'chinesePokerFull':
                    return _this.getPokerSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
                default:
                    return [];
            }
        };
        /** OK
         * 获取扑克svg列表
         * @param item 相关信息
         * @param PAPER_WIDTH 页宽
         * @param PAPER_HEIGHT 页高
         * @param mmToPxScale 毫米到像素折算比例
         */
        _this.getPokerSvgList = function (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale) {
            var list = [];
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var width = item.length, scope = item.scope, kind = item.kind, pokerIncludeZero = item.pokerIncludeZero, copies = item.copies, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, textStyle = item.textStyle;
            var stroke = innerLineStyle.indexOf('stroke:')
                ? innerLineStyle.split('stroke:')[1].split(';')[0]
                : '#888';
            var height = formatMillimeter(width * 1.414);
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
            var RADIUS_PX = formatMillimeter(width * 0.1 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
            var chineseChars = '零一二三四五六七八九十'.split('');
            var westChars = chineseChars.concat(['十一', '十二']);
            var indiaChars = westChars.concat(['十三', '十四', '十五', '十六', '十七', '十八', '十九']);
            var chars = scope === 'chinese' ? chineseChars : scope === 'west' ? westChars : indiaChars;
            var isChinese = kind.indexOf('chinese') > -1;
            var isFull = kind.indexOf('Full') > -1;
            var contents = [];
            var MIN = pokerIncludeZero ? 0 : 1;
            var MAX = scope === 'chinese' ? 9 : scope === 'west' ? 12 : 19;
            for (var i = MIN; i <= MAX; ++i) {
                var iStr = isChinese ? chars[i] : i.toString();
                // for(let j = MIN; j <= MAX; ++j) {
                for (var j = isFull ? MIN : i; j <= MAX; ++j) {
                    var product = i * j;
                    var jStr = '';
                    var productStr = '';
                    if (isChinese) {
                        jStr = chars[j];
                        var hundreds = Math.floor((product % 1000) / 100);
                        var onesPlace = product % 10;
                        var tens = Math.floor((product % 100) / 10);
                        var onesPlaceStr = chars[onesPlace];
                        if (product < 10) {
                            productStr = "\u5F97<br/>" + onesPlaceStr;
                        }
                        else if (product === 10) {
                            productStr = '一<br/>十';
                        }
                        else if (product < 20) {
                            productStr = "\u5341<br/>" + onesPlaceStr;
                        }
                        else {
                            if (scope === 'chinese' || product % 100 === 0 || product < 100) {
                                if (product % 100 === 0) {
                                    productStr = chars[hundreds] + "<br/>\u767E";
                                }
                                else {
                                    productStr += chars[tens] + "<br/>\u5341";
                                    if (onesPlace > 0) {
                                        productStr += "<br/>" + onesPlaceStr;
                                    }
                                }
                            }
                            else {
                                productStr = hundreds > 0 ? chars[hundreds] + "\u767E<br/>" : '';
                                if (hundreds && tens === 0 && onesPlace)
                                    productStr += '零';
                                productStr += tens > 0 ? chars[tens] + "\u5341" + (onesPlace > 0 ? '<br/>' : '') : '';
                                productStr += onesPlace > 0 ? onesPlaceStr : '';
                            }
                        }
                    }
                    else {
                        jStr = "\u00D7" + j; // j.toString();
                        productStr = "\uFF1D" + product; // product.toString();
                    }
                    contents.push(iStr);
                    contents.push(jStr);
                    contents.push(productStr);
                }
            }
            var HALF_WIDTH = width * 0.5;
            var HALF_HEIGHT = height * 0.5;
            var CSS_COLOR_ARRAY = ['fill:#FF0000;', 'fill:#0000FF;', 'fill:#FF00FF;'];
            // const ROW_COUNT = Math.floor(PAPER_HEIGHT / height);
            // const COL_COUNT = Math.floor(PAPER_WIDTH / length);
            // for(let rowIndex = 0; rowIndex < ROW_COUNT; ++rowIndex){
            // 	for(let colIndex = 0; colIndex < COL_COUNT; ++colIndex) {
            var fontSize = !isChinese || textStyle.indexOf('font-size:') === -1
                ? 0
                : parseFloat(textStyle.split('font-size:')[1].split('mm;')[0]);
            for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                contents.forEach(function (content, index) {
                    var svg = createSvg();
                    var contentRowCount = content.split('<br/>').length - 1;
                    _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                    // const fixX = contentRowCount < 3 ? 0 : fontSize * 0.5;
                    var fixY = fontSize * contentRowCount * 0.5;
                    appendText(svg, textStyle.concat(isChinese ? '' : getTextStyleFontSizePatchCss(parseInt(content, 0), textStyle), CSS_COLOR_ARRAY[index % 3]), content, HALF_WIDTH, formatMillimeter(HALF_HEIGHT - fixY), 0, 'center', null, true);
                    svg.setAttribute('width', width + "mm");
                    svg.setAttribute('height', height + "mm");
                    list.push(svg);
                });
            }
            // 	}
            // }
            var COUNT_PER_PAGE = Math.floor(PAPER_WIDTH / width) * Math.floor(PAPER_HEIGHT / height);
            var pokerCountHasNumber = contents.length * copies;
            var totalCount = Math.ceil(pokerCountHasNumber / COUNT_PER_PAGE) * COUNT_PER_PAGE;
            var emptyCount = totalCount - pokerCountHasNumber;
            for (var i = 0; i < emptyCount; ++i) {
                var svg = createSvg();
                _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                svg.setAttribute('width', width + "mm");
                svg.setAttribute('height', height + "mm");
                list.push(svg);
            }
            // 试图增加扑克背面的页面，但因两面都有文字后容易混淆两面而取消
            return list;
        };
        /**
         * 获取格子svg列表
         * @param item 相关信息
         * @param PAPER_WIDTH 页宽
         * @param PAPER_HEIGHT 页高
         * @param mmToPxScale 毫米到像素折算比例
         */
        _this.getLatticeOutSvgList = function (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale) {
            var list = [];
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var SIDE_LENGTH = item.length, kind = item.kind, scope = item.scope, copies = item.copies, innerLineStyle = item.innerLineStyle, outerLineStyle = item.outerLineStyle, textStyle = item.textStyle;
            var isVertical = kind === 'vertical';
            var COL_COUNT = Math.floor(PAPER_WIDTH / SIDE_LENGTH);
            var ROW_COUNT = Math.floor(PAPER_HEIGHT / SIDE_LENGTH);
            var NUMBER_SERIES = [];
            var OTHER_NUMBER_SERIES = [];
            var maxNumber = 9;
            switch (scope) {
                case 'chinese':
                    _this.fillChineseNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                case 'west':
                    maxNumber = 12;
                    _this.fillWestNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                case 'india':
                    maxNumber = 19;
                    _this.fillIndiaNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                    break;
                default:
                    break;
            }
            // console.log('getLatticeOutSvgList()', JSON.stringify({ ... item }));
            var NORMAL_NUMBERS = [];
            var OTHER_NUMBERS = [];
            // 同一套优先
            // for(let copyLoop = 0; copyLoop < copies; ++copyLoop) {
            // 	NUMBER_SERIES.forEach((series) => {
            // 		for(let digit = maxNumber; digit > 0; --digit) {
            // 			NORMAL_NUMBERS.push({ digit, series});
            // 		}
            // 	});
            // 	OTHER_NUMBER_SERIES.forEach((rowCount) => {
            // 		for(let digit = maxNumber; digit > 0; --digit) {
            // 			OTHER_NUMBERS.push({ digit, rowCount});
            // 		}
            // 	});
            // }
            // 最宽的优先
            NUMBER_SERIES.forEach(function (series) {
                for (var digit = maxNumber; digit > 0; --digit) {
                    for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                        NORMAL_NUMBERS.push({ digit: digit, series: series });
                    }
                }
            });
            OTHER_NUMBER_SERIES.forEach(function (rowCount) {
                for (var digit = maxNumber; digit > 0; --digit) {
                    for (var copyLoop = 0; copyLoop < copies; ++copyLoop) {
                        OTHER_NUMBERS.push({ digit: digit, rowCount: rowCount });
                    }
                }
            });
            var pages = [];
            var outerLineStroke = outerLineStyle.indexOf('stroke:')
                ? outerLineStyle.split('stroke:')[1].split(';')[0]
                : '#888';
            // console.log(PAPER_WIDTH, PAPER_HEIGHT, ROW_COUNT, COL_COUNT);
            // 持续添加新的页面（只处理主区域），直到将NORMAL_NUMBERS全部放入主区域为止
            if (NORMAL_NUMBERS) {
                while (true) {
                    var currentPage = {
                        mainWrapper: createElement('div'),
                        mainWrapperColCount: 0,
                        otherWrapper: createElement('div'),
                        otherWrapperColCount: 0,
                        mainWrapperMirror: createElement('div'),
                        otherWrapperMirror: createElement('div')
                    };
                    currentPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 1.');
                    currentPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 1.');
                    currentPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 1.');
                    currentPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 1.');
                    pages.push(currentPage);
                    var firstItem = NORMAL_NUMBERS.splice(0, 1)[0];
                    // currentPage.mainWrapperColCount += firstItem.digit;
                    _this.appendNormalNumbersToPage(SIDE_LENGTH, firstItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                    var remainingColCount = COL_COUNT - currentPage.mainWrapperColCount;
                    var searchMax = Math.min(maxNumber, remainingColCount);
                    while (remainingColCount > 0) {
                        var find = false;
                        var _loop_1 = function (findNum) {
                            var filterResult = NORMAL_NUMBERS.filter(function (_a) {
                                var digit = _a.digit;
                                return digit === findNum;
                            });
                            if (filterResult.length) {
                                var nextItem = filterResult[0];
                                _this.appendNormalNumbersToPage(SIDE_LENGTH, nextItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                                NORMAL_NUMBERS.splice(NORMAL_NUMBERS.indexOf(nextItem), 1);
                                remainingColCount -= findNum;
                                find = true;
                                return "break";
                            }
                        };
                        for (var findNum = searchMax; findNum > 0; --findNum) {
                            var state_1 = _loop_1(findNum);
                            if (state_1 === "break")
                                break;
                        }
                        if (!find)
                            break;
                        searchMax = Math.min(maxNumber, remainingColCount);
                    }
                    if (!NORMAL_NUMBERS.length)
                        break;
                }
            }
            console.log('OTHER_NUMBER_SERIES.length', OTHER_NUMBER_SERIES.length, scope, ROW_COUNT);
            console.log('OTHER_NUMBERS.length', OTHER_NUMBERS.length, scope, ROW_COUNT);
            // 如果已有页面，尝试将所有待追加项放入最后一页的次区域
            if (OTHER_NUMBERS.length && pages.length) {
                var lastPage = pages[pages.length - 1];
                var remainingColCount = COL_COUNT - lastPage.mainWrapperColCount;
                if (remainingColCount > 0) {
                    lastPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 2.');
                    lastPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 2.');
                    lastPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 2.');
                    lastPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 2.');
                    // console.log('appendOtherNumbersToOtherWrapper()', pages.length, remainingColCount);
                    // lastPage.otherWrapperColCount = 0; remainingColCount;
                    _this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, remainingColCount, true, isVertical);
                }
            }
            // console.log('OTHER_NUMBERS.length', OTHER_NUMBERS.length, JSON.stringify(OTHER_NUMBERS));
            // 如果待追加项还有剩余的，增加新页，尽量扩大常规区域直接放，每页旋转区也尝试追加，直到全部追加
            while (OTHER_NUMBERS.length) {
                var lastPage = {
                    mainWrapper: createElement('div'),
                    mainWrapperColCount: 0,
                    otherWrapper: createElement('div'),
                    otherWrapperColCount: 0,
                    mainWrapperMirror: createElement('div'),
                    otherWrapperMirror: createElement('div')
                };
                lastPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 3.');
                lastPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 3.');
                lastPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 3.');
                lastPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 3.');
                pages.push(lastPage);
                _this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, COL_COUNT, false, isVertical);
            }
            var cssHeight = SIDE_LENGTH * ROW_COUNT + "mm";
            var cssFlex = 'display:flex;flex-wrap:wrap;';
            // pages // TODO(@anqi) 改回正常模式
            // pages.splice(pages.length - 1, 1) // 临时调试，只显示最后一页。
            // pages.splice(pages.length - 2, 2) // 临时调试，只显示最后2页。
            pages.forEach(function (page) {
                var mainWrapper = page.mainWrapper, mainWrapperColCount = page.mainWrapperColCount, otherWrapper = page.otherWrapper, mainWrapperMirror = page.mainWrapperMirror, otherWrapperMirror = page.otherWrapperMirror;
                // 强制补全整页
                var otherWrapperColCount = COL_COUNT - mainWrapperColCount;
                page.otherWrapperColCount = otherWrapperColCount;
                // flex-direction:column;
                var mainWrapperCss = "width:" + SIDE_LENGTH * mainWrapperColCount + "mm;height:" + cssHeight + ";" + cssFlex;
                // console.log(mainWrapperColCount, otherWrapperColCount, mainWrapper.children.length, otherWrapper.children.length);
                mainWrapper.setAttribute('style', mainWrapperCss);
                mainWrapperMirror.setAttribute('style', mainWrapperCss.concat('flex-direction:row-reverse;'));
                list.push(mainWrapper);
                // if (otherWrapperColCount) {
                // 	otherWrapper.setAttribute('style', `width:${SIDE_LENGTH * otherWrapperColCount}mm;height:${cssHeight};${cssFlex}`);
                // 	list.push(otherWrapper);
                // }
                if (otherWrapperColCount) {
                    // flex-direction:column;
                    var otherWrapperCss = "width:" + SIDE_LENGTH * otherWrapperColCount + "mm;height:" + cssHeight + ";" + cssFlex;
                    otherWrapper.setAttribute('style', otherWrapperCss);
                    otherWrapperMirror.setAttribute('style', otherWrapperCss.concat('flex-direction:row-reverse;'));
                    list.push(otherWrapper);
                }
            });
            console.log('first list.length:', list.length);
            pages.forEach(function (_a) {
                var mainWrapperMirror = _a.mainWrapperMirror, otherWrapperMirror = _a.otherWrapperMirror, otherWrapperColCount = _a.otherWrapperColCount;
                list.push(mainWrapperMirror);
                if (otherWrapperColCount)
                    list.push(otherWrapperMirror);
            });
            console.log('second list.length:', list.length);
            return list;
            // return pages;
        };
        _this.appendOtherNumbers = function (SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, maxNumber, remainingColCount, isOtherWrapper, isVertical) {
            var list = [];
            OTHER_NUMBERS.forEach(function (item) { return list.push(item); });
            list.sort(function (prev, next) { return next.rowCount * 100 + next.digit - (prev.rowCount * 100 + prev.digit); });
            var colCountArray = [];
            list.forEach(function (_a) {
                var rowCount = _a.rowCount;
                if (colCountArray.indexOf(rowCount) === -1)
                    colCountArray.push(rowCount);
            });
            var fixedMaxNumber = maxNumber === 9 ? 10 : maxNumber;
            var searchMax = Math.min(fixedMaxNumber, remainingColCount);
            var subWrapperHeight = SIDE_LENGTH * ROW_COUNT;
            // console.log('in appendOtherNumbers()', JSON.stringify({ searchMax, remainingColCount, subWrapperHeight }));
            var colCountCount = colCountArray.length;
            while (remainingColCount > 0) {
                var find = false;
                var _loop_2 = function (i) {
                    var findNum = colCountArray[i];
                    if (findNum > searchMax)
                        return "continue";
                    // const filterResult = list.filter(({digit}) => digit === findNum);
                    var filterResult = list.filter(function (_a) {
                        var rowCount = _a.rowCount;
                        return rowCount === findNum;
                    });
                    // console.log('find outer', findNum, filterResult.length);
                    if (filterResult.length) {
                        find = true;
                        var firstItem = filterResult[0];
                        OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(firstItem), 1);
                        list.splice(list.indexOf(firstItem), 1);
                        remainingColCount -= findNum;
                        var subWrapperWidth = SIDE_LENGTH * findNum;
                        var mmSubWrapperWidth = subWrapperWidth + "mm";
                        var mmSubWrapperHeight = subWrapperHeight + "mm";
                        var subWrapperCss = "display:flex;flex-wrap:wrap;flex-direction:column;width:" + subWrapperWidth + "mm;height:" + subWrapperHeight + "mm;";
                        var subWrapper = createElement('div');
                        subWrapper.setAttribute('style', subWrapperCss);
                        subWrapper.setAttribute('width', mmSubWrapperWidth);
                        subWrapper.setAttribute('height', mmSubWrapperHeight);
                        var subWrapperMirror = createElement('div');
                        // subWrapperMirror.setAttribute('style', subWrapperCss.concat('flex-direction:row;justify-content:flex-end;'));
                        subWrapperMirror.setAttribute('style', subWrapperCss);
                        subWrapperMirror.setAttribute('width', mmSubWrapperWidth);
                        subWrapperMirror.setAttribute('height', mmSubWrapperHeight);
                        if (isOtherWrapper) {
                            currentPage.otherWrapperColCount += findNum;
                            currentPage.otherWrapper.appendChild(subWrapper);
                            currentPage.otherWrapperMirror.appendChild(subWrapperMirror);
                        }
                        else {
                            currentPage.mainWrapperColCount += findNum;
                            currentPage.mainWrapper.appendChild(subWrapper);
                            currentPage.mainWrapperMirror.appendChild(subWrapperMirror);
                        }
                        _this.appendOtherNumberItem(SIDE_LENGTH, firstItem, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                        var subWrapperRemainRow = ROW_COUNT - firstItem.digit;
                        // console.log('append first', JSON.stringify({ ...firstItem, searchMax, subWrapperRemainRow }));
                        _this.fillHorizontalSubWrapper(subWrapperRemainRow, searchMax, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical);
                        searchMax = Math.min(searchMax, remainingColCount);
                    }
                    if (find)
                        return "break";
                };
                for (var i = 0; i < colCountCount; ++i) {
                    var state_2 = _loop_2(i);
                    if (state_2 === "break")
                        break;
                }
                if (!find) {
                    console.log('appendOtherNumbersToOtherWrapper(), not find');
                    return;
                }
                searchMax = Math.min(maxNumber, remainingColCount);
            }
        };
        _this.appendOtherNumberItem = function (SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical) {
            var _a = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _a.createSvg, createSvgPath = _a.createSvgPath, appendLine = _a.appendLine, appendText = _a.appendText, getTextStyleFontSizePatchCss = _a.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var svg = createSvg();
            subWrapper.appendChild(svg);
            var svgMirror = createSvg();
            subWrapperMirror.appendChild(svgMirror);
            var digit = item.digit, trueColCount = item.rowCount;
            var digitCss = _this.textFillStyleArray[(digit - 1) % 10];
            var RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var width = SIDE_LENGTH * trueColCount;
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var height = SIDE_LENGTH * digit;
            var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
            var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
            var mmSvgWidth = width + "mm";
            var mmSvgHeight = height + "mm";
            svg.setAttribute('width', mmSvgWidth);
            svg.setAttribute('height', mmSvgHeight);
            svgMirror.setAttribute('width', mmSvgWidth);
            svgMirror.setAttribute('height', mmSvgHeight);
            _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
            _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svgMirror);
            for (var colIndex = 1; colIndex < trueColCount; ++colIndex) {
                var X = SIDE_LENGTH * colIndex;
                appendLine(svg, innerLineStyle, X, X, 0, height, null);
                appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
            }
            for (var rowIndex = 1; rowIndex < digit; ++rowIndex) {
                var Y = height - SIDE_LENGTH * rowIndex;
                appendLine(svg, innerLineStyle, 0, width, Y, Y, null);
                appendLine(svgMirror, innerLineStyle, 0, width, Y, Y, null);
            }
            var textXOrY = SIDE_LENGTH * 0.5;
            var mmSubSvgWidthOrHeight = SIDE_LENGTH + "mm";
            for (var colIndex = 0; colIndex < trueColCount; ++colIndex) {
                var mmX = SIDE_LENGTH * colIndex + "mm";
                for (var rowIndex = 0; rowIndex < digit; ++rowIndex) {
                    var mmY = height - SIDE_LENGTH * rowIndex - SIDE_LENGTH + "mm";
                    var subSvg = createSvg();
                    svg.appendChild(subSvg);
                    subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('x', mmX);
                    subSvg.setAttribute('y', mmY);
                    var subSvgMirror = createSvg();
                    svgMirror.appendChild(subSvgMirror);
                    subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('x', mmX);
                    subSvgMirror.setAttribute('y', mmY);
                    var numLeftToRight = rowIndex + 1 + digit * colIndex;
                    var numberRightToLeft = digit - rowIndex + digit * colIndex;
                    if (isVertical) {
                        var num = numLeftToRight; // (rowIndex + 1) + digit * colIndex;
                        // const numMirror = (rowIndex + 1) + digit * (trueColCount - colIndex - 1); // 镜像式
                        var numMirror = numLeftToRight; // (digit - rowIndex) + digit * (trueColCount - colIndex - 1); // 对等式
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                    }
                    else {
                        var num = numberRightToLeft; // digit - rowIndex + digit * colIndex
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                        // 镜像式
                        // const numMirror = (digit - rowIndex) + digit * (trueColCount - colIndex - 1);
                        // appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, -90, 'center', null, true);
                        // 对等式
                        var numMirror = numberRightToLeft; // (digit - rowIndex) + digit * (trueColCount - colIndex - 1);
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                    }
                }
            }
        };
        _this.textFillStyleArray = [
            'fill:#000000;',
            'fill:#FF0000;',
            'fill:#FF7F00;',
            'fill:#FFFF00;',
            'fill:#00FF00;',
            'fill:#00FFFF;',
            'fill:#0000FF;',
            'fill:#8B00FF;',
            'fill:#F19EC2;',
            'fill:#6B8E23;',
        ];
        _this.appendNormalNumbersToPage = function (SIDE_LENGTH, _a, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical) {
            var digit = _a.digit, series = _a.series;
            currentPage.mainWrapperColCount += digit;
            var digitCss = _this.textFillStyleArray[(digit - 1) % 10];
            var _b = svgSpace.edu.sonya.cc.SvgHelper, createSvg = _b.createSvg, createSvgPath = _b.createSvgPath, appendLine = _b.appendLine, appendText = _b.appendText, getTextStyleFontSizePatchCss = _b.getTextStyleFontSizePatchCss;
            var formatMillimeter = _this.formatMillimeter;
            var width = SIDE_LENGTH * digit;
            var WIDTH_PX = formatMillimeter(width * mmToPxScale);
            var RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
            var DIAMETER_PX = RADIUS_PX * 2;
            var WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
            var mainWrapper = currentPage.mainWrapper, mainWrapperMirror = currentPage.mainWrapperMirror;
            var mainWrapperSub = createElement('div');
            mainWrapper.appendChild(mainWrapperSub);
            var mainWrapperSubMirror = createElement('div');
            mainWrapperMirror.appendChild(mainWrapperSubMirror);
            var css = 'display:flex;flex-direction:column;';
            mainWrapperSub.setAttribute('style', css);
            mainWrapperSubMirror.setAttribute('style', css);
            series.forEach(function (rowCount) {
                var height = SIDE_LENGTH * rowCount;
                var HEIGHT_PX = formatMillimeter(height * mmToPxScale);
                var HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
                var svg = createSvg();
                mainWrapperSub.appendChild(svg);
                var svgMirror = createSvg();
                mainWrapperSubMirror.appendChild(svgMirror);
                var mmWidth = width + "mm";
                var mmHeight = height + "mm";
                svg.setAttribute('width', mmWidth);
                svg.setAttribute('height', mmHeight);
                svgMirror.setAttribute('width', mmWidth);
                svgMirror.setAttribute('height', mmHeight);
                _this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                for (var colIndex = 1; colIndex < digit; ++colIndex) {
                    var X = SIDE_LENGTH * colIndex;
                    appendLine(svg, innerLineStyle, X, X, 0, height, null);
                    appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
                }
                for (var rowIndex = 1; rowIndex < rowCount; ++rowIndex) {
                    var lineY = height - SIDE_LENGTH * rowIndex;
                    appendLine(svg, innerLineStyle, 0, width, lineY, lineY, null);
                    appendLine(svgMirror, innerLineStyle, 0, width, lineY, lineY, null);
                }
                var mmSubSvgWidthOrHeight = SIDE_LENGTH + "mm";
                var textXOrY = SIDE_LENGTH * 0.5;
                for (var rowIndex = 0; rowIndex < rowCount; ++rowIndex) {
                    var mmY = height - SIDE_LENGTH * rowIndex - SIDE_LENGTH + "mm";
                    // const numberOffset = digit * rowIndex;
                    var numberOffset = digit * (isVertical ? rowCount - rowIndex - 1 : rowIndex);
                    for (var colIndex = 0; colIndex < digit; ++colIndex) {
                        var mmX = SIDE_LENGTH * colIndex + "mm";
                        var subSvg = createSvg();
                        svg.appendChild(subSvg);
                        subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                        subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                        subSvg.setAttribute('x', mmX);
                        subSvg.setAttribute('y', mmY);
                        var subSvgMirror = createSvg();
                        svgMirror.appendChild(subSvgMirror);
                        subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                        subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                        subSvgMirror.setAttribute('x', mmX);
                        // subSvgMirror.setAttribute('x', `${SIDE_LENGTH * (digit - 1 - colIndex)}mm`);
                        subSvgMirror.setAttribute('y', mmY);
                        var numLeftToRight = colIndex + 1 + numberOffset;
                        var numberRightToLeft = digit - colIndex + numberOffset;
                        if (isVertical) {
                            var num = numLeftToRight;
                            // const numMirror = numberRightToLeft; // 镜像式
                            var numMirror = numLeftToRight; // 对等式
                            appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                            appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                        }
                        else {
                            var num = numLeftToRight;
                            appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                            // const numMirror = numberRightToLeft; // 镜像式
                            var numMirror = num; // 对等式
                            appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                        }
                    }
                }
            });
        };
        _this.kindTableColumnInfo = [
            // 'numberPoker' | 'chinesePoker' | 'numberPokerFull' | 'chinesePokerFull' | 'vertical' | 'horizontal'
            {
                value: 'numberPoker',
                captions: { en_us: 'Number Poker', zh_cn: '数字扑克', zh_tw: '數位撲克' }
            },
            {
                value: 'chinesePoker',
                captions: { en_us: 'Chinese Poker', zh_cn: '汉字扑克', zh_tw: '漢字撲克' }
            },
            {
                value: 'numberPokerFull',
                captions: {
                    en_us: 'Number Poker Full',
                    zh_cn: '完整数字扑克',
                    zh_tw: '完整數位撲克'
                }
            },
            {
                value: 'chinesePokerFull',
                captions: {
                    en_us: 'Chinese Poker Full',
                    zh_cn: '完整汉字扑克',
                    zh_tw: '完整漢字撲克'
                }
            },
            {
                value: 'vertical',
                captions: { en_us: 'Vertical', zh_cn: '竖格', zh_tw: '豎格' }
            },
            {
                value: 'horizontal',
                captions: { en_us: 'Horizontal', zh_cn: '横格', zh_tw: '橫格' }
            },
        ];
        _this.scopeTableColumnInfo = [
            // 'chinese' | 'west' | 'india'
            {
                value: 'chinese',
                captions: { en_us: 'Chinese', zh_cn: '中式9×9', zh_tw: '中式9×9' }
            },
            {
                value: 'west',
                captions: { en_us: 'West', zh_cn: '西式12×12', zh_tw: '西式12×12' }
            },
            {
                value: 'india',
                captions: { en_us: 'India', zh_cn: '印式19×19', zh_tw: '印式19×19' }
            },
        ];
        /** OK
         * 创建表格行
         * @param item
         * @param tableBodyElement
         */
        _this.createTableBodyRow = function (item) {
            var _a = item, length = _a.length, scope = _a.scope, kind = _a.kind, pokerIncludeZero = _a.pokerIncludeZero, copies = _a.copies, innerLineStyle = _a.innerLineStyle, outerLineStyle = _a.outerLineStyle, textStyle = _a.textStyle;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendNumberTd(tr, length, item, 'length', 1, null, 0.1);
            _this.appendSelectTd(tr, scope, item, 'scope', _this.scopeTableColumnInfo);
            _this.appendSelectTd(tr, kind, item, 'kind', _this.kindTableColumnInfo);
            _this.appendCheckboxTdWithoutText(tr, pokerIncludeZero, item, 'pokerIncludeZero');
            _this.appendNumberTd(tr, copies, item, 'copies', 1, null, 1);
            _this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
            _this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
            _this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
        };
        /** OK
         * 初始化表头
         */
        _this.initTableHead = function () {
            _this.appendTableHeadCell({ en_us: 'Length', zh_cn: '边长', zh_tw: '邊長' });
            _this.appendTableHeadCell({ en_us: 'Scope', zh_cn: '范围', zh_tw: '範圍' });
            _this.appendTableHeadCell({ en_us: 'Kind', zh_cn: '类型', zh_tw: '類型' });
            _this.appendTableHeadCell({
                en_us: 'Poker Include Zero',
                zh_cn: '扑克带零',
                zh_tw: '撲克帶零'
            });
            _this.appendTableHeadCell({ en_us: 'Copies', zh_cn: '份数', zh_tw: '份數' });
            _this.appendTableHeadCell({
                en_us: 'Inner Line Style',
                zh_cn: '内部线样式',
                zh_tw: '內部線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Outer Line Style',
                zh_cn: '外边线样式',
                zh_tw: '外邊線樣式'
            });
            _this.appendTableHeadCell({
                en_us: 'Text Style',
                zh_cn: '文本样式',
                zh_tw: '文字樣式'
            });
        };
        /** OK
         * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
         * @returns 数组：信息数组
         */
        _this.getUsableList = function () {
            var length = 10;
            var pokerLength = 16;
            var pokerIncludeZero = false;
            var copies = 1;
            var innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
            var outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
            var textStyle = 'font-size:6mm;';
            var textStyleOfNumberPoker = 'font-size:7.5mm;';
            var textStyleOfChinesePoker = 'font-size:6.5mm;';
            var kinds = _this.kindTableColumnInfo.map(function (_a) {
                var value = _a.value;
                return value;
            });
            var kindI18n = _this.kindTableColumnInfo.map(function (_a) {
                var captions = _a.captions;
                return captions;
            });
            // const scopes: Array<'chinese' | 'west' | 'india'> = ['chinese', 'west', 'india'];
            // const scopes = this.scopeTableColumnInfo.map(({ value }) => value) as Array<'chinese' | 'west' | 'india'>;
            // const scopes: Array<'chinese' | 'west' | 'india'> = ['chinese'];
            // const usableList: Array<{ nameI18n: I18nable , info: MultiplicationTableInfo }> = [];
            // scopes.forEach((scope) => {
            // 	kinds.forEach((kind, index) => {
            // 		usableList.push({
            // 			nameI18n: kindI18n[index],
            // 			info: {
            // 				length: kind === 'vertical' || kind === 'horizontal' ? length : pokerLength,
            // 				scope,
            // 				kind,
            // 				pokerIncludeZero,
            // 				copies,
            // 				innerLineStyle,
            // 				outerLineStyle,
            // 				textStyle: kind.indexOf('numberPoker') > -1 ? textStyleOfNumberPoker : (kind.indexOf('chinesePoker') > -1 ? textStyleOfChinesePoker : textStyle)
            // 			}
            // 		});
            // 	});
            // });
            // return usableList;
            var usableList = [];
            _this.scopeTableColumnInfo.forEach(function (_a) {
                var value = _a.value, captions = _a.captions;
                var scope = value;
                var buttonList = [];
                kinds.forEach(function (kind, index) {
                    buttonList.push({
                        nameI18n: kindI18n[index],
                        info: {
                            length: kind === 'vertical' || kind === 'horizontal' ? length : pokerLength,
                            scope: scope,
                            kind: kind,
                            pokerIncludeZero: pokerIncludeZero,
                            copies: copies,
                            innerLineStyle: innerLineStyle,
                            outerLineStyle: outerLineStyle,
                            textStyle: kind.indexOf('numberPoker') > -1
                                ? textStyleOfNumberPoker
                                : kind.indexOf('chinesePoker') > -1
                                    ? textStyleOfChinesePoker
                                    : textStyle
                        }
                    });
                });
                var strongI18n = captions;
                usableList.push({
                    strongI18n: strongI18n,
                    buttonList: buttonList
                });
            });
            return usableList;
        };
        return _this;
    }
    BrickCore.prototype.fillHorizontalSubWrapper = function (subWrapperRemainRow, maxColCount, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical) {
        if (subWrapperRemainRow === 0)
            return;
        // for (let searchRowCount = maxColCount; searchRowCount > 0; --searchRowCount) {
        // 	const others = list.filter(({ rowCount }) => rowCount === searchRowCount);
        // 	const count = others.length;
        // 	console.log(`find inner: ${JSON.stringify({
        // 		innerFindNum: searchRowCount,
        // 		count,
        // 		OTHER_NUMBERS_length: OTHER_NUMBERS.length,
        // 		list_length: list.length,
        // 		subWrapperRemainRow,
        // 	})}`);
        // 	for(let i = 0; i < count; ++i) {
        // 		const item = others[i];
        // 		const { digit } = item;
        // 		if(subWrapperRemainRow >= digit) {
        // 			OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(item), 1);
        // 			list.splice(list.indexOf(item), 1);
        // 			subWrapperRemainRow -= digit;
        // 			console.log(`append next: ${ JSON.stringify({ item, subWrapperRemainRow, OTHER_NUMBERS_length: OTHER_NUMBERS.length, list_length: list.length })}`);
        // 			this.appendHorizontalOtherSubWrapperItem(SIDE_LENGTH, item, subWrapper, innerLineStyle, stroke, textStyle, mmToPxScale);
        // 		}
        // 		if (subWrapperRemainRow === 0) { break; }
        // 	}
        // 	if (subWrapperRemainRow === 0) { break; }
        // }
        var colCountCount = colCountArray.length;
        var _loop_3 = function (i) {
            var searchRowCount = colCountArray[i];
            if (searchRowCount > maxColCount)
                return "continue";
            var others = list.filter(function (_a) {
                var rowCount = _a.rowCount;
                return rowCount === searchRowCount;
            });
            var count = others.length;
            // console.log(`find inner: ${JSON.stringify({
            // 	innerFindNum: searchRowCount,
            // 	count,
            // 	OTHER_NUMBERS_length: OTHER_NUMBERS.length,
            // 	list_length: list.length,
            // 	subWrapperRemainRow,
            // })}`);
            for (var i_1 = 0; i_1 < count; ++i_1) {
                var item = others[i_1];
                var digit = item.digit;
                if (subWrapperRemainRow >= digit) {
                    OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(item), 1);
                    list.splice(list.indexOf(item), 1);
                    subWrapperRemainRow -= digit;
                    // console.log(`append next: ${ JSON.stringify({ item, subWrapperRemainRow, OTHER_NUMBERS_length: OTHER_NUMBERS.length, list_length: list.length })}`);
                    this_1.appendOtherNumberItem(SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                    if (subWrapperRemainRow === 0)
                        return { value: void 0 };
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < colCountCount; ++i) {
            var state_3 = _loop_3(i);
            if (typeof state_3 === "object")
                return state_3.value;
        }
    };
    BrickCore.prototype.appendSvgPath = function (createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg) {
        // const { formatMillimeter } = this;
        // RADIUS_PX = formatMillimeter(RADIUS_PX);
        // WIDTH_SUBTRACT_DIAMETER_PX = formatMillimeter(WIDTH_SUBTRACT_DIAMETER_PX);
        // HEIGHT_SUBTRACT_DIAMETER_PX = formatMillimeter(HEIGHT_SUBTRACT_DIAMETER_PX);
        var path = createSvgPath();
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', stroke);
        path.setAttribute('d', ("M 0, " + RADIUS_PX).concat(" a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 " + RADIUS_PX + " -" + RADIUS_PX, " h " + WIDTH_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 " + RADIUS_PX + " " + RADIUS_PX, " v " + HEIGHT_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 -" + RADIUS_PX + " " + RADIUS_PX, " h -" + WIDTH_SUBTRACT_DIAMETER_PX + " ", " a " + RADIUS_PX + " " + RADIUS_PX + " 0 0 1 -" + RADIUS_PX + " -" + RADIUS_PX, ' z'));
        svg.appendChild(path);
    };
    BrickCore.prototype.fillIndiaNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([19, 10]);
                NUMBER_SERIES.push([18, 11]);
                NUMBER_SERIES.push([17, 12]);
                NUMBER_SERIES.push([16, 13]);
                NUMBER_SERIES.push([15, 14]);
                NUMBER_SERIES.push([9, 8, 7, 5]);
                // NUMBER_SERIES.push([6, 4, 3, 2, 1, 1, 2, 3, 4, 2, 1]);
                [6, 4, 3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 28:
                NUMBER_SERIES.push([19, 9]);
                NUMBER_SERIES.push([18, 10]);
                NUMBER_SERIES.push([17, 11]);
                NUMBER_SERIES.push([16, 12]);
                NUMBER_SERIES.push([15, 13]);
                NUMBER_SERIES.push([14, 8, 6]);
                NUMBER_SERIES.push([7, 5, 4, 3, 2, 1, 1, 3]); // 1, 3
                break;
            case 27:
                NUMBER_SERIES.push([19, 8]);
                NUMBER_SERIES.push([18, 9]);
                NUMBER_SERIES.push([17, 10]);
                NUMBER_SERIES.push([16, 11]);
                NUMBER_SERIES.push([15, 12]);
                NUMBER_SERIES.push([14, 13]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 2]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 26:
                NUMBER_SERIES.push([19, 7]);
                NUMBER_SERIES.push([18, 8]);
                NUMBER_SERIES.push([17, 9]);
                NUMBER_SERIES.push([16, 10]);
                NUMBER_SERIES.push([15, 11]);
                NUMBER_SERIES.push([14, 12]);
                NUMBER_SERIES.push([13, 6, 5, 2]);
                [4, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 25:
                NUMBER_SERIES.push([19, 6]);
                NUMBER_SERIES.push([18, 7]);
                NUMBER_SERIES.push([17, 8]);
                NUMBER_SERIES.push([16, 9]);
                NUMBER_SERIES.push([15, 10]);
                NUMBER_SERIES.push([14, 11]);
                NUMBER_SERIES.push([13, 12]);
                NUMBER_SERIES.push([5, 4, 3, 2, 1, 1, 2, 3, 4]); // 1, 2, 3, 4
                // [5, 4, 3, 2, 1].forEach((number) => OTHER_NUMBER_SERIES.push(number));
                break;
            case 24:
                NUMBER_SERIES.push([19, 5]);
                NUMBER_SERIES.push([18, 6]);
                NUMBER_SERIES.push([17, 7]);
                NUMBER_SERIES.push([16, 8]);
                NUMBER_SERIES.push([15, 9]);
                NUMBER_SERIES.push([14, 10]);
                NUMBER_SERIES.push([13, 11]);
                NUMBER_SERIES.push([12, 4, 3, 2, 1, 2]); // 2
                break;
            case 23:
                NUMBER_SERIES.push([19, 4]);
                NUMBER_SERIES.push([18, 5]);
                NUMBER_SERIES.push([17, 6]);
                NUMBER_SERIES.push([16, 7]);
                NUMBER_SERIES.push([15, 8]);
                NUMBER_SERIES.push([14, 9]);
                NUMBER_SERIES.push([13, 10]);
                NUMBER_SERIES.push([12, 11]);
                [3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 22:
                NUMBER_SERIES.push([19, 3]);
                NUMBER_SERIES.push([18, 4]);
                NUMBER_SERIES.push([17, 5]);
                NUMBER_SERIES.push([16, 6]);
                NUMBER_SERIES.push([15, 7]);
                NUMBER_SERIES.push([14, 8]);
                NUMBER_SERIES.push([13, 9]);
                NUMBER_SERIES.push([12, 10]);
                [11, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 21:
                NUMBER_SERIES.push([19, 2]);
                NUMBER_SERIES.push([18, 3]);
                NUMBER_SERIES.push([17, 4]);
                NUMBER_SERIES.push([16, 5]);
                NUMBER_SERIES.push([15, 6]);
                NUMBER_SERIES.push([14, 7]);
                NUMBER_SERIES.push([13, 8]);
                NUMBER_SERIES.push([12, 9]);
                NUMBER_SERIES.push([11, 10]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 20:
                NUMBER_SERIES.push([19, 1]);
                NUMBER_SERIES.push([18, 2]);
                NUMBER_SERIES.push([17, 3]);
                NUMBER_SERIES.push([16, 4]);
                NUMBER_SERIES.push([15, 5]);
                NUMBER_SERIES.push([14, 6]);
                NUMBER_SERIES.push([13, 7]);
                NUMBER_SERIES.push([12, 8]);
                NUMBER_SERIES.push([11, 9]);
                [10].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 19:
                NUMBER_SERIES.push([19]);
                NUMBER_SERIES.push([18, 1]);
                NUMBER_SERIES.push([17, 2]);
                NUMBER_SERIES.push([16, 3]);
                NUMBER_SERIES.push([15, 4]);
                NUMBER_SERIES.push([14, 5]);
                NUMBER_SERIES.push([13, 6]);
                NUMBER_SERIES.push([12, 7]);
                NUMBER_SERIES.push([11, 8]);
                NUMBER_SERIES.push([10, 9]);
                break;
            default:
                break;
        }
    };
    BrickCore.prototype.fillWestNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([12, 11, 6]);
                NUMBER_SERIES.push([10, 9, 8, 2]);
                NUMBER_SERIES.push([7, 5, 4, 3, 1, 2, 3, 4]); // 2, 3, 4
                break;
            case 28:
                NUMBER_SERIES.push([12, 11, 5]);
                NUMBER_SERIES.push([10, 9, 8, 1]);
                NUMBER_SERIES.push([7, 6, 4, 3, 2, 1, 2, 3]); // 1, 2, 3
                break;
            case 27:
                NUMBER_SERIES.push([12, 11, 4]);
                NUMBER_SERIES.push([10, 9, 8]);
                NUMBER_SERIES.push([7, 6, 5, 3, 2, 1, 1, 2]); // 1, 3
                break;
            case 26:
                NUMBER_SERIES.push([12, 11, 3]);
                NUMBER_SERIES.push([10, 9, 7]);
                NUMBER_SERIES.push([8, 6, 5, 4, 2, 1]);
                break;
            case 25:
                NUMBER_SERIES.push([12, 11, 2]);
                NUMBER_SERIES.push([10, 9, 6]);
                NUMBER_SERIES.push([8, 7, 5, 4, 1]);
                [3].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 24:
                NUMBER_SERIES.push([12, 11, 1]);
                NUMBER_SERIES.push([10, 9, 5]);
                NUMBER_SERIES.push([8, 7, 6, 3]);
                [2, 4].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 23:
                NUMBER_SERIES.push([12, 11]);
                NUMBER_SERIES.push([10, 9, 4]);
                NUMBER_SERIES.push([8, 7, 6, 2]);
                NUMBER_SERIES.push([5, 4, 3, 1, 1, 2, 3, 4]); // 1, 2, 3, 4
                break;
            case 22:
                NUMBER_SERIES.push([12, 10]);
                NUMBER_SERIES.push([11, 9, 2]);
                NUMBER_SERIES.push([8, 7, 6, 1]);
                NUMBER_SERIES.push([5, 4, 3, 1, 2, 3, 4]); // 1, 2, 3, 4
                break;
            case 21:
                NUMBER_SERIES.push([12, 9]);
                NUMBER_SERIES.push([11, 10]);
                NUMBER_SERIES.push([8, 7, 6]);
                NUMBER_SERIES.push([5, 4, 3, 2, 1, 1, 2, 3]); // 1, 2, 3
                break;
            case 20:
                NUMBER_SERIES.push([12, 8]);
                NUMBER_SERIES.push([11, 9]);
                NUMBER_SERIES.push([10, 7, 3]);
                NUMBER_SERIES.push([6, 5, 4, 2, 1, 2]); // 2
                break;
            case 19:
                NUMBER_SERIES.push([12, 7]);
                NUMBER_SERIES.push([11, 8]);
                NUMBER_SERIES.push([10, 9]);
                NUMBER_SERIES.push([6, 5, 4, 3, 1]);
                [2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 18:
                NUMBER_SERIES.push([12, 6]);
                NUMBER_SERIES.push([11, 7]);
                NUMBER_SERIES.push([10, 8]);
                NUMBER_SERIES.push([9, 5, 4]);
                [3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 17:
                NUMBER_SERIES.push([12, 5]);
                NUMBER_SERIES.push([11, 6]);
                NUMBER_SERIES.push([10, 7]);
                NUMBER_SERIES.push([9, 8]);
                [4, 3, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 16:
                NUMBER_SERIES.push([12, 4]);
                NUMBER_SERIES.push([11, 5]);
                NUMBER_SERIES.push([10, 6]);
                NUMBER_SERIES.push([9, 7]);
                NUMBER_SERIES.push([8, 2, 1, 2, 3]); // 2, 3
                break;
            default:
                break;
        }
    };
    BrickCore.prototype.fillChineseNumberSeries = function (ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch (ROW_COUNT) {
            case 29:
                NUMBER_SERIES.push([10, 9, 8, 2]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 1, 1, 2]);
                break;
            case 28:
                NUMBER_SERIES.push([10, 9, 8, 1]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 2, 1]);
                break;
            case 27:
                NUMBER_SERIES.push([10, 9, 8]);
                NUMBER_SERIES.push([7, 6, 5, 4, 3, 1]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 26:
                NUMBER_SERIES.push([10, 9, 7]);
                NUMBER_SERIES.push([8, 6, 5, 4, 3]);
                [2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 25:
                NUMBER_SERIES.push([10, 9, 6]);
                NUMBER_SERIES.push([8, 7, 5, 4, 1]);
                [3, 2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 24:
                NUMBER_SERIES.push([10, 9, 5]);
                NUMBER_SERIES.push([8, 7, 6, 3]);
                [4, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 23:
                NUMBER_SERIES.push([10, 9, 4]);
                NUMBER_SERIES.push([8, 7, 6, 2]);
                [5, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 22:
                NUMBER_SERIES.push([10, 9, 3]);
                NUMBER_SERIES.push([8, 7, 6, 1]);
                [5, 4, 2].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 21:
                NUMBER_SERIES.push([10, 9, 2]);
                NUMBER_SERIES.push([8, 7, 6]);
                [5, 4, 3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 20:
                NUMBER_SERIES.push([10, 9, 1]);
                NUMBER_SERIES.push([8, 2, 7, 3]);
                NUMBER_SERIES.push([6, 4, 5, 5]); // 5
                break;
            case 19:
                NUMBER_SERIES.push([10, 9]);
                NUMBER_SERIES.push([8, 7, 4]);
                NUMBER_SERIES.push([6, 5, 3, 2, 1, 2]); // 2
                break;
            case 18:
                NUMBER_SERIES.push([10, 8]);
                NUMBER_SERIES.push([9, 7, 2]);
                NUMBER_SERIES.push([6, 3, 5, 4]);
                [1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 17:
                NUMBER_SERIES.push([10, 7]);
                NUMBER_SERIES.push([9, 8]);
                NUMBER_SERIES.push([6, 5, 4, 2]);
                [3, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            case 16:
                NUMBER_SERIES.push([10, 6]);
                NUMBER_SERIES.push([9, 7]);
                NUMBER_SERIES.push([8, 5, 3]);
                [4, 2, 1].forEach(function (number) { return OTHER_NUMBER_SERIES.push(number); });
                break;
            default:
                break;
        }
    };
    return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
