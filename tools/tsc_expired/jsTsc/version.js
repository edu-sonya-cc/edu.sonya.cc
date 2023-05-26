// import { createElement, getHeadElement } from './dom';
"use strict";
/// <reference path='../types/dom.d.ts' />
/**
 * <en>css version</en>
 * <zh_cn>样式表版本</zh_cn>
 * <zh_tw>樣式表版本</zh_tw>
 */
exports.cssVersions = {
  pc: "20230109A",
  phone: "20230110B",
};
/**
 * <en>scripts version</en>
 * <zh_cn>脚本版本</zh_cn>
 * <zh_tw>腳本版本</zh_tw>
 */
exports.jsVersions = {
  main: "20230109A",
  data: "20230109A",
  home: "20230109A",
  bricks: "20230109A",
  brick: "20230109A",
  treasures: "20230109A",
  stories: "20230109A",
  story: "20230109A",
  about: "20230109A",
  report: "20230109A",
};
/**
 * <en>main image version</en>
 * <zh_cn>顶图版本</zh_cn>
 * <zh_tw>頂圖版本</zh_tw>
 */
exports.mainImageVersions = {
  home: "20230109A",
  bricks: "20230109A",
  brick: "20230109A",
  treasures: "20230109A",
  stories: "20230109A",
  story: "20230109A",
  about: "20230109A",
};
(function () {
  var head = document.getElementsByTagName("head")[0];
  var dataScriptElement = document.createElement("script");
  dataScriptElement.setAttribute("id", "dataScript");
  dataScriptElement.setAttribute("charset", "utf-8");
  dataScriptElement.setAttribute(
    "src",
    "js/main.js?" + exports.jsVersions.main,
  );
  head.appendChild(dataScriptElement);
})();
