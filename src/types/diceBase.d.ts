export declare abstract class DiceBase extends BrickWithTableBase {
  protected idOrClassPrefix: string;
  protected countDataAndComputedData: () => void;
  private idOrClassPrefix;
  /** OK
   * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
   * @returns 数组：信息数组
   */
  protected getUsableList: () => Array<object>;
  /** OK
   * 初始化表头
   */
  protected initTableHead: () => void;
  private appendDiceOfSides4;
  private appendDiceOfSides6;
  private appendDiceOfSides8;
  private appendDiceOfSides12;
  private appendDiceOfSides20;
  private appendDiceOfSides24;
  /** OK
   * 创建表格行
   * @param item
   * @param tableBodyElement
   */
  protected createTableBodyRow: (dice: object) => void;
  /** OK
   *
   * @param tr
   * @param dice
   */
  private appendDiceKindTd;
  /** OK
   *
   * @param tr
   * @param dice
   */
  private appendContentsTd;
}
