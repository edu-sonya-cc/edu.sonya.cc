/**
 * <en>
 * Function: Generate Israeli Lami (from Chinese Mahjong)
 * Initial construction: Anqi, October 5, 2021
 * History: On November 2, 2022
 * Reference:
 * 						2021-10-05 Anqi P: 0 00007\_Learning\Mathematics\Mahjong
 * Description: Regular (2 for each of the four patterns 1-13, plus 2 or 8 changeable cards)
 * </en>
 *
 * <zh_cn>
 * 功能：生成以色列拉密（源于中国麻将）
 * 初建：2021-10-05 安启
 * 历史：2022-11-02 安启 归档
 * 参考：
 *       2021-10-05 安启 P:\0\000007\_学习\数学\麻将
 *       https://zhuanlan.zhihu.com/p/460599620
 *       https://www.zhihu.com/question/336450751/answer/761175318
 *       https://zhuanlan.zhihu.com/p/76597144
 * 说明：常规（四花色1-13各2份加2或8张百变牌），27*38mm或26*35mm。
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：生成以色列拉密（源於中國麻將）
 * 初建：2021-10-05 安啟
 * 歷史：2022-11-02 安啟 歸檔
 * 參攷：
 *  		 2021-10-05 安啟 P:\0\000007\_學習\數學\麻將
 * 說明：常規（四花色1-13各2份加2或8張百變牌），27*38mm或26*35mm。
 * </zh_tw>
 */
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// // import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// // import { global } from '../global.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />

/**
 * <en>Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型</zh_cn>
 * <zh_tw>拉密麻將類型</zh_tw>
 */
enum RummikubPokerKind {
  /**
   * <en>None</en>
   * <zh_cn>无</zh_cn>
   * <zh_tw>無</zh_tw>
   */
  none = 0,
  /**
   * <en>diagonal</en>
   * <zh_cn>对角线</zh_cn>
   * <zh_tw>對角線</zh_tw>
   */
  diagonal = 1,
  /**
   * <en>center</en>
   * <zh_cn>中心</zh_cn>
   * <zh_tw>中心</zh_tw>
   */
  center = 2,
  /**
   * <en>diagonal extends</en>
   * <zh_cn>对角线扩展版</zh_cn>
   * <zh_tw>對角線擴展版</zh_tw>
   */
  diagonalExtends = 4,
  /**
   * <en>center extends</en>
   * <zh_cn>中心扩展版</zh_cn>
   * <zh_tw>中心擴展版</zh_tw>
   */
  centerExtends = 8,
}

/**
 * <en>Count of Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型数量</zh_cn>
 * <zh_tw>拉密麻將類型數量</zh_tw>
 */
const RummikubPokerKindCount = 4;

/**
 * <en>Default Value of Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型默认值</zh_cn>
 * <zh_tw>拉密麻將類型默認值</zh_tw>
 */
const DefaultRummikubPokerKind = 15;

class BrickCore extends PokerBase {
  constructor() {
    super({
      pokerWidth: 20,
      pokerHeight: 28,
      backFontSize: "12px",
      pokerKind: DefaultRummikubPokerKind,
      centerTextShowed: false,
      includeZero: false,
      wholePage: false,
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
      `,
    });
  }

  protected onPageSizeChanged = (_newPageSize: string): void => {};

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
        centerTextShowed,
        // includeZero,
        // wholePage,
      },
      computedData: {
        count: COUNT,
        chars: CHARS,
        // backCovers: [],
        centerTexts: CENTER_TEXTS,
        colors: COLORS,
        isCenters: IS_CENTERS,
      },
    } = this;

    const MAX_SYMBOL_INDEX = COUNT - 1;

    const PAGE_START = `<page class="forePage ${paperSize}">`,
      PAGE_END = "</page>";
    const ROW_START = "<row>", ROW_END = "</row>";
    const CELL_START = "<cell>", CELL_END = "</cell>";
    const TOP_START = "<top>", TOP_END = "</top>";
    const BOTTOM_START = "<bottom>", BOTTOM_END = "</bottom>";
    const CENTER_START = "<center>", CENTER_END = "</center>";

    const TEXT_END = "</text>";

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
            const isCenter = IS_CENTERS[symbolIndex];
            // const char = CHARS[symbolIndex] || '';
            // const color = COLORS[symbolIndex] || '0';
            const char = CHARS[symbolIndex] || (isCenter ? "" : "_"); // ○
            const color = COLORS[symbolIndex] || "-1";

            if (isCenter) {
              html += `${CENTER_START}<text edu-color="${color}">${
                char.replace(/([69])/g, "<u>".concat("$1", "</u>"))
              }${TEXT_END}${CENTER_END}`;
            } else {
              html +=
                `${TOP_START}<text class="top-left" edu-color="${color}">${char}${TEXT_END}${TOP_END}`;
              if (centerTextShowed) {
                html += `${CENTER_START}${CENTER_TEXTS[symbolIndex] ||
                  ""}${CENTER_END}`;
              }
              html +=
                `${BOTTOM_START}<text class="bottom-right" edu-color="${color}">${char}${TEXT_END}${BOTTOM_END}`;
            }
          }
          html += CELL_END;

          ++symbolIndex;
        }
        html += ROW_END;
      }
      html += PAGE_END;
    }
    return html; // .replace(/ü/gi, '<font style="font-size:0.9em;position:relative;top:-0.05em;font-weight:bold;">ü</font>')
    // .replace(/([āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ])/gi, '<font class="kaiti normal-weight">$1</font>')
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
        // centerTextShowed
        // includeZero,
        // wholePage,
      },
      computedData: {
        count: COUNT,
        // chars: CHARS,
        backCovers: BACK_COVERS,
        // centerTexts: CENTER_TEXTS,
        // colors: COLORS,
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

    const lastItem = BACK_COVERS[BACK_COVERS.length - 1];

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
              BACK_COVERS[symbolIndex] || lastItem,
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

  //   private readonly CENTER_TEXT = `"<div><span>
  // <p><en>Same decor</en><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
  // <p><en>Arithmetic sequence</en></p><br />
  // <p edu-color=""1"">7,8,9,10,11,12,13</p>
  // <p edu-color=""2"">1,2,3</p>
  // <p edu-color=""3"">2,3,4,5</p>
  // <p edu-color=""4"">5,6,7,8</p>
  // <p edu-color=""1"">5,6,☺,8</p>
  // </span><span>
  // <p><en>Different decors</en><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
  // <p><en>Same value</en></p>
  // <p><b edu-color=""1"">1</b><b edu-color=""2"">1</b><b edu-color=""3"">1</b></p>
  // <p><b edu-color=""1"">2</b><b edu-color=""2"">2</b><b edu-color=""3"">2</b><b edu-color=""3"">☺</b></p>
  // <p><b edu-color=""1"">☺</b><b edu-color=""2"">3</b><b edu-color=""3"">3</b></p>
  // <p><b edu-color=""1"">☺</b><b edu-color=""2"">4</b><b edu-color=""3"">☺</b></p>
  // </span></div>"
  //  `;

  /**
   * <en>Count of normal card: diagonal</en>
   * <zh_cn>普通牌份数：对角线</zh_cn>
   * <zh_tw>普通牌份數：對角線</zh_tw>
   */
  private DIAGONAL_NORMAL_CARD_TIMES = 2;
  /**
   * <en>Count of changeable carddiagonal</en>
   * <zh_cn>百变牌数：对角线</zh_cn>
   * <zh_tw>百变牌數：對角線</zh_tw>
   */
  private DIAGONAL_CHANGEABLE_CARD_COUNT = 2;
  /**
   * <en>Tips of diagonal</en>
   * <zh_cn>提示：对角线</zh_cn>
   * <zh_tw>提示：對角線</zh_tw>
   */
  private DIAGONAL_CENTER_TEXT = `<div>
  <p><en>Same decor</en><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
  <p><en>Arithmetic sequence</en></p><br />
  <p edu-color="1">7,8,9,10,11,12,13</p>
  <p edu-color="2">1,2,3</p>
  <p edu-color="1">5,6,☺,8</p>
 
  <p><en>Different decors</en><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
  <p><en>Same value</en></p>
  <p><b edu-color="1">2</b><b edu-color="2">2</b><b edu-color="3">2</b><b edu-color="3">☺</b></p>
  <p><b edu-color="1">☺</b><b edu-color="2">3</b><b edu-color="3">3</b></p>
 </span></div>`;

  /**
   * <en>Count of normal card: center</en>
   * <zh_cn>普通牌份数：中心</zh_cn>
   * <zh_tw>普通牌份數：中心</zh_tw>
   */
  private CENTER_NORMAL_CARD_TIMES = 2;
  /**
   * <en>Count of changeable cardcenter</en>
   * <zh_cn>百变牌数：中心</zh_cn>
   * <zh_tw>百变牌數：中心</zh_tw>
   */
  private CENTER_CHANGEABLE_CARD_COUNT = 2;
  /**
   * <en>Tips of center</en>
   * <zh_cn>提示：中心</zh_cn>
   * <zh_tw>提示：中心</zh_tw>
   */
  private CENTER_CENTER_TEXT = ``;

  /**
   * <en>Count of normal card: diagonal extends</en>
   * <zh_cn>普通牌份数：对角线扩展版</zh_cn>
   * <zh_tw>普通牌份數：對角線擴展版</zh_tw>
   */
  private DIAGONAL_EXTENDS_NORMAL_CARD_TIMES = 2;
  /**
   * <en>Count of changeable carddiagonal extends</en>
   * <zh_cn>百变牌数：对角线扩展版</zh_cn>
   * <zh_tw>百变牌數：對角線擴展版</zh_tw>
   */
  private DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
  /**
   * <en>Tips of diagonal extends</en>
   * <zh_cn>提示：对角线扩展版</zh_cn>
   * <zh_tw>提示：對角線擴展版</zh_tw>
   */
  private DIAGONAL_EXTENDS_CENTER_TEXT = this.DIAGONAL_CENTER_TEXT;

  // 	private DIAGONAL_EXTENDS_CENTER_TEXT = `<div><span>
  //  <p><en>Same decor</en><zh_cn>同色连续</zh_cn><zh_tw>同色连续</zh_tw></p>
  //  <p><en>Arithmetic sequence</en></p><br />
  //  <p edu-color="1">7,8,9,10,11,12,13</p>
  //  <p edu-color="2">1,2,3</p>
  //  <p edu-color="3">2,3,4,5</p>
  //  <p edu-color="4">5,6,7,8</p>
  //  <p edu-color="1">5,6,☺,8</p>
  // </span><span>
  //  <p><en>Different decors</en><zh_cn>异色同值</zh_cn><zh_tw>异色同值</zh_tw></p>
  //  <p><en>Same value</en></p>
  //  <p><b edu-color="1">1</b><b edu-color="2">1</b><b edu-color="3">1</b></p>
  //  <p><b edu-color="1">2</b><b edu-color="2">2</b><b edu-color="3">2</b><b edu-color="3">☺</b></p>
  //  <p><b edu-color="1">☺</b><b edu-color="2">3</b><b edu-color="3">3</b></p>
  //  <p><b edu-color="1">☺</b><b edu-color="2">4</b><b edu-color="3">☺</b></p>
  // </span></div>`;

  /**
   * <en>Count of normal card: center extends</en>
   * <zh_cn>普通牌份数：中心扩展版</zh_cn>
   * <zh_tw>普通牌份數：中心擴展版</zh_tw>
   */
  private CENTER_EXTENDS_NORMAL_CARD_TIMES = 2;
  /**
   * <en>Count of changeable cardcenter extends</en>
   * <zh_cn>百变牌数：中心扩展版</zh_cn>
   * <zh_tw>百变牌數：中心擴展版</zh_tw>
   */
  private CENTER_EXTENDS_CHANGEABLE_CARD_COUNT = 8;
  /**
   * <en>Tips of center extends</en>
   * <zh_cn>提示：中心扩展版</zh_cn>
   * <zh_tw>提示：中心擴展版</zh_tw>
   */
  private CENTER_EXTENDS_CENTER_TEXT = ``;

  protected countPokerDataAndComputedData = (
    pokerKind: number,
    countPerPage: number,
  ): void => {
    if (pokerKind === 0) pokerKind = DefaultRummikubPokerKind;

    const en = `${FILENAME_POSTFIX}Rummikub`;
    const zh_cn = `${FILENAME_POSTFIX}拉密`;
    const zh_tw = `${FILENAME_POSTFIX}拉密`;

    const enBackCover = en.split("_").join("<br />");
    const zh_cnBackCover = zh_cn.split("_").join("<br />");
    const zh_twBackCover = zh_tw.split("_").join("<br />");

    const enArray: Array<string> = [];
    const enFullArray: Array<string> = [];
    const zh_cnArray: Array<string> = [];
    const zh_twArray: Array<string> = [];

    let backCover = "";
    let title = { en, zh_cn, zh_tw };
    const CENTER_TEXTS: Array<string> = [];
    const BACK_COVERS: Array<string> = [];
    const CHARS: Array<string> = [];
    const COLORS: Array<string> = [];
    let count = 0;
    let lastPokerKind = RummikubPokerKind.none;

    this.computedData.isCenters.length = "";

    if (
      RummikubPokerKind.diagonal === (RummikubPokerKind.diagonal & pokerKind)
    ) {
      enArray.push("diagonal");
      count += this.countIt(
        this.DIAGONAL_NORMAL_CARD_TIMES,
        this.DIAGONAL_CHANGEABLE_CARD_COUNT,
        countPerPage,
        this.DIAGONAL_CENTER_TEXT,
        CENTER_TEXTS,
        "diagonal",
        "对角线",
        "對角線",
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        COLORS,
        BACK_COVERS,
        RummikubPokerKind.diagonal,
      );
      lastPokerKind = RummikubPokerKind.diagonal;
    }

    if (RummikubPokerKind.center === (RummikubPokerKind.center & pokerKind)) {
      enArray.push("center");
      count += this.countIt(
        this.CENTER_NORMAL_CARD_TIMES,
        this.CENTER_CHANGEABLE_CARD_COUNT,
        countPerPage,
        this.CENTER_CENTER_TEXT,
        CENTER_TEXTS,
        "center",
        "中心",
        "中心",
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        COLORS,
        BACK_COVERS,
        RummikubPokerKind.center,
      );
      lastPokerKind = RummikubPokerKind.center;
    }

    if (
      RummikubPokerKind.diagonalExtends ===
        (RummikubPokerKind.diagonalExtends & pokerKind)
    ) {
      enArray.push("diagonalExtends");
      count += this.countIt(
        this.DIAGONAL_EXTENDS_NORMAL_CARD_TIMES,
        this.DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT,
        countPerPage,
        this.DIAGONAL_EXTENDS_CENTER_TEXT,
        CENTER_TEXTS,
        "diagonal extends",
        "对角线扩展版",
        "對角線擴展版",
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        COLORS,
        BACK_COVERS,
        RummikubPokerKind.diagonalExtends,
      );
      lastPokerKind = RummikubPokerKind.diagonalExtends;
    }

    if (
      RummikubPokerKind.centerExtends ===
        (RummikubPokerKind.centerExtends & pokerKind)
    ) {
      enArray.push("centerExtends");
      count += this.countIt(
        this.CENTER_EXTENDS_NORMAL_CARD_TIMES,
        this.CENTER_EXTENDS_CHANGEABLE_CARD_COUNT,
        countPerPage,
        this.CENTER_EXTENDS_CENTER_TEXT,
        CENTER_TEXTS,
        "center extends",
        "中心扩展版",
        "中心擴展版",
        enFullArray,
        zh_cnArray,
        zh_twArray,
        enBackCover,
        zh_cnBackCover,
        zh_twBackCover,
        CHARS,
        COLORS,
        BACK_COVERS,
        RummikubPokerKind.centerExtends,
      );
      lastPokerKind = RummikubPokerKind.centerExtends;
    }

    switch (enArray.length) {
      case 0:
        backCover = getI18nInnerHTML({
          en: enBackCover,
          zh_cn: zh_cnBackCover,
          zh_tw: zh_twBackCover,
        });
        break;
      case 1:
        const enFirstItem = enArray[0];
        const zh_cnFirstItem = zh_cnArray[0];
        const zh_twFirstItem = zh_twArray[0];

        backCover = getI18nInnerHTML({
          en: enBackCover.concat("<br /><br />", enFirstItem),
          zh_cn: zh_cnBackCover.concat("<br /><br />", zh_cnFirstItem),
          zh_tw: zh_twBackCover.concat("<br /><br />", zh_twFirstItem),
        });

        title.en += "_".concat(enFullArray[0]);
        title.zh_cn += "_".concat(zh_cnFirstItem);
        title.zh_tw += "_".concat(zh_twFirstItem);
        break;
      default:
        if (enArray.length === RummikubPokerKindCount) {
          backCover = getI18nInnerHTML({
            en: enBackCover,
            zh_cn: zh_cnBackCover,
            zh_tw: zh_twBackCover,
          });

          title.en += " Mixed_ALL";
          title.zh_cn += "混合_所有";
          title.zh_tw += "混合_所有";
        } else {
          backCover = getI18nInnerHTML({
            en: enBackCover.concat(
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

          title.en += " Mixed_".concat(enFullArray.join("_"));
          title.zh_cn += "混合_".concat(zh_cnArray.join("_"));
          title.zh_tw += "混合_".concat(zh_twArray.join("_"));
        }
        break;
    }

    this.computedData.backCover = backCover;
    this.computedData.title = title;

    this.computedData.chars = CHARS;
    this.computedData.colors = COLORS;
    // this.computedData.count = count;
    // this.computedData.count = Math.ceil(CHARS.length / countPerPage) * countPerPage;
    this.computedData.count = Math.ceil(count / countPerPage) * countPerPage;
    this.computedData.backCovers = BACK_COVERS;
    this.computedData.centerTexts = CENTER_TEXTS;

    const appendCount = this.computedData.count - count;
    switch (lastPokerKind) {
      case RummikubPokerKind.diagonal:
        pushSameValueTimes(
          this.computedData.centerTexts,
          this.DIAGONAL_CENTER_TEXT,
          appendCount,
        );
        break;
      case RummikubPokerKind.diagonalExtends:
        pushSameValueTimes(
          this.computedData.centerTexts,
          this.DIAGONAL_EXTENDS_CENTER_TEXT,
          appendCount,
        );
        break;
      default:
        pushSameValueTimes(this.computedData.isCenters, true, appendCount);
        break;
    }
  };

  protected updateOtherDataOfPoker = (newData: any): void => {
    const { pokerKind } = newData;
    for (
      let pokerKindIndex = 0;
      pokerKindIndex < RummikubPokerKindCount;
      ++pokerKindIndex
    ) {
      const pokerKindValue = Math.pow(2, pokerKindIndex);
      const checkboxElement = this
        .pokerKindElementArray[pokerKindIndex] as HTMLInputElement;
      checkboxElement.checked = (pokerKind & pokerKindValue) === pokerKindValue;
    }

    // const { centerTextShowed } = newData;
    // this.centerTextShowedElementArray.forEach((radioElement: HTMLInputElement) => {
    //   radioElement.checked = centerTextShowed === (radioElement.value === 'true');
    // });
    // this.data.centerTextShowed = centerTextShowed;

    const { includeZero } = newData;
    this.includeZeroElementArray.forEach((radioElement: HTMLInputElement) => {
      radioElement.checked = includeZero === (radioElement.value === "true");
    });
    this.data.includeZero = includeZero;

    const { wholePage } = newData;
    this.wholePageElementArray.forEach((radioElement: HTMLInputElement) => {
      radioElement.checked = wholePage === (radioElement.value === "true");
    });
    this.data.wholePage = wholePage;
  };

  protected initOtherElements = (): void => {
    // let wrapElement = this.getWrapElement({
    //   en: 'Show tips',
    //   zh_cn: '显示提示',
    //   zh_tw: '顯示提示',
    // });
    // this.initCenterTextShowedElements(wrapElement);

    this.paperSizeRadioArray.forEach((radioElement: HTMLInputElement) => {
      radioElement.onclick = (event: Event) => {
        const paperSizeValue = radioElement.value;
        this.data.paperSize = paperSizeValue;
        // switch (paperSizeValue) {
        //   case 'A3':
        //     this.data.pokerWidth = 48;
        //     this.data.pokerHeight = 68;
        //     break;
        //   case 'A4':
        //     this.data.pokerWidth = 40;
        //     this.data.pokerHeight = 56;
        //     break;
        //   default:
        //     break;
        // }
        // (this.pokerWidthElement as HTMLInputElement).value = this.data.pokerWidth.toString();
        // (this.pokerHeightElement as HTMLInputElement).value = this.data.pokerHeight.toString();
        this.saveConfigAndBuildIfAllowed();
      };
    });

    this.configCoreElement?.querySelectorAll('[name="pokerSizeButtons"]')
      .forEach(
        (buttonElement, index) => {
          if (index === 0) {
            buttonElement.setAttribute("edu-to-width", "18");
            buttonElement.setAttribute("edu-to-height", "25");

            // buttonElement.innerHTML = getI18nInnerHTML({
            //   en: 'Default',
            //   zh_cn: '默认',
            //   zh_tw: '默認',
            // });
          } else {
            // hide(buttonElement);
            buttonElement.setAttribute("edu-to-width", "20");
            buttonElement.setAttribute("edu-to-height", "28");
          }
        },
      );

    let wrapElement = this.getWrapElement({
      en: "Include Zero",
      zh_cn: "包含0",
      zh_tw: "包含0",
    });
    this.initIncludeZeroElements(wrapElement);

    wrapElement = this.getWrapElement({
      en: "Whole Page",
      zh_cn: "每项补全整页",
      zh_tw: "每項補全整頁",
    });
    this.initWholePageElements(wrapElement);
  };

  protected initPokerKindElements = (wrapElement: HTMLDivElement): void => {
    const {
      data: { pokerKind },
      pokerKindElementArray: pokerKindElementArray,
    } = this;

    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });

    const pokerKindI18nHtmlArray = [
      getI18nInnerHTML({
        en: "diagonal",
        zh_cn: "对角线",
        zh_tw: "對角線",
      }),
      getI18nInnerHTML({
        en: "center",
        zh_cn: "中心",
        zh_tw: "中心",
      }),
      getI18nInnerHTML({
        en: "diagonal extends",
        zh_cn: "对角线扩展版",
        zh_tw: "對角線擴展版",
      }),
      getI18nInnerHTML({
        en: "center extends",
        zh_cn: "中心扩展版",
        zh_tw: "中心擴展版",
      }),
    ];

    for (
      let pokerKindIndex = 0;
      pokerKindIndex < RummikubPokerKindCount;
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

  // protected centerTextShowedElementArray: Array<HTMLInputElement> = [];
  // protected initCenterTextShowedElements = (wrapElement: HTMLDivElement): void => {
  //   const { data: { centerTextShowed }, centerTextShowedElementArray } = this;

  //   // const labelElement = createElement('label') as HTMLLabelElement;
  //   // wrapElement.appendChild(labelElement);
  //   // labelElement.innerHTML = getI18nInnerHTML({
  //   //   en: '',
  //   //   zh_cn: '',
  //   //   zh_tw: '',
  //   // });
  //   // labelElement.setAttribute('for', 'centerTextShowed');

  // 	const i18nHtmlArray = [
  //     getI18nInnerHTML({
  //       en: 'Yes',
  //       zh_cn: '是',
  //       zh_tw: '是',
  //     }),
  //     getI18nInnerHTML({
  //       en: 'No',
  //       zh_cn: '否',
  //       zh_tw: '否',
  //     }),
  // 	];
  //   [true, false].forEach((centerTextShowedValue: boolean) => {
  //     const radioElement = createElement('input') as HTMLInputElement & { onclick: (event: Event) => void; };
  //     radioElement.type = 'radio';
  //     radioElement.name  = 'centerTextShowed';
  //     radioElement.value = centerTextShowedValue.toString();
  //     if (centerTextShowed === centerTextShowedValue) {
  //       radioElement.checked = true;
  //     }

  //     const spanElement = createElement('span') as HTMLSpanElement;
  //     spanElement.innerHTML = i18nHtmlArray[centerTextShowedValue ? 0 : 1];

  //     radioElement.onclick = () => {
  //       this.data.centerTextShowed = centerTextShowedValue;
  //       this.saveConfigAndBuildIfAllowed();
  //     };
  //     spanElement.onclick = () => { radioElement.click(); };

  //     wrapElement.appendChild(radioElement);
  //     wrapElement.appendChild(spanElement);

  //     centerTextShowedElementArray.push(radioElement);
  //   });
  // };

  protected includeZeroElementArray: Array<HTMLInputElement> = [];
  protected initIncludeZeroElements = (wrapElement: HTMLDivElement): void => {
    const { data: { includeZero }, includeZeroElementArray } = this;

    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });
    // labelElement.setAttribute('for', 'includeZero');

    const i18nHtmlArray = [
      getI18nInnerHTML({
        en: "Yes",
        zh_cn: "是",
        zh_tw: "是",
      }),
      getI18nInnerHTML({
        en: "No",
        zh_cn: "否",
        zh_tw: "否",
      }),
    ];
    [true, false].forEach((includeZeroValue: boolean) => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = "includeZero";
      radioElement.value = includeZeroValue.toString();
      if (includeZero === includeZeroValue) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
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

  protected wholePageElementArray: Array<HTMLInputElement> = [];
  protected initWholePageElements = (wrapElement: HTMLDivElement): void => {
    const { data: { wholePage }, wholePageElementArray } = this;

    // const labelElement = createElement('label') as HTMLLabelElement;
    // wrapElement.appendChild(labelElement);
    // labelElement.innerHTML = getI18nInnerHTML({
    //   en: '',
    //   zh_cn: '',
    //   zh_tw: '',
    // });
    // labelElement.setAttribute('for', 'wholePage');

    const i18nHtmlArray = [
      getI18nInnerHTML({
        en: "Yes",
        zh_cn: "是",
        zh_tw: "是",
      }),
      getI18nInnerHTML({
        en: "No",
        zh_cn: "否",
        zh_tw: "否",
      }),
    ];
    [true, false].forEach((wholePageValue: boolean) => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = "wholePage";
      radioElement.value = wholePageValue.toString();
      if (wholePage === wholePageValue) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
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

  private readonly DECOR_COUNT = 4;
  private readonly NORMAL_CARD_ARRAY = getNumbersArray(1, 13);
  // https://zhuanlan.zhihu.com/p/76597144
  private readonly CHANGEABLE_CARD_ARRAY = [
    "☺",
    '<p class="double"><b><i>☺</i></b><b><i>☺</i></b></p>',
    '<p class="discoloration"><b><i>☺</i></b><b><i>☺</i></b></p>',
    '<p class="mirror"><b><i>☺</i></b><b><i>☺</i></b></p>',
  ];
  private countIt = (
    normalCardTimes: number,
    changeableCardCount: number,
    countPerPage: number,
    centerText: string,
    CENTER_TEXTS: string[],
    enAppend: string,
    zh_cnAppend: string,
    zh_twAppend: string,
    enFullArray: string[],
    zh_cnArray: string[],
    zh_twArray: string[],
    en: string,
    zh_cn: string,
    zh_tw: string,
    CHARS: string[],
    COLORS: string[],
    BACK_COVERS: string[],
    pokerKind: RummikubPokerKind,
  ): number => {
    enFullArray.push(enAppend);
    zh_cnArray.push(zh_cnAppend);
    zh_twArray.push(zh_twAppend);

    let notSameBackCover = getI18nInnerHTML({
      en: en.concat("<br /><small>", enAppend, "</small>"),
      zh_cn: zh_cn.concat("<br />", zh_cnAppend),
      zh_tw: zh_tw.concat("<br />", zh_twAppend),
    });

    const {
      DECOR_COUNT,
      NORMAL_CARD_ARRAY,
      CHANGEABLE_CARD_ARRAY,
      data: { includeZero, wholePage },
    } = this;
    const isCenters = pokerKind === RummikubPokerKind.center ||
      pokerKind === RummikubPokerKind.centerExtends;

    for (
      let normalCardLoop = 0;
      normalCardLoop < normalCardTimes;
      ++normalCardLoop
    ) {
      for (let colorIndex = 1; colorIndex <= DECOR_COUNT; ++colorIndex) {
        const color = colorIndex.toString();

        if (includeZero) {
          CHARS.push("0");
          CENTER_TEXTS.push(centerText);
          COLORS.push(color);

          this.computedData.isCenters.push(isCenters);
        }

        NORMAL_CARD_ARRAY.forEach((char: string) => {
          CHARS.push(char);
          CENTER_TEXTS.push(centerText);
          COLORS.push(color);

          this.computedData.isCenters.push(isCenters);
        });
      }
    }

    const CHANGEABLE_CARD_SYMBOL_COUNT = changeableCardCount / 2;
    for (let colorIndex = 0; colorIndex < 2; ++colorIndex) {
      const color = (colorIndex * 2).toString(); // => 0, 2

      for (
        let changeableCardLoop = 0;
        changeableCardLoop < CHANGEABLE_CARD_SYMBOL_COUNT;
        ++changeableCardLoop
      ) {
        const char = CHANGEABLE_CARD_ARRAY[changeableCardLoop];
        CHARS.push(char);
        CENTER_TEXTS.push(centerText);
        COLORS.push(color);

        this.computedData.isCenters.push(isCenters);
      }
    }

    const arrayLength =
      ((includeZero ? 1 : 0) + NORMAL_CARD_ARRAY.length) * DECOR_COUNT *
        normalCardTimes +
      changeableCardCount;
    // const countNotSameBackCoverIncrease = countPerPage * Math.ceil(arrayLength / countPerPage);
    // const countNotSameBackCoverIncrease = arrayLength;
    const countNotSameBackCoverIncrease = wholePage
      ? countPerPage * Math.ceil(arrayLength / countPerPage)
      : arrayLength;

    const appendCount = countNotSameBackCoverIncrease - arrayLength;
    pushSameValueTimes(CHARS, "", appendCount);
    pushSameValueTimes(CENTER_TEXTS, centerText, appendCount);
    pushSameValueTimes(COLORS, "", appendCount);
    pushSameValueTimes(this.computedData.isCenters, isCenters, appendCount);

    pushSameValueTimes(
      BACK_COVERS,
      notSameBackCover,
      countNotSameBackCoverIncrease,
    );

    return countNotSameBackCoverIncrease;
  };
}

const brickCore = new BrickCore();
(window as unknown as { brickCore: IBrickCore }).brickCore = brickCore;
