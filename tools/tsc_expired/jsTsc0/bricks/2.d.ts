/// <reference path="../../../../src/types/const.d.ts" />
/// <reference path="../../../../src/types/dom.d.ts" />
/// <reference path="../../../../src/types/storage.d.ts" />
/// <reference path="../../../../src/types/utils.d.ts" />
/// <reference path="../../../../src/types/brickWithTableBase.d.ts" />
declare type QuestionAndAnswerType = {
  question: string;
  questionFull: string;
  answer: string;
  answerFull: string;
};
declare type RowsInfo = {
  rowsOccupied: number;
  rows: Array<HTMLDivElement>;
};
declare type ExhaustibleItemType = {
  kind: string;
  list: Array<QuestionAndAnswerType>;
  countPerSet: number;
};
declare type AMultiplyBType = {
  A: number;
  B: number;
  aMultiplyB: number;
};
/**
 * <en>Math Stage Information</en>
 * <zh_cn>数学闯关信息</zh_cn>
 * <zh_tw>數學闖關資訊</zh_tw>
 */
declare type MathStageInfo = {
  /**
     * <en>Kind</en>
     * <zh_cn>类型</zh_cn>
     * <zh_tw>類型</zh_tw>
     */
  kind: string;
  /**
     * <en>Catalog</en>
     * <zh_cn>大类</zh_cn>
     * <zh_tw>大類</zh_tw>
     */
  catalog: string;
  /**
     * <en>Scope</en>
     * <zh_cn>范围</zh_cn>
     * <zh_tw>範圍</zh_tw>
     */
  scope: string;
  /**
     * <en>Rows</en>
     * <zh_cn>行数</zh_cn>
     * <zh_tw>行數</zh_tw>
     */
  rows: number;
  /**
     * <en>Count Per Row</en>
     * <zh_cn>每行题目数</zh_cn>
     * <zh_tw>每行題目數</zh_tw>
     */
  countPerRow: number;
  /**
     * <en>Item Row Count</en>
     * <zh_cn>每題占用行数</zh_cn>
     * <zh_tw>每題佔用行數</zh_tw>
     */
  rowsOccupied: number;
  /**
     * <en>Item Count Per Page</en>
     * <zh_cn>每頁題目行數</zh_cn>
     * <zh_tw>每頁題目行數</zh_tw>
     */
  rowCountPerPage: number;
  /**
     * <en>Independent Pagination</en>
     * <zh_cn>独立分页</zh_cn>
     * <zh_tw>獨立分頁</zh_tw>
     */
  independentPagination: boolean;
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
 * 功能：生成数学阶段性闯关题目及配套答案
 * 初建：2022-11-27 安启
 * 历史：2022-09-30
 * 参考：P:/ecs_person/websites/sonya.cc/www/96_codes/00006_mathExercise/index.htm
 * 			P:\ecs_person\websites\sonya.cc\www\96_codes\00006_mathExercise
 * 说明：
 * 原页面参数：
 * 1. 边距：上、左
 * 2. 份数
 * 3. 字体
 * 4. 字号：页标题、页副标题、题目、页脚（隐藏）
 * 5. 题目类型
 *
 * 新设计：
 * 1. 锁定字体：'Times New Roman', 'KaiTi', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
 * 2. 锁定字号：根据报表页行高反算
 * 3. 锁定页标题与副标题行：暂定占用三实际行，页标题2行，副标题1行。左上角edu.sonya.cc及二维码，右上角页序及分类（题目页省略“题目”字样，答案页加“答案”）
 * 4. 每个类型隐藏以下信息：每行题目数、每行实际占用行数
 * 5. 列表与表格：类型（隐藏） 计算类型（只读） 范围（只读） 行数 独立分页 文本样式
 * 6. 隐藏页面方向，A3自动锁定横向，A4自动锁定纵向
 * 7. 页面级参数：
 * 		粗线样式（分隔题目）
 * 		细线样式（分隔题目与答案，或同一题目的不同答案）
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
  protected updateOtherDataLevel3: (newData: any) => void;
  private initExhaustibleAMultiplyBInfo;
  private initPlusOrSubtractDictionaryNotGreatThan100Array;
  private initExhaustibleArray;
  private exhaustibleAMultiplyBInfo;
  /** OK
     * A+B=C
     */
  private fillExhaustibleArray1;
  /** OK
     * A-B=C
     */
  private fillExhaustibleArray2;
  /** OK
     * A+B=C D-E=F
     */
  private fillExhaustibleArray3;
  /** OK
     * A×B=C
     */
  private fillExhaustibleArray4;
  /** OK
     * A+B+C=10/20/n
     */
  private fillExhaustibleArray5;
  /**
     * 计算data和computedData数据
     */
  protected countDataAndComputedData: () => void;
  /** OK
     *
     * @param questionPageStartHtml
     * @param answerPageStartHtml
     * @returns
     */
  private getReportHtml;
  /** OK
     *
     * @param rowsOccupied
     * @param rows
     * @param pageStartHtml
     * @returns
     */
  private getIndependentPaginationHtml;
  /** */
  private smallRowCountPerPage;
  private defaultRowCountPerPage;
  private defaultRowsOccupied;
  /** OK
     *
     * @param rowArray
     * @param pageStartHtml
     * @returns
     */
  private getDependentPagingHtml;
  private plusOrSubtractDictionaryNotGreatThan100Array;
  private getAddendWithCarry;
  private getAddendWithoutCarry;
  private getSubtractorWithDebitMinus;
  private getSubtractorWithoutDebitMinus;
  /** OK
     * 获得三数相加（0-2次进位加）相关加数与和
     * @param has 有进位加
     * @returns 进位加的三个加数与和
     */
  private getMaybeCarryTwiceNumbers;
  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3;
  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4;
  private questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6;
  private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
  private questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
  private questionElementHtmlAppendStart8;
  private questionElementHtmlAppendStart6;
  private questionElementHtmlAppendStart4;
  private questionElementHtmlAppendStart3;
  private fillElementArrayOfAPlusB;
  private getHtmlOfAPlusB;
  private getSimleHtmlOfAMultiplyB;
  private isOnlyFirstIsNotZero;
  private getHtmlOfAMultiplyB;
  private readonly eduDigitArray;
  private fillElementArrayOfASubtractB;
  private getDebitHtml;
  private getDebitHtmlOfASubstractB;
  private fillElementArrayOfAPlusBThenC;
  private fillElementArrayOfASubtractBThenC;
  private fillElementArrayOfASubtractBThenPlusC;
  private fillElementArrayOfAPlusBThenSubtractC;
  /** OK
     *
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     * @returns
     */
  private appendReportElements;
  /** OK
     * A+B=C
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic1;
  /** OK
     * A-B=C
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic2;
  /** OK
     * A+B=C D-E=F
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic3;
  /** OK
     * A+B+C=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic4;
  /**
     * A-B-C=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic5;
  /**
     * A±B±C=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic6;
  private countByArithmetic6Or7;
  /**
     * A±(B±C)=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic7;
  /**
     * A×B±C=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic8;
  private countByArithmetic8Or9;
  /**
     * A±B×C=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic9;
  /** OK
     * A×(B±C)=D
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic10;
  /** OK
     * A+B+C=10/20/n
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic11;
  /**
     * A+B+C+D+E=10+n/20+n/n
     * @param info
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private countByArithmetic12;
  /**  */
  private exhaustibleArray;
  /** OK
          生成min到max间整数随机数——包含min和max
          @params min 最小值（整数）
          @params max 最大值（整数）
          @return [min, max]范围内的整数
      */
  private getIntegerRandom;
  /** OK
     *
     * @param onlyMentalArithmetic
     * @param item
     * @param kind
     * @param countPerRow
     * @param questionElementArray
     * @param answerElementArray
     */
  private fillElementList;
  private fillElementListCore;
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
     * 事件：纸张大小更改后
     * @param newPageSize
     * @returns
     */
  protected onPageSizeChanged: (newPageSize: string) => void;
  /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
  protected getUsableList: () => Array<object>;
  /** OK
     * 初始化表格上方控件（通用两行控件除外）
     */
  protected initCoreElementsBeforeTable: () => void;
  private pageSubjectFontSizeElement;
  private questionFontSizeElement;
  private onlyMentalArithmeticRadioArray;
  private yearElement;
  private monthElement;
  private dayElement;
  /** OK
     *
     * @param wrapElement
     */
  private initDateElements;
  /** OK
     * 初始化表格下方的核心控件
     */
  protected initCoreElementsAfterTable: () => void;
  /** OK
     *
     * @param exhaustibleItem
     * @param questionCount
     * @param onlyMentalArithmetic
     * @param questionRowsArray
     * @param answerRowsArray
     */
  private fillExhaustibleList;
  private fillRowsArray;
  /** OK
     *
     * @param info
     * @param kindArray
     * @param buttonList
     */
  private addCommonItem;
  /** OK
     *
     * @param label
     * @param buttonList
     * @param usableList
     * @returns
     */
  private appendUsableItem;
}
declare const brickCore: BrickCore;
