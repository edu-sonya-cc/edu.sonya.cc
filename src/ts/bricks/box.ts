// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, getBodyElement } from '../dom';
// import { DPIHelper } from '../DPIHelper';
// import { svgSpace } from '../svgHelper';

/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
/// <reference path='../../types/svgHelper.d.ts' />

namespace boxSpace {
  export namespace edu {
    export namespace sonya {
      export namespace cc {
        /**
         * <en>Box Type</en>
         * <zh_cn>盒子类型</zh_cn>
         * <zh_tw>骰子類型</zh_tw>
         */
        export enum BoxKind {
          /**
           * <en>None</en>
           * <zh_cn>无</zh_cn>
           * <zh_tw>無</zh_tw>
           */
          none = 0,
          /**
           * <en>Cuboid</en>
           * <zh_cn>长方体</zh_cn>
           * <zh_tw>長方體</zh_tw>
           */
          cuboid = 1,
          /**
           * <en>Cuboid without top</en>
           * <zh_cn>无顶长方体</zh_cn>
           * <zh_tw>無頂長方體</zh_tw>
           */
          cuboidWithoutTop = 2,
          /**
           * <en>Cuboid without bottom</en>
           * <zh_cn>无底长方体</zh_cn>
           * <zh_tw>無底長方體</zh_tw>
           */
          cuboidWithoutBottom = 3,
          /**
           * <en>Cuboid which cover on the same side</en>
           * <zh_cn>盖子同侧长方体</zh_cn>
           * <zh_tw>蓋子同側長方體</zh_tw>
           */
          cuboidCoverOnTheSameSide = 4,
          /**
           * <en>Cuboid which cover on the same side and without top</en>
           * <zh_cn>盖子同侧无顶长方体</zh_cn>
           * <zh_tw>蓋子同側無頂長方體</zh_tw>
           */
          cuboidCoverOnTheSameSideWithoutTop = 5,
          /**
           * <en>Cuboid which cover on the same side and without bottom</en>
           * <zh_cn>盖子同侧无底长方体</zh_cn>
           * <zh_tw>蓋子同側無底長方體</zh_tw>
           */
          cuboidCoverOnTheSameSideWithoutBottom = 6,
        }

        /**
         * <en>Box Generation Parameters</en>
         * <zh_cn>盒子生成参数</zh_cn>
         * <zh_tw>盒子生成參數</zh_tw>
         */
        export interface BoxParameter {
          /**
           * <en>Id</en>
           * <zh_cn>id</zh_cn>
           * <zh_tw>id</zh_tw>
           */
          id: string;

          /**
           * <en>Box Type</en>
           * <zh_cn>盒子类型</zh_cn>
           * <zh_tw>骰子類型</zh_tw>
           */
          boxKind: BoxKind;

          /**
           * <en>Relevant length, such as length, width and height</en>
           * <zh_cn>相关长度，如长宽高</zh_cn>
           * <zh_tw>相關長度，如長寬高</zh_tw>
           */
          lengths: Array<number>;

          /**
           * <en>Contents of all sides</en>
           * <zh_cn>各面内容</zh_cn>
           * <zh_tw>各面內容</zh_tw>
           */
          contents: Array<I18nable | string>;

          /**
           * <en>Outside Boundary Line Style</en>
           * <zh_cn>外边界线样式</zh_cn>
           * <zh_tw>外邊界線樣式</zh_tw>
           */
          outerLineStyle: string;

          /**
           * <en>Interior Line Style</en>
           * <zh_cn>内部线样式</zh_cn>
           * <zh_tw>內部線樣式</zh_tw>
           */
          innerLineStyle: string;

          /**
           * <en>Text Style</en>
           * <zh_cn>文本样式</zh_cn>
           * <zh_tw>文字樣式</zh_tw>
           */
          textStyle: string;

          /**
           * <en>Rotate</en>
           * <zh_cn>旋转</zh_cn>
           * <zh_tw>旋轉</zh_tw>
           */
          rotate: boolean;

          /**
           * <en>Move Up</en>
           * <zh_cn>上移</zh_cn>
           * <zh_tw>上移</zh_tw>
           */
          move: boolean;

          /**
           * <en>Hide the half cirlce of box top</en>
           * <zh_cn>隐藏盒顶半圆</zh_cn>
           * <zh_tw>隱藏盒頂半圓</zh_tw>
           */
          topWithoutHalfCircle: boolean;

          /**
           * <en>Other parameters</en>
           * <zh_cn>其它参数</zh_cn>
           * <zh_tw>其它參數</zh_tw>
           */
          options: object;
        }

        /**
         * <en>Box Generation Result</en>
         * <zh_cn>盒子生成结果</zh_cn>
         * <zh_tw>盒子生成結果</zh_tw>
         */
        export interface BoxResult {
          /**
           * <en>Svg Element Id</en>
           * <zh_cn>svg元素编号</zh_cn>
           * <zh_tw>svg元素編號</zh_tw>
           */
          id: string;

          /**
           * <en>Svg Element</en>
           * <zh_cn>svg元素</zh_cn>
           * <zh_tw>svg元素</zh_tw>
           */
          svg: SVGElement;

          /**
           * <en>css</en>
           * <zh_cn>样式表</zh_cn>
           * <zh_tw>樣式表</zh_tw>
           */
          css: string;
        }

        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        const SVG_NS = "http://www.w3.org/2000/svg";
        const SVG_XLINKNS = "http://www.w3.org/1999/xlink";

        /**
         * <en>Box Generator</en>
         * <zh_cn>盒子生成器</zh_cn>
         * <zh_tw>盒子生成器</zh_tw>
         */
        export class BoxGenerator {
          /**
           * <en>Generate box in batch</en>
           * <zh_cn>批量生成盒子</zh_cn>
           * <zh_tw>批量生成盒子</zh_tw>
           * @param createParameters
           * <en>Arrays: creating parameters</en>
           * <zh_cn>数组：创建参数</zh_cn>
           * <zh_tw>數組：創建參數</zh_tw>
           * @returns
           * <en>Generate results in array format, used to combine complete html</en>
           * <zh_cn>生成结果，为数组格式，用于组合完整的html</zh_cn>
           * <zh_tw>生成結果，為數組格式，用於組合完整的html</zh_tw>
           */
          public batchCreate(
            createParameters: Array<BoxParameter>,
          ): Array<BoxResult> {
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
           * <en>Generate a single box</en>
           * <zh_cn>生成单个盒子</zh_cn>
           * <zh_tw>生成單個盒子</zh_tw>
           * @param param0
           * <en>Deconstructed creation parameters</en>
           * <zh_cn>已解构的创建参数</zh_cn>
           * <zh_tw>已解構的創建參數</zh_tw>
           * @returns
           * <en>Generate results, used to combine complete html</en>
           * <zh_cn>生成结果，用于组合完整的html</zh_cn>
           * <zh_tw>生成結果，用於組合完整的html</zh_tw>
           */
          public create({
            id,
            boxKind,
            lengths: LENGTHS,
            contents: CONTENTS,
            outerLineStyle: OUTER_LINE_STYLE,
            innerLineStyle: INNER_LINE_STYLE,
            textStyle: TEXT_STYLE,
            rotate: ROTATE,
            move: MOVE,
            topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE,
            options: OPTIONS,
          }: BoxParameter): BoxResult {
            if (id.length === 0) id = "svg_0";

            const FIRST_LENGTH = LENGTHS[0];
            let FIXED_FIRST_LENGTH = FIRST_LENGTH;
            let nested = false;
            // switch(boxKind) {
            //   case BoxKind.twentyFour:
            //     FIXED_FIRST_LENGTH = 25;
            //     nested = true;
            //     break;
            //   default:
            //     break;
            // }

            type SvgTextInfo = svgSpace.edu.sonya.cc.SvgTextInfo;
            const { createSvg, appendText } = svgSpace.edu.sonya.cc.SvgHelper;

            const svg = createSvg();
            svg.setAttribute("id", id);

            const viewBox = {
              left: 999999,
              right: 0,
              top: 999999,
              bottom: 0,
            };
            const infos = [] as Array<SvgTextInfo>;
            switch (boxKind) {
              // case BoxKind.four:
              //   CONTENTS.forEach((content: I18nable | string) => {
              //     for(let i = 0; i < 3; ++i) {
              //       infos.push({ content, x: 0, y: 0, rotate: 0 });
              //     }
              //   });
              //   break;
              default:
                CONTENTS.forEach((content: I18nable | string) => {
                  infos.push({ content, x: 0, y: 0, rotate: 0 });
                });
                break;
            }

            const mmToPxScale = (new DPIHelper()).getMmToPxScale();
            switch (boxKind) {
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                this.drawGraphsOfCuboidBox(
                  svg,
                  LENGTHS,
                  INNER_LINE_STYLE,
                  OUTER_LINE_STYLE,
                  viewBox,
                  OPTIONS,
                  mmToPxScale,
                  boxKind,
                  ROTATE,
                  MOVE,
                  TOP_WITHOUT_HALF_CIRCLE,
                );
                this.drawTextsOfCuboiBox(infos, LENGTHS, boxKind);
                break;
              default:
                break;
            }
            infos.forEach(({ content, x, y, rotate }) => {
              appendText(
                svg,
                TEXT_STYLE,
                content,
                x,
                y,
                rotate,
                "left top",
                null,
              );
            });

            const width = `${viewBox.right}mm`;
            const height = `${viewBox.bottom}mm`;
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            // svg.setAttribute('style', `width:${width};height:${height};`);

            // const outerSvg = nested && (FIXED_FIRST_LENGTH !== FIRST_LENGTH) ? this.createSvg(): null;
            const outerSvg = createElement("wrap"); // as HTMLDivElement;
            outerSvg.appendChild(svg);
            outerSvg.setAttribute("id", id.concat("_wrapper"));
            if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
              const scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;

              const widthOuterSvg = `${scale * viewBox.right}mm`;
              const heightOuterSvg = `${scale * viewBox.bottom}mm`;

              const transformScale = mmToPxScale * (scale - 1) / 2;
              outerSvg.setAttribute(
                "style",
                `width:${widthOuterSvg};height:${heightOuterSvg};display:inline-block;`,
              );
              svg.setAttribute(
                "transform",
                `translate(${viewBox.right * transformScale}, ${viewBox.bottom *
                  transformScale}) scale(${scale}, ${scale})`,
              );
              svg.setAttribute("transform-origin", "center");
            }

            const css =
              "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
            return { id, svg: nested ? outerSvg : svg, css };
          }

          drawGraphsOfCuboidBox(
            svg: SVGElement,
            LENGTHS: number[],
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
            boxKind: BoxKind,
            ROTATE: boolean,
            MOVE: boolean,
            TOP_WITHOUT_HALF_CIRCLE: boolean,
          ) {
            const isSameSide = boxKind >= 4;
            const LENGTH = LENGTHS[0];
            const WIDTH = LENGTHS[2];
            const HEIGHT = LENGTHS[1];
            const OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
            const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);

            const LENGTH_PX = LENGTH * mmToPxScale;
            const WIDTH_PX = WIDTH * mmToPxScale;
            const HEIGHT_PX = HEIGHT * mmToPxScale;
            const OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;

            const duckTongueScale = 0.5;
            const duckTongueHeight = MIN_LENGTH * duckTongueScale;
            const duckTongueHeightPx = duckTongueHeight * mmToPxScale;

            const pasteRegionScale = 0.45;
            const pasteRegionHeight = LENGTH * pasteRegionScale;
            const pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;

            const offsetScale = 0.1;
            const offsetXPx = LENGTH_PX * offsetScale;
            const pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;

            const duckTongueWidth = LENGTH * (1 - offsetScale * 2);
            const duckTongueWidthPx = duckTongueWidth * mmToPxScale;
            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);

            const YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            const YDifferencePx = YDifference * mmToPxScale;

            const diameter = duckTongueHeight * 0.8;
            const radius = diameter * 0.5;
            const lengthSubtractDiameter = LENGTH - diameter;
            const halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
            const halfLengthSubtractDiameterPx = halfLengthSubtractDiameter *
              mmToPxScale;
            const radiusPx = radius * mmToPxScale;
            const diameterPx = diameter * mmToPxScale;

            const smallDiameter = diameter * 0.5;
            const smallRadius = smallDiameter * 0.5;
            const smallDiameterPx = smallDiameter * mmToPxScale;
            const smallRadiusPx = smallRadius * mmToPxScale;

            const pasteRegionHeightSubtractSmallRadiusPx = pasteRegionHeightPx -
              smallRadiusPx;
            const pasteRegionWidthSubtractSmallDiameterPx = pasteRegionWidthPx -
              smallDiameterPx;

            const duckTongueHeightSubtractRadiusPx = duckTongueHeightPx -
              radiusPx;
            const duckTongueWidthSubtractDiameterPx = duckTongueWidthPx -
              diameterPx;

            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);
            const pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
            const path = document.createElementNS(SVG_NS, "path");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000000");

            if (boxKind < 4) {
              path.setAttribute(
                "d",
                `M 0, ${pathStartY} `
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html

                    boxKind === BoxKind.cuboidWithoutTop
                      ? `h ${HEIGHT_PX * 3 + LENGTH_PX * 2} `
                      : "".concat(
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            `h ${HEIGHT_PX + halfLengthSubtractDiameterPx} `,
                            `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`,
                            `h ${halfLengthSubtractDiameterPx} `,
                          )
                          : "".concat(
                            `h ${HEIGHT_PX + LENGTH_PX} `,
                          ),
                        `l ${offsetXPx}, -${pasteRegionHeightPx} `,
                        `h ${pasteRegionWidthPx} `,
                        `l ${offsetXPx}, ${pasteRegionHeightPx} `,
                        `v -${HEIGHT_PX} `,
                        `l ${offsetXPx}, -${duckTongueHeightPx} `,
                        `h ${duckTongueWidthPx} `,
                        `l ${offsetXPx}, ${duckTongueHeightPx} `,
                        `v ${HEIGHT_PX} `,
                        // `h ${HEIGHT_PX} `,
                        `l ${offsetXPx}, -${pasteRegionHeightPx} `,
                        `h ${pasteRegionWidthPx} `,
                        `l ${offsetXPx}, ${pasteRegionHeightPx} `,
                      ),
                    `v ${WIDTH_PX} `,
                    `h -${LENGTH_PX + HEIGHT_PX} `,
                    boxKind === BoxKind.cuboidWithoutBottom
                      ? `h -${HEIGHT_PX * 2 + LENGTH_PX} `
                      : "".concat(
                        `l -${offsetXPx}, ${pasteRegionHeightPx} `,
                        `h -${pasteRegionWidthPx} `,
                        `l -${offsetXPx}, -${pasteRegionHeightPx} `,
                        `v ${HEIGHT_PX} `,
                        `l -${offsetXPx}, ${duckTongueHeightPx} `,
                        `h -${duckTongueWidthPx} `,
                        `l -${offsetXPx}, -${duckTongueHeightPx} `,
                        `v -${HEIGHT_PX} `,
                        `l -${offsetXPx}, ${pasteRegionHeightPx} `,
                        `h -${pasteRegionWidthPx} `,
                        `l -${offsetXPx}, -${pasteRegionHeightPx} `,
                      ),
                    " z",
                  ),
              );
            } else {
              path.setAttribute(
                "d",
                `M 0, ${pathStartY} `
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html

                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop
                      ? `h ${HEIGHT_PX * 2 + LENGTH_PX * 2 + OTHER_SIZE_PX} `
                      : "".concat(
                        `l ${offsetXPx}, -${pasteRegionHeightPx} `,
                        `h ${pasteRegionWidthPx} `,
                        `l ${offsetXPx}, ${pasteRegionHeightPx} `,
                        `v -${HEIGHT_PX} `,
                        `l ${offsetXPx}, -${duckTongueHeightPx} `,
                        `h ${duckTongueWidthPx} `,
                        `l ${offsetXPx}, ${duckTongueHeightPx} `,
                        `v ${HEIGHT_PX} `,
                        `l ${offsetXPx}, -${pasteRegionHeightPx} `,
                        `h ${pasteRegionWidthPx} `,
                        `l ${offsetXPx}, ${pasteRegionHeightPx} `,
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            `h ${halfLengthSubtractDiameterPx} `,
                            `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`,
                            `h ${halfLengthSubtractDiameterPx +
                              OTHER_SIZE_PX} `,
                          )
                          : "".concat(
                            `h ${LENGTH_PX + OTHER_SIZE_PX} `,
                          ),
                      ),
                    `v ${WIDTH_PX} `,
                    `h -${LENGTH_PX + OTHER_SIZE_PX} `,
                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom
                      ? `h -${HEIGHT_PX * 2 + LENGTH_PX} `
                      : "".concat(
                        `l -${offsetXPx}, ${pasteRegionHeightPx} `,
                        `h -${pasteRegionWidthPx} `,
                        `l -${offsetXPx}, -${pasteRegionHeightPx} `,
                        `v ${HEIGHT_PX} `,
                        `l -${offsetXPx}, ${duckTongueHeightPx} `,
                        `h -${duckTongueWidthPx} `,
                        `l -${offsetXPx}, -${duckTongueHeightPx} `,
                        `v -${HEIGHT_PX} `,
                        `l -${offsetXPx}, ${pasteRegionHeightPx} `,
                        `h -${pasteRegionWidthPx} `,
                        `l -${offsetXPx}, -${pasteRegionHeightPx} `,
                      ),
                    " z",
                  ),
              );
            }
            svg.appendChild(path);

            let style = "";
            if (ROTATE) {
              style = "transform:rotate(180deg);";
            }
            if (MOVE) {
              style += `position:relative;margin-top:-${HEIGHT +
                duckTongueHeight -
                Math.max(
                  0,
                  pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight),
                )}mm;`;
            }
            if (style.length) {
              svg.setAttribute("style", style);
            }

            const X1 = 0;
            const X2 = X1 + HEIGHT;
            const X3 = X2 + LENGTH;
            const X4 = X3 + HEIGHT;
            const X5 = X4 + LENGTH;
            const X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);

            const Y1 = 0 - YDifference;
            const Y2 = Y1 + duckTongueHeight;
            const Y4 = Y2 + HEIGHT;
            const Y5 = Y4 + WIDTH;
            const Y7 = Y5 + HEIGHT;
            const Y8 = Y7 + duckTongueHeight;
            const Y3 = Y4 - pasteRegionHeight;
            const Y6 = Y5 + duckTongueHeight;

            const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
            if (boxKind < 4) {
              if (boxKind !== BoxKind.cuboidWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
              }
            } else {
              if (boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutTop) {
                appendLine(svg, INNER_LINE_STYLE, X2, X3, Y2, Y2, null);
                appendLine(svg, INNER_LINE_STYLE, X1, X4, Y4, Y4, null);
              }
            }
            if (
              boxKind !== BoxKind.cuboidWithoutBottom &&
              boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutBottom
            ) {
              appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
            }

            appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
            appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);

            viewBox.left = 0;
            viewBox.top = 0;
            viewBox.right = X6;
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                viewBox.bottom = Y8 - (duckTongueHeight + HEIGHT);
                break;
              default:
                viewBox.bottom = Y8;
                break;
            }
          }

          private drawTextsOfCuboiBox(
            infos: {
              content: any;
              x: number;
              y: number;
              rotate: number | "auto" | "auto-reverse";
            }[],
            LENGTHS: number[],
            boxKind: BoxKind,
          ) {
            const { setSvgTextInfo } = svgSpace.edu.sonya.cc.SvgHelper;
            const LENGTH = LENGTHS[0];
            const WIDTH = LENGTHS[2];
            const HEIGHT = LENGTHS[1];

            const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);

            const duckTongueScale = 0.5;
            const duckTongueHeight = MIN_LENGTH * duckTongueScale;

            const YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;

            const X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
            const X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            const X3 = HEIGHT + LENGTH * 0.5;
            const X4 = X1;
            const X5 = -X2;
            const X6 = X3;

            const Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
            const Y2 = -1 * (HEIGHT * 0.5);
            const Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            const Y4 = -1 *
              (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
            const Y5 = HEIGHT * 1.5 + LENGTH;
            const Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 -
              YDifference;

            switch (boxKind) {
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                infos[0].content = "";
                break;
              case BoxKind.cuboid:
              case BoxKind.cuboidWithoutBottom:
                setSvgTextInfo(infos[0], X1, Y1, 180);
                break;
              case BoxKind.cuboidCoverOnTheSameSide:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                setSvgTextInfo(infos[0], -1 * (HEIGHT + LENGTH * 0.5), Y1, 180);
                break;
              default:
                break;
            }
            setSvgTextInfo(infos[1], X2, Y2, 90);
            setSvgTextInfo(infos[2], X3, Y3, 0);
            setSvgTextInfo(infos[3], X4, Y4, 180);
            setSvgTextInfo(infos[4], X5, Y5, -90);
            switch (boxKind) {
              case BoxKind.cuboidWithoutBottom:
              case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                infos[5].content = "";
                break;
              case BoxKind.cuboidWithoutTop:
              case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
              case BoxKind.cuboid:
              case BoxKind.cuboidCoverOnTheSameSide:
                setSvgTextInfo(infos[5], X6, Y6, 0);
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }
}
