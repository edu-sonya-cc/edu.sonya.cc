// import { SITE_IMAGE_PATH, PAGE_ID, ACTUAL_PAGE_NAME, ID_PROPERTY } from '../const';
// import { bricks } from '../data/data';
// import { I18nable, showBlock, stopEventBubble, showInlineFlex, getHeadElement, createElement, getTitleElement, getMainElement, getI18nInnerHTML } from '../dom';
// import { getChangeLangNotifyArrayOfCurrentPage, Language, setCurrentPageLocalStorage } from '../storage';
// import { ActualPageBase } from './actualPageBase';
// import { IBrickCore } from './IBrickCore';
// import { convertDateToYYYYMMDD_hhmmss } from '../utils';
"use strict";
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/utils.d.ts' />
var BrickPage = (function (_super) {
    __extends(BrickPage, _super);
    function BrickPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageSubjectElement = createElement("div");
        _this.pageSummaryElement = createElement("div");
        _this.mainContentElement = createElement("div");
        _this.feedbackElement = createElement("div");
        _this.initTitleElement = function () {
            var titleElement = getTitleElement();
            titleElement.i18n = {
                en: "Throwing a brick to attract jade",
                zh_cn: "抛砖引玉",
                zh_tw: "抛磚引玉"
            };
        };
        _this.PAGE_NAME = "brickPage";
        _this.initMainElement = function () {
            _this.appendMainElements();
            var _a = _this, PAGE_NAME = _a.PAGE_NAME, mainContentElement = _a.mainContentElement, previewRegionElement = _a.previewRegionElement, configRegionElement = _a.configRegionElement;
            mainContentElement.appendChild(previewRegionElement);
            mainContentElement.appendChild(configRegionElement);
            previewRegionElement.id = PAGE_NAME + "PreviewRegion";
            configRegionElement.id = PAGE_NAME + "ConfigRegion";
            _this.appendRegionSubjects(previewRegionElement, configRegionElement);
            _this.appendPreviewRegionOtherElements();
            _this.appendConfigRegionOtherElements();
            var _b = _this, downloadAreaElement = _b.downloadAreaElement, shareAreaElement = _b.shareAreaElement, sponsorElement = _b.sponsorElement, wechatShareElement = _b.wechatShareElement;
            mainContentElement.appendChild(downloadAreaElement);
            mainContentElement.appendChild(shareAreaElement);
            mainContentElement.appendChild(sponsorElement);
            shareAreaElement.appendChild(wechatShareElement);
            downloadAreaElement.id = PAGE_NAME + "DownloadArea";
            shareAreaElement.id = PAGE_NAME + "ShareArea";
            sponsorElement.id = PAGE_NAME + "SponsorImage";
            var sponsorUrl = SITE_IMAGE_PATH + "0common/sponsor.jpg";
            sponsorElement.src = sponsorUrl;
            sponsorElement.alt = sponsorUrl;
            _this.loadScript(PAGE_NAME);
        };
        _this.downloadAreaElement = createElement("div");
        _this.shareAreaElement = createElement("div");
        _this.sponsorElement = createElement("img");
        _this.wechatShareElement = createElement("img");
        _this.previewIframe = createElement("iframe");
        _this.previewRegionElement = createElement("div");
        _this.configRegionElement = createElement("div");
        _this.configCoreWrapElement = createElement("div");
        _this.configCoreToolbarElement = createElement("div");
        _this.appendConfigToolbar = function (idPostfix, eventName, i18n) {
            var _a = _this, PAGE_NAME = _a.PAGE_NAME, configCoreToolbarElement = _a.configCoreToolbarElement;
            var buildElement = createElement("span");
            buildElement.id = "" + PAGE_NAME + idPostfix;
            buildElement.className = "moreButton primary";
            buildElement.innerHTML = getI18nInnerHTML(i18n);
            buildElement.onclick = function (event) {
                _this.emit(eventName);
                return stopEventBubble(event);
            };
            configCoreToolbarElement.appendChild(buildElement);
        };
        _this.fileReaderElement = createElement("input");
        _this.brickCorePageInited = false;
        _this.reporterPageInited = false;
        _this.loadScript = function (PAGE_NAME) {
            var version = (bricks.filter(function (_a) {
                var id = _a.id;
                return id === PAGE_ID;
            })[0] || {
                version: "unknown"
            }).version;
            var scriptElement = createElement("script");
            scriptElement.id = PAGE_NAME + "CoreScript";
            scriptElement.setAttribute("charset", "utf-8");
            // scriptElement.setAttribute('src', `js/brick/${PAGE_ID}.js`);
            scriptElement.setAttribute("src", "js/brick/" + PAGE_ID + ".js?" + version);
            getHeadElement().appendChild(scriptElement);
            var initCore = function () {
                _this.brickCorePageInited = true;
                var brickCore = window
                    .brickCore;
                // (brickCore as any).init();
                brickCore.init(_this.configCoreWrapElement);
                // brickCore.loadConfig();
                // if(this.reporterPageInited) { brickCore.build(); }
                if (_this.reporterPageInited)
                    brickCore.loadConfig();
            };
            scriptElement.onload =
                scriptElement
                    .onreadystatechange =
                    function () {
                        var readyState = this.readyState;
                        console.log("onreadystatechange", readyState);
                        if (!readyState) {
                            initCore();
                            return;
                        }
                        switch (readyState) {
                            case "loaded":
                            case "complete":
                                initCore();
                                break;
                            default:
                                break;
                        }
                    };
        };
        _this.init = function () {
            var loadConfigFromLocalCallback = function (newData) {
                var core = window
                    .brickCore;
                core.setData(newData);
            };
            // https://www.cnblogs.com/gamedaybyday/p/9906542.html
            var fileReaderElement = _this.fileReaderElement;
            fileReaderElement.type = "file";
            fileReaderElement.onchange = function () {
                if (!fileReaderElement.files)
                    return;
                var selectedFile = fileReaderElement.files[0];
                var name = selectedFile.name, size = selectedFile.size;
                console.log("read file:", name, size);
                var reader = new FileReader();
                reader.readAsText(selectedFile);
                reader.onload = function () {
                    var result = this.result;
                    var object = JSON.parse(result);
                    console.log(result, object);
                    loadConfigFromLocalCallback(object);
                };
            };
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    BrickPage.prototype.appendMainElements = function () {
        var _a = this, PAGE_NAME = _a.PAGE_NAME, pageSubjectElement = _a.pageSubjectElement, pageSummaryElement = _a.pageSummaryElement, mainContentElement = _a.mainContentElement, feedbackElement = _a.feedbackElement;
        var mainElement = getMainElement();
        mainElement.id = PAGE_NAME + "Main";
        mainElement.appendChild(pageSubjectElement);
        mainElement.appendChild(pageSummaryElement);
        mainElement.appendChild(mainContentElement);
        mainElement.appendChild(feedbackElement);
        pageSubjectElement.id = PAGE_NAME + "Subject";
        pageSubjectElement.className = "pageSubject";
        var brick = bricks.filter(function (item) { return item.id === PAGE_ID; })[0] || {
            title: { en: "Unknown", zh_cn: "未知", zh_tw: "未知" },
            summary: {
                en: "The id is wrong, please check it.",
                zh_cn: "编号错误，请检查。",
                zh_tw: "編號錯誤，請檢查。"
            }
        };
        var 
        // id,
        // subKind,
        // version,
        // image,
        title = brick.title, summary = brick.summary;
        var subjectTextElement = createElement("div");
        subjectTextElement.id = PAGE_NAME + "SubjectText";
        subjectTextElement.innerHTML = getI18nInnerHTML(title);
        pageSubjectElement.appendChild(subjectTextElement);
        pageSummaryElement.id = PAGE_NAME + "Summary";
        pageSummaryElement.innerHTML = getI18nInnerHTML(summary);
        mainContentElement.id = PAGE_NAME + "MainContent";
        feedbackElement.id = PAGE_NAME + "Feedback";
    };
    BrickPage.prototype.appendRegionSubjects = function (previewRegionElement, configRegionElement) {
        var PAGE_NAME = this.PAGE_NAME;
        var previewRegionSubjectElement = createElement("div");
        var configRegionSubjectElement = createElement("div");
        previewRegionSubjectElement.className = PAGE_NAME + "MainContentSubject";
        configRegionSubjectElement.className = PAGE_NAME + "MainContentSubject";
        previewRegionSubjectElement.innerHTML = getI18nInnerHTML({
            en: "Preivew",
            zh_cn: "预览",
            zh_tw: "預覽"
        });
        configRegionSubjectElement.innerHTML = getI18nInnerHTML({
            en: "Config",
            zh_cn: "设置",
            zh_tw: "設置"
        });
        previewRegionElement.appendChild(previewRegionSubjectElement);
        configRegionElement.appendChild(configRegionSubjectElement);
    };
    BrickPage.prototype.appendPreviewRegionOtherElements = function () {
        // const previewIframe = createElement('iframe') as HTMLIFrameElement;
        var _this = this;
        var _a = this, PAGE_NAME = _a.PAGE_NAME, previewIframe = _a.previewIframe, previewRegionElement = _a.previewRegionElement;
        previewIframe.id = PAGE_NAME + "Iframe";
        previewIframe.src = "?go=report";
        previewIframe.setAttribute("frameBorder", "0");
        previewRegionElement.appendChild(previewIframe);
        getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
            previewIframe.contentWindow ? .postMessage({
                command: "changeLang",
                data: {
                    lang: lang
                }
            }, "*") : ;
        });
        var buildFirst = function () {
            _this.reporterPageInited = true;
            var brickCore = window
                .brickCore;
            if (brickCore && _this.brickCorePageInited) {
                brickCore.loadConfig();
            }
        };
        previewIframe.onload =
            previewIframe
                .onreadystatechange =
                function () {
                    var readyState = this.readyState;
                    console.log("iframe onreadystatechange", readyState);
                    if (!readyState) {
                        buildFirst();
                        return;
                    }
                    switch (readyState) {
                        case "loaded":
                        case "complete":
                            buildFirst();
                            break;
                        default:
                            break;
                    }
                };
        var toolbarElement = createElement("div");
        toolbarElement.id = PAGE_NAME + "Toolbar";
        previewRegionElement.appendChild(toolbarElement);
        var imageUrlPrefix = SITE_IMAGE_PATH + "3brick/";
        var toolbarItemI18nArray = [
            {
                en: "download",
                zh_cn: "下载",
                zh_tw: "下載"
            },
            {
                en: "print",
                zh_cn: "打印",
                zh_tw: "列印"
            },
            {
                en: "share",
                zh_cn: "分享",
                zh_tw: "分享"
            },
            {
                en: "sponsor",
                zh_cn: "赞助",
                zh_tw: "贊助"
            },
        ];
        "download,print,share,sponsor".split(",").forEach(function (name, index) {
            var spanElement = createElement("span");
            spanElement.className = PAGE_NAME + "ToolbarItem";
            var imageSrc = "" + imageUrlPrefix + name + ".png";
            var imageElement = createElement("img");
            imageElement.className = PAGE_NAME + "ToolbarItemImage";
            imageElement.src = imageSrc;
            imageElement.alt = imageSrc;
            var textElement = createElement("span");
            textElement.className = PAGE_NAME + "ToolbarItemText";
            textElement.innerHTML = getI18nInnerHTML(toolbarItemI18nArray[index]);
            spanElement.appendChild(imageElement);
            spanElement.appendChild(textElement);
            toolbarElement.appendChild(spanElement);
            spanElement.onclick = function (event) {
                _this.emit(name);
                return stopEventBubble(event);
            };
        });
    };
    BrickPage.prototype.appendConfigRegionOtherElements = function () {
        var _a = this, PAGE_NAME = _a.PAGE_NAME, configRegionElement = _a.configRegionElement, configCoreWrapElement = _a.configCoreWrapElement, configCoreToolbarElement = _a.configCoreToolbarElement, appendConfigToolbar = _a.appendConfigToolbar;
        var configCoreElement = createElement("div");
        configCoreWrapElement.id = PAGE_NAME + "ConfigCoreWrap";
        configCoreElement.id = PAGE_NAME + "ConfigCore";
        configCoreToolbarElement.id = PAGE_NAME + "ConfigCoreToolbar";
        configRegionElement.setAttribute(ID_PROPERTY, PAGE_ID.toString());
        appendConfigToolbar("Build", "build", {
            en: "Build",
            zh_cn: "生成",
            zh_tw: "生成"
        });
        // appendConfigToolbar('LoadConfig', 'loadConfig', {
        // 	en: 'Load Config',
        // 	zh_cn: '加载配置',
        // 	zh_tw: '加載配置',
        // });
        // appendConfigToolbar('SaveConfig', 'saveConfig', {
        // 	en: 'Save Config',
        // 	zh_cn: '保存配置',
        // 	zh_tw: '保存配置',
        // });
        appendConfigToolbar("LoadDefaultConfig", "loadDefaultConfig", {
            en: "Use Default",
            zh_cn: "还原",
            zh_tw: "還原"
        });
        appendConfigToolbar("LoadConfigFromLocal", "loadConfigFromLocal", {
            en: "Load",
            zh_cn: "加载",
            zh_tw: "加載"
        });
        appendConfigToolbar("SaveConfigToLocal", "saveConfigToLocal", {
            en: "Save",
            zh_cn: "保存",
            zh_tw: "保存"
        });
        configRegionElement.appendChild(configCoreWrapElement);
        configCoreWrapElement.appendChild(configCoreElement);
        configCoreWrapElement.appendChild(configCoreToolbarElement);
    };
    BrickPage.prototype.emit = function (eventName) {
        var core = window
            .brickCore;
        switch (eventName) {
            case "download":
                core.download();
                break;
            case "print":
                // core.print();
                // (this.previewIframe as unknown as {window: { print: () =>void}}).window.print();
                this.previewIframe.contentWindow ? .postMessage({
                    command: "print",
                    data: {}
                }, "*") : ;
                break;
            case "share":
                // const url = encodeURI(window.location.href);
                // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
                var wechatShareImageSrc = "" + SITE_IMAGE_PATH + ACTUAL_PAGE_NAME + "/" + PAGE_ID + ".png";
                this.wechatShareElement.setAttribute("src", wechatShareImageSrc);
                this.wechatShareElement.setAttribute("alt", wechatShareImageSrc);
                showInlineFlex(this.shareAreaElement);
                break;
            case "sponsor":
                showBlock(this.sponsorElement);
                break;
            case "build":
                core.build();
                break;
            case "loadConfig":
                core.loadConfig();
                break;
            case "saveConfig":
                // core.saveConfig();
                setCurrentPageLocalStorage(JSON.stringify(core.getData()));
                break;
            case "loadDefaultConfig":
                core.loadDefaultConfig();
                break;
            case "loadConfigFromLocal":
                // core.loadConfigFromLocal();
                this.fileReaderElement.click();
                break;
            case "saveConfigToLocal":
                // core.saveConfigToLocal();
                // https://blog.csdn.net/qq_38431572/article/details/102687955
                var blob = new Blob([JSON.stringify(core.getData())], {
                    type: "application/json"
                });
                var configFilename = "edu.sonya.cc_brick_" + PAGE_ID + "_" + convertDateToYYYYMMDD_hhmmss(new Date()) + ".config";
                if ("msSaveOrOpenBlob" in navigator) {
                    window.navigator.msSaveOrOpenBlob(blob, configFilename);
                }
                else {
                    var url = window.URL.createObjectURL(blob);
                    var link = createElement("a");
                    link.href = url;
                    link.setAttribute("download", configFilename);
                    link.click();
                }
                break;
            default:
                break;
        }
    };
    return BrickPage;
}(ActualPageBase));
var brickPage = new BrickPage();
brickPage.init();
