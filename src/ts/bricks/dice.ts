// import { I18nable, createElement } from '../dom';
// import { DPIHelper } from '../DPIHelper';

/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
// namespace edu.sonya.cc {
namespace edu {
  export namespace sonya {
    export namespace cc {
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

        // 240602: add this
        /**
         * <en_us>10-sided dice</en_us>
         * <zh_cn>10面骰子</zh_cn>
         * <zh_tw>10面骰子</zh_tw>
         */
        ten = 64,
      }

      // 240602: 8 → 9
      /**
       * <en_us>Count of Dice Type</en_us>
       * <zh_cn>骰子类型数量</zh_cn>
       * <zh_tw>骰子類型數量</zh_tw>
       */
      export const DiceKindCount = 9;

      // 240602: 63 → 127
      /**
       * <en_us>Default Value of Dice Type</en_us>
       * <zh_cn>骰子类型默认值</zh_cn>
       * <zh_tw>骰子類型默認值</zh_tw>
       */
      export const DefaultDiceKind = 127;

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

      // https://blog.csdn.net/yiyueqinghui/article/details/108004272
      const SVG_NS = "http://www.w3.org/2000/svg";
      const SVG_XLINKNS = "http://www.w3.org/1999/xlink";

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
        public batchCreate(
          createParameters: Array<DiceParameter>,
        ): Array<DiceResult> {
          createParameters.forEach((createParameter, index) => {
            if (createParameter.id.length === 0) {
              createParameter.id = `svg_index`;
            }
          });

          return createParameters.map((createParameter) =>
            this.create(createParameter)
          );
        }

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
        public create({
          id,
          diceKind,
          sideLength: SIDE_LENGTH,
          contents: CONTENTS,
          outerLineStyle: OUTER_LINE_STYLE,
          innerLineStyle: INNER_LINE_STYLE,
          textStyle: TEXT_STYLE,
          options: OPTIONS,
        }: DiceParameter): DiceResult {
          if (id.length === 0) id = "svg_0";

          let FIXED_SIDE_LENGTH = SIDE_LENGTH;
          let nested = false;
          switch (diceKind) {
            case DiceKind.twentyFour:
              FIXED_SIDE_LENGTH = 25;
              nested = true;
              break;
            default:
              break;
          }

          const svg = this.createSvg();
          svg.setAttribute("id", id);

          const viewBox = {
            left: 999999,
            right: 0,
            top: 999999,
            bottom: 0,
          };
          const infos = [] as Array<SvgTextInfo>;
          switch (diceKind) {
            case DiceKind.four:
              CONTENTS.forEach((content: I18nable | string) => {
                for (let i = 0; i < 3; ++i) {
                  infos.push({ content, x: 0, y: 0, rotate: 0 });
                }
              });
              break;
            // case DiceKind.six:
            //   break;
            // case DiceKind.eight:
            //   break;
            // case DiceKind.twelve:
            //   break;
            // case DiceKind.twenty:
            //   break;
            // case DiceKind.twentyFour:
            //   break;
            default:
              CONTENTS.forEach((content: I18nable | string) => {
                infos.push({ content, x: 0, y: 0, rotate: 0 });
              });
              break;
          }

          const mmToPxScale = (new DPIHelper()).getMmToPxScale();
          switch (diceKind) {
            case DiceKind.four:
              this.drawGraphsOfFourSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfFourSidedDice(infos, FIXED_SIDE_LENGTH, CONTENTS);
              break;
            case DiceKind.six:
              this.drawGraphsOfSixSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfSixSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.eight:
              this.drawGraphsOfEightSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfEightSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.ten:
              this.drawGraphsOfTenSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTenSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twelve:
              this.drawGraphsOfTwelveSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwelveSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twenty:
              this.drawGraphsOfTwentySidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwentySidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            case DiceKind.twentyFour:
              this.drawGraphsOfTwentyFourSidedDice(
                svg,
                FIXED_SIDE_LENGTH,
                INNER_LINE_STYLE,
                OUTER_LINE_STYLE,
                viewBox,
                OPTIONS,
                mmToPxScale,
              );
              this.drawTextsOfTwentyFourSidedDice(infos, FIXED_SIDE_LENGTH);
              break;
            default:
              break;
          }
          infos.forEach(({ content, x, y, rotate }) => {
            this.appendText(
              svg,
              TEXT_STYLE,
              content as string,
              x,
              y,
              rotate,
              null,
            );
          });

          const width = `${viewBox.right}mm`;
          const height = `${viewBox.bottom}mm`;
          svg.setAttribute("width", width);
          svg.setAttribute("height", height);
          // svg.setAttribute('style', `width:${width};height:${height};`);

          // const outerSvg = nested && (FIXED_SIDE_LENGTH !== SIDE_LENGTH) ? this.createSvg(): null;
          const outerSvg = createElement("wrap" as keyof HTMLElementTagNameMap); // as HTMLDivElement;
          outerSvg.appendChild(svg);
          outerSvg.setAttribute("id", id.concat("_wrapper"));
          if (FIXED_SIDE_LENGTH !== SIDE_LENGTH) {
            const scale = SIDE_LENGTH / FIXED_SIDE_LENGTH;

            const widthOuterSvg = `${scale * viewBox.right}mm`;
            const heightOuterSvg = `${scale * viewBox.bottom}mm`;

            const transformScale = mmToPxScale * (scale - 1) / 2;
            outerSvg.setAttribute(
              "style",
              `width:${widthOuterSvg};height:${heightOuterSvg};display:inline-block;`,
            );
            svg.setAttribute(
              "transform",
              `translate(${viewBox.right * transformScale}, ${
                viewBox.bottom *
                transformScale
              }) scale(${scale}, ${scale})`,
            );
            svg.setAttribute("transform-origin", "center");
          }

          const css =
            "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
          return { id, svg: nested ? outerSvg : svg, css };
        }

        private createSvg = (): SVGElement => {
          const svg = document.createElementNS(SVG_NS, "svg") as SVGElement;
          svg.setAttribute("version", "1.1");
          svg.setAttribute("xmlns", SVG_NS);
          svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
          return svg;
        };

        drawGraphsOfFourSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;

          let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

          // 内部横线
          x1 = SIDE_LENGTH * 0.5,
            x2 = x1 + SIDE_LENGTH,
            y1 = HEIGHT_OF_ONE,
            y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = 0, x2 = x1 + SIDE_LENGTH, y1 += HEIGHT_OF_ONE, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          // 内部左下斜线
          x1 = SIDE_LENGTH, x2 = SIDE_LENGTH * 0.5, y1 = 0, y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH * 0.5,
            x2 += SIDE_LENGTH * 0.5,
            y1 += HEIGHT_OF_ONE,
            y2 += HEIGHT_OF_ONE;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          // 内部右下斜线
          x1 = SIDE_LENGTH * 0.5,
            x2 = SIDE_LENGTH,
            y1 = HEIGHT_OF_ONE,
            y2 = HEIGHT_OF_TWO;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          const EXTNED_SCALE = 0.15;
          const EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          const OFFSET_X = EXTNED_LENGTH * 0.5;
          const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);

          // 外部线
          x1 = 0,
            x2 = SIDE_LENGTH * 0.5,
            y1 = HEIGHT_OF_TWO,
            y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 -= OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 = SIDE_LENGTH * 1 - EXTNED_LENGTH, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 += HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2,
            x2 = SIDE_LENGTH * 2 + OFFSET_X,
            y1 = y2,
            y2 = HEIGHT_OF_TWO - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 -= 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 = OFFSET_X, y1 = y2, y2 -= 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x2, x2 = 0, y1 = y2, y2 = HEIGHT_OF_TWO;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, viewBox);
        }

        drawTextsOfFourSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
          CONTENTS: any[],
        ) {
          // 12 text elements.

          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 25.0 / 25, SIDE_LENGTH * 18.0 / 25, 0);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 21.0 / 25, SIDE_LENGTH * 9.5 / 25, -120);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 31.0 / 25, SIDE_LENGTH * 11.5 / 25, 120);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 19.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 31.5 / 25, 60);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 12.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 32.5 / 25, SIDE_LENGTH * 32.0 / 25, -120);
          // this.setSvgTextInfo(infos[8], SIDE_LENGTH * 20.0 / 25, SIDE_LENGTH * 30.0 / 25, -60);
          // this.setSvgTextInfo(infos[9], SIDE_LENGTH * 27.0 / 25, SIDE_LENGTH * 22.0 / 25, 180);
          // this.setSvgTextInfo(infos[10], SIDE_LENGTH * 9.5 / 25, SIDE_LENGTH * 31.5 / 25, -120);
          // this.setSvgTextInfo(infos[11], SIDE_LENGTH * 42.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);

          if (CONTENTS.join(",") === "ˉ,ˊ,ˇ,ˋ") {
            this.setSvgTextInfo(
              infos[0],
              SIDE_LENGTH * 24.5 / 25,
              SIDE_LENGTH * 22.5 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[1],
              SIDE_LENGTH * 20.0 / 25,
              SIDE_LENGTH * 13.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[2],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 15.0 / 25,
              120,
            );

            this.setSvgTextInfo(
              infos[3],
              SIDE_LENGTH * 37.5 / 25,
              SIDE_LENGTH * 44.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[4],
              SIDE_LENGTH * 18.5 / 25,
              SIDE_LENGTH * 36.0 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[5],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 34.0 / 25,
              60,
            );

            this.setSvgTextInfo(
              infos[6],
              SIDE_LENGTH * 12.5 / 25,
              SIDE_LENGTH * 44.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[7],
              SIDE_LENGTH * 32.0 / 25,
              SIDE_LENGTH * 35.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[8],
              SIDE_LENGTH * 20.0 / 25,
              SIDE_LENGTH * 33.0 / 25,
              -60,
            );

            this.setSvgTextInfo(
              infos[9],
              SIDE_LENGTH * 27.5 / 25,
              SIDE_LENGTH * 25.0 / 25,
              180,
            );
            this.setSvgTextInfo(
              infos[10],
              SIDE_LENGTH * 8.0 / 25,
              SIDE_LENGTH * 35.0 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[11],
              SIDE_LENGTH * 42.0 / 25,
              SIDE_LENGTH * 36.0 / 25,
              120,
            );
          } else {
            this.setSvgTextInfo(
              infos[0],
              SIDE_LENGTH * 24.5 / 25,
              SIDE_LENGTH * 19.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[1],
              SIDE_LENGTH * 21.0 / 25,
              SIDE_LENGTH * 10.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[2],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 12.5 / 25,
              120,
            );

            this.setSvgTextInfo(
              infos[3],
              SIDE_LENGTH * 37.5 / 25,
              SIDE_LENGTH * 41.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[4],
              SIDE_LENGTH * 18.5 / 25,
              SIDE_LENGTH * 34.0 / 25,
              120,
            );
            this.setSvgTextInfo(
              infos[5],
              SIDE_LENGTH * 30.0 / 25,
              SIDE_LENGTH * 32.5 / 25,
              60,
            );

            this.setSvgTextInfo(
              infos[6],
              SIDE_LENGTH * 12.5 / 25,
              SIDE_LENGTH * 41.0 / 25,
              0,
            );
            this.setSvgTextInfo(
              infos[7],
              SIDE_LENGTH * 32.5 / 25,
              SIDE_LENGTH * 32.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[8],
              SIDE_LENGTH * 19.5 / 25,
              SIDE_LENGTH * 31.0 / 25,
              -60,
            );

            this.setSvgTextInfo(
              infos[9],
              SIDE_LENGTH * 26.5 / 25,
              SIDE_LENGTH * 23.5 / 25,
              180,
            );
            this.setSvgTextInfo(
              infos[10],
              SIDE_LENGTH * 8.5 / 25,
              SIDE_LENGTH * 32.5 / 25,
              -120,
            );
            this.setSvgTextInfo(
              infos[11],
              SIDE_LENGTH * 41.0 / 25,
              SIDE_LENGTH * 34.0 / 25,
              120,
            );
          }
        }

        drawGraphsOfSixSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const SIDE_LENGTH_PX = SIDE_LENGTH * mmToPxScale;

          const duckTongueScale = 0.5;
          const duckTongueHeightPx = SIDE_LENGTH_PX * duckTongueScale;
          const duckTongueHeight = SIDE_LENGTH * duckTongueScale;

          const pasteRegionScale = 0.75;
          const pasteRegionHeightPx = SIDE_LENGTH_PX * pasteRegionScale;
          const pasteRegionHeight = SIDE_LENGTH * pasteRegionScale;

          const offsetScale = 0.1;
          const offsetX = SIDE_LENGTH_PX * offsetScale;
          const pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
          console.log(SIDE_LENGTH, mmToPxScale, SIDE_LENGTH_PX);

          const path = document.createElementNS(
            SVG_NS,
            "path",
          ) as SVGPathElement;
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            `M 0, ${duckTongueHeightPx + SIDE_LENGTH_PX} `
              .concat(
                `h ${SIDE_LENGTH_PX * 2} `,
                `l ${offsetX}, -${pasteRegionHeightPx} `,
                `h ${pasteRegionWidth} `,
                `l ${offsetX}, ${pasteRegionHeightPx} `,
                `v -${SIDE_LENGTH_PX} `,
                `l ${offsetX}, -${duckTongueHeightPx} `,
                `h ${pasteRegionWidth} `,
                `l ${offsetX}, ${duckTongueHeightPx} `,
                `v ${SIDE_LENGTH_PX} `,
                `l ${offsetX}, -${pasteRegionHeightPx} `,
                `h ${pasteRegionWidth} `,
                `l ${offsetX}, ${pasteRegionHeightPx} `,
                // `h ${SIDE_LENGTH_PX} `,
                `v ${SIDE_LENGTH_PX} `,
                `h -${SIDE_LENGTH_PX * 2} `,
                `l -${offsetX}, ${pasteRegionHeightPx} `,
                `h -${pasteRegionWidth} `,
                `l -${offsetX}, -${pasteRegionHeightPx} `,
                `v ${SIDE_LENGTH_PX} `,
                `l -${offsetX}, ${duckTongueHeightPx} `,
                `h -${pasteRegionWidth} `,
                `l -${offsetX}, -${duckTongueHeightPx} `,
                `v -${SIDE_LENGTH_PX} `,
                `l -${offsetX}, ${pasteRegionHeightPx} `,
                `h -${pasteRegionWidth} `,
                `l -${offsetX}, -${pasteRegionHeightPx} `,
                " z",
              ),
          );
          svg.appendChild(path);

          let X1 = 0,
            X2 = SIDE_LENGTH * 1,
            X3 = SIDE_LENGTH * 2,
            X4 = SIDE_LENGTH * 3,
            X5 = SIDE_LENGTH * 4,
            X6 = SIDE_LENGTH * 5;
          let Y1 = 0,
            Y2 = duckTongueHeight,
            Y4 = Y2 + SIDE_LENGTH,
            Y5 = Y4 + SIDE_LENGTH,
            Y7 = Y5 + SIDE_LENGTH,
            Y8 = Y7 + duckTongueHeight,
            Y3 = Y4 - pasteRegionHeight,
            Y6 = Y5 + pasteRegionHeight;
          // 内部线
          // this.appendLine(svg, INNER_LINE_STYLE, X3, X4, Y2, Y2, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X2, X5, Y4, Y4, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);

          // this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
          // this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);

          this.appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
          this.appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
          this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);

          this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
          this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);

          viewBox.left = 0;
          viewBox.top = 0;
          viewBox.right = SIDE_LENGTH * 5;
          viewBox.bottom = SIDE_LENGTH * 3 + SIDE_LENGTH * duckTongueScale * 2;
        }
        private drawTextsOfSixSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          // // font-size: 5mm;
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 75.0 / 25, 180);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 113.5 / 25, 90);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 52.5 / 25, 0);

          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 52.0 / 25, 180);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 72.5 / 25, SIDE_LENGTH * 40.0 / 25, -90);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 77.5 / 25, 0);

          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 77.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 62.5 / 25,
            SIDE_LENGTH * 100.0 / 25,
            90,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 62.5 / 25,
            SIDE_LENGTH * 52.5 / 25,
            -90,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 77.5 / 25,
            0,
          );
        }

        private drawGraphsOfEightSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
          const BOTTOM = HEIGHT_OF_ONE * 3;

          // 内部横线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            0,
            SIDE_LENGTH * 2,
            HEIGHT_OF_ONE,
            HEIGHT_OF_ONE,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 0.5,
            SIDE_LENGTH * 2.5,
            HEIGHT_OF_TWO,
            HEIGHT_OF_TWO,
            null,
          );

          // 内部左下斜线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1,
            SIDE_LENGTH * 0.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 2,
            SIDE_LENGTH * 1.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 3,
            SIDE_LENGTH * 2,
            HEIGHT_OF_ONE,
            BOTTOM,
            null,
          );

          // 内部右下斜线
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1,
            SIDE_LENGTH * 1.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 1.5,
            SIDE_LENGTH * 2.5,
            0,
            HEIGHT_OF_TWO,
            null,
          );
          this.appendLine(
            svg,
            INNER_LINE_STYLE,
            SIDE_LENGTH * 3,
            SIDE_LENGTH * 3.5,
            HEIGHT_OF_ONE,
            HEIGHT_OF_TWO,
            null,
          );

          const EXTNED_SCALE = 0.15;
          const EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          const OFFSET_X = EXTNED_LENGTH * 0.5;
          const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);

          let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

          // 外部线
          x1 = 0,
            x2 = OFFSET_X,
            y1 = HEIGHT_OF_ONE,
            y2 = HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 = SIDE_LENGTH - OFFSET_X, y1 = y2;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 = SIDE_LENGTH, y1 = y2, y2 = HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 += SIDE_LENGTH * 0.5, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 = 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2,
            x2 += SIDE_LENGTH * 0.5 - OFFSET_X,
            y1 = y2,
            y2 = HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 += SIDE_LENGTH + EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2,
            x2 += SIDE_LENGTH * 0.5 - EXTNED_LENGTH + OFFSET_X,
            y1 = y2,
            y2 += HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= SIDE_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 += OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2,
            x2 += EXTNED_LENGTH - SIDE_LENGTH * 0.5 - OFFSET_X,
            y1 = y2,
            y2 += HEIGHT_OF_ONE - OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= EXTNED_LENGTH, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= SIDE_LENGTH * 0.5, y1 = y2, y2 -= HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2, x2 -= SIDE_LENGTH - OFFSET_X * 2, y1 = y2, y2 += 0;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          x1 = x2,
            x2 -= OFFSET_X + SIDE_LENGTH * 0.5,
            y1 = y2,
            y2 -= OFFSET_Y + HEIGHT_OF_ONE;
          this.appendLine(svg, OUTER_LINE_STYLE, x1, x2, y1, y2, null);

          viewBox.right = SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
          viewBox.bottom = BOTTOM;
        }

        private drawTextsOfEightSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          // 8 text elements.
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 78.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 25.5 / 25, SIDE_LENGTH * 38.0 / 25, 0);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 50.0 / 25, SIDE_LENGTH * 38.0 / 25, 0);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 28.5 / 25, SIDE_LENGTH * 38.0 / 25, 180);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 39.0 / 25, 0);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 41.5 / 25, SIDE_LENGTH * 17.5 / 25, 180);

          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 37.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 78.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 25.5 / 25,
            SIDE_LENGTH * 38.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 53.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );

          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 50.0 / 25,
            SIDE_LENGTH * 38.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 28.5 / 25,
            SIDE_LENGTH * 38.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 75.0 / 25,
            SIDE_LENGTH * 39.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 41.5 / 25,
            SIDE_LENGTH * 17.5 / 25,
            180,
          );
        }

        private drawGraphsOfTenSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          // this.fixTextStyle(0.45);
          const { max, min, sin, cos, tan, atan, PI, abs } = Math;
          const {
            SIDE_LENGTH,
            svg,
            viewBox,
            appendLine,
            OUTER_LINE_STYLE,
            INNER_LINE_STYLE,
          } = this;
          const PASTE_SCALE = SIDE_LENGTH < 3
            ? 1
            : SIDE_LENGTH <= 10
            ? 0.5
            : 0.25;
          const PASTE_WIDTH = SIDE_LENGTH * PASTE_SCALE;
          const X_O1 = SIDE_LENGTH * 2.55;
          const Y_O1 = SIDE_LENGTH * 2.55;
          const ANGLE_SMALL_DEGREE = 50.22;
          const ANGLE_SMALL = 50.22 * PI / 180;
          const HALF_ANGLE_SMALL = ANGLE_SMALL * 0.5;
          const ANGLE_MIDDLE = 94.7 * PI / 180;
          const ANGLE_BIG = (PI - HALF_ANGLE_SMALL - ANGLE_MIDDLE) * 2;
          const ANGLE_90 = PI * 0.5;
          const ANGLE_EXTEND = 45 * PI / 180;
          const ANGLE_B1 = ANGLE_90 - HALF_ANGLE_SMALL;
          const ANGLE_B2 = ANGLE_MIDDLE - ANGLE_B1;
          const SIDE_V1 = SIDE_LENGTH * sin(ANGLE_B2);
          const SIDE_H1 = SIDE_LENGTH * cos(ANGLE_B2);
          const SIDE_LONG = SIDE_H1 / sin(HALF_ANGLE_SMALL);
          const SIDE_V2 = SIDE_LONG * sin(ANGLE_B1);
          const SIZE_LONG_MIDLINE = SIDE_V1 + SIDE_V2;
          const ANGLE_A1 = HALF_ANGLE_SMALL;
          const X_B1 = X_O1, Y_B1 = Y_O1 + SIZE_LONG_MIDLINE;
          const X_A1_DELTA = SIDE_LONG * sin(ANGLE_A1);
          const Y_A1_DELTA = SIDE_LONG * cos(ANGLE_A1);
          const X_A1 = X_O1 - X_A1_DELTA, X_C1 = X_O1 + X_A1_DELTA;
          const Y_A1 = Y_O1 + Y_A1_DELTA, Y_C1 = Y_O1 + Y_A1_DELTA;
          const ANGLE_D1 = ANGLE_SMALL;
          const X_D1 = X_O1 + SIZE_LONG_MIDLINE * sin(ANGLE_D1);
          const Y_D1 = Y_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_D1);
          const ANGLE_E1 = ANGLE_SMALL * 1.5;
          const X_E1 = X_O1 + SIDE_LONG * sin(ANGLE_E1);
          const Y_E1 = Y_O1 + SIDE_LONG * cos(ANGLE_E1);
          const ANGLE_F1 = ANGLE_SMALL * 2 - ANGLE_90;
          const X_F1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_F1);
          const Y_F1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_F1);
          const ANGLE_G1 = ANGLE_SMALL * 2.5 - ANGLE_90;
          const X_G1 = X_O1 + SIDE_LONG * cos(ANGLE_G1);
          const Y_G1 = Y_O1 - SIDE_LONG * sin(ANGLE_G1);
          const ANGLE_H1 = ANGLE_SMALL * 3 - ANGLE_90;
          const X_H1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_H1);
          const Y_H1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_H1);
          const ANGLE_I1 = PI - ANGLE_SMALL * 3.5;
          const X_I1 = X_O1 + SIDE_LONG * sin(ANGLE_I1);
          const Y_I1 = Y_O1 - SIDE_LONG * cos(ANGLE_I1);
          const ANGLE_J1 = ANGLE_SMALL * 4 - PI;
          const X_J1 = X_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_J1);
          const Y_J1 = Y_O1 - SIZE_LONG_MIDLINE * cos(ANGLE_J1);
          const ANGLE_K1 = ANGLE_SMALL * 4.5 - PI;
          const X_K1 = X_O1 - SIDE_LONG * sin(ANGLE_K1);
          const Y_K1 = Y_O1 - SIDE_LONG * cos(ANGLE_K1);
          const X_O2 = X_A1 + X_B1 - X_O1;
          const Y_O2 = Y_A1 + Y_B1 - Y_O1;
          const X_B2 = X_A1, Y_B2 = Y_A1;
          const X_C2 = X_B1, Y_C2 = Y_B1;
          const X_A2 = X_O2 * 2 - X_C2, Y_A2 = Y_C2;
          const ANGLE_D2 = ANGLE_SMALL;
          const X_D2 = X_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_D2);
          const Y_D2 = Y_O2 - SIZE_LONG_MIDLINE * cos(ANGLE_D2);
          const ANGLE_E2 = ANGLE_SMALL * 1.5;
          const X_E2 = X_O2 + SIDE_LONG * sin(ANGLE_E2);
          const Y_E2 = Y_O2 - SIDE_LONG * cos(ANGLE_E2);
          const ANGLE_F2 = ANGLE_SMALL * 2 - ANGLE_90;
          const X_F2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_F2);
          const Y_F2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_F2);
          const ANGLE_G2 = ANGLE_SMALL * 2.5 - ANGLE_90;
          const X_G2 = X_O2 + SIDE_LONG * cos(ANGLE_G2);
          const Y_G2 = Y_O2 + SIDE_LONG * sin(ANGLE_G2);
          const ANGLE_H2 = ANGLE_SMALL * 3 - ANGLE_90;
          const X_H2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_H2);
          const Y_H2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_H2);
          const ANGLE_I2 = PI - ANGLE_SMALL * 3.5;
          const X_I2 = X_O2 + SIDE_LONG * sin(ANGLE_I2);
          const Y_I2 = Y_O2 + SIDE_LONG * cos(ANGLE_I2);
          const ANGLE_J2 = ANGLE_SMALL * 4 - PI;
          const X_J2 = X_O2 - SIZE_LONG_MIDLINE * sin(ANGLE_J2);
          const Y_J2 = Y_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_J2);
          const ANGLE_K2 = ANGLE_SMALL * 4.5 - PI;
          const X_K2 = X_O2 - SIDE_LONG * sin(ANGLE_K2);
          const Y_K2 = Y_O2 + SIDE_LONG * cos(ANGLE_K2);
          const ANGLE_A2E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
          const X_A2E = X_A2 - PASTE_WIDTH * sin(ANGLE_A2E);
          const Y_A2E = Y_A2 + PASTE_WIDTH * cos(ANGLE_A2E);
          const ANGLE_O2E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
          const X_O2E = X_O2 - PASTE_WIDTH * sin(ANGLE_O2E);
          const Y_O2E = Y_O2 - PASTE_WIDTH * cos(ANGLE_O2E);
          const ANGLE_O1E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
          const X_O1E = X_O1 - PASTE_WIDTH * sin(ANGLE_O1E);
          const Y_O1E = Y_O1 + PASTE_WIDTH * cos(ANGLE_O1E);
          const ANGLE_K1E = PI -
            (ANGLE_EXTEND + ANGLE_MIDDLE + ANGLE_SMALL * 4.5 - PI);
          const X_K1E = X_K1 + PASTE_WIDTH * sin(ANGLE_K1E);
          const Y_K1E = Y_K1 - PASTE_WIDTH * cos(ANGLE_K1E);
          const ANGLE_A1E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
          const X_A1E = X_A1 - PASTE_WIDTH * sin(ANGLE_A1E);
          const Y_A1E = Y_A1 - PASTE_WIDTH * cos(ANGLE_A1E);
          const ANGLE_B1E = ANGLE_BIG * 0.5 + ANGLE_EXTEND - ANGLE_90;
          const X_B1E = X_B1 + PASTE_WIDTH * cos(ANGLE_B1E);
          const Y_B1E = Y_B1 + PASTE_WIDTH * sin(ANGLE_B1E);
          const ANGLE_C1E1 = PI -
            (ANGLE_EXTEND + ANGLE_MIDDLE + HALF_ANGLE_SMALL);
          const X_C1E1 = X_C1 - PASTE_WIDTH * sin(ANGLE_C1E1);
          const Y_C1E1 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E1);
          const ANGLE_C1E2 = PI -
            (ANGLE_EXTEND + ANGLE_MIDDLE - HALF_ANGLE_SMALL);
          const X_C1E2 = X_C1 + PASTE_WIDTH * sin(ANGLE_C1E2);
          const Y_C1E2 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E2);
          const ANGLE_D1E1 = atan((X_D1 - X_C1) / (Y_C1 - Y_D1)) - ANGLE_EXTEND;
          const X_D1E1 = X_D1 - PASTE_WIDTH * sin(ANGLE_D1E1);
          const Y_D1E1 = Y_D1 + PASTE_WIDTH * cos(ANGLE_D1E1);
          const ANGLE_DE = atan((X_E1 - X_D1) / (Y_D1 - Y_E1));
          const ANGLE_D1E2 = ANGLE_DE - ANGLE_EXTEND;
          const X_D1E2 = X_D1 + PASTE_WIDTH * cos(ANGLE_D1E2);
          const Y_D1E2 = Y_D1 + PASTE_WIDTH * sin(ANGLE_D1E2);
          const ANGLE_E1E1 = ANGLE_EXTEND - ANGLE_DE;
          const X_E1E1 = X_E1 + PASTE_WIDTH * sin(ANGLE_E1E1);
          const Y_E1E1 = Y_E1 + PASTE_WIDTH * cos(ANGLE_E1E1);
          const ANGLE_EF = atan((X_F1 - X_E1) / (Y_E1 - Y_F1));
          const ANGLE_E1E2 = ANGLE_EXTEND - ANGLE_EF;
          const X_E1E2 = X_E1 + PASTE_WIDTH * cos(ANGLE_E1E2);
          const Y_E1E2 = Y_E1 - PASTE_WIDTH * sin(ANGLE_E1E2);
          const ANGLE_F1E1 = ANGLE_90 - (ANGLE_EF + ANGLE_EXTEND);
          const X_F1E1 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E1);
          const Y_F1E1 = Y_F1 + PASTE_WIDTH * cos(ANGLE_F1E1);
          const ANGLE_FG = atan((X_F1 - X_G1) / (Y_F1 - Y_G1));
          const ANGLE_F1E2 = ANGLE_90 - (ANGLE_FG + ANGLE_EXTEND);
          const X_F1E2 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E2);
          const Y_F1E2 = Y_F1 - PASTE_WIDTH * cos(ANGLE_F1E2);
          const ANGLE_G1E1 = ANGLE_FG - ANGLE_EXTEND;
          const X_G1E1 = X_G1 + PASTE_WIDTH * cos(ANGLE_G1E1);
          const Y_G1E1 = Y_G1 - PASTE_WIDTH * sin(ANGLE_G1E1);
          const ANGLE_GH = atan((X_G1 - X_H1) / (Y_G1 - Y_H1));
          const ANGLE_G1E2 = ANGLE_90 - (ANGLE_GH + ANGLE_EXTEND);
          const X_G1E2 = X_G1 + PASTE_WIDTH * sin(ANGLE_G1E2);
          const Y_G1E2 = Y_G1 - PASTE_WIDTH * cos(ANGLE_G1E2);
          const ANGLE_H1E1 = ANGLE_EXTEND - ANGLE_GH;
          const X_H1E1 = X_H1 + PASTE_WIDTH * cos(ANGLE_H1E1);
          const Y_H1E1 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E1);
          const ANGLE_HI = atan((X_H1 - X_I1) / (Y_H1 - Y_I1));
          const ANGLE_H1E2 = ANGLE_EXTEND + ANGLE_HI;
          const X_H1E2 = X_H1 - PASTE_WIDTH * cos(ANGLE_H1E2);
          const Y_H1E2 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E2);
          const ANGLE_I1E1 = ANGLE_EXTEND + ANGLE_HI;
          const X_I1E1 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E1);
          const Y_I1E1 = Y_I1 + PASTE_WIDTH * sin(ANGLE_I1E1);
          const ANGLE_IJ = atan((X_I1 - X_J1) / (Y_I1 - Y_J1));
          const ANGLE_I1E2 = ANGLE_EXTEND + ANGLE_IJ;
          const X_I1E2 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E2);
          const Y_I1E2 = Y_I1 - PASTE_WIDTH * sin(ANGLE_I1E2);
          const ANGLE_J1E1 = ANGLE_IJ - ANGLE_EXTEND;
          const X_J1E1 = X_J1 + PASTE_WIDTH * cos(ANGLE_J1E1);
          const Y_J1E1 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E1);
          const ANGLE_JK = atan((X_J1 - X_K1) / (Y_K1 - Y_J1));
          const ANGLE_J1E2 = ANGLE_JK - ANGLE_EXTEND;
          const X_J1E2 = X_J1 - PASTE_WIDTH * cos(ANGLE_J1E2);
          const Y_J1E2 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E2);

          appendLine(svg, OUTER_LINE_STYLE, X_B1E, X_B1, Y_B1E, Y_B1, viewBox);
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_B1E,
            X_C1E1,
            Y_B1E,
            Y_C1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_C1E1,
            X_C1,
            Y_C1E1,
            Y_C1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_C1,
            X_C1E2,
            Y_C1,
            Y_C1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_C1E2,
            X_D1E1,
            Y_C1E2,
            Y_D1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_D1E1,
            X_D1,
            Y_D1E1,
            Y_D1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_D1,
            X_D1E2,
            Y_D1,
            Y_D1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_D1E2,
            X_E1E1,
            Y_D1E2,
            Y_E1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_E1E1,
            X_E1,
            Y_E1E1,
            Y_E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_E1,
            X_E1E2,
            Y_E1,
            Y_E1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_E1E2,
            X_F1E1,
            Y_E1E2,
            Y_F1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_F1E1,
            X_F1,
            Y_F1E1,
            Y_F1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_F1,
            X_F1E2,
            Y_F1,
            Y_F1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_F1E2,
            X_G1E1,
            Y_F1E2,
            Y_G1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_G1E1,
            X_G1,
            Y_G1E1,
            Y_G1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_G1,
            X_G1E2,
            Y_G1,
            Y_G1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_G1E2,
            X_H1E1,
            Y_G1E2,
            Y_H1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_H1E1,
            X_H1,
            Y_H1E1,
            Y_H1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_H1,
            X_H1E2,
            Y_H1,
            Y_H1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_H1E2,
            X_I1E1,
            Y_H1E2,
            Y_I1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_I1E1,
            X_I1,
            Y_I1E1,
            Y_I1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_I1,
            X_I1E2,
            Y_I1,
            Y_I1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_I1E2,
            X_J1E1,
            Y_I1E2,
            Y_J1E1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_J1E1,
            X_J1,
            Y_J1E1,
            Y_J1,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_J1,
            X_J1E2,
            Y_J1,
            Y_J1E2,
            viewBox,
          );
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_J1E2,
            X_K1E,
            Y_J1E2,
            Y_K1E,
            viewBox,
          );
          appendLine(svg, OUTER_LINE_STYLE, X_K1E, X_K1, Y_K1E, Y_K1, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_O1, X_K1, Y_O1, Y_K1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_K1, X_J1, Y_K1, Y_J1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_J1, X_I1, Y_J1, Y_I1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_I1, X_H1, Y_I1, Y_H1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_H1, X_G1, Y_H1, Y_G1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_G1, X_F1, Y_G1, Y_F1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_F1, X_E1, Y_F1, Y_E1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_E1, X_D1, Y_E1, Y_D1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_D1, X_C1, Y_D1, Y_C1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_C1, X_B1, Y_C1, Y_B1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_B1, X_A1, Y_B1, Y_A1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O1, X_I1, Y_O1, Y_I1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O1, X_G1, Y_O1, Y_G1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O1, X_E1, Y_O1, Y_E1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O1, X_C1, Y_O1, Y_C1, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O1, X_A1, Y_O1, Y_A1, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_O2, X_K2, Y_O2, Y_K2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_K2, X_J2, Y_K2, Y_J2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_J2, X_I2, Y_J2, Y_I2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_I2, X_H2, Y_I2, Y_H2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_H2, X_G2, Y_H2, Y_G2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_G2, X_F2, Y_G2, Y_F2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_F2, X_E2, Y_F2, Y_E2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_E2, X_D2, Y_E2, Y_D2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_D2, X_C2, Y_D2, Y_C2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_C2, X_B2, Y_C2, Y_B2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_B2, X_A2, Y_B2, Y_A2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O2, X_I2, Y_O2, Y_I2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O2, X_G2, Y_O2, Y_G2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O2, X_E2, Y_O2, Y_E2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O2, X_C2, Y_O2, Y_C2, viewBox);
          appendLine(svg, INNER_LINE_STYLE, X_O2, X_A2, Y_O2, Y_A2, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_O1, X_O1E, Y_O1, Y_O1E, viewBox);
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_O1E,
            X_A1E,
            Y_O1E,
            Y_A1E,
            viewBox,
          );
          appendLine(svg, OUTER_LINE_STYLE, X_A1E, X_A1, Y_A1E, Y_A1, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_K1E, X_K1, Y_K1E, Y_K1, viewBox);
          appendLine(svg, OUTER_LINE_STYLE, X_O2, X_O2E, Y_O2, Y_O2E, viewBox);
          appendLine(
            svg,
            OUTER_LINE_STYLE,
            X_O2E,
            X_A2E,
            Y_O2E,
            Y_A2E,
            viewBox,
          );
          appendLine(svg, OUTER_LINE_STYLE, X_A2E, X_A2, Y_A2E, Y_A2, viewBox);

          (this as any).textData = {
            X_A1,
            X_A2,
            X_C1,
            X_C2,
            X_E1,
            X_E2,
            X_G1,
            X_G2,
            X_I1,
            X_I2,
            X_K1,
            X_K2,
            Y_A1,
            Y_A2,
            Y_C1,
            Y_C2,
            Y_E1,
            Y_E2,
            Y_G1,
            Y_G2,
            Y_I1,
            Y_I2,
            Y_K1,
            Y_K2,
            ANGLE_SMALL_DEGREE,
          };
          // viewBox.right = SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
          // viewBox.bottom = BOTTOM;
        }

        private drawTextsOfTenSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          const { setSvgTextInfo } = this;
          const textData = (this as any).textData;
          const {
            X_A1,
            X_A2,
            X_C1,
            X_C2,
            X_E1,
            X_E2,
            X_G1,
            X_G2,
            X_I1,
            X_I2,
            X_K1,
            X_K2,
            Y_A1,
            Y_A2,
            Y_C1,
            Y_C2,
            Y_E1,
            Y_E2,
            Y_G1,
            Y_G2,
            Y_I1,
            Y_I2,
            Y_K1,
            Y_K2,
            ANGLE_SMALL_DEGREE,
          } = textData;
          [
            {
              x: (X_A2 + X_C2) * 0.5,
              y: (Y_A2 + Y_C2) * 0.5,
              rotate: 0,
            },
            {
              x: (X_G1 + X_I1) * 0.5,
              y: (Y_G1 + Y_I1) * 0.5,
              rotate: 360 - ANGLE_SMALL_DEGREE * 3,
            },
            {
              x: (X_E2 + X_G2) * 0.5,
              y: (Y_E2 + Y_G2) * 0.5,
              rotate: ANGLE_SMALL_DEGREE * 2,
            },
            {
              x: (X_A1 + X_C1) * 0.5,
              y: (Y_A1 + Y_C1) * 0.5,
              rotate: 0,
            },
            {
              x: (X_I2 + X_K2) * 0.5,
              y: (Y_I2 + Y_K2) * 0.5,
              rotate: ANGLE_SMALL_DEGREE * 4,
            },
            {
              x: (X_C1 + X_E1) * 0.5,
              y: (Y_C1 + Y_E1) * 0.5,
              rotate: -ANGLE_SMALL_DEGREE,
            },
            {
              x: (X_G2 + X_I2) * 0.5,
              y: (Y_G2 + Y_I2) * 0.5,
              rotate: ANGLE_SMALL_DEGREE * 3,
            },
            {
              x: (X_I1 + X_K1) * 0.5,
              y: (Y_I1 + Y_K1) * 0.5,
              rotate: 360 - ANGLE_SMALL_DEGREE * 4,
            },
            {
              x: (X_C2 + X_E2) * 0.5,
              y: (Y_C2 + Y_E2) * 0.5,
              rotate: ANGLE_SMALL_DEGREE,
            },
            {
              x: (X_E1 + X_G1) * 0.5,
              y: (Y_E1 + Y_G1) * 0.5,
              rotate: 360 - ANGLE_SMALL_DEGREE * 2,
            },
          ].map(({ x, y, rotate }, n) => {
            setSvgTextInfo(infos[n], x, y, rotate);
          });
        }

        drawGraphsOfTwelveSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const QUARTER_SIDE_LENGTH = SIDE_LENGTH * 0.25;
          const RADIUS = SIDE_LENGTH * 0.2;

          const ANGLE18 = Math.PI * 18 / 180;
          const ANGLE36 = Math.PI * 36 / 180;
          const ANGLE54 = Math.PI * 54 / 180;
          const ANGLE72 = Math.PI * 72 / 180;

          const SIN18 = Math.sin(ANGLE18);
          const SIN36 = Math.sin(ANGLE36);
          const SIN54 = Math.sin(ANGLE54);
          const SIN72 = Math.sin(ANGLE72);

          const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
          const LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
          const HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;

          const SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
          const SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
          const SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
          const SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;

          const SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH *
            SIN18;
          const SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH *
            SIN36;
          const SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH *
            SIN54;
          const SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH *
            SIN72;

          const SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;

          const SECOND_GROUP_OFFSET = SIDE_LENGTH * 2 + LONG_SIDE_LENGTH +
            SIN18_MULTIPLY_SIDE_LENGTH;
          const TOP = SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

          for (let groupIndex = 0; groupIndex < 2; ++groupIndex) {
            const LEFT = (groupIndex === 0 ? 0 : SECOND_GROUP_OFFSET) +
              SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

            let A1x = 0, A1y = 0;
            let A2x = 0, A2y = 0;
            let A3x = 0, A3y = 0;
            let A4x = 0, A4y = 0;
            let A5x = 0, A5y = 0;
            let B1x = 0, B1y = 0;
            let B2x = 0, B2y = 0;
            let B5x = 0, B5y = 0;
            let C1x = 0, C1y = 0;
            let C2x = 0, C2y = 0;
            let C5x = 0, C5y = 0;
            let D1x = 0, D1y = 0;
            let D2x = 0, D2y = 0;
            let D5x = 0, D5y = 0;
            let E1x = 0, E1y = 0;
            let E2x = 0, E2y = 0;
            let E5x = 0, E5y = 0;
            let F1x = 0, F1y = 0;
            let F2x = 0, F2y = 0;
            let F5x = 0, F5y = 0;

            if (groupIndex === 0) {
              A1x = LEFT +
                SIN18 * (SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) +
                LONG_SIDE_LENGTH;
              A2x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
              A5x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
              A3x = A2x - SIN18_MULTIPLY_SIDE_LENGTH;
              A4x = A5x + SIN18_MULTIPLY_SIDE_LENGTH;

              B1x = A5x - HALF_SIDE_LENGTH;
              B2x = A5x + HALF_SIDE_LENGTH;
              B5x = A1x - LONG_SIDE_LENGTH;

              C1x = A2x + HALF_SIDE_LENGTH;
              C5x = A2x - HALF_SIDE_LENGTH;
              C2x = A1x + LONG_SIDE_LENGTH;

              D1x = A3x + LONG_SIDE_LENGTH;
              D2x = A3x + HALF_LONG_SIDE_LENGTH;
              D5x = A2x + SIDE_LENGTH;

              E1x = A4x + HALF_SIDE_LENGTH;
              E2x = A4x - SIN18_MULTIPLY_SIDE_LENGTH;
              E5x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;

              F1x = A4x - LONG_SIDE_LENGTH;
              F5x = A4x - HALF_LONG_SIDE_LENGTH;
              F2x = A5x - SIDE_LENGTH;

              A1y = TOP + SIN72_MULTIPLY_SIDE_LENGTH;
              A2y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
              A5y = A2y;
              A3y = A2y + SIN72_MULTIPLY_SIDE_LENGTH;
              A4y = A3y;

              B1y = TOP;
              B2y = B1y;
              B5y = A1y;

              C1y = B1y;
              C5y = B1y;
              C2y = B5y;

              D1y = A3y;
              D2y = A3y + SIN36_MULTIPLY_SIDE_LENGTH;
              D5y = A2y;

              E2y = A4y + SIN72_MULTIPLY_SIDE_LENGTH;
              E5y = E2y;
              E1y = E2y + SIN36_MULTIPLY_SIDE_LENGTH;

              F1y = A4y;
              F2y = A2y;
              F5y = D2y;
            } else {
              A1x = LEFT + LONG_SIDE_LENGTH + SIDE_LENGTH;
              A2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
              A3x = A1x - HALF_SIDE_LENGTH;
              A5x = A1x - SIDE_LENGTH;
              A4x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;

              B1x = A5x + HALF_SIDE_LENGTH;
              B2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
              B5x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;

              C2x = A2x + SIDE_LENGTH;
              C1x = A1x + LONG_SIDE_LENGTH;
              C5x = A1x + HALF_LONG_SIDE_LENGTH;

              D2x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
              D1x = D2x + SIDE_LENGTH;
              D5x = D1x + SIN18_MULTIPLY_SIDE_LENGTH;

              E2x = A3x - LONG_SIDE_LENGTH;
              E1x = E2x + SIN18_MULTIPLY_SIDE_LENGTH;
              E5x = E1x + SIDE_LENGTH;

              F1x = A5x - LONG_SIDE_LENGTH;
              F2x = A5x - HALF_LONG_SIDE_LENGTH;
              F5x = A4x - SIDE_LENGTH;

              A1y = TOP + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
              A2y = A1y + SIN72_MULTIPLY_SIDE_LENGTH;
              A3y = A1y + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
              A4y = A2y;
              A5y = A1y;

              B1y = TOP;
              B2y = A5y - SIN72_MULTIPLY_SIDE_LENGTH;
              B5y = B2y;

              C1y = A1y;
              C2y = A2y;
              C5y = A1y - SIN36_MULTIPLY_SIDE_LENGTH;

              D5y = A3y;
              D1y = D5y + SIN72_MULTIPLY_SIDE_LENGTH;
              D2y = D1y;

              E1y = D1y;
              E2y = D5y;
              E5y = D1y;

              F1y = C1y;
              F2y = C5y;
              F5y = A4y;
            }

            const LINE_STYLE = groupIndex === 0
              ? INNER_LINE_STYLE
              : OUTER_LINE_STYLE;

            this.appendLine(svg, LINE_STYLE, A1x, A2x, A1y, A2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, A3x, A2y, A3y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, A4x, A3y, A4y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, A5x, A4y, A5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, A1x, A5y, A1y, viewBox);

            this.appendLine(svg, LINE_STYLE, A1x, B2x, A1y, B2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A1x, C5x, A1y, C5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, C2x, A2y, C2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A2x, D5x, A2y, D5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, D2x, A3y, D2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A3x, E5x, A3y, E5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, E2x, A4y, E2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A4x, F5x, A4y, F5y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, F2x, A5y, F2y, viewBox);
            this.appendLine(svg, LINE_STYLE, A5x, B5x, A5y, B5y, viewBox);

            this.appendLine(svg, LINE_STYLE, B1x, B2x, B1y, B2y, viewBox);
            this.appendLine(svg, LINE_STYLE, B1x, B5x, B1y, B5y, viewBox);
            this.appendLine(svg, LINE_STYLE, C1x, C2x, C1y, C2y, viewBox);
            this.appendLine(svg, LINE_STYLE, C1x, C5x, C1y, C5y, viewBox);
            this.appendLine(svg, LINE_STYLE, D1x, D2x, D1y, D2y, viewBox);
            this.appendLine(svg, LINE_STYLE, D1x, D5x, D1y, D5y, viewBox);
            this.appendLine(svg, LINE_STYLE, E1x, E2x, E1y, E2y, viewBox);
            this.appendLine(svg, LINE_STYLE, E1x, E5x, E1y, E5y, viewBox);
            this.appendLine(svg, LINE_STYLE, F1x, F2x, F1y, F2y, viewBox);
            this.appendLine(svg, LINE_STYLE, F1x, F5x, F1y, F5y, viewBox);

            let B6x = 0, B6y = 0;
            let B7x = 0, B7y = 0;
            let B8x = 0, B8y = 0;
            let B9x = 0, B9y = 0;

            let C6x = 0, C6y = 0;
            let C7x = 0, C7y = 0;
            let C8x = 0, C8y = 0;
            let C9x = 0, C9y = 0;

            let D6x = 0, D6y = 0;
            let D7x = 0, D7y = 0;
            let D8x = 0, D8y = 0;
            let D9x = 0, D9y = 0;

            let E6x = 0, E6y = 0;
            let E7x = 0, E7y = 0;
            let E8x = 0, E8y = 0;
            let E9x = 0, E9y = 0;

            let F6x = 0, F6y = 0;
            let F7x = 0, F7y = 0;
            let F8x = 0, F8y = 0;
            let F9x = 0, F9y = 0;
            // const SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
            // const SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
            // const SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
            // const SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
            if (groupIndex === 0) {
              B6x = B5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              B6y = B5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;

              B7x = B1x - QUARTER_SIDE_LENGTH;
              C8x = C1x + QUARTER_SIDE_LENGTH;

              B7y = B1y;
              C8y = B1y;

              B8x = B1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              B9x = B2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              C6x = C5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              C7x = C1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;

              B8y = B1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              B9y = B8y;
              C6y = B8y;
              C7y = B8y;

              C9x = C2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              C9y = C2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;

              // 无D6和D7
              D8x = D1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

              D9x = D2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              D9y = D2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;

              E6x = E5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

              E7x = E1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              E8x = E1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              E7y = E1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              E8y = E7y;

              E9x = E2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              E9y = E2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

              F6x = F5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              F6y = F5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;

              F7x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              F7y = F1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;

              F8x = F1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              F8y = F1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;

              F9x = F2x - QUARTER_SIDE_LENGTH;
              F9y = F2y;
              // } else {
              //   B6x = B5x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B6y = B5y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   B7x = B1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B8x = B1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B7y = B1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B8y = B7y;
              //
              //   B9x = B2x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   B9y = B2y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C6x = C5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C6y = C5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C7x = C1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C7y = C1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C8x = C1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   C8y = C1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   C9x = C2x + QUARTER_SIDE_LENGTH;
              //   C9y = C2y;
              //
              //   D6x = D5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D6y = D5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   D7x = D1x + QUARTER_SIDE_LENGTH;
              //   D7y = D1y - 0;
              //
              //   D8x = D1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   D9x = D2x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   D9y = D2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E6x = E5x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E7x = E1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E7y = E1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   E8x = E1x - QUARTER_SIDE_LENGTH;
              //   E8y = E1y + 0;
              //
              //   E9x = E2x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   E9y = E2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   // F6x = F5x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   // F6y = F5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   // F7x = F1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   // F7y = F1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   F8x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   F8y = F1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
              //
              //   F9x = F2x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
              //   F9y = F2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
            }

            if (groupIndex === 0) {
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B5x,
                B6x,
                B5y,
                B6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B1x,
                B7x,
                B1y,
                B7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B1x,
                B8x,
                B1y,
                B8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B2x,
                B9x,
                B2y,
                B9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C5x,
                C6x,
                C5y,
                C6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C1x,
                C7x,
                C1y,
                C7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C1x,
                C8x,
                C1y,
                C8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C2x,
                C9x,
                C2y,
                C9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D1x,
                D8x,
                D1y,
                D8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D2x,
                D9x,
                D2y,
                D9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E5x,
                E6x,
                E5y,
                E6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E1x,
                E7x,
                E1y,
                E7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E1x,
                E8x,
                E1y,
                E8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E2x,
                E9x,
                E2y,
                E9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F5x,
                F6x,
                F5y,
                F6y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F1x,
                F7x,
                F1y,
                F7y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F1x,
                F8x,
                F1y,
                F8y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F2x,
                F9x,
                F2y,
                F9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B6x,
                B7x,
                B6y,
                B7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B8x,
                B9x,
                B8y,
                B9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C6x,
                C7x,
                C6y,
                C7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C8x,
                C9x,
                C8y,
                C9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D6x,
                D7x,
                D6y,
                D7y,
                viewBox,
              ); //

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D8x,
                D9x,
                D8y,
                D9y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E6x,
                E7x,
                E6y,
                E7y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E8x,
                E9x,
                E8y,
                E9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F6x,
                F7x,
                F6y,
                F7y,
                viewBox,
              ); //

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F8x,
                F9x,
                F8y,
                F9y,
                viewBox,
              );

              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                B2x,
                C5x,
                B2y,
                C5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                C2x,
                D5x,
                C2y,
                D5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                D2x,
                E5x,
                D2y,
                E5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                E2x,
                F5x,
                E2y,
                F5y,
                viewBox,
              );
              this.appendLine(
                svg,
                OUTER_LINE_STYLE,
                F2x,
                B5x,
                F2y,
                B5y,
                viewBox,
              );
            }

            if ((OPTIONS as unknown as { withHole: boolean }).withHole) {
              let CC1x = (A1x + A2x + A3x + A4x + A5x) * 0.2,
                CC1y = (A1y + A2y + A3y + A4y + A5y) * 0.2;
              let CC2x = (A1x + A5x + B1x + B2x + B5x) * 0.2,
                CC2y = (A1y + A5y + B1y + B2y + B5y) * 0.2;
              let CC3x = (A1x + A2x + C1x + C2x + C5x) * 0.2,
                CC3y = (A1y + A2y + C1y + C2y + C5y) * 0.2;
              let CC4x = (A2x + A3x + D1x + D2x + D5x) * 0.2,
                CC4y = (A2y + A3y + D1y + D2y + D5y) * 0.2;
              let CC5x = (A3x + A4x + E1x + E2x + E5x) * 0.2,
                CC5y = (A3y + A4y + E1y + E2y + E5y) * 0.2;
              let CC6x = (A4x + A5x + F1x + F2x + F5x) * 0.2,
                CC6y = (A4y + A5y + F1y + F2y + F5y) * 0.2;

              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC1x,
                CC1y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC2x,
                CC2y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC3x,
                CC3y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC4x,
                CC4y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC5x,
                CC5y,
                RADIUS,
                null,
              );
              this.appendCircle(
                svg,
                INNER_LINE_STYLE,
                CC6x,
                CC6y,
                RADIUS,
                null,
              );
            }
          }
        }

        drawTextsOfTwelveSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          // 12 text elements.
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 58.5 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 130.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 170.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 118.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 185.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 150.5 / 25,
            SIDE_LENGTH * 25.0 / 25,
            180,
          );

          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 157.5 / 25,
            SIDE_LENGTH * 30.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 125.0 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 190.0 / 25,
            SIDE_LENGTH * 52.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 136.5 / 25,
            SIDE_LENGTH * 90.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 177.0 / 25,
            SIDE_LENGTH * 90.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 52.0 / 25,
            SIDE_LENGTH * 50.0 / 25,
            180,
          );
        }
        drawGraphsOfTwentySidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const pasteRegionScale = 0.2;
          const pasteRegion = SIDE_LENGTH * pasteRegionScale;
          const pasteRegionPx = pasteRegion * mmToPxScale;

          const ANGLE60 = Math.PI * 60 / 180;
          const SIN60 = Math.sin(ANGLE60);
          const COS60 = Math.cos(ANGLE60);

          const OneX = SIDE_LENGTH * COS60;
          const OneY = SIDE_LENGTH * SIN60;

          const pasteRegionShortBiasX = pasteRegion * COS60;
          const pasteRegionShortBiasY = pasteRegion * SIN60;

          const pasteRegionLongBias = SIDE_LENGTH * (1 - pasteRegionScale);
          const pasteRegionLongBiasX = pasteRegionLongBias * COS60;
          const pasteRegionLongBiasY = pasteRegionLongBias * SIN60;

          const TwoY = OneY * 2;
          const ThreeY = OneY * 3;

          let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
          let FIVE_SIDE = SIDE_LENGTH * 5;
          x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
          y1 = OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
          y1 += OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 -= OneX, x2 = x1 - OneX;
          y1 = OneY, y2 = TwoY;
          for (let i = 0; i < 5; ++i) {
            x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
            this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          }

          x1 = pasteRegionShortBiasX, x2 = x1 + OneX;
          y1 = TwoY, y2 = ThreeY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 += OneX, x2 += OneX * 2;
          y1 = OneY, y2 = y1 + TwoY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 -= OneX;
          y1 = 0;
          for (let i = 0; i < 3; ++i) {
            x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
            this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          }

          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = TwoY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = OneY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);

          const OneXPx = OneX * mmToPxScale;
          const OneYPx = OneY * mmToPxScale;
          const pasteRegionShortBiasXPx = pasteRegionShortBiasX * mmToPxScale;
          const pasteRegionShortBiasYPx = pasteRegionShortBiasY * mmToPxScale;

          const pasteRegionLongBiasXPx = pasteRegionLongBiasX * mmToPxScale;
          const pasteRegionLongBiasYPx = pasteRegionLongBiasY * mmToPxScale;

          const path = document.createElementNS(
            SVG_NS,
            "path",
          ) as SVGPathElement;
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            `M 0, ${OneYPx + pasteRegionLongBiasYPx} `
              .concat(
                `l ${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `h ${pasteRegionPx}`,
                `l ${OneXPx}, -${OneYPx}`,
                `h ${pasteRegionPx}`,
                `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
                `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
                `l ${OneXPx}, -${OneYPx}`,
                `h ${pasteRegionPx}`,
                `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
                `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
                `l ${OneXPx}, -${OneYPx}`,
                `h ${pasteRegionPx}`,
                `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
                `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
                `l ${OneXPx}, -${OneYPx}`,
                `h ${pasteRegionPx}`,
                `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
                `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
                `l ${OneXPx}, -${OneYPx}`,
                `h ${pasteRegionPx}`,
                `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
                `l -${
                  pasteRegionShortBiasXPx +
                  OneXPx * 2
                }, ${pasteRegionShortBiasYPx + OneYPx * 2}`,
                `h -${pasteRegionPx}`,
                `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
                `l -${OneXPx}, ${OneYPx}`,
                `h -${pasteRegionPx}`,
                `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
                `l -${OneXPx}, ${OneYPx}`,
                `h -${pasteRegionPx}`,
                `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
                `l -${OneXPx}, ${OneYPx}`,
                `h -${pasteRegionPx}`,
                `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
                `l -${OneXPx}, ${OneYPx}`,
                `h -${pasteRegionPx}`,
                `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
                `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
                " z",
              ),
          );
          svg.appendChild(path);

          viewBox.right = SIDE_LENGTH * 5 + OneX + pasteRegion;
          viewBox.bottom = OneY * 3;
        }
        drawTextsOfTwentySidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          // 20 text elements.
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 27.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 52.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 77.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 102.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 127.5 / 25,
            SIDE_LENGTH * 15.0 / 25,
            0,
          );

          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 15.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 40.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 65.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 90.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 115.0 / 25,
            SIDE_LENGTH * 36.65 / 25,
            0,
          );

          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 115.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 90.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[12],
            SIDE_LENGTH * 65.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[13],
            SIDE_LENGTH * 40.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[14],
            SIDE_LENGTH * 15.0 / 25,
            SIDE_LENGTH * 38.75 / 25,
            180,
          );

          this.setSvgTextInfo(
            infos[15],
            SIDE_LENGTH * 127.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[16],
            SIDE_LENGTH * 102.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[17],
            SIDE_LENGTH * 77.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[18],
            SIDE_LENGTH * 52.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[19],
            SIDE_LENGTH * 27.5 / 25,
            SIDE_LENGTH * 16.25 / 25,
            180,
          );
        }

        getSinByAngle(angle: number) {
          return Math.sin(angle * Math.PI / 180);
        }
        getCosByAngle(angle: number) {
          return Math.cos(angle * Math.PI / 180);
        }
        // fixContent(content)  { return content.toString().replace(/([69])/gi, '<font style="text-decoration:underline;">$1</font>'); }

        drawGraphsOfTwentyFourSidedDice(
          svg: SVGElement,
          SIDE_LENGTH: number,
          INNER_LINE_STYLE: string,
          OUTER_LINE_STYLE: string,
          viewBox: { left: number; right: number; top: number; bottom: number },
          OPTIONS: object,
          mmToPxScale: number,
        ) {
          const ANGLE = 48.275;
          const { getSinByAngle, getCosByAngle } = this;
          const TEXT_OFFSET_SCALE = 0.2;
          const BIGER_ANGLE = 180 - ANGLE * 2;
          const SMALL_ANGLE_COS = Math.cos(ANGLE * Math.PI / 180);
          const HALF_LONG_SIDE_LENGTH = 50 * 0.5;
          const SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;

          let ax = 0,
            ay = 0,
            bx = 0,
            by = 0,
            cx = 0,
            cy = 0,
            dx = 0,
            dy = 0,
            ex = 0,
            ey = 0,
            fx = 0,
            fy = 0;
          let aax = 0,
            aay = 0,
            bbx = 0,
            bby = 0,
            ddx = 0,
            ddy = 0,
            eex = 0,
            eey = 0,
            ffx = 0,
            ffy = 0,
            fffx = 0,
            fffy = 0;

          let content_offset_top = -3, content_offset_left = -2;
          content_offset_top *= 1.5, content_offset_left *= 1.5;
          const OFFSET_X = -23.0805019730301175;
          // 080501973030115 1.7763568394002505e-14mm
          // 08050197303012 -1.0658141036401503e-14mm
          const X_VALUE = 150;
          // const ax1 = 150, ay1 = 0;
          const ax1 = X_VALUE + OFFSET_X, ay1 = 0;
          const bx1 = ax1 + 50, by1 = 0;
          const cx1 = ax1 + HALF_LONG_SIDE_LENGTH,
            cy1 = SHORT_SIDE_LENGTH * getSinByAngle(ANGLE);
          const angle_cd1 = BIGER_ANGLE - ANGLE;
          const dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1),
            dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
          const angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
          const ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1),
            ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
          const angle_cf1 = BIGER_ANGLE - angle_ce1;
          const fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1),
            fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
          const c_mirror_ad_x1 = X_VALUE + dx1 - cx1;
          const c_mirror_ad_y1 = 0 + dy1 - cy1;
          const aax1 = X_VALUE + (c_mirror_ad_x1 - X_VALUE) * 0.3 + OFFSET_X,
            aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
          const bbx1 = 0, bby1 = 0;
          const ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3,
            ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
          const ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
          const c_mirror_ef_x1 = ex1 + fx1 - cx1;
          const c_mirror_ef_y1 = ey1 + fy1 - cy1;
          const eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3,
            eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
          const fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3,
            fffy1 = fy1 + (c_mirror_ef_y1 - fy1) * 0.3;
          ax = ax1,
            ay = ay1,
            bx = bx1,
            by = by1,
            cx = cx1,
            cy = cy1,
            dx = dx1,
            dy = dy1,
            ex = ex1,
            ey = ey1,
            fx = fx1,
            fy = fy1;
          aax = aax1,
            aay = aay1,
            bbx = bbx1,
            bby = bby1,
            ddx = ddx1,
            ddy = ddy1,
            eex = eex1,
            eey = eey1,
            ffx = ffx1,
            ffy = ffy1,
            fffx = fffx1,
            fffy = fffy1;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);

          const cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
          const ax4 = ex1, ay4 = ey1;
          const dx4 = dx1, dy4 = dy1;
          const angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 /
            Math.PI;
          const angle_ce4 = BIGER_ANGLE - angle_cd4;
          const angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
          const angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
          const angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
          const ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
          const ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
          const fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
          const fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
          const bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
          const by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
          const ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
          ax = ax4,
            ay = ay4,
            bx = bx4,
            by = by4,
            cx = cx4,
            cy = cy4,
            dx = dx4,
            dy = dy4,
            ex = ex4,
            ey = ey4,
            fx = fx4,
            fy = fy4;
          ffx = ffx4, ffy = ffy4;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);

          const cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
          const dx5 = ax4, dy5 = ay4;
          const ex5 = bx4, ey5 = by4;
          const angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 /
            Math.PI;
          const angle_ce5 = BIGER_ANGLE - angle_cd5;
          const angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
          const angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
          const angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
          const ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
          const ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
          const bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
          const by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
          const fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
          const fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
          const ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
          const c_mirror_ab_x5 = ax5 + bx5 - cx5,
            c_mirror_ab_y5 = ay5 + by5 - cy5;
          const aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3,
            aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
          const bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3,
            bby5 = by5 + (c_mirror_ab_y5 - by5) * 0.3;
          ax = ax5,
            ay = ay5,
            bx = bx5,
            by = by5,
            cx = cx5,
            cy = cy5,
            dx = dx5,
            dy = dy5,
            ex = ex5,
            ey = ey5,
            fx = fx5,
            fy = fy5;
          aax = aax5,
            aay = aay5,
            bbx = bbx5,
            bby = bby5,
            ffx = ffx5,
            ffy = ffy5;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);

          const cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
          const dx6 = fx4, dy6 = fy4;
          const ex6 = ex4, ey6 = ey4;
          const angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 /
            Math.PI;
          const angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 /
            Math.PI;
          const angle_ca6 = BIGER_ANGLE - angle_cd6;
          const angle_cf6 = BIGER_ANGLE - angle_ce6;
          const angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
          const ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
          const ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
          const bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
          const by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
          const fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
          const fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
          const ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
          const c_mirror_ad_x6 = ax6 + dx6 - cx6,
            c_mirror_ad_y6 = ay6 + dy6 - cy6;
          const aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3,
            aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
          const ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3,
            ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
          const c_mirror_ef_x6 = ex6 + fx6 - cx6,
            c_mirror_ef_y6 = ey6 + fy6 - cy6;
          const eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3,
            eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
          const fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3,
            fffy6 = fy6 + (c_mirror_ef_y6 - fy6) * 0.3;
          ax = ax6,
            ay = ay6,
            bx = bx6,
            by = by6,
            cx = cx6,
            cy = cy6,
            dx = dx6,
            dy = dy6,
            ex = ex6,
            ey = ey6,
            fx = fx6,
            fy = fy6;
          aax = aax6,
            aay = aay6,
            ddx = ddx6,
            ddy = ddy6,
            eex = eex6,
            eey = eey6,
            ffx = ffx6,
            ffy = ffy6,
            fffx = fffx6,
            fffy = fffy6;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, ddx, aay, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, eex, fffx, eey, fffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, fffx, fy, fffy, viewBox);

          const cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
          const fx3 = dx4, fy3 = dy4;
          const ex3 = ex4, ey3 = ey4;
          const angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 /
            Math.PI;
          const angle_ce3 = BIGER_ANGLE - angle_cf3;
          const angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
          const angle_ca3 = BIGER_ANGLE - angle_cd3;
          const angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
          const ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
          const ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
          const bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
          const by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
          const dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
          const dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
          const ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
          ax = ax3,
            ay = ay3,
            bx = bx3,
            by = by3,
            cx = cx3,
            cy = cy3,
            dx = dx3,
            dy = dy3,
            ex = ex3,
            ey = ey3,
            fx = fx3,
            fy = fy3;
          ffx = ffx3, ffy = ffy3;
          this.appendLine(svg, OUTER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);

          const cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
          const fx2 = ax3, fy2 = ay3;
          const ex2 = dx3, ey2 = dy3;
          const angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 /
            Math.PI;
          const angle_ce2 = BIGER_ANGLE - angle_cf2;
          const angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
          const angle_ca2 = BIGER_ANGLE - angle_cd2;
          const angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
          const ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
          const ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
          const bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
          const by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
          const dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
          const dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
          const ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
          const c_mirror_ab_x2 = ax2 + bx2 - cx2,
            c_mirror_ab_y2 = ay2 + by2 - cy2;
          const aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3,
            aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
          const bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3,
            bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
          const c_mirror_de_x2 = dx2 + ex2 - cx2,
            c_mirror_de_y2 = dy2 + ey2 - cy2;
          const ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3,
            ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
          const eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3,
            eey2 = ey2 + (c_mirror_de_y2 - ey2) * 0.3;
          ax = ax2,
            ay = ay2,
            bx = bx2,
            by = by2,
            cx = cx2,
            cy = cy2,
            dx = dx2,
            dy = dy2,
            ex = ex2,
            ey = ey2,
            fx = fx2,
            fy = fy2;
          aax = aax2,
            aay = aay2,
            bbx = bbx2,
            bby = bby2,
            ddx = ddx2,
            ddy = ddy2,
            eex = eex2,
            eey = eey2,
            ffx = ffx2,
            ffy = ffy2;
          this.appendLine(svg, INNER_LINE_STYLE, ax, bx, ay, by, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, dx, ay, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ax, cx, ay, cy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, cx, by, cy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, dx, cy, dy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, ex, cy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, cx, fx, cy, fy, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, dx, ex, dy, ey, viewBox);
          this.appendLine(svg, INNER_LINE_STYLE, ex, fx, ey, fy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, fx, ffx, fy, ffy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ax, aax, ay, aay, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, bx, bbx, by, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, aax, bbx, aay, bby, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, dx, ddx, dy, ddy, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ex, eex, ey, eey, viewBox);
          this.appendLine(svg, OUTER_LINE_STYLE, ddx, eex, ddy, eey, viewBox);
        }

        drawTextsOfTwentyFourSidedDice(
          infos: {
            content: any;
            x: number;
            y: number;
            rotate: number | "auto" | "auto-reverse";
          }[],
          SIDE_LENGTH: number,
        ) {
          // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 36.5 / 25, SIDE_LENGTH * 100.0 / 25, 180);
          // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 147.5 / 25, SIDE_LENGTH * 125.0 / 25, 180);
          // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 84.0 / 25, SIDE_LENGTH * 132.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 194.0 / 25, SIDE_LENGTH * 132.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 132.5 / 25, SIDE_LENGTH * 140.0 / 25, -83.45);
          // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 95.0 / 25, SIDE_LENGTH * 175.0 / 25, 83.45);
          // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 195.0 / 25, SIDE_LENGTH * 147.5 / 25, 166.9);
          // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 95.0 / 25, SIDE_LENGTH * 115.0 / 25, 193.1);
          // this.setSvgTextInfo(infos[8], SIDE_LENGTH * 162.0 / 25, SIDE_LENGTH * 40.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[9], SIDE_LENGTH * 97.5 / 25, SIDE_LENGTH * 66.0 / 25, 206.2);
          // this.setSvgTextInfo(infos[10], SIDE_LENGTH * 140.0 / 25, SIDE_LENGTH * 82.0 / 25, -70.35);
          // this.setSvgTextInfo(infos[11], SIDE_LENGTH * 122.5 / 25, SIDE_LENGTH * 15.0 / 25, 96.55);
          // this.setSvgTextInfo(infos[12], SIDE_LENGTH * 111.0 / 25, SIDE_LENGTH * 127.5 / 25, 96.55);
          // this.setSvgTextInfo(infos[13], SIDE_LENGTH * 110.0 / 25, SIDE_LENGTH * 195.0 / 25, 263.45);
          // this.setSvgTextInfo(infos[14], SIDE_LENGTH * 80.0 / 25, SIDE_LENGTH * 160.0 / 25, 180);
          // this.setSvgTextInfo(infos[15], SIDE_LENGTH * 147.5 / 25, SIDE_LENGTH * 150.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[16], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 80.0 / 25, 0);
          // this.setSvgTextInfo(infos[17], SIDE_LENGTH * 157.5 / 25, SIDE_LENGTH * 91.0 / 25, 26.2);
          // this.setSvgTextInfo(infos[18], SIDE_LENGTH * 115.0 / 25, SIDE_LENGTH * 71.0 / 25, 109.65);
          // this.setSvgTextInfo(infos[19], SIDE_LENGTH * 145.0 / 25, SIDE_LENGTH * 30.0 / 25, -83.45);
          // this.setSvgTextInfo(infos[20], SIDE_LENGTH * 167.5 / 25, SIDE_LENGTH * 71.0 / 25, 122.75);
          // this.setSvgTextInfo(infos[21], SIDE_LENGTH * 69.0 / 25, SIDE_LENGTH * 65.0 / 25, 96.55);
          // this.setSvgTextInfo(infos[22], SIDE_LENGTH * 218.0 / 25, SIDE_LENGTH * 92.0 / 25, 13.1);
          // this.setSvgTextInfo(infos[23], SIDE_LENGTH * 105.0 / 25, SIDE_LENGTH * 92.0 / 25, 13.1);

          // 2022-11-18
          this.setSvgTextInfo(
            infos[0],
            SIDE_LENGTH * 36.5 / 25,
            SIDE_LENGTH * 100.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[1],
            SIDE_LENGTH * 147.5 / 25,
            SIDE_LENGTH * 125.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[2],
            SIDE_LENGTH * 70.0 / 25,
            SIDE_LENGTH * 120.0 / 25,
            -70.35,
          );
          this.setSvgTextInfo(
            infos[3],
            SIDE_LENGTH * 180.0 / 25,
            SIDE_LENGTH * 120.0 / 25,
            -70.35,
          );

          this.setSvgTextInfo(
            infos[4],
            SIDE_LENGTH * 120.0 / 25,
            SIDE_LENGTH * 128.0 / 25,
            -83.45,
          );
          this.setSvgTextInfo(
            infos[5],
            SIDE_LENGTH * 82.5 / 25,
            SIDE_LENGTH * 188.0 / 25,
            83.45,
          );
          this.setSvgTextInfo(
            infos[6],
            SIDE_LENGTH * 195.0 / 25,
            SIDE_LENGTH * 147.5 / 25,
            166.9,
          );
          this.setSvgTextInfo(
            infos[7],
            SIDE_LENGTH * 95.0 / 25,
            SIDE_LENGTH * 110.0 / 25,
            193.1,
          );

          this.setSvgTextInfo(
            infos[8],
            SIDE_LENGTH * 139.0 / 25,
            SIDE_LENGTH * 44.0 / 25,
            13.1,
          );
          this.setSvgTextInfo(
            infos[9],
            SIDE_LENGTH * 97.5 / 25,
            SIDE_LENGTH * 58.0 / 25,
            206.2,
          );
          this.setSvgTextInfo(
            infos[10],
            SIDE_LENGTH * 125.0 / 25,
            SIDE_LENGTH * 70.0 / 25,
            -70.35,
          );
          this.setSvgTextInfo(
            infos[11],
            SIDE_LENGTH * 114.0 / 25,
            SIDE_LENGTH * 27.0 / 25,
            96.55,
          );

          this.setSvgTextInfo(
            infos[12],
            SIDE_LENGTH * 102.0 / 25,
            SIDE_LENGTH * 138.0 / 25,
            96.55,
          );
          this.setSvgTextInfo(
            infos[13],
            SIDE_LENGTH * 102.0 / 25,
            SIDE_LENGTH * 183.0 / 25,
            263.45,
          );
          this.setSvgTextInfo(
            infos[14],
            SIDE_LENGTH * 80.0 / 25,
            SIDE_LENGTH * 160.0 / 25,
            180,
          );
          this.setSvgTextInfo(
            infos[15],
            SIDE_LENGTH * 126.0 / 25,
            SIDE_LENGTH * 154.0 / 25,
            13.1,
          );

          this.setSvgTextInfo(
            infos[16],
            SIDE_LENGTH * 30.0 / 25,
            SIDE_LENGTH * 78.0 / 25,
            0,
          );
          this.setSvgTextInfo(
            infos[17],
            SIDE_LENGTH * 137.0 / 25,
            SIDE_LENGTH * 95.0 / 25,
            26.2,
          );
          this.setSvgTextInfo(
            infos[18],
            SIDE_LENGTH * 110.0 / 25,
            SIDE_LENGTH * 84.0 / 25,
            109.65,
          );
          this.setSvgTextInfo(
            infos[19],
            SIDE_LENGTH * 130.0 / 25,
            SIDE_LENGTH * 16.0 / 25,
            -83.45,
          );

          this.setSvgTextInfo(
            infos[20],
            SIDE_LENGTH * 160.0 / 25,
            SIDE_LENGTH * 80.0 / 25,
            122.75,
          );
          this.setSvgTextInfo(
            infos[21],
            SIDE_LENGTH * 60.0 / 25,
            SIDE_LENGTH * 77.0 / 25,
            96.55,
          );
          this.setSvgTextInfo(
            infos[22],
            SIDE_LENGTH * 195.0 / 25,
            SIDE_LENGTH * 93.0 / 25,
            13.1,
          );
          this.setSvgTextInfo(
            infos[23],
            SIDE_LENGTH * 83.0 / 25,
            SIDE_LENGTH * 93.0 / 25,
            13.1,
          );
        }

        appendLine(
          svg: SVGElement,
          STYLE: string,
          x1: number,
          x2: number,
          y1: number,
          y2: number,
          viewBox: ViewBoxType | null,
        ) {
          const line = document.createElementNS(
            SVG_NS,
            "line",
          ) as SVGLineElement;
          line.setAttribute("x1", `${x1}mm`);
          line.setAttribute("x2", `${x2}mm`);
          line.setAttribute("y1", `${y1}mm`);
          line.setAttribute("y2", `${y2}mm`);

          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }

          line.setAttribute("style", STYLE);
          svg.appendChild(line);
        }

        appendCircle(
          svg: SVGElement,
          STYLE: string,
          cx: number,
          cy: number,
          radius: number,
          viewBox: ViewBoxType | null,
        ) {
          const circle = document.createElementNS(
            SVG_NS,
            "circle",
          ) as SVGCircleElement;
          circle.setAttribute("cx", `${cx}mm`);
          circle.setAttribute("cy", `${cy}mm`);
          circle.setAttribute("r", `${radius}mm`);
          circle.setAttribute("fill", "#ffffff");

          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, cx - radius);
            viewBox.right = Math.max(viewBox.right, cx + radius);
            viewBox.top = Math.min(viewBox.top, cy - radius);
            viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
          }

          circle.setAttribute("style", STYLE);
          svg.appendChild(circle);
        }

        appendTspan(
          text: SVGTextElement,
          STYLE: string,
          CHAR: string,
          dx: number,
          dy: number,
          rotate: RotateType,
        ) {
          // https://developer.mozilla.org/en_us-US/docs/Web/SVG/Element/tspan
          const tspan = document.createElementNS(
            SVG_NS,
            "tspan",
          ) as SVGTSpanElement;
          tspan.setAttribute("dx", `${dx}mm`);
          tspan.setAttribute("dy", `${dy}mm`);
          tspan.setAttribute("rotate", rotate.toString());
          tspan.setAttribute(
            "style",
            STYLE.concat(
              "dominant-baseline:middle;text-anchor:middle;",
              CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "",
              CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
            ),
          );

          tspan.innerHTML = CHAR;
          text.appendChild(tspan);
        }

        appendText(
          svg: SVGElement,
          STYLE: string,
          CONTENT: string,
          x: number,
          y: number,
          rotate: RotateType,
          viewBox: ViewBoxType | null,
        ) {
          const g = document.createElementNS(SVG_NS, "g") as SVGGElement;
          // g.setAttribute('x', `${x}mm`);
          // g.setAttribute('y', `${y}mm`);
          // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
          if (rotate) {
            g.setAttribute(
              "style",
              `transform: rotate(${rotate}deg);transform-origin: 50% 50%;`,
            );
          }

          svg.appendChild(g);

          const text = document.createElementNS(
            SVG_NS,
            "text",
          ) as SVGTextElement;
          text.setAttribute("x", `${x}mm`);
          text.setAttribute("y", `${y}mm`);
          text.setAttribute(
            "style",
            "dominant-baseline:middle;text-anchor:middle;",
          );
          // text.setAttribute('dx', '0');
          // text.setAttribute('dy', '0');
          // text.setAttribute('rotate', rotate.toString());

          if (CONTENT.indexOf("<") > -1) {
            text.innerHTML = CONTENT;
          } else {
            CONTENT.split("").forEach((char, index) => {
              this.appendTspan(text, "", char, 0, 0, 0);
            });
          }

          g.appendChild(text);

          if (viewBox) {
            // left/top/right/bottom/width/height
            const clientRects = text.getClientRects();
            const { left: x1, right: x2, top: y1, bottom: y2 } =
              (clientRects.length
                ? clientRects.item(0)
                : text.getBoundingClientRect()) as DOMRect;
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }

          text.setAttribute("style", STYLE);
        }

        setSvgTextInfo(
          info: SvgTextInfo,
          x: number,
          y: number,
          rotate: RotateType,
        ) {
          info.x = x;
          info.y = y;
          info.rotate = rotate;
        }
      }
    }
  }
}

// export default edu.sonya.cc;
