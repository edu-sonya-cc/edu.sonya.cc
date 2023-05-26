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
class PcGlobal {
  constructor() {
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
        link: `${HOME_URL}`,
        titles: { en: `Home`, zh_cn: `首页`, zh_tw: `首頁` },
      },
      {
        id: "topMenuBricks",
        kind: "a",
        link: `${HOME_URL}?go=bricks&kind=0&page=1`,
        titles: { en: `Tools`, zh_cn: `抛砖引玉`, zh_tw: `抛磚引玉` },
      },
      {
        id: "topMenuTreasures",
        kind: "a",
        link: `${HOME_URL}?go=treasures&page=1`,
        titles: {
          en: `Natural treasures`,
          zh_cn: `物华天宝`,
          zh_tw: `物華天寶`,
        },
      },
      {
        id: "topMenuStories",
        kind: "a",
        link: `${HOME_URL}?go=stories&page=1`,
        titles: { en: `Growings`, zh_cn: `成长足迹`, zh_tw: `成長足迹` },
      },
      {
        id: "topMenuAbout",
        kind: "a",
        link: `${HOME_URL}?go=about`,
        titles: { en: `About Us`, zh_cn: `关于我们`, zh_tw: `關於我們` },
      },
      {
        id: "topMenuLanguage",
        kind: "select",
        link: `onChangeLanuage`,
        titles: { en: `Language`, zh_cn: `语言`, zh_tw: `語言` },
        options:
          "<option value='en'>English</option><option value='zh_cn'>简体</option><option value='zh_tw'>繁體</option>",
        onchange: "onChangeLanuage",
      },
      {
        id: "topMenuGithub",
        kind: "a",
        link: `https://github.com/edu-sonya-cc/edu.sonya.cc`,
        titles: { en: ``, zh_cn: ``, zh_tw: `` },
      },
      {
        id: "topMenuSearch",
        kind: "button",
        link: ``,
        titles: { en: ``, zh_cn: ``, zh_tw: `` },
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
    this.onAddFavorite = (event) => {
      let errorTip = "";
      let title = "";
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
      let url = encodeURI(window.location.href);
      switch (ACTUAL_PAGE_NAME) {
        case "home":
          url = HOME_URL;
          break;
        case "about":
        case "report":
          break;
        case "brick":
        case "story":
          url =
            `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}`;
          break;
        case "treasures":
        case "stories":
          url =
            `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}`;
          break;
        case "bricks":
          url =
            `${HOME_URL}?go=${ACTUAL_PAGE_NAME}&kind=${this.getPageSubKind()}&page=${this.getPageIndex()}`;
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
    this.onShare = (event) => {
      console.log("onShare()");
      const url = encodeURI(window.location.href);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      // const wechatShareImageSrcPostfix = url.indexOf('&') === -1 ? '': url.split('&').slice(1).map((keyValue: string) => keyValue.split('=')[1]);
      const wechatShareImageSrcPostfix = url.indexOf("&") === -1
        ? ""
        : "/".concat(
          url.split("&").slice(1).map((keyValue) => keyValue.split("=")[1])
            .join("_"),
        );
      const wechatShareImageSrc =
        `${SITE_IMAGE_PATH}${ACTUAL_PAGE_NAME}${wechatShareImageSrcPostfix}.png`;
      this.wechatShareElement.setAttribute("src", wechatShareImageSrc);
      this.wechatShareElement.setAttribute("alt", wechatShareImageSrc);
      showInlineFlex(this.shareAreaElement);
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
    this.onShowSearchRegion = (event) => {
      console.log("onShowSearchRegion()");
      // pcGlobal.showSearchRegion();
      showBlock(this.searchRegionElement);
      return stopEventBubble(event);
    };
    /**
     * <en>Change the language</en>
     * <zh_cn>切换语言</zh_cn>
     * <zh_tw>切換語言</zh_tw>
     */
    this.onChangeLanuage = (event) => {
      console.log("onChangeLanuage()");
      setCurrentLang(getElementById("topMenuLanguage").value);
      return stopEventBubble(event);
    };
    this.pageSubKind = PAGE_SUB_KIND;
    this.getPageSubKind = () => this.pageSubKind;
    this.setPageSubKind = (kind) => {
      this.pageSubKind = kind;
    };
    this.pageIndex = PAGE_IDNEX;
    this.getPageIndex = () => this.pageIndex + 1;
    this.setPageIndex = (index) => {
      this.pageIndex = index - 1;
    };
    /**
     * <en>initialization</en>
     * <zh_cn>初始化</zh_cn>
     * <zh_tw>初始化</zh_tw>
     */
    this.init = () => {
      global.init();
      const {
        shareAreaElement,
        wechatShareElement,
        headerElement,
        logoElement,
        navElement,
        topMenuItems,
        footerElement,
        footerHotAreas,
        mainElement,
        searchRegionElement,
      } = this;
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
      const rootUrl = SITE_ROOT;
      const logoUrl = SITE_IMAGE_PATH.concat("0common/logo.jpg");
      logoElement.setAttribute("src", logoUrl);
      logoElement.setAttribute("alt", logoUrl);
      logoElement.onclick = () => {
        window.location.href = HOME_URL;
      };
      const currentLang = getCurrentLang();
      shareAreaElement.onclick = () => false;
      footerElement.onclick = () => {
        hide(shareAreaElement);
      };
      // 加载页脚所有热区
      footerHotAreas.forEach((hotArea) => {
        const aElement = createElement("a");
        footerElement.appendChild(aElement);
        const { id, href, onclick } = hotArea;
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
              aElement.onclick = this.onAddFavorite;
              aElement.setAttribute("rel", "sidebar");
              break;
            case "onShare":
              aElement.onclick = this.onShare;
              break;
            default:
              const onclickFunction = window[onclick];
              aElement.onclick = onclickFunction;
              // console.log(aElement.onclick);
              break;
          }
        }
      });
      // 加载菜单
      // topMenuItems.forEach(({ id, kind, link, titles, subItems, options, onclick, onchange }) => {
      topMenuItems.forEach(
        ({ id, kind, link, titles, options, onclick, onchange }) => {
          // const elementType = (kind === 'menu' ? 'p' : kind) as keyof HTMLElementTagNameMap;
          const elementType = (kind === "menu" ? "a" : kind);
          const menu = createElement(elementType);
          navElement.appendChild(menu);
          menu.setAttribute("id", id);
          const activated = id.substring(7).toLowerCase() === ACTUAL_PAGE_NAME;
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
            const subMenuWrap = createElement("div");
            // body.appendChild(subMenuWrap);
            headerElement.appendChild(subMenuWrap);
            subMenuWrap.setAttribute("id", id.concat("SubMenuWrap"));
            subMenuWrap.setAttribute("class", "topMenuItemSubMenuWrap");
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
            menu.onclick = (event) => {
              showBlock(subMenuWrap);
              return stopEventBubble(event);
            };
          }
          if (kind === "select") {
            menu.innerHTML = options;
            menu.value = currentLang;
            // console.log('select', onchange);
            switch (onchange) {
              case "onChangeLanuage":
                menu.onchange = this.onChangeLanuage;
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
                menu.onclick = this.onShowSearchRegion;
                break;
              default:
                const onclickFunction = window[onclick];
                menu.onclick = onclickFunction;
                break;
            }
          }
        },
      );
      const topMenuLanguage = getElementById("topMenuLanguage");
      topMenuLanguage.value = getCurrentLang();
      // console.log(topMenuLanguage.value);
    };
    this.fillListAndPagination = (
      listElement,
      paginationElement,
      pageSize,
      list,
      pageName,
      fillItem,
    ) => {
      listElement.id = `${pageName}List`;
      paginationElement.className = "pagination";
      const itemCount = list.length;
      const pageCount = Math.ceil(itemCount / pageSize);
      // console.log(pageCount, list.length, pageSize);
      const pageMaxIndex = pageCount - 1;
      const countOfLastPage = itemCount - pageSize * pageMaxIndex;
      for (let i = 0; i < pageSize; ++i) {
        const itemElement = createElement("div");
        itemElement.className = `${pageName}Item`;
        listElement.appendChild(itemElement);
        fillItem(itemElement, null, true);
      }
      const leftArrowElement = createElement("span");
      paginationElement.appendChild(leftArrowElement);
      leftArrowElement.innerHTML = "&lt;";
      leftArrowElement.id = `${pageName}PaginationLeftArrow`;
      leftArrowElement.className = "paginationLeftArrow";
      const pageNumbersWrapElement = createElement("span");
      paginationElement.appendChild(pageNumbersWrapElement);
      pageNumbersWrapElement.id = `${pageName}PaginationPageNumbersWrap`;
      pageNumbersWrapElement.className = "paginationPageNumbersWrap";
      const rightArrowElement = createElement("span");
      paginationElement.appendChild(rightArrowElement);
      rightArrowElement.innerHTML = "&gt;";
      rightArrowElement.id = `${pageName}PaginationRightArrow`;
      rightArrowElement.className = "paginationRightArrow";
      // Page index start from 0.
      // this.changePaginationParams(pageSize, countOfLastPage, fillItem, listElement, list, pageCount, paginationElement);
      this.changePaginationParams(
        list,
        pageSize,
        listElement,
        paginationElement,
        fillItem,
      );
    };
    this.changePaginationParams = (
      list,
      pageSize,
      listElement,
      // pageNumbersWrapElement: HTMLSpanElement,
      // leftArrowElement: HTMLSpanElement,
      // rightArrowElement: HTMLSpanElement,
      paginationElement,
      fillItem,
    ) => {
      const leftArrowElement = paginationElement.children[0];
      const pageNumbersWrapElement = paginationElement.children[1];
      const rightArrowElement = paginationElement.children[2];
      const itemCount = list.length;
      const pageCount = Math.ceil(itemCount / pageSize);
      const pageMaxIndex = pageCount - 1;
      const countOfLastPage = itemCount - pageSize * pageMaxIndex;
      let currentPage = -1;
      const gotoPage = (pageIndex) => {
        if (pageIndex > pageMaxIndex) {
          pageIndex = pageMaxIndex;
        } else if (pageIndex < 0) {
          pageIndex = 0;
        }
        if (currentPage === pageIndex) {
          return;
        }
        const countOfCurrentPage = pageIndex < pageMaxIndex
          ? pageSize
          : countOfLastPage;
        const indexOffset = pageSize * pageIndex;
        for (let i = 0; i < countOfCurrentPage; ++i) {
          fillItem(listElement.children[i], list[indexOffset + i]);
        }
        for (let i = pageSize - 1; i >= countOfCurrentPage; --i) {
          fillItem(listElement.children[i], null);
        }
        currentPage = pageIndex;
        this.pageIndex = pageIndex;
        const pageNumberElementMaxIndex =
          pageNumbersWrapElement.children.length - 1;
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
          let startIndex = 1, endIndex = pageNumberElementMaxIndex;
          if (pageIndex < 4) {
            endIndex = pageNumberElementMaxIndex - 1;
            for (let i = startIndex; i <= endIndex; ++i) {
              const pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            const rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(PAGE_PROPERTY, "6");
          } else if (pageIndex >= pageMaxIndex - 4) {
            startIndex = 2;
            for (let i = startIndex; i <= endIndex; ++i) {
              const pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            const leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageMaxIndex - 4).toString(),
            );
          } else {
            startIndex = 2;
            endIndex = pageNumberElementMaxIndex - 1;
            for (let i = startIndex; i <= endIndex; ++i) {
              const pageNumberElement = pageNumbersWrapElement.children[i];
              pageNumberElement.innerHTML = (i + 1).toString();
              if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                pageNumberElement.removeAttribute(PAGE_PROPERTY);
              }
            }
            const leftEllipsisElement = createElement("span");
            leftEllipsisElement.innerHTML = "...";
            leftEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex - 2).toString(),
            );
            const rightEllipsisElement = createElement("span");
            rightEllipsisElement.innerHTML = "...";
            rightEllipsisElement.setAttribute(
              PAGE_PROPERTY,
              (pageIndex + 2).toString(),
            );
          }
        }
        const pageIndexStr = (pageIndex + 1).toString();
        for (let i = 0; i <= pageNumberElementMaxIndex; ++i) {
          const pageNumberElement = pageNumbersWrapElement.children[i];
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
        const url = window.location.href;
        const pageSeg = `&page=${pageIndexStr}`;
        const fullUrl = url.indexOf("&page=") === -1
          ? url.concat(pageSeg)
          : url.replace(/&page=[0-9]+/g, pageSeg);
        console.log(JSON.stringify({ url, fullUrl }));
        if (url !== fullUrl) {
          setTimeout(() => {
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
          leftArrowElement.onclick = (event) => {
            gotoPage(currentPage - 1);
            return stopEventBubble(event);
          };
          rightArrowElement.onclick = (event) => {
            gotoPage(currentPage + 1);
            return stopEventBubble(event);
          };
          pageNumbersWrapElement.innerHTML = "";
          if (pageCount < 10) {
            for (let i = 0; i < pageCount; ++i) {
              const pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
          } else {
            for (let i = 0; i < 5; ++i) {
              const pageNumberElement = createElement("span");
              pageNumberElement.innerHTML = (i + 1).toString();
              pageNumbersWrapElement.appendChild(pageNumberElement);
            }
            const ellipsisElement = createElement("span");
            ellipsisElement.innerHTML = "...";
            pageNumbersWrapElement.appendChild(ellipsisElement);
            const lastPageNumberElement = createElement("span");
            lastPageNumberElement.innerHTML = pageCount.toString();
            pageNumbersWrapElement.appendChild(lastPageNumberElement);
          }
          const pageNumberElementCount = pageNumbersWrapElement.children.length;
          for (let i = 0; i < pageNumberElementCount; ++i) {
            const pageNumberElement = pageNumbersWrapElement.children[i];
            pageNumberElement.onclick = (event) => {
              const element = event.target;
              const innerHTML = element.innerHTML;
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
      gotoPage(this.pageIndex);
    };
  }
}
/**
 * <en>Class: general global object of computer browser. Based on Global object, it provides general functions of various pages of computer browser.</en>
 * <zh_cn>电脑浏览器通用全局对象，基于Global对象，提供电脑浏览器各页面通用功能。</zh_cn>
 * <zh_tw>電腦瀏覽器通用全域對象，基於Global對象，提供電腦瀏覽器各頁面通用功能。</zh_tw>
 */
export const pcGlobal = new PcGlobal();
document.onclick = () => {
  querySelectorAll(
    ".topMenuItemSubMenuWrap,#shareArea,#brickPageShareArea,#brickPageSponsorImage",
  )
    .forEach((element) => hide(element));
};
