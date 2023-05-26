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
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  /** OK
   * 构造方法
   */
  function BrickCore() {
    var _this = _super.call(this, {}, {}) || this;
    _this.idOrClassPrefix = "brickPageHundredthLattice";
    /**
     * 计算data和computedData数据
     */
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var _a = _this,
        computedData = _a.computedData,
        mmToPxScale = _a.mmToPxScale;
      var _b = _this.data,
        paperSize = _b.paperSize,
        isLandscape = _b.isLandscape,
        MAX_X = _b.maxX,
        MAX_Y = _b.maxY,
        pageMarginTop = _b.pageMarginTop,
        pageMarginBottom = _b.pageMarginBottom,
        pageMarginLeft = _b.pageMarginLeft,
        pageMarginRight = _b.pageMarginRight,
        list = _b.list;
      var css =
        "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n\t\t@media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; margin:",
          ).concat(pageMarginTop, "mm ").concat(pageMarginRight, "mm ").concat(
            pageMarginBottom,
            "mm ",
          ).concat(
            pageMarginLeft,
            "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n\t\tbody {width:",
          ).concat(
            MAX_X,
            "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\t\tpage { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }\n\t\t/* page { height:",
          ).concat(MAX_Y, "mm; } */\n\t\tpage { width:").concat(
            MAX_X,
            "mm;margin-left:",
          ).concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm; }\n\t\t",
          );
      var html = "<page>";
      var usedX = 0;
      var usedY = 0;
      var currentRowHeight = 0;
      var svgIndex = 0;
      list.forEach(function (_a) {
        var length = _a.length,
          showNumber = _a.showNumber,
          digitalOverlay = _a.digitalOverlay,
          startNumber = _a.startNumber,
          count = _a.count,
          innerLineStyle = _a.innerLineStyle,
          outerLineStyle = _a.outerLineStyle,
          textStyle = _a.textStyle;
        var WIDTH = length * 10;
        var HEIGHT = length * 10;
        var numberOffset = 0;
        for (var regionIndex = 0; regionIndex < count; ++regionIndex) {
          var newPage = (usedY + HEIGHT > MAX_Y);
          var newRow = false;
          if (!newPage && usedX + WIDTH > MAX_X) {
            usedY += currentRowHeight;
            if (usedY + HEIGHT > MAX_Y) {
              newPage = true;
            } else {
              newRow = true;
            }
          }
          if (newPage) {
            html += "</page><page>";
            usedX = 0;
            usedY = 0;
            currentRowHeight = 0;
          } else if (newRow) {
            usedX = 0;
            currentRowHeight = 0;
          }
          currentRowHeight = Math.max(currentRowHeight, HEIGHT);
          usedX += WIDTH;
          var _b = svgSpace.edu.sonya.cc.SvgHelper,
            createSvg = _b.createSvg,
            appendOuterLine = _b.appendOuterLine,
            appendLine = _b.appendLine,
            appendText = _b.appendText,
            getTextStyleFontSizePatchCss = _b.getTextStyleFontSizePatchCss;
          var svg = createSvg();
          svg.id = "svg_".concat(++svgIndex);
          appendOuterLine(svg, WIDTH, HEIGHT, outerLineStyle);
          for (var i = 1; i < 10; ++i) {
            var X = length * i;
            appendLine(svg, innerLineStyle, X, X, 0, HEIGHT, null);
            var Y = length * i;
            appendLine(svg, innerLineStyle, 0, WIDTH, Y, Y, null);
          }
          if (showNumber) {
            for (var i = 0; i < 10; ++i) {
              var Y = length * (i + 0.5);
              for (var j = 0; j < 10; ++j) {
                var X = length * (j + 0.5);
                var NUMBER = numberOffset + startNumber + 10 * i + j;
                appendText(
                  svg,
                  textStyle.concat(
                    getTextStyleFontSizePatchCss(NUMBER, textStyle),
                  ),
                  NUMBER.toString(),
                  X,
                  Y,
                  0,
                  "center",
                  null,
                  true,
                );
              }
            }
          }
          html += svg.outerHTML;
          if (digitalOverlay) {
            numberOffset += 100;
          }
        }
      });
      html += "</page>";
      var en = "".concat(FILENAME_POSTFIX, "hundredthLattice");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u767E\u6570\u683C");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u767E\u6578\u683C");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      computedData.html = html;
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (item) {
      var _a = item,
        length = _a.length,
        showNumber = _a.showNumber,
        digitalOverlay = _a.digitalOverlay,
        startNumber = _a.startNumber,
        count = _a.count,
        innerLineStyle = _a.innerLineStyle,
        outerLineStyle = _a.outerLineStyle,
        textStyle = _a.textStyle;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, item);
      _this.appendNumberTd(tr, length, item, "length", 1, null, 1);
      _this.appendCheckboxTdWithoutText(tr, showNumber, item, "showNumber");
      _this.appendCheckboxTdWithoutText(
        tr,
        digitalOverlay,
        item,
        "digitalOverlay",
      );
      _this.appendNumberTd(tr, startNumber, item, "startNumber", null, null, 1);
      _this.appendNumberTd(tr, count, item, "count", 1, null, 1);
      _this.appendTextareaTd(
        tr,
        innerLineStyle,
        item,
        "innerLineStyle",
        "string",
      );
      _this.appendTextareaTd(
        tr,
        outerLineStyle,
        item,
        "outerLineStyle",
        "string",
      );
      _this.appendTextareaTd(tr, textStyle, item, "textStyle", "string");
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      _this.appendTableHeadCell({ en: "Length", zh_cn: "边长", zh_tw: "邊長" });
      _this.appendTableHeadCell({
        en: "Show Number",
        zh_cn: "显示数字",
        zh_tw: "顯示數字",
      });
      _this.appendTableHeadCell({
        en: "Digital Overlay",
        zh_cn: "数字叠加",
        zh_tw: "數位疊加",
      });
      _this.appendTableHeadCell({
        en: "Start Number",
        zh_cn: "开始值",
        zh_tw: "開始值",
      });
      _this.appendTableHeadCell({ en: "Count", zh_cn: "数量", zh_tw: "數量" });
      _this.appendTableHeadCell({
        en: "Inner Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Outer Line Style",
        zh_cn: "外边线样式",
        zh_tw: "外邊線樣式",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
    };
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var length = 10;
      var showNumber = true;
      var digitalOverlay = true;
      var startNumber = 1;
      var count = 1;
      var innerLineStyle =
        "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;";
      var outerLineStyle = "stroke:#000;stroke-width:0.2mm;";
      var textStyle = "font-size:6mm;";
      var buttonList = [
        {
          nameI18n: {
            en: "Hide numbers",
            zh_cn: "无数字",
            zh_tw: "無數字",
          },
          info: {
            length: length,
            showNumber: false,
            digitalOverlay: digitalOverlay,
            startNumber: startNumber,
            count: 2,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            textStyle: textStyle,
          },
        },
        {
          nameI18n: {
            en: "Start from zero",
            zh_cn: "从0开始",
            zh_tw: "從0開始",
          },
          info: {
            length: length,
            showNumber: showNumber,
            digitalOverlay: digitalOverlay,
            startNumber: 0,
            count: count,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            textStyle: textStyle,
          },
        },
        {
          nameI18n: {
            en: "Start from one",
            zh_cn: "从1开始",
            zh_tw: "從1開始",
          },
          info: {
            length: length,
            showNumber: showNumber,
            digitalOverlay: digitalOverlay,
            startNumber: startNumber,
            count: count,
            innerLineStyle: innerLineStyle,
            outerLineStyle: outerLineStyle,
            textStyle: textStyle,
          },
        },
      ];
      var strongI18n = {
        en: "Shortcuts",
        zh_cn: "快捷按钮",
        zh_tw: "快捷按鈕",
      };
      return [{ strongI18n: strongI18n, buttonList: buttonList }];
    };
    return _this;
  }
  return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
