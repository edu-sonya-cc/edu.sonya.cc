// import { PAGE_ID } from '../const';
// import { stories } from '../data/data';
// import { createElement, getTitleElement, getMainElement, getI18nInnerHTML } from '../dom';
// import { ActualPageBase } from './actualPageBase';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
var StoryPage = /** @class */ (function (_super) {
    __extends(StoryPage, _super);
    function StoryPage() {
        // private imageElement = createElement('img') as HTMLImageElement;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initMainElement = function () {
            var mainElement = getMainElement();
            // const { imageElement } = this;
            // mainElement.appendChild(imageElement);
            // imageElement.setAttribute('id', 'storyPageMainImage');
            // const id = PAGE_ID;
            // const story = stories[id];
            // const { version } = story;
            // const { isTop, date, title, summary } = story;
            // const src =  `${SITE_IMAGE_PATH}6story/${id}.jpg?${version}`;
            // imageElement.src = src;
            // imageElement.alt = src;
            // const { html } = story;
            var contentElement = createElement("div");
            mainElement.appendChild(contentElement);
            // contentElement.innerHTML = html;
            contentElement.innerHTML = getI18nInnerHTML(stories.filter(function (_a) {
                var id = _a.id;
                return id === PAGE_ID;
            })[0].html);
            contentElement.id = "storyPageContent";
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    StoryPage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: "Growing",
            zh_cn: "成长足迹",
            zh_tw: "成長足跡"
        };
    };
    return StoryPage;
}(ActualPageBase));
var storyPage = new StoryPage();
storyPage.init();
