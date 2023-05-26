/// <reference path="../../../../src/types/const.d.ts" />
/// <reference path="../../../../src/types/dom.d.ts" />
/// <reference path="../../../../src/types/svgHelper.d.ts" />
/// <reference path="../../../../src/types/brickWithTableBase.d.ts" />
/**
 * <en>Gucci building block information</en>
 * <zh_cn>古氏积木信息</zh_cn>
 * <zh_tw>古氏積木資訊</zh_tw>
 */
declare type CuisenaireRodInfo = {
  /**
     * <en>Only white paper</en>
     * <zh_cn>只有白纸</zh_cn>
     * <zh_tw>只有白紙</zh_tw>
     */
  onlyWhitePaper: boolean;
  /**
     * <en>Digital Overlay</en>
     * <zh_cn>数字叠加</zh_cn>
     * <zh_tw>數位疊加</zh_tw>
     */
  digitalOverlay: boolean;
  /**
     * <en>Sealing style</en>
     * <zh_cn>封口方式</zh_cn>
     * <zh_tw>封口方式</zh_tw>
     */
  sealingStyle: "none" | "onlyAbove" | "onlyBelow" | "both";
  /**
     * <en>Length</en>
     * <zh_cn>边长</zh_cn>
     * <zh_tw>邊長</zh_tw>
     */
  length: number;
  /**
     * <en>Inner Line Style</en>
     * <zh_cn>内部线样式</zh_cn>
     * <zh_tw>內部線樣式</zh_tw>
     */
  innerLineStyle: string[];
  /**
     * <en>Cut Line Style</en>
     * <zh_cn>剪开线样式</zh_cn>
     * <zh_tw>剪開線樣式</zh_tw>
     */
  cutLineStyle: string[];
  /**
     * <en>Outer Line Color</en>
     * <zh_cn>外边线样式</zh_cn>
     * <zh_tw>外邊線線樣</zh_tw>
     */
  outerLineStyle: string[];
  /**
     * <en>Text Style</en>
     * <zh_cn>文本样式</zh_cn>
     * <zh_tw>文字樣式</zh_tw>
     */
  textStyle: string[];
  /**
     * <en>Pages</en>
     * <zh_cn>各色页数</zh_cn>
     * <zh_tw>各色頁數</zh_tw>
     */
  pages: number[];
  /**
     * <en>Paper thickness</en>
     * <zh_cn>纸厚</zh_cn>
     * <zh_tw>紙厚</zh_tw>
     */
  paperThickness: number;
  /**
     * <en>Other parameters</en>
     * <zh_cn>其它参数</zh_cn>
     * <zh_tw>其它參數</zh_tw>
     */
  otherParameters: object;
};
/**
 * <en>
 * Function:
 * Create:
 * History:
 * Reference:
 * Description:
 * </en>
 *
 * <zh_cn>
 * 功能：古氏积木
 * 初建：2022-11-19 安启
 * 历史：2020-05-14
 * 参考：P:\0\000007\_学习\数学\古氏积木
 * 说明：
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：
 * 初建：
 * 歷史：
 * 參攷：
 * 說明：
 * </zh_tw>
 */
declare class BrickCore extends BrickWithTableBase {
  protected idOrClassPrefix: string;
  /** OK
     * 构造方法
     */
  constructor();
  /** OK
     * 计算data和computedData数据
     */
  protected countDataAndComputedData: () => void;
  private getHorizontalRodHtml;
  private getVerticalRodHtml;
  /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
  protected getUsableList: () => Array<object>;
  /** OK
     * 初始化表头
     */
  protected initTableHead: () => void;
  /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
  protected createTableBodyRow: (item: object) => void;
}
declare const brickCore: BrickCore;
