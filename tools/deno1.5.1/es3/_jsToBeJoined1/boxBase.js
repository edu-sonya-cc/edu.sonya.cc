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
System.register("boxBase", [], function (exports_1, context_1) {
    "use strict";
    var BoxBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BoxBase = (function (_super) {
                __extends(BoxBase, _super);

                function BoxBase() {
                    var _this = _super.call(this, {
                        topWithoutHalfCircle: false
                    }, {}) || this;
                    _this.idOrClassPrefix = "brickPageBox";
                    _this.updateOtherDataLevel3 = function (newData) {
                        var topWithoutHalfCircle = newData.topWithoutHalfCircle;
                        var _a = _this,
                            data = _a.data,
                            topWithoutHalfCircleRadioArray = _a.topWithoutHalfCircleRadioArray;
                        data.topWithoutHalfCircle = topWithoutHalfCircle;
                        topWithoutHalfCircleRadioArray[topWithoutHalfCircle ? 1 : 0].checked = true;
                    };
                    _this.initCoreElementsBeforeTable = function () {
                        var _a = _this,
                            configCoreElement = _a.configCoreElement,
                            getWrapElement = _a.getWrapElement,
                            idOrClassPrefix = _a.idOrClassPrefix;
                        var wrapElement;
                        wrapElement = getWrapElement({
                            en_us: "Top Half Circle",
                            zh_cn: "顶部半圆",
                            zh_tw: "頂部半圓"
                        });
                        wrapElement.id = idOrClassPrefix + "HalfCircleWrap";
                        _this.initRadioGroupByBooleanOrNumberValue([{
                                value: false,
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Hide",
                                    zh_cn: "无",
                                    zh_tw: "無"
                                })
                            },
                            {
                                value: true,
                                i18nHtml: getI18nInnerHTML({
                                    en_us: "Show",
                                    zh_cn: "有",
                                    zh_tw: "有"
                                })
                            },
                        ], "topWithoutHalfCircle", _this.topWithoutHalfCircleRadioArray, wrapElement);
                    };
                    _this.topWithoutHalfCircleRadioArray = [];
                    _this.updateOtherDataOfBox = function (newData) {};
                    _this.countDataAndComputedData = function () {
                        _this.countDataAndComputedDataInBrickWithTableBase();
                        var BoxGenerator = boxSpace.edu.sonya.cc.BoxGenerator;
                        var boxGenerator = new BoxGenerator();
                        var _a = _this,
                            data = _a.data,
                            computedData = _a.computedData;
                        var paperSize = data.paperSize,
                            isLandscape = data.isLandscape,
                            MAX_X = data.maxX,
                            MAX_Y = data.maxY,
                            pageMarginTop = data.pageMarginTop,
                            pageMarginLeft = data.pageMarginLeft,
                            list = data.list,
                            topWithoutHalfCircle = data.topWithoutHalfCircle;
                        var css = "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    page { display:flex;flex-flow:wrap; }\n    page:not(page:last-child){page-break-after:always;}\n    \n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/ \n    @media print { @page { size: " + paperSize + " " + (isLandscape ? "landscape" : "portrait") + "; } }\n    /* height:" + MAX_Y + "mm; */\n    page { width:" + MAX_X + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; }\n    ";
                        var svgList = [];
                        list.forEach(function (_a) {
                            var id = _a.id,
                                boxKind = _a.boxKind,
                                lengths = _a.lengths,
                                contents = _a.contents,
                                outerLineStyle = _a.outerLineStyle,
                                innerLineStyle = _a.innerLineStyle,
                                textStyle = _a.textStyle,
                                rotate = _a.rotate,
                                move = _a.move,
                                options = _a.options;
                            var _b = boxGenerator.create({
                                    id: id,
                                    boxKind: boxKind,
                                    lengths: lengths,
                                    contents: contents,
                                    outerLineStyle: outerLineStyle,
                                    innerLineStyle: innerLineStyle,
                                    textStyle: textStyle,
                                    rotate: rotate,
                                    move: move,
                                    topWithoutHalfCircle: topWithoutHalfCircle,
                                    options: options
                                }),
                                svgCss = _b.css,
                                svg = _b.svg;
                            svgList.push(svg);
                            css += svgCss;
                        });
                        var en_us = FILENAME_POSTFIX + "Boxs";
                        var zh_cn = FILENAME_POSTFIX + "\u76D2\u5B50";
                        var zh_tw = FILENAME_POSTFIX + "\u76D2\u5B50";
                        computedData.title = {
                            en_us: en_us,
                            zh_cn: zh_cn,
                            zh_tw: zh_tw
                        };
                        computedData.css = css;
                        computedData.html = _this.getAutomaticPaginationHtmlFromChildList(svgList, MAX_X, MAX_Y);
                    };
                    _this.idOrClassPrefix = "brickPageBox";
                    _this.getUsableList = function () {
                        var usableBoxs = [];
                        _this.appendBoxOfCuboid(usableBoxs);
                        var usableList = [];
                        usableBoxs.forEach(function (_a) {
                            var name = _a.name,
                                infos = _a.infos;
                            var strongI18n = {
                                en_us: name,
                                zh_cn: name,
                                zh_tw: name
                            };
                            var buttonList = [];
                            infos.forEach(function (info) {
                                var captionI18n = info.captionI18n;
                                buttonList.push({
                                    nameI18n: typeof captionI18n === "string" ?
                                        {
                                            en_us: captionI18n,
                                            zh_cn: captionI18n,
                                            zh_tw: captionI18n
                                        } :
                                        captionI18n,
                                    info: info
                                });
                            });
                            usableList.push({
                                strongI18n: strongI18n,
                                buttonList: buttonList
                            });
                        });
                        return usableList;
                    };
                    _this.appendBoxOfCuboid = function (usableBoxs) {
                        var BoxKind = boxSpace.edu.sonya.cc.BoxKind;
                        var outerLineStyle = "stroke:#555;stroke-width:0.2mm;";
                        var innerLineStyle = "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;";
                        var textStyle = 'font-size:6mm;font-family:"Times New Roman", "Kaiti";';
                        var textStyleBig = 'font-size:8mm;font-family:"Times New Roman", "Kaiti";';
                        var contents = getArrayRepeatSameValue("", 6);
                        var rotate = false;
                        var move = false;
                        var otherSize = 10;
                        var topWithoutHalfCircle = false;
                        var i18nContentsOfRummikub = getArrayRepeatSameValue(getI18nInnerHTML({
                            en_us: "Rummikub",
                            zh_cn: "拉密",
                            zh_tw: "拉密"
                        }), 6);
                        var infosCuboid = [];
                        var infosCuboidCoverOnTheSameSide = [];
                        [{
                                lengths: [40, 20, 56],
                                contents: getArrayRepeatSameValue("英文扑克", 6),
                                textStyle: textStyle,
                                captionI18n: "&nbsp;&nbsp;40<br/>×20<br/>×56",
                                captionI18nSameSide: "&nbsp;&nbsp;40<br/>\u00D720<br/>\u00D756<br/>+" + otherSize,
                                otherSize: otherSize
                            },
                            {
                                lengths: [56, 50, 80],
                                contents: getArrayRepeatSameValue("拼音扑克", 6),
                                textStyle: textStyleBig,
                                captionI18n: "&nbsp;&nbsp;56<br/>×50<br/>×80",
                                captionI18nSameSide: "&nbsp;&nbsp;56<br/>\u00D750<br/>\u00D780<br/>+" + otherSize,
                                otherSize: otherSize
                            },
                            {
                                lengths: [18, 50, 25],
                                contents: i18nContentsOfRummikub,
                                textStyle: textStyleBig,
                                captionI18n: {
                                    en_us: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>Rummikub",
                                    zh_cn: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密",
                                    zh_tw: "&nbsp;&nbsp;18<br/>×50<br/>×25<br/>拉密"
                                },
                                captionI18nSameSide: {
                                    en_us: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+" + otherSize + "<br/>Rummikub",
                                    zh_cn: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+" + otherSize + "<br/>\u62C9\u5BC6",
                                    zh_tw: "&nbsp;&nbsp;18<br/>\u00D750<br/>\u00D725<br/>+" + otherSize + "<br/>\u62C9\u5BC6"
                                },
                                otherSize: otherSize
                            },
                            {
                                lengths: [20, 50, 28],
                                contents: i18nContentsOfRummikub,
                                textStyle: textStyleBig,
                                captionI18n: {
                                    en_us: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>Rummikub",
                                    zh_cn: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密",
                                    zh_tw: "&nbsp;&nbsp;20<br/>×50<br/>×28<br/>拉密"
                                },
                                captionI18nSameSide: {
                                    en_us: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+" + otherSize + "<br/>Rummikub",
                                    zh_cn: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+" + otherSize + "<br/>\u62C9\u5BC6",
                                    zh_tw: "&nbsp;&nbsp;20<br/>\u00D750<br/>\u00D728<br/>+" + otherSize + "<br/>\u62C9\u5BC6"
                                },
                                otherSize: otherSize
                            },
                        ].forEach(function (_a) {
                            var lengths = _a.lengths,
                                contents = _a.contents,
                                textStyle = _a.textStyle,
                                captionI18n = _a.captionI18n,
                                captionI18nSameSide = _a.captionI18nSameSide,
                                otherSize = _a.otherSize;
                            infosCuboid.push({
                                id: "",
                                boxKind: BoxKind.cuboid,
                                lengths: lengths,
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: captionI18n
                            });
                            infosCuboidCoverOnTheSameSide.push({
                                id: "",
                                boxKind: BoxKind.cuboidCoverOnTheSameSide,
                                lengths: lengths.concat([otherSize]),
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: captionI18nSameSide
                            });
                        });
                        [10, 20, 30, 40, 50, 60, 70, 80, 90, 10].forEach(function (size) {
                            infosCuboid.push({
                                id: "",
                                boxKind: BoxKind.cuboid,
                                lengths: [size, size, size],
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: "&nbsp;&nbsp;" + size + "<br/>\u00D7" + size + "<br/>\u00D7" + size
                            });
                            infosCuboidCoverOnTheSameSide.push({
                                id: "",
                                boxKind: BoxKind.cuboidCoverOnTheSameSide,
                                lengths: [size, size, size, otherSize],
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: "&nbsp;&nbsp;" + size + "<br/>\u00D7" + size + "<br/>\u00D7" + size + "<br/>+" + otherSize
                            });
                        });
                        var infosOfCuboidWithoutBottom = [];
                        var infosOfCuboidCoverOnTheSameSideWithoutBottom = [];
                        [
                            [10, 10, 3],
                            [20, 20, 8],
                            [30, 30, 10],
                            [40, 40, 10],
                            [50, 50, 10],
                            [60, 60, 10],
                            [70, 70, 10],
                            [80, 80, 10],
                            [90, 90, 10],
                        ].forEach(function (lengths) {
                            var captionI18n = "&nbsp;&nbsp;" + lengths[0] + "<br/>\u00D7" + lengths[1] + "<br/>\u00D7" + lengths[2];
                            var otherSize = lengths[2] * 0.5;
                            var captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat("<br/>+" + otherSize);
                            infosOfCuboidCoverOnTheSameSideWithoutBottom.push({
                                id: "",
                                boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutBottom,
                                lengths: lengths.concat([otherSize]),
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: captionI18nrOnTheSameSideWithoutBottom
                            });
                            if (lengths[0] <= 80) {
                                infosOfCuboidWithoutBottom.push({
                                    id: "",
                                    boxKind: BoxKind.cuboidWithoutBottom,
                                    lengths: lengths,
                                    contents: contents,
                                    outerLineStyle: outerLineStyle,
                                    innerLineStyle: innerLineStyle,
                                    textStyle: textStyle,
                                    rotate: rotate,
                                    move: move,
                                    topWithoutHalfCircle: topWithoutHalfCircle,
                                    options: {},
                                    captionI18n: captionI18n
                                });
                            }
                        });
                        var infosOfCuboidWithoutTop = [];
                        var infosOfCuboidCoverOnTheSameSideWithoutTop = [];
                        [
                            [9, 9, 10],
                            [19, 19, 20],
                            [29, 29, 30],
                            [39, 39, 40],
                            [49, 49, 50],
                            [59, 59, 60],
                            [69, 69, 70],
                            [79, 79, 80],
                            [89, 89, 90],
                        ].forEach(function (lengths) {
                            var captionI18n = "&nbsp;&nbsp;" + lengths[0] + "<br/>\u00D7" + lengths[1] + "<br/>\u00D7" + lengths[2];
                            var otherSize = lengths[2] * 0.5;
                            var captionI18nrOnTheSameSideWithoutBottom = captionI18n.concat("<br/>+" + otherSize);
                            infosOfCuboidCoverOnTheSameSideWithoutTop.push({
                                id: "",
                                boxKind: BoxKind.cuboidCoverOnTheSameSideWithoutTop,
                                lengths: lengths.concat([otherSize]),
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                rotate: rotate,
                                move: move,
                                topWithoutHalfCircle: topWithoutHalfCircle,
                                options: {},
                                captionI18n: captionI18nrOnTheSameSideWithoutBottom
                            });
                            if (lengths[0] <= 80) {
                                infosOfCuboidWithoutTop.push({
                                    id: "",
                                    boxKind: BoxKind.cuboidWithoutTop,
                                    lengths: lengths,
                                    contents: contents,
                                    outerLineStyle: outerLineStyle,
                                    innerLineStyle: innerLineStyle,
                                    textStyle: textStyle,
                                    rotate: rotate,
                                    move: move,
                                    topWithoutHalfCircle: topWithoutHalfCircle,
                                    options: {},
                                    captionI18n: captionI18n
                                });
                            }
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid",
                                zh_cn: "异侧",
                                zh_tw: "異側"
                            }),
                            infos: JSON.parse(JSON.stringify(infosCuboid))
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid which cover on the same side",
                                zh_cn: "盖子同侧",
                                zh_tw: "蓋子同側"
                            }),
                            infos: JSON.parse(JSON.stringify(infosCuboidCoverOnTheSameSide))
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid without top",
                                zh_cn: "异侧无顶",
                                zh_tw: "異側無頂"
                            }),
                            infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutTop))
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid without bottom",
                                zh_cn: "异侧无底",
                                zh_tw: "異側無底"
                            }),
                            infos: JSON.parse(JSON.stringify(infosOfCuboidWithoutBottom))
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid which cover on the same side and without top",
                                zh_cn: "盖子同侧无顶",
                                zh_tw: "蓋子同側無頂"
                            }),
                            infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutTop))
                        });
                        usableBoxs.push({
                            name: getI18nInnerHTML({
                                en_us: "Cuboid which cover on the same side and without bottom",
                                zh_cn: "盖子同侧无底",
                                zh_tw: "蓋子同側無底"
                            }),
                            infos: JSON.parse(JSON.stringify(infosOfCuboidCoverOnTheSameSideWithoutBottom))
                        });
                    };
                    _this.createTableBodyRow = function (item) {
                        var id = item.id,
                            boxKind = item.boxKind,
                            lengths = item.lengths,
                            contents = item.contents,
                            outerLineStyle = item.outerLineStyle,
                            innerLineStyle = item.innerLineStyle,
                            textStyle = item.textStyle,
                            rotate = item.rotate,
                            move = item.move,
                            options = item.options;
                        var _a = _this,
                            tableBodyElement = _a.tableBodyElement,
                            appendTextareaTd = _a.appendTextareaTd,
                            appendCheckboxTdWithoutText = _a.appendCheckboxTdWithoutText;
                        var tr = createElement("tr");
                        tableBodyElement.appendChild(tr);
                        _this.appendOperationTd(tr, item);
                        _this.appendLengthsTd(tr, item);
                        _this.appendContentsTd(tr, item);
                        appendCheckboxTdWithoutText(tr, rotate, item, "rotate");
                        appendCheckboxTdWithoutText(tr, move, item, "move");
                        appendTextareaTd(tr, outerLineStyle, item, "outerLineStyle", "string");
                        appendTextareaTd(tr, innerLineStyle, item, "innerLineStyle", "string");
                        appendTextareaTd(tr, textStyle, item, "textStyle", "string");
                    };
                    _this.initTableHead = function () {
                        _this.appendTableHeadCell({
                            en_us: "Relevant length, such as length, width and height",
                            zh_cn: "相关长度，如长宽高",
                            zh_tw: "相關長度，如長寬高"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Contents of all sides",
                            zh_cn: "各面内容",
                            zh_tw: "各面內容"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Rotate",
                            zh_cn: "旋转",
                            zh_tw: "旋轉"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Move",
                            zh_cn: "上移",
                            zh_tw: "上移"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Outside Boundary Line Style",
                            zh_cn: "外边界线样式",
                            zh_tw: "外邊界線樣式"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Interior Line Style",
                            zh_cn: "内部线样式",
                            zh_tw: "內部線樣式"
                        });
                        _this.appendTableHeadCell({
                            en_us: "Text Style",
                            zh_cn: "文本样式",
                            zh_tw: "文字樣式"
                        });
                    };
                    _this.appendLengthsTd = function (tr, box) {
                        var td = createElement("td");
                        tr.appendChild(td);
                        box.lengths.forEach(function (length, index) {
                            var input = createElement("input");
                            td.appendChild(input);
                            input.type = "number";
                            input.setAttribute("min", "0");
                            input.setAttribute("max", "200");
                            input.value = length.toString();
                            input.onchange = input.focus = function () {
                                box.lengths[index] = parseFloat(input.value);
                                _this.build();
                            };
                        });
                    };
                    _this.appendContentsTd = function (tr, box) {
                        var td = createElement("td");
                        tr.appendChild(td);
                        var BoxKind = boxSpace.edu.sonya.cc.BoxKind;
                        var boxKind = box.boxKind,
                            contents = box.contents;
                        var idOrClassPrefix = _this.idOrClassPrefix;
                        var count = 0;
                        switch (boxKind) {
                            case BoxKind.cuboid:
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSide:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                count = 6;
                                break;
                            default:
                                break;
                        }
                        var div = createElement("div");
                        td.appendChild(div);
                        div.className = idOrClassPrefix + "ContentValueWrap";
                        var i18nNameArray = ["en_us", "zh_cn", "zh_tw"];
                        var emptyArray = [];
                        pushSameValueTimes(emptyArray, "\n", count);
                        var isText = typeof contents[0] === "string";
                        if (isText) {
                            var textarea_1 = createElement("textarea");
                            td.appendChild(textarea_1);
                            textarea_1.value = box.contents.join("\n");
                            textarea_1.rows = count;
                            textarea_1.onchange = textarea_1.focus = function () {
                                textarea_1.value.split("\n").concat(emptyArray).slice(0, count).forEach(function (item, index) {
                                    box.contents[index] = item;
                                });
                                _this.build();
                            };
                        } else {
                            i18nNameArray.forEach(function (lang) {
                                var textarea = createElement("textarea");
                                td.appendChild(textarea);
                                textarea.value = box.contents.map(function (content) {
                                    return content[lang];
                                }).join("\n");
                                textarea.rows = 4;
                                textarea.onchange = textarea.focus = function () {
                                    textarea.value.split("\n").concat(emptyArray).slice(0, count).forEach(function (item, index) {
                                        box.contents[index][lang] = item;
                                    });
                                    _this.build();
                                };
                            });
                        }
                    };
                    return _this;
                }
                return BoxBase;
            }(BrickWithTableBase));
            exports_1("BoxBase", BoxBase);
        }
    };
});

__exp = __instantiate("boxBase", false);
const BoxBase = __exp["BoxBase"];