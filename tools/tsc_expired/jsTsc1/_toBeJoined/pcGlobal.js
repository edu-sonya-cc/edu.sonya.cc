// import { HOME_URL, SITE_ROOT, SITE_IMAGE_PATH, ACTUAL_PAGE_NAME, PAGE_SUB_KIND, PAGE_IDNEX, ACTIVATED_PROPERTY, PAGE_PROPERTY } from './const';
// import { hide, showInlineFlex, showBlock } from './dom';
// import { getHeaderElement, getMainElement, getFooterElement, getElementById, querySelectorAll, getI18nInnerHTML } from './dom';
// import { createElement, OnclickFunctionMap, setAttributesOfA, stopEventBubble } from './dom';
// import { global } from './global';
// import { setCurrentLang, getCurrentLang, Language } from './storage';
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/global.d.ts' />
/// <reference path='../types/storage.d.ts' />
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>类：电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>類：電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
var PcGlobal = /** @class */ (function () {
  function PcGlobal() {
    var _this = this;
    /**
     * <en>Sharing area element</en>
     * <zh_cn>分享区元素</zh_cn>
     * <zh_tw>分享區元素</zh_tw>
     */
    this.shareAreaElement = createElement("div");
    /**
     * <en>WeChat sharing button element</en>
     * <zh_cn>微信分享按钮元素</zh_cn>
     * <zh_tw>微信分享按鈕元素</zh_tw>
     */
    this.wechatShareElement = createElement("img");
    /**
     * <en>header element</en>
     * <zh_cn>header元素</zh_cn>
     * <zh_tw>header元素</zh_tw>
     */
    this.headerElement = getHeaderElement();
    /**
     * <en>Page logo element</en>
     * <zh_cn>页面logo元素</zh_cn>
     * <zh_tw>頁面logo元素</zh_tw>
     */
    this.logoElement = createElement("img");
    /**
     * <en>Menu using nav tags</en>
     * <zh_cn>使用nav标签的menu</zh_cn>
     * <zh_tw>使用nav標籤的menu</zh_tw>
     */
    this.navElement = createElement("nav");
    /**
     * <en>footer element</en>
     * <zh_cn>footer元素</zh_cn>
     * <zh_tw>footer元素</zh_tw>
     */
    this.footerElement = getFooterElement();
    /**
     * <en>main element</en>
     * <zh_cn>main元素</zh_cn>
     * <zh_tw>main元素</zh_tw>
     */
    this.mainElement = getMainElement();
    /**
     * <en>Array: top right menu sub item</en>
     * <zh_cn>数组：顶部右上角菜单子项</zh_cn>
     * <zh_tw>數組：頂部右上角菜單子項</zh_tw>
     */
    this.topMenuItems = [
      {
        id: "topMenuHome",
        kind: "a",
        link: "".concat(HOME_URL),
        titles: { en: "Home", zh_cn: "\u9996\u9875", zh_tw: "\u9996\u9801" },
      },
      {
        id: "topMenuBricks",
        kind: "a",
        link: "".concat(HOME_URL, "?go=bricks&kind=0&page=1"),
        titles: {
          en: "Tools",
          zh_cn: "\u629B\u7816\u5F15\u7389",
          zh_tw: "\u629B\u78DA\u5F15\u7389",
        },
      },
      {
        id: "topMenuTreasures",
        kind: "a",
        link: "".concat(HOME_URL, "?go=treasures&page=1"),
        titles: {
          en: "Natural treasures",
          zh_cn: "\u7269\u534E\u5929\u5B9D",
          zh_tw: "\u7269\u83EF\u5929\u5BF6",
        },
      },
      {
        id: "topMenuStories",
        kind: "a",
        link: "".concat(HOME_URL, "?go=stories&page=1"),
        titles: {
          en: "Growings",
          zh_cn: "\u6210\u957F\u8DB3\u8FF9",
          zh_tw: "\u6210\u9577\u8DB3\u8FF9",
        },
      },
      {
        id: "topMenuAbout",
        kind: "a",
        link: "".concat(HOME_URL, "?go=about"),
        titles: {
          en: "About Us",
          zh_cn: "\u5173\u4E8E\u6211\u4EEC",
          zh_tw: "\u95DC\u65BC\u6211\u5011",
        },
      },
      {
        id: "topMenuLanguage",
        kind: "select",
        link: "onChangeLanuage",
        titles: {
          en: "Language",
          zh_cn: "\u8BED\u8A00",
          zh_tw: "\u8A9E\u8A00",
        },
        options:
          "<option value='en'>English</option><option value='zh_cn'>简体</option><option value='zh_tw'>繁體</option>",
        onchange: "onChangeLanuage",
      },
      {
        id: "topMenuGithub",
        kind: "a",
        link: "https://github.com/edu-sonya-cc/edu.sonya.cc",
        titles: { en: "", zh_cn: "", zh_tw: "" },
      },
      {
        id: "topMenuSearch",
        kind: "button",
        link: "",
        titles: { en: "", zh_cn: "", zh_tw: "" },
        onclick: "onShowSearchRegion",
      },
    ];
    /**
     * <en>Arrays: footer hotspot data</en>
     * <zh_cn>数组：页脚热区数据</zh_cn>
     * <zh_tw>數組：頁腳熱區數據</zh_tw>
     */
    this.footerHotAreas = [
      {
        id: "footIcpLink",
        href: "https://beian.miit.gov.cn/",
      },
      {
        id: "footPoliceLink",
        href:
          "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302035110",
      },
      {
        id: "footEmailLink",
        href: "mailto:edu.sonya.cc@foxmail.com",
      },
      {
        id: "footFavoriteLink",
        href: "javascript:void(0);",
        onclick: "onAddFavorite",
      },
      {
        id: "footShareLink",
        href: "javascript:void(0);",
        onclick: "onShare",
      },
    ];
    /**
     * <en>Add current page to favorites.</en>
     * <zh_cn>添加当前页面到收藏夹中</zh_cn>
     * <zh_tw>添加當前頁面到收藏夾中</zh_tw>
     */
    //  (window as unknown as OnclickFunctionMap).
    this.onAddFavorite = function (event) {
      var errorTip = "";
      var title = "";
      switch (getCurrentLang()) {
        case "en":
          title = "Add to favorite";
          errorTip =
            "Add to favorite failed, please press Ctrl + D or Command + D, Or manually set in the browser.";
          break;
        case "zh_cn":
          title = "加入收藏";
          errorTip = "加入收藏失败，请使用组合键Ctrl + D，或Command + D，或手动在浏览器里进行设置。";
          break;
        case "zh_tw":
          title = "加入收藏";
          errorTip = "加入收藏失敗，請使用複合鍵Ctrl + D，或Command + D，或手動在瀏覽器裏進行設定。";
          break;
        default:
          break;
      }
      // const url = encodeURI(window.location.href);
      var url = encodeURI(window.location.href);
      switch (ACTUAL_PAGE_NAME) {
        case "home":
          url = HOME_URL;
          break;
        case "about":
        case "report":
          break;
        case "brick":
        case "story":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind());
          break;
        case "treasures":
        case "stories":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind());
          break;
        case "bricks":
          url = "".concat(HOME_URL, "?go=").concat(ACTUAL_PAGE_NAME, "&kind=")
            .concat(_this.getPageSubKind(), "&page=").concat(
              _this.getPageIndex(),
            );
          break;
        default:
          break;
      }
      // See https://xcysj.blog.csdn.net/article/details/125167025
      // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sidebar
      try {
        window.external
          .addFavorite(url, title);
        // window.external.addFavorite(sURL, sTitle);
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, "");
          // window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
          alert(errorTip);
        }
      }
      return stopEventBubble(event);
    };
    /**
     * <en>Share</en>
     * <zh_cn>分享</zh_cn>
     * <zh_tw>分享</zh_tw>
     */
    // (window as unknown as OnclickFunctionMap)
    this.onShare = function (event) {
      console.log("onShare()");
      var url = encodeURI(window.location.href);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      var wechatShareImageSrcPostfix = url.indexOf("&") === -1
        ? ""
        : "/".concat(
          url.split("&").slice(1).map(function (keyValue) {
            return keyValue.split("=")[1];
          }).join("_"),
        );
      var wechatShareImageSrc = "".concat(SITE_IMAGE_PATH).concat(
        ACTUAL_PAGE_NAME,
      ).concat(wechatShareImageSrcPostfix, ".png");
      _this.wechatShareElement.setAttribute("src", wechatShareImageSrc);
      _this.wechatShareElement.setAttribute("alt", wechatShareImageSrc);
      showInlineFlex(_this.shareAreaElement);
      return stopEventBubble(event);
    };
    // /**
    //  * <en>Hide share area</en>
    //  * <zh_cn>隐藏共享区</zh_cn>
    //  * <zh_tw>隱藏共亯區</zh_tw>
    //  */
    // public hideShareArea = () => {
    // 	global.hideRootTopMask();
    // };
    /**
     * <en>Search Area</en>
     * <zh_cn>搜索区</zh_cn>
     * <zh_tw>搜索區</zh_tw>
     */
    this.searchRegionElement = createElement("div");
    /**
     * <en>Show Search Area</en>
     * <zh_cn>显示搜索区域</zh_cn>
     * <zh_tw>顯示搜索區域</zh_tw>
     */
    //  (window as unknown as OnclickFunctionMap).
    this.onShowSearchRegion = function (event) {
      console.log("onShowSearchRegion()");
      // pcGlobal.showSearchRegion();
      showBlock(_this.searchRegionElement);
      return stopEventBubble(event);
    };
    /**
     * <en>Change the language</en>
     * <zh_cn>切换语言</zh_cn>
     * <zh_tw>切換語言</zh_tw>
     */
    this.onChangeLanuage = function (event) {
      console.log("onChangeLanuage()");
      setCurrentLang(getElementById("topMenuLanguage").value);
      return stopEventBubble(event);
    };
    this.pageSubKind = PAGE_SUB_KIND;
    this.getPageSubKind = function () {
      return _this.pageSubKind;
    };
    this.setPageSubKind = function (kind) {
      _this.pageSubKind = kind;
    };
    this.pageIndex = PAGE_IDNEX;
    this.getPageIndex = function () {
      return _this.pageIndex + 1;
    };
    this.setPageIndex = function (index) {
      _this.pageIndex = index - 1;
    };
    /**
     * <en>initialization</en>
     * <zh_cn>初始化</zh_cn>
     * <zh_tw>初始化</zh_tw>
     */
    this.init = function () {
      global.init();
      var _a = _this,
        shareAreaElement = _a.shareAreaElement,
        wechatShareElement = _a.wechatShareElement,
        headerElement = _a.headerElement,
        logoElement = _a.logoElement,
        navElement = _a.navElement,
        topMenuItems = _a.topMenuItems,
        footerElement = _a.footerElement,
        footerHotAreas = _a.footerHotAreas,
        mainElement = _a.mainElement,
        searchRegionElement = _a.searchRegionElement;
      // const body = getBodyElement();
      mainElement.appendChild(searchRegionElement);
      searchRegionElement.setAttribute("id", "searchRegion");
      footerElement.appendChild(shareAreaElement);
      // footerElement.appendChild(footerHotAreas);
      shareAreaElement.appendChild(wechatShareElement);
      headerElement.appendChild(logoElement);
      headerElement.appendChild(navElement);
      shareAreaElement.setAttribute("id", "shareArea");
      wechatShareElement.setAttribute("id", "wechatShare");
      // headerElement.setAttribute('id', 'header');
      logoElement.setAttribute("id", "logo");
      navElement.setAttribute("id", "menu");
      // footerElement.setAttribute('id', 'footer');
      var rootUrl = SITE_ROOT;
      var logoUrl = SITE_IMAGE_PATH.concat("0common/logo.jpg");
      logoElement.setAttribute("src", logoUrl);
      logoElement.setAttribute("alt", logoUrl);
      logoElement.onclick = function () {
        window.location.href = HOME_URL;
      };
      var currentLang = getCurrentLang();
      shareAreaElement.onclick = function () {
        return false;
      };
      footerElement.onclick = function () {
        hide(shareAreaElement);
      };
      // 加载页脚所有热区
      footerHotAreas.forEach(function (hotArea) {
        var aElement = createElement("a");
        footerElement.appendChild(aElement);
        var id = hotArea.id, href = hotArea.href, onclick = hotArea.onclick;
        aElement.setAttribute("id", id);
        if (!href.startsWith(HOME_URL.substring(0, 20))) {
          setAttributesOfA(aElement, href);
        } else {
          aElement.setAttribute("href", href);
        }
        // console.log(onclick, (window as unknown as OnclickFunctionMap)[onclick as string]);
        if (onclick) {
          switch (onclick) {
            case "onAddFavorite":
              aElement.onclick = _this.onAddFavorite;
              aElement.setAttribute("rel", "sidebar");
              break;
            case "onShare":
              aElement.onclick = _this.onShare;
              break;
            default:
              var onclickFunction = window[onclick];
              aElement.onclick = onclickFunction;
              // console.log(aElement.onclick);
              break;
          }
        }
      });
      // 加载菜单
      // topMenuItems.forEach(({ id, kind, link, titles, subItems, options, onclick, onchange }) => {
      topMenuItems.forEach(function (_a) {
        var id = _a.id,
          kind = _a.kind,
          link = _a.link,
          titles = _a.titles,
          options = _a.options,
          onclick = _a.onclick,
          onchange = _a.onchange;
        // const elementType = (kind === 'menu' ? 'p' : kind) as keyof HTMLElementTagNameMap;
        var elementType = (kind === "menu" ? "a" : kind);
        var menu = createElement(elementType);
        navElement.appendChild(menu);
        menu.setAttribute("id", id);
        var activated = id.substring(7).toLowerCase() === ACTUAL_PAGE_NAME;
        // console.log(id.substring(7).toLowerCase(), ACTUAL_PAGE_NAME);
        if (activated) {
          menu.setAttribute(ACTIVATED_PROPERTY, "");
        }
        if (kind === "a") {
          // setAttributesOfA(menu, link);
          // menu.setAttribute('href', link);
          if (!link.startsWith(HOME_URL.substring(0, 20))) {
            setAttributesOfA(menu, link);
          } else {
            menu.setAttribute("href", link);
          }
        }
        // menu.setAttribute('i18n', JSON.stringify( titles));
        menu.i18n = titles;
        if (kind === "menu") {
          var subMenuWrap_1 = createElement("div");
          // body.appendChild(subMenuWrap);
          headerElement.appendChild(subMenuWrap_1);
          subMenuWrap_1.setAttribute("id", id.concat("SubMenuWrap"));
          subMenuWrap_1.setAttribute("class", "topMenuItemSubMenuWrap");
          // // kind: subMenuKind,
          // (subItems as any)?.forEach(({ link: subMenuLink, titles: subMenuTitle } : {link: any, titles: any}) => {
          // 	const subMenu = createElement('a');
          // 	subMenuWrap.appendChild(subMenu);
          // 	// setAttributesOfA(subMenu, subMenuLink);
          // 	subMenu.setAttribute('href', subMenuLink);
          // 	if (
          // 		activated &&
          // 		PAGE_SUB_KIND ===
          // 			subMenuLink.split('&').slice(1).filter((keyValue: string) =>
          // 				keyValue.startsWith('kind=')
          // 			)[0].split('=')[1]
          // 	) {
          // 		subMenu.setAttribute(ACTIVATED_PROPERTY, '');
          // 	}
          // 	// subMenu.setAttribute('i18n', JSON.stringify(subMenuTitle));
          // 	// subMenu.i18n = subMenuTitle;
          // 	subMenu.innerHTML = getI18nInnerHTML(subMenuTitle);
          // });
          menu.onclick = function (event) {
            showBlock(subMenuWrap_1);
            return stopEventBubble(event);
          };
        }
        if (kind === "select") {
          menu.innerHTML = options;
          menu.value = currentLang;
          // console.log('select', onchange);
          switch (onchange) {
            case "onChangeLanuage":
              menu.onchange = _this.onChangeLanuage;
              break;
            default:
              break;
          }
        } else {
          menu.innerHTML = getI18nInnerHTML(titles);
        }
        if (onclick) {
          switch (onclick) {
            // case 'onAddFavorite':
            // 	menu.onclick = this.onAddFavorite;
            // 	break;
            // case 'onShare':
            // 	menu.onclick = this.onShare;
            // 	break;
            case "onShowSearchRegion":
              menu.onclick = _this.onShowSearchRegion;
              break;
            default:
              var onclickFunction = window[onclick];
              menu.onclick = onclickFunction;
              break;
          }
        }
      });
      var topMenuLanguage = getElementById("topMenuLanguage");
      topMenuLanguage.value = getCurrentLang();
      // console.log(topMenuLanguage.value);
    };
    this.fillListAndPagination = function (
      listElement,
      paginationElement,
      pageSize,
      list,
      pageName,
      fillItem,
    ) {
      listElement.id = "".concat(pageName, "List");
      paginationElement.className = "pagination";
      var itemCount = list.length;
      var pageCount = Math.ceil(itemCount / pageSize);
      // console.log(pageCount, list.length, pageSize);
      var pageMaxIndex = pageCount - 1;
      var countOfLastPage = itemCount - pageSize * pageMaxIndex;
      for (var i = 0; i < pageSize; ++i) {
        var itemElement = createElement("div");
        itemElement.className = "".concat(pageName, "Item");
        listElement.appendChild(itemElement);
        fillItem(itemElement, null, true);
      }
      var leftArrowElement = createElement("span");
      paginationElement.appendChild(leftArrowElement);
      leftArrowElement.innerHTML = "&lt;";
      leftArrowElement.id = "".concat(pageName, "PaginationLeftArrow");
      leftArrowElement.className = "paginationLeftArrow";
      var pageNumbersWrapElement = createElement("span");
      paginationElement.appendChild(pageNumbersWrapElement);
      pageNumbersWrapElement.id = "".concat(
        pageName,
        "PaginationPageNumbersWrap",
      );
      pageNumbersWrapElement.className = "paginationPageNumbersWrap";
      var rightArrowElement = createElement("span");
      paginationElement.appendChild(rightArrowElement);
      rightArrowElement.innerHTML = "&gt;";
      rightArrowElement.id = "".concat(pageName, "PaginationRightArrow");
      rightArrowElement.className = "paginationRightArrow";
      // Page index start from 0.
      // this.changePaginationParams(pageSize, countOfLastPage, fillItem, listElement, list, pageCount, paginationElement);
      _this.changePaginationParams(
        list,
        pageSize,
        listElement,
        paginationElement,
        fillItem,
      );
    };
    this.changePaginationParams = function (
      list,
      pageSize,
      listElement,
      // pageNumbersWrapElement: HTMLSpanElement,
      // leftArrowElement: HTMLSpanElement,
      // rightArrowElement: HTMLSpanElement,
      paginationElement,
      fillItem,
    ) {
      var leftArrowElement = paginationElement.children[0];
      var pageNumbersWrapElement = paginationElement.children[1];
      var rightArrowElement = paginationElement.children[2];
      var itemCount = list.length;
      var pageCount = Math.ceil(itemCount / pageSize);
      var pageMaxIndex = pageCount - 1;
      var countOfLastPage = itemCount - pageSize * pageMaxIndex;
      var currentPage = -1;
      var gotoPage = function (pageIndex) {
        if (pageIndex > pageMaxIndex) {
          pageIndex = pageMaxIndex;
        } else if (pageIndex < 0) {
          pageIndex = 0;
        }
        if (currentPage === pageIndex) {
          return;
        }
        var countOfCurrentPage = pageIndex < pageMaxIndex
          ? pageSize
          : countOfLastPage;
        var indexOffset = pageSize * pageIndex;
        for (var i = 0; i < countOfCurrentPage; ++i) {
          fillItem(listElement.children[i], list[indexOffset + i]);
        }
        for (var i = pageSize - 1; i >= countOfCurrentPage; --i) {
          fillItem(listElement.children[i], null);
        }
        currentPage = pageIndex;
        _this.pageIndex = pageIndex;
        var pageNumberElementMaxIndex = pageNumbersWrapElement.children.length -
          1;
        if (pageCount >= 10) {
          // 1, 2, 3, 4, 5, ..., 100
          // 1, ..., 4, 5, 6, ..., 100
          // 1, ..., 5, 6, 7, ..., 100
          // 1, ..., 94, 95, 96, ..., 100
          // 1, ..., 95, 96, 97, ..., 100
          // 1, ..., 96, 97, 98, 99, 100
          // 1: 0-3; 3: 95-99; 2: others
          // const kind = pageIndex < 4 ? 1 : (pageIndex >= pageMaxIndex - 4 ? 3 : 2);
          // // First is 1, last is pageCount. Skip them.
          // for (let i = 1; i < pageNumberElementMaxIndex; ++i) {
          //   const pageNumberElement = pageNumbersWrapElement.children[i] as HTMLSpanElement;
          //   // element.getAttribute(PAGE_PROPERTY)
          //   // element.innerHTML;
          // }
          var startIndex = 1, endIndex = pageNumberElementMaxIndex;
          if (pageIndex < 4) {
            endIndex = pageNumberElementMaxIndex - 1;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(PAGE_PROPERTY, "6");
          } else if (pageIndex >= pageMaxIndex - 4) {
            startIndex = 2;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageMaxIndex - 4).toString(),
            );
          } else {
            startIndex = 2;
            endIndex = pageNumberElementMaxIndex - 1;
            for (var i = startIndex; i <= endIndex; ++i) {
              var pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            var leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex - 2).toString(),
            );
            var rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex + 2).toString(),
            );
          }
        }
        var pageIndexStr = (pageIndex + 1).toString();
        for (var i = 0; i <= pageNumberElementMaxIndex; ++i) {
          var pageNumberElement = pageNumbersWrapElement.children[i];
          if (pageNumberElement.innerHTML === pageIndexStr) {
            pageNumberElement.setAttribute(ACTIVATED_PROPERTY, "");
          } else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
            pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
          }
        }
        if (pageIndex === 0) {
          leftArrowElement.setAttribute("disabled", "");
        } else if (leftArrowElement.hasAttribute("disabled")) {
          leftArrowElement.removeAttribute("disabled");
        }
        if (pageIndex === pageMaxIndex) {
          rightArrowElement.setAttribute("disabled", "");
        } else if (rightArrowElement.hasAttribute("disabled")) {
          rightArrowElement.removeAttribute("disabled");
        }
        var url = window.location.href;
        var pageSeg = "&page=".concat(pageIndexStr);
        var fullUrl = url.indexOf("&page=") === -1
          ? url.concat(pageSeg)
          : url.replace(/&page=[0-9]+/g, pageSeg);
        console.log(JSON.stringify({ url: url, fullUrl: fullUrl }));
        if (url !== fullUrl) {
          setTimeout(function () {
            window.location.href = fullUrl;
          }, 0);
        }
      };
      switch (pageCount) {
        case 0:
        case 1:
          hide(paginationElement);
          break;
        default:
          showBlock(paginationElement);
          leftArrowElement.onclick = function (event) {
            gotoPage(currentPage - 1);
            return stopEventBubble(event);
          };
          rightArrowElement.onclick = function (event) {
            gotoPage(currentPage + 1);
            return stopEventBubble(event);
          };
          pageNumbersWrapElement.innerHTML = "";
          if (pageCount < 10) {
            for (var i = 0; i < pageCount; ++i) {
              var pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
          } else {
            for (var i = 0; i < 5; ++i) {
              var pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
            var ellipsisElement = createElement("span");
            ellipsisElement.innerHTML = "...";
            pageNumbersWrapElement.appendChild(ellipsisElement);
            var lastPageNumberElement = createElement("span");
            lastPageNumberElement.innerHTML = pageCount.toString();
            pageNumbersWrapElement.appendChild(lastPageNumberElement);
          }
          var pageNumberElementCount = pageNumbersWrapElement.children.length;
          for (var i = 0; i < pageNumberElementCount; ++i) {
            var pageNumberElement = pageNumbersWrapElement.children[i];
            pageNumberElement.onclick = function (event) {
              var element = event.target;
              var innerHTML = element.innerHTML;
              if (innerHTML === "...") {
                gotoPage(parseInt(element.getAttribute(PAGE_PROPERTY), 0) - 1);
              } else {
                gotoPage(parseInt(innerHTML, 0) - 1);
              }
              return stopEventBubble(event);
            };
          }
          break;
      }
      gotoPage(_this.pageIndex);
    };
  }
  return PcGlobal;
}());
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
export var pcGlobal = new PcGlobal();
document.onclick = function () {
  querySelectorAll(
    ".topMenuItemSubMenuWrap,#shareArea,#brickPageShareArea,#brickPageSponsorImage",
  )
    .forEach(function (element) {
      return hide(element);
    });
};
