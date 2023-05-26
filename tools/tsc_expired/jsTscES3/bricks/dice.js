"use strict";
// import { I18nable, createElement } from '../dom';
// import { DPIHelper } from '../DPIHelper';
exports.__esModule = true;
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
var edu;
(function (edu) {
  var sonya;
  (function (sonya) {
    var cc;
    (function (cc) {
      /**
       * <en>Dice Type</en>
       * <zh_cn>骰子类型</zh_cn>
       * <zh_tw>骰子類型</zh_tw>
       */
      var DiceKind;
      (function (DiceKind) {
        /**
         * <en>None</en>
         * <zh_cn>无</zh_cn>
         * <zh_tw>無</zh_tw>
         */
        DiceKind[DiceKind["none"] = 0] = "none";
        /**
         * <en>4-sided dice</en>
         * <zh_cn>4面骰子</zh_cn>
         * <zh_tw>4面骰子</zh_tw>
         */
        DiceKind[DiceKind["four"] = 1] = "four";
        /**
         * <en>6-sided dice</en>
         * <zh_cn>6面骰子</zh_cn>
         * <zh_tw>6面骰子</zh_tw>
         */
        DiceKind[DiceKind["six"] = 2] = "six";
        /**
         * <en>8-sided dice</en>
         * <zh_cn>8面骰子</zh_cn>
         * <zh_tw>8面骰子</zh_tw>
         */
        DiceKind[DiceKind["eight"] = 4] = "eight";
        /**
         * <en>12-sided dice</en>
         * <zh_cn>12面骰子</zh_cn>
         * <zh_tw>12面骰子</zh_tw>
         */
        DiceKind[DiceKind["twelve"] = 8] = "twelve";
        /**
         * <en>20-sided dice</en>
         * <zh_cn>20面骰子</zh_cn>
         * <zh_tw>20面骰子</zh_tw>
         */
        DiceKind[DiceKind["twenty"] = 16] = "twenty";
        /**
         * <en>24-sided dice</en>
         * <zh_cn>24面骰子</zh_cn>
         * <zh_tw>24面骰子</zh_tw>
         */
        DiceKind[DiceKind["twentyFour"] = 32] = "twentyFour";
      })(DiceKind = cc.DiceKind || (cc.DiceKind = {}));
      /**
       * <en>Count of Dice Type</en>
       * <zh_cn>骰子类型数量</zh_cn>
       * <zh_tw>骰子類型數量</zh_tw>
       */
      cc.DiceKindCount = 8;
      /**
       * <en>Default Value of Dice Type</en>
       * <zh_cn>骰子类型默认值</zh_cn>
       * <zh_tw>骰子類型默認值</zh_tw>
       */
      cc.DefaultDiceKind = 63;
      // https://blog.csdn.net/yiyueqinghui/article/details/108004272
      var SVG_NS = "http://www.w3.org/2000/svg";
      var SVG_XLINKNS = "http://www.w3.org/1999/xlink";
      /**
       * <en>Dice Generator</en>
       * <zh_cn>骰子生成器</zh_cn>
       * <zh_tw>骰子生成器</zh_tw>
       */
      var DiceGenerator = /** @class */ (function () {
        function DiceGenerator() {
          this.createSvg = function () {
            var svg = document.createElementNS(SVG_NS, "svg");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("xmlns", SVG_NS);
            svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
            return svg;
          };
        }
        /**
         * <en>Generate dice in batch</en>
         * <zh_cn>批量生成骰子</zh_cn>
         * <zh_tw>批量生成骰子</zh_tw>
         * @param createParameters
         * <en>Arrays: creating parameters</en>
         * <zh_cn>数组：创建参数</zh_cn>
         * <zh_tw>數組：創建參數</zh_tw>
         * @returns
         * <en>Generate results in array format, used to combine complete html</en>
         * <zh_cn>生成结果，为数组格式，用于组合完整的html</zh_cn>
         * <zh_tw>生成結果，為數組格式，用於組合完整的html</zh_tw>
         */
        DiceGenerator.prototype.batchCreate = function (createParameters) {
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
         * <en>Generate a single dice</en>
         * <zh_cn>生成单个骰子</zh_cn>
         * <zh_tw>生成單個骰子</zh_tw>
         * @param param0
         * <en>Deconstructed creation parameters</en>
         * <zh_cn>已解构的创建参数</zh_cn>
         * <zh_tw>已解構的創建參數</zh_tw>
         * @returns
         * <en>Generate results, used to combine complete html</en>
         * <zh_cn>生成结果，用于组合完整的html</zh_cn>
         * <zh_tw>生成結果，用於組合完整的html</zh_tw>
         */
        DiceGenerator.prototype.create = function (_a) {
          var _this = this;
          var id = _a.id,
            diceKind = _a.diceKind,
            SIDE_LENGTH = _a.sideLength,
            CONTENTS = _a.contents,
            OUTER_LINE_STYLE = _a.outerLineStyle,
            INNER_LINE_STYLE = _a.innerLineStyle,
            TEXT_STYLE = _a.textStyle,
            OPTIONS = _a.options;
          if (id.length === 0) {
            id = "svg_0";
          }
          var FIXED_SIDE_LENGTH = SIDE_LENGTH;
          var nested = false;
          switch (diceKind) {
            case DiceKind.twentyFour:
              FIXED_SIDE_LENGTH = 25;
              nested = true;
              break;
            default:
              break;
          }
          var svg = this.createSvg();
          svg.setAttribute("id", id);
          var viewBox = {
            left: 999999,
            right: 0,
            top: 999999,
            bottom: 0,
          };
          var infos = [];
          switch (diceKind) {
            case DiceKind.four:
              CONTENTS.forEach(function (content) {
                for (var i = 0; i < 3; ++i) {
                  infos.push({ content: content, x: 0, y: 0, rotate: 0 });
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
              CONTENTS.forEach(function (content) {
                infos.push({ content: content, x: 0, y: 0, rotate: 0 });
              });
              break;
          }
          var mmToPxScale = (new DPIHelper()).getMmToPxScale();
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
          infos.forEach(function (_a) {
            var content = _a.content, x = _a.x, y = _a.y, rotate = _a.rotate;
            _this.appendText(svg, TEXT_STYLE, content, x, y, rotate, null);
          });
          var width = "".concat(viewBox.right, "mm");
          var height = "".concat(viewBox.bottom, "mm");
          svg.setAttribute("width", width);
          svg.setAttribute("height", height);
          // svg.setAttribute('style', `width:${width};height:${height};`);
          // const outerSvg = nested && (FIXED_SIDE_LENGTH !== SIDE_LENGTH) ? this.createSvg(): null;
          var outerSvg = createElement("wrap"); // as HTMLDivElement;
          outerSvg.appendChild(svg);
          outerSvg.setAttribute("id", id.concat("_wrapper"));
          if (FIXED_SIDE_LENGTH !== SIDE_LENGTH) {
            var scale = SIDE_LENGTH / FIXED_SIDE_LENGTH;
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
              "translate(".concat(viewBox.right * transformScale, ", ").concat(
                viewBox.bottom * transformScale,
                ") scale(",
              ).concat(scale, ", ").concat(scale, ")"),
            );
            svg.setAttribute("transform-origin", "center");
          }
          var css =
            "page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}";
          return { id: id, svg: nested ? outerSvg : svg, css: css };
        };
        DiceGenerator.prototype.drawGraphsOfFourSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          var HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
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
          var EXTNED_SCALE = 0.15;
          var EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          var OFFSET_X = EXTNED_LENGTH * 0.5;
          var OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
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
        };
        DiceGenerator.prototype.drawTextsOfFourSidedDice = function (
          infos,
          SIDE_LENGTH,
          CONTENTS,
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
        };
        DiceGenerator.prototype.drawGraphsOfSixSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var SIDE_LENGTH_PX = SIDE_LENGTH * mmToPxScale;
          var duckTongueScale = 0.5;
          var duckTongueHeightPx = SIDE_LENGTH_PX * duckTongueScale;
          var duckTongueHeight = SIDE_LENGTH * duckTongueScale;
          var pasteRegionScale = 0.75;
          var pasteRegionHeightPx = SIDE_LENGTH_PX * pasteRegionScale;
          var pasteRegionHeight = SIDE_LENGTH * pasteRegionScale;
          var offsetScale = 0.1;
          var offsetX = SIDE_LENGTH_PX * offsetScale;
          var pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
          console.log(SIDE_LENGTH, mmToPxScale, SIDE_LENGTH_PX);
          var path = document.createElementNS(SVG_NS, "path");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            "M 0, ".concat(duckTongueHeightPx + SIDE_LENGTH_PX, " ")
              .concat(
                "h ".concat(SIDE_LENGTH_PX * 2, " "),
                "l ".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "v -".concat(SIDE_LENGTH_PX, " "),
                "l ".concat(offsetX, ", -").concat(duckTongueHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(duckTongueHeightPx, " "),
                "v ".concat(SIDE_LENGTH_PX, " "),
                "l ".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "h ".concat(pasteRegionWidth, " "),
                "l ".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                // `h ${SIDE_LENGTH_PX} `,
                "v ".concat(SIDE_LENGTH_PX, " "),
                "h -".concat(SIDE_LENGTH_PX * 2, " "),
                "l -".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                "v ".concat(SIDE_LENGTH_PX, " "),
                "l -".concat(offsetX, ", ").concat(duckTongueHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(duckTongueHeightPx, " "),
                "v -".concat(SIDE_LENGTH_PX, " "),
                "l -".concat(offsetX, ", ").concat(pasteRegionHeightPx, " "),
                "h -".concat(pasteRegionWidth, " "),
                "l -".concat(offsetX, ", -").concat(pasteRegionHeightPx, " "),
                " z",
              ),
          );
          svg.appendChild(path);
          var X1 = 0,
            X2 = SIDE_LENGTH * 1,
            X3 = SIDE_LENGTH * 2,
            X4 = SIDE_LENGTH * 3,
            X5 = SIDE_LENGTH * 4,
            X6 = SIDE_LENGTH * 5;
          var Y1 = 0,
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
        };
        DiceGenerator.prototype.drawTextsOfSixSidedDice = function (
          infos,
          SIDE_LENGTH,
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
        };
        DiceGenerator.prototype.drawGraphsOfEightSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var HEIGHT_OF_ONE = SIDE_LENGTH * 1.732 * 0.5;
          var HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
          var BOTTOM = HEIGHT_OF_ONE * 3;
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
          var EXTNED_SCALE = 0.15;
          var EXTNED_LENGTH = EXTNED_SCALE * SIDE_LENGTH;
          var OFFSET_X = EXTNED_LENGTH * 0.5;
          var OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
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
        };
        DiceGenerator.prototype.drawTextsOfEightSidedDice = function (
          infos,
          SIDE_LENGTH,
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
        };
        DiceGenerator.prototype.drawGraphsOfTwelveSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var QUARTER_SIDE_LENGTH = SIDE_LENGTH * 0.25;
          var RADIUS = SIDE_LENGTH * 0.2;
          var ANGLE18 = Math.PI * 18 / 180;
          var ANGLE36 = Math.PI * 36 / 180;
          var ANGLE54 = Math.PI * 54 / 180;
          var ANGLE72 = Math.PI * 72 / 180;
          var SIN18 = Math.sin(ANGLE18);
          var SIN36 = Math.sin(ANGLE36);
          var SIN54 = Math.sin(ANGLE54);
          var SIN72 = Math.sin(ANGLE72);
          var HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
          var LONG_SIDE_LENGTH = SIDE_LENGTH * 0.5 / SIN18;
          var HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
          var SIN18_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN18;
          var SIN36_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN36;
          var SIN54_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN54;
          var SIN72_MULTIPLY_SIDE_LENGTH = SIDE_LENGTH * SIN72;
          var SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
          var SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
          var SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
          var SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
          var SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
          var SECOND_GROUP_OFFSET = SIDE_LENGTH * 2 + LONG_SIDE_LENGTH +
            SIN18_MULTIPLY_SIDE_LENGTH;
          var TOP = SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
          for (var groupIndex = 0; groupIndex < 2; ++groupIndex) {
            var LEFT = (groupIndex === 0 ? 0 : SECOND_GROUP_OFFSET) +
              SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
            var A1x = 0, A1y = 0;
            var A2x = 0, A2y = 0;
            var A3x = 0, A3y = 0;
            var A4x = 0, A4y = 0;
            var A5x = 0, A5y = 0;
            var B1x = 0, B1y = 0;
            var B2x = 0, B2y = 0;
            var B5x = 0, B5y = 0;
            var C1x = 0, C1y = 0;
            var C2x = 0, C2y = 0;
            var C5x = 0, C5y = 0;
            var D1x = 0, D1y = 0;
            var D2x = 0, D2y = 0;
            var D5x = 0, D5y = 0;
            var E1x = 0, E1y = 0;
            var E2x = 0, E2y = 0;
            var E5x = 0, E5y = 0;
            var F1x = 0, F1y = 0;
            var F2x = 0, F2y = 0;
            var F5x = 0, F5y = 0;
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
            var LINE_STYLE = groupIndex === 0
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
            var B6x = 0, B6y = 0;
            var B7x = 0, B7y = 0;
            var B8x = 0, B8y = 0;
            var B9x = 0, B9y = 0;
            var C6x = 0, C6y = 0;
            var C7x = 0, C7y = 0;
            var C8x = 0, C8y = 0;
            var C9x = 0, C9y = 0;
            var D6x = 0, D6y = 0;
            var D7x = 0, D7y = 0;
            var D8x = 0, D8y = 0;
            var D9x = 0, D9y = 0;
            var E6x = 0, E6y = 0;
            var E7x = 0, E7y = 0;
            var E8x = 0, E8y = 0;
            var E9x = 0, E9y = 0;
            var F6x = 0, F6y = 0;
            var F7x = 0, F7y = 0;
            var F8x = 0, F8y = 0;
            var F9x = 0, F9y = 0;
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
            if (OPTIONS.withHole) {
              var CC1x = (A1x + A2x + A3x + A4x + A5x) * 0.2,
                CC1y = (A1y + A2y + A3y + A4y + A5y) * 0.2;
              var CC2x = (A1x + A5x + B1x + B2x + B5x) * 0.2,
                CC2y = (A1y + A5y + B1y + B2y + B5y) * 0.2;
              var CC3x = (A1x + A2x + C1x + C2x + C5x) * 0.2,
                CC3y = (A1y + A2y + C1y + C2y + C5y) * 0.2;
              var CC4x = (A2x + A3x + D1x + D2x + D5x) * 0.2,
                CC4y = (A2y + A3y + D1y + D2y + D5y) * 0.2;
              var CC5x = (A3x + A4x + E1x + E2x + E5x) * 0.2,
                CC5y = (A3y + A4y + E1y + E2y + E5y) * 0.2;
              var CC6x = (A4x + A5x + F1x + F2x + F5x) * 0.2,
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
        };
        DiceGenerator.prototype.drawTextsOfTwelveSidedDice = function (
          infos,
          SIDE_LENGTH,
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
        };
        DiceGenerator.prototype.drawGraphsOfTwentySidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var pasteRegionScale = 0.2;
          var pasteRegion = SIDE_LENGTH * pasteRegionScale;
          var pasteRegionPx = pasteRegion * mmToPxScale;
          var ANGLE60 = Math.PI * 60 / 180;
          var SIN60 = Math.sin(ANGLE60);
          var COS60 = Math.cos(ANGLE60);
          var OneX = SIDE_LENGTH * COS60;
          var OneY = SIDE_LENGTH * SIN60;
          var pasteRegionShortBiasX = pasteRegion * COS60;
          var pasteRegionShortBiasY = pasteRegion * SIN60;
          var pasteRegionLongBias = SIDE_LENGTH * (1 - pasteRegionScale);
          var pasteRegionLongBiasX = pasteRegionLongBias * COS60;
          var pasteRegionLongBiasY = pasteRegionLongBias * SIN60;
          var TwoY = OneY * 2;
          var ThreeY = OneY * 3;
          var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
          var FIVE_SIDE = SIDE_LENGTH * 5;
          x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
          y1 = OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
          y1 += OneY, y2 = y1;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 -= OneX, x2 = x1 - OneX;
          y1 = OneY, y2 = TwoY;
          for (var i = 0; i < 5; ++i) {
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
          for (var i = 0; i < 3; ++i) {
            x1 += SIDE_LENGTH, x2 += SIDE_LENGTH;
            this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          }
          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = TwoY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          x1 += SIDE_LENGTH, x2 += OneX;
          y2 = OneY;
          this.appendLine(svg, INNER_LINE_STYLE, x1, x2, y1, y2, viewBox);
          var OneXPx = OneX * mmToPxScale;
          var OneYPx = OneY * mmToPxScale;
          var pasteRegionShortBiasXPx = pasteRegionShortBiasX * mmToPxScale;
          var pasteRegionShortBiasYPx = pasteRegionShortBiasY * mmToPxScale;
          var pasteRegionLongBiasXPx = pasteRegionLongBiasX * mmToPxScale;
          var pasteRegionLongBiasYPx = pasteRegionLongBiasY * mmToPxScale;
          var path = document.createElementNS(SVG_NS, "path");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke", "#000000");
          path.setAttribute(
            "d",
            "M 0, ".concat(OneYPx + pasteRegionLongBiasYPx, " ")
              .concat(
                "l ".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "h ".concat(pasteRegionPx),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx, ", ").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l ".concat(OneXPx, ", -").concat(OneYPx),
                "h ".concat(pasteRegionPx),
                "l ".concat(pasteRegionLongBiasXPx, ", ").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l -".concat(pasteRegionShortBiasXPx + OneXPx * 2, ", ").concat(
                  pasteRegionShortBiasYPx + OneYPx * 2,
                ),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                "l -".concat(OneXPx, ", ").concat(OneYPx),
                "h -".concat(pasteRegionPx),
                "l -".concat(pasteRegionLongBiasXPx, ", -").concat(
                  pasteRegionLongBiasYPx,
                ),
                "l ".concat(pasteRegionShortBiasXPx, ", -").concat(
                  pasteRegionShortBiasYPx,
                ),
                " z",
              ),
          );
          svg.appendChild(path);
          viewBox.right = SIDE_LENGTH * 5 + OneX + pasteRegion;
          viewBox.bottom = OneY * 3;
        };
        DiceGenerator.prototype.drawTextsOfTwentySidedDice = function (
          infos,
          SIDE_LENGTH,
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
        };
        DiceGenerator.prototype.getSinByAngle = function (angle) {
          return Math.sin(angle * Math.PI / 180);
        };
        DiceGenerator.prototype.getCosByAngle = function (angle) {
          return Math.cos(angle * Math.PI / 180);
        };
        // fixContent(content)  { return content.toString().replace(/([69])/gi, '<font style="text-decoration:underline;">$1</font>'); }
        DiceGenerator.prototype.drawGraphsOfTwentyFourSidedDice = function (
          svg,
          SIDE_LENGTH,
          INNER_LINE_STYLE,
          OUTER_LINE_STYLE,
          viewBox,
          OPTIONS,
          mmToPxScale,
        ) {
          var ANGLE = 48.275;
          var _a = this,
            getSinByAngle = _a.getSinByAngle,
            getCosByAngle = _a.getCosByAngle;
          var TEXT_OFFSET_SCALE = 0.2;
          var BIGER_ANGLE = 180 - ANGLE * 2;
          var SMALL_ANGLE_COS = Math.cos(ANGLE * Math.PI / 180);
          var HALF_LONG_SIDE_LENGTH = 50 * 0.5;
          var SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;
          var ax = 0,
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
          var aax = 0,
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
          var content_offset_top = -3, content_offset_left = -2;
          content_offset_top *= 1.5, content_offset_left *= 1.5;
          var OFFSET_X = -23.0805019730301175;
          // 080501973030115 1.7763568394002505e-14mm
          // 08050197303012 -1.0658141036401503e-14mm
          var X_VALUE = 150;
          // const ax1 = 150, ay1 = 0;
          var ax1 = X_VALUE + OFFSET_X, ay1 = 0;
          var bx1 = ax1 + 50, by1 = 0;
          var cx1 = ax1 + HALF_LONG_SIDE_LENGTH,
            cy1 = SHORT_SIDE_LENGTH * getSinByAngle(ANGLE);
          var angle_cd1 = BIGER_ANGLE - ANGLE;
          var dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1),
            dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
          var angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
          var ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1),
            ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
          var angle_cf1 = BIGER_ANGLE - angle_ce1;
          var fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1),
            fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
          var c_mirror_ad_x1 = X_VALUE + dx1 - cx1;
          var c_mirror_ad_y1 = 0 + dy1 - cy1;
          var aax1 = X_VALUE + (c_mirror_ad_x1 - X_VALUE) * 0.3 + OFFSET_X,
            aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
          var bbx1 = 0, bby1 = 0;
          var ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3,
            ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
          var ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
          var c_mirror_ef_x1 = ex1 + fx1 - cx1;
          var c_mirror_ef_y1 = ey1 + fy1 - cy1;
          var eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3,
            eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
          var fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3,
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
          var cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
          var ax4 = ex1, ay4 = ey1;
          var dx4 = dx1, dy4 = dy1;
          var angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 / Math.PI;
          var angle_ce4 = BIGER_ANGLE - angle_cd4;
          var angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
          var angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
          var angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
          var ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
          var ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
          var fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
          var fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
          var bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
          var by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
          var ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
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
          var cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
          var dx5 = ax4, dy5 = ay4;
          var ex5 = bx4, ey5 = by4;
          var angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 / Math.PI;
          var angle_ce5 = BIGER_ANGLE - angle_cd5;
          var angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
          var angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
          var angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
          var ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
          var ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
          var bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
          var by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
          var fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
          var fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
          var ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
          var c_mirror_ab_x5 = ax5 + bx5 - cx5,
            c_mirror_ab_y5 = ay5 + by5 - cy5;
          var aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3,
            aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
          var bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3,
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
          var cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
          var dx6 = fx4, dy6 = fy4;
          var ex6 = ex4, ey6 = ey4;
          var angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 / Math.PI;
          var angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 / Math.PI;
          var angle_ca6 = BIGER_ANGLE - angle_cd6;
          var angle_cf6 = BIGER_ANGLE - angle_ce6;
          var angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
          var ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
          var ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
          var bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
          var by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
          var fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
          var fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
          var ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
          var c_mirror_ad_x6 = ax6 + dx6 - cx6,
            c_mirror_ad_y6 = ay6 + dy6 - cy6;
          var aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3,
            aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
          var ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3,
            ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
          var c_mirror_ef_x6 = ex6 + fx6 - cx6,
            c_mirror_ef_y6 = ey6 + fy6 - cy6;
          var eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3,
            eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
          var fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3,
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
          var cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
          var fx3 = dx4, fy3 = dy4;
          var ex3 = ex4, ey3 = ey4;
          var angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 / Math.PI;
          var angle_ce3 = BIGER_ANGLE - angle_cf3;
          var angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
          var angle_ca3 = BIGER_ANGLE - angle_cd3;
          var angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
          var ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
          var ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
          var bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
          var by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
          var dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
          var dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
          var ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
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
          var cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
          var fx2 = ax3, fy2 = ay3;
          var ex2 = dx3, ey2 = dy3;
          var angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 / Math.PI;
          var angle_ce2 = BIGER_ANGLE - angle_cf2;
          var angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
          var angle_ca2 = BIGER_ANGLE - angle_cd2;
          var angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
          var ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
          var ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
          var bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
          var by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
          var dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
          var dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
          var ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
          var c_mirror_ab_x2 = ax2 + bx2 - cx2,
            c_mirror_ab_y2 = ay2 + by2 - cy2;
          var aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3,
            aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
          var bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3,
            bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
          var c_mirror_de_x2 = dx2 + ex2 - cx2,
            c_mirror_de_y2 = dy2 + ey2 - cy2;
          var ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3,
            ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
          var eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3,
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
        };
        DiceGenerator.prototype.drawTextsOfTwentyFourSidedDice = function (
          infos,
          SIDE_LENGTH,
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
        };
        DiceGenerator.prototype.appendLine = function (
          svg,
          STYLE,
          x1,
          x2,
          y1,
          y2,
          viewBox,
        ) {
          var line = document.createElementNS(SVG_NS, "line");
          line.setAttribute("x1", "".concat(x1, "mm"));
          line.setAttribute("x2", "".concat(x2, "mm"));
          line.setAttribute("y1", "".concat(y1, "mm"));
          line.setAttribute("y2", "".concat(y2, "mm"));
          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }
          line.setAttribute("style", STYLE);
          svg.appendChild(line);
        };
        DiceGenerator.prototype.appendCircle = function (
          svg,
          STYLE,
          cx,
          cy,
          radius,
          viewBox,
        ) {
          var circle = document.createElementNS(SVG_NS, "circle");
          circle.setAttribute("cx", "".concat(cx, "mm"));
          circle.setAttribute("cy", "".concat(cy, "mm"));
          circle.setAttribute("r", "".concat(radius, "mm"));
          circle.setAttribute("fill", "#ffffff");
          if (viewBox) {
            viewBox.left = Math.min(viewBox.left, cx - radius);
            viewBox.right = Math.max(viewBox.right, cx + radius);
            viewBox.top = Math.min(viewBox.top, cy - radius);
            viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
          }
          circle.setAttribute("style", STYLE);
          svg.appendChild(circle);
        };
        DiceGenerator.prototype.appendTspan = function (
          text,
          STYLE,
          CHAR,
          dx,
          dy,
          rotate,
        ) {
          // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
          var tspan = document.createElementNS(SVG_NS, "tspan");
          tspan.setAttribute("dx", "".concat(dx, "mm"));
          tspan.setAttribute("dy", "".concat(dy, "mm"));
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
        };
        DiceGenerator.prototype.appendText = function (
          svg,
          STYLE,
          CONTENT,
          x,
          y,
          rotate,
          viewBox,
        ) {
          var _this = this;
          var g = document.createElementNS(SVG_NS, "g");
          // g.setAttribute('x', `${x}mm`);
          // g.setAttribute('y', `${y}mm`);
          // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
          if (rotate) {
            g.setAttribute(
              "style",
              "transform: rotate(".concat(
                rotate,
                "deg);transform-origin: 50% 50%;",
              ),
            );
          }
          svg.appendChild(g);
          var text = document.createElementNS(SVG_NS, "text");
          text.setAttribute("x", "".concat(x, "mm"));
          text.setAttribute("y", "".concat(y, "mm"));
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
            CONTENT.split("").forEach(function (char, index) {
              _this.appendTspan(text, "", char, 0, 0, 0);
            });
          }
          g.appendChild(text);
          if (viewBox) {
            // left/top/right/bottom/width/height
            var clientRects = text.getClientRects();
            var _a = (clientRects.length
                ? clientRects.item(0)
                : text.getBoundingClientRect()),
              x1 = _a.left,
              x2 = _a.right,
              y1 = _a.top,
              y2 = _a.bottom;
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
          }
          text.setAttribute("style", STYLE);
        };
        DiceGenerator.prototype.setSvgTextInfo = function (info, x, y, rotate) {
          info.x = x;
          info.y = y;
          info.rotate = rotate;
        };
        return DiceGenerator;
      }());
      cc.DiceGenerator = DiceGenerator;
    })(cc = sonya.cc || (sonya.cc = {}));
  })(sonya = edu.sonya || (edu.sonya = {}));
})(edu || (edu = {}));
exports["default"] = edu.sonya.cc;
