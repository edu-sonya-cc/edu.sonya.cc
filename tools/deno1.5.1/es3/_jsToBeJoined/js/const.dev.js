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

System.register("const", [], function (exports_1, context_1) {
  "use strict";

  var DOMAIN, FILENAME_POSTFIX, CURRENT_URL, HOME_URL, HOME_URL_LENGTH, ActualPage, ACTUAL_PAGE_NAME_ARRAY, getActualPageName, getActualPageValueByName, PARAMETER_FOR_ACTUAL_PAGE, ACTUAL_PAGE_VALUE, ACTUAL_PAGE_NAME, SITE_ROOT, SITE_IMAGE_PATH, SITE_JAVASCRIPT_PATH, SITE_CSS_PATH, getPageParameterByName, PAGE_SUB_KIND, PAGE_IDNEX, PAGE_ID, MORE_BUTTON_HTML, BRICK_SUB_KINDS, ACTIVATED_PROPERTY, SUB_KIND_NAME_PROPERTY, LANG_PROPERTY, PAGE_PROPERTY, DEVICE_PROPERTY, REPORT_PROPERTY, ID_PROPERTY, PAPER_SIZE_PROPERTY, REPORT_KIND_PROPERTY;

  var __moduleName = context_1 && context_1.id;

  return {
    setters: [],
    execute: function execute() {
      exports_1("DOMAIN", DOMAIN = "edu.sonya.cc");
      exports_1("FILENAME_POSTFIX", FILENAME_POSTFIX = DOMAIN.concat("_"));
      exports_1("CURRENT_URL", CURRENT_URL = window.location.href);
      exports_1("HOME_URL", HOME_URL = CURRENT_URL.startsWith("file:///") ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm" : "http://edu.sonya.cc/");

      (function () {
        var myWindow = window;
        if (!myWindow.top || CURRENT_URL.startsWith("file:///")) return;

        if (!myWindow.top.location.href.startsWith(HOME_URL)) {
          myWindow.top.location.replace(HOME_URL);
        }
      })();

      exports_1("HOME_URL_LENGTH", HOME_URL_LENGTH = HOME_URL.length);

      (function (ActualPage) {
        ActualPage[ActualPage["home"] = 0] = "home";
        ActualPage[ActualPage["bricks"] = 1] = "bricks";
        ActualPage[ActualPage["brick"] = 2] = "brick";
        ActualPage[ActualPage["treasures"] = 3] = "treasures";
        ActualPage[ActualPage["stories"] = 4] = "stories";
        ActualPage[ActualPage["story"] = 5] = "story";
        ActualPage[ActualPage["about"] = 6] = "about";
        ActualPage[ActualPage["report"] = 7] = "report";
      })(ActualPage || (ActualPage = {}));

      exports_1("ActualPage", ActualPage);
      exports_1("ACTUAL_PAGE_NAME_ARRAY", ACTUAL_PAGE_NAME_ARRAY = ["home", "bricks", "brick", "treasures", "stories", "story", "about", "report"]);
      exports_1("getActualPageName", getActualPageName = function getActualPageName(value) {
        return ACTUAL_PAGE_NAME_ARRAY[value];
      });
      exports_1("getActualPageValueByName", getActualPageValueByName = function getActualPageValueByName(name) {
        return ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
      });
      exports_1("PARAMETER_FOR_ACTUAL_PAGE", PARAMETER_FOR_ACTUAL_PAGE = "go");
      exports_1("ACTUAL_PAGE_VALUE", ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf("?".concat(PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1 ? getActualPageValueByName(CURRENT_URL.split("?")[1].split("&")[0].split("=")[1]) : ActualPage.home);
      exports_1("ACTUAL_PAGE_NAME", ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE]);
      exports_1("SITE_ROOT", SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1));
      exports_1("SITE_IMAGE_PATH", SITE_IMAGE_PATH = SITE_ROOT + "images/");
      exports_1("SITE_JAVASCRIPT_PATH", SITE_JAVASCRIPT_PATH = SITE_ROOT + "js/");
      exports_1("SITE_CSS_PATH", SITE_CSS_PATH = SITE_ROOT + "css/");
      exports_1("getPageParameterByName", getPageParameterByName = function getPageParameterByName(name, defaultValue) {
        return CURRENT_URL.indexOf("&" + name + "=") === -1 ? defaultValue || "" : CURRENT_URL.split("&").slice(1).filter(function (keyValue) {
          return keyValue.startsWith(name + "=");
        })[0].split("=")[1];
      });
      exports_1("PAGE_SUB_KIND", PAGE_SUB_KIND = getPageParameterByName("kind", null));
      exports_1("PAGE_IDNEX", PAGE_IDNEX = parseInt(getPageParameterByName("page", "1"), 0) - 1);
      exports_1("PAGE_ID", PAGE_ID = parseInt(getPageParameterByName("id", "1"), 0));
      exports_1("MORE_BUTTON_HTML", MORE_BUTTON_HTML = "<en_us>more...</en_us><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>");
      exports_1("BRICK_SUB_KINDS", BRICK_SUB_KINDS = [{
        name: "01_chinese",
        title: {
          en_us: "Chinese",
          zh_cn: "语文",
          zh_tw: "語文"
        }
      }, {
        name: "02_math",
        title: {
          en_us: "Mathematics",
          zh_cn: "数学",
          zh_tw: "數學"
        }
      }, {
        name: "03_english",
        title: {
          en_us: "English",
          zh_cn: "英语",
          zh_tw: "英語"
        }
      }, {
        name: "04_programming",
        title: {
          en_us: "Programming",
          zh_cn: "编程",
          zh_tw: "程式設計"
        }
      }]);
      exports_1("ACTIVATED_PROPERTY", ACTIVATED_PROPERTY = "edu-activated");
      exports_1("SUB_KIND_NAME_PROPERTY", SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name");
      exports_1("LANG_PROPERTY", LANG_PROPERTY = "edu-lang");
      exports_1("PAGE_PROPERTY", PAGE_PROPERTY = "edu-page");
      exports_1("DEVICE_PROPERTY", DEVICE_PROPERTY = "edu-device");
      exports_1("REPORT_PROPERTY", REPORT_PROPERTY = "edu-report");
      exports_1("ID_PROPERTY", ID_PROPERTY = "edu-id");
      exports_1("PAPER_SIZE_PROPERTY", PAPER_SIZE_PROPERTY = "edu-paper-size");
      exports_1("REPORT_KIND_PROPERTY", REPORT_KIND_PROPERTY = "edu-report-kind");
    }
  };
});
__exp = _instantiate("const", false);
var DOMAIN = __exp["DOMAIN"];
var FILENAME_POSTFIX = __exp["FILENAME_POSTFIX"];
var CURRENT_URL = __exp["CURRENT_URL"];
var HOME_URL = __exp["HOME_URL"];
var HOME_URL_LENGTH = __exp["HOME_URL_LENGTH"];
var ACTUAL_PAGE_NAME_ARRAY = __exp["ACTUAL_PAGE_NAME_ARRAY"];
var getActualPageName = __exp["getActualPageName"];
var getActualPageValueByName = __exp["getActualPageValueByName"];
var PARAMETER_FOR_ACTUAL_PAGE = __exp["PARAMETER_FOR_ACTUAL_PAGE"];
var ACTUAL_PAGE_VALUE = __exp["ACTUAL_PAGE_VALUE"];
var ACTUAL_PAGE_NAME = __exp["ACTUAL_PAGE_NAME"];
var SITE_ROOT = __exp["SITE_ROOT"];
var SITE_IMAGE_PATH = __exp["SITE_IMAGE_PATH"];
var SITE_JAVASCRIPT_PATH = __exp["SITE_JAVASCRIPT_PATH"];
var SITE_CSS_PATH = __exp["SITE_CSS_PATH"];
var getPageParameterByName = __exp["getPageParameterByName"];
var PAGE_SUB_KIND = __exp["PAGE_SUB_KIND"];
var PAGE_IDNEX = __exp["PAGE_IDNEX"];
var PAGE_ID = __exp["PAGE_ID"];
var MORE_BUTTON_HTML = __exp["MORE_BUTTON_HTML"];
var BRICK_SUB_KINDS = __exp["BRICK_SUB_KINDS"];
var ACTIVATED_PROPERTY = __exp["ACTIVATED_PROPERTY"];
var SUB_KIND_NAME_PROPERTY = __exp["SUB_KIND_NAME_PROPERTY"];
var LANG_PROPERTY = __exp["LANG_PROPERTY"];
var PAGE_PROPERTY = __exp["PAGE_PROPERTY"];
var DEVICE_PROPERTY = __exp["DEVICE_PROPERTY"];
var REPORT_PROPERTY = __exp["REPORT_PROPERTY"];
var ID_PROPERTY = __exp["ID_PROPERTY"];
var PAPER_SIZE_PROPERTY = __exp["PAPER_SIZE_PROPERTY"];
var REPORT_KIND_PROPERTY = __exp["REPORT_KIND_PROPERTY"];