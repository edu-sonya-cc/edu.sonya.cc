// import { FILENAME_POSTFIX } from '../const.ts';
// import { I18nable, createElement } from '../dom.ts';
// import { getNumbersArray, pushSameValueTimes } from '../utils.ts';
// import { BrickWithTableBase } from './brickWithTableBase.ts';
// import * as edu from './dice.ts';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/utils.d.ts' />
/// <reference path='../../types/brickWithTableBase.d.ts' />
/// <reference path='../../types/dice.d.ts' />
var DiceBase = /** @class */ (function (_super) {
  __extends(DiceBase, _super);
  function DiceBase() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.idOrClassPrefix = "brickPageDice";
    // protected updateOtherDataOfDice = (newData: any): void => {};
    // protected abstract initOtherElements(): void;
    _this.countDataAndComputedData = function () {
      _this.countDataAndComputedDataInBrickWithTableBase();
      var DiceGenerator = edu.sonya.cc.DiceGenerator;
      var diceGenerator = new DiceGenerator();
      var _a = _this, data = _a.data, computedData = _a.computedData;
      var paperSize = data.paperSize,
        isLandscape = data.isLandscape,
        MAX_X = data.maxX,
        MAX_Y = data.maxY,
        pageMarginTop = data.pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft = data.pageMarginLeft,
        // pageMarginRight,
        list = data.list;
      var css =
        "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    page { display:flex;flex-flow:wrap; }\n    page:not(page:last-child){page-break-after:always;}\n    \n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: "
          .concat(paperSize, " ").concat(
            isLandscape ? "landscape" : "portrait",
            "; } }\n    /* height:",
          ).concat(MAX_Y, "mm; */\n    page { width:").concat(
            MAX_X,
            "mm;margin-left:",
          ).concat(pageMarginLeft, "mm;margin-top:").concat(
            pageMarginTop,
            "mm; }\n    ",
          );
      // const page = createElement('page') as HTMLElement;
      var svgList = [];
      list.forEach(function (_a) {
        var id = _a.id,
          diceKind = _a.diceKind,
          sideLength = _a.sideLength,
          contents = _a.contents,
          outerLineStyle = _a.outerLineStyle,
          innerLineStyle = _a.innerLineStyle,
          textStyle = _a.textStyle,
          options = _a.options;
        var _b = diceGenerator.create({
            id: id,
            diceKind: diceKind,
            sideLength: sideLength,
            contents: contents,
            outerLineStyle: outerLineStyle,
            innerLineStyle: innerLineStyle,
            textStyle: textStyle,
            options: options,
          }),
          svgCss = _b.css,
          svg = _b.svg;
        // html += svg.outerHTML;
        // page.appendChild(svg);
        svgList.push(svg);
        css += svgCss;
      });
      var en = "".concat(FILENAME_POSTFIX, "Dices");
      var zh_cn = "".concat(FILENAME_POSTFIX, "\u9AB0\u5B50");
      var zh_tw = "".concat(FILENAME_POSTFIX, "\u9AB0\u5B50");
      computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
      computedData.css = css;
      // computedData.html = html;
      computedData.html = _this.getAutomaticPaginationHtmlFromChildList(
        svgList,
        MAX_X,
        MAX_Y,
      ); // page.outerHTML;
      // console.log('countDataAndComputedData()', list, computedData );
    };
    _this.idOrClassPrefix = "brickPageDice";
    /** OK
     * 获取便捷按钮信息数组，方便点击便捷按钮后追加到表格中
     * @returns 数组：信息数组
     */
    _this.getUsableList = function () {
      var usableDices = [];
      _this.appendDiceOfSides4(usableDices);
      _this.appendDiceOfSides6(usableDices);
      _this.appendDiceOfSides8(usableDices);
      _this.appendDiceOfSides12(usableDices);
      _this.appendDiceOfSides20(usableDices);
      _this.appendDiceOfSides24(usableDices);
      var usableList = [];
      usableDices.forEach(function (_a) {
        var diceFace = _a.diceFace, infos = _a.infos;
        var buttonList = [];
        infos.forEach(function (info) {
          var captionI18n = info.captionI18n;
          buttonList.push({
            nameI18n: typeof captionI18n === "string"
              ? {
                en: captionI18n,
                zh_cn: captionI18n,
                zh_tw: captionI18n,
              }
              : captionI18n,
            info: info,
          });
        });
        var strongI18n = {
          en: "".concat(diceFace, "-sides"),
          zh_cn: "".concat(diceFace, "\u9762"),
          zh_tw: "".concat(diceFace, "\u9762"),
        };
        usableList.push({
          strongI18n: strongI18n,
          buttonList: buttonList,
        });
      });
      return usableList;
    };
    /** OK
     * 初始化表头
     */
    _this.initTableHead = function () {
      // this.appendTableHeadCell({ en: 'Id', zh_cn: 'id', zh_tw: 'id' });
      // this.appendTableHeadCell({ en: 'Dice Type', zh_cn: '骰子类型', zh_tw: '骰子類型' });
      _this.appendTableHeadCell({ en: "Faces", zh_cn: "面", zh_tw: "面" });
      _this.appendTableHeadCell({ en: "Side", zh_cn: "边", zh_tw: "邊" }); // 長
      _this.appendTableHeadCell({
        en: "Contents of all sides",
        zh_cn: "各面内容",
        zh_tw: "各面內容",
      });
      _this.appendTableHeadCell({
        en: "Outside Boundary Line Style",
        zh_cn: "外边界线样式",
        zh_tw: "外邊界線樣式",
      });
      _this.appendTableHeadCell({
        en: "Interior Line Style",
        zh_cn: "内部线样式",
        zh_tw: "內部線樣式",
      });
      _this.appendTableHeadCell({
        en: "Text Style",
        zh_cn: "文本样式",
        zh_tw: "文字樣式",
      });
      // this.appendTableHeadCell({ en: 'Other parameters', zh_cn: '其它参数', zh_tw: '其它參數' });
    };
    _this.appendDiceOfSides4 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "ˉ,ˊ,ˇ,ˋ".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: {
          en: "Pinyin Tone",
          zh_cn: "拼音声调",
          zh_tw: "拼音聲調",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "1,2,3,4".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:5mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: "1-4",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.four,
        sideLength: 20,
        contents: "+,-,×,÷".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle:
          'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
        options: {},
        captionI18n: {
          en: "Quad operator",
          zh_cn: "四则运算符",
          zh_tw: "四則運算子",
        },
      });
      usableDices.push({
        diceFace: 4,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides6 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.six,
        sideLength: 20,
        contents: getNumbersArray(1, 6),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Times New Roman", "Kaiti";',
        options: {},
        captionI18n: "1-6",
      });
      usableDices.push({
        diceFace: 6,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides8 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: getNumbersArray(1, 8),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: "1-8",
      });
      // 乾（☰）、坎（☵）、艮（☶）、震（☳）、巽（☴）、离（☲）、坤（☷）、兑（☱）
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: "☰☵☶☳☴☲☷☱".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: { en: "Eight Diagrams", zh_cn: "八卦", zh_tw: "八卦" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.eight,
        sideLength: 20,
        contents: "利、衰、毁、誉、称、讥、苦、乐".split("、"),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {},
        captionI18n: { en: "Eight winds", zh_cn: "八风", zh_tw: "八風" },
      });
      usableDices.push({
        diceFace: 8,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides12 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: getNumbersArray(1, 12),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-12",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "子丑寅卯辰巳午未申酉戌亥".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Terrestrial branch", zh_cn: "地支", zh_tw: "地支" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "鼠牛虎兔龙蛇马羊猴鸡狗猪".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Chinese zodiac 1",
          zh_cn: "十二生肖",
          zh_tw: "十二生肖",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: "鼠牛虎兔龍蛇馬羊猴雞狗猪".split(""),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Chinese zodiac 2",
          zh_cn: "生肖繁体",
          zh_tw: "生肖繁體",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:7.5mm;font-family:"Times New Roman";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "English Months",
          zh_cn: "英文月份",
          zh_tw: "英文月份",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Months", zh_cn: "月份", zh_tw: "月份" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "Jan.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May.",
          "Jun.",
          "Jul.",
          "Aug.",
          "Sep.",
          "Oct.",
          "Nov.",
          "Dec.",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Times New Roman";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Month abbreviation",
          zh_cn: "月份缩写",
          zh_tw: "月份縮寫",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Month (number)",
          zh_cn: "月份（数字）",
          zh_tw: "月份（數字）",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twelve,
        sideLength: 20,
        contents: [
          "正月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "冬月",
          "腊月",
        ],
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Lunar month",
          zh_cn: "农历月份",
          zh_tw: "農曆月份",
        },
      });
      usableDices.push({
        diceFace: 12,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides20 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twenty,
        sideLength: 20,
        contents: getNumbersArray(1, 20),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:8mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-20",
      });
      usableDices.push({
        diceFace: 20,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    _this.appendDiceOfSides24 = function (usableDices) {
      var infos = [];
      var DiceKind = edu.sonya.cc.DiceKind;
      infos.length = 0;
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: getNumbersArray(1, 24),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "1-24",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: getNumbersArray(0, 23),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: "0-23",
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,".replace(
          /a/g,
          "ɑ",
        ).replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Initial Consonant", zh_cn: "声母", zh_tw: "聲母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong"
            .replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Finals", zh_cn: "韵母", zh_tw: "韻母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,"
            .replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        // textStyle: 'font-size:12mm;font-family:"PinYinok";',
        textStyle: 'font-size:12mm;font-family:"kaiti";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "Overall recognition",
          zh_cn: "整体认读",
          zh_tw: "整體認讀",
        },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents: "ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ".split(","),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:12mm;font-family:"Kaiti";font-weight:normal;',
        options: {
          withHole: false,
        },
        captionI18n: { en: "Simple final", zh_cn: "单韵母", zh_tw: "單韻母" },
      });
      infos.push({
        id: "",
        diceKind: DiceKind.twentyFour,
        sideLength: 20,
        contents:
          "立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒"
            .split("、"),
        outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
        innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
        textStyle: 'font-size:10.5mm;font-family:"KaiTi";',
        options: {
          withHole: false,
        },
        captionI18n: {
          en: "24 Solar Terms",
          zh_cn: "二十四节气",
          zh_tw: "二十四節氣",
        },
      });
      usableDices.push({
        diceFace: 24,
        infos: JSON.parse(JSON.stringify(infos)),
      });
    };
    /** OK
     * 创建表格行
     * @param item
     * @param tableBodyElement
     */
    _this.createTableBodyRow = function (dice) {
      var _a = dice,
        id = _a.id,
        diceKind = _a.diceKind,
        sideLength = _a.sideLength,
        contents = _a.contents,
        outerLineStyle = _a.outerLineStyle,
        innerLineStyle = _a.innerLineStyle,
        textStyle = _a.textStyle,
        options = _a.options;
      var tableBodyElement = _this.tableBodyElement;
      var tr = createElement("tr");
      tableBodyElement.appendChild(tr);
      _this.appendOperationTd(tr, dice);
      _this.appendDiceKindTd(tr, dice);
      // this.appendSideLengthTd(tr, dice);
      _this.appendNumberTd(tr, sideLength, dice, "sideLength", 0, 200, null);
      _this.appendContentsTd(tr, dice);
      _this.appendTextareaTd(
        tr,
        outerLineStyle,
        dice,
        "outerLineStyle",
        "string",
      );
      _this.appendTextareaTd(
        tr,
        innerLineStyle,
        dice,
        "innerLineStyle",
        "string",
      );
      _this.appendTextareaTd(tr, textStyle, dice, "textStyle", "string");
    };
    /** OK
     *
     * @param tr
     * @param dice
     */
    _this.appendDiceKindTd = function (tr, dice) {
      var DiceKind = edu.sonya.cc.DiceKind;
      var td = createElement("td");
      tr.appendChild(td);
      var span = createElement("span");
      td.appendChild(span);
      var value = "";
      switch (dice.diceKind) {
        case DiceKind.four:
          value = "4";
          break;
        case DiceKind.six:
          value = "6";
          break;
        case DiceKind.eight:
          value = "8";
          break;
        case DiceKind.twelve:
          value = "12";
          break;
        case DiceKind.twenty:
          value = "20";
          break;
        case DiceKind.twentyFour:
          value = "24";
          break;
        default:
          break;
      }
      span.innerHTML = value;
    };
    /** OK
     *
     * @param tr
     * @param dice
     */
    _this.appendContentsTd = function (tr, dice) {
      var td = createElement("td");
      tr.appendChild(td);
      var DiceKind = edu.sonya.cc.DiceKind;
      var diceKind = dice.diceKind, contents = dice.contents;
      var idOrClassPrefix = _this.idOrClassPrefix;
      var count = 0;
      switch (diceKind) {
        case DiceKind.four:
          count = 4;
          break;
        case DiceKind.six:
          count = 6;
          break;
        case DiceKind.eight:
          count = 8;
          break;
        case DiceKind.twelve:
          count = 12;
          break;
        case DiceKind.twenty:
          count = 20;
          break;
        case DiceKind.twentyFour:
          count = 24;
          break;
        default:
          break;
      }
      var div = createElement("div");
      td.appendChild(div);
      div.className = "".concat(idOrClassPrefix, "ContentValueWrap");
      var i18nNameArray = ["en", "zh_cn", "zh_tw"];
      // for(let i = 0; i < count; ++i) {
      //   const item = contents[i];
      //   if(typeof item === 'string') {
      //     const input = createElement('input') as HTMLInputElement;
      //     div.appendChild(input);
      //     input.type = 'text';
      //     input.value = item;
      //     input.onchange = input.focus = () => {
      //       contents.splice(i, 1, item);
      //     };
      //   } else {
      //     const divI18n = createElement('div') as HTMLDivElement;
      //     div.appendChild(divI18n);
      //     divI18n.className = `${idOrClassPrefix}ContentValueI18nWrap`;
      //     i18nNameArray.forEach((property: string) => {
      //       const input = createElement('input') as HTMLInputElement;
      //       divI18n.appendChild(input);
      //       input.type = 'text';
      //       input.value = item[property];
      //       input.onchange = input.focus = () => {
      //         item[property] = input.value;
      //       };
      //     });
      //   }
      // }
      var emptyArray = [];
      pushSameValueTimes(emptyArray, "\n", count);
      var isText = typeof contents[0] === "string";
      if (isText) {
        var textarea_1 = createElement("textarea");
        td.appendChild(textarea_1);
        textarea_1.value = dice.contents.join("\n");
        textarea_1.rows = 4;
        textarea_1.onchange = textarea_1.focus = function () {
          textarea_1.value.split("\n").concat(emptyArray).slice(0, count)
            .forEach(function (item, index) {
              dice.contents[index] = item;
            });
          _this.build();
        };
      } else {
        // Language
        i18nNameArray.forEach(function (lang) {
          var textarea = createElement("textarea");
          td.appendChild(textarea);
          textarea.value = dice.contents.map(function (content) {
            return content[lang];
          }).join("\n");
          textarea.rows = 4;
          textarea.onchange = textarea.focus = function () {
            textarea.value.split("\n").concat(emptyArray).slice(0, count)
              .forEach(function (item, index) {
                dice.contents[index][lang] = item;
              });
            _this.build();
          };
        });
      }
    };
    return _this;
  }
  return DiceBase;
}(BrickWithTableBase));
export { DiceBase };
