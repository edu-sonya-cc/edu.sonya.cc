"use strict";
// import { IBrickCore } from '../actualPage/IBrickCore';
// import { global } from '../global';
// import { REPORT_KIND_PROPERTY } from '../const';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom';
// import { getCurrentLang, getCurrentPageLocalStorage, getChangeLangNotifyArrayOfCurrentPage, setCurrentPageLocalStorage, updateUIByCurrentLang } from '../storage';
// import { DPIHelper } from '../DPIHelper';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.BrickBase = void 0;
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
var BrickBase = /** @class */ (function () {
    function BrickBase(appendData, otherComputedData, newPageSizeArray) {
        var _this = this;
        if (newPageSizeArray === void 0) { newPageSizeArray = ["A3", "A4"]; }
        this.brickBaseIdPrefix = "brickPageBase";
        this.reporterKindProperty = "unknown";
        this.download = function () { };
        this.print = function () { };
        this.download2PDF = function (
        // {
        //   // css,
        //   // html,
        //   // paperSize,
        //   // isLandscape,
        //   // pageMarginTop,
        //   // pageMarginLeft,
        //   // pageMarginBottom,
        //   // pageMarginRight,
        //   // title,
        // } :{
        //   // css: string,
        //   // html: string,
        //   // paperSize: string,
        //   // isLandscape: boolean,
        //   // pageMarginTop: number,
        //   // pageMarginLeft: number,
        //   // pageMarginBottom: number,
        //   // pageMarginRight: number,
        //   // title: string,
        // }
        ) {
            var _a = _this, _b = _a.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, 
            // maxX,
            // maxY,
            pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight, _c = _a.computedData, css = _c.css, html = _c.html;
            var title = _this.computedData.title[getCurrentLang()];
            var headElement = getHeadElement();
            var body = getBodyElement();
            var styleElement = createElement("style");
            // styleElement.id = `reporterStyle`;
            headElement.appendChild(styleElement);
            // styleElement.innerHTML = css;
            styleElement.innerHTML = css.concat("header,footer,#brickPageMain{display:none;}");
            var reportHtmlElement = createElement("div");
            body.appendChild(reportHtmlElement);
            reportHtmlElement.innerHTML = html;
            var printableList = reportHtmlElement.childNodes;
            var count = printableList.length;
            var printableArray = [];
            for (var index = 0; index < count; ++index) {
                // for(let index = 0; index < 1; ++index){
                var printableElement = printableList[index];
                printableArray.push(printableElement);
            }
            var IMAGE_WIDTH = 210;
            var IMAGE_HEIGHT = 297;
            switch (paperSize) {
                case "A3":
                    IMAGE_WIDTH = isLandscape ? 420 : 297;
                    IMAGE_HEIGHT = isLandscape ? 297 : 420;
                    break;
                case "A4":
                    IMAGE_WIDTH = isLandscape ? 297 : 210;
                    IMAGE_HEIGHT = isLandscape ? 210 : 297;
                    break;
                case "A5":
                    IMAGE_WIDTH = isLandscape ? 210 : 148.5;
                    IMAGE_HEIGHT = isLandscape ? 148.5 : 210;
                    break;
                default:
                    break;
            }
            var pdfPageData = [];
            function addPdfPage(printableArray) {
                var scale = 1;
                var page = new Promise(function (resolve, reject) {
                    printableArray.forEach(function (copyDom, index) {
                        var pageElement = copyDom;
                        var rect = pageElement.getBoundingClientRect();
                        // const width = rect.width;
                        // const height = rect.height;
                        var width = pageElement.offsetWidth;
                        var height = pageElement.offsetHeight;
                        var canvas = document.createElement("canvas");
                        canvas.setAttribute("class", "canvas-pdf");
                        canvas.setAttribute("id", "canvas".concat(index.toString()));
                        canvas.width = width * scale;
                        canvas.height = height * scale;
                        body.appendChild(canvas);
                        var content = canvas.getContext("2d");
                        content.scale(1, 1);
                        // copyDom.innerHTML = '<span style="position:absolute;left:40px;top:40px;width:100px;height:10px;display:block;font-size:12px;text-align:center;">test</span>';
                        html2canvas(copyDom, {
                            dpi: window.devicePixelRatio,
                            scale: 1,
                            canvas: canvas,
                            width: width,
                            heigth: height
                        }).then(function (canvas) {
                            // const contentWidth = canvas.width;
                            // const contentHeight = canvas.height;
                            // const imgWidth = IMAGE_WIDTH;
                            // const imgHeight = IMAGE_WIDTH / contentWidth * contentHeight;
                            var imgWidth = IMAGE_WIDTH - (pageMarginLeft + pageMarginRight);
                            var imgHeight = IMAGE_HEIGHT - (pageMarginTop + pageMarginBottom); // IMAGE_WIDTH / contentWidth * contentHeight;
                            pdfPageData.push({
                                img: canvas.toDataURL("image/jpeg", 1.0),
                                width: imgWidth,
                                height: imgHeight
                            });
                            if (pdfPageData.length === count) {
                                resolve();
                            }
                        });
                    });
                });
                return page;
            }
            var pdf = new window.jsPDF(isLandscape ? "landscape" : "portrait", "mm", paperSize.toLocaleLowerCase());
            var PDF_IMAGE_IMAGE_EXTENSTION = "JPEG";
            pdfPageData.length = 0;
            addPdfPage(printableArray).then(function () {
                pdfPageData.forEach(function (pageData, pageIndex) {
                    if (pageIndex > 0)
                        pdf.addPage();
                    var img = pageData.img, width = pageData.width, height = pageData.height;
                    var left = pageMarginLeft;
                    // const top = pageMarginTop + IMAGE_HEIGHT * pageIndex;
                    var top = pageMarginTop;
                    // console.log('pdf.addImage', JSON.stringify({left, top, width, height, pageIndex}));
                    pdf.addImage(img, PDF_IMAGE_IMAGE_EXTENSTION, left, top, width, height);
                });
                pdf.save(title.concat(".pdf"));
                printableArray.forEach(function (_printableElement, index) {
                    document.getElementById("canvas".concat(index.toString()))
                        .remove();
                });
                styleElement.remove();
                reportHtmlElement.remove();
            });
        };
        this.updateOtherData = function (newData) { };
        this.initCoreElements = function () { };
        this.initOtherElements = function () { };
        this.onPageSizeChanged = function (newPageSize) { };
        this.getCss = function () { return _this.computedData.css; };
        this.getHtml = function () { return _this.computedData.html; };
        this.data = {
            paperSize: "A4",
            isLandscape: false,
            maxX: 200,
            maxY: 286,
            pageMarginTop: 5,
            pageMarginBottom: 5,
            pageMarginLeft: 5,
            pageMarginRight: 5
        };
        this.DEFAULT_DATA_JSON = "";
        this.computedData = {
            title: {
                en_us: "",
                zh_cn: "",
                zh_tw: ""
            },
            css: "",
            html: ""
        };
        this.pageSizeArray = [];
        this.configCoreElement = getElementById("brickPageConfigCore");
        this.init = function () {
            // // Reget it.
            // this.configCoreElement = getElementById('brickPageConfigCore') as HTMLDivElement;
            var _a = _this, configCoreElement = _a.configCoreElement, brickBaseIdPrefix = _a.brickBaseIdPrefix;
            configCoreElement.setAttribute(REPORT_KIND_PROPERTY, _this.reporterKindProperty);
            // const lang = getCurrentLang();
            var getWrapElement = _this.getWrapElement;
            var wrapElement = getWrapElement({
                en_us: "Paper",
                zh_cn: "纸张",
                zh_tw: "紙張"
            });
            wrapElement.id = brickBaseIdPrefix + "PaperSizeOrDirectionWrap";
            _this.initPaperSizeElements(wrapElement);
            _this.initIsLandscapeElements(wrapElement);
            wrapElement = getWrapElement({
                en_us: "Margin of page",
                zh_cn: "页边距",
                zh_tw: "頁邊距"
            });
            wrapElement.id = brickBaseIdPrefix + "PaperMaginWrap";
            _this.initPageMarginTopElements(wrapElement);
            _this.initPageMarginBottomElements(wrapElement);
            _this.initPageMarginLeftElements(wrapElement);
            _this.initPageMarginRightElements(wrapElement);
            _this.initCoreElements();
            _this.initOtherElements();
            global.bindChangeLangEventForI18nElements();
            updateUIByCurrentLang();
            getChangeLangNotifyArrayOfCurrentPage().push(function () { return _this.build(); });
        };
        this.getWrapElement = function (strongI18n) {
            var configCoreElement = _this.configCoreElement;
            var wrapElement = createElement("div");
            wrapElement.className = "brickPageConfigCoreOptionRowWrap";
            configCoreElement.appendChild(wrapElement);
            var strongElement = createElement("strong");
            strongElement.innerHTML = getI18nInnerHTML(strongI18n);
            wrapElement.appendChild(strongElement);
            return wrapElement;
        };
        this.onRadioOptionChanged = function (propertyName, value) { };
        this.initTextboxElement = function (labelI18n, propertyName, textboxElement, wrapElement) {
            if (labelI18n) {
                var label = createElement("label");
                label.innerHTML = getI18nInnerHTML(labelI18n);
                wrapElement.appendChild(label);
            }
            textboxElement.value = _this.data[propertyName];
            textboxElement.type = "text";
            var onTextboxChanged = function () {
                // (this.data as any)[propertyName] = parseInt(textboxElement.value, 0);
                _this.data[propertyName] = textboxElement.value;
                _this.saveConfigAndBuildIfAllowed();
            };
            textboxElement.onchange = onTextboxChanged;
            textboxElement.onblur = onTextboxChanged;
            wrapElement.appendChild(textboxElement);
        };
        this.initTextareaElement = function (labelI18n, propertyName, textareaElement, wrapElement) {
            if (labelI18n) {
                var label = createElement("label");
                label.innerHTML = getI18nInnerHTML(labelI18n);
                wrapElement.appendChild(label);
            }
            textareaElement.value = _this.data[propertyName];
            var onTextareaChanged = function () {
                _this.data[propertyName] = parseInt(textareaElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            textareaElement.onchange = onTextareaChanged;
            textareaElement.onblur = onTextareaChanged;
            wrapElement.appendChild(textareaElement);
        };
        this.initRadioGroupByStringValue = function (radiosInfoArray, propertyName, radioElementArray, wrapElement) {
            var currentValue = _this.data[propertyName];
            radiosInfoArray.forEach(function (_a) {
                var value = _a.value, i18nHtml = _a.i18nHtml;
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = propertyName;
                radioElement.value = value;
                if (currentValue === value) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtml;
                radioElement.onclick = function () {
                    _this.data[propertyName] = value;
                    _this.onRadioOptionChanged(propertyName, value);
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                radioElementArray.push(radioElement);
            });
        };
        this.initRadioGroupWithLabelByStringValue = function (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n) {
            var wrapElement = _this.getWrapElement(wrapLabelI18n);
            _this.initRadioGroupByStringValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
        };
        this.initRadioGroupByBooleanOrNumberValue = function (radiosInfoArray, propertyName, radioElementArray, wrapElement) {
            var currentValue = _this.data[propertyName];
            radiosInfoArray.forEach(function (_a) {
                var value = _a.value, i18nHtml = _a.i18nHtml;
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = propertyName;
                radioElement.value = value.toString();
                if (currentValue === value) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = i18nHtml;
                radioElement.onclick = function () {
                    _this.data[propertyName] = value;
                    _this.onRadioOptionChanged(propertyName, value);
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                wrapElement.appendChild(radioElement);
                wrapElement.appendChild(spanElement);
                radioElementArray.push(radioElement);
            });
        };
        this.initRadioGroupWithLabelByBooleanOrNumberValue = function (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n) {
            var wrapElement = _this.getWrapElement(wrapLabelI18n);
            _this.initRadioGroupByBooleanOrNumberValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
        };
        this.paperSizeRadioArray = [];
        this.initPaperSizeElements = function (wrapElement) {
            var _a = _this, paperSize = _a.data.paperSize, paperSizeRadioArray = _a.paperSizeRadioArray, brickBaseIdPrefix = _a.brickBaseIdPrefix;
            var span = createElement("span");
            span.id = brickBaseIdPrefix + "PaperSizeWrap";
            wrapElement.appendChild(span);
            var labelElement = createElement("label");
            span.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Size:",
                zh_cn: "纸型：",
                zh_tw: "紙型："
            });
            labelElement.setAttribute("for", "paperSize");
            _this.pageSizeArray.forEach(function (paperSizeValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.value = paperSizeValue;
                radioElement.name = "paperSize";
                if (paperSize === paperSizeValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = paperSizeValue;
                radioElement.onclick = function () {
                    _this.data.paperSize = paperSizeValue;
                    _this.onPageSizeChanged(paperSizeValue);
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                span.appendChild(radioElement);
                span.appendChild(spanElement);
                paperSizeRadioArray.push(radioElement);
            });
        };
        this.isLandscapeRadioArray = [];
        this.initIsLandscapeElements = function (wrapElement) {
            var _a = _this, isLandscape = _a.data.isLandscape, isLandscapeRadioArray = _a.isLandscapeRadioArray, brickBaseIdPrefix = _a.brickBaseIdPrefix;
            var span = createElement("span");
            span.id = brickBaseIdPrefix + "PaperDirectionWrap";
            wrapElement.appendChild(span);
            var labelElement = createElement("label");
            span.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Orientation:",
                zh_cn: "方向：",
                zh_tw: "方向："
            });
            labelElement.setAttribute("for", "isLandscape");
            [true, false].forEach(function (isLandscapeValue) {
                var radioElement = createElement("input");
                radioElement.type = "radio";
                radioElement.name = "isLandscape";
                radioElement.value = isLandscapeValue.toString();
                if (isLandscape === isLandscapeValue) {
                    radioElement.checked = true;
                }
                var spanElement = createElement("span");
                spanElement.innerHTML = getI18nInnerHTML(isLandscapeValue
                    ? {
                        en_us: "landscape",
                        zh_cn: "横向",
                        zh_tw: "橫向"
                    }
                    : {
                        en_us: "portrait",
                        zh_cn: "纵向",
                        zh_tw: "縱向"
                    });
                radioElement.onclick = function () {
                    _this.data.isLandscape = isLandscapeValue;
                    _this.saveConfigAndBuildIfAllowed();
                };
                spanElement.onclick = function () {
                    radioElement.click();
                };
                span.appendChild(radioElement);
                span.appendChild(spanElement);
                isLandscapeRadioArray.push(radioElement);
            });
        };
        this.pageMarginTopElement = createElement("input");
        this.initPageMarginTopElements = function (wrapElement) {
            var _a = _this, pageMarginTop = _a.data.pageMarginTop, pageMarginTopElement = _a.pageMarginTopElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Top:",
                zh_cn: "上：",
                zh_tw: "上："
            });
            pageMarginTopElement.value = pageMarginTop.toString();
            pageMarginTopElement.type = "number";
            pageMarginTopElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pageMarginTop = parseInt(pageMarginTopElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pageMarginTopElement.onchange = changeValue;
            pageMarginTopElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginTopElement);
        };
        this.pageMarginBottomElement = createElement("input");
        this.initPageMarginBottomElements = function (wrapElement) {
            var _a = _this, pageMarginBottom = _a.data.pageMarginBottom, pageMarginBottomElement = _a.pageMarginBottomElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Bottom:",
                zh_cn: "下：",
                zh_tw: "下："
            });
            pageMarginBottomElement.value = pageMarginBottom.toString();
            pageMarginBottomElement.type = "number";
            pageMarginBottomElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pageMarginBottom = parseInt(pageMarginBottomElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pageMarginBottomElement.onchange = changeValue;
            pageMarginBottomElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginBottomElement);
        };
        this.pageMarginLeftElement = createElement("input");
        this.initPageMarginLeftElements = function (wrapElement) {
            var _a = _this, pageMarginLeft = _a.data.pageMarginLeft, pageMarginLeftElement = _a.pageMarginLeftElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Left:",
                zh_cn: "左：",
                zh_tw: "左："
            });
            pageMarginLeftElement.value = pageMarginLeft.toString();
            pageMarginLeftElement.type = "number";
            pageMarginLeftElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pageMarginLeft = parseInt(pageMarginLeftElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pageMarginLeftElement.onchange = changeValue;
            pageMarginLeftElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginLeftElement);
        };
        this.pageMarginRightElement = createElement("input");
        this.initPageMarginRightElements = function (wrapElement) {
            var _a = _this, pageMarginRight = _a.data.pageMarginRight, pageMarginRightElement = _a.pageMarginRightElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
                en_us: "Right:",
                zh_cn: "右：",
                zh_tw: "右："
            });
            pageMarginRightElement.value = pageMarginRight.toString();
            pageMarginRightElement.type = "number";
            pageMarginRightElement.setAttribute("min", "0");
            var changeValue = function () {
                _this.data.pageMarginRight = parseInt(pageMarginRightElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            pageMarginRightElement.onchange = changeValue;
            pageMarginRightElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginRightElement);
        };
        // public share = (): void => { };
        // public sponsor = (): void => { };
        this.build = function () {
            var _a, _b;
            var _c = _this.data, paperSize = _c.paperSize, isLandscape = _c.isLandscape, maxX = _c.maxX, maxY = _c.maxY, pageMarginTop = _c.pageMarginTop, pageMarginBottom = _c.pageMarginBottom, pageMarginLeft = _c.pageMarginLeft, pageMarginRight = _c.pageMarginRight;
            // TODO(@anqi) more paper size.
            var PAPER_WIDTH_A3 = 297;
            var PAPER_HEIGHT_A3 = 420;
            var PAPER_WIDTH_A4 = 210;
            var PAPER_HEIGHT_A4 = 297;
            // Uncaught DOMException: Failed to execute 'postMessage' on 'Window': #<Window> could not be cloned.
            (_a = getElementById("brickPageIframe").contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
                command: "changePaperSize",
                data: {
                    paperSize: paperSize,
                    isLandscape: isLandscape,
                    pageMarginTop: pageMarginTop,
                    pageMarginLeft: pageMarginLeft
                }
            }, "*");
            var paperWidth = 0;
            var paperHeight = 0;
            switch (paperSize) {
                case "A3":
                    paperWidth = PAPER_WIDTH_A3;
                    paperHeight = PAPER_HEIGHT_A3;
                    break;
                case "A4":
                    paperWidth = PAPER_WIDTH_A4;
                    paperHeight = PAPER_HEIGHT_A4;
                    break;
                default:
                    break;
            }
            var pageMarginHorizontal = pageMarginLeft + pageMarginRight;
            var pageMarginVertical = pageMarginTop + pageMarginBottom;
            // if (isLandscape) {
            //   maxX = paperHeight - Math.max(10, pageMarginHorizontal);
            //   maxY = paperWidth - Math.max(10, pageMarginVertical);
            // } else {
            //   maxX = paperWidth - Math.max(10, pageMarginHorizontal);
            //   maxY = paperHeight - Math.max(10, pageMarginVertical);
            // }
            if (isLandscape) {
                maxX = paperHeight - pageMarginHorizontal;
                maxY = paperWidth - pageMarginVertical;
            }
            else {
                maxX = paperWidth - pageMarginHorizontal;
                maxY = paperHeight - pageMarginVertical;
            }
            _this.data.maxX = maxX;
            _this.data.maxY = maxY;
            var dpiHelper = new DPIHelper();
            _this.pxToMmScale = dpiHelper.getPxToMmScale();
            _this.mmToPxScale = dpiHelper.getMmToPxScale();
            _this.countDataAndComputedData();
            var title = _this.computedData.title;
            var titleElement = getTitleElement();
            titleElement.i18n = title;
            titleElement.innerHTML = title[getCurrentLang()];
            var _d = _this, getHtml = _d.getHtml, getCss = _d.getCss;
            var html = getHtml();
            var css = getCss();
            // https://blog.csdn.net/idomyway/article/details/86309348
            // frame.contentWindow. postMessage (data, '*');
            // data: string，boolean，number，array，object
            (_b = getElementById("brickPageIframe").contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                command: "build",
                data: {
                    title: title,
                    html: html,
                    css: css
                }
            }, "*");
            _this.saveConfig();
        };
        this.mmToPxScale = 0;
        this.pxToMmScale = 0;
        this.loadConfig = function () {
            var currentConfig = getCurrentPageLocalStorage();
            if (currentConfig.length === 0) {
                _this.loadDefaultConfig();
                return;
            }
            _this.updateData(JSON.parse(currentConfig));
        };
        this.saveConfig = function () {
            setCurrentPageLocalStorage(JSON.stringify(_this.data));
        };
        this.loadDefaultConfig = function () {
            _this.updateData(JSON.parse(_this.DEFAULT_DATA_JSON));
        };
        this.getData = function () {
            return _this.data;
        };
        this.setData = function (newData) {
            _this.updateData(newData);
        };
        this.buildAfterChangeParameter = true;
        this.saveConfigAndBuildIfAllowed = function () {
            if (!_this.buildAfterChangeParameter)
                return;
            _this.saveConfig();
            _this.build();
        };
        this.updateData = function (newData) {
            var paperSize = newData.paperSize, isLandscape = newData.isLandscape, 
            // maxX,
            // maxY,
            pageMarginTop = newData.pageMarginTop, pageMarginBottom = newData.pageMarginBottom, pageMarginLeft = newData.pageMarginLeft, pageMarginRight = newData.pageMarginRight, diceKind = newData.diceKind;
            var _a = _this, paperSizeRadioArray = _a.paperSizeRadioArray, isLandscapeRadioArray = _a.isLandscapeRadioArray, pageMarginTopElement = _a.pageMarginTopElement, pageMarginBottomElement = _a.pageMarginBottomElement, pageMarginLeftElement = _a.pageMarginLeftElement, pageMarginRightElement = _a.pageMarginRightElement;
            paperSizeRadioArray.forEach(function (element) {
                element.checked = element.value === paperSize;
            });
            isLandscapeRadioArray.forEach(function (element) {
                element.checked = element.value === isLandscape.toString();
            });
            pageMarginTopElement.value = pageMarginTop;
            pageMarginBottomElement.value = pageMarginBottom;
            pageMarginLeftElement.value = pageMarginLeft;
            pageMarginRightElement.value = pageMarginRight;
            _this.data.paperSize = paperSize;
            _this.data.isLandscape = isLandscape;
            // this.data.maxX = maxX;
            // this.data.maxY = maxY;
            _this.data.pageMarginTop = pageMarginTop;
            _this.data.pageMarginBottom = pageMarginBottom;
            _this.data.pageMarginLeft = pageMarginLeft;
            _this.data.pageMarginRight = pageMarginRight;
            _this.updateOtherData(newData);
            _this.build();
        };
        this.getAutomaticPaginationHtmlFromChildList = function (list, MAX_X, MAX_Y, pageClass) {
            if (pageClass === void 0) { pageClass = ""; }
            if (list.length === 0)
                return "";
            var html = pageClass.length ? "<page class=\"" + pageClass + "\">" : "<page>";
            var usedX = 0;
            var usedY = 0;
            var currentRowHeight = 0;
            list.forEach(function (child) {
                var WIDTH = 0, HEIGHT = 0;
                if (child instanceof SVGElement) {
                    WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
                    HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
                }
                else {
                    var style = child.getAttribute("style");
                    if (style.indexOf("width:") > -1) {
                        WIDTH = parseFloat(style.split("width:")[1].split(";")[0].replace("mm", ""));
                    }
                    if (style.indexOf("height:") > -1) {
                        HEIGHT = parseFloat(style.split("height:")[1].split(";")[0].replace("mm", ""));
                    }
                }
                var newPage = (usedY + HEIGHT > MAX_Y);
                var newRow = false;
                if (!newPage && usedX + WIDTH > MAX_X) {
                    usedY += currentRowHeight;
                    if (usedY + HEIGHT > MAX_Y) {
                        newPage = true;
                    }
                    else {
                        newRow = true;
                    }
                }
                if (newPage) {
                    html += "</page><page>";
                    usedX = 0;
                    usedY = 0;
                    currentRowHeight = 0;
                }
                else if (newRow) {
                    usedX = 0;
                    currentRowHeight = 0;
                }
                currentRowHeight = Math.max(currentRowHeight, HEIGHT);
                usedX += WIDTH;
                html += child.outerHTML;
            });
            html += "</page>";
            return html;
        };
        this.appendAutomaticPaginationControls = function (wrapper, list, MAX_X, MAX_Y) {
            if (list.length === 0)
                return;
            var page = createElement("page");
            wrapper.appendChild(page);
            // let html = '<page>';
            var usedX = 0;
            var usedY = 0;
            var currentRowHeight = 0;
            list.forEach(function (child) {
                var WIDTH = 0, HEIGHT = 0;
                if (child instanceof SVGElement) {
                    WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
                    HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
                }
                else {
                    var style = child.getAttribute("style");
                    if (style.indexOf("width:") > -1) {
                        WIDTH = parseFloat(style.split("width:")[1].split(";")[0].replace("mm", ""));
                    }
                    if (style.indexOf("height:") > -1) {
                        HEIGHT = parseFloat(style.split("height:")[1].split(";")[0].replace("mm", ""));
                    }
                }
                var newPage = (usedY + HEIGHT > MAX_Y);
                var newRow = false;
                if (!newPage && usedX + WIDTH > MAX_X) {
                    usedY += currentRowHeight;
                    if (usedY + HEIGHT > MAX_Y) {
                        newPage = true;
                    }
                    else {
                        newRow = true;
                    }
                }
                if (newPage) {
                    // html += '</page><page>';
                    page = createElement("page");
                    wrapper.appendChild(page);
                    usedX = 0;
                    usedY = 0;
                    currentRowHeight = 0;
                }
                else if (newRow) {
                    usedX = 0;
                    currentRowHeight = 0;
                }
                currentRowHeight = Math.max(currentRowHeight, HEIGHT);
                usedX += WIDTH;
                // html += child.outerHTML;
                page.appendChild(child);
            });
            // html += '</page>';
            // return html;
        };
        // protected formatLength = (length: number, precision: number): number => {
        //   const times = Math.pow(10, precision);
        //   return Math.floor(length * times) / times;
        // }
        this.formatDecile = function (length) {
            return Math.round(length * 10) / 10;
        };
        this.formatCentile = function (length) {
            return Math.round(length * 100) / 100;
        };
        this.formatMillimeter = function (length) {
            return Math.round(length * 1000) / 1000;
        };
        this.data = __assign(__assign({}, this.data), appendData);
        this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
        this.computedData = __assign(__assign({}, this.computedData), otherComputedData);
        newPageSizeArray.forEach(function (pageSize) {
            return _this.pageSizeArray.push(pageSize);
        });
    }
    return BrickBase;
}());
exports.BrickBase = BrickBase;
// window.addEventListener("message", function(event) {
//   const { data: { command , data: { title , css , html , paperSize , isLandscape , pageMarginTop , pageMarginLeft  }  }  } = event;
//   switch(command){
//       case "download2PDF":
//         (window as any).brickCore.download2PDF({
//             css,
//             html,
//             paperSize,
//             isLandscape,
//             pageMarginTop,
//             pageMarginLeft,
//             title,
//         });
//           break;
//       default:
//           break;
//   }
// });