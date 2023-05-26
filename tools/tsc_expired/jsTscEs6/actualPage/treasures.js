"use strict";
// import { SITE_IMAGE_PATH, PageSize, MORE_BUTTON_HTML } from '../const';
// import { treasures, treasuresPageMainImageVersion } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, getI18nInnerHTML } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
class TreasuresPage extends ActualPageBase {
  constructor() {
    super(...arguments);
    this.mainContentElement = createElement("div");
    this.topImageElement = createElement("img");
    this.pageSubjectElement = createElement("div");
    this.listElement = createElement("div");
    this.paginationElement = createElement("div");
    this.initMainElement = () => {
      const PAGE_NAME = "treasuresPage";
      const mainElement = getMainElement();
      mainElement.id = `${PAGE_NAME}Main`;
      const {
        mainContentElement,
        topImageElement,
        pageSubjectElement,
        listElement,
        paginationElement,
      } = this;
      mainElement.appendChild(topImageElement);
      mainElement.appendChild(mainContentElement);
      mainContentElement.id = `${PAGE_NAME}MainContent`;
      mainContentElement.appendChild(pageSubjectElement);
      mainContentElement.appendChild(listElement);
      mainContentElement.appendChild(paginationElement);
      topImageElement.id = `${PAGE_NAME}MainImage`;
      topImageElement.className = "topImage";
      topImageElement.src =
        `${SITE_IMAGE_PATH}4treasures/topImage.jpg?${treasuresPageMainImageVersion}`;
      pageSubjectElement.id = `${PAGE_NAME}Subject`;
      pageSubjectElement.className = "pageSubject";
      pcGlobal.fillListAndPagination(
        listElement,
        paginationElement,
        PageSize.treasuresPage,
        treasures, // .map((item: object, index: number) => { return {id: index, ...item }} ),
        PAGE_NAME,
        (itemElement, data, init) => {
          if (init) {
            const aElement = createElement("a");
            itemElement.appendChild(aElement);
            aElement.target = "_blank";
            aElement.className = `${PAGE_NAME}ItemWrap`;
            const imageElement = createElement("img");
            const rightWrapElement = createElement("div");
            aElement.appendChild(imageElement);
            aElement.appendChild(rightWrapElement);
            imageElement.className = `${PAGE_NAME}ItemImage`;
            rightWrapElement.className = `${PAGE_NAME}ItemRightWrap`;
            const titleElement = createElement("div");
            titleElement.className = `${PAGE_NAME}ItemTitle`;
            rightWrapElement.appendChild(titleElement);
            const hrElement = createElement("hr");
            hrElement.className = `${PAGE_NAME}ItemHr`;
            rightWrapElement.appendChild(hrElement);
            const summaryElement = createElement("span");
            summaryElement.className = `${PAGE_NAME}ItemSummary`;
            rightWrapElement.appendChild(summaryElement);
            const moreElement = createElement("div");
            moreElement.className = "moreButton primary";
            moreElement.innerHTML = MORE_BUTTON_HTML;
            rightWrapElement.appendChild(moreElement);
          } else if (data === null) {
            hide(itemElement);
          } else {
            showBlock(itemElement);
            const { image, link, title, summary } = data;
            const aElement = itemElement.children[0];
            const imageElement = aElement.children[0];
            const rightWrapElement = aElement.children[1];
            const imageUrl = `${SITE_IMAGE_PATH}4treasures/${image}`;
            imageElement.src = imageUrl;
            imageElement.alt = imageUrl;
            const titleElement = rightWrapElement.children[0];
            titleElement.innerHTML = getI18nInnerHTML(title);
            // const hrElement = rightWrapElement.children[1] as HTMLHRElement;
            const summaryElement = rightWrapElement.children[2];
            summaryElement.innerHTML = getI18nInnerHTML(summary);
            aElement.href = link;
          }
        },
      );
    };
    this.init = () => {
      super.init();
    };
  }
  initTitleElement() {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en: "Natural Treasures List",
      zh_cn: "物华天宝清单",
      zh_tw: "物華天寶清單",
    };
  }
}
const treasuresPage = new TreasuresPage();
treasuresPage.init();
