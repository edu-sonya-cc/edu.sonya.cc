var PokerBase = (function (_super) {
    __extends(PokerBase, _super);
    function PokerBase(appendData, otherComputedData) {
        var _this = _super.call(this, __assign({ pokerWidth: 40, pokerHeight: 56, fontSize: "32px", backFontSize: "24px", pokerKind: 1 }, appendData), __assign({ backCover: "", count: 32, pokerCss: "" }, otherComputedData)) || this;
        _this.countDataAndComputedData = function () {
            var _a = _this.data, paperSize = _a.paperSize, isLandscape = _a.isLandscape, MAX_X = _a.maxX, MAX_Y = _a.maxY, pokerWidth = _a.pokerWidth, pokerHeight = _a.pokerHeight, pageMarginTop = _a.pageMarginTop, pageMarginLeft = _a.pageMarginLeft, CARD_WIDTH = _a.pokerWidth, CARD_HEIGHT = _a.pokerHeight, fontSize = _a.fontSize, backFontSize = _a.backFontSize, pokerKind = _a.pokerKind;
            var ROW_COUNT = Math.floor(MAX_Y / pokerHeight);
            var COLUMN_COUNT = Math.floor(MAX_X / pokerWidth);
            var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
            _this.countPokerDataAndComputedData(pokerKind, COUNT_PER_PAGE);
            var _b = _this, getForePageHtml = _b.getForePageHtml, getBackPageHtml = _b.getBackPageHtml;
            _this.computedData.html = getForePageHtml().concat(getBackPageHtml());
            _this.computedData.css = ("/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: " + paperSize + " " + (isLandscape ? "landscape" : "portrait") + "; } }\n    page:not(page:last-child){page-break-after:always;}\n\n    page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm; margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm;}\n    page { display:block;overflow:hidden; }\n\n    page { font-weight:bolder;dominant-baseline:middle;text-anchor:start; }\n\n    page.forePage{font-family:'Times New Roman', 'KaiTi';font-size:" + fontSize + ";}\n    page.backPage{font-family:'Times New Roman', 'KaiTi';font-size:" + backFontSize + ";}\n    \n    /* page > row > cell > top/bottom/center > text.top-left/.top-right/.bottom-left/.bottom-right */\n    /* top > text.top-left/.top-right */\n    /* bottom > text.bottom-left/.bottom-right */\n    /* center >  */\n    row {display:flex;width:auto;height:" + CARD_HEIGHT + "mm;}\n    cell {width:" + CARD_WIDTH + "mm;height:" + CARD_HEIGHT + "mm;border-radius:" + CARD_WIDTH *
                3 / 40 + "mm;border:1px solid #aaaaaa;overflow:hidden;}\n    cell{display:inline-flex;flex-direction:column;justify-content:space-between;}\n    top,bottom{display:flex;justify-content:space-between;align-items:center;}\n    center {flex:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}\n    text{display:block;vertical-align:center;}\n\n    .top-left, .bottom-right{padding-left:" + CARD_WIDTH * 3 / 40 + "mm;}\n    .top-right, .bottom-left{padding-right:" + CARD_WIDTH * 3 / 40 + "mm;}\n\n    bottom {\n      transform:rotate(180deg);\n      -ms-transform:rotate(180deg); \t/* IE 9 */\n      -moz-transform:rotate(180deg); \t/* Firefox */\n      -webkit-transform:rotate(180deg); /* Safari \u548C Chrome */\n      -o-transform:rotate(180deg); \t/* Opera */ \n      \n      transform-origin:center center;\n      -ms-transform-origin:center center;\n      -moz-transform-origin:center center;\n      -webkit-transform-origin:center center;\n      -o-transform-origin:center center;\n    }\n    \n    /* https://blog.csdn.net/scotfield_msn/article/details/52564829 */\n    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */\n    /* \u9ED1/\u7EA2/\u6A59/\u9EC4/\u7EFF/\u9752/\u84DD/\u7D2B/\u7C89/\u6DE1\u7EFF/\t*/\n    /* \u9ED1/\u7D05/\u6A59/\u9EC3/\u7DA0/\u9752/\u85CD/\u7D2B/\u7C89/\u6DE1\u7DA0/\t*/\n    /*\n      [edu-color=\"1\"] {color:#000000;}\n      [edu-color=\"2\"] {color:#FF0000;}\n      [edu-color=\"3\"] {color:#FF7F00;}\n      [edu-color=\"4\"] {color:#FFFF00;}\n      [edu-color=\"5\"] {color:#00FF00;}\n      [edu-color=\"6\"] {color:#00FFFF;}\n      [edu-color=\"7\"] {color:#0000FF;}\n      [edu-color=\"8\"] {color:#8B00FF;}\n      [edu-color=\"9\"] {color:#F19EC2;}\n      [edu-color=\"10\"]{color:#6B8E23;}\n    */\n    /* [edu-color=\"3\"] {color:#FFFF00;} \u9EC4\u8272 \u9EC3\u8272 yellow */\n    \n    [edu-color=\"1\"] {color:#000000;} /* \u9ED1\u8272 \u9ED1\u8272 black */\n    [edu-color=\"2\"] {color:#FF0000;} /* \u7EA2\u8272 \u7D05\u8272 red */\n    [edu-color=\"3\"] {color:#0000FF;} /* \u84DD\u8272 \u85CD\u8272 blue */\n    [edu-color=\"4\"] {color:#CCCC00;} /* \u9EC4 \u9EC3 yellow */\n    [edu-color=\"5\"] {color:#00FF00;} /* \u7EFF\u8272 \u7DA0\u8272 green */\n    [edu-color=\"6\"] {color:#00FFFF;} /* \u9752\u8272 \u9752\u8272 cyan */\n    [edu-color=\"7\"] {color:#8B00FF;} /* \u7D2B\u8272 \u7D2B\u8272 purple */\n    [edu-color=\"8\"] {color:#F19EC2;} /* \u7C89\u7EA2 \u7C89\u7D05 pink */\n    [edu-color=\"9\"] {color:#6B8E23;} /* \u6DE1\u7EFF \u6DE1\u7DA0 light green */\n    [edu-color=\"10\"]{color:#FF7F00;} /* \u6A59\u8272 \u6A59\u8272 orange */\n    \n    [edu-color=\"-1\"] {color:#DDDDDD;}\n    ").concat(_this.computedData.pokerCss);
        };
        _this.updateOtherDataOfPoker = function (_newData) { };
        _this.initCoreElements = function () {
            var configCoreElement = _this.configCoreElement;
            configCoreElement.setAttribute(REPORT_KIND_PROPERTY, "poker");
            var getWrapElement = _this.getWrapElement;
            var wrapElement = getWrapElement({
                en: "Poker size",
                zh_cn: "扑克尺寸",
                zh_tw: "撲克尺寸"
            });
            _this.initPokerWidthElements(wrapElement);
            _this.initPokerHeightElements(wrapElement);
            _this.appendPokerSizeButtons(wrapElement);
            wrapElement = getWrapElement({
                en: "Font size",
                zh_cn: "字号",
                zh_tw: "字型大小"
            });
            _this.initFontSizeElements(wrapElement);
            _this.initBackFontSizeElements(wrapElement);
            wrapElement = getWrapElement({
                en: "Poker Kind",
                zh_cn: "扑克类型",
                zh_tw: "撲克類型"
            });
            _this.initPokerKindElements(wrapElement);
        };
        _this.onPageSizeChanged = function (newPageSize) {
            switch (newPageSize) {
                case "A3":
                    _this.data.pokerWidth = 48;
                    _this.data.pokerHeight = 68;
                    break;
                case "A4":
                    _this.data.pokerWidth = 40;
                    _this.data.pokerHeight = 56;
                    break;
                default:
                    break;
            }
            _this.pokerWidthElement.value = _this.data.pokerWidth
                .toString();
            _this.pokerHeightElement.value = _this.data.pokerHeight
                .toString();
        };
        _this.pokerWidthElement = createElement("input");
        _this.initPokerWidthElements = function (wrapElement) {
            var _a = _this, pokerWidth = _a.data.pokerWidth, pokerWidthElement = _a.pokerWidthElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en: "Width:",
                zh_cn: "宽：",
                zh_tw: "寬："
            });
            pokerWidthElement.value = pokerWidth.toString();
            pokerWidthElement.type = "number";
            pokerWidthElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pokerWidth = parseInt(pokerWidthElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pokerWidthElement.onchange = changeValue;
            pokerWidthElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pokerWidthElement);
        };
        _this.pokerHeightElement = createElement("input");
        _this.initPokerHeightElements = function (wrapElement) {
            var _a = _this, pokerHeight = _a.data.pokerHeight, pokerHeightElement = _a.pokerHeightElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en: "Height:",
                zh_cn: "高：",
                zh_tw: "高："
            });
            pokerHeightElement.value = pokerHeight.toString();
            pokerHeightElement.type = "number";
            pokerHeightElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pokerHeight = parseInt(pokerHeightElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pokerHeightElement.onchange = changeValue;
            pokerHeightElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pokerHeightElement);
        };
        _this.fontSizeElement = createElement("input");
        _this.initFontSizeElements = function (wrapElement) {
            var _a = _this, fontSize = _a.data.fontSize, fontSizeElement = _a.fontSizeElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en: "Front:",
                zh_cn: "正面：",
                zh_tw: "正面："
            });
            fontSizeElement.type = "text";
            fontSizeElement.value = fontSize;
            var changeValue = function () {
                _this.data.fontSize = fontSizeElement.value;
                _this.saveConfigAndBuildIfAllowed();
            };
            fontSizeElement.onchange = changeValue;
            fontSizeElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(fontSizeElement);
        };
        _this.backFontSizeElement = createElement("input");
        _this.initBackFontSizeElements = function (wrapElement) {
            var _a = _this, backFontSize = _a.data.backFontSize, backFontSizeElement = _a.backFontSizeElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en: "Back:",
                zh_cn: "背面：",
                zh_tw: "背面："
            });
            backFontSizeElement.type = "text";
            backFontSizeElement.value = backFontSize;
            var changeValue = function () {
                _this.data.backFontSize = backFontSizeElement.value;
                _this.saveConfigAndBuildIfAllowed();
            };
            backFontSizeElement.onchange = changeValue;
            backFontSizeElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(backFontSizeElement);
        };
        _this.pokerKindElementArray = [];
        _this.appendPokerSizeButtons = function (wrapElement) {
            [
                {
                    i18n: {
                        en: "Small",
                        zh_cn: "小",
                        zh_tw: "小"
                    },
                    width: 40,
                    height: 56
                },
                {
                    i18n: {
                        en: "Big",
                        zh_cn: "大",
                        zh_tw: "大"
                    },
                    width: 48,
                    height: 68
                },
            ].forEach(function (_a, i) {
                var i18n = _a.i18n, width = _a.width, height = _a.height;
                var buttonElement = createElement("button");
                buttonElement.innerHTML = getI18nInnerHTML(i18n);
                buttonElement.type = "button";
                buttonElement.setAttribute("edu-to-width", width.toString());
                buttonElement.setAttribute("edu-to-height", height.toString());
                buttonElement.name = "pokerSizeButtons";
                buttonElement.onclick = function (event) {
                    var widthValue = parseInt(buttonElement.getAttribute("edu-to-width"), 0);
                    var heightValue = parseInt(buttonElement.getAttribute("edu-to-height"), 0);
                    _this.data.pokerWidth = widthValue;
                    _this.data.pokerHeight = heightValue;
                    _this.pokerWidthElement.value = widthValue
                        .toString();
                    _this.pokerHeightElement.value = heightValue
                        .toString();
                    _this.saveConfigAndBuildIfAllowed();
                    return stopEventBubble(event);
                };
                wrapElement.appendChild(buttonElement);
            });
        };
        _this.updateOtherData = function (newData) {
            var pokerWidth = newData.pokerWidth, pokerHeight = newData.pokerHeight, fontSize = newData.fontSize, backFontSize = newData.backFontSize, pokerKind = newData.pokerKind;
            var _a = _this, pokerWidthElement = _a.pokerWidthElement, pokerHeightElement = _a.pokerHeightElement, fontSizeElement = _a.fontSizeElement, backFontSizeElement = _a.backFontSizeElement, pokerKindElementArray = _a.pokerKindElementArray;
            pokerKindElementArray.forEach(function (element) {
                element.checked = element.value === pokerKind.toString();
            });
            pokerWidthElement.value = pokerWidth;
            pokerHeightElement.value = pokerHeight;
            fontSizeElement.value = fontSize;
            backFontSizeElement.value = backFontSize;
            _this.data.pokerWidth = pokerWidth;
            _this.data.pokerHeight = pokerHeight;
            _this.data.fontSize = fontSize;
            _this.data.backFontSize = backFontSize;
            _this.data.pokerKind = pokerKind;
            _this.updateOtherDataOfPoker(newData);
        };
        return _this;
    }
    return PokerBase;
}(BrickBase));

__instantiate("pokerBase", false);

