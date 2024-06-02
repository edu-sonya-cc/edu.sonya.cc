"use strict";

// @ts-nocheck
/* eslint-disable */
var System, __instantiate;
(function () {
	// deno-fmt-ignore
  var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  // deno-fmt-ignore
  var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var r = Object.create(null);
  System = {
    register: function (id, d, f) {
      r[id] = { d: d, f: f, exp: {} };
    },
  };
  function dI(mid, src) {
    return __awaiter(this, void 0, void 0, function () {
      var id, _a, o, ia, _b, sa, oa, s, i;
      return __generator(this, function (_c) {
        id = mid.replace(/\.\w+$/i, "");
        if (id.includes("./")) {
          (_a = id.split("/").reverse()),
            (o = _a[0]),
            (ia = _a.slice(1)),
            (_b = src.split("/").reverse()),
            (sa = _b.slice(1)),
            (oa = [o]);
          (s = 0), (i = void 0);
          while ((i = ia.shift())) {
            if (i === "..") s++;
            else if (i === ".") break;
            else oa.push(i);
          }
          if (s < sa.length) oa.push.apply(oa, sa.slice(s));
          id = oa.reverse().join("/");
        }
        return [
          2,
          id in r ? gExpA(id) : Promise.resolve().then(function () {
            return require(mid);
          }),
        ];
      });
    });
  }
  function gC(id, main) {
    return {
      id: id,
      import: function (m) {
        return dI(m, id);
      },
      meta: { url: id, main: main },
    };
  }
  function gE(exp) {
    return function (id, v) {
      var _a;
      var e = typeof id === "string" ? ((_a = {}), (_a[id] = v), _a) : id;
      for (var _i = 0, _b = Object.entries(e); _i < _b.length; _i++) {
        var _c = _b[_i],
          id_1 = _c[0],
          value = _c[1];
        Object.defineProperty(exp, id_1, {
          value: value,
          writable: true,
          enumerable: true,
        });
      }
      return v;
    };
  }
  function rF(main) {
    var m;
    for (var id in r) {
      m = r[id];
      var f = m.f,
        exp = m.exp;
      var _a = f(gE(exp), gC(id, id === main)),
        e = _a.execute,
        s = _a.setters;
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }
  function gExpA(id) {
    return __awaiter(this, void 0, void 0, function () {
      var m, d, e, s, i, _a, _b, r_1;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(id in r)) return [2];
            m = r[id];
            if (!m.s) return [3, 6];
            (d = m.d), (e = m.e), (s = m.s);
            delete m.s;
            delete m.e;
            i = 0;
            _c.label = 1;
          case 1:
            if (!(i < s.length)) return [3, 4];
            _b = (_a = s)[i];
            return [4, gExpA(d[i])];
          case 2:
            _b.apply(_a, [_c.sent()]);
            _c.label = 3;
          case 3:
            i++;
            return [3, 1];
          case 4:
            r_1 = e();
            if (!r_1) return [3, 6];
            return [4, r_1];
          case 5:
            _c.sent();
            _c.label = 6;
          case 6:
            return [2, m.exp];
        }
      });
    });
  }
  function gExp(id) {
    if (!(id in r)) return;
    var m = r[id];
    if (m.s) {
      var d = m.d,
        e = m.e,
        s = m.s;
      delete m.s;
      delete m.e;
      for (var i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = function (m, a) {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

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
                en_us: "Throwing a brick to attract jade",
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
            scriptElement.setAttribute("src", "js/brick/" + PAGE_ID + ".js?" + version);
            getHeadElement().appendChild(scriptElement);
            var initCore = function () {
                _this.brickCorePageInited = true;
                var brickCore = window
                    .brickCore;
                brickCore.init(_this.configCoreWrapElement);
                if (_this.reporterPageInited)
                    brickCore.loadConfig();
            };
            scriptElement.onload =
                scriptElement
                    .onreadystatechange = function () {
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
            title: { en_us: "Unknown", zh_cn: "未知", zh_tw: "未知" },
            summary: {
                en_us: "The id is wrong, please check it.",
                zh_cn: "编号错误，请检查。",
                zh_tw: "編號錯誤，請檢查。"
            }
        };
        var title = brick.title, summary = brick.summary;
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
            en_us: "Preivew",
            zh_cn: "预览",
            zh_tw: "預覽"
        });
        configRegionSubjectElement.innerHTML = getI18nInnerHTML({
            en_us: "Config",
            zh_cn: "设置",
            zh_tw: "設置"
        });
        previewRegionElement.appendChild(previewRegionSubjectElement);
        configRegionElement.appendChild(configRegionSubjectElement);
    };
    BrickPage.prototype.appendPreviewRegionOtherElements = function () {
        var _this = this;
        var _a = this, PAGE_NAME = _a.PAGE_NAME, previewIframe = _a.previewIframe, previewRegionElement = _a.previewRegionElement;
        previewIframe.id = PAGE_NAME + "Iframe";
        previewIframe.src = "?go=report";
        previewIframe.setAttribute("frameBorder", "0");
        previewRegionElement.appendChild(previewIframe);
        getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
            var _a;
            (_a = previewIframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
                command: "changeLang",
                data: {
                    lang: lang
                }
            }, "*");
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
                .onreadystatechange = function () {
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
                en_us: "download",
                zh_cn: "下载",
                zh_tw: "下載"
            },
            {
                en_us: "print",
                zh_cn: "打印",
                zh_tw: "列印"
            },
            {
                en_us: "share",
                zh_cn: "分享",
                zh_tw: "分享"
            },
            {
                en_us: "sponsor",
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
            en_us: "Build",
            zh_cn: "生成",
            zh_tw: "生成"
        });
        appendConfigToolbar("LoadDefaultConfig", "loadDefaultConfig", {
            en_us: "Use Default",
            zh_cn: "还原",
            zh_tw: "還原"
        });
        appendConfigToolbar("LoadConfigFromLocal", "loadConfigFromLocal", {
            en_us: "Load",
            zh_cn: "加载",
            zh_tw: "加載"
        });
        appendConfigToolbar("SaveConfigToLocal", "saveConfigToLocal", {
            en_us: "Save",
            zh_cn: "保存",
            zh_tw: "保存"
        });
        configRegionElement.appendChild(configCoreWrapElement);
        configCoreWrapElement.appendChild(configCoreElement);
        configCoreWrapElement.appendChild(configCoreToolbarElement);
    };
    BrickPage.prototype.emit = function (eventName) {
        var _a;
        var core = window
            .brickCore;
        switch (eventName) {
            case "download":
                core.download();
                break;
            case "print":
                (_a = this.previewIframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
                    command: "print",
                    data: {}
                }, "*");
                break;
            case "share":
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
                setCurrentPageLocalStorage(JSON.stringify(core.getData()));
                break;
            case "loadDefaultConfig":
                core.loadDefaultConfig();
                break;
            case "loadConfigFromLocal":
                this.fileReaderElement.click();
                break;
            case "saveConfigToLocal":
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

__instantiate("brick", false);

