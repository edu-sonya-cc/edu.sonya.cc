/// <reference path="../../../../src/types/const.d.ts" />
/// <reference path="../../../../src/types/dom.d.ts" />
/// <reference path="../../../../src/types/utils.d.ts" />
/// <reference path="../../../../src/types/brickWithTableBase.d.ts" />
/// <reference path="../../../../src/types/box.d.ts" />
export declare abstract class BoxBase extends BrickWithTableBase {
  protected idOrClassPrefix: string;
  /** OK
     * 构造方法
     */
  constructor();
  protected updateOtherDataLevel3: (newData: any) => void;
  /** OK
     * 初始化表格上方控件（通用两行控件除外）
     */
  protected initCoreElementsBeforeTable: () => void;
  private topWithoutHalfCircleRadioArray;
  protected updateOtherDataOfBox: (newData: any) => void;
  protected countDataAndComputedData: () => void;
  private idOrClassPrefix;
  /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
  protected getUsableList: () => any[];
  private appendBoxOfCuboid;
  private createTableBodyRow;
  /** OK
     * 初始化表头
     */
  protected initTableHead: () => void;
  private appendLengthsTd;
  private appendContentsTd;
}
