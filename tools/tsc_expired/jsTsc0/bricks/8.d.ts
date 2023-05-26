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
/// <reference path="../../../../src/types/const.d.ts" />
/// <reference path="../../../../src/types/dom.d.ts" />
/// <reference path="../../../../src/types/IBrickCore.d.ts" />
/**
 * <en>Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型</zh_cn>
 * <zh_tw>拉密麻將類型</zh_tw>
 */
declare enum RummikubPokerKind {
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
declare const RummikubPokerKindCount = 4;

/**
 * <en>Default Value of Rummikub Mahjong Type</en>
 * <zh_cn>拉密麻将类型默认值</zh_cn>
 * <zh_tw>拉密麻將類型默認值</zh_tw>
 */
declare const DefaultRummikubPokerKind = 15;
declare class BrickCore extends PokerBase {
  constructor();
  protected onPageSizeChanged: (_newPageSize: string) => void;
  protected getForePageHtml: () => string;
  protected getBackPageHtml: () => string;
  /**
     * <en>Count of normal card: diagonal</en>
     * <zh_cn>普通牌份数：对角线</zh_cn>
     * <zh_tw>普通牌份數：對角線</zh_tw>
     */
  private DIAGONAL_NORMAL_CARD_TIMES;
  /**
     * <en>Count of changeable carddiagonal</en>
     * <zh_cn>百变牌数：对角线</zh_cn>
     * <zh_tw>百变牌數：對角線</zh_tw>
     */
  private DIAGONAL_CHANGEABLE_CARD_COUNT;
  /**
     * <en>Tips of diagonal</en>
     * <zh_cn>提示：对角线</zh_cn>
     * <zh_tw>提示：對角線</zh_tw>
     */
  private DIAGONAL_CENTER_TEXT;
  /**
     * <en>Count of normal card: center</en>
     * <zh_cn>普通牌份数：中心</zh_cn>
     * <zh_tw>普通牌份數：中心</zh_tw>
     */
  private CENTER_NORMAL_CARD_TIMES;
  /**
     * <en>Count of changeable cardcenter</en>
     * <zh_cn>百变牌数：中心</zh_cn>
     * <zh_tw>百变牌數：中心</zh_tw>
     */
  private CENTER_CHANGEABLE_CARD_COUNT;
  /**
     * <en>Tips of center</en>
     * <zh_cn>提示：中心</zh_cn>
     * <zh_tw>提示：中心</zh_tw>
     */
  private CENTER_CENTER_TEXT;
  /**
     * <en>Count of normal card: diagonal extends</en>
     * <zh_cn>普通牌份数：对角线扩展版</zh_cn>
     * <zh_tw>普通牌份數：對角線擴展版</zh_tw>
     */
  private DIAGONAL_EXTENDS_NORMAL_CARD_TIMES;
  /**
     * <en>Count of changeable carddiagonal extends</en>
     * <zh_cn>百变牌数：对角线扩展版</zh_cn>
     * <zh_tw>百变牌數：對角線擴展版</zh_tw>
     */
  private DIAGONAL_EXTENDS_CHANGEABLE_CARD_COUNT;
  /**
     * <en>Tips of diagonal extends</en>
     * <zh_cn>提示：对角线扩展版</zh_cn>
     * <zh_tw>提示：對角線擴展版</zh_tw>
     */
  private DIAGONAL_EXTENDS_CENTER_TEXT;
  /**
     * <en>Count of normal card: center extends</en>
     * <zh_cn>普通牌份数：中心扩展版</zh_cn>
     * <zh_tw>普通牌份數：中心擴展版</zh_tw>
     */
  private CENTER_EXTENDS_NORMAL_CARD_TIMES;
  /**
     * <en>Count of changeable cardcenter extends</en>
     * <zh_cn>百变牌数：中心扩展版</zh_cn>
     * <zh_tw>百变牌數：中心擴展版</zh_tw>
     */
  private CENTER_EXTENDS_CHANGEABLE_CARD_COUNT;
  /**
     * <en>Tips of center extends</en>
     * <zh_cn>提示：中心扩展版</zh_cn>
     * <zh_tw>提示：中心擴展版</zh_tw>
     */
  private CENTER_EXTENDS_CENTER_TEXT;
  protected countPokerDataAndComputedData: (
    pokerKind: number,
    countPerPage: number,
  ) => void;
  protected updateOtherDataOfPoker: (newData: any) => void;
  protected initOtherElements: () => void;
  protected initPokerKindElements: (wrapElement: HTMLDivElement) => void;
  protected includeZeroElementArray: Array<HTMLInputElement>;
  protected initIncludeZeroElements: (wrapElement: HTMLDivElement) => void;
  protected wholePageElementArray: Array<HTMLInputElement>;
  protected initWholePageElements: (wrapElement: HTMLDivElement) => void;
  private readonly DECOR_COUNT;
  private readonly NORMAL_CARD_ARRAY;
  private readonly CHANGEABLE_CARD_ARRAY;
  private countIt;
}
declare const brickCore: BrickCore;
