"use strict";
// import { SITE_IMAGE_PATH, PageSize } from '../const';
// import { stories, storiesPageMainImageVersion } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, stopEventBubble, getI18nInnerHTML, getI18nInnerHTMLFromDate } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
class StoriesPage extends ActualPageBase {
  constructor() {
    super(...arguments);
    this.mainContentElement = createElement("div");
    this.topImageElement = createElement("img");
    this.pageSubjectElement = createElement("div");
    this.listElement = createElement("div");
    this.paginationElement = createElement("div");
    this.initMainElement = () => {
      const PAGE_NAME = "storiesPage";
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
        `${SITE_IMAGE_PATH}5stories/topImage.jpg?${storiesPageMainImageVersion}`;
      pageSubjectElement.id = `${PAGE_NAME}Subject`;
      pageSubjectElement.className = "pageSubject";
      pcGlobal.fillListAndPagination(
        listElement,
        paginationElement,
        PageSize.storiesPage,
        stories.map((item, index) => {
          return Object.assign({ id: index + 1 }, item);
        }),
        PAGE_NAME,
        (itemElement, data, init) => {
          if (init) {
            const titleElement = createElement("div");
            titleElement.className = `${PAGE_NAME}Title`;
            itemElement.appendChild(titleElement);
            const summaryAndDateElement = createElement("div");
            summaryAndDateElement.className = `${PAGE_NAME}SummaryAndDateWrap`;
            itemElement.appendChild(summaryAndDateElement);
            const summaryElement = createElement("span");
            summaryElement.className = `${PAGE_NAME}Summary`;
            summaryAndDateElement.appendChild(summaryElement);
            const storyDateElement = createElement("span");
            storyDateElement.className = `${PAGE_NAME}Date`;
            summaryAndDateElement.appendChild(storyDateElement);
            const hrElement = createElement("hr");
            itemElement.appendChild(hrElement);
            hrElement.className = `${PAGE_NAME}Hr`;
          } else if (data === null) {
            const titleElement = itemElement.children[0];
            titleElement.innerHTML = "";
            const summaryAndDateElement = itemElement.children[1];
            const summaryElement = summaryAndDateElement.children[0];
            const storyDateElement = summaryAndDateElement.children[1];
            summaryElement.innerHTML = "";
            storyDateElement.innerHTML = "";
            const hrElement = itemElement.children[2];
            hide(hrElement);
            itemElement.onclick = (event) => {
              return stopEventBubble(event);
            };
          } else {
            // const {isTop, version} = data;
            const { id, date, title, summary } = data;
            const titleElement = itemElement.children[0];
            titleElement.innerHTML = getI18nInnerHTML(title);
            const summaryAndDateElement = itemElement.children[1];
            const summaryElement = summaryAndDateElement.children[0];
            const storyDateElement = summaryAndDateElement.children[1];
            summaryElement.innerHTML = getI18nInnerHTML(summary);
            // const chineseDate = global.getChineseDate(date);
            // storyDateElement.innerHTML = `<en>${global.getEnglishDate(date)}</en><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
            storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
            const hrElement = itemElement.children[2];
            showBlock(hrElement);
            itemElement.onclick = (event) => {
              window.location.href = `?go=story&id=${id}`;
              return stopEventBubble(event);
            };
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
      en: "Growing List",
      zh_cn: "成长足迹清单",
      zh_tw: "成長足迹清單",
    };
  }
}
const storiesPage = new StoriesPage();
storiesPage.init();
