// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var PinyinPokerKind;
(function (PinyinPokerKind) {
    PinyinPokerKind[PinyinPokerKind["none"] = 0] = "none";
    PinyinPokerKind[PinyinPokerKind["initials"] = 1] = "initials";
    PinyinPokerKind[PinyinPokerKind["finals"] = 2] = "finals";
    PinyinPokerKind[PinyinPokerKind["overallRecognition"] = 4] = "overallRecognition";
    PinyinPokerKind[PinyinPokerKind["threeSyllablesAndTone"] = 8] = "threeSyllablesAndTone";
    PinyinPokerKind[PinyinPokerKind["simpleFinalWithTone"] = 16] = "simpleFinalWithTone";
})(PinyinPokerKind || (PinyinPokerKind = {}));
const DefaultPinyinPokerKind = 31;
class BrickCore extends PokerBase {
    constructor() {
        super({
            pokerWidth: 40,
            pokerHeight: 56,
            pokerKind: 31,
            useSameBackCover: true
        }, {
            chars: [],
            charsNotSameBackCover: [],
            countNotSameBackCover: 0,
            backCoversWhenNotSame: [],
            pokerCss: `
      page.forePage{font-family:'KaiTi';}
      .kaiti{font-family:kaiti;}
      .normal-weight {font-weight:normal; }
      `
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
                useSameBackCover
            },
            computedData: {
                count,
                chars,
                charsNotSameBackCover,
                countNotSameBackCover
            }
        } = this;
        const COUNT = useSameBackCover ? count : countNotSameBackCover;
        const CHARS = [];
        (useSameBackCover ? chars : charsNotSameBackCover).forEach((__char) => CHARS.push(__char));
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
        const TEXT_END = '</text>';
        const TEXT_START_TOP_LEFT = '<text class="top-left">';
        const TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
        const TEXT_START_TOP_LEFT_USE_KAITI = '<text class="top-left kaiti">';
        const TEXT_START_BOTTOM_RIGHT_USE_KAITI = '<text class="bottom-right kaiti">';
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
                        const __char = CHARS[symbolIndex] || '';
                        const useKaiti = 'ˉ,ˊ,ˇ,ˋ'.indexOf(__char) > -1;
                        html += TOP_START.concat(useKaiti ? TEXT_START_TOP_LEFT_USE_KAITI : TEXT_START_TOP_LEFT, __char, TEXT_END, TOP_END);
                        html += BOTTOM_START.concat(useKaiti ? TEXT_START_BOTTOM_RIGHT_USE_KAITI : TEXT_START_BOTTOM_RIGHT, __char, TEXT_END, BOTTOM_END);
                    }
                    html += CELL_END;
                    ++symbolIndex;
                }
                html += ROW_END;
            }
            html += PAGE_END;
        }
        return html.replace(/ü/gi, '<font style="font-size:0.9em;position:relative;top:-0.05em;font-weight:bold;">ü</font>').replace(/([āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ])/gi, '<font class="kaiti normal-weight">$1</font>');
    };
    getBackPageHtml = () => {
        let {
            data: {
                paperSize,
                maxX: MAX_X,
                maxY: MAX_Y,
                pokerWidth: CARD_WIDTH,
                pokerHeight: CARD_HEIGHT,
                useSameBackCover
            },
            computedData: {
                backCover: COVER,
                count,
                countNotSameBackCover,
                backCoversWhenNotSame
            }
        } = this;
        const COUNT = useSameBackCover ? count : countNotSameBackCover;
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
        let symbolIndex = 0;
        let html = '';
        for (let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
            html += PAGE_START;
            for (let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                html += ROW_START;
                for (let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                    html += CELL_START;
                    if (symbolIndex <= MAX_SYMBOL_INDEX) {
                        html += CENTER_START.concat(useSameBackCover ? COVER : backCoversWhenNotSame[symbolIndex], CENTER_END);
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
    INITIAL_ARRAY = 'b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,'.split(',');
    VOWEL_ARRAY = 'a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en_us,in,un,ün,ang,eng,ing,ong'.split(',');
    OVERALL_READING_ARRAY = 'zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying'.split(',');
    THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY = 'ia,ua,uo,uai,iao,ian,iang,uan,uang,iong,üan,ˉ,ˊ,ˇ,ˋ,ˉ,ˊ,ˇ,ˋ,'.split(',');
    SINGLE_VOWEL_WITH_TONE_ARRAY = 'a,ā,á,ǎ,à,o,ō,ó,ǒ,ò,e,ē,é,ě,è,i,ī,í,ǐ,ì,u,ū,ú,ǔ,ù,ü,ǖ,ǘ,ǚ,ǜ'.replace(/a/g, 'ɑ').replace(/g/g, 'ɡ').split(',');
    countPokerDataAndComputedData = (pokerKind, countPerPage) => {
        if (pokerKind === 0) pokerKind = DefaultPinyinPokerKind;
        const en_us = `${FILENAME_POSTFIX}Pinyin Poker`;
        const zh_cn = `${FILENAME_POSTFIX}拼音扑克`;
        const zh_tw = `${FILENAME_POSTFIX}拼音撲克`;
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
        const CHARS = [];
        const BACK_COVERS = [];
        const CHARS_NOT_SAME_BACK_COVER = [];
        let countNotSameBackCover = 0;
        if (PinyinPokerKind.initials === (PinyinPokerKind.initials & pokerKind)) {
            enArray.push('initials');
            countNotSameBackCover += this.countIt('Initials', '声母', '聲母', this.INITIAL_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
        }
        if (PinyinPokerKind.finals === (PinyinPokerKind.finals & pokerKind)) {
            enArray.push('finals');
            countNotSameBackCover += this.countIt('Finals', '韵母', '韻母', this.VOWEL_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
        }
        if (PinyinPokerKind.overallRecognition === (PinyinPokerKind.overallRecognition & pokerKind)) {
            enArray.push('overallRecognition');
            countNotSameBackCover += this.countIt('Overall recognition', '整体认读', '整體認讀', this.OVERALL_READING_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
        }
        if (PinyinPokerKind.threeSyllablesAndTone === (PinyinPokerKind.threeSyllablesAndTone & pokerKind)) {
            enArray.push('threeSyllablesAndTone');
            countNotSameBackCover += this.countIt('Three syllables and tone', '三拼音节与声调', '三拼音節與聲調', this.THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
        }
        if (PinyinPokerKind.simpleFinalWithTone === (PinyinPokerKind.simpleFinalWithTone & pokerKind)) {
            enArray.push('simpleFinalWithTone');
            countNotSameBackCover += this.countIt('Simple final with tone', '带声调单韵母', '帶聲調單韻母', this.SINGLE_VOWEL_WITH_TONE_ARRAY, enFullArray, zh_cnArray, zh_twArray, enBackCover, zh_cnBackCover, zh_twBackCover, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS);
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
        this.computedData.count = Math.ceil(CHARS.length / countPerPage) * countPerPage;
        this.computedData.title = title;
        this.computedData.chars = CHARS;
        this.computedData.charsNotSameBackCover = CHARS_NOT_SAME_BACK_COVER;
        this.computedData.countNotSameBackCover = countNotSameBackCover;
        this.computedData.backCoversWhenNotSame = BACK_COVERS;
    };
    updateOtherDataOfPoker = (newData) => {
        const {
            pokerKind,
            useSameBackCover
        } = newData;
        for (let pokerKindIndex = 0; pokerKindIndex < 5; ++pokerKindIndex) {
            const pokerKindValue = Math.pow(2, pokerKindIndex);
            const checkboxElement = this.pokerKindElementArray[pokerKindIndex];
            checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
        }
        this.useSameBackCoverElementArray.forEach((radioElement) => {
            radioElement.checked = useSameBackCover === (radioElement.value === 'true');
        });
    };
    initOtherElements = () => {
        let wrapElement = this.getWrapElement({
            en_us: 'Use Same Back Cover',
            zh_cn: '统一背面',
            zh_tw: '統一背面'
        });
        this.initUseSameBackCoverElements(wrapElement);
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
                en_us: 'Initials',
                zh_cn: '声母',
                zh_tw: '聲母'
            }),
            getI18nInnerHTML({
                en_us: 'Finals',
                zh_cn: '韵母',
                zh_tw: '韻母'
            }),
            getI18nInnerHTML({
                en_us: 'Overall recognition and tone',
                zh_cn: '整体认读与声调',
                zh_tw: '整體認讀與聲調'
            }),
            getI18nInnerHTML({
                en_us: 'Three syllables',
                zh_cn: '三拼音节',
                zh_tw: '三拼音節'
            }),
            getI18nInnerHTML({
                en_us: 'Simple final with tone',
                zh_cn: '带声调单韵母',
                zh_tw: '帶聲調單韻母'
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
    useSameBackCoverElementArray = [];
    initUseSameBackCoverElements = (wrapElement) => {
        const {
            data: {
                useSameBackCover
            },
            useSameBackCoverElementArray
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
        ].forEach((useSameBackCoverValue) => {
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'useSameBackCover';
            radioElement.value = useSameBackCoverValue.toString();
            if (useSameBackCover === useSameBackCoverValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = i18nHtmlArray[useSameBackCoverValue ? 0 : 1];
            radioElement.onclick = () => {
                this.data.useSameBackCover = useSameBackCoverValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = () => {
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            useSameBackCoverElementArray.push(radioElement);
        });
    };
    countIt(enAppend, zh_cnAppend, zh_twAppend, charsArray, enFullArray, zh_cnArray, zh_twArray, en_us, zh_cn, zh_tw, CHARS, CHARS_NOT_SAME_BACK_COVER, countPerPage, BACK_COVERS) {
        enFullArray.push(enAppend);
        zh_cnArray.push(zh_cnAppend);
        zh_twArray.push(zh_twAppend);
        let notSameBackCover = getI18nInnerHTML({
            en_us: en_us.concat('<br /><small>', enAppend, '</small>'),
            zh_cn: zh_cn.concat('<br />', zh_cnAppend),
            zh_tw: zh_tw.concat('<br />', zh_twAppend)
        });
        charsArray.forEach((__char) => {
            CHARS.push(__char);
            CHARS_NOT_SAME_BACK_COVER.push(__char);
        });
        const arrayLength = charsArray.length;
        const countNotSameBackCoverIncrease = countPerPage * Math.ceil(arrayLength / countPerPage);
        pushSameValueTimes(CHARS_NOT_SAME_BACK_COVER, '', countNotSameBackCoverIncrease - arrayLength);
        pushSameValueTimes(BACK_COVERS, notSameBackCover, countNotSameBackCoverIncrease);
        return countNotSameBackCoverIncrease;
    }
}
const brickCore = new BrickCore();
window.brickCore = brickCore;