"use strict";

// @ts-nocheck
/* eslint-disable */
var System, __instantiate;
(function () {
	// deno-fmt-ignore
  var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  // deno-fmt-ignore
  var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
  var r = Object.create(null);
  System = {
    register: function (id, d, f) {
      r[id] = { d: d, f: f, exp: {} };
    },
  };
  function dI(mid, src) {
    return __awaiter(this, void 0, void 0, function () {
      var id, _a, o, ia, _b, sa, oa, s, i;
      return __generator(this, function (_c) {
        id = mid.replace(/\.\w+$/i, "");
        if (id.includes("./")) {
          (_a = id.split("/").reverse()),
            (o = _a[0]),
            (ia = _a.slice(1)),
            (_b = src.split("/").reverse()),
            (sa = _b.slice(1)),
            (oa = [o]);
          (s = 0), (i = void 0);
          while ((i = ia.shift())) {
            if (i === "..") s++;
            else if (i === ".") break;
            else oa.push(i);
          }
          if (s < sa.length) oa.push.apply(oa, sa.slice(s));
          id = oa.reverse().join("/");
        }
        return [
          2,
          id in r ? gExpA(id) : Promise.resolve().then(function () {
            return require(mid);
          }),
        ];
      });
    });
  }
  function gC(id, main) {
    return {
      id: id,
      import: function (m) {
        return dI(m, id);
      },
      meta: { url: id, main: main },
    };
  }
  function gE(exp) {
    return function (id, v) {
      var _a;
      var e = typeof id === "string" ? ((_a = {}), (_a[id] = v), _a) : id;
      for (var _i = 0, _b = Object.entries(e); _i < _b.length; _i++) {
        var _c = _b[_i],
          id_1 = _c[0],
          value = _c[1];
        Object.defineProperty(exp, id_1, {
          value: value,
          writable: true,
          enumerable: true,
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
            (d = m.d), (e = m.e), (s = m.s);
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
      for (var i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = function (m, a) {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

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
                    this.USER_AGENT_LOWER_CASE_FIXED = navigator.userAgent.toLowerCase().replace(/;/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\//g, " ");
                    this.IS_MOBILE = this.USER_AGENT_LOWER_CASE_FIXED
                        .indexOf(" mobile ") > -1;
                    this.IS_PAD = this.USER_AGENT_LOWER_CASE_FIXED.replace(/ ipad /g, " pad ").replace(/ tablet /g, " pad ").indexOf(" pad ") > -1;
                    this.IS_MOBILE_OR_PAD = this.IS_MOBILE || this.IS_PAD;
                    this.CAN_NOT_PRINT = this.IS_MOBILE_OR_PAD || this.USER_AGENT_LOWER_CASE_FIXED.indexOf('macwechat') > -1 || ((this.USER_AGENT_LOWER_CASE_FIXED.indexOf('micromessenger') > -1) && (this.USER_AGENT_LOWER_CASE_FIXED.indexOf('windowswechat') === -1));
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
                        if (_this.CAN_NOT_PRINT) {
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
                            if (_this.IS_MOBILE_OR_PAD) {
                                var padOrPhoneCssName = _this.IS_PAD ? "pad" : 'phone';
                                link.href = "css/" + padOrPhoneCssName + ".css?" + cssVersions[padOrPhoneCssName];
                            }
                            else {
                                link.href = "css/pc.css?" + cssVersions.pc;
                            }
                        }
                        else {
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
var global = __exp["global"];

