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

var StoriesPage = (function (_super) {
    __extends(StoriesPage, _super);
    function StoriesPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainContentElement = createElement("div");
        _this.topImageElement = createElement("img");
        _this.pageSubjectElement = createElement("div");
        _this.listElement = createElement("div");
        _this.paginationElement = createElement("div");
        _this.initMainElement = function () {
            var PAGE_NAME = "storiesPage";
            var mainElement = getMainElement();
            mainElement.id = PAGE_NAME + "Main";
            var _a = _this, mainContentElement = _a.mainContentElement, topImageElement = _a.topImageElement, pageSubjectElement = _a.pageSubjectElement, listElement = _a.listElement, paginationElement = _a.paginationElement;
            mainElement.appendChild(topImageElement);
            mainElement.appendChild(mainContentElement);
            mainContentElement.id = PAGE_NAME + "MainContent";
            mainContentElement.appendChild(pageSubjectElement);
            mainContentElement.appendChild(listElement);
            mainContentElement.appendChild(paginationElement);
            topImageElement.id = PAGE_NAME + "MainImage";
            topImageElement.className = "topImage";
            topImageElement.src =
                SITE_IMAGE_PATH + "5stories/topImage.jpg?" + mainImageVersions.stories;
            pageSubjectElement.id = PAGE_NAME + "Subject";
            pageSubjectElement.className = "pageSubject";
            ['en_us', 'zh_cn', 'zh_tw'].forEach(function (lang) {
                var span = createElement(lang);
                pageSubjectElement.appendChild(span);
                var image = createElement('img');
                image.setAttribute('class', 'pageSubject');
                var src = "./images/0common/" + lang + "/5stories.png";
                image.src = src;
                image.alt = src;
                span.appendChild(image);
            });
            pcGlobal.fillListAndPagination(listElement, paginationElement, PageSize.storiesPage, stories.map(function (item, index) {
                return __assign({ id: index + 1 }, item);
            }), PAGE_NAME, function (itemElement, data, init) {
                if (init) {
                    var titleElement = createElement("div");
                    titleElement.className = PAGE_NAME + "Title";
                    itemElement.appendChild(titleElement);
                    var summaryAndDateElement = createElement("div");
                    summaryAndDateElement.className = PAGE_NAME + "SummaryAndDateWrap";
                    itemElement.appendChild(summaryAndDateElement);
                    var summaryElement = createElement("span");
                    summaryElement.className = PAGE_NAME + "Summary";
                    summaryAndDateElement.appendChild(summaryElement);
                    var storyDateElement = createElement("span");
                    storyDateElement.className = PAGE_NAME + "Date";
                    summaryAndDateElement.appendChild(storyDateElement);
                    var hrElement = createElement("hr");
                    itemElement.appendChild(hrElement);
                    hrElement.className = PAGE_NAME + "Hr";
                }
                else if (data === null) {
                    var titleElement = itemElement.children[0];
                    titleElement.innerHTML = "";
                    var summaryAndDateElement = itemElement
                        .children[1];
                    var summaryElement = summaryAndDateElement
                        .children[0];
                    var storyDateElement = summaryAndDateElement
                        .children[1];
                    summaryElement.innerHTML = "";
                    storyDateElement.innerHTML = "";
                    var hrElement = itemElement.children[2];
                    hide(hrElement);
                    itemElement.onclick = function (event) {
                        return stopEventBubble(event);
                    };
                }
                else {
                    var _a = data, id_1 = _a.id, date = _a.date, title = _a.title, summary = _a.summary;
                    var titleElement = itemElement.children[0];
                    titleElement.innerHTML = getI18nInnerHTML(title);
                    var summaryAndDateElement = itemElement
                        .children[1];
                    var summaryElement = summaryAndDateElement
                        .children[0];
                    var storyDateElement = summaryAndDateElement
                        .children[1];
                    summaryElement.innerHTML = getI18nInnerHTML(summary);
                    storyDateElement.innerHTML = getI18nInnerHTMLFromDate(date);
                    var hrElement = itemElement.children[2];
                    showBlock(hrElement);
                    itemElement.onclick = function (event) {
                        window.location.href = "?go=story&id=" + id_1;
                        return stopEventBubble(event);
                    };
                }
            });
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    StoriesPage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: "Growing List",
            zh_cn: "成长足迹清单",
            zh_tw: "成長足迹清單"
        };
    };
    return StoriesPage;
}(ActualPageBase));
var storiesPage = new StoriesPage();
storiesPage.init();

__instantiate("stories", false);

