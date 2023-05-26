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
var TreasuresPage = /** @class */ (function (_super) {
  __extends(TreasuresPage, _super);
  function TreasuresPage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.mainContentElement = createElement("div");
    _this.topImageElement = createElement("img");
    _this.pageSubjectElement = createElement("div");
    _this.listElement = createElement("div");
    _this.paginationElement = createElement("div");
    _this.initMainElement = function () {
      var PAGE_NAME = "treasuresPage";
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
      topImageElement.src = "".concat(
        SITE_IMAGE_PATH,
        "4treasures/topImage.jpg?",
      ).concat(treasuresPageMainImageVersion);
      pageSubjectElement.id = "".concat(PAGE_NAME, "Subject");
      pageSubjectElement.className = "pageSubject";
      pcGlobal.fillListAndPagination(
        listElement,
        paginationElement,
        PageSize.treasuresPage,
        treasures, // .map((item: object, index: number) => { return {id: index, ...item }} ),
        PAGE_NAME,
        function (itemElement, data, init) {
          if (init) {
            var aElement = createElement("a");
            itemElement.appendChild(aElement);
            aElement.target = "_blank";
            aElement.className = "".concat(PAGE_NAME, "ItemWrap");
            var imageElement = createElement("img");
            var rightWrapElement = createElement("div");
            aElement.appendChild(imageElement);
            aElement.appendChild(rightWrapElement);
            imageElement.className = "".concat(PAGE_NAME, "ItemImage");
            rightWrapElement.className = "".concat(PAGE_NAME, "ItemRightWrap");
            var titleElement = createElement("div");
            titleElement.className = "".concat(PAGE_NAME, "ItemTitle");
            rightWrapElement.appendChild(titleElement);
            var hrElement = createElement("hr");
            hrElement.className = "".concat(PAGE_NAME, "ItemHr");
            rightWrapElement.appendChild(hrElement);
            var summaryElement = createElement("span");
            summaryElement.className = "".concat(PAGE_NAME, "ItemSummary");
            rightWrapElement.appendChild(summaryElement);
            var moreElement = createElement("div");
            moreElement.className = "moreButton primary";
            moreElement.innerHTML = MORE_BUTTON_HTML;
            rightWrapElement.appendChild(moreElement);
          } else if (data === null) {
            hide(itemElement);
          } else {
            showBlock(itemElement);
            var _a = data,
              image = _a.image,
              link = _a.link,
              title = _a.title,
              summary = _a.summary;
            var aElement = itemElement.children[0];
            var imageElement = aElement.children[0];
            var rightWrapElement = aElement.children[1];
            var imageUrl = "".concat(SITE_IMAGE_PATH, "4treasures/").concat(
              image,
            );
            imageElement.src = imageUrl;
            imageElement.alt = imageUrl;
            var titleElement = rightWrapElement.children[0];
            titleElement.innerHTML = getI18nInnerHTML(title);
            // const hrElement = rightWrapElement.children[1] as HTMLHRElement;
            var summaryElement = rightWrapElement.children[2];
            summaryElement.innerHTML = getI18nInnerHTML(summary);
            aElement.href = link;
          }
        },
      );
    };
    _this.init = function () {
      _super.prototype.init.call(_this);
    };
    return _this;
  }
  TreasuresPage.prototype.initTitleElement = function () {
    var titleElement = getTitleElement();
    titleElement.i18n = {
      en: "Natural Treasures List",
      zh_cn: "物华天宝清单",
      zh_tw: "物華天寶清單",
    };
  };
  return TreasuresPage;
}(ActualPageBase));
var treasuresPage = new TreasuresPage();
treasuresPage.init();
