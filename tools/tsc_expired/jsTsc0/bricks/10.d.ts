/// <reference path="../../../../src/types/const.d.ts" />
/// <reference path="../../../../src/types/dom.d.ts" />
/// <reference path="../../../../src/types/svgHelper.d.ts" />
/// <reference path="../../../../src/types/brickWithTableBase.d.ts" />
/**
 * <en>Hundredth lattice information</en>
 * <zh_cn>百数格信息</zh_cn>
 * <zh_tw>百數格資訊</zh_tw>
 */
declare type HundredthLatticeInfo = {
  /**
     * <en>Length</en>
     * <zh_cn>边长</zh_cn>
     * <zh_tw>邊長</zh_tw>
     */
  length: number;
  /**
     * <en>Show Number</en>
     * <zh_cn>显示数字</zh_cn>
     * <zh_tw>顯示數字</zh_tw>
     */
  showNumber: boolean;
  /**
     * <en>Digital Overlay</en>
     * <zh_cn>数字叠加</zh_cn>
     * <zh_tw>數位疊加</zh_tw>
     */
  digitalOverlay: boolean;
  /**
     * <en>Start Number</en>
     * <zh_cn>开始值</zh_cn>
     * <zh_tw>開始值</zh_tw>
     */
  startNumber: number;
  /**
     * <en>Count</en>
     * <zh_cn>数量</zh_cn>
     * <zh_tw>數量</zh_tw>
     */
  count: number;
  /**
     * <en>Inner Line Style</en>
     * <zh_cn>内部线样式</zh_cn>
     * <zh_tw>內部線樣式</zh_tw>
     */
  innerLineStyle: string;
  /**
     * <en>Outer Line Style</en>
     * <zh_cn>外边线样式</zh_cn>
     * <zh_tw>外邊線線樣</zh_tw>
     */
  outerLineStyle: string;
  /**
     * <en>Text Style</en>
     * <zh_cn>文本样式</zh_cn>
     * <zh_tw>文字樣式</zh_tw>
     */
  textStyle: string;
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
 * 功能：
 * 初建：2022-11-19 安启
 * 历史：2020-04-01
 * 参考：P:\0\000007\_学习\数学\百数格	P:\0\000007\_学习\数学\百格游戏
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
  /**
     * 计算data和computedData数据
     */
  protected countDataAndComputedData: () => void;
  /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
  protected createTableBodyRow: (item: object) => void;
  /** OK
     * 初始化表头
     */
  protected initTableHead: () => void;
  /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
  protected getUsableList: () => Array<object>;
}
declare const brickCore: BrickCore;
