var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("copybookBase", [], function (exports_1, context_1) {
    "use strict";
    var CopybookBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CopybookBase = (function (_super) {
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
                            },
                            {
                                value: "chineseToPinyin",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Look at Chinese characters and write pinyin",
                                    zh_cn: "\u770B\u6C49\u5B57\u5199\u62FC\u97F3",
                                    zh_tw: "\u770B\u6F22\u5B57\u5BEB\u62FC\u97F3"
                                })
                            },
                        ];
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
                            },
                            {
                                value: "manualInput",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Manual input",
                                    zh_cn: "\u624B\u52A8\u8F93\u5165",
                                    zh_tw: "\u624B\u52D5\u8F38\u5165"
                                })
                            },
                        ];
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
                            },
                            {
                                value: "middle",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Middle",
                                    zh_cn: "\u4E2D",
                                    zh_tw: "\u4E2D"
                                })
                            },
                            {
                                value: "big",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Big",
                                    zh_cn: "\u5927",
                                    zh_tw: "\u5927"
                                })
                            },
                        ];
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
                            },
                            {
                                value: "redOnBlack",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Black line and red characters.",
                                    zh_cn: "\u9ED1\u7EBF\u7EA2\u5B57",
                                    zh_tw: "\u9ED1\u7DDA\u7D05\u5B57"
                                })
                            },
                            {
                                value: "blackOnRed",
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Red line and black characters.",
                                    zh_cn: "\u7EA2\u7EBF\u9ED1\u5B57",
                                    zh_tw: "\u7D05\u7DDA\u9ED1\u5B57"
                                })
                            },
                        ];
                        _this.initRadioGroupWithLabelByStringValue(radiosInfoArray, "color", _this.colorElementArray, wrapLabelI18n);
                    };
                    _this.pinyinArrayWithoutTone = [
                        "chuɑnɡ",
                        "shuɑnɡ",
                        "zhuɑnɡ",
                        "chɑnɡ",
                        "chenɡ",
                        "chonɡ",
                        "chuɑi",
                        "chuɑn",
                        "ɡuɑnɡ",
                        "huɑnɡ",
                        "jiɑnɡ",
                        "jionɡ",
                        "kuɑnɡ",
                        "liɑnɡ",
                        "niɑnɡ",
                        "qiɑnɡ",
                        "qionɡ",
                        "shɑnɡ",
                        "shenɡ",
                        "shuɑi",
                        "shuɑn",
                        "xiɑnɡ",
                        "xionɡ",
                        "zhɑnɡ",
                        "zhenɡ",
                        "zhonɡ",
                        "zhuɑi",
                        "zhuɑn",
                        "bɑnɡ",
                        "benɡ",
                        "biɑn",
                        "biɑo",
                        "binɡ",
                        "cɑnɡ",
                        "cenɡ",
                        "chɑi",
                        "chɑn",
                        "chɑo",
                        "chen",
                        "chou",
                        "chuɑ",
                        "chui",
                        "chun",
                        "chuo",
                        "conɡ",
                        "cuɑn",
                        "dɑnɡ",
                        "denɡ",
                        "diɑn",
                        "diɑo",
                        "dinɡ",
                        "donɡ",
                        "duɑn",
                        "fɑnɡ",
                        "fenɡ",
                        "fiɑo",
                        "ɡɑnɡ",
                        "ɡenɡ",
                        "ɡonɡ",
                        "ɡuɑi",
                        "ɡuɑn",
                        "hɑnɡ",
                        "henɡ",
                        "honɡ",
                        "huɑi",
                        "huɑn",
                        "jiɑn",
                        "jiɑo",
                        "jinɡ",
                        "juɑn",
                        "kɑnɡ",
                        "kenɡ",
                        "konɡ",
                        "kuɑi",
                        "kuɑn",
                        "lɑnɡ",
                        "lenɡ",
                        "liɑn",
                        "liɑo",
                        "linɡ",
                        "lonɡ",
                        "luɑn",
                        "mɑnɡ",
                        "menɡ",
                        "miɑn",
                        "miɑo",
                        "minɡ",
                        "nɑnɡ",
                        "nenɡ",
                        "niɑn",
                        "niɑo",
                        "ninɡ",
                        "nonɡ",
                        "nuɑn",
                        "pɑnɡ",
                        "penɡ",
                        "piɑn",
                        "piɑo",
                        "pinɡ",
                        "qiɑn",
                        "qiɑo",
                        "qinɡ",
                        "quɑn",
                        "rɑnɡ",
                        "renɡ",
                        "ronɡ",
                        "ruɑn",
                        "sɑnɡ",
                        "senɡ",
                        "shɑi",
                        "shɑn",
                        "shɑo",
                        "shei",
                        "shen",
                        "shou",
                        "shuɑ",
                        "shui",
                        "shun",
                        "shuo",
                        "sonɡ",
                        "suɑn",
                        "tɑnɡ",
                        "tenɡ",
                        "tiɑn",
                        "tiɑo",
                        "tinɡ",
                        "tonɡ",
                        "tuɑn",
                        "wɑnɡ",
                        "wenɡ",
                        "xiɑn",
                        "xiɑo",
                        "xinɡ",
                        "xuɑn",
                        "yɑnɡ",
                        "yinɡ",
                        "yonɡ",
                        "yuɑn",
                        "zɑnɡ",
                        "zenɡ",
                        "zhɑi",
                        "zhɑn",
                        "zhɑo",
                        "zhei",
                        "zhen",
                        "zhou",
                        "zhuɑ",
                        "zhui",
                        "zhun",
                        "zhuo",
                        "zonɡ",
                        "zuɑn",
                        "ɑnɡ",
                        "bɑi",
                        "bɑn",
                        "bɑo",
                        "bei",
                        "ben",
                        "bie",
                        "bin",
                        "cɑi",
                        "cɑn",
                        "cɑo",
                        "cen",
                        "chɑ",
                        "che",
                        "chi",
                        "chu",
                        "cou",
                        "cui",
                        "cun",
                        "cuo",
                        "dɑi",
                        "dɑn",
                        "dɑo",
                        "dei",
                        "den",
                        "diɑ",
                        "die",
                        "diu",
                        "dou",
                        "dui",
                        "dun",
                        "duo",
                        "enɡ",
                        "fɑn",
                        "fei",
                        "fen",
                        "fou",
                        "ɡɑi",
                        "ɡɑn",
                        "ɡɑo",
                        "ɡei",
                        "ɡen",
                        "ɡou",
                        "ɡuɑ",
                        "ɡui",
                        "ɡun",
                        "ɡuo",
                        "hɑi",
                        "hɑn",
                        "hɑo",
                        "hei",
                        "hen",
                        "hou",
                        "huɑ",
                        "hui",
                        "hun",
                        "huo",
                        "jiɑ",
                        "jie",
                        "jin",
                        "jiu",
                        "jue",
                        "jun",
                        "kɑi",
                        "kɑn",
                        "kɑo",
                        "kei",
                        "ken",
                        "kou",
                        "kuɑ",
                        "kui",
                        "kun",
                        "kuo",
                        "lɑi",
                        "lɑn",
                        "lɑo",
                        "lei",
                        "liɑ",
                        "lie",
                        "lin",
                        "liu",
                        "lou",
                        "lue",
                        "lun",
                        "luo",
                        "mɑi",
                        "mɑn",
                        "mɑo",
                        "mei",
                        "men",
                        "mie",
                        "min",
                        "miu",
                        "mou",
                        "nɑi",
                        "nɑn",
                        "nɑo",
                        "nei",
                        "nen",
                        "nie",
                        "nin",
                        "niu",
                        "nou",
                        "nue",
                        "nun",
                        "nuo",
                        "pɑi",
                        "pɑn",
                        "pɑo",
                        "pei",
                        "pen",
                        "pie",
                        "pin",
                        "pou",
                        "qiɑ",
                        "qie",
                        "qin",
                        "qiu",
                        "que",
                        "qun",
                        "rɑn",
                        "rɑo",
                        "ren",
                        "rou",
                        "ruɑ",
                        "rui",
                        "run",
                        "ruo",
                        "sɑi",
                        "sɑn",
                        "sɑo",
                        "sen",
                        "shɑ",
                        "she",
                        "shi",
                        "shu",
                        "sou",
                        "sui",
                        "sun",
                        "suo",
                        "tɑi",
                        "tɑn",
                        "tɑo",
                        "tei",
                        "tie",
                        "tou",
                        "tui",
                        "tun",
                        "tuo",
                        "wɑi",
                        "wɑn",
                        "wei",
                        "wen",
                        "xiɑ",
                        "xie",
                        "xin",
                        "xiu",
                        "xue",
                        "xun",
                        "yɑn",
                        "yɑo",
                        "yin",
                        "you",
                        "yue",
                        "yun",
                        "zɑi",
                        "zɑn",
                        "zɑo",
                        "zei",
                        "zen",
                        "zhɑ",
                        "zhe",
                        "zhi",
                        "zhu",
                        "zou",
                        "zui",
                        "zun",
                        "zuo",
                        "ɑi",
                        "ɑn",
                        "ɑo",
                        "bɑ",
                        "bi",
                        "bo",
                        "bu",
                        "cɑ",
                        "ce",
                        "ci",
                        "cu",
                        "dɑ",
                        "de",
                        "di",
                        "du",
                        "ei",
                        "en_us",
                        "er",
                        "fɑ",
                        "fo",
                        "fu",
                        "ɡɑ",
                        "ɡe",
                        "ɡu",
                        "hɑ",
                        "he",
                        "hu",
                        "ji",
                        "ju",
                        "kɑ",
                        "ke",
                        "ku",
                        "lɑ",
                        "le",
                        "li",
                        "lo",
                        "lu",
                        "lü",
                        "mɑ",
                        "me",
                        "mi",
                        "mo",
                        "mu",
                        "nɑ",
                        "ne",
                        "ni",
                        "nu",
                        "nü",
                        "ou",
                        "pɑ",
                        "pi",
                        "po",
                        "pu",
                        "qi",
                        "qu",
                        "re",
                        "ri",
                        "ru",
                        "sɑ",
                        "se",
                        "si",
                        "su",
                        "tɑ",
                        "te",
                        "ti",
                        "tu",
                        "wɑ",
                        "wo",
                        "wu",
                        "xi",
                        "xu",
                        "yɑ",
                        "ye",
                        "yi",
                        "yo",
                        "yu",
                        "zɑ",
                        "ze",
                        "zi",
                        "zu",
                        "ɑ",
                        "e",
                        "o",
                    ];
                    _this.isPinyinBill = function (pinyinBill) {
                        var pinyinBillTemp = pinyinBill;
                        var pinyinBillTempLength = pinyinBillTemp.length;
                        while (pinyinBillTempLength) {
                            var find = false;
                            for (var leftLength = 6; leftLength > 0; --leftLength) {
                                if (pinyinBillTempLength < leftLength)
                                    continue;
                                var leftPinyin = pinyinBillTemp.substring(0, leftLength);
                                if (_this.pinyinArrayWithoutTone.indexOf(leftPinyin) === -1)
                                    continue;
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
                            if (!find)
                                return false;
                            pinyinBillTempLength = pinyinBillTemp.length;
                        }
                        return true;
                    };
                    _this.splitPinyin = function (pinyinBill, pinyinArray, charCount) {
                        pinyinBill = pinyinBill.toLowerCase();
                        var isEndOfR = pinyinBill.substr(-1) === "r";
                        var pinyinBillTemp = isEndOfR ?
                            pinyinBill.substr(0, pinyinBill.length - 1) :
                            pinyinBill;
                        pinyinBillTemp = pinyinBillTemp
                            .replace(/[āáǎà]/gi, "ɑ")
                            .replace(/[ōóǒò]/gi, "o")
                            .replace(/[ēéěè]/gi, "e")
                            .replace(/[īíǐì]/gi, "i")
                            .replace(/[ūúǔù]/gi, "u")
                            .replace(/[ǖǘǚǜ]/gi, "ü");
                        var array = [];
                        var pinyinBillTempLength = pinyinBillTemp.length;
                        while (pinyinBillTempLength) {
                            var find = false;
                            for (var leftLength = 6; leftLength > 0; --leftLength) {
                                if (pinyinBillTempLength < leftLength)
                                    continue;
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
                            if (!find)
                                break;
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
                        var SCALE = fontSize === "middle" ?
                            1 :
                            (fontSize === "small" ? MIN_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH :
                                MAX_RECTANGLE_WIDTH / MID_RECTANGLE_WIDTH);
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
                        var css = "/* common.css */\n\t\t* { margin:0;border:0;padding:0; }\n\t\t* { box-sizing:border-box; }\n\n\t\tbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\n\n\t\tpage { display:flex;flex-flow:wrap;column-gap:1mm;row-gap:2mm;flex:100%;justify-content:flex-start;align-items:flex-start; }\n\t\t\n\t\t/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n\t\t@media print { @page { size: " + paperSize + " " + (isLandscape ? "landscape" : "portrait") + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\n\t\tpage:not(page:last-child){page-break-after:always;}\n\n    /* \u4E0D\u53EF\u6307\u5B9Apage\u7684\u9AD8\u5EA6\uFF0C\u5426\u5219\u4E0D\u8DB3\u4E00\u9875\u65F6\u5404\u884C\u5C06\u5747\u5E03 */\n\t\t/* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm; } */\n\t\tpage { width:" + MAX_X + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; }\n\t\t/* #reportPageCore{display:flex;flex-flow:wrap;flex-direction:column;width:" + MAX_X + "mm;justify-content:flex-start;align-items:flex-start;} */\n\t\tpage{color:" + fontColor + ";}\n\n\t\t.wordWrap{display:inline-flex;height:" + RECTANGLE_HEIGHT + "mm;}\n\t\t.charWrap{position:relative;display:inline-block;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}\n\t\t.backgound-image{z-index:0;position:absolute;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}\n\n\t\tpinyin, chinese, .chinese{display:block;position:absolute;}\n\t\tpinyin{font-family:'Kaiti', 'Times New Roman';font-size:" + PINYIN_FONT_SIZE + "pt;top:" + PINYIN_TOP + "mm;width:" + RECTANGLE_WIDTH + "mm;text-align:center;}\n\t\t/* pinyin[chars=\"6\"]{letter-spacing:-0.05em;font-size:" + PINYIN_FONT_SIZE *
                            0.95 + "pt;} */\n\t\t/*pinyin{display:inline-flex;position:relative;width:" + RECTANGLE_WIDTH + "mm;height:" + RECTANGLE_HEIGHT + "mm;}pinyin-char{flex:1;}*/\n        pinyin-char{display:inline-block;}\n        pinyin[chars] pinyin-char.withTone{width:0.7em;margin-left:-0.2em;}\n        pinyin pinyin-char.lastG{margin-left:0.2em;}\n        pinyin[chars]{letter-spacing:-0.05em;} */\n        /*pinyin[chars] pinyin-char{overflow:hidden;}pinyin[chars=\"5\"] pinyin-char{width:20%;}pinyin[chars=\"6\"] pinyin-char{width:16%;}*/\n\n\t\t.chinese{width:" + TEXT_WIDTH + "mm;height:" + TEXT_HEIGHT + "mm;left:" + TEXT_LEFT + "mm;bottom:" + TEXT_BOTTOM + "mm;}\n\n\t\t/* TODO(@anqi) \u8C37\u6B4C\u6D4F\u89C8\u5668\u76F4\u63A5\u652F\u6301\u7528mm\u4F5C\u4E3Afont-size\uFF08\u5B57\u53F7\uFF09\u5355\u4F4D\u3002\n\t\t\t\u6682\u65F6\u8FD8\u4E0D\u7528\u8F6C\u6C49\u5B57\u5B57\u53F7\u7684mm\u5230px\u3002\n\t\t\t\u4F30\u8BA1\u6709\u4E9B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u7B49\u4E4B\u540E\u8C03\u8BD5\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u65F6\u518D\u5904\u7406\u3002\n\t\t*/\n\t\tchinese{font-size:" + TEXT_WIDTH + "mm;font-family:'Kaiti', system-ui, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica', 'Source Han Sans CN', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\n    chinese{display:flex;justify-content:center;align-items:center;}\n    chinese{width:" + TEXT_WIDTH + "mm;height:" + TEXT_HEIGHT + "mm;left:" + TEXT_LEFT + "mm;bottom:" + TEXT_BOTTOM + "mm;}\n\n\t\tpage{position:relative;}\n\t\trow.subject{justify-content:flex-start;align-items:flex-start;height:1em;width:" + MAX_X + "mm;\n\t\t\tposition:absolute;top:" + (MAX_Y - 10) + "mm;display:inline-flex;}\n\t\t.subjectLeft,.subjectCenter,.subjectRight{display:inline-flex;}\n\t\t.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}\n\t\t.subjectCenter{width:60%;justify-content:center;align-items:flex-end;flex-direction:row;}\n\t\t.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}\n\n\t\t.subject{font-size:1em;}\n\t\t";
                        var BACKGOUND_SVG_SRC = "http://edu.sonya.cc/images/3brick/1/background/" + color + ".svg";
                        var PAGE_WIDTH = MAX_X,
                            PAGE_HEIGHT = MAX_Y;
                        var HORIZONTAL_SPACE = 1,
                            VERTICAL_SPACE = 2;
                        var CHAR_COUNT_PER_ROW = Math.floor((PAGE_WIDTH * 0.5 + HORIZONTAL_SPACE) /
                            (RECTANGLE_WIDTH + HORIZONTAL_SPACE));
                        var ROWS_COUNT = Math.floor((PAGE_HEIGHT + VERTICAL_SPACE) / (RECTANGLE_HEIGHT + VERTICAL_SPACE));
                        var LANG = getCurrentLang();
                        var i18nAnswerFlag = {
                            en_us: "Answer",
                            zh_cn: "答案",
                            zh_tw: "答案"
                        };
                        var i18nSubject = data.kind === "pinyinToChinese" ?
                            {
                                en_us: "Writing",
                                zh_cn: "写字",
                                zh_tw: "寫字"
                            } :
                            {
                                en_us: "Phonetic Notation",
                                zh_cn: "注音",
                                zh_tw: "注音"
                            };
                        var inputMethod = data.inputMethod,
                            selectedCheckboxIndexArray = data.selectedCheckboxIndexArray;
                        var i18nSubtitle = inputMethod === "select" && selectedCheckboxIndexArray.length === 1 ?
                            _this.usableCopybookCheckboxElementArray.filter(function (checkbox) {
                                return checkbox.checked;
                            })[0].names :
                            {
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
                                charArray.forEach(function (char, index) {
                                    var charStartHtml = "<span class=\"charWrap\">";
                                    var charEndHtml = "</span>";
                                    var backgroundHtml = "<img class=\"backgound-image\" src=\"" + BACKGOUND_SVG_SRC + "\" alt=\"" + BACKGOUND_SVG_SRC + "\" />";
                                    var pinyin = pinyinArray[index];
                                    var pinyinHtml = "<pinyin " + (pinyin.length > 4 ?
                                        ' chars="'.concat(pinyin.length.toString(), '"') :
                                        "") + ">" + pinyin.split("").map(function (char, index) {
                                        return "<pinyin-char".concat("āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜ".indexOf(char) > -1 ?
                                            ' class="withTone"' :
                                            (pinyin.length <= 4 && index > 0 && char === "ɡ" ?
                                                ' class="lastG"' :
                                                ""), ">", char, "</pinyin-char>");
                                    }).join("") + "</pinyin>";
                                    var chineseHtml = "<chinese>" + char + "</chinese>";
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
                        var questionPageCount = (questionHtml.split("</page>").length - 1)
                            .toString();
                        var answerPageCount = (answerHtml.split("</page>").length - 1).toString();
                        var html = questionHtml.replace(/~reporterPageCount~/g, questionPageCount)
                            .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
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
                        if (copybooks.length === 0)
                            return [];
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
                        usableCopybooksPeopleEducationEditionWrap.className =
                            idOrClassPrefix + "UsableCopybooksWrap";
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
                                span.className =
                                    idOrClassPrefix + "UsableCopybookSpanAfterCheckboxWrap";
                                span.innerHTML = getI18nInnerHTML(names);
                                var checkboxChanged = function (event) {
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
                            var pinyin = (i < pinyinLength ? pinyinArray[i] : "").replace(/a/g, "ɑ")
                                .replace(/g/g, "ɡ");
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
                                        },
                                        {
                                            chinese: "\u5730",
                                            pinyin: "d\u00EC"
                                        },
                                        {
                                            chinese: "\u4EBA",
                                            pinyin: "r\u00E9n"
                                        },
                                        {
                                            chinese: "\u4F60",
                                            pinyin: "n\u01D0"
                                        },
                                        {
                                            chinese: "\u6211",
                                            pinyin: "w\u01D2"
                                        },
                                        {
                                            chinese: "\u4ED6",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u4E00",
                                            pinyin: "y\u012B"
                                        },
                                        {
                                            chinese: "\u4E8C",
                                            pinyin: "\u00E8r"
                                        },
                                        {
                                            chinese: "\u4E09",
                                            pinyin: "s\u0101n"
                                        },
                                        {
                                            chinese: "\u56DB",
                                            pinyin: "s\u00EC"
                                        },
                                        {
                                            chinese: "\u4E94",
                                            pinyin: "w\u01D4"
                                        },
                                        {
                                            chinese: "\u4E0A\u4E0B",
                                            pinyin: "sh\u00E0ng'xi\u00E0"
                                        },
                                        {
                                            chinese: "\u53E3",
                                            pinyin: "k\u01D2u"
                                        },
                                        {
                                            chinese: "\u8033",
                                            pinyin: "\u011Br"
                                        },
                                        {
                                            chinese: "\u76EE",
                                            pinyin: "m\u00F9"
                                        },
                                        {
                                            chinese: "\u624B",
                                            pinyin: "sh\u01D2u"
                                        },
                                        {
                                            chinese: "\u8DB3",
                                            pinyin: "z\u00FA"
                                        },
                                        {
                                            chinese: "\u7AD9",
                                            pinyin: "zh\u00E0n"
                                        },
                                        {
                                            chinese: "\u5750",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u65E5",
                                            pinyin: "r\u00EC"
                                        },
                                        {
                                            chinese: "\u6708",
                                            pinyin: "yu\u00E8"
                                        },
                                        {
                                            chinese: "\u6C34",
                                            pinyin: "shu\u01D0"
                                        },
                                        {
                                            chinese: "\u706B",
                                            pinyin: "hu\u01D2"
                                        },
                                        {
                                            chinese: "\u5C71",
                                            pinyin: "sh\u0101n"
                                        },
                                        {
                                            chinese: "\u77F3",
                                            pinyin: "sh\u00ED"
                                        },
                                        {
                                            chinese: "\u7530",
                                            pinyin: "ti\u00E1n"
                                        },
                                        {
                                            chinese: "\u79BE",
                                            pinyin: "h\u00E9"
                                        },
                                        {
                                            chinese: "\u5BF9",
                                            pinyin: "du\u00EC"
                                        },
                                        {
                                            chinese: "\u4E91",
                                            pinyin: "y\u00FAn"
                                        },
                                        {
                                            chinese: "\u96E8",
                                            pinyin: "y\u01D4"
                                        },
                                        {
                                            chinese: "\u98CE",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u82B1",
                                            pinyin: "hu\u0101"
                                        },
                                        {
                                            chinese: "\u9E1F",
                                            pinyin: "ni\u01CEo"
                                        },
                                        {
                                            chinese: "\u866B",
                                            pinyin: "ch\u00F3ng"
                                        },
                                        {
                                            chinese: "\u516D",
                                            pinyin: "li\u00F9"
                                        },
                                        {
                                            chinese: "\u4E03",
                                            pinyin: "q\u012B"
                                        },
                                        {
                                            chinese: "\u516B",
                                            pinyin: "b\u0101"
                                        },
                                        {
                                            chinese: "\u4E5D",
                                            pinyin: "ji\u01D4"
                                        },
                                        {
                                            chinese: "\u5341",
                                            pinyin: "sh\u00ED"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 2",
                                        zh_cn: "\u7B2C\u4E8C\u5355\u5143",
                                        zh_tw: "\u7B2C\u4E8C\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u7238",
                                            pinyin: "b\u00E0"
                                        },
                                        {
                                            chinese: "\u5988",
                                            pinyin: "m\u0101"
                                        },
                                        {
                                            chinese: "\u9A6C",
                                            pinyin: "m\u01CE"
                                        },
                                        {
                                            chinese: "\u571F",
                                            pinyin: "t\u01D4"
                                        },
                                        {
                                            chinese: "\u4E0D",
                                            pinyin: "b\u00F9"
                                        },
                                        {
                                            chinese: "\u753B",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u6253",
                                            pinyin: "d\u01CE"
                                        },
                                        {
                                            chinese: "\u68CB",
                                            pinyin: "q\u00ED"
                                        },
                                        {
                                            chinese: "\u9E21",
                                            pinyin: "j\u012B"
                                        },
                                        {
                                            chinese: "\u5B57",
                                            pinyin: "z\u00EC"
                                        },
                                        {
                                            chinese: "\u8BCD\u8BED",
                                            pinyin: "c\u00ED'y\u01D4"
                                        },
                                        {
                                            chinese: "\u53E5\u5B50",
                                            pinyin: "j\u00F9'z\u01D0"
                                        },
                                        {
                                            chinese: "\u684C",
                                            pinyin: "zhu\u014D"
                                        },
                                        {
                                            chinese: "\u7EB8",
                                            pinyin: "zh\u01D0"
                                        },
                                        {
                                            chinese: "\u6587",
                                            pinyin: "w\u00E9n"
                                        },
                                        {
                                            chinese: "\u6570\u5B66",
                                            pinyin: "sh\u00F9'xu\u00E9"
                                        },
                                        {
                                            chinese: "\u97F3\u4E50",
                                            pinyin: "y\u012Bn'yu\u00E8"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 3",
                                        zh_cn: "\u7B2C\u4E09\u5355\u5143",
                                        zh_tw: "\u7B2C\u4E09\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u59B9",
                                            pinyin: "m\u00E8i"
                                        },
                                        {
                                            chinese: "\u5976",
                                            pinyin: "n\u01CEi"
                                        },
                                        {
                                            chinese: "\u5C0F",
                                            pinyin: "xi\u01CEo"
                                        },
                                        {
                                            chinese: "\u6865",
                                            pinyin: "qi\u00E1o"
                                        },
                                        {
                                            chinese: "\u53F0",
                                            pinyin: "t\u00E1i"
                                        },
                                        {
                                            chinese: "\u96EA",
                                            pinyin: "xu\u011B"
                                        },
                                        {
                                            chinese: "\u513F",
                                            pinyin: "\u00E9r"
                                        },
                                        {
                                            chinese: "\u767D",
                                            pinyin: "b\u00E1i"
                                        },
                                        {
                                            chinese: "\u8349",
                                            pinyin: "c\u01CEo"
                                        },
                                        {
                                            chinese: "\u5BB6",
                                            pinyin: "ji\u0101"
                                        },
                                        {
                                            chinese: "\u662F",
                                            pinyin: "sh\u00EC"
                                        },
                                        {
                                            chinese: "\u8F66",
                                            pinyin: "ch\u0113"
                                        },
                                        {
                                            chinese: "\u8DEF\u706F",
                                            pinyin: "l\u00F9'd\u0113ng"
                                        },
                                        {
                                            chinese: "\u8D70",
                                            pinyin: "z\u01D2u"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 4",
                                        zh_cn: "\u7B2C\u56DB\u5355\u5143",
                                        zh_tw: "\u7B2C\u56DB\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u79CB",
                                            pinyin: "qi\u016B"
                                        },
                                        {
                                            chinese: "\u6C14",
                                            pinyin: "q\u00EC"
                                        },
                                        {
                                            chinese: "\u4E86",
                                            pinyin: "le"
                                        },
                                        {
                                            chinese: "\u6811\u53F6",
                                            pinyin: "sh\u00F9'y\u00E8"
                                        },
                                        {
                                            chinese: "\u7247",
                                            pinyin: "pi\u00E0n"
                                        },
                                        {
                                            chinese: "\u5927",
                                            pinyin: "d\u00E0"
                                        },
                                        {
                                            chinese: "\u98DE",
                                            pinyin: "f\u0113i"
                                        },
                                        {
                                            chinese: "\u4F1A",
                                            pinyin: "hu\u00EC"
                                        },
                                        {
                                            chinese: "\u4E2A",
                                            pinyin: "g\u00E8"
                                        },
                                        {
                                            chinese: "\u7684",
                                            pinyin: "de"
                                        },
                                        {
                                            chinese: "\u8239",
                                            pinyin: "chu\u00E1n"
                                        },
                                        {
                                            chinese: "\u4E24\u5934",
                                            pinyin: "li\u01CEng't\u00F3u"
                                        },
                                        {
                                            chinese: "\u5728",
                                            pinyin: "z\u00E0i"
                                        },
                                        {
                                            chinese: "\u91CC",
                                            pinyin: "l\u01D0"
                                        },
                                        {
                                            chinese: "\u770B\u89C1",
                                            pinyin: "k\u00E0n'ji\u00E0n"
                                        },
                                        {
                                            chinese: "\u95EA",
                                            pinyin: "sh\u01CEn"
                                        },
                                        {
                                            chinese: "\u661F",
                                            pinyin: "x\u012Bng"
                                        },
                                        {
                                            chinese: "\u6C5F\u5357",
                                            pinyin: "ji\u0101ng'n\u00E1n"
                                        },
                                        {
                                            chinese: "\u53EF",
                                            pinyin: "k\u011B"
                                        },
                                        {
                                            chinese: "\u91C7\u83B2",
                                            pinyin: "c\u01CEi'li\u00E1n"
                                        },
                                        {
                                            chinese: "\u9C7C",
                                            pinyin: "y\u00FA"
                                        },
                                        {
                                            chinese: "\u4E1C",
                                            pinyin: "d\u014Dng"
                                        },
                                        {
                                            chinese: "\u897F",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u5317",
                                            pinyin: "b\u011Bi"
                                        },
                                        {
                                            chinese: "\u5C16",
                                            pinyin: "ji\u0101n"
                                        },
                                        {
                                            chinese: "\u8BF4",
                                            pinyin: "shu\u014D"
                                        },
                                        {
                                            chinese: "\u6625",
                                            pinyin: "ch\u016Bn"
                                        },
                                        {
                                            chinese: "\u9752\u86D9",
                                            pinyin: "q\u012Bng'w\u0101"
                                        },
                                        {
                                            chinese: "\u590F",
                                            pinyin: "xi\u00E0"
                                        },
                                        {
                                            chinese: "\u5F2F",
                                            pinyin: "w\u0101n"
                                        },
                                        {
                                            chinese: "\u76AE",
                                            pinyin: "p\u00ED"
                                        },
                                        {
                                            chinese: "\u5730",
                                            pinyin: "de"
                                        },
                                        {
                                            chinese: "\u51AC",
                                            pinyin: "d\u014Dng"
                                        },
                                        {
                                            chinese: "\u7537\u5973",
                                            pinyin: "n\u00E1n'n\u01DA"
                                        },
                                        {
                                            chinese: "\u5F00\u5173",
                                            pinyin: "k\u0101i'gu\u0101n"
                                        },
                                        {
                                            chinese: "\u6B63\u53CD",
                                            pinyin: "zh\u00E8ng'f\u01CEn"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 5",
                                        zh_cn: "\u7B2C\u4E94\u5355\u5143",
                                        zh_tw: "\u7B2C\u4E94\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u8FDC",
                                            pinyin: "yu\u01CEn"
                                        },
                                        {
                                            chinese: "\u6709",
                                            pinyin: "y\u01D2u"
                                        },
                                        {
                                            chinese: "\u8272",
                                            pinyin: "s\u00E8"
                                        },
                                        {
                                            chinese: "\u8FD1",
                                            pinyin: "j\u00ECn"
                                        },
                                        {
                                            chinese: "\u542C",
                                            pinyin: "t\u012Bng"
                                        },
                                        {
                                            chinese: "\u65E0",
                                            pinyin: "w\u00FA"
                                        },
                                        {
                                            chinese: "\u58F0",
                                            pinyin: "sh\u0113ng"
                                        },
                                        {
                                            chinese: "\u53BB",
                                            pinyin: "q\u00F9"
                                        },
                                        {
                                            chinese: "\u8FD8",
                                            pinyin: "h\u00E1i"
                                        },
                                        {
                                            chinese: "\u6765",
                                            pinyin: "l\u00E1i"
                                        },
                                        {
                                            chinese: "\u591A\u5C11",
                                            pinyin: "du\u014D'sh\u01CEo"
                                        },
                                        {
                                            chinese: "\u9EC4\u725B",
                                            pinyin: "hu\u00E1ng'ni\u00FA"
                                        },
                                        {
                                            chinese: "\u53EA",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u732B",
                                            pinyin: "m\u0101o"
                                        },
                                        {
                                            chinese: "\u8FB9",
                                            pinyin: "bi\u0101n"
                                        },
                                        {
                                            chinese: "\u9E2D",
                                            pinyin: "y\u0101"
                                        },
                                        {
                                            chinese: "\u82F9\u679C",
                                            pinyin: "p\u00EDng'gu\u01D2"
                                        },
                                        {
                                            chinese: "\u674F",
                                            pinyin: "x\u00ECng"
                                        },
                                        {
                                            chinese: "\u6843",
                                            pinyin: "t\u00E1o"
                                        },
                                        {
                                            chinese: "\u4E66\u5305",
                                            pinyin: "sh\u016B'b\u0101o"
                                        },
                                        {
                                            chinese: "\u5C3A",
                                            pinyin: "ch\u01D0"
                                        },
                                        {
                                            chinese: "\u4F5C\u4E1A\u672C",
                                            pinyin: "zu\u00F2'y\u00E8'b\u011Bn"
                                        },
                                        {
                                            chinese: "\u7B14",
                                            pinyin: "b\u01D0"
                                        },
                                        {
                                            chinese: "\u5200",
                                            pinyin: "d\u0101o"
                                        },
                                        {
                                            chinese: "\u8BFE",
                                            pinyin: "k\u00E8"
                                        },
                                        {
                                            chinese: "\u65E9",
                                            pinyin: "z\u01CEo"
                                        },
                                        {
                                            chinese: "\u6821",
                                            pinyin: "xi\u00E0o"
                                        },
                                        {
                                            chinese: "\u660E",
                                            pinyin: "m\u00EDng"
                                        },
                                        {
                                            chinese: "\u529B",
                                            pinyin: "l\u00EC"
                                        },
                                        {
                                            chinese: "\u5C18",
                                            pinyin: "ch\u00E9n"
                                        },
                                        {
                                            chinese: "\u4ECE",
                                            pinyin: "c\u00F3ng"
                                        },
                                        {
                                            chinese: "\u4F17",
                                            pinyin: "zh\u00F2ng"
                                        },
                                        {
                                            chinese: "\u53CC",
                                            pinyin: "shu\u0101ng"
                                        },
                                        {
                                            chinese: "\u6728",
                                            pinyin: "m\u00F9"
                                        },
                                        {
                                            chinese: "\u6797",
                                            pinyin: "l\u00EDn"
                                        },
                                        {
                                            chinese: "\u68EE",
                                            pinyin: "s\u0113n"
                                        },
                                        {
                                            chinese: "\u6761",
                                            pinyin: "ti\u00E1o"
                                        },
                                        {
                                            chinese: "\u5FC3",
                                            pinyin: "x\u012Bn"
                                        },
                                        {
                                            chinese: "\u5347\u56FD\u65D7",
                                            pinyin: "sheng'gu\u00F3'q\u00ED"
                                        },
                                        {
                                            chinese: "\u4E2D",
                                            pinyin: "zh\u014Dng"
                                        },
                                        {
                                            chinese: "\u7EA2",
                                            pinyin: "h\u00F3ng"
                                        },
                                        {
                                            chinese: "\u6B4C",
                                            pinyin: "g\u0113"
                                        },
                                        {
                                            chinese: "\u8D77\u7ACB",
                                            pinyin: "q\u01D0'l\u00EC"
                                        },
                                        {
                                            chinese: "\u4E48",
                                            pinyin: "me"
                                        },
                                        {
                                            chinese: "\u7F8E\u4E3D",
                                            pinyin: "m\u011Bi'l\u00EC"
                                        },
                                        {
                                            chinese: "\u5348",
                                            pinyin: "w\u01D4"
                                        },
                                        {
                                            chinese: "\u665A",
                                            pinyin: "w\u01CEn"
                                        },
                                        {
                                            chinese: "\u6628",
                                            pinyin: "zu\u00F3"
                                        },
                                        {
                                            chinese: "\u4ECA\u5E74",
                                            pinyin: "j\u012Bn'ni\u00E1n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 6",
                                        zh_cn: "\u7B2C\u516D\u5355\u5143",
                                        zh_tw: "\u7B2C\u516D\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u5F71",
                                            pinyin: "y\u01D0ng"
                                        },
                                        {
                                            chinese: "\u524D\u540E",
                                            pinyin: "qi\u00E1n'h\u00F2u"
                                        },
                                        {
                                            chinese: "\u9ED1\u72D7",
                                            pinyin: "h\u0113i'g\u01D2u"
                                        },
                                        {
                                            chinese: "\u5DE6\u53F3",
                                            pinyin: "zu\u01D2'y\u00F2u"
                                        },
                                        {
                                            chinese: "\u5B83",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u597D\u670B\u53CB",
                                            pinyin: "h\u01CEo'p\u00E9ng'y\u01D2u"
                                        },
                                        {
                                            chinese: "\u6BD4",
                                            pinyin: "b\u01D0"
                                        },
                                        {
                                            chinese: "\u5C3E\u5DF4",
                                            pinyin: "w\u011Bi'b\u0101"
                                        },
                                        {
                                            chinese: "\u8C01",
                                            pinyin: "shu\u00ED"
                                        },
                                        {
                                            chinese: "\u957F\u77ED",
                                            pinyin: "ch\u00E1ng'du\u01CEn"
                                        },
                                        {
                                            chinese: "\u628A",
                                            pinyin: "b\u01CE"
                                        },
                                        {
                                            chinese: "\u4F1E",
                                            pinyin: "s\u01CEn"
                                        },
                                        {
                                            chinese: "\u5154",
                                            pinyin: "t\u00F9"
                                        },
                                        {
                                            chinese: "\u6700",
                                            pinyin: "zu\u00EC"
                                        },
                                        {
                                            chinese: "\u516C",
                                            pinyin: "g\u014Dng"
                                        },
                                        {
                                            chinese: "\u5199\u8BD7",
                                            pinyin: "xi\u011B'sh\u012B"
                                        },
                                        {
                                            chinese: "\u70B9",
                                            pinyin: "di\u01CEn"
                                        },
                                        {
                                            chinese: "\u8981",
                                            pinyin: "y\u00E0o"
                                        },
                                        {
                                            chinese: "\u8FC7",
                                            pinyin: "gu\u00F2"
                                        },
                                        {
                                            chinese: "\u7ED9",
                                            pinyin: "g\u011Bi"
                                        },
                                        {
                                            chinese: "\u5F53",
                                            pinyin: "d\u0101ng"
                                        },
                                        {
                                            chinese: "\u4E32",
                                            pinyin: "chu\u00E0n"
                                        },
                                        {
                                            chinese: "\u4EEC",
                                            pinyin: "men"
                                        },
                                        {
                                            chinese: "\u4EE5",
                                            pinyin: "y\u01D0"
                                        },
                                        {
                                            chinese: "\u6210",
                                            pinyin: "ch\u00E9ng"
                                        },
                                        {
                                            chinese: "\u6570",
                                            pinyin: "sh\u01D4"
                                        },
                                        {
                                            chinese: "\u5F69",
                                            pinyin: "c\u01CEi"
                                        },
                                        {
                                            chinese: "\u534A",
                                            pinyin: "b\u00E0n"
                                        },
                                        {
                                            chinese: "\u7A7A",
                                            pinyin: "k\u014Dng"
                                        },
                                        {
                                            chinese: "\u95EE",
                                            pinyin: "w\u00E8n"
                                        },
                                        {
                                            chinese: "\u5230",
                                            pinyin: "d\u00E0o"
                                        },
                                        {
                                            chinese: "\u65B9",
                                            pinyin: "f\u0101ng"
                                        },
                                        {
                                            chinese: "\u6CA1",
                                            pinyin: "m\u00E9i"
                                        },
                                        {
                                            chinese: "\u66F4",
                                            pinyin: "g\u00E8ng"
                                        },
                                        {
                                            chinese: "\u7EFF",
                                            pinyin: "l\u01DC"
                                        },
                                        {
                                            chinese: "\u51FA",
                                            pinyin: "ch\u016B"
                                        },
                                        {
                                            chinese: "\u957F",
                                            pinyin: "zh\u01CEng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 7",
                                        zh_cn: "\u7B2C\u4E03\u5355\u5143",
                                        zh_tw: "\u7B2C\u4E03\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u7761",
                                            pinyin: "shu\u00EC"
                                        },
                                        {
                                            chinese: "\u90A3",
                                            pinyin: "n\u00E0"
                                        },
                                        {
                                            chinese: "\u6D77",
                                            pinyin: "h\u01CEi"
                                        },
                                        {
                                            chinese: "\u771F",
                                            pinyin: "zh\u0113n"
                                        },
                                        {
                                            chinese: "\u8001\u5E08",
                                            pinyin: "l\u01CEo'sh\u012B"
                                        },
                                        {
                                            chinese: "\u5417",
                                            pinyin: "ma"
                                        },
                                        {
                                            chinese: "\u540C",
                                            pinyin: "t\u00F3ng"
                                        },
                                        {
                                            chinese: "\u4EC0",
                                            pinyin: "sh\u00E9n"
                                        },
                                        {
                                            chinese: "\u624D",
                                            pinyin: "c\u00E1i"
                                        },
                                        {
                                            chinese: "\u4EAE",
                                            pinyin: "li\u00E0ng"
                                        },
                                        {
                                            chinese: "\u65F6\u5019",
                                            pinyin: "sh\u00ED'h\u00F2u"
                                        },
                                        {
                                            chinese: "\u89C9\u5F97",
                                            pinyin: "ji\u00E0o'de"
                                        },
                                        {
                                            chinese: "\u81EA\u5DF1",
                                            pinyin: "z\u00EC'j\u01D0"
                                        },
                                        {
                                            chinese: "\u5F88",
                                            pinyin: "h\u011Bn"
                                        },
                                        {
                                            chinese: "\u7A7F\u8863\u670D",
                                            pinyin: "chu\u0101n'y\u012B'f\u00FA"
                                        },
                                        {
                                            chinese: "\u95E8",
                                            pinyin: "m\u00E9n"
                                        },
                                        {
                                            chinese: "\u5FEB",
                                            pinyin: "ku\u00E0i"
                                        },
                                        {
                                            chinese: "\u84DD",
                                            pinyin: "l\u00E1n"
                                        },
                                        {
                                            chinese: "\u53C8",
                                            pinyin: "y\u00F2u"
                                        },
                                        {
                                            chinese: "\u7B11",
                                            pinyin: "xi\u00E0o"
                                        },
                                        {
                                            chinese: "\u7740",
                                            pinyin: "zhe"
                                        },
                                        {
                                            chinese: "\u5411",
                                            pinyin: "xi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u548C",
                                            pinyin: "h\u00E9"
                                        },
                                        {
                                            chinese: "\u8D1D",
                                            pinyin: "b\u00E8i"
                                        },
                                        {
                                            chinese: "\u5A03",
                                            pinyin: "w\u00E1"
                                        },
                                        {
                                            chinese: "\u6302",
                                            pinyin: "gu\u00E0"
                                        },
                                        {
                                            chinese: "\u6D3B",
                                            pinyin: "hu\u00F3"
                                        },
                                        {
                                            chinese: "\u91D1",
                                            pinyin: "j\u012Bn"
                                        },
                                        {
                                            chinese: "\u54E5",
                                            pinyin: "g\u0113"
                                        },
                                        {
                                            chinese: "\u59D0",
                                            pinyin: "ji\u011B"
                                        },
                                        {
                                            chinese: "\u5F1F",
                                            pinyin: "d\u00EC"
                                        },
                                        {
                                            chinese: "\u53D4",
                                            pinyin: "sh\u016B"
                                        },
                                        {
                                            chinese: "\u7237",
                                            pinyin: "y\u00E9"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Unit 8",
                                        zh_cn: "\u7B2C\u516B\u5355\u5143",
                                        zh_tw: "\u7B2C\u516B\u5355\u5143"
                                    },
                                    words: [{
                                            chinese: "\u7FA4",
                                            pinyin: "q\u00FAn"
                                        },
                                        {
                                            chinese: "\u7AF9",
                                            pinyin: "zh\u00FA"
                                        },
                                        {
                                            chinese: "\u7259",
                                            pinyin: "y\u00E1"
                                        },
                                        {
                                            chinese: "\u7528",
                                            pinyin: "y\u00F2ng"
                                        },
                                        {
                                            chinese: "\u51E0\u6B65",
                                            pinyin: "j\u01D0'b\u00F9"
                                        },
                                        {
                                            chinese: "\u4E3A",
                                            pinyin: "w\u00E9i"
                                        },
                                        {
                                            chinese: "\u53C2\u52A0",
                                            pinyin: "c\u0101n'ji\u0101"
                                        },
                                        {
                                            chinese: "\u6D1E",
                                            pinyin: "d\u00F2ng"
                                        },
                                        {
                                            chinese: "\u7740",
                                            pinyin: "zh\u00E1o"
                                        },
                                        {
                                            chinese: "\u4E4C\u9E26",
                                            pinyin: "w\u016B'y\u0101"
                                        },
                                        {
                                            chinese: "\u5904",
                                            pinyin: "ch\u00F9"
                                        },
                                        {
                                            chinese: "\u627E",
                                            pinyin: "zh\u01CEo"
                                        },
                                        {
                                            chinese: "\u529E",
                                            pinyin: "b\u00E0n"
                                        },
                                        {
                                            chinese: "\u65C1",
                                            pinyin: "p\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8BB8",
                                            pinyin: "x\u01D4"
                                        },
                                        {
                                            chinese: "\u6CD5",
                                            pinyin: "f\u01CE"
                                        },
                                        {
                                            chinese: "\u653E",
                                            pinyin: "f\u00E0ng"
                                        },
                                        {
                                            chinese: "\u8FDB",
                                            pinyin: "j\u00ECn"
                                        },
                                        {
                                            chinese: "\u9AD8",
                                            pinyin: "g\u0101o"
                                        },
                                        {
                                            chinese: "\u4F4F",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u5B69",
                                            pinyin: "h\u00E1i"
                                        },
                                        {
                                            chinese: "\u73A9",
                                            pinyin: "w\u00E1n"
                                        },
                                        {
                                            chinese: "\u5427",
                                            pinyin: "ba"
                                        },
                                        {
                                            chinese: "\u53D1\u82BD",
                                            pinyin: "f\u0101'y\u00E1"
                                        },
                                        {
                                            chinese: "\u722C",
                                            pinyin: "p\u00E1"
                                        },
                                        {
                                            chinese: "\u5440",
                                            pinyin: "ya"
                                        },
                                        {
                                            chinese: "\u4E45",
                                            pinyin: "ji\u01D4"
                                        },
                                        {
                                            chinese: "\u56DE",
                                            pinyin: "hu\u00ED"
                                        },
                                        {
                                            chinese: "\u5168",
                                            pinyin: "qu\u00E1n"
                                        },
                                        {
                                            chinese: "\u53D8",
                                            pinyin: "bi\u00E0n"
                                        },
                                        {
                                            chinese: "\u5DE5\u5382",
                                            pinyin: "gong'ch\u01CEng"
                                        },
                                        {
                                            chinese: "\u533B\u9662",
                                            pinyin: "y\u012B'yu\u00E0n"
                                        },
                                        {
                                            chinese: "\u751F",
                                            pinyin: "sh\u0113ng"
                                        },
                                    ]
                                },
                            ]
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
                                        },
                                        {
                                            chinese: "\u5439",
                                            pinyin: "chu\u012B"
                                        },
                                        {
                                            chinese: "\u843D",
                                            pinyin: "lu\u00F2"
                                        },
                                        {
                                            chinese: "\u964D",
                                            pinyin: "ji\u00E0ng"
                                        },
                                        {
                                            chinese: "\u98D8\u6E38",
                                            pinyin: "pi\u0101o'y\u00F3u"
                                        },
                                        {
                                            chinese: "\u6C60",
                                            pinyin: "ch\u00ED"
                                        },
                                        {
                                            chinese: "\u5165",
                                            pinyin: "r\u00F9"
                                        },
                                        {
                                            chinese: "\u59D3\u6C0F",
                                            pinyin: "x\u00ECng'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u674E",
                                            pinyin: "l\u01D0"
                                        },
                                        {
                                            chinese: "\u5F20",
                                            pinyin: "zh\u0101ng"
                                        },
                                        {
                                            chinese: "\u53E4",
                                            pinyin: "g\u01D4"
                                        },
                                        {
                                            chinese: "\u5434",
                                            pinyin: "w\u00FA"
                                        },
                                        {
                                            chinese: "\u8D75",
                                            pinyin: "zh\u00E0o"
                                        },
                                        {
                                            chinese: "\u94B1",
                                            pinyin: "qi\u00E1n"
                                        },
                                        {
                                            chinese: "\u5B59",
                                            pinyin: "s\u016Bn"
                                        },
                                        {
                                            chinese: "\u5468",
                                            pinyin: "zh\u014Du"
                                        },
                                        {
                                            chinese: "\u738B",
                                            pinyin: "w\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5B98",
                                            pinyin: "gu\u0101n"
                                        },
                                        {
                                            chinese: "\u6E05",
                                            pinyin: "q\u012Bng"
                                        },
                                        {
                                            chinese: "\u6674",
                                            pinyin: "q\u00EDng"
                                        },
                                        {
                                            chinese: "\u773C\u775B",
                                            pinyin: "y\u01CEn'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u4FDD\u62A4",
                                            pinyin: "b\u01CEo'h\u00F9"
                                        },
                                        {
                                            chinese: "\u5BB3",
                                            pinyin: "h\u00E0i"
                                        },
                                        {
                                            chinese: "\u4E8B\u60C5",
                                            pinyin: "sh\u00EC'qing"
                                        },
                                        {
                                            chinese: "\u8BF7",
                                            pinyin: "q\u01D0ng"
                                        },
                                        {
                                            chinese: "\u8BA9",
                                            pinyin: "r\u00E0ng"
                                        },
                                        {
                                            chinese: "\u75C5",
                                            pinyin: "b\u00ECng"
                                        },
                                        {
                                            chinese: "\u76F8\u9047",
                                            pinyin: "xi\u0101ng'y\u00F9"
                                        },
                                        {
                                            chinese: "\u559C\u6B22",
                                            pinyin: "x\u01D0'huan"
                                        },
                                        {
                                            chinese: "\u6015",
                                            pinyin: "p\u00E0"
                                        },
                                        {
                                            chinese: "\u8A00",
                                            pinyin: "y\u00E1n"
                                        },
                                        {
                                            chinese: "\u4E92",
                                            pinyin: "h\u00F9"
                                        },
                                        {
                                            chinese: "\u4EE4",
                                            pinyin: "l\u00ECng"
                                        },
                                        {
                                            chinese: "\u52A8",
                                            pinyin: "d\u00F2ng"
                                        },
                                        {
                                            chinese: "\u4E07",
                                            pinyin: "w\u00E0n"
                                        },
                                        {
                                            chinese: "\u7EAF\u51C0",
                                            pinyin: "ch\u00FAn'j\u00ECng"
                                        },
                                        {
                                            chinese: "\u9634",
                                            pinyin: "y\u012Bn"
                                        },
                                        {
                                            chinese: "\u96F7\u7535",
                                            pinyin: "l\u00E9i'di\u00E0n"
                                        },
                                        {
                                            chinese: "\u9635",
                                            pinyin: "zh\u00E8n"
                                        },
                                        {
                                            chinese: "\u51B0\u51BB",
                                            pinyin: "b\u012Bng'd\u00F2ng"
                                        },
                                        {
                                            chinese: "\u5939",
                                            pinyin: "ji\u00E1"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 2",
                                        zh_cn: "\u8BC6\u5B57\u88682",
                                        zh_tw: "\u8B58\u5B57\u93362"
                                    },
                                    words: [{
                                            chinese: "\u5403",
                                            pinyin: "ch\u012B"
                                        },
                                        {
                                            chinese: "\u5FD8",
                                            pinyin: "w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u4E95",
                                            pinyin: "j\u01D0ng"
                                        },
                                        {
                                            chinese: "\u6751",
                                            pinyin: "c\u016Bn"
                                        },
                                        {
                                            chinese: "\u53EB",
                                            pinyin: "ji\u00E0o"
                                        },
                                        {
                                            chinese: "\u6BDB\u4E3B\u5E2D",
                                            pinyin: "m\u00E1o'zh\u01D4'x\u00ED"
                                        },
                                        {
                                            chinese: "\u4E61\u4EB2",
                                            pinyin: "xi\u0101ng'q\u012Bn"
                                        },
                                        {
                                            chinese: "\u6218\u58EB",
                                            pinyin: "zh\u00E0n'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u9762",
                                            pinyin: "mi\u00E0n"
                                        },
                                        {
                                            chinese: "\u60F3",
                                            pinyin: "xi\u01CEng"
                                        },
                                        {
                                            chinese: "\u544A\u8BC9",
                                            pinyin: "g\u00E0o's\u00F9"
                                        },
                                        {
                                            chinese: "\u5C31",
                                            pinyin: "ji\u00F9"
                                        },
                                        {
                                            chinese: "\u4EAC",
                                            pinyin: "j\u012Bng"
                                        },
                                        {
                                            chinese: "\u5B89",
                                            pinyin: "\u0101n"
                                        },
                                        {
                                            chinese: "\u5E7F",
                                            pinyin: "gu\u01CEng"
                                        },
                                        {
                                            chinese: "\u975E\u5E38",
                                            pinyin: "f\u0113i'ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u58EE\u89C2",
                                            pinyin: "zhu\u00E0ng'gu\u0101n"
                                        },
                                        {
                                            chinese: "\u63A5",
                                            pinyin: "ji\u0113"
                                        },
                                        {
                                            chinese: "\u89C9",
                                            pinyin: "ji\u00E0o"
                                        },
                                        {
                                            chinese: "\u518D",
                                            pinyin: "z\u00E0i"
                                        },
                                        {
                                            chinese: "\u505A",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u5404\u79CD",
                                            pinyin: "g\u00E8'zh\u01D2ng"
                                        },
                                        {
                                            chinese: "\u6837",
                                            pinyin: "y\u00E0ng"
                                        },
                                        {
                                            chinese: "\u4F19\u4F34",
                                            pinyin: "hu\u01D2'b\u00E0n"
                                        },
                                        {
                                            chinese: "\u5374",
                                            pinyin: "qu\u00E8"
                                        },
                                        {
                                            chinese: "\u4E5F",
                                            pinyin: "y\u011B"
                                        },
                                        {
                                            chinese: "\u8DA3",
                                            pinyin: "q\u00F9"
                                        },
                                        {
                                            chinese: "\u8FD9",
                                            pinyin: "zh\u00E8"
                                        },
                                        {
                                            chinese: "\u592A\u9633",
                                            pinyin: "t\u00E0i'y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u9053",
                                            pinyin: "d\u00E0o"
                                        },
                                        {
                                            chinese: "\u9001",
                                            pinyin: "s\u00F2ng"
                                        },
                                        {
                                            chinese: "\u5FD9",
                                            pinyin: "m\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5C1D",
                                            pinyin: "ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u9999\u751C",
                                            pinyin: "xi\u0101ng'ti\u00E1n"
                                        },
                                        {
                                            chinese: "\u6E29\u6696",
                                            pinyin: "w\u0113n'nu\u01CEn"
                                        },
                                        {
                                            chinese: "\u8BE5",
                                            pinyin: "g\u0101i"
                                        },
                                        {
                                            chinese: "\u989C",
                                            pinyin: "y\u00E1n"
                                        },
                                        {
                                            chinese: "\u56E0",
                                            pinyin: "y\u012Bn"
                                        },
                                        {
                                            chinese: "\u8F86",
                                            pinyin: "li\u00E0ng"
                                        },
                                        {
                                            chinese: "\u5339",
                                            pinyin: "p\u01D0"
                                        },
                                        {
                                            chinese: "\u518C",
                                            pinyin: "c\u00E8"
                                        },
                                        {
                                            chinese: "\u652F",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u94C5",
                                            pinyin: "qi\u0101n"
                                        },
                                        {
                                            chinese: "\u68F5",
                                            pinyin: "k\u0113"
                                        },
                                        {
                                            chinese: "\u67B6",
                                            pinyin: "ji\u00E0"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 3",
                                        zh_cn: "\u8BC6\u5B57\u88683",
                                        zh_tw: "\u8B58\u5B57\u93363"
                                    },
                                    words: [{
                                            chinese: "\u5757",
                                            pinyin: "ku\u00E0i"
                                        },
                                        {
                                            chinese: "\u6349",
                                            pinyin: "zhu\u014D"
                                        },
                                        {
                                            chinese: "\u6025",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u76F4",
                                            pinyin: "zh\u00ED"
                                        },
                                        {
                                            chinese: "\u6CB3",
                                            pinyin: "h\u00E9"
                                        },
                                        {
                                            chinese: "\u884C",
                                            pinyin: "h\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6B7B",
                                            pinyin: "s\u01D0"
                                        },
                                        {
                                            chinese: "\u4FE1",
                                            pinyin: "x\u00ECn"
                                        },
                                        {
                                            chinese: "\u8DDF",
                                            pinyin: "g\u0113n"
                                        },
                                        {
                                            chinese: "\u5FFD",
                                            pinyin: "h\u016B"
                                        },
                                        {
                                            chinese: "\u558A",
                                            pinyin: "h\u01CEn"
                                        },
                                        {
                                            chinese: "\u8EAB",
                                            pinyin: "sh\u0113n"
                                        },
                                        {
                                            chinese: "\u53EA",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u7A9D",
                                            pinyin: "w\u014D"
                                        },
                                        {
                                            chinese: "\u5B64\u5355",
                                            pinyin: "g\u016B'd\u0101n"
                                        },
                                        {
                                            chinese: "\u79CD",
                                            pinyin: "zh\u01D2ng"
                                        },
                                        {
                                            chinese: "\u90FD",
                                            pinyin: "d\u014Du"
                                        },
                                        {
                                            chinese: "\u90BB\u5C45",
                                            pinyin: "l\u00EDn'j\u016B"
                                        },
                                        {
                                            chinese: "\u62DB\u547C",
                                            pinyin: "zh\u0101o'hu"
                                        },
                                        {
                                            chinese: "\u9759",
                                            pinyin: "j\u00ECng"
                                        },
                                        {
                                            chinese: "\u4E50",
                                            pinyin: "l\u00E8"
                                        },
                                        {
                                            chinese: "\u600E",
                                            pinyin: "z\u011Bn"
                                        },
                                        {
                                            chinese: "\u72EC",
                                            pinyin: "d\u00FA"
                                        },
                                        {
                                            chinese: "\u8DF3\u7EF3",
                                            pinyin: "ti\u00E0o'sh\u00E9ng"
                                        },
                                        {
                                            chinese: "\u8BB2",
                                            pinyin: "ji\u01CEng"
                                        },
                                        {
                                            chinese: "\u5F97",
                                            pinyin: "d\u00E9"
                                        },
                                        {
                                            chinese: "\u7FBD",
                                            pinyin: "y\u01D4"
                                        },
                                        {
                                            chinese: "\u7403",
                                            pinyin: "qi\u00FA"
                                        },
                                        {
                                            chinese: "\u620F",
                                            pinyin: "x\u00EC"
                                        },
                                        {
                                            chinese: "\u6392",
                                            pinyin: "p\u00E1i"
                                        },
                                        {
                                            chinese: "\u7BEE",
                                            pinyin: "l\u00E1n"
                                        },
                                        {
                                            chinese: "\u8FDE",
                                            pinyin: "li\u00E1n"
                                        },
                                        {
                                            chinese: "\u8FD0",
                                            pinyin: "y\u00F9n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 4",
                                        zh_cn: "\u8BC6\u5B57\u88684",
                                        zh_tw: "\u8B58\u5B57\u93364"
                                    },
                                    words: [{
                                            chinese: "\u591C",
                                            pinyin: "y\u00E8"
                                        },
                                        {
                                            chinese: "\u601D",
                                            pinyin: "s\u012B"
                                        },
                                        {
                                            chinese: "\u5E8A",
                                            pinyin: "chu\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5149",
                                            pinyin: "gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u7591",
                                            pinyin: "y\u00ED"
                                        },
                                        {
                                            chinese: "\u4E3E",
                                            pinyin: "j\u01D4"
                                        },
                                        {
                                            chinese: "\u671B",
                                            pinyin: "w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u4F4E",
                                            pinyin: "d\u012B"
                                        },
                                        {
                                            chinese: "\u6545",
                                            pinyin: "g\u00F9"
                                        },
                                        {
                                            chinese: "\u80C6\u6562",
                                            pinyin: "d\u01CEn'g\u01CEn"
                                        },
                                        {
                                            chinese: "\u5F80",
                                            pinyin: "w\u01CEng"
                                        },
                                        {
                                            chinese: "\u5916",
                                            pinyin: "w\u00E0i"
                                        },
                                        {
                                            chinese: "\u52C7",
                                            pinyin: "y\u01D2ng"
                                        },
                                        {
                                            chinese: "\u7A97",
                                            pinyin: "chu\u0101ng"
                                        },
                                        {
                                            chinese: "\u4E71",
                                            pinyin: "lu\u00E0n"
                                        },
                                        {
                                            chinese: "\u504F",
                                            pinyin: "pi\u0101n"
                                        },
                                        {
                                            chinese: "\u6563",
                                            pinyin: "s\u00E0n"
                                        },
                                        {
                                            chinese: "\u539F",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u50CF",
                                            pinyin: "xi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u5FAE",
                                            pinyin: "w\u0113i"
                                        },
                                        {
                                            chinese: "\u7AEF",
                                            pinyin: "du\u0101n"
                                        },
                                        {
                                            chinese: "\u7CBD",
                                            pinyin: "z\u00F2ng"
                                        },
                                        {
                                            chinese: "\u8282",
                                            pinyin: "ji\u00E9"
                                        },
                                        {
                                            chinese: "\u603B",
                                            pinyin: "z\u01D2ng"
                                        },
                                        {
                                            chinese: "\u7C73",
                                            pinyin: "m\u01D0"
                                        },
                                        {
                                            chinese: "\u95F4",
                                            pinyin: "ji\u0101n"
                                        },
                                        {
                                            chinese: "\u5206",
                                            pinyin: "f\u0113n"
                                        },
                                        {
                                            chinese: "\u8C46",
                                            pinyin: "d\u00F2u"
                                        },
                                        {
                                            chinese: "\u8089",
                                            pinyin: "r\u00F2u"
                                        },
                                        {
                                            chinese: "\u5E26",
                                            pinyin: "d\u00E0i"
                                        },
                                        {
                                            chinese: "\u77E5",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u636E",
                                            pinyin: "j\u00F9"
                                        },
                                        {
                                            chinese: "\u5FF5",
                                            pinyin: "ni\u00E0n"
                                        },
                                        {
                                            chinese: "\u8679",
                                            pinyin: "h\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5EA7",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u6D47",
                                            pinyin: "ji\u0101o"
                                        },
                                        {
                                            chinese: "\u63D0",
                                            pinyin: "t\u00ED"
                                        },
                                        {
                                            chinese: "\u6D12",
                                            pinyin: "s\u01CE"
                                        },
                                        {
                                            chinese: "\u6311",
                                            pinyin: "ti\u0101o"
                                        },
                                        {
                                            chinese: "\u5174",
                                            pinyin: "x\u00ECng"
                                        },
                                        {
                                            chinese: "\u955C",
                                            pinyin: "j\u00ECng"
                                        },
                                        {
                                            chinese: "\u62FF",
                                            pinyin: "n\u00E1"
                                        },
                                        {
                                            chinese: "\u7167",
                                            pinyin: "zh\u00E0o"
                                        },
                                        {
                                            chinese: "\u5343",
                                            pinyin: "qi\u0101n"
                                        },
                                        {
                                            chinese: "\u88D9",
                                            pinyin: "q\u00FAn"
                                        },
                                        {
                                            chinese: "\u7709",
                                            pinyin: "m\u00E9i"
                                        },
                                        {
                                            chinese: "\u9F3B",
                                            pinyin: "b\u00ED"
                                        },
                                        {
                                            chinese: "\u5634",
                                            pinyin: "zu\u01D0"
                                        },
                                        {
                                            chinese: "\u8116",
                                            pinyin: "b\u00F3"
                                        },
                                        {
                                            chinese: "\u81C2",
                                            pinyin: "b\u00EC"
                                        },
                                        {
                                            chinese: "\u809A",
                                            pinyin: "d\u00F9"
                                        },
                                        {
                                            chinese: "\u817F\u811A",
                                            pinyin: "tu\u01D0'ji\u01CEo"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 5",
                                        zh_cn: "\u8BC6\u5B57\u88685",
                                        zh_tw: "\u8B58\u5B57\u93365"
                                    },
                                    words: [{
                                            chinese: "\u873B\u8713",
                                            pinyin: "q\u012Bng't\u00EDng"
                                        },
                                        {
                                            chinese: "\u8FF7",
                                            pinyin: "m\u00ED"
                                        },
                                        {
                                            chinese: "\u85CF",
                                            pinyin: "c\u00E1ng"
                                        },
                                        {
                                            chinese: "\u9020",
                                            pinyin: "z\u00E0o"
                                        },
                                        {
                                            chinese: "\u8682\u8681",
                                            pinyin: "m\u01CE'y\u01D0"
                                        },
                                        {
                                            chinese: "\u98DF",
                                            pinyin: "sh\u00ED"
                                        },
                                        {
                                            chinese: "\u7CAE",
                                            pinyin: "li\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8718\u86DB\u7F51",
                                            pinyin: "zh\u012B'zh\u016B'w\u01CEng"
                                        },
                                        {
                                            chinese: "\u5706",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u4E25\u5BD2",
                                            pinyin: "y\u00E1n'h\u00E1n"
                                        },
                                        {
                                            chinese: "\u9177\u6691",
                                            pinyin: "k\u00F9'sh\u01D4"
                                        },
                                        {
                                            chinese: "\u51C9",
                                            pinyin: "li\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6668",
                                            pinyin: "ch\u00E9n"
                                        },
                                        {
                                            chinese: "\u7EC6",
                                            pinyin: "x\u00EC"
                                        },
                                        {
                                            chinese: "\u671D\u971E",
                                            pinyin: "zh\u0101o'xi\u00E1"
                                        },
                                        {
                                            chinese: "\u5915",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u6768",
                                            pinyin: "y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u64CD\u573A",
                                            pinyin: "c\u0101o'ch\u01CEng"
                                        },
                                        {
                                            chinese: "\u62D4",
                                            pinyin: "b\u00E1"
                                        },
                                        {
                                            chinese: "\u62CD",
                                            pinyin: "p\u0101i"
                                        },
                                        {
                                            chinese: "\u8DD1",
                                            pinyin: "p\u01CEo"
                                        },
                                        {
                                            chinese: "\u8E22",
                                            pinyin: "t\u012B"
                                        },
                                        {
                                            chinese: "\u94C3",
                                            pinyin: "l\u00EDng"
                                        },
                                        {
                                            chinese: "\u70ED\u95F9",
                                            pinyin: "r\u00E8'nao"
                                        },
                                        {
                                            chinese: "\u953B\u70BC",
                                            pinyin: "du\u00E0n'li\u00E0n"
                                        },
                                        {
                                            chinese: "\u4F53",
                                            pinyin: "t\u01D0"
                                        },
                                        {
                                            chinese: "\u4E4B",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u521D",
                                            pinyin: "ch\u016B"
                                        },
                                        {
                                            chinese: "\u6027",
                                            pinyin: "x\u00ECng"
                                        },
                                        {
                                            chinese: "\u5584",
                                            pinyin: "sh\u00E0n"
                                        },
                                        {
                                            chinese: "\u4E60",
                                            pinyin: "x\u00ED"
                                        },
                                        {
                                            chinese: "\u6559",
                                            pinyin: "ji\u00E0o"
                                        },
                                        {
                                            chinese: "\u8FC1",
                                            pinyin: "qi\u0101n"
                                        },
                                        {
                                            chinese: "\u8D35",
                                            pinyin: "gu\u00EC"
                                        },
                                        {
                                            chinese: "\u4E13",
                                            pinyin: "zhu\u0101n"
                                        },
                                        {
                                            chinese: "\u5E7C",
                                            pinyin: "y\u00F2u"
                                        },
                                        {
                                            chinese: "\u7389\u5668",
                                            pinyin: "y\u00F9'q\u00EC"
                                        },
                                        {
                                            chinese: "\u4E49",
                                            pinyin: "y\u00EC"
                                        },
                                        {
                                            chinese: "\u996D",
                                            pinyin: "f\u00E0n"
                                        },
                                        {
                                            chinese: "\u80FD",
                                            pinyin: "n\u00E9ng"
                                        },
                                        {
                                            chinese: "\u9971",
                                            pinyin: "b\u01CEo"
                                        },
                                        {
                                            chinese: "\u8336",
                                            pinyin: "ch\u00E1"
                                        },
                                        {
                                            chinese: "\u6CE1",
                                            pinyin: "p\u00E0o"
                                        },
                                        {
                                            chinese: "\u8F7B",
                                            pinyin: "q\u012Bng"
                                        },
                                        {
                                            chinese: "\u97AD\u70AE",
                                            pinyin: "bi\u0101n'p\u00E0o"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 6",
                                        zh_cn: "\u8BC6\u5B57\u88686",
                                        zh_tw: "\u8B58\u5B57\u93366"
                                    },
                                    words: [{
                                            chinese: "\u9996",
                                            pinyin: "sh\u01D2u"
                                        },
                                        {
                                            chinese: "\u8E2A\u8FF9",
                                            pinyin: "z\u014Dng'j\u00EC"
                                        },
                                        {
                                            chinese: "\u6D6E\u840D",
                                            pinyin: "f\u00FA'p\u00EDng"
                                        },
                                        {
                                            chinese: "\u6CC9\u6D41",
                                            pinyin: "qu\u00E1n'li\u00FA"
                                        },
                                        {
                                            chinese: "\u7231",
                                            pinyin: "\u00E0i"
                                        },
                                        {
                                            chinese: "\u67D4",
                                            pinyin: "r\u00F3u"
                                        },
                                        {
                                            chinese: "\u8377",
                                            pinyin: "h\u00E9"
                                        },
                                        {
                                            chinese: "\u9732",
                                            pinyin: "l\u00F9"
                                        },
                                        {
                                            chinese: "\u89D2",
                                            pinyin: "ji\u01CEo"
                                        },
                                        {
                                            chinese: "\u73E0",
                                            pinyin: "zh\u016B"
                                        },
                                        {
                                            chinese: "\u6447",
                                            pinyin: "y\u00E1o"
                                        },
                                        {
                                            chinese: "\u8EBA",
                                            pinyin: "t\u01CEng"
                                        },
                                        {
                                            chinese: "\u6676",
                                            pinyin: "j\u012Bng"
                                        },
                                        {
                                            chinese: "\u505C\u673A",
                                            pinyin: "t\u00EDng'j\u012B"
                                        },
                                        {
                                            chinese: "\u5C55",
                                            pinyin: "zh\u01CEn"
                                        },
                                        {
                                            chinese: "\u900F",
                                            pinyin: "t\u00F2u"
                                        },
                                        {
                                            chinese: "\u7FC5\u8180",
                                            pinyin: "ch\u00EC'b\u01CEng"
                                        },
                                        {
                                            chinese: "\u5531",
                                            pinyin: "ch\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6735",
                                            pinyin: "du\u01D2"
                                        },
                                        {
                                            chinese: "\u8170",
                                            pinyin: "y\u0101o"
                                        },
                                        {
                                            chinese: "\u5761",
                                            pinyin: "p\u014D"
                                        },
                                        {
                                            chinese: "\u6C89",
                                            pinyin: "ch\u00E9n"
                                        },
                                        {
                                            chinese: "\u4F38",
                                            pinyin: "sh\u0113n"
                                        },
                                        {
                                            chinese: "\u6F6E\u6E7F",
                                            pinyin: "ch\u00E1o'sh\u012B"
                                        },
                                        {
                                            chinese: "\u5462",
                                            pinyin: "ne"
                                        },
                                        {
                                            chinese: "\u7A7A",
                                            pinyin: "k\u014Dng"
                                        },
                                        {
                                            chinese: "\u95F7",
                                            pinyin: "m\u00E8n"
                                        },
                                        {
                                            chinese: "\u6D88\u606F",
                                            pinyin: "xi\u0101o'xi"
                                        },
                                        {
                                            chinese: "\u642C",
                                            pinyin: "b\u0101n"
                                        },
                                        {
                                            chinese: "\u54CD",
                                            pinyin: "xi\u01CEng"
                                        },
                                        {
                                            chinese: "\u68CD",
                                            pinyin: "g\u00F9n"
                                        },
                                        {
                                            chinese: "\u6C64",
                                            pinyin: "t\u0101ng"
                                        },
                                        {
                                            chinese: "\u6247",
                                            pinyin: "sh\u00E0n"
                                        },
                                        {
                                            chinese: "\u6905",
                                            pinyin: "y\u01D0"
                                        },
                                        {
                                            chinese: "\u8424",
                                            pinyin: "y\u00EDng"
                                        },
                                        {
                                            chinese: "\u7275",
                                            pinyin: "qi\u0101n"
                                        },
                                        {
                                            chinese: "\u7EC7",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u6597",
                                            pinyin: "d\u00F2u"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 7",
                                        zh_cn: "\u8BC6\u5B57\u88687",
                                        zh_tw: "\u8B58\u5B57\u93367"
                                    },
                                    words: [{
                                            chinese: "\u5177",
                                            pinyin: "j\u00F9"
                                        },
                                        {
                                            chinese: "\u6B21",
                                            pinyin: "c\u00EC"
                                        },
                                        {
                                            chinese: "\u4E22",
                                            pinyin: "di\u016B"
                                        },
                                        {
                                            chinese: "\u54EA",
                                            pinyin: "n\u01CE"
                                        },
                                        {
                                            chinese: "\u65B0",
                                            pinyin: "x\u012Bn"
                                        },
                                        {
                                            chinese: "\u6BCF",
                                            pinyin: "m\u011Bi"
                                        },
                                        {
                                            chinese: "\u5E73",
                                            pinyin: "p\u00EDng"
                                        },
                                        {
                                            chinese: "\u5979",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u4E9B",
                                            pinyin: "xi\u0113"
                                        },
                                        {
                                            chinese: "\u4ED4",
                                            pinyin: "z\u01CEi"
                                        },
                                        {
                                            chinese: "\u68C0\u67E5\u6240",
                                            pinyin: "ji\u01CEn'ch\u00E1'su\u01D2"
                                        },
                                        {
                                            chinese: "\u949F",
                                            pinyin: "zh\u014Dng"
                                        },
                                        {
                                            chinese: "\u4E01",
                                            pinyin: "d\u012Bng"
                                        },
                                        {
                                            chinese: "\u5143",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u8FDF",
                                            pinyin: "ch\u00ED"
                                        },
                                        {
                                            chinese: "\u6D17",
                                            pinyin: "x\u01D0"
                                        },
                                        {
                                            chinese: "\u80CC",
                                            pinyin: "b\u00E8i"
                                        },
                                        {
                                            chinese: "\u521A",
                                            pinyin: "g\u0101ng"
                                        },
                                        {
                                            chinese: "\u5171",
                                            pinyin: "g\u00F2ng"
                                        },
                                        {
                                            chinese: "\u6C7D",
                                            pinyin: "q\u00EC"
                                        },
                                        {
                                            chinese: "\u51B3\u5B9A",
                                            pinyin: "ju\u00E9'd\u00ECng"
                                        },
                                        {
                                            chinese: "\u5DF2\u7ECF",
                                            pinyin: "y\u01D0'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u7269",
                                            pinyin: "w\u00F9"
                                        },
                                        {
                                            chinese: "\u864E",
                                            pinyin: "h\u01D4"
                                        },
                                        {
                                            chinese: "\u718A",
                                            pinyin: "xi\u00F3ng"
                                        },
                                        {
                                            chinese: "\u901A",
                                            pinyin: "t\u014Dng"
                                        },
                                        {
                                            chinese: "\u6CE8\u610F",
                                            pinyin: "zh\u00F9'y\u00EC"
                                        },
                                        {
                                            chinese: "\u904D",
                                            pinyin: "bi\u00E0n"
                                        },
                                        {
                                            chinese: "\u767E",
                                            pinyin: "b\u01CEi"
                                        },
                                        {
                                            chinese: "\u820C",
                                            pinyin: "sh\u00E9"
                                        },
                                        {
                                            chinese: "\u9B3C\u8138",
                                            pinyin: "gu\u01D0'li\u01CEn"
                                        },
                                        {
                                            chinese: "\u51C6",
                                            pinyin: "zh\u01D4n"
                                        },
                                        {
                                            chinese: "\u7B2C",
                                            pinyin: "d\u00EC"
                                        },
                                        {
                                            chinese: "\u7334",
                                            pinyin: "h\u00F3u"
                                        },
                                        {
                                            chinese: "\u7ED3",
                                            pinyin: "ji\u00E9"
                                        },
                                        {
                                            chinese: "\u63B0",
                                            pinyin: "b\u0101i"
                                        },
                                        {
                                            chinese: "\u625B",
                                            pinyin: "k\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6EE1",
                                            pinyin: "m\u01CEn"
                                        },
                                        {
                                            chinese: "\u6254",
                                            pinyin: "r\u0113ng"
                                        },
                                        {
                                            chinese: "\u6458",
                                            pinyin: "zh\u0101i"
                                        },
                                        {
                                            chinese: "\u6367",
                                            pinyin: "p\u011Bng"
                                        },
                                        {
                                            chinese: "\u74DC",
                                            pinyin: "gu\u0101"
                                        },
                                        {
                                            chinese: "\u62B1",
                                            pinyin: "b\u00E0o"
                                        },
                                        {
                                            chinese: "\u8E66",
                                            pinyin: "b\u00E8ng"
                                        },
                                        {
                                            chinese: "\u8FFD",
                                            pinyin: "zhu\u012B"
                                        },
                                        {
                                            chinese: "\u5435",
                                            pinyin: "ch\u01CEo"
                                        },
                                        {
                                            chinese: "\u80D6",
                                            pinyin: "p\u00E0ng"
                                        },
                                        {
                                            chinese: "\u5C81",
                                            pinyin: "su\u00EC"
                                        },
                                        {
                                            chinese: "\u73B0",
                                            pinyin: "xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u7968",
                                            pinyin: "pi\u00E0o"
                                        },
                                        {
                                            chinese: "\u4EA4",
                                            pinyin: "ji\u0101o"
                                        },
                                        {
                                            chinese: "\u5F13",
                                            pinyin: "g\u014Dng"
                                        },
                                        {
                                            chinese: "\u7518",
                                            pinyin: "g\u0101n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 8",
                                        zh_cn: "\u8BC6\u5B57\u88688",
                                        zh_tw: "\u8B58\u5B57\u93368"
                                    },
                                    words: [{
                                            chinese: "\u68C9",
                                            pinyin: "mi\u00E1n"
                                        },
                                        {
                                            chinese: "\u5A18",
                                            pinyin: "ni\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6CBB",
                                            pinyin: "zh\u00EC"
                                        },
                                        {
                                            chinese: "\u71D5",
                                            pinyin: "y\u00E0n"
                                        },
                                        {
                                            chinese: "\u522B",
                                            pinyin: "bi\u00E9"
                                        },
                                        {
                                            chinese: "\u5E72",
                                            pinyin: "g\u00E0n"
                                        },
                                        {
                                            chinese: "\u7136",
                                            pinyin: "r\u00E1n"
                                        },
                                        {
                                            chinese: "\u5947",
                                            pinyin: "q\u00ED"
                                        },
                                        {
                                            chinese: "\u9897",
                                            pinyin: "k\u0113"
                                        },
                                        {
                                            chinese: "\u74E2",
                                            pinyin: "pi\u00E1o"
                                        },
                                        {
                                            chinese: "\u78A7",
                                            pinyin: "b\u00EC"
                                        },
                                        {
                                            chinese: "\u5410",
                                            pinyin: "t\u01D4"
                                        },
                                        {
                                            chinese: "\u5566",
                                            pinyin: "l\u0101"
                                        },
                                        {
                                            chinese: "\u5495\u549A",
                                            pinyin: "g\u016B'd\u014Dng"
                                        },
                                        {
                                            chinese: "\u719F",
                                            pinyin: "sh\u00FA"
                                        },
                                        {
                                            chinese: "\u6389",
                                            pinyin: "di\u00E0o"
                                        },
                                        {
                                            chinese: "\u5413",
                                            pinyin: "xi\u00E0"
                                        },
                                        {
                                            chinese: "\u7F8A",
                                            pinyin: "y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u9E7F",
                                            pinyin: "l\u00F9"
                                        },
                                        {
                                            chinese: "\u9003\u547D",
                                            pinyin: "t\u00E1o'm\u00ECng"
                                        },
                                        {
                                            chinese: "\u8C61",
                                            pinyin: "xi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u91CE",
                                            pinyin: "y\u011B"
                                        },
                                        {
                                            chinese: "\u62E6",
                                            pinyin: "l\u00E1n"
                                        },
                                        {
                                            chinese: "\u9886",
                                            pinyin: "l\u01D0ng"
                                        },
                                        {
                                            chinese: "\u58C1",
                                            pinyin: "b\u00EC"
                                        },
                                        {
                                            chinese: "\u5899",
                                            pinyin: "qi\u00E1ng"
                                        },
                                        {
                                            chinese: "\u868A",
                                            pinyin: "w\u00E9n"
                                        },
                                        {
                                            chinese: "\u54AC",
                                            pinyin: "y\u01CEo"
                                        },
                                        {
                                            chinese: "\u65AD",
                                            pinyin: "du\u00E0n"
                                        },
                                        {
                                            chinese: "\u60A8",
                                            pinyin: "n\u00EDn"
                                        },
                                        {
                                            chinese: "\u62E8",
                                            pinyin: "b\u014D"
                                        },
                                        {
                                            chinese: "\u7529",
                                            pinyin: "shu\u01CEi"
                                        },
                                        {
                                            chinese: "\u8D76",
                                            pinyin: "g\u01CEn"
                                        },
                                        {
                                            chinese: "\u623F",
                                            pinyin: "f\u00E1ng"
                                        },
                                        {
                                            chinese: "\u50BB",
                                            pinyin: "sh\u01CE"
                                        },
                                        {
                                            chinese: "\u8F6C",
                                            pinyin: "zhu\u01CEn"
                                        },
                                        {
                                            chinese: "\u536B",
                                            pinyin: "w\u00E8i"
                                        },
                                        {
                                            chinese: "\u5237",
                                            pinyin: "shu\u0101"
                                        },
                                        {
                                            chinese: "\u68B3",
                                            pinyin: "sh\u016B"
                                        },
                                        {
                                            chinese: "\u5DFE",
                                            pinyin: "j\u012Bn"
                                        },
                                        {
                                            chinese: "\u64E6",
                                            pinyin: "c\u0101"
                                        },
                                        {
                                            chinese: "\u7682",
                                            pinyin: "z\u00E0o"
                                        },
                                        {
                                            chinese: "\u6FA1",
                                            pinyin: "z\u01CEo"
                                        },
                                        {
                                            chinese: "\u76C6",
                                            pinyin: "p\u00E9n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 1",
                                        zh_cn: "\u5199\u5B57\u88681",
                                        zh_tw: "\u5BEB\u5B57\u93361"
                                    },
                                    words: [{
                                            chinese: "\u6625",
                                            pinyin: "ch\u016Bn"
                                        },
                                        {
                                            chinese: "\u51AC",
                                            pinyin: "d\u014Dng"
                                        },
                                        {
                                            chinese: "\u98CE\u96EA",
                                            pinyin: "f\u0113ng'xu\u011B"
                                        },
                                        {
                                            chinese: "\u82B1",
                                            pinyin: "hu\u0101"
                                        },
                                        {
                                            chinese: "\u98DE",
                                            pinyin: "f\u0113i"
                                        },
                                        {
                                            chinese: "\u5165",
                                            pinyin: "r\u00F9"
                                        },
                                        {
                                            chinese: "\u59D3",
                                            pinyin: "x\u00ECng"
                                        },
                                        {
                                            chinese: "\u4EC0\u4E48",
                                            pinyin: "sh\u00E9n'me"
                                        },
                                        {
                                            chinese: "\u53CC",
                                            pinyin: "shu\u0101ng"
                                        },
                                        {
                                            chinese: "\u56FD\u738B",
                                            pinyin: "gu\u00F3'w\u00E1ng"
                                        },
                                        {
                                            chinese: "\u65B9",
                                            pinyin: "f\u0101ng"
                                        },
                                        {
                                            chinese: "\u9752",
                                            pinyin: "q\u012Bng"
                                        },
                                        {
                                            chinese: "\u6E05\u6C14",
                                            pinyin: "q\u012Bng'q\u00EC"
                                        },
                                        {
                                            chinese: "\u6674",
                                            pinyin: "q\u00EDng"
                                        },
                                        {
                                            chinese: "\u60C5",
                                            pinyin: "q\u00EDng"
                                        },
                                        {
                                            chinese: "\u8BF7",
                                            pinyin: "q\u01D0ng"
                                        },
                                        {
                                            chinese: "\u751F",
                                            pinyin: "sh\u0113ng"
                                        },
                                        {
                                            chinese: "\u5B57",
                                            pinyin: "z\u00EC"
                                        },
                                        {
                                            chinese: "\u5DE6\u53F3",
                                            pinyin: "zu\u01D2'y\u00F2u"
                                        },
                                        {
                                            chinese: "\u7EA2",
                                            pinyin: "h\u00F3ng"
                                        },
                                        {
                                            chinese: "\u65F6",
                                            pinyin: "sh\u00ED"
                                        },
                                        {
                                            chinese: "\u52A8",
                                            pinyin: "d\u00F2ng"
                                        },
                                        {
                                            chinese: "\u4E07",
                                            pinyin: "w\u00E0n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 2",
                                        zh_cn: "\u5199\u5B57\u88682",
                                        zh_tw: "\u5BEB\u5B57\u93362"
                                    },
                                    words: [{
                                            chinese: "\u5403",
                                            pinyin: "ch\u012B"
                                        },
                                        {
                                            chinese: "\u53EB",
                                            pinyin: "ji\u00E0o"
                                        },
                                        {
                                            chinese: "\u4E3B",
                                            pinyin: "zh\u01D4"
                                        },
                                        {
                                            chinese: "\u6C5F",
                                            pinyin: "ji\u0101ng"
                                        },
                                        {
                                            chinese: "\u4F4F",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u6CA1",
                                            pinyin: "m\u00E9i"
                                        },
                                        {
                                            chinese: "\u4EE5",
                                            pinyin: "y\u01D0"
                                        },
                                        {
                                            chinese: "\u591A",
                                            pinyin: "du\u014D"
                                        },
                                        {
                                            chinese: "\u4F1A",
                                            pinyin: "hu\u00EC"
                                        },
                                        {
                                            chinese: "\u8D70",
                                            pinyin: "z\u01D2u"
                                        },
                                        {
                                            chinese: "\u5317\u4EAC",
                                            pinyin: "b\u011Bi'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u5E7F",
                                            pinyin: "gu\u01CEng"
                                        },
                                        {
                                            chinese: "\u8FC7",
                                            pinyin: "gu\u00F2"
                                        },
                                        {
                                            chinese: "\u5404\u79CD",
                                            pinyin: "g\u00E8'zh\u01D2ng"
                                        },
                                        {
                                            chinese: "\u6837",
                                            pinyin: "y\u00E0ng"
                                        },
                                        {
                                            chinese: "\u4F19\u4F34",
                                            pinyin: "hu\u01D2'b\u00E0n"
                                        },
                                        {
                                            chinese: "\u8FD9",
                                            pinyin: "zh\u00E8"
                                        },
                                        {
                                            chinese: "\u592A\u9633",
                                            pinyin: "t\u00E0i'y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6821",
                                            pinyin: "xi\u00E0o"
                                        },
                                        {
                                            chinese: "\u91D1\u79CB",
                                            pinyin: "j\u012Bn'qi\u016B"
                                        },
                                        {
                                            chinese: "\u56E0\u4E3A",
                                            pinyin: "y\u012Bn'w\u00E9i"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 3",
                                        zh_cn: "\u5199\u5B57\u88683",
                                        zh_tw: "\u5BEB\u5B57\u93363"
                                    },
                                    words: [{
                                            chinese: "\u4ED6",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u5730",
                                            pinyin: "d\u00EC"
                                        },
                                        {
                                            chinese: "\u6CB3",
                                            pinyin: "h\u00E9"
                                        },
                                        {
                                            chinese: "\u8BF4",
                                            pinyin: "shu\u014D"
                                        },
                                        {
                                            chinese: "\u4E5F",
                                            pinyin: "y\u011B"
                                        },
                                        {
                                            chinese: "\u542C",
                                            pinyin: "t\u012Bng"
                                        },
                                        {
                                            chinese: "\u54E5",
                                            pinyin: "g\u0113"
                                        },
                                        {
                                            chinese: "\u5355",
                                            pinyin: "d\u0101n"
                                        },
                                        {
                                            chinese: "\u5C45",
                                            pinyin: "j\u016B"
                                        },
                                        {
                                            chinese: "\u62DB\u547C",
                                            pinyin: "zh\u0101o'hu"
                                        },
                                        {
                                            chinese: "\u5FEB\u4E50",
                                            pinyin: "ku\u00E0i'l\u00E8"
                                        },
                                        {
                                            chinese: "\u73A9",
                                            pinyin: "w\u00E1n"
                                        },
                                        {
                                            chinese: "\u5F88",
                                            pinyin: "h\u011Bn"
                                        },
                                        {
                                            chinese: "\u5F53",
                                            pinyin: "d\u0101ng"
                                        },
                                        {
                                            chinese: "\u97F3",
                                            pinyin: "y\u012Bn"
                                        },
                                        {
                                            chinese: "\u8BB2",
                                            pinyin: "ji\u01CEng"
                                        },
                                        {
                                            chinese: "\u884C",
                                            pinyin: "h\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8BB8",
                                            pinyin: "x\u01D4"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 4",
                                        zh_cn: "\u5199\u5B57\u88684",
                                        zh_tw: "\u5BEB\u5B57\u93364"
                                    },
                                    words: [{
                                            chinese: "\u601D",
                                            pinyin: "s\u012B"
                                        },
                                        {
                                            chinese: "\u5E8A",
                                            pinyin: "chu\u00E1ng"
                                        },
                                        {
                                            chinese: "\u524D",
                                            pinyin: "qi\u00E1n"
                                        },
                                        {
                                            chinese: "\u5149",
                                            pinyin: "gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u4F4E",
                                            pinyin: "d\u012B"
                                        },
                                        {
                                            chinese: "\u6545\u4E61",
                                            pinyin: "g\u00F9'xi\u0101ng"
                                        },
                                        {
                                            chinese: "\u8272",
                                            pinyin: "s\u00E8"
                                        },
                                        {
                                            chinese: "\u5916",
                                            pinyin: "w\u00E0i"
                                        },
                                        {
                                            chinese: "\u770B",
                                            pinyin: "k\u00E0n"
                                        },
                                        {
                                            chinese: "\u7238",
                                            pinyin: "b\u00E0"
                                        },
                                        {
                                            chinese: "\u665A",
                                            pinyin: "w\u01CEn"
                                        },
                                        {
                                            chinese: "\u7B11",
                                            pinyin: "xi\u00E0o"
                                        },
                                        {
                                            chinese: "\u518D",
                                            pinyin: "z\u00E0i"
                                        },
                                        {
                                            chinese: "\u5348",
                                            pinyin: "w\u01D4"
                                        },
                                        {
                                            chinese: "\u8282",
                                            pinyin: "ji\u00E9"
                                        },
                                        {
                                            chinese: "\u53F6",
                                            pinyin: "y\u00E8"
                                        },
                                        {
                                            chinese: "\u7C73",
                                            pinyin: "m\u01D0"
                                        },
                                        {
                                            chinese: "\u771F",
                                            pinyin: "zh\u0113n"
                                        },
                                        {
                                            chinese: "\u5206",
                                            pinyin: "f\u0113n"
                                        },
                                        {
                                            chinese: "\u8C46",
                                            pinyin: "d\u00F2u"
                                        },
                                        {
                                            chinese: "\u90A3",
                                            pinyin: "n\u00E0"
                                        },
                                        {
                                            chinese: "\u770B\u5230",
                                            pinyin: "k\u00E0n'd\u00E0o"
                                        },
                                        {
                                            chinese: "\u9AD8\u5174",
                                            pinyin: "g\u0101o'x\u00ECng"
                                        },
                                        {
                                            chinese: "\u5343",
                                            pinyin: "qi\u0101n"
                                        },
                                        {
                                            chinese: "\u6210",
                                            pinyin: "ch\u00E9ng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 5",
                                        zh_cn: "\u5199\u5B57\u88685",
                                        zh_tw: "\u5BEB\u5B57\u93365"
                                    },
                                    words: [{
                                            chinese: "\u95F4",
                                            pinyin: "ji\u0101n"
                                        },
                                        {
                                            chinese: "\u8FF7",
                                            pinyin: "m\u00ED"
                                        },
                                        {
                                            chinese: "\u9020",
                                            pinyin: "z\u00E0o"
                                        },
                                        {
                                            chinese: "\u8FD0",
                                            pinyin: "y\u00F9n"
                                        },
                                        {
                                            chinese: "\u6C60",
                                            pinyin: "ch\u00ED"
                                        },
                                        {
                                            chinese: "\u6B22",
                                            pinyin: "hu\u0101n"
                                        },
                                        {
                                            chinese: "\u7F51",
                                            pinyin: "w\u01CEng"
                                        },
                                        {
                                            chinese: "\u53E4",
                                            pinyin: "g\u01D4"
                                        },
                                        {
                                            chinese: "\u51C9",
                                            pinyin: "li\u00E1ng"
                                        },
                                        {
                                            chinese: "\u7EC6",
                                            pinyin: "x\u00EC"
                                        },
                                        {
                                            chinese: "\u5915",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u674E",
                                            pinyin: "l\u01D0"
                                        },
                                        {
                                            chinese: "\u8BED",
                                            pinyin: "y\u01D4"
                                        },
                                        {
                                            chinese: "\u9999",
                                            pinyin: "xi\u0101ng"
                                        },
                                        {
                                            chinese: "\u6253",
                                            pinyin: "d\u01CE"
                                        },
                                        {
                                            chinese: "\u62CD",
                                            pinyin: "p\u0101i"
                                        },
                                        {
                                            chinese: "\u8DD1",
                                            pinyin: "p\u01CEo"
                                        },
                                        {
                                            chinese: "\u8DB3",
                                            pinyin: "z\u00FA"
                                        },
                                        {
                                            chinese: "\u58F0",
                                            pinyin: "sh\u0113ng"
                                        },
                                        {
                                            chinese: "\u8EAB\u4F53",
                                            pinyin: "sh\u0113n't\u01D0"
                                        },
                                        {
                                            chinese: "\u4E4B",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u76F8\u8FD1",
                                            pinyin: "xi\u0101ng'j\u00ECn"
                                        },
                                        {
                                            chinese: "\u4E60",
                                            pinyin: "x\u00ED"
                                        },
                                        {
                                            chinese: "\u8FDC",
                                            pinyin: "yu\u01CEn"
                                        },
                                        {
                                            chinese: "\u7389",
                                            pinyin: "y\u00F9"
                                        },
                                        {
                                            chinese: "\u4E49",
                                            pinyin: "y\u00EC"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 6",
                                        zh_cn: "\u5199\u5B57\u88686",
                                        zh_tw: "\u5BEB\u5B57\u93366"
                                    },
                                    words: [{
                                            chinese: "\u9996",
                                            pinyin: "sh\u01D2u"
                                        },
                                        {
                                            chinese: "\u91C7",
                                            pinyin: "c\u01CEi"
                                        },
                                        {
                                            chinese: "\u65E0",
                                            pinyin: "w\u00FA"
                                        },
                                        {
                                            chinese: "\u6811",
                                            pinyin: "sh\u00F9"
                                        },
                                        {
                                            chinese: "\u7231",
                                            pinyin: "\u00E0i"
                                        },
                                        {
                                            chinese: "\u5C16",
                                            pinyin: "ji\u0101n"
                                        },
                                        {
                                            chinese: "\u89D2",
                                            pinyin: "ji\u01CEo"
                                        },
                                        {
                                            chinese: "\u4EAE",
                                            pinyin: "li\u00E0ng"
                                        },
                                        {
                                            chinese: "\u673A\u53F0",
                                            pinyin: "j\u012B't\u00E1i"
                                        },
                                        {
                                            chinese: "\u653E",
                                            pinyin: "f\u00E0ng"
                                        },
                                        {
                                            chinese: "\u9C7C",
                                            pinyin: "y\u00FA"
                                        },
                                        {
                                            chinese: "\u6735",
                                            pinyin: "du\u01D2"
                                        },
                                        {
                                            chinese: "\u7F8E",
                                            pinyin: "m\u011Bi"
                                        },
                                        {
                                            chinese: "\u76F4",
                                            pinyin: "zh\u00ED"
                                        },
                                        {
                                            chinese: "\u5440",
                                            pinyin: "ya"
                                        },
                                        {
                                            chinese: "\u8FB9",
                                            pinyin: "bi\u0101n"
                                        },
                                        {
                                            chinese: "\u5462",
                                            pinyin: "ne"
                                        },
                                        {
                                            chinese: "\u5417",
                                            pinyin: "ma"
                                        },
                                        {
                                            chinese: "\u5427",
                                            pinyin: "ba"
                                        },
                                        {
                                            chinese: "\u52A0",
                                            pinyin: "ji\u0101"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 7",
                                        zh_cn: "\u5199\u5B57\u88687",
                                        zh_tw: "\u5BEB\u5B57\u93367"
                                    },
                                    words: [{
                                            chinese: "\u6587",
                                            pinyin: "w\u00E9n"
                                        },
                                        {
                                            chinese: "\u6B21",
                                            pinyin: "c\u00EC"
                                        },
                                        {
                                            chinese: "\u627E",
                                            pinyin: "zh\u01CEo"
                                        },
                                        {
                                            chinese: "\u5E73",
                                            pinyin: "p\u00EDng"
                                        },
                                        {
                                            chinese: "\u529E",
                                            pinyin: "b\u00E0n"
                                        },
                                        {
                                            chinese: "\u8BA9",
                                            pinyin: "r\u00E0ng"
                                        },
                                        {
                                            chinese: "\u5305",
                                            pinyin: "b\u0101o"
                                        },
                                        {
                                            chinese: "\u949F",
                                            pinyin: "zh\u014Dng"
                                        },
                                        {
                                            chinese: "\u4E01",
                                            pinyin: "d\u012Bng"
                                        },
                                        {
                                            chinese: "\u5143",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u5171",
                                            pinyin: "g\u00F2ng"
                                        },
                                        {
                                            chinese: "\u5DF2\u7ECF",
                                            pinyin: "y\u01D0'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u5750",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u8981",
                                            pinyin: "y\u00E0o"
                                        },
                                        {
                                            chinese: "\u8FDE",
                                            pinyin: "li\u00E1n"
                                        },
                                        {
                                            chinese: "\u767E",
                                            pinyin: "b\u01CEi"
                                        },
                                        {
                                            chinese: "\u8FD8",
                                            pinyin: "h\u00E1i"
                                        },
                                        {
                                            chinese: "\u820C",
                                            pinyin: "sh\u00E9"
                                        },
                                        {
                                            chinese: "\u70B9",
                                            pinyin: "di\u01CEn"
                                        },
                                        {
                                            chinese: "\u5757",
                                            pinyin: "ku\u00E0i"
                                        },
                                        {
                                            chinese: "\u975E",
                                            pinyin: "f\u0113i"
                                        },
                                        {
                                            chinese: "\u5E38",
                                            pinyin: "ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5F80",
                                            pinyin: "w\u01CEng"
                                        },
                                        {
                                            chinese: "\u74DC",
                                            pinyin: "gu\u0101"
                                        },
                                        {
                                            chinese: "\u8FDB",
                                            pinyin: "j\u00ECn"
                                        },
                                        {
                                            chinese: "\u7A7A",
                                            pinyin: "k\u014Dng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 8",
                                        zh_cn: "\u5199\u5B57\u88688",
                                        zh_tw: "\u5BEB\u5B57\u93368"
                                    },
                                    words: [{
                                            chinese: "\u75C5",
                                            pinyin: "b\u00ECng"
                                        },
                                        {
                                            chinese: "\u533B",
                                            pinyin: "y\u012B"
                                        },
                                        {
                                            chinese: "\u522B",
                                            pinyin: "bi\u00E9"
                                        },
                                        {
                                            chinese: "\u5E72",
                                            pinyin: "g\u00E0n"
                                        },
                                        {
                                            chinese: "\u5947",
                                            pinyin: "q\u00ED"
                                        },
                                        {
                                            chinese: "\u4E03",
                                            pinyin: "q\u012B"
                                        },
                                        {
                                            chinese: "\u661F",
                                            pinyin: "x\u012Bng"
                                        },
                                        {
                                            chinese: "\u5413",
                                            pinyin: "xi\u00E0"
                                        },
                                        {
                                            chinese: "\u6015",
                                            pinyin: "p\u00E0"
                                        },
                                        {
                                            chinese: "\u8DDF",
                                            pinyin: "g\u0113n"
                                        },
                                        {
                                            chinese: "\u5BB6",
                                            pinyin: "ji\u0101"
                                        },
                                        {
                                            chinese: "\u7F8A",
                                            pinyin: "y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8C61",
                                            pinyin: "xi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u90FD",
                                            pinyin: "d\u014Du"
                                        },
                                        {
                                            chinese: "\u6349",
                                            pinyin: "zhu\u014D"
                                        },
                                        {
                                            chinese: "\u6761",
                                            pinyin: "ti\u00E1o"
                                        },
                                        {
                                            chinese: "\u722C",
                                            pinyin: "p\u00E1"
                                        },
                                        {
                                            chinese: "\u59D0",
                                            pinyin: "ji\u011B"
                                        },
                                        {
                                            chinese: "\u60A8",
                                            pinyin: "n\u00EDn"
                                        },
                                        {
                                            chinese: "\u8349",
                                            pinyin: "c\u01CEo"
                                        },
                                        {
                                            chinese: "\u623F",
                                            pinyin: "f\u00E1ng"
                                        },
                                    ]
                                },
                            ]
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
                                            pinyin: "t\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8111\u888B",
                                            pinyin: "n\u01CEo'd\u00E0i"
                                        },
                                        {
                                            chinese: "\u7070",
                                            pinyin: "hu\u012B"
                                        },
                                        {
                                            chinese: "\u54C7",
                                            pinyin: "wa"
                                        },
                                        {
                                            chinese: "\u6559",
                                            pinyin: "ji\u0101o"
                                        },
                                        {
                                            chinese: "\u6355",
                                            pinyin: "b\u01D4"
                                        },
                                        {
                                            chinese: "\u8FCE",
                                            pinyin: "y\u00EDng"
                                        },
                                        {
                                            chinese: "\u963F\u59E8",
                                            pinyin: "\u0101'y\u00ED"
                                        },
                                        {
                                            chinese: "\u5BBD",
                                            pinyin: "ku\u0101n"
                                        },
                                        {
                                            chinese: "\u9F9F",
                                            pinyin: "gu\u012B"
                                        },
                                        {
                                            chinese: "\u9876",
                                            pinyin: "d\u01D0ng"
                                        },
                                        {
                                            chinese: "\u62AB",
                                            pinyin: "p\u012B"
                                        },
                                        {
                                            chinese: "\u9F13",
                                            pinyin: "g\u01D4"
                                        },
                                        {
                                            chinese: "\u6652",
                                            pinyin: "sh\u00E0i"
                                        },
                                        {
                                            chinese: "\u6781",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u508D",
                                            pinyin: "b\u00E0ng"
                                        },
                                        {
                                            chinese: "\u8D8A",
                                            pinyin: "yu\u00E8"
                                        },
                                        {
                                            chinese: "\u6EF4",
                                            pinyin: "d\u012B"
                                        },
                                        {
                                            chinese: "\u6EAA",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u5954",
                                            pinyin: "b\u0113n"
                                        },
                                        {
                                            chinese: "\u6D0B",
                                            pinyin: "y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u574F",
                                            pinyin: "hu\u00E0i"
                                        },
                                        {
                                            chinese: "\u6DF9\u6CA1",
                                            pinyin: "y\u0101n'm\u00F2"
                                        },
                                        {
                                            chinese: "\u51B2\u6BC1",
                                            pinyin: "ch\u014Dng'hu\u01D0"
                                        },
                                        {
                                            chinese: "\u5C4B",
                                            pinyin: "w\u016B"
                                        },
                                        {
                                            chinese: "\u707E",
                                            pinyin: "z\u0101i"
                                        },
                                        {
                                            chinese: "\u731C",
                                            pinyin: "c\u0101i"
                                        },
                                        {
                                            chinese: "\u690D",
                                            pinyin: "zh\u00ED"
                                        },
                                        {
                                            chinese: "\u5982",
                                            pinyin: "r\u00FA"
                                        },
                                        {
                                            chinese: "\u4E3A",
                                            pinyin: "w\u00E9i"
                                        },
                                        {
                                            chinese: "\u65C5",
                                            pinyin: "l\u01DA"
                                        },
                                        {
                                            chinese: "\u5907",
                                            pinyin: "b\u00E8i"
                                        },
                                        {
                                            chinese: "\u7EB7",
                                            pinyin: "f\u0113n"
                                        },
                                        {
                                            chinese: "\u523A",
                                            pinyin: "c\u00EC"
                                        },
                                        {
                                            chinese: "\u5E95",
                                            pinyin: "d\u01D0"
                                        },
                                        {
                                            chinese: "\u556A",
                                            pinyin: "p\u0101"
                                        },
                                        {
                                            chinese: "\u70B8",
                                            pinyin: "zh\u00E0"
                                        },
                                        {
                                            chinese: "\u79BB",
                                            pinyin: "l\u00ED"
                                        },
                                        {
                                            chinese: "\u8BC6",
                                            pinyin: "sh\u00ED"
                                        },
                                        {
                                            chinese: "\u7C97",
                                            pinyin: "c\u016B"
                                        },
                                        {
                                            chinese: "\u5F97",
                                            pinyin: "d\u00E9"
                                        },
                                        {
                                            chinese: "\u5957",
                                            pinyin: "t\u00E0o"
                                        },
                                        {
                                            chinese: "\u5E3D",
                                            pinyin: "m\u00E0o"
                                        },
                                        {
                                            chinese: "\u767B",
                                            pinyin: "d\u0113ng"
                                        },
                                        {
                                            chinese: "\u978B",
                                            pinyin: "xi\u00E9"
                                        },
                                        {
                                            chinese: "\u88E4",
                                            pinyin: "k\u00F9"
                                        },
                                        {
                                            chinese: "\u56FE",
                                            pinyin: "t\u00FA"
                                        },
                                        {
                                            chinese: "\u58F6",
                                            pinyin: "h\u00FA"
                                        },
                                        {
                                            chinese: "\u5E10\u7BF7",
                                            pinyin: "zh\u00E0ng'p\u00E9ng"
                                        },
                                        {
                                            chinese: "\u6307\u9488",
                                            pinyin: "zh\u01D0'zh\u0113n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 2",
                                        zh_cn: "\u8BC6\u5B57\u88682",
                                        zh_tw: "\u8B58\u5B57\u93362"
                                    },
                                    words: [{
                                            chinese: "\u5E06",
                                            pinyin: "f\u0101n"
                                        },
                                        {
                                            chinese: "\u8258",
                                            pinyin: "s\u014Du"
                                        },
                                        {
                                            chinese: "\u519B\u8230",
                                            pinyin: "j\u016Bn'ji\u00E0n"
                                        },
                                        {
                                            chinese: "\u7A3B",
                                            pinyin: "d\u00E0o"
                                        },
                                        {
                                            chinese: "\u56ED",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u7FE0",
                                            pinyin: "cu\u00EC"
                                        },
                                        {
                                            chinese: "\u961F",
                                            pinyin: "du\u00EC"
                                        },
                                        {
                                            chinese: "\u94DC\u53F7",
                                            pinyin: "t\u00F3ng'h\u00E0o"
                                        },
                                        {
                                            chinese: "\u68A7\u6850",
                                            pinyin: "w\u00FA't\u00F3ng"
                                        },
                                        {
                                            chinese: "\u638C",
                                            pinyin: "zh\u01CEng"
                                        },
                                        {
                                            chinese: "\u67AB",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u677E\u67CF",
                                            pinyin: "s\u014Dng'b\u01CEi"
                                        },
                                        {
                                            chinese: "\u88C5",
                                            pinyin: "zhu\u0101ng"
                                        },
                                        {
                                            chinese: "\u6866",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u8010",
                                            pinyin: "n\u00E0i"
                                        },
                                        {
                                            chinese: "\u5B88",
                                            pinyin: "sh\u01D2u"
                                        },
                                        {
                                            chinese: "\u7586",
                                            pinyin: "ji\u0101ng"
                                        },
                                        {
                                            chinese: "\u94F6",
                                            pinyin: "y\u00EDn"
                                        },
                                        {
                                            chinese: "\u6749",
                                            pinyin: "sh\u0101n"
                                        },
                                        {
                                            chinese: "\u5316",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u6842",
                                            pinyin: "gu\u00EC"
                                        },
                                        {
                                            chinese: "\u4E16\u754C",
                                            pinyin: "sh\u00EC'ji\u00E8"
                                        },
                                        {
                                            chinese: "\u5B54\u96C0",
                                            pinyin: "k\u01D2ng'qu\u00E8"
                                        },
                                        {
                                            chinese: "\u9526",
                                            pinyin: "j\u01D0n"
                                        },
                                        {
                                            chinese: "\u96C4\u9E70",
                                            pinyin: "xi\u00F3ng'y\u012Bng"
                                        },
                                        {
                                            chinese: "\u7FD4",
                                            pinyin: "xi\u00E1ng"
                                        },
                                        {
                                            chinese: "\u96C1",
                                            pinyin: "y\u00E0n"
                                        },
                                        {
                                            chinese: "\u4E1B",
                                            pinyin: "c\u00F3ng"
                                        },
                                        {
                                            chinese: "\u6DF1",
                                            pinyin: "sh\u0113n"
                                        },
                                        {
                                            chinese: "\u731B",
                                            pinyin: "m\u011Bng"
                                        },
                                        {
                                            chinese: "\u7075",
                                            pinyin: "l\u00EDng"
                                        },
                                        {
                                            chinese: "\u4F11",
                                            pinyin: "xi\u016B"
                                        },
                                        {
                                            chinese: "\u5B63",
                                            pinyin: "j\u00EC"
                                        },
                                        {
                                            chinese: "\u8774\u8776",
                                            pinyin: "h\u00FA'di\u00E9"
                                        },
                                        {
                                            chinese: "\u9EA6\u82D7",
                                            pinyin: "m\u00E0i'mi\u00E1o"
                                        },
                                        {
                                            chinese: "\u6851",
                                            pinyin: "s\u0101ng"
                                        },
                                        {
                                            chinese: "\u80A5",
                                            pinyin: "f\u00E9i"
                                        },
                                        {
                                            chinese: "\u519C",
                                            pinyin: "n\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5F52",
                                            pinyin: "gu\u012B"
                                        },
                                        {
                                            chinese: "\u6234",
                                            pinyin: "d\u00E0i"
                                        },
                                        {
                                            chinese: "\u573A",
                                            pinyin: "ch\u00E1ng "
                                        },
                                        {
                                            chinese: "\u8C37\u7C92",
                                            pinyin: "g\u01D4'l\u00EC"
                                        },
                                        {
                                            chinese: "\u867D",
                                            pinyin: "su\u012B"
                                        },
                                        {
                                            chinese: "\u8F9B\u82E6",
                                            pinyin: "x\u012Bn'k\u01D4"
                                        },
                                        {
                                            chinese: "\u4E86",
                                            pinyin: "li\u01CEo"
                                        },
                                        {
                                            chinese: "\u8461\u8404",
                                            pinyin: "p\u00FA't\u00E1o"
                                        },
                                        {
                                            chinese: "\u7D2B",
                                            pinyin: "z\u01D0"
                                        },
                                        {
                                            chinese: "\u72D0\u72F8",
                                            pinyin: "h\u00FA'l\u00ED"
                                        },
                                        {
                                            chinese: "\u7B28",
                                            pinyin: "b\u00E8n"
                                        },
                                        {
                                            chinese: "\u9178",
                                            pinyin: "su\u0101n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 3",
                                        zh_cn: "\u8BC6\u5B57\u88683",
                                        zh_tw: "\u8B58\u5B57\u93363"
                                    },
                                    words: [{
                                            chinese: "\u66F9",
                                            pinyin: "c\u00E1o"
                                        },
                                        {
                                            chinese: "\u79F0",
                                            pinyin: "ch\u0113ng"
                                        },
                                        {
                                            chinese: "\u5458",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u6839",
                                            pinyin: "g\u0113n"
                                        },
                                        {
                                            chinese: "\u67F1",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u8BAE\u8BBA",
                                            pinyin: "y\u00EC'l\u00F9n"
                                        },
                                        {
                                            chinese: "\u91CD",
                                            pinyin: "zh\u00F2ng"
                                        },
                                        {
                                            chinese: "\u6746",
                                            pinyin: "g\u01CEn"
                                        },
                                        {
                                            chinese: "\u79E4",
                                            pinyin: "ch\u00E8ng"
                                        },
                                        {
                                            chinese: "\u780D",
                                            pinyin: "k\u01CEn"
                                        },
                                        {
                                            chinese: "\u7EBF",
                                            pinyin: "xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u6B62",
                                            pinyin: "zh\u01D0"
                                        },
                                        {
                                            chinese: "\u91CF",
                                            pinyin: "li\u00E0ng"
                                        },
                                        {
                                            chinese: "\u73B2",
                                            pinyin: "l\u00EDng"
                                        },
                                        {
                                            chinese: "\u8BE6",
                                            pinyin: "xi\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5E45",
                                            pinyin: "f\u00FA"
                                        },
                                        {
                                            chinese: "\u8BC4\u5956",
                                            pinyin: "p\u00EDng'ji\u01CEng"
                                        },
                                        {
                                            chinese: "\u50AC",
                                            pinyin: "cu\u012B"
                                        },
                                        {
                                            chinese: "\u810F",
                                            pinyin: "z\u0101ng"
                                        },
                                        {
                                            chinese: "\u4F24",
                                            pinyin: "sh\u0101ng"
                                        },
                                        {
                                            chinese: "\u62A5",
                                            pinyin: "b\u00E0o"
                                        },
                                        {
                                            chinese: "\u53E6",
                                            pinyin: "l\u00ECng"
                                        },
                                        {
                                            chinese: "\u53CA",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u61D2",
                                            pinyin: "l\u01CEn"
                                        },
                                        {
                                            chinese: "\u5E76",
                                            pinyin: "b\u00ECng"
                                        },
                                        {
                                            chinese: "\u7CDF",
                                            pinyin: "z\u0101o"
                                        },
                                        {
                                            chinese: "\u80AF",
                                            pinyin: "k\u011Bn"
                                        },
                                        {
                                            chinese: "\u5C01",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u524A",
                                            pinyin: "xi\u0101o"
                                        },
                                        {
                                            chinese: "\u9505",
                                            pinyin: "gu\u014D"
                                        },
                                        {
                                            chinese: "\u671D",
                                            pinyin: "ch\u00E1o"
                                        },
                                        {
                                            chinese: "\u59CB",
                                            pinyin: "sh\u01D0"
                                        },
                                        {
                                            chinese: "\u522E",
                                            pinyin: "gu\u0101"
                                        },
                                        {
                                            chinese: "\u80E1",
                                            pinyin: "h\u00FA"
                                        },
                                        {
                                            chinese: "\u4FEE",
                                            pinyin: "xi\u016B"
                                        },
                                        {
                                            chinese: "\u51B7",
                                            pinyin: "l\u011Bng"
                                        },
                                        {
                                            chinese: "\u80A9",
                                            pinyin: "ji\u0101n"
                                        },
                                        {
                                            chinese: "\u56E2",
                                            pinyin: "tu\u00E1n"
                                        },
                                        {
                                            chinese: "\u91CD",
                                            pinyin: "ch\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5B8C",
                                            pinyin: "w\u00E1n"
                                        },
                                        {
                                            chinese: "\u5E0C",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u671F",
                                            pinyin: "q\u012B"
                                        },
                                        {
                                            chinese: "\u7ED3\u675F",
                                            pinyin: "ji\u00E9'sh\u00F9"
                                        },
                                        {
                                            chinese: "\u9C9C",
                                            pinyin: "xi\u0101n"
                                        },
                                        {
                                            chinese: "\u54C4",
                                            pinyin: "h\u01D2ng"
                                        },
                                        {
                                            chinese: "\u5148",
                                            pinyin: "xi\u0101n"
                                        },
                                        {
                                            chinese: "\u68A6",
                                            pinyin: "m\u00E8ng"
                                        },
                                        {
                                            chinese: "\u95ED",
                                            pinyin: "b\u00EC"
                                        },
                                        {
                                            chinese: "\u7D27",
                                            pinyin: "j\u01D0n"
                                        },
                                        {
                                            chinese: "\u6DA6",
                                            pinyin: "r\u00F9n"
                                        },
                                        {
                                            chinese: "\u7B49",
                                            pinyin: "d\u011Bng"
                                        },
                                        {
                                            chinese: "\u7D2F",
                                            pinyin: "l\u00E8i"
                                        },
                                        {
                                            chinese: "\u5438",
                                            pinyin: "x\u012B"
                                        },
                                        {
                                            chinese: "\u53D1",
                                            pinyin: "f\u00E0"
                                        },
                                        {
                                            chinese: "\u7C98",
                                            pinyin: "zh\u0101n"
                                        },
                                        {
                                            chinese: "\u6C57",
                                            pinyin: "h\u00E0n"
                                        },
                                        {
                                            chinese: "\u989D",
                                            pinyin: "\u00E9"
                                        },
                                        {
                                            chinese: "\u6C99",
                                            pinyin: "sh\u0101"
                                        },
                                        {
                                            chinese: "\u4E4F",
                                            pinyin: "f\u00E1"
                                        },
                                        {
                                            chinese: "\u5F39\u94A2\u7434",
                                            pinyin: "t\u00E1n'g\u0101ng'q\u00EDn"
                                        },
                                        {
                                            chinese: "\u7EC3",
                                            pinyin: "li\u00E0n"
                                        },
                                        {
                                            chinese: "\u634F",
                                            pinyin: "ni\u0113"
                                        },
                                        {
                                            chinese: "\u6CE5",
                                            pinyin: "n\u00ED"
                                        },
                                        {
                                            chinese: "\u6EDA",
                                            pinyin: "g\u01D4n"
                                        },
                                        {
                                            chinese: "\u94C1\u73AF",
                                            pinyin: "ti\u011B'hu\u00E1n"
                                        },
                                        {
                                            chinese: "\u8361",
                                            pinyin: "d\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6ED1",
                                            pinyin: "hu\u00E1"
                                        },
                                        {
                                            chinese: "\u68AF",
                                            pinyin: "t\u012B"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 4",
                                        zh_cn: "\u8BC6\u5B57\u88684",
                                        zh_tw: "\u8B58\u5B57\u93364"
                                    },
                                    words: [{
                                            chinese: "\u4F9D",
                                            pinyin: "y\u012B"
                                        },
                                        {
                                            chinese: "\u5C3D",
                                            pinyin: "j\u00ECn"
                                        },
                                        {
                                            chinese: "\u6B32",
                                            pinyin: "y\u00F9"
                                        },
                                        {
                                            chinese: "\u7A77",
                                            pinyin: "qi\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5C42",
                                            pinyin: "c\u00E9ng"
                                        },
                                        {
                                            chinese: "\u7011\u5E03",
                                            pinyin: "p\u00F9'b\u00F9"
                                        },
                                        {
                                            chinese: "\u7089",
                                            pinyin: "l\u00FA"
                                        },
                                        {
                                            chinese: "\u70DF",
                                            pinyin: "y\u0101n"
                                        },
                                        {
                                            chinese: "\u9065",
                                            pinyin: "y\u00E1o"
                                        },
                                        {
                                            chinese: "\u5DDD",
                                            pinyin: "chu\u0101n"
                                        },
                                        {
                                            chinese: "\u95FB\u540D",
                                            pinyin: "w\u00E9n'm\u00EDng"
                                        },
                                        {
                                            chinese: "\u666F\u533A",
                                            pinyin: "j\u01D0ng'q\u016B"
                                        },
                                        {
                                            chinese: "\u7701",
                                            pinyin: "sh\u011Bng"
                                        },
                                        {
                                            chinese: "\u90E8",
                                            pinyin: "b\u00F9"
                                        },
                                        {
                                            chinese: "\u79C0",
                                            pinyin: "xi\u00F9"
                                        },
                                        {
                                            chinese: "\u5C24\u5176",
                                            pinyin: "y\u00F3u'q\u00ED"
                                        },
                                        {
                                            chinese: "\u4ED9",
                                            pinyin: "xi\u0101n"
                                        },
                                        {
                                            chinese: "\u5DE8",
                                            pinyin: "j\u00F9"
                                        },
                                        {
                                            chinese: "\u4F4D",
                                            pinyin: "w\u00E8i"
                                        },
                                        {
                                            chinese: "\u90FD",
                                            pinyin: "d\u016B"
                                        },
                                        {
                                            chinese: "\u8457",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u5F62\u72B6",
                                            pinyin: "x\u00EDng'zhu\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6F6D",
                                            pinyin: "t\u00E1n"
                                        },
                                        {
                                            chinese: "\u6E7E",
                                            pinyin: "w\u0101n"
                                        },
                                        {
                                            chinese: "\u6E56",
                                            pinyin: "h\u00FA"
                                        },
                                        {
                                            chinese: "\u7ED5",
                                            pinyin: "r\u00E0o"
                                        },
                                        {
                                            chinese: "\u8302\u76DB",
                                            pinyin: "m\u00E0o'sh\u00E8ng"
                                        },
                                        {
                                            chinese: "\u56F4",
                                            pinyin: "w\u00E9i"
                                        },
                                        {
                                            chinese: "\u80DC",
                                            pinyin: "sh\u00E8ng"
                                        },
                                        {
                                            chinese: "\u592E",
                                            pinyin: "y\u0101ng"
                                        },
                                        {
                                            chinese: "\u5C9B",
                                            pinyin: "d\u01CEo"
                                        },
                                        {
                                            chinese: "\u7EB1",
                                            pinyin: "sh\u0101"
                                        },
                                        {
                                            chinese: "\u7AE5",
                                            pinyin: "t\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5883",
                                            pinyin: "j\u00ECng"
                                        },
                                        {
                                            chinese: "\u5F15",
                                            pinyin: "y\u01D0n"
                                        },
                                        {
                                            chinese: "\u5BA2",
                                            pinyin: "k\u00E8 "
                                        },
                                        {
                                            chinese: "\u6C9F",
                                            pinyin: "g\u014Du"
                                        },
                                        {
                                            chinese: "\u4EA7",
                                            pinyin: "ch\u01CEn"
                                        },
                                        {
                                            chinese: "\u4EFD",
                                            pinyin: "f\u00E8n"
                                        },
                                        {
                                            chinese: "\u679D",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u642D",
                                            pinyin: "d\u0101"
                                        },
                                        {
                                            chinese: "\u6DE1",
                                            pinyin: "d\u00E0n"
                                        },
                                        {
                                            chinese: "\u597D",
                                            pinyin: "h\u00E0o"
                                        },
                                        {
                                            chinese: "\u591F",
                                            pinyin: "q\u00F2u"
                                        },
                                        {
                                            chinese: "\u6536",
                                            pinyin: "sh\u014Du"
                                        },
                                        {
                                            chinese: "\u57CE\u5E02",
                                            pinyin: "ch\u00E9ng'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u5E72",
                                            pinyin: "gan"
                                        },
                                        {
                                            chinese: "\u7559",
                                            pinyin: "li\u00FA"
                                        },
                                        {
                                            chinese: "\u9489",
                                            pinyin: "d\u00ECng"
                                        },
                                        {
                                            chinese: "\u5229",
                                            pinyin: "l\u00EC"
                                        },
                                        {
                                            chinese: "\u5206",
                                            pinyin: "f\u00E8n"
                                        },
                                        {
                                            chinese: "\u5473",
                                            pinyin: "w\u00E8i"
                                        },
                                        {
                                            chinese: "\u660C",
                                            pinyin: "ch\u0101ng"
                                        },
                                        {
                                            chinese: "\u94FA",
                                            pinyin: "p\u00F9"
                                        },
                                        {
                                            chinese: "\u8C03",
                                            pinyin: "ti\u00E1o"
                                        },
                                        {
                                            chinese: "\u786C\u5367",
                                            pinyin: "y\u00ECng'w\u00F2"
                                        },
                                        {
                                            chinese: "\u9650\u4E58",
                                            pinyin: "xi\u00E0n'ch\u00E9ng"
                                        },
                                        {
                                            chinese: "\u552E",
                                            pinyin: "sh\u00F2u"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 5",
                                        zh_cn: "\u8BC6\u5B57\u88685",
                                        zh_tw: "\u8B58\u5B57\u93365"
                                    },
                                    words: [{
                                            chinese: "\u6CBF",
                                            pinyin: "y\u00E1n"
                                        },
                                        {
                                            chinese: "\u7B54",
                                            pinyin: "d\u00E1"
                                        },
                                        {
                                            chinese: "\u6E34",
                                            pinyin: "k\u011B"
                                        },
                                        {
                                            chinese: "\u559D",
                                            pinyin: "h\u0113"
                                        },
                                        {
                                            chinese: "\u8BDD",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u5F04\u9519",
                                            pinyin: "n\u00F2ng'cu\u00F2"
                                        },
                                        {
                                            chinese: "\u9645",
                                            pinyin: "ji"
                                        },
                                        {
                                            chinese: "\u54EA",
                                            pinyin: "na"
                                        },
                                        {
                                            chinese: "\u62AC",
                                            pinyin: "t\u00E1i"
                                        },
                                        {
                                            chinese: "\u53F7",
                                            pinyin: "h\u00E1o"
                                        },
                                        {
                                            chinese: "\u5835",
                                            pinyin: "d\u01D4"
                                        },
                                        {
                                            chinese: "\u7F1D",
                                            pinyin: "f\u00E8ng"
                                        },
                                        {
                                            chinese: "\u5F53",
                                            pinyin: "d\u00E0ng"
                                        },
                                        {
                                            chinese: "\u9E4A",
                                            pinyin: "qu\u00E8"
                                        },
                                        {
                                            chinese: "\u6717",
                                            pinyin: "l\u01CEng"
                                        },
                                        {
                                            chinese: "\u8854",
                                            pinyin: "xi\u00E1n"
                                        },
                                        {
                                            chinese: "\u67AF",
                                            pinyin: "k\u016B"
                                        },
                                        {
                                            chinese: "\u529D",
                                            pinyin: "qu\u00E0n"
                                        },
                                        {
                                            chinese: "\u8D81",
                                            pinyin: "ch\u00E8n"
                                        },
                                        {
                                            chinese: "\u5C06",
                                            pinyin: "ji\u0101ng"
                                        },
                                        {
                                            chinese: "\u96BE",
                                            pinyin: "n\u00E1n"
                                        },
                                        {
                                            chinese: "\u4E14",
                                            pinyin: "qi\u011B"
                                        },
                                        {
                                            chinese: "\u72C2",
                                            pinyin: "ku\u00E1ng"
                                        },
                                        {
                                            chinese: "\u543C",
                                            pinyin: "h\u01D2u"
                                        },
                                        {
                                            chinese: "\u590D",
                                            pinyin: "f\u00F9"
                                        },
                                        {
                                            chinese: "\u54C0",
                                            pinyin: "\u0101i"
                                        },
                                        {
                                            chinese: "\u846B\u82A6\u85E4",
                                            pinyin: "h\u00FA'l\u00FA't\u00E9ng"
                                        },
                                        {
                                            chinese: "\u8C22",
                                            pinyin: "xi\u00E8"
                                        },
                                        {
                                            chinese: "\u554A",
                                            pinyin: "a"
                                        },
                                        {
                                            chinese: "\u869C",
                                            pinyin: "y\u00E1"
                                        },
                                        {
                                            chinese: "\u76EF",
                                            pinyin: "d\u012Bng"
                                        },
                                        {
                                            chinese: "\u8D5B",
                                            pinyin: "s\u00E0i"
                                        },
                                        {
                                            chinese: "\u611F",
                                            pinyin: "g\u01CEn"
                                        },
                                        {
                                            chinese: "\u602A",
                                            pinyin: "gu\u00E0i"
                                        },
                                        {
                                            chinese: "\u6162",
                                            pinyin: "m\u00E0n"
                                        },
                                        {
                                            chinese: "\u950B",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u871C\u8702",
                                            pinyin: "m\u00EC'f\u0113ng"
                                        },
                                        {
                                            chinese: "\u5E55",
                                            pinyin: "m\u00F9"
                                        },
                                        {
                                            chinese: "\u626B\u5893",
                                            pinyin: "s\u01CEo'm\u00F9"
                                        },
                                        {
                                            chinese: "\u6155",
                                            pinyin: "m\u00F9"
                                        },
                                        {
                                            chinese: "\u6284",
                                            pinyin: "ch\u0101o"
                                        },
                                        {
                                            chinese: "\u7092",
                                            pinyin: "ch\u01CEo"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 6",
                                        zh_cn: "\u8BC6\u5B57\u88686",
                                        zh_tw: "\u8B58\u5B57\u93366"
                                    },
                                    words: [{
                                            chinese: "\u697C",
                                            pinyin: "l\u00F3u"
                                        },
                                        {
                                            chinese: "\u4E89",
                                            pinyin: "zh\u0113ng"
                                        },
                                        {
                                            chinese: "\u4EE3",
                                            pinyin: "d\u00E0i"
                                        },
                                        {
                                            chinese: "\u4E34",
                                            pinyin: "l\u00EDn"
                                        },
                                        {
                                            chinese: "\u814A",
                                            pinyin: "l\u00E0"
                                        },
                                        {
                                            chinese: "\u7AE0",
                                            pinyin: "zh\u0101ng"
                                        },
                                        {
                                            chinese: "\u63E1",
                                            pinyin: "w\u00F2"
                                        },
                                        {
                                            chinese: "\u89C6\u5BDF",
                                            pinyin: "sh\u00EC'ch\u00E1"
                                        },
                                        {
                                            chinese: "\u6CB9",
                                            pinyin: "y\u00F3u"
                                        },
                                        {
                                            chinese: "\u6731\u5FB7",
                                            pinyin: "zh\u016B'd\u00E9"
                                        },
                                        {
                                            chinese: "\u6241\u62C5",
                                            pinyin: "bi\u01CEn'd\u00E0n"
                                        },
                                        {
                                            chinese: "\u5FD7",
                                            pinyin: "zh\u00EC"
                                        },
                                        {
                                            chinese: "\u4F0D",
                                            pinyin: "w\u01D4"
                                        },
                                        {
                                            chinese: "\u6CFD",
                                            pinyin: "z\u00E9"
                                        },
                                        {
                                            chinese: "\u654C",
                                            pinyin: "d\u00ED"
                                        },
                                        {
                                            chinese: "\u9661",
                                            pinyin: "d\u01D2u"
                                        },
                                        {
                                            chinese: "\u6574",
                                            pinyin: "zh\u011Bng"
                                        },
                                        {
                                            chinese: "\u4ED7",
                                            pinyin: "zh\u00E0ng"
                                        },
                                        {
                                            chinese: "\u75BC",
                                            pinyin: "t\u00E9ng"
                                        },
                                        {
                                            chinese: "\u6599",
                                            pinyin: "li\u00E0o"
                                        },
                                        {
                                            chinese: "\u656C",
                                            pinyin: "j\u00ECng"
                                        },
                                        {
                                            chinese: "\u6CFC",
                                            pinyin: "p\u014D"
                                        },
                                        {
                                            chinese: "\u6C11\u65CF",
                                            pinyin: "m\u00EDn'z\u00FA"
                                        },
                                        {
                                            chinese: "\u5EA6",
                                            pinyin: "d\u00F9"
                                        },
                                        {
                                            chinese: "\u6572",
                                            pinyin: "qi\u0101o"
                                        },
                                        {
                                            chinese: "\u94FA",
                                            pinyin: "p\u016B"
                                        },
                                        {
                                            chinese: "\u9F99",
                                            pinyin: "l\u00F3ng"
                                        },
                                        {
                                            chinese: "\u9A76",
                                            pinyin: "sh\u01D0"
                                        },
                                        {
                                            chinese: "\u5BB9",
                                            pinyin: "r\u00F3ng"
                                        },
                                        {
                                            chinese: "\u8E29",
                                            pinyin: "c\u01CEi"
                                        },
                                        {
                                            chinese: "\u76DB",
                                            pinyin: "ch\u00E9ng"
                                        },
                                        {
                                            chinese: "\u7897",
                                            pinyin: "w\u01CEn"
                                        },
                                        {
                                            chinese: "\u795D\u798F",
                                            pinyin: "zh\u00F9'f\u00FA"
                                        },
                                        {
                                            chinese: "\u5065\u5EB7",
                                            pinyin: "ji\u00E0n'k\u0101ng"
                                        },
                                        {
                                            chinese: "\u5BFF",
                                            pinyin: "sh\u00F2u"
                                        },
                                        {
                                            chinese: "\u5218",
                                            pinyin: "li\u00FA"
                                        },
                                        {
                                            chinese: "\u5170",
                                            pinyin: "l\u00E1n"
                                        },
                                        {
                                            chinese: "\u6D3E",
                                            pinyin: "p\u00E0i"
                                        },
                                        {
                                            chinese: "\u88AB",
                                            pinyin: "b\u00E8i"
                                        },
                                        {
                                            chinese: "\u8840",
                                            pinyin: "xu\u00E8"
                                        },
                                        {
                                            chinese: "\u62C9",
                                            pinyin: "l\u0101"
                                        },
                                        {
                                            chinese: "\u5175",
                                            pinyin: "b\u012Bng"
                                        },
                                        {
                                            chinese: "\u8840",
                                            pinyin: "xi\u011B"
                                        },
                                        {
                                            chinese: "\u633A",
                                            pinyin: "t\u01D0ng"
                                        },
                                        {
                                            chinese: "\u6740",
                                            pinyin: "sh\u0101"
                                        },
                                        {
                                            chinese: "\u70C8",
                                            pinyin: "li\u00E8"
                                        },
                                        {
                                            chinese: "\u8F7F",
                                            pinyin: "ji\u00E0o"
                                        },
                                        {
                                            chinese: "\u6551",
                                            pinyin: "ji\u00F9"
                                        },
                                        {
                                            chinese: "\u6469\u6258",
                                            pinyin: "m\u00F3'tu\u014D"
                                        },
                                        {
                                            chinese: "\u9632",
                                            pinyin: "f\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6E14",
                                            pinyin: "y\u00FA"
                                        },
                                        {
                                            chinese: "\u8D27\u8F6E",
                                            pinyin: "hu\u00F2'l\u00FAn"
                                        },
                                        {
                                            chinese: "\u79D1\u8003",
                                            pinyin: "k\u0113'k\u01CEo"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 7",
                                        zh_cn: "\u8BC6\u5B57\u88687",
                                        zh_tw: "\u8B58\u5B57\u93367"
                                    },
                                    words: [{
                                            chinese: "\u5BBF",
                                            pinyin: "s\u00F9"
                                        },
                                        {
                                            chinese: "\u5BFA",
                                            pinyin: "s\u00EC"
                                        },
                                        {
                                            chinese: "\u5371",
                                            pinyin: "w\u0113i"
                                        },
                                        {
                                            chinese: "\u8FB0",
                                            pinyin: "ch\u00E9n"
                                        },
                                        {
                                            chinese: "\u6050",
                                            pinyin: "k\u01D2ng"
                                        },
                                        {
                                            chinese: "\u60CA",
                                            pinyin: "j\u012Bng"
                                        },
                                        {
                                            chinese: "\u4F3C",
                                            pinyin: "s\u00EC"
                                        },
                                        {
                                            chinese: "\u5E90",
                                            pinyin: "l\u00FA"
                                        },
                                        {
                                            chinese: "\u7B3C",
                                            pinyin: "l\u01D2ng"
                                        },
                                        {
                                            chinese: "\u76D6",
                                            pinyin: "g\u00E0i"
                                        },
                                        {
                                            chinese: "\u82CD",
                                            pinyin: "c\u0101ng"
                                        },
                                        {
                                            chinese: "\u832B",
                                            pinyin: "m\u00E1ng"
                                        },
                                        {
                                            chinese: "\u96FE",
                                            pinyin: "w\u00F9"
                                        },
                                        {
                                            chinese: "\u6DD8",
                                            pinyin: "t\u00E1o"
                                        },
                                        {
                                            chinese: "\u4E8E",
                                            pinyin: "y\u00FA"
                                        },
                                        {
                                            chinese: "\u6697",
                                            pinyin: "\u00E0n"
                                        },
                                        {
                                            chinese: "\u5CB8",
                                            pinyin: "\u00E0n"
                                        },
                                        {
                                            chinese: "\u8857",
                                            pinyin: "ji\u0113"
                                        },
                                        {
                                            chinese: "\u6881",
                                            pinyin: "li\u00E1ng"
                                        },
                                        {
                                            chinese: "\u751A\u81F3",
                                            pinyin: "sh\u00E8n'zh\u00EC"
                                        },
                                        {
                                            chinese: "\u5207",
                                            pinyin: "qi\u00E8"
                                        },
                                        {
                                            chinese: "\u8EB2",
                                            pinyin: "du\u01D2"
                                        },
                                        {
                                            chinese: "\u5931",
                                            pinyin: "sh\u012B"
                                        },
                                        {
                                            chinese: "\u6DFB",
                                            pinyin: "ti\u0101n"
                                        },
                                        {
                                            chinese: "\u67F4",
                                            pinyin: "ch\u00E1i"
                                        },
                                        {
                                            chinese: "\u70E7",
                                            pinyin: "sh\u0101o"
                                        },
                                        {
                                            chinese: "\u65FA",
                                            pinyin: "w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6E10",
                                            pinyin: "ji\u00E0n"
                                        },
                                        {
                                            chinese: "\u54CE",
                                            pinyin: "\u0101i"
                                        },
                                        {
                                            chinese: "\u5440",
                                            pinyin: "y\u0101"
                                        },
                                        {
                                            chinese: "\u5192",
                                            pinyin: "m\u00E0o"
                                        },
                                        {
                                            chinese: "\u545B",
                                            pinyin: "qi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u70EB",
                                            pinyin: "t\u00E0ng"
                                        },
                                        {
                                            chinese: "\u7EC8",
                                            pinyin: "zh\u014Dng"
                                        },
                                        {
                                            chinese: "\u6D51",
                                            pinyin: "h\u00FAn"
                                        },
                                        {
                                            chinese: "\u6DCB",
                                            pinyin: "l\u00EDn"
                                        },
                                        {
                                            chinese: "\u706D",
                                            pinyin: "mi\u00E8"
                                        },
                                        {
                                            chinese: "\u6FC0",
                                            pinyin: "j\u012B"
                                        },
                                        {
                                            chinese: "\u77A7",
                                            pinyin: "qi\u00E1o"
                                        },
                                        {
                                            chinese: "\u6EE9",
                                            pinyin: "t\u0101n"
                                        },
                                        {
                                            chinese: "\u6930\u58F3",
                                            pinyin: "y\u0113'k\u00E9"
                                        },
                                        {
                                            chinese: "\u6F20",
                                            pinyin: "m\u00F2"
                                        },
                                        {
                                            chinese: "\u9A86\u9A7C",
                                            pinyin: "lu\u00F2'tu\u00F3"
                                        },
                                        {
                                            chinese: "\u9A8F",
                                            pinyin: "j\u00F9n"
                                        },
                                        {
                                            chinese: "\u60AC\u5D16",
                                            pinyin: "xu\u00E1n'y\u00E1"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Literacy 8",
                                        zh_cn: "\u8BC6\u5B57\u88688",
                                        zh_tw: "\u8B58\u5B57\u93368"
                                    },
                                    words: [{
                                            chinese: "\u5047",
                                            pinyin: "ji\u01CE"
                                        },
                                        {
                                            chinese: "\u5A01",
                                            pinyin: "w\u0113i"
                                        },
                                        {
                                            chinese: "\u8F6C",
                                            pinyin: "zhu\u00E0n"
                                        },
                                        {
                                            chinese: "\u626F",
                                            pinyin: "ch\u011B"
                                        },
                                        {
                                            chinese: "\u55D3",
                                            pinyin: "s\u01CEng"
                                        },
                                        {
                                            chinese: "\u517D",
                                            pinyin: "sh\u00F2u"
                                        },
                                        {
                                            chinese: "\u8FDD\u6297",
                                            pinyin: "w\u00E9i'k\u00E0ng"
                                        },
                                        {
                                            chinese: "\u722A",
                                            pinyin: "zhu\u01CE"
                                        },
                                        {
                                            chinese: "\u8D9F",
                                            pinyin: "t\u00E0ng"
                                        },
                                        {
                                            chinese: "\u795E",
                                            pinyin: "sh\u00E9n"
                                        },
                                        {
                                            chinese: "\u732A",
                                            pinyin: "zh\u016B"
                                        },
                                        {
                                            chinese: "\u7EB3",
                                            pinyin: "n\u00E0"
                                        },
                                        {
                                            chinese: "\u95F7",
                                            pinyin: "m\u00E8n"
                                        },
                                        {
                                            chinese: "\u53D7",
                                            pinyin: "sh\u00F2u"
                                        },
                                        {
                                            chinese: "\u9A97",
                                            pinyin: "pi\u00E0n"
                                        },
                                        {
                                            chinese: "\u501F",
                                            pinyin: "ji\u00E8 "
                                        },
                                        {
                                            chinese: "\u7B5D",
                                            pinyin: "zh\u0113ng"
                                        },
                                        {
                                            chinese: "\u9F20",
                                            pinyin: "sh\u01D4"
                                        },
                                        {
                                            chinese: "\u6298",
                                            pinyin: "zh\u00E9"
                                        },
                                        {
                                            chinese: "\u6F02",
                                            pinyin: "pi\u0101o"
                                        },
                                        {
                                            chinese: "\u624E",
                                            pinyin: "z\u0101"
                                        },
                                        {
                                            chinese: "\u6293",
                                            pinyin: "zhu\u0101"
                                        },
                                        {
                                            chinese: "\u5E78",
                                            pinyin: "x\u00ECng"
                                        },
                                        {
                                            chinese: "\u4FE9",
                                            pinyin: "li\u01CE"
                                        },
                                        {
                                            chinese: "\u4F46\u613F",
                                            pinyin: "d\u00E0n'yu\u00E0n"
                                        },
                                        {
                                            chinese: "\u54ED",
                                            pinyin: "k\u016B"
                                        },
                                        {
                                            chinese: "\u53D6",
                                            pinyin: "q\u01D4"
                                        },
                                        {
                                            chinese: "\u5E2E\u52A9",
                                            pinyin: "b\u0101ng'zh\u00F9"
                                        },
                                        {
                                            chinese: "\u62BD",
                                            pinyin: "ch\u014Du"
                                        },
                                        {
                                            chinese: "\u7EED",
                                            pinyin: "x\u00F9"
                                        },
                                        {
                                            chinese: "\u4F7F\u52B2",
                                            pinyin: "sh\u01D0'j\u00ECn"
                                        },
                                        {
                                            chinese: "\u79E7",
                                            pinyin: "y\u0101ng"
                                        },
                                        {
                                            chinese: "\u8868\u793A",
                                            pinyin: "bi\u01CEo'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u6446",
                                            pinyin: "b\u01CEi"
                                        },
                                        {
                                            chinese: "\u7FFB",
                                            pinyin: "f\u0101n"
                                        },
                                        {
                                            chinese: "\u4ECD",
                                            pinyin: "r\u00E9ng"
                                        },
                                        {
                                            chinese: "\u683D",
                                            pinyin: "z\u0101i"
                                        },
                                        {
                                            chinese: "\u8D23",
                                            pinyin: "z\u00E9"
                                        },
                                        {
                                            chinese: "\u72FC",
                                            pinyin: "l\u00E1ng"
                                        },
                                        {
                                            chinese: "\u7329",
                                            pinyin: "x\u012Bng"
                                        },
                                        {
                                            chinese: "\u86C7",
                                            pinyin: "sh\u00E9"
                                        },
                                        {
                                            chinese: "\u9E64",
                                            pinyin: "h\u00E8"
                                        },
                                        {
                                            chinese: "\u9E3D",
                                            pinyin: "g\u0113"
                                        },
                                        {
                                            chinese: "\u7F9A",
                                            pinyin: "l\u00EDng"
                                        },
                                        {
                                            chinese: "\u86AF\u8693",
                                            pinyin: "qi\u016B'y\u01D0n"
                                        },
                                        {
                                            chinese: "\u8783\u87F9",
                                            pinyin: "p\u00E1ng'xi\u00E8"
                                        },
                                        {
                                            chinese: "\u867E",
                                            pinyin: "xi\u0101"
                                        },
                                        {
                                            chinese: "\u8695",
                                            pinyin: "c\u00E1n"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 1",
                                        zh_cn: "\u5199\u5B57\u88681",
                                        zh_tw: "\u5BEB\u5B57\u93361"
                                    },
                                    words: [{
                                            chinese: "\u4E24",
                                            pinyin: "li\u01CEng"
                                        },
                                        {
                                            chinese: "\u54EA",
                                            pinyin: "n\u01CE"
                                        },
                                        {
                                            chinese: "\u5BBD",
                                            pinyin: "ku\u0101n"
                                        },
                                        {
                                            chinese: "\u9876",
                                            pinyin: "d\u01D0ng"
                                        },
                                        {
                                            chinese: "\u773C\u775B",
                                            pinyin: "y\u01CEn'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u809A\u76AE",
                                            pinyin: "d\u00F9'p\u00ED"
                                        },
                                        {
                                            chinese: "\u5B69",
                                            pinyin: "h\u00E1i"
                                        },
                                        {
                                            chinese: "\u8DF3",
                                            pinyin: "ti\u00E0o"
                                        },
                                        {
                                            chinese: "\u53D8",
                                            pinyin: "bi\u00E0n"
                                        },
                                        {
                                            chinese: "\u6781",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u7247",
                                            pinyin: "pi\u00E0n"
                                        },
                                        {
                                            chinese: "\u508D",
                                            pinyin: "b\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6D77\u6D0B",
                                            pinyin: "h\u01CEi'y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u4F5C",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u574F",
                                            pinyin: "hu\u00E0i"
                                        },
                                        {
                                            chinese: "\u7ED9",
                                            pinyin: "g\u011Bi"
                                        },
                                        {
                                            chinese: "\u5E26",
                                            pinyin: "d\u00E0i"
                                        },
                                        {
                                            chinese: "\u6CD5",
                                            pinyin: "f\u01CE"
                                        },
                                        {
                                            chinese: "\u5982",
                                            pinyin: "r\u00FA"
                                        },
                                        {
                                            chinese: "\u516C",
                                            pinyin: "g\u014Dng"
                                        },
                                        {
                                            chinese: "\u5B83",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u5A03",
                                            pinyin: "w\u00E1"
                                        },
                                        {
                                            chinese: "\u5979",
                                            pinyin: "t\u0101"
                                        },
                                        {
                                            chinese: "\u6BDB",
                                            pinyin: "m\u00E1o"
                                        },
                                        {
                                            chinese: "\u66F4",
                                            pinyin: "g\u00E8ng"
                                        },
                                        {
                                            chinese: "\u77E5\u8BC6",
                                            pinyin: "zh\u012B'shi"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 2",
                                        zh_cn: "\u5199\u5B57\u88682",
                                        zh_tw: "\u5BEB\u5B57\u93362"
                                    },
                                    words: [{
                                            chinese: "\u5904",
                                            pinyin: "ch\u00F9"
                                        },
                                        {
                                            chinese: "\u56ED",
                                            pinyin: "yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u6865",
                                            pinyin: "qi\u00E1o"
                                        },
                                        {
                                            chinese: "\u7FA4",
                                            pinyin: "q\u00FAn"
                                        },
                                        {
                                            chinese: "\u961F\u65D7",
                                            pinyin: "du\u00EC'q\u00ED"
                                        },
                                        {
                                            chinese: "\u94DC\u53F7",
                                            pinyin: "t\u00F3ng'h\u00E0o"
                                        },
                                        {
                                            chinese: "\u9886",
                                            pinyin: "l\u01D0ng"
                                        },
                                        {
                                            chinese: "\u5DFE",
                                            pinyin: "j\u012Bn"
                                        },
                                        {
                                            chinese: "\u6768",
                                            pinyin: "y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u58EE",
                                            pinyin: "zhu\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6850",
                                            pinyin: "t\u00F3ng"
                                        },
                                        {
                                            chinese: "\u67AB",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u677E\u67CF",
                                            pinyin: "s\u014Dngb\u01CEi"
                                        },
                                        {
                                            chinese: "\u68C9",
                                            pinyin: "mi\u00E1n"
                                        },
                                        {
                                            chinese: "\u6749",
                                            pinyin: "sh\u0101n"
                                        },
                                        {
                                            chinese: "\u5316",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u6842",
                                            pinyin: "gu\u00EC"
                                        },
                                        {
                                            chinese: "\u6B4C",
                                            pinyin: "g\u0113"
                                        },
                                        {
                                            chinese: "\u5199",
                                            pinyin: "xi\u011B"
                                        },
                                        {
                                            chinese: "\u4E1B",
                                            pinyin: "c\u00F3ng"
                                        },
                                        {
                                            chinese: "\u6DF1",
                                            pinyin: "sh\u0113n"
                                        },
                                        {
                                            chinese: "\u516D",
                                            pinyin: "li\u00F9"
                                        },
                                        {
                                            chinese: "\u718A\u732B",
                                            pinyin: "xi\u00F3ng'm\u0101o"
                                        },
                                        {
                                            chinese: "\u4E5D",
                                            pinyin: "ji\u01D4"
                                        },
                                        {
                                            chinese: "\u670B\u53CB",
                                            pinyin: "p\u00E9ng'y\u01D2u"
                                        },
                                        {
                                            chinese: "\u5B63",
                                            pinyin: "j\u00EC"
                                        },
                                        {
                                            chinese: "\u5439",
                                            pinyin: "chu\u012B"
                                        },
                                        {
                                            chinese: "\u80A5",
                                            pinyin: "f\u00E9i"
                                        },
                                        {
                                            chinese: "\u519C",
                                            pinyin: "n\u00F3ng"
                                        },
                                        {
                                            chinese: "\u4E8B",
                                            pinyin: "sh\u00EC"
                                        },
                                        {
                                            chinese: "\u5FD9",
                                            pinyin: "m\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5F52",
                                            pinyin: "gu\u012B"
                                        },
                                        {
                                            chinese: "\u6234",
                                            pinyin: "d\u00E0i"
                                        },
                                        {
                                            chinese: "\u8F9B\u82E6",
                                            pinyin: "x\u012Bn'k\u01D4"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 3",
                                        zh_cn: "\u5199\u5B57\u88683",
                                        zh_tw: "\u5BEB\u5B57\u93363"
                                    },
                                    words: [{
                                            chinese: "\u79F0",
                                            pinyin: "ch\u0113ng"
                                        },
                                        {
                                            chinese: "\u67F1",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u5E95",
                                            pinyin: "d\u01D0"
                                        },
                                        {
                                            chinese: "\u6746\u79E4",
                                            pinyin: "g\u01CEn'ch\u00E8ng"
                                        },
                                        {
                                            chinese: "\u505A",
                                            pinyin: "zu\u00F2"
                                        },
                                        {
                                            chinese: "\u5C81",
                                            pinyin: "su\u00EC"
                                        },
                                        {
                                            chinese: "\u7AD9",
                                            pinyin: "zh\u00E0n"
                                        },
                                        {
                                            chinese: "\u8239",
                                            pinyin: "chu\u00E1n"
                                        },
                                        {
                                            chinese: "\u7136",
                                            pinyin: "r\u00E1n"
                                        },
                                        {
                                            chinese: "\u753B\u5E45",
                                            pinyin: "hu\u00E0'f\u00FA"
                                        },
                                        {
                                            chinese: "\u8BC4\u5956",
                                            pinyin: "p\u00EDng'ji\u01CEng"
                                        },
                                        {
                                            chinese: "\u7EB8",
                                            pinyin: "zh\u01D0"
                                        },
                                        {
                                            chinese: "\u62A5",
                                            pinyin: "b\u00E0o"
                                        },
                                        {
                                            chinese: "\u53E6",
                                            pinyin: "l\u00ECng"
                                        },
                                        {
                                            chinese: "\u53CA",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u62FF",
                                            pinyin: "n\u00E1"
                                        },
                                        {
                                            chinese: "\u5E76",
                                            pinyin: "b\u00ECng"
                                        },
                                        {
                                            chinese: "\u5C01",
                                            pinyin: "f\u0113ng"
                                        },
                                        {
                                            chinese: "\u4FE1",
                                            pinyin: "x\u00ECn"
                                        },
                                        {
                                            chinese: "\u4ECA",
                                            pinyin: "j\u012Bn"
                                        },
                                        {
                                            chinese: "\u652F",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u5706\u73E0\u7B14",
                                            pinyin: "yu\u00E1n'zh\u016B'b\u01D0"
                                        },
                                        {
                                            chinese: "\u706F",
                                            pinyin: "d\u0113ng"
                                        },
                                        {
                                            chinese: "\u7535\u5F71",
                                            pinyin: "di\u00E0n'y\u01D0ng"
                                        },
                                        {
                                            chinese: "\u54C4",
                                            pinyin: "h\u01D2ng"
                                        },
                                        {
                                            chinese: "\u5148",
                                            pinyin: "xi\u0101n"
                                        },
                                        {
                                            chinese: "\u95ED",
                                            pinyin: "b\u00EC"
                                        },
                                        {
                                            chinese: "\u8138",
                                            pinyin: "li\u01CEn"
                                        },
                                        {
                                            chinese: "\u6C89",
                                            pinyin: "ch\u00E9n"
                                        },
                                        {
                                            chinese: "\u53D1",
                                            pinyin: "f\u0101"
                                        },
                                        {
                                            chinese: "\u7A97",
                                            pinyin: "chu\u0101ng"
                                        },
                                        {
                                            chinese: "\u6C99",
                                            pinyin: "sh\u0101"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 4",
                                        zh_cn: "\u5199\u5B57\u88684",
                                        zh_tw: "\u5BEB\u5B57\u93364"
                                    },
                                    words: [{
                                            chinese: "\u4F9D",
                                            pinyin: "y\u012B"
                                        },
                                        {
                                            chinese: "\u5C3D",
                                            pinyin: "j\u00ECn"
                                        },
                                        {
                                            chinese: "\u9EC4",
                                            pinyin: "hu\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5C42",
                                            pinyin: "c\u00E9ng"
                                        },
                                        {
                                            chinese: "\u7167",
                                            pinyin: "zh\u00E0o"
                                        },
                                        {
                                            chinese: "\u7089",
                                            pinyin: "l\u00FA"
                                        },
                                        {
                                            chinese: "\u70DF",
                                            pinyin: "y\u0101n"
                                        },
                                        {
                                            chinese: "\u6302",
                                            pinyin: "gu\u00E0"
                                        },
                                        {
                                            chinese: "\u5DDD",
                                            pinyin: "chu\u0101n"
                                        },
                                        {
                                            chinese: "\u5357\u90E8",
                                            pinyin: "n\u00E1n'b\u00F9"
                                        },
                                        {
                                            chinese: "\u4E9B",
                                            pinyin: "xi\u0113"
                                        },
                                        {
                                            chinese: "\u5DE8",
                                            pinyin: "j\u00F9"
                                        },
                                        {
                                            chinese: "\u4F4D",
                                            pinyin: "w\u00E8i"
                                        },
                                        {
                                            chinese: "\u5411",
                                            pinyin: "xi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6BCF",
                                            pinyin: "m\u011Bi"
                                        },
                                        {
                                            chinese: "\u5347",
                                            pinyin: "sh\u0113ng"
                                        },
                                        {
                                            chinese: "\u95EA",
                                            pinyin: "sh\u01CEn"
                                        },
                                        {
                                            chinese: "\u72D7",
                                            pinyin: "g\u01D2u"
                                        },
                                        {
                                            chinese: "\u6E7E",
                                            pinyin: "w\u0101n"
                                        },
                                        {
                                            chinese: "\u540D\u80DC",
                                            pinyin: "m\u00EDng'sh\u00E8ng"
                                        },
                                        {
                                            chinese: "\u8FF9",
                                            pinyin: "j\u00EC"
                                        },
                                        {
                                            chinese: "\u592E",
                                            pinyin: "y\u0101ng"
                                        },
                                        {
                                            chinese: "\u4E3D",
                                            pinyin: "l\u00EC"
                                        },
                                        {
                                            chinese: "\u5C55\u73B0",
                                            pinyin: "zh\u01CEn'xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u4EA7",
                                            pinyin: "ch\u01CEn"
                                        },
                                        {
                                            chinese: "\u4EFD",
                                            pinyin: "f\u00E8n"
                                        },
                                        {
                                            chinese: "\u5761",
                                            pinyin: "p\u014D"
                                        },
                                        {
                                            chinese: "\u679D",
                                            pinyin: "zh\u012B"
                                        },
                                        {
                                            chinese: "\u8D77",
                                            pinyin: "q\u01D0"
                                        },
                                        {
                                            chinese: "\u5BA2",
                                            pinyin: "k\u00E8"
                                        },
                                        {
                                            chinese: "\u8001",
                                            pinyin: "l\u01CEo"
                                        },
                                        {
                                            chinese: "\u6536",
                                            pinyin: "sh\u014Du"
                                        },
                                        {
                                            chinese: "\u57CE\u5E02",
                                            pinyin: "ch\u00E9ng'sh\u00EC"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 5",
                                        zh_cn: "\u5199\u5B57\u88685",
                                        zh_tw: "\u5BEB\u5B57\u93365"
                                    },
                                    words: [{
                                            chinese: "\u4E95",
                                            pinyin: "j\u01D0ng"
                                        },
                                        {
                                            chinese: "\u89C2",
                                            pinyin: "gu\u0101n"
                                        },
                                        {
                                            chinese: "\u6CBF",
                                            pinyin: "y\u00E1n"
                                        },
                                        {
                                            chinese: "\u7B54",
                                            pinyin: "d\u00E1"
                                        },
                                        {
                                            chinese: "\u6E34",
                                            pinyin: "k\u011B"
                                        },
                                        {
                                            chinese: "\u559D",
                                            pinyin: "h\u0113"
                                        },
                                        {
                                            chinese: "\u8BDD",
                                            pinyin: "hu\u00E0"
                                        },
                                        {
                                            chinese: "\u9645",
                                            pinyin: "j\u00EC"
                                        },
                                        {
                                            chinese: "\u811A",
                                            pinyin: "ji\u01CEo"
                                        },
                                        {
                                            chinese: "\u9762",
                                            pinyin: "mi\u00E0n"
                                        },
                                        {
                                            chinese: "\u9635",
                                            pinyin: "zh\u00E8n"
                                        },
                                        {
                                            chinese: "\u6717",
                                            pinyin: "l\u01CEng"
                                        },
                                        {
                                            chinese: "\u67AF",
                                            pinyin: "k\u016B"
                                        },
                                        {
                                            chinese: "\u5374",
                                            pinyin: "qu\u00E8"
                                        },
                                        {
                                            chinese: "\u7B2C",
                                            pinyin: "d\u00EC"
                                        },
                                        {
                                            chinese: "\u5C06",
                                            pinyin: "ji\u0101ng"
                                        },
                                        {
                                            chinese: "\u96BE",
                                            pinyin: "n\u00E1n"
                                        },
                                        {
                                            chinese: "\u7EB7",
                                            pinyin: "f\u0113n"
                                        },
                                        {
                                            chinese: "\u68F5",
                                            pinyin: "k\u0113"
                                        },
                                        {
                                            chinese: "\u8C22",
                                            pinyin: "xi\u00E8"
                                        },
                                        {
                                            chinese: "\u60F3",
                                            pinyin: "xi\u01CEng"
                                        },
                                        {
                                            chinese: "\u76EF",
                                            pinyin: "d\u012Bng"
                                        },
                                        {
                                            chinese: "\u8A00",
                                            pinyin: "y\u00E1n"
                                        },
                                        {
                                            chinese: "\u90BB",
                                            pinyin: "l\u00EDn"
                                        },
                                        {
                                            chinese: "\u6CBB",
                                            pinyin: "zh\u00EC"
                                        },
                                        {
                                            chinese: "\u602A",
                                            pinyin: "gu\u00E0i"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 6",
                                        zh_cn: "\u5199\u5B57\u88686",
                                        zh_tw: "\u5BEB\u5B57\u93366"
                                    },
                                    words: [{
                                            chinese: "\u697C",
                                            pinyin: "l\u00F3u"
                                        },
                                        {
                                            chinese: "\u5E74\u591C",
                                            pinyin: "ni\u00E1n'y\u00E8"
                                        },
                                        {
                                            chinese: "\u62AB",
                                            pinyin: "p\u012B"
                                        },
                                        {
                                            chinese: "\u8F7B",
                                            pinyin: "q\u012Bng"
                                        },
                                        {
                                            chinese: "\u5229",
                                            pinyin: "l\u00EC"
                                        },
                                        {
                                            chinese: "\u6241\u62C5",
                                            pinyin: "bi\u01CEn'd\u00E0n"
                                        },
                                        {
                                            chinese: "\u5FD7",
                                            pinyin: "zh\u00EC"
                                        },
                                        {
                                            chinese: "\u4F0D",
                                            pinyin: "w\u01D4"
                                        },
                                        {
                                            chinese: "\u5E08",
                                            pinyin: "sh\u012B"
                                        },
                                        {
                                            chinese: "\u519B",
                                            pinyin: "j\u016Bn"
                                        },
                                        {
                                            chinese: "\u6218\u58EB",
                                            pinyin: "zh\u00E0n'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u5FD8",
                                            pinyin: "w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6CFC",
                                            pinyin: "p\u014D"
                                        },
                                        {
                                            chinese: "\u5EA6",
                                            pinyin: "d\u00F9"
                                        },
                                        {
                                            chinese: "\u9F99",
                                            pinyin: "l\u00F3ng"
                                        },
                                        {
                                            chinese: "\u70AE",
                                            pinyin: "p\u00E0o"
                                        },
                                        {
                                            chinese: "\u7A7F",
                                            pinyin: "chu\u0101n"
                                        },
                                        {
                                            chinese: "\u59CB",
                                            pinyin: "sh\u01D0"
                                        },
                                        {
                                            chinese: "\u4EE4",
                                            pinyin: "l\u00ECng"
                                        },
                                        {
                                            chinese: "\u5218",
                                            pinyin: "li\u00FA"
                                        },
                                        {
                                            chinese: "\u6C11",
                                            pinyin: "m\u00EDn"
                                        },
                                        {
                                            chinese: "\u53CD",
                                            pinyin: "f\u01CEn"
                                        },
                                        {
                                            chinese: "\u6751",
                                            pinyin: "c\u016Bn"
                                        },
                                        {
                                            chinese: "\u88AB",
                                            pinyin: "b\u00E8i"
                                        },
                                        {
                                            chinese: "\u5173",
                                            pinyin: "gu\u0101n"
                                        },
                                        {
                                            chinese: "\u9053",
                                            pinyin: "d\u00E0o"
                                        },
                                        {
                                            chinese: "\u5175",
                                            pinyin: "b\u012Bng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 7",
                                        zh_cn: "\u5199\u5B57\u88687",
                                        zh_tw: "\u5BEB\u5B57\u93367"
                                    },
                                    words: [{
                                            chinese: "\u5371",
                                            pinyin: "w\u0113i"
                                        },
                                        {
                                            chinese: "\u6562",
                                            pinyin: "g\u01CEn"
                                        },
                                        {
                                            chinese: "\u60CA",
                                            pinyin: "j\u012Bng"
                                        },
                                        {
                                            chinese: "\u9634",
                                            pinyin: "y\u012Bn"
                                        },
                                        {
                                            chinese: "\u4F3C",
                                            pinyin: "s\u00EC"
                                        },
                                        {
                                            chinese: "\u91CE",
                                            pinyin: "y\u011B"
                                        },
                                        {
                                            chinese: "\u82CD\u832B",
                                            pinyin: "c\u0101ng'm\u00E1ng"
                                        },
                                        {
                                            chinese: "\u4E8E",
                                            pinyin: "y\u00FA"
                                        },
                                        {
                                            chinese: "\u8BBA",
                                            pinyin: "l\u00F9n"
                                        },
                                        {
                                            chinese: "\u5CB8",
                                            pinyin: "\u00E0n"
                                        },
                                        {
                                            chinese: "\u5C4B",
                                            pinyin: "w\u016B"
                                        },
                                        {
                                            chinese: "\u5207",
                                            pinyin: "qi\u0113"
                                        },
                                        {
                                            chinese: "\u4E45",
                                            pinyin: "ji\u01D4"
                                        },
                                        {
                                            chinese: "\u6563\u6B65",
                                            pinyin: "s\u00E0n'b\u00F9"
                                        },
                                        {
                                            chinese: "\u5531",
                                            pinyin: "ch\u00E0ng"
                                        },
                                        {
                                            chinese: "\u8D76",
                                            pinyin: "g\u01CEn"
                                        },
                                        {
                                            chinese: "\u65FA",
                                            pinyin: "w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u65C1",
                                            pinyin: "p\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6D51",
                                            pinyin: "h\u00FAn"
                                        },
                                        {
                                            chinese: "\u8C01",
                                            pinyin: "shu\u00ED"
                                        },
                                        {
                                            chinese: "\u6C7D",
                                            pinyin: "q\u00EC"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Writing 8",
                                        zh_cn: "\u5199\u5B57\u88688",
                                        zh_tw: "\u5BEB\u5B57\u93368"
                                    },
                                    words: [{
                                            chinese: "\u98DF\u7269",
                                            pinyin: "sh\u00ED'w\u00F9"
                                        },
                                        {
                                            chinese: "\u7237",
                                            pinyin: "y\u00E9"
                                        },
                                        {
                                            chinese: "\u5C31",
                                            pinyin: "ji\u00F9"
                                        },
                                        {
                                            chinese: "\u722A",
                                            pinyin: "zh\u01CEo"
                                        },
                                        {
                                            chinese: "\u795E",
                                            pinyin: "sh\u00E9n"
                                        },
                                        {
                                            chinese: "\u6D3B\u732A",
                                            pinyin: "hu\u00F3'zh\u016B"
                                        },
                                        {
                                            chinese: "\u6298",
                                            pinyin: "zh\u00E9"
                                        },
                                        {
                                            chinese: "\u5F20",
                                            pinyin: "zh\u0101ng"
                                        },
                                        {
                                            chinese: "\u795D",
                                            pinyin: "zh\u00F9"
                                        },
                                        {
                                            chinese: "\u624E",
                                            pinyin: "zh\u0101"
                                        },
                                        {
                                            chinese: "\u6293",
                                            pinyin: "zhu\u0101"
                                        },
                                        {
                                            chinese: "\u5435",
                                            pinyin: "ch\u01CEo"
                                        },
                                        {
                                            chinese: "\u4F46",
                                            pinyin: "d\u00E0n"
                                        },
                                        {
                                            chinese: "\u54ED",
                                            pinyin: "k\u016B"
                                        },
                                        {
                                            chinese: "\u8F66",
                                            pinyin: "ch\u0113"
                                        },
                                        {
                                            chinese: "\u5F97",
                                            pinyin: "d\u00E9"
                                        },
                                        {
                                            chinese: "\u79E7\u82D7",
                                            pinyin: "y\u0101ng'mi\u00E1o"
                                        },
                                        {
                                            chinese: "\u6C57",
                                            pinyin: "h\u00E0n"
                                        },
                                        {
                                            chinese: "\u6025",
                                            pinyin: "j\u00ED"
                                        },
                                        {
                                            chinese: "\u573A",
                                            pinyin: "ch\u01CEng"
                                        },
                                        {
                                            chinese: "\u4F24",
                                            pinyin: "sh\u0101ng"
                                        },
                                        {
                                            chinese: "\u8DEF",
                                            pinyin: "l\u00F9"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 1",
                                        zh_cn: "\u8BCD\u8BED1",
                                        zh_tw: "\u8A5E\u8A9E1"
                                    },
                                    words: [{
                                            chinese: "\u770B\u89C1",
                                            pinyin: "k\u00E0n'ji\u00E0n"
                                        },
                                        {
                                            chinese: "\u54EA\u91CC",
                                            pinyin: "n\u01CE'l\u01D0"
                                        },
                                        {
                                            chinese: "\u90A3\u8FB9",
                                            pinyin: "n\u00E0'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u5934\u9876",
                                            pinyin: "t\u00F3u'd\u01D0ng"
                                        },
                                        {
                                            chinese: "\u773C\u775B",
                                            pinyin: "y\u01CEn'j\u012Bng"
                                        },
                                        {
                                            chinese: "\u96EA\u767D",
                                            pinyin: "xu\u011B'b\u00E1i"
                                        },
                                        {
                                            chinese: "\u809A\u76AE",
                                            pinyin: "d\u00F9'p\u00ED"
                                        },
                                        {
                                            chinese: "\u5B69\u5B50",
                                            pinyin: "h\u00E1i'zi"
                                        },
                                        {
                                            chinese: "\u4E24\u4E2A",
                                            pinyin: "li\u01CEngg\u00E8"
                                        },
                                        {
                                            chinese: "\u5BBD\u5E7F",
                                            pinyin: "ku\u0101ngu\u01CEng"
                                        },
                                        {
                                            chinese: "\u8DF3\u9AD8",
                                            pinyin: "ti\u00E0og\u0101o"
                                        },
                                        {
                                            chinese: "\u5929\u7A7A",
                                            pinyin: "ti\u0101n'k\u014Dng"
                                        },
                                        {
                                            chinese: "\u508D\u665A",
                                            pinyin: "b\u00E0ng'w\u01CEn"
                                        },
                                        {
                                            chinese: "\u4EBA\u4EEC",
                                            pinyin: "r\u00E9n'men"
                                        },
                                        {
                                            chinese: "\u51AC\u5929",
                                            pinyin: "d\u014Dng'ti\u0101n"
                                        },
                                        {
                                            chinese: "\u82B1\u6735",
                                            pinyin: "hu\u0101'du\u01D2"
                                        },
                                        {
                                            chinese: "\u5E73\u5E38",
                                            pinyin: "p\u00EDng'ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6C5F\u6CB3",
                                            pinyin: "ji\u0101ng'h\u00E9"
                                        },
                                        {
                                            chinese: "\u6D77\u6D0B",
                                            pinyin: "h\u01CEi'y\u00E1ng"
                                        },
                                        {
                                            chinese: "\u7530\u5730",
                                            pinyin: "ti\u00E1n'd\u00EC"
                                        },
                                        {
                                            chinese: "\u5DE5\u4F5C",
                                            pinyin: "g\u014Dng'zu\u00F2"
                                        },
                                        {
                                            chinese: "\u53D8\u5316",
                                            pinyin: "bi\u00E0nhu\u00E0"
                                        },
                                        {
                                            chinese: "\u6781\u574F",
                                            pinyin: "j\u00EDhu\u00E0i"
                                        },
                                        {
                                            chinese: "\u7167\u7247",
                                            pinyin: "zh\u00E0opi\u00E0n"
                                        },
                                        {
                                            chinese: "\u5E26\u7ED9",
                                            pinyin: "d\u00E0ig\u011Bi"
                                        },
                                        {
                                            chinese: "\u529E\u6CD5",
                                            pinyin: "b\u00E0n'f\u01CE"
                                        },
                                        {
                                            chinese: "\u5982\u679C",
                                            pinyin: "r\u00FA'gu\u01D2"
                                        },
                                        {
                                            chinese: "\u957F\u5927",
                                            pinyin: "zh\u01CEng'd\u00E0"
                                        },
                                        {
                                            chinese: "\u5A03\u5A03",
                                            pinyin: "w\u00E1'w\u00E1"
                                        },
                                        {
                                            chinese: "\u53EA\u8981",
                                            pinyin: "zh\u01D0'y\u00E0o"
                                        },
                                        {
                                            chinese: "\u76AE\u6BDB",
                                            pinyin: "p\u00ED'm\u00E1o"
                                        },
                                        {
                                            chinese: "\u90A3\u91CC",
                                            pinyin: "n\u00E0'l\u01D0"
                                        },
                                        {
                                            chinese: "\u77E5\u8BC6",
                                            pinyin: "zh\u012B'shi"
                                        },
                                        {
                                            chinese: "\u516C\u56ED",
                                            pinyin: "g\u014Dngyu\u00E1n"
                                        },
                                        {
                                            chinese: "\u5B83\u4EEC",
                                            pinyin: "t\u0101'men"
                                        },
                                        {
                                            chinese: "\u5979\u7684",
                                            pinyin: "t\u0101de"
                                        },
                                        {
                                            chinese: "\u66F4\u52A0",
                                            pinyin: "g\u00E8ngji\u0101"
                                        },
                                        {
                                            chinese: "\u56DB\u6D77\u4E3A\u5BB6",
                                            pinyin: "s\u00EC'h\u01CEi'w\u00E9i'ji\u0101"
                                        },
                                        {
                                            chinese: "\u56E0\u4E3A",
                                            pinyin: "y\u012Bnw\u00E9i"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 2",
                                        zh_cn: "\u8BCD\u8BED2",
                                        zh_tw: "\u8A5E\u8A9E2"
                                    },
                                    words: [{
                                            chinese: "\u82B1\u56ED",
                                            pinyin: "hu\u0101'yu\u00E1n"
                                        },
                                        {
                                            chinese: "\u77F3\u6865",
                                            pinyin: "sh\u00ED'qi\u00E1o"
                                        },
                                        {
                                            chinese: "\u961F\u65D7",
                                            pinyin: "du\u00EC'q\u00ED"
                                        },
                                        {
                                            chinese: "\u94DC\u53F7",
                                            pinyin: "t\u00F3ng'h\u00E0o"
                                        },
                                        {
                                            chinese: "\u6B22\u7B11",
                                            pinyin: "hu\u0101n'xi\u00E0o"
                                        },
                                        {
                                            chinese: "\u7EA2\u9886\u5DFE",
                                            pinyin: "h\u00F3ng'l\u01D0ng'j\u012Bn"
                                        },
                                        {
                                            chinese: "\u5230\u5904",
                                            pinyin: "d\u00E0och\u00F9"
                                        },
                                        {
                                            chinese: "\u4EBA\u7FA4",
                                            pinyin: "r\u00E9n'q\u00FAn"
                                        },
                                        {
                                            chinese: "\u6768\u6811",
                                            pinyin: "y\u00E1ng'sh\u00F9"
                                        },
                                        {
                                            chinese: "\u6811\u53F6",
                                            pinyin: "sh\u00F9'y\u00E8"
                                        },
                                        {
                                            chinese: "\u67AB\u6811",
                                            pinyin: "f\u0113ng'sh\u00F9"
                                        },
                                        {
                                            chinese: "\u677E\u67CF",
                                            pinyin: "s\u014Dng'b\u01CEi"
                                        },
                                        {
                                            chinese: "\u6728\u68C9",
                                            pinyin: "m\u00F9'mi\u00E1n"
                                        },
                                        {
                                            chinese: "\u6C34\u6749",
                                            pinyin: "shu\u01D0'sh\u0101n"
                                        },
                                        {
                                            chinese: "\u5316\u77F3",
                                            pinyin: "hu\u00E0'sh\u00ED"
                                        },
                                        {
                                            chinese: "\u91D1\u6842",
                                            pinyin: "j\u012Bn'gu\u00EC"
                                        },
                                        {
                                            chinese: "\u58EE\u4E3D",
                                            pinyin: "zhu\u00E0ngl\u00EC"
                                        },
                                        {
                                            chinese: "\u68A7\u6850",
                                            pinyin: "w\u00FAt\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5199\u5B57",
                                            pinyin: "xi\u011B'z\u00EC"
                                        },
                                        {
                                            chinese: "\u4E1B\u6797",
                                            pinyin: "c\u00F3ng'l\u00EDn"
                                        },
                                        {
                                            chinese: "\u6DF1\u5904",
                                            pinyin: "sh\u0113n'ch\u00F9"
                                        },
                                        {
                                            chinese: "\u7AF9\u6797",
                                            pinyin: "zh\u00FAl\u00EDn"
                                        },
                                        {
                                            chinese: "\u718A\u732B",
                                            pinyin: "xi\u00F3ng'm\u0101o"
                                        },
                                        {
                                            chinese: "\u670B\u53CB",
                                            pinyin: "p\u00E9ng'you"
                                        },
                                        {
                                            chinese: "\u5531\u6B4C",
                                            pinyin: "ch\u00E0ng'g\u0113"
                                        },
                                        {
                                            chinese: "\u56DB\u5B63",
                                            pinyin: "s\u00EC'j\u00EC"
                                        },
                                        {
                                            chinese: "\u519C\u4E8B",
                                            pinyin: "n\u00F3ng'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u6708\u5149",
                                            pinyin: "yu\u00E8'gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u8F9B\u82E6",
                                            pinyin: "x\u012Bn'k\u01D4"
                                        },
                                        {
                                            chinese: "\u68C9\u8863",
                                            pinyin: "mi\u00E1n'y\u012B"
                                        },
                                        {
                                            chinese: "\u5439\u98CE",
                                            pinyin: "chu\u012Bf\u0113ng"
                                        },
                                        {
                                            chinese: "\u5316\u80A5",
                                            pinyin: "hu\u00E0f\u00E9i"
                                        },
                                        {
                                            chinese: "\u519C\u5FD9",
                                            pinyin: "n\u00F3ngm\u00E1ng"
                                        },
                                        {
                                            chinese: "\u5F52\u6765",
                                            pinyin: "gu\u012Bl\u00E1i"
                                        },
                                        {
                                            chinese: "\u56DE\u5F52",
                                            pinyin: "hu\u00EDgu\u012B"
                                        },
                                        {
                                            chinese: "\u7231\u6234",
                                            pinyin: "\u00E0id\u00E0i"
                                        },
                                        {
                                            chinese: "\u6234\u7EA2\u9886\u5DFE",
                                            pinyin: "d\u00E0ih\u00F3ngl\u01D0ngj\u012Bn"
                                        },
                                        {
                                            chinese: "\u516D\u5341\u4E5D",
                                            pinyin: "li\u00F9sh\u00EDji\u01D4"
                                        },
                                        {
                                            chinese: "\u62AB\u661F\u6234\u6708",
                                            pinyin: "p\u012Bx\u012Bngd\u00E0iyu\u00E8"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 3",
                                        zh_cn: "\u8BCD\u8BED3",
                                        zh_tw: "\u8A5E\u8A9E3"
                                    },
                                    words: [{
                                            chinese: "\u4E00\u540C",
                                            pinyin: "y\u00EC't\u00F3ng"
                                        },
                                        {
                                            chinese: "\u67F1\u5B50",
                                            pinyin: "zh\u00F9'zi"
                                        },
                                        {
                                            chinese: "\u4E00\u8FB9",
                                            pinyin: "y\u00EC'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u5230\u5E95",
                                            pinyin: "d\u00E0o'd\u01D0"
                                        },
                                        {
                                            chinese: "\u79E4\u6746",
                                            pinyin: "ch\u00E8ng'g\u01CEn"
                                        },
                                        {
                                            chinese: "\u529B\u6C14",
                                            pinyin: "l\u00EC'qi"
                                        },
                                        {
                                            chinese: "\u51FA\u6765",
                                            pinyin: "ch\u016B'l\u00E1i"
                                        },
                                        {
                                            chinese: "\u8239\u8EAB",
                                            pinyin: "chu\u00E1n'sh\u0113n"
                                        },
                                        {
                                            chinese: "\u77F3\u5934",
                                            pinyin: "sh\u00ED'tou"
                                        },
                                        {
                                            chinese: "\u5730\u65B9",
                                            pinyin: "d\u00EC'f\u0101ng"
                                        },
                                        {
                                            chinese: "\u679C\u7136",
                                            pinyin: "gu\u01D2'r\u00E1n"
                                        },
                                        {
                                            chinese: "\u79F0\u547C",
                                            pinyin: "ch\u0113ng'hu"
                                        },
                                        {
                                            chinese: "\u505A\u4E8B",
                                            pinyin: "zu\u00F2sh\u00EC"
                                        },
                                        {
                                            chinese: "\u5C81\u6708",
                                            pinyin: "su\u00EC'yu\u00E8"
                                        },
                                        {
                                            chinese: "\u7AD9\u7ACB",
                                            pinyin: "zh\u00E0nl\u00EC"
                                        },
                                        {
                                            chinese: "\u8BC4\u5956",
                                            pinyin: "p\u00EDng'ji\u01CEng"
                                        },
                                        {
                                            chinese: "\u65F6\u95F4",
                                            pinyin: "sh\u00ED'ji\u0101n"
                                        },
                                        {
                                            chinese: "\u62A5\u7EB8",
                                            pinyin: "b\u00E0o'zh\u01D0"
                                        },
                                        {
                                            chinese: "\u4E8B\u60C5",
                                            pinyin: "sh\u00EC'qing"
                                        },
                                        {
                                            chinese: "\u597D\u4E8B",
                                            pinyin: "h\u01CE'osh\u00EC"
                                        },
                                        {
                                            chinese: "\u574F\u4E8B",
                                            pinyin: "hu\u00E0i'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u53E6\u5916",
                                            pinyin: "l\u00ECng'w\u00E0i"
                                        },
                                        {
                                            chinese: "\u4E00\u5E76",
                                            pinyin: "y\u00ED'b\u00ECng"
                                        },
                                        {
                                            chinese: "\u6765\u4E0D\u53CA",
                                            pinyin: "l\u00E1i'bu'j\u00ED"
                                        },
                                        {
                                            chinese: "\u6349\u62FF",
                                            pinyin: "zhu\u014D'n\u00E1"
                                        },
                                        {
                                            chinese: "\u62FF\u4E1C\u897F",
                                            pinyin: "n\u00E1d\u014Dngx\u012B"
                                        },
                                        {
                                            chinese: "\u4E00\u5E45\u753B",
                                            pinyin: "y\u012B'f\u00FA'hu\u00E0"
                                        },
                                        {
                                            chinese: "\u4E00\u5C01\u4FE1",
                                            pinyin: "y\u012B'f\u0113ng'x\u00ECn"
                                        },
                                        {
                                            chinese: "\u51FA\u56FD",
                                            pinyin: "ch\u016B'gu\u00F3"
                                        },
                                        {
                                            chinese: "\u4ECA\u5929",
                                            pinyin: "j\u012Bn'ti\u0101n"
                                        },
                                        {
                                            chinese: "\u5F00\u5FC3",
                                            pinyin: "k\u0101i'x\u012Bn"
                                        },
                                        {
                                            chinese: "\u4EE5\u524D",
                                            pinyin: "y\u01D0'qi\u00E1n"
                                        },
                                        {
                                            chinese: "\u8FD8\u6709",
                                            pinyin: "h\u00E1i'y\u01D2u"
                                        },
                                        {
                                            chinese: "\u53F0\u706F",
                                            pinyin: "t\u00E1i'd\u0113ng"
                                        },
                                        {
                                            chinese: "\u8FD9\u65F6",
                                            pinyin: "zh\u00E8'sh\u00ED"
                                        },
                                        {
                                            chinese: "\u9633\u5149",
                                            pinyin: "y\u00E1ng'gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u7535\u5F71",
                                            pinyin: "di\u00E0n'y\u01D0ng"
                                        },
                                        {
                                            chinese: "\u660E\u4EAE",
                                            pinyin: "m\u00EDng'li\u00E0ng"
                                        },
                                        {
                                            chinese: "\u6545\u4E8B",
                                            pinyin: "g\u00F9'shi"
                                        },
                                        {
                                            chinese: "\u5706\u73E0\u7B14",
                                            pinyin: "yu\u00E1n'zh\u016B'b\u01D0"
                                        },
                                        {
                                            chinese: "\u5934\u53D1",
                                            pinyin: "t\u00F3u'f\u00E0"
                                        },
                                        {
                                            chinese: "\u6C99\u53D1",
                                            pinyin: "sh\u0101f\u0101"
                                        },
                                        {
                                            chinese: "\u7A97\u5916",
                                            pinyin: "chu\u0101ng'w\u00E0i"
                                        },
                                        {
                                            chinese: "\u54C4\u4EBA",
                                            pinyin: "h\u01D2ng'r\u00E9n"
                                        },
                                        {
                                            chinese: "\u6C89\u601D",
                                            pinyin: "ch\u00E9n's\u012B"
                                        },
                                        {
                                            chinese: "\u9996\u5148",
                                            pinyin: "sh\u01D2u'xi\u0101n"
                                        },
                                        {
                                            chinese: "\u95ED\u773C",
                                            pinyin: "b\u00EC'y\u01CEn"
                                        },
                                        {
                                            chinese: "\u5706\u8138",
                                            pinyin: "yu\u00E1n'li\u01CEn"
                                        },
                                        {
                                            chinese: "\u7EA2\u7740\u8138",
                                            pinyin: "h\u00F3ngzheli\u01CEn"
                                        },
                                        {
                                            chinese: "\u5173\u95ED",
                                            pinyin: "gu\u0101nb\u00EC"
                                        },
                                        {
                                            chinese: "\u62FF\u7740",
                                            pinyin: "n\u00E1zhe"
                                        },
                                        {
                                            chinese: "\u505A\u624B\u5DE5",
                                            pinyin: "zu\u00F2'sh\u01D2u'g\u014Dng"
                                        },
                                        {
                                            chinese: "\u4E00\u652F\u7B14",
                                            pinyin: "y\u012B'zh\u012B'b\u01D0"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 4",
                                        zh_cn: "\u8BCD\u8BED4",
                                        zh_tw: "\u8A5E\u8A9E4"
                                    },
                                    words: [{
                                            chinese: "\u4F9D\u7167",
                                            pinyin: "y\u012Bzh\u00E0o"
                                        },
                                        {
                                            chinese: "\u5C3D\u5934",
                                            pinyin: "j\u00ECnt\u00F3u"
                                        },
                                        {
                                            chinese: "\u9EC4\u6CB3",
                                            pinyin: "hu\u00E1ngh\u00E9"
                                        },
                                        {
                                            chinese: "\u5C42\u6B21",
                                            pinyin: "c\u00E9ngc\u00EC"
                                        },
                                        {
                                            chinese: "\u9999\u7089",
                                            pinyin: "xi\u0101ngl\u00FA"
                                        },
                                        {
                                            chinese: "\u9999\u70DF",
                                            pinyin: "xi\u0101ngy\u0101n"
                                        },
                                        {
                                            chinese: "\u6302\u4F4F",
                                            pinyin: "gu\u00E0zh\u00F9"
                                        },
                                        {
                                            chinese: "\u540D\u5C71\u5927\u5DDD",
                                            pinyin: "m\u00EDngsh\u0101nd\u00E0chu\u0101n"
                                        },
                                        {
                                            chinese: "\u9EC4\u5C71",
                                            pinyin: "hu\u00E1ng'sh\u0101n"
                                        },
                                        {
                                            chinese: "\u5357\u90E8",
                                            pinyin: "n\u00E1n'b\u00F9"
                                        },
                                        {
                                            chinese: "\u90A3\u4E9B",
                                            pinyin: "n\u00E0'xi\u0113"
                                        },
                                        {
                                            chinese: "\u5C71\u9876",
                                            pinyin: "sh\u0101n'd\u01D0ng"
                                        },
                                        {
                                            chinese: "\u4E91\u6D77",
                                            pinyin: "y\u00FAn'h\u01CEi"
                                        },
                                        {
                                            chinese: "\u5DE8\u77F3",
                                            pinyin: "j\u00F9'sh\u00ED"
                                        },
                                        {
                                            chinese: "\u524D\u65B9",
                                            pinyin: "qi\u00E1n'f\u0101ng"
                                        },
                                        {
                                            chinese: "\u6BCF\u5F53",
                                            pinyin: "m\u011Bi'd\u0101ng"
                                        },
                                        {
                                            chinese: "\u5B83\u4EEC",
                                            pinyin: "t\u0101'men"
                                        },
                                        {
                                            chinese: "\u90E8\u4F4D",
                                            pinyin: "b\u00F9w\u00E8i"
                                        },
                                        {
                                            chinese: "\u65B9\u5411",
                                            pinyin: "f\u0101ngxi\u00E0ng"
                                        },
                                        {
                                            chinese: "\u5347\u65D7",
                                            pinyin: "sh\u0113ngq\u00ED"
                                        },
                                        {
                                            chinese: "\u72D7\u718A",
                                            pinyin: "g\u01D2uxi\u00F3ng"
                                        },
                                        {
                                            chinese: "\u4E00\u52A8\u4E0D\u52A8",
                                            pinyin: "y\u012B'd\u00F2ng'bu'd\u00F2ng"
                                        },
                                        {
                                            chinese: "\u7FA4\u5C71",
                                            pinyin: "q\u00FAn'sh\u0101n"
                                        },
                                        {
                                            chinese: "\u6811\u6728",
                                            pinyin: "sh\u00F9'm\u00F9"
                                        },
                                        {
                                            chinese: "\u4E2D\u592E",
                                            pinyin: "zh\u014Dng'y\u0101ng"
                                        },
                                        {
                                            chinese: "\u7F8E\u4E3D",
                                            pinyin: "m\u011Bi'l\u00EC"
                                        },
                                        {
                                            chinese: "\u706F\u5149",
                                            pinyin: "d\u0113ng'gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u4E2D\u5348",
                                            pinyin: "zh\u014Dng'w\u01D4"
                                        },
                                        {
                                            chinese: "\u5C55\u73B0",
                                            pinyin: "zh\u01CEn'xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u98CE\u5149",
                                            pinyin: "f\u0113ng'gu\u0101ng"
                                        },
                                        {
                                            chinese: "\u53F0\u6E7E",
                                            pinyin: "t\u00E1iw\u0101n"
                                        },
                                        {
                                            chinese: "\u91D1\u5149\u95EA\u95EA",
                                            pinyin: "j\u012Bn'gu\u0101ng'sh\u01CEn'sh\u01CEn"
                                        },
                                        {
                                            chinese: "\u540D\u80DC\u53E4\u8FF9",
                                            pinyin: "m\u00EDng'sh\u00E8ng'g\u01D4'j\u00EC"
                                        },
                                        {
                                            chinese: "\u51FA\u4EA7",
                                            pinyin: "ch\u016B'ch\u01CEn"
                                        },
                                        {
                                            chinese: "\u6C34\u679C",
                                            pinyin: "shu\u01D0'gu\u01D2"
                                        },
                                        {
                                            chinese: "\u6708\u4EFD",
                                            pinyin: "yu\u00E8'f\u00E8n"
                                        },
                                        {
                                            chinese: "\u5C71\u5761",
                                            pinyin: "sh\u0101np\u014D"
                                        },
                                        {
                                            chinese: "\u679D\u53F6",
                                            pinyin: "zh\u012B'y\u00E8"
                                        },
                                        {
                                            chinese: "\u5C55\u5F00",
                                            pinyin: "zh\u01CEn'k\u0101i"
                                        },
                                        {
                                            chinese: "\u597D\u5BA2",
                                            pinyin: "h\u00E0o'k\u00E8"
                                        },
                                        {
                                            chinese: "\u8001\u4E61",
                                            pinyin: "l\u01CEo'xi\u0101ng"
                                        },
                                        {
                                            chinese: "\u57CE\u5E02",
                                            pinyin: "ch\u00E9ng'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u7A7A\u6C14",
                                            pinyin: "k\u014Dng'q\u00EC"
                                        },
                                        {
                                            chinese: "\u6C34\u5206",
                                            pinyin: "shu\u01D0'f\u00E8n"
                                        },
                                        {
                                            chinese: "\u8D77\u6765",
                                            pinyin: "q\u01D0'l\u00E1i"
                                        },
                                        {
                                            chinese: "\u6536\u6210",
                                            pinyin: "sh\u014Duch\u00E9ng"
                                        },
                                        {
                                            chinese: "\u6536\u5165",
                                            pinyin: "sh\u014Dur\u00F9"
                                        },
                                        {
                                            chinese: "\u4E00\u8D77",
                                            pinyin: "y\u00ECq\u01D0"
                                        },
                                        {
                                            chinese: "\u4E94\u5149\u5341\u8272",
                                            pinyin: "w\u01D4'gu\u0101ng'sh\u00ED's\u00E8"
                                        },
                                        {
                                            chinese: "\u5C71\u57CE",
                                            pinyin: "sh\u0101n'ch\u00E9ng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 5",
                                        zh_cn: "\u8BCD\u8BED5",
                                        zh_tw: "\u8A5E\u8A9E5"
                                    },
                                    words: [{
                                            chinese: "\u5750\u4E95\u89C2\u5929",
                                            pinyin: "zu\u00F2'j\u01D0ng'gu\u0101n'ti\u0101n"
                                        },
                                        {
                                            chinese: "\u4E95\u6CBF",
                                            pinyin: "j\u01D0ng'y\u00E1n"
                                        },
                                        {
                                            chinese: "\u56DE\u7B54",
                                            pinyin: "hu\u00ED'd\u00E1"
                                        },
                                        {
                                            chinese: "\u53E3\u6E34",
                                            pinyin: "k\u01D2u'k\u011B"
                                        },
                                        {
                                            chinese: "\u5927\u8BDD",
                                            pinyin: "d\u00E0'hu\u00E0"
                                        },
                                        {
                                            chinese: "\u4E95\u53E3",
                                            pinyin: "j\u01D0ngk\u01D2u"
                                        },
                                        {
                                            chinese: "\u65E0\u8FB9\u65E0\u9645",
                                            pinyin: "w\u00FA'bi\u0101n'w\u00FA'j\u00EC"
                                        },
                                        {
                                            chinese: "\u559D\u6C34",
                                            pinyin: "h\u0113shu\u01D0"
                                        },
                                        {
                                            chinese: "\u5C71\u811A",
                                            pinyin: "sh\u0101n'ji\u01CEo"
                                        },
                                        {
                                            chinese: "\u5F53\u4F5C",
                                            pinyin: "d\u00E0ng'zu\u00F2"
                                        },
                                        {
                                            chinese: "\u524D\u9762",
                                            pinyin: "qi\u00E1n'mian"
                                        },
                                        {
                                            chinese: "\u6674\u6717",
                                            pinyin: "q\u00EDng'l\u01CEng"
                                        },
                                        {
                                            chinese: "\u67AF\u8349",
                                            pinyin: "k\u016B'c\u01CEo"
                                        },
                                        {
                                            chinese: "\u6B63\u597D",
                                            pinyin: "zh\u00E8ng'h\u01CEo"
                                        },
                                        {
                                            chinese: "\u6E05\u65E9",
                                            pinyin: "q\u012Bng'z\u01CEo"
                                        },
                                        {
                                            chinese: "\u73B0\u5728",
                                            pinyin: "xi\u00E0n'z\u00E0i"
                                        },
                                        {
                                            chinese: "\u5C06\u6765",
                                            pinyin: "ji\u0101ng'l\u00E1i"
                                        },
                                        {
                                            chinese: "\u96BE\u8FC7",
                                            pinyin: "n\u00E1n'gu\u00F2"
                                        },
                                        {
                                            chinese: "\u5927\u96EA\u7EB7\u98DE",
                                            pinyin: "d\u00E0'xu\u011B'f\u0113n'f\u0113i"
                                        },
                                        {
                                            chinese: "\u679D\u5934",
                                            pinyin: "zh\u012B't\u00F3u"
                                        },
                                        {
                                            chinese: "\u5374\u662F",
                                            pinyin: "qu\u00E8'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u4E00\u9635\u98CE",
                                            pinyin: "y\u00ED'zh\u00E8n'f\u0113ng"
                                        },
                                        {
                                            chinese: "\u7B2C\u4E00",
                                            pinyin: "d\u00ECy\u012B"
                                        },
                                        {
                                            chinese: "\u4ECE\u524D",
                                            pinyin: "c\u00F3ng'qi\u00E1n"
                                        },
                                        {
                                            chinese: "\u7EC6\u957F",
                                            pinyin: "x\u00EC'ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u53EF\u7231",
                                            pinyin: "k\u011B'\u00E0i"
                                        },
                                        {
                                            chinese: "\u6BCF\u5929",
                                            pinyin: "m\u011Bi'ti\u0101n"
                                        },
                                        {
                                            chinese: "\u81EA\u8A00\u81EA\u8BED",
                                            pinyin: "z\u00EC'y\u00E1n'z\u00EC'y\u01D4"
                                        },
                                        {
                                            chinese: "\u5357\u74DC",
                                            pinyin: "n\u00E1n'gu\u0101"
                                        },
                                        {
                                            chinese: "\u90BB\u5C45",
                                            pinyin: "l\u00EDn'j\u016B"
                                        },
                                        {
                                            chinese: "\u5947\u602A",
                                            pinyin: "q\u00ED'gu\u00E0i"
                                        },
                                        {
                                            chinese: "\u4E00\u68F5\u6811",
                                            pinyin: "y\u012Bk\u0113sh\u00F9"
                                        },
                                        {
                                            chinese: "\u8C22\u8C22",
                                            pinyin: "xi\u00E8'xi\u00E8"
                                        },
                                        {
                                            chinese: "\u60F3\u6CD5",
                                            pinyin: "xi\u01CEngf\u01CE"
                                        },
                                        {
                                            chinese: "\u76EF\u7740",
                                            pinyin: "d\u012Bngzhe"
                                        },
                                        {
                                            chinese: "\u6CBB\u75C5",
                                            pinyin: "zh\u00ECb\u00ECng"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 6",
                                        zh_cn: "\u8BCD\u8BED6",
                                        zh_tw: "\u8A5E\u8A9E6"
                                    },
                                    words: [{
                                            chinese: "\u516B\u89D2\u697C",
                                            pinyin: "b\u0101'ji\u01CEo'l\u00F3u"
                                        },
                                        {
                                            chinese: "\u6DF1\u591C",
                                            pinyin: "sh\u0113n'y\u00E8"
                                        },
                                        {
                                            chinese: "\u519B\u8863",
                                            pinyin: "j\u016Bn'y\u012B"
                                        },
                                        {
                                            chinese: "\u661F\u661F\u4E4B\u706B",
                                            pinyin: "x\u012Bng'x\u012Bng'zh\u012B'hu\u01D2"
                                        },
                                        {
                                            chinese: "\u6C89\u601D",
                                            pinyin: "ch\u00E9n's\u012B"
                                        },
                                        {
                                            chinese: "\u80DC\u5229",
                                            pinyin: "sh\u00E8ng'l\u00EC"
                                        },
                                        {
                                            chinese: "\u8FC7\u5E74",
                                            pinyin: "gu\u00F2ni\u00E1n"
                                        },
                                        {
                                            chinese: "\u8F7B\u677E",
                                            pinyin: "q\u012Bngs\u014Dng"
                                        },
                                        {
                                            chinese: "\u62AB\u661F\u6234\u6708",
                                            pinyin: "p\u012Bx\u012Bngd\u00E0iyu\u00E8"
                                        },
                                        {
                                            chinese: "\u6241\u62C5",
                                            pinyin: "bi\u01CEn'dan"
                                        },
                                        {
                                            chinese: "\u540C\u5FD7",
                                            pinyin: "t\u00F3ng'zh\u00EC"
                                        },
                                        {
                                            chinese: "\u5E26\u9886",
                                            pinyin: "d\u00E0i'l\u01D0ng"
                                        },
                                        {
                                            chinese: "\u961F\u4F0D",
                                            pinyin: "du\u00EC'w\u01D4"
                                        },
                                        {
                                            chinese: "\u4F1A\u5E08",
                                            pinyin: "hu\u00EC'sh\u012B"
                                        },
                                        {
                                            chinese: "\u7EA2\u519B",
                                            pinyin: "h\u00F3ng'j\u016Bn"
                                        },
                                        {
                                            chinese: "\u6765\u56DE",
                                            pinyin: "l\u00E1i'hu\u00ED"
                                        },
                                        {
                                            chinese: "\u6218\u58EB",
                                            pinyin: "zh\u00E0n'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u767D\u5929",
                                            pinyin: "b\u00E1i'ti\u0101n"
                                        },
                                        {
                                            chinese: "\u8D77\u6765",
                                            pinyin: "q\u01D0'l\u00E1i"
                                        },
                                        {
                                            chinese: "\u96BE\u5FD8",
                                            pinyin: "n\u00E1n'w\u00E0ng"
                                        },
                                        {
                                            chinese: "\u9F99\u8239",
                                            pinyin: "l\u00F3ng'chu\u00E1n"
                                        },
                                        {
                                            chinese: "\u82B1\u70AE",
                                            pinyin: "hu\u0101p\u00E0o"
                                        },
                                        {
                                            chinese: "\u6CFC\u6C34\u8282",
                                            pinyin: "p\u014D'shu\u01D0'ji\u00E9"
                                        },
                                        {
                                            chinese: "\u6B22\u547C",
                                            pinyin: "hu\u0101n'h\u016B"
                                        },
                                        {
                                            chinese: "\u4EBA\u7FA4",
                                            pinyin: "r\u00E9n'q\u00FAn"
                                        },
                                        {
                                            chinese: "\u6B22\u4E50",
                                            pinyin: "hu\u0101n'l\u00E8"
                                        },
                                        {
                                            chinese: "\u5F00\u59CB",
                                            pinyin: "k\u0101i'sh\u01D0"
                                        },
                                        {
                                            chinese: "\u591A\u4E48",
                                            pinyin: "du\u014D'me"
                                        },
                                        {
                                            chinese: "\u67CF\u6811\u679D",
                                            pinyin: "b\u01CEi'sh\u00F9'zh\u012B"
                                        },
                                        {
                                            chinese: "\u4E00\u5E74\u4E00\u5EA6",
                                            pinyin: "y\u00EC'ni\u00E1n'y\u00ED'd\u00F9"
                                        },
                                        {
                                            chinese: "\u56DB\u9762\u516B\u65B9",
                                            pinyin: "s\u00EC'mi\u00E0n'b\u0101'f\u0101ng"
                                        },
                                        {
                                            chinese: "\u7A7F\u6234",
                                            pinyin: "chu\u0101nd\u00E0i"
                                        },
                                        {
                                            chinese: "\u53E3\u4EE4",
                                            pinyin: "k\u01D2ul\u00ECng"
                                        },
                                        {
                                            chinese: "\u5E74\u8F7B",
                                            pinyin: "ni\u00E1n'q\u012Bng"
                                        },
                                        {
                                            chinese: "\u6751\u5B50",
                                            pinyin: "c\u016Bn'zi"
                                        },
                                        {
                                            chinese: "\u77E5\u9053",
                                            pinyin: "zh\u012B'd\u00E0o"
                                        },
                                        {
                                            chinese: "\u5E7F\u573A",
                                            pinyin: "gu\u01CEng'ch\u01CEng"
                                        },
                                        {
                                            chinese: "\u6C11\u5175",
                                            pinyin: "m\u00EDn'b\u012Bng"
                                        },
                                        {
                                            chinese: "\u59D3\u5218",
                                            pinyin: "x\u00ECngli\u00FA"
                                        },
                                        {
                                            chinese: "\u9020\u53CD",
                                            pinyin: "z\u00E0of\u01CEn"
                                        },
                                        {
                                            chinese: "\u5173\u95ED",
                                            pinyin: "gu\u0101nb\u00EC"
                                        },
                                        {
                                            chinese: "\u88AB\u5B50",
                                            pinyin: "b\u00E8izi"
                                        },
                                        {
                                            chinese: "\u68C9\u88AB",
                                            pinyin: "mi\u00E1nb\u00E8i"
                                        },
                                        {
                                            chinese: "\u82B1\u5730",
                                            pinyin: "hu\u0101'd\u00EC"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 7",
                                        zh_cn: "\u8BCD\u8BED7",
                                        zh_tw: "\u8A5E\u8A9E7"
                                    },
                                    words: [{
                                            chinese: "\u5B89\u5371",
                                            pinyin: "\u0101nw\u0113i"
                                        },
                                        {
                                            chinese: "\u4E0D\u6562",
                                            pinyin: "b\u00F9g\u01CEn"
                                        },
                                        {
                                            chinese: "\u60CA\u5413",
                                            pinyin: "j\u012Bngxi\u00E0"
                                        },
                                        {
                                            chinese: "\u9634\u51C9",
                                            pinyin: "y\u012Bnli\u00E1ng"
                                        },
                                        {
                                            chinese: "\u76F8\u4F3C\u91CE\u5916",
                                            pinyin: "xi\u0101ngs\u00ECy\u011Bw\u00E0i"
                                        },
                                        {
                                            chinese: "\u7530\u91CE",
                                            pinyin: "ti\u00E1n'y\u011B"
                                        },
                                        {
                                            chinese: "\u82CD\u5929",
                                            pinyin: "c\u0101ngti\u0101n"
                                        },
                                        {
                                            chinese: "\u832B\u7136",
                                            pinyin: "m\u00E1ngr\u00E1n"
                                        },
                                        {
                                            chinese: "\u767D\u53D1\u82CD\u82CD",
                                            pinyin: "b\u00E1if\u00E0c\u0101ngc\u0101ng"
                                        },
                                        {
                                            chinese: "\u767D\u832B\u832B",
                                            pinyin: "b\u00E1im\u00E1ngm\u00E1ng"
                                        },
                                        {
                                            chinese: "\u4E8E\u662F",
                                            pinyin: "y\u00FA'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u65E0\u8BBA",
                                            pinyin: "w\u00FA'l\u00F9n"
                                        },
                                        {
                                            chinese: "\u8239\u53EA",
                                            pinyin: "chu\u00E1n'zh\u012B"
                                        },
                                        {
                                            chinese: "\u8FDE\u540C",
                                            pinyin: "li\u00E1n't\u00F3ng"
                                        },
                                        {
                                            chinese: "\u5CB8\u8FB9",
                                            pinyin: "\u00E0n'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u540C\u65F6",
                                            pinyin: "t\u00F3ng'sh\u00ED"
                                        },
                                        {
                                            chinese: "\u623F\u5C4B",
                                            pinyin: "f\u00E1ng'w\u016B"
                                        },
                                        {
                                            chinese: "\u4E00\u5207",
                                            pinyin: "y\u00ED'qi\u00E8"
                                        },
                                        {
                                            chinese: "\u4E0D\u4E45",
                                            pinyin: "b\u00F9'ji\u01D4"
                                        },
                                        {
                                            chinese: "\u51FA\u73B0",
                                            pinyin: "ch\u016B'xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u6563\u6B65",
                                            pinyin: "s\u00E0n'b\u00F9"
                                        },
                                        {
                                            chinese: "\u7A7A\u5730",
                                            pinyin: "k\u00F2ng'd\u00EC"
                                        },
                                        {
                                            chinese: "\u5531\u6B4C",
                                            pinyin: "ch\u00E0ng'g\u0113"
                                        },
                                        {
                                            chinese: "\u56DE\u5BB6",
                                            pinyin: "hu\u00ED'ji\u0101"
                                        },
                                        {
                                            chinese: "\u8D76\u5FEB",
                                            pinyin: "g\u01CEn'ku\u00E0i"
                                        },
                                        {
                                            chinese: "\u65C1\u8FB9",
                                            pinyin: "p\u00E1ng'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u706B\u661F",
                                            pinyin: "hu\u01D2'x\u012Bng"
                                        },
                                        {
                                            chinese: "\u8FDE\u5FD9",
                                            pinyin: "li\u00E1n'm\u00E1ng"
                                        },
                                        {
                                            chinese: "\u6D51\u8EAB",
                                            pinyin: "h\u00FAn'sh\u0113n"
                                        },
                                        {
                                            chinese: "\u65F6\u5019",
                                            pinyin: "sh\u00ED'hou"
                                        },
                                        {
                                            chinese: "\u8C22\u8C22",
                                            pinyin: "xi\u00E8'xi\u00E8"
                                        },
                                        {
                                            chinese: "\u6C34\u6C7D",
                                            pinyin: "shu\u01D0'q\u00EC"
                                        },
                                        {
                                            chinese: "\u5174\u65FA",
                                            pinyin: "x\u012Bngw\u00E0ng"
                                        },
                                        {
                                            chinese: "\u8C01\u7684",
                                            pinyin: "shu\u00EDde"
                                        },
                                    ]
                                },
                                {
                                    names: {
                                        en_us: "Words 8",
                                        zh_cn: "\u8BCD\u8BED8",
                                        zh_tw: "\u8A5E\u8A9E8"
                                    },
                                    words: [{
                                            chinese: "\u98DF\u7269",
                                            pinyin: "sh\u00ED'w\u00F9"
                                        },
                                        {
                                            chinese: "\u8EAB\u8FB9",
                                            pinyin: "sh\u0113n'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u722A\u5B50",
                                            pinyin: "zhu\u01CE'zi"
                                        },
                                        {
                                            chinese: "\u9762\u524D",
                                            pinyin: "mi\u00E0n'qi\u00E1n"
                                        },
                                        {
                                            chinese: "\u91CE\u732A",
                                            pinyin: "y\u011B'zh\u016B"
                                        },
                                        {
                                            chinese: "\u4E3A\u4EC0\u4E48",
                                            pinyin: "w\u00E8i'sh\u00E9n'me"
                                        },
                                        {
                                            chinese: "\u5F80\u5E38\u8EAB\u540E",
                                            pinyin: "w\u01CEngch\u00E1ngsh\u0113nh\u00F2u"
                                        },
                                        {
                                            chinese: "\u7237\u7237",
                                            pinyin: "y\u00E9ye"
                                        },
                                        {
                                            chinese: "\u795E\u6C14\u6D3B\u73B0",
                                            pinyin: "sh\u00E9n'q\u00EC'hu\u00F3'xi\u00E0n"
                                        },
                                        {
                                            chinese: "\u4FE1\u4EE5\u4E3A\u771F",
                                            pinyin: "x\u00ECn'y\u01D0'w\u00E9i'zh\u0113n"
                                        },
                                        {
                                            chinese: "\u5C31\u662F",
                                            pinyin: "ji\u00F9sh\u00EC"
                                        },
                                        {
                                            chinese: "\u7EB8\u8239",
                                            pinyin: "zh\u01D0'chu\u00E1n"
                                        },
                                        {
                                            chinese: "\u677E\u679C",
                                            pinyin: "s\u014Dng'gu\u01D2"
                                        },
                                        {
                                            chinese: "\u7EB8\u6761",
                                            pinyin: "zh\u01D0'ti\u00E1o"
                                        },
                                        {
                                            chinese: "\u53EF\u662F",
                                            pinyin: "k\u011B'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u4F46\u662F",
                                            pinyin: "d\u00E0n'sh\u00EC"
                                        },
                                        {
                                            chinese: "\u5C4B\u9876",
                                            pinyin: "w\u016B'd\u01D0ng"
                                        },
                                        {
                                            chinese: "\u548C\u597D",
                                            pinyin: "h\u00E9'h\u01CEo"
                                        },
                                        {
                                            chinese: "\u6298\u7EB8",
                                            pinyin: "zh\u00E9zh\u01D0"
                                        },
                                        {
                                            chinese: "\u7EB8\u5F20",
                                            pinyin: "zh\u01D0zh\u0101ng"
                                        },
                                        {
                                            chinese: "\u795D\u798F",
                                            pinyin: "zh\u00F9f\u00FA"
                                        },
                                        {
                                            chinese: "\u5305\u624E",
                                            pinyin: "b\u0101oz\u0101"
                                        },
                                        {
                                            chinese: "\u6293\u4F4F",
                                            pinyin: "zhu\u0101zh\u00F9"
                                        },
                                        {
                                            chinese: "\u5F88\u5435",
                                            pinyin: "h\u011Bnch\u01CEo"
                                        },
                                        {
                                            chinese: "\u54ED\u58F0",
                                            pinyin: "k\u016Bsh\u0113ng"
                                        },
                                        {
                                            chinese: "\u7530\u91CE",
                                            pinyin: "ti\u00E1n'y\u011B"
                                        },
                                        {
                                            chinese: "\u98CE\u8F66",
                                            pinyin: "f\u0113ng'ch\u0113"
                                        },
                                        {
                                            chinese: "\u98DE\u5FEB",
                                            pinyin: "f\u0113i'ku\u00E0i"
                                        },
                                        {
                                            chinese: "\u79E7\u82D7",
                                            pinyin: "y\u0101ng'mi\u00E1o"
                                        },
                                        {
                                            chinese: "\u4E0D\u4F4F",
                                            pinyin: "b\u00FA'zh\u00F9"
                                        },
                                        {
                                            chinese: "\u70B9\u5934",
                                            pinyin: "di\u01CEn't\u00F3u"
                                        },
                                        {
                                            chinese: "\u6025\u5FD9",
                                            pinyin: "j\u00ED'm\u00E1ng"
                                        },
                                        {
                                            chinese: "\u4F24\u5FC3",
                                            pinyin: "sh\u0101ng'x\u012Bn"
                                        },
                                        {
                                            chinese: "\u8DEF\u8FB9",
                                            pinyin: "l\u00F9'bi\u0101n"
                                        },
                                        {
                                            chinese: "\u751F\u6C14",
                                            pinyin: "sh\u0113ng'q\u00EC"
                                        },
                                        {
                                            chinese: "\u5F97\u5230",
                                            pinyin: "d\u00E9d\u00E0o"
                                        },
                                        {
                                            chinese: "\u6C57\u6C34",
                                            pinyin: "h\u00E0nshu\u01D0"
                                        },
                                        {
                                            chinese: "\u573A\u5730",
                                            pinyin: "ch\u01CEngd\u00EC"
                                        },
                                        {
                                            chinese: "\u8DD1\u5F97\u5F88\u5FEB",
                                            pinyin: "p\u01CEod\u00E9h\u011Bnku\u00E0i"
                                        },
                                        {
                                            chinese: "\u5F80\u5E38",
                                            pinyin: "w\u01CEng'ch\u00E1ng"
                                        },
                                        {
                                            chinese: "\u8EAB\u540E",
                                            pinyin: "sh\u0113n'h\u00F2u"
                                        },
                                    ]
                                },
                            ]
                        });
                    };
                    return _this;
                }
                return CopybookBase;
            }(BrickBase));
            exports_1("CopybookBase", CopybookBase);
        }
    };
});

__exp = __instantiate("copybookBase", false);
const CopybookBase = __exp["CopybookBase"];