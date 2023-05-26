var BrickPage = /** @class */ (function (_super) {
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
        zh_tw: "抛磚引玉",
      };
    };
    _this.PAGE_NAME = "brickPage";
    _this.initMainElement = function () {
      _this.appendMainElements();
      var _a = _this,
        PAGE_NAME = _a.PAGE_NAME,
        mainContentElement = _a.mainContentElement,
        previewRegionElement = _a.previewRegionElement,
        configRegionElement = _a.configRegionElement;
      mainContentElement.appendChild(previewRegionElement);
      mainContentElement.appendChild(configRegionElement);
      previewRegionElement.id = "".concat(PAGE_NAME, "PreviewRegion");
      configRegionElement.id = "".concat(PAGE_NAME, "ConfigRegion");
      _this.appendRegionSubjects(previewRegionElement, configRegionElement);
      _this.appendPreviewRegionOtherElements();
      _this.appendConfigRegionOtherElements();
      var _b = _this,
        downloadAreaElement = _b.downloadAreaElement,
        shareAreaElement = _b.shareAreaElement,
        sponsorElement = _b.sponsorElement,
        wechatShareElement = _b.wechatShareElement;
      mainContentElement.appendChild(downloadAreaElement);
      mainContentElement.appendChild(shareAreaElement);
      mainContentElement.appendChild(sponsorElement);
      shareAreaElement.appendChild(wechatShareElement);
      downloadAreaElement.id = "".concat(PAGE_NAME, "DownloadArea");
      shareAreaElement.id = "".concat(PAGE_NAME, "ShareArea");
      sponsorElement.id = "".concat(PAGE_NAME, "SponsorImage");
      var sponsorUrl = "".concat(SITE_IMAGE_PATH, "0common/sponsor.jpg");
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
      var _a = _this,
        PAGE_NAME = _a.PAGE_NAME,
        configCoreToolbarElement = _a.configCoreToolbarElement;
      var buildElement = createElement("span");
      buildElement.id = "".concat(PAGE_NAME).concat(idPostfix);
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
        version: "unknown",
      }).version;
      var scriptElement = createElement("script");
      scriptElement.id = "".concat(PAGE_NAME, "CoreScript");
      scriptElement.setAttribute("charset", "utf-8");
      // scriptElement.setAttribute('src', `js/brick/${PAGE_ID}.js`);
      scriptElement.setAttribute(
        "src",
        "js/brick/".concat(PAGE_ID, ".js?").concat(version),
      );
      getHeadElement().appendChild(scriptElement);
      var initCore = function () {
        _this.brickCorePageInited = true;
        var brickCore = window.brickCore;
        // (brickCore as any).init();
        brickCore.init(_this.configCoreWrapElement);
        // brickCore.loadConfig();
        // if(this.reporterPageInited) { brickCore.build(); }
        if (_this.reporterPageInited) {
          brickCore.loadConfig();
        }
      };
      scriptElement.onload = scriptElement.onreadystatechange = function () {
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
        var core = window.brickCore;
        core.setData(newData);
      };
      // https://www.cnblogs.com/gamedaybyday/p/9906542.html
      var fileReaderElement = _this.fileReaderElement;
      fileReaderElement.type = "file";
      fileReaderElement.onchange = function () {
        if (!fileReaderElement.files) {
          return;
        }
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
    var _a = this,
      PAGE_NAME = _a.PAGE_NAME,
      pageSubjectElement = _a.pageSubjectElement,
      pageSummaryElement = _a.pageSummaryElement,
      mainContentElement = _a.mainContentElement,
      feedbackElement = _a.feedbackElement;
    var mainElement = getMainElement();
    mainElement.id = "".concat(PAGE_NAME, "Main");
    mainElement.appendChild(pageSubjectElement);
    mainElement.appendChild(pageSummaryElement);
    mainElement.appendChild(mainContentElement);
    mainElement.appendChild(feedbackElement);
    pageSubjectElement.id = "".concat(PAGE_NAME, "Subject");
    pageSubjectElement.className = "pageSubject";
    var brick = bricks.filter(function (item) {
      return item.id === PAGE_ID;
    })[0] || {
      title: { en: "Unknown", zh_cn: "未知", zh_tw: "未知" },
      summary: {
        en: "The id is wrong, please check it.",
        zh_cn: "编号错误，请检查。",
        zh_tw: "編號錯誤，請檢查。",
      },
    };
    var // id,
    // subKind,
    // version,
    // image,
    title = brick.title,
      summary = brick.summary;
    var subjectTextElement = createElement("div");
    subjectTextElement.id = "".concat(PAGE_NAME, "SubjectText");
    subjectTextElement.innerHTML = getI18nInnerHTML(title);
    pageSubjectElement.appendChild(subjectTextElement);
    pageSummaryElement.id = "".concat(PAGE_NAME, "Summary");
    pageSummaryElement.innerHTML = getI18nInnerHTML(summary);
    mainContentElement.id = "".concat(PAGE_NAME, "MainContent");
    feedbackElement.id = "".concat(PAGE_NAME, "Feedback");
  };
  BrickPage.prototype.appendRegionSubjects = function (
    previewRegionElement,
    configRegionElement,
  ) {
    var PAGE_NAME = this.PAGE_NAME;
    var previewRegionSubjectElement = createElement("div");
    var configRegionSubjectElement = createElement("div");
    previewRegionSubjectElement.className = "".concat(
      PAGE_NAME,
      "MainContentSubject",
    );
    configRegionSubjectElement.className = "".concat(
      PAGE_NAME,
      "MainContentSubject",
    );
    previewRegionSubjectElement.innerHTML = getI18nInnerHTML({
      en: "Preivew",
      zh_cn: "预览",
      zh_tw: "預覽",
    });
    configRegionSubjectElement.innerHTML = getI18nInnerHTML({
      en: "Config",
      zh_cn: "设置",
      zh_tw: "設置",
    });
    previewRegionElement.appendChild(previewRegionSubjectElement);
    configRegionElement.appendChild(configRegionSubjectElement);
  };
  BrickPage.prototype.appendPreviewRegionOtherElements = function () {
    // const previewIframe = createElement('iframe') as HTMLIFrameElement;
    var _this = this;
    var _a = this,
      PAGE_NAME = _a.PAGE_NAME,
      previewIframe = _a.previewIframe,
      previewRegionElement = _a.previewRegionElement;
    previewIframe.id = "".concat(PAGE_NAME, "Iframe");
    previewIframe.src = "?go=report";
    previewIframe.setAttribute("frameBorder", "0");
    previewRegionElement.appendChild(previewIframe);
    getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
      var _a;
      (_a = previewIframe.contentWindow) === null || _a === void 0
        ? void 0
        : _a.postMessage({
          command: "changeLang",
          data: {
            lang: lang,
          },
        }, "*");
    });
    var buildFirst = function () {
      _this.reporterPageInited = true;
      var brickCore = window.brickCore;
      if (brickCore && _this.brickCorePageInited) {
        brickCore.loadConfig();
        // brickCore.build();
      }
    };
    previewIframe.onload = previewIframe.onreadystatechange = function () {
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
    toolbarElement.id = "".concat(PAGE_NAME, "Toolbar");
    previewRegionElement.appendChild(toolbarElement);
    var imageUrlPrefix = "".concat(SITE_IMAGE_PATH, "3brick/");
    var toolbarItemI18nArray = [
      {
        en: "download",
        zh_cn: "下载",
        zh_tw: "下載",
      },
      {
        en: "print",
        zh_cn: "打印",
        zh_tw: "列印",
      },
      {
        en: "share",
        zh_cn: "分享",
        zh_tw: "分享",
      },
      {
        en: "sponsor",
        zh_cn: "赞助",
        zh_tw: "贊助",
      },
    ];
    "download,print,share,sponsor".split(",").forEach(function (name, index) {
      var spanElement = createElement("span");
      spanElement.className = "".concat(PAGE_NAME, "ToolbarItem");
      var imageSrc = "".concat(imageUrlPrefix).concat(name, ".png");
      var imageElement = createElement("img");
      imageElement.className = "".concat(PAGE_NAME, "ToolbarItemImage");
      imageElement.src = imageSrc;
      imageElement.alt = imageSrc;
      var textElement = createElement("span");
      textElement.className = "".concat(PAGE_NAME, "ToolbarItemText");
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
    var _a = this,
      PAGE_NAME = _a.PAGE_NAME,
      configRegionElement = _a.configRegionElement,
      configCoreWrapElement = _a.configCoreWrapElement,
      configCoreToolbarElement = _a.configCoreToolbarElement,
      appendConfigToolbar = _a.appendConfigToolbar;
    var configCoreElement = createElement("div");
    configCoreWrapElement.id = "".concat(PAGE_NAME, "ConfigCoreWrap");
    configCoreElement.id = "".concat(PAGE_NAME, "ConfigCore");
    configCoreToolbarElement.id = "".concat(PAGE_NAME, "ConfigCoreToolbar");
    configRegionElement.setAttribute(ID_PROPERTY, PAGE_ID.toString());
    appendConfigToolbar("Build", "build", {
      en: "Build",
      zh_cn: "生成",
      zh_tw: "生成",
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
      zh_tw: "還原",
    });
    appendConfigToolbar("LoadConfigFromLocal", "loadConfigFromLocal", {
      en: "Load",
      zh_cn: "加载",
      zh_tw: "加載",
    });
    appendConfigToolbar("SaveConfigToLocal", "saveConfigToLocal", {
      en: "Save",
      zh_cn: "保存",
      zh_tw: "保存",
    });
    configRegionElement.appendChild(configCoreWrapElement);
    configCoreWrapElement.appendChild(configCoreElement);
    configCoreWrapElement.appendChild(configCoreToolbarElement);
  };
  BrickPage.prototype.emit = function (eventName) {
    var _a;
    var core = window.brickCore;
    switch (eventName) {
      case "download":
        core.download();
        break;
      case "print":
        // core.print();
        // (this.previewIframe as unknown as {window: { print: () =>void}}).window.print();
        (_a = this.previewIframe.contentWindow) === null || _a === void 0
          ? void 0
          : _a.postMessage({ command: "print", data: {} }, "*");
        break;
      case "share":
        // const url = encodeURI(window.location.href);
        // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
        var wechatShareImageSrc = "".concat(SITE_IMAGE_PATH).concat(
          ACTUAL_PAGE_NAME,
          "/",
        ).concat(PAGE_ID, ".png");
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
          type: "application/json",
        });
        var configFilename = "edu.sonya.cc_brick_".concat(PAGE_ID, "_").concat(
          convertDateToYYYYMMDD_hhmmss(new Date()),
          ".config",
        );
        if ("msSaveOrOpenBlob" in navigator) {
          window.navigator.msSaveOrOpenBlob(blob, configFilename);
        } else {
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
