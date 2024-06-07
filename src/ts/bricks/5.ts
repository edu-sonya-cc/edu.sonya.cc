/**
 * <en_us>
 * Function: Generate Pinyin Poker
 * Initial: 2021-10-06 Anqi
 * History: 2022-11-01 Anqi Filing
 * Reference: None
 * Note: Initials, finals, overall recognition, three syllables and tone, simple final with tone,
 *       it is recommended to use different paper colors for printing
 * </en_us>
 *
 * <zh_cn>
 * 功能：生成拼音扑克
 * 初建：2021-10-06 安启 P:\0\000007\_学习\语文\拼音\声母韵母及整体认读表
 * 历史：2022-11-01 安启 归档
 * 参考：无
 * 说明：声母、韵母、整体认读、三拼音节与声调、带声调单韵母，建议使用不同纸色打印
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成拼音撲克
 * 初建：2021-10-06 安啟 P:\0\000007\_學習\語文\拼音\聲母韻母及整體認讀錶
 * 歷史：2022-11-01 安啟 歸檔
 * 參攷：無
 * 說明：聲母、韻母、整體認讀、三拼音節與聲調、帶聲調單韻母，建議使用不同紙色列印
 * </zh_tw>
 */

// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// // import { global } from '../global.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />

/**
 * <en_us>Pinyin Poker Type</en_us>
 * <zh_cn>拼音扑克类型</zh_cn>
 * <zh_tw>拼音撲克類型</zh_tw>
 */
enum PinyinPokerKind {
  /**
   * <en_us>None</en_us>
   * <zh_cn>无</zh_cn>
   * <zh_tw>無</zh_tw>
   */
  none = 0,
  /**
   * <en_us>Initials</en_us>
   * <zh_cn>声母</zh_cn>
   * <zh_tw>聲母</zh_tw>
   */
  initials = 1,
  /**
   * <en_us>Finals</en_us>
   * <zh_cn>韵母</zh_cn>
   * <zh_tw>韻母</zh_tw>
   */
  finals = 2,
  /**
   * <en_us>Overall recognition</en_us>
   * <zh_cn>整体认读</zh_cn>
   * <zh_tw>整體認讀</zh_tw>
   */
  overallRecognition = 4,
  /**
   * <en_us>Three syllables and tone</en_us>
   * <zh_cn>三拼音节与声调</zh_cn>
   * <zh_tw>三拼音節與聲調</zh_tw>
   */
  threeSyllablesAndTone = 8,
  /**
   * <en_us>Simple final with tone</en_us>
   * <zh_cn>带声调单韵母</zh_cn>
   * <zh_tw>帶聲調單韻母</zh_tw>
   */
  simpleFinalWithTone = 16,
}

const PinyinPokerKindCount = 5;
const DefaultPinyinPokerKind = 31;
class BrickCore extends PokerBase implements IBrickCore {
  constructor() {
    super({
      pokerWidth: 40,
      pokerHeight: 56,
      pokerKind: DefaultPinyinPokerKind,
      useSameBackCover: true,
    }, {
      chars: [],
      charsNotSameBackCover: [],
      countNotSameBackCover: 0,
      backCoversWhenNotSame: [],
      // pokerCss: `
      // page.forePage{font-family:'PinYinok', 'KaiTi';}
      // .kaiti{font-family:kaiti;}
      // .normal-weight {font-weight:normal; }
      // `,
      pokerCss: `
      page.forePage{font-family:'KaiTi';}
      .kaiti{font-family:kaiti;}
      .normal-weight {font-weight:normal; }
      `,
    });
  }

  protected getForePageHtml = (): string => {
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
        useSameBackCover,
      },
      computedData: {
        // backCover: COVER,
        count,
        // title,
        chars,
        charsNotSameBackCover,
        countNotSameBackCover,
        // backCoversWhenNotSame,
      },
    } = this;

    const COUNT = useSameBackCover ? count : countNotSameBackCover;
    const CHARS: Array<string> = [];
    (useSameBackCover ? chars : charsNotSameBackCover).forEach((char: string) =>
      CHARS.push(char)
    );

    const MAX_SYMBOL_INDEX = COUNT - 1;

    const PAGE_START = `<page class="forePage ${paperSize}">`,
      PAGE_END = "</page>";
    const ROW_START = "<row>", ROW_END = "</row>";
    const CELL_START = "<cell>", CELL_END = "</cell>";
    const TOP_START = "<top>", TOP_END = "</top>";
    const BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";

    const TEXT_END = "</text>";

    const TEXT_START_TOP_LEFT = '<text class="top-left">';
    // const TEXT_START_BOTTOM_LEFT  = '<text class="bottom-left">';

    // const TEXT_START_TOP_RIGHT = '<text class="top-right">';
    const TEXT_START_BOTTOM_RIGHT = '<text class="bottom-right">';

    const TEXT_START_TOP_LEFT_USE_KAITI = '<text class="top-left kaiti">';
    const TEXT_START_BOTTOM_RIGHT_USE_KAITI =
      '<text class="bottom-right kaiti">';

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
            const char = CHARS[symbolIndex] || "";
            const useKaiti = "ˉ,ˊ,ˇ,ˋ".indexOf(char) > -1;
            // html += (useKaiti ? TEXT_START_TOP_LEFT_USE_KAITI : TEXT_START_TOP_LEFT).concat(char, TEXT_END);
            // html += (useKaiti ? TEXT_START_BOTTOM_RIGHT_USE_KAITI : TEXT_START_BOTTOM_RIGHT).concat(char, TEXT_END);

            html += TOP_START.concat(
              useKaiti ? TEXT_START_TOP_LEFT_USE_KAITI : TEXT_START_TOP_LEFT,
              char,
              TEXT_END,
              TOP_END,
            );
            html += BOTTOM_START.concat(
              useKaiti
                ? TEXT_START_BOTTOM_RIGHT_USE_KAITI
                : TEXT_START_BOTTOM_RIGHT,
              char,
              TEXT_END,
              BOTTOM_END,
            );
          }
          html += CELL_END;

          ++symbolIndex;
        }
        html += ROW_END;
      }
      html += PAGE_END;
    }
    return html
      .replace(
        /ü/gi,
        '<font style="font-size:0.9em;position:relative;top:-0.05em;font-weight:bold;">ü</font>',
      )
      .replace(
        /([āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ])/gi,
        '<font class="kaiti normal-weight">$1</font>',
      );
  };

  protected getBackPageHtml = (): string => {
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

        useSameBackCover,
      },
      computedData: {
        backCover: COVER,
        count,
        // title,

        // chars,
        // charsNotSameBackCover,
        countNotSameBackCover,
        backCoversWhenNotSame,
      },
    } = this;

    const COUNT = useSameBackCover ? count : countNotSameBackCover;

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
            html += CENTER_START.concat(
              useSameBackCover ? COVER : backCoversWhenNotSame[symbolIndex],
              CENTER_END,
            );
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

  // 23个声母加1个无声母
  private INITIAL_ARRAY = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,"
    .split(",");

  // 24个韵母
  private VOWEL_ARRAY =
    "a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong"
      .split(",");

  // 16个整体认读
  private OVERALL_READING_ARRAY =
    "zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying".split(
      ",",
    );

  // // 4个声调（2份）加一个空白
  // private TONE_ARRAY = 'ˉ,ˊ,ˇ,ˋ,ˉ,ˊ,ˇ,ˋ,'.split(',');

  // // 11个三拼音节（有些资料上略过üan而计为10个）
  // // https://baijiahao.baidu.com/s?id=1622367231442625622&wfr=spider&for=pc
  // // 用ü做介母的三拼音节只涉及一个韵母an和 j、q、x 三个声母。例如：juān（捐）、quán（全）、xuǎn（选）。应该注意的是：小 ü 遇见 j、q、x，头上两点要省去，注音时候写成u，拼读还要读成 ü。
  // private THREE_SYLLABLE_SPELLING_ARRAY = 'ia,ua,uo,uai,iao,ian,iang,uan,uang,iong,üan'.split(',');

  // 20项：11个三拼音节（有些资料上略过üan而计为10个）加9个声调——4个声调（2份）加一个空白
  private THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY =
    "ia,ua,uo,uai,iao,ian,iang,uan,uang,iong,üan,ˉ,ˊ,ˇ,ˋ,ˉ,ˊ,ˇ,ˋ,".split(",");

  // 30个带声调单韵母，Word需替换[āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ]
  private SINGLE_VOWEL_WITH_TONE_ARRAY =
    "a,ā,á,ǎ,à,o,ō,ó,ǒ,ò,e,ē,é,ě,è,i,ī,í,ǐ,ì,u,ū,ú,ǔ,ù,ü,ǖ,ǘ,ǚ,ǜ".replace(
      /a/g,
      "ɑ",
    ).replace(
      /g/g,
      "ɡ",
    ).split(",");

  protected countPokerDataAndComputedData = (
    pokerKind: number,
    countPerPage: number,
  ): void => {
    if (pokerKind === 0) pokerKind = DefaultPinyinPokerKind;

    const en_us = `${FILENAME_POSTFIX}Pinyin Poker`;
    const zh_cn = `${FILENAME_POSTFIX}拼音扑克`;
    const zh_tw = `${FILENAME_POSTFIX}拼音撲克`;

    const enBackCover = en_us.split("_").join("<br />");
    const zh_cnBackCover = zh_cn.split("_").join("<br />");
    const zh_twBackCover = zh_tw.split("_").join("<br />");

    const enArray: Array<string> = [];
    const enFullArray: Array<string> = [];
    const zh_cnArray: Array<string> = [];
    const zh_twArray: Array<string> = [];

    let backCover = "";
    let title = { en_us, zh_cn, zh_tw };
    const CHARS: Array<string> = [];
    const BACK_COVERS: Array<string> = [];
    const CHARS_NOT_SAME_BACK_COVER: Array<string> = [];
    let countNotSameBackCover = 0;

    if (PinyinPokerKind.initials === (PinyinPokerKind.initials & pokerKind)) {
      enArray.push("initials");
      countNotSameBackCover += this.countIt(
        "Initials",
        "声母",
        "聲母",
        this.INITIAL_ARRAY,
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        CHARS_NOT_SAME_BACK_COVER,
        countPerPage,
        BACK_COVERS,
      );
    }

    if (PinyinPokerKind.finals === (PinyinPokerKind.finals & pokerKind)) {
      enArray.push("finals");
      countNotSameBackCover += this.countIt(
        "Finals",
        "韵母",
        "韻母",
        this.VOWEL_ARRAY,
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        CHARS_NOT_SAME_BACK_COVER,
        countPerPage,
        BACK_COVERS,
      );
    }

    if (
      PinyinPokerKind.overallRecognition ===
        (PinyinPokerKind.overallRecognition & pokerKind)
    ) {
      enArray.push("overallRecognition");
      countNotSameBackCover += this.countIt(
        "Overall recognition",
        "整体认读",
        "整體認讀",
        this.OVERALL_READING_ARRAY,
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        CHARS_NOT_SAME_BACK_COVER,
        countPerPage,
        BACK_COVERS,
      );
    }

    if (
      PinyinPokerKind.threeSyllablesAndTone ===
        (PinyinPokerKind.threeSyllablesAndTone & pokerKind)
    ) {
      enArray.push("threeSyllablesAndTone");
      countNotSameBackCover += this.countIt(
        "Three syllables and tone",
        "三拼音节与声调",
        "三拼音節與聲調",
        this.THREE_SYLLABLE_SPELLING_AND_TONE_ARRAY,
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        CHARS_NOT_SAME_BACK_COVER,
        countPerPage,
        BACK_COVERS,
      );
    }

    if (
      PinyinPokerKind.simpleFinalWithTone ===
        (PinyinPokerKind.simpleFinalWithTone & pokerKind)
    ) {
      enArray.push("simpleFinalWithTone");
      countNotSameBackCover += this.countIt(
        "Simple final with tone",
        "带声调单韵母",
        "帶聲調單韻母",
        this.SINGLE_VOWEL_WITH_TONE_ARRAY,
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        CHARS_NOT_SAME_BACK_COVER,
        countPerPage,
        BACK_COVERS,
      );
    }

    switch (enArray.length) {
      case 0:
        backCover = getI18nInnerHTML({
          en_us: enBackCover,
          zh_cn: zh_cnBackCover,
          zh_tw: zh_twBackCover,
        });
        break;
      case 1:
        const enFirstItem = enArray[0];
        const zh_cnFirstItem = zh_cnArray[0];
        const zh_twFirstItem = zh_twArray[0];

        backCover = getI18nInnerHTML({
          en_us: enBackCover.concat("<br /><br />", enFirstItem),
          zh_cn: zh_cnBackCover.concat("<br /><br />", zh_cnFirstItem),
          zh_tw: zh_twBackCover.concat("<br /><br />", zh_twFirstItem),
        });

        title.en_us += "_".concat(enFullArray[0]);
        title.zh_cn += "_".concat(zh_cnFirstItem);
        title.zh_tw += "_".concat(zh_twFirstItem);
        break;
      default:
        if (enArray.length === PinyinPokerKindCount) {
          backCover = getI18nInnerHTML({
            en_us: enBackCover,
            zh_cn: zh_cnBackCover,
            zh_tw: zh_twBackCover,
          });

          title.en_us += " Mixed_ALL";
          title.zh_cn += "混合_所有";
          title.zh_tw += "混合_所有";
        } else {
          backCover = getI18nInnerHTML({
            en_us: enBackCover.concat(
              "<br /><br /><small>",
              enArray.join("<br />"),
              "</small>",
            ),
            zh_cn: zh_cnBackCover.concat(
              "<br /><br /><small>",
              zh_cnArray.join("<br />"),
              "</small>",
            ),
            zh_tw: zh_twBackCover.concat(
              "<br /><br /><small>",
              zh_twArray.join("<br />"),
              "</small>",
            ),
          });

          title.en_us += " Mixed_".concat(enFullArray.join("_"));
          title.zh_cn += "混合_".concat(zh_cnArray.join("_"));
          title.zh_tw += "混合_".concat(zh_twArray.join("_"));
        }
        break;
    }

    this.computedData.backCover = backCover;
    this.computedData.count = Math.ceil(CHARS.length / countPerPage) *
      countPerPage;
    this.computedData.title = title;

    this.computedData.chars = CHARS;
    this.computedData.charsNotSameBackCover = CHARS_NOT_SAME_BACK_COVER;
    this.computedData.countNotSameBackCover = countNotSameBackCover;
    this.computedData.backCoversWhenNotSame = BACK_COVERS;
  };

  protected updateOtherDataOfPoker = (newData: any): void => {
    const { pokerKind, useSameBackCover } = newData;
    for (
      let pokerKindIndex = 0;
      pokerKindIndex < PinyinPokerKindCount;
      ++pokerKindIndex
    ) {
      const pokerKindValue = Math.pow(2, pokerKindIndex);
      const checkboxElement = this
        .pokerKindElementArray[pokerKindIndex] as HTMLInputElement;
      checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
    }

    this.useSameBackCoverElementArray.forEach(
      (radioElement: HTMLInputElement) => {
        radioElement.checked =
          useSameBackCover === (radioElement.value === "true");
      },
    );
  };

  protected initOtherElements = (): void => {
    let wrapElement = this.getWrapElement({
      en_us: "Use Same Back Cover",
      zh_cn: "统一背面",
      zh_tw: "統一背面",
    });
    this.initUseSameBackCoverElements(wrapElement);
  };

  protected initPokerKindElements = (wrapElement: HTMLDivElement): void => {
    const {
      data: { pokerKind },
      pokerKindElementArray: pokerKindElementArray,
    } = this;

    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en_us: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });

    const pokerKindI18nHtmlArray = [
      getI18nInnerHTML({
        en_us: "Initials",
        zh_cn: "声母",
        zh_tw: "聲母",
      }),
      getI18nInnerHTML({
        en_us: "Finals",
        zh_cn: "韵母",
        zh_tw: "韻母",
      }),
      getI18nInnerHTML({
        en_us: "Overall recognition and tone",
        zh_cn: "整体认读与声调",
        zh_tw: "整體認讀與聲調",
      }),
      getI18nInnerHTML({
        en_us: "Three syllables",
        zh_cn: "三拼音节",
        zh_tw: "三拼音節",
      }),
      getI18nInnerHTML({
        en_us: "Simple final with tone",
        zh_cn: "带声调单韵母",
        zh_tw: "帶聲調單韻母",
      }),
    ];
    for (
      let pokerKindIndex = 0;
      pokerKindIndex < PinyinPokerKindCount;
      ++pokerKindIndex
    ) {
      const pokerKindValue = Math.pow(2, pokerKindIndex);
      const checkboxElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      checkboxElement.type = "checkbox";
      checkboxElement.name = "pokerKind";
      checkboxElement.value = pokerKindValue.toString();
      if ((pokerKind & pokerKindValue) === pokerKindValue) {
        checkboxElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
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

  protected useSameBackCoverElementArray: Array<HTMLInputElement> = [];
  protected initUseSameBackCoverElements = (
    wrapElement: HTMLDivElement,
  ): void => {
    const { data: { useSameBackCover }, useSameBackCoverElementArray } = this;

    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en_us: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });
    // labelElement.setAttribute('for', 'useSameBackCover');

    const i18nHtmlArray = [
      getI18nInnerHTML({
        en_us: "Yes",
        zh_cn: "是",
        zh_tw: "是",
      }),
      getI18nInnerHTML({
        en_us: "No",
        zh_cn: "否",
        zh_tw: "否",
      }),
    ];
    [true, false].forEach((useSameBackCoverValue: boolean) => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = "useSameBackCover";
      radioElement.value = useSameBackCoverValue.toString();
      if (useSameBackCover === useSameBackCoverValue) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
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

  private countIt(
    enAppend: string,
    zh_cnAppend: string,
    zh_twAppend: string,
    charsArray: string[],
    enFullArray: string[],
    zh_cnArray: string[],
    zh_twArray: string[],
    en_us: string,
    zh_cn: string,
    zh_tw: string,
    CHARS: string[],
    CHARS_NOT_SAME_BACK_COVER: string[],
    countPerPage: number,
    BACK_COVERS: string[],
  ) {
    enFullArray.push(enAppend);
    zh_cnArray.push(zh_cnAppend);
    zh_twArray.push(zh_twAppend);

    let notSameBackCover = getI18nInnerHTML({
      en_us: en_us.concat("<br /><small>", enAppend, "</small>"),
      zh_cn: zh_cn.concat("<br />", zh_cnAppend),
      zh_tw: zh_tw.concat("<br />", zh_twAppend),
    });

    charsArray.forEach((char: string) => {
      CHARS.push(char);
      CHARS_NOT_SAME_BACK_COVER.push(char);
    });
    const arrayLength = charsArray.length;
    const countNotSameBackCoverIncrease = countPerPage *
      Math.ceil(arrayLength / countPerPage);

    pushSameValueTimes(
      CHARS_NOT_SAME_BACK_COVER,
      "",
      countNotSameBackCoverIncrease - arrayLength,
    );
    pushSameValueTimes(
      BACK_COVERS,
      notSameBackCover,
      countNotSameBackCoverIncrease,
    );

    return countNotSameBackCoverIncrease;
  }
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;
