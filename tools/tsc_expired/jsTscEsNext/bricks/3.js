"use strict";
/**
 * <en>
 * Function: generate English letter poker to help children remember English letter upper and lower case
 * Initial: 2022-09-15 Anqi
 * History: AnQi place on file on October 31, 2022
 * Reference: None
 * Note: lower case, upper case, upper left upper case and upper right lower case
 * </en>
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
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/pokerBase.d.ts' />
/**
 * <en>English Letters Poker Type</en>
 * <zh_cn>英语字母扑克类型</zh_cn>
 * <zh_tw>英語字母撲克類型</zh_tw>
 */
var EnglishLettersPokerKind;
(function (EnglishLettersPokerKind) {
  /**
   * <en>None</en>
   * <zh_cn>无</zh_cn>
   * <zh_tw>無</zh_tw>
   */
  EnglishLettersPokerKind[EnglishLettersPokerKind["none"] = 0] = "none";
  /**
   * <en>Only lowercase letters</en>
   * <zh_cn>仅小写字母</zh_cn>
   * <zh_tw>僅小寫字母</zh_tw>
   */
  EnglishLettersPokerKind[EnglishLettersPokerKind["onlyLowerCase"] = 1] =
    "onlyLowerCase";
  /**
   * <en>Only uppercase letters</en>
   * <zh_cn>仅大写字母</zh_cn>
   * <zh_tw>僅大寫字母</zh_tw>
   */
  EnglishLettersPokerKind[EnglishLettersPokerKind["onlyUpperCase"] = 2] =
    "onlyUpperCase";
  /**
   * <en>Both</en>
   * <zh_cn>两者都有</zh_cn>
   * <zh_tw>兩者都有</zh_tw>
   */
  EnglishLettersPokerKind[EnglishLettersPokerKind["both"] = 3] = "both";
})(EnglishLettersPokerKind || (EnglishLettersPokerKind = {}));
class BrickCore extends PokerBase {
  POKER_COUNT = 26;
  constructor() {
    super({ pokerKind: EnglishLettersPokerKind.onlyLowerCase }, {});
  }
  getForePageHtml = () => {
    let {
      data: {
        paperSize,
        // isLandscape,
        maxX: MAX_X,
        maxY: MAX_Y,
        // pageMarginTop,
        // pageMarginBottom,
        // pageMarginLeft,
        // pageMarginRight,
        pokerWidth: CARD_WIDTH,
        pokerHeight: CARD_HEIGHT,
        // fontSize,
        // backFontSize
        pokerKind,
      },
      computedData: {
        // backCover: COVER,
        count: COUNT,
        // title,
      },
    } = this;
    const LOWERCASE_ARRAY =
      "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    const UPPERCASE_ARRAY =
      "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
    const MAX_SYMBOL_INDEX = COUNT - 1;
    const PAGE_START = `<page class="forePage ${paperSize}">`,
      PAGE_END = "</page>";
    const ROW_START = "<row>", ROW_END = "</row>";
    const CELL_START = "<cell>", CELL_END = "</cell>";
    const TOP_START = "<top>", TOP_END = "</top>";
    const BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
    const TEXT_END = "</text>";
    const TEXT_START_TOP_LEFT = '<text class="top-left">';
    const TEXT_START_BOTTOM_LEFT = '<text class="bottom-left">';
    const TEXT_START_TOP_RIGHT = '<text class="top-right">';
    const TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';
    const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
    const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
    const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
    const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
    let symbolIndex = 0;
    let html = "";
    for (let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
      html += PAGE_START;
      for (let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
        html += ROW_START;
        for (let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
          html += CELL_START;
          if (symbolIndex <= MAX_SYMBOL_INDEX) {
            const LOWERCASE = LOWERCASE_ARRAY[symbolIndex] || "";
            const UPPERCASE = UPPERCASE_ARRAY[symbolIndex] || "";
            switch (pokerKind) {
              case EnglishLettersPokerKind.onlyLowerCase:
                html += TOP_START.concat(
                  TEXT_START_TOP_LEFT,
                  LOWERCASE,
                  TEXT_END,
                  TOP_END,
                );
                html += BOTTOM_START.concat(
                  TEXT_START_BOTTOM_RIGHT,
                  LOWERCASE,
                  TEXT_END,
                  BOTTOM_END,
                );
                break;
              case EnglishLettersPokerKind.onlyUpperCase:
                html += TOP_START.concat(
                  TEXT_START_TOP_LEFT,
                  UPPERCASE,
                  TEXT_END,
                  TOP_END,
                );
                html += BOTTOM_START.concat(
                  TEXT_START_BOTTOM_RIGHT,
                  UPPERCASE,
                  TEXT_END,
                  BOTTOM_END,
                );
                break;
              case EnglishLettersPokerKind.both:
                // html += TEXT_START_TOP_LEFT.concat(LOWERCASE, TEXT_END);
                // html += TEXT_START_BOTTOM_RIGHT.concat(LOWERCASE, TEXT_END);
                // html += TEXT_START_TOP_RIGHT.concat(UPPERCASE, TEXT_END);
                // html += TEXT_START_BOTTOM_LEFT.concat(UPPERCASE, TEXT_END);
                html += TOP_START.concat(
                  TEXT_START_TOP_LEFT,
                  LOWERCASE,
                  TEXT_END,
                  TEXT_START_TOP_RIGHT,
                  UPPERCASE,
                  TEXT_END,
                  TOP_END,
                );
                html += BOTTOM_START.concat(
                  TEXT_START_BOTTOM_RIGHT,
                  LOWERCASE,
                  TEXT_END,
                  TEXT_START_BOTTOM_LEFT,
                  UPPERCASE,
                  TEXT_END,
                  BOTTOM_END,
                );
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
  getBackPageHtml = () => {
    let {
      data: {
        paperSize,
        // isLandscape,
        maxX: MAX_X,
        maxY: MAX_Y,
        // pageMarginTop,
        // pageMarginBottom,
        // pageMarginLeft,
        // pageMarginRight,
        pokerWidth: CARD_WIDTH,
        pokerHeight: CARD_HEIGHT,
        // fontSize,
        // backFontSize
        // pokerKind,
      },
      computedData: {
        backCover: COVER,
        count: COUNT, // title,
      },
    } = this;
    const PAGE_START = `<page class="backPage ${paperSize}" dir="rtl">`,
      PAGE_END = "</page>";
    const ROW_START = "<row>", ROW_END = "</row>";
    const CELL_START = "<cell>", CELL_END = "</cell>";
    const CENTER_START = "<center>", CENTER_END = "</center>";
    const MAX_SYMBOL_INDEX = COUNT - 1;
    const ROW_COUNT = Math.floor(MAX_Y / CARD_HEIGHT);
    const COLUMN_COUNT = Math.floor(MAX_X / CARD_WIDTH);
    const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
    const PAGE_COUNT = Math.ceil(COUNT / COUNT_PER_PAGE);
    let symbolIndex = 0;
    let html = "";
    for (let loopOfPage = 0; loopOfPage < PAGE_COUNT; ++loopOfPage) {
      html += PAGE_START;
      for (let loopOfRow = 0; loopOfRow < ROW_COUNT; ++loopOfRow) {
        html += ROW_START;
        for (let loopOfCol = 0; loopOfCol < COLUMN_COUNT; ++loopOfCol) {
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
  countPokerDataAndComputedData = (pokerKind, countPerPage) => {
    let backCover = "";
    let title = { en: "", zh_cn: "", zh_tw: "" };
    switch (pokerKind) {
      case EnglishLettersPokerKind.onlyLowerCase:
        backCover = `a-z<br /><br />${
          getI18nInnerHTML({
            en: "English Letters",
            zh_cn: "英语小写字母",
            zh_tw: "英語小寫字母",
          })
        }`;
        title.en = `${FILENAME_POSTFIX}English Letters_a-z`;
        title.zh_cn = `${FILENAME_POSTFIX}英语小写字母_a-z`;
        title.zh_tw = `${FILENAME_POSTFIX}英語小寫字母_a-z`;
        break;
      case EnglishLettersPokerKind.onlyUpperCase:
        backCover = `A-Z<br /><br />${
          getI18nInnerHTML({
            en: "English Letters",
            zh_cn: "英语大写字母",
            zh_tw: "英語大寫字母",
          })
        }`;
        title.en = `${FILENAME_POSTFIX}English Letters_A-Z`;
        title.zh_cn = `${FILENAME_POSTFIX}英语大写字母_A-Z`;
        title.zh_tw = `${FILENAME_POSTFIX}英語大寫字母_A-Z`;
        break;
      case EnglishLettersPokerKind.both:
        backCover = `a-z & A-Z<br /><br />${
          getI18nInnerHTML({
            en: "English Letters",
            zh_cn: "英语字母<br />（大小写）",
            zh_tw: "英語字母<br />（大小寫）",
          })
        }`;
        title.en = `${FILENAME_POSTFIX}English Letters_a-z&A-Z`;
        title.zh_cn = `${FILENAME_POSTFIX}英语字母（大小写）_a-z&A-Z`;
        title.zh_tw = `${FILENAME_POSTFIX}英語字母（大小寫）_a-z&A-Z`;
        break;
      default:
        break;
    }
    this.computedData.backCover = backCover;
    this.computedData.count = Math.ceil(this.POKER_COUNT / countPerPage) *
      countPerPage;
    this.computedData.title = title;
  };
  // protected initOtherElements = (): void => {};
  initPokerKindElements = (wrapElement) => {
    const { data: { pokerKind }, pokerKindElementArray } = this;
    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });
    const pokerKindI18nHtmlArray = [
      getI18nInnerHTML({
        en: "Only lowercase letters",
        zh_cn: "仅小写字母",
        zh_tw: "僅小寫字母",
      }),
      getI18nInnerHTML({
        en: "Only uppercase letters",
        zh_cn: "仅大写字母",
        zh_tw: "僅大寫字母",
      }),
      getI18nInnerHTML({
        en: "Both",
        zh_cn: "两者都有",
        zh_tw: "兩者都有",
      }),
    ];
    [1, 2, 3].forEach((pokerKindValue) => {
      const radioElement = createElement("input");
      radioElement.type = "radio";
      radioElement.name = "pokerKind";
      radioElement.value = pokerKindValue.toString();
      if (pokerKind === pokerKindValue) {
        radioElement.checked = true;
      }
      const spanElement = createElement("span");
      spanElement.innerHTML = pokerKindI18nHtmlArray[pokerKindValue - 1];
      radioElement.onclick = () => {
        this.data.pokerKind = pokerKindValue;
        this.saveConfigAndBuildIfAllowed();
      };
      spanElement.onclick = () => {
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
