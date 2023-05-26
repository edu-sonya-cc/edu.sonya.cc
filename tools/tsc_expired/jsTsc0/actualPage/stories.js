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
var StoriesPage = /** @class */ (function (_super) {
  __extends(StoriesPage, _super);
  function StoriesPage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.mainContentElement = createElement("div");
    _this.topImageElement = createElement("img");
    _this.pageSubjectElement = createElement("div");
    _this.listElement = createElement("div");
    _this.paginationElement = createElement("div");
    _this.initMainElement = function () {
      var PAGE_NAME = "storiesPage";
      var mainElement = getMainElement();
      mainElement.id = "".concat(PAGE_NAME, "Main");
      var _a = _this,
        mainContentElement = _a.mainContentElement,
        topImageElement = _a.topImageElement,
        pageSubjectElement = _a.pageSubjectElement,
        listElement = _a.listElement,
        paginationElement = _a.paginationElement;
      mainElement.appendChild(topImageElement);
      mainElement.appendChild(mainContentElement);
      mainContentElement.id = "".concat(PAGE_NAME, "MainContent");
      mainContentElement.appendChild(pageSubjectElement);
      mainContentElement.appendChild(listElement);
      mainContentElement.appendChild(paginationElement);
      topImageElement.id = "".concat(PAGE_NAME, "MainImage");
      topImageElement.className = "topImage";
      topImageElement.src = "".concat(SITE_IMAGE_PATH, "5stories/topImage.jpg?")
        .concat(storiesPageMainImageVersion);
      pageSubjectElement.id = "".concat(PAGE_NAME, "Subject");
      pageSubjectElement.className = "pageSubject";
      pcGlobal.fillListAndPagination(
        listElement,
        paginationElement,
        PageSize.storiesPage,
        stories.map(function (item, index) {
          return __assign({ id: index + 1 }, item);
        }),
        PAGE_NAME,
        function (itemElement, data, init) {
          if (init) {
            var titleElement = createElement("div");
            titleElement.className = "".concat(PAGE_NAME, "Title");
            itemElement.appendChild(titleElement);
            var summaryAndDateElement = createElement("div");
            summaryAndDateElement.className = "".concat(
              PAGE_NAME,
              "SummaryAndDateWrap",
            );
            itemElement.appendChild(summaryAndDateElement);
            var summaryElement = createElement("span");
            summaryElement.className = "".concat(PAGE_NAME, "Summary");
            summaryAndDateElement.appendChild(summaryElement);
            var storyDateElement = createElement("span");
            storyDateElement.className = "".concat(PAGE_NAME, "Date");
            summaryAndDateElement.appendChild(storyDateElement);
            var hrElement = createElement("hr");
            itemElement.appendChild(hrElement);
            hrElement.className = "".concat(PAGE_NAME, "Hr");
          } else if (data === null) {
            var titleElement = itemElement.children[0];
            titleElement.innerHTML = "";
            var summaryAndDateElement = itemElement
              .children[1];
            var summaryElement = summaryAndDateElement
              .children[0];
            var storyDateElement = summaryAndDateElement
              .children[1];
            summaryElement.innerHTML = "";
            storyDateElement.innerHTML = "";
            var hrElement = itemElement.children[2];
            hide(hrElement);
            itemElement.onclick = function (event) {
              return stopEventBubble(event);
            };
          } else {
            // const {isTop, version} = data;
            var _a = data,
              id_1 = _a.id,
              date = _a.date,
              title = _a.title,
              summary = _a.summary;
            var titleElement = itemElement.children[0];
            titleElement.innerHTML = getI18nInnerHTML(title);
            var summaryAndDateElement = itemElement
              .children[1];
            var summaryElement = summaryAndDateElement
              .children[0];
            var storyDateElement = summaryAndDateElement
              .children[1];
            summaryElement.innerHTML = getI18nInnerHTML(summary);
            // const chineseDate = global.getChineseDate(date);
            // storyDateElement.innerHTML = `<en>${global.getEnglishDate(date)}</en><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
            storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
            var hrElement = itemElement.children[2];
            showBlock(hrElement);
            itemElement.onclick = function (event) {
              window.location.href = "?go=story&id=".concat(id_1);
              return stopEventBubble(event);
            };
          }
        },
      );
    };
    _this.init = function () {
      _super.prototype.init.call(_this);
    };
    return _this;
  }
  StoriesPage.prototype.initTitleElement = function () {
    var titleElement = getTitleElement();
    titleElement.i18n = {
      en: "Growing List",
      zh_cn: "成长足迹清单",
      zh_tw: "成長足迹清單",
    };
  };
  return StoriesPage;
}(ActualPageBase));
var storiesPage = new StoriesPage();
storiesPage.init();
