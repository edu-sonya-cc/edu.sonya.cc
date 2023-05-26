// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var EnglishLettersPokerKind;
(function(EnglishLettersPokerKind) {
    EnglishLettersPokerKind[EnglishLettersPokerKind["none"] = 0] = "none";
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyLowerCase"] = 1] = "onlyLowerCase";
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyUpperCase"] = 2] = "onlyUpperCase";
    EnglishLettersPokerKind[EnglishLettersPokerKind["both"] = 3] = "both";
})(EnglishLettersPokerKind || (EnglishLettersPokerKind = {}));
class BrickCore extends PokerBase {
    POKER_COUNT = 26;
    constructor(){
        super({
            pokerKind: EnglishLettersPokerKind.onlyLowerCase
        }, {});
    }
    getForePageHtml = ()=>{
        let { data: { paperSize , maxX: MAX_X , maxY: MAX_Y , pokerWidth: CARD_WIDTH , pokerHeight: CARD_HEIGHT , pokerKind  } , computedData: { count: COUNT  }  } = this;
        const LOWERCASE_ARRAY = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',');
        const UPPERCASE_ARRAY = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
        const MAX_SYMBOL_INDEX = COUNT - 1;
        const PAGE_START = `<page class="forePage ${paperSize}">`, PAGE_END = '</page>';
        const ROW_START = '<row>', ROW_END = '</row>';
        const CELL_START = '<cell>', CELL_END = '</cell>';
        const TOP_START = '<top>', TOP_END = '</top>';
        const BOTTOM_START = '<bottom>', BOTTOM_END = '</bottom>';
        const TEXT_END = '</text>';
        const TEXT_START_TOP_LEFT = '<text class="top-left">';
        const TEXT_START_BOTTOM_LEFT = '<text class="bottom-left">';
        const TEXT_START_TOP_RIGHT = '<text class="top-right">';
        const TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
        const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
        const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
        const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
        const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
        let symbolIndex = 0;
        let html = '';
        for(let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage){
            html += PAGE_START;
            for(let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow){
                html += ROW_START;
                for(let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol){
                    html += CELL_START;
                    if (symbolIndex <= MAX_SYMBOL_INDEX) {
                        const LOWERCASE = LOWERCASE_ARRAY[symbolIndex] || '';
                        const UPPERCASE = UPPERCASE_ARRAY[symbolIndex] || '';
                        switch(pokerKind){
                            case EnglishLettersPokerKind.onlyLowerCase:
                                html += TOP_START.concat(TEXT_START_TOP_LEFT, LOWERCASE, TEXT_END, TOP_END);
                                html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, LOWERCASE, TEXT_END, BOTTOM_END);
                                break;
                            case EnglishLettersPokerKind.onlyUpperCase:
                                html += TOP_START.concat(TEXT_START_TOP_LEFT, UPPERCASE, TEXT_END, TOP_END);
                                html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, UPPERCASE, TEXT_END, BOTTOM_END);
                                break;
                            case EnglishLettersPokerKind.both:
                                html += TOP_START.concat(TEXT_START_TOP_LEFT, LOWERCASE, TEXT_END, TEXT_START_TOP_RIGHT, UPPERCASE, TEXT_END, TOP_END);
                                html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, LOWERCASE, TEXT_END, TEXT_START_BOTTOM_LEFT, UPPERCASE, TEXT_END, BOTTOM_END);
                                break;
                            default:
                                break;
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
    getBackPageHtml = ()=>{
        let { data: { paperSize , maxX: MAX_X , maxY: MAX_Y , pokerWidth: CARD_WIDTH , pokerHeight: CARD_HEIGHT  } , computedData: { backCover: COVER , count: COUNT  }  } = this;
        const PAGE_START = `<page class="backPage ${paperSize}" dir="rtl">`, PAGE_END = '</page>';
        const ROW_START = '<row>', ROW_END = '</row>';
        const CELL_START = '<cell>', CELL_END = '</cell>';
        const CENTER_START = '<center>', CENTER_END = '</center>';
        const MAX_SYMBOL_INDEX = COUNT - 1;
        const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
        const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
        const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
        const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
        let symbolIndex = 0;
        let html = '';
        for(let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage){
            html += PAGE_START;
            for(let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow){
                html += ROW_START;
                for(let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol){
                    html += CELL_START;
                    if (symbolIndex <= MAX_SYMBOL_INDEX) {
                        html += CENTER_START.concat(COVER, CENTER_END);
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
    countPokerDataAndComputedData = (pokerKind, countPerPage)=>{
        let backCover = '';
        let title = {
            en: '',
            zh_cn: '',
            zh_tw: ''
        };
        switch(pokerKind){
            case EnglishLettersPokerKind.onlyLowerCase:
                backCover = `a-z<br /><br />${getI18nInnerHTML({
                    en: 'English Letters',
                    zh_cn: '英语小写字母',
                    zh_tw: '英語小寫字母'
                })}`;
                title.en = `${FILENAME_POSTFIX}English Letters_a-z`;
                title.zh_cn = `${FILENAME_POSTFIX}英语小写字母_a-z`;
                title.zh_tw = `${FILENAME_POSTFIX}英語小寫字母_a-z`;
                break;
            case EnglishLettersPokerKind.onlyUpperCase:
                backCover = `A-Z<br /><br />${getI18nInnerHTML({
                    en: 'English Letters',
                    zh_cn: '英语大写字母',
                    zh_tw: '英語大寫字母'
                })}`;
                title.en = `${FILENAME_POSTFIX}English Letters_A-Z`;
                title.zh_cn = `${FILENAME_POSTFIX}英语大写字母_A-Z`;
                title.zh_tw = `${FILENAME_POSTFIX}英語大寫字母_A-Z`;
                break;
            case EnglishLettersPokerKind.both:
                backCover = `a-z & A-Z<br /><br />${getI18nInnerHTML({
                    en: 'English Letters',
                    zh_cn: '英语字母<br />（大小写）',
                    zh_tw: '英語字母<br />（大小寫）'
                })}`;
                title.en = `${FILENAME_POSTFIX}English Letters_a-z&A-Z`;
                title.zh_cn = `${FILENAME_POSTFIX}英语字母（大小写）_a-z&A-Z`;
                title.zh_tw = `${FILENAME_POSTFIX}英語字母（大小寫）_a-z&A-Z`;
                break;
            default:
                break;
        }
        this.computedData.backCover = backCover;
        this.computedData.count = Math.ceil(this.POKER_COUNT / countPerPage) * countPerPage;
        this.computedData.title = title;
    };
    initPokerKindElements = (wrapElement)=>{
        const { data: { pokerKind  } , pokerKindElementArray  } = this;
        const pokerKindI18nHtmlArray = [
            getI18nInnerHTML({
                en: 'Only lowercase letters',
                zh_cn: '仅小写字母',
                zh_tw: '僅小寫字母'
            }),
            getI18nInnerHTML({
                en: 'Only uppercase letters',
                zh_cn: '仅大写字母',
                zh_tw: '僅大寫字母'
            }),
            getI18nInnerHTML({
                en: 'Both',
                zh_cn: '两者都有',
                zh_tw: '兩者都有'
            })
        ];
        [
            1,
            2,
            3
        ].forEach((pokerKindValue)=>{
            const radioElement = createElement('input');
            radioElement.type = 'radio';
            radioElement.name = 'pokerKind';
            radioElement.value = pokerKindValue.toString();
            if (pokerKind === pokerKindValue) {
                radioElement.checked = true;
            }
            const spanElement = createElement('span');
            spanElement.innerHTML = pokerKindI18nHtmlArray[pokerKindValue - 1];
            radioElement.onclick = ()=>{
                this.data.pokerKind = pokerKindValue;
                this.saveConfigAndBuildIfAllowed();
            };
            spanElement.onclick = ()=>{
                radioElement.click();
            };
            wrapElement.appendChild(radioElement);
            wrapElement.appendChild(spanElement);
            pokerKindElementArray.push(radioElement);
        });
    };
}
const brickCore = new BrickCore();
window.brickCore = brickCore;
