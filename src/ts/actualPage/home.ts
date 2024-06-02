// import { SITE_IMAGE_PATH, MORE_BUTTON_HTML } from '../const';
// import { createElement, getTitleElement, getMainElement, setAttributesOfA, stopEventBubble, showFlex, hide, getI18nInnerHTML, getI18nInnerHTMLFromDate } from '../dom';
// import { PageSize, stories, teachers } from '../data/data';
// import { ActualPageBase } from './actualPageBase';
// import { global } from '../global';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />

class HomePage extends ActualPageBase {
  private topImageElement = createElement("img") as HTMLImageElement;

  private readonly TEACHER_COUNT_PER_PAGE = PageSize.homePage.teachers;
  private sectionList = [
    {
      id: "homePageAbout",
      class: "leftAndRightSidesTextAndImage",
      title: {
        en_us: "Sparks of Fire",
        zh_cn: "星星之火",
        zh_tw: "星星之火",
      },
      summary: {
        en_us:
          `Pure kindness comes from the heart, just like seeds. It sprouts in the cold winter, spreads with the Internet, and benefits children.
Sincere blessing, originating from compassion, is like a spark. Born from China, you and I spread it, warming the world.
The beauty of life is based on compassion and wisdom, the beauty of the earth is based on virtue, the beauty of the sky is based on depth, the beauty of mathematics is based on simplicity, the beauty of language is based on love of words, and the beauty of science and technology must be improved.
The seed breaks through the soil and can become a towering tree to protect the world's creatures; Sparks rise in dim light and can become bright torches, shining through the darkness of the night.`,
        zh_cn: `纯净善念，源于内心，犹如粒粒种子，寒冬之际萌芽，随网扩散，广利孩童。<br/>
真诚祝福，发自悲悯，犹如星星之火，神州大地生起，您我传播，遍暖全球。<br/><br/>

生命之美依悲智，大地之美源厚德，<br/>
苍穹之美因深邃，数学之美凭简约，<br/>
语言之美在爱语，科技之美须向善。<br/><br/>

种子破土而出，可成参天大树，庇佑天下生灵；<br/>
星火微光而起，可成璀璨火炬，照彻长夜黑暗。`,
        zh_tw: `純淨善念，源於內心，猶如粒粒種子，寒冬之際萌芽，隨網擴散，廣利孩童。<br/>
真誠祝福，發自悲憫，猶如星星之火，神州大地生起，您我傳播，遍暖全球。<br/><br/>

生命之美依悲智，大地之美源厚德，<br/>
蒼穹之美因深邃，數學之美憑簡約，<br/>
語言之美在愛語，科技之美須向善。<br/><br/>

種子破土而出，可成參天大樹，庇佑天下生靈；<br/>
星火微光而起，可成璀璨火炬，照徹長夜黑暗。`,
      },
      image: "about.jpg",
      subjectImage: "7about.png",
      items: [],
      moreLink: "?go=about",
    },
    {
      id: "homePageBricks",
      class: "leftAndRightSidesTextAndImage",
      title: {
        en_us: "Throwing a brick to attract jade",
        zh_cn: "抛砖引玉",
        zh_tw: "抛磚引玉",
      },
      summary: {
        en_us: `The drop of water is soft enough to wear through the stone.<br/>
The rope is weak and can break the wood.<br/>
Although I am stupid, I can get a thousand worries.<br/>
Throw these simple bricks to attract many beautiful jades.`,
        zh_cn: `滴水至柔，恒久可致石穿。<br/>
绳索纤弱，持之能使木断。<br/>
吾虽愚钝，千虑亦可一得。<br/>
抛此朴砖，以引众家美玉。`,
        zh_tw: `滴水至柔，恒久可致石穿。<br/>
繩索纖弱，持之能使木斷。<br/>
吾雖愚鈍，千慮亦可一得。<br/>
拋此樸磚，以引眾家美玉。`,
      },
      image: "bricks.jpg",
      subjectImage: "2bricks.png",
      items: [],
      moreLink: "?go=bricks&kind=0&page=1",
    },
    {
      id: "homePageTreasures",
      class: "leftAndRightSidesTextAndImage",
      title: {
        en_us: "Natural treasures",
        zh_cn: "物华天宝",
        zh_tw: "物華天寶",
      },
      summary: {
        en_us: `The grand China is the backbone of everything<br/>
The towering China, with its long history, has become an article<br/>

Mengxi Bi Tan, Tiangong Kaiwu, a series of craftsmen have been produced since ancient times,<br/>
Poems, Books, Rites, Music, Changes, and Spring and Autumn Annals have passed on wisdom through the ages<br/>

Wang Bo's Preface to Tengwang Pavilion: "There are many treasures in the sky. The dragon shines on the ruins where cattle fight. There are outstanding people and places. Xu Ru gets down on the bed of Chen Fan."<br/>
Based on this reason, I collected some works of a great craftsman, so we can see the heavy weapons in a glimpse.`,
        zh_cn: `泱泱华夏，一撇一捺，尽是脊梁。<br/>
巍巍中华，厚积薄发，皆成文章。<br/><br/>

《梦溪笔谈》《天工开物》，自古巧匠辈出，<br/>
《诗》《书》《礼》《乐》《易》《春秋》，千秋智慧传承。<br/><br/>

王勃《滕王阁序》：“物华天宝，龙光射牛斗之墟，人杰地灵，徐孺下陈蕃之榻。”<br/>
依此因缘，略集巨匠之作，管中窥豹，可见重器一斑。`,
        zh_tw: `泱泱華夏，一撇一捺，盡是脊樑。<br/>
巍巍中華，厚積薄發，皆成文章。<br/><br/>

《夢溪筆談》《天工開物》，自古巧匠輩出，<br/>
《詩》《書》《禮》《樂》《易》《春秋》，千秋智慧傳承。<br/><br/>

王勃《滕王閣序》：“物華天寶，龍光射牛鬥之墟，人傑地靈，徐孺下陳蕃之榻。”<br/>
依此因緣，略集巨匠之作，管中窺豹，可見重器一斑。`,
      },
      image: "treasures.jpg",
      subjectImage: "4treasures.png",
      items: [],
      moreLink: "?go=treasures&page=1",
    },
    {
      id: "homePageStories",
      class: "leftAndRightSidesList",
      title: {
        en_us: "growing",
        zh_cn: "成长足迹",
        zh_tw: "成長足跡",
      },
      summary: {
        en_us: ``,
        zh_cn: ``,
        zh_tw: ``,
      },
      image: "stories.png",
      subjectImage: "5stories.png",
      items: [],
      moreLink: "?go=stories&page=1",
    },
    {
      id: "homePageTeachers",
      class: "flippableCardList",
      title: {
        en_us: "Good teachers and helpful friends",
        zh_cn: "良师益友",
        zh_tw: "良師益友",
      },
      summary: {
        en_us: ``,
        zh_cn: ``,
        zh_tw: ``,
      },
      image: "teacher.png",
      subjectImage: "9teachers.png",
      items: [],
      moreLink: "",
    },
  ];

  public initTitleElement(): void {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en_us: "地势坤--Terrain Kun",
      zh_cn: "地势坤",
      zh_tw: "地势坤--地勢坤",
    };
  }

  public initMainElement = () => {
    const mainElement = getMainElement();

    const { topImageElement, sectionList, TEACHER_COUNT_PER_PAGE } = this;
    mainElement.appendChild(topImageElement);

    const topImageUrl = SITE_IMAGE_PATH.concat("1home/topImage.jpg");
    topImageElement.setAttribute("id", "topImage");
    topImageElement.setAttribute("src", topImageUrl);
    topImageElement.setAttribute("alt", topImageUrl);

    sectionList.forEach(
      (
        { id, "class": sectionClass, title, summary, image, subjectImage, items, moreLink },
        sectionIndex,
      ) => {
        const sectionWrapElement = createElement("div");
        mainElement.appendChild(sectionWrapElement);

        sectionWrapElement.setAttribute("id", id);
        sectionWrapElement.setAttribute("class", sectionClass);

        const sectionSubjectElement = createElement("div");
        sectionSubjectElement.setAttribute("class", "homePageSubject");
        sectionSubjectElement.id = id.concat("Subject");

        ['en_us', 'zh_cn', 'zh_tw'].forEach((lang: string) => {
          const span = createElement(lang) as HTMLSpanElement;
          sectionSubjectElement.appendChild(span);

          const image = createElement('img') as HTMLImageElement;
          // image.setAttribute("class", "homePageSubjectImage");
          image.setAttribute('class', 'pageSubject');

          const src = `./images/0common/${lang}/${subjectImage}`;
          image.src = src;
          image.alt = src;

          span.appendChild(image);
        });

        switch (sectionClass) {
          case "leftAndRightSidesTextAndImage":
            const imageElementInTextAndImage = createElement("img") as HTMLImageElement;
            const textWrapElementInTextAndImage = createElement("div") as HTMLDivElement;

            const imageUrlInTextAndImage = `${SITE_IMAGE_PATH}1home/${image}`;
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

            const summaryElementInTextAndImage = createElement(
              "div",
            ) as HTMLDivElement;
            // summaryElementInTextAndImage.setAttribute("class", "homePageTextAndImage");
            summaryElementInTextAndImage.innerHTML = getI18nInnerHTML(summary);
            textWrapElementInTextAndImage.appendChild(
              summaryElementInTextAndImage,
            );

            const moreElement = createElement("a") as HTMLAnchorElement;
            moreElement.href = moreLink;
            moreElement.className = "moreButton primary";
            moreElement.innerHTML = MORE_BUTTON_HTML;
            textWrapElementInTextAndImage.appendChild(moreElement);

            imageElementInTextAndImage.onclick = textWrapElementInTextAndImage
              .onclick = (event) => {
                window.location.href = moreLink;
                return stopEventBubble(event);
              };

            break;
          case "leftAndRightSidesList":
            sectionWrapElement.appendChild(sectionSubjectElement);

            const leftAreaOfLeftAndRightSidesListWrapElement = createElement(
              "div",
            );
            leftAreaOfLeftAndRightSidesListWrapElement.className =
              "leftAndRightSidesListWrap";
            sectionWrapElement.appendChild(
              leftAreaOfLeftAndRightSidesListWrapElement,
            );

            // const leftAreaElement = createElement('div');
            // leftAreaElement.setAttribute('class', 'leftAreaOfLeftAndRightSidesList');
            // leftAreaOfLeftAndRightSidesListWrapElement.appendChild(leftAreaElement);

            // const rightAreaElement = createElement('div');
            // rightAreaElement.setAttribute('class', 'rightAreaOfLeftAndRightSidesList');
            // leftAreaOfLeftAndRightSidesListWrapElement.appendChild(rightAreaElement);

            const storiesPageSize = PageSize.homePage.stories;
            type StoryType = {
              id: number;
              isTop: boolean;
              date: Date;
              version: string;
              title: {
                en_us: string;
                zh_cn: string;
                zh_tw: string;
              };
              summary: {
                en_us: string;
                zh_cn: string;
                zh_tw: string;
              };
            };
            // const storiesOfFirstPage = stories.map((item, index) => { return { index, ...item }; }) as Array<{ index: number } & StoryType>;
            const storiesOfFirstPage = stories.map((item: StoryType) => {
              return { ...item };
            }) as StoryType;
            storiesOfFirstPage.sort((prev, next) => {
              if (!prev.isTop && next.isTop) return -1;
              if (prev.isTop && !next.isTop) return 1;

              return (prev.date === next.date)
                ? 0
                : (prev.date === next.date ? -1 : 0);
            });

            for (let i = 0; i < storiesPageSize; ++i) {
              const storyWrapElement = createElement("div") as HTMLDivElement;
              storyWrapElement.className = "homePageStoryWrap";
              // ((i % 2 === 0) ? leftAreaElement : rightAreaElement).appendChild(storyWrapElement);
              leftAreaOfLeftAndRightSidesListWrapElement.appendChild(
                storyWrapElement,
              );

              // const { isTop, date, version, title, summary } = storiesOfFirstPage[i];
              const { id, date, title, summary } = storiesOfFirstPage[i];
              // console.log(id , date , title , summary, storiesOfFirstPage[i]);
              const storyTitleAndTimeElement = createElement(
                "div",
              ) as HTMLDivElement;
              storyTitleAndTimeElement.className = "homePageStoryTitleAndTime";
              storyWrapElement.appendChild(storyTitleAndTimeElement);

              const storyTitleElement = createElement(
                "span",
              ) as HTMLSpanElement;
              storyTitleElement.className = "homePageStoryTitle";
              storyTitleElement.innerHTML = getI18nInnerHTML(title);
              storyTitleAndTimeElement.appendChild(storyTitleElement);

              const storyDateElement = createElement("span") as HTMLSpanElement;
              storyDateElement.className = "homePageStoryTime";
              // const chineseDate = global.getChineseDate(date);
              // storyDateElement.innerHTML = `<en_us>${global.getEnglishDate(date)}</en_us><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
              storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
              storyTitleAndTimeElement.appendChild(storyDateElement);

              const storySummaryElement = createElement(
                "div",
              ) as HTMLDivElement;
              storySummaryElement.className = "homePageStorySummary";
              storySummaryElement.innerHTML = getI18nInnerHTML(summary);
              storyWrapElement.appendChild(storySummaryElement);

              storyWrapElement.onclick = (event: Event) => {
                window.location.href = `?go=story&id=${id}`;
                return stopEventBubble(event);
              };
            }

            const moreStoriesWrapElement = createElement("div");
            moreStoriesWrapElement.id = "homePageMoreStoryWrap";
            sectionWrapElement.appendChild(moreStoriesWrapElement);

            const moreStoriesElement = createElement("a") as HTMLAnchorElement;
            moreStoriesElement.href = moreLink;
            moreStoriesElement.className = "moreButton primary";
            moreStoriesElement.innerHTML = MORE_BUTTON_HTML;
            moreStoriesWrapElement.appendChild(moreStoriesElement);

            break;
          case "flippableCardList":
            sectionWrapElement.appendChild(sectionSubjectElement);

            const flippableCardListWrapElement = createElement("div");
            flippableCardListWrapElement.className = "flippableCardListWrap";
            sectionWrapElement.appendChild(flippableCardListWrapElement);

            const leftArrowElement = createElement("span") as HTMLSpanElement;
            flippableCardListWrapElement.appendChild(leftArrowElement);
            leftArrowElement.innerHTML = "&lt;";
            leftArrowElement.setAttribute("id", "flippableCardListLeftArrow");

            const flippableCardsElement = createElement("span");
            flippableCardListWrapElement.appendChild(flippableCardsElement);
            flippableCardsElement.setAttribute("id", "flippableCards");

            const TEACHER_IMAGE_POSTFIX = `${SITE_IMAGE_PATH}1home/teachers/`;
            for (let i = 0; i < TEACHER_COUNT_PER_PAGE; ++i) {
              const aElement = createElement("a");
              aElement.className = "homePageTeacherA";
              setAttributesOfA(aElement, "javascript:void(0);");
              flippableCardsElement.appendChild(aElement);

              // const imgElement = createElement('img') as HTMLImageElement;
              // imgElement.className = 'homePageTeacherImage';
              // aElement.appendChild(imgElement);

              const wrap = createElement("span") as HTMLSpanElement;
              wrap.className = "homePageTeacherWrap";
              aElement.appendChild(wrap);

              const imgElement = createElement("img") as HTMLImageElement;
              imgElement.className = "homePageTeacherImage";
              wrap.appendChild(imgElement);

              const name = createElement("span") as HTMLSpanElement;
              name.className = "homePageTeacherName";
              wrap.appendChild(name);

              const urlWrapper = createElement("span") as HTMLSpanElement;
              urlWrapper.className = "homePageTeacherUrlWrapper";
              wrap.appendChild(urlWrapper);

              const url = createElement("span") as HTMLSpanElement;
              url.className = "homePageTeacherUrl";
              urlWrapper.appendChild(url);
            }

            const rightArrowElement = createElement("span") as HTMLSpanElement;
            flippableCardListWrapElement.appendChild(rightArrowElement);
            rightArrowElement.innerHTML = "&gt;";
            rightArrowElement.setAttribute("id", "flippableCardListRightArrow");

            const teacherCount = teachers.length;
            const teacherPageCount = Math.ceil(
              teacherCount / TEACHER_COUNT_PER_PAGE,
            );
            const maxTeacherPageIndex = teacherPageCount - 1;
            const teacherCountOfLastPage = teacherCount -
              TEACHER_COUNT_PER_PAGE * maxTeacherPageIndex;

            let currentPage = -1;
            var gotoPage = function (pageIndex: number) {
              if (pageIndex > maxTeacherPageIndex) {
                pageIndex = maxTeacherPageIndex;
              } else if (pageIndex < 0) pageIndex = 0;

              if (currentPage === pageIndex) return;

              const teacherCountOfCurrentPage = pageIndex < maxTeacherPageIndex
                ? TEACHER_COUNT_PER_PAGE
                : teacherCountOfLastPage;
              const indexOffset = TEACHER_COUNT_PER_PAGE * pageIndex;

              for (let i = 0; i < teacherCountOfCurrentPage; ++i) {
                const aElement = (flippableCardsElement as HTMLElement)
                  .children[i] as HTMLAnchorElement;

                const teacher = teachers[indexOffset + i];
                const { name, link, i18n } = teacher;

                aElement.setAttribute("href", link);

                const wrap = aElement.children[0] as HTMLSpanElement;
                showFlex(wrap);

                const imgElement = wrap.children[0] as HTMLImageElement;
                const imageUrl = `${TEACHER_IMAGE_POSTFIX}${name}.png`;
                imgElement.src = imageUrl;
                imgElement.alt = imageUrl;

                const nameElement = wrap.children[1] as HTMLSpanElement;
                nameElement.innerHTML = getI18nInnerHTML(i18n);

                const urlElement = (wrap.children[2] as HTMLSpanElement)
                  .children[0] as HTMLSpanElement;
                urlElement.innerHTML = link;
              }

              for (
                let i = TEACHER_COUNT_PER_PAGE - teacherCountOfCurrentPage;
                i > 0;
                --i
              ) {
                const aElement = (flippableCardsElement as HTMLElement)
                  .children[TEACHER_COUNT_PER_PAGE - i] as HTMLElement;
                aElement.setAttribute("href", "javascript:void(0);");

                // const imgElement = aElement.children[0] as HTMLImageElement;
                // hide(imgElement);
                hide(aElement.children[0] as HTMLElement);
              }

              currentPage = pageIndex;

              if (pageIndex === 0) {
                leftArrowElement.setAttribute("disabled", "");
              } else if (leftArrowElement.hasAttribute("disabled")) {
                leftArrowElement.removeAttribute("disabled");
              }

              if (pageIndex === maxTeacherPageIndex) {
                rightArrowElement.setAttribute("disabled", "");
              } else if (rightArrowElement.hasAttribute("disabled")) {
                rightArrowElement.removeAttribute("disabled");
              }
            }

            if (teacherPageCount < 2) {
              leftArrowElement.setAttribute("disabled", "");
              rightArrowElement.setAttribute("disabled", "");
            } else {
              leftArrowElement.onclick = (event: Event) => {
                gotoPage(currentPage - 1);

                return stopEventBubble(event);
              };
              rightArrowElement.onclick = (event: Event) => {
                gotoPage(currentPage + 1);

                return stopEventBubble(event);
              };
            }

            gotoPage(0);

            break;
          default:
            break;
        }
      },
    );
  };

  public init(): void {
    super.init();
  }
}

const homePage = new HomePage();
homePage.init();
