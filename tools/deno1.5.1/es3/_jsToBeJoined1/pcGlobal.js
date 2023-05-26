System.register("pcGlobal", [], function (exports_1, context_1) {
    "use strict";
    var PcGlobal, pcGlobal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PcGlobal = (function () {
                function PcGlobal() {
                    var _this = this;
                    this.shareAreaElement = createElement("div");
                    this.wechatShareElement = createElement("img");
                    this.headerElement = getHeaderElement();
                    this.logoElement = createElement("img");
                    this.navElement = createElement("nav");
                    this.footerElement = getFooterElement();
                    this.mainElement = getMainElement();
                    this.topMenuItems = [
                        {
                            id: "topMenuHome",
                            kind: "a",
                            link: "" + HOME_URL,
                            titles: { en: "Home", zh_cn: "\u9996\u9875", zh_tw: "\u9996\u9801" }
                        },
                        {
                            id: "topMenuBricks",
                            kind: "a",
                            link: HOME_URL + "?go=bricks&kind=0&page=1",
                            titles: { en: "Tools", zh_cn: "\u629B\u7816\u5F15\u7389", zh_tw: "\u629B\u78DA\u5F15\u7389" }
                        },
                        {
                            id: "topMenuTreasures",
                            kind: "a",
                            link: HOME_URL + "?go=treasures&page=1",
                            titles: { en: "Treasures", zh_cn: "\u7269\u534E\u5929\u5B9D", zh_tw: "\u7269\u83EF\u5929\u5BF6" }
                        },
                        {
                            id: "topMenuStories",
                            kind: "a",
                            link: HOME_URL + "?go=stories&page=1",
                            titles: { en: "Growings", zh_cn: "\u6210\u957F\u8DB3\u8FF9", zh_tw: "\u6210\u9577\u8DB3\u8FF9" }
                        },
                        {
                            id: "topMenuAbout",
                            kind: "a",
                            link: HOME_URL + "?go=about",
                            titles: { en: "About", zh_cn: "\u5173\u4E8E\u6211\u4EEC", zh_tw: "\u95DC\u65BC\u6211\u5011" }
                        },
                        {
                            id: "topMenuLanguage",
                            kind: "select",
                            link: "onChangeLanuage",
                            titles: { en: "Language", zh_cn: "\u8BED\u8A00", zh_tw: "\u8A9E\u8A00" },
                            options: "<option value='en'>English</option><option value='zh_cn'>简体</option><option value='zh_tw'>繁體</option>",
                            onchange: "onChangeLanuage"
                        },
                        {
                            id: "topMenuGithub",
                            kind: "a",
                            link: "https://github.com/edu-sonya-cc/edu.sonya.cc",
                            titles: { en: "", zh_cn: "", zh_tw: "" }
                        },
                        {
                            id: "topMenuSearch",
                            kind: "button",
                            link: "",
                            titles: { en: "", zh_cn: "", zh_tw: "" },
                            onclick: "onShowSearchRegion"
                        },
                    ];
                    this.footerHotAreas = [
                        {
                            id: "footIcpLink",
                            href: "https://beian.miit.gov.cn/"
                        },
                        {
                            id: "footPoliceLink",
                            href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302035110"
                        },
                        {
                            id: "footEmailLink",
                            href: "mailto:edu.sonya.cc@foxmail.com"
                        },
                        {
                            id: "footShareLink",
                            href: "javascript:void(0);",
                            onclick: "onShare"
                        },
                    ];
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
                                url =
                                    HOME_URL + "?go=" + ACTUAL_PAGE_NAME + "&kind=" + _this.getPageSubKind();
                                break;
                            case "treasures":
                            case "stories":
                                url =
                                    HOME_URL + "?go=" + ACTUAL_PAGE_NAME + "&kind=" + _this.getPageSubKind();
                                break;
                            case "bricks":
                                url =
                                    HOME_URL + "?go=" + ACTUAL_PAGE_NAME + "&kind=" + _this.getPageSubKind() + "&page=" + _this.getPageIndex();
                                break;
                            default:
                                break;
                        }
                        try {
                            window.external
                                .addFavorite(url, title);
                        }
                        catch (e) {
                            try {
                                window.sidebar.addPanel(title, url, "");
                            }
                            catch (e) {
                                alert(errorTip);
                            }
                        }
                        return stopEventBubble(event);
                    };
                    this.onShare = function (event) {
                        console.log("onShare()");
                        var url = encodeURI(window.location.href);
                        var wechatShareImageSrcPostfix = url.indexOf("&") === -1
                            ? ""
                            : "/".concat(url.split("&").slice(1).map(function (keyValue) { return keyValue.split("=")[1]; }).join("_"));
                        var wechatShareImageSrc = "" + SITE_IMAGE_PATH + ACTUAL_PAGE_NAME + wechatShareImageSrcPostfix + ".png";
                        _this.wechatShareElement.setAttribute("src", wechatShareImageSrc);
                        _this.wechatShareElement.setAttribute("alt", wechatShareImageSrc);
                        showInlineFlex(_this.shareAreaElement);
                        return stopEventBubble(event);
                    };
                    this.searchRegionElement = createElement("div");
                    this.onShowSearchRegion = function (event) {
                        console.log("onShowSearchRegion()");
                        showBlock(_this.searchRegionElement);
                        return stopEventBubble(event);
                    };
                    this.onChangeLanuage = function (event) {
                        console.log("onChangeLanuage()");
                        setCurrentLang(getElementById("topMenuLanguage")
                            .value);
                        return stopEventBubble(event);
                    };
                    this.pageSubKind = PAGE_SUB_KIND;
                    this.getPageSubKind = function () { return _this.pageSubKind; };
                    this.setPageSubKind = function (kind) {
                        _this.pageSubKind = kind;
                    };
                    this.pageIndex = PAGE_IDNEX;
                    this.getPageIndex = function () { return _this.pageIndex + 1; };
                    this.setPageIndex = function (index) {
                        _this.pageIndex = index - 1;
                    };
                    this.init = function () {
                        global.init();
                        var _a = _this, shareAreaElement = _a.shareAreaElement, wechatShareElement = _a.wechatShareElement, headerElement = _a.headerElement, logoElement = _a.logoElement, navElement = _a.navElement, topMenuItems = _a.topMenuItems, footerElement = _a.footerElement, footerHotAreas = _a.footerHotAreas, mainElement = _a.mainElement, searchRegionElement = _a.searchRegionElement;
                        mainElement.appendChild(searchRegionElement);
                        searchRegionElement.setAttribute("id", "searchRegion");
                        footerElement.appendChild(shareAreaElement);
                        shareAreaElement.appendChild(wechatShareElement);
                        headerElement.appendChild(logoElement);
                        headerElement.appendChild(navElement);
                        shareAreaElement.setAttribute("id", "shareArea");
                        wechatShareElement.setAttribute("id", "wechatShare");
                        logoElement.setAttribute("id", "logo");
                        navElement.setAttribute("id", "menu");
                        var rootUrl = SITE_ROOT;
                        var logoUrl = SITE_IMAGE_PATH.concat("0common/logo.jpg");
                        logoElement.setAttribute("src", logoUrl);
                        logoElement.setAttribute("alt", logoUrl);
                        logoElement.onclick = function () {
                            window.location.href = HOME_URL;
                        };
                        var currentLang = getCurrentLang();
                        shareAreaElement.onclick = function () { return false; };
                        footerElement.onclick = function () {
                            hide(shareAreaElement);
                        };
                        footerHotAreas.forEach(function (hotArea) {
                            var aElement = createElement("a");
                            footerElement.appendChild(aElement);
                            var id = hotArea.id, href = hotArea.href, onclick = hotArea.onclick;
                            aElement.setAttribute("id", id);
                            if (!href.startsWith(HOME_URL.substring(0, 20))) {
                                setAttributesOfA(aElement, href);
                            }
                            else {
                                aElement.setAttribute("href", href);
                            }
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
                                        break;
                                }
                            }
                        });
                        topMenuItems.forEach(function (_a) {
                            var id = _a.id, kind = _a.kind, link = _a.link, titles = _a.titles, options = _a.options, onclick = _a.onclick, onchange = _a.onchange;
                            var elementType = (kind === "menu" ? "a" : kind);
                            var menu = createElement(elementType);
                            navElement.appendChild(menu);
                            menu.setAttribute("id", id);
                            var activated = id.substring(7).toLowerCase() === ACTUAL_PAGE_NAME;
                            if (activated) {
                                menu.setAttribute(ACTIVATED_PROPERTY, "");
                            }
                            if (kind === "a") {
                                if (!link.startsWith(HOME_URL.substring(0, 20))) {
                                    setAttributesOfA(menu, link);
                                }
                                else {
                                    menu.setAttribute("href", link);
                                }
                            }
                            menu.i18n = titles;
                            if (kind === "menu") {
                                var subMenuWrap_1 = createElement("div");
                                headerElement.appendChild(subMenuWrap_1);
                                subMenuWrap_1.setAttribute("id", id.concat("SubMenuWrap"));
                                subMenuWrap_1.setAttribute("class", "topMenuItemSubMenuWrap");
                                menu.onclick = function (event) {
                                    showBlock(subMenuWrap_1);
                                    return stopEventBubble(event);
                                };
                            }
                            if (kind === "select") {
                                menu.innerHTML = options;
                                menu.value = currentLang;
                                switch (onchange) {
                                    case "onChangeLanuage":
                                        menu.onchange = _this.onChangeLanuage;
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else {
                                menu.innerHTML = getI18nInnerHTML(titles);
                            }
                            if (onclick) {
                                switch (onclick) {
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
                    };
                    this.fillListAndPagination = function (listElement, paginationElement, pageSize, list, pageName, fillItem) {
                        listElement.id = pageName + "List";
                        paginationElement.className = "pagination";
                        var itemCount = list.length;
                        var pageCount = Math.ceil(itemCount / pageSize);
                        var pageMaxIndex = pageCount - 1;
                        var countOfLastPage = itemCount - pageSize * pageMaxIndex;
                        for (var i = 0; i < pageSize; ++i) {
                            var itemElement = createElement("div");
                            itemElement.className = pageName + "Item";
                            listElement.appendChild(itemElement);
                            fillItem(itemElement, null, true);
                        }
                        var leftArrowElement = createElement("span");
                        paginationElement.appendChild(leftArrowElement);
                        leftArrowElement.innerHTML = "&lt;";
                        leftArrowElement.id = pageName + "PaginationLeftArrow";
                        leftArrowElement.className = "paginationLeftArrow";
                        var pageNumbersWrapElement = createElement("span");
                        paginationElement.appendChild(pageNumbersWrapElement);
                        pageNumbersWrapElement.id = pageName + "PaginationPageNumbersWrap";
                        pageNumbersWrapElement.className = "paginationPageNumbersWrap";
                        var rightArrowElement = createElement("span");
                        paginationElement.appendChild(rightArrowElement);
                        rightArrowElement.innerHTML = "&gt;";
                        rightArrowElement.id = pageName + "PaginationRightArrow";
                        rightArrowElement.className = "paginationRightArrow";
                        _this.changePaginationParams(list, pageSize, listElement, paginationElement, fillItem);
                    };
                    this.changePaginationParams = function (list, pageSize, listElement, paginationElement, fillItem) {
                        var leftArrowElement = paginationElement.children[0];
                        var pageNumbersWrapElement = paginationElement
                            .children[1];
                        var rightArrowElement = paginationElement.children[2];
                        var itemCount = list.length;
                        var pageCount = Math.ceil(itemCount / pageSize);
                        var pageMaxIndex = pageCount - 1;
                        var countOfLastPage = itemCount - pageSize * pageMaxIndex;
                        var currentPage = -1;
                        var gotoPage = function (pageIndex) {
                            if (pageIndex > pageMaxIndex)
                                pageIndex = pageMaxIndex;
                            else if (pageIndex < 0)
                                pageIndex = 0;
                            if (currentPage === pageIndex)
                                return;
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
                                var startIndex = 1, endIndex = pageNumberElementMaxIndex;
                                if (pageIndex < 4) {
                                    endIndex = pageNumberElementMaxIndex - 1;
                                    for (var i = startIndex; i <= endIndex; ++i) {
                                        var pageNumberElement = pageNumbersWrapElement
                                            .children[i];
                                        pageNumberElement.innerHTML = (i + 1).toString();
                                        if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                                            pageNumberElement.removeAttribute(PAGE_PROPERTY);
                                        }
                                    }
                                    var rightEllipsisElement = createElement("span");
                                    rightEllipsisElement.innerHTML = "...";
                                    rightEllipsisElement.setAttribute(PAGE_PROPERTY, "6");
                                }
                                else if (pageIndex >= pageMaxIndex - 4) {
                                    startIndex = 2;
                                    for (var i = startIndex; i <= endIndex; ++i) {
                                        var pageNumberElement = pageNumbersWrapElement
                                            .children[i];
                                        pageNumberElement.innerHTML = (i + 1).toString();
                                        if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                                            pageNumberElement.removeAttribute(PAGE_PROPERTY);
                                        }
                                    }
                                    var leftEllipsisElement = createElement("span");
                                    leftEllipsisElement.innerHTML = "...";
                                    leftEllipsisElement.setAttribute(PAGE_PROPERTY, (pageMaxIndex - 4).toString());
                                }
                                else {
                                    startIndex = 2;
                                    endIndex = pageNumberElementMaxIndex - 1;
                                    for (var i = startIndex; i <= endIndex; ++i) {
                                        var pageNumberElement = pageNumbersWrapElement
                                            .children[i];
                                        pageNumberElement.innerHTML = (i + 1).toString();
                                        if (pageNumberElement.hasAttribute(PAGE_PROPERTY)) {
                                            pageNumberElement.removeAttribute(PAGE_PROPERTY);
                                        }
                                    }
                                    var leftEllipsisElement = createElement("span");
                                    leftEllipsisElement.innerHTML = "...";
                                    leftEllipsisElement.setAttribute(PAGE_PROPERTY, (pageIndex - 2).toString());
                                    var rightEllipsisElement = createElement("span");
                                    rightEllipsisElement.innerHTML = "...";
                                    rightEllipsisElement.setAttribute(PAGE_PROPERTY, (pageIndex + 2).toString());
                                }
                            }
                            var pageIndexStr = (pageIndex + 1).toString();
                            for (var i = 0; i <= pageNumberElementMaxIndex; ++i) {
                                var pageNumberElement = pageNumbersWrapElement
                                    .children[i];
                                if (pageNumberElement.innerHTML === pageIndexStr) {
                                    pageNumberElement.setAttribute(ACTIVATED_PROPERTY, "");
                                }
                                else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
                                    pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
                                }
                            }
                            if (pageIndex === 0) {
                                leftArrowElement.setAttribute("disabled", "");
                            }
                            else if (leftArrowElement.hasAttribute("disabled")) {
                                leftArrowElement.removeAttribute("disabled");
                            }
                            if (pageIndex === pageMaxIndex) {
                                rightArrowElement.setAttribute("disabled", "");
                            }
                            else if (rightArrowElement.hasAttribute("disabled")) {
                                rightArrowElement.removeAttribute("disabled");
                            }
                            var url = window.location.href;
                            var pageSeg = "&page=" + pageIndexStr;
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
                                }
                                else {
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
                                    var pageNumberElement = pageNumbersWrapElement
                                        .children[i];
                                    pageNumberElement.onclick = function (event) {
                                        var element = event.target;
                                        var innerHTML = element.innerHTML;
                                        if (innerHTML === "...") {
                                            gotoPage(parseInt(element.getAttribute(PAGE_PROPERTY), 0) - 1);
                                        }
                                        else {
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
            exports_1("pcGlobal", pcGlobal = new PcGlobal());
            document.onclick = function () {
                querySelectorAll(".topMenuItemSubMenuWrap,#shareArea,#brickPageShareArea,#brickPageSponsorImage")
                    .forEach(function (element) { return hide(element); });
            };
        }
    };
});

__exp = __instantiate("pcGlobal", false);
const pcGlobal = __exp["pcGlobal"];

