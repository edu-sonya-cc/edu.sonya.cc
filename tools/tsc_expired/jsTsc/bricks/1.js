// import { CopybookBase } from './copybookBase.ts';
// import { IBrickCore } from '../actualPage/IBrickCore.ts';
// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement } from '../dom.ts';
// import { getCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage } from '../storage.ts';
// import { DOMAIN, FILENAME_POSTFIX } from '../const.ts';
"use strict";
/// <reference path='../../types/copybookBase.d.ts' />
/// <reference path='../../types/IBrickCore.d.ts' />
var BrickCore = (function (_super) {
  __extends(BrickCore, _super);
  function BrickCore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return BrickCore;
}(CopybookBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;
