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
// import { cssVersions } from './version';
"use strict";
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />
/// <reference path='../types/version.d.ts' />
// // new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
// const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
/** 类：全局对象 */
var Global = (function () {
  function Global() {
    var _this = this;
    /** 是否手机版 */
    this.IS_MOBILE =
      navigator.userAgent.toLowerCase().replace(" mobile/", " mobile ").indexOf(
        " mobile ",
      ) > -1;
    this.body = getBodyElement();
    this.langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();
    this.bindChangeLangEventForI18nElements = function () {
      var innerHtmlI18nElement = [];
      // interface ElementExtend extends Element { i18n ?: string };
      querySelectorAllByI18n().forEach(function (element) {
        element.hasAttribute("i18n") &&
          (element.i18n = JSON.parse(element.getAttribute("i18n")));
        innerHtmlI18nElement.push(element);
      });
      var placeholderI18nElement = [];
      querySelectorAllByI18nPlaceholder().forEach(function (element) {
        element.hasAttribute("i18n-placeholder") &&
          (element.i18nPlaceholder = JSON.parse(
            element.getAttribute("i18n-placeholder"),
          ));
        placeholderI18nElement.push(element);
      });
      _this.langUpdatedEventArray.push(function (lang) {
        innerHtmlI18nElement.forEach(function (element) {
          element.innerHTML = (element.i18n &&
            element.i18n[lang]);
        });
        placeholderI18nElement.forEach(function (element) {
          element.setAttribute(
            "placeholder",
            (element.i18nPlaceholder &&
              element
                .i18nPlaceholder[lang]),
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
    this.inited = false;
    this.init = function () {
      if (_this.inited) {
        return;
      }
      // TODO(@anqi) more device
      // this.body.setAttribute(DEVICE_PROPERTY, this.IS_MOBILE ? "mobile" : "pc");
      var head = getHeadElement();
      var link = createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      // 2023-01-05
      if (_this.IS_MOBILE) {
        // <script src="http://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
        // <script src="https://cdn.bootcss.com/jspdf/1.5.3/jspdf.min.js"></script> =>
        // <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        [
          "http://html2canvas.hertzen.com/dist/html2canvas.min.js",
          "https://cdn.bootcss.com/jspdf/1.5.3/jspdf.min.js",
        ].forEach(function (url, index) {
          var phoneScriptElement = createElement("script");
          phoneScriptElement.setAttribute("id", "phoneScript_" + index);
          phoneScriptElement.setAttribute("charset", "utf-8");
          phoneScriptElement.setAttribute("src", url);
          head.appendChild(phoneScriptElement);
        });
        // document.domain='cn';
        var meta = createElement("meta");
        meta.id = "viewportMeta";
        meta.name = "viewport";
        meta.content =
          "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,minimal-ui";
        head.appendChild(meta);
        link.href = "css/phone.css?" + cssVersions.phone;
      } else {
        var meta = createElement("meta");
        meta.httpEquiv = "X-UA-Compatible";
        meta.content = "IE=EmulateIE9";
        head.appendChild(meta);
        link.href = "css/pc.css?" + cssVersions.pc;
      }
      head.appendChild(link);
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
      // document.domain='cn';
      _this.inited = true;
    };
  }
  return Global;
}());
/** 全局对象 */
exports.global = new Global();
