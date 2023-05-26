// import { IBrickCore } from '../actualPage/IBrickCore';
// import { global } from '../global';
// import { REPORT_KIND_PROPERTY } from '../const';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom';
// import { getCurrentLang, getCurrentPageLocalStorage, getChangeLangNotifyArrayOfCurrentPage, setCurrentPageLocalStorage, updateUIByCurrentLang } from '../storage';
// import { DPIHelper } from '../DPIHelper';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />

export abstract class BrickBase implements IBrickCore {
  public abstract loadConfigFromLocal(): void;

  protected brickBaseIdPrefix = "brickPageBase";
  protected reporterKindProperty = "unknown";

  public download = (): void => {};
  public print = (): void => {};

  public download2PDF = (
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
  ): void => {
    let {
      data: {
        paperSize,
        isLandscape,

        // maxX,
        // maxY,

        pageMarginTop,
        pageMarginBottom,

        pageMarginLeft,
        pageMarginRight,
      },
      computedData: {
        css,
        html,
      },
    } = this;

    const title = this.computedData.title[getCurrentLang()];

    const headElement = getHeadElement();
    const body = getBodyElement();

    const styleElement = createElement("style") as HTMLStyleElement;
    // styleElement.id = `reporterStyle`;
    headElement.appendChild(styleElement);
    // styleElement.innerHTML = css;
    styleElement.innerHTML = css.concat(
      "header,footer,#brickPageMain{display:none;}",
    );

    const reportHtmlElement = createElement("div") as HTMLDivElement;
    body.appendChild(reportHtmlElement);
    reportHtmlElement.innerHTML = html;

    const printableList = reportHtmlElement.childNodes;
    const count = printableList.length;
    const printableArray: Array<HTMLElement> = [];
    for (let index = 0; index < count; ++index) {
      // for(let index = 0; index < 1; ++index){
      const printableElement = printableList[index];
      printableArray.push(printableElement);
    }

    let IMAGE_WIDTH = 210;
    let IMAGE_HEIGHT = 297;
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

    const pdfPageData: Array<{ // 将当前页面的数据存入pageData数组
      img: any;
      width: number;
      height: number;
    }> = [];
    function addPdfPage(printableArray: Array<HTMLElement>) {
      const scale = 1;
      const page = new Promise(function (resolve, reject) {
        printableArray.forEach((copyDom: HTMLElement, index: number) => {
          const pageElement = copyDom;
          const rect = pageElement.getBoundingClientRect();
          // const width = rect.width;
          // const height = rect.height;
          const width = pageElement.offsetWidth;
          const height = pageElement.offsetHeight;
          const canvas = document.createElement("canvas");
          canvas.setAttribute("class", "canvas-pdf");
          canvas.setAttribute("id", "canvas".concat(index.toString()));
          canvas.width = width * scale;
          canvas.height = height * scale;
          body.appendChild(canvas);
          const content = canvas.getContext("2d") as CanvasRenderingContext2D;
          content.scale(1, 1);
          // copyDom.innerHTML = '<span style="position:absolute;left:40px;top:40px;width:100px;height:10px;display:block;font-size:12px;text-align:center;">test</span>';
          html2canvas(copyDom, {
            dpi: window.devicePixelRatio,
            scale: 1,
            canvas: canvas,
            width: width,
            heigth: height,
          }).then(function (canvas) {
            // const contentWidth = canvas.width;
            // const contentHeight = canvas.height;
            // const imgWidth = IMAGE_WIDTH;
            // const imgHeight = IMAGE_WIDTH / contentWidth * contentHeight;

            const imgWidth = IMAGE_WIDTH - (pageMarginLeft + pageMarginRight);
            const imgHeight = IMAGE_HEIGHT - (pageMarginTop + pageMarginBottom); // IMAGE_WIDTH / contentWidth * contentHeight;
            pdfPageData.push({
              img: canvas.toDataURL("image/jpeg", 1.0),
              width: imgWidth,
              height: imgHeight,
            });

            if (pdfPageData.length === count) {
              resolve();
            }
          });
        });
      });
      return page;
    }

    const pdf = new (window as any).jsPDF(
      isLandscape ? "landscape" : "portrait",
      "mm",
      paperSize.toLocaleLowerCase(),
    );
    const PDF_IMAGE_IMAGE_EXTENSTION = "JPEG";
    pdfPageData.length = 0;
    addPdfPage(printableArray).then(function () {
      pdfPageData.forEach((pageData, pageIndex: number) => {
        if (pageIndex > 0) pdf.addPage();

        const { img, width, height } = pageData;
        const left = pageMarginLeft;
        // const top = pageMarginTop + IMAGE_HEIGHT * pageIndex;
        const top = pageMarginTop;
        // console.log('pdf.addImage', JSON.stringify({left, top, width, height, pageIndex}));
        pdf.addImage(img, PDF_IMAGE_IMAGE_EXTENSTION, left, top, width, height);
      });
      pdf.save(title.concat(".pdf"));
      printableArray.forEach((_printableElement, index) => {
        (document as any).getElementById("canvas".concat(index.toString()))
          .remove();
      });

      styleElement.remove();
      reportHtmlElement.remove();
    });
  };

  protected abstract countDataAndComputedData(): void;

  protected updateOtherData = (newData: any): void => {};

  protected initCoreElements = (): void => {};
  protected initOtherElements = (): void => {};

  protected onPageSizeChanged = (newPageSize: string): void => {};

  protected getCss = (): string => this.computedData.css;
  protected getHtml = (): string => this.computedData.html;

  constructor(
    appendData: object,
    otherComputedData: object,
    newPageSizeArray: Array<string> = ["A3", "A4"],
  ) {
    this.data = {
      ...this.data,
      ...appendData,
    };

    this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
    this.computedData = {
      ...this.computedData,
      ...otherComputedData,
    };

    newPageSizeArray.forEach((pageSize: string) =>
      this.pageSizeArray.push(pageSize)
    );
  }

  protected data = {
    paperSize: "A4",
    isLandscape: false,

    maxX: 200,
    maxY: 286,

    pageMarginTop: 5,
    pageMarginBottom: 5,

    pageMarginLeft: 5,
    pageMarginRight: 5,
  };
  protected DEFAULT_DATA_JSON = "";
  protected computedData = {
    title: {
      en: "",
      zh_cn: "",
      zh_tw: "",
    },
    css: "",
    html: "",
  };

  protected pageSizeArray: Array<string> = [];

  protected configCoreElement = getElementById(
    "brickPageConfigCore",
  ) as HTMLDivElement;

  public init = (): void => {
    // // Reget it.
    // this.configCoreElement = getElementById('brickPageConfigCore') as HTMLDivElement;

    const { configCoreElement, brickBaseIdPrefix } = this;
    configCoreElement.setAttribute(
      REPORT_KIND_PROPERTY,
      this.reporterKindProperty,
    );
    // const lang = getCurrentLang();

    const { getWrapElement } = this;
    let wrapElement = getWrapElement({
      en: "Paper",
      zh_cn: "纸张",
      zh_tw: "紙張",
    });
    wrapElement.id = `${brickBaseIdPrefix}PaperSizeOrDirectionWrap`;
    this.initPaperSizeElements(wrapElement);
    this.initIsLandscapeElements(wrapElement);

    wrapElement = getWrapElement({
      en: "Margin of page",
      zh_cn: "页边距",
      zh_tw: "頁邊距",
    });
    wrapElement.id = `${brickBaseIdPrefix}PaperMaginWrap`;
    this.initPageMarginTopElements(wrapElement);
    this.initPageMarginBottomElements(wrapElement);
    this.initPageMarginLeftElements(wrapElement);
    this.initPageMarginRightElements(wrapElement);

    this.initCoreElements();
    this.initOtherElements();

    global.bindChangeLangEventForI18nElements();
    updateUIByCurrentLang();

    getChangeLangNotifyArrayOfCurrentPage().push(() => this.build());
  };

  protected getWrapElement = (strongI18n: I18nable): HTMLDivElement => {
    const { configCoreElement } = this;

    const wrapElement = createElement("div") as HTMLDivElement;
    wrapElement.className = "brickPageConfigCoreOptionRowWrap";
    configCoreElement.appendChild(wrapElement);

    const strongElement = createElement("strong") as HTMLElement;
    strongElement.innerHTML = getI18nInnerHTML(strongI18n);
    wrapElement.appendChild(strongElement);

    return wrapElement;
  };

  protected onRadioOptionChanged = (
    propertyName: string,
    value: string | boolean | number,
  ) => {};

  protected initTextboxElement = (
    labelI18n: I18nable | null,
    propertyName: string,
    textboxElement: HTMLInputElement,
    wrapElement: HTMLDivElement,
  ): void => {
    if (labelI18n) {
      const label = createElement("label") as HTMLLabelElement;
      label.innerHTML = getI18nInnerHTML(labelI18n);
      wrapElement.appendChild(label);
    }

    textboxElement.value = (this.data as any)[propertyName];
    textboxElement.type = "text";
    const onTextboxChanged = () => {
      // (this.data as any)[propertyName] = parseInt(textboxElement.value, 0);
      (this.data as any)[propertyName] = textboxElement.value;
      this.saveConfigAndBuildIfAllowed();
    };
    textboxElement.onchange = onTextboxChanged;
    textboxElement.onblur = onTextboxChanged;

    wrapElement.appendChild(textboxElement);
  };

  protected initTextareaElement = (
    labelI18n: I18nable | null,
    propertyName: string,
    textareaElement: HTMLTextAreaElement,
    wrapElement: HTMLDivElement,
  ): void => {
    if (labelI18n) {
      const label = createElement("label") as HTMLLabelElement;
      label.innerHTML = getI18nInnerHTML(labelI18n);
      wrapElement.appendChild(label);
    }

    textareaElement.value = (this.data as any)[propertyName];
    const onTextareaChanged = () => {
      (this.data as any)[propertyName] = parseInt(textareaElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    textareaElement.onchange = onTextareaChanged;
    textareaElement.onblur = onTextareaChanged;

    wrapElement.appendChild(textareaElement);
  };

  protected initRadioGroupByStringValue = (
    radiosInfoArray: { value: string; i18nHtml: string }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapElement: HTMLDivElement,
  ): void => {
    const currentValue = (this.data as any)[propertyName];

    radiosInfoArray.forEach(({ value, i18nHtml }): void => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = propertyName;
      radioElement.value = value;
      if (currentValue === value) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
      spanElement.innerHTML = i18nHtml;

      radioElement.onclick = () => {
        (this.data as any)[propertyName] = value;
        this.onRadioOptionChanged(propertyName, value);
        this.saveConfigAndBuildIfAllowed();
      };
      spanElement.onclick = () => {
        radioElement.click();
      };

      wrapElement.appendChild(radioElement);
      wrapElement.appendChild(spanElement);

      radioElementArray.push(radioElement);
    });
  };

  protected initRadioGroupWithLabelByStringValue = (
    radiosInfoArray: { value: string; i18nHtml: string }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapLabelI18n: I18nable,
  ): void => {
    const wrapElement = this.getWrapElement(wrapLabelI18n);
    this.initRadioGroupByStringValue(
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    );
  };

  protected initRadioGroupByBooleanOrNumberValue = (
    radiosInfoArray: { value: boolean | number; i18nHtml: string }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapElement: HTMLDivElement,
  ): void => {
    const currentValue = (this.data as any)[propertyName];

    radiosInfoArray.forEach(({ value, i18nHtml }): void => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = propertyName;
      radioElement.value = value.toString();
      if (currentValue === value) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
      spanElement.innerHTML = i18nHtml;

      radioElement.onclick = () => {
        (this.data as any)[propertyName] = value;
        this.onRadioOptionChanged(propertyName, value);
        this.saveConfigAndBuildIfAllowed();
      };
      spanElement.onclick = () => {
        radioElement.click();
      };

      wrapElement.appendChild(radioElement);
      wrapElement.appendChild(spanElement);

      radioElementArray.push(radioElement);
    });
  };

  protected initRadioGroupWithLabelByBooleanOrNumberValue = (
    radiosInfoArray: { value: boolean | number; i18nHtml: string }[],
    propertyName: string,
    radioElementArray: HTMLInputElement[],
    wrapLabelI18n: I18nable,
  ): void => {
    const wrapElement = this.getWrapElement(wrapLabelI18n);
    this.initRadioGroupByBooleanOrNumberValue(
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    );
  };

  protected paperSizeRadioArray: Array<HTMLInputElement> = [];
  protected initPaperSizeElements = (wrapElement: HTMLDivElement): void => {
    const { data: { paperSize }, paperSizeRadioArray, brickBaseIdPrefix } =
      this;

    const span = createElement("span") as HTMLDivElement;
    span.id = `${brickBaseIdPrefix}PaperSizeWrap`;
    wrapElement.appendChild(span);

    const labelElement = createElement("label") as HTMLLabelElement;
    span.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Size:",
      zh_cn: "纸型：",
      zh_tw: "紙型：",
    });
    labelElement.setAttribute("for", "paperSize");
    this.pageSizeArray.forEach((paperSizeValue: string) => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.value = paperSizeValue;
      radioElement.name = "paperSize";
      if (paperSize === paperSizeValue) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
      spanElement.innerHTML = paperSizeValue;

      radioElement.onclick = () => {
        this.data.paperSize = paperSizeValue;
        this.onPageSizeChanged(paperSizeValue);
        this.saveConfigAndBuildIfAllowed();
      };
      spanElement.onclick = () => {
        radioElement.click();
      };

      span.appendChild(radioElement);
      span.appendChild(spanElement);

      paperSizeRadioArray.push(radioElement);
    });
  };

  protected isLandscapeRadioArray: Array<HTMLInputElement> = [];
  private initIsLandscapeElements = (wrapElement: HTMLDivElement): void => {
    const { data: { isLandscape }, isLandscapeRadioArray, brickBaseIdPrefix } =
      this;

    const span = createElement("span") as HTMLDivElement;
    span.id = `${brickBaseIdPrefix}PaperDirectionWrap`;
    wrapElement.appendChild(span);

    const labelElement = createElement("label") as HTMLLabelElement;
    span.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Orientation:",
      zh_cn: "方向：",
      zh_tw: "方向：",
    });
    labelElement.setAttribute("for", "isLandscape");
    [true, false].forEach((isLandscapeValue: boolean) => {
      const radioElement = createElement("input") as HTMLInputElement & {
        onclick: (event: Event) => void;
      };
      radioElement.type = "radio";
      radioElement.name = "isLandscape";
      radioElement.value = isLandscapeValue.toString();
      if (isLandscape === isLandscapeValue) {
        radioElement.checked = true;
      }

      const spanElement = createElement("span") as HTMLSpanElement;
      spanElement.innerHTML = getI18nInnerHTML(
        isLandscapeValue
          ? {
            en: "landscape",
            zh_cn: "横向",
            zh_tw: "橫向",
          }
          : {
            en: "portrait",
            zh_cn: "纵向",
            zh_tw: "縱向",
          },
      );

      radioElement.onclick = () => {
        this.data.isLandscape = isLandscapeValue;
        this.saveConfigAndBuildIfAllowed();
      };
      spanElement.onclick = () => {
        radioElement.click();
      };

      span.appendChild(radioElement);
      span.appendChild(spanElement);

      isLandscapeRadioArray.push(radioElement);
    });
  };

  protected pageMarginTopElement = createElement("input") as HTMLInputElement;
  private initPageMarginTopElements = (wrapElement: HTMLDivElement): void => {
    const { data: { pageMarginTop }, pageMarginTopElement } = this;

    const labelElement = createElement("label") as HTMLLabelElement;
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Top:",
      zh_cn: "上：",
      zh_tw: "上：",
    });

    pageMarginTopElement.value = pageMarginTop.toString();
    pageMarginTopElement.type = "number";
    pageMarginTopElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pageMarginTop = parseInt(pageMarginTopElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pageMarginTopElement.onchange = changeValue;
    pageMarginTopElement.onblur = changeValue;

    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pageMarginTopElement);
  };

  protected pageMarginBottomElement = createElement(
    "input",
  ) as HTMLInputElement;
  private initPageMarginBottomElements = (
    wrapElement: HTMLDivElement,
  ): void => {
    const { data: { pageMarginBottom }, pageMarginBottomElement } = this;

    const labelElement = createElement("label") as HTMLLabelElement;
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Bottom:",
      zh_cn: "下：",
      zh_tw: "下：",
    });

    pageMarginBottomElement.value = pageMarginBottom.toString();
    pageMarginBottomElement.type = "number";
    pageMarginBottomElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pageMarginBottom = parseInt(pageMarginBottomElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pageMarginBottomElement.onchange = changeValue;
    pageMarginBottomElement.onblur = changeValue;

    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pageMarginBottomElement);
  };

  protected pageMarginLeftElement = createElement("input") as HTMLInputElement;
  private initPageMarginLeftElements = (wrapElement: HTMLDivElement): void => {
    const { data: { pageMarginLeft }, pageMarginLeftElement } = this;

    const labelElement = createElement("label") as HTMLLabelElement;
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Left:",
      zh_cn: "左：",
      zh_tw: "左：",
    });

    pageMarginLeftElement.value = pageMarginLeft.toString();
    pageMarginLeftElement.type = "number";
    pageMarginLeftElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pageMarginLeft = parseInt(pageMarginLeftElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pageMarginLeftElement.onchange = changeValue;
    pageMarginLeftElement.onblur = changeValue;

    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pageMarginLeftElement);
  };

  protected pageMarginRightElement = createElement("input") as HTMLInputElement;
  private initPageMarginRightElements = (wrapElement: HTMLDivElement): void => {
    const { data: { pageMarginRight }, pageMarginRightElement } = this;

    const labelElement = createElement("label") as HTMLLabelElement;
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Right:",
      zh_cn: "右：",
      zh_tw: "右：",
    });

    pageMarginRightElement.value = pageMarginRight.toString();
    pageMarginRightElement.type = "number";
    pageMarginRightElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pageMarginRight = parseInt(pageMarginRightElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pageMarginRightElement.onchange = changeValue;
    pageMarginRightElement.onblur = changeValue;

    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pageMarginRightElement);
  };

  // public share = (): void => { };
  // public sponsor = (): void => { };
  public build = (): void => {
    let {
      data: {
        paperSize,
        isLandscape,

        maxX,
        maxY,

        pageMarginTop,
        pageMarginBottom,

        pageMarginLeft,
        pageMarginRight,
      },
    } = this;

    // TODO(@anqi) more paper size.
    const PAPER_WIDTH_A3 = 297;
    const PAPER_HEIGHT_A3 = 420;
    const PAPER_WIDTH_A4 = 210;
    const PAPER_HEIGHT_A4 = 297;

    // Uncaught DOMException: Failed to execute 'postMessage' on 'Window': #<Window> could not be cloned.
    (getElementById("brickPageIframe") as HTMLIFrameElement).contentWindow
      ?.postMessage({
        command: "changePaperSize",
        data: {
          paperSize,
          isLandscape,
          pageMarginTop,
          pageMarginLeft,
          // parent: window,
        },
      }, "*");

    let paperWidth = 0;
    let paperHeight = 0;
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

    const pageMarginHorizontal = pageMarginLeft + pageMarginRight;
    const pageMarginVertical = pageMarginTop + pageMarginBottom;
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
    } else {
      maxX = paperWidth - pageMarginHorizontal;
      maxY = paperHeight - pageMarginVertical;
    }

    this.data.maxX = maxX;
    this.data.maxY = maxY;

    const dpiHelper = new DPIHelper();
    this.pxToMmScale = dpiHelper.getPxToMmScale();
    this.mmToPxScale = dpiHelper.getMmToPxScale();

    this.countDataAndComputedData();

    const title = this.computedData.title;
    const titleElement = getTitleElement() as {
      i18n: I18nable;
      innerHTML: string;
    };
    titleElement.i18n = title;
    titleElement.innerHTML = title[getCurrentLang()];

    const { getHtml, getCss } = this;
    const html = getHtml();
    const css = getCss();

    // https://blog.csdn.net/idomyway/article/details/86309348
    // frame.contentWindow. postMessage (data, '*');
    // data: string，boolean，number，array，object
    (getElementById("brickPageIframe") as HTMLIFrameElement).contentWindow
      ?.postMessage({
        command: "build",
        data: {
          title,
          html,
          css,
        },
      }, "*");

    this.saveConfig();
  };

  protected mmToPxScale = 0;
  protected pxToMmScale = 0;

  public loadConfig = (): void => {
    const currentConfig = getCurrentPageLocalStorage();
    if (currentConfig.length === 0) {
      this.loadDefaultConfig();
      return;
    }

    this.updateData(JSON.parse(currentConfig));
  };
  public saveConfig = (): void => {
    setCurrentPageLocalStorage(JSON.stringify(this.data));
  };

  public loadDefaultConfig = (): void => {
    this.updateData(JSON.parse(this.DEFAULT_DATA_JSON));
  };

  public getData = (): object => {
    return this.data;
  };
  public setData = (newData: object): void => {
    this.updateData(newData);
  };

  protected readonly buildAfterChangeParameter = true;
  public saveConfigAndBuildIfAllowed = (): void => {
    if (!this.buildAfterChangeParameter) return;

    this.saveConfig();
    this.build();
  };

  protected updateData = (newData: any): void => {
    const {
      paperSize,
      isLandscape,
      // maxX,
      // maxY,
      pageMarginTop,
      pageMarginBottom,
      pageMarginLeft,
      pageMarginRight,
      diceKind,
    } = newData;

    const {
      paperSizeRadioArray,
      isLandscapeRadioArray,
      pageMarginTopElement,
      pageMarginBottomElement,
      pageMarginLeftElement,
      pageMarginRightElement,
    } = this;

    paperSizeRadioArray.forEach((element: HTMLInputElement) => {
      element.checked = element.value === paperSize;
    });
    isLandscapeRadioArray.forEach((element: HTMLInputElement) => {
      element.checked = element.value === isLandscape.toString();
    });
    pageMarginTopElement.value = pageMarginTop;
    pageMarginBottomElement.value = pageMarginBottom;

    pageMarginLeftElement.value = pageMarginLeft;
    pageMarginRightElement.value = pageMarginRight;

    this.data.paperSize = paperSize;
    this.data.isLandscape = isLandscape;

    // this.data.maxX = maxX;
    // this.data.maxY = maxY;
    this.data.pageMarginTop = pageMarginTop;
    this.data.pageMarginBottom = pageMarginBottom;

    this.data.pageMarginLeft = pageMarginLeft;
    this.data.pageMarginRight = pageMarginRight;

    this.updateOtherData(newData);

    this.build();
  };

  protected getAutomaticPaginationHtmlFromChildList = (
    list: Array<SVGElement | HTMLDivElement>,
    MAX_X: number,
    MAX_Y: number,
    pageClass: string = "",
  ): string => {
    if (list.length === 0) return "";

    let html = pageClass.length ? `<page class="${pageClass}">` : "<page>";
    let usedX = 0;
    let usedY = 0;
    let currentRowHeight = 0;

    list.forEach((child) => {
      let WIDTH = 0, HEIGHT = 0;
      if (child instanceof SVGElement) {
        WIDTH = parseFloat(
          (child.getAttribute("width") as string).replace("mm", ""),
        );
        HEIGHT = parseFloat(
          (child.getAttribute("height") as string).replace("mm", ""),
        );
      } else {
        const style = child.getAttribute("style") as string;
        if (style.indexOf("width:") > -1) {
          WIDTH = parseFloat(
            style.split("width:")[1].split(";")[0].replace("mm", ""),
          );
        }
        if (style.indexOf("height:") > -1) {
          HEIGHT = parseFloat(
            style.split("height:")[1].split(";")[0].replace("mm", ""),
          );
        }
      }

      let newPage = (usedY + HEIGHT > MAX_Y);
      let newRow = false;
      if (!newPage && usedX + WIDTH > MAX_X) {
        usedY += currentRowHeight;
        if (usedY + HEIGHT > MAX_Y) {
          newPage = true;
        } else {
          newRow = true;
        }
      }

      if (newPage) {
        html += "</page><page>";
        usedX = 0;
        usedY = 0;
        currentRowHeight = 0;
      } else if (newRow) {
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

  protected appendAutomaticPaginationControls = (
    wrapper: HTMLDivElement,
    list: Array<SVGElement | HTMLDivElement>,
    MAX_X: number,
    MAX_Y: number,
  ): void => {
    if (list.length === 0) return;

    let page = createElement(
      "page" as keyof HTMLElementTagNameMap,
    ) as HTMLDivElement;
    wrapper.appendChild(page);

    // let html = '<page>';
    let usedX = 0;
    let usedY = 0;
    let currentRowHeight = 0;

    list.forEach((child) => {
      let WIDTH = 0, HEIGHT = 0;
      if (child instanceof SVGElement) {
        WIDTH = parseFloat(
          (child.getAttribute("width") as string).replace("mm", ""),
        );
        HEIGHT = parseFloat(
          (child.getAttribute("height") as string).replace("mm", ""),
        );
      } else {
        const style = child.getAttribute("style") as string;
        if (style.indexOf("width:") > -1) {
          WIDTH = parseFloat(
            style.split("width:")[1].split(";")[0].replace("mm", ""),
          );
        }
        if (style.indexOf("height:") > -1) {
          HEIGHT = parseFloat(
            style.split("height:")[1].split(";")[0].replace("mm", ""),
          );
        }
      }

      let newPage = (usedY + HEIGHT > MAX_Y);
      let newRow = false;
      if (!newPage && usedX + WIDTH > MAX_X) {
        usedY += currentRowHeight;
        if (usedY + HEIGHT > MAX_Y) {
          newPage = true;
        } else {
          newRow = true;
        }
      }

      if (newPage) {
        // html += '</page><page>';
        page = createElement(
          "page" as keyof HTMLElementTagNameMap,
        ) as HTMLDivElement;
        wrapper.appendChild(page);

        usedX = 0;
        usedY = 0;
        currentRowHeight = 0;
      } else if (newRow) {
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
  protected formatDecile = (length: number): number =>
    Math.round(length * 10) / 10;
  protected formatCentile = (length: number): number =>
    Math.round(length * 100) / 100;
  protected formatMillimeter = (length: number): number =>
    Math.round(length * 1000) / 1000;
}

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
