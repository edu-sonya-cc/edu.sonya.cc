// import { PAGE_ID } from '../const';
// import { stories } from '../data/data';
// import { createElement, getTitleElement, getMainElement, getI18nInnerHTML } from '../dom';
// import { ActualPageBase } from './actualPageBase';

/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/data.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />

class StoryPage extends ActualPageBase {
  // private imageElement = createElement('img') as HTMLImageElement;

  public initTitleElement(): void {
    const titleElement = getTitleElement();
    titleElement.i18n = {
      en: "Growing",
      zh_cn: "成长足迹",
      zh_tw: "成長足跡",
    };
  }

  public initMainElement = () => {
    const mainElement = getMainElement();

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
    const contentElement = createElement("div") as HTMLDivElement;
    mainElement.appendChild(contentElement);

    // contentElement.innerHTML = html;
    contentElement.innerHTML = getI18nInnerHTML(
      stories.filter(({ id }) => id === PAGE_ID)[0].html,
    );
    contentElement.id = "storyPageContent";
  };

  public init = () => {
    super.init();
  };
}

const storyPage = new StoryPage();
storyPage.init();
