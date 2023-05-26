"use strict";
// import { REPORT_KIND_PROPERTY } from '../const.ts';
// import { createElement, getI18nInnerHTML } from '../dom.ts';
// import { BrickBase } from './brickBase.ts';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/brickBase.d.ts' />
class PokerBase extends BrickBase {
  constructor(appendData, otherComputedData) {
    super({
      pokerWidth: 40,
      pokerHeight: 56,
      fontSize: "32px",
      backFontSize: "24px",
      pokerKind: 1,
      ...appendData,
    }, {
      backCover: "",
      count: 32,
      pokerCss: "",
      ...otherComputedData,
    });
  }
  countDataAndComputedData = () => {
    let {
      data: {
        paperSize,
        isLandscape,
        maxX: MAX_X,
        maxY: MAX_Y,
        pokerWidth,
        pokerHeight,
        pageMarginTop,
        // pageMarginBottom,
        pageMarginLeft,
        // pageMarginRight,
        pokerWidth: CARD_WIDTH,
        pokerHeight: CARD_HEIGHT,
        fontSize,
        backFontSize,
        pokerKind,
      },
    } = this;
    const ROW_COUNT = Math.floor(MAX_Y / pokerHeight);
    const COLUMN_COUNT = Math.floor(MAX_X / pokerWidth);
    const COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;
    this.countPokerDataAndComputedData(pokerKind, COUNT_PER_PAGE);
    const { getForePageHtml, getBackPageHtml } = this;
    this.computedData.html = getForePageHtml().concat(getBackPageHtml());
    this.computedData.css = `/* common.css */
    * { margin:0;border:0;padding:0; }
    * { box-sizing:border-box; }

    /* landscape 横向 portrait 纵向*/ 
    @media print { @page { size: ${paperSize} ${
      isLandscape ? "landscape" : "portrait"
    }; } }
    page:not(page:last-child){page-break-after:always;}

    page { width:${MAX_X}mm;height:${MAX_Y}mm; margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm;}
    page { display:block;overflow:hidden; }

    page { font-weight:bolder;dominant-baseline:middle;text-anchor:start; }

    page.forePage{font-family:'Times New Roman', 'KaiTi';font-size:${fontSize};}
    page.backPage{font-family:'Times New Roman', 'KaiTi';font-size:${backFontSize};}
    
    /* page > row > cell > top/bottom/center > text.top-left/.top-right/.bottom-left/.bottom-right */
    /* top > text.top-left/.top-right */
    /* bottom > text.bottom-left/.bottom-right */
    /* center >  */
    row {display:flex;width:auto;height:${CARD_HEIGHT}mm;}
    cell {width:${CARD_WIDTH}mm;height:${CARD_HEIGHT}mm;border-radius:${CARD_WIDTH *
      3 / 40}mm;border:1px solid #aaaaaa;overflow:hidden;}
    cell{display:inline-flex;flex-direction:column;justify-content:space-between;}
    top,bottom{display:flex;justify-content:space-between;align-items:center;}
    center {flex:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}
    text{display:block;vertical-align:center;}

    .top-left, .bottom-right{padding-left:${CARD_WIDTH * 3 / 40}mm;}
    .top-right, .bottom-left{padding-right:${CARD_WIDTH * 3 / 40}mm;}

    bottom {
      transform:rotate(180deg);
      -ms-transform:rotate(180deg); 	/* IE 9 */
      -moz-transform:rotate(180deg); 	/* Firefox */
      -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
      -o-transform:rotate(180deg); 	/* Opera */ 
      
      transform-origin:center center;
      -ms-transform-origin:center center;
      -moz-transform-origin:center center;
      -webkit-transform-origin:center center;
      -o-transform-origin:center center;
    }
    
    /* https://blog.csdn.net/scotfield_msn/article/details/52564829 */
    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */
    /* 黑/红/橙/黄/绿/青/蓝/紫/粉/淡绿/	*/
    /* 黑/紅/橙/黃/綠/青/藍/紫/粉/淡綠/	*/
    /*
      [edu-color="1"] {color:#000000;}
      [edu-color="2"] {color:#FF0000;}
      [edu-color="3"] {color:#FF7F00;}
      [edu-color="4"] {color:#FFFF00;}
      [edu-color="5"] {color:#00FF00;}
      [edu-color="6"] {color:#00FFFF;}
      [edu-color="7"] {color:#0000FF;}
      [edu-color="8"] {color:#8B00FF;}
      [edu-color="9"] {color:#F19EC2;}
      [edu-color="10"]{color:#6B8E23;}
    */
    /* [edu-color="3"] {color:#FFFF00;} 黄色 黃色 yellow */
    
    [edu-color="1"] {color:#000000;} /* 黑色 黑色 black */
    [edu-color="2"] {color:#FF0000;} /* 红色 紅色 red */
    [edu-color="3"] {color:#0000FF;} /* 蓝色 藍色 blue */
    [edu-color="4"] {color:#CCCC00;} /* 黄 黃 yellow */
    [edu-color="5"] {color:#00FF00;} /* 绿色 綠色 green */
    [edu-color="6"] {color:#00FFFF;} /* 青色 青色 cyan */
    [edu-color="7"] {color:#8B00FF;} /* 紫色 紫色 purple */
    [edu-color="8"] {color:#F19EC2;} /* 粉红 粉紅 pink */
    [edu-color="9"] {color:#6B8E23;} /* 淡绿 淡綠 light green */
    [edu-color="10"]{color:#FF7F00;} /* 橙色 橙色 orange */
    
    [edu-color="-1"] {color:#DDDDDD;}
    `.concat(this.computedData.pokerCss);
  };
  updateOtherDataOfPoker = (_newData) => {};
  initCoreElements = () => {
    const { configCoreElement } = this;
    configCoreElement.setAttribute(REPORT_KIND_PROPERTY, "poker");
    // const lang = getCurrentLang();
    const { getWrapElement } = this;
    let wrapElement = getWrapElement({
      en: "Poker size",
      zh_cn: "扑克尺寸",
      zh_tw: "撲克尺寸",
    });
    this.initPokerWidthElements(wrapElement);
    this.initPokerHeightElements(wrapElement);
    this.appendPokerSizeButtons(wrapElement);
    wrapElement = getWrapElement({
      en: "Font size",
      zh_cn: "字号",
      zh_tw: "字型大小",
    });
    this.initFontSizeElements(wrapElement);
    this.initBackFontSizeElements(wrapElement);
    wrapElement = getWrapElement({
      en: "Poker Kind",
      zh_cn: "扑克类型",
      zh_tw: "撲克類型",
    });
    this.initPokerKindElements(wrapElement);
  };
  onPageSizeChanged = (newPageSize) => {
    switch (newPageSize) {
      case "A3":
        this.data.pokerWidth = 48;
        this.data.pokerHeight = 68;
        break;
      case "A4":
        this.data.pokerWidth = 40;
        this.data.pokerHeight = 56;
        break;
      default:
        break;
    }
    this.pokerWidthElement.value = this.data.pokerWidth.toString();
    this.pokerHeightElement.value = this.data.pokerHeight.toString();
  };
  pokerWidthElement = createElement("input");
  initPokerWidthElements = (wrapElement) => {
    const { data: { pokerWidth }, pokerWidthElement } = this;
    const labelElement = createElement("label");
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Width:",
      zh_cn: "宽：",
      zh_tw: "寬：",
    });
    pokerWidthElement.value = pokerWidth.toString();
    pokerWidthElement.type = "number";
    pokerWidthElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pokerWidth = parseInt(pokerWidthElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pokerWidthElement.onchange = changeValue;
    pokerWidthElement.onblur = changeValue;
    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pokerWidthElement);
  };
  pokerHeightElement = createElement("input");
  initPokerHeightElements = (wrapElement) => {
    const { data: { pokerHeight }, pokerHeightElement } = this;
    const labelElement = createElement("label");
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Height:",
      zh_cn: "高：",
      zh_tw: "高：",
    });
    pokerHeightElement.value = pokerHeight.toString();
    pokerHeightElement.type = "number";
    pokerHeightElement.setAttribute("min", "0");
    const changeValue = () => {
      this.data.pokerHeight = parseInt(pokerHeightElement.value, 0);
      this.saveConfigAndBuildIfAllowed();
    };
    pokerHeightElement.onchange = changeValue;
    pokerHeightElement.onblur = changeValue;
    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(pokerHeightElement);
  };
  fontSizeElement = createElement("input");
  initFontSizeElements = (wrapElement) => {
    const { data: { fontSize }, fontSizeElement } = this;
    const labelElement = createElement("label");
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Front:",
      zh_cn: "正面：",
      zh_tw: "正面：",
    });
    fontSizeElement.type = "text";
    fontSizeElement.value = fontSize;
    const changeValue = () => {
      this.data.fontSize = fontSizeElement.value;
      this.saveConfigAndBuildIfAllowed();
    };
    fontSizeElement.onchange = changeValue;
    fontSizeElement.onblur = changeValue;
    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(fontSizeElement);
  };
  backFontSizeElement = createElement("input");
  initBackFontSizeElements = (wrapElement) => {
    const { data: { backFontSize }, backFontSizeElement } = this;
    const labelElement = createElement("label");
    wrapElement.appendChild(labelElement);
    labelElement.innerHTML = getI18nInnerHTML({
      en: "Back:",
      zh_cn: "背面：",
      zh_tw: "背面：",
    });
    backFontSizeElement.type = "text";
    backFontSizeElement.value = backFontSize;
    const changeValue = () => {
      this.data.backFontSize = backFontSizeElement.value;
      this.saveConfigAndBuildIfAllowed();
    };
    backFontSizeElement.onchange = changeValue;
    backFontSizeElement.onblur = changeValue;
    wrapElement.appendChild(labelElement);
    wrapElement.appendChild(backFontSizeElement);
  };
  pokerKindElementArray = [];
  appendPokerSizeButtons = (wrapElement) => {
    [
      {
        i18n: {
          en: "Small",
          zh_cn: "小",
          zh_tw: "小",
        },
        width: 40,
        height: 56,
      },
      {
        i18n: {
          en: "Big",
          zh_cn: "大",
          zh_tw: "大",
        },
        width: 48,
        height: 68,
      },
    ].forEach(({ i18n, width, height }, i) => {
      const buttonElement = createElement("button");
      buttonElement.innerHTML = getI18nInnerHTML(i18n);
      buttonElement.type = "button";
      buttonElement.setAttribute("edu-to-width", width.toString());
      buttonElement.setAttribute("edu-to-height", height.toString());
      buttonElement.name = "pokerSizeButtons";
      buttonElement.onclick = (event) => {
        const widthValue = parseInt(
          buttonElement.getAttribute("edu-to-width"),
          0,
        );
        const heightValue = parseInt(
          buttonElement.getAttribute("edu-to-height"),
          0,
        );
        this.data.pokerWidth = widthValue;
        this.data.pokerHeight = heightValue;
        this.pokerWidthElement.value = widthValue.toString();
        this.pokerHeightElement.value = heightValue.toString();
        this.saveConfigAndBuildIfAllowed();
        return stopEventBubble(event);
      };
      wrapElement.appendChild(buttonElement);
    });
  };
  updateOtherData = (newData) => {
    const { pokerWidth, pokerHeight, fontSize, backFontSize, pokerKind } =
      newData;
    const {
      pokerWidthElement,
      pokerHeightElement,
      fontSizeElement,
      backFontSizeElement,
      pokerKindElementArray,
    } = this;
    pokerKindElementArray.forEach((element) => {
      element.checked = element.value === pokerKind.toString();
    });
    pokerWidthElement.value = pokerWidth;
    pokerHeightElement.value = pokerHeight;
    fontSizeElement.value = fontSize;
    backFontSizeElement.value = backFontSize;
    this.data.pokerWidth = pokerWidth;
    this.data.pokerHeight = pokerHeight;
    this.data.fontSize = fontSize;
    this.data.backFontSize = backFontSize;
    this.data.pokerKind = pokerKind;
    this.updateOtherDataOfPoker(newData);
  };
}
