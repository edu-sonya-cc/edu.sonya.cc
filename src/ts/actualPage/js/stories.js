// import { SITE_IMAGE_PATH, PageSize } from '../const';
// import { stories } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, stopEventBubble, getI18nInnerHTML, getI18nInnerHTMLFromDate } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
// import { mainImageVersions } from '../version';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
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
/// <reference path='../../types/version.d.ts' />
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
            mainElement.id = PAGE_NAME + "Main";
            var _a = _this,
                mainContentElement = _a.mainContentElement,
                topImageElement = _a.topImageElement,
                pageSubjectElement = _a.pageSubjectElement,
                listElement = _a.listElement,
                paginationElement = _a.paginationElement;
            mainElement.appendChild(topImageElement);
            mainElement.appendChild(mainContentElement);
            mainContentElement.id = PAGE_NAME + "MainContent";
            mainContentElement.appendChild(pageSubjectElement);
            mainContentElement.appendChild(listElement);
            mainContentElement.appendChild(paginationElement);
            topImageElement.id = PAGE_NAME + "MainImage";
            topImageElement.className = "topImage";
            topImageElement.src =
                SITE_IMAGE_PATH + "5stories/topImage.jpg?" + mainImageVersions.stories;
            pageSubjectElement.id = PAGE_NAME + "Subject";
            pageSubjectElement.className = "pageSubject";
            ['en_us', 'zh_cn', 'zh_tw'].forEach(function (lang) {
                var span = createElement(lang);
                pageSubjectElement.appendChild(span);
                var image = createElement('img');
                // image.setAttribute('class', `${PAGE_NAME}SubjectImage`);
                image.setAttribute('class', 'pageSubject');
                var src = "images/0common/" + lang + "/5stories.png";
                image.src = src;
                image.alt = src;
                span.appendChild(image);
            });
            pcGlobal.fillListAndPagination(listElement, paginationElement, PageSize.storiesPage, stories.map(function (item, index) {
                return __assign({
                    id: index + 1
                }, item);
            }), PAGE_NAME, function (itemElement, data, init) {
                if (init) {
                    var titleElement = createElement("div");
                    titleElement.className = PAGE_NAME + "Title";
                    itemElement.appendChild(titleElement);
                    var summaryAndDateElement = createElement("div");
                    summaryAndDateElement.className = PAGE_NAME + "SummaryAndDateWrap";
                    itemElement.appendChild(summaryAndDateElement);
                    var summaryElement = createElement("span");
                    summaryElement.className = PAGE_NAME + "Summary";
                    summaryAndDateElement.appendChild(summaryElement);
                    var storyDateElement = createElement("span");
                    storyDateElement.className = PAGE_NAME + "Date";
                    summaryAndDateElement.appendChild(storyDateElement);
                    var hrElement = createElement("hr");
                    itemElement.appendChild(hrElement);
                    hrElement.className = PAGE_NAME + "Hr";
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
                    // storyDateElement.innerHTML = `<en_us>${global.getEnglishDate(date)}</en_us><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
                    storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
                    var hrElement = itemElement.children[2];
                    showBlock(hrElement);
                    itemElement.onclick = function (event) {
                        window.location.href = "?go=story&id=" + id_1;
                        return stopEventBubble(event);
                    };
                }
            });
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    StoriesPage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: "Growing List",
            zh_cn: "成长足迹清单",
            zh_tw: "成長足迹清單"
        };
    };
    return StoriesPage;
}(ActualPageBase));
var storiesPage = new StoriesPage();
storiesPage.init();