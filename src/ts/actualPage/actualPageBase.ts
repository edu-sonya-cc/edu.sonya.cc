// import { getTitleElement } from '../dom';
// import { global } from '../global';
// import { Language, getChangeLangNotifyArrayOfCurrentPage, setCurrentLang, getCurrentLang } from '../storage';

/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/storage.d.ts' />

export abstract class ActualPageBase {
  protected abstract initTitleElement(): void;
  protected abstract initMainElement(): void;

  public init(): void {
    this.initTitleElement();

    const titleElement = getTitleElement();
    getChangeLangNotifyArrayOfCurrentPage().push((lang: Language) => {
      titleElement.innerHTML = titleElement.i18n[lang];
    });

    this.initMainElement();

    global.bindChangeLangEventForI18nElements();
    setCurrentLang(getCurrentLang());
  }
}
