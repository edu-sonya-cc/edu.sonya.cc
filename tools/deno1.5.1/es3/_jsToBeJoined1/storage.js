System.register("storage", [], function (exports_1, context_1) {
    "use strict";
    var LOCAL_STORAGE_KEY_OF_LANG, LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, CHANGE_LANG_NOTIFY_ARRAY, getCurrentLang, setCurrentLang, updateUIByCurrentLang, getCurrentPageLocalStorage, setCurrentPageLocalStorage, getChangeLangNotifyArrayOfCurrentPage, clearChangeLangNotifyArrayOfCurrentPage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("LOCAL_STORAGE_KEY_OF_LANG", LOCAL_STORAGE_KEY_OF_LANG = "lang");
            exports_1("LOCAL_STORAGE_KEY_OF_CURRENT_PAGE", LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?")
                ? CURRENT_URL.split("?")[1]
                : ACTUAL_PAGE_NAME);
            CHANGE_LANG_NOTIFY_ARRAY = [];
            exports_1("getCurrentLang", getCurrentLang = function () {
                return (localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn");
            });
            exports_1("setCurrentLang", setCurrentLang = function (lang) {
                getHtmlElement().setAttribute(LANG_PROPERTY, lang);
                localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
                updateUIByCurrentLang();
            });
            exports_1("updateUIByCurrentLang", updateUIByCurrentLang = function () {
                var lang = getCurrentLang();
                CHANGE_LANG_NOTIFY_ARRAY.forEach(function (func) { return func(lang); });
            });
            exports_1("getCurrentPageLocalStorage", getCurrentPageLocalStorage = function () {
                return localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
            });
            exports_1("setCurrentPageLocalStorage", setCurrentPageLocalStorage = function (newValue) {
                return localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
            });
            exports_1("getChangeLangNotifyArrayOfCurrentPage", getChangeLangNotifyArrayOfCurrentPage = function () {
                return CHANGE_LANG_NOTIFY_ARRAY;
            });
            exports_1("clearChangeLangNotifyArrayOfCurrentPage", clearChangeLangNotifyArrayOfCurrentPage = function () {
                CHANGE_LANG_NOTIFY_ARRAY.length = 0;
            });
        }
    };
});

__exp = __instantiate("storage", false);
const LOCAL_STORAGE_KEY_OF_LANG = __exp["LOCAL_STORAGE_KEY_OF_LANG"];
const LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = __exp["LOCAL_STORAGE_KEY_OF_CURRENT_PAGE"];
const getCurrentLang = __exp["getCurrentLang"];
const setCurrentLang = __exp["setCurrentLang"];
const updateUIByCurrentLang = __exp["updateUIByCurrentLang"];
const getCurrentPageLocalStorage = __exp["getCurrentPageLocalStorage"];
const setCurrentPageLocalStorage = __exp["setCurrentPageLocalStorage"];
const getChangeLangNotifyArrayOfCurrentPage = __exp["getChangeLangNotifyArrayOfCurrentPage"];
const clearChangeLangNotifyArrayOfCurrentPage = __exp["clearChangeLangNotifyArrayOfCurrentPage"];

