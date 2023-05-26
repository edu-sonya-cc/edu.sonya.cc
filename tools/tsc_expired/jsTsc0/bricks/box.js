"use strict";
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, getBodyElement } from '../dom';
// import { DPIHelper } from '../DPIHelper';
// import { svgSpace } from '../svgHelper';
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
/// <reference path='../../types/svgHelper.d.ts' />
var boxSpace;
(function (boxSpace) {
  var edu;
  (function (edu) {
    var sonya;
    (function (sonya) {
      var cc;
      (function (cc) {
        /**
                 * <en>Box Type</en>
                 * <zh_cn>盒子类型</zh_cn>
                 * <zh_tw>骰子類型</zh_tw>
                 */
        var BoxKind;
        (function (BoxKind) {
          /**
                     * <en>None</en>
                     * <zh_cn>无</zh_cn>
                     * <zh_tw>無</zh_tw>
                     */
          BoxKind[BoxKind["none"] = 0] = "none";
          /**
                     * <en>Cuboid</en>
                     * <zh_cn>长方体</zh_cn>
                     * <zh_tw>長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboid"] = 1] = "cuboid";
          /**
                     * <en>Cuboid without top</en>
                     * <zh_cn>无顶长方体</zh_cn>
                     * <zh_tw>無頂長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboidWithoutTop"] = 2] = "cuboidWithoutTop";
          /**
                     * <en>Cuboid without bottom</en>
                     * <zh_cn>无底长方体</zh_cn>
                     * <zh_tw>無底長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboidWithoutBottom"] = 3] = "cuboidWithoutBottom";
          /**
                     * <en>Cuboid which cover on the same side</en>
                     * <zh_cn>盖子同侧长方体</zh_cn>
                     * <zh_tw>蓋子同側長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboidCoverOnTheSameSide"] = 4] =
            "cuboidCoverOnTheSameSide";
          /**
                     * <en>Cuboid which cover on the same side and without top</en>
                     * <zh_cn>盖子同侧无顶长方体</zh_cn>
                     * <zh_tw>蓋子同側無頂長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutTop"] = 5] =
            "cuboidCoverOnTheSameSideWithoutTop";
          /**
                     * <en>Cuboid which cover on the same side and without bottom</en>
                     * <zh_cn>盖子同侧无底长方体</zh_cn>
                     * <zh_tw>蓋子同側無底長方體</zh_tw>
                     */
          BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutBottom"] = 6] =
            "cuboidCoverOnTheSameSideWithoutBottom";
        })(BoxKind = cc.BoxKind || (cc.BoxKind = {}));
        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        var SVG_NS = "http://www.w3.org/2000/svg";
        var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        /**
                 * <en>Box Generator</en>
                 * <zh_cn>盒子生成器</zh_cn>
                 * <zh_tw>盒子生成器</zh_tw>
                 */
        var BoxGenerator = /** @class */ (function () {
          function BoxGenerator() {
          }
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
          BoxGenerator.prototype.batchCreate = function (createParameters) {
            var _this = this;
            createParameters.forEach(function (createParameter, index) {
              if (createParameter.id.length === 0) {
                createParameter.id = "svg_index";
              }
            });
            return createParameters.map(function (createParameter) {
              return _this.create(createParameter);
            });
          };
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
          BoxGenerator.prototype.create = function (_a) {
            var id = _a.id,
              boxKind = _a.boxKind,
              LENGTHS = _a.lengths,
              CONTENTS = _a.contents,
              OUTER_LINE_STYLE = _a.outerLineStyle,
              INNER_LINE_STYLE = _a.innerLineStyle,
              TEXT_STYLE = _a.textStyle,
              ROTATE = _a.rotate,
              MOVE = _a.move,
              TOP_WITHOUT_HALF_CIRCLE = _a.topWithoutHalfCircle,
              OPTIONS = _a.options;
            if (id.length === 0) {
              id = "svg_0";
            }
            var FIRST_LENGTH = LENGTHS[0];
            var FIXED_FIRST_LENGTH = FIRST_LENGTH;
            var nested = false;
            var _b = svgSpace.edu.sonya.cc.SvgHelper,
              createSvg = _b.createSvg,
              appendText = _b.appendText;
            var svg = createSvg();
            svg.setAttribute("id", id);
            var viewBox = {
              left: 999999,
              right: 0,
              top: 999999,
              bottom: 0,
            };
            var infos = [];
            switch (boxKind) {
              // case BoxKind.four:
              //   CONTENTS.forEach((content: I18nable | string) => {
              //     for(let i = 0; i < 3; ++i) {
              //       infos.push({ content, x: 0, y: 0, rotate: 0 });
              //     }
              //   });
              //   break;
              default:
                CONTENTS.forEach(function (content) {
                  infos.push({ content: content, x: 0, y: 0, rotate: 0 });
                });
                break;
            }
            var mmToPxScale = (new DPIHelper()).getMmToPxScale();
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
            infos.forEach(function (_a) {
              var content = _a.content, x = _a.x, y = _a.y, rotate = _a.rotate;
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
            var width = "".concat(viewBox.right, "mm");
            var height = "".concat(viewBox.bottom, "mm");
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            // svg.setAttribute('style', `width:${width};height:${height};`);
            // const outerSvg = nested && (FIXED_FIRST_LENGTH !== FIRST_LENGTH) ? this.createSvg(): null;
            var outerSvg = createElement("wrap"); // as HTMLDivElement;
            outerSvg.appendChild(svg);
            outerSvg.setAttribute("id", id.concat("_wrapper"));
            if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
              var scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;
              var widthOuterSvg = "".concat(scale * viewBox.right, "mm");
              var heightOuterSvg = "".concat(scale * viewBox.bottom, "mm");
              var transformScale = mmToPxScale * (scale - 1) / 2;
              outerSvg.setAttribute(
                "style",
                "width:".concat(widthOuterSvg, ";height:").concat(
                  heightOuterSvg,
                  ";display:inline-block;",
                ),
              );
              svg.setAttribute(
                "transform",
                "translate(".concat(viewBox.right * transformScale, ", ")
                  .concat(viewBox.bottom * transformScale, ") scale(").concat(
                    scale,
                    ", ",
                  ).concat(scale, ")"),
              );
              svg.setAttribute("transform-origin", "center");
            }
            var css =
              "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
            return { id: id, svg: nested ? outerSvg : svg, css: css };
          };
          BoxGenerator.prototype.drawGraphsOfCuboidBox = function (
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
          ) {
            var isSameSide = boxKind >= 4;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var LENGTH_PX = LENGTH * mmToPxScale;
            var WIDTH_PX = WIDTH * mmToPxScale;
            var HEIGHT_PX = HEIGHT * mmToPxScale;
            var OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var duckTongueHeightPx = duckTongueHeight * mmToPxScale;
            var pasteRegionScale = 0.45;
            var pasteRegionHeight = LENGTH * pasteRegionScale;
            var pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;
            var offsetScale = 0.1;
            var offsetXPx = LENGTH_PX * offsetScale;
            var pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;
            var duckTongueWidth = LENGTH * (1 - offsetScale * 2);
            var duckTongueWidthPx = duckTongueWidth * mmToPxScale;
            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var YDifferencePx = YDifference * mmToPxScale;
            var diameter = duckTongueHeight * 0.8;
            var radius = diameter * 0.5;
            var lengthSubtractDiameter = LENGTH - diameter;
            var halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
            var halfLengthSubtractDiameterPx = halfLengthSubtractDiameter *
              mmToPxScale;
            var radiusPx = radius * mmToPxScale;
            var diameterPx = diameter * mmToPxScale;
            var smallDiameter = diameter * 0.5;
            var smallRadius = smallDiameter * 0.5;
            var smallDiameterPx = smallDiameter * mmToPxScale;
            var smallRadiusPx = smallRadius * mmToPxScale;
            var pasteRegionHeightSubtractSmallRadiusPx = pasteRegionHeightPx -
              smallRadiusPx;
            var pasteRegionWidthSubtractSmallDiameterPx = pasteRegionWidthPx -
              smallDiameterPx;
            var duckTongueHeightSubtractRadiusPx = duckTongueHeightPx -
              radiusPx;
            var duckTongueWidthSubtractDiameterPx = duckTongueWidthPx -
              diameterPx;
            // console.log(LENGTH, WIDTH, HEIGHT, MIN_LENGTH, mmToPxScale, LENGTH_PX);
            var pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
            var path = document.createElementNS(SVG_NS, "path");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#000000");
            if (boxKind < 4) {
              path.setAttribute(
                "d",
                "M 0, ".concat(pathStartY, " ")
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html
                    boxKind === BoxKind.cuboidWithoutTop
                      ? "h ".concat(HEIGHT_PX * 3 + LENGTH_PX * 2, " ")
                      : "".concat(
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            "h ".concat(
                              HEIGHT_PX + halfLengthSubtractDiameterPx,
                              " ",
                            ),
                            "a ".concat(radiusPx, " ").concat(
                              radiusPx,
                              " 0 1 0 ",
                            ).concat(diameterPx, " 0"),
                            "h ".concat(halfLengthSubtractDiameterPx, " "),
                          )
                          : "".concat("h ".concat(HEIGHT_PX + LENGTH_PX, " ")),
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h ".concat(duckTongueWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        // `h ${HEIGHT_PX} `,
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    "v ".concat(WIDTH_PX, " "),
                    "h -".concat(LENGTH_PX + HEIGHT_PX, " "),
                    boxKind === BoxKind.cuboidWithoutBottom
                      ? "h -".concat(HEIGHT_PX * 2 + LENGTH_PX, " ")
                      : "".concat(
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h -".concat(duckTongueWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    " z",
                  ),
              );
            } else {
              path.setAttribute(
                "d",
                "M 0, ".concat(pathStartY, " ")
                  .concat(
                    // https://www.cnblogs.com/LcxSummer/p/12420385.html
                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop
                      ? "h ".concat(
                        HEIGHT_PX * 2 + LENGTH_PX * 2 + OTHER_SIZE_PX,
                        " ",
                      )
                      : "".concat(
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h ".concat(duckTongueWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l ".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h ".concat(pasteRegionWidthPx, " "),
                        "l ".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        TOP_WITHOUT_HALF_CIRCLE
                          ? "".concat(
                            "h ".concat(halfLengthSubtractDiameterPx, " "),
                            "a ".concat(radiusPx, " ").concat(
                              radiusPx,
                              " 0 1 0 ",
                            ).concat(diameterPx, " 0"),
                            "h ".concat(
                              halfLengthSubtractDiameterPx + OTHER_SIZE_PX,
                              " ",
                            ),
                          )
                          : "".concat(
                            "h ".concat(LENGTH_PX + OTHER_SIZE_PX, " "),
                          ),
                      ),
                    "v ".concat(WIDTH_PX, " "),
                    "h -".concat(LENGTH_PX + OTHER_SIZE_PX, " "),
                    boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom
                      ? "h -".concat(HEIGHT_PX * 2 + LENGTH_PX, " ")
                      : "".concat(
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "v ".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "h -".concat(duckTongueWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          duckTongueHeightPx,
                          " ",
                        ),
                        "v -".concat(HEIGHT_PX, " "),
                        "l -".concat(offsetXPx, ", ").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                        "h -".concat(pasteRegionWidthPx, " "),
                        "l -".concat(offsetXPx, ", -").concat(
                          pasteRegionHeightPx,
                          " ",
                        ),
                      ),
                    " z",
                  ),
              );
            }
            svg.appendChild(path);
            var style = "";
            if (ROTATE) {
              style = "transform:rotate(180deg);";
            }
            if (MOVE) {
              style += "position:relative;margin-top:-".concat(
                HEIGHT + duckTongueHeight -
                  Math.max(
                    0,
                    pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight),
                  ),
                "mm;",
              );
            }
            if (style.length) {
              svg.setAttribute("style", style);
            }
            var X1 = 0;
            var X2 = X1 + HEIGHT;
            var X3 = X2 + LENGTH;
            var X4 = X3 + HEIGHT;
            var X5 = X4 + LENGTH;
            var X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);
            var Y1 = 0 - YDifference;
            var Y2 = Y1 + duckTongueHeight;
            var Y4 = Y2 + HEIGHT;
            var Y5 = Y4 + WIDTH;
            var Y7 = Y5 + HEIGHT;
            var Y8 = Y7 + duckTongueHeight;
            var Y3 = Y4 - pasteRegionHeight;
            var Y6 = Y5 + duckTongueHeight;
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
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
          };
          BoxGenerator.prototype.drawTextsOfCuboiBox = function (
            infos,
            LENGTHS,
            boxKind,
          ) {
            var setSvgTextInfo = svgSpace.edu.sonya.cc.SvgHelper.setSvgTextInfo;
            var LENGTH = LENGTHS[0];
            var WIDTH = LENGTHS[2];
            var HEIGHT = LENGTHS[1];
            var MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
            var duckTongueScale = 0.5;
            var duckTongueHeight = MIN_LENGTH * duckTongueScale;
            var YDifference = (boxKind === BoxKind.cuboidWithoutTop ||
                boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop)
              ? duckTongueHeight + HEIGHT
              : 0;
            var X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
            var X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var X3 = HEIGHT + LENGTH * 0.5;
            var X4 = X1;
            var X5 = -X2;
            var X6 = X3;
            var Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
            var Y2 = -1 * (HEIGHT * 0.5);
            var Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
            var Y4 = -1 *
              (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
            var Y5 = HEIGHT * 1.5 + LENGTH;
            var Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 -
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
          };
          return BoxGenerator;
        }());
        cc.BoxGenerator = BoxGenerator;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
