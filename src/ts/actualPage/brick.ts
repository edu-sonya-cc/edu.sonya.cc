// import { SITE_IMAGE_PATH, PAGE_ID, ACTUAL_PAGE_NAME, ID_PROPERTY } from '../const';
// import { bricks } from '../data/data';
// import { I18nable, showBlock, stopEventBubble, showInlineFlex, getHeadElement, createElement, getTitleElement, getMainElement, getI18nInnerHTML } from '../dom';
// import { getChangeLangNotifyArrayOfCurrentPage, Language, setCurrentPageLocalStorage } from '../storage';
// import { ActualPageBase } from './actualPageBase';
// import { IBrickCore } from './IBrickCore';
// import { convertDateToYYYYMMDD_hhmmss } from '../utils';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
/// <reference path='../../types/utils.d.ts' />

class BrickPage extends ActualPageBase {
  private pageSubjectElement = createElement("div") as HTMLDivElement;
  private pageSummaryElement = createElement("div") as HTMLDivElement;
  private mainContentElement = createElement("div") as HTMLDivElement;
  private feedbackElement = createElement("div") as HTMLDivElement;

  public initTitleElement = () => {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en_us: "Throwing a brick to attract jade",
      zh_cn: "抛砖引玉",
      zh_tw: "抛磚引玉",
    };
  };

  private readonly PAGE_NAME = "brickPage";

  public initMainElement = () => {
    this.appendMainElements();

    const {
      PAGE_NAME,
      mainContentElement,
      previewRegionElement,
      configRegionElement,
    } = this;

    mainContentElement.appendChild(previewRegionElement);
    mainContentElement.appendChild(configRegionElement);

    previewRegionElement.id = `${PAGE_NAME}PreviewRegion`;
    configRegionElement.id = `${PAGE_NAME}ConfigRegion`;

    this.appendRegionSubjects(previewRegionElement, configRegionElement);

    this.appendPreviewRegionOtherElements();
    this.appendConfigRegionOtherElements();

    const {
      downloadAreaElement,
      shareAreaElement,
      sponsorElement,
      wechatShareElement,
    } = this;
    mainContentElement.appendChild(downloadAreaElement);
    mainContentElement.appendChild(shareAreaElement);
    mainContentElement.appendChild(sponsorElement);

    shareAreaElement.appendChild(wechatShareElement);

    downloadAreaElement.id = `${PAGE_NAME}DownloadArea`;
    shareAreaElement.id = `${PAGE_NAME}ShareArea`;
    sponsorElement.id = `${PAGE_NAME}SponsorImage`;

    const sponsorUrl = `${SITE_IMAGE_PATH}0common/sponsor.jpg`;
    sponsorElement.src = sponsorUrl;
    sponsorElement.alt = sponsorUrl;

    this.loadScript(PAGE_NAME);
  };

  private appendMainElements() {
    const {
      PAGE_NAME,
      pageSubjectElement,
      pageSummaryElement,
      mainContentElement,
      feedbackElement,
    } = this;

    const mainElement = getMainElement();
    mainElement.id = `${PAGE_NAME}Main`;

    mainElement.appendChild(pageSubjectElement);
    mainElement.appendChild(pageSummaryElement);
    mainElement.appendChild(mainContentElement);
    mainElement.appendChild(feedbackElement);

    pageSubjectElement.id = `${PAGE_NAME}Subject`;
    pageSubjectElement.className = "pageSubject";

    const brick =
      bricks.filter((item: { id: number }) => item.id === PAGE_ID)[0] || {
        title: { en_us: "Unknown", zh_cn: "未知", zh_tw: "未知" },
        summary: {
          en_us: "The id is wrong, please check it.",
          zh_cn: "编号错误，请检查。",
          zh_tw: "編號錯誤，請檢查。",
        },
      };
    const {
      // id,
      // subKind,
      // version,
      // image,
      title,
      summary,
    } = brick;

    const subjectTextElement = createElement("div") as HTMLDivElement;
    subjectTextElement.id = `${PAGE_NAME}SubjectText`;
    subjectTextElement.innerHTML = getI18nInnerHTML(title);
    pageSubjectElement.appendChild(subjectTextElement);

    pageSummaryElement.id = `${PAGE_NAME}Summary`;
    pageSummaryElement.innerHTML = getI18nInnerHTML(summary);

    mainContentElement.id = `${PAGE_NAME}MainContent`;
    feedbackElement.id = `${PAGE_NAME}Feedback`;
  }

  private appendRegionSubjects(
    previewRegionElement: HTMLDivElement,
    configRegionElement: HTMLDivElement,
  ) {
    const { PAGE_NAME } = this;
    const previewRegionSubjectElement = createElement("div") as HTMLDivElement;
    const configRegionSubjectElement = createElement("div") as HTMLDivElement;

    previewRegionSubjectElement.className = `${PAGE_NAME}MainContentSubject`;
    configRegionSubjectElement.className = `${PAGE_NAME}MainContentSubject`;

    previewRegionSubjectElement.innerHTML = getI18nInnerHTML({
      en_us: "Preivew",
      zh_cn: "预览",
      zh_tw: "預覽",
    });
    configRegionSubjectElement.innerHTML = getI18nInnerHTML({
      en_us: "Config",
      zh_cn: "设置",
      zh_tw: "設置",
    });

    previewRegionElement.appendChild(previewRegionSubjectElement);
    configRegionElement.appendChild(configRegionSubjectElement);
  }

  private downloadAreaElement = createElement("div") as HTMLDivElement;
  private shareAreaElement = createElement("div") as HTMLDivElement;
  private sponsorElement = createElement("img") as HTMLImageElement;
  private wechatShareElement = createElement("img") as HTMLImageElement;

  private previewIframe = createElement("iframe") as HTMLIFrameElement;

  private previewRegionElement = createElement("div") as HTMLDivElement;
  private configRegionElement = createElement("div") as HTMLDivElement;
  private configCoreWrapElement = createElement("div") as HTMLDivElement;
  private configCoreToolbarElement = createElement("div") as HTMLDivElement;

  private appendPreviewRegionOtherElements() {
    // const previewIframe = createElement('iframe') as HTMLIFrameElement;

    const { PAGE_NAME, previewIframe, previewRegionElement } = this;
    previewIframe.id = `${PAGE_NAME}Iframe`;
    previewIframe.src = `?go=report`;
    previewIframe.setAttribute("frameBorder", "0");
    previewRegionElement.appendChild(previewIframe);
    getChangeLangNotifyArrayOfCurrentPage().push((lang: Language) => {
      previewIframe.contentWindow?.postMessage({
        command: "changeLang",
        data: {
          lang,
        },
      }, "*");
    });

    const buildFirst = () => {
      this.reporterPageInited = true;

      const brickCore = (window as unknown as { brickCore: IBrickCore })
        .brickCore as IBrickCore;
      if (brickCore && this.brickCorePageInited) {
        brickCore.loadConfig();
        // brickCore.build();
      }
    };

    (previewIframe as unknown as { onload: () => void }).onload =
      (previewIframe as unknown as { onreadystatechange: () => void })
        .onreadystatechange = function () {
          const { readyState } = this as unknown as { readyState?: string };
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

    const toolbarElement = createElement("div") as HTMLDivElement;
    toolbarElement.id = `${PAGE_NAME}Toolbar`;
    previewRegionElement.appendChild(toolbarElement);

    const imageUrlPrefix = `${SITE_IMAGE_PATH}3brick/`;
    const toolbarItemI18nArray = [
      {
        en_us: "download",
        zh_cn: "下载",
        zh_tw: "下載",
      },
      {
        en_us: "print",
        zh_cn: "打印",
        zh_tw: "列印",
      },
      {
        en_us: "share",
        zh_cn: "分享",
        zh_tw: "分享",
      },
      {
        en_us: "sponsor",
        zh_cn: "赞助",
        zh_tw: "贊助",
      },
    ];
    "download,print,share,sponsor".split(",").forEach(
      (name: string, index: number) => {
        const spanElement = createElement("span") as HTMLSpanElement;
        spanElement.className = `${PAGE_NAME}ToolbarItem`;

        const imageSrc = `${imageUrlPrefix}${name}.png`;
        const imageElement = createElement("img") as HTMLImageElement;
        imageElement.className = `${PAGE_NAME}ToolbarItemImage`;
        imageElement.src = imageSrc;
        imageElement.alt = imageSrc;

        const textElement = createElement("span") as HTMLSpanElement;
        textElement.className = `${PAGE_NAME}ToolbarItemText`;
        textElement.innerHTML = getI18nInnerHTML(toolbarItemI18nArray[index]);

        spanElement.appendChild(imageElement);
        spanElement.appendChild(textElement);
        toolbarElement.appendChild(spanElement);

        spanElement.onclick = (event: Event) => {
          this.emit(name);
          return stopEventBubble(event);
        };
      },
    );
  }

  private appendConfigRegionOtherElements() {
    const {
      PAGE_NAME,
      configRegionElement,
      configCoreWrapElement,
      configCoreToolbarElement,
      appendConfigToolbar,
    } = this;
    const configCoreElement = createElement("div") as HTMLDivElement;

    configCoreWrapElement.id = `${PAGE_NAME}ConfigCoreWrap`;
    configCoreElement.id = `${PAGE_NAME}ConfigCore`;
    configCoreToolbarElement.id = `${PAGE_NAME}ConfigCoreToolbar`;

    configRegionElement.setAttribute(ID_PROPERTY, PAGE_ID.toString());

    appendConfigToolbar("Build", "build", {
      en_us: "Build",
      zh_cn: "生成",
      zh_tw: "生成",
    });
    // appendConfigToolbar('LoadConfig', 'loadConfig', {
    // 	en_us: 'Load Config',
    // 	zh_cn: '加载配置',
    // 	zh_tw: '加載配置',
    // });
    // appendConfigToolbar('SaveConfig', 'saveConfig', {
    // 	en_us: 'Save Config',
    // 	zh_cn: '保存配置',
    // 	zh_tw: '保存配置',
    // });
    appendConfigToolbar("LoadDefaultConfig", "loadDefaultConfig", {
      en_us: "Use Default",
      zh_cn: "还原",
      zh_tw: "還原",
    });
    appendConfigToolbar("LoadConfigFromLocal", "loadConfigFromLocal", {
      en_us: "Load",
      zh_cn: "加载",
      zh_tw: "加載",
    });
    appendConfigToolbar("SaveConfigToLocal", "saveConfigToLocal", {
      en_us: "Save",
      zh_cn: "保存",
      zh_tw: "保存",
    });

    configRegionElement.appendChild(configCoreWrapElement);

    configCoreWrapElement.appendChild(configCoreElement);
    configCoreWrapElement.appendChild(configCoreToolbarElement);
  }

  private appendConfigToolbar = (
    idPostfix: string,
    eventName: string,
    i18n: I18nable,
  ) => {
    const { PAGE_NAME, configCoreToolbarElement } = this;
    const buildElement = createElement("span") as HTMLSpanElement;
    buildElement.id = `${PAGE_NAME}${idPostfix}`;
    buildElement.className = "moreButton primary";
    buildElement.innerHTML = getI18nInnerHTML(i18n);
    buildElement.onclick = (event: Event) => {
      this.emit(eventName);
      return stopEventBubble(event);
    };
    configCoreToolbarElement.appendChild(buildElement);
  };

  private fileReaderElement = createElement("input") as HTMLInputElement;
  private emit(eventName: string) {
    const core = (window as unknown as { brickCore: IBrickCore })
      .brickCore as IBrickCore;
    switch (eventName) {
      case "download":
        core.download();
        break;
      case "print":
        // core.print();
        // (this.previewIframe as unknown as {window: { print: () =>void}}).window.print();
        this.previewIframe.contentWindow?.postMessage({
          command: "print",
          data: {},
        }, "*");
        break;
      case "share":
        // const url = encodeURI(window.location.href);
        // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
        const wechatShareImageSrc =
          `${SITE_IMAGE_PATH}${ACTUAL_PAGE_NAME}/${PAGE_ID}.png`;

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
        const blob = new Blob([JSON.stringify(core.getData())], {
          type: "application/json",
        });
        const configFilename = `edu.sonya.cc_brick_${PAGE_ID}_${
          convertDateToYYYYMMDD_hhmmss(new Date())
        }.config`;

        if ("msSaveOrOpenBlob" in navigator) {
          (window.navigator as unknown as {
            msSaveOrOpenBlob: (blob: Blob, configName: string) => void;
          }).msSaveOrOpenBlob(blob, configFilename);
        } else {
          const url = window.URL.createObjectURL(blob);
          const link = createElement("a") as HTMLAnchorElement;
          link.href = url;
          link.setAttribute("download", configFilename);
          link.click();
        }
        break;
      default:
        break;
    }
  }

  private brickCorePageInited = false;
  private reporterPageInited = false;

  private loadScript = (PAGE_NAME: string) => {
    const version = (bricks.filter(({ id }) => id === PAGE_ID)[0] || {
      version: "unknown",
    }).version;

    const scriptElement = createElement("script") as HTMLScriptElement;
    scriptElement.id = `${PAGE_NAME}CoreScript`;
    scriptElement.setAttribute("charset", "utf-8");
    // scriptElement.setAttribute('src', `js/brick/${PAGE_ID}.js`);
    scriptElement.setAttribute("src", `js/brick/${PAGE_ID}.js?${version}`);
    getHeadElement().appendChild(scriptElement);

    const initCore = () => {
      this.brickCorePageInited = true;

      const brickCore = (window as unknown as { brickCore: IBrickCore })
        .brickCore as IBrickCore;
      // (brickCore as any).init();
      brickCore.init(this.configCoreWrapElement);
      // brickCore.loadConfig();
      // if(this.reporterPageInited) { brickCore.build(); }
      if (this.reporterPageInited) brickCore.loadConfig();
    };

    (scriptElement as unknown as { onload: () => void }).onload =
      (scriptElement as unknown as { onreadystatechange: () => void })
        .onreadystatechange = function () {
          const { readyState } = this as unknown as { readyState?: string };
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

  public init = () => {
    const loadConfigFromLocalCallback = (newData: object) => {
      const core = (window as unknown as { brickCore: IBrickCore })
        .brickCore as IBrickCore;
      core.setData(newData);
    };

    // https://www.cnblogs.com/gamedaybyday/p/9906542.html
    const { fileReaderElement } = this;
    fileReaderElement.type = "file";
    fileReaderElement.onchange = () => {
      if (!fileReaderElement.files) return;

      const selectedFile = fileReaderElement.files[0];
      const { name, size } = selectedFile;
      console.log("read file:", name, size);

      const reader = new FileReader();
      reader.readAsText(selectedFile);

      reader.onload = function () {
        const result = this.result as string;
        const object = JSON.parse(result);
        console.log(result, object);
        loadConfigFromLocalCallback(object);
      };
    };

    super.init();
  };
}

const brickPage = new BrickPage();
brickPage.init();
