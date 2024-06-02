// import { SITE_IMAGE_PATH, MORE_BUTTON_HTML } from '../const';
// import { createElement, getTitleElement, getMainElement, setAttributesOfA, stopEventBubble, showFlex, hide, getI18nInnerHTML, getI18nInnerHTMLFromDate } from '../dom';
// import { PageSize, stories, teachers } from '../data/data';
// import { ActualPageBase } from './actualPageBase';
// import { global } from '../global';
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
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);

    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topImageElement = createElement("img");
        _this.TEACHER_COUNT_PER_PAGE = PageSize.homePage.teachers;
        _this.sectionList = [{
                id: "homePageAbout",
                "class": "leftAndRightSidesTextAndImage",
                title: {
                    en_us: "Sparks of Fire",
                    zh_cn: "星星之火",
                    zh_tw: "星星之火"
                },
                summary: {
                    en_us: "Pure kindness comes from the heart, just like seeds. It sprouts in the cold winter, spreads with the Internet, and benefits children.\nSincere blessing, originating from compassion, is like a spark. Born from China, you and I spread it, warming the world.\nThe beauty of life is based on compassion and wisdom, the beauty of the earth is based on virtue, the beauty of the sky is based on depth, the beauty of mathematics is based on simplicity, the beauty of language is based on love of words, and the beauty of science and technology must be improved.\nThe seed breaks through the soil and can become a towering tree to protect the world's creatures; Sparks rise in dim light and can become bright torches, shining through the darkness of the night.",
                    zh_cn: "\u7EAF\u51C0\u5584\u5FF5\uFF0C\u6E90\u4E8E\u5185\u5FC3\uFF0C\u72B9\u5982\u7C92\u7C92\u79CD\u5B50\uFF0C\u5BD2\u51AC\u4E4B\u9645\u840C\u82BD\uFF0C\u968F\u7F51\u6269\u6563\uFF0C\u5E7F\u5229\u5B69\u7AE5\u3002<br/>\n\u771F\u8BDA\u795D\u798F\uFF0C\u53D1\u81EA\u60B2\u60AF\uFF0C\u72B9\u5982\u661F\u661F\u4E4B\u706B\uFF0C\u795E\u5DDE\u5927\u5730\u751F\u8D77\uFF0C\u60A8\u6211\u4F20\u64AD\uFF0C\u904D\u6696\u5168\u7403\u3002<br/><br/>\n\n\u751F\u547D\u4E4B\u7F8E\u4F9D\u60B2\u667A\uFF0C\u5927\u5730\u4E4B\u7F8E\u6E90\u539A\u5FB7\uFF0C<br/>\n\u82CD\u7A79\u4E4B\u7F8E\u56E0\u6DF1\u9083\uFF0C\u6570\u5B66\u4E4B\u7F8E\u51ED\u7B80\u7EA6\uFF0C<br/>\n\u8BED\u8A00\u4E4B\u7F8E\u5728\u7231\u8BED\uFF0C\u79D1\u6280\u4E4B\u7F8E\u987B\u5411\u5584\u3002<br/><br/>\n\n\u79CD\u5B50\u7834\u571F\u800C\u51FA\uFF0C\u53EF\u6210\u53C2\u5929\u5927\u6811\uFF0C\u5E87\u4F51\u5929\u4E0B\u751F\u7075\uFF1B<br/>\n\u661F\u706B\u5FAE\u5149\u800C\u8D77\uFF0C\u53EF\u6210\u7480\u74A8\u706B\u70AC\uFF0C\u7167\u5F7B\u957F\u591C\u9ED1\u6697\u3002",
                    zh_tw: "\u7D14\u6DE8\u5584\u5FF5\uFF0C\u6E90\u65BC\u5167\u5FC3\uFF0C\u7336\u5982\u7C92\u7C92\u7A2E\u5B50\uFF0C\u5BD2\u51AC\u4E4B\u969B\u840C\u82BD\uFF0C\u96A8\u7DB2\u64F4\u6563\uFF0C\u5EE3\u5229\u5B69\u7AE5\u3002<br/>\n\u771F\u8AA0\u795D\u798F\uFF0C\u767C\u81EA\u60B2\u61AB\uFF0C\u7336\u5982\u661F\u661F\u4E4B\u706B\uFF0C\u795E\u5DDE\u5927\u5730\u751F\u8D77\uFF0C\u60A8\u6211\u50B3\u64AD\uFF0C\u904D\u6696\u5168\u7403\u3002<br/><br/>\n\n\u751F\u547D\u4E4B\u7F8E\u4F9D\u60B2\u667A\uFF0C\u5927\u5730\u4E4B\u7F8E\u6E90\u539A\u5FB7\uFF0C<br/>\n\u84BC\u7A79\u4E4B\u7F8E\u56E0\u6DF1\u9083\uFF0C\u6578\u5B78\u4E4B\u7F8E\u6191\u7C21\u7D04\uFF0C<br/>\n\u8A9E\u8A00\u4E4B\u7F8E\u5728\u611B\u8A9E\uFF0C\u79D1\u6280\u4E4B\u7F8E\u9808\u5411\u5584\u3002<br/><br/>\n\n\u7A2E\u5B50\u7834\u571F\u800C\u51FA\uFF0C\u53EF\u6210\u53C3\u5929\u5927\u6A39\uFF0C\u5E87\u4F51\u5929\u4E0B\u751F\u9748\uFF1B<br/>\n\u661F\u706B\u5FAE\u5149\u800C\u8D77\uFF0C\u53EF\u6210\u7480\u74A8\u706B\u70AC\uFF0C\u7167\u5FB9\u9577\u591C\u9ED1\u6697\u3002"
                },
                image: "about.jpg",
                subjectImage: "7about.png",
                items: [],
                moreLink: "?go=about"
            },
            {
                id: "homePageBricks",
                "class": "leftAndRightSidesTextAndImage",
                title: {
                    en_us: "Throwing a brick to attract jade",
                    zh_cn: "抛砖引玉",
                    zh_tw: "抛磚引玉"
                },
                summary: {
                    en_us: "The drop of water is soft enough to wear through the stone.<br/>\nThe rope is weak and can break the wood.<br/>\nAlthough I am stupid, I can get a thousand worries.<br/>\nThrow these simple bricks to attract many beautiful jades.",
                    zh_cn: "\u6EF4\u6C34\u81F3\u67D4\uFF0C\u6052\u4E45\u53EF\u81F4\u77F3\u7A7F\u3002<br/>\n\u7EF3\u7D22\u7EA4\u5F31\uFF0C\u6301\u4E4B\u80FD\u4F7F\u6728\u65AD\u3002<br/>\n\u543E\u867D\u611A\u949D\uFF0C\u5343\u8651\u4EA6\u53EF\u4E00\u5F97\u3002<br/>\n\u629B\u6B64\u6734\u7816\uFF0C\u4EE5\u5F15\u4F17\u5BB6\u7F8E\u7389\u3002",
                    zh_tw: "\u6EF4\u6C34\u81F3\u67D4\uFF0C\u6052\u4E45\u53EF\u81F4\u77F3\u7A7F\u3002<br/>\n\u7E69\u7D22\u7E96\u5F31\uFF0C\u6301\u4E4B\u80FD\u4F7F\u6728\u65B7\u3002<br/>\n\u543E\u96D6\u611A\u920D\uFF0C\u5343\u616E\u4EA6\u53EF\u4E00\u5F97\u3002<br/>\n\u62CB\u6B64\u6A38\u78DA\uFF0C\u4EE5\u5F15\u773E\u5BB6\u7F8E\u7389\u3002"
                },
                image: "bricks.jpg",
                subjectImage: "2bricks.png",
                items: [],
                moreLink: "?go=bricks&kind=0&page=1"
            },
            {
                id: "homePageTreasures",
                "class": "leftAndRightSidesTextAndImage",
                title: {
                    en_us: "Natural treasures",
                    zh_cn: "物华天宝",
                    zh_tw: "物華天寶"
                },
                summary: {
                    en_us: "The grand China is the backbone of everything<br/>\nThe towering China, with its long history, has become an article<br/>\n\nMengxi Bi Tan, Tiangong Kaiwu, a series of craftsmen have been produced since ancient times,<br/>\nPoems, Books, Rites, Music, Changes, and Spring and Autumn Annals have passed on wisdom through the ages<br/>\n\nWang Bo's Preface to Tengwang Pavilion: \"There are many treasures in the sky. The dragon shines on the ruins where cattle fight. There are outstanding people and places. Xu Ru gets down on the bed of Chen Fan.\"<br/>\nBased on this reason, I collected some works of a great craftsman, so we can see the heavy weapons in a glimpse.",
                    zh_cn: "\u6CF1\u6CF1\u534E\u590F\uFF0C\u4E00\u6487\u4E00\u637A\uFF0C\u5C3D\u662F\u810A\u6881\u3002<br/>\n\u5DCD\u5DCD\u4E2D\u534E\uFF0C\u539A\u79EF\u8584\u53D1\uFF0C\u7686\u6210\u6587\u7AE0\u3002<br/><br/>\n\n\u300A\u68A6\u6EAA\u7B14\u8C08\u300B\u300A\u5929\u5DE5\u5F00\u7269\u300B\uFF0C\u81EA\u53E4\u5DE7\u5320\u8F88\u51FA\uFF0C<br/>\n\u300A\u8BD7\u300B\u300A\u4E66\u300B\u300A\u793C\u300B\u300A\u4E50\u300B\u300A\u6613\u300B\u300A\u6625\u79CB\u300B\uFF0C\u5343\u79CB\u667A\u6167\u4F20\u627F\u3002<br/><br/>\n\n\u738B\u52C3\u300A\u6ED5\u738B\u9601\u5E8F\u300B\uFF1A\u201C\u7269\u534E\u5929\u5B9D\uFF0C\u9F99\u5149\u5C04\u725B\u6597\u4E4B\u589F\uFF0C\u4EBA\u6770\u5730\u7075\uFF0C\u5F90\u5B7A\u4E0B\u9648\u8543\u4E4B\u69BB\u3002\u201D<br/>\n\u4F9D\u6B64\u56E0\u7F18\uFF0C\u7565\u96C6\u5DE8\u5320\u4E4B\u4F5C\uFF0C\u7BA1\u4E2D\u7AA5\u8C79\uFF0C\u53EF\u89C1\u91CD\u5668\u4E00\u6591\u3002",
                    zh_tw: "\u6CF1\u6CF1\u83EF\u590F\uFF0C\u4E00\u6487\u4E00\u637A\uFF0C\u76E1\u662F\u810A\u6A11\u3002<br/>\n\u5DCD\u5DCD\u4E2D\u83EF\uFF0C\u539A\u7A4D\u8584\u767C\uFF0C\u7686\u6210\u6587\u7AE0\u3002<br/><br/>\n\n\u300A\u5922\u6EAA\u7B46\u8AC7\u300B\u300A\u5929\u5DE5\u958B\u7269\u300B\uFF0C\u81EA\u53E4\u5DE7\u5320\u8F29\u51FA\uFF0C<br/>\n\u300A\u8A69\u300B\u300A\u66F8\u300B\u300A\u79AE\u300B\u300A\u6A02\u300B\u300A\u6613\u300B\u300A\u6625\u79CB\u300B\uFF0C\u5343\u79CB\u667A\u6167\u50B3\u627F\u3002<br/><br/>\n\n\u738B\u52C3\u300A\u6ED5\u738B\u95A3\u5E8F\u300B\uFF1A\u201C\u7269\u83EF\u5929\u5BF6\uFF0C\u9F8D\u5149\u5C04\u725B\u9B25\u4E4B\u589F\uFF0C\u4EBA\u5091\u5730\u9748\uFF0C\u5F90\u5B7A\u4E0B\u9673\u8543\u4E4B\u69BB\u3002\u201D<br/>\n\u4F9D\u6B64\u56E0\u7DE3\uFF0C\u7565\u96C6\u5DE8\u5320\u4E4B\u4F5C\uFF0C\u7BA1\u4E2D\u7ABA\u8C79\uFF0C\u53EF\u898B\u91CD\u5668\u4E00\u6591\u3002"
                },
                image: "treasures.jpg",
                subjectImage: "4treasures.png",
                items: [],
                moreLink: "?go=treasures&page=1"
            },
            {
                id: "homePageStories",
                "class": "leftAndRightSidesList",
                title: {
                    en_us: "growing",
                    zh_cn: "成长足迹",
                    zh_tw: "成長足跡"
                },
                summary: {
                    en_us: "",
                    zh_cn: "",
                    zh_tw: ""
                },
                image: "stories.png",
                subjectImage: "5stories.png",
                items: [],
                moreLink: "?go=stories&page=1"
            },
            {
                id: "homePageTeachers",
                "class": "flippableCardList",
                title: {
                    en_us: "Good teachers and helpful friends",
                    zh_cn: "良师益友",
                    zh_tw: "良師益友"
                },
                summary: {
                    en_us: "",
                    zh_cn: "",
                    zh_tw: ""
                },
                image: "teacher.png",
                subjectImage: "9teachers.png",
                items: [],
                moreLink: ""
            },
        ];
        _this.initMainElement = function () {
            var mainElement = getMainElement();
            var _a = _this,
                topImageElement = _a.topImageElement,
                sectionList = _a.sectionList,
                TEACHER_COUNT_PER_PAGE = _a.TEACHER_COUNT_PER_PAGE;
            mainElement.appendChild(topImageElement);
            var topImageUrl = SITE_IMAGE_PATH.concat("1home/topImage.jpg");
            topImageElement.setAttribute("id", "topImage");
            topImageElement.setAttribute("src", topImageUrl);
            topImageElement.setAttribute("alt", topImageUrl);
            sectionList.forEach(function (_a, sectionIndex) {
                var id = _a.id,
                    sectionClass = _a["class"],
                    title = _a.title,
                    summary = _a.summary,
                    image = _a.image,
                    subjectImage = _a.subjectImage,
                    items = _a.items,
                    moreLink = _a.moreLink;
                var sectionWrapElement = createElement("div");
                mainElement.appendChild(sectionWrapElement);
                sectionWrapElement.setAttribute("id", id);
                sectionWrapElement.setAttribute("class", sectionClass);
                var sectionSubjectElement = createElement("div");
                sectionSubjectElement.setAttribute("class", "homePageSubject");
                sectionSubjectElement.id = id.concat("Subject");
                ['en_us', 'zh_cn', 'zh_tw'].forEach(function (lang) {
                    var span = createElement(lang);
                    sectionSubjectElement.appendChild(span);
                    var image = createElement('img');
                    // image.setAttribute("class", "homePageSubjectImage");
                    image.setAttribute('class', 'pageSubject');
                    var src = "images/0common/" + lang + "/" + subjectImage;
                    image.src = src;
                    image.alt = src;
                    span.appendChild(image);
                });
                switch (sectionClass) {
                    case "leftAndRightSidesTextAndImage":
                        var imageElementInTextAndImage = createElement("img");
                        var textWrapElementInTextAndImage = createElement("div");
                        var imageUrlInTextAndImage = SITE_IMAGE_PATH + "1home/" + image;
                        imageElementInTextAndImage.src = imageUrlInTextAndImage;
                        imageElementInTextAndImage.alt = imageUrlInTextAndImage;
                        if (sectionIndex % 2 === 0) {
                            sectionWrapElement.appendChild(imageElementInTextAndImage);
                            sectionWrapElement.appendChild(textWrapElementInTextAndImage);
                        } else {
                            sectionWrapElement.appendChild(textWrapElementInTextAndImage);
                            sectionWrapElement.appendChild(imageElementInTextAndImage);
                        }
                        textWrapElementInTextAndImage.appendChild(sectionSubjectElement);
                        var summaryElementInTextAndImage = createElement("div");
                        // summaryElementInTextAndImage.setAttribute("class", "homePageTextAndImage");
                        summaryElementInTextAndImage.innerHTML = getI18nInnerHTML(summary);
                        textWrapElementInTextAndImage.appendChild(summaryElementInTextAndImage);
                        var moreElement = createElement("a");
                        moreElement.href = moreLink;
                        moreElement.className = "moreButton primary";
                        moreElement.innerHTML = MORE_BUTTON_HTML;
                        textWrapElementInTextAndImage.appendChild(moreElement);
                        imageElementInTextAndImage.onclick = textWrapElementInTextAndImage
                            .onclick = function (event) {
                                window.location.href = moreLink;
                                return stopEventBubble(event);
                            };
                        break;
                    case "leftAndRightSidesList":
                        sectionWrapElement.appendChild(sectionSubjectElement);
                        var leftAreaOfLeftAndRightSidesListWrapElement = createElement("div");
                        leftAreaOfLeftAndRightSidesListWrapElement.className =
                            "leftAndRightSidesListWrap";
                        sectionWrapElement.appendChild(leftAreaOfLeftAndRightSidesListWrapElement);
                        // const leftAreaElement = createElement('div');
                        // leftAreaElement.setAttribute('class', 'leftAreaOfLeftAndRightSidesList');
                        // leftAreaOfLeftAndRightSidesListWrapElement.appendChild(leftAreaElement);
                        // const rightAreaElement = createElement('div');
                        // rightAreaElement.setAttribute('class', 'rightAreaOfLeftAndRightSidesList');
                        // leftAreaOfLeftAndRightSidesListWrapElement.appendChild(rightAreaElement);
                        var storiesPageSize = PageSize.homePage.stories;
                        // const storiesOfFirstPage = stories.map((item, index) => { return { index, ...item }; }) as Array<{ index: number } & StoryType>;
                        var storiesOfFirstPage = stories.map(function (item) {
                            return __assign({}, item);
                        });
                        storiesOfFirstPage.sort(function (prev, next) {
                            if (!prev.isTop && next.isTop)
                                return -1;
                            if (prev.isTop && !next.isTop)
                                return 1;
                            return (prev.date === next.date) ?
                                0 :
                                (prev.date === next.date ? -1 : 0);
                        });
                        var _loop_1 = function (i) {
                            var storyWrapElement = createElement("div");
                            storyWrapElement.className = "homePageStoryWrap";
                            // ((i % 2 === 0) ? leftAreaElement : rightAreaElement).appendChild(storyWrapElement);
                            leftAreaOfLeftAndRightSidesListWrapElement.appendChild(storyWrapElement);
                            // const { isTop, date, version, title, summary } = storiesOfFirstPage[i];
                            var _a = storiesOfFirstPage[i],
                                id_1 = _a.id,
                                date = _a.date,
                                title_1 = _a.title,
                                summary_1 = _a.summary;
                            // console.log(id , date , title , summary, storiesOfFirstPage[i]);
                            var storyTitleAndTimeElement = createElement("div");
                            storyTitleAndTimeElement.className = "homePageStoryTitleAndTime";
                            storyWrapElement.appendChild(storyTitleAndTimeElement);
                            var storyTitleElement = createElement("span");
                            storyTitleElement.className = "homePageStoryTitle";
                            storyTitleElement.innerHTML = getI18nInnerHTML(title_1);
                            storyTitleAndTimeElement.appendChild(storyTitleElement);
                            var storyDateElement = createElement("span");
                            storyDateElement.className = "homePageStoryTime";
                            // const chineseDate = global.getChineseDate(date);
                            // storyDateElement.innerHTML = `<en_us>${global.getEnglishDate(date)}</en_us><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
                            storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
                            storyTitleAndTimeElement.appendChild(storyDateElement);
                            var storySummaryElement = createElement("div");
                            storySummaryElement.className = "homePageStorySummary";
                            storySummaryElement.innerHTML = getI18nInnerHTML(summary_1);
                            storyWrapElement.appendChild(storySummaryElement);
                            storyWrapElement.onclick = function (event) {
                                window.location.href = "?go=story&id=" + id_1;
                                return stopEventBubble(event);
                            };
                        };
                        for (var i = 0; i < storiesPageSize; ++i) {
                            _loop_1(i);
                        }
                        var moreStoriesWrapElement = createElement("div");
                        moreStoriesWrapElement.id = "homePageMoreStoryWrap";
                        sectionWrapElement.appendChild(moreStoriesWrapElement);
                        var moreStoriesElement = createElement("a");
                        moreStoriesElement.href = moreLink;
                        moreStoriesElement.className = "moreButton primary";
                        moreStoriesElement.innerHTML = MORE_BUTTON_HTML;
                        moreStoriesWrapElement.appendChild(moreStoriesElement);
                        break;
                    case "flippableCardList":
                        sectionWrapElement.appendChild(sectionSubjectElement);
                        var flippableCardListWrapElement = createElement("div");
                        flippableCardListWrapElement.className = "flippableCardListWrap";
                        sectionWrapElement.appendChild(flippableCardListWrapElement);
                        var leftArrowElement_1 = createElement("span");
                        flippableCardListWrapElement.appendChild(leftArrowElement_1);
                        leftArrowElement_1.innerHTML = "&lt;";
                        leftArrowElement_1.setAttribute("id", "flippableCardListLeftArrow");
                        var flippableCardsElement_1 = createElement("span");
                        flippableCardListWrapElement.appendChild(flippableCardsElement_1);
                        flippableCardsElement_1.setAttribute("id", "flippableCards");
                        var TEACHER_IMAGE_POSTFIX_1 = SITE_IMAGE_PATH + "1home/teachers/";
                        for (var i = 0; i < TEACHER_COUNT_PER_PAGE; ++i) {
                            var aElement = createElement("a");
                            aElement.className = "homePageTeacherA";
                            setAttributesOfA(aElement, "javascript:void(0);");
                            flippableCardsElement_1.appendChild(aElement);
                            // const imgElement = createElement('img') as HTMLImageElement;
                            // imgElement.className = 'homePageTeacherImage';
                            // aElement.appendChild(imgElement);
                            var wrap = createElement("span");
                            wrap.className = "homePageTeacherWrap";
                            aElement.appendChild(wrap);
                            var imgElement = createElement("img");
                            imgElement.className = "homePageTeacherImage";
                            wrap.appendChild(imgElement);
                            var name = createElement("span");
                            name.className = "homePageTeacherName";
                            wrap.appendChild(name);
                            var urlWrapper = createElement("span");
                            urlWrapper.className = "homePageTeacherUrlWrapper";
                            wrap.appendChild(urlWrapper);
                            var url = createElement("span");
                            url.className = "homePageTeacherUrl";
                            urlWrapper.appendChild(url);
                        }
                        var rightArrowElement_1 = createElement("span");
                        flippableCardListWrapElement.appendChild(rightArrowElement_1);
                        rightArrowElement_1.innerHTML = "&gt;";
                        rightArrowElement_1.setAttribute("id", "flippableCardListRightArrow");
                        var teacherCount = teachers.length;
                        var teacherPageCount = Math.ceil(teacherCount / TEACHER_COUNT_PER_PAGE);
                        var maxTeacherPageIndex_1 = teacherPageCount - 1;
                        var teacherCountOfLastPage_1 = teacherCount -
                            TEACHER_COUNT_PER_PAGE * maxTeacherPageIndex_1;
                        var currentPage_1 = -1;
                        var gotoPage = function (pageIndex) {
                            if (pageIndex > maxTeacherPageIndex_1) {
                                pageIndex = maxTeacherPageIndex_1;
                            } else if (pageIndex < 0)
                                pageIndex = 0;
                            if (currentPage_1 === pageIndex)
                                return;
                            var teacherCountOfCurrentPage = pageIndex < maxTeacherPageIndex_1 ?
                                TEACHER_COUNT_PER_PAGE :
                                teacherCountOfLastPage_1;
                            var indexOffset = TEACHER_COUNT_PER_PAGE * pageIndex;
                            for (var i = 0; i < teacherCountOfCurrentPage; ++i) {
                                var aElement = flippableCardsElement_1
                                    .children[i];
                                var teacher = teachers[indexOffset + i];
                                var name = teacher.name,
                                    link = teacher.link,
                                    i18n = teacher.i18n;
                                aElement.setAttribute("href", link);
                                var wrap = aElement.children[0];
                                showFlex(wrap);
                                var imgElement = wrap.children[0];
                                var imageUrl = "" + TEACHER_IMAGE_POSTFIX_1 + name + ".png";
                                imgElement.src = imageUrl;
                                imgElement.alt = imageUrl;
                                var nameElement = wrap.children[1];
                                nameElement.innerHTML = getI18nInnerHTML(i18n);
                                var urlElement = wrap.children[2]
                                    .children[0];
                                urlElement.innerHTML = link;
                            }
                            for (var i = TEACHER_COUNT_PER_PAGE - teacherCountOfCurrentPage; i > 0; --i) {
                                var aElement = flippableCardsElement_1
                                    .children[TEACHER_COUNT_PER_PAGE - i];
                                aElement.setAttribute("href", "javascript:void(0);");
                                // const imgElement = aElement.children[0] as HTMLImageElement;
                                // hide(imgElement);
                                hide(aElement.children[0]);
                            }
                            currentPage_1 = pageIndex;
                            if (pageIndex === 0) {
                                leftArrowElement_1.setAttribute("disabled", "");
                            } else if (leftArrowElement_1.hasAttribute("disabled")) {
                                leftArrowElement_1.removeAttribute("disabled");
                            }
                            if (pageIndex === maxTeacherPageIndex_1) {
                                rightArrowElement_1.setAttribute("disabled", "");
                            } else if (rightArrowElement_1.hasAttribute("disabled")) {
                                rightArrowElement_1.removeAttribute("disabled");
                            }
                        };
                        if (teacherPageCount < 2) {
                            leftArrowElement_1.setAttribute("disabled", "");
                            rightArrowElement_1.setAttribute("disabled", "");
                        } else {
                            leftArrowElement_1.onclick = function (event) {
                                gotoPage(currentPage_1 - 1);
                                return stopEventBubble(event);
                            };
                            rightArrowElement_1.onclick = function (event) {
                                gotoPage(currentPage_1 + 1);
                                return stopEventBubble(event);
                            };
                        }
                        gotoPage(0);
                        break;
                    default:
                        break;
                }
            });
        };
        return _this;
    }
    HomePage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: "地势坤--Terrain Kun",
            zh_cn: "地势坤",
            zh_tw: "地势坤--地勢坤"
        };
    };
    HomePage.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return HomePage;
}(ActualPageBase));
var homePage = new HomePage();
homePage.init();