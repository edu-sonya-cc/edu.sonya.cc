declare namespace edu.sonya.cc {
  /**
   * <en_us>Dice Type</en_us>
   * <zh_cn>骰子类型</zh_cn>
   * <zh_tw>骰子類型</zh_tw>
   */
  export enum DiceKind {
    /**
     * <en_us>None</en_us>
     * <zh_cn>无</zh_cn>
     * <zh_tw>無</zh_tw>
     */
    none = 0,
    /**
     * <en_us>4-sided dice</en_us>
     * <zh_cn>4面骰子</zh_cn>
     * <zh_tw>4面骰子</zh_tw>
     */
    four = 1,
    /**
     * <en_us>6-sided dice</en_us>
     * <zh_cn>6面骰子</zh_cn>
     * <zh_tw>6面骰子</zh_tw>
     */
    six = 2,
    /**
     * <en_us>8-sided dice</en_us>
     * <zh_cn>8面骰子</zh_cn>
     * <zh_tw>8面骰子</zh_tw>
     */
    eight = 4,
    /**
     * <en_us>12-sided dice</en_us>
     * <zh_cn>12面骰子</zh_cn>
     * <zh_tw>12面骰子</zh_tw>
     */
    twelve = 8,
    /**
     * <en_us>20-sided dice</en_us>
     * <zh_cn>20面骰子</zh_cn>
     * <zh_tw>20面骰子</zh_tw>
     */
    twenty = 16,
    /**
     * <en_us>24-sided dice</en_us>
     * <zh_cn>24面骰子</zh_cn>
     * <zh_tw>24面骰子</zh_tw>
     */
    twentyFour = 32,
  }
  /**
   * <en_us>Count of Dice Type</en_us>
   * <zh_cn>骰子类型数量</zh_cn>
   * <zh_tw>骰子類型數量</zh_tw>
   */
  export const DiceKindCount = 8;
  /**
   * <en_us>Default Value of Dice Type</en_us>
   * <zh_cn>骰子类型默认值</zh_cn>
   * <zh_tw>骰子類型默認值</zh_tw>
   */
  export const DefaultDiceKind = 63;
  /**
   * <en_us>Dice Generation Parameters</en_us>
   * <zh_cn>骰子生成参数</zh_cn>
   * <zh_tw>骰子生成參數</zh_tw>
   */
  export interface DiceParameter {
    /**
     * <en_us>Id</en_us>
     * <zh_cn>id</zh_cn>
     * <zh_tw>id</zh_tw>
     */
    id: string;
    /**
     * <en_us>Dice Type</en_us>
     * <zh_cn>骰子类型</zh_cn>
     * <zh_tw>骰子類型</zh_tw>
     */
    diceKind: DiceKind;
    /**
     * <en_us>Side Length</en_us>
     * <zh_cn>边长</zh_cn>
     * <zh_tw>邊長</zh_tw>
     */
    sideLength: number;
    /**
     * <en_us>Contents of all sides</en_us>
     * <zh_cn>各面内容</zh_cn>
     * <zh_tw>各面內容</zh_tw>
     */
    contents: Array<I18nable | string>;
    /**
     * <en_us>Outside Boundary Line Style</en_us>
     * <zh_cn>外边界线样式</zh_cn>
     * <zh_tw>外邊界線樣式</zh_tw>
     */
    outerLineStyle: string;
    /**
     * <en_us>Interior Line Style</en_us>
     * <zh_cn>内部线样式</zh_cn>
     * <zh_tw>內部線樣式</zh_tw>
     */
    innerLineStyle: string;
    /**
     * <en_us>Text Style</en_us>
     * <zh_cn>文本样式</zh_cn>
     * <zh_tw>文字樣式</zh_tw>
     */
    textStyle: string;
    /**
     * <en_us>Other parameters</en_us>
     * <zh_cn>其它参数</zh_cn>
     * <zh_tw>其它參數</zh_tw>
     */
    options: object;
  }
  type ViewBoxType = {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  type RotateType = "auto" | "auto-reverse" | number;
  type SvgTextInfo = {
    content: I18nable | string;
    x: number;
    y: number;
    rotate: RotateType;
  };
  /**
   * <en_us>Dice Generation Result</en_us>
   * <zh_cn>骰子生成结果</zh_cn>
   * <zh_tw>骰子生成結果</zh_tw>
   */
  export interface DiceResult {
    /**
     * <en_us>Svg Element Id</en_us>
     * <zh_cn>svg元素编号</zh_cn>
     * <zh_tw>svg元素編號</zh_tw>
     */
    id: string;
    /**
     * <en_us>Svg Element or Outer Wrapper Element</en_us>
     * <zh_cn>svg元素或外层元素</zh_cn>
     * <zh_tw>svg元素或外層元素</zh_tw>
     */
    svg: HTMLElement | SVGElement;
    /**
     * <en_us>css</en_us>
     * <zh_cn>样式表</zh_cn>
     * <zh_tw>樣式表</zh_tw>
     */
    css: string;
  }
  /**
   * <en_us>Dice Generator</en_us>
   * <zh_cn>骰子生成器</zh_cn>
   * <zh_tw>骰子生成器</zh_tw>
   */
  export class DiceGenerator {
    /**
     * <en_us>Generate dice in batch</en_us>
     * <zh_cn>批量生成骰子</zh_cn>
     * <zh_tw>批量生成骰子</zh_tw>
     * @param createParameters
     * <en_us>Arrays: creating parameters</en_us>
     * <zh_cn>数组：创建参数</zh_cn>
     * <zh_tw>數組：創建參數</zh_tw>
     * @returns
     * <en_us>Generate results in array format, used to combine complete html</en_us>
     * <zh_cn>生成结果，为数组格式，用于组合完整的html</zh_cn>
     * <zh_tw>生成結果，為數組格式，用於組合完整的html</zh_tw>
     */
    batchCreate(createParameters: Array<DiceParameter>): Array<DiceResult>;
    /**
     * <en_us>Generate a single dice</en_us>
     * <zh_cn>生成单个骰子</zh_cn>
     * <zh_tw>生成單個骰子</zh_tw>
     * @param param0
     * <en_us>Deconstructed creation parameters</en_us>
     * <zh_cn>已解构的创建参数</zh_cn>
     * <zh_tw>已解構的創建參數</zh_tw>
     * @returns
     * <en_us>Generate results, used to combine complete html</en_us>
     * <zh_cn>生成结果，用于组合完整的html</zh_cn>
     * <zh_tw>生成結果，用於組合完整的html</zh_tw>
     */
    create(
      {
        id,
        diceKind,
        sideLength: SIDE_LENGTH,
        contents: CONTENTS,
        outerLineStyle: OUTER_LINE_STYLE,
        innerLineStyle: INNER_LINE_STYLE,
        textStyle: TEXT_STYLE,
        options: OPTIONS,
      }: DiceParameter,
    ): DiceResult;
    private createSvg;
    drawGraphsOfFourSidedDice(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      },
      OPTIONS: object,
      mmToPxScale: number,
    ): void;
    drawTextsOfFourSidedDice(
      infos: {
        content: any;
        x: number;
        y: number;
        rotate: number | "auto" | "auto-reverse";
      }[],
      SIDE_LENGTH: number,
      CONTENTS: any[],
    ): void;
    drawGraphsOfSixSidedDice(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      },
      OPTIONS: object,
      mmToPxScale: number,
    ): void;
    private drawTextsOfSixSidedDice;
    private drawGraphsOfEightSidedDice;
    private drawTextsOfEightSidedDice;
    drawGraphsOfTwelveSidedDice(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      },
      OPTIONS: object,
      mmToPxScale: number,
    ): void;
    drawTextsOfTwelveSidedDice(infos: {
      content: any;
      x: number;
      y: number;
      rotate: number | "auto" | "auto-reverse";
    }[], SIDE_LENGTH: number): void;
    drawGraphsOfTwentySidedDice(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      },
      OPTIONS: object,
      mmToPxScale: number,
    ): void;
    drawTextsOfTwentySidedDice(infos: {
      content: any;
      x: number;
      y: number;
      rotate: number | "auto" | "auto-reverse";
    }[], SIDE_LENGTH: number): void;
    getSinByAngle(angle: number): number;
    getCosByAngle(angle: number): number;
    drawGraphsOfTwentyFourSidedDice(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: {
        left: number;
        right: number;
        top: number;
        bottom: number;
      },
      OPTIONS: object,
      mmToPxScale: number,
    ): void;
    drawTextsOfTwentyFourSidedDice(infos: {
      content: any;
      x: number;
      y: number;
      rotate: number | "auto" | "auto-reverse";
    }[], SIDE_LENGTH: number): void;
    appendLine(
      svg: SVGElement,
      STYLE: string,
      x1: number,
      x2: number,
      y1: number,
      y2: number,
      viewBox: ViewBoxType | null,
    ): void;
    appendCircle(
      svg: SVGElement,
      STYLE: string,
      cx: number,
      cy: number,
      radius: number,
      viewBox: ViewBoxType | null,
    ): void;
    appendTspan(
      text: SVGTextElement,
      STYLE: string,
      CHAR: string,
      dx: number,
      dy: number,
      rotate: RotateType,
    ): void;
    appendText(
      svg: SVGElement,
      STYLE: string,
      CONTENT: string,
      x: number,
      y: number,
      rotate: RotateType,
      viewBox: ViewBoxType | null,
    ): void;
    setSvgTextInfo(
      info: SvgTextInfo,
      x: number,
      y: number,
      rotate: RotateType,
    ): void;
  }
  export {};
}
declare const _default: typeof edu.sonya.cc;
export default _default;
