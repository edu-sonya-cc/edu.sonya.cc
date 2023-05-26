// import { DEVICE_PROPERTY } from './const';
// import {
// 	createElement,
// 	getBodyElement,
// 	getElementById,
// 	getElementByIdAndTagName,
// 	getTitleElement,
// 	hide,
// 	querySelectorAll,
// 	querySelectorAllByI18n,
// 	querySelectorAllByI18nPlaceholder,
// 	I18nable,
// 	PlaceholderI18nable
// } from './dom';
// import { getChangeLangNotifyArrayOfCurrentPage, getCurrentLang, Language, LOCAL_STORAGE_KEY_OF_LANG } from './storage';
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />
// // new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
// const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
/** 类：全局对象 */
class Global {
  /** 是否手机版 */
  IS_MOBILE = navigator.userAgent.toLowerCase().indexOf(" mobile ") > -1;
  body = getBodyElement();
  langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();
  bindChangeLangEventForI18nElements = () => {
    const innerHtmlI18nElement = [];
    // interface ElementExtend extends Element { i18n ?: string };
    querySelectorAllByI18n().forEach((element) => {
      element.hasAttribute("i18n") &&
        (element.i18n = JSON.parse(element.getAttribute("i18n")));
      innerHtmlI18nElement.push(element);
    });
    const placeholderI18nElement = [];
    querySelectorAllByI18nPlaceholder().forEach((element) => {
      element.hasAttribute("i18n-placeholder") &&
        (element.i18nPlaceholder = JSON.parse(
          element.getAttribute("i18n-placeholder"),
        ));
      placeholderI18nElement.push(element);
    });
    this.langUpdatedEventArray.push((lang) => {
      innerHtmlI18nElement.forEach((element) => {
        element.innerHTML = element.i18n && element.i18n[lang];
      });
      placeholderI18nElement.forEach((element) => {
        element.setAttribute(
          "placeholder",
          element.i18nPlaceholder &&
            element.i18nPlaceholder[lang],
        );
      });
    });
  };
  // public getChineseDate(date: Date) {
  // 	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // }
  // public getEnglishDate(date: Date) {
  // 	return `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  // }
  inited = false;
  init = () => {
    if (this.inited) {
      return;
    }
    // TODO(@anqi) more device
    this.body.setAttribute(DEVICE_PROPERTY, this.IS_MOBILE ? "mobile" : "pc");
    // document.onkeyup = function(event: Event) {
    //   // 27 ESC
    //   switch (event.keyCode) {
    //   case 112: // F1
    //     event.preventDefault();
    //     event.stopPropagation();
    //     break;
    //   default:
    //     break;
    //   }
    //   return false;
    // }
    this.inited = true;
  };
}
/** 全局对象 */
export const global = new Global();
