/**
 * <en_us>
 * Function: generate English letter poker to help children remember English letter upper and lower case
 * Initial: 2022-09-15 Anqi
 * History: AnQi place on file on October 31, 2022
 * Reference: None
 * Note: lower case, upper case, upper left upper case and upper right lower case
 * </en_us>
 *
 * <zh_cn>
 * 功能：生成英文字母扑克，帮助孩子记忆英语字母大小写
 * 初建：2022-09-15 安启
 * 历史：2022-10-31 安启 归档
 * 参考：无
 * 说明：小写、大写、左上角大写加右上角小写
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成英文字母撲克，幫助孩子記憶英語字母大小寫
 * 初建：2022-09-15 安啟
 * 歷史：2022-10-31 安啟 歸檔
 * 參攷：無
 * 說明：小寫、大寫、左上角大寫加右上角小寫
 * </zh_tw>
 */
// import { FILENAME_POSTFIX } from '../const.ts';
// import { createElement, getI18nInnerHTML } from '../dom.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
// import { PokerBase } from './pokerBase.ts';
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
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/pokerBase.d.ts' />
/**
 * <en_us>English Letters Poker Type</en_us>
 * <zh_cn>英语字母扑克类型</zh_cn>
 * <zh_tw>英語字母撲克類型</zh_tw>
 */
var EnglishLettersPokerKind;
(function (EnglishLettersPokerKind) {
    /**
     * <en_us>None</en_us>
     * <zh_cn>无</zh_cn>
     * <zh_tw>無</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["none"] = 0] = "none";
    /**
     * <en_us>Only lowercase letters</en_us>
     * <zh_cn>仅小写字母</zh_cn>
     * <zh_tw>僅小寫字母</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyLowerCase"] = 1] = "onlyLowerCase";
    /**
     * <en_us>Only uppercase letters</en_us>
     * <zh_cn>仅大写字母</zh_cn>
     * <zh_tw>僅大寫字母</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["onlyUpperCase"] = 2] = "onlyUpperCase";
    /**
     * <en_us>Both</en_us>
     * <zh_cn>两者都有</zh_cn>
     * <zh_tw>兩者都有</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["both"] = 3] = "both";
    /**
     * <en_us>KK</en_us>
     * <zh_cn>KK音标</zh_cn>
     * <zh_tw>KK音标</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["kk1"] = 4] = "kk1";
    /**
     * <en_us>KK</en_us>
     * <zh_cn>KK音标带斜线</zh_cn>
     * <zh_tw>KK音标帶斜線</zh_tw>
     */
    EnglishLettersPokerKind[EnglishLettersPokerKind["kk2"] = 8] = "kk2";
})(EnglishLettersPokerKind || (EnglishLettersPokerKind = {}));
var BrickCore = /** @class */ (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = _super.call(this, { pokerKind: EnglishLettersPokerKind.onlyLowerCase }, {}) || this;
        _this.POKER_COUNT = 26;
        _this.getForePageHtml = function () {
            var _a = _this.data, paperSize = _a.paperSize, 
            // isLandscape,
            MAX_X = _a.maxX, MAX_Y = _a.maxY, 
            // pageMarginTop,
            // pageMarginBottom,
            // pageMarginLeft,
            // pageMarginRight,
            CARD_WIDTH = _a.pokerWidth, CARD_HEIGHT = _a.pokerHeight, 
            // fontSize,
            // backFontSize
            pokerKind = _a.pokerKind;
            var LOWERCASE_ARRAY = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
            var UPPERCASE_ARRAY = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
            var KK_ARRAY = "i,ɪ,e,ɛ,æ,ɑ,ɑr,ɔ,ɔr,ɔɪ,o,u,ᴜ,ᴜr,ʌ,ə,ɝ,ɚ,aɪ,aᴜ,ɛr,ɪr,ɪə,iə,p,b,t,d,k,ɡ,f,v,θ,ð,s,z,ʃ,ʒ,tʃ,dʒ,m,n,ŋ,l,r,j,h,w".split(",");
            var KK_ARRAY_2 = KK_ARRAY.map(function (c) { return "/" + c + "/"; });
            var IS_KK = pokerKind >= EnglishLettersPokerKind.kk1;
            var IS_KK_2 = pokerKind >= EnglishLettersPokerKind.kk2;
            var COUNT = IS_KK ? KK_ARRAY.length : _this.computedData.count;
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var PAGE_START = "<page class=\"forePage " + paperSize + "\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var TOP_START = "<top>", TOP_END = "</top>";
            var BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
            var TEXT_END = "</text>";
            var TEXT_START_TOP_LEFT = '<text class="top-left">';
            var TEXT_START_BOTTOM_LEFT = '<text class="bottom-left">';
            var TEXT_START_TOP_RIGHT = '<text class="top-right">';
            var TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
            var ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
            var COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
            var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
            var PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
            var symbolIndex = 0;
            var html = "";
            for (var loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
                html += PAGE_START;
                for (var loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                    html += ROW_START;
                    for (var loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
                        html += CELL_START;
                        if (symbolIndex <= MAX_SYMBOL_INDEX) {
                            var LOWERCASE = (IS_KK ? (IS_KK_2 ? KK_ARRAY_2[symbolIndex] : KK_ARRAY[symbolIndex]) : LOWERCASE_ARRAY[symbolIndex]) || "";
                            var UPPERCASE = (IS_KK ? '' : UPPERCASE_ARRAY[symbolIndex]) || "";
                            switch (pokerKind) {
                                case EnglishLettersPokerKind.onlyLowerCase:
                                case EnglishLettersPokerKind.kk1:
                                case EnglishLettersPokerKind.kk2:
                                    html += TOP_START.concat(TEXT_START_TOP_LEFT, LOWERCASE, 
                                    // IS_KK_2 ? `/${LOWERCASE}/` : LOWERCASE,
                                    TEXT_END, TOP_END);
                                    html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, LOWERCASE, 
                                    // IS_KK_2 ? `/${LOWERCASE}/` : LOWERCASE,
                                    TEXT_END, BOTTOM_END);
                                    break;
                                case EnglishLettersPokerKind.onlyUpperCase:
                                    html += TOP_START.concat(TEXT_START_TOP_LEFT, UPPERCASE, TEXT_END, TOP_END);
                                    html += BOTTOM_START.concat(TEXT_START_BOTTOM_RIGHT, UPPERCASE, TEXT_END, BOTTOM_END);
                                    break;
                                case EnglishLettersPokerKind.both:
                                    // html += TEXT_START_TOP_LEFT.concat(LOWERCASE, TEXT_END);
                                    // html += TEXT_START_BOTTOM_RIGHT.concat(LOWERCASE, TEXT_END);
                                    // html += TEXT_START_TOP_RIGHT.concat(UPPERCASE, TEXT_END);
                                    // html += TEXT_START_BOTTOM_LEFT.concat(UPPERCASE, TEXT_END);
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
        _this.getBackPageHtml = function () {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, 
            // isLandscape,
            MAX_X = _b.maxX, MAX_Y = _b.maxY, 
            // pageMarginTop,
            // pageMarginBottom,
            // pageMarginLeft,
            // pageMarginRight,
            CARD_WIDTH = _b.pokerWidth, CARD_HEIGHT = _b.pokerHeight, _c = _a.computedData, COVER = _c.backCover, COUNT = _c.count;
            var PAGE_START = "<page class=\"backPage " + paperSize + "\" dir=\"rtl\">", PAGE_END = "</page>";
            var ROW_START = "<row>", ROW_END = "</row>";
            var CELL_START = "<cell>", CELL_END = "</cell>";
            var CENTER_START = "<center>", CENTER_END = "</center>";
            var MAX_SYMBOL_INDEX = COUNT - 1;
            var ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
            var COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
            var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
            var PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
            var symbolIndex = 0;
            var html = "";
            for (var loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
                html += PAGE_START;
                for (var loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
                    html += ROW_START;
                    for (var loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
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
        _this.countPokerDataAndComputedData = function (pokerKind, countPerPage) {
            var backCover = "";
            var title = { en_us: "", zh_cn: "", zh_tw: "" };
            switch (pokerKind) {
                case EnglishLettersPokerKind.onlyLowerCase:
                    backCover = "a-z<br /><br />" + getI18nInnerHTML({
                        en_us: "English Letters",
                        zh_cn: "英语小写字母",
                        zh_tw: "英語小寫字母"
                    });
                    title.en_us = FILENAME_POSTFIX + "English Letters_a-z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5C0F\u5199\u5B57\u6BCD_a-z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5C0F\u5BEB\u5B57\u6BCD_a-z";
                    break;
                case EnglishLettersPokerKind.onlyUpperCase:
                    backCover = "A-Z<br /><br />" + getI18nInnerHTML({
                        en_us: "English Letters",
                        zh_cn: "英语大写字母",
                        zh_tw: "英語大寫字母"
                    });
                    title.en_us = FILENAME_POSTFIX + "English Letters_A-Z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5927\u5199\u5B57\u6BCD_A-Z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5927\u5BEB\u5B57\u6BCD_A-Z";
                    break;
                case EnglishLettersPokerKind.both:
                    backCover = "a-z & A-Z<br /><br />" + getI18nInnerHTML({
                        en_us: "English Letters",
                        zh_cn: "英语字母<br />（大小写）",
                        zh_tw: "英語字母<br />（大小寫）"
                    });
                    title.en_us = FILENAME_POSTFIX + "English Letters_a-z&A-Z";
                    title.zh_cn = FILENAME_POSTFIX + "\u82F1\u8BED\u5B57\u6BCD\uFF08\u5927\u5C0F\u5199\uFF09_a-z&A-Z";
                    title.zh_tw = FILENAME_POSTFIX + "\u82F1\u8A9E\u5B57\u6BCD\uFF08\u5927\u5C0F\u5BEB\uFF09_a-z&A-Z";
                    break;
                case EnglishLettersPokerKind.kk1:
                    backCover = "" + getI18nInnerHTML({
                        en_us: "KK<br />Phonetic<br />Symbols",
                        zh_cn: "KK音标<br />（扑克）",
                        zh_tw: "KK音標<br />（撲克）"
                    });
                    title.en_us = FILENAME_POSTFIX + "KK Phonetic Symbols Pokers";
                    title.zh_cn = FILENAME_POSTFIX + "KK\u97F3\u6807\u6251\u514B";
                    title.zh_tw = FILENAME_POSTFIX + "KK\u97F3\u6807\u64B2\u514B";
                    break;
                case EnglishLettersPokerKind.kk2:
                    backCover = "" + getI18nInnerHTML({
                        en_us: "KK<br />Phonetic<br />Symbols<br />with Bias",
                        zh_cn: "KK音标2<br />（扑克）<br />带斜线",
                        zh_tw: "KK音標2<br />（撲克）<br />帶斜線"
                    });
                    title.en_us = FILENAME_POSTFIX + "KK Phonetic Symbols Pokers with Bias";
                    title.zh_cn = FILENAME_POSTFIX + "KK\u97F3\u6807\u6251\u514B2";
                    title.zh_tw = FILENAME_POSTFIX + "KK\u97F3\u6807\u64B2\u514B2";
                    break;
                default:
                    break;
            }
            _this.computedData.backCover = backCover;
            _this.computedData.count = Math.ceil(_this.POKER_COUNT / countPerPage) *
                countPerPage;
            _this.computedData.title = title;
        };
        // protected initOtherElements = (): void => {};
        _this.initPokerKindElements = function (wrapElement) {
            var _a = _this, pokerKind = _a.data.pokerKind, pokerKindElementArray = _a.pokerKindElementArray;
            // const labelElement = createElement('label') as HTMLLabelElement;
            // wrapElement.appendChild(labelElement);
            // labelElement.innerHTML = getI18nInnerHTML({
            //   en_us: '',
            //   zh_cn: '',
            //   zh_tw: '',
            // });
            var pokerKindI18nHtmlArray = [
                getI18nInnerHTML({
                    en_us: "Only lowercase letters",
                    zh_cn: "仅小写字母",
                    zh_tw: "僅小寫字母"
                }),
                getI18nInnerHTML({
                    en_us: "Only uppercase letters",
                    zh_cn: "仅大写字母",
                    zh_tw: "僅大寫字母"
                }),
                getI18nInnerHTML({
                    en_us: "Both",
                    zh_cn: "两者都有",
                    zh_tw: "兩者都有"
                }),
                getI18nInnerHTML({
                    en_us: "KK1",
                    zh_cn: "KK音标",
                    zh_tw: "KK音标"
                }),
                getI18nInnerHTML({
                    en_us: "KK2",
                    zh_cn: "KK音标带斜线",
                    zh_tw: "KK音标帶斜線"
                }),
            ];
            [1, 2, 3, 4, 8].forEach(function (pokerKindValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "pokerKind";
                radioElement.value = pokerKindValue.toString();
                if (pokerKind === pokerKindValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = pokerKindValue > 4 ? pokerKindI18nHtmlArray[Math.log2(pokerKindValue) + 1] : pokerKindI18nHtmlArray[pokerKindValue - 1];
                radioElement.onclick = function () {
                    _this.data.pokerKind = pokerKindValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                pokerKindElementArray.push(radioElement);
            });
        };
        return _this;
    }
    return BrickCore;
}(PokerBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
