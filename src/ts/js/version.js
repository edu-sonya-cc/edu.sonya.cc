"use strict";
// import { createElement, getHeadElement } from './dom';
exports.__esModule = true;
exports.mainImageVersions = exports.jsVersions = exports.cssVersions = void 0;
/// <reference path='../types/dom.d.ts' />
/**
 * <en_us>css version</en_us>
 * <zh_cn>样式表版本</zh_cn>
 * <zh_tw>樣式表版本</zh_tw>
 */
exports.cssVersions = {
    pc: '230119D',
    pad: '230120D',
    phone: '230120D'
};
/**
 * <en_us>scripts version</en_us>
 * <zh_cn>脚本版本</zh_cn>
 * <zh_tw>腳本版本</zh_tw>
 */
exports.jsVersions = {
    main: '230525A',
    data: '230119D',
    home: '230120K',
    bricks: '230525A',
    brick: '230119D',
    treasures: '230119D',
    stories: '230119D',
    story: '230119D',
    about: '230119D',
    report: '230120A'
};
/**
 * <en_us>main image version</en_us>
 * <zh_cn>顶图版本</zh_cn>
 * <zh_tw>頂圖版本</zh_tw>
 */
exports.mainImageVersions = {
    home: '230119D',
    bricks: '230119D',
    brick: '230119D',
    treasures: '230119D',
    stories: '230119D',
    story: '230119D',
    about: '230119D'
};
(function () {
    var head = document.getElementsByTagName('head')[0];
    var dataScriptElement = document.createElement('script');
    dataScriptElement.setAttribute('id', 'dataScript');
    dataScriptElement.setAttribute('charset', 'utf-8');
    dataScriptElement.setAttribute('src', "js/main.js?" + exports.jsVersions.main);
    head.appendChild(dataScriptElement);
    // if((location.href || '').indexOf('vconsole=true') > -1) {
    // //   document.write('<script src="https://cdn.bootcss.com/vConsole/3.15.0/vconsole.min.js"></script><script>new VConsole();</script>');
    // }
})();
