// import { getTitleElement } from '../dom';
// import { global } from '../global';
// import { Language, getChangeLangNotifyArrayOfCurrentPage, setCurrentLang, getCurrentLang } from '../storage';
"use strict";
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/storage.d.ts' />
var ActualPageBase = (function () {
  function ActualPageBase() {
  }
  ActualPageBase.prototype.init = function () {
    this.initTitleElement();
    var titleElement = getTitleElement();
    getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
      titleElement.innerHTML = titleElement.i18n[lang];
    });
    this.initMainElement();
    global.bindChangeLangEventForI18nElements();
    setCurrentLang(getCurrentLang());
  };
  return ActualPageBase;
}());
exports.ActualPageBase = ActualPageBase;
