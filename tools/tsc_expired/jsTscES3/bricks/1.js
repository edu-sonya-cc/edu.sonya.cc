"use strict";
// import { CopybookBase } from './copybookBase.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
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
/// <reference path='../../types/copybookBase.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
var BrickCore = /** @class */ (function (_super) {
  __extends(BrickCore, _super);
  function BrickCore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return BrickCore;
}(CopybookBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
