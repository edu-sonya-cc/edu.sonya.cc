"use strict";
// import { REPORT_PROPERTY, LANG_PROPERTY, PAPER_SIZE_PROPERTY } from '../const';
// import { I18nable, createElement, getHtmlElement, getHeadElement, getBodyElement, getTitleElement, getMainElement, getHeaderElement, getFooterElement } from '../dom';
// import { Language, getCurrentLang } from '../storage';
// import { ActualPageBase } from './actualPageBase';
var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
      }) ||
      function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) {
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null",
      );
    }
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null
      ? Object.create(b)
      : (__.prototype = b.prototype, new __());
  };
})();
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
var ReportPage = /** @class */ (function (_super) {
  __extends(ReportPage, _super);
  function ReportPage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.styleElement = createElement("style");
    _this.reportElement = createElement("div");
    _this.titleElement = getTitleElement();
    _this.initMainElement = function () {
      var reportPage = "reportPage";
      getHeaderElement().remove();
      getFooterElement().remove();
      getMainElement().remove();
      var body = getBodyElement();
      body.setAttribute(REPORT_PROPERTY, "");
      var _a = _this,
        styleElement = _a.styleElement,
        reportElement = _a.reportElement;
      styleElement.id = "".concat(reportPage, "Style");
      var headElement = getHeadElement();
      headElement.appendChild(styleElement);
      body.appendChild(reportElement);
      reportElement.id = "".concat(reportPage, "Core");
      // mainElement.appendChild(imageElement);
    };
    _this.init = function () {
      _super.prototype.init.call(_this);
    };
    return _this;
  }
  ReportPage.prototype.initTitleElement = function () {
    this.titleElement.i18n = { en: "Report", zh_cn: "报表", zh_tw: "報表" };
  };
  ReportPage.prototype.updateReport = function (title, css, html) {
    var _a = this,
      styleElement = _a.styleElement,
      reportElement = _a.reportElement,
      titleElement = _a.titleElement;
    styleElement.innerHTML = css;
    reportElement.innerHTML = html;
    titleElement.i18n = title;
    titleElement.innerHTML = title[getCurrentLang()];
  };
  ReportPage.prototype.getCss = function () {
    return this.styleElement.innerHTML;
  };
  ReportPage.prototype.getHtml = function () {
    return this.reportElement.innerHTML;
  };
  ReportPage.prototype.changeLang = function (lang) {
    getHtmlElement().setAttribute(LANG_PROPERTY, lang);
  };
  ReportPage.prototype.changePaperSize = function (paperSize) {
    getBodyElement().setAttribute(PAPER_SIZE_PROPERTY, paperSize);
  };
  ReportPage.prototype.print = function () {
    window.print();
  };
  return ReportPage;
}(ActualPageBase));
var reportPage = new ReportPage();
reportPage.init();
window.addEventListener("message", function (event) {
  var _a = event.data,
    command = _a.command,
    _b = _a.data,
    title = _b.title,
    css = _b.css,
    html = _b.html,
    lang = _b.lang,
    paperSize = _b.paperSize;
  switch (command) {
    case "build":
      reportPage.updateReport(title, css, html);
      break;
    case "changeLang":
      reportPage.changeLang(lang);
      break;
    case "changePaperSize":
      reportPage.changePaperSize(paperSize);
      break;
    case "print":
      reportPage.print();
      break;
    default:
      break;
  }
});
