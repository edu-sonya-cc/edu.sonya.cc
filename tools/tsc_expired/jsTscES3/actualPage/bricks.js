"use strict";
// import { SITE_IMAGE_PATH, PageSize, MORE_BUTTON_HTML, BRICK_SUB_KINDS, PAGE_SUB_KIND, SUB_KIND_NAME_PROPERTY, ACTIVATED_PROPERTY, PAGE_PROPERTY } from '../const';
// import { bricks, bricksPageMainImageVersion } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, stopEventBubble, getI18nInnerHTML } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
      }) ||
      function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null",
      );
    }
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null
      ? Object.create(b)
      : (__.prototype = b.prototype, new __());
  };
})();
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
var BricksPage = /** @class */ (function (_super) {
  __extends(BricksPage, _super);
  function BricksPage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.mainContentElement = createElement("div");
    _this.topImageElement = createElement("img");
    // private pageSubjectElement = createElement('div') as HTMLDivElement;
    _this.subKindsRowElement = createElement("div");
    _this.listElement = createElement("div");
    _this.paginationElement = createElement("div");
    _this.initItemElement = function (itemElement, PAGE_NAME) {
      var aElement = createElement("a");
      itemElement.appendChild(aElement);
      // aElement.target = '_blank';
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
    };
    _this.bindNullToItemElement = function (itemElement) {
      hide(itemElement);
    };
    _this.bindDataToItemElement = function (itemElement, data) {
      showBlock(itemElement);
      var _a = data,
        id = _a.id,
        // subKind,
        // version,
        image = _a.image,
        title = _a.title,
        summary = _a.summary;
      var aElement = itemElement.children[0];
      var imageElement = aElement.children[0];
      var rightWrapElement = aElement.children[1];
      var imageUrl = "".concat(SITE_IMAGE_PATH, "2bricks/").concat(image);
      imageElement.src = imageUrl;
      imageElement.alt = imageUrl;
      var titleElement = rightWrapElement.children[0];
      titleElement.innerHTML = getI18nInnerHTML(title);
      // const hrElement = rightWrapElement.children[1] as HTMLHRElement;
      var summaryElement = rightWrapElement.children[2];
      summaryElement.innerHTML = getI18nInnerHTML(summary);
      aElement.href = "?go=brick&id=".concat(id);
    };
    _this.PAGE_NAME = "bricksPage";
    _this.fillItem = function (itemElement, data, init) {
      if (init) {
        _this.initItemElement(itemElement, _this.PAGE_NAME);
      } else if (data === null) {
        _this.bindNullToItemElement(itemElement);
      } else {
        _this.bindDataToItemElement(itemElement, data);
      }
    };
    /**
     * 修改下方列表及其中的分页情况，subKindsRowElement则仅修改中间子类标签区域的激活状态
     * @param subKind 子类
     */
    _this.changeSubKind = function (subKind) {
      console.log("changeSubKind(".concat(subKind, ")"), typeof subKind);
      var subKindsRowElement = _this.subKindsRowElement;
      var bricksSubKindPageSize = PageSize.bricksPage.subKind;
      var subKindsWrapElement = subKindsRowElement.children[1];
      for (var i = 0; i < bricksSubKindPageSize; ++i) {
        var subKindElement = subKindsWrapElement.children[i];
        if (subKindElement.getAttribute(SUB_KIND_NAME_PROPERTY) === subKind) {
          subKindElement.setAttribute(ACTIVATED_PROPERTY, "");
        } else if (subKindElement.hasAttribute(ACTIVATED_PROPERTY)) {
          subKindElement.removeAttribute(ACTIVATED_PROPERTY);
        }
      }
      var list = [];
      if (subKind.length && subKind !== "0") {
        var fitSubKind_1 = BRICK_SUB_KINDS[parseInt(subKind, 0) - 1].name;
        bricks.filter(function (_a) {
          var subKind = _a.subKind;
          return subKind === fitSubKind_1;
        }).forEach(function (item) {
          return list.push(item);
        });
      } else {
        bricks.forEach(function (item) {
          return list.push(item);
        });
      }
      var itemCount = list.length;
      var pageSize = PageSize.bricksPage.list;
      // const pageCount = Math.ceil(itemCount / pageSize);
      // const pageMaxIndex = pageCount - 1;
      // const countOfLastPage = itemCount - pageSize * pageMaxIndex;
      var listElement = _this.listElement;
      var subKindNamesWrapElement = subKindsRowElement.children[1];
      var currentPage = -1;
      var gotoSubKind = function (subKindIndex) {
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
        var _a = _this,
          paginationElement = _a.paginationElement,
          fillItem = _a.fillItem;
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
      var kind = parseInt(PAGE_SUB_KIND, 0);
      var maxIndex = subKindNamesWrapElement.children.length - 1;
      for (var i = 0; i <= maxIndex; ++i) {
        var pageNumberElement = subKindNamesWrapElement.children[i];
        // pageNumberElement.onclick = (event: Event) => {
        //   const element = event.target as HTMLSpanElement;
        //   gotoSubKindPage(parseInt(element.getAttribute(PAGE_PROPERTY) || '1', 0) - 1);
        //   return stopEventBubble(event);
        // };
        var pageIndexProperty = pageNumberElement.getAttribute(PAGE_PROPERTY);
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
    _this.fillSubKindWrap = function (subKindsRowElement) {
      var changeSubKind = _this.changeSubKind;
      var bricksSubKindCount = BRICK_SUB_KINDS.length;
      // if (bricksSubKindCount < 2) { return; }
      var bricksSubKindPageSize = PageSize.bricksPage.subKind;
      var leftArrowElement = createElement("span");
      subKindsRowElement.appendChild(leftArrowElement);
      leftArrowElement.innerHTML = "&lt;";
      leftArrowElement.setAttribute("id", "bricksSubKindRowLeftArrow");
      var subKindsWrapElement = createElement("span");
      subKindsRowElement.appendChild(subKindsWrapElement);
      subKindsWrapElement.setAttribute("id", "bricksSubKindsWrap");
      var rightArrowElement = createElement("span");
      subKindsRowElement.appendChild(rightArrowElement);
      rightArrowElement.innerHTML = "&gt;";
      rightArrowElement.setAttribute("id", "bricksSubKindRowRightArrow");
      for (var i = 0; i < bricksSubKindPageSize; ++i) {
        var subKindElement = createElement("span");
        subKindElement.className = "bricksSubKind";
        subKindsWrapElement.appendChild(subKindElement);
      }
      var bricksSubKindPageCount = Math.ceil(
        bricksSubKindCount / bricksSubKindPageSize,
      );
      var maxSubKindPageIndex = bricksSubKindPageCount - 1;
      var bricksSubKindCountOfLastPage = bricksSubKindCount -
        bricksSubKindPageSize * maxSubKindPageIndex;
      var currentPage = -1;
      var gotoPage = function (pageIndex) {
        if (pageIndex > maxSubKindPageIndex) {
          pageIndex = maxSubKindPageIndex;
        } else if (pageIndex < 0) {
          pageIndex = 0;
        }
        if (currentPage === pageIndex) {
          return;
        }
        var bricksSubKindCountOfCurrentPage = pageIndex < maxSubKindPageIndex
          ? bricksSubKindPageSize
          : bricksSubKindCountOfLastPage;
        var indexOffset = bricksSubKindPageSize * pageIndex;
        var _loop_1 = function (i) {
          var subKindElement = subKindsWrapElement.children[i];
          var bricksSubKind = BRICK_SUB_KINDS[indexOffset + i];
          var name_1 = bricksSubKind.name, title = bricksSubKind.title;
          subKindElement.innerHTML = getI18nInnerHTML(title);
          subKindElement.setAttribute(SUB_KIND_NAME_PROPERTY, name_1);
          // subKindElement.setAttribute(PAGE_PROPERTY, (indexOffset + i + 1).toString());
          var kindStr = (BRICK_SUB_KINDS.map(function (_a) {
            var name = _a.name;
            return name;
          }).indexOf(name_1) + 1).toString();
          subKindElement.setAttribute(PAGE_PROPERTY, kindStr);
          subKindElement.onclick = function (event) {
            if (kindStr === PAGE_SUB_KIND) {
              return stopEventBubble(event);
            }
            // changeSubKind(kindStr);
            // console.log(`=>`, JSON.stringify({ name, title}));
            window.location.href = window.location.href.split("&")[0].concat(
              "&kind=".concat(kindStr, "&page=1"),
            );
            return stopEventBubble(event);
          };
        };
        for (var i = 0; i < bricksSubKindCountOfCurrentPage; ++i) {
          _loop_1(i);
        }
        for (
          var i = bricksSubKindPageSize - bricksSubKindCountOfCurrentPage;
          i > 0;
          --i
        ) {
          var subKindElement =
            subKindsWrapElement.children[bricksSubKindPageSize - i];
          subKindElement.onclick = function (event) {
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
        leftArrowElement.onclick = function (event) {
          gotoPage(currentPage - 1);
          return stopEventBubble(event);
        };
        rightArrowElement.onclick = function (event) {
          gotoPage(currentPage + 1);
          return stopEventBubble(event);
        };
      }
      // gotoPage(0);
      gotoPage(Math.floor(Math.max(0, parseInt(PAGE_SUB_KIND, 0) - 1) / 4));
      // if (PAGE_SUB_KIND !== '0') { }
      _this.changeSubKind(PAGE_SUB_KIND);
    };
    _this.initMainElement = function () {
      var PAGE_NAME = _this.PAGE_NAME;
      var mainElement = getMainElement();
      mainElement.id = "".concat(PAGE_NAME, "Main");
      // const { pageSubjectElement } = this;
      var _a = _this,
        mainContentElement = _a.mainContentElement,
        topImageElement = _a.topImageElement,
        subKindsRowElement = _a.subKindsRowElement,
        listElement = _a.listElement,
        paginationElement = _a.paginationElement;
      mainElement.appendChild(topImageElement);
      mainElement.appendChild(subKindsRowElement);
      mainElement.appendChild(mainContentElement);
      mainContentElement.id = "".concat(PAGE_NAME, "MainContent");
      subKindsRowElement.id = "".concat(PAGE_NAME, "SubKindsRow");
      // mainContentElement.appendChild(pageSubjectElement);
      mainContentElement.appendChild(listElement);
      mainContentElement.appendChild(paginationElement);
      topImageElement.id = "".concat(PAGE_NAME, "MainImage");
      topImageElement.className = "topImage";
      topImageElement.src = "".concat(SITE_IMAGE_PATH, "2bricks/topImage.jpg?")
        .concat(bricksPageMainImageVersion);
      // pageSubjectElement.id = `${PAGE_NAME}Subject`;
      // pageSubjectElement.className = 'pageSubject';
      var pageSize = PageSize.bricksPage.list;
      pcGlobal.fillListAndPagination(
        listElement,
        paginationElement,
        pageSize,
        bricks.map(function (item, index) {
          return __assign({ id: index + 1 }, item);
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
        _this.fillItem,
      );
      _this.fillSubKindWrap(subKindsRowElement);
    };
    _this.init = function () {
      _super.prototype.init.call(_this);
    };
    return _this;
  }
  BricksPage.prototype.initTitleElement = function () {
    var titleElement = getTitleElement();
    titleElement.i18n = {
      en: "List of throwing a brick to attract jade",
      zh_cn: "抛砖引玉清单",
      zh_tw: "拋磚引玉清單",
    };
  };
  return BricksPage;
}(ActualPageBase));
var bricksPage = new BricksPage();
bricksPage.init();
