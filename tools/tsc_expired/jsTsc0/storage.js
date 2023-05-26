// import { LANG_PROPERTY, CURRENT_URL, ACTUAL_PAGE_NAME } from './const';
// import { getHtmlElement } from './dom';
/// <reference path='../types/const.d.ts' />
/// <reference path='../types/dom.d.ts' />
/**
 * <en>Local storage keyword: language, used to record the last selected language</en>
 * <zh_cn>本地存储关键字：语言，用于记录最后一次所选择的语言</zh_cn>
 * <zh_tw>本地存儲關鍵字：語言，用於記錄最後一次所選擇的語言</zh_tw>
 */
export var LOCAL_STORAGE_KEY_OF_LANG = "lang";
/**
 * <en>Local Storage Keyword: the current page, used to record the configuration selected during the last report generation</en>
 * <zh_cn>本地存储关键字：当前页，用于记录最后一次生成报表时所选择的配置</zh_cn>
 * <zh_tw>本地存儲關鍵字：當前頁，用於記錄最後一次生成報表時所選擇的配寘</zh_tw>
 */
export var LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?")
  ? CURRENT_URL.split("?")[1]
  : ACTUAL_PAGE_NAME;
/**
 * <en>Notification: Change Language</en>
 * <zh_cn>通知：更改语言</zh_cn>
 * <zh_tw>通知：更改語言</zh_tw>
 */
// const CHANGE_LANG_NOTIFY_ARRAY = ACTUAL_PAGE_NAME_ARRAY.map((_name: string) => []) as Array<Array<(lang: Language) => void>>;
var CHANGE_LANG_NOTIFY_ARRAY = [];
/**
 * <en>Get the current language from localStorage</en>
 * <zh_cn>从localStorage获取当前语言</zh_cn>
 * <zh_tw>從localStorage獲取當前語言</zh_tw>
 */
export var getCurrentLang = function () {
  return (localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn");
};
/**
 * <en>Set Current Language</en>
 * <zh_cn>设置当前语言</zh_cn>
 * <zh_tw>設定當前語言</zh_tw>
 */
export var setCurrentLang = function (lang) {
  getHtmlElement().setAttribute(LANG_PROPERTY, lang);
  localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
  updateUIByCurrentLang();
};
/**
 * <en>Update the interface according to the current language</en>
 * <zh_cn>根据当前语言更新界面</zh_cn>
 * <zh_tw>根據當前語言更新介面</zh_tw>
 */
export var updateUIByCurrentLang = function () {
  var lang = getCurrentLang();
  // CHANGE_LANG_NOTIFY_ARRAY.forEach((subArray: Array<(lang: Language) => void>) => subArray.forEach((func) => func(lang)));
  CHANGE_LANG_NOTIFY_ARRAY.forEach(function (func) {
    return func(lang);
  });
};
/**
 * <en>Get the local cache corresponding to the current page.</en>
 * <zh_cn>获取当前页面对应本地缓存</zh_cn>
 * <zh_tw>獲取當前頁面對應本地緩存</zh_tw>
 */
export var getCurrentPageLocalStorage = function () {
  return localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
};
/**
 * <en>Set the local cache corresponding to the current page.</en>
 * <zh_cn>设置当前页面对应本地缓存</zh_cn>
 * <zh_tw>設定當前頁面對應本地緩存</zh_tw>
 */
export var setCurrentPageLocalStorage = function (newValue) {
  return localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
};
/**
 * <en>Get the "Change Language" notification array corresponding to the current page.</en>
 * <zh_cn>获取当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>獲取當前頁面對應的“更改語言”通知數組</zh_tw>
 */
export var getChangeLangNotifyArrayOfCurrentPage = function () {
  return CHANGE_LANG_NOTIFY_ARRAY;
};
/**
 * <en>Clear the "Change Language" notification array corresponding to the current page.</en>
 * <zh_cn>清空当前页面对应的“更改语言”通知数组</zh_cn>
 * <zh_tw>清空當前頁面對應的“更改語言”通知數組</zh_tw>
 */
export var clearChangeLangNotifyArrayOfCurrentPage = function () {
  CHANGE_LANG_NOTIFY_ARRAY.length = 0;
};
