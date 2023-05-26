System.register("global", [], function (exports_1, context_1) {
    "use strict";
    var Global, global;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Global = (function () {
                function Global() {
                    var _this = this;
                    this.IS_MOBILE = navigator.userAgent.toLowerCase().replace(" mobile/", " mobile ").indexOf(" mobile ") > -1;
                    this.body = getBodyElement();
                    this.langUpdatedEventArray = getChangeLangNotifyArrayOfCurrentPage();
                    this.bindChangeLangEventForI18nElements = function () {
                        var innerHtmlI18nElement = [];
                        querySelectorAllByI18n().forEach(function (element) {
                            element.hasAttribute("i18n") &&
                                (element.i18n = JSON.parse(element.getAttribute("i18n")));
                            innerHtmlI18nElement.push(element);
                        });
                        var placeholderI18nElement = [];
                        querySelectorAllByI18nPlaceholder().forEach(function (element) {
                            element.hasAttribute("i18n-placeholder") &&
                                (element.i18nPlaceholder = JSON.parse(element.getAttribute("i18n-placeholder")));
                            placeholderI18nElement.push(element);
                        });
                        _this.langUpdatedEventArray.push(function (lang) {
                            innerHtmlI18nElement.forEach(function (element) {
                                element.innerHTML = (element.i18n &&
                                    element.i18n[lang]);
                            });
                            placeholderI18nElement.forEach(function (element) {
                                element.setAttribute("placeholder", (element.i18nPlaceholder &&
                                    element
                                        .i18nPlaceholder[lang]));
                            });
                        });
                    };
                    this.inited = false;
                    this.init = function () {
                        if (_this.inited)
                            return;
                        var head = getHeadElement();
                        var link = createElement("link");
                        link.rel = "stylesheet";
                        link.type = "text/css";
                        if (_this.IS_MOBILE) {
                            [
                                "http://html2canvas.hertzen.com/dist/html2canvas.min.js",
                                "https://cdn.bootcss.com/jspdf/1.5.3/jspdf.min.js",
                            ].forEach(function (url, index) {
                                var phoneScriptElement = createElement("script");
                                phoneScriptElement.setAttribute("id", "phoneScript_" + index);
                                phoneScriptElement.setAttribute("charset", "utf-8");
                                phoneScriptElement.setAttribute("src", url);
                                head.appendChild(phoneScriptElement);
                            });
                            var meta = createElement("meta");
                            meta.id = "viewportMeta";
                            meta.name = "viewport";
                            meta.content =
                                "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,minimal-ui";
                            head.appendChild(meta);
                            link.href = "css/phone.css?" + cssVersions.phone;
                        }
                        else {
                            var meta = createElement("meta");
                            meta.httpEquiv = "X-UA-Compatible";
                            meta.content = "IE=EmulateIE9";
                            head.appendChild(meta);
                            link.href = "css/pc.css?" + cssVersions.pc;
                        }
                        head.appendChild(link);
                        _this.inited = true;
                    };
                }
                return Global;
            }());
            exports_1("global", global = new Global());
        }
    };
});

__exp = __instantiate("global", false);
const global = __exp["global"];

