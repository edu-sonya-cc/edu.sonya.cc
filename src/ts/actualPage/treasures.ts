// import { SITE_IMAGE_PATH, PageSize, MORE_BUTTON_HTML } from '../const';
// import { treasures } from '../data/data';
// import { createElement, getTitleElement, getMainElement, showBlock, hide, getI18nInnerHTML } from '../dom';
// import { pcGlobal } from '../pcGlobal';
// import { ActualPageBase } from './actualPageBase';
// import { mainImageVersions } from '../version';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/pcGlobal.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
/// <reference path='../../types/version.d.ts' />

class TreasuresPage extends ActualPageBase {
  private mainContentElement = createElement("div") as HTMLDivElement;
  private topImageElement = createElement("img") as HTMLImageElement;
  private pageSubjectElement = createElement("div") as HTMLDivElement;
  private listElement = createElement("div") as HTMLDivElement;
  private paginationElement = createElement("div") as HTMLDivElement;

  public initTitleElement(): void {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en_us: "Natural Treasures List",
      zh_cn: "物华天宝清单",
      zh_tw: "物華天寶清單",
    };
  }

  public initMainElement = () => {
    const PAGE_NAME = "treasuresPage";
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
      `${SITE_IMAGE_PATH}4treasures/topImage.jpg?${mainImageVersions.treasures}`;

    pageSubjectElement.id = `${PAGE_NAME}Subject`;
    pageSubjectElement.className = "pageSubject";

    ['en_us', 'zh_cn', 'zh_tw'].forEach((lang: string) => {
      const span = createElement(lang) as HTMLSpanElement;
      pageSubjectElement.appendChild(span);

      const image = createElement('img') as HTMLImageElement;
      // image.setAttribute('class', `${PAGE_NAME}SubjectImage`);
      image.setAttribute('class', 'pageSubject');

      const src = `./images/0common/${lang}/4treasures.png`;
      image.src = src;
      image.alt = src;

      span.appendChild(image);
    });

    pcGlobal.fillListAndPagination(
      listElement,
      paginationElement,
      PageSize.treasuresPage,
      treasures, // .map((item: object, index: number) => { return {id: index, ...item }} ),
      PAGE_NAME,
      (itemElement: HTMLDivElement, data: object | null, init?: boolean) => {
        if (init) {
          const aElement = createElement("a") as HTMLAnchorElement;
          itemElement.appendChild(aElement);
          aElement.target = "_blank";
          aElement.className = `${PAGE_NAME}ItemWrap`;

          const imageElement = createElement("img") as HTMLImageElement;
          const rightWrapElement = createElement("div") as HTMLDivElement;
          aElement.appendChild(imageElement);
          aElement.appendChild(rightWrapElement);

          imageElement.className = `${PAGE_NAME}ItemImage`;
          rightWrapElement.className = `${PAGE_NAME}ItemRightWrap`;

          const titleElement = createElement("div") as HTMLDivElement;
          titleElement.className = `${PAGE_NAME}ItemTitle`;
          rightWrapElement.appendChild(titleElement);

          const hrElement = createElement("hr") as HTMLHRElement;
          hrElement.className = `${PAGE_NAME}ItemHr`;
          rightWrapElement.appendChild(hrElement);

          const summaryElement = createElement("span") as HTMLSpanElement;
          summaryElement.className = `${PAGE_NAME}ItemSummary`;
          rightWrapElement.appendChild(summaryElement);

          const moreElement = createElement("div");
          moreElement.className = "moreButton primary";
          moreElement.innerHTML = MORE_BUTTON_HTML;
          rightWrapElement.appendChild(moreElement);
        } else if (data === null) {
          hide(itemElement);
        } else {
          showBlock(itemElement);

          const { image, link, title, summary } = data as {
            image: string;
            link: string;
            title: { en_us: string; zh_cn: string; zh_tw: string };
            summary: { en_us: string; zh_cn: string; zh_tw: string };
          };

          const aElement = itemElement.children[0] as HTMLAnchorElement;

          const imageElement = aElement.children[0] as HTMLImageElement;
          const rightWrapElement = aElement.children[1] as HTMLDivElement;

          const imageUrl = `${SITE_IMAGE_PATH}4treasures/${image}`;
          imageElement.src = imageUrl;
          imageElement.alt = imageUrl;

          const titleElement = rightWrapElement.children[0] as HTMLDivElement;
          titleElement.innerHTML = getI18nInnerHTML(title);

          // const hrElement = rightWrapElement.children[1] as HTMLHRElement;
          const summaryElement = rightWrapElement
            .children[2] as HTMLSpanElement;
          summaryElement.innerHTML = getI18nInnerHTML(summary);

          aElement.href = link;
        }
      },
    );
  };

  public init = () => {
    super.init();
  };
}

const treasuresPage = new TreasuresPage();
treasuresPage.init();
