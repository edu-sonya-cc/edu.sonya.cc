// import { SITE_IMAGE_PATH, PageSize } from '../const';
// import { stories } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, stopEventBubble, getI18nInnerHTML, getI18nInnerHTMLFromDate } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
// import { mainImageVersions } from '../version';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
/// <reference path='../../types/version.d.ts' />

class StoriesPage extends ActualPageBase {
  private mainContentElement = createElement("div") as HTMLDivElement;
  private topImageElement = createElement("img") as HTMLImageElement;
  private pageSubjectElement = createElement("div") as HTMLDivElement;
  private listElement = createElement("div") as HTMLDivElement;
  private paginationElement = createElement("div") as HTMLDivElement;

  public initTitleElement(): void {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en_us: "Growing List",
      zh_cn: "成长足迹清单",
      zh_tw: "成長足迹清單",
    };
  }

  public initMainElement = () => {
    const PAGE_NAME = "storiesPage";

    const mainElement = getMainElement();
    mainElement.id = `${PAGE_NAME}Main`;

    const {
      mainContentElement,
      topImageElement,
      pageSubjectElement,
      listElement,
      paginationElement,
    } = this;
    mainElement.appendChild(topImageElement);
    mainElement.appendChild(mainContentElement);

    mainContentElement.id = `${PAGE_NAME}MainContent`;
    mainContentElement.appendChild(pageSubjectElement);
    mainContentElement.appendChild(listElement);
    mainContentElement.appendChild(paginationElement);

    topImageElement.id = `${PAGE_NAME}MainImage`;
    topImageElement.className = "topImage";
    topImageElement.src =
      `${SITE_IMAGE_PATH}5stories/topImage.jpg?${mainImageVersions.stories}`;

    pageSubjectElement.id = `${PAGE_NAME}Subject`;
    pageSubjectElement.className = "pageSubject";

    ['en_us', 'zh_cn', 'zh_tw'].forEach((lang: string) => {
      const span = createElement(lang) as HTMLSpanElement;
      pageSubjectElement.appendChild(span);

      const image = createElement('img') as HTMLImageElement;
      // image.setAttribute('class', `${PAGE_NAME}SubjectImage`);
      image.setAttribute('class', 'pageSubject');

      const src = `./images/0common/${lang}/5stories.png`;
      image.src = src;
      image.alt = src;

      span.appendChild(image);
    });

    pcGlobal.fillListAndPagination(
      listElement,
      paginationElement,
      PageSize.storiesPage,
      stories.map((item: object, index: number) => {
        return { id: index + 1, ...item };
      }),
      PAGE_NAME,
      (itemElement: HTMLDivElement, data: object | null, init?: boolean) => {
        if (init) {
          const titleElement = createElement("div") as HTMLDivElement;
          titleElement.className = `${PAGE_NAME}Title`;
          itemElement.appendChild(titleElement);

          const summaryAndDateElement = createElement("div") as HTMLDivElement;
          summaryAndDateElement.className = `${PAGE_NAME}SummaryAndDateWrap`;
          itemElement.appendChild(summaryAndDateElement);

          const summaryElement = createElement("span") as HTMLSpanElement;
          summaryElement.className = `${PAGE_NAME}Summary`;
          summaryAndDateElement.appendChild(summaryElement);

          const storyDateElement = createElement("span") as HTMLSpanElement;
          storyDateElement.className = `${PAGE_NAME}Date`;
          summaryAndDateElement.appendChild(storyDateElement);

          const hrElement = createElement("hr") as HTMLHRElement;
          itemElement.appendChild(hrElement);
          hrElement.className = `${PAGE_NAME}Hr`;
        } else if (data === null) {
          const titleElement = itemElement.children[0] as HTMLDivElement;
          titleElement.innerHTML = "";

          const summaryAndDateElement = itemElement
            .children[1] as HTMLDivElement;
          const summaryElement = summaryAndDateElement
            .children[0] as HTMLSpanElement;
          const storyDateElement = summaryAndDateElement
            .children[1] as HTMLSpanElement;

          summaryElement.innerHTML = "";
          storyDateElement.innerHTML = "";

          const hrElement = itemElement.children[2] as HTMLHRElement;
          hide(hrElement);

          itemElement.onclick = (event: Event) => {
            return stopEventBubble(event);
          };
        } else {
          // const {isTop, version} = data;
          const { id, date, title, summary } = data as {
            id: number;
            date: Date;
            title: { en_us: string; zh_cn: string; zh_tw: string };
            summary: { en_us: string; zh_cn: string; zh_tw: string };
          };

          const titleElement = itemElement.children[0] as HTMLDivElement;
          titleElement.innerHTML = getI18nInnerHTML(title);

          const summaryAndDateElement = itemElement
            .children[1] as HTMLDivElement;
          const summaryElement = summaryAndDateElement
            .children[0] as HTMLSpanElement;
          const storyDateElement = summaryAndDateElement
            .children[1] as HTMLSpanElement;

          summaryElement.innerHTML = getI18nInnerHTML(summary);
          // const chineseDate = global.getChineseDate(date);
          // storyDateElement.innerHTML = `<en_us>${global.getEnglishDate(date)}</en_us><zh_cn>${chineseDate}</zh_cn><zh_tw>${chineseDate}</zh_tw>`;
          storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);

          const hrElement = itemElement.children[2] as HTMLHRElement;
          showBlock(hrElement);

          itemElement.onclick = (event: Event) => {
            window.location.href = `?go=story&id=${id}`;
            return stopEventBubble(event);
          };
        }
      },
    );
  };

  public init = () => {
    super.init();
  };
}

const storiesPage = new StoriesPage();
storiesPage.init();
