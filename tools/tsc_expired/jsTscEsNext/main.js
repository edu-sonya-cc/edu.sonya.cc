"use strict";
// import { ACTUAL_PAGE_NAME } from './const';
// import { createElement, getHeadElement } from './dom';
// import { jsVersions } from './data/data';
// import { pcGlobal } from './pcGlobal';
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/data.d.ts' />
/// <reference path='../types/pcGlobal.d.ts' />
/**
 * <en>The version of data.js.</en>
 * <zh_cn>data.js的版本</zh_cn>
 * <zh_tw>data.js的版本</zh_tw>
 */
const DATA_JS_VERSION = "20221223B";
/**
 * <en>According to the website parameter go, it will be converted to each page: home page,
 * throw a brick to attract jade(list, details), natural treasures, growth footprint(list, details),
 * Sparks of Fire (about us), and report form.</en>
 * <zh_cn>根据网址参数go转为各页面：首页、抛砖引玉（列表、详情）、物华天宝、成长足迹（列表、详情）、星星之火（关于我们）、报表</zh_cn>
 * <zh_tw>根據網址參數go轉為各頁面：首頁、抛磚引玉（清單、詳情）、物華天寶、成長足跡（清單、詳情）、星星之火（關於我們）、報表</zh_tw>
 */
(function () {
  pcGlobal.init();
  const head = getHeadElement();
  // data.js?version
  const dataScriptElement = createElement("script");
  dataScriptElement.setAttribute("id", "dataScript");
  dataScriptElement.setAttribute("charset", "utf-8");
  dataScriptElement.setAttribute("src", `js/data.js?${DATA_JS_VERSION}`);
  head.appendChild(dataScriptElement);
  // // ~pageName~.js
  // const pageScriptElement = createElement('script');
  // pageScriptElement.setAttribute('id', 'pageScript');
  // pageScriptElement.setAttribute('charset', 'utf-8');
  // pageScriptElement.setAttribute('src', `js/${ACTUAL_PAGE_NAME}.js`);
  // head.appendChild(pageScriptElement);
  // const body = getBodyElement();
  // if(ACTUAL_PAGE_NAME === 'report') {
  // 	body.setAttribute(REPORT_PROPERTY, '');
  // }
  // ~pageName~.js
  function loadPageScript() {
    const pageScriptElement = createElement("script");
    pageScriptElement.setAttribute("id", "pageScript");
    pageScriptElement.setAttribute("charset", "utf-8");
    pageScriptElement.setAttribute(
      "src",
      `js/${ACTUAL_PAGE_NAME}.js?${jsVersions[ACTUAL_PAGE_NAME]}`,
    );
    head.appendChild(pageScriptElement);
  }
  // const body = getBodyElement();
  // if (ACTUAL_PAGE_NAME === 'report') {
  //     body.setAttribute(REPORT_PROPERTY, '');
  // }
  dataScriptElement.onload = dataScriptElement.onreadystatechange =
    function () {
      const { readyState } = this;
      console.log("onreadystatechange", readyState);
      if (!readyState) {
        loadPageScript();
        return;
      }
      switch (readyState) {
        case "loaded":
        case "complete":
          loadPageScript();
          break;
        default:
          break;
      }
    };
})();
