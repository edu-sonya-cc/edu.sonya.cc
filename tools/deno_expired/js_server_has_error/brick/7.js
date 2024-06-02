// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var MathPokerKind;
(function (MathPokerKind) {
    MathPokerKind[MathPokerKind["none"] = 0] = "none";
    MathPokerKind[MathPokerKind["tens"] = 1] = "tens";
    MathPokerKind[MathPokerKind["oneToFive"] = 2] = "oneToFive";
    MathPokerKind[MathPokerKind["zeroToNine"] = 4] = "zeroToNine";
    MathPokerKind[MathPokerKind["zeroToTwentyAndFourSymbols"] = 8] = "zeroToTwentyAndFourSymbols";
    MathPokerKind[MathPokerKind["oneToHundred"] = 16] = "oneToHundred";
})(MathPokerKind || (MathPokerKind = {}));
const DefaultMathPokerKind = 31;
class BrickCore extends PokerBase {
    constructor() {
        super({
            pokerWidth: 40,
            pokerHeight: 56,
            pokerKind: 31,
            tensCenterTextShowed: false
        }, {
            count: 0,
            chars: [],
            backCovers: [],
            centerTexts: [],
            colors: [],
            pokerCss: `page.forePage div{display:inline-flex;font-size:0.5em;justify-content:space-between;flex:100%;width:70%;height:100%;line-height:1em;}`
        });
    }
    getForePageHtml = () => {
        let {
            data: {
                paperSize,
                maxX: MAX_X,
                maxY: MAX_Y,
                pokerWidth: CARD_WIDTH,
                pokerHeight: CARD_HEIGHT,
                tensCenterTextShowed
            },
            computedData: {
                count: COUNT,
                chars: CHARS,
                centerTexts: CENTER_TEXTS,
                colors: COLORS
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
                        const __char = CHARS[symbolIndex] || '_';
                        const color = COLORS[symbolIndex] || '-1';
                        html += `${TOP_START}<text class="top-left" edu-color="${color}">${__char}${TEXT_END}${TOP_END}`;
                        if (tensCenterTextShowed) {
                            html += `${CENTER_START}${CENTER_TEXTS[symbolIndex] || ''}${CENTER_END}`;
                        }
                        html += `${BOTTOM_START}<text class="bottom-right" edu-color="${color}">${__char}${TEXT_END}${BOTTOM_END}`;
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
    TENS_ARRAY = '1,1,1,1,2,3,4,5,6,7,8,9'.split(',');
    TENS_TIMES = 4;
    TENS_CENTER_TEXT = '<div><span><p>&nbsp;10&nbsp;</p><p>=1+9</p><p>=2+8</p><p>=3+7</p><p>=4+6</p><p>=5+5</p><p>&nbsp;</p></span><span><p>&nbsp;20&nbsp;&nbsp;&nbsp;</p><p>=2+9+9</p><p>=3+8+9</p><p>=4+8+8</p><p>=4+7+9</p><p>=5+6+9</p><p>=5+7+8</p></span></div>';
    ONE_TO_FIVE_ARRAY = '1,2,3,4,5'.split(',');
    ONE_TO_FIVE_TIMES = 5;
    ONE_TO_FIVE_CENTER_TEXT = '';
    ZERO_TO_NINE_ARRAY = '0,1,2,3,4,5,6,7,8,9'.split(',');
    ZERO_TO_NINE_TIMES = 9;
    ZERO_TO_NINE_CENTER_TEXT = '';
    ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY = getNumbersArray(0, 20).concat([
        '+',
        '-',
        '×',
        '÷'
    ]);
    ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES = 3;
    ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT = '';
    ONE_TO_HUNDRED_ARRAY = getNumbersArray(1, 100);
    ONE_TO_HUNDRED_TIMES = 4;
    ONE_TO_HUNDRED_CENTER_TEXT = '';
    countPokerDataAndComputedData = (pokerKind, countPerPage) => {
        if (pokerKind === 0) pokerKind = DefaultMathPokerKind;
        const en_us = `${FILENAME_POSTFIX}Math Poker`;
        const zh_cn = `${FILENAME_POSTFIX}数学扑克`;
        const zh_tw = `${FILENAME_POSTFIX}數學撲克`;
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
        if (MathPokerKind.tens === (MathPokerKind.tens & pokerKind)) {
            enArray.push('tens');
            count += this.countIt('1-9 make up ten', '1-9凑十', '1-9凑十', this.TENS_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, this.TENS_TIMES, this.TENS_CENTER_TEXT, COLORS);
        }
        if (MathPokerKind.oneToFive === (MathPokerKind.oneToFive & pokerKind)) {
            enArray.push('oneToFive');
            count += this.countIt('1-5', '1-5', '1-5', this.ONE_TO_FIVE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, this.ONE_TO_FIVE_TIMES, this.ONE_TO_FIVE_CENTER_TEXT, COLORS);
        }
        if (MathPokerKind.zeroToNine === (MathPokerKind.zeroToNine & pokerKind)) {
            enArray.push('zeroToNine');
            count += this.countIt('0-9', '0-9', '0-9', this.ZERO_TO_NINE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, this.ZERO_TO_NINE_TIMES, this.ZERO_TO_NINE_CENTER_TEXT, COLORS);
        }
        if (MathPokerKind.zeroToTwentyAndFourSymbols === (MathPokerKind.zeroToTwentyAndFourSymbols & pokerKind)) {
            enArray.push('zeroToTwentyAndFourSymbols');
            count += this.countIt('0-20+-×÷', '0-20+-×÷', '0-20+-×÷', this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_TIMES, this.ZERO_TO_TWENTY_AND_FOUR_SYMBOLS_CENTER_TEXT, COLORS);
        }
        if (MathPokerKind.oneToHundred === (MathPokerKind.oneToHundred & pokerKind)) {
            enArray.push('oneToHundred');
            count += this.countIt('1-100', '1-100', '1-100', this.ONE_TO_HUNDRED_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, this.ONE_TO_HUNDRED_TIMES, this.ONE_TO_HUNDRED_CENTER_TEXT, COLORS);
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
                if (enArray.length === 5) {
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
        if (MathPokerKind.tens === pokerKind) {
            pushSameValueTimes(this.computedData.centerTexts, this.TENS_CENTER_TEXT, this.computedData.count - count);
        }
    };
    updateOtherDataOfPoker = (newData) => {
        const {
            pokerKind
        } = newData;
        for (let pokerKindIndex = 0; pokerKindIndex < 5; ++pokerKindIndex) {
            const pokerKindValue = Math.pow(2, pokerKindIndex);
            const checkboxElement = this.pokerKindElementArray[pokerKindIndex];
            checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
        }
        const {
            tensCenterTextShowed
        } = newData;
        this.tensCenterTextShowedElementArray.forEach((radioElement) => {
            radioElement.checked = tensCenterTextShowed === (radioElement.value === 'true');
        });
        this.data.tensCenterTextShowed = tensCenterTextShowed;
    };
    initOtherElements = () => {
        let wrapElement = this.getWrapElement({
            en_us: 'Tens show tips',
            zh_cn: '凑十显示提示',
            zh_tw: '湊十顯示提示'
        });
        this.initTensCenterTextShowedElements(wrapElement);
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
                en_us: '1-9 make up ten',
                zh_cn: '1-9凑十',
                zh_tw: '1-9凑十'
            }),
            getI18nInnerHTML({
                en_us: '1-5',
                zh_cn: '1-5',
                zh_tw: '1-5'
            }),
            getI18nInnerHTML({
                en_us: '0-9',
                zh_cn: '0-9',
                zh_tw: '0-9'
            }),
            getI18nInnerHTML({
                en_us: '0-20+-×÷',
                zh_cn: '0-20+-×÷',
                zh_tw: '0-20+-×÷'
            }),
            getI18nInnerHTML({
                en_us: '1-100',
                zh_cn: '1-100',
                zh_tw: '1-100'
            })
        ];
        for (let pokerKindIndex = 0; pokerKindIndex < 5; ++pokerKindIndex) {
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
    tensCenterTextShowedElementArray = [];
    initTensCenterTextShowedElements = (wrapElement) => {
        const {
            data: {
                tensCenterTextShowed
            },
            tensCenterTextShowedElementArray
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
        ].forEach((tensCenterTextShowedValue) => {
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'tensCenterTextShowed';
            radioElement.value = tensCenterTextShowedValue.toString();
            if (tensCenterTextShowed === tensCenterTextShowedValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtmlArray[tensCenterTextShowedValue ? 0 : 1];
            radioElement.onclick = () => {
                this.data.tensCenterTextShowed = tensCenterTextShowedValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = () => {
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            tensCenterTextShowedElementArray.push(radioElement);
        });
    };
    countIt(enAppend, zh_cnAppend, zh_twAppend, charsArray, enFullArray, zh_cnArray, zh_twArray, en_us, zh_cn, zh_tw, CENTER_TEXTS, CHARS, countPerPage, BACK_COVERS, times, centerText, COLORS) {
        enFullArray.push(enAppend);
        zh_cnArray.push(zh_cnAppend);
        zh_twArray.push(zh_twAppend);
        let notSameBackCover = getI18nInnerHTML({
            en_us: en_us.concat('<br /><small>', enAppend, '</small>'),
            zh_cn: zh_cn.concat('<br />', zh_cnAppend),
            zh_tw: zh_tw.concat('<br />', zh_twAppend)
        });
        for (let i = 0; i < times; ++i) {
            const color = (i + 1).toString();
            charsArray.forEach((__char) => {
                CHARS.push(__char);
                CENTER_TEXTS.push(centerText);
                COLORS.push(color);
            });
        }
        const arrayLength = charsArray.length * times;
        const countNotSameBackCoverIncrease = arrayLength;
        pushSameValueTimes(CHARS, '', countNotSameBackCoverIncrease - arrayLength);
        pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
        return countNotSameBackCoverIncrease;
    }
}
const brickCore = new BrickCore();
window.brickCore = brickCore;