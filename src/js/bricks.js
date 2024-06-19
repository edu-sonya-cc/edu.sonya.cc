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

var BricksPage = (function (_super) {
    __extends(BricksPage, _super);
    function BricksPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainContentElement = createElement('div');
        _this.topImageElement = createElement('img');
        _this.subKindsRowElement = createElement('div');
        _this.listElement = createElement('div');
        _this.paginationElement = createElement('div');
        _this.initItemElement = function (itemElement, PAGE_NAME) {
            var aElement = createElement('a');
            itemElement.appendChild(aElement);
            aElement.className = PAGE_NAME + "ItemWrap";
            var imageElement = createElement('img');
            var rightWrapElement = createElement('div');
            aElement.appendChild(imageElement);
            aElement.appendChild(rightWrapElement);
            imageElement.className = PAGE_NAME + "ItemImage";
            rightWrapElement.className = PAGE_NAME + "ItemRightWrap";
            var titleElement = createElement('div');
            titleElement.className = PAGE_NAME + "ItemTitle";
            rightWrapElement.appendChild(titleElement);
            var hrElement = createElement('hr');
            hrElement.className = PAGE_NAME + "ItemHr";
            rightWrapElement.appendChild(hrElement);
            var summaryElement = createElement('span');
            summaryElement.className = PAGE_NAME + "ItemSummary";
            rightWrapElement.appendChild(summaryElement);
            var moreElement = createElement('div');
            moreElement.className = 'moreButton primary';
            moreElement.innerHTML = MORE_BUTTON_HTML;
            rightWrapElement.appendChild(moreElement);
        };
        _this.bindNullToItemElement = function (itemElement) {
            hide(itemElement);
        };
        _this.bindDataToItemElement = function (itemElement, data) {
            showBlock(itemElement);
            var _a = data, id = _a.id, image = _a.image, title = _a.title, summary = _a.summary;
            var aElement = itemElement.children[0];
            var imageElement = aElement.children[0];
            var rightWrapElement = aElement.children[1];
            var imageUrl = SITE_IMAGE_PATH + "2bricks/" + image;
            imageElement.src = imageUrl;
            imageElement.alt = imageUrl;
            var titleElement = rightWrapElement.children[0];
            titleElement.innerHTML = getI18nInnerHTML(title);
            var summaryElement = rightWrapElement.children[2];
            summaryElement.innerHTML = getI18nInnerHTML(summary);
            aElement.href = "?go=brick&id=" + id;
        };
        _this.PAGE_NAME = 'bricksPage';
        _this.fillItem = function (itemElement, data, init) {
            if (init) {
                _this.initItemElement(itemElement, _this.PAGE_NAME);
            }
            else if (data === null) {
                _this.bindNullToItemElement(itemElement);
            }
            else {
                _this.bindDataToItemElement(itemElement, data);
            }
        };
        _this.changeSubKind = function (subKind) {
            console.log("changeSubKind(" + subKind + ")", typeof subKind);
            var subKindsRowElement = _this.subKindsRowElement;
            var bricksSubKindPageSize = PageSize.bricksPage.subKind;
            var subKindsWrapElement = subKindsRowElement.children[1];
            for (var i = 0; i < bricksSubKindPageSize; ++i) {
                var subKindElement = subKindsWrapElement.children[i];
                if (subKindElement.getAttribute(SUB_KIND_NAME_PROPERTY) === subKind) {
                    subKindElement.setAttribute(ACTIVATED_PROPERTY, '');
                }
                else if (subKindElement.hasAttribute(ACTIVATED_PROPERTY)) {
                    subKindElement.removeAttribute(ACTIVATED_PROPERTY);
                }
            }
            var list = [];
            if (subKind.length && subKind !== '0') {
                var fitSubKind_1 = BRICK_SUB_KINDS[parseInt(subKind, 0) - 1].name;
                bricks.filter(function (_a) {
                    var subKind = _a.subKind;
                    return subKind === fitSubKind_1;
                }).forEach(function (item) { return list.push(item); });
            }
            else {
                bricks.forEach(function (item) { return list.push(item); });
            }
            var itemCount = list.length;
            var pageSize = PageSize.bricksPage.list;
            var listElement = _this.listElement;
            var subKindNamesWrapElement = subKindsRowElement
                .children[1];
            var currentPage = -1;
            var gotoSubKind = function (subKindIndex) {
                if (subKindIndex > itemCount)
                    subKindIndex = itemCount;
                else if (subKindIndex < 0)
                    subKindIndex = 0;
                if (currentPage === subKindIndex)
                    return;
                currentPage = subKindIndex;
                var _a = _this, paginationElement = _a.paginationElement, fillItem = _a.fillItem;
                pcGlobal.changePaginationParams(list, pageSize, listElement, paginationElement, fillItem);
                pcGlobal.setPageIndex(currentPage);
            };
            var kind = parseInt(PAGE_SUB_KIND, 0);
            var maxIndex = subKindNamesWrapElement.children.length - 1;
            for (var i = 0; i <= maxIndex; ++i) {
                var pageNumberElement = subKindNamesWrapElement
                    .children[i];
                var pageIndexProperty = pageNumberElement.getAttribute(PAGE_PROPERTY);
                if (parseInt(pageIndexProperty, 0) === kind) {
                    pageNumberElement.setAttribute(ACTIVATED_PROPERTY, '');
                }
                else if (pageNumberElement.hasAttribute(ACTIVATED_PROPERTY)) {
                    pageNumberElement.removeAttribute(ACTIVATED_PROPERTY);
                }
            }
            gotoSubKind(parseInt(subKind, 0));
        };
        _this.fillSubKindWrap = function (subKindsRowElement) {
            var changeSubKind = _this.changeSubKind;
            var bricksSubKindCount = BRICK_SUB_KINDS.length;
            var bricksSubKindPageSize = PageSize.bricksPage.subKind;
            var leftArrowElement = createElement('span');
            subKindsRowElement.appendChild(leftArrowElement);
            leftArrowElement.innerHTML = '&lt;';
            leftArrowElement.setAttribute('id', 'bricksSubKindRowLeftArrow');
            var subKindsWrapElement = createElement('span');
            subKindsRowElement.appendChild(subKindsWrapElement);
            subKindsWrapElement.setAttribute('id', 'bricksSubKindsWrap');
            var rightArrowElement = createElement('span');
            subKindsRowElement.appendChild(rightArrowElement);
            rightArrowElement.innerHTML = '&gt;';
            rightArrowElement.setAttribute('id', 'bricksSubKindRowRightArrow');
            for (var i = 0; i < bricksSubKindPageSize; ++i) {
                var subKindElement = createElement('span');
                subKindElement.className = 'bricksSubKind';
                subKindsWrapElement.appendChild(subKindElement);
            }
            var bricksSubKindPageCount = Math.ceil(bricksSubKindCount / bricksSubKindPageSize);
            var maxSubKindPageIndex = bricksSubKindPageCount - 1;
            var bricksSubKindCountOfLastPage = bricksSubKindCount -
                bricksSubKindPageSize * maxSubKindPageIndex;
            var currentPage = -1;
            var gotoPage = function (pageIndex) {
                if (typeof pageIndex === 'undefined' || isNaN(pageIndex)) {
                    pageIndex = 0;
                }
                if (pageIndex > maxSubKindPageIndex) {
                    pageIndex = maxSubKindPageIndex;
                }
                else if (pageIndex < 0) {
                    pageIndex = 0;
                }
                if (currentPage === pageIndex)
                    return;
                var bricksSubKindCountOfCurrentPage = pageIndex < maxSubKindPageIndex
                    ? bricksSubKindPageSize
                    : bricksSubKindCountOfLastPage;
                var indexOffset = bricksSubKindPageSize * pageIndex;
                var _loop_1 = function (i) {
                    var subKindElement = subKindsWrapElement
                        .children[i];
                    var bricksSubKind = BRICK_SUB_KINDS[indexOffset + i];
                    var name = bricksSubKind.name, title = bricksSubKind.title;
                    subKindElement.innerHTML = getI18nInnerHTML(title);
                    subKindElement.setAttribute(SUB_KIND_NAME_PROPERTY, name);
                    var kindStr = (BRICK_SUB_KINDS.map(function (_a) {
                        var name = _a.name;
                        return name;
                    }).indexOf(name) + 1).toString();
                    subKindElement.setAttribute(PAGE_PROPERTY, kindStr);
                    subKindElement.onclick = function (event) {
                        if (kindStr === PAGE_SUB_KIND) {
                            return stopEventBubble(event);
                        }
                        window.location.href = window.location.href.split('&')[0].concat("&kind=" + kindStr + "&page=1");
                        return stopEventBubble(event);
                    };
                };
                for (var i = 0; i < bricksSubKindCountOfCurrentPage; ++i) {
                    _loop_1(i);
                }
                for (var i = bricksSubKindPageSize - bricksSubKindCountOfCurrentPage; i > 0; --i) {
                    var subKindElement = subKindsWrapElement
                        .children[bricksSubKindPageSize - i];
                    subKindElement.onclick = function (event) {
                        return stopEventBubble(event);
                    };
                }
                currentPage = pageIndex;
                if (pageIndex === 0) {
                    leftArrowElement.setAttribute('disabled', '');
                }
                else if (leftArrowElement.hasAttribute('disabled')) {
                    leftArrowElement.removeAttribute('disabled');
                }
                if (pageIndex === maxSubKindPageIndex) {
                    rightArrowElement.setAttribute('disabled', '');
                }
                else if (rightArrowElement.hasAttribute('disabled')) {
                    rightArrowElement.removeAttribute('disabled');
                }
            };
            if (bricksSubKindPageCount < 2) {
                leftArrowElement.setAttribute('disabled', '');
                rightArrowElement.setAttribute('disabled', '');
            }
            else {
                leftArrowElement.onclick = function (event) {
                    gotoPage(currentPage - 1);
                    return stopEventBubble(event);
                };
                rightArrowElement.onclick = function (event) {
                    gotoPage(currentPage + 1);
                    return stopEventBubble(event);
                };
            }
            gotoPage(Math.floor(Math.max(0, parseInt(PAGE_SUB_KIND, 0) - 1) / 4));
            _this.changeSubKind(PAGE_SUB_KIND);
        };
        _this.initMainElement = function () {
            var PAGE_NAME = _this.PAGE_NAME;
            var mainElement = getMainElement();
            mainElement.id = PAGE_NAME + "Main";
            var _a = _this, mainContentElement = _a.mainContentElement, topImageElement = _a.topImageElement, subKindsRowElement = _a.subKindsRowElement, listElement = _a.listElement, paginationElement = _a.paginationElement;
            mainElement.appendChild(topImageElement);
            mainElement.appendChild(subKindsRowElement);
            mainElement.appendChild(mainContentElement);
            mainContentElement.id = PAGE_NAME + "MainContent";
            subKindsRowElement.id = PAGE_NAME + "SubKindsRow";
            mainContentElement.appendChild(listElement);
            mainContentElement.appendChild(paginationElement);
            topImageElement.id = PAGE_NAME + "MainImage";
            topImageElement.className = 'topImage';
            topImageElement.src = SITE_IMAGE_PATH + "2bricks/topImage.jpg?" + mainImageVersions.bricks;
            var pageSize = PageSize.bricksPage.list;
            pcGlobal.fillListAndPagination(listElement, paginationElement, pageSize, bricks.map(function (item, index) {
                return __assign({ id: index + 1 }, item);
            }), PAGE_NAME, _this.fillItem);
            _this.fillSubKindWrap(subKindsRowElement);
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    BricksPage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en_us: 'List of throwing a brick to attract jade',
            zh_cn: '抛砖引玉清单',
            zh_tw: '拋磚引玉清單'
        };
    };
    return BricksPage;
}(ActualPageBase));
var bricksPage = new BricksPage();
bricksPage.init();

__instantiate("bricks", false);

