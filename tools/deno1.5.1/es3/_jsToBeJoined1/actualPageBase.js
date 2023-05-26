System.register("actualPageBase", [], function (exports_1, context_1) {
    "use strict";
    var ActualPageBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ActualPageBase = (function () {
                function ActualPageBase() {
                }
                ActualPageBase.prototype.init = function () {
                    this.initTitleElement();
                    var titleElement = getTitleElement();
                    getChangeLangNotifyArrayOfCurrentPage().push(function (lang) {
                        titleElement.innerHTML = titleElement.i18n[lang];
                    });
                    this.initMainElement();
                    global.bindChangeLangEventForI18nElements();
                    setCurrentLang(getCurrentLang());
                };
                return ActualPageBase;
            }());
            exports_1("ActualPageBase", ActualPageBase);
        }
    };
});

__exp = __instantiate("actualPageBase", false);
const ActualPageBase = __exp["ActualPageBase"];

