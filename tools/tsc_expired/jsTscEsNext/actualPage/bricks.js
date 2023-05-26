"use strict";
// import { SITE_IMAGE_PATH, PageSize, MORE_BUTTON_HTML, BRICK_SUB_KINDS, PAGE_SUB_KIND, SUB_KIND_NAME_PROPERTY, ACTIVATED_PROPERTY, PAGE_PROPERTY } from '../const';
// import { bricks, bricksPageMainImageVersion } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, stopEventBubble, getI18nInnerHTML } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
class BricksPage extends ActualPageBase {
  mainContentElement = createElement("div");
  topImageElement = createElement("img");
  // private pageSubjectElement = createElement('div') as HTMLDivElement;
  subKindsRowElement = createElement("div");
  listElement = createElement("div");
  paginationElement = createElement("div");
  initTitleElement() {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en: "List of throwing a brick to attract jade",
      zh_cn: "抛砖引玉清单",
      zh_tw: "拋磚引玉清單",
    };
  }
  initItemElement = (itemElement, PAGE_NAME) => {
    const aElement = createElement("a");
    itemElement.appendChild(aElement);
    // aElement.target = '_blank';
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
  };
  bindNullToItemElement = (itemElement) => {
    hide(itemElement);
  };
  bindDataToItemElement = (itemElement, data) => {
    showBlock(itemElement);
    const {
      id,
      // subKind,
      // version,
      image,
      title,
      summary,
    } = data;
    const aElement = itemElement.children[0];
    const imageElement = aElement.children[0];
    const rightWrapElement = aElement.children[1];
    const imageUrl = `${SITE_IMAGE_PATH}2bricks/${image}`;
    imageElement.src = imageUrl;
    imageElement.alt = imageUrl;
    const titleElement = rightWrapElement.children[0];
    titleElement.innerHTML = getI18nInnerHTML(title);
    // const hrElement = rightWrapElement.children[1] as HTMLHRElement;
    const summaryElement = rightWrapElement.children[2];
    summaryElement.innerHTML = getI18nInnerHTML(summary);
    aElement.href = `?go=brick&id=${id}`;
  };
  PAGE_NAME = "bricksPage";
  fillItem = (itemElement, data, init) => {
    if (init) {
      this.initItemElement(itemElement, this.PAGE_NAME);
    } else if (data === null) {
      this.bindNullToItemElement(itemElement);
    } else {
      this.bindDataToItemElement(itemElement, data);
    }
  };
  /**
   * 修改下方列表及其中的分页情况，subKindsRowElement则仅修改中间子类标签区域的激活状态
   * @param subKind 子类
   */
  changeSubKind = (subKind) => {
    console.log(`changeSubKind(${subKind})`, typeof subKind);
    const { subKindsRowElement } = this;
    const bricksSubKindPageSize = PageSize.bricksPage.subKind;
    const subKindsWrapElement = subKindsRowElement.children[1];
    for (let i = 0; i < bricksSubKindPageSize; ++i) {
      const subKindElement = subKindsWrapElement.children[i];
      if (subKindElement.getAttribute(SUB_KIND_NAME_PROPERTY) === subKind) {
        subKindElement.setAttribute(ACTIVATED_PROPERTY, "");
      } else if (subKindElement.hasAttribute(ACTIVATED_PROPERTY)) {
        subKindElement.removeAttribute(ACTIVATED_PROPERTY);
      }
    }
    const list = [];
    if (subKind.length && subKind !== "0") {
      const fitSubKind = BRICK_SUB_KINDS[parseInt(subKind, 0) - 1].name;
      bricks.filter(({ subKind }) => subKind === fitSubKind).forEach((item) =>
        list.push(item)
      );
    } else {
      bricks.forEach((item) => list.push(item));
    }
    const itemCount = list.length;
    const pageSize = PageSize.bricksPage.list;
    // const pageCount = Math.ceil(itemCount / pageSize);
    // const pageMaxIndex = pageCount - 1;
    // const countOfLastPage = itemCount - pageSize * pageMaxIndex;
    const { listElement } = this;
    const subKindNamesWrapElement = subKindsRowElement.children[1];
    let currentPage = -1;
    const gotoSubKind = (subKindIndex) => {
      if (subKindIndex > itemCount) {
        subKindIndex = itemCount;
      } else if (subKindIndex < 0) {
        subKindIndex = 0;
      }
      if (currentPage === subKindIndex) {
        return;
      }
      // // const pageIndexStr = (subKindIndex + 1).toString();
      // const pageIndexStr = subKindIndex.toString();
      // const url = window.location.href;
      // const kindSeg = `&kind=${pageIndexStr}`;
      // const fullUrl = url.indexOf('&kind=') === -1 ? url.concat(kindSeg): url.replace(/&kind=[0-9]+/g, kindSeg);
      // // console.log(JSON.stringify({ url, fullUrl }));
      // // console.log(JSON.stringify({ pageIndex, pageIndexStr, url, kindSeg, fullUrl }));
      // if (url !== fullUrl) {
      // 	setTimeout(() => {
      // 		window.location.href = url.split('&')[0].concat(`${kindSeg}&page=1`);
      //     // gotoSubKind(subKindIndex);
      // 	}, 0);
      //   return;
      // }
      // const countOfCurrentPage = subKindIndex < pageMaxIndex ? pageSize : countOfLastPage;
      // const indexOffset = pageSize * subKindIndex;
      // for(let i = 0; i < countOfCurrentPage; ++i) {
      //   this.bindDataToItemElement(listElement.children[i] as HTMLDivElement, list[indexOffset + i]);
      // }
      // for(let i = pageSize - 1; i >= countOfCurrentPage; --i) {
      //   this.bindNullToItemElement(listElement.children[i] as HTMLDivElement);
      // }
      currentPage = subKindIndex;
      const { paginationElement, fillItem } = this;
      // subKindsRowElement, listElement, paginationElement
      // const subKindsWrapElement = subKindsRowElement.children[1] as HTMLElement;
      // pcGlobal.changePaginationParams(pageMaxIndex, pageSize, countOfLastPage, this.fillItem, listElement, list, pageNumbersWrapElement, pageCount, leftArrowElement, rightArrowElement, paginationElement);
      pcGlobal.changePaginationParams(
        list,
        pageSize,
        listElement,
        paginationElement,
        fillItem,
      );
      pcGlobal.setPageIndex(currentPage);
    };
    const kind = parseInt(PAGE_SUB_KIND, 0);
    const maxIndex = subKindNamesWrapElement.children.length - 1;
    for (let i = 0; i <= maxIndex; ++i) {
      const pageNumberElement = subKindNamesWrapElement.children[i];
      // pageNumberElement.onclick = (event: Event) => {
      //   const element = event.target as HTMLSpanElement;
      //   gotoSubKindPage(parseInt(element.getAttribute(PAGE_PROPERTY) || '1', 0) - 1);
      //   return stopEventBubble(event);
      // };
      const pageIndexProperty = pageNumberElement.getAttribute(PAGE_PROPERTY);
      if (parseInt(pageIndexProperty, 0) === kind) {
        pageNumberElement.setAttribute(ACTIVATED_PROPERTY, "");
      } else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
        pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
      }
    }
    // const kindStr = (kind + 1).toString();
    // const pageNumberElementMaxIndex = pageNumbersWrapElement.children.length - 1;
    // for(let i = 0; i < pageNumberElementMaxIndex; ++i){
    //   const pageNumberElement = pageNumbersWrapElement.children[i];
    //   if (pageNumberElement.innerHTML === kindStr) {
    //     pageNumberElement.setAttribute(ACTIVATED_PROPERTY, '');
    //   } else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
    //     pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
    //   }
    // }
    gotoSubKind(parseInt(subKind, 0));
    // gotoSubKind(subKind === '0' ? 0 : parseInt(subKind, 0) - 1);
    // gotoSubKind(subKind === '0' ? -1 : parseInt(subKind, 0) - 1);
  };
  fillSubKindWrap = (subKindsRowElement) => {
    const { changeSubKind } = this;
    const bricksSubKindCount = BRICK_SUB_KINDS.length;
    // if (bricksSubKindCount < 2) { return; }
    const bricksSubKindPageSize = PageSize.bricksPage.subKind;
    const leftArrowElement = createElement("span");
    subKindsRowElement.appendChild(leftArrowElement);
    leftArrowElement.innerHTML = "&lt;";
    leftArrowElement.setAttribute("id", "bricksSubKindRowLeftArrow");
    const subKindsWrapElement = createElement("span");
    subKindsRowElement.appendChild(subKindsWrapElement);
    subKindsWrapElement.setAttribute("id", "bricksSubKindsWrap");
    const rightArrowElement = createElement("span");
    subKindsRowElement.appendChild(rightArrowElement);
    rightArrowElement.innerHTML = "&gt;";
    rightArrowElement.setAttribute("id", "bricksSubKindRowRightArrow");
    for (let i = 0; i < bricksSubKindPageSize; ++i) {
      const subKindElement = createElement("span");
      subKindElement.className = "bricksSubKind";
      subKindsWrapElement.appendChild(subKindElement);
    }
    const bricksSubKindPageCount = Math.ceil(
      bricksSubKindCount / bricksSubKindPageSize,
    );
    const maxSubKindPageIndex = bricksSubKindPageCount - 1;
    const bricksSubKindCountOfLastPage = bricksSubKindCount -
      bricksSubKindPageSize * maxSubKindPageIndex;
    let currentPage = -1;
    const gotoPage = (pageIndex) => {
      if (pageIndex > maxSubKindPageIndex) {
        pageIndex = maxSubKindPageIndex;
      } else if (pageIndex < 0) {
        pageIndex = 0;
      }
      if (currentPage === pageIndex) {
        return;
      }
      const bricksSubKindCountOfCurrentPage = pageIndex < maxSubKindPageIndex
        ? bricksSubKindPageSize
        : bricksSubKindCountOfLastPage;
      const indexOffset = bricksSubKindPageSize * pageIndex;
      for (let i = 0; i < bricksSubKindCountOfCurrentPage; ++i) {
        const subKindElement = subKindsWrapElement.children[i];
        const bricksSubKind = BRICK_SUB_KINDS[indexOffset + i];
        const { name, title } = bricksSubKind;
        subKindElement.innerHTML = getI18nInnerHTML(title);
        subKindElement.setAttribute(SUB_KIND_NAME_PROPERTY, name);
        // subKindElement.setAttribute(PAGE_PROPERTY, (indexOffset + i + 1).toString());
        const kindStr = (BRICK_SUB_KINDS.map(({ name }) =>
          name
        ).indexOf(name) + 1).toString();
        subKindElement.setAttribute(PAGE_PROPERTY, kindStr);
        subKindElement.onclick = (event) => {
          if (kindStr === PAGE_SUB_KIND) {
            return stopEventBubble(event);
          }
          // changeSubKind(kindStr);
          // console.log(`=>`, JSON.stringify({ name, title}));
          window.location.href = window.location.href.split("&")[0].concat(
            `&kind=${kindStr}&page=1`,
          );
          return stopEventBubble(event);
        };
        // console.log('in the scope', subKindElement.outerHTML, subKindElement.onclick, JSON.stringify({ i, name, title}));
      }
      for (
        let i = bricksSubKindPageSize - bricksSubKindCountOfCurrentPage;
        i > 0;
        --i
      ) {
        const subKindElement =
          subKindsWrapElement.children[bricksSubKindPageSize - i];
        subKindElement.onclick = (event) => {
          return stopEventBubble(event);
        };
        // console.log('out the scope', subKindElement.outerHTML, subKindElement.onclick);
      }
      currentPage = pageIndex;
      if (pageIndex === 0) {
        leftArrowElement.setAttribute("disabled", "");
      } else if (leftArrowElement.hasAttribute("disabled")) {
        leftArrowElement.removeAttribute("disabled");
      }
      if (pageIndex === maxSubKindPageIndex) {
        rightArrowElement.setAttribute("disabled", "");
      } else if (rightArrowElement.hasAttribute("disabled")) {
        rightArrowElement.removeAttribute("disabled");
      }
    };
    if (bricksSubKindPageCount < 2) {
      leftArrowElement.setAttribute("disabled", "");
      rightArrowElement.setAttribute("disabled", "");
    } else {
      leftArrowElement.onclick = (event) => {
        gotoPage(currentPage - 1);
        return stopEventBubble(event);
      };
      rightArrowElement.onclick = (event) => {
        gotoPage(currentPage + 1);
        return stopEventBubble(event);
      };
    }
    // gotoPage(0);
    gotoPage(Math.floor(Math.max(0, parseInt(PAGE_SUB_KIND, 0) - 1) / 4));
    // if (PAGE_SUB_KIND !== '0') { }
    this.changeSubKind(PAGE_SUB_KIND);
  };
  initMainElement = () => {
    const { PAGE_NAME } = this;
    const mainElement = getMainElement();
    mainElement.id = `${PAGE_NAME}Main`;
    // const { pageSubjectElement } = this;
    const {
      mainContentElement,
      topImageElement,
      subKindsRowElement,
      listElement,
      paginationElement,
    } = this;
    mainElement.appendChild(topImageElement);
    mainElement.appendChild(subKindsRowElement);
    mainElement.appendChild(mainContentElement);
    mainContentElement.id = `${PAGE_NAME}MainContent`;
    subKindsRowElement.id = `${PAGE_NAME}SubKindsRow`;
    // mainContentElement.appendChild(pageSubjectElement);
    mainContentElement.appendChild(listElement);
    mainContentElement.appendChild(paginationElement);
    topImageElement.id = `${PAGE_NAME}MainImage`;
    topImageElement.className = "topImage";
    topImageElement.src =
      `${SITE_IMAGE_PATH}2bricks/topImage.jpg?${bricksPageMainImageVersion}`;
    // pageSubjectElement.id = `${PAGE_NAME}Subject`;
    // pageSubjectElement.className = 'pageSubject';
    const pageSize = PageSize.bricksPage.list;
    pcGlobal.fillListAndPagination(
      listElement,
      paginationElement,
      pageSize,
      bricks.map((item, index) => {
        return { id: index + 1, ...item };
      }),
      PAGE_NAME,
      // (itemElement: HTMLDivElement, data: object | null, init?: boolean) =>{
      //   if (init) {
      //     this.initItemElement(itemElement, PAGE_NAME);
      //   } else if (data === null) {
      //     this.bindNullToItemElement(itemElement);
      //   } else {
      //     this.bindDataToItemElement(itemElement, data);
      //   }
      // }
      this.fillItem,
    );
    this.fillSubKindWrap(subKindsRowElement);
  };
  init = () => {
    super.init();
  };
}
const bricksPage = new BricksPage();
bricksPage.init();
