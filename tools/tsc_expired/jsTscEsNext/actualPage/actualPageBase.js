// import { getTitleElement } from '../dom';
// import { global } from '../global';
// import { Language, getChangeLangNotifyArrayOfCurrentPage, setCurrentLang, getCurrentLang } from '../storage';
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/storage.d.ts' />
export class ActualPageBase {
  init() {
    this.initTitleElement();
    const titleElement = getTitleElement();
    getChangeLangNotifyArrayOfCurrentPage().push((lang) => {
      titleElement.innerHTML = titleElement.i18n[lang];
    });
    this.initMainElement();
    global.bindChangeLangEventForI18nElements();
    setCurrentLang(getCurrentLang());
  }
}
