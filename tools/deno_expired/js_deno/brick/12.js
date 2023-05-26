// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BrickCore extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageMultiplicationTable';
    constructor(){
        super({}, {});
    }
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { computedData , mmToPxScale  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight  } = this.data;
        const css = `
		* { margin:0;border:0;padding:0; }
		* { box-sizing:border-box; }

		/* landscape 横向 portrait 纵向*/ 
		@media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
		page:not(page:last-child){page-break-after:always;}

		body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}
		page { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }
		/* page { height:${MAX_Y}mm; } */
		page { width:${MAX_X}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; }
		/* [edu-mirror="horizonal"] svg text{transform:rotateY(180deg);} */
		
    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */
    /* 黑/红/橙/黄/绿/青/蓝/紫/粉/淡绿/	*/
    /* 黑/紅/橙/黃/綠/青/藍/紫/粉/淡綠/	*/
    [edu-color="1"] {color:#000000;}
    [edu-color="2"] {color:#FF0000;}
    [edu-color="3"] {color:#FF7F00;}
    [edu-color="4"] {color:#FFFF00;}
    [edu-color="5"] {color:#00FF00;}
    [edu-color="6"] {color:#00FFFF;}
    [edu-color="7"] {color:#0000FF;}
    [edu-color="8"] {color:#8B00FF;}
    [edu-color="9"] {color:#F19EC2;}
    [edu-color="10"]{color:#6B8E23;}
		`;
        computedData.css = css;
        const { formatCentile  } = this;
        const list = [];
        JSON.parse(JSON.stringify(this.data.list)).forEach((item)=>{
            list.push(item);
        });
        list.forEach((item)=>item.length = formatCentile(item.length));
        const elementList = [];
        const latticeKindArray = [
            'vertical',
            'horizontal'
        ];
        list.filter(({ kind  })=>latticeKindArray.indexOf(kind) > -1).forEach((item)=>this.getLatticeOutSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach((element)=>{
                elementList.push(element);
            }));
        const { getAutomaticPaginationHtmlFromChildList  } = this;
        const latticeHtml = getAutomaticPaginationHtmlFromChildList(elementList.splice(0, elementList.length / 2), MAX_X, MAX_Y);
        const latticeHtmlMirror = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y).replace(/<page>/g, '<page style="flex-direction:row-reverse;">');
        elementList.length = 0;
        list.filter(({ kind  })=>latticeKindArray.indexOf(kind) === -1).forEach((item)=>this.getPokerSvgList(item, MAX_X, MAX_Y, mmToPxScale).forEach((element)=>{
                elementList.push(element);
            }));
        const pokerHtml = getAutomaticPaginationHtmlFromChildList(elementList, MAX_X, MAX_Y);
        computedData.html = latticeHtml.concat(latticeHtmlMirror, pokerHtml, pokerHtml.replace(/<page>/g, '<page style="flex-direction:row-reverse;">'));
        const en = `${FILENAME_POSTFIX}multiplicationtable`;
        const zh_cn = `${FILENAME_POSTFIX}乘法口诀表`;
        const zh_tw = `${FILENAME_POSTFIX}乘法口訣表`;
        computedData.title = {
            en,
            zh_cn,
            zh_tw
        };
    };
    getElementList = (item, mmToPxScale, PAPER_WIDTH, PAPER_HEIGHT)=>{
        switch(item.kind){
            case 'vertical':
            case 'horizontal':
                return this.getLatticeOutSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
            case 'numberPoker':
            case 'numberPokerFull':
            case 'chinesePoker':
            case 'chinesePokerFull':
                return this.getPokerSvgList(item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale);
            default:
                return [];
        }
    };
    getPokerSvgList = (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale)=>{
        const list = [];
        const { createSvg , createSvgPath , appendText , getTextStyleFontSizePatchCss  } = svgSpace.edu.sonya.cc.SvgHelper;
        const { formatMillimeter  } = this;
        const { length: width , scope , kind , pokerIncludeZero , copies , innerLineStyle , outerLineStyle , textStyle  } = item;
        const stroke = innerLineStyle.indexOf('stroke:') ? innerLineStyle.split('stroke:')[1].split(';')[0] : '#888';
        const height = formatMillimeter(width * 1.414);
        const WIDTH_PX = formatMillimeter(width * mmToPxScale);
        const HEIGHT_PX = formatMillimeter(height * mmToPxScale);
        const RADIUS_PX = formatMillimeter(width * 0.1 * mmToPxScale);
        const DIAMETER_PX = RADIUS_PX * 2;
        const WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
        const HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
        const chineseChars = '零一二三四五六七八九十'.split('');
        const westChars = chineseChars.concat([
            '十一',
            '十二'
        ]);
        const indiaChars = westChars.concat([
            '十三',
            '十四',
            '十五',
            '十六',
            '十七',
            '十八',
            '十九'
        ]);
        const chars = scope === 'chinese' ? chineseChars : scope === 'west' ? westChars : indiaChars;
        const isChinese = kind.indexOf('chinese') > -1;
        const isFull = kind.indexOf('Full') > -1;
        const contents = [];
        const MIN = pokerIncludeZero ? 0 : 1;
        const MAX = scope === 'chinese' ? 9 : scope === 'west' ? 12 : 19;
        for(let i = MIN; i <= MAX; ++i){
            const iStr = isChinese ? chars[i] : i.toString();
            for(let j = isFull ? MIN : i; j <= MAX; ++j){
                const product = i * j;
                let jStr = '';
                let productStr = '';
                if (isChinese) {
                    jStr = chars[j];
                    const hundreds = Math.floor(product % 1000 / 100);
                    const onesPlace = product % 10;
                    const tens = Math.floor(product % 100 / 10);
                    const onesPlaceStr = chars[onesPlace];
                    if (product < 10) {
                        productStr = `得<br/>${onesPlaceStr}`;
                    } else if (product === 10) {
                        productStr = '一<br/>十';
                    } else if (product < 20) {
                        productStr = `十<br/>${onesPlaceStr}`;
                    } else {
                        if (scope === 'chinese' || product % 100 === 0 || product < 100) {
                            if (product % 100 === 0) {
                                productStr = `${chars[hundreds]}<br/>百`;
                            } else {
                                productStr += `${chars[tens]}<br/>十`;
                                if (onesPlace > 0) {
                                    productStr += `<br/>${onesPlaceStr}`;
                                }
                            }
                        } else {
                            productStr = hundreds > 0 ? `${chars[hundreds]}百<br/>` : '';
                            if (hundreds && tens === 0 && onesPlace) productStr += '零';
                            productStr += tens > 0 ? `${chars[tens]}十${onesPlace > 0 ? '<br/>' : ''}` : '';
                            productStr += onesPlace > 0 ? onesPlaceStr : '';
                        }
                    }
                } else {
                    jStr = `×${j}`;
                    productStr = `＝${product}`;
                }
                contents.push(iStr);
                contents.push(jStr);
                contents.push(productStr);
            }
        }
        const HALF_WIDTH = width * 0.5;
        const HALF_HEIGHT = height * 0.5;
        const CSS_COLOR_ARRAY = [
            'fill:#FF0000;',
            'fill:#0000FF;',
            'fill:#FF00FF;'
        ];
        const fontSize = !isChinese || textStyle.indexOf('font-size:') === -1 ? 0 : parseFloat(textStyle.split('font-size:')[1].split('mm;')[0]);
        for(let copyLoop = 0; copyLoop < copies; ++copyLoop){
            contents.forEach((content, index)=>{
                const svg = createSvg();
                const contentRowCount = content.split('<br/>').length - 1;
                this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
                const fixY = fontSize * contentRowCount * 0.5;
                appendText(svg, textStyle.concat(isChinese ? '' : getTextStyleFontSizePatchCss(parseInt(content, 0), textStyle), CSS_COLOR_ARRAY[index % 3]), content, HALF_WIDTH, formatMillimeter(HALF_HEIGHT - fixY), 0, 'center', null, true);
                svg.setAttribute('width', `${width}mm`);
                svg.setAttribute('height', `${height}mm`);
                list.push(svg);
            });
        }
        const COUNT_PER_PAGE = Math.floor(PAPER_WIDTH / width) * Math.floor(PAPER_HEIGHT / height);
        const pokerCountHasNumber = contents.length * copies;
        const totalCount = Math.ceil(pokerCountHasNumber / COUNT_PER_PAGE) * COUNT_PER_PAGE;
        const emptyCount = totalCount - pokerCountHasNumber;
        for(let i1 = 0; i1 < emptyCount; ++i1){
            const svg = createSvg();
            this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
            svg.setAttribute('width', `${width}mm`);
            svg.setAttribute('height', `${height}mm`);
            list.push(svg);
        }
        return list;
    };
    getLatticeOutSvgList = (item, PAPER_WIDTH, PAPER_HEIGHT, mmToPxScale)=>{
        const list = [];
        const { createSvg , createSvgPath , appendText , getTextStyleFontSizePatchCss  } = svgSpace.edu.sonya.cc.SvgHelper;
        const { formatMillimeter  } = this;
        const { length: SIDE_LENGTH , kind , scope , copies , innerLineStyle , outerLineStyle , textStyle  } = item;
        const isVertical = kind === 'vertical';
        const COL_COUNT = Math.floor(PAPER_WIDTH / SIDE_LENGTH);
        const ROW_COUNT = Math.floor(PAPER_HEIGHT / SIDE_LENGTH);
        const NUMBER_SERIES = [];
        const OTHER_NUMBER_SERIES = [];
        let maxNumber = 9;
        switch(scope){
            case 'chinese':
                this.fillChineseNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                break;
            case 'west':
                maxNumber = 12;
                this.fillWestNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                break;
            case 'india':
                maxNumber = 19;
                this.fillIndiaNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES);
                break;
            default:
                break;
        }
        const NORMAL_NUMBERS = [];
        const OTHER_NUMBERS = [];
        NUMBER_SERIES.forEach((series)=>{
            for(let digit = maxNumber; digit > 0; --digit){
                for(let copyLoop = 0; copyLoop < copies; ++copyLoop){
                    NORMAL_NUMBERS.push({
                        digit,
                        series
                    });
                }
            }
        });
        OTHER_NUMBER_SERIES.forEach((rowCount)=>{
            for(let digit = maxNumber; digit > 0; --digit){
                for(let copyLoop = 0; copyLoop < copies; ++copyLoop){
                    OTHER_NUMBERS.push({
                        digit,
                        rowCount
                    });
                }
            }
        });
        const pages = [];
        const outerLineStroke = outerLineStyle.indexOf('stroke:') ? outerLineStyle.split('stroke:')[1].split(';')[0] : '#888';
        if (NORMAL_NUMBERS) {
            while(true){
                const currentPage = {
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
                const firstItem = NORMAL_NUMBERS.splice(0, 1)[0];
                this.appendNormalNumbersToPage(SIDE_LENGTH, firstItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                let remainingColCount = COL_COUNT - currentPage.mainWrapperColCount;
                let searchMax = Math.min(maxNumber, remainingColCount);
                while(remainingColCount > 0){
                    let find = false;
                    for(let findNum = searchMax; findNum > 0; --findNum){
                        const filterResult = NORMAL_NUMBERS.filter(({ digit  })=>digit === findNum);
                        if (filterResult.length) {
                            const nextItem = filterResult[0];
                            this.appendNormalNumbersToPage(SIDE_LENGTH, nextItem, currentPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, isVertical);
                            NORMAL_NUMBERS.splice(NORMAL_NUMBERS.indexOf(nextItem), 1);
                            remainingColCount -= findNum;
                            find = true;
                            break;
                        }
                    }
                    if (!find) break;
                    searchMax = Math.min(maxNumber, remainingColCount);
                }
                if (!NORMAL_NUMBERS.length) break;
            }
        }
        console.log('OTHER_NUMBER_SERIES.length', OTHER_NUMBER_SERIES.length, scope, ROW_COUNT);
        console.log('OTHER_NUMBERS.length', OTHER_NUMBERS.length, scope, ROW_COUNT);
        if (OTHER_NUMBERS.length && pages.length) {
            const lastPage = pages[pages.length - 1];
            let remainingColCount1 = COL_COUNT - lastPage.mainWrapperColCount;
            if (remainingColCount1 > 0) {
                lastPage.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 2.');
                lastPage.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 2.');
                lastPage.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 2.');
                lastPage.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 2.');
                this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, remainingColCount1, true, isVertical);
            }
        }
        while(OTHER_NUMBERS.length){
            const lastPage1 = {
                mainWrapper: createElement('div'),
                mainWrapperColCount: 0,
                otherWrapper: createElement('div'),
                otherWrapperColCount: 0,
                mainWrapperMirror: createElement('div'),
                otherWrapperMirror: createElement('div')
            };
            lastPage1.mainWrapper.setAttribute('edu-test', 'the main wrapper of phase 3.');
            lastPage1.otherWrapper.setAttribute('edu-test', 'the other wrapper of phase 3.');
            lastPage1.mainWrapperMirror.setAttribute('edu-test', 'the main wrapper mirror of phase 3.');
            lastPage1.otherWrapperMirror.setAttribute('edu-test', 'the other wrapper mirror of phase 3.');
            pages.push(lastPage1);
            this.appendOtherNumbers(SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, lastPage1, innerLineStyle, outerLineStroke, textStyle, mmToPxScale, maxNumber, COL_COUNT, false, isVertical);
        }
        const cssHeight = `${SIDE_LENGTH * ROW_COUNT}mm`;
        const cssFlex = 'display:flex;flex-wrap:wrap;';
        pages.forEach((page)=>{
            const { mainWrapper , mainWrapperColCount , otherWrapper , mainWrapperMirror , otherWrapperMirror  } = page;
            const otherWrapperColCount = COL_COUNT - mainWrapperColCount;
            page.otherWrapperColCount = otherWrapperColCount;
            const mainWrapperCss = `width:${SIDE_LENGTH * mainWrapperColCount}mm;height:${cssHeight};${cssFlex}`;
            mainWrapper.setAttribute('style', mainWrapperCss);
            mainWrapperMirror.setAttribute('style', mainWrapperCss.concat('flex-direction:row-reverse;'));
            list.push(mainWrapper);
            if (otherWrapperColCount) {
                const otherWrapperCss = `width:${SIDE_LENGTH * otherWrapperColCount}mm;height:${cssHeight};${cssFlex}`;
                otherWrapper.setAttribute('style', otherWrapperCss);
                otherWrapperMirror.setAttribute('style', otherWrapperCss.concat('flex-direction:row-reverse;'));
                list.push(otherWrapper);
            }
        });
        console.log('first list.length:', list.length);
        pages.forEach(({ mainWrapperMirror , otherWrapperMirror , otherWrapperColCount  })=>{
            list.push(mainWrapperMirror);
            if (otherWrapperColCount) list.push(otherWrapperMirror);
        });
        console.log('second list.length:', list.length);
        return list;
    };
    appendOtherNumbers = (SIDE_LENGTH, ROW_COUNT, OTHER_NUMBERS, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, maxNumber, remainingColCount, isOtherWrapper, isVertical)=>{
        const list = [];
        OTHER_NUMBERS.forEach((item)=>list.push(item));
        list.sort((prev, next)=>next.rowCount * 100 + next.digit - (prev.rowCount * 100 + prev.digit));
        const colCountArray = [];
        list.forEach(({ rowCount  })=>{
            if (colCountArray.indexOf(rowCount) === -1) colCountArray.push(rowCount);
        });
        let fixedMaxNumber = maxNumber === 9 ? 10 : maxNumber;
        let searchMax = Math.min(fixedMaxNumber, remainingColCount);
        const subWrapperHeight = SIDE_LENGTH * ROW_COUNT;
        const colCountCount = colCountArray.length;
        while(remainingColCount > 0){
            let find = false;
            for(let i = 0; i < colCountCount; ++i){
                const findNum = colCountArray[i];
                if (findNum > searchMax) continue;
                const filterResult = list.filter(({ rowCount  })=>rowCount === findNum);
                if (filterResult.length) {
                    find = true;
                    const firstItem = filterResult[0];
                    OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(firstItem), 1);
                    list.splice(list.indexOf(firstItem), 1);
                    remainingColCount -= findNum;
                    const subWrapperWidth = SIDE_LENGTH * findNum;
                    const mmSubWrapperWidth = `${subWrapperWidth}mm`;
                    const mmSubWrapperHeight = `${subWrapperHeight}mm`;
                    const subWrapperCss = `display:flex;flex-wrap:wrap;flex-direction:column;width:${subWrapperWidth}mm;height:${subWrapperHeight}mm;`;
                    const subWrapper = createElement('div');
                    subWrapper.setAttribute('style', subWrapperCss);
                    subWrapper.setAttribute('width', mmSubWrapperWidth);
                    subWrapper.setAttribute('height', mmSubWrapperHeight);
                    const subWrapperMirror = createElement('div');
                    subWrapperMirror.setAttribute('style', subWrapperCss);
                    subWrapperMirror.setAttribute('width', mmSubWrapperWidth);
                    subWrapperMirror.setAttribute('height', mmSubWrapperHeight);
                    if (isOtherWrapper) {
                        currentPage.otherWrapperColCount += findNum;
                        currentPage.otherWrapper.appendChild(subWrapper);
                        currentPage.otherWrapperMirror.appendChild(subWrapperMirror);
                    } else {
                        currentPage.mainWrapperColCount += findNum;
                        currentPage.mainWrapper.appendChild(subWrapper);
                        currentPage.mainWrapperMirror.appendChild(subWrapperMirror);
                    }
                    this.appendOtherNumberItem(SIDE_LENGTH, firstItem, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                    let subWrapperRemainRow = ROW_COUNT - firstItem.digit;
                    this.fillHorizontalSubWrapper(subWrapperRemainRow, searchMax, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical);
                    searchMax = Math.min(searchMax, remainingColCount);
                }
                if (find) break;
            }
            if (!find) {
                console.log('appendOtherNumbersToOtherWrapper(), not find');
                return;
            }
            searchMax = Math.min(maxNumber, remainingColCount);
        }
    };
    fillHorizontalSubWrapper(subWrapperRemainRow, maxColCount, list, OTHER_NUMBERS, SIDE_LENGTH, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, colCountArray, isVertical) {
        if (subWrapperRemainRow === 0) return;
        const colCountCount = colCountArray.length;
        for(let i = 0; i < colCountCount; ++i){
            const searchRowCount = colCountArray[i];
            if (searchRowCount > maxColCount) continue;
            const others = list.filter(({ rowCount  })=>rowCount === searchRowCount);
            const count = others.length;
            for(let i1 = 0; i1 < count; ++i1){
                const item = others[i1];
                const { digit  } = item;
                if (subWrapperRemainRow >= digit) {
                    OTHER_NUMBERS.splice(OTHER_NUMBERS.indexOf(item), 1);
                    list.splice(list.indexOf(item), 1);
                    subWrapperRemainRow -= digit;
                    this.appendOtherNumberItem(SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical);
                    if (subWrapperRemainRow === 0) return;
                }
            }
        }
    }
    appendOtherNumberItem = (SIDE_LENGTH, item, subWrapper, subWrapperMirror, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical)=>{
        const { createSvg , createSvgPath , appendLine , appendText , getTextStyleFontSizePatchCss  } = svgSpace.edu.sonya.cc.SvgHelper;
        const { formatMillimeter  } = this;
        const svg = createSvg();
        subWrapper.appendChild(svg);
        const svgMirror = createSvg();
        subWrapperMirror.appendChild(svgMirror);
        const { digit , rowCount: trueColCount  } = item;
        const digitCss = this.textFillStyleArray[(digit - 1) % 10];
        const RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
        const DIAMETER_PX = RADIUS_PX * 2;
        const width = SIDE_LENGTH * trueColCount;
        const WIDTH_PX = formatMillimeter(width * mmToPxScale);
        const WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
        const height = SIDE_LENGTH * digit;
        const HEIGHT_PX = formatMillimeter(height * mmToPxScale);
        const HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
        const mmSvgWidth = `${width}mm`;
        const mmSvgHeight = `${height}mm`;
        svg.setAttribute('width', mmSvgWidth);
        svg.setAttribute('height', mmSvgHeight);
        svgMirror.setAttribute('width', mmSvgWidth);
        svgMirror.setAttribute('height', mmSvgHeight);
        this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
        this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svgMirror);
        for(let colIndex = 1; colIndex < trueColCount; ++colIndex){
            const X = SIDE_LENGTH * colIndex;
            appendLine(svg, innerLineStyle, X, X, 0, height, null);
            appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
        }
        for(let rowIndex = 1; rowIndex < digit; ++rowIndex){
            const Y = height - SIDE_LENGTH * rowIndex;
            appendLine(svg, innerLineStyle, 0, width, Y, Y, null);
            appendLine(svgMirror, innerLineStyle, 0, width, Y, Y, null);
        }
        const textXOrY = SIDE_LENGTH * 0.5;
        const mmSubSvgWidthOrHeight = `${SIDE_LENGTH}mm`;
        for(let colIndex1 = 0; colIndex1 < trueColCount; ++colIndex1){
            const mmX = `${SIDE_LENGTH * colIndex1}mm`;
            for(let rowIndex1 = 0; rowIndex1 < digit; ++rowIndex1){
                const mmY = `${height - SIDE_LENGTH * rowIndex1 - SIDE_LENGTH}mm`;
                const subSvg = createSvg();
                svg.appendChild(subSvg);
                subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                subSvg.setAttribute('x', mmX);
                subSvg.setAttribute('y', mmY);
                const subSvgMirror = createSvg();
                svgMirror.appendChild(subSvgMirror);
                subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                subSvgMirror.setAttribute('x', mmX);
                subSvgMirror.setAttribute('y', mmY);
                const numLeftToRight = rowIndex1 + 1 + digit * colIndex1;
                const numberRightToLeft = digit - rowIndex1 + digit * colIndex1;
                if (isVertical) {
                    const num = numLeftToRight;
                    const numMirror = numLeftToRight;
                    appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                    appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                } else {
                    const num1 = numberRightToLeft;
                    appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num1, textStyle), digitCss), num1.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                    const numMirror1 = numberRightToLeft;
                    appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror1, textStyle), digitCss), numMirror1.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                }
            }
        }
    };
    textFillStyleArray = [
        'fill:#000000;',
        'fill:#FF0000;',
        'fill:#FF7F00;',
        'fill:#FFFF00;',
        'fill:#00FF00;',
        'fill:#00FFFF;',
        'fill:#0000FF;',
        'fill:#8B00FF;',
        'fill:#F19EC2;',
        'fill:#6B8E23;'
    ];
    appendNormalNumbersToPage = (SIDE_LENGTH, { digit , series  }, currentPage, innerLineStyle, stroke, textStyle, mmToPxScale, isVertical)=>{
        currentPage.mainWrapperColCount += digit;
        const digitCss = this.textFillStyleArray[(digit - 1) % 10];
        const { createSvg , createSvgPath , appendLine , appendText , getTextStyleFontSizePatchCss  } = svgSpace.edu.sonya.cc.SvgHelper;
        const { formatMillimeter  } = this;
        const width = SIDE_LENGTH * digit;
        const WIDTH_PX = formatMillimeter(width * mmToPxScale);
        const RADIUS_PX = formatMillimeter(SIDE_LENGTH * 0.2 * mmToPxScale);
        const DIAMETER_PX = RADIUS_PX * 2;
        const WIDTH_SUBTRACT_DIAMETER_PX = WIDTH_PX - DIAMETER_PX;
        const { mainWrapper , mainWrapperMirror  } = currentPage;
        const mainWrapperSub = createElement('div');
        mainWrapper.appendChild(mainWrapperSub);
        const mainWrapperSubMirror = createElement('div');
        mainWrapperMirror.appendChild(mainWrapperSubMirror);
        const css = 'display:flex;flex-direction:column;';
        mainWrapperSub.setAttribute('style', css);
        mainWrapperSubMirror.setAttribute('style', css);
        series.forEach((rowCount)=>{
            const height = SIDE_LENGTH * rowCount;
            const HEIGHT_PX = formatMillimeter(height * mmToPxScale);
            const HEIGHT_SUBTRACT_DIAMETER_PX = HEIGHT_PX - DIAMETER_PX;
            const svg = createSvg();
            mainWrapperSub.appendChild(svg);
            const svgMirror = createSvg();
            mainWrapperSubMirror.appendChild(svgMirror);
            const mmWidth = `${width}mm`;
            const mmHeight = `${height}mm`;
            svg.setAttribute('width', mmWidth);
            svg.setAttribute('height', mmHeight);
            svgMirror.setAttribute('width', mmWidth);
            svgMirror.setAttribute('height', mmHeight);
            this.appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg);
            for(let colIndex = 1; colIndex < digit; ++colIndex){
                const X = SIDE_LENGTH * colIndex;
                appendLine(svg, innerLineStyle, X, X, 0, height, null);
                appendLine(svgMirror, innerLineStyle, X, X, 0, height, null);
            }
            for(let rowIndex = 1; rowIndex < rowCount; ++rowIndex){
                const lineY = height - SIDE_LENGTH * rowIndex;
                appendLine(svg, innerLineStyle, 0, width, lineY, lineY, null);
                appendLine(svgMirror, innerLineStyle, 0, width, lineY, lineY, null);
            }
            const mmSubSvgWidthOrHeight = `${SIDE_LENGTH}mm`;
            const textXOrY = SIDE_LENGTH * 0.5;
            for(let rowIndex1 = 0; rowIndex1 < rowCount; ++rowIndex1){
                const mmY = `${height - SIDE_LENGTH * rowIndex1 - SIDE_LENGTH}mm`;
                const numberOffset = digit * (isVertical ? rowCount - rowIndex1 - 1 : rowIndex1);
                for(let colIndex1 = 0; colIndex1 < digit; ++colIndex1){
                    const mmX = `${SIDE_LENGTH * colIndex1}mm`;
                    const subSvg = createSvg();
                    svg.appendChild(subSvg);
                    subSvg.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvg.setAttribute('x', mmX);
                    subSvg.setAttribute('y', mmY);
                    const subSvgMirror = createSvg();
                    svgMirror.appendChild(subSvgMirror);
                    subSvgMirror.setAttribute('width', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('height', mmSubSvgWidthOrHeight);
                    subSvgMirror.setAttribute('x', mmX);
                    subSvgMirror.setAttribute('y', mmY);
                    const numLeftToRight = colIndex1 + 1 + numberOffset;
                    if (isVertical) {
                        const num = numLeftToRight;
                        const numMirror = numLeftToRight;
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num, textStyle), digitCss), num.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror, textStyle), digitCss), numMirror.toString(), textXOrY, textXOrY, 90, 'center', null, true);
                    } else {
                        const num1 = numLeftToRight;
                        appendText(subSvg, textStyle.concat(getTextStyleFontSizePatchCss(num1, textStyle), digitCss), num1.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                        const numMirror1 = num1;
                        appendText(subSvgMirror, textStyle.concat(getTextStyleFontSizePatchCss(numMirror1, textStyle), digitCss), numMirror1.toString(), textXOrY, textXOrY, 0, 'center', null, true);
                    }
                }
            }
        });
    };
    kindTableColumnInfo = [
        {
            value: 'numberPoker',
            captions: {
                en: 'Number Poker',
                zh_cn: '数字扑克',
                zh_tw: '數位撲克'
            }
        },
        {
            value: 'chinesePoker',
            captions: {
                en: 'Chinese Poker',
                zh_cn: '汉字扑克',
                zh_tw: '漢字撲克'
            }
        },
        {
            value: 'numberPokerFull',
            captions: {
                en: 'Number Poker Full',
                zh_cn: '完整数字扑克',
                zh_tw: '完整數位撲克'
            }
        },
        {
            value: 'chinesePokerFull',
            captions: {
                en: 'Chinese Poker Full',
                zh_cn: '完整汉字扑克',
                zh_tw: '完整漢字撲克'
            }
        },
        {
            value: 'vertical',
            captions: {
                en: 'Vertical',
                zh_cn: '竖格',
                zh_tw: '豎格'
            }
        },
        {
            value: 'horizontal',
            captions: {
                en: 'Horizontal',
                zh_cn: '横格',
                zh_tw: '橫格'
            }
        }
    ];
    scopeTableColumnInfo = [
        {
            value: 'chinese',
            captions: {
                en: 'Chinese',
                zh_cn: '中式9×9',
                zh_tw: '中式9×9'
            }
        },
        {
            value: 'west',
            captions: {
                en: 'West',
                zh_cn: '西式12×12',
                zh_tw: '西式12×12'
            }
        },
        {
            value: 'india',
            captions: {
                en: 'India',
                zh_cn: '印式19×19',
                zh_tw: '印式19×19'
            }
        }
    ];
    createTableBodyRow = (item)=>{
        const { length , scope , kind , pokerIncludeZero , copies , innerLineStyle , outerLineStyle , textStyle  } = item;
        const { tableBodyElement  } = this;
        const tr = createElement('tr');
        tableBodyElement.appendChild(tr);
        this.appendOperationTd(tr, item);
        this.appendNumberTd(tr, length, item, 'length', 1, null, 0.1);
        this.appendSelectTd(tr, scope, item, 'scope', this.scopeTableColumnInfo);
        this.appendSelectTd(tr, kind, item, 'kind', this.kindTableColumnInfo);
        this.appendCheckboxTdWithoutText(tr, pokerIncludeZero, item, 'pokerIncludeZero');
        this.appendNumberTd(tr, copies, item, 'copies', 1, null, 1);
        this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
        this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
        this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
    };
    initTableHead = ()=>{
        this.appendTableHeadCell({
            en: 'Length',
            zh_cn: '边长',
            zh_tw: '邊長'
        });
        this.appendTableHeadCell({
            en: 'Scope',
            zh_cn: '范围',
            zh_tw: '範圍'
        });
        this.appendTableHeadCell({
            en: 'Kind',
            zh_cn: '类型',
            zh_tw: '類型'
        });
        this.appendTableHeadCell({
            en: 'Poker Include Zero',
            zh_cn: '扑克带零',
            zh_tw: '撲克帶零'
        });
        this.appendTableHeadCell({
            en: 'Copies',
            zh_cn: '份数',
            zh_tw: '份數'
        });
        this.appendTableHeadCell({
            en: 'Inner Line Style',
            zh_cn: '内部线样式',
            zh_tw: '內部線樣式'
        });
        this.appendTableHeadCell({
            en: 'Outer Line Style',
            zh_cn: '外边线样式',
            zh_tw: '外邊線樣式'
        });
        this.appendTableHeadCell({
            en: 'Text Style',
            zh_cn: '文本样式',
            zh_tw: '文字樣式'
        });
    };
    getUsableList = ()=>{
        const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
        const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
        const textStyle = 'font-size:6mm;';
        const textStyleOfNumberPoker = 'font-size:7.5mm;';
        const textStyleOfChinesePoker = 'font-size:6.5mm;';
        const kinds = this.kindTableColumnInfo.map(({ value  })=>value);
        const kindI18n = this.kindTableColumnInfo.map(({ captions  })=>captions);
        const usableList = [];
        this.scopeTableColumnInfo.forEach(({ value , captions  })=>{
            const scope = value;
            const buttonList = [];
            kinds.forEach((kind, index)=>{
                buttonList.push({
                    nameI18n: kindI18n[index],
                    info: {
                        length: kind === 'vertical' || kind === 'horizontal' ? 10 : 16,
                        scope,
                        kind,
                        pokerIncludeZero: false,
                        copies: 1,
                        innerLineStyle,
                        outerLineStyle,
                        textStyle: kind.indexOf('numberPoker') > -1 ? textStyleOfNumberPoker : kind.indexOf('chinesePoker') > -1 ? textStyleOfChinesePoker : textStyle
                    }
                });
            });
            const strongI18n = captions;
            usableList.push({
                strongI18n,
                buttonList
            });
        });
        return usableList;
    };
    appendSvgPath(createSvgPath, stroke, RADIUS_PX, WIDTH_SUBTRACT_DIAMETER_PX, HEIGHT_SUBTRACT_DIAMETER_PX, svg) {
        const path = createSvgPath();
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', stroke);
        path.setAttribute('d', `M 0, ${RADIUS_PX}`.concat(` a ${RADIUS_PX} ${RADIUS_PX} 0 0 1 ${RADIUS_PX} -${RADIUS_PX}`, ` h ${WIDTH_SUBTRACT_DIAMETER_PX} `, ` a ${RADIUS_PX} ${RADIUS_PX} 0 0 1 ${RADIUS_PX} ${RADIUS_PX}`, ` v ${HEIGHT_SUBTRACT_DIAMETER_PX} `, ` a ${RADIUS_PX} ${RADIUS_PX} 0 0 1 -${RADIUS_PX} ${RADIUS_PX}`, ` h -${WIDTH_SUBTRACT_DIAMETER_PX} `, ` a ${RADIUS_PX} ${RADIUS_PX} 0 0 1 -${RADIUS_PX} -${RADIUS_PX}`, ' z'));
        svg.appendChild(path);
    }
    fillIndiaNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch(ROW_COUNT){
            case 29:
                NUMBER_SERIES.push([
                    19,
                    10
                ]);
                NUMBER_SERIES.push([
                    18,
                    11
                ]);
                NUMBER_SERIES.push([
                    17,
                    12
                ]);
                NUMBER_SERIES.push([
                    16,
                    13
                ]);
                NUMBER_SERIES.push([
                    15,
                    14
                ]);
                NUMBER_SERIES.push([
                    9,
                    8,
                    7,
                    5
                ]);
                [
                    6,
                    4,
                    3,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 28:
                NUMBER_SERIES.push([
                    19,
                    9
                ]);
                NUMBER_SERIES.push([
                    18,
                    10
                ]);
                NUMBER_SERIES.push([
                    17,
                    11
                ]);
                NUMBER_SERIES.push([
                    16,
                    12
                ]);
                NUMBER_SERIES.push([
                    15,
                    13
                ]);
                NUMBER_SERIES.push([
                    14,
                    8,
                    6
                ]);
                NUMBER_SERIES.push([
                    7,
                    5,
                    4,
                    3,
                    2,
                    1,
                    1,
                    3
                ]);
                break;
            case 27:
                NUMBER_SERIES.push([
                    19,
                    8
                ]);
                NUMBER_SERIES.push([
                    18,
                    9
                ]);
                NUMBER_SERIES.push([
                    17,
                    10
                ]);
                NUMBER_SERIES.push([
                    16,
                    11
                ]);
                NUMBER_SERIES.push([
                    15,
                    12
                ]);
                NUMBER_SERIES.push([
                    14,
                    13
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    5,
                    4,
                    3,
                    2
                ]);
                [
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 26:
                NUMBER_SERIES.push([
                    19,
                    7
                ]);
                NUMBER_SERIES.push([
                    18,
                    8
                ]);
                NUMBER_SERIES.push([
                    17,
                    9
                ]);
                NUMBER_SERIES.push([
                    16,
                    10
                ]);
                NUMBER_SERIES.push([
                    15,
                    11
                ]);
                NUMBER_SERIES.push([
                    14,
                    12
                ]);
                NUMBER_SERIES.push([
                    13,
                    6,
                    5,
                    2
                ]);
                [
                    4,
                    3,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 25:
                NUMBER_SERIES.push([
                    19,
                    6
                ]);
                NUMBER_SERIES.push([
                    18,
                    7
                ]);
                NUMBER_SERIES.push([
                    17,
                    8
                ]);
                NUMBER_SERIES.push([
                    16,
                    9
                ]);
                NUMBER_SERIES.push([
                    15,
                    10
                ]);
                NUMBER_SERIES.push([
                    14,
                    11
                ]);
                NUMBER_SERIES.push([
                    13,
                    12
                ]);
                NUMBER_SERIES.push([
                    5,
                    4,
                    3,
                    2,
                    1,
                    1,
                    2,
                    3,
                    4
                ]);
                break;
            case 24:
                NUMBER_SERIES.push([
                    19,
                    5
                ]);
                NUMBER_SERIES.push([
                    18,
                    6
                ]);
                NUMBER_SERIES.push([
                    17,
                    7
                ]);
                NUMBER_SERIES.push([
                    16,
                    8
                ]);
                NUMBER_SERIES.push([
                    15,
                    9
                ]);
                NUMBER_SERIES.push([
                    14,
                    10
                ]);
                NUMBER_SERIES.push([
                    13,
                    11
                ]);
                NUMBER_SERIES.push([
                    12,
                    4,
                    3,
                    2,
                    1,
                    2
                ]);
                break;
            case 23:
                NUMBER_SERIES.push([
                    19,
                    4
                ]);
                NUMBER_SERIES.push([
                    18,
                    5
                ]);
                NUMBER_SERIES.push([
                    17,
                    6
                ]);
                NUMBER_SERIES.push([
                    16,
                    7
                ]);
                NUMBER_SERIES.push([
                    15,
                    8
                ]);
                NUMBER_SERIES.push([
                    14,
                    9
                ]);
                NUMBER_SERIES.push([
                    13,
                    10
                ]);
                NUMBER_SERIES.push([
                    12,
                    11
                ]);
                [
                    3,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 22:
                NUMBER_SERIES.push([
                    19,
                    3
                ]);
                NUMBER_SERIES.push([
                    18,
                    4
                ]);
                NUMBER_SERIES.push([
                    17,
                    5
                ]);
                NUMBER_SERIES.push([
                    16,
                    6
                ]);
                NUMBER_SERIES.push([
                    15,
                    7
                ]);
                NUMBER_SERIES.push([
                    14,
                    8
                ]);
                NUMBER_SERIES.push([
                    13,
                    9
                ]);
                NUMBER_SERIES.push([
                    12,
                    10
                ]);
                [
                    11,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 21:
                NUMBER_SERIES.push([
                    19,
                    2
                ]);
                NUMBER_SERIES.push([
                    18,
                    3
                ]);
                NUMBER_SERIES.push([
                    17,
                    4
                ]);
                NUMBER_SERIES.push([
                    16,
                    5
                ]);
                NUMBER_SERIES.push([
                    15,
                    6
                ]);
                NUMBER_SERIES.push([
                    14,
                    7
                ]);
                NUMBER_SERIES.push([
                    13,
                    8
                ]);
                NUMBER_SERIES.push([
                    12,
                    9
                ]);
                NUMBER_SERIES.push([
                    11,
                    10
                ]);
                [
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 20:
                NUMBER_SERIES.push([
                    19,
                    1
                ]);
                NUMBER_SERIES.push([
                    18,
                    2
                ]);
                NUMBER_SERIES.push([
                    17,
                    3
                ]);
                NUMBER_SERIES.push([
                    16,
                    4
                ]);
                NUMBER_SERIES.push([
                    15,
                    5
                ]);
                NUMBER_SERIES.push([
                    14,
                    6
                ]);
                NUMBER_SERIES.push([
                    13,
                    7
                ]);
                NUMBER_SERIES.push([
                    12,
                    8
                ]);
                NUMBER_SERIES.push([
                    11,
                    9
                ]);
                [
                    10
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 19:
                NUMBER_SERIES.push([
                    19
                ]);
                NUMBER_SERIES.push([
                    18,
                    1
                ]);
                NUMBER_SERIES.push([
                    17,
                    2
                ]);
                NUMBER_SERIES.push([
                    16,
                    3
                ]);
                NUMBER_SERIES.push([
                    15,
                    4
                ]);
                NUMBER_SERIES.push([
                    14,
                    5
                ]);
                NUMBER_SERIES.push([
                    13,
                    6
                ]);
                NUMBER_SERIES.push([
                    12,
                    7
                ]);
                NUMBER_SERIES.push([
                    11,
                    8
                ]);
                NUMBER_SERIES.push([
                    10,
                    9
                ]);
                break;
            default:
                break;
        }
    }
    fillWestNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch(ROW_COUNT){
            case 29:
                NUMBER_SERIES.push([
                    12,
                    11,
                    6
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    8,
                    2
                ]);
                NUMBER_SERIES.push([
                    7,
                    5,
                    4,
                    3,
                    1,
                    2,
                    3,
                    4
                ]);
                break;
            case 28:
                NUMBER_SERIES.push([
                    12,
                    11,
                    5
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    8,
                    1
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    4,
                    3,
                    2,
                    1,
                    2,
                    3
                ]);
                break;
            case 27:
                NUMBER_SERIES.push([
                    12,
                    11,
                    4
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    8
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    5,
                    3,
                    2,
                    1,
                    1,
                    2
                ]);
                break;
            case 26:
                NUMBER_SERIES.push([
                    12,
                    11,
                    3
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    7
                ]);
                NUMBER_SERIES.push([
                    8,
                    6,
                    5,
                    4,
                    2,
                    1
                ]);
                break;
            case 25:
                NUMBER_SERIES.push([
                    12,
                    11,
                    2
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    6
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    5,
                    4,
                    1
                ]);
                [
                    3
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 24:
                NUMBER_SERIES.push([
                    12,
                    11,
                    1
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    5
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    3
                ]);
                [
                    2,
                    4
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 23:
                NUMBER_SERIES.push([
                    12,
                    11
                ]);
                NUMBER_SERIES.push([
                    10,
                    9,
                    4
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    2
                ]);
                NUMBER_SERIES.push([
                    5,
                    4,
                    3,
                    1,
                    1,
                    2,
                    3,
                    4
                ]);
                break;
            case 22:
                NUMBER_SERIES.push([
                    12,
                    10
                ]);
                NUMBER_SERIES.push([
                    11,
                    9,
                    2
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    1
                ]);
                NUMBER_SERIES.push([
                    5,
                    4,
                    3,
                    1,
                    2,
                    3,
                    4
                ]);
                break;
            case 21:
                NUMBER_SERIES.push([
                    12,
                    9
                ]);
                NUMBER_SERIES.push([
                    11,
                    10
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6
                ]);
                NUMBER_SERIES.push([
                    5,
                    4,
                    3,
                    2,
                    1,
                    1,
                    2,
                    3
                ]);
                break;
            case 20:
                NUMBER_SERIES.push([
                    12,
                    8
                ]);
                NUMBER_SERIES.push([
                    11,
                    9
                ]);
                NUMBER_SERIES.push([
                    10,
                    7,
                    3
                ]);
                NUMBER_SERIES.push([
                    6,
                    5,
                    4,
                    2,
                    1,
                    2
                ]);
                break;
            case 19:
                NUMBER_SERIES.push([
                    12,
                    7
                ]);
                NUMBER_SERIES.push([
                    11,
                    8
                ]);
                NUMBER_SERIES.push([
                    10,
                    9
                ]);
                NUMBER_SERIES.push([
                    6,
                    5,
                    4,
                    3,
                    1
                ]);
                [
                    2
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 18:
                NUMBER_SERIES.push([
                    12,
                    6
                ]);
                NUMBER_SERIES.push([
                    11,
                    7
                ]);
                NUMBER_SERIES.push([
                    10,
                    8
                ]);
                NUMBER_SERIES.push([
                    9,
                    5,
                    4
                ]);
                [
                    3,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 17:
                NUMBER_SERIES.push([
                    12,
                    5
                ]);
                NUMBER_SERIES.push([
                    11,
                    6
                ]);
                NUMBER_SERIES.push([
                    10,
                    7
                ]);
                NUMBER_SERIES.push([
                    9,
                    8
                ]);
                [
                    4,
                    3,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 16:
                NUMBER_SERIES.push([
                    12,
                    4
                ]);
                NUMBER_SERIES.push([
                    11,
                    5
                ]);
                NUMBER_SERIES.push([
                    10,
                    6
                ]);
                NUMBER_SERIES.push([
                    9,
                    7
                ]);
                NUMBER_SERIES.push([
                    8,
                    2,
                    1,
                    2,
                    3
                ]);
                break;
            default:
                break;
        }
    }
    fillChineseNumberSeries(ROW_COUNT, NUMBER_SERIES, OTHER_NUMBER_SERIES) {
        switch(ROW_COUNT){
            case 29:
                NUMBER_SERIES.push([
                    10,
                    9,
                    8,
                    2
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    5,
                    4,
                    3,
                    1,
                    1,
                    2
                ]);
                break;
            case 28:
                NUMBER_SERIES.push([
                    10,
                    9,
                    8,
                    1
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    5,
                    4,
                    3,
                    2,
                    1
                ]);
                break;
            case 27:
                NUMBER_SERIES.push([
                    10,
                    9,
                    8
                ]);
                NUMBER_SERIES.push([
                    7,
                    6,
                    5,
                    4,
                    3,
                    1
                ]);
                [
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 26:
                NUMBER_SERIES.push([
                    10,
                    9,
                    7
                ]);
                NUMBER_SERIES.push([
                    8,
                    6,
                    5,
                    4,
                    3
                ]);
                [
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 25:
                NUMBER_SERIES.push([
                    10,
                    9,
                    6
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    5,
                    4,
                    1
                ]);
                [
                    3,
                    2
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 24:
                NUMBER_SERIES.push([
                    10,
                    9,
                    5
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    3
                ]);
                [
                    4,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 23:
                NUMBER_SERIES.push([
                    10,
                    9,
                    4
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    2
                ]);
                [
                    5,
                    3,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 22:
                NUMBER_SERIES.push([
                    10,
                    9,
                    3
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6,
                    1
                ]);
                [
                    5,
                    4,
                    2
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 21:
                NUMBER_SERIES.push([
                    10,
                    9,
                    2
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    6
                ]);
                [
                    5,
                    4,
                    3,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 20:
                NUMBER_SERIES.push([
                    10,
                    9,
                    1
                ]);
                NUMBER_SERIES.push([
                    8,
                    2,
                    7,
                    3
                ]);
                NUMBER_SERIES.push([
                    6,
                    4,
                    5,
                    5
                ]);
                break;
            case 19:
                NUMBER_SERIES.push([
                    10,
                    9
                ]);
                NUMBER_SERIES.push([
                    8,
                    7,
                    4
                ]);
                NUMBER_SERIES.push([
                    6,
                    5,
                    3,
                    2,
                    1,
                    2
                ]);
                break;
            case 18:
                NUMBER_SERIES.push([
                    10,
                    8
                ]);
                NUMBER_SERIES.push([
                    9,
                    7,
                    2
                ]);
                NUMBER_SERIES.push([
                    6,
                    3,
                    5,
                    4
                ]);
                [
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 17:
                NUMBER_SERIES.push([
                    10,
                    7
                ]);
                NUMBER_SERIES.push([
                    9,
                    8
                ]);
                NUMBER_SERIES.push([
                    6,
                    5,
                    4,
                    2
                ]);
                [
                    3,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            case 16:
                NUMBER_SERIES.push([
                    10,
                    6
                ]);
                NUMBER_SERIES.push([
                    9,
                    7
                ]);
                NUMBER_SERIES.push([
                    8,
                    5,
                    3
                ]);
                [
                    4,
                    2,
                    1
                ].forEach((number)=>OTHER_NUMBER_SERIES.push(number));
                break;
            default:
                break;
        }
    }
}
const brickCore = new BrickCore();
window.brickCore = brickCore;
