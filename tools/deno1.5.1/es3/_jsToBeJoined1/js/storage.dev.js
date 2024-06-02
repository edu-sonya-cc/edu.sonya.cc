"use strict";

System.register("storage", [], function (exports_1, context_1) {
  "use strict";

  var LOCAL_STORAGE_KEY_OF_LANG, LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, CHANGE_LANG_NOTIFY_ARRAY, getCurrentLang, setCurrentLang, updateUIByCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage, getChangeLangNotifyArrayOfCurrentPage, clearChangeLangNotifyArrayOfCurrentPage;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [],
    execute: function execute() {
      exports_1("LOCAL_STORAGE_KEY_OF_LANG", LOCAL_STORAGE_KEY_OF_LANG = "lang");
      exports_1("LOCAL_STORAGE_KEY_OF_CURRENT_PAGE", LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME);
      CHANGE_LANG_NOTIFY_ARRAY = [];
      exports_1("getCurrentLang", getCurrentLang = function getCurrentLang() {
        return localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "en_us";
      });
      exports_1("setCurrentLang", setCurrentLang = function setCurrentLang(lang) {
        getHtmlElement().setAttribute(LANG_PROPERTY, lang);
        localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
        updateUIByCurrentLang();
      });
      exports_1("updateUIByCurrentLang", updateUIByCurrentLang = function updateUIByCurrentLang() {
        var lang = getCurrentLang();
        CHANGE_LANG_NOTIFY_ARRAY.forEach(function (func) {
          return func(lang);
        });
      });
      exports_1("getCurrentPageLocalStorage", getCurrentPageLocalStorage = function getCurrentPageLocalStorage() {
        return localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
      });
      exports_1("setCurrentPageLocalStorage", setCurrentPageLocalStorage = function setCurrentPageLocalStorage(newValue) {
        return localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
      });
      exports_1("getChangeLangNotifyArrayOfCurrentPage", getChangeLangNotifyArrayOfCurrentPage = function getChangeLangNotifyArrayOfCurrentPage() {
        return CHANGE_LANG_NOTIFY_ARRAY;
      });
      exports_1("clearChangeLangNotifyArrayOfCurrentPage", clearChangeLangNotifyArrayOfCurrentPage = function clearChangeLangNotifyArrayOfCurrentPage() {
        CHANGE_LANG_NOTIFY_ARRAY.length = 0;
      });
    }
  };
});
__exp = __instantiate("storage", false);
var LOCAL_STORAGE_KEY_OF_LANG = __exp["LOCAL_STORAGE_KEY_OF_LANG"];
var LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = __exp["LOCAL_STORAGE_KEY_OF_CURRENT_PAGE"];
var getCurrentLang = __exp["getCurrentLang"];
var setCurrentLang = __exp["setCurrentLang"];
var updateUIByCurrentLang = __exp["updateUIByCurrentLang"];
var getCurrentPageLocalStorage = __exp["getCurrentPageLocalStorage"];
var setCurrentPageLocalStorage = __exp["setCurrentPageLocalStorage"];
var getChangeLangNotifyArrayOfCurrentPage = __exp["getChangeLangNotifyArrayOfCurrentPage"];
var clearChangeLangNotifyArrayOfCurrentPage = __exp["clearChangeLangNotifyArrayOfCurrentPage"];