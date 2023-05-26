"use strict";
(function () {
    pcGlobal.init();
    var head = getHeadElement();
    var dataScriptElement = createElement("script");
    dataScriptElement.setAttribute("id", "dataScript");
    dataScriptElement.setAttribute("charset", "utf-8");
    dataScriptElement.setAttribute("src", "js/data.js?" + jsVersions.data);
    head.appendChild(dataScriptElement);
    function loadPageScript() {
        var pageScriptElement = createElement("script");
        pageScriptElement.setAttribute("id", "pageScript");
        pageScriptElement.setAttribute("charset", "utf-8");
        pageScriptElement.setAttribute("src", "js/" + ACTUAL_PAGE_NAME + ".js?" + jsVersions[ACTUAL_PAGE_NAME]);
        head.appendChild(pageScriptElement);
    }
    dataScriptElement.onload = dataScriptElement.onreadystatechange =
        function () {
            var readyState = this.readyState;
            console.log("onreadystatechange", readyState);
            if (!readyState) {
                loadPageScript();
                return;
            }
            switch (readyState) {
                case "loaded":
                case "complete":
                    loadPageScript();
                    break;
                default:
                    break;
            }
        };
})();

__instantiate("main", false);

