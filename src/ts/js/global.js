"use strict";
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
exports.__esModule = true;
exports.global = void 0;
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />
/// <reference path='../types/version.d.ts' />
// // new Array('Monday','Tuseday','Wednesday','Thursday','Friday','Saturday','Sunday');
// const MONTH_NAME_ARRAY = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
/** 类：全局对象 */
var Global = /** @class */ (function () {
    function Global() {
        var _this = this;
        this.USER_AGENT_LOWER_CASE_FIXED = navigator.userAgent.toLowerCase().replace(/;/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\//g, " ");
        /** 是否手机版 */
        this.IS_MOBILE = 
        // navigator.userAgent.toLowerCase().replace(" mobile/", " mobile ").indexOf(
        //   " mobile ",
        // ) > -1;
        // navigator.userAgent.toLowerCase().replace(" ;", " ").replace("(", " ").replace("/", " ")
        //   .replace(" ipad ", " mobile ").replace(" tablet ", " mobile ").replace(" pad ", " mobile ")
        //   .indexOf(" mobile ") > -1;
        this.USER_AGENT_LOWER_CASE_FIXED
            // .replace(/ ipad /g, " mobile ").replace(/ tablet /g, " mobile ").replace(/ pad /g, " mobile ")
            .indexOf(" mobile ") > -1;
        /** 是否平板 */
        this.IS_PAD = this.USER_AGENT_LOWER_CASE_FIXED.replace(/ ipad /g, " pad ").replace(/ tablet /g, " pad ").indexOf(" pad ") > -1;
        /** 是否手机或平板 */
        this.IS_MOBILE_OR_PAD = this.IS_MOBILE || this.IS_PAD;
        /** 是否无法直接打印 */
        this.CAN_NOT_PRINT = this.IS_MOBILE_OR_PAD || this.USER_AGENT_LOWER_CASE_FIXED.indexOf('macwechat') > -1 || ((this.USER_AGENT_LOWER_CASE_FIXED.indexOf('micromessenger') > -1) && (this.USER_AGENT_LOWER_CASE_FIXED.indexOf('windowswechat') === -1));
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
                    (element.i18nPlaceholder = JSON.parse(element.getAttribute("i18n-placeholder")));
                placeholderI18nElement.push(element);
            });
            _this.langUpdatedEventArray.push(function (lang) {
                innerHtmlI18nElement.forEach(function (element) {
                    element.innerHTML = (element.i18n &&
                        element.i18n[lang]);
                });
                placeholderI18nElement.forEach(function (element) {
                    element.setAttribute("placeholder", (element.i18nPlaceholder &&
                        element
                            .i18nPlaceholder[lang]));
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
            if (_this.inited)
                return;
            // TODO(@anqi) more device
            // this.body.setAttribute(DEVICE_PROPERTY, this.IS_PAD ? "pad" : (this.IS_MOBILE ? "mobile" : "pc"));
            var head = getHeadElement();
            var link = createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            // 2023-01-05 => this.IS_MOBILE_OR_PAD
            // 2023-01-20 => this.CAN_NOT_PRINT
            if (_this.CAN_NOT_PRINT) {
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
                if (_this.IS_MOBILE_OR_PAD) {
                    var padOrPhoneCssName = _this.IS_PAD ? "pad" : 'phone';
                    link.href = "css/" + padOrPhoneCssName + ".css?" + cssVersions[padOrPhoneCssName];
                }
                else {
                    link.href = "css/pc.css?" + cssVersions.pc;
                }
            }
            else {
                // const meta = createElement("meta") as HTMLMetaElement;
                // meta.httpEquiv = "X-UA-Compatible";
                // meta.content = "IE=EmulateIE9";
                // head.appendChild(meta);
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
