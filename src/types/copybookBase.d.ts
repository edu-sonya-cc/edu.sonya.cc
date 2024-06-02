/**
 * <en_us>
 * Function:
 * Create:
 * History:
 * Reference:
 * Description:
 * </en_us>
 *
 * <zh_cn>
 * 功能：注音写字生成小工具
 * 初建：2022-11-14 安启
 * 历史：
 * 参考：P:\ecs_person\websites\sonya.cc\www\01_chinese\01_chineseChars
 * 说明：看拼音写汉字、看汉字写拼音。
 * 设计：于constructor中进一步扩展data与otherComputedData，同时扩展DEFAULT_DATA_JSON。
 *       从BrickBase继承computedData、data、configCoreElement等，实现以下抽象方法：
 *       countDataAndComputedData、updateOtherData、initCoreElements、
 *       onPageSizeChanged、download、print
 *       暂不实现抽象方法：initOtherElements
 *       于constructor中进一步扩展data与otherComputedData，同时扩展DEFAULT_DATA_JSON。
 * </zh_cn>
 *
 * <zh_tw>
 * 功能：
 * 初建：
 * 歷史：
 * 參攷：P:\ecs_person\websites\sonya.cc\www\01_chinese\01_chineseChars
 * 說明：
 * </zh_tw>
 */
export declare abstract class CopybookBase extends BrickBase {
  constructor(appendData: object, otherComputedData: object);
  /**
   * <en_us>Synchronize new data related to copybook.</en_us>
   * <zh_cn>同步字帖相关新数据</zh_cn>
   * <zh_tw>同步字帖相關新數據</zh_tw>
   * @param _newData
   * <en_us>New data related to copybook.</en_us>
   * <zh_cn>字帖相关新数据</zh_cn>
   * <zh_tw>字帖相關新數據</zh_tw>
   */
  protected updateOtherDataOfCopybook: (_newData: any) => void;
  /**
   * <en_us>
   * Array: check box corresponding to the selectable copybook set leaf node set.
   * </en_us>
   * <zh_cn>
   * 数组：可选择的字帖叶结点集合对应的复选框。
   * </zh_cn>
   * <zh_tw>
   * 數組：可選擇的字帖葉結點集合對應的核取方塊。
   * </zh_tw>
   */
  protected usableCopybookCheckboxElementArray: Array<
    HTMLInputElement & {
      words: Array<{
        chinese: string;
        pinyin: string;
      }>;
    }
  >;
  /**
   * <en_us>
   * Array: Array: optional copybook collection.
   * Level 3: semester, unit and class. Skip the third level at present. terms -> units [-> lessions]
   * In the first semester of the first grade, the contents of the writing table were all included in the literacy table;
   * In the second semester of the first year, there are two parts: the character recognition table and the writing table.
   * From the second grade, there are three parts: literacy table, writing table and words.
   * </en_us>
   * <zh_cn>
   * 数组：可选择的字帖集。三级：学期、单元、课。目前略过第三级。
   * 一年级上，写字表内容全部包含于识字表中；一年级下，分识字表与写字表两部分。二年级开始，分识字表、写字表、词语三部分。
   * </zh_cn>
   * <zh_tw>
   * 數組：可選擇的字帖集。 三級：學期、單元、課。 現時略過第三級。
   * 一年級上，寫字錶內容全部包含於識字錶中；一年級下，分識字表與寫字錶兩部分。二年級開始，分識字表、寫字錶、詞語三部分。
   * </zh_tw>
   */
  protected usableCopybooksPeopleEducationEdition: Array<{
    termI18n: I18nable;
    units: Array<{
      names: I18nable;
      words: Array<{
        chinese: string;
        pinyin: string;
      }>;
    }>;
  }>;
  /**
   * <en_us>Typebook Kind radio button element array.</en_us>
   * <zh_cn>字帖类型单选按钮数组</zh_cn>
   * <zh_tw>字帖類型單選按鈕數組</zh_tw>
   */
  protected kindElementArray: Array<HTMLInputElement>;
  /**
   * <en_us>Init typebook kind radio button element array.</en_us>
   * <zh_cn>初始化字帖类型单选按钮数组</zh_cn>
   * <zh_tw>初始化字帖類型單選按鈕數組</zh_tw>
   */
  protected initKindElements: () => void;
  /**
   * <en_us>Entry method radio button element array.</en_us>
   * <zh_cn>录入方式单选按钮数组</zh_cn>
   * <zh_tw>錄入方式單選按鈕數組</zh_tw>
   */
  protected inputMethodElementArray: Array<HTMLInputElement>;
  /**
   * <en_us>Init entry method radio button element array.</en_us>
   * <zh_cn>初始化录入方式单选按钮数组</zh_cn>
   * <zh_tw>初始化錄入方式單選按鈕數組</zh_tw>
   */
  protected initInputMethodElements: () => void;
  /**
   * <en_us>Font Size radio button element array.</en_us>
   * <zh_cn>字号单选按钮数组</zh_cn>
   * <zh_tw>字型大小單選按鈕數組</zh_tw>
   */
  protected fontSizeElementArray: Array<HTMLInputElement>;
  /**
   * <en_us>Init font size radio button element array.</en_us>
   * <zh_cn>初始化字号单选按钮数组</zh_cn>
   * <zh_tw>初始化字型大小單選按鈕數組</zh_tw>
   */
  protected initFontSizeElements: () => void;
  /**
   * <en_us>Color radio button element array.</en_us>
   * <zh_cn>颜色单选按钮数组</zh_cn>
   * <zh_tw>顏色單選按鈕數組</zh_tw>
   */
  protected colorElementArray: Array<HTMLInputElement>;
  /**
   * <en_us>Init color radio button element array.</en_us>
   * <zh_cn>初始化颜色单选按钮数组</zh_cn>
   * <zh_tw>初始化顏色單選按鈕數組</zh_tw>
   */
  protected initColorElements: () => void;
  private pinyinArrayWithoutTone;
  private isPinyinBill;
  private splitPinyin;
  private fixPinyinArray;
  protected countDataAndComputedData: () => void;
  protected getRandomizedCopybooks: () => Array<{
    chinese: string;
    pinyin: string;
  }>;
  protected updateOtherData: (newData: any) => void;
  private idOrClassPrefix;
  protected textareaChinese: HTMLTextAreaElement;
  protected textareaPinyin: HTMLTextAreaElement;
  protected textareaChineseAndPinyin: HTMLTextAreaElement;
  initCoreElements: () => void;
  private updateCopybookData;
  private updateChineseAndPinyinTextarea;
  private updateChineseOrPinyinTextarea;
  private updateCopybooks;
  protected onRadioOptionChanged: (
    propertyName: string,
    value: string | boolean | number,
  ) => void;
  private appendCopybookOfGrade1Term1;
  private appendCopybookOfGrade1Term2;
  private appendCopybookOfGrade2Term1;
}
