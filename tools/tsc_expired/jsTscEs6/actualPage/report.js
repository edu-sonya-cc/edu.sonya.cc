"use strict";
// import { REPORT_PROPERTY, LANG_PROPERTY, PAPER_SIZE_PROPERTY } from '../const';
// import { I18nable, createElement, getHtmlElement, getHeadElement, getBodyElement, getTitleElement, getMainElement, getHeaderElement, getFooterElement } from '../dom';
// import { Language, getCurrentLang } from '../storage';
// import { ActualPageBase } from './actualPageBase';
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
class ReportPage extends ActualPageBase {
  constructor() {
    super(...arguments);
    this.styleElement = createElement("style");
    this.reportElement = createElement("div");
    this.titleElement = getTitleElement();
    this.initMainElement = () => {
      const reportPage = "reportPage";
      getHeaderElement().remove();
      getFooterElement().remove();
      getMainElement().remove();
      const body = getBodyElement();
      body.setAttribute(REPORT_PROPERTY, "");
      const { styleElement, reportElement } = this;
      styleElement.id = `${reportPage}Style`;
      const headElement = getHeadElement();
      headElement.appendChild(styleElement);
      body.appendChild(reportElement);
      reportElement.id = `${reportPage}Core`;
      // mainElement.appendChild(imageElement);
    };
    this.init = () => {
      super.init();
    };
  }
  initTitleElement() {
    this.titleElement.i18n = { en: "Report", zh_cn: "报表", zh_tw: "報表" };
  }
  updateReport(title, css, html) {
    const { styleElement, reportElement, titleElement } = this;
    styleElement.innerHTML = css;
    reportElement.innerHTML = html;
    titleElement.i18n = title;
    titleElement.innerHTML = title[getCurrentLang()];
  }
  getCss() {
    return this.styleElement.innerHTML;
  }
  getHtml() {
    return this.reportElement.innerHTML;
  }
  changeLang(lang) {
    getHtmlElement().setAttribute(LANG_PROPERTY, lang);
  }
  changePaperSize(paperSize) {
    getBodyElement().setAttribute(PAPER_SIZE_PROPERTY, paperSize);
  }
  print() {
    window.print();
  }
}
const reportPage = new ReportPage();
reportPage.init();
window.addEventListener("message", function (event) {
  const { data: { command, data: { title, css, html, lang, paperSize } } } =
    event;
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
