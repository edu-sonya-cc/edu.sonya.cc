// import { createElement, getHeadElement } from './dom';

/// <reference path='../types/dom.d.ts' />

/**
 * <en_us>css version</en_us>
 * <zh_cn>样式表版本</zh_cn>
 * <zh_tw>樣式表版本</zh_tw>
 */
export const cssVersions = {
	pc: '230119D',
	pad: '230120D',
	phone: '230120D',
};

/**
 * <en_us>scripts version</en_us>
 * <zh_cn>脚本版本</zh_cn>
 * <zh_tw>腳本版本</zh_tw>
 */
export const jsVersions = {
	main: '240619A',
	data: '230119D',

	home: '230120K',
	bricks: '240619A',
	brick: '230119D',
	treasures: '230119D',
	stories: '230119D',
	story: '230119D',
	about: '230119D',
	report: '230120A',
};

/**
 * <en_us>main image version</en_us>
 * <zh_cn>顶图版本</zh_cn>
 * <zh_tw>頂圖版本</zh_tw>
 */
export const mainImageVersions = {
	home: '230119D',
	bricks: '230119D',
	brick: '230119D',
	treasures: '230119D',
	stories: '230119D',
	story: '230119D',
	about: '230119D',
};

(function () {
	const head = document.getElementsByTagName('head')[0] as HTMLHeadElement;
	const dataScriptElement = document.createElement('script');
	dataScriptElement.setAttribute('id', 'dataScript');
	dataScriptElement.setAttribute('charset', 'utf-8');
	dataScriptElement.setAttribute('src', `js/main.js?${jsVersions.main}`);
	head.appendChild(dataScriptElement);

	// if((location.href || '').indexOf('vconsole=true') > -1) {
	// //   document.write('<script src="https://cdn.bootcss.com/vConsole/3.15.0/vconsole.min.js"></script><script>new VConsole();</script>');
	// }
})();
