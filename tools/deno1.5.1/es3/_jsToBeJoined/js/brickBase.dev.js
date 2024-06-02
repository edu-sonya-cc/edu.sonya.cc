"use strict"; // @ts-nocheck

/* eslint-disable */

var System, _instantiate;

(function () {
  // deno-fmt-ignore
  var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }; // deno-fmt-ignore


  var __generator = this && this.__generator || function (thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };

  var r = Object.create(null);
  System = {
    register: function register(id, d, f) {
      r[id] = {
        d: d,
        f: f,
        exp: {}
      };
    }
  };

  function dI(mid, src) {
    return __awaiter(this, void 0, void 0, function () {
      var id, _a, o, ia, _b, sa, oa, s, i;

      return __generator(this, function (_c) {
        id = mid.replace(/\.\w+$/i, "");

        if (id.includes("./")) {
          _a = id.split("/").reverse(), o = _a[0], ia = _a.slice(1), _b = src.split("/").reverse(), sa = _b.slice(1), oa = [o];
          s = 0, i = void 0;

          while (i = ia.shift()) {
            if (i === "..") s++;else if (i === ".") break;else oa.push(i);
          }

          if (s < sa.length) oa.push.apply(oa, sa.slice(s));
          id = oa.reverse().join("/");
        }

        return [2, id in r ? gExpA(id) : Promise.resolve().then(function () {
          return require(mid);
        })];
      });
    });
  }

  function gC(id, main) {
    return {
      id: id,
      "import": function _import(m) {
        return dI(m, id);
      },
      meta: {
        url: id,
        main: main
      }
    };
  }

  function gE(exp) {
    return function (id, v) {
      var _a;

      var e = typeof id === "string" ? (_a = {}, _a[id] = v, _a) : id;

      for (var _i = 0, _b = Object.entries(e); _i < _b.length; _i++) {
        var _c = _b[_i],
            id_1 = _c[0],
            value = _c[1];
        Object.defineProperty(exp, id_1, {
          value: value,
          writable: true,
          enumerable: true
        });
      }

      return v;
    };
  }

  function rF(main) {
    var m;

    for (var id in r) {
      m = r[id];
      var f = m.f,
          exp = m.exp;

      var _a = f(gE(exp), gC(id, id === main)),
          e = _a.execute,
          s = _a.setters;

      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  function gExpA(id) {
    return __awaiter(this, void 0, void 0, function () {
      var m, d, e, s, i, _a, _b, r_1;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            if (!(id in r)) return [2];
            m = r[id];
            if (!m.s) return [3, 6];
            d = m.d, e = m.e, s = m.s;
            delete m.s;
            delete m.e;
            i = 0;
            _c.label = 1;

          case 1:
            if (!(i < s.length)) return [3, 4];
            _b = (_a = s)[i];
            return [4, gExpA(d[i])];

          case 2:
            _b.apply(_a, [_c.sent()]);

            _c.label = 3;

          case 3:
            i++;
            return [3, 1];

          case 4:
            r_1 = e();
            if (!r_1) return [3, 6];
            return [4, r_1];

          case 5:
            _c.sent();

            _c.label = 6;

          case 6:
            return [2, m.exp];
        }
      });
    });
  }

  function gExp(id) {
    if (!(id in r)) return;
    var m = r[id];

    if (m.s) {
      var d = m.d,
          e = m.e,
          s = m.s;
      delete m.s;
      delete m.e;

      for (var i = 0; i < s.length; i++) {
        s[i](gExp(d[i]));
      }

      e();
    }

    return m.exp;
  }

  _instantiate = function __instantiate(m, a) {
    System = _instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("brickBase", [], function (exports_1, context_1) {
  "use strict";

  var BrickBase;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [],
    execute: function execute() {
      BrickBase = function () {
        function BrickBase(appendData, otherComputedData, newPageSizeArray) {
          var _this = this;

          if (newPageSizeArray === void 0) {
            newPageSizeArray = ["A3", "A4"];
          }

          this.brickBaseIdPrefix = "brickPageBase";
          this.reporterKindProperty = "unknown";

          this.download = function () {};

          this.print = function () {};

          this.download2PDF = function () {
            var _a = _this,
                _b = _a.data,
                paperSize = _b.paperSize,
                isLandscape = _b.isLandscape,
                pageMarginTop = _b.pageMarginTop,
                pageMarginBottom = _b.pageMarginBottom,
                pageMarginLeft = _b.pageMarginLeft,
                pageMarginRight = _b.pageMarginRight,
                _c = _a.computedData,
                css = _c.css,
                html = _c.html;

            var title = _this.computedData.title[getCurrentLang()];

            var headElement = getHeadElement();
            var body = getBodyElement();
            var styleElement = createElement("style");
            headElement.appendChild(styleElement);
            styleElement.innerHTML = css.concat("header,footer,#brickPageMain{display:none;}");
            var reportHtmlElement = createElement("div");
            body.appendChild(reportHtmlElement);
            reportHtmlElement.innerHTML = html;
            var printableList = reportHtmlElement.childNodes;
            var count = printableList.length;
            var printableArray = [];

            for (var index = 0; index < count; ++index) {
              var printableElement = printableList[index];
              printableArray.push(printableElement);
            }

            var IMAGE_WIDTH = 210;
            var IMAGE_HEIGHT = 297;

            switch (paperSize) {
              case "A3":
                IMAGE_WIDTH = isLandscape ? 420 : 297;
                IMAGE_HEIGHT = isLandscape ? 297 : 420;
                break;

              case "A4":
                IMAGE_WIDTH = isLandscape ? 297 : 210;
                IMAGE_HEIGHT = isLandscape ? 210 : 297;
                break;

              case "A5":
                IMAGE_WIDTH = isLandscape ? 210 : 148.5;
                IMAGE_HEIGHT = isLandscape ? 148.5 : 210;
                break;

              default:
                break;
            }

            var pdfPageData = [];

            function addPdfPage(printableArray) {
              var scale = 1;
              var page = new Promise(function (resolve, reject) {
                printableArray.forEach(function (copyDom, index) {
                  var pageElement = copyDom;
                  var rect = pageElement.getBoundingClientRect();
                  var width = pageElement.offsetWidth;
                  var height = pageElement.offsetHeight;
                  var canvas = document.createElement("canvas");
                  canvas.setAttribute("class", "canvas-pdf");
                  canvas.setAttribute("id", "canvas".concat(index.toString()));
                  canvas.width = width * scale;
                  canvas.height = height * scale;
                  body.appendChild(canvas);
                  var content = canvas.getContext("2d");
                  content.scale(1, 1);
                  html2canvas(copyDom, {
                    dpi: window.devicePixelRatio,
                    scale: 1,
                    canvas: canvas,
                    width: width,
                    heigth: height
                  }).then(function (canvas) {
                    var imgWidth = IMAGE_WIDTH - (pageMarginLeft + pageMarginRight);
                    var imgHeight = IMAGE_HEIGHT - (pageMarginTop + pageMarginBottom);
                    pdfPageData.push({
                      img: canvas.toDataURL("image/jpeg", 1.0),
                      width: imgWidth,
                      height: imgHeight
                    });

                    if (pdfPageData.length === count) {
                      resolve();
                    }
                  });
                });
              });
              return page;
            }

            var pdf = new window.jsPDF(isLandscape ? "landscape" : "portrait", "mm", paperSize.toLocaleLowerCase());
            var PDF_IMAGE_IMAGE_EXTENSTION = "JPEG";
            pdfPageData.length = 0;
            addPdfPage(printableArray).then(function () {
              pdfPageData.forEach(function (pageData, pageIndex) {
                if (pageIndex > 0) pdf.addPage();
                var img = pageData.img,
                    width = pageData.width,
                    height = pageData.height;
                var left = pageMarginLeft;
                var top = pageMarginTop;
                pdf.addImage(img, PDF_IMAGE_IMAGE_EXTENSTION, left, top, width, height);
              });
              pdf.save(title.concat(".pdf"));
              printableArray.forEach(function (_printableElement, index) {
                document.getElementById("canvas".concat(index.toString())).remove();
              });
              styleElement.remove();
              reportHtmlElement.remove();
            });
          };

          this.updateOtherData = function (newData) {};

          this.initCoreElements = function () {};

          this.initOtherElements = function () {};

          this.onPageSizeChanged = function (newPageSize) {};

          this.getCss = function () {
            return _this.computedData.css;
          };

          this.getHtml = function () {
            return _this.computedData.html;
          };

          this.data = {
            paperSize: "A4",
            isLandscape: false,
            maxX: 200,
            maxY: 286,
            pageMarginTop: 5,
            pageMarginBottom: 5,
            pageMarginLeft: 5,
            pageMarginRight: 5
          };
          this.DEFAULT_DATA_JSON = "";
          this.computedData = {
            title: {
              en_us: "",
              zh_cn: "",
              zh_tw: ""
            },
            css: "",
            html: ""
          };
          this.pageSizeArray = [];
          this.configCoreElement = getElementById("brickPageConfigCore");

          this.init = function () {
            var _a = _this,
                configCoreElement = _a.configCoreElement,
                brickBaseIdPrefix = _a.brickBaseIdPrefix;
            configCoreElement.setAttribute(REPORT_KIND_PROPERTY, _this.reporterKindProperty);
            var getWrapElement = _this.getWrapElement;
            var wrapElement = getWrapElement({
              en_us: "Paper",
              zh_cn: "纸张",
              zh_tw: "紙張"
            });
            wrapElement.id = brickBaseIdPrefix + "PaperSizeOrDirectionWrap";

            _this.initPaperSizeElements(wrapElement);

            _this.initIsLandscapeElements(wrapElement);

            wrapElement = getWrapElement({
              en_us: "Margin of page",
              zh_cn: "页边距",
              zh_tw: "頁邊距"
            });
            wrapElement.id = brickBaseIdPrefix + "PaperMaginWrap";

            _this.initPageMarginTopElements(wrapElement);

            _this.initPageMarginBottomElements(wrapElement);

            _this.initPageMarginLeftElements(wrapElement);

            _this.initPageMarginRightElements(wrapElement);

            _this.initCoreElements();

            _this.initOtherElements();

            global.bindChangeLangEventForI18nElements();
            updateUIByCurrentLang();
            getChangeLangNotifyArrayOfCurrentPage().push(function () {
              return _this.build();
            });
          };

          this.getWrapElement = function (strongI18n) {
            var configCoreElement = _this.configCoreElement;
            var wrapElement = createElement("div");
            wrapElement.className = "brickPageConfigCoreOptionRowWrap";
            configCoreElement.appendChild(wrapElement);
            var strongElement = createElement("strong");
            strongElement.innerHTML = getI18nInnerHTML(strongI18n);
            wrapElement.appendChild(strongElement);
            return wrapElement;
          };

          this.onRadioOptionChanged = function (propertyName, value) {};

          this.initTextboxElement = function (labelI18n, propertyName, textboxElement, wrapElement) {
            if (labelI18n) {
              var label = createElement("label");
              label.innerHTML = getI18nInnerHTML(labelI18n);
              wrapElement.appendChild(label);
            }

            textboxElement.value = _this.data[propertyName];
            textboxElement.type = "text";

            var onTextboxChanged = function onTextboxChanged() {
              _this.data[propertyName] = textboxElement.value;

              _this.saveConfigAndBuildIfAllowed();
            };

            textboxElement.onchange = onTextboxChanged;
            textboxElement.onblur = onTextboxChanged;
            wrapElement.appendChild(textboxElement);
          };

          this.initTextareaElement = function (labelI18n, propertyName, textareaElement, wrapElement) {
            if (labelI18n) {
              var label = createElement("label");
              label.innerHTML = getI18nInnerHTML(labelI18n);
              wrapElement.appendChild(label);
            }

            textareaElement.value = _this.data[propertyName];

            var onTextareaChanged = function onTextareaChanged() {
              _this.data[propertyName] = parseInt(textareaElement.value, 0);

              _this.saveConfigAndBuildIfAllowed();
            };

            textareaElement.onchange = onTextareaChanged;
            textareaElement.onblur = onTextareaChanged;
            wrapElement.appendChild(textareaElement);
          };

          this.initRadioGroupByStringValue = function (radiosInfoArray, propertyName, radioElementArray, wrapElement) {
            var currentValue = _this.data[propertyName];
            radiosInfoArray.forEach(function (_a) {
              var value = _a.value,
                  i18nHtml = _a.i18nHtml;
              var radioElement = createElement("input");
              radioElement.type = "radio";
              radioElement.name = propertyName;
              radioElement.value = value;

              if (currentValue === value) {
                radioElement.checked = true;
              }

              var spanElement = createElement("span");
              spanElement.innerHTML = i18nHtml;

              radioElement.onclick = function () {
                _this.data[propertyName] = value;

                _this.onRadioOptionChanged(propertyName, value);

                _this.saveConfigAndBuildIfAllowed();
              };

              spanElement.onclick = function () {
                radioElement.click();
              };

              wrapElement.appendChild(radioElement);
              wrapElement.appendChild(spanElement);
              radioElementArray.push(radioElement);
            });
          };

          this.initRadioGroupWithLabelByStringValue = function (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n) {
            var wrapElement = _this.getWrapElement(wrapLabelI18n);

            _this.initRadioGroupByStringValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
          };

          this.initRadioGroupByBooleanOrNumberValue = function (radiosInfoArray, propertyName, radioElementArray, wrapElement) {
            var currentValue = _this.data[propertyName];
            radiosInfoArray.forEach(function (_a) {
              var value = _a.value,
                  i18nHtml = _a.i18nHtml;
              var radioElement = createElement("input");
              radioElement.type = "radio";
              radioElement.name = propertyName;
              radioElement.value = value.toString();

              if (currentValue === value) {
                radioElement.checked = true;
              }

              var spanElement = createElement("span");
              spanElement.innerHTML = i18nHtml;

              radioElement.onclick = function () {
                _this.data[propertyName] = value;

                _this.onRadioOptionChanged(propertyName, value);

                _this.saveConfigAndBuildIfAllowed();
              };

              spanElement.onclick = function () {
                radioElement.click();
              };

              wrapElement.appendChild(radioElement);
              wrapElement.appendChild(spanElement);
              radioElementArray.push(radioElement);
            });
          };

          this.initRadioGroupWithLabelByBooleanOrNumberValue = function (radiosInfoArray, propertyName, radioElementArray, wrapLabelI18n) {
            var wrapElement = _this.getWrapElement(wrapLabelI18n);

            _this.initRadioGroupByBooleanOrNumberValue(radiosInfoArray, propertyName, radioElementArray, wrapElement);
          };

          this.paperSizeRadioArray = [];

          this.initPaperSizeElements = function (wrapElement) {
            var _a = _this,
                paperSize = _a.data.paperSize,
                paperSizeRadioArray = _a.paperSizeRadioArray,
                brickBaseIdPrefix = _a.brickBaseIdPrefix;
            var span = createElement("span");
            span.id = brickBaseIdPrefix + "PaperSizeWrap";
            wrapElement.appendChild(span);
            var labelElement = createElement("label");
            span.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Size:",
              zh_cn: "纸型：",
              zh_tw: "紙型："
            });
            labelElement.setAttribute("for", "paperSize");

            _this.pageSizeArray.forEach(function (paperSizeValue) {
              var radioElement = createElement("input");
              radioElement.type = "radio";
              radioElement.value = paperSizeValue;
              radioElement.name = "paperSize";

              if (paperSize === paperSizeValue) {
                radioElement.checked = true;
              }

              var spanElement = createElement("span");
              spanElement.innerHTML = paperSizeValue;

              radioElement.onclick = function () {
                _this.data.paperSize = paperSizeValue;

                _this.onPageSizeChanged(paperSizeValue);

                _this.saveConfigAndBuildIfAllowed();
              };

              spanElement.onclick = function () {
                radioElement.click();
              };

              span.appendChild(radioElement);
              span.appendChild(spanElement);
              paperSizeRadioArray.push(radioElement);
            });
          };

          this.isLandscapeRadioArray = [];

          this.initIsLandscapeElements = function (wrapElement) {
            var _a = _this,
                isLandscape = _a.data.isLandscape,
                isLandscapeRadioArray = _a.isLandscapeRadioArray,
                brickBaseIdPrefix = _a.brickBaseIdPrefix;
            var span = createElement("span");
            span.id = brickBaseIdPrefix + "PaperDirectionWrap";
            wrapElement.appendChild(span);
            var labelElement = createElement("label");
            span.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Orientation:",
              zh_cn: "方向：",
              zh_tw: "方向："
            });
            labelElement.setAttribute("for", "isLandscape");
            [true, false].forEach(function (isLandscapeValue) {
              var radioElement = createElement("input");
              radioElement.type = "radio";
              radioElement.name = "isLandscape";
              radioElement.value = isLandscapeValue.toString();

              if (isLandscape === isLandscapeValue) {
                radioElement.checked = true;
              }

              var spanElement = createElement("span");
              spanElement.innerHTML = getI18nInnerHTML(isLandscapeValue ? {
                en_us: "landscape",
                zh_cn: "横向",
                zh_tw: "橫向"
              } : {
                en_us: "portrait",
                zh_cn: "纵向",
                zh_tw: "縱向"
              });

              radioElement.onclick = function () {
                _this.data.isLandscape = isLandscapeValue;

                _this.saveConfigAndBuildIfAllowed();
              };

              spanElement.onclick = function () {
                radioElement.click();
              };

              span.appendChild(radioElement);
              span.appendChild(spanElement);
              isLandscapeRadioArray.push(radioElement);
            });
          };

          this.pageMarginTopElement = createElement("input");

          this.initPageMarginTopElements = function (wrapElement) {
            var _a = _this,
                pageMarginTop = _a.data.pageMarginTop,
                pageMarginTopElement = _a.pageMarginTopElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Top:",
              zh_cn: "上：",
              zh_tw: "上："
            });
            pageMarginTopElement.value = pageMarginTop.toString();
            pageMarginTopElement.type = "number";
            pageMarginTopElement.setAttribute("min", "0");

            var changeValue = function changeValue() {
              _this.data.pageMarginTop = parseInt(pageMarginTopElement.value, 0);

              _this.saveConfigAndBuildIfAllowed();
            };

            pageMarginTopElement.onchange = changeValue;
            pageMarginTopElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginTopElement);
          };

          this.pageMarginBottomElement = createElement("input");

          this.initPageMarginBottomElements = function (wrapElement) {
            var _a = _this,
                pageMarginBottom = _a.data.pageMarginBottom,
                pageMarginBottomElement = _a.pageMarginBottomElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Bottom:",
              zh_cn: "下：",
              zh_tw: "下："
            });
            pageMarginBottomElement.value = pageMarginBottom.toString();
            pageMarginBottomElement.type = "number";
            pageMarginBottomElement.setAttribute("min", "0");

            var changeValue = function changeValue() {
              _this.data.pageMarginBottom = parseInt(pageMarginBottomElement.value, 0);

              _this.saveConfigAndBuildIfAllowed();
            };

            pageMarginBottomElement.onchange = changeValue;
            pageMarginBottomElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginBottomElement);
          };

          this.pageMarginLeftElement = createElement("input");

          this.initPageMarginLeftElements = function (wrapElement) {
            var _a = _this,
                pageMarginLeft = _a.data.pageMarginLeft,
                pageMarginLeftElement = _a.pageMarginLeftElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Left:",
              zh_cn: "左：",
              zh_tw: "左："
            });
            pageMarginLeftElement.value = pageMarginLeft.toString();
            pageMarginLeftElement.type = "number";
            pageMarginLeftElement.setAttribute("min", "0");

            var changeValue = function changeValue() {
              _this.data.pageMarginLeft = parseInt(pageMarginLeftElement.value, 0);

              _this.saveConfigAndBuildIfAllowed();
            };

            pageMarginLeftElement.onchange = changeValue;
            pageMarginLeftElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginLeftElement);
          };

          this.pageMarginRightElement = createElement("input");

          this.initPageMarginRightElements = function (wrapElement) {
            var _a = _this,
                pageMarginRight = _a.data.pageMarginRight,
                pageMarginRightElement = _a.pageMarginRightElement;
            var labelElement = createElement("label");
            wrapElement.appendChild(labelElement);
            labelElement.innerHTML = getI18nInnerHTML({
              en_us: "Right:",
              zh_cn: "右：",
              zh_tw: "右："
            });
            pageMarginRightElement.value = pageMarginRight.toString();
            pageMarginRightElement.type = "number";
            pageMarginRightElement.setAttribute("min", "0");

            var changeValue = function changeValue() {
              _this.data.pageMarginRight = parseInt(pageMarginRightElement.value, 0);

              _this.saveConfigAndBuildIfAllowed();
            };

            pageMarginRightElement.onchange = changeValue;
            pageMarginRightElement.onblur = changeValue;
            wrapElement.appendChild(labelElement);
            wrapElement.appendChild(pageMarginRightElement);
          };

          this.build = function () {
            var _a, _b;

            var _c = _this.data,
                paperSize = _c.paperSize,
                isLandscape = _c.isLandscape,
                maxX = _c.maxX,
                maxY = _c.maxY,
                pageMarginTop = _c.pageMarginTop,
                pageMarginBottom = _c.pageMarginBottom,
                pageMarginLeft = _c.pageMarginLeft,
                pageMarginRight = _c.pageMarginRight;
            var PAPER_WIDTH_A3 = 297;
            var PAPER_HEIGHT_A3 = 420;
            var PAPER_WIDTH_A4 = 210;
            var PAPER_HEIGHT_A4 = 297;
            (_a = getElementById("brickPageIframe").contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({
              command: "changePaperSize",
              data: {
                paperSize: paperSize,
                isLandscape: isLandscape,
                pageMarginTop: pageMarginTop,
                pageMarginLeft: pageMarginLeft
              }
            }, "*");
            var paperWidth = 0;
            var paperHeight = 0;

            switch (paperSize) {
              case "A3":
                paperWidth = PAPER_WIDTH_A3;
                paperHeight = PAPER_HEIGHT_A3;
                break;

              case "A4":
                paperWidth = PAPER_WIDTH_A4;
                paperHeight = PAPER_HEIGHT_A4;
                break;

              default:
                break;
            }

            var pageMarginHorizontal = pageMarginLeft + pageMarginRight;
            var pageMarginVertical = pageMarginTop + pageMarginBottom;

            if (isLandscape) {
              maxX = paperHeight - pageMarginHorizontal;
              maxY = paperWidth - pageMarginVertical;
            } else {
              maxX = paperWidth - pageMarginHorizontal;
              maxY = paperHeight - pageMarginVertical;
            }

            _this.data.maxX = maxX;
            _this.data.maxY = maxY;
            var dpiHelper = new DPIHelper();
            _this.pxToMmScale = dpiHelper.getPxToMmScale();
            _this.mmToPxScale = dpiHelper.getMmToPxScale();

            _this.countDataAndComputedData();

            var title = _this.computedData.title;
            var titleElement = getTitleElement();
            titleElement.i18n = title;
            titleElement.innerHTML = title[getCurrentLang()];
            var _d = _this,
                getHtml = _d.getHtml,
                getCss = _d.getCss;
            var html = getHtml();
            var css = getCss();
            (_b = getElementById("brickPageIframe").contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
              command: "build",
              data: {
                title: title,
                html: html,
                css: css
              }
            }, "*");

            _this.saveConfig();
          };

          this.mmToPxScale = 0;
          this.pxToMmScale = 0;

          this.loadConfig = function () {
            var currentConfig = getCurrentPageLocalStorage();

            if (currentConfig.length === 0) {
              _this.loadDefaultConfig();

              return;
            }

            _this.updateData(JSON.parse(currentConfig));
          };

          this.saveConfig = function () {
            setCurrentPageLocalStorage(JSON.stringify(_this.data));
          };

          this.loadDefaultConfig = function () {
            _this.updateData(JSON.parse(_this.DEFAULT_DATA_JSON));
          };

          this.getData = function () {
            return _this.data;
          };

          this.setData = function (newData) {
            _this.updateData(newData);
          };

          this.buildAfterChangeParameter = true;

          this.saveConfigAndBuildIfAllowed = function () {
            if (!_this.buildAfterChangeParameter) return;

            _this.saveConfig();

            _this.build();
          };

          this.updateData = function (newData) {
            var paperSize = newData.paperSize,
                isLandscape = newData.isLandscape,
                pageMarginTop = newData.pageMarginTop,
                pageMarginBottom = newData.pageMarginBottom,
                pageMarginLeft = newData.pageMarginLeft,
                pageMarginRight = newData.pageMarginRight,
                diceKind = newData.diceKind;
            var _a = _this,
                paperSizeRadioArray = _a.paperSizeRadioArray,
                isLandscapeRadioArray = _a.isLandscapeRadioArray,
                pageMarginTopElement = _a.pageMarginTopElement,
                pageMarginBottomElement = _a.pageMarginBottomElement,
                pageMarginLeftElement = _a.pageMarginLeftElement,
                pageMarginRightElement = _a.pageMarginRightElement;
            paperSizeRadioArray.forEach(function (element) {
              element.checked = element.value === paperSize;
            });
            isLandscapeRadioArray.forEach(function (element) {
              element.checked = element.value === isLandscape.toString();
            });
            pageMarginTopElement.value = pageMarginTop;
            pageMarginBottomElement.value = pageMarginBottom;
            pageMarginLeftElement.value = pageMarginLeft;
            pageMarginRightElement.value = pageMarginRight;
            _this.data.paperSize = paperSize;
            _this.data.isLandscape = isLandscape;
            _this.data.pageMarginTop = pageMarginTop;
            _this.data.pageMarginBottom = pageMarginBottom;
            _this.data.pageMarginLeft = pageMarginLeft;
            _this.data.pageMarginRight = pageMarginRight;

            _this.updateOtherData(newData);

            _this.build();
          };

          this.getAutomaticPaginationHtmlFromChildList = function (list, MAX_X, MAX_Y, pageClass) {
            if (pageClass === void 0) {
              pageClass = "";
            }

            if (list.length === 0) return "";
            var html = pageClass.length ? "<page class=\"" + pageClass + "\">" : "<page>";
            var usedX = 0;
            var usedY = 0;
            var currentRowHeight = 0;
            list.forEach(function (child) {
              var WIDTH = 0,
                  HEIGHT = 0;

              if (child instanceof SVGElement) {
                WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
                HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
              } else {
                var style = child.getAttribute("style");

                if (style.indexOf("width:") > -1) {
                  WIDTH = parseFloat(style.split("width:")[1].split(";")[0].replace("mm", ""));
                }

                if (style.indexOf("height:") > -1) {
                  HEIGHT = parseFloat(style.split("height:")[1].split(";")[0].replace("mm", ""));
                }
              }

              var newPage = usedY + HEIGHT > MAX_Y;
              var newRow = false;

              if (!newPage && usedX + WIDTH > MAX_X) {
                usedY += currentRowHeight;

                if (usedY + HEIGHT > MAX_Y) {
                  newPage = true;
                } else {
                  newRow = true;
                }
              }

              if (newPage) {
                html += "</page><page>";
                usedX = 0;
                usedY = 0;
                currentRowHeight = 0;
              } else if (newRow) {
                usedX = 0;
                currentRowHeight = 0;
              }

              currentRowHeight = Math.max(currentRowHeight, HEIGHT);
              usedX += WIDTH;
              html += child.outerHTML;
            });
            html += "</page>";
            return html;
          };

          this.appendAutomaticPaginationControls = function (wrapper, list, MAX_X, MAX_Y) {
            if (list.length === 0) return;
            var page = createElement("page");
            wrapper.appendChild(page);
            var usedX = 0;
            var usedY = 0;
            var currentRowHeight = 0;
            list.forEach(function (child) {
              var WIDTH = 0,
                  HEIGHT = 0;

              if (child instanceof SVGElement) {
                WIDTH = parseFloat(child.getAttribute("width").replace("mm", ""));
                HEIGHT = parseFloat(child.getAttribute("height").replace("mm", ""));
              } else {
                var style = child.getAttribute("style");

                if (style.indexOf("width:") > -1) {
                  WIDTH = parseFloat(style.split("width:")[1].split(";")[0].replace("mm", ""));
                }

                if (style.indexOf("height:") > -1) {
                  HEIGHT = parseFloat(style.split("height:")[1].split(";")[0].replace("mm", ""));
                }
              }

              var newPage = usedY + HEIGHT > MAX_Y;
              var newRow = false;

              if (!newPage && usedX + WIDTH > MAX_X) {
                usedY += currentRowHeight;

                if (usedY + HEIGHT > MAX_Y) {
                  newPage = true;
                } else {
                  newRow = true;
                }
              }

              if (newPage) {
                page = createElement("page");
                wrapper.appendChild(page);
                usedX = 0;
                usedY = 0;
                currentRowHeight = 0;
              } else if (newRow) {
                usedX = 0;
                currentRowHeight = 0;
              }

              currentRowHeight = Math.max(currentRowHeight, HEIGHT);
              usedX += WIDTH;
              page.appendChild(child);
            });
          };

          this.formatDecile = function (length) {
            return Math.round(length * 10) / 10;
          };

          this.formatCentile = function (length) {
            return Math.round(length * 100) / 100;
          };

          this.formatMillimeter = function (length) {
            return Math.round(length * 1000) / 1000;
          };

          this.data = __assign(__assign({}, this.data), appendData);
          this.DEFAULT_DATA_JSON = JSON.stringify(this.data);
          this.computedData = __assign(__assign({}, this.computedData), otherComputedData);
          newPageSizeArray.forEach(function (pageSize) {
            return _this.pageSizeArray.push(pageSize);
          });
        }

        return BrickBase;
      }();

      exports_1("BrickBase", BrickBase);
    }
  };
});
__exp = _instantiate("brickBase", false);
var BrickBase = __exp["BrickBase"];