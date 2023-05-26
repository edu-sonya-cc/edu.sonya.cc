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
export class BrickBase {
  brickBaseIdPrefix = "brickPageBase";
  reporterKindProperty = "unknown";
  download = () => {};
  print = () => {};
  updateOtherData = (newData) => {};
  initCoreElements = () => {};
  initOtherElements = () => {};
  onPageSizeChanged = (newPageSize) => {};
  getCss = () => this.computedData.css;
  getHtml = () => this.computedData.html;
  constructor(appendData, otherComputedData, newPageSizeArray = ["A3", "A4"]) {
    this.data = {
      ...this.data,
      ...appendData,
    };
    this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
    this.computedData = {
      ...this.computedData,
      ...otherComputedData,
    };
    newPageSizeArray.forEach((pageSize) => this.pageSizeArray.push(pageSize));
  }
  data = {
    paperSize: "A4",
    isLandscape: false,
    maxX: 200,
    maxY: 286,
    pageMarginTop: 5,
    pageMarginBottom: 5,
    pageMarginLeft: 5,
    pageMarginRight: 5,
  };
  DEFAULT_DATA_JSON = "";
  computedData = {
    title: {
      en: "",
      zh_cn: "",
      zh_tw: "",
    },
    css: "",
    html: "",
  };
  pageSizeArray = [];
  configCoreElement = getElementById("brickPageConfigCore");
  init = () => {
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
  getWrapElement = (strongI18n) => {
    const { configCoreElement } = this;
    const wrapElement = createElement("div");
    wrapElement.className = "brickPageConfigCoreOptionRowWrap";
    configCoreElement.appendChild(wrapElement);
    const strongElement = createElement("strong");
    strongElement.innerHTML = getI18nInnerHTML(strongI18n);
    wrapElement.appendChild(strongElement);
    return wrapElement;
  };
  onRadioOptionChanged = (propertyName, value) => {};
  initTextboxElement = (
    labelI18n,
    propertyName,
    textboxElement,
    wrapElement,
  ) => {
    if (labelI18n) {
      const label = createElement("label");
      label.innerHTML = getI18nInnerHTML(labelI18n);
      wrapElement.appendChild(label);
    }
    textboxElement.value = this.data[propertyName];
    textboxElement.type = "text";
    const onTextboxChanged = () => {
      // (this.data as any)[propertyName] = parseInt(textboxElement.value, 0);
      this.data[propertyName] = textboxElement.value;
      this.saveConfigAndBuildIfAllowed();
    };
    textboxElement.onchange = onTextboxChanged;
    textboxElement.onblur = onTextboxChanged;
    wrapElement.appendChild(textboxElement);
  };
  initTextareaElement = (
    labelI18n,
    propertyName,
    textareaElement,
    wrapElement,
  ) => {
    if (labelI18n) {
      const label = createElement("label");
      label.innerHTML = getI18nInnerHTML(labelI18n);
      wrapElement.appendChild(label);
    }
    textareaElement.value = this.data[propertyName];
    const onTextareaChanged = () => {
      this.data[propertyName] = parseInt(textareaElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    textareaElement.onchange = onTextareaChanged;
    textareaElement.onblur = onTextareaChanged;
    wrapElement.appendChild(textareaElement);
  };
  initRadioGroupByStringValue = (
    radiosInfoArray,
    propertyName,
    radioElementArray,
    wrapElement,
  ) => {
    const currentValue = this.data[propertyName];
    radiosInfoArray.forEach(({ value, i18nHtml }) => {
      const radioElement = createElement("input");
      radioElement.type = "radio";
      radioElement.name = propertyName;
      radioElement.value = value;
      if (currentValue === value) {
        radioElement.checked = true;
      }
      const spanElement = createElement("span");
      spanElement.innerHTML = i18nHtml;
      radioElement.onclick = () => {
        this.data[propertyName] = value;
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
  initRadioGroupWithLabelByStringValue = (
    radiosInfoArray,
    propertyName,
    radioElementArray,
    wrapLabelI18n,
  ) => {
    const wrapElement = this.getWrapElement(wrapLabelI18n);
    this.initRadioGroupByStringValue(
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    );
  };
  initRadioGroupByBooleanOrNumberValue = (
    radiosInfoArray,
    propertyName,
    radioElementArray,
    wrapElement,
  ) => {
    const currentValue = this.data[propertyName];
    radiosInfoArray.forEach(({ value, i18nHtml }) => {
      const radioElement = createElement("input");
      radioElement.type = "radio";
      radioElement.name = propertyName;
      radioElement.value = value.toString();
      if (currentValue === value) {
        radioElement.checked = true;
      }
      const spanElement = createElement("span");
      spanElement.innerHTML = i18nHtml;
      radioElement.onclick = () => {
        this.data[propertyName] = value;
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
  initRadioGroupWithLabelByBooleanOrNumberValue = (
    radiosInfoArray,
    propertyName,
    radioElementArray,
    wrapLabelI18n,
  ) => {
    const wrapElement = this.getWrapElement(wrapLabelI18n);
    this.initRadioGroupByBooleanOrNumberValue(
      radiosInfoArray,
      propertyName,
      radioElementArray,
      wrapElement,
    );
  };
  paperSizeRadioArray = [];
  initPaperSizeElements = (wrapElement) => {
    const { data: { paperSize }, paperSizeRadioArray, brickBaseIdPrefix } =
      this;
    const span = createElement("span");
    span.id = `${brickBaseIdPrefix}PaperSizeWrap`;
    wrapElement.appendChild(span);
    const labelElement = createElement("label");
    span.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Size:",
      zh_cn: "纸型：",
      zh_tw: "紙型：",
    });
    labelElement.setAttribute("for", "paperSize");
    this.pageSizeArray.forEach((paperSizeValue) => {
      const radioElement = createElement("input");
      radioElement.type = "radio";
      radioElement.value = paperSizeValue;
      radioElement.name = "paperSize";
      if (paperSize === paperSizeValue) {
        radioElement.checked = true;
      }
      const spanElement = createElement("span");
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
  isLandscapeRadioArray = [];
  initIsLandscapeElements = (wrapElement) => {
    const { data: { isLandscape }, isLandscapeRadioArray, brickBaseIdPrefix } =
      this;
    const span = createElement("span");
    span.id = `${brickBaseIdPrefix}PaperDirectionWrap`;
    wrapElement.appendChild(span);
    const labelElement = createElement("label");
    span.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Orientation:",
      zh_cn: "方向：",
      zh_tw: "方向：",
    });
    labelElement.setAttribute("for", "isLandscape");
    [true, false].forEach((isLandscapeValue) => {
      const radioElement = createElement("input");
      radioElement.type = "radio";
      radioElement.name = "isLandscape";
      radioElement.value = isLandscapeValue.toString();
      if (isLandscape === isLandscapeValue) {
        radioElement.checked = true;
      }
      const spanElement = createElement("span");
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
  pageMarginTopElement = createElement("input");
  initPageMarginTopElements = (wrapElement) => {
    const { data: { pageMarginTop }, pageMarginTopElement } = this;
    const labelElement = createElement("label");
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
  pageMarginBottomElement = createElement("input");
  initPageMarginBottomElements = (wrapElement) => {
    const { data: { pageMarginBottom }, pageMarginBottomElement } = this;
    const labelElement = createElement("label");
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
  pageMarginLeftElement = createElement("input");
  initPageMarginLeftElements = (wrapElement) => {
    const { data: { pageMarginLeft }, pageMarginLeftElement } = this;
    const labelElement = createElement("label");
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
  pageMarginRightElement = createElement("input");
  initPageMarginRightElements = (wrapElement) => {
    const { data: { pageMarginRight }, pageMarginRightElement } = this;
    const labelElement = createElement("label");
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
  build = () => {
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
    getElementById("brickPageIframe").contentWindow?.postMessage({
      command: "changePaperSize",
      data: {
        paperSize,
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
    const titleElement = getTitleElement();
    titleElement.i18n = title;
    titleElement.innerHTML = title[getCurrentLang()];
    const { getHtml, getCss } = this;
    const html = getHtml();
    const css = getCss();
    // https://blog.csdn.net/idomyway/article/details/86309348
    // frame.contentWindow. postMessage (data, '*');
    // data: string，boolean，number，array，object
    getElementById("brickPageIframe").contentWindow?.postMessage({
      command: "build",
      data: {
        title,
        html,
        css,
      },
    }, "*");
    this.saveConfig();
  };
  mmToPxScale = 0;
  pxToMmScale = 0;
  loadConfig = () => {
    const currentConfig = getCurrentPageLocalStorage();
    if (currentConfig.length === 0) {
      this.loadDefaultConfig();
      return;
    }
    this.updateData(JSON.parse(currentConfig));
  };
  saveConfig = () => {
    setCurrentPageLocalStorage(JSON.stringify(this.data));
  };
  loadDefaultConfig = () => {
    this.updateData(JSON.parse(this.DEFAULT_DATA_JSON));
  };
  getData = () => {
    return this.data;
  };
  setData = (newData) => {
    this.updateData(newData);
  };
  buildAfterChangeParameter = true;
  saveConfigAndBuildIfAllowed = () => {
    if (!this.buildAfterChangeParameter) {
      return;
    }
    this.saveConfig();
    this.build();
  };
  updateData = (newData) => {
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
    paperSizeRadioArray.forEach((element) => {
      element.checked = element.value === paperSize;
    });
    isLandscapeRadioArray.forEach((element) => {
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
  getAutomaticPaginationHtmlFromChildList = (
    list,
    MAX_X,
    MAX_Y,
    pageClass = "",
  ) => {
    if (list.length === 0) {
      return "";
    }
    let html = pageClass.length ? `<page class="${pageClass}">` : "<page>";
    let usedX = 0;
    let usedY = 0;
    let currentRowHeight = 0;
    list.forEach((child) => {
      let WIDTH = 0, HEIGHT = 0;
      if (child instanceof SVGElement) {
        WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
        HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
      } else {
        const style = child.getAttribute("style");
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
  appendAutomaticPaginationControls = (wrapper, list, MAX_X, MAX_Y) => {
    if (list.length === 0) {
      return;
    }
    let page = createElement("page");
    wrapper.appendChild(page);
    // let html = '<page>';
    let usedX = 0;
    let usedY = 0;
    let currentRowHeight = 0;
    list.forEach((child) => {
      let WIDTH = 0, HEIGHT = 0;
      if (child instanceof SVGElement) {
        WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
        HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
      } else {
        const style = child.getAttribute("style");
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
        page = createElement("page");
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
  formatDecile = (length) => Math.round(length * 10) / 10;
  formatCentile = (length) => Math.round(length * 100) / 100;
  formatMillimeter = (length) => Math.round(length * 1000) / 1000;
}
