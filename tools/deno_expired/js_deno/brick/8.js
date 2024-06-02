// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var RummikubPokerKind;
(function (RummikubPokerKind) {
    RummikubPokerKind[RummikubPokerKind["none"] = 0] = "none";
    RummikubPokerKind[RummikubPokerKind["diagonal"] = 1] = "diagonal";
    RummikubPokerKind[RummikubPokerKind["center"] = 2] = "center";
    RummikubPokerKind[RummikubPokerKind["diagonalExtends"] = 4] = "diagonalExtends";
    RummikubPokerKind[RummikubPokerKind["centerExtends"] = 8] = "centerExtends";
})(RummikubPokerKind || (RummikubPokerKind = {}));
const DefaultRummikubPokerKind = 15;
class BrickCore extends PokerBase {
    constructor() {
        super({
            pokerWidth: 20,
            pokerHeight: 28,
            backFontSize: '12px',
            pokerKind: 15,
            centerTextShowed: false,
            includeZero: false,
            wholePage: false
        }, {
            count: 0,
            chars: [],
            backCovers: [],
            centerTexts: [],
            colors: [],
            isCenters: [],
            pokerCss: `
      .double{display:flex;justify-content: space-around;}
      .double b:first-child{position:relative;left:0.375em;}
      .double b:last-child{position:relative;left:-0.375em;opacity:0.75;}

      .discoloration{display:flex;width: 100%;position: relative;}
      .discoloration b:first-child{overflow:hidden;position:relative;left:0.5em;}
      .discoloration b:first-child i{position:relative;left:-0.5em;color:#000;}
      .discoloration b:last-child{overflow:hidden;position:relative;left:-0.5em;}
      .discoloration b:last-child i{position:relative;left:0em;color:#F00;}

      .mirror{position:relative;margin-left:12%;width:88%;letter-spacing:0em;display:flex;}
      .top-left .mirror,.bottom-right .mirror{width:40%;margin-left:6%;}
      .mirror b:first-child{overflow:hidden;}
      .mirror b:last-child{overflow:hidden;}
      .mirror b:first-child i{position:relative;left:-0.475em;}
      .mirror b:last-child i{position:relative;left: -0.15em;border-left:1px solid #888;}
      `
        });
    }
    onPageSizeChanged = (_newPageSize) => {};
    getForePageHtml = () => {
        let {
            data: {
                paperSize,
                maxX: MAX_X,
                maxY: MAX_Y,
                pokerWidth: CARD_WIDTH,
                pokerHeight: CARD_HEIGHT,
                centerTextShowed
            },
            computedData: {
                count: COUNT,
                chars: CHARS,
                centerTexts: CENTER_TEXTS,
                colors: COLORS,
                isCenters: IS_CENTERS
            }
        } = this;
        const MAX_SYMBOL_INDEX = COUNT - 1;
        const PAGE_START = `<page class="forePage ${paperSize}">`,
            PAGE_END = '</page>';
        const ROW_START = '<row>',
            ROW_END = '</row>';
        const CELL_START = '<cell>',
            CELL_END = '</cell>';
        const TOP_START = '<top>',
            TOP_END = '</top>';
        const BOTTOM_START = '<bottom>',
            BOTTOM_END = '</bottom>';
        const CENTER_START = '<center>',
            CENTER_END = '</center>';
        const TEXT_END = '</text>';
        const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
        const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
        const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
        const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
        let symbolIndex = 0;
        let html = '';
        for (let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
            html += PAGE_START;
            for (let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                html += ROW_START;
                for (let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                    html += CELL_START;
                    if (symbolIndex <= MAX_SYMBOL_INDEX) {
                        const isCenter = IS_CENTERS[symbolIndex];
                        const __char = CHARS[symbolIndex] || (isCenter ? '' : '_');
                        const color = COLORS[symbolIndex] || '-1';
                        if (isCenter) {
                            html += `${CENTER_START}<text edu-color="${color}">${__char.replace(/([69])/g, '<u>'.concat('$1', '</u>'))}${TEXT_END}${CENTER_END}`;
                        } else {
                            html += `${TOP_START}<text class="top-left" edu-color="${color}">${__char}${TEXT_END}${TOP_END}`;
                            if (centerTextShowed) {
                                html += `${CENTER_START}${CENTER_TEXTS[symbolIndex] || ''}${CENTER_END}`;
                            }
                            html += `${BOTTOM_START}<text class="bottom-right" edu-color="${color}">${__char}${TEXT_END}${BOTTOM_END}`;
                        }
                    }
                    html += CELL_END;
                    ++symbolIndex;
                }
                html += ROW_END;
            }
            html += PAGE_END;
        }
        return html;
    };
    getBackPageHtml = () => {
        let {
            data: {
                paperSize,
                maxX: MAX_X,
                maxY: MAX_Y,
                pokerWidth: CARD_WIDTH,
                pokerHeight: CARD_HEIGHT
            },
            computedData: {
                count: COUNT,
                backCovers: BACK_COVERS
            }
        } = this;
        const PAGE_START = `<page class="backPage ${paperSize}" dir="rtl">`,
            PAGE_END = '</page>';
        const ROW_START = '<row>',
            ROW_END = '</row>';
        const CELL_START = '<cell>',
            CELL_END = '</cell>';
        const CENTER_START = '<center>',
            CENTER_END = '</center>';
        const MAX_SYMBOL_INDEX = COUNT - 1;
        const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
        const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
        const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
        const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
        const lastItem = BACK_COVERS[BACK_COVERS.length - 1];
        let symbolIndex = 0;
        let html = '';
        for (let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
            html += PAGE_START;
            for (let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                html += ROW_START;
                for (let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                    html += CELL_START;
                    if (symbolIndex <= MAX_SYMBOL_INDEX) {
                        html += CENTER_START.concat(BACK_COVERS[symbolIndex] || lastItem, CENTER_END);
                    }
                    html += CELL_END;
                    ++symbolIndex;
                }
                html += ROW_END;
            }
            html += PAGE_END;
        }
        return html;
    };
    DIAGONAL_NORMAL_CARD_TIMES = 2;
    DIAGONAL_CHANGEABLE_CARD_COUNT = 2;
    DIAGONAL_CENTER_TEXT = `<div>
  <p><en_us>Same decor</en_us><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
  <p><en_us>Arithmetic sequence</en_us></p><br />
  <p edu-color="1">7,8,9,10,11,12,13</p>
  <p edu-color="2">1,2,3</p>
  <p edu-color="1">5,6,☺,8</p>

  <p><en_us>Different decors</en_us><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
  <p><en_us>Same value</en_us></p>
  <p><b edu-color="1">2</b><b edu-color="2">2</b><b edu-color="3">2</b><b edu-color="3">☺</b></p>
  <p><b edu-color="1">☺</b><b edu-color="2">3</b><b edu-color="3">3</b></p>
 </span></div>`;
    CENTER_NORMAL_CARD_TIMES = 2;
    CENTER_CHANGEABLE_CARD_COUNT = 2;
    CENTER_CENTER_TEXT = ``;
    DIAGONAL_EXTENDS_NORMAL_CARD_TIMES = 2;
    DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
    DIAGONAL_EXTENDS_CENTER_TEXT = this.DIAGONAL_CENTER_TEXT;
    CENTER_EXTENDS_NORMAL_CARD_TIMES = 2;
    CENTER_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
    CENTER_EXTENDS_CENTER_TEXT = ``;
    countPokerDataAndComputedData = (pokerKind, countPerPage) => {
        if (pokerKind === 0) pokerKind = DefaultRummikubPokerKind;
        const en_us = `${FILENAME_POSTFIX}Rummikub`;
        const zh_cn = `${FILENAME_POSTFIX}拉密`;
        const zh_tw = `${FILENAME_POSTFIX}拉密`;
        const enBackCover = en_us.split('_').join('<br />');
        const zh_cnBackCover = zh_cn.split('_').join('<br />');
        const zh_twBackCover = zh_tw.split('_').join('<br />');
        const enArray = [];
        const enFullArray = [];
        const zh_cnArray = [];
        const zh_twArray = [];
        let backCover = '';
        let title = {
            en_us,
            zh_cn,
            zh_tw
        };
        const CENTER_TEXTS = [];
        const BACK_COVERS = [];
        const CHARS = [];
        const COLORS = [];
        let count = 0;
        let lastPokerKind = RummikubPokerKind.none;
        this.computedData.isCenters.length = '';
        if (RummikubPokerKind.diagonal === (RummikubPokerKind.diagonal & pokerKind)) {
            enArray.push('diagonal');
            count += this.countIt(this.DIAGONAL_NORMAL_CARD_TIMES, this.DIAGONAL_CHANGEABLE_CARD_COUNT, countPerPage, this.DIAGONAL_CENTER_TEXT, CENTER_TEXTS, 'diagonal', '对角线', '對角線', enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.diagonal);
            lastPokerKind = RummikubPokerKind.diagonal;
        }
        if (RummikubPokerKind.center === (RummikubPokerKind.center & pokerKind)) {
            enArray.push('center');
            count += this.countIt(this.CENTER_NORMAL_CARD_TIMES, this.CENTER_CHANGEABLE_CARD_COUNT, countPerPage, this.CENTER_CENTER_TEXT, CENTER_TEXTS, 'center', '中心', '中心', enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.center);
            lastPokerKind = RummikubPokerKind.center;
        }
        if (RummikubPokerKind.diagonalExtends === (RummikubPokerKind.diagonalExtends & pokerKind)) {
            enArray.push('diagonalExtends');
            count += this.countIt(this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES, this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT, countPerPage, this.DIAGONAL_EXTENDS_CENTER_TEXT, CENTER_TEXTS, 'diagonal extends', '对角线扩展版', '對角線擴展版', enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.diagonalExtends);
            lastPokerKind = RummikubPokerKind.diagonalExtends;
        }
        if (RummikubPokerKind.centerExtends === (RummikubPokerKind.centerExtends & pokerKind)) {
            enArray.push('centerExtends');
            count += this.countIt(this.CENTER_EXTENDS_NORMAL_CARD_TIMES, this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT, countPerPage, this.CENTER_EXTENDS_CENTER_TEXT, CENTER_TEXTS, 'center extends', '中心扩展版', '中心擴展版', enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, COLORS, BACK_COVERS, RummikubPokerKind.centerExtends);
            lastPokerKind = RummikubPokerKind.centerExtends;
        }
        switch (enArray.length) {
            case 0:
                backCover = getI18nInnerHTML({
                    en_us: enBackCover,
                    zh_cn: zh_cnBackCover,
                    zh_tw: zh_twBackCover
                });
                break;
            case 1:
                const enFirstItem = enArray[0];
                const zh_cnFirstItem = zh_cnArray[0];
                const zh_twFirstItem = zh_twArray[0];
                backCover = getI18nInnerHTML({
                    en_us: enBackCover.concat('<br /><br />', enFirstItem),
                    zh_cn: zh_cnBackCover.concat('<br /><br />', zh_cnFirstItem),
                    zh_tw: zh_twBackCover.concat('<br /><br />', zh_twFirstItem)
                });
                title.en_us += '_'.concat(enFullArray[0]);
                title.zh_cn += '_'.concat(zh_cnFirstItem);
                title.zh_tw += '_'.concat(zh_twFirstItem);
                break;
            default:
                if (enArray.length === 4) {
                    backCover = getI18nInnerHTML({
                        en_us: enBackCover,
                        zh_cn: zh_cnBackCover,
                        zh_tw: zh_twBackCover
                    });
                    title.en_us += ' Mixed_ALL';
                    title.zh_cn += '混合_所有';
                    title.zh_tw += '混合_所有';
                } else {
                    backCover = getI18nInnerHTML({
                        en_us: enBackCover.concat('<br /><br /><small>', enArray.join('<br />'), '</small>'),
                        zh_cn: zh_cnBackCover.concat('<br /><br /><small>', zh_cnArray.join('<br />'), '</small>'),
                        zh_tw: zh_twBackCover.concat('<br /><br /><small>', zh_twArray.join('<br />'), '</small>')
                    });
                    title.en_us += ' Mixed_'.concat(enFullArray.join('_'));
                    title.zh_cn += '混合_'.concat(zh_cnArray.join('_'));
                    title.zh_tw += '混合_'.concat(zh_twArray.join('_'));
                }
                break;
        }
        this.computedData.backCover = backCover;
        this.computedData.title = title;
        this.computedData.chars = CHARS;
        this.computedData.colors = COLORS;
        this.computedData.count = Math.ceil(count / countPerPage) * countPerPage;
        this.computedData.backCovers = BACK_COVERS;
        this.computedData.centerTexts = CENTER_TEXTS;
        const appendCount = this.computedData.count - count;
        switch (lastPokerKind) {
            case RummikubPokerKind.diagonal:
                pushSameValueTimes(this.computedData.centerTexts, this.DIAGONAL_CENTER_TEXT, appendCount);
                break;
            case RummikubPokerKind.diagonalExtends:
                pushSameValueTimes(this.computedData.centerTexts, this.DIAGONAL_EXTENDS_CENTER_TEXT, appendCount);
                break;
            default:
                pushSameValueTimes(this.computedData.isCenters, true, appendCount);
                break;
        }
    };
    updateOtherDataOfPoker = (newData) => {
        const {
            pokerKind
        } = newData;
        for (let pokerKindIndex = 0; pokerKindIndex < 4; ++pokerKindIndex) {
            const pokerKindValue = Math.pow(2, pokerKindIndex);
            const checkboxElement = this.pokerKindElementArray[pokerKindIndex];
            checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
        }
        const {
            includeZero
        } = newData;
        this.includeZeroElementArray.forEach((radioElement) => {
            radioElement.checked = includeZero === (radioElement.value === 'true');
        });
        this.data.includeZero = includeZero;
        const {
            wholePage
        } = newData;
        this.wholePageElementArray.forEach((radioElement) => {
            radioElement.checked = wholePage === (radioElement.value === 'true');
        });
        this.data.wholePage = wholePage;
    };
    initOtherElements = () => {
        this.paperSizeRadioArray.forEach((radioElement) => {
            radioElement.onclick = (event) => {
                const paperSizeValue = radioElement.value;
                this.data.paperSize = paperSizeValue;
                this.saveConfigAndBuildIfAllowed();
            };
        });
        this.configCoreElement?.querySelectorAll('[name="pokerSizeButtons"]').forEach((buttonElement, index) => {
            if (index === 0) {
                buttonElement.setAttribute('edu-to-width', '18');
                buttonElement.setAttribute('edu-to-height', '25');
            } else {
                buttonElement.setAttribute('edu-to-width', '20');
                buttonElement.setAttribute('edu-to-height', '28');
            }
        });
        let wrapElement = this.getWrapElement({
            en_us: 'Include Zero',
            zh_cn: '包含0',
            zh_tw: '包含0'
        });
        this.initIncludeZeroElements(wrapElement);
        wrapElement = this.getWrapElement({
            en_us: 'Whole Page',
            zh_cn: '每项补全整页',
            zh_tw: '每項補全整頁'
        });
        this.initWholePageElements(wrapElement);
    };
    initPokerKindElements = (wrapElement) => {
        const {
            data: {
                pokerKind
            },
            pokerKindElementArray: pokerKindElementArray
        } = this;
        const pokerKindI18nHtmlArray = [
            getI18nInnerHTML({
                en_us: 'diagonal',
                zh_cn: '对角线',
                zh_tw: '對角線'
            }),
            getI18nInnerHTML({
                en_us: 'center',
                zh_cn: '中心',
                zh_tw: '中心'
            }),
            getI18nInnerHTML({
                en_us: 'diagonal extends',
                zh_cn: '对角线扩展版',
                zh_tw: '對角線擴展版'
            }),
            getI18nInnerHTML({
                en_us: 'center extends',
                zh_cn: '中心扩展版',
                zh_tw: '中心擴展版'
            })
        ];
        for (let pokerKindIndex = 0; pokerKindIndex < 4; ++pokerKindIndex) {
            const pokerKindValue = Math.pow(2, pokerKindIndex);
            const checkboxElement = createElement('input');
            checkboxElement.type = 'checkbox';
            checkboxElement.name = 'pokerKind';
            checkboxElement.value = pokerKindValue.toString();
            if ((pokerKind & pokerKindValue) === pokerKindValue) {
                checkboxElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = pokerKindI18nHtmlArray[pokerKindIndex];
            checkboxElement.onclick = () => {
                let newValue = 0;
                pokerKindElementArray.forEach((item) => {
                    if (item.checked) {
                        newValue |= parseInt(item.value, 0);
                    }
                });
                this.data.pokerKind = newValue;
                console.log(this.data.pokerKind, pokerKindValue);
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = () => {
                checkboxElement.click();
            };
            wrapElement.appendChild(checkboxElement);
            wrapElement.appendChild(spanElement);
            pokerKindElementArray.push(checkboxElement);
        }
    };
    includeZeroElementArray = [];
    initIncludeZeroElements = (wrapElement) => {
        const {
            data: {
                includeZero
            },
            includeZeroElementArray
        } = this;
        const i18nHtmlArray = [
            getI18nInnerHTML({
                en_us: 'Yes',
                zh_cn: '是',
                zh_tw: '是'
            }),
            getI18nInnerHTML({
                en_us: 'No',
                zh_cn: '否',
                zh_tw: '否'
            })
        ];
        [
            true,
            false
        ].forEach((includeZeroValue) => {
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'includeZero';
            radioElement.value = includeZeroValue.toString();
            if (includeZero === includeZeroValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtmlArray[includeZeroValue ? 0 : 1];
            radioElement.onclick = () => {
                this.data.includeZero = includeZeroValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = () => {
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            includeZeroElementArray.push(radioElement);
        });
    };
    wholePageElementArray = [];
    initWholePageElements = (wrapElement) => {
        const {
            data: {
                wholePage
            },
            wholePageElementArray
        } = this;
        const i18nHtmlArray = [
            getI18nInnerHTML({
                en_us: 'Yes',
                zh_cn: '是',
                zh_tw: '是'
            }),
            getI18nInnerHTML({
                en_us: 'No',
                zh_cn: '否',
                zh_tw: '否'
            })
        ];
        [
            true,
            false
        ].forEach((wholePageValue) => {
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'wholePage';
            radioElement.value = wholePageValue.toString();
            if (wholePage === wholePageValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtmlArray[wholePageValue ? 0 : 1];
            radioElement.onclick = () => {
                this.data.wholePage = wholePageValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = () => {
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            wholePageElementArray.push(radioElement);
        });
    };
    DECOR_COUNT = 4;
    NORMAL_CARD_ARRAY = getNumbersArray(1, 13);
    CHANGEABLE_CARD_ARRAY = [
        '☺',
        '<p class="double"><b><i>☺</i></b><b><i>☺</i></b></p>',
        '<p class="discoloration"><b><i>☺</i></b><b><i>☺</i></b></p>',
        '<p class="mirror"><b><i>☺</i></b><b><i>☺</i></b></p>'
    ];
    countIt = (normalCardTimes, changeableCardCount, countPerPage, centerText, CENTER_TEXTS, enAppend, zh_cnAppend, zh_twAppend, enFullArray, zh_cnArray, zh_twArray, en_us, zh_cn, zh_tw, CHARS, COLORS, BACK_COVERS, pokerKind) => {
        enFullArray.push(enAppend);
        zh_cnArray.push(zh_cnAppend);
        zh_twArray.push(zh_twAppend);
        let notSameBackCover = getI18nInnerHTML({
            en_us: en_us.concat('<br /><small>', enAppend, '</small>'),
            zh_cn: zh_cn.concat('<br />', zh_cnAppend),
            zh_tw: zh_tw.concat('<br />', zh_twAppend)
        });
        const {
            DECOR_COUNT,
            NORMAL_CARD_ARRAY,
            CHANGEABLE_CARD_ARRAY,
            data: {
                includeZero,
                wholePage
            }
        } = this;
        const isCenters = pokerKind === RummikubPokerKind.center || pokerKind === RummikubPokerKind.centerExtends;
        for (let normalCardLoop = 0; normalCardLoop < normalCardTimes; ++normalCardLoop) {
            for (let colorIndex = 1; colorIndex <= DECOR_COUNT; ++colorIndex) {
                const color = colorIndex.toString();
                if (includeZero) {
                    CHARS.push('0');
                    CENTER_TEXTS.push(centerText);
                    COLORS.push(color);
                    this.computedData.isCenters.push(isCenters);
                }
                NORMAL_CARD_ARRAY.forEach((__char) => {
                    CHARS.push(__char);
                    CENTER_TEXTS.push(centerText);
                    COLORS.push(color);
                    this.computedData.isCenters.push(isCenters);
                });
            }
        }
        const CHANGEABLE_CARD_SYMBOL_COUNT = changeableCardCount / 2;
        for (let colorIndex1 = 0; colorIndex1 < 2; ++colorIndex1) {
            const color1 = (colorIndex1 * 2).toString();
            for (let changeableCardLoop = 0; changeableCardLoop < CHANGEABLE_CARD_SYMBOL_COUNT; ++changeableCardLoop) {
                const __char = CHANGEABLE_CARD_ARRAY[changeableCardLoop];
                CHARS.push(__char);
                CENTER_TEXTS.push(centerText);
                COLORS.push(color1);
                this.computedData.isCenters.push(isCenters);
            }
        }
        const arrayLength = ((includeZero ? 1 : 0) + NORMAL_CARD_ARRAY.length) * DECOR_COUNT * normalCardTimes + changeableCardCount;
        const countNotSameBackCoverIncrease = wholePage ? countPerPage * Math.ceil(arrayLength / countPerPage) : arrayLength;
        const appendCount = countNotSameBackCoverIncrease - arrayLength;
        pushSameValueTimes(CHARS, '', appendCount);
        pushSameValueTimes(CENTER_TEXTS, centerText, appendCount);
        pushSameValueTimes(COLORS, '', appendCount);
        pushSameValueTimes(this.computedData.isCenters, isCenters, appendCount);
        pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
        return countNotSameBackCoverIncrease;
    };
}
const brickCore = new BrickCore();
window.brickCore = brickCore;