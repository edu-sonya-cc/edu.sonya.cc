"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

System.register("copybookBase", [], function (exports_1, context_1) {
  "use strict";

  var CopybookBase;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [],
    execute: function execute() {
      CopybookBase = function (_super) {
        __extends(CopybookBase, _super);

        function CopybookBase(appendData, otherComputedData) {
          var _this = _super.call(this, __assign({
            copybooks: [],
            selectedCheckboxIndexArray: [],
            kind: "pinyinToChinese",
            inputMethod: "select",
            fontSize: "small",
            color: "blackOnGreen"
          }, appendData), __assign({
            css: "",
            html: ""
          }, otherComputedData)) || this;

          _this.updateOtherDataOfCopybook = function (_newData) {};

          _this.usableCopybookCheckboxElementArray = [];
          _this.usableCopybooksPeopleEducationEdition = [];
          _this.kindElementArray = [];

          _this.initKindElements = function () {
            var wrapLabelI18n = {
              en_us: "Typebook Kind",
              zh_cn: "\u5B57\u5E16\u7C7B\u578B",
              zh_tw: "\u5B57\u5E16\u985E\u578B"
            };
            var radiosInfoArray = [{
              value: "pinyinToChinese",
              i18nHtml: getI18nInnerHTML({
                en_us: "Reading Pinyin and Writing Chinese Characters",
                zh_cn: "\u770B\u62FC\u97F3\u5199\u6C49\u5B57",
                zh_tw: "\u770B\u62FC\u97F3\u5BEB\u6F22\u5B57"
              })
            }, {
              value: "chineseToPinyin",
              i18nHtml: getI18nInnerHTML({
                en_us: "Look at Chinese characters and write pinyin",
                zh_cn: "\u770B\u6C49\u5B57\u5199\u62FC\u97F3",
                zh_tw: "\u770B\u6F22\u5B57\u5BEB\u62FC\u97F3"
              })
            }];

            _this.initRadioGroupWithLabelByStringValue(radiosInfoArray, "kind", _this.kindElementArray, wrapLabelI18n);
          };

          _this.inputMethodElementArray = [];

          _this.initInputMethodElements = function () {
            var wrapLabelI18n = {
              en_us: "Entry method",
              zh_cn: "\u5F55\u5165\u65B9\u5F0F",
              zh_tw: "\u9304\u5165\u65B9\u5F0F"
            };
            var radiosInfoArray = [{
              value: "select",
              i18nHtml: getI18nInnerHTML({
                en_us: "Select",
                zh_cn: "\u9009\u62E9",
                zh_tw: "\u9078\u64C7"
              })
            }, {
              value: "manualInput",
              i18nHtml: getI18nInnerHTML({
                en_us: "Manual input",
                zh_cn: "\u624B\u52A8\u8F93\u5165",
                zh_tw: "\u624B\u52D5\u8F38\u5165"
              })
            }];

            _this.initRadioGroupWithLabelByStringValue(radiosInfoArray, "inputMethod", _this.inputMethodElementArray, wrapLabelI18n);
          };

          _this.fontSizeElementArray = [];

          _this.initFontSizeElements = function () {
            var wrapLabelI18n = {
              en_us: "Font Size",
              zh_cn: "\u5B57\u53F7",
              zh_tw: "\u5B57\u578B\u5927\u5C0F"
            };
            var radiosInfoArray = [{
              value: "small",
              i18nHtml: getI18nInnerHTML({
                en_us: "Small",
                zh_cn: "\u5C0F",
                zh_tw: "\u5C0F"
              })
            }, {
              value: "middle",
              i18nHtml: getI18nInnerHTML({
                en_us: "Middle",
                zh_cn: "\u4E2D",
                zh_tw: "\u4E2D"
              })
            }, {
              value: "big",
              i18nHtml: getI18nInnerHTML({
                en_us: "Big",
                zh_cn: "\u5927",
                zh_tw: "\u5927"
              })
            }];

            _this.initRadioGroupWithLabelByStringValue(radiosInfoArray, "fontSize", _this.fontSizeElementArray, wrapLabelI18n);
          };

          _this.colorElementArray = [];

          _this.initColorElements = function () {
            var wrapLabelI18n = {
              en_us: "Color",
              zh_cn: "\u989C\u8272",
              zh_tw: "\u984F\u8272"
            };
            var radiosInfoArray = [{
              value: "blackOnGreen",
              i18nHtml: getI18nInnerHTML({
                en_us: "Green line and black characters.",
                zh_cn: "\u7EFF\u7EBF\u9ED1\u5B57",
                zh_tw: "\u7DA0\u7DDA\u9ED1\u5B57"
              })
            }, {
              value: "redOnBlack",
              i18nHtml: getI18nInnerHTML({
                en_us: "Black line and red characters.",
                zh_cn: "\u9ED1\u7EBF\u7EA2\u5B57",
                zh_tw: "\u9ED1\u7DDA\u7D05\u5B57"
              })
            }, {
              value: "blackOnRed",
              i18nHtml: getI18nInnerHTML({
                en_us: "Red line and black characters.",
                zh_cn: "\u7EA2\u7EBF\u9ED1\u5B57",
                zh_tw: "\u7D05\u7DDA\u9ED1\u5B57"
              })
            }];

            _this.initRadioGroupWithLabelByStringValue(radiosInfoArray, "color", _this.colorElementArray, wrapLabelI18n);
          };

          _this.pinyinArrayWithoutTone = ["chuɑnɡ", "shuɑnɡ", "zhuɑnɡ", "chɑnɡ", "chenɡ", "chonɡ", "chuɑi", "chuɑn", "ɡuɑnɡ", "huɑnɡ", "jiɑnɡ", "jionɡ", "kuɑnɡ", "liɑnɡ", "niɑnɡ", "qiɑnɡ", "qionɡ", "shɑnɡ", "shenɡ", "shuɑi", "shuɑn", "xiɑnɡ", "xionɡ", "zhɑnɡ", "zhenɡ", "zhonɡ", "zhuɑi", "zhuɑn", "bɑnɡ", "benɡ", "biɑn", "biɑo", "binɡ", "cɑnɡ", "cenɡ", "chɑi", "chɑn", "chɑo", "chen", "chou", "chuɑ", "chui", "chun", "chuo", "conɡ", "cuɑn", "dɑnɡ", "denɡ", "diɑn", "diɑo", "dinɡ", "donɡ", "duɑn", "fɑnɡ", "fenɡ", "fiɑo", "ɡɑnɡ", "ɡenɡ", "ɡonɡ", "ɡuɑi", "ɡuɑn", "hɑnɡ", "henɡ", "honɡ", "huɑi", "huɑn", "jiɑn", "jiɑo", "jinɡ", "juɑn", "kɑnɡ", "kenɡ", "konɡ", "kuɑi", "kuɑn", "lɑnɡ", "lenɡ", "liɑn", "liɑo", "linɡ", "lonɡ", "luɑn", "mɑnɡ", "menɡ", "miɑn", "miɑo", "minɡ", "nɑnɡ", "nenɡ", "niɑn", "niɑo", "ninɡ", "nonɡ", "nuɑn", "pɑnɡ", "penɡ", "piɑn", "piɑo", "pinɡ", "qiɑn", "qiɑo", "qinɡ", "quɑn", "rɑnɡ", "renɡ", "ronɡ", "ruɑn", "sɑnɡ", "senɡ", "shɑi", "shɑn", "shɑo", "shei", "shen", "shou", "shuɑ", "shui", "shun", "shuo", "sonɡ", "suɑn", "tɑnɡ", "tenɡ", "tiɑn", "tiɑo", "tinɡ", "tonɡ", "tuɑn", "wɑnɡ", "wenɡ", "xiɑn", "xiɑo", "xinɡ", "xuɑn", "yɑnɡ", "yinɡ", "yonɡ", "yuɑn", "zɑnɡ", "zenɡ", "zhɑi", "zhɑn", "zhɑo", "zhei", "zhen", "zhou", "zhuɑ", "zhui", "zhun", "zhuo", "zonɡ", "zuɑn", "ɑnɡ", "bɑi", "bɑn", "bɑo", "bei", "ben", "bie", "bin", "cɑi", "cɑn", "cɑo", "cen", "chɑ", "che", "chi", "chu", "cou", "cui", "cun", "cuo", "dɑi", "dɑn", "dɑo", "dei", "den", "diɑ", "die", "diu", "dou", "dui", "dun", "duo", "enɡ", "fɑn", "fei", "fen", "fou", "ɡɑi", "ɡɑn", "ɡɑo", "ɡei", "ɡen", "ɡou", "ɡuɑ", "ɡui", "ɡun", "ɡuo", "hɑi", "hɑn", "hɑo", "hei", "hen", "hou", "huɑ", "hui", "hun", "huo", "jiɑ", "jie", "jin", "jiu", "jue", "jun", "kɑi", "kɑn", "kɑo", "kei", "ken", "kou", "kuɑ", "kui", "kun", "kuo", "lɑi", "lɑn", "lɑo", "lei", "liɑ", "lie", "lin", "liu", "lou", "lue", "lun", "luo", "mɑi", "mɑn", "mɑo", "mei", "men", "mie", "min", "miu", "mou", "nɑi", "nɑn", "nɑo", "nei", "nen", "nie", "nin", "niu", "nou", "nue", "nun", "nuo", "pɑi", "pɑn", "pɑo", "pei", "pen", "pie", "pin", "pou", "qiɑ", "qie", "qin", "qiu", "que", "qun", "rɑn", "rɑo", "ren", "rou", "ruɑ", "rui", "run", "ruo", "sɑi", "sɑn", "sɑo", "sen", "shɑ", "she", "shi", "shu", "sou", "sui", "sun", "suo", "tɑi", "tɑn", "tɑo", "tei", "tie", "tou", "tui", "tun", "tuo", "wɑi", "wɑn", "wei", "wen", "xiɑ", "xie", "xin", "xiu", "xue", "xun", "yɑn", "yɑo", "yin", "you", "yue", "yun", "zɑi", "zɑn", "zɑo", "zei", "zen", "zhɑ", "zhe", "zhi", "zhu", "zou", "zui", "zun", "zuo", "ɑi", "ɑn", "ɑo", "bɑ", "bi", "bo", "bu", "cɑ", "ce", "ci", "cu", "dɑ", "de", "di", "du", "ei", "en_us", "er", "fɑ", "fo", "fu", "ɡɑ", "ɡe", "ɡu", "hɑ", "he", "hu", "ji", "ju", "kɑ", "ke", "ku", "lɑ", "le", "li", "lo", "lu", "lü", "mɑ", "me", "mi", "mo", "mu", "nɑ", "ne", "ni", "nu", "nü", "ou", "pɑ", "pi", "po", "pu", "qi", "qu", "re", "ri", "ru", "sɑ", "se", "si", "su", "tɑ", "te", "ti", "tu", "wɑ", "wo", "wu", "xi", "xu", "yɑ", "ye", "yi", "yo", "yu", "zɑ", "ze", "zi", "zu", "ɑ", "e", "o"];

          _this.isPinyinBill = function (pinyinBill) {
            var pinyinBillTemp = pinyinBill;
            var pinyinBillTempLength = pinyinBillTemp.length;

            while (pinyinBillTempLength) {
              var find = false;

              for (var leftLength = 6; leftLength > 0; --leftLength) {
                if (pinyinBillTempLength < leftLength) continue;
                var leftPinyin = pinyinBillTemp.substring(0, leftLength);
                if (_this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) continue;

                if (pinyinBillTempLength === leftLength) {
                  find = true;
                  pinyinBillTemp = "";
                  break;
                }

                var rightPinyinBill = pinyinBillTemp.substr(leftLength);

                if (_this.isPinyinBill(rightPinyinBill)) {
                  find = true;
                  pinyinBillTemp = rightPinyinBill;
                  break;
                }
              }

              if (!find) return false;
              pinyinBillTempLength = pinyinBillTemp.length;
            }

            return true;
          };

          _this.splitPinyin = function (pinyinBill, pinyinArray, charCount) {
            pinyinBill = pinyinBill.toLowerCase();
            var isEndOfR = pinyinBill.substr(-1) === "r";
            var pinyinBillTemp = isEndOfR ? pinyinBill.substr(0, pinyinBill.length - 1) : pinyinBill;
            pinyinBillTemp = pinyinBillTemp.replace(/[āáǎà]/gi, "ɑ").replace(/[ōóǒò]/gi, "o").replace(/[ēéěè]/gi, "e").replace(/[īíǐì]/gi, "i").replace(/[ūúǔù]/gi, "u").replace(/[ǖǘǚǜ]/gi, "ü");
            var array = [];
            var pinyinBillTempLength = pinyinBillTemp.length;

            while (pinyinBillTempLength) {
              var find = false;

              for (var leftLength = 6; leftLength > 0; --leftLength) {
                if (pinyinBillTempLength < leftLength) continue;
                var leftPinyin = pinyinBillTemp.substring(0, leftLength);

                if (_this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1) {
                  continue;
                }

                if (pinyinBillTempLength === leftLength) {
                  find = true;
                  array.push(leftPinyin);
                  pinyinBillTemp = "";
                  break;
                }

                var rightPinyinBill = pinyinBillTemp.substr(leftLength);

                if (_this.isPinyinBill(rightPinyinBill)) {
                  find = true;
                  array.push(leftPinyin);
                  pinyinBillTemp = rightPinyinBill;
                  break;
                }
              }

              if (!find) break;
              pinyinBillTempLength = pinyinBillTemp.length;
            }

            var offset = 0;
            array.forEach(function (pinyin) {
              var length = pinyin.length;
              pinyinArray.push(pinyinBill.substr(offset, length));
              offset += length;
            });
            var count = pinyinArray.length;

            if (isEndOfR) {
              var last = pinyinArray.splice(count - 1, 1)[0].concat("r");
              pinyinArray.push(last);
            }
          };

          _this.fixPinyinArray = function (pinyinBill, pinyinArray, charCount) {
            var splitPinyin = _this.splitPinyin;
            var array = [];
            pinyinArray.forEach(function (seg) {
              splitPinyin(seg, array, charCount);
            });

            if (array.length !== charCount) {
              array.length = 0;
              splitPinyin(pinyinBill, array, charCount);
            }

            pinyinArray.length = 0;
            array.forEach(function (pinyin) {
              pinyinArray.push(pinyin);
            });
          };

          _this.countDataAndComputedData = function () {
            var _a = _this,
                data = _a.data,
                computedData = _a.computedData;
            var paperSize = data.paperSize,
                isLandscape = data.isLandscape,
                MAX_X = data.maxX,
                MAX_Y = data.maxY,
                pageMarginTop = data.pageMarginTop,
                pageMarginBottom = data.pageMarginBottom,
                pageMarginLeft = data.pageMarginLeft,
                pageMarginRight = data.pageMarginRight,
                kind = data.kind,
                fontSize = data.fontSize,
                color = data.color;
            var MID_RECTANGLE_HEIGHT = 23;
            var MID_RECTANGLE_WIDTH = 15;
            var MIN_RECTANGLE_WIDTH = 12;
            var MAX_RECTANGLE_WIDTH = 18;
            var SCALE = fontSize === "middle" ? 1 : fontSize === "small" ? MIN_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH : MAX_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH;
            var RECTANGLE_WIDTH = MID_RECTANGLE_WIDTH * SCALE;
            var RECTANGLE_HEIGHT = MID_RECTANGLE_HEIGHT * SCALE;
            var PINYIN_FONT_SIZE = 15 * SCALE;
            var PINYIN_TOP = -0.42 * SCALE;
            var MID_TEXT_WIDTH = MID_RECTANGLE_WIDTH * 54 / 80;
            var TEXT_WIDTH = MID_TEXT_WIDTH * SCALE;
            var TEXT_HEIGHT = MID_TEXT_WIDTH * SCALE;
            var TEXT_LEFT = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5;
            var TEXT_BOTTOM = (RECTANGLE_WIDTH - TEXT_WIDTH) * 0.5 - 22 / 54 * SCALE;
            var fontColor = color === "redOnBlack" ? "#ff0000" : "#000000";
            var css = "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\n\t\tpage { display:flex;flex-flow:wrap;column-gap:1mm;row-gap:2mm;flex:100%;justify-content:flex-start;align-items:flex-start; }\n\t\t\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? "landscape" : "portrait") + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n    /* \u4E0D\u53EF\u6307\u5B9Apage\u7684\u9AD8\u5EA6\uFF0C\u5426\u5219\u4E0D\u8DB3\u4E00\u9875\u65F6\u5404\u884C\u5C06\u5747\u5E03 */\n\t\t/* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm; } */\n\t\tpage { width:" + MAX_X + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; }\n\t\t/* #reportPageCore{display:flex;flex-flow:wrap;flex-direction:column;width:" + MAX_X + "mm;justify-content:flex-start;align-items:flex-start;} */\n\t\tpage{color:" + fontColor + ";}\n\n\t\t.wordWrap{display:inline-flex;height:" + RECTANGLE_HEIGHT + "mm;}\n\t\t.charWrap{position:relative;display:inline-block;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}\n\t\t.backgound-image{z-index:0;position:absolute;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}\n\n\t\tpinyin, chinese, .chinese{display:block;position:absolute;}\n\t\tpinyin{font-family:'Kaiti', 'Times New Roman';font-size:" + PINYIN_FONT_SIZE + "pt;top:" + PINYIN_TOP + "mm;width:" + RECTANGLE_WIDTH + "mm;text-align:center;}\n\t\t/* pinyin[chars=\"6\"]{letter-spacing:-0.05em;font-size:" + PINYIN_FONT_SIZE * 0.95 + "pt;} */\n\t\t/*pinyin{display:inline-flex;position:relative;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}pinyin-char{flex:1;}*/\n        pinyin-char{display:inline-block;}\n        pinyin[chars] pinyin-char.withTone{width:0.7em;margin-left:-0.2em;}\n        pinyin pinyin-char.lastG{margin-left:0.2em;}\n        pinyin[chars]{letter-spacing:-0.05em;} */\n        /*pinyin[chars] pinyin-char{overflow:hidden;}pinyin[chars=\"5\"] pinyin-char{width:20%;}pinyin[chars=\"6\"] pinyin-char{width:16%;}*/\n\n\t\t.chinese{width:" + TEXT_WIDTH + "mm;height:" + TEXT_HEIGHT + "mm;left:" + TEXT_LEFT + "mm;bottom:" + TEXT_BOTTOM + "mm;}\n\n\t\t/* TODO(@anqi) \u8C37\u6B4C\u6D4F\u89C8\u5668\u76F4\u63A5\u652F\u6301\u7528mm\u4F5C\u4E3Afont-size\uFF08\u5B57\u53F7\uFF09\u5355\u4F4D\u3002\n\t\t\t\u6682\u65F6\u8FD8\u4E0D\u7528\u8F6C\u6C49\u5B57\u5B57\u53F7\u7684mm\u5230px\u3002\n\t\t\t\u4F30\u8BA1\u6709\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u7B49\u4E4B\u540E\u8C03\u8BD5\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u65F6\u518D\u5904\u7406\u3002\n\t\t*/\n\t\tchinese{font-size:" + TEXT_WIDTH + "mm;font-family:'Kaiti', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\n    chinese{display:flex;justify-content:center;align-items:center;}\n    chinese{width:" + TEXT_WIDTH + "mm;height:" + TEXT_HEIGHT + "mm;left:" + TEXT_LEFT + "mm;bottom:" + TEXT_BOTTOM + "mm;}\n\n\t\tpage{position:relative;}\n\t\trow.subject{justify-content:flex-start;align-items:flex-start;height:1em;width:" + MAX_X + "mm;\n\t\t\tposition:absolute;top:" + (MAX_Y - 10) + "mm;display:inline-flex;}\n\t\t.subjectLeft,.subjectCenter,.subjectRight{display:inline-flex;}\n\t\t.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}\n\t\t.subjectCenter{width:60%;justify-content:center;align-items:flex-end;flex-direction:row;}\n\t\t.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}\n\n\t\t.subject{font-size:1em;}\n\t\t";
            var BACKGOUND_SVG_SRC = "http://edu.sonya.cc/images/3brick/1/background/" + color + ".svg";
            var PAGE_WIDTH = MAX_X,
                PAGE_HEIGHT = MAX_Y;
            var HORIZONTAL_SPACE = 1,
                VERTICAL_SPACE = 2;
            var CHAR_COUNT_PER_ROW = Math.floor((PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) / (RECTANGLE_WIDTH + HORIZONTAL_SPACE));
            var ROWS_COUNT = Math.floor((PAGE_HEIGHT + VERTICAL_SPACE) / (RECTANGLE_HEIGHT + VERTICAL_SPACE));
            var LANG = getCurrentLang();
            var i18nAnswerFlag = {
              en_us: "Answer",
              zh_cn: "答案",
              zh_tw: "答案"
            };
            var i18nSubject = data.kind === "pinyinToChinese" ? {
              en_us: "Writing",
              zh_cn: "写字",
              zh_tw: "寫字"
            } : {
              en_us: "Phonetic Notation",
              zh_cn: "注音",
              zh_tw: "注音"
            };
            var inputMethod = data.inputMethod,
                selectedCheckboxIndexArray = data.selectedCheckboxIndexArray;
            var i18nSubtitle = inputMethod === "select" && selectedCheckboxIndexArray.length === 1 ? _this.usableCopybookCheckboxElementArray.filter(function (checkbox) {
              return checkbox.checked;
            })[0].names : {
              en_us: "",
              zh_cn: "",
              zh_tw: ""
            };
            var HTML_SUBJECT = "<span class=\"subject\">" + i18nSubject[LANG] + "&nbsp;</span>&nbsp;";
            var HTML_SUBTITLE = "<span class=\"subtitle\">" + i18nSubtitle[LANG] + "</span>";
            var pageSubjectRowLeftHtml = '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
            var pageSubjectRowCenterHtml = "<cell class=\"subjectCenter\">" + HTML_SUBJECT + HTML_SUBTITLE + "</cell>";
            var questionPageSubjectRowRightHtml = "<cell class=\"subjectRight\">~reporterPageIndex~/~reporterPageCount~</cell>";
            var answerPageSubjectRowRightHtml = "<cell class=\"subjectRight\">" + i18nAnswerFlag[LANG] + "~reporterPageIndex~/~reporterPageCount~</cell>";
            var pageSubjectRowHtmlStart = "<row class=\"subject\">" + pageSubjectRowLeftHtml + pageSubjectRowCenterHtml;
            var questionPageSubjectRowHtml = "" + pageSubjectRowHtmlStart + questionPageSubjectRowRightHtml + "</row>";
            var answerPageSubjectRowHtml = "" + pageSubjectRowHtmlStart + answerPageSubjectRowRightHtml + "</row>";
            var questionPageEndHtml = questionPageSubjectRowHtml + "</page>";
            var answerPageEndHtml = answerPageSubjectRowHtml + "</page>";
            var questionHtml = "";
            var answerHtml = "";
            var pageIndex = 0;
            var pageIndexStr = "";
            var problemsStartHtml = "<page class=\"copybookProblemsPage\">";
            var answersStartHtml = "<page class=\"copybookAnswersPage\">";
            var wordWrapStartHtml = '<div class="wordWrap">';
            var wordWrapEndHtml = "</div>";

            var randomizedCopybooks = _this.getRandomizedCopybooks();

            if (randomizedCopybooks.length) {
              var rowIndex_1 = 0;
              var currentRowWidth_1 = 0;
              questionHtml += problemsStartHtml;
              answerHtml += answersStartHtml;
              randomizedCopybooks.forEach(function (_a) {
                var chinese = _a.chinese,
                    pinyin = _a.pinyin;
                pinyin = pinyin.replace(/\//gi, "'").replace(/a/g, "ɑ").replace(/g/g, "ɡ");
                var charArray = chinese.split("");
                var pinyinArray = pinyin.split("'");
                var charCount = charArray.length;

                if (charCount !== pinyinArray.length) {
                  _this.fixPinyinArray(pinyin, pinyinArray, charCount);
                }

                if (charCount !== pinyinArray.length) {
                  console.log(chinese, pinyin, pinyinArray, charCount);
                  return;
                }

                var CURRENT_CELL_WIDTH = RECTANGLE_WIDTH * charCount;

                if (currentRowWidth_1 + CURRENT_CELL_WIDTH > PAGE_WIDTH) {
                  if (rowIndex_1 < ROWS_COUNT - 1) {
                    rowIndex_1 += 1;
                  } else {
                    pageIndexStr = (++pageIndex).toString();
                    questionHtml += questionPageEndHtml.replace("~reporterPageIndex~", pageIndexStr).concat(problemsStartHtml);
                    answerHtml += answerPageEndHtml.replace("~reporterPageIndex~", pageIndexStr).concat(answersStartHtml);
                    rowIndex_1 = 0;
                  }

                  currentRowWidth_1 = 0;
                }

                questionHtml += wordWrapStartHtml;
                answerHtml += wordWrapStartHtml;
                charArray.forEach(function (_char, index) {
                  var charStartHtml = "<span class=\"charWrap\">";
                  var charEndHtml = "</span>";
                  var backgroundHtml = "<img class=\"backgound-image\" src=\"" + BACKGOUND_SVG_SRC + "\" alt=\"" + BACKGOUND_SVG_SRC + "\" />";
                  var pinyin = pinyinArray[index];
                  var pinyinHtml = "<pinyin " + (pinyin.length > 4 ? ' chars="'.concat(pinyin.length.toString(), '"') : "") + ">" + pinyin.split("").map(function (_char2, index) {
                    return "<pinyin-char".concat("āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ".indexOf(_char2) > -1 ? ' class="withTone"' : pinyin.length <= 4 && index > 0 && _char2 === "ɡ" ? ' class="lastG"' : "", ">", _char2, "</pinyin-char>");
                  }).join("") + "</pinyin>";
                  var chineseHtml = "<chinese>" + _char + "</chinese>";
                  questionHtml += charStartHtml.concat(backgroundHtml, kind === "pinyinToChinese" ? pinyinHtml : chineseHtml, charEndHtml);
                  answerHtml += charStartHtml.concat(backgroundHtml, pinyinHtml, chineseHtml, charEndHtml);
                });
                questionHtml += wordWrapEndHtml;
                answerHtml += wordWrapEndHtml;
                currentRowWidth_1 += CURRENT_CELL_WIDTH + HORIZONTAL_SPACE;
              });
              pageIndexStr = (++pageIndex).toString();
              questionHtml += questionPageEndHtml.replace("~reporterPageIndex~", pageIndexStr);
              answerHtml += answerPageEndHtml.replace("~reporterPageIndex~", pageIndexStr);
            }

            var questionPageCount = (questionHtml.split("</page>").length - 1).toString();
            var answerPageCount = (answerHtml.split("</page>").length - 1).toString();
            var html = questionHtml.replace(/~reporterPageCount~/g, questionPageCount).concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
            var en_us = FILENAME_POSTFIX + "Copybooks_chineseAndPinyin";
            var zh_cn = FILENAME_POSTFIX + "\u7B80\u4F53\u6C49\u5B57\u4E0E\u62FC\u97F3";
            var zh_tw = FILENAME_POSTFIX + "\u7C21\u9AD4\u6F22\u5B57\u8207\u62FC\u97F3";
            computedData.title = {
              en_us: en_us,
              zh_cn: zh_cn,
              zh_tw: zh_tw
            };
            computedData.css = css;
            computedData.html = html;
          };

          _this.getRandomizedCopybooks = function () {
            var copybooks = _this.data.copybooks;
            if (copybooks.length === 0) return [];
            var remaining = [];
            copybooks.forEach(function (copybook) {
              return remaining.push(copybook);
            });
            var result = [];
            var length = remaining.length;

            while (length > 1) {
              var index = Math.floor(Math.random() * length);
              result.push(remaining[index]);
              remaining.splice(index, 1);
              length -= 1;
            }

            result.push(remaining[0]);
            return result;
          };

          _this.updateOtherData = function (newData) {
            var copybooks = newData.copybooks,
                selectedCheckboxIndexArray = newData.selectedCheckboxIndexArray,
                kind = newData.kind,
                inputMethod = newData.inputMethod,
                fontSize = newData.fontSize,
                color = newData.color;
            var data = _this.data;
            data.copybooks.length = 0;
            copybooks.forEach(function (copybook) {
              return data.copybooks.push(copybook);
            });
            data.selectedCheckboxIndexArray.length = 0;
            selectedCheckboxIndexArray.forEach(function (selectedCheckboxIndex) {
              return data.selectedCheckboxIndexArray.push(selectedCheckboxIndex);
            });
            data.kind = kind;
            data.inputMethod = inputMethod;
            data.fontSize = fontSize;
            data.color = color;

            _this.onRadioOptionChanged("inputMethod", inputMethod);

            _this.updateCopybookData();

            _this.updateOtherDataOfCopybook(newData);
          };

          _this.idOrClassPrefix = "brickPageCopybook";
          _this.textareaChinese = createElement("textarea");
          _this.textareaPinyin = createElement("textarea");
          _this.textareaChineseAndPinyin = createElement("textarea");

          _this.initCoreElements = function () {
            _this.initKindElements();

            _this.initInputMethodElements();

            _this.initFontSizeElements();

            _this.initColorElements();

            var configCoreElement = _this.configCoreElement;
            var _a = _this,
                usableCopybookCheckboxElementArray = _a.usableCopybookCheckboxElementArray,
                usableCopybooksPeopleEducationEdition = _a.usableCopybooksPeopleEducationEdition,
                textareaChinese = _a.textareaChinese,
                textareaPinyin = _a.textareaPinyin,
                textareaChineseAndPinyin = _a.textareaChineseAndPinyin,
                idOrClassPrefix = _a.idOrClassPrefix;
            var data = _this.data;

            _this.appendCopybookOfGrade1Term1();

            _this.appendCopybookOfGrade1Term2();

            _this.appendCopybookOfGrade2Term1();

            var checkboxIndex = -1;
            var booksWrap = createElement("div");
            booksWrap.id = idOrClassPrefix + "UsableCopybooksWrap";
            configCoreElement.appendChild(booksWrap);
            var detailsPeopleEducationEdition = createElement("details");
            booksWrap.appendChild(detailsPeopleEducationEdition);
            detailsPeopleEducationEdition.setAttribute("open", "");
            var summaryPeopleEducationEdition = createElement("summary");
            detailsPeopleEducationEdition.appendChild(summaryPeopleEducationEdition);
            var strongElement = createElement("strong");
            strongElement.innerHTML = getI18nInnerHTML({
              en_us: "Textbook (People's Education Edition)",
              zh_cn: "课本（人教版）",
              zh_tw: "課本（人教版）"
            });
            summaryPeopleEducationEdition.appendChild(strongElement);
            var usableCopybooksPeopleEducationEditionWrap = createElement("div");
            usableCopybooksPeopleEducationEditionWrap.className = idOrClassPrefix + "UsableCopybooksWrap";
            detailsPeopleEducationEdition.appendChild(usableCopybooksPeopleEducationEditionWrap);
            usableCopybooksPeopleEducationEdition.forEach(function (_a) {
              var termI18n = _a.termI18n,
                  units = _a.units;
              var usableCopybookWrap = createElement("div");
              usableCopybooksPeopleEducationEditionWrap.appendChild(usableCopybookWrap);
              usableCopybookWrap.className = idOrClassPrefix + "UsableCopybookWrap";
              var label = createElement("label");
              usableCopybookWrap.appendChild(label);
              label.className = idOrClassPrefix + "UsableCopybookLabel";
              label.innerHTML = getI18nInnerHTML(termI18n);
              var spanGroup = createElement("span");
              usableCopybookWrap.appendChild(spanGroup);
              spanGroup.className = idOrClassPrefix + "UsableCopybookCheckboxGroupWrap";
              units.forEach(function (unit) {
                var names = unit.names,
                    words = unit.words;
                var spanWrap = createElement("span");
                spanGroup.appendChild(spanWrap);
                spanWrap.className = idOrClassPrefix + "UsableCopybookCheckboxWrap";
                var checkbox = createElement("input");
                spanWrap.appendChild(checkbox);
                checkbox.type = "checkbox";
                checkbox.setAttribute("edu-index", (++checkboxIndex).toString());
                checkbox.words = words;
                checkbox.names = names;
                usableCopybookCheckboxElementArray.push(checkbox);
                var span = createElement("span");
                spanWrap.appendChild(span);
                span.className = idOrClassPrefix + "UsableCopybookSpanAfterCheckboxWrap";
                span.innerHTML = getI18nInnerHTML(names);

                var checkboxChanged = function checkboxChanged(event) {
                  var copybooks = [];
                  var chineseArray = [];
                  var pinyinArray = [];
                  var chineseAndPinyinArray = [];
                  var selectedCheckboxIndexArray = [];
                  usableCopybookCheckboxElementArray.forEach(function (one) {
                    if (one.checked) {
                      selectedCheckboxIndexArray.push(parseInt(one.getAttribute("edu-index"), 0));
                      one.words.forEach(function (chineseAndPinyinPair) {
                        copybooks.push(chineseAndPinyinPair);
                        var chinese = chineseAndPinyinPair.chinese,
                            pinyin = chineseAndPinyinPair.pinyin;
                        chineseArray.push(chinese);
                        pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
                        chineseAndPinyinArray.push(chinese + " " + pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
                      });
                    }
                  });
                  textareaChinese.value = chineseArray.join("\n");
                  textareaPinyin.value = pinyinArray.join("\n");
                  textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
                  data.selectedCheckboxIndexArray.length = 0;
                  selectedCheckboxIndexArray.forEach(function (index) {
                    return data.selectedCheckboxIndexArray.push(index);
                  });

                  _this.updateCopybooks(copybooks);
                };

                checkbox.onchange = checkboxChanged;

                span.onclick = function (event) {
                  checkbox.checked = !checkbox.checked;
                  checkboxChanged(event);
                  return stopEventBubble(event);
                };
              });
            });

            _this.onRadioOptionChanged("inputMethod", data.inputMethod);

            var copybookInputWrap = createElement("div");
            configCoreElement.appendChild(copybookInputWrap);
            copybookInputWrap.id = idOrClassPrefix + "CopybookInputWrap";
            var copybookInputStrongElement = createElement("strong");
            copybookInputStrongElement.innerHTML = getI18nInnerHTML({
              en_us: "Entry area",
              zh_cn: "录入区",
              zh_tw: "錄入區"
            });
            copybookInputWrap.appendChild(copybookInputStrongElement);
            var textareaGroupWrap = createElement("span");
            copybookInputWrap.appendChild(textareaGroupWrap);
            textareaGroupWrap.id = idOrClassPrefix + "TextareaGroupWrap";
            textareaGroupWrap.appendChild(textareaChinese);
            textareaChinese.value = "";
            textareaChinese.rows = 4;

            textareaChinese.onchange = textareaChinese.focus = function () {
              _this.updateChineseOrPinyinTextarea(textareaChinese, textareaPinyin, textareaChineseAndPinyin);
            };

            textareaChinese.setAttribute("i18n-placeholder", JSON.stringify({
              en_us: "Input Chinese words, one for each line.",
              zh_cn: "输入汉字词语，每行一条。",
              zh_tw: "輸入漢字詞語，每行一條。"
            }));
            textareaGroupWrap.appendChild(textareaPinyin);
            textareaPinyin.value = "";
            textareaPinyin.rows = 4;

            textareaPinyin.onchange = textareaPinyin.focus = function () {
              _this.updateChineseOrPinyinTextarea(textareaChinese, textareaPinyin, textareaChineseAndPinyin);
            };

            textareaPinyin.setAttribute("i18n-placeholder", JSON.stringify({
              en_us: "Input the corresponding pinyin of Chinese words, separated by '/'. One for each line.",
              zh_cn: "输入汉字词语对应拼音，使用/分隔。每行一条。",
              zh_tw: "輸入漢字詞語對應拼音，使用/分隔。每行一條。"
            }));
            textareaGroupWrap.appendChild(textareaChineseAndPinyin);
            textareaChineseAndPinyin.value = "";
            textareaChineseAndPinyin.rows = 4;

            textareaChineseAndPinyin.onchange = textareaChineseAndPinyin.focus = function () {
              _this.updateChineseAndPinyinTextarea(textareaChineseAndPinyin, textareaChinese, textareaPinyin);
            };

            textareaChineseAndPinyin.setAttribute("i18n-placeholder", JSON.stringify({
              en_us: "Input Chinese words and corresponding pinyin, and pinyin is separated by '/'. One for each line.",
              zh_cn: "输入汉字词语及对应拼音，拼音使用/分隔。每行一条。",
              zh_tw: "輸入漢字詞語及對應拼音，拼音使用/分隔。每行一條。"
            }));
          };

          _this.updateCopybookData = function () {
            var _a = _this,
                data = _a.data,
                computedData = _a.computedData,
                usableCopybookCheckboxElementArray = _a.usableCopybookCheckboxElementArray;
            var _b = data,
                paperSize = _b.paperSize,
                isLandscape = _b.isLandscape,
                MAX_X = _b.maxX,
                MAX_Y = _b.maxY,
                pageMarginTop = _b.pageMarginTop,
                pageMarginLeft = _b.pageMarginLeft,
                copybooks = _b.copybooks,
                selectedCheckboxIndexArray = _b.selectedCheckboxIndexArray,
                kind = _b.kind,
                inputMethod = _b.inputMethod,
                fontSize = _b.fontSize,
                color = _b.color;
            var _c = _this,
                kindElementArray = _c.kindElementArray,
                inputMethodElementArray = _c.inputMethodElementArray,
                fontSizeElementArray = _c.fontSizeElementArray,
                colorElementArray = _c.colorElementArray,
                textareaChinese = _c.textareaChinese,
                textareaPinyin = _c.textareaPinyin,
                textareaChineseAndPinyin = _c.textareaChineseAndPinyin;
            kindElementArray.forEach(function (radio) {
              radio.checked = radio.value === kind;
            });
            inputMethodElementArray.forEach(function (radio) {
              radio.checked = radio.value === inputMethod;
            });
            fontSizeElementArray.forEach(function (radio) {
              radio.checked = radio.value === fontSize;
            });
            colorElementArray.forEach(function (radio) {
              radio.checked = radio.value === color;
            });
            usableCopybookCheckboxElementArray.forEach(function (checkbox) {
              var index = parseInt(checkbox.getAttribute("edu-index") || "0", 0);
              checkbox.checked = selectedCheckboxIndexArray.indexOf(index) > -1;
            });
            var chineseArray = [];
            var pinyinArray = [];
            var chineseAndPinyinArray = [];
            copybooks.forEach(function (_a) {
              var chinese = _a.chinese,
                  pinyin = _a.pinyin;
              chineseArray.push(chinese);
              pinyinArray.push(pinyin);
              chineseAndPinyinArray.push(chinese + " " + pinyin);
            });
            textareaChinese.value = chineseArray.join("\n");
            textareaPinyin.value = pinyinArray.join("\n");
            textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");
          };

          _this.updateChineseAndPinyinTextarea = function (textareaChineseAndPinyin, textareaChinese, textareaPinyin) {
            var copybooks = [];
            var chineseAndPinyinArray = textareaChineseAndPinyin.value.split("\n");
            var chineseAndPinyinLength = chineseAndPinyinArray.length;

            for (var i = 0; i < chineseAndPinyinLength; ++i) {
              var pairArray = chineseAndPinyinArray[i].split(" ");
              var chinese = pairArray[0];
              var pinyin = (pairArray.length < 2 ? "" : pairArray[1]).replace(/a/g, "ɑ").replace(/g/g, "ɡ");
              copybooks.push({
                chinese: chinese,
                pinyin: pinyin
              });
            }

            var chineseArray = [];
            var pinyinArray = [];
            copybooks.forEach(function (_a) {
              var chinese = _a.chinese,
                  pinyin = _a.pinyin;
              chineseArray.push(chinese);
              pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
              chineseAndPinyinArray.push(chinese + " " + pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
            });
            textareaChinese.value = chineseArray.join("\n");
            textareaPinyin.value = pinyinArray.join("\n");

            _this.updateCopybooks(copybooks);
          };

          _this.updateChineseOrPinyinTextarea = function (textareaChinese, textareaPinyin, textareaChineseAndPinyin) {
            var copybooks = [];
            var chineseArray = textareaChinese.value.split("\n");
            var pinyinArray = textareaPinyin.value.split("\n");
            var chineseLength = chineseArray.length;
            var pinyinLength = pinyinArray.length;
            var maxCount = Math.max(chineseLength, pinyinLength);

            for (var i = 0; i < maxCount; ++i) {
              var chinese = i < chineseLength ? chineseArray[i] : "";
              var pinyin = (i < pinyinLength ? pinyinArray[i] : "").replace(/a/g, "ɑ").replace(/g/g, "ɡ");
              copybooks.push({
                chinese: chinese,
                pinyin: pinyin
              });
            }

            chineseArray.length = 0;
            pinyinArray.length = 0;
            var chineseAndPinyinArray = [];
            copybooks.forEach(function (_a) {
              var chinese = _a.chinese,
                  pinyin = _a.pinyin;
              chineseArray.push(chinese);
              pinyinArray.push(pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
              chineseAndPinyinArray.push(chinese + " " + pinyin.replace(/a/g, "ɑ").replace(/g/g, "ɡ"));
            });
            textareaChinese.value = chineseArray.join("\n");
            textareaPinyin.value = pinyinArray.join("\n");
            textareaChineseAndPinyin.value = chineseAndPinyinArray.join("\n");

            _this.updateCopybooks(copybooks);
          };

          _this.updateCopybooks = function (copybooks) {
            var data = _this.data;
            data.copybooks.length = 0;
            copybooks.forEach(function (copybook) {
              data.copybooks.push(copybook);
            });

            _this.countDataAndComputedData();

            _this.build();
          };

          _this.onRadioOptionChanged = function (propertyName, value) {
            switch (propertyName) {
              case "kind":
                break;

              case "inputMethod":
                switch (value) {
                  case "select":
                    showBlock(getElementById("brickPageCopybookUsableCopybooksWrap"));
                    hide(getElementById("brickPageCopybookCopybookInputWrap"));
                    break;

                  case "manualInput":
                    hide(getElementById("brickPageCopybookUsableCopybooksWrap"));
                    showBlock(getElementById("brickPageCopybookCopybookInputWrap"));
                    break;

                  default:
                    break;
                }

                break;

              case "fontSize":
                break;

              case "color":
                break;

              default:
                break;
            }
          };

          _this.appendCopybookOfGrade1Term1 = function () {
            var usableCopybooksPeopleEducationEdition = _this.usableCopybooksPeopleEducationEdition;
            usableCopybooksPeopleEducationEdition.push({
              termI18n: {
                en_us: "K1T1",
                zh_cn: "\u4E00\u5E74\u7EA7\u4E0A",
                zh_tw: "\u4E00\u5E74\u7D1A\u4E0A"
              },
              units: [{
                names: {
                  en_us: "Unit 1",
                  zh_cn: "\u7B2C\u4E00\u5355\u5143",
                  zh_tw: "\u7B2C\u4E00\u5355\u5143"
                },
                words: [{
                  chinese: "\u5929",
                  pinyin: "ti\u0101n"
                }, {
                  chinese: "\u5730",
                  pinyin: "d\xEC"
                }, {
                  chinese: "\u4EBA",
                  pinyin: "r\xE9n"
                }, {
                  chinese: "\u4F60",
                  pinyin: "n\u01D0"
                }, {
                  chinese: "\u6211",
                  pinyin: "w\u01D2"
                }, {
                  chinese: "\u4ED6",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u4E00",
                  pinyin: "y\u012B"
                }, {
                  chinese: "\u4E8C",
                  pinyin: "\xE8r"
                }, {
                  chinese: "\u4E09",
                  pinyin: "s\u0101n"
                }, {
                  chinese: "\u56DB",
                  pinyin: "s\xEC"
                }, {
                  chinese: "\u4E94",
                  pinyin: "w\u01D4"
                }, {
                  chinese: "\u4E0A\u4E0B",
                  pinyin: "sh\xE0ng'xi\xE0"
                }, {
                  chinese: "\u53E3",
                  pinyin: "k\u01D2u"
                }, {
                  chinese: "\u8033",
                  pinyin: "\u011Br"
                }, {
                  chinese: "\u76EE",
                  pinyin: "m\xF9"
                }, {
                  chinese: "\u624B",
                  pinyin: "sh\u01D2u"
                }, {
                  chinese: "\u8DB3",
                  pinyin: "z\xFA"
                }, {
                  chinese: "\u7AD9",
                  pinyin: "zh\xE0n"
                }, {
                  chinese: "\u5750",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u65E5",
                  pinyin: "r\xEC"
                }, {
                  chinese: "\u6708",
                  pinyin: "yu\xE8"
                }, {
                  chinese: "\u6C34",
                  pinyin: "shu\u01D0"
                }, {
                  chinese: "\u706B",
                  pinyin: "hu\u01D2"
                }, {
                  chinese: "\u5C71",
                  pinyin: "sh\u0101n"
                }, {
                  chinese: "\u77F3",
                  pinyin: "sh\xED"
                }, {
                  chinese: "\u7530",
                  pinyin: "ti\xE1n"
                }, {
                  chinese: "\u79BE",
                  pinyin: "h\xE9"
                }, {
                  chinese: "\u5BF9",
                  pinyin: "du\xEC"
                }, {
                  chinese: "\u4E91",
                  pinyin: "y\xFAn"
                }, {
                  chinese: "\u96E8",
                  pinyin: "y\u01D4"
                }, {
                  chinese: "\u98CE",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u82B1",
                  pinyin: "hu\u0101"
                }, {
                  chinese: "\u9E1F",
                  pinyin: "ni\u01CEo"
                }, {
                  chinese: "\u866B",
                  pinyin: "ch\xF3ng"
                }, {
                  chinese: "\u516D",
                  pinyin: "li\xF9"
                }, {
                  chinese: "\u4E03",
                  pinyin: "q\u012B"
                }, {
                  chinese: "\u516B",
                  pinyin: "b\u0101"
                }, {
                  chinese: "\u4E5D",
                  pinyin: "ji\u01D4"
                }, {
                  chinese: "\u5341",
                  pinyin: "sh\xED"
                }]
              }, {
                names: {
                  en_us: "Unit 2",
                  zh_cn: "\u7B2C\u4E8C\u5355\u5143",
                  zh_tw: "\u7B2C\u4E8C\u5355\u5143"
                },
                words: [{
                  chinese: "\u7238",
                  pinyin: "b\xE0"
                }, {
                  chinese: "\u5988",
                  pinyin: "m\u0101"
                }, {
                  chinese: "\u9A6C",
                  pinyin: "m\u01CE"
                }, {
                  chinese: "\u571F",
                  pinyin: "t\u01D4"
                }, {
                  chinese: "\u4E0D",
                  pinyin: "b\xF9"
                }, {
                  chinese: "\u753B",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u6253",
                  pinyin: "d\u01CE"
                }, {
                  chinese: "\u68CB",
                  pinyin: "q\xED"
                }, {
                  chinese: "\u9E21",
                  pinyin: "j\u012B"
                }, {
                  chinese: "\u5B57",
                  pinyin: "z\xEC"
                }, {
                  chinese: "\u8BCD\u8BED",
                  pinyin: "c\xED'y\u01D4"
                }, {
                  chinese: "\u53E5\u5B50",
                  pinyin: "j\xF9'z\u01D0"
                }, {
                  chinese: "\u684C",
                  pinyin: "zhu\u014D"
                }, {
                  chinese: "\u7EB8",
                  pinyin: "zh\u01D0"
                }, {
                  chinese: "\u6587",
                  pinyin: "w\xE9n"
                }, {
                  chinese: "\u6570\u5B66",
                  pinyin: "sh\xF9'xu\xE9"
                }, {
                  chinese: "\u97F3\u4E50",
                  pinyin: "y\u012Bn'yu\xE8"
                }]
              }, {
                names: {
                  en_us: "Unit 3",
                  zh_cn: "\u7B2C\u4E09\u5355\u5143",
                  zh_tw: "\u7B2C\u4E09\u5355\u5143"
                },
                words: [{
                  chinese: "\u59B9",
                  pinyin: "m\xE8i"
                }, {
                  chinese: "\u5976",
                  pinyin: "n\u01CEi"
                }, {
                  chinese: "\u5C0F",
                  pinyin: "xi\u01CEo"
                }, {
                  chinese: "\u6865",
                  pinyin: "qi\xE1o"
                }, {
                  chinese: "\u53F0",
                  pinyin: "t\xE1i"
                }, {
                  chinese: "\u96EA",
                  pinyin: "xu\u011B"
                }, {
                  chinese: "\u513F",
                  pinyin: "\xE9r"
                }, {
                  chinese: "\u767D",
                  pinyin: "b\xE1i"
                }, {
                  chinese: "\u8349",
                  pinyin: "c\u01CEo"
                }, {
                  chinese: "\u5BB6",
                  pinyin: "ji\u0101"
                }, {
                  chinese: "\u662F",
                  pinyin: "sh\xEC"
                }, {
                  chinese: "\u8F66",
                  pinyin: "ch\u0113"
                }, {
                  chinese: "\u8DEF\u706F",
                  pinyin: "l\xF9'd\u0113ng"
                }, {
                  chinese: "\u8D70",
                  pinyin: "z\u01D2u"
                }]
              }, {
                names: {
                  en_us: "Unit 4",
                  zh_cn: "\u7B2C\u56DB\u5355\u5143",
                  zh_tw: "\u7B2C\u56DB\u5355\u5143"
                },
                words: [{
                  chinese: "\u79CB",
                  pinyin: "qi\u016B"
                }, {
                  chinese: "\u6C14",
                  pinyin: "q\xEC"
                }, {
                  chinese: "\u4E86",
                  pinyin: "le"
                }, {
                  chinese: "\u6811\u53F6",
                  pinyin: "sh\xF9'y\xE8"
                }, {
                  chinese: "\u7247",
                  pinyin: "pi\xE0n"
                }, {
                  chinese: "\u5927",
                  pinyin: "d\xE0"
                }, {
                  chinese: "\u98DE",
                  pinyin: "f\u0113i"
                }, {
                  chinese: "\u4F1A",
                  pinyin: "hu\xEC"
                }, {
                  chinese: "\u4E2A",
                  pinyin: "g\xE8"
                }, {
                  chinese: "\u7684",
                  pinyin: "de"
                }, {
                  chinese: "\u8239",
                  pinyin: "chu\xE1n"
                }, {
                  chinese: "\u4E24\u5934",
                  pinyin: "li\u01CEng't\xF3u"
                }, {
                  chinese: "\u5728",
                  pinyin: "z\xE0i"
                }, {
                  chinese: "\u91CC",
                  pinyin: "l\u01D0"
                }, {
                  chinese: "\u770B\u89C1",
                  pinyin: "k\xE0n'ji\xE0n"
                }, {
                  chinese: "\u95EA",
                  pinyin: "sh\u01CEn"
                }, {
                  chinese: "\u661F",
                  pinyin: "x\u012Bng"
                }, {
                  chinese: "\u6C5F\u5357",
                  pinyin: "ji\u0101ng'n\xE1n"
                }, {
                  chinese: "\u53EF",
                  pinyin: "k\u011B"
                }, {
                  chinese: "\u91C7\u83B2",
                  pinyin: "c\u01CEi'li\xE1n"
                }, {
                  chinese: "\u9C7C",
                  pinyin: "y\xFA"
                }, {
                  chinese: "\u4E1C",
                  pinyin: "d\u014Dng"
                }, {
                  chinese: "\u897F",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u5317",
                  pinyin: "b\u011Bi"
                }, {
                  chinese: "\u5C16",
                  pinyin: "ji\u0101n"
                }, {
                  chinese: "\u8BF4",
                  pinyin: "shu\u014D"
                }, {
                  chinese: "\u6625",
                  pinyin: "ch\u016Bn"
                }, {
                  chinese: "\u9752\u86D9",
                  pinyin: "q\u012Bng'w\u0101"
                }, {
                  chinese: "\u590F",
                  pinyin: "xi\xE0"
                }, {
                  chinese: "\u5F2F",
                  pinyin: "w\u0101n"
                }, {
                  chinese: "\u76AE",
                  pinyin: "p\xED"
                }, {
                  chinese: "\u5730",
                  pinyin: "de"
                }, {
                  chinese: "\u51AC",
                  pinyin: "d\u014Dng"
                }, {
                  chinese: "\u7537\u5973",
                  pinyin: "n\xE1n'n\u01DA"
                }, {
                  chinese: "\u5F00\u5173",
                  pinyin: "k\u0101i'gu\u0101n"
                }, {
                  chinese: "\u6B63\u53CD",
                  pinyin: "zh\xE8ng'f\u01CEn"
                }]
              }, {
                names: {
                  en_us: "Unit 5",
                  zh_cn: "\u7B2C\u4E94\u5355\u5143",
                  zh_tw: "\u7B2C\u4E94\u5355\u5143"
                },
                words: [{
                  chinese: "\u8FDC",
                  pinyin: "yu\u01CEn"
                }, {
                  chinese: "\u6709",
                  pinyin: "y\u01D2u"
                }, {
                  chinese: "\u8272",
                  pinyin: "s\xE8"
                }, {
                  chinese: "\u8FD1",
                  pinyin: "j\xECn"
                }, {
                  chinese: "\u542C",
                  pinyin: "t\u012Bng"
                }, {
                  chinese: "\u65E0",
                  pinyin: "w\xFA"
                }, {
                  chinese: "\u58F0",
                  pinyin: "sh\u0113ng"
                }, {
                  chinese: "\u53BB",
                  pinyin: "q\xF9"
                }, {
                  chinese: "\u8FD8",
                  pinyin: "h\xE1i"
                }, {
                  chinese: "\u6765",
                  pinyin: "l\xE1i"
                }, {
                  chinese: "\u591A\u5C11",
                  pinyin: "du\u014D'sh\u01CEo"
                }, {
                  chinese: "\u9EC4\u725B",
                  pinyin: "hu\xE1ng'ni\xFA"
                }, {
                  chinese: "\u53EA",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u732B",
                  pinyin: "m\u0101o"
                }, {
                  chinese: "\u8FB9",
                  pinyin: "bi\u0101n"
                }, {
                  chinese: "\u9E2D",
                  pinyin: "y\u0101"
                }, {
                  chinese: "\u82F9\u679C",
                  pinyin: "p\xEDng'gu\u01D2"
                }, {
                  chinese: "\u674F",
                  pinyin: "x\xECng"
                }, {
                  chinese: "\u6843",
                  pinyin: "t\xE1o"
                }, {
                  chinese: "\u4E66\u5305",
                  pinyin: "sh\u016B'b\u0101o"
                }, {
                  chinese: "\u5C3A",
                  pinyin: "ch\u01D0"
                }, {
                  chinese: "\u4F5C\u4E1A\u672C",
                  pinyin: "zu\xF2'y\xE8'b\u011Bn"
                }, {
                  chinese: "\u7B14",
                  pinyin: "b\u01D0"
                }, {
                  chinese: "\u5200",
                  pinyin: "d\u0101o"
                }, {
                  chinese: "\u8BFE",
                  pinyin: "k\xE8"
                }, {
                  chinese: "\u65E9",
                  pinyin: "z\u01CEo"
                }, {
                  chinese: "\u6821",
                  pinyin: "xi\xE0o"
                }, {
                  chinese: "\u660E",
                  pinyin: "m\xEDng"
                }, {
                  chinese: "\u529B",
                  pinyin: "l\xEC"
                }, {
                  chinese: "\u5C18",
                  pinyin: "ch\xE9n"
                }, {
                  chinese: "\u4ECE",
                  pinyin: "c\xF3ng"
                }, {
                  chinese: "\u4F17",
                  pinyin: "zh\xF2ng"
                }, {
                  chinese: "\u53CC",
                  pinyin: "shu\u0101ng"
                }, {
                  chinese: "\u6728",
                  pinyin: "m\xF9"
                }, {
                  chinese: "\u6797",
                  pinyin: "l\xEDn"
                }, {
                  chinese: "\u68EE",
                  pinyin: "s\u0113n"
                }, {
                  chinese: "\u6761",
                  pinyin: "ti\xE1o"
                }, {
                  chinese: "\u5FC3",
                  pinyin: "x\u012Bn"
                }, {
                  chinese: "\u5347\u56FD\u65D7",
                  pinyin: "sheng'gu\xF3'q\xED"
                }, {
                  chinese: "\u4E2D",
                  pinyin: "zh\u014Dng"
                }, {
                  chinese: "\u7EA2",
                  pinyin: "h\xF3ng"
                }, {
                  chinese: "\u6B4C",
                  pinyin: "g\u0113"
                }, {
                  chinese: "\u8D77\u7ACB",
                  pinyin: "q\u01D0'l\xEC"
                }, {
                  chinese: "\u4E48",
                  pinyin: "me"
                }, {
                  chinese: "\u7F8E\u4E3D",
                  pinyin: "m\u011Bi'l\xEC"
                }, {
                  chinese: "\u5348",
                  pinyin: "w\u01D4"
                }, {
                  chinese: "\u665A",
                  pinyin: "w\u01CEn"
                }, {
                  chinese: "\u6628",
                  pinyin: "zu\xF3"
                }, {
                  chinese: "\u4ECA\u5E74",
                  pinyin: "j\u012Bn'ni\xE1n"
                }]
              }, {
                names: {
                  en_us: "Unit 6",
                  zh_cn: "\u7B2C\u516D\u5355\u5143",
                  zh_tw: "\u7B2C\u516D\u5355\u5143"
                },
                words: [{
                  chinese: "\u5F71",
                  pinyin: "y\u01D0ng"
                }, {
                  chinese: "\u524D\u540E",
                  pinyin: "qi\xE1n'h\xF2u"
                }, {
                  chinese: "\u9ED1\u72D7",
                  pinyin: "h\u0113i'g\u01D2u"
                }, {
                  chinese: "\u5DE6\u53F3",
                  pinyin: "zu\u01D2'y\xF2u"
                }, {
                  chinese: "\u5B83",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u597D\u670B\u53CB",
                  pinyin: "h\u01CEo'p\xE9ng'y\u01D2u"
                }, {
                  chinese: "\u6BD4",
                  pinyin: "b\u01D0"
                }, {
                  chinese: "\u5C3E\u5DF4",
                  pinyin: "w\u011Bi'b\u0101"
                }, {
                  chinese: "\u8C01",
                  pinyin: "shu\xED"
                }, {
                  chinese: "\u957F\u77ED",
                  pinyin: "ch\xE1ng'du\u01CEn"
                }, {
                  chinese: "\u628A",
                  pinyin: "b\u01CE"
                }, {
                  chinese: "\u4F1E",
                  pinyin: "s\u01CEn"
                }, {
                  chinese: "\u5154",
                  pinyin: "t\xF9"
                }, {
                  chinese: "\u6700",
                  pinyin: "zu\xEC"
                }, {
                  chinese: "\u516C",
                  pinyin: "g\u014Dng"
                }, {
                  chinese: "\u5199\u8BD7",
                  pinyin: "xi\u011B'sh\u012B"
                }, {
                  chinese: "\u70B9",
                  pinyin: "di\u01CEn"
                }, {
                  chinese: "\u8981",
                  pinyin: "y\xE0o"
                }, {
                  chinese: "\u8FC7",
                  pinyin: "gu\xF2"
                }, {
                  chinese: "\u7ED9",
                  pinyin: "g\u011Bi"
                }, {
                  chinese: "\u5F53",
                  pinyin: "d\u0101ng"
                }, {
                  chinese: "\u4E32",
                  pinyin: "chu\xE0n"
                }, {
                  chinese: "\u4EEC",
                  pinyin: "men"
                }, {
                  chinese: "\u4EE5",
                  pinyin: "y\u01D0"
                }, {
                  chinese: "\u6210",
                  pinyin: "ch\xE9ng"
                }, {
                  chinese: "\u6570",
                  pinyin: "sh\u01D4"
                }, {
                  chinese: "\u5F69",
                  pinyin: "c\u01CEi"
                }, {
                  chinese: "\u534A",
                  pinyin: "b\xE0n"
                }, {
                  chinese: "\u7A7A",
                  pinyin: "k\u014Dng"
                }, {
                  chinese: "\u95EE",
                  pinyin: "w\xE8n"
                }, {
                  chinese: "\u5230",
                  pinyin: "d\xE0o"
                }, {
                  chinese: "\u65B9",
                  pinyin: "f\u0101ng"
                }, {
                  chinese: "\u6CA1",
                  pinyin: "m\xE9i"
                }, {
                  chinese: "\u66F4",
                  pinyin: "g\xE8ng"
                }, {
                  chinese: "\u7EFF",
                  pinyin: "l\u01DC"
                }, {
                  chinese: "\u51FA",
                  pinyin: "ch\u016B"
                }, {
                  chinese: "\u957F",
                  pinyin: "zh\u01CEng"
                }]
              }, {
                names: {
                  en_us: "Unit 7",
                  zh_cn: "\u7B2C\u4E03\u5355\u5143",
                  zh_tw: "\u7B2C\u4E03\u5355\u5143"
                },
                words: [{
                  chinese: "\u7761",
                  pinyin: "shu\xEC"
                }, {
                  chinese: "\u90A3",
                  pinyin: "n\xE0"
                }, {
                  chinese: "\u6D77",
                  pinyin: "h\u01CEi"
                }, {
                  chinese: "\u771F",
                  pinyin: "zh\u0113n"
                }, {
                  chinese: "\u8001\u5E08",
                  pinyin: "l\u01CEo'sh\u012B"
                }, {
                  chinese: "\u5417",
                  pinyin: "ma"
                }, {
                  chinese: "\u540C",
                  pinyin: "t\xF3ng"
                }, {
                  chinese: "\u4EC0",
                  pinyin: "sh\xE9n"
                }, {
                  chinese: "\u624D",
                  pinyin: "c\xE1i"
                }, {
                  chinese: "\u4EAE",
                  pinyin: "li\xE0ng"
                }, {
                  chinese: "\u65F6\u5019",
                  pinyin: "sh\xED'h\xF2u"
                }, {
                  chinese: "\u89C9\u5F97",
                  pinyin: "ji\xE0o'de"
                }, {
                  chinese: "\u81EA\u5DF1",
                  pinyin: "z\xEC'j\u01D0"
                }, {
                  chinese: "\u5F88",
                  pinyin: "h\u011Bn"
                }, {
                  chinese: "\u7A7F\u8863\u670D",
                  pinyin: "chu\u0101n'y\u012B'f\xFA"
                }, {
                  chinese: "\u95E8",
                  pinyin: "m\xE9n"
                }, {
                  chinese: "\u5FEB",
                  pinyin: "ku\xE0i"
                }, {
                  chinese: "\u84DD",
                  pinyin: "l\xE1n"
                }, {
                  chinese: "\u53C8",
                  pinyin: "y\xF2u"
                }, {
                  chinese: "\u7B11",
                  pinyin: "xi\xE0o"
                }, {
                  chinese: "\u7740",
                  pinyin: "zhe"
                }, {
                  chinese: "\u5411",
                  pinyin: "xi\xE0ng"
                }, {
                  chinese: "\u548C",
                  pinyin: "h\xE9"
                }, {
                  chinese: "\u8D1D",
                  pinyin: "b\xE8i"
                }, {
                  chinese: "\u5A03",
                  pinyin: "w\xE1"
                }, {
                  chinese: "\u6302",
                  pinyin: "gu\xE0"
                }, {
                  chinese: "\u6D3B",
                  pinyin: "hu\xF3"
                }, {
                  chinese: "\u91D1",
                  pinyin: "j\u012Bn"
                }, {
                  chinese: "\u54E5",
                  pinyin: "g\u0113"
                }, {
                  chinese: "\u59D0",
                  pinyin: "ji\u011B"
                }, {
                  chinese: "\u5F1F",
                  pinyin: "d\xEC"
                }, {
                  chinese: "\u53D4",
                  pinyin: "sh\u016B"
                }, {
                  chinese: "\u7237",
                  pinyin: "y\xE9"
                }]
              }, {
                names: {
                  en_us: "Unit 8",
                  zh_cn: "\u7B2C\u516B\u5355\u5143",
                  zh_tw: "\u7B2C\u516B\u5355\u5143"
                },
                words: [{
                  chinese: "\u7FA4",
                  pinyin: "q\xFAn"
                }, {
                  chinese: "\u7AF9",
                  pinyin: "zh\xFA"
                }, {
                  chinese: "\u7259",
                  pinyin: "y\xE1"
                }, {
                  chinese: "\u7528",
                  pinyin: "y\xF2ng"
                }, {
                  chinese: "\u51E0\u6B65",
                  pinyin: "j\u01D0'b\xF9"
                }, {
                  chinese: "\u4E3A",
                  pinyin: "w\xE9i"
                }, {
                  chinese: "\u53C2\u52A0",
                  pinyin: "c\u0101n'ji\u0101"
                }, {
                  chinese: "\u6D1E",
                  pinyin: "d\xF2ng"
                }, {
                  chinese: "\u7740",
                  pinyin: "zh\xE1o"
                }, {
                  chinese: "\u4E4C\u9E26",
                  pinyin: "w\u016B'y\u0101"
                }, {
                  chinese: "\u5904",
                  pinyin: "ch\xF9"
                }, {
                  chinese: "\u627E",
                  pinyin: "zh\u01CEo"
                }, {
                  chinese: "\u529E",
                  pinyin: "b\xE0n"
                }, {
                  chinese: "\u65C1",
                  pinyin: "p\xE1ng"
                }, {
                  chinese: "\u8BB8",
                  pinyin: "x\u01D4"
                }, {
                  chinese: "\u6CD5",
                  pinyin: "f\u01CE"
                }, {
                  chinese: "\u653E",
                  pinyin: "f\xE0ng"
                }, {
                  chinese: "\u8FDB",
                  pinyin: "j\xECn"
                }, {
                  chinese: "\u9AD8",
                  pinyin: "g\u0101o"
                }, {
                  chinese: "\u4F4F",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u5B69",
                  pinyin: "h\xE1i"
                }, {
                  chinese: "\u73A9",
                  pinyin: "w\xE1n"
                }, {
                  chinese: "\u5427",
                  pinyin: "ba"
                }, {
                  chinese: "\u53D1\u82BD",
                  pinyin: "f\u0101'y\xE1"
                }, {
                  chinese: "\u722C",
                  pinyin: "p\xE1"
                }, {
                  chinese: "\u5440",
                  pinyin: "ya"
                }, {
                  chinese: "\u4E45",
                  pinyin: "ji\u01D4"
                }, {
                  chinese: "\u56DE",
                  pinyin: "hu\xED"
                }, {
                  chinese: "\u5168",
                  pinyin: "qu\xE1n"
                }, {
                  chinese: "\u53D8",
                  pinyin: "bi\xE0n"
                }, {
                  chinese: "\u5DE5\u5382",
                  pinyin: "gong'ch\u01CEng"
                }, {
                  chinese: "\u533B\u9662",
                  pinyin: "y\u012B'yu\xE0n"
                }, {
                  chinese: "\u751F",
                  pinyin: "sh\u0113ng"
                }]
              }]
            });
          };

          _this.appendCopybookOfGrade1Term2 = function () {
            var usableCopybooksPeopleEducationEdition = _this.usableCopybooksPeopleEducationEdition;
            usableCopybooksPeopleEducationEdition.push({
              termI18n: {
                en_us: "K1T2",
                zh_cn: "\u4E00\u5E74\u7EA7\u4E0B",
                zh_tw: "\u4E00\u5E74\u7D1A\u4E0B"
              },
              units: [{
                names: {
                  en_us: "Literacy 1",
                  zh_cn: "\u8BC6\u5B57\u88681",
                  zh_tw: "\u8B58\u5B57\u93361"
                },
                words: [{
                  chinese: "\u971C",
                  pinyin: "shu\u0101ng"
                }, {
                  chinese: "\u5439",
                  pinyin: "chu\u012B"
                }, {
                  chinese: "\u843D",
                  pinyin: "lu\xF2"
                }, {
                  chinese: "\u964D",
                  pinyin: "ji\xE0ng"
                }, {
                  chinese: "\u98D8\u6E38",
                  pinyin: "pi\u0101o'y\xF3u"
                }, {
                  chinese: "\u6C60",
                  pinyin: "ch\xED"
                }, {
                  chinese: "\u5165",
                  pinyin: "r\xF9"
                }, {
                  chinese: "\u59D3\u6C0F",
                  pinyin: "x\xECng'sh\xEC"
                }, {
                  chinese: "\u674E",
                  pinyin: "l\u01D0"
                }, {
                  chinese: "\u5F20",
                  pinyin: "zh\u0101ng"
                }, {
                  chinese: "\u53E4",
                  pinyin: "g\u01D4"
                }, {
                  chinese: "\u5434",
                  pinyin: "w\xFA"
                }, {
                  chinese: "\u8D75",
                  pinyin: "zh\xE0o"
                }, {
                  chinese: "\u94B1",
                  pinyin: "qi\xE1n"
                }, {
                  chinese: "\u5B59",
                  pinyin: "s\u016Bn"
                }, {
                  chinese: "\u5468",
                  pinyin: "zh\u014Du"
                }, {
                  chinese: "\u738B",
                  pinyin: "w\xE1ng"
                }, {
                  chinese: "\u5B98",
                  pinyin: "gu\u0101n"
                }, {
                  chinese: "\u6E05",
                  pinyin: "q\u012Bng"
                }, {
                  chinese: "\u6674",
                  pinyin: "q\xEDng"
                }, {
                  chinese: "\u773C\u775B",
                  pinyin: "y\u01CEn'j\u012Bng"
                }, {
                  chinese: "\u4FDD\u62A4",
                  pinyin: "b\u01CEo'h\xF9"
                }, {
                  chinese: "\u5BB3",
                  pinyin: "h\xE0i"
                }, {
                  chinese: "\u4E8B\u60C5",
                  pinyin: "sh\xEC'qing"
                }, {
                  chinese: "\u8BF7",
                  pinyin: "q\u01D0ng"
                }, {
                  chinese: "\u8BA9",
                  pinyin: "r\xE0ng"
                }, {
                  chinese: "\u75C5",
                  pinyin: "b\xECng"
                }, {
                  chinese: "\u76F8\u9047",
                  pinyin: "xi\u0101ng'y\xF9"
                }, {
                  chinese: "\u559C\u6B22",
                  pinyin: "x\u01D0'huan"
                }, {
                  chinese: "\u6015",
                  pinyin: "p\xE0"
                }, {
                  chinese: "\u8A00",
                  pinyin: "y\xE1n"
                }, {
                  chinese: "\u4E92",
                  pinyin: "h\xF9"
                }, {
                  chinese: "\u4EE4",
                  pinyin: "l\xECng"
                }, {
                  chinese: "\u52A8",
                  pinyin: "d\xF2ng"
                }, {
                  chinese: "\u4E07",
                  pinyin: "w\xE0n"
                }, {
                  chinese: "\u7EAF\u51C0",
                  pinyin: "ch\xFAn'j\xECng"
                }, {
                  chinese: "\u9634",
                  pinyin: "y\u012Bn"
                }, {
                  chinese: "\u96F7\u7535",
                  pinyin: "l\xE9i'di\xE0n"
                }, {
                  chinese: "\u9635",
                  pinyin: "zh\xE8n"
                }, {
                  chinese: "\u51B0\u51BB",
                  pinyin: "b\u012Bng'd\xF2ng"
                }, {
                  chinese: "\u5939",
                  pinyin: "ji\xE1"
                }]
              }, {
                names: {
                  en_us: "Literacy 2",
                  zh_cn: "\u8BC6\u5B57\u88682",
                  zh_tw: "\u8B58\u5B57\u93362"
                },
                words: [{
                  chinese: "\u5403",
                  pinyin: "ch\u012B"
                }, {
                  chinese: "\u5FD8",
                  pinyin: "w\xE0ng"
                }, {
                  chinese: "\u4E95",
                  pinyin: "j\u01D0ng"
                }, {
                  chinese: "\u6751",
                  pinyin: "c\u016Bn"
                }, {
                  chinese: "\u53EB",
                  pinyin: "ji\xE0o"
                }, {
                  chinese: "\u6BDB\u4E3B\u5E2D",
                  pinyin: "m\xE1o'zh\u01D4'x\xED"
                }, {
                  chinese: "\u4E61\u4EB2",
                  pinyin: "xi\u0101ng'q\u012Bn"
                }, {
                  chinese: "\u6218\u58EB",
                  pinyin: "zh\xE0n'sh\xEC"
                }, {
                  chinese: "\u9762",
                  pinyin: "mi\xE0n"
                }, {
                  chinese: "\u60F3",
                  pinyin: "xi\u01CEng"
                }, {
                  chinese: "\u544A\u8BC9",
                  pinyin: "g\xE0o's\xF9"
                }, {
                  chinese: "\u5C31",
                  pinyin: "ji\xF9"
                }, {
                  chinese: "\u4EAC",
                  pinyin: "j\u012Bng"
                }, {
                  chinese: "\u5B89",
                  pinyin: "\u0101n"
                }, {
                  chinese: "\u5E7F",
                  pinyin: "gu\u01CEng"
                }, {
                  chinese: "\u975E\u5E38",
                  pinyin: "f\u0113i'ch\xE1ng"
                }, {
                  chinese: "\u58EE\u89C2",
                  pinyin: "zhu\xE0ng'gu\u0101n"
                }, {
                  chinese: "\u63A5",
                  pinyin: "ji\u0113"
                }, {
                  chinese: "\u89C9",
                  pinyin: "ji\xE0o"
                }, {
                  chinese: "\u518D",
                  pinyin: "z\xE0i"
                }, {
                  chinese: "\u505A",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u5404\u79CD",
                  pinyin: "g\xE8'zh\u01D2ng"
                }, {
                  chinese: "\u6837",
                  pinyin: "y\xE0ng"
                }, {
                  chinese: "\u4F19\u4F34",
                  pinyin: "hu\u01D2'b\xE0n"
                }, {
                  chinese: "\u5374",
                  pinyin: "qu\xE8"
                }, {
                  chinese: "\u4E5F",
                  pinyin: "y\u011B"
                }, {
                  chinese: "\u8DA3",
                  pinyin: "q\xF9"
                }, {
                  chinese: "\u8FD9",
                  pinyin: "zh\xE8"
                }, {
                  chinese: "\u592A\u9633",
                  pinyin: "t\xE0i'y\xE1ng"
                }, {
                  chinese: "\u9053",
                  pinyin: "d\xE0o"
                }, {
                  chinese: "\u9001",
                  pinyin: "s\xF2ng"
                }, {
                  chinese: "\u5FD9",
                  pinyin: "m\xE1ng"
                }, {
                  chinese: "\u5C1D",
                  pinyin: "ch\xE1ng"
                }, {
                  chinese: "\u9999\u751C",
                  pinyin: "xi\u0101ng'ti\xE1n"
                }, {
                  chinese: "\u6E29\u6696",
                  pinyin: "w\u0113n'nu\u01CEn"
                }, {
                  chinese: "\u8BE5",
                  pinyin: "g\u0101i"
                }, {
                  chinese: "\u989C",
                  pinyin: "y\xE1n"
                }, {
                  chinese: "\u56E0",
                  pinyin: "y\u012Bn"
                }, {
                  chinese: "\u8F86",
                  pinyin: "li\xE0ng"
                }, {
                  chinese: "\u5339",
                  pinyin: "p\u01D0"
                }, {
                  chinese: "\u518C",
                  pinyin: "c\xE8"
                }, {
                  chinese: "\u652F",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u94C5",
                  pinyin: "qi\u0101n"
                }, {
                  chinese: "\u68F5",
                  pinyin: "k\u0113"
                }, {
                  chinese: "\u67B6",
                  pinyin: "ji\xE0"
                }]
              }, {
                names: {
                  en_us: "Literacy 3",
                  zh_cn: "\u8BC6\u5B57\u88683",
                  zh_tw: "\u8B58\u5B57\u93363"
                },
                words: [{
                  chinese: "\u5757",
                  pinyin: "ku\xE0i"
                }, {
                  chinese: "\u6349",
                  pinyin: "zhu\u014D"
                }, {
                  chinese: "\u6025",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u76F4",
                  pinyin: "zh\xED"
                }, {
                  chinese: "\u6CB3",
                  pinyin: "h\xE9"
                }, {
                  chinese: "\u884C",
                  pinyin: "h\xE1ng"
                }, {
                  chinese: "\u6B7B",
                  pinyin: "s\u01D0"
                }, {
                  chinese: "\u4FE1",
                  pinyin: "x\xECn"
                }, {
                  chinese: "\u8DDF",
                  pinyin: "g\u0113n"
                }, {
                  chinese: "\u5FFD",
                  pinyin: "h\u016B"
                }, {
                  chinese: "\u558A",
                  pinyin: "h\u01CEn"
                }, {
                  chinese: "\u8EAB",
                  pinyin: "sh\u0113n"
                }, {
                  chinese: "\u53EA",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u7A9D",
                  pinyin: "w\u014D"
                }, {
                  chinese: "\u5B64\u5355",
                  pinyin: "g\u016B'd\u0101n"
                }, {
                  chinese: "\u79CD",
                  pinyin: "zh\u01D2ng"
                }, {
                  chinese: "\u90FD",
                  pinyin: "d\u014Du"
                }, {
                  chinese: "\u90BB\u5C45",
                  pinyin: "l\xEDn'j\u016B"
                }, {
                  chinese: "\u62DB\u547C",
                  pinyin: "zh\u0101o'hu"
                }, {
                  chinese: "\u9759",
                  pinyin: "j\xECng"
                }, {
                  chinese: "\u4E50",
                  pinyin: "l\xE8"
                }, {
                  chinese: "\u600E",
                  pinyin: "z\u011Bn"
                }, {
                  chinese: "\u72EC",
                  pinyin: "d\xFA"
                }, {
                  chinese: "\u8DF3\u7EF3",
                  pinyin: "ti\xE0o'sh\xE9ng"
                }, {
                  chinese: "\u8BB2",
                  pinyin: "ji\u01CEng"
                }, {
                  chinese: "\u5F97",
                  pinyin: "d\xE9"
                }, {
                  chinese: "\u7FBD",
                  pinyin: "y\u01D4"
                }, {
                  chinese: "\u7403",
                  pinyin: "qi\xFA"
                }, {
                  chinese: "\u620F",
                  pinyin: "x\xEC"
                }, {
                  chinese: "\u6392",
                  pinyin: "p\xE1i"
                }, {
                  chinese: "\u7BEE",
                  pinyin: "l\xE1n"
                }, {
                  chinese: "\u8FDE",
                  pinyin: "li\xE1n"
                }, {
                  chinese: "\u8FD0",
                  pinyin: "y\xF9n"
                }]
              }, {
                names: {
                  en_us: "Literacy 4",
                  zh_cn: "\u8BC6\u5B57\u88684",
                  zh_tw: "\u8B58\u5B57\u93364"
                },
                words: [{
                  chinese: "\u591C",
                  pinyin: "y\xE8"
                }, {
                  chinese: "\u601D",
                  pinyin: "s\u012B"
                }, {
                  chinese: "\u5E8A",
                  pinyin: "chu\xE1ng"
                }, {
                  chinese: "\u5149",
                  pinyin: "gu\u0101ng"
                }, {
                  chinese: "\u7591",
                  pinyin: "y\xED"
                }, {
                  chinese: "\u4E3E",
                  pinyin: "j\u01D4"
                }, {
                  chinese: "\u671B",
                  pinyin: "w\xE0ng"
                }, {
                  chinese: "\u4F4E",
                  pinyin: "d\u012B"
                }, {
                  chinese: "\u6545",
                  pinyin: "g\xF9"
                }, {
                  chinese: "\u80C6\u6562",
                  pinyin: "d\u01CEn'g\u01CEn"
                }, {
                  chinese: "\u5F80",
                  pinyin: "w\u01CEng"
                }, {
                  chinese: "\u5916",
                  pinyin: "w\xE0i"
                }, {
                  chinese: "\u52C7",
                  pinyin: "y\u01D2ng"
                }, {
                  chinese: "\u7A97",
                  pinyin: "chu\u0101ng"
                }, {
                  chinese: "\u4E71",
                  pinyin: "lu\xE0n"
                }, {
                  chinese: "\u504F",
                  pinyin: "pi\u0101n"
                }, {
                  chinese: "\u6563",
                  pinyin: "s\xE0n"
                }, {
                  chinese: "\u539F",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u50CF",
                  pinyin: "xi\xE0ng"
                }, {
                  chinese: "\u5FAE",
                  pinyin: "w\u0113i"
                }, {
                  chinese: "\u7AEF",
                  pinyin: "du\u0101n"
                }, {
                  chinese: "\u7CBD",
                  pinyin: "z\xF2ng"
                }, {
                  chinese: "\u8282",
                  pinyin: "ji\xE9"
                }, {
                  chinese: "\u603B",
                  pinyin: "z\u01D2ng"
                }, {
                  chinese: "\u7C73",
                  pinyin: "m\u01D0"
                }, {
                  chinese: "\u95F4",
                  pinyin: "ji\u0101n"
                }, {
                  chinese: "\u5206",
                  pinyin: "f\u0113n"
                }, {
                  chinese: "\u8C46",
                  pinyin: "d\xF2u"
                }, {
                  chinese: "\u8089",
                  pinyin: "r\xF2u"
                }, {
                  chinese: "\u5E26",
                  pinyin: "d\xE0i"
                }, {
                  chinese: "\u77E5",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u636E",
                  pinyin: "j\xF9"
                }, {
                  chinese: "\u5FF5",
                  pinyin: "ni\xE0n"
                }, {
                  chinese: "\u8679",
                  pinyin: "h\xF3ng"
                }, {
                  chinese: "\u5EA7",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u6D47",
                  pinyin: "ji\u0101o"
                }, {
                  chinese: "\u63D0",
                  pinyin: "t\xED"
                }, {
                  chinese: "\u6D12",
                  pinyin: "s\u01CE"
                }, {
                  chinese: "\u6311",
                  pinyin: "ti\u0101o"
                }, {
                  chinese: "\u5174",
                  pinyin: "x\xECng"
                }, {
                  chinese: "\u955C",
                  pinyin: "j\xECng"
                }, {
                  chinese: "\u62FF",
                  pinyin: "n\xE1"
                }, {
                  chinese: "\u7167",
                  pinyin: "zh\xE0o"
                }, {
                  chinese: "\u5343",
                  pinyin: "qi\u0101n"
                }, {
                  chinese: "\u88D9",
                  pinyin: "q\xFAn"
                }, {
                  chinese: "\u7709",
                  pinyin: "m\xE9i"
                }, {
                  chinese: "\u9F3B",
                  pinyin: "b\xED"
                }, {
                  chinese: "\u5634",
                  pinyin: "zu\u01D0"
                }, {
                  chinese: "\u8116",
                  pinyin: "b\xF3"
                }, {
                  chinese: "\u81C2",
                  pinyin: "b\xEC"
                }, {
                  chinese: "\u809A",
                  pinyin: "d\xF9"
                }, {
                  chinese: "\u817F\u811A",
                  pinyin: "tu\u01D0'ji\u01CEo"
                }]
              }, {
                names: {
                  en_us: "Literacy 5",
                  zh_cn: "\u8BC6\u5B57\u88685",
                  zh_tw: "\u8B58\u5B57\u93365"
                },
                words: [{
                  chinese: "\u873B\u8713",
                  pinyin: "q\u012Bng't\xEDng"
                }, {
                  chinese: "\u8FF7",
                  pinyin: "m\xED"
                }, {
                  chinese: "\u85CF",
                  pinyin: "c\xE1ng"
                }, {
                  chinese: "\u9020",
                  pinyin: "z\xE0o"
                }, {
                  chinese: "\u8682\u8681",
                  pinyin: "m\u01CE'y\u01D0"
                }, {
                  chinese: "\u98DF",
                  pinyin: "sh\xED"
                }, {
                  chinese: "\u7CAE",
                  pinyin: "li\xE1ng"
                }, {
                  chinese: "\u8718\u86DB\u7F51",
                  pinyin: "zh\u012B'zh\u016B'w\u01CEng"
                }, {
                  chinese: "\u5706",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u4E25\u5BD2",
                  pinyin: "y\xE1n'h\xE1n"
                }, {
                  chinese: "\u9177\u6691",
                  pinyin: "k\xF9'sh\u01D4"
                }, {
                  chinese: "\u51C9",
                  pinyin: "li\xE1ng"
                }, {
                  chinese: "\u6668",
                  pinyin: "ch\xE9n"
                }, {
                  chinese: "\u7EC6",
                  pinyin: "x\xEC"
                }, {
                  chinese: "\u671D\u971E",
                  pinyin: "zh\u0101o'xi\xE1"
                }, {
                  chinese: "\u5915",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u6768",
                  pinyin: "y\xE1ng"
                }, {
                  chinese: "\u64CD\u573A",
                  pinyin: "c\u0101o'ch\u01CEng"
                }, {
                  chinese: "\u62D4",
                  pinyin: "b\xE1"
                }, {
                  chinese: "\u62CD",
                  pinyin: "p\u0101i"
                }, {
                  chinese: "\u8DD1",
                  pinyin: "p\u01CEo"
                }, {
                  chinese: "\u8E22",
                  pinyin: "t\u012B"
                }, {
                  chinese: "\u94C3",
                  pinyin: "l\xEDng"
                }, {
                  chinese: "\u70ED\u95F9",
                  pinyin: "r\xE8'nao"
                }, {
                  chinese: "\u953B\u70BC",
                  pinyin: "du\xE0n'li\xE0n"
                }, {
                  chinese: "\u4F53",
                  pinyin: "t\u01D0"
                }, {
                  chinese: "\u4E4B",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u521D",
                  pinyin: "ch\u016B"
                }, {
                  chinese: "\u6027",
                  pinyin: "x\xECng"
                }, {
                  chinese: "\u5584",
                  pinyin: "sh\xE0n"
                }, {
                  chinese: "\u4E60",
                  pinyin: "x\xED"
                }, {
                  chinese: "\u6559",
                  pinyin: "ji\xE0o"
                }, {
                  chinese: "\u8FC1",
                  pinyin: "qi\u0101n"
                }, {
                  chinese: "\u8D35",
                  pinyin: "gu\xEC"
                }, {
                  chinese: "\u4E13",
                  pinyin: "zhu\u0101n"
                }, {
                  chinese: "\u5E7C",
                  pinyin: "y\xF2u"
                }, {
                  chinese: "\u7389\u5668",
                  pinyin: "y\xF9'q\xEC"
                }, {
                  chinese: "\u4E49",
                  pinyin: "y\xEC"
                }, {
                  chinese: "\u996D",
                  pinyin: "f\xE0n"
                }, {
                  chinese: "\u80FD",
                  pinyin: "n\xE9ng"
                }, {
                  chinese: "\u9971",
                  pinyin: "b\u01CEo"
                }, {
                  chinese: "\u8336",
                  pinyin: "ch\xE1"
                }, {
                  chinese: "\u6CE1",
                  pinyin: "p\xE0o"
                }, {
                  chinese: "\u8F7B",
                  pinyin: "q\u012Bng"
                }, {
                  chinese: "\u97AD\u70AE",
                  pinyin: "bi\u0101n'p\xE0o"
                }]
              }, {
                names: {
                  en_us: "Literacy 6",
                  zh_cn: "\u8BC6\u5B57\u88686",
                  zh_tw: "\u8B58\u5B57\u93366"
                },
                words: [{
                  chinese: "\u9996",
                  pinyin: "sh\u01D2u"
                }, {
                  chinese: "\u8E2A\u8FF9",
                  pinyin: "z\u014Dng'j\xEC"
                }, {
                  chinese: "\u6D6E\u840D",
                  pinyin: "f\xFA'p\xEDng"
                }, {
                  chinese: "\u6CC9\u6D41",
                  pinyin: "qu\xE1n'li\xFA"
                }, {
                  chinese: "\u7231",
                  pinyin: "\xE0i"
                }, {
                  chinese: "\u67D4",
                  pinyin: "r\xF3u"
                }, {
                  chinese: "\u8377",
                  pinyin: "h\xE9"
                }, {
                  chinese: "\u9732",
                  pinyin: "l\xF9"
                }, {
                  chinese: "\u89D2",
                  pinyin: "ji\u01CEo"
                }, {
                  chinese: "\u73E0",
                  pinyin: "zh\u016B"
                }, {
                  chinese: "\u6447",
                  pinyin: "y\xE1o"
                }, {
                  chinese: "\u8EBA",
                  pinyin: "t\u01CEng"
                }, {
                  chinese: "\u6676",
                  pinyin: "j\u012Bng"
                }, {
                  chinese: "\u505C\u673A",
                  pinyin: "t\xEDng'j\u012B"
                }, {
                  chinese: "\u5C55",
                  pinyin: "zh\u01CEn"
                }, {
                  chinese: "\u900F",
                  pinyin: "t\xF2u"
                }, {
                  chinese: "\u7FC5\u8180",
                  pinyin: "ch\xEC'b\u01CEng"
                }, {
                  chinese: "\u5531",
                  pinyin: "ch\xE0ng"
                }, {
                  chinese: "\u6735",
                  pinyin: "du\u01D2"
                }, {
                  chinese: "\u8170",
                  pinyin: "y\u0101o"
                }, {
                  chinese: "\u5761",
                  pinyin: "p\u014D"
                }, {
                  chinese: "\u6C89",
                  pinyin: "ch\xE9n"
                }, {
                  chinese: "\u4F38",
                  pinyin: "sh\u0113n"
                }, {
                  chinese: "\u6F6E\u6E7F",
                  pinyin: "ch\xE1o'sh\u012B"
                }, {
                  chinese: "\u5462",
                  pinyin: "ne"
                }, {
                  chinese: "\u7A7A",
                  pinyin: "k\u014Dng"
                }, {
                  chinese: "\u95F7",
                  pinyin: "m\xE8n"
                }, {
                  chinese: "\u6D88\u606F",
                  pinyin: "xi\u0101o'xi"
                }, {
                  chinese: "\u642C",
                  pinyin: "b\u0101n"
                }, {
                  chinese: "\u54CD",
                  pinyin: "xi\u01CEng"
                }, {
                  chinese: "\u68CD",
                  pinyin: "g\xF9n"
                }, {
                  chinese: "\u6C64",
                  pinyin: "t\u0101ng"
                }, {
                  chinese: "\u6247",
                  pinyin: "sh\xE0n"
                }, {
                  chinese: "\u6905",
                  pinyin: "y\u01D0"
                }, {
                  chinese: "\u8424",
                  pinyin: "y\xEDng"
                }, {
                  chinese: "\u7275",
                  pinyin: "qi\u0101n"
                }, {
                  chinese: "\u7EC7",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u6597",
                  pinyin: "d\xF2u"
                }]
              }, {
                names: {
                  en_us: "Literacy 7",
                  zh_cn: "\u8BC6\u5B57\u88687",
                  zh_tw: "\u8B58\u5B57\u93367"
                },
                words: [{
                  chinese: "\u5177",
                  pinyin: "j\xF9"
                }, {
                  chinese: "\u6B21",
                  pinyin: "c\xEC"
                }, {
                  chinese: "\u4E22",
                  pinyin: "di\u016B"
                }, {
                  chinese: "\u54EA",
                  pinyin: "n\u01CE"
                }, {
                  chinese: "\u65B0",
                  pinyin: "x\u012Bn"
                }, {
                  chinese: "\u6BCF",
                  pinyin: "m\u011Bi"
                }, {
                  chinese: "\u5E73",
                  pinyin: "p\xEDng"
                }, {
                  chinese: "\u5979",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u4E9B",
                  pinyin: "xi\u0113"
                }, {
                  chinese: "\u4ED4",
                  pinyin: "z\u01CEi"
                }, {
                  chinese: "\u68C0\u67E5\u6240",
                  pinyin: "ji\u01CEn'ch\xE1'su\u01D2"
                }, {
                  chinese: "\u949F",
                  pinyin: "zh\u014Dng"
                }, {
                  chinese: "\u4E01",
                  pinyin: "d\u012Bng"
                }, {
                  chinese: "\u5143",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u8FDF",
                  pinyin: "ch\xED"
                }, {
                  chinese: "\u6D17",
                  pinyin: "x\u01D0"
                }, {
                  chinese: "\u80CC",
                  pinyin: "b\xE8i"
                }, {
                  chinese: "\u521A",
                  pinyin: "g\u0101ng"
                }, {
                  chinese: "\u5171",
                  pinyin: "g\xF2ng"
                }, {
                  chinese: "\u6C7D",
                  pinyin: "q\xEC"
                }, {
                  chinese: "\u51B3\u5B9A",
                  pinyin: "ju\xE9'd\xECng"
                }, {
                  chinese: "\u5DF2\u7ECF",
                  pinyin: "y\u01D0'j\u012Bng"
                }, {
                  chinese: "\u7269",
                  pinyin: "w\xF9"
                }, {
                  chinese: "\u864E",
                  pinyin: "h\u01D4"
                }, {
                  chinese: "\u718A",
                  pinyin: "xi\xF3ng"
                }, {
                  chinese: "\u901A",
                  pinyin: "t\u014Dng"
                }, {
                  chinese: "\u6CE8\u610F",
                  pinyin: "zh\xF9'y\xEC"
                }, {
                  chinese: "\u904D",
                  pinyin: "bi\xE0n"
                }, {
                  chinese: "\u767E",
                  pinyin: "b\u01CEi"
                }, {
                  chinese: "\u820C",
                  pinyin: "sh\xE9"
                }, {
                  chinese: "\u9B3C\u8138",
                  pinyin: "gu\u01D0'li\u01CEn"
                }, {
                  chinese: "\u51C6",
                  pinyin: "zh\u01D4n"
                }, {
                  chinese: "\u7B2C",
                  pinyin: "d\xEC"
                }, {
                  chinese: "\u7334",
                  pinyin: "h\xF3u"
                }, {
                  chinese: "\u7ED3",
                  pinyin: "ji\xE9"
                }, {
                  chinese: "\u63B0",
                  pinyin: "b\u0101i"
                }, {
                  chinese: "\u625B",
                  pinyin: "k\xE1ng"
                }, {
                  chinese: "\u6EE1",
                  pinyin: "m\u01CEn"
                }, {
                  chinese: "\u6254",
                  pinyin: "r\u0113ng"
                }, {
                  chinese: "\u6458",
                  pinyin: "zh\u0101i"
                }, {
                  chinese: "\u6367",
                  pinyin: "p\u011Bng"
                }, {
                  chinese: "\u74DC",
                  pinyin: "gu\u0101"
                }, {
                  chinese: "\u62B1",
                  pinyin: "b\xE0o"
                }, {
                  chinese: "\u8E66",
                  pinyin: "b\xE8ng"
                }, {
                  chinese: "\u8FFD",
                  pinyin: "zhu\u012B"
                }, {
                  chinese: "\u5435",
                  pinyin: "ch\u01CEo"
                }, {
                  chinese: "\u80D6",
                  pinyin: "p\xE0ng"
                }, {
                  chinese: "\u5C81",
                  pinyin: "su\xEC"
                }, {
                  chinese: "\u73B0",
                  pinyin: "xi\xE0n"
                }, {
                  chinese: "\u7968",
                  pinyin: "pi\xE0o"
                }, {
                  chinese: "\u4EA4",
                  pinyin: "ji\u0101o"
                }, {
                  chinese: "\u5F13",
                  pinyin: "g\u014Dng"
                }, {
                  chinese: "\u7518",
                  pinyin: "g\u0101n"
                }]
              }, {
                names: {
                  en_us: "Literacy 8",
                  zh_cn: "\u8BC6\u5B57\u88688",
                  zh_tw: "\u8B58\u5B57\u93368"
                },
                words: [{
                  chinese: "\u68C9",
                  pinyin: "mi\xE1n"
                }, {
                  chinese: "\u5A18",
                  pinyin: "ni\xE1ng"
                }, {
                  chinese: "\u6CBB",
                  pinyin: "zh\xEC"
                }, {
                  chinese: "\u71D5",
                  pinyin: "y\xE0n"
                }, {
                  chinese: "\u522B",
                  pinyin: "bi\xE9"
                }, {
                  chinese: "\u5E72",
                  pinyin: "g\xE0n"
                }, {
                  chinese: "\u7136",
                  pinyin: "r\xE1n"
                }, {
                  chinese: "\u5947",
                  pinyin: "q\xED"
                }, {
                  chinese: "\u9897",
                  pinyin: "k\u0113"
                }, {
                  chinese: "\u74E2",
                  pinyin: "pi\xE1o"
                }, {
                  chinese: "\u78A7",
                  pinyin: "b\xEC"
                }, {
                  chinese: "\u5410",
                  pinyin: "t\u01D4"
                }, {
                  chinese: "\u5566",
                  pinyin: "l\u0101"
                }, {
                  chinese: "\u5495\u549A",
                  pinyin: "g\u016B'd\u014Dng"
                }, {
                  chinese: "\u719F",
                  pinyin: "sh\xFA"
                }, {
                  chinese: "\u6389",
                  pinyin: "di\xE0o"
                }, {
                  chinese: "\u5413",
                  pinyin: "xi\xE0"
                }, {
                  chinese: "\u7F8A",
                  pinyin: "y\xE1ng"
                }, {
                  chinese: "\u9E7F",
                  pinyin: "l\xF9"
                }, {
                  chinese: "\u9003\u547D",
                  pinyin: "t\xE1o'm\xECng"
                }, {
                  chinese: "\u8C61",
                  pinyin: "xi\xE0ng"
                }, {
                  chinese: "\u91CE",
                  pinyin: "y\u011B"
                }, {
                  chinese: "\u62E6",
                  pinyin: "l\xE1n"
                }, {
                  chinese: "\u9886",
                  pinyin: "l\u01D0ng"
                }, {
                  chinese: "\u58C1",
                  pinyin: "b\xEC"
                }, {
                  chinese: "\u5899",
                  pinyin: "qi\xE1ng"
                }, {
                  chinese: "\u868A",
                  pinyin: "w\xE9n"
                }, {
                  chinese: "\u54AC",
                  pinyin: "y\u01CEo"
                }, {
                  chinese: "\u65AD",
                  pinyin: "du\xE0n"
                }, {
                  chinese: "\u60A8",
                  pinyin: "n\xEDn"
                }, {
                  chinese: "\u62E8",
                  pinyin: "b\u014D"
                }, {
                  chinese: "\u7529",
                  pinyin: "shu\u01CEi"
                }, {
                  chinese: "\u8D76",
                  pinyin: "g\u01CEn"
                }, {
                  chinese: "\u623F",
                  pinyin: "f\xE1ng"
                }, {
                  chinese: "\u50BB",
                  pinyin: "sh\u01CE"
                }, {
                  chinese: "\u8F6C",
                  pinyin: "zhu\u01CEn"
                }, {
                  chinese: "\u536B",
                  pinyin: "w\xE8i"
                }, {
                  chinese: "\u5237",
                  pinyin: "shu\u0101"
                }, {
                  chinese: "\u68B3",
                  pinyin: "sh\u016B"
                }, {
                  chinese: "\u5DFE",
                  pinyin: "j\u012Bn"
                }, {
                  chinese: "\u64E6",
                  pinyin: "c\u0101"
                }, {
                  chinese: "\u7682",
                  pinyin: "z\xE0o"
                }, {
                  chinese: "\u6FA1",
                  pinyin: "z\u01CEo"
                }, {
                  chinese: "\u76C6",
                  pinyin: "p\xE9n"
                }]
              }, {
                names: {
                  en_us: "Writing 1",
                  zh_cn: "\u5199\u5B57\u88681",
                  zh_tw: "\u5BEB\u5B57\u93361"
                },
                words: [{
                  chinese: "\u6625",
                  pinyin: "ch\u016Bn"
                }, {
                  chinese: "\u51AC",
                  pinyin: "d\u014Dng"
                }, {
                  chinese: "\u98CE\u96EA",
                  pinyin: "f\u0113ng'xu\u011B"
                }, {
                  chinese: "\u82B1",
                  pinyin: "hu\u0101"
                }, {
                  chinese: "\u98DE",
                  pinyin: "f\u0113i"
                }, {
                  chinese: "\u5165",
                  pinyin: "r\xF9"
                }, {
                  chinese: "\u59D3",
                  pinyin: "x\xECng"
                }, {
                  chinese: "\u4EC0\u4E48",
                  pinyin: "sh\xE9n'me"
                }, {
                  chinese: "\u53CC",
                  pinyin: "shu\u0101ng"
                }, {
                  chinese: "\u56FD\u738B",
                  pinyin: "gu\xF3'w\xE1ng"
                }, {
                  chinese: "\u65B9",
                  pinyin: "f\u0101ng"
                }, {
                  chinese: "\u9752",
                  pinyin: "q\u012Bng"
                }, {
                  chinese: "\u6E05\u6C14",
                  pinyin: "q\u012Bng'q\xEC"
                }, {
                  chinese: "\u6674",
                  pinyin: "q\xEDng"
                }, {
                  chinese: "\u60C5",
                  pinyin: "q\xEDng"
                }, {
                  chinese: "\u8BF7",
                  pinyin: "q\u01D0ng"
                }, {
                  chinese: "\u751F",
                  pinyin: "sh\u0113ng"
                }, {
                  chinese: "\u5B57",
                  pinyin: "z\xEC"
                }, {
                  chinese: "\u5DE6\u53F3",
                  pinyin: "zu\u01D2'y\xF2u"
                }, {
                  chinese: "\u7EA2",
                  pinyin: "h\xF3ng"
                }, {
                  chinese: "\u65F6",
                  pinyin: "sh\xED"
                }, {
                  chinese: "\u52A8",
                  pinyin: "d\xF2ng"
                }, {
                  chinese: "\u4E07",
                  pinyin: "w\xE0n"
                }]
              }, {
                names: {
                  en_us: "Writing 2",
                  zh_cn: "\u5199\u5B57\u88682",
                  zh_tw: "\u5BEB\u5B57\u93362"
                },
                words: [{
                  chinese: "\u5403",
                  pinyin: "ch\u012B"
                }, {
                  chinese: "\u53EB",
                  pinyin: "ji\xE0o"
                }, {
                  chinese: "\u4E3B",
                  pinyin: "zh\u01D4"
                }, {
                  chinese: "\u6C5F",
                  pinyin: "ji\u0101ng"
                }, {
                  chinese: "\u4F4F",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u6CA1",
                  pinyin: "m\xE9i"
                }, {
                  chinese: "\u4EE5",
                  pinyin: "y\u01D0"
                }, {
                  chinese: "\u591A",
                  pinyin: "du\u014D"
                }, {
                  chinese: "\u4F1A",
                  pinyin: "hu\xEC"
                }, {
                  chinese: "\u8D70",
                  pinyin: "z\u01D2u"
                }, {
                  chinese: "\u5317\u4EAC",
                  pinyin: "b\u011Bi'j\u012Bng"
                }, {
                  chinese: "\u5E7F",
                  pinyin: "gu\u01CEng"
                }, {
                  chinese: "\u8FC7",
                  pinyin: "gu\xF2"
                }, {
                  chinese: "\u5404\u79CD",
                  pinyin: "g\xE8'zh\u01D2ng"
                }, {
                  chinese: "\u6837",
                  pinyin: "y\xE0ng"
                }, {
                  chinese: "\u4F19\u4F34",
                  pinyin: "hu\u01D2'b\xE0n"
                }, {
                  chinese: "\u8FD9",
                  pinyin: "zh\xE8"
                }, {
                  chinese: "\u592A\u9633",
                  pinyin: "t\xE0i'y\xE1ng"
                }, {
                  chinese: "\u6821",
                  pinyin: "xi\xE0o"
                }, {
                  chinese: "\u91D1\u79CB",
                  pinyin: "j\u012Bn'qi\u016B"
                }, {
                  chinese: "\u56E0\u4E3A",
                  pinyin: "y\u012Bn'w\xE9i"
                }]
              }, {
                names: {
                  en_us: "Writing 3",
                  zh_cn: "\u5199\u5B57\u88683",
                  zh_tw: "\u5BEB\u5B57\u93363"
                },
                words: [{
                  chinese: "\u4ED6",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u5730",
                  pinyin: "d\xEC"
                }, {
                  chinese: "\u6CB3",
                  pinyin: "h\xE9"
                }, {
                  chinese: "\u8BF4",
                  pinyin: "shu\u014D"
                }, {
                  chinese: "\u4E5F",
                  pinyin: "y\u011B"
                }, {
                  chinese: "\u542C",
                  pinyin: "t\u012Bng"
                }, {
                  chinese: "\u54E5",
                  pinyin: "g\u0113"
                }, {
                  chinese: "\u5355",
                  pinyin: "d\u0101n"
                }, {
                  chinese: "\u5C45",
                  pinyin: "j\u016B"
                }, {
                  chinese: "\u62DB\u547C",
                  pinyin: "zh\u0101o'hu"
                }, {
                  chinese: "\u5FEB\u4E50",
                  pinyin: "ku\xE0i'l\xE8"
                }, {
                  chinese: "\u73A9",
                  pinyin: "w\xE1n"
                }, {
                  chinese: "\u5F88",
                  pinyin: "h\u011Bn"
                }, {
                  chinese: "\u5F53",
                  pinyin: "d\u0101ng"
                }, {
                  chinese: "\u97F3",
                  pinyin: "y\u012Bn"
                }, {
                  chinese: "\u8BB2",
                  pinyin: "ji\u01CEng"
                }, {
                  chinese: "\u884C",
                  pinyin: "h\xE1ng"
                }, {
                  chinese: "\u8BB8",
                  pinyin: "x\u01D4"
                }]
              }, {
                names: {
                  en_us: "Writing 4",
                  zh_cn: "\u5199\u5B57\u88684",
                  zh_tw: "\u5BEB\u5B57\u93364"
                },
                words: [{
                  chinese: "\u601D",
                  pinyin: "s\u012B"
                }, {
                  chinese: "\u5E8A",
                  pinyin: "chu\xE1ng"
                }, {
                  chinese: "\u524D",
                  pinyin: "qi\xE1n"
                }, {
                  chinese: "\u5149",
                  pinyin: "gu\u0101ng"
                }, {
                  chinese: "\u4F4E",
                  pinyin: "d\u012B"
                }, {
                  chinese: "\u6545\u4E61",
                  pinyin: "g\xF9'xi\u0101ng"
                }, {
                  chinese: "\u8272",
                  pinyin: "s\xE8"
                }, {
                  chinese: "\u5916",
                  pinyin: "w\xE0i"
                }, {
                  chinese: "\u770B",
                  pinyin: "k\xE0n"
                }, {
                  chinese: "\u7238",
                  pinyin: "b\xE0"
                }, {
                  chinese: "\u665A",
                  pinyin: "w\u01CEn"
                }, {
                  chinese: "\u7B11",
                  pinyin: "xi\xE0o"
                }, {
                  chinese: "\u518D",
                  pinyin: "z\xE0i"
                }, {
                  chinese: "\u5348",
                  pinyin: "w\u01D4"
                }, {
                  chinese: "\u8282",
                  pinyin: "ji\xE9"
                }, {
                  chinese: "\u53F6",
                  pinyin: "y\xE8"
                }, {
                  chinese: "\u7C73",
                  pinyin: "m\u01D0"
                }, {
                  chinese: "\u771F",
                  pinyin: "zh\u0113n"
                }, {
                  chinese: "\u5206",
                  pinyin: "f\u0113n"
                }, {
                  chinese: "\u8C46",
                  pinyin: "d\xF2u"
                }, {
                  chinese: "\u90A3",
                  pinyin: "n\xE0"
                }, {
                  chinese: "\u770B\u5230",
                  pinyin: "k\xE0n'd\xE0o"
                }, {
                  chinese: "\u9AD8\u5174",
                  pinyin: "g\u0101o'x\xECng"
                }, {
                  chinese: "\u5343",
                  pinyin: "qi\u0101n"
                }, {
                  chinese: "\u6210",
                  pinyin: "ch\xE9ng"
                }]
              }, {
                names: {
                  en_us: "Writing 5",
                  zh_cn: "\u5199\u5B57\u88685",
                  zh_tw: "\u5BEB\u5B57\u93365"
                },
                words: [{
                  chinese: "\u95F4",
                  pinyin: "ji\u0101n"
                }, {
                  chinese: "\u8FF7",
                  pinyin: "m\xED"
                }, {
                  chinese: "\u9020",
                  pinyin: "z\xE0o"
                }, {
                  chinese: "\u8FD0",
                  pinyin: "y\xF9n"
                }, {
                  chinese: "\u6C60",
                  pinyin: "ch\xED"
                }, {
                  chinese: "\u6B22",
                  pinyin: "hu\u0101n"
                }, {
                  chinese: "\u7F51",
                  pinyin: "w\u01CEng"
                }, {
                  chinese: "\u53E4",
                  pinyin: "g\u01D4"
                }, {
                  chinese: "\u51C9",
                  pinyin: "li\xE1ng"
                }, {
                  chinese: "\u7EC6",
                  pinyin: "x\xEC"
                }, {
                  chinese: "\u5915",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u674E",
                  pinyin: "l\u01D0"
                }, {
                  chinese: "\u8BED",
                  pinyin: "y\u01D4"
                }, {
                  chinese: "\u9999",
                  pinyin: "xi\u0101ng"
                }, {
                  chinese: "\u6253",
                  pinyin: "d\u01CE"
                }, {
                  chinese: "\u62CD",
                  pinyin: "p\u0101i"
                }, {
                  chinese: "\u8DD1",
                  pinyin: "p\u01CEo"
                }, {
                  chinese: "\u8DB3",
                  pinyin: "z\xFA"
                }, {
                  chinese: "\u58F0",
                  pinyin: "sh\u0113ng"
                }, {
                  chinese: "\u8EAB\u4F53",
                  pinyin: "sh\u0113n't\u01D0"
                }, {
                  chinese: "\u4E4B",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u76F8\u8FD1",
                  pinyin: "xi\u0101ng'j\xECn"
                }, {
                  chinese: "\u4E60",
                  pinyin: "x\xED"
                }, {
                  chinese: "\u8FDC",
                  pinyin: "yu\u01CEn"
                }, {
                  chinese: "\u7389",
                  pinyin: "y\xF9"
                }, {
                  chinese: "\u4E49",
                  pinyin: "y\xEC"
                }]
              }, {
                names: {
                  en_us: "Writing 6",
                  zh_cn: "\u5199\u5B57\u88686",
                  zh_tw: "\u5BEB\u5B57\u93366"
                },
                words: [{
                  chinese: "\u9996",
                  pinyin: "sh\u01D2u"
                }, {
                  chinese: "\u91C7",
                  pinyin: "c\u01CEi"
                }, {
                  chinese: "\u65E0",
                  pinyin: "w\xFA"
                }, {
                  chinese: "\u6811",
                  pinyin: "sh\xF9"
                }, {
                  chinese: "\u7231",
                  pinyin: "\xE0i"
                }, {
                  chinese: "\u5C16",
                  pinyin: "ji\u0101n"
                }, {
                  chinese: "\u89D2",
                  pinyin: "ji\u01CEo"
                }, {
                  chinese: "\u4EAE",
                  pinyin: "li\xE0ng"
                }, {
                  chinese: "\u673A\u53F0",
                  pinyin: "j\u012B't\xE1i"
                }, {
                  chinese: "\u653E",
                  pinyin: "f\xE0ng"
                }, {
                  chinese: "\u9C7C",
                  pinyin: "y\xFA"
                }, {
                  chinese: "\u6735",
                  pinyin: "du\u01D2"
                }, {
                  chinese: "\u7F8E",
                  pinyin: "m\u011Bi"
                }, {
                  chinese: "\u76F4",
                  pinyin: "zh\xED"
                }, {
                  chinese: "\u5440",
                  pinyin: "ya"
                }, {
                  chinese: "\u8FB9",
                  pinyin: "bi\u0101n"
                }, {
                  chinese: "\u5462",
                  pinyin: "ne"
                }, {
                  chinese: "\u5417",
                  pinyin: "ma"
                }, {
                  chinese: "\u5427",
                  pinyin: "ba"
                }, {
                  chinese: "\u52A0",
                  pinyin: "ji\u0101"
                }]
              }, {
                names: {
                  en_us: "Writing 7",
                  zh_cn: "\u5199\u5B57\u88687",
                  zh_tw: "\u5BEB\u5B57\u93367"
                },
                words: [{
                  chinese: "\u6587",
                  pinyin: "w\xE9n"
                }, {
                  chinese: "\u6B21",
                  pinyin: "c\xEC"
                }, {
                  chinese: "\u627E",
                  pinyin: "zh\u01CEo"
                }, {
                  chinese: "\u5E73",
                  pinyin: "p\xEDng"
                }, {
                  chinese: "\u529E",
                  pinyin: "b\xE0n"
                }, {
                  chinese: "\u8BA9",
                  pinyin: "r\xE0ng"
                }, {
                  chinese: "\u5305",
                  pinyin: "b\u0101o"
                }, {
                  chinese: "\u949F",
                  pinyin: "zh\u014Dng"
                }, {
                  chinese: "\u4E01",
                  pinyin: "d\u012Bng"
                }, {
                  chinese: "\u5143",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u5171",
                  pinyin: "g\xF2ng"
                }, {
                  chinese: "\u5DF2\u7ECF",
                  pinyin: "y\u01D0'j\u012Bng"
                }, {
                  chinese: "\u5750",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u8981",
                  pinyin: "y\xE0o"
                }, {
                  chinese: "\u8FDE",
                  pinyin: "li\xE1n"
                }, {
                  chinese: "\u767E",
                  pinyin: "b\u01CEi"
                }, {
                  chinese: "\u8FD8",
                  pinyin: "h\xE1i"
                }, {
                  chinese: "\u820C",
                  pinyin: "sh\xE9"
                }, {
                  chinese: "\u70B9",
                  pinyin: "di\u01CEn"
                }, {
                  chinese: "\u5757",
                  pinyin: "ku\xE0i"
                }, {
                  chinese: "\u975E",
                  pinyin: "f\u0113i"
                }, {
                  chinese: "\u5E38",
                  pinyin: "ch\xE1ng"
                }, {
                  chinese: "\u5F80",
                  pinyin: "w\u01CEng"
                }, {
                  chinese: "\u74DC",
                  pinyin: "gu\u0101"
                }, {
                  chinese: "\u8FDB",
                  pinyin: "j\xECn"
                }, {
                  chinese: "\u7A7A",
                  pinyin: "k\u014Dng"
                }]
              }, {
                names: {
                  en_us: "Writing 8",
                  zh_cn: "\u5199\u5B57\u88688",
                  zh_tw: "\u5BEB\u5B57\u93368"
                },
                words: [{
                  chinese: "\u75C5",
                  pinyin: "b\xECng"
                }, {
                  chinese: "\u533B",
                  pinyin: "y\u012B"
                }, {
                  chinese: "\u522B",
                  pinyin: "bi\xE9"
                }, {
                  chinese: "\u5E72",
                  pinyin: "g\xE0n"
                }, {
                  chinese: "\u5947",
                  pinyin: "q\xED"
                }, {
                  chinese: "\u4E03",
                  pinyin: "q\u012B"
                }, {
                  chinese: "\u661F",
                  pinyin: "x\u012Bng"
                }, {
                  chinese: "\u5413",
                  pinyin: "xi\xE0"
                }, {
                  chinese: "\u6015",
                  pinyin: "p\xE0"
                }, {
                  chinese: "\u8DDF",
                  pinyin: "g\u0113n"
                }, {
                  chinese: "\u5BB6",
                  pinyin: "ji\u0101"
                }, {
                  chinese: "\u7F8A",
                  pinyin: "y\xE1ng"
                }, {
                  chinese: "\u8C61",
                  pinyin: "xi\xE0ng"
                }, {
                  chinese: "\u90FD",
                  pinyin: "d\u014Du"
                }, {
                  chinese: "\u6349",
                  pinyin: "zhu\u014D"
                }, {
                  chinese: "\u6761",
                  pinyin: "ti\xE1o"
                }, {
                  chinese: "\u722C",
                  pinyin: "p\xE1"
                }, {
                  chinese: "\u59D0",
                  pinyin: "ji\u011B"
                }, {
                  chinese: "\u60A8",
                  pinyin: "n\xEDn"
                }, {
                  chinese: "\u8349",
                  pinyin: "c\u01CEo"
                }, {
                  chinese: "\u623F",
                  pinyin: "f\xE1ng"
                }]
              }]
            });
          };

          _this.appendCopybookOfGrade2Term1 = function () {
            var usableCopybooksPeopleEducationEdition = _this.usableCopybooksPeopleEducationEdition;
            usableCopybooksPeopleEducationEdition.push({
              termI18n: {
                en_us: "K2T1",
                zh_cn: "\u4E8C\u5E74\u7EA7\u4E0A",
                zh_tw: "\u4E8C\u5E74\u7D1A\u4E0A"
              },
              units: [{
                names: {
                  en_us: "Literacy 1",
                  zh_cn: "\u8BC6\u5B57\u88681",
                  zh_tw: "\u8B58\u5B57\u93361"
                },
                words: [{
                  chinese: "\u5858",
                  pinyin: "t\xE1ng"
                }, {
                  chinese: "\u8111\u888B",
                  pinyin: "n\u01CEo'd\xE0i"
                }, {
                  chinese: "\u7070",
                  pinyin: "hu\u012B"
                }, {
                  chinese: "\u54C7",
                  pinyin: "wa"
                }, {
                  chinese: "\u6559",
                  pinyin: "ji\u0101o"
                }, {
                  chinese: "\u6355",
                  pinyin: "b\u01D4"
                }, {
                  chinese: "\u8FCE",
                  pinyin: "y\xEDng"
                }, {
                  chinese: "\u963F\u59E8",
                  pinyin: "\u0101'y\xED"
                }, {
                  chinese: "\u5BBD",
                  pinyin: "ku\u0101n"
                }, {
                  chinese: "\u9F9F",
                  pinyin: "gu\u012B"
                }, {
                  chinese: "\u9876",
                  pinyin: "d\u01D0ng"
                }, {
                  chinese: "\u62AB",
                  pinyin: "p\u012B"
                }, {
                  chinese: "\u9F13",
                  pinyin: "g\u01D4"
                }, {
                  chinese: "\u6652",
                  pinyin: "sh\xE0i"
                }, {
                  chinese: "\u6781",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u508D",
                  pinyin: "b\xE0ng"
                }, {
                  chinese: "\u8D8A",
                  pinyin: "yu\xE8"
                }, {
                  chinese: "\u6EF4",
                  pinyin: "d\u012B"
                }, {
                  chinese: "\u6EAA",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u5954",
                  pinyin: "b\u0113n"
                }, {
                  chinese: "\u6D0B",
                  pinyin: "y\xE1ng"
                }, {
                  chinese: "\u574F",
                  pinyin: "hu\xE0i"
                }, {
                  chinese: "\u6DF9\u6CA1",
                  pinyin: "y\u0101n'm\xF2"
                }, {
                  chinese: "\u51B2\u6BC1",
                  pinyin: "ch\u014Dng'hu\u01D0"
                }, {
                  chinese: "\u5C4B",
                  pinyin: "w\u016B"
                }, {
                  chinese: "\u707E",
                  pinyin: "z\u0101i"
                }, {
                  chinese: "\u731C",
                  pinyin: "c\u0101i"
                }, {
                  chinese: "\u690D",
                  pinyin: "zh\xED"
                }, {
                  chinese: "\u5982",
                  pinyin: "r\xFA"
                }, {
                  chinese: "\u4E3A",
                  pinyin: "w\xE9i"
                }, {
                  chinese: "\u65C5",
                  pinyin: "l\u01DA"
                }, {
                  chinese: "\u5907",
                  pinyin: "b\xE8i"
                }, {
                  chinese: "\u7EB7",
                  pinyin: "f\u0113n"
                }, {
                  chinese: "\u523A",
                  pinyin: "c\xEC"
                }, {
                  chinese: "\u5E95",
                  pinyin: "d\u01D0"
                }, {
                  chinese: "\u556A",
                  pinyin: "p\u0101"
                }, {
                  chinese: "\u70B8",
                  pinyin: "zh\xE0"
                }, {
                  chinese: "\u79BB",
                  pinyin: "l\xED"
                }, {
                  chinese: "\u8BC6",
                  pinyin: "sh\xED"
                }, {
                  chinese: "\u7C97",
                  pinyin: "c\u016B"
                }, {
                  chinese: "\u5F97",
                  pinyin: "d\xE9"
                }, {
                  chinese: "\u5957",
                  pinyin: "t\xE0o"
                }, {
                  chinese: "\u5E3D",
                  pinyin: "m\xE0o"
                }, {
                  chinese: "\u767B",
                  pinyin: "d\u0113ng"
                }, {
                  chinese: "\u978B",
                  pinyin: "xi\xE9"
                }, {
                  chinese: "\u88E4",
                  pinyin: "k\xF9"
                }, {
                  chinese: "\u56FE",
                  pinyin: "t\xFA"
                }, {
                  chinese: "\u58F6",
                  pinyin: "h\xFA"
                }, {
                  chinese: "\u5E10\u7BF7",
                  pinyin: "zh\xE0ng'p\xE9ng"
                }, {
                  chinese: "\u6307\u9488",
                  pinyin: "zh\u01D0'zh\u0113n"
                }]
              }, {
                names: {
                  en_us: "Literacy 2",
                  zh_cn: "\u8BC6\u5B57\u88682",
                  zh_tw: "\u8B58\u5B57\u93362"
                },
                words: [{
                  chinese: "\u5E06",
                  pinyin: "f\u0101n"
                }, {
                  chinese: "\u8258",
                  pinyin: "s\u014Du"
                }, {
                  chinese: "\u519B\u8230",
                  pinyin: "j\u016Bn'ji\xE0n"
                }, {
                  chinese: "\u7A3B",
                  pinyin: "d\xE0o"
                }, {
                  chinese: "\u56ED",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u7FE0",
                  pinyin: "cu\xEC"
                }, {
                  chinese: "\u961F",
                  pinyin: "du\xEC"
                }, {
                  chinese: "\u94DC\u53F7",
                  pinyin: "t\xF3ng'h\xE0o"
                }, {
                  chinese: "\u68A7\u6850",
                  pinyin: "w\xFA't\xF3ng"
                }, {
                  chinese: "\u638C",
                  pinyin: "zh\u01CEng"
                }, {
                  chinese: "\u67AB",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u677E\u67CF",
                  pinyin: "s\u014Dng'b\u01CEi"
                }, {
                  chinese: "\u88C5",
                  pinyin: "zhu\u0101ng"
                }, {
                  chinese: "\u6866",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u8010",
                  pinyin: "n\xE0i"
                }, {
                  chinese: "\u5B88",
                  pinyin: "sh\u01D2u"
                }, {
                  chinese: "\u7586",
                  pinyin: "ji\u0101ng"
                }, {
                  chinese: "\u94F6",
                  pinyin: "y\xEDn"
                }, {
                  chinese: "\u6749",
                  pinyin: "sh\u0101n"
                }, {
                  chinese: "\u5316",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u6842",
                  pinyin: "gu\xEC"
                }, {
                  chinese: "\u4E16\u754C",
                  pinyin: "sh\xEC'ji\xE8"
                }, {
                  chinese: "\u5B54\u96C0",
                  pinyin: "k\u01D2ng'qu\xE8"
                }, {
                  chinese: "\u9526",
                  pinyin: "j\u01D0n"
                }, {
                  chinese: "\u96C4\u9E70",
                  pinyin: "xi\xF3ng'y\u012Bng"
                }, {
                  chinese: "\u7FD4",
                  pinyin: "xi\xE1ng"
                }, {
                  chinese: "\u96C1",
                  pinyin: "y\xE0n"
                }, {
                  chinese: "\u4E1B",
                  pinyin: "c\xF3ng"
                }, {
                  chinese: "\u6DF1",
                  pinyin: "sh\u0113n"
                }, {
                  chinese: "\u731B",
                  pinyin: "m\u011Bng"
                }, {
                  chinese: "\u7075",
                  pinyin: "l\xEDng"
                }, {
                  chinese: "\u4F11",
                  pinyin: "xi\u016B"
                }, {
                  chinese: "\u5B63",
                  pinyin: "j\xEC"
                }, {
                  chinese: "\u8774\u8776",
                  pinyin: "h\xFA'di\xE9"
                }, {
                  chinese: "\u9EA6\u82D7",
                  pinyin: "m\xE0i'mi\xE1o"
                }, {
                  chinese: "\u6851",
                  pinyin: "s\u0101ng"
                }, {
                  chinese: "\u80A5",
                  pinyin: "f\xE9i"
                }, {
                  chinese: "\u519C",
                  pinyin: "n\xF3ng"
                }, {
                  chinese: "\u5F52",
                  pinyin: "gu\u012B"
                }, {
                  chinese: "\u6234",
                  pinyin: "d\xE0i"
                }, {
                  chinese: "\u573A",
                  pinyin: "ch\xE1ng "
                }, {
                  chinese: "\u8C37\u7C92",
                  pinyin: "g\u01D4'l\xEC"
                }, {
                  chinese: "\u867D",
                  pinyin: "su\u012B"
                }, {
                  chinese: "\u8F9B\u82E6",
                  pinyin: "x\u012Bn'k\u01D4"
                }, {
                  chinese: "\u4E86",
                  pinyin: "li\u01CEo"
                }, {
                  chinese: "\u8461\u8404",
                  pinyin: "p\xFA't\xE1o"
                }, {
                  chinese: "\u7D2B",
                  pinyin: "z\u01D0"
                }, {
                  chinese: "\u72D0\u72F8",
                  pinyin: "h\xFA'l\xED"
                }, {
                  chinese: "\u7B28",
                  pinyin: "b\xE8n"
                }, {
                  chinese: "\u9178",
                  pinyin: "su\u0101n"
                }]
              }, {
                names: {
                  en_us: "Literacy 3",
                  zh_cn: "\u8BC6\u5B57\u88683",
                  zh_tw: "\u8B58\u5B57\u93363"
                },
                words: [{
                  chinese: "\u66F9",
                  pinyin: "c\xE1o"
                }, {
                  chinese: "\u79F0",
                  pinyin: "ch\u0113ng"
                }, {
                  chinese: "\u5458",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u6839",
                  pinyin: "g\u0113n"
                }, {
                  chinese: "\u67F1",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u8BAE\u8BBA",
                  pinyin: "y\xEC'l\xF9n"
                }, {
                  chinese: "\u91CD",
                  pinyin: "zh\xF2ng"
                }, {
                  chinese: "\u6746",
                  pinyin: "g\u01CEn"
                }, {
                  chinese: "\u79E4",
                  pinyin: "ch\xE8ng"
                }, {
                  chinese: "\u780D",
                  pinyin: "k\u01CEn"
                }, {
                  chinese: "\u7EBF",
                  pinyin: "xi\xE0n"
                }, {
                  chinese: "\u6B62",
                  pinyin: "zh\u01D0"
                }, {
                  chinese: "\u91CF",
                  pinyin: "li\xE0ng"
                }, {
                  chinese: "\u73B2",
                  pinyin: "l\xEDng"
                }, {
                  chinese: "\u8BE6",
                  pinyin: "xi\xE1ng"
                }, {
                  chinese: "\u5E45",
                  pinyin: "f\xFA"
                }, {
                  chinese: "\u8BC4\u5956",
                  pinyin: "p\xEDng'ji\u01CEng"
                }, {
                  chinese: "\u50AC",
                  pinyin: "cu\u012B"
                }, {
                  chinese: "\u810F",
                  pinyin: "z\u0101ng"
                }, {
                  chinese: "\u4F24",
                  pinyin: "sh\u0101ng"
                }, {
                  chinese: "\u62A5",
                  pinyin: "b\xE0o"
                }, {
                  chinese: "\u53E6",
                  pinyin: "l\xECng"
                }, {
                  chinese: "\u53CA",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u61D2",
                  pinyin: "l\u01CEn"
                }, {
                  chinese: "\u5E76",
                  pinyin: "b\xECng"
                }, {
                  chinese: "\u7CDF",
                  pinyin: "z\u0101o"
                }, {
                  chinese: "\u80AF",
                  pinyin: "k\u011Bn"
                }, {
                  chinese: "\u5C01",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u524A",
                  pinyin: "xi\u0101o"
                }, {
                  chinese: "\u9505",
                  pinyin: "gu\u014D"
                }, {
                  chinese: "\u671D",
                  pinyin: "ch\xE1o"
                }, {
                  chinese: "\u59CB",
                  pinyin: "sh\u01D0"
                }, {
                  chinese: "\u522E",
                  pinyin: "gu\u0101"
                }, {
                  chinese: "\u80E1",
                  pinyin: "h\xFA"
                }, {
                  chinese: "\u4FEE",
                  pinyin: "xi\u016B"
                }, {
                  chinese: "\u51B7",
                  pinyin: "l\u011Bng"
                }, {
                  chinese: "\u80A9",
                  pinyin: "ji\u0101n"
                }, {
                  chinese: "\u56E2",
                  pinyin: "tu\xE1n"
                }, {
                  chinese: "\u91CD",
                  pinyin: "ch\xF3ng"
                }, {
                  chinese: "\u5B8C",
                  pinyin: "w\xE1n"
                }, {
                  chinese: "\u5E0C",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u671F",
                  pinyin: "q\u012B"
                }, {
                  chinese: "\u7ED3\u675F",
                  pinyin: "ji\xE9'sh\xF9"
                }, {
                  chinese: "\u9C9C",
                  pinyin: "xi\u0101n"
                }, {
                  chinese: "\u54C4",
                  pinyin: "h\u01D2ng"
                }, {
                  chinese: "\u5148",
                  pinyin: "xi\u0101n"
                }, {
                  chinese: "\u68A6",
                  pinyin: "m\xE8ng"
                }, {
                  chinese: "\u95ED",
                  pinyin: "b\xEC"
                }, {
                  chinese: "\u7D27",
                  pinyin: "j\u01D0n"
                }, {
                  chinese: "\u6DA6",
                  pinyin: "r\xF9n"
                }, {
                  chinese: "\u7B49",
                  pinyin: "d\u011Bng"
                }, {
                  chinese: "\u7D2F",
                  pinyin: "l\xE8i"
                }, {
                  chinese: "\u5438",
                  pinyin: "x\u012B"
                }, {
                  chinese: "\u53D1",
                  pinyin: "f\xE0"
                }, {
                  chinese: "\u7C98",
                  pinyin: "zh\u0101n"
                }, {
                  chinese: "\u6C57",
                  pinyin: "h\xE0n"
                }, {
                  chinese: "\u989D",
                  pinyin: "\xE9"
                }, {
                  chinese: "\u6C99",
                  pinyin: "sh\u0101"
                }, {
                  chinese: "\u4E4F",
                  pinyin: "f\xE1"
                }, {
                  chinese: "\u5F39\u94A2\u7434",
                  pinyin: "t\xE1n'g\u0101ng'q\xEDn"
                }, {
                  chinese: "\u7EC3",
                  pinyin: "li\xE0n"
                }, {
                  chinese: "\u634F",
                  pinyin: "ni\u0113"
                }, {
                  chinese: "\u6CE5",
                  pinyin: "n\xED"
                }, {
                  chinese: "\u6EDA",
                  pinyin: "g\u01D4n"
                }, {
                  chinese: "\u94C1\u73AF",
                  pinyin: "ti\u011B'hu\xE1n"
                }, {
                  chinese: "\u8361",
                  pinyin: "d\xE0ng"
                }, {
                  chinese: "\u6ED1",
                  pinyin: "hu\xE1"
                }, {
                  chinese: "\u68AF",
                  pinyin: "t\u012B"
                }]
              }, {
                names: {
                  en_us: "Literacy 4",
                  zh_cn: "\u8BC6\u5B57\u88684",
                  zh_tw: "\u8B58\u5B57\u93364"
                },
                words: [{
                  chinese: "\u4F9D",
                  pinyin: "y\u012B"
                }, {
                  chinese: "\u5C3D",
                  pinyin: "j\xECn"
                }, {
                  chinese: "\u6B32",
                  pinyin: "y\xF9"
                }, {
                  chinese: "\u7A77",
                  pinyin: "qi\xF3ng"
                }, {
                  chinese: "\u5C42",
                  pinyin: "c\xE9ng"
                }, {
                  chinese: "\u7011\u5E03",
                  pinyin: "p\xF9'b\xF9"
                }, {
                  chinese: "\u7089",
                  pinyin: "l\xFA"
                }, {
                  chinese: "\u70DF",
                  pinyin: "y\u0101n"
                }, {
                  chinese: "\u9065",
                  pinyin: "y\xE1o"
                }, {
                  chinese: "\u5DDD",
                  pinyin: "chu\u0101n"
                }, {
                  chinese: "\u95FB\u540D",
                  pinyin: "w\xE9n'm\xEDng"
                }, {
                  chinese: "\u666F\u533A",
                  pinyin: "j\u01D0ng'q\u016B"
                }, {
                  chinese: "\u7701",
                  pinyin: "sh\u011Bng"
                }, {
                  chinese: "\u90E8",
                  pinyin: "b\xF9"
                }, {
                  chinese: "\u79C0",
                  pinyin: "xi\xF9"
                }, {
                  chinese: "\u5C24\u5176",
                  pinyin: "y\xF3u'q\xED"
                }, {
                  chinese: "\u4ED9",
                  pinyin: "xi\u0101n"
                }, {
                  chinese: "\u5DE8",
                  pinyin: "j\xF9"
                }, {
                  chinese: "\u4F4D",
                  pinyin: "w\xE8i"
                }, {
                  chinese: "\u90FD",
                  pinyin: "d\u016B"
                }, {
                  chinese: "\u8457",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u5F62\u72B6",
                  pinyin: "x\xEDng'zhu\xE0ng"
                }, {
                  chinese: "\u6F6D",
                  pinyin: "t\xE1n"
                }, {
                  chinese: "\u6E7E",
                  pinyin: "w\u0101n"
                }, {
                  chinese: "\u6E56",
                  pinyin: "h\xFA"
                }, {
                  chinese: "\u7ED5",
                  pinyin: "r\xE0o"
                }, {
                  chinese: "\u8302\u76DB",
                  pinyin: "m\xE0o'sh\xE8ng"
                }, {
                  chinese: "\u56F4",
                  pinyin: "w\xE9i"
                }, {
                  chinese: "\u80DC",
                  pinyin: "sh\xE8ng"
                }, {
                  chinese: "\u592E",
                  pinyin: "y\u0101ng"
                }, {
                  chinese: "\u5C9B",
                  pinyin: "d\u01CEo"
                }, {
                  chinese: "\u7EB1",
                  pinyin: "sh\u0101"
                }, {
                  chinese: "\u7AE5",
                  pinyin: "t\xF3ng"
                }, {
                  chinese: "\u5883",
                  pinyin: "j\xECng"
                }, {
                  chinese: "\u5F15",
                  pinyin: "y\u01D0n"
                }, {
                  chinese: "\u5BA2",
                  pinyin: "k\xE8 "
                }, {
                  chinese: "\u6C9F",
                  pinyin: "g\u014Du"
                }, {
                  chinese: "\u4EA7",
                  pinyin: "ch\u01CEn"
                }, {
                  chinese: "\u4EFD",
                  pinyin: "f\xE8n"
                }, {
                  chinese: "\u679D",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u642D",
                  pinyin: "d\u0101"
                }, {
                  chinese: "\u6DE1",
                  pinyin: "d\xE0n"
                }, {
                  chinese: "\u597D",
                  pinyin: "h\xE0o"
                }, {
                  chinese: "\u591F",
                  pinyin: "q\xF2u"
                }, {
                  chinese: "\u6536",
                  pinyin: "sh\u014Du"
                }, {
                  chinese: "\u57CE\u5E02",
                  pinyin: "ch\xE9ng'sh\xEC"
                }, {
                  chinese: "\u5E72",
                  pinyin: "gan"
                }, {
                  chinese: "\u7559",
                  pinyin: "li\xFA"
                }, {
                  chinese: "\u9489",
                  pinyin: "d\xECng"
                }, {
                  chinese: "\u5229",
                  pinyin: "l\xEC"
                }, {
                  chinese: "\u5206",
                  pinyin: "f\xE8n"
                }, {
                  chinese: "\u5473",
                  pinyin: "w\xE8i"
                }, {
                  chinese: "\u660C",
                  pinyin: "ch\u0101ng"
                }, {
                  chinese: "\u94FA",
                  pinyin: "p\xF9"
                }, {
                  chinese: "\u8C03",
                  pinyin: "ti\xE1o"
                }, {
                  chinese: "\u786C\u5367",
                  pinyin: "y\xECng'w\xF2"
                }, {
                  chinese: "\u9650\u4E58",
                  pinyin: "xi\xE0n'ch\xE9ng"
                }, {
                  chinese: "\u552E",
                  pinyin: "sh\xF2u"
                }]
              }, {
                names: {
                  en_us: "Literacy 5",
                  zh_cn: "\u8BC6\u5B57\u88685",
                  zh_tw: "\u8B58\u5B57\u93365"
                },
                words: [{
                  chinese: "\u6CBF",
                  pinyin: "y\xE1n"
                }, {
                  chinese: "\u7B54",
                  pinyin: "d\xE1"
                }, {
                  chinese: "\u6E34",
                  pinyin: "k\u011B"
                }, {
                  chinese: "\u559D",
                  pinyin: "h\u0113"
                }, {
                  chinese: "\u8BDD",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u5F04\u9519",
                  pinyin: "n\xF2ng'cu\xF2"
                }, {
                  chinese: "\u9645",
                  pinyin: "ji"
                }, {
                  chinese: "\u54EA",
                  pinyin: "na"
                }, {
                  chinese: "\u62AC",
                  pinyin: "t\xE1i"
                }, {
                  chinese: "\u53F7",
                  pinyin: "h\xE1o"
                }, {
                  chinese: "\u5835",
                  pinyin: "d\u01D4"
                }, {
                  chinese: "\u7F1D",
                  pinyin: "f\xE8ng"
                }, {
                  chinese: "\u5F53",
                  pinyin: "d\xE0ng"
                }, {
                  chinese: "\u9E4A",
                  pinyin: "qu\xE8"
                }, {
                  chinese: "\u6717",
                  pinyin: "l\u01CEng"
                }, {
                  chinese: "\u8854",
                  pinyin: "xi\xE1n"
                }, {
                  chinese: "\u67AF",
                  pinyin: "k\u016B"
                }, {
                  chinese: "\u529D",
                  pinyin: "qu\xE0n"
                }, {
                  chinese: "\u8D81",
                  pinyin: "ch\xE8n"
                }, {
                  chinese: "\u5C06",
                  pinyin: "ji\u0101ng"
                }, {
                  chinese: "\u96BE",
                  pinyin: "n\xE1n"
                }, {
                  chinese: "\u4E14",
                  pinyin: "qi\u011B"
                }, {
                  chinese: "\u72C2",
                  pinyin: "ku\xE1ng"
                }, {
                  chinese: "\u543C",
                  pinyin: "h\u01D2u"
                }, {
                  chinese: "\u590D",
                  pinyin: "f\xF9"
                }, {
                  chinese: "\u54C0",
                  pinyin: "\u0101i"
                }, {
                  chinese: "\u846B\u82A6\u85E4",
                  pinyin: "h\xFA'l\xFA't\xE9ng"
                }, {
                  chinese: "\u8C22",
                  pinyin: "xi\xE8"
                }, {
                  chinese: "\u554A",
                  pinyin: "a"
                }, {
                  chinese: "\u869C",
                  pinyin: "y\xE1"
                }, {
                  chinese: "\u76EF",
                  pinyin: "d\u012Bng"
                }, {
                  chinese: "\u8D5B",
                  pinyin: "s\xE0i"
                }, {
                  chinese: "\u611F",
                  pinyin: "g\u01CEn"
                }, {
                  chinese: "\u602A",
                  pinyin: "gu\xE0i"
                }, {
                  chinese: "\u6162",
                  pinyin: "m\xE0n"
                }, {
                  chinese: "\u950B",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u871C\u8702",
                  pinyin: "m\xEC'f\u0113ng"
                }, {
                  chinese: "\u5E55",
                  pinyin: "m\xF9"
                }, {
                  chinese: "\u626B\u5893",
                  pinyin: "s\u01CEo'm\xF9"
                }, {
                  chinese: "\u6155",
                  pinyin: "m\xF9"
                }, {
                  chinese: "\u6284",
                  pinyin: "ch\u0101o"
                }, {
                  chinese: "\u7092",
                  pinyin: "ch\u01CEo"
                }]
              }, {
                names: {
                  en_us: "Literacy 6",
                  zh_cn: "\u8BC6\u5B57\u88686",
                  zh_tw: "\u8B58\u5B57\u93366"
                },
                words: [{
                  chinese: "\u697C",
                  pinyin: "l\xF3u"
                }, {
                  chinese: "\u4E89",
                  pinyin: "zh\u0113ng"
                }, {
                  chinese: "\u4EE3",
                  pinyin: "d\xE0i"
                }, {
                  chinese: "\u4E34",
                  pinyin: "l\xEDn"
                }, {
                  chinese: "\u814A",
                  pinyin: "l\xE0"
                }, {
                  chinese: "\u7AE0",
                  pinyin: "zh\u0101ng"
                }, {
                  chinese: "\u63E1",
                  pinyin: "w\xF2"
                }, {
                  chinese: "\u89C6\u5BDF",
                  pinyin: "sh\xEC'ch\xE1"
                }, {
                  chinese: "\u6CB9",
                  pinyin: "y\xF3u"
                }, {
                  chinese: "\u6731\u5FB7",
                  pinyin: "zh\u016B'd\xE9"
                }, {
                  chinese: "\u6241\u62C5",
                  pinyin: "bi\u01CEn'd\xE0n"
                }, {
                  chinese: "\u5FD7",
                  pinyin: "zh\xEC"
                }, {
                  chinese: "\u4F0D",
                  pinyin: "w\u01D4"
                }, {
                  chinese: "\u6CFD",
                  pinyin: "z\xE9"
                }, {
                  chinese: "\u654C",
                  pinyin: "d\xED"
                }, {
                  chinese: "\u9661",
                  pinyin: "d\u01D2u"
                }, {
                  chinese: "\u6574",
                  pinyin: "zh\u011Bng"
                }, {
                  chinese: "\u4ED7",
                  pinyin: "zh\xE0ng"
                }, {
                  chinese: "\u75BC",
                  pinyin: "t\xE9ng"
                }, {
                  chinese: "\u6599",
                  pinyin: "li\xE0o"
                }, {
                  chinese: "\u656C",
                  pinyin: "j\xECng"
                }, {
                  chinese: "\u6CFC",
                  pinyin: "p\u014D"
                }, {
                  chinese: "\u6C11\u65CF",
                  pinyin: "m\xEDn'z\xFA"
                }, {
                  chinese: "\u5EA6",
                  pinyin: "d\xF9"
                }, {
                  chinese: "\u6572",
                  pinyin: "qi\u0101o"
                }, {
                  chinese: "\u94FA",
                  pinyin: "p\u016B"
                }, {
                  chinese: "\u9F99",
                  pinyin: "l\xF3ng"
                }, {
                  chinese: "\u9A76",
                  pinyin: "sh\u01D0"
                }, {
                  chinese: "\u5BB9",
                  pinyin: "r\xF3ng"
                }, {
                  chinese: "\u8E29",
                  pinyin: "c\u01CEi"
                }, {
                  chinese: "\u76DB",
                  pinyin: "ch\xE9ng"
                }, {
                  chinese: "\u7897",
                  pinyin: "w\u01CEn"
                }, {
                  chinese: "\u795D\u798F",
                  pinyin: "zh\xF9'f\xFA"
                }, {
                  chinese: "\u5065\u5EB7",
                  pinyin: "ji\xE0n'k\u0101ng"
                }, {
                  chinese: "\u5BFF",
                  pinyin: "sh\xF2u"
                }, {
                  chinese: "\u5218",
                  pinyin: "li\xFA"
                }, {
                  chinese: "\u5170",
                  pinyin: "l\xE1n"
                }, {
                  chinese: "\u6D3E",
                  pinyin: "p\xE0i"
                }, {
                  chinese: "\u88AB",
                  pinyin: "b\xE8i"
                }, {
                  chinese: "\u8840",
                  pinyin: "xu\xE8"
                }, {
                  chinese: "\u62C9",
                  pinyin: "l\u0101"
                }, {
                  chinese: "\u5175",
                  pinyin: "b\u012Bng"
                }, {
                  chinese: "\u8840",
                  pinyin: "xi\u011B"
                }, {
                  chinese: "\u633A",
                  pinyin: "t\u01D0ng"
                }, {
                  chinese: "\u6740",
                  pinyin: "sh\u0101"
                }, {
                  chinese: "\u70C8",
                  pinyin: "li\xE8"
                }, {
                  chinese: "\u8F7F",
                  pinyin: "ji\xE0o"
                }, {
                  chinese: "\u6551",
                  pinyin: "ji\xF9"
                }, {
                  chinese: "\u6469\u6258",
                  pinyin: "m\xF3'tu\u014D"
                }, {
                  chinese: "\u9632",
                  pinyin: "f\xE1ng"
                }, {
                  chinese: "\u6E14",
                  pinyin: "y\xFA"
                }, {
                  chinese: "\u8D27\u8F6E",
                  pinyin: "hu\xF2'l\xFAn"
                }, {
                  chinese: "\u79D1\u8003",
                  pinyin: "k\u0113'k\u01CEo"
                }]
              }, {
                names: {
                  en_us: "Literacy 7",
                  zh_cn: "\u8BC6\u5B57\u88687",
                  zh_tw: "\u8B58\u5B57\u93367"
                },
                words: [{
                  chinese: "\u5BBF",
                  pinyin: "s\xF9"
                }, {
                  chinese: "\u5BFA",
                  pinyin: "s\xEC"
                }, {
                  chinese: "\u5371",
                  pinyin: "w\u0113i"
                }, {
                  chinese: "\u8FB0",
                  pinyin: "ch\xE9n"
                }, {
                  chinese: "\u6050",
                  pinyin: "k\u01D2ng"
                }, {
                  chinese: "\u60CA",
                  pinyin: "j\u012Bng"
                }, {
                  chinese: "\u4F3C",
                  pinyin: "s\xEC"
                }, {
                  chinese: "\u5E90",
                  pinyin: "l\xFA"
                }, {
                  chinese: "\u7B3C",
                  pinyin: "l\u01D2ng"
                }, {
                  chinese: "\u76D6",
                  pinyin: "g\xE0i"
                }, {
                  chinese: "\u82CD",
                  pinyin: "c\u0101ng"
                }, {
                  chinese: "\u832B",
                  pinyin: "m\xE1ng"
                }, {
                  chinese: "\u96FE",
                  pinyin: "w\xF9"
                }, {
                  chinese: "\u6DD8",
                  pinyin: "t\xE1o"
                }, {
                  chinese: "\u4E8E",
                  pinyin: "y\xFA"
                }, {
                  chinese: "\u6697",
                  pinyin: "\xE0n"
                }, {
                  chinese: "\u5CB8",
                  pinyin: "\xE0n"
                }, {
                  chinese: "\u8857",
                  pinyin: "ji\u0113"
                }, {
                  chinese: "\u6881",
                  pinyin: "li\xE1ng"
                }, {
                  chinese: "\u751A\u81F3",
                  pinyin: "sh\xE8n'zh\xEC"
                }, {
                  chinese: "\u5207",
                  pinyin: "qi\xE8"
                }, {
                  chinese: "\u8EB2",
                  pinyin: "du\u01D2"
                }, {
                  chinese: "\u5931",
                  pinyin: "sh\u012B"
                }, {
                  chinese: "\u6DFB",
                  pinyin: "ti\u0101n"
                }, {
                  chinese: "\u67F4",
                  pinyin: "ch\xE1i"
                }, {
                  chinese: "\u70E7",
                  pinyin: "sh\u0101o"
                }, {
                  chinese: "\u65FA",
                  pinyin: "w\xE0ng"
                }, {
                  chinese: "\u6E10",
                  pinyin: "ji\xE0n"
                }, {
                  chinese: "\u54CE",
                  pinyin: "\u0101i"
                }, {
                  chinese: "\u5440",
                  pinyin: "y\u0101"
                }, {
                  chinese: "\u5192",
                  pinyin: "m\xE0o"
                }, {
                  chinese: "\u545B",
                  pinyin: "qi\xE0ng"
                }, {
                  chinese: "\u70EB",
                  pinyin: "t\xE0ng"
                }, {
                  chinese: "\u7EC8",
                  pinyin: "zh\u014Dng"
                }, {
                  chinese: "\u6D51",
                  pinyin: "h\xFAn"
                }, {
                  chinese: "\u6DCB",
                  pinyin: "l\xEDn"
                }, {
                  chinese: "\u706D",
                  pinyin: "mi\xE8"
                }, {
                  chinese: "\u6FC0",
                  pinyin: "j\u012B"
                }, {
                  chinese: "\u77A7",
                  pinyin: "qi\xE1o"
                }, {
                  chinese: "\u6EE9",
                  pinyin: "t\u0101n"
                }, {
                  chinese: "\u6930\u58F3",
                  pinyin: "y\u0113'k\xE9"
                }, {
                  chinese: "\u6F20",
                  pinyin: "m\xF2"
                }, {
                  chinese: "\u9A86\u9A7C",
                  pinyin: "lu\xF2'tu\xF3"
                }, {
                  chinese: "\u9A8F",
                  pinyin: "j\xF9n"
                }, {
                  chinese: "\u60AC\u5D16",
                  pinyin: "xu\xE1n'y\xE1"
                }]
              }, {
                names: {
                  en_us: "Literacy 8",
                  zh_cn: "\u8BC6\u5B57\u88688",
                  zh_tw: "\u8B58\u5B57\u93368"
                },
                words: [{
                  chinese: "\u5047",
                  pinyin: "ji\u01CE"
                }, {
                  chinese: "\u5A01",
                  pinyin: "w\u0113i"
                }, {
                  chinese: "\u8F6C",
                  pinyin: "zhu\xE0n"
                }, {
                  chinese: "\u626F",
                  pinyin: "ch\u011B"
                }, {
                  chinese: "\u55D3",
                  pinyin: "s\u01CEng"
                }, {
                  chinese: "\u517D",
                  pinyin: "sh\xF2u"
                }, {
                  chinese: "\u8FDD\u6297",
                  pinyin: "w\xE9i'k\xE0ng"
                }, {
                  chinese: "\u722A",
                  pinyin: "zhu\u01CE"
                }, {
                  chinese: "\u8D9F",
                  pinyin: "t\xE0ng"
                }, {
                  chinese: "\u795E",
                  pinyin: "sh\xE9n"
                }, {
                  chinese: "\u732A",
                  pinyin: "zh\u016B"
                }, {
                  chinese: "\u7EB3",
                  pinyin: "n\xE0"
                }, {
                  chinese: "\u95F7",
                  pinyin: "m\xE8n"
                }, {
                  chinese: "\u53D7",
                  pinyin: "sh\xF2u"
                }, {
                  chinese: "\u9A97",
                  pinyin: "pi\xE0n"
                }, {
                  chinese: "\u501F",
                  pinyin: "ji\xE8 "
                }, {
                  chinese: "\u7B5D",
                  pinyin: "zh\u0113ng"
                }, {
                  chinese: "\u9F20",
                  pinyin: "sh\u01D4"
                }, {
                  chinese: "\u6298",
                  pinyin: "zh\xE9"
                }, {
                  chinese: "\u6F02",
                  pinyin: "pi\u0101o"
                }, {
                  chinese: "\u624E",
                  pinyin: "z\u0101"
                }, {
                  chinese: "\u6293",
                  pinyin: "zhu\u0101"
                }, {
                  chinese: "\u5E78",
                  pinyin: "x\xECng"
                }, {
                  chinese: "\u4FE9",
                  pinyin: "li\u01CE"
                }, {
                  chinese: "\u4F46\u613F",
                  pinyin: "d\xE0n'yu\xE0n"
                }, {
                  chinese: "\u54ED",
                  pinyin: "k\u016B"
                }, {
                  chinese: "\u53D6",
                  pinyin: "q\u01D4"
                }, {
                  chinese: "\u5E2E\u52A9",
                  pinyin: "b\u0101ng'zh\xF9"
                }, {
                  chinese: "\u62BD",
                  pinyin: "ch\u014Du"
                }, {
                  chinese: "\u7EED",
                  pinyin: "x\xF9"
                }, {
                  chinese: "\u4F7F\u52B2",
                  pinyin: "sh\u01D0'j\xECn"
                }, {
                  chinese: "\u79E7",
                  pinyin: "y\u0101ng"
                }, {
                  chinese: "\u8868\u793A",
                  pinyin: "bi\u01CEo'sh\xEC"
                }, {
                  chinese: "\u6446",
                  pinyin: "b\u01CEi"
                }, {
                  chinese: "\u7FFB",
                  pinyin: "f\u0101n"
                }, {
                  chinese: "\u4ECD",
                  pinyin: "r\xE9ng"
                }, {
                  chinese: "\u683D",
                  pinyin: "z\u0101i"
                }, {
                  chinese: "\u8D23",
                  pinyin: "z\xE9"
                }, {
                  chinese: "\u72FC",
                  pinyin: "l\xE1ng"
                }, {
                  chinese: "\u7329",
                  pinyin: "x\u012Bng"
                }, {
                  chinese: "\u86C7",
                  pinyin: "sh\xE9"
                }, {
                  chinese: "\u9E64",
                  pinyin: "h\xE8"
                }, {
                  chinese: "\u9E3D",
                  pinyin: "g\u0113"
                }, {
                  chinese: "\u7F9A",
                  pinyin: "l\xEDng"
                }, {
                  chinese: "\u86AF\u8693",
                  pinyin: "qi\u016B'y\u01D0n"
                }, {
                  chinese: "\u8783\u87F9",
                  pinyin: "p\xE1ng'xi\xE8"
                }, {
                  chinese: "\u867E",
                  pinyin: "xi\u0101"
                }, {
                  chinese: "\u8695",
                  pinyin: "c\xE1n"
                }]
              }, {
                names: {
                  en_us: "Writing 1",
                  zh_cn: "\u5199\u5B57\u88681",
                  zh_tw: "\u5BEB\u5B57\u93361"
                },
                words: [{
                  chinese: "\u4E24",
                  pinyin: "li\u01CEng"
                }, {
                  chinese: "\u54EA",
                  pinyin: "n\u01CE"
                }, {
                  chinese: "\u5BBD",
                  pinyin: "ku\u0101n"
                }, {
                  chinese: "\u9876",
                  pinyin: "d\u01D0ng"
                }, {
                  chinese: "\u773C\u775B",
                  pinyin: "y\u01CEn'j\u012Bng"
                }, {
                  chinese: "\u809A\u76AE",
                  pinyin: "d\xF9'p\xED"
                }, {
                  chinese: "\u5B69",
                  pinyin: "h\xE1i"
                }, {
                  chinese: "\u8DF3",
                  pinyin: "ti\xE0o"
                }, {
                  chinese: "\u53D8",
                  pinyin: "bi\xE0n"
                }, {
                  chinese: "\u6781",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u7247",
                  pinyin: "pi\xE0n"
                }, {
                  chinese: "\u508D",
                  pinyin: "b\xE0ng"
                }, {
                  chinese: "\u6D77\u6D0B",
                  pinyin: "h\u01CEi'y\xE1ng"
                }, {
                  chinese: "\u4F5C",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u574F",
                  pinyin: "hu\xE0i"
                }, {
                  chinese: "\u7ED9",
                  pinyin: "g\u011Bi"
                }, {
                  chinese: "\u5E26",
                  pinyin: "d\xE0i"
                }, {
                  chinese: "\u6CD5",
                  pinyin: "f\u01CE"
                }, {
                  chinese: "\u5982",
                  pinyin: "r\xFA"
                }, {
                  chinese: "\u516C",
                  pinyin: "g\u014Dng"
                }, {
                  chinese: "\u5B83",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u5A03",
                  pinyin: "w\xE1"
                }, {
                  chinese: "\u5979",
                  pinyin: "t\u0101"
                }, {
                  chinese: "\u6BDB",
                  pinyin: "m\xE1o"
                }, {
                  chinese: "\u66F4",
                  pinyin: "g\xE8ng"
                }, {
                  chinese: "\u77E5\u8BC6",
                  pinyin: "zh\u012B'shi"
                }]
              }, {
                names: {
                  en_us: "Writing 2",
                  zh_cn: "\u5199\u5B57\u88682",
                  zh_tw: "\u5BEB\u5B57\u93362"
                },
                words: [{
                  chinese: "\u5904",
                  pinyin: "ch\xF9"
                }, {
                  chinese: "\u56ED",
                  pinyin: "yu\xE1n"
                }, {
                  chinese: "\u6865",
                  pinyin: "qi\xE1o"
                }, {
                  chinese: "\u7FA4",
                  pinyin: "q\xFAn"
                }, {
                  chinese: "\u961F\u65D7",
                  pinyin: "du\xEC'q\xED"
                }, {
                  chinese: "\u94DC\u53F7",
                  pinyin: "t\xF3ng'h\xE0o"
                }, {
                  chinese: "\u9886",
                  pinyin: "l\u01D0ng"
                }, {
                  chinese: "\u5DFE",
                  pinyin: "j\u012Bn"
                }, {
                  chinese: "\u6768",
                  pinyin: "y\xE1ng"
                }, {
                  chinese: "\u58EE",
                  pinyin: "zhu\xE0ng"
                }, {
                  chinese: "\u6850",
                  pinyin: "t\xF3ng"
                }, {
                  chinese: "\u67AB",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u677E\u67CF",
                  pinyin: "s\u014Dngb\u01CEi"
                }, {
                  chinese: "\u68C9",
                  pinyin: "mi\xE1n"
                }, {
                  chinese: "\u6749",
                  pinyin: "sh\u0101n"
                }, {
                  chinese: "\u5316",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u6842",
                  pinyin: "gu\xEC"
                }, {
                  chinese: "\u6B4C",
                  pinyin: "g\u0113"
                }, {
                  chinese: "\u5199",
                  pinyin: "xi\u011B"
                }, {
                  chinese: "\u4E1B",
                  pinyin: "c\xF3ng"
                }, {
                  chinese: "\u6DF1",
                  pinyin: "sh\u0113n"
                }, {
                  chinese: "\u516D",
                  pinyin: "li\xF9"
                }, {
                  chinese: "\u718A\u732B",
                  pinyin: "xi\xF3ng'm\u0101o"
                }, {
                  chinese: "\u4E5D",
                  pinyin: "ji\u01D4"
                }, {
                  chinese: "\u670B\u53CB",
                  pinyin: "p\xE9ng'y\u01D2u"
                }, {
                  chinese: "\u5B63",
                  pinyin: "j\xEC"
                }, {
                  chinese: "\u5439",
                  pinyin: "chu\u012B"
                }, {
                  chinese: "\u80A5",
                  pinyin: "f\xE9i"
                }, {
                  chinese: "\u519C",
                  pinyin: "n\xF3ng"
                }, {
                  chinese: "\u4E8B",
                  pinyin: "sh\xEC"
                }, {
                  chinese: "\u5FD9",
                  pinyin: "m\xE1ng"
                }, {
                  chinese: "\u5F52",
                  pinyin: "gu\u012B"
                }, {
                  chinese: "\u6234",
                  pinyin: "d\xE0i"
                }, {
                  chinese: "\u8F9B\u82E6",
                  pinyin: "x\u012Bn'k\u01D4"
                }]
              }, {
                names: {
                  en_us: "Writing 3",
                  zh_cn: "\u5199\u5B57\u88683",
                  zh_tw: "\u5BEB\u5B57\u93363"
                },
                words: [{
                  chinese: "\u79F0",
                  pinyin: "ch\u0113ng"
                }, {
                  chinese: "\u67F1",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u5E95",
                  pinyin: "d\u01D0"
                }, {
                  chinese: "\u6746\u79E4",
                  pinyin: "g\u01CEn'ch\xE8ng"
                }, {
                  chinese: "\u505A",
                  pinyin: "zu\xF2"
                }, {
                  chinese: "\u5C81",
                  pinyin: "su\xEC"
                }, {
                  chinese: "\u7AD9",
                  pinyin: "zh\xE0n"
                }, {
                  chinese: "\u8239",
                  pinyin: "chu\xE1n"
                }, {
                  chinese: "\u7136",
                  pinyin: "r\xE1n"
                }, {
                  chinese: "\u753B\u5E45",
                  pinyin: "hu\xE0'f\xFA"
                }, {
                  chinese: "\u8BC4\u5956",
                  pinyin: "p\xEDng'ji\u01CEng"
                }, {
                  chinese: "\u7EB8",
                  pinyin: "zh\u01D0"
                }, {
                  chinese: "\u62A5",
                  pinyin: "b\xE0o"
                }, {
                  chinese: "\u53E6",
                  pinyin: "l\xECng"
                }, {
                  chinese: "\u53CA",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u62FF",
                  pinyin: "n\xE1"
                }, {
                  chinese: "\u5E76",
                  pinyin: "b\xECng"
                }, {
                  chinese: "\u5C01",
                  pinyin: "f\u0113ng"
                }, {
                  chinese: "\u4FE1",
                  pinyin: "x\xECn"
                }, {
                  chinese: "\u4ECA",
                  pinyin: "j\u012Bn"
                }, {
                  chinese: "\u652F",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u5706\u73E0\u7B14",
                  pinyin: "yu\xE1n'zh\u016B'b\u01D0"
                }, {
                  chinese: "\u706F",
                  pinyin: "d\u0113ng"
                }, {
                  chinese: "\u7535\u5F71",
                  pinyin: "di\xE0n'y\u01D0ng"
                }, {
                  chinese: "\u54C4",
                  pinyin: "h\u01D2ng"
                }, {
                  chinese: "\u5148",
                  pinyin: "xi\u0101n"
                }, {
                  chinese: "\u95ED",
                  pinyin: "b\xEC"
                }, {
                  chinese: "\u8138",
                  pinyin: "li\u01CEn"
                }, {
                  chinese: "\u6C89",
                  pinyin: "ch\xE9n"
                }, {
                  chinese: "\u53D1",
                  pinyin: "f\u0101"
                }, {
                  chinese: "\u7A97",
                  pinyin: "chu\u0101ng"
                }, {
                  chinese: "\u6C99",
                  pinyin: "sh\u0101"
                }]
              }, {
                names: {
                  en_us: "Writing 4",
                  zh_cn: "\u5199\u5B57\u88684",
                  zh_tw: "\u5BEB\u5B57\u93364"
                },
                words: [{
                  chinese: "\u4F9D",
                  pinyin: "y\u012B"
                }, {
                  chinese: "\u5C3D",
                  pinyin: "j\xECn"
                }, {
                  chinese: "\u9EC4",
                  pinyin: "hu\xE1ng"
                }, {
                  chinese: "\u5C42",
                  pinyin: "c\xE9ng"
                }, {
                  chinese: "\u7167",
                  pinyin: "zh\xE0o"
                }, {
                  chinese: "\u7089",
                  pinyin: "l\xFA"
                }, {
                  chinese: "\u70DF",
                  pinyin: "y\u0101n"
                }, {
                  chinese: "\u6302",
                  pinyin: "gu\xE0"
                }, {
                  chinese: "\u5DDD",
                  pinyin: "chu\u0101n"
                }, {
                  chinese: "\u5357\u90E8",
                  pinyin: "n\xE1n'b\xF9"
                }, {
                  chinese: "\u4E9B",
                  pinyin: "xi\u0113"
                }, {
                  chinese: "\u5DE8",
                  pinyin: "j\xF9"
                }, {
                  chinese: "\u4F4D",
                  pinyin: "w\xE8i"
                }, {
                  chinese: "\u5411",
                  pinyin: "xi\xE0ng"
                }, {
                  chinese: "\u6BCF",
                  pinyin: "m\u011Bi"
                }, {
                  chinese: "\u5347",
                  pinyin: "sh\u0113ng"
                }, {
                  chinese: "\u95EA",
                  pinyin: "sh\u01CEn"
                }, {
                  chinese: "\u72D7",
                  pinyin: "g\u01D2u"
                }, {
                  chinese: "\u6E7E",
                  pinyin: "w\u0101n"
                }, {
                  chinese: "\u540D\u80DC",
                  pinyin: "m\xEDng'sh\xE8ng"
                }, {
                  chinese: "\u8FF9",
                  pinyin: "j\xEC"
                }, {
                  chinese: "\u592E",
                  pinyin: "y\u0101ng"
                }, {
                  chinese: "\u4E3D",
                  pinyin: "l\xEC"
                }, {
                  chinese: "\u5C55\u73B0",
                  pinyin: "zh\u01CEn'xi\xE0n"
                }, {
                  chinese: "\u4EA7",
                  pinyin: "ch\u01CEn"
                }, {
                  chinese: "\u4EFD",
                  pinyin: "f\xE8n"
                }, {
                  chinese: "\u5761",
                  pinyin: "p\u014D"
                }, {
                  chinese: "\u679D",
                  pinyin: "zh\u012B"
                }, {
                  chinese: "\u8D77",
                  pinyin: "q\u01D0"
                }, {
                  chinese: "\u5BA2",
                  pinyin: "k\xE8"
                }, {
                  chinese: "\u8001",
                  pinyin: "l\u01CEo"
                }, {
                  chinese: "\u6536",
                  pinyin: "sh\u014Du"
                }, {
                  chinese: "\u57CE\u5E02",
                  pinyin: "ch\xE9ng'sh\xEC"
                }]
              }, {
                names: {
                  en_us: "Writing 5",
                  zh_cn: "\u5199\u5B57\u88685",
                  zh_tw: "\u5BEB\u5B57\u93365"
                },
                words: [{
                  chinese: "\u4E95",
                  pinyin: "j\u01D0ng"
                }, {
                  chinese: "\u89C2",
                  pinyin: "gu\u0101n"
                }, {
                  chinese: "\u6CBF",
                  pinyin: "y\xE1n"
                }, {
                  chinese: "\u7B54",
                  pinyin: "d\xE1"
                }, {
                  chinese: "\u6E34",
                  pinyin: "k\u011B"
                }, {
                  chinese: "\u559D",
                  pinyin: "h\u0113"
                }, {
                  chinese: "\u8BDD",
                  pinyin: "hu\xE0"
                }, {
                  chinese: "\u9645",
                  pinyin: "j\xEC"
                }, {
                  chinese: "\u811A",
                  pinyin: "ji\u01CEo"
                }, {
                  chinese: "\u9762",
                  pinyin: "mi\xE0n"
                }, {
                  chinese: "\u9635",
                  pinyin: "zh\xE8n"
                }, {
                  chinese: "\u6717",
                  pinyin: "l\u01CEng"
                }, {
                  chinese: "\u67AF",
                  pinyin: "k\u016B"
                }, {
                  chinese: "\u5374",
                  pinyin: "qu\xE8"
                }, {
                  chinese: "\u7B2C",
                  pinyin: "d\xEC"
                }, {
                  chinese: "\u5C06",
                  pinyin: "ji\u0101ng"
                }, {
                  chinese: "\u96BE",
                  pinyin: "n\xE1n"
                }, {
                  chinese: "\u7EB7",
                  pinyin: "f\u0113n"
                }, {
                  chinese: "\u68F5",
                  pinyin: "k\u0113"
                }, {
                  chinese: "\u8C22",
                  pinyin: "xi\xE8"
                }, {
                  chinese: "\u60F3",
                  pinyin: "xi\u01CEng"
                }, {
                  chinese: "\u76EF",
                  pinyin: "d\u012Bng"
                }, {
                  chinese: "\u8A00",
                  pinyin: "y\xE1n"
                }, {
                  chinese: "\u90BB",
                  pinyin: "l\xEDn"
                }, {
                  chinese: "\u6CBB",
                  pinyin: "zh\xEC"
                }, {
                  chinese: "\u602A",
                  pinyin: "gu\xE0i"
                }]
              }, {
                names: {
                  en_us: "Writing 6",
                  zh_cn: "\u5199\u5B57\u88686",
                  zh_tw: "\u5BEB\u5B57\u93366"
                },
                words: [{
                  chinese: "\u697C",
                  pinyin: "l\xF3u"
                }, {
                  chinese: "\u5E74\u591C",
                  pinyin: "ni\xE1n'y\xE8"
                }, {
                  chinese: "\u62AB",
                  pinyin: "p\u012B"
                }, {
                  chinese: "\u8F7B",
                  pinyin: "q\u012Bng"
                }, {
                  chinese: "\u5229",
                  pinyin: "l\xEC"
                }, {
                  chinese: "\u6241\u62C5",
                  pinyin: "bi\u01CEn'd\xE0n"
                }, {
                  chinese: "\u5FD7",
                  pinyin: "zh\xEC"
                }, {
                  chinese: "\u4F0D",
                  pinyin: "w\u01D4"
                }, {
                  chinese: "\u5E08",
                  pinyin: "sh\u012B"
                }, {
                  chinese: "\u519B",
                  pinyin: "j\u016Bn"
                }, {
                  chinese: "\u6218\u58EB",
                  pinyin: "zh\xE0n'sh\xEC"
                }, {
                  chinese: "\u5FD8",
                  pinyin: "w\xE0ng"
                }, {
                  chinese: "\u6CFC",
                  pinyin: "p\u014D"
                }, {
                  chinese: "\u5EA6",
                  pinyin: "d\xF9"
                }, {
                  chinese: "\u9F99",
                  pinyin: "l\xF3ng"
                }, {
                  chinese: "\u70AE",
                  pinyin: "p\xE0o"
                }, {
                  chinese: "\u7A7F",
                  pinyin: "chu\u0101n"
                }, {
                  chinese: "\u59CB",
                  pinyin: "sh\u01D0"
                }, {
                  chinese: "\u4EE4",
                  pinyin: "l\xECng"
                }, {
                  chinese: "\u5218",
                  pinyin: "li\xFA"
                }, {
                  chinese: "\u6C11",
                  pinyin: "m\xEDn"
                }, {
                  chinese: "\u53CD",
                  pinyin: "f\u01CEn"
                }, {
                  chinese: "\u6751",
                  pinyin: "c\u016Bn"
                }, {
                  chinese: "\u88AB",
                  pinyin: "b\xE8i"
                }, {
                  chinese: "\u5173",
                  pinyin: "gu\u0101n"
                }, {
                  chinese: "\u9053",
                  pinyin: "d\xE0o"
                }, {
                  chinese: "\u5175",
                  pinyin: "b\u012Bng"
                }]
              }, {
                names: {
                  en_us: "Writing 7",
                  zh_cn: "\u5199\u5B57\u88687",
                  zh_tw: "\u5BEB\u5B57\u93367"
                },
                words: [{
                  chinese: "\u5371",
                  pinyin: "w\u0113i"
                }, {
                  chinese: "\u6562",
                  pinyin: "g\u01CEn"
                }, {
                  chinese: "\u60CA",
                  pinyin: "j\u012Bng"
                }, {
                  chinese: "\u9634",
                  pinyin: "y\u012Bn"
                }, {
                  chinese: "\u4F3C",
                  pinyin: "s\xEC"
                }, {
                  chinese: "\u91CE",
                  pinyin: "y\u011B"
                }, {
                  chinese: "\u82CD\u832B",
                  pinyin: "c\u0101ng'm\xE1ng"
                }, {
                  chinese: "\u4E8E",
                  pinyin: "y\xFA"
                }, {
                  chinese: "\u8BBA",
                  pinyin: "l\xF9n"
                }, {
                  chinese: "\u5CB8",
                  pinyin: "\xE0n"
                }, {
                  chinese: "\u5C4B",
                  pinyin: "w\u016B"
                }, {
                  chinese: "\u5207",
                  pinyin: "qi\u0113"
                }, {
                  chinese: "\u4E45",
                  pinyin: "ji\u01D4"
                }, {
                  chinese: "\u6563\u6B65",
                  pinyin: "s\xE0n'b\xF9"
                }, {
                  chinese: "\u5531",
                  pinyin: "ch\xE0ng"
                }, {
                  chinese: "\u8D76",
                  pinyin: "g\u01CEn"
                }, {
                  chinese: "\u65FA",
                  pinyin: "w\xE0ng"
                }, {
                  chinese: "\u65C1",
                  pinyin: "p\xE1ng"
                }, {
                  chinese: "\u6D51",
                  pinyin: "h\xFAn"
                }, {
                  chinese: "\u8C01",
                  pinyin: "shu\xED"
                }, {
                  chinese: "\u6C7D",
                  pinyin: "q\xEC"
                }]
              }, {
                names: {
                  en_us: "Writing 8",
                  zh_cn: "\u5199\u5B57\u88688",
                  zh_tw: "\u5BEB\u5B57\u93368"
                },
                words: [{
                  chinese: "\u98DF\u7269",
                  pinyin: "sh\xED'w\xF9"
                }, {
                  chinese: "\u7237",
                  pinyin: "y\xE9"
                }, {
                  chinese: "\u5C31",
                  pinyin: "ji\xF9"
                }, {
                  chinese: "\u722A",
                  pinyin: "zh\u01CEo"
                }, {
                  chinese: "\u795E",
                  pinyin: "sh\xE9n"
                }, {
                  chinese: "\u6D3B\u732A",
                  pinyin: "hu\xF3'zh\u016B"
                }, {
                  chinese: "\u6298",
                  pinyin: "zh\xE9"
                }, {
                  chinese: "\u5F20",
                  pinyin: "zh\u0101ng"
                }, {
                  chinese: "\u795D",
                  pinyin: "zh\xF9"
                }, {
                  chinese: "\u624E",
                  pinyin: "zh\u0101"
                }, {
                  chinese: "\u6293",
                  pinyin: "zhu\u0101"
                }, {
                  chinese: "\u5435",
                  pinyin: "ch\u01CEo"
                }, {
                  chinese: "\u4F46",
                  pinyin: "d\xE0n"
                }, {
                  chinese: "\u54ED",
                  pinyin: "k\u016B"
                }, {
                  chinese: "\u8F66",
                  pinyin: "ch\u0113"
                }, {
                  chinese: "\u5F97",
                  pinyin: "d\xE9"
                }, {
                  chinese: "\u79E7\u82D7",
                  pinyin: "y\u0101ng'mi\xE1o"
                }, {
                  chinese: "\u6C57",
                  pinyin: "h\xE0n"
                }, {
                  chinese: "\u6025",
                  pinyin: "j\xED"
                }, {
                  chinese: "\u573A",
                  pinyin: "ch\u01CEng"
                }, {
                  chinese: "\u4F24",
                  pinyin: "sh\u0101ng"
                }, {
                  chinese: "\u8DEF",
                  pinyin: "l\xF9"
                }]
              }, {
                names: {
                  en_us: "Words 1",
                  zh_cn: "\u8BCD\u8BED1",
                  zh_tw: "\u8A5E\u8A9E1"
                },
                words: [{
                  chinese: "\u770B\u89C1",
                  pinyin: "k\xE0n'ji\xE0n"
                }, {
                  chinese: "\u54EA\u91CC",
                  pinyin: "n\u01CE'l\u01D0"
                }, {
                  chinese: "\u90A3\u8FB9",
                  pinyin: "n\xE0'bi\u0101n"
                }, {
                  chinese: "\u5934\u9876",
                  pinyin: "t\xF3u'd\u01D0ng"
                }, {
                  chinese: "\u773C\u775B",
                  pinyin: "y\u01CEn'j\u012Bng"
                }, {
                  chinese: "\u96EA\u767D",
                  pinyin: "xu\u011B'b\xE1i"
                }, {
                  chinese: "\u809A\u76AE",
                  pinyin: "d\xF9'p\xED"
                }, {
                  chinese: "\u5B69\u5B50",
                  pinyin: "h\xE1i'zi"
                }, {
                  chinese: "\u4E24\u4E2A",
                  pinyin: "li\u01CEngg\xE8"
                }, {
                  chinese: "\u5BBD\u5E7F",
                  pinyin: "ku\u0101ngu\u01CEng"
                }, {
                  chinese: "\u8DF3\u9AD8",
                  pinyin: "ti\xE0og\u0101o"
                }, {
                  chinese: "\u5929\u7A7A",
                  pinyin: "ti\u0101n'k\u014Dng"
                }, {
                  chinese: "\u508D\u665A",
                  pinyin: "b\xE0ng'w\u01CEn"
                }, {
                  chinese: "\u4EBA\u4EEC",
                  pinyin: "r\xE9n'men"
                }, {
                  chinese: "\u51AC\u5929",
                  pinyin: "d\u014Dng'ti\u0101n"
                }, {
                  chinese: "\u82B1\u6735",
                  pinyin: "hu\u0101'du\u01D2"
                }, {
                  chinese: "\u5E73\u5E38",
                  pinyin: "p\xEDng'ch\xE1ng"
                }, {
                  chinese: "\u6C5F\u6CB3",
                  pinyin: "ji\u0101ng'h\xE9"
                }, {
                  chinese: "\u6D77\u6D0B",
                  pinyin: "h\u01CEi'y\xE1ng"
                }, {
                  chinese: "\u7530\u5730",
                  pinyin: "ti\xE1n'd\xEC"
                }, {
                  chinese: "\u5DE5\u4F5C",
                  pinyin: "g\u014Dng'zu\xF2"
                }, {
                  chinese: "\u53D8\u5316",
                  pinyin: "bi\xE0nhu\xE0"
                }, {
                  chinese: "\u6781\u574F",
                  pinyin: "j\xEDhu\xE0i"
                }, {
                  chinese: "\u7167\u7247",
                  pinyin: "zh\xE0opi\xE0n"
                }, {
                  chinese: "\u5E26\u7ED9",
                  pinyin: "d\xE0ig\u011Bi"
                }, {
                  chinese: "\u529E\u6CD5",
                  pinyin: "b\xE0n'f\u01CE"
                }, {
                  chinese: "\u5982\u679C",
                  pinyin: "r\xFA'gu\u01D2"
                }, {
                  chinese: "\u957F\u5927",
                  pinyin: "zh\u01CEng'd\xE0"
                }, {
                  chinese: "\u5A03\u5A03",
                  pinyin: "w\xE1'w\xE1"
                }, {
                  chinese: "\u53EA\u8981",
                  pinyin: "zh\u01D0'y\xE0o"
                }, {
                  chinese: "\u76AE\u6BDB",
                  pinyin: "p\xED'm\xE1o"
                }, {
                  chinese: "\u90A3\u91CC",
                  pinyin: "n\xE0'l\u01D0"
                }, {
                  chinese: "\u77E5\u8BC6",
                  pinyin: "zh\u012B'shi"
                }, {
                  chinese: "\u516C\u56ED",
                  pinyin: "g\u014Dngyu\xE1n"
                }, {
                  chinese: "\u5B83\u4EEC",
                  pinyin: "t\u0101'men"
                }, {
                  chinese: "\u5979\u7684",
                  pinyin: "t\u0101de"
                }, {
                  chinese: "\u66F4\u52A0",
                  pinyin: "g\xE8ngji\u0101"
                }, {
                  chinese: "\u56DB\u6D77\u4E3A\u5BB6",
                  pinyin: "s\xEC'h\u01CEi'w\xE9i'ji\u0101"
                }, {
                  chinese: "\u56E0\u4E3A",
                  pinyin: "y\u012Bnw\xE9i"
                }]
              }, {
                names: {
                  en_us: "Words 2",
                  zh_cn: "\u8BCD\u8BED2",
                  zh_tw: "\u8A5E\u8A9E2"
                },
                words: [{
                  chinese: "\u82B1\u56ED",
                  pinyin: "hu\u0101'yu\xE1n"
                }, {
                  chinese: "\u77F3\u6865",
                  pinyin: "sh\xED'qi\xE1o"
                }, {
                  chinese: "\u961F\u65D7",
                  pinyin: "du\xEC'q\xED"
                }, {
                  chinese: "\u94DC\u53F7",
                  pinyin: "t\xF3ng'h\xE0o"
                }, {
                  chinese: "\u6B22\u7B11",
                  pinyin: "hu\u0101n'xi\xE0o"
                }, {
                  chinese: "\u7EA2\u9886\u5DFE",
                  pinyin: "h\xF3ng'l\u01D0ng'j\u012Bn"
                }, {
                  chinese: "\u5230\u5904",
                  pinyin: "d\xE0och\xF9"
                }, {
                  chinese: "\u4EBA\u7FA4",
                  pinyin: "r\xE9n'q\xFAn"
                }, {
                  chinese: "\u6768\u6811",
                  pinyin: "y\xE1ng'sh\xF9"
                }, {
                  chinese: "\u6811\u53F6",
                  pinyin: "sh\xF9'y\xE8"
                }, {
                  chinese: "\u67AB\u6811",
                  pinyin: "f\u0113ng'sh\xF9"
                }, {
                  chinese: "\u677E\u67CF",
                  pinyin: "s\u014Dng'b\u01CEi"
                }, {
                  chinese: "\u6728\u68C9",
                  pinyin: "m\xF9'mi\xE1n"
                }, {
                  chinese: "\u6C34\u6749",
                  pinyin: "shu\u01D0'sh\u0101n"
                }, {
                  chinese: "\u5316\u77F3",
                  pinyin: "hu\xE0'sh\xED"
                }, {
                  chinese: "\u91D1\u6842",
                  pinyin: "j\u012Bn'gu\xEC"
                }, {
                  chinese: "\u58EE\u4E3D",
                  pinyin: "zhu\xE0ngl\xEC"
                }, {
                  chinese: "\u68A7\u6850",
                  pinyin: "w\xFAt\xF3ng"
                }, {
                  chinese: "\u5199\u5B57",
                  pinyin: "xi\u011B'z\xEC"
                }, {
                  chinese: "\u4E1B\u6797",
                  pinyin: "c\xF3ng'l\xEDn"
                }, {
                  chinese: "\u6DF1\u5904",
                  pinyin: "sh\u0113n'ch\xF9"
                }, {
                  chinese: "\u7AF9\u6797",
                  pinyin: "zh\xFAl\xEDn"
                }, {
                  chinese: "\u718A\u732B",
                  pinyin: "xi\xF3ng'm\u0101o"
                }, {
                  chinese: "\u670B\u53CB",
                  pinyin: "p\xE9ng'you"
                }, {
                  chinese: "\u5531\u6B4C",
                  pinyin: "ch\xE0ng'g\u0113"
                }, {
                  chinese: "\u56DB\u5B63",
                  pinyin: "s\xEC'j\xEC"
                }, {
                  chinese: "\u519C\u4E8B",
                  pinyin: "n\xF3ng'sh\xEC"
                }, {
                  chinese: "\u6708\u5149",
                  pinyin: "yu\xE8'gu\u0101ng"
                }, {
                  chinese: "\u8F9B\u82E6",
                  pinyin: "x\u012Bn'k\u01D4"
                }, {
                  chinese: "\u68C9\u8863",
                  pinyin: "mi\xE1n'y\u012B"
                }, {
                  chinese: "\u5439\u98CE",
                  pinyin: "chu\u012Bf\u0113ng"
                }, {
                  chinese: "\u5316\u80A5",
                  pinyin: "hu\xE0f\xE9i"
                }, {
                  chinese: "\u519C\u5FD9",
                  pinyin: "n\xF3ngm\xE1ng"
                }, {
                  chinese: "\u5F52\u6765",
                  pinyin: "gu\u012Bl\xE1i"
                }, {
                  chinese: "\u56DE\u5F52",
                  pinyin: "hu\xEDgu\u012B"
                }, {
                  chinese: "\u7231\u6234",
                  pinyin: "\xE0id\xE0i"
                }, {
                  chinese: "\u6234\u7EA2\u9886\u5DFE",
                  pinyin: "d\xE0ih\xF3ngl\u01D0ngj\u012Bn"
                }, {
                  chinese: "\u516D\u5341\u4E5D",
                  pinyin: "li\xF9sh\xEDji\u01D4"
                }, {
                  chinese: "\u62AB\u661F\u6234\u6708",
                  pinyin: "p\u012Bx\u012Bngd\xE0iyu\xE8"
                }]
              }, {
                names: {
                  en_us: "Words 3",
                  zh_cn: "\u8BCD\u8BED3",
                  zh_tw: "\u8A5E\u8A9E3"
                },
                words: [{
                  chinese: "\u4E00\u540C",
                  pinyin: "y\xEC't\xF3ng"
                }, {
                  chinese: "\u67F1\u5B50",
                  pinyin: "zh\xF9'zi"
                }, {
                  chinese: "\u4E00\u8FB9",
                  pinyin: "y\xEC'bi\u0101n"
                }, {
                  chinese: "\u5230\u5E95",
                  pinyin: "d\xE0o'd\u01D0"
                }, {
                  chinese: "\u79E4\u6746",
                  pinyin: "ch\xE8ng'g\u01CEn"
                }, {
                  chinese: "\u529B\u6C14",
                  pinyin: "l\xEC'qi"
                }, {
                  chinese: "\u51FA\u6765",
                  pinyin: "ch\u016B'l\xE1i"
                }, {
                  chinese: "\u8239\u8EAB",
                  pinyin: "chu\xE1n'sh\u0113n"
                }, {
                  chinese: "\u77F3\u5934",
                  pinyin: "sh\xED'tou"
                }, {
                  chinese: "\u5730\u65B9",
                  pinyin: "d\xEC'f\u0101ng"
                }, {
                  chinese: "\u679C\u7136",
                  pinyin: "gu\u01D2'r\xE1n"
                }, {
                  chinese: "\u79F0\u547C",
                  pinyin: "ch\u0113ng'hu"
                }, {
                  chinese: "\u505A\u4E8B",
                  pinyin: "zu\xF2sh\xEC"
                }, {
                  chinese: "\u5C81\u6708",
                  pinyin: "su\xEC'yu\xE8"
                }, {
                  chinese: "\u7AD9\u7ACB",
                  pinyin: "zh\xE0nl\xEC"
                }, {
                  chinese: "\u8BC4\u5956",
                  pinyin: "p\xEDng'ji\u01CEng"
                }, {
                  chinese: "\u65F6\u95F4",
                  pinyin: "sh\xED'ji\u0101n"
                }, {
                  chinese: "\u62A5\u7EB8",
                  pinyin: "b\xE0o'zh\u01D0"
                }, {
                  chinese: "\u4E8B\u60C5",
                  pinyin: "sh\xEC'qing"
                }, {
                  chinese: "\u597D\u4E8B",
                  pinyin: "h\u01CE'osh\xEC"
                }, {
                  chinese: "\u574F\u4E8B",
                  pinyin: "hu\xE0i'sh\xEC"
                }, {
                  chinese: "\u53E6\u5916",
                  pinyin: "l\xECng'w\xE0i"
                }, {
                  chinese: "\u4E00\u5E76",
                  pinyin: "y\xED'b\xECng"
                }, {
                  chinese: "\u6765\u4E0D\u53CA",
                  pinyin: "l\xE1i'bu'j\xED"
                }, {
                  chinese: "\u6349\u62FF",
                  pinyin: "zhu\u014D'n\xE1"
                }, {
                  chinese: "\u62FF\u4E1C\u897F",
                  pinyin: "n\xE1d\u014Dngx\u012B"
                }, {
                  chinese: "\u4E00\u5E45\u753B",
                  pinyin: "y\u012B'f\xFA'hu\xE0"
                }, {
                  chinese: "\u4E00\u5C01\u4FE1",
                  pinyin: "y\u012B'f\u0113ng'x\xECn"
                }, {
                  chinese: "\u51FA\u56FD",
                  pinyin: "ch\u016B'gu\xF3"
                }, {
                  chinese: "\u4ECA\u5929",
                  pinyin: "j\u012Bn'ti\u0101n"
                }, {
                  chinese: "\u5F00\u5FC3",
                  pinyin: "k\u0101i'x\u012Bn"
                }, {
                  chinese: "\u4EE5\u524D",
                  pinyin: "y\u01D0'qi\xE1n"
                }, {
                  chinese: "\u8FD8\u6709",
                  pinyin: "h\xE1i'y\u01D2u"
                }, {
                  chinese: "\u53F0\u706F",
                  pinyin: "t\xE1i'd\u0113ng"
                }, {
                  chinese: "\u8FD9\u65F6",
                  pinyin: "zh\xE8'sh\xED"
                }, {
                  chinese: "\u9633\u5149",
                  pinyin: "y\xE1ng'gu\u0101ng"
                }, {
                  chinese: "\u7535\u5F71",
                  pinyin: "di\xE0n'y\u01D0ng"
                }, {
                  chinese: "\u660E\u4EAE",
                  pinyin: "m\xEDng'li\xE0ng"
                }, {
                  chinese: "\u6545\u4E8B",
                  pinyin: "g\xF9'shi"
                }, {
                  chinese: "\u5706\u73E0\u7B14",
                  pinyin: "yu\xE1n'zh\u016B'b\u01D0"
                }, {
                  chinese: "\u5934\u53D1",
                  pinyin: "t\xF3u'f\xE0"
                }, {
                  chinese: "\u6C99\u53D1",
                  pinyin: "sh\u0101f\u0101"
                }, {
                  chinese: "\u7A97\u5916",
                  pinyin: "chu\u0101ng'w\xE0i"
                }, {
                  chinese: "\u54C4\u4EBA",
                  pinyin: "h\u01D2ng'r\xE9n"
                }, {
                  chinese: "\u6C89\u601D",
                  pinyin: "ch\xE9n's\u012B"
                }, {
                  chinese: "\u9996\u5148",
                  pinyin: "sh\u01D2u'xi\u0101n"
                }, {
                  chinese: "\u95ED\u773C",
                  pinyin: "b\xEC'y\u01CEn"
                }, {
                  chinese: "\u5706\u8138",
                  pinyin: "yu\xE1n'li\u01CEn"
                }, {
                  chinese: "\u7EA2\u7740\u8138",
                  pinyin: "h\xF3ngzheli\u01CEn"
                }, {
                  chinese: "\u5173\u95ED",
                  pinyin: "gu\u0101nb\xEC"
                }, {
                  chinese: "\u62FF\u7740",
                  pinyin: "n\xE1zhe"
                }, {
                  chinese: "\u505A\u624B\u5DE5",
                  pinyin: "zu\xF2'sh\u01D2u'g\u014Dng"
                }, {
                  chinese: "\u4E00\u652F\u7B14",
                  pinyin: "y\u012B'zh\u012B'b\u01D0"
                }]
              }, {
                names: {
                  en_us: "Words 4",
                  zh_cn: "\u8BCD\u8BED4",
                  zh_tw: "\u8A5E\u8A9E4"
                },
                words: [{
                  chinese: "\u4F9D\u7167",
                  pinyin: "y\u012Bzh\xE0o"
                }, {
                  chinese: "\u5C3D\u5934",
                  pinyin: "j\xECnt\xF3u"
                }, {
                  chinese: "\u9EC4\u6CB3",
                  pinyin: "hu\xE1ngh\xE9"
                }, {
                  chinese: "\u5C42\u6B21",
                  pinyin: "c\xE9ngc\xEC"
                }, {
                  chinese: "\u9999\u7089",
                  pinyin: "xi\u0101ngl\xFA"
                }, {
                  chinese: "\u9999\u70DF",
                  pinyin: "xi\u0101ngy\u0101n"
                }, {
                  chinese: "\u6302\u4F4F",
                  pinyin: "gu\xE0zh\xF9"
                }, {
                  chinese: "\u540D\u5C71\u5927\u5DDD",
                  pinyin: "m\xEDngsh\u0101nd\xE0chu\u0101n"
                }, {
                  chinese: "\u9EC4\u5C71",
                  pinyin: "hu\xE1ng'sh\u0101n"
                }, {
                  chinese: "\u5357\u90E8",
                  pinyin: "n\xE1n'b\xF9"
                }, {
                  chinese: "\u90A3\u4E9B",
                  pinyin: "n\xE0'xi\u0113"
                }, {
                  chinese: "\u5C71\u9876",
                  pinyin: "sh\u0101n'd\u01D0ng"
                }, {
                  chinese: "\u4E91\u6D77",
                  pinyin: "y\xFAn'h\u01CEi"
                }, {
                  chinese: "\u5DE8\u77F3",
                  pinyin: "j\xF9'sh\xED"
                }, {
                  chinese: "\u524D\u65B9",
                  pinyin: "qi\xE1n'f\u0101ng"
                }, {
                  chinese: "\u6BCF\u5F53",
                  pinyin: "m\u011Bi'd\u0101ng"
                }, {
                  chinese: "\u5B83\u4EEC",
                  pinyin: "t\u0101'men"
                }, {
                  chinese: "\u90E8\u4F4D",
                  pinyin: "b\xF9w\xE8i"
                }, {
                  chinese: "\u65B9\u5411",
                  pinyin: "f\u0101ngxi\xE0ng"
                }, {
                  chinese: "\u5347\u65D7",
                  pinyin: "sh\u0113ngq\xED"
                }, {
                  chinese: "\u72D7\u718A",
                  pinyin: "g\u01D2uxi\xF3ng"
                }, {
                  chinese: "\u4E00\u52A8\u4E0D\u52A8",
                  pinyin: "y\u012B'd\xF2ng'bu'd\xF2ng"
                }, {
                  chinese: "\u7FA4\u5C71",
                  pinyin: "q\xFAn'sh\u0101n"
                }, {
                  chinese: "\u6811\u6728",
                  pinyin: "sh\xF9'm\xF9"
                }, {
                  chinese: "\u4E2D\u592E",
                  pinyin: "zh\u014Dng'y\u0101ng"
                }, {
                  chinese: "\u7F8E\u4E3D",
                  pinyin: "m\u011Bi'l\xEC"
                }, {
                  chinese: "\u706F\u5149",
                  pinyin: "d\u0113ng'gu\u0101ng"
                }, {
                  chinese: "\u4E2D\u5348",
                  pinyin: "zh\u014Dng'w\u01D4"
                }, {
                  chinese: "\u5C55\u73B0",
                  pinyin: "zh\u01CEn'xi\xE0n"
                }, {
                  chinese: "\u98CE\u5149",
                  pinyin: "f\u0113ng'gu\u0101ng"
                }, {
                  chinese: "\u53F0\u6E7E",
                  pinyin: "t\xE1iw\u0101n"
                }, {
                  chinese: "\u91D1\u5149\u95EA\u95EA",
                  pinyin: "j\u012Bn'gu\u0101ng'sh\u01CEn'sh\u01CEn"
                }, {
                  chinese: "\u540D\u80DC\u53E4\u8FF9",
                  pinyin: "m\xEDng'sh\xE8ng'g\u01D4'j\xEC"
                }, {
                  chinese: "\u51FA\u4EA7",
                  pinyin: "ch\u016B'ch\u01CEn"
                }, {
                  chinese: "\u6C34\u679C",
                  pinyin: "shu\u01D0'gu\u01D2"
                }, {
                  chinese: "\u6708\u4EFD",
                  pinyin: "yu\xE8'f\xE8n"
                }, {
                  chinese: "\u5C71\u5761",
                  pinyin: "sh\u0101np\u014D"
                }, {
                  chinese: "\u679D\u53F6",
                  pinyin: "zh\u012B'y\xE8"
                }, {
                  chinese: "\u5C55\u5F00",
                  pinyin: "zh\u01CEn'k\u0101i"
                }, {
                  chinese: "\u597D\u5BA2",
                  pinyin: "h\xE0o'k\xE8"
                }, {
                  chinese: "\u8001\u4E61",
                  pinyin: "l\u01CEo'xi\u0101ng"
                }, {
                  chinese: "\u57CE\u5E02",
                  pinyin: "ch\xE9ng'sh\xEC"
                }, {
                  chinese: "\u7A7A\u6C14",
                  pinyin: "k\u014Dng'q\xEC"
                }, {
                  chinese: "\u6C34\u5206",
                  pinyin: "shu\u01D0'f\xE8n"
                }, {
                  chinese: "\u8D77\u6765",
                  pinyin: "q\u01D0'l\xE1i"
                }, {
                  chinese: "\u6536\u6210",
                  pinyin: "sh\u014Duch\xE9ng"
                }, {
                  chinese: "\u6536\u5165",
                  pinyin: "sh\u014Dur\xF9"
                }, {
                  chinese: "\u4E00\u8D77",
                  pinyin: "y\xECq\u01D0"
                }, {
                  chinese: "\u4E94\u5149\u5341\u8272",
                  pinyin: "w\u01D4'gu\u0101ng'sh\xED's\xE8"
                }, {
                  chinese: "\u5C71\u57CE",
                  pinyin: "sh\u0101n'ch\xE9ng"
                }]
              }, {
                names: {
                  en_us: "Words 5",
                  zh_cn: "\u8BCD\u8BED5",
                  zh_tw: "\u8A5E\u8A9E5"
                },
                words: [{
                  chinese: "\u5750\u4E95\u89C2\u5929",
                  pinyin: "zu\xF2'j\u01D0ng'gu\u0101n'ti\u0101n"
                }, {
                  chinese: "\u4E95\u6CBF",
                  pinyin: "j\u01D0ng'y\xE1n"
                }, {
                  chinese: "\u56DE\u7B54",
                  pinyin: "hu\xED'd\xE1"
                }, {
                  chinese: "\u53E3\u6E34",
                  pinyin: "k\u01D2u'k\u011B"
                }, {
                  chinese: "\u5927\u8BDD",
                  pinyin: "d\xE0'hu\xE0"
                }, {
                  chinese: "\u4E95\u53E3",
                  pinyin: "j\u01D0ngk\u01D2u"
                }, {
                  chinese: "\u65E0\u8FB9\u65E0\u9645",
                  pinyin: "w\xFA'bi\u0101n'w\xFA'j\xEC"
                }, {
                  chinese: "\u559D\u6C34",
                  pinyin: "h\u0113shu\u01D0"
                }, {
                  chinese: "\u5C71\u811A",
                  pinyin: "sh\u0101n'ji\u01CEo"
                }, {
                  chinese: "\u5F53\u4F5C",
                  pinyin: "d\xE0ng'zu\xF2"
                }, {
                  chinese: "\u524D\u9762",
                  pinyin: "qi\xE1n'mian"
                }, {
                  chinese: "\u6674\u6717",
                  pinyin: "q\xEDng'l\u01CEng"
                }, {
                  chinese: "\u67AF\u8349",
                  pinyin: "k\u016B'c\u01CEo"
                }, {
                  chinese: "\u6B63\u597D",
                  pinyin: "zh\xE8ng'h\u01CEo"
                }, {
                  chinese: "\u6E05\u65E9",
                  pinyin: "q\u012Bng'z\u01CEo"
                }, {
                  chinese: "\u73B0\u5728",
                  pinyin: "xi\xE0n'z\xE0i"
                }, {
                  chinese: "\u5C06\u6765",
                  pinyin: "ji\u0101ng'l\xE1i"
                }, {
                  chinese: "\u96BE\u8FC7",
                  pinyin: "n\xE1n'gu\xF2"
                }, {
                  chinese: "\u5927\u96EA\u7EB7\u98DE",
                  pinyin: "d\xE0'xu\u011B'f\u0113n'f\u0113i"
                }, {
                  chinese: "\u679D\u5934",
                  pinyin: "zh\u012B't\xF3u"
                }, {
                  chinese: "\u5374\u662F",
                  pinyin: "qu\xE8'sh\xEC"
                }, {
                  chinese: "\u4E00\u9635\u98CE",
                  pinyin: "y\xED'zh\xE8n'f\u0113ng"
                }, {
                  chinese: "\u7B2C\u4E00",
                  pinyin: "d\xECy\u012B"
                }, {
                  chinese: "\u4ECE\u524D",
                  pinyin: "c\xF3ng'qi\xE1n"
                }, {
                  chinese: "\u7EC6\u957F",
                  pinyin: "x\xEC'ch\xE1ng"
                }, {
                  chinese: "\u53EF\u7231",
                  pinyin: "k\u011B'\xE0i"
                }, {
                  chinese: "\u6BCF\u5929",
                  pinyin: "m\u011Bi'ti\u0101n"
                }, {
                  chinese: "\u81EA\u8A00\u81EA\u8BED",
                  pinyin: "z\xEC'y\xE1n'z\xEC'y\u01D4"
                }, {
                  chinese: "\u5357\u74DC",
                  pinyin: "n\xE1n'gu\u0101"
                }, {
                  chinese: "\u90BB\u5C45",
                  pinyin: "l\xEDn'j\u016B"
                }, {
                  chinese: "\u5947\u602A",
                  pinyin: "q\xED'gu\xE0i"
                }, {
                  chinese: "\u4E00\u68F5\u6811",
                  pinyin: "y\u012Bk\u0113sh\xF9"
                }, {
                  chinese: "\u8C22\u8C22",
                  pinyin: "xi\xE8'xi\xE8"
                }, {
                  chinese: "\u60F3\u6CD5",
                  pinyin: "xi\u01CEngf\u01CE"
                }, {
                  chinese: "\u76EF\u7740",
                  pinyin: "d\u012Bngzhe"
                }, {
                  chinese: "\u6CBB\u75C5",
                  pinyin: "zh\xECb\xECng"
                }]
              }, {
                names: {
                  en_us: "Words 6",
                  zh_cn: "\u8BCD\u8BED6",
                  zh_tw: "\u8A5E\u8A9E6"
                },
                words: [{
                  chinese: "\u516B\u89D2\u697C",
                  pinyin: "b\u0101'ji\u01CEo'l\xF3u"
                }, {
                  chinese: "\u6DF1\u591C",
                  pinyin: "sh\u0113n'y\xE8"
                }, {
                  chinese: "\u519B\u8863",
                  pinyin: "j\u016Bn'y\u012B"
                }, {
                  chinese: "\u661F\u661F\u4E4B\u706B",
                  pinyin: "x\u012Bng'x\u012Bng'zh\u012B'hu\u01D2"
                }, {
                  chinese: "\u6C89\u601D",
                  pinyin: "ch\xE9n's\u012B"
                }, {
                  chinese: "\u80DC\u5229",
                  pinyin: "sh\xE8ng'l\xEC"
                }, {
                  chinese: "\u8FC7\u5E74",
                  pinyin: "gu\xF2ni\xE1n"
                }, {
                  chinese: "\u8F7B\u677E",
                  pinyin: "q\u012Bngs\u014Dng"
                }, {
                  chinese: "\u62AB\u661F\u6234\u6708",
                  pinyin: "p\u012Bx\u012Bngd\xE0iyu\xE8"
                }, {
                  chinese: "\u6241\u62C5",
                  pinyin: "bi\u01CEn'dan"
                }, {
                  chinese: "\u540C\u5FD7",
                  pinyin: "t\xF3ng'zh\xEC"
                }, {
                  chinese: "\u5E26\u9886",
                  pinyin: "d\xE0i'l\u01D0ng"
                }, {
                  chinese: "\u961F\u4F0D",
                  pinyin: "du\xEC'w\u01D4"
                }, {
                  chinese: "\u4F1A\u5E08",
                  pinyin: "hu\xEC'sh\u012B"
                }, {
                  chinese: "\u7EA2\u519B",
                  pinyin: "h\xF3ng'j\u016Bn"
                }, {
                  chinese: "\u6765\u56DE",
                  pinyin: "l\xE1i'hu\xED"
                }, {
                  chinese: "\u6218\u58EB",
                  pinyin: "zh\xE0n'sh\xEC"
                }, {
                  chinese: "\u767D\u5929",
                  pinyin: "b\xE1i'ti\u0101n"
                }, {
                  chinese: "\u8D77\u6765",
                  pinyin: "q\u01D0'l\xE1i"
                }, {
                  chinese: "\u96BE\u5FD8",
                  pinyin: "n\xE1n'w\xE0ng"
                }, {
                  chinese: "\u9F99\u8239",
                  pinyin: "l\xF3ng'chu\xE1n"
                }, {
                  chinese: "\u82B1\u70AE",
                  pinyin: "hu\u0101p\xE0o"
                }, {
                  chinese: "\u6CFC\u6C34\u8282",
                  pinyin: "p\u014D'shu\u01D0'ji\xE9"
                }, {
                  chinese: "\u6B22\u547C",
                  pinyin: "hu\u0101n'h\u016B"
                }, {
                  chinese: "\u4EBA\u7FA4",
                  pinyin: "r\xE9n'q\xFAn"
                }, {
                  chinese: "\u6B22\u4E50",
                  pinyin: "hu\u0101n'l\xE8"
                }, {
                  chinese: "\u5F00\u59CB",
                  pinyin: "k\u0101i'sh\u01D0"
                }, {
                  chinese: "\u591A\u4E48",
                  pinyin: "du\u014D'me"
                }, {
                  chinese: "\u67CF\u6811\u679D",
                  pinyin: "b\u01CEi'sh\xF9'zh\u012B"
                }, {
                  chinese: "\u4E00\u5E74\u4E00\u5EA6",
                  pinyin: "y\xEC'ni\xE1n'y\xED'd\xF9"
                }, {
                  chinese: "\u56DB\u9762\u516B\u65B9",
                  pinyin: "s\xEC'mi\xE0n'b\u0101'f\u0101ng"
                }, {
                  chinese: "\u7A7F\u6234",
                  pinyin: "chu\u0101nd\xE0i"
                }, {
                  chinese: "\u53E3\u4EE4",
                  pinyin: "k\u01D2ul\xECng"
                }, {
                  chinese: "\u5E74\u8F7B",
                  pinyin: "ni\xE1n'q\u012Bng"
                }, {
                  chinese: "\u6751\u5B50",
                  pinyin: "c\u016Bn'zi"
                }, {
                  chinese: "\u77E5\u9053",
                  pinyin: "zh\u012B'd\xE0o"
                }, {
                  chinese: "\u5E7F\u573A",
                  pinyin: "gu\u01CEng'ch\u01CEng"
                }, {
                  chinese: "\u6C11\u5175",
                  pinyin: "m\xEDn'b\u012Bng"
                }, {
                  chinese: "\u59D3\u5218",
                  pinyin: "x\xECngli\xFA"
                }, {
                  chinese: "\u9020\u53CD",
                  pinyin: "z\xE0of\u01CEn"
                }, {
                  chinese: "\u5173\u95ED",
                  pinyin: "gu\u0101nb\xEC"
                }, {
                  chinese: "\u88AB\u5B50",
                  pinyin: "b\xE8izi"
                }, {
                  chinese: "\u68C9\u88AB",
                  pinyin: "mi\xE1nb\xE8i"
                }, {
                  chinese: "\u82B1\u5730",
                  pinyin: "hu\u0101'd\xEC"
                }]
              }, {
                names: {
                  en_us: "Words 7",
                  zh_cn: "\u8BCD\u8BED7",
                  zh_tw: "\u8A5E\u8A9E7"
                },
                words: [{
                  chinese: "\u5B89\u5371",
                  pinyin: "\u0101nw\u0113i"
                }, {
                  chinese: "\u4E0D\u6562",
                  pinyin: "b\xF9g\u01CEn"
                }, {
                  chinese: "\u60CA\u5413",
                  pinyin: "j\u012Bngxi\xE0"
                }, {
                  chinese: "\u9634\u51C9",
                  pinyin: "y\u012Bnli\xE1ng"
                }, {
                  chinese: "\u76F8\u4F3C\u91CE\u5916",
                  pinyin: "xi\u0101ngs\xECy\u011Bw\xE0i"
                }, {
                  chinese: "\u7530\u91CE",
                  pinyin: "ti\xE1n'y\u011B"
                }, {
                  chinese: "\u82CD\u5929",
                  pinyin: "c\u0101ngti\u0101n"
                }, {
                  chinese: "\u832B\u7136",
                  pinyin: "m\xE1ngr\xE1n"
                }, {
                  chinese: "\u767D\u53D1\u82CD\u82CD",
                  pinyin: "b\xE1if\xE0c\u0101ngc\u0101ng"
                }, {
                  chinese: "\u767D\u832B\u832B",
                  pinyin: "b\xE1im\xE1ngm\xE1ng"
                }, {
                  chinese: "\u4E8E\u662F",
                  pinyin: "y\xFA'sh\xEC"
                }, {
                  chinese: "\u65E0\u8BBA",
                  pinyin: "w\xFA'l\xF9n"
                }, {
                  chinese: "\u8239\u53EA",
                  pinyin: "chu\xE1n'zh\u012B"
                }, {
                  chinese: "\u8FDE\u540C",
                  pinyin: "li\xE1n't\xF3ng"
                }, {
                  chinese: "\u5CB8\u8FB9",
                  pinyin: "\xE0n'bi\u0101n"
                }, {
                  chinese: "\u540C\u65F6",
                  pinyin: "t\xF3ng'sh\xED"
                }, {
                  chinese: "\u623F\u5C4B",
                  pinyin: "f\xE1ng'w\u016B"
                }, {
                  chinese: "\u4E00\u5207",
                  pinyin: "y\xED'qi\xE8"
                }, {
                  chinese: "\u4E0D\u4E45",
                  pinyin: "b\xF9'ji\u01D4"
                }, {
                  chinese: "\u51FA\u73B0",
                  pinyin: "ch\u016B'xi\xE0n"
                }, {
                  chinese: "\u6563\u6B65",
                  pinyin: "s\xE0n'b\xF9"
                }, {
                  chinese: "\u7A7A\u5730",
                  pinyin: "k\xF2ng'd\xEC"
                }, {
                  chinese: "\u5531\u6B4C",
                  pinyin: "ch\xE0ng'g\u0113"
                }, {
                  chinese: "\u56DE\u5BB6",
                  pinyin: "hu\xED'ji\u0101"
                }, {
                  chinese: "\u8D76\u5FEB",
                  pinyin: "g\u01CEn'ku\xE0i"
                }, {
                  chinese: "\u65C1\u8FB9",
                  pinyin: "p\xE1ng'bi\u0101n"
                }, {
                  chinese: "\u706B\u661F",
                  pinyin: "hu\u01D2'x\u012Bng"
                }, {
                  chinese: "\u8FDE\u5FD9",
                  pinyin: "li\xE1n'm\xE1ng"
                }, {
                  chinese: "\u6D51\u8EAB",
                  pinyin: "h\xFAn'sh\u0113n"
                }, {
                  chinese: "\u65F6\u5019",
                  pinyin: "sh\xED'hou"
                }, {
                  chinese: "\u8C22\u8C22",
                  pinyin: "xi\xE8'xi\xE8"
                }, {
                  chinese: "\u6C34\u6C7D",
                  pinyin: "shu\u01D0'q\xEC"
                }, {
                  chinese: "\u5174\u65FA",
                  pinyin: "x\u012Bngw\xE0ng"
                }, {
                  chinese: "\u8C01\u7684",
                  pinyin: "shu\xEDde"
                }]
              }, {
                names: {
                  en_us: "Words 8",
                  zh_cn: "\u8BCD\u8BED8",
                  zh_tw: "\u8A5E\u8A9E8"
                },
                words: [{
                  chinese: "\u98DF\u7269",
                  pinyin: "sh\xED'w\xF9"
                }, {
                  chinese: "\u8EAB\u8FB9",
                  pinyin: "sh\u0113n'bi\u0101n"
                }, {
                  chinese: "\u722A\u5B50",
                  pinyin: "zhu\u01CE'zi"
                }, {
                  chinese: "\u9762\u524D",
                  pinyin: "mi\xE0n'qi\xE1n"
                }, {
                  chinese: "\u91CE\u732A",
                  pinyin: "y\u011B'zh\u016B"
                }, {
                  chinese: "\u4E3A\u4EC0\u4E48",
                  pinyin: "w\xE8i'sh\xE9n'me"
                }, {
                  chinese: "\u5F80\u5E38\u8EAB\u540E",
                  pinyin: "w\u01CEngch\xE1ngsh\u0113nh\xF2u"
                }, {
                  chinese: "\u7237\u7237",
                  pinyin: "y\xE9ye"
                }, {
                  chinese: "\u795E\u6C14\u6D3B\u73B0",
                  pinyin: "sh\xE9n'q\xEC'hu\xF3'xi\xE0n"
                }, {
                  chinese: "\u4FE1\u4EE5\u4E3A\u771F",
                  pinyin: "x\xECn'y\u01D0'w\xE9i'zh\u0113n"
                }, {
                  chinese: "\u5C31\u662F",
                  pinyin: "ji\xF9sh\xEC"
                }, {
                  chinese: "\u7EB8\u8239",
                  pinyin: "zh\u01D0'chu\xE1n"
                }, {
                  chinese: "\u677E\u679C",
                  pinyin: "s\u014Dng'gu\u01D2"
                }, {
                  chinese: "\u7EB8\u6761",
                  pinyin: "zh\u01D0'ti\xE1o"
                }, {
                  chinese: "\u53EF\u662F",
                  pinyin: "k\u011B'sh\xEC"
                }, {
                  chinese: "\u4F46\u662F",
                  pinyin: "d\xE0n'sh\xEC"
                }, {
                  chinese: "\u5C4B\u9876",
                  pinyin: "w\u016B'd\u01D0ng"
                }, {
                  chinese: "\u548C\u597D",
                  pinyin: "h\xE9'h\u01CEo"
                }, {
                  chinese: "\u6298\u7EB8",
                  pinyin: "zh\xE9zh\u01D0"
                }, {
                  chinese: "\u7EB8\u5F20",
                  pinyin: "zh\u01D0zh\u0101ng"
                }, {
                  chinese: "\u795D\u798F",
                  pinyin: "zh\xF9f\xFA"
                }, {
                  chinese: "\u5305\u624E",
                  pinyin: "b\u0101oz\u0101"
                }, {
                  chinese: "\u6293\u4F4F",
                  pinyin: "zhu\u0101zh\xF9"
                }, {
                  chinese: "\u5F88\u5435",
                  pinyin: "h\u011Bnch\u01CEo"
                }, {
                  chinese: "\u54ED\u58F0",
                  pinyin: "k\u016Bsh\u0113ng"
                }, {
                  chinese: "\u7530\u91CE",
                  pinyin: "ti\xE1n'y\u011B"
                }, {
                  chinese: "\u98CE\u8F66",
                  pinyin: "f\u0113ng'ch\u0113"
                }, {
                  chinese: "\u98DE\u5FEB",
                  pinyin: "f\u0113i'ku\xE0i"
                }, {
                  chinese: "\u79E7\u82D7",
                  pinyin: "y\u0101ng'mi\xE1o"
                }, {
                  chinese: "\u4E0D\u4F4F",
                  pinyin: "b\xFA'zh\xF9"
                }, {
                  chinese: "\u70B9\u5934",
                  pinyin: "di\u01CEn't\xF3u"
                }, {
                  chinese: "\u6025\u5FD9",
                  pinyin: "j\xED'm\xE1ng"
                }, {
                  chinese: "\u4F24\u5FC3",
                  pinyin: "sh\u0101ng'x\u012Bn"
                }, {
                  chinese: "\u8DEF\u8FB9",
                  pinyin: "l\xF9'bi\u0101n"
                }, {
                  chinese: "\u751F\u6C14",
                  pinyin: "sh\u0113ng'q\xEC"
                }, {
                  chinese: "\u5F97\u5230",
                  pinyin: "d\xE9d\xE0o"
                }, {
                  chinese: "\u6C57\u6C34",
                  pinyin: "h\xE0nshu\u01D0"
                }, {
                  chinese: "\u573A\u5730",
                  pinyin: "ch\u01CEngd\xEC"
                }, {
                  chinese: "\u8DD1\u5F97\u5F88\u5FEB",
                  pinyin: "p\u01CEod\xE9h\u011Bnku\xE0i"
                }, {
                  chinese: "\u5F80\u5E38",
                  pinyin: "w\u01CEng'ch\xE1ng"
                }, {
                  chinese: "\u8EAB\u540E",
                  pinyin: "sh\u0113n'h\xF2u"
                }]
              }]
            });
          };

          return _this;
        }

        return CopybookBase;
      }(BrickBase);

      exports_1("CopybookBase", CopybookBase);
    }
  };
});
__exp = __instantiate("copybookBase", false);
var CopybookBase = __exp["CopybookBase"];