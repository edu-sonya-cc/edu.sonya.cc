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

var ReportPage = (function (_super) {
    __extends(ReportPage, _super);
    function ReportPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.styleElement = createElement("style");
        _this.reportElement = createElement("div");
        _this.titleElement = getTitleElement();
        _this.paperSize = "A4";
        _this.isLandscape = false;
        _this.pageMarginTop = 0;
        _this.pageMarginLeft = 0;
        _this.pageMarginBottom = 0;
        _this.pageMarginRight = 0;
        _this.initMainElement = function () {
            var idPrefix = "reportPage";
            getHeaderElement().remove();
            getFooterElement().remove();
            getMainElement().remove();
            var body = getBodyElement();
            body.setAttribute(REPORT_PROPERTY, "");
            var _a = _this, styleElement = _a.styleElement, reportElement = _a.reportElement;
            styleElement.id = idPrefix + "Style";
            var headElement = getHeadElement();
            headElement.appendChild(styleElement);
            body.appendChild(reportElement);
            reportElement.id = idPrefix + "Core";
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    ReportPage.prototype.initTitleElement = function () {
        this.titleElement.i18n = { en_us: "Report", zh_cn: "报表", zh_tw: "報表" };
    };
    ReportPage.prototype.updateReport = function (title, css, html) {
        var _a = this, styleElement = _a.styleElement, reportElement = _a.reportElement, titleElement = _a.titleElement;
        styleElement.innerHTML = css;
        reportElement.innerHTML = html;
        titleElement.i18n = title;
        titleElement.innerHTML = title[getCurrentLang()];
    };
    ReportPage.prototype.getCss = function () {
        return this.styleElement.innerHTML;
    };
    ReportPage.prototype.getHtml = function () {
        return this.reportElement.innerHTML;
    };
    ReportPage.prototype.changeLang = function (lang) {
        getHtmlElement().setAttribute(LANG_PROPERTY, lang);
    };
    ReportPage.prototype.changePaperSize = function (paperSize, isLandscape, pageMarginTop, pageMarginLeft, pageMarginBottom, pageMarginRight) {
        getBodyElement().setAttribute(PAPER_SIZE_PROPERTY, paperSize);
        this.paperSize = paperSize;
        this.isLandscape = isLandscape;
        this.pageMarginTop = pageMarginTop;
        this.pageMarginLeft = pageMarginLeft;
        this.pageMarginBottom = pageMarginBottom;
        this.pageMarginLeft = pageMarginLeft;
    };
    ReportPage.prototype.print = function () {
        if (global.CAN_NOT_PRINT) {
            window.parent.brickCore.download2PDF();
        }
        else {
            window.print();
        }
    };
    return ReportPage;
}(ActualPageBase));
var reportPage = new ReportPage();
reportPage.init();
window.addEventListener("message", function (event) {
    var _a = event.data, command = _a.command, _b = _a.data, title = _b.title, css = _b.css, html = _b.html, lang = _b.lang, paperSize = _b.paperSize, isLandscape = _b.isLandscape, pageMarginTop = _b.pageMarginTop, pageMarginLeft = _b.pageMarginLeft;
    switch (command) {
        case "build":
            reportPage.updateReport(title, css, html);
            break;
        case "changeLang":
            reportPage.changeLang(lang);
            break;
        case "changePaperSize":
            reportPage.changePaperSize(paperSize, isLandscape, pageMarginTop, pageMarginLeft);
            break;
        case "print":
            reportPage.print();
            break;
        default:
            break;
    }
});

__instantiate("report", false);

