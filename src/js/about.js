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

var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainContentElement = createElement("div");
        _this.topImageElement = createElement("img");
        _this.pageSubjectElement = createElement("div");
        _this.initMainElement = function () {
            var PAGE_NAME = "aboutPage";
            var mainElement = getMainElement();
            var _a = _this, mainContentElement = _a.mainContentElement, topImageElement = _a.topImageElement, pageSubjectElement = _a.pageSubjectElement;
            mainElement.appendChild(topImageElement);
            mainElement.appendChild(mainContentElement);
            topImageElement.id = PAGE_NAME + "MainImage";
            topImageElement.className = "topImage";
            topImageElement.src =
                SITE_IMAGE_PATH + "7about/mainImage.jpg?" + mainImageVersions.about;
            mainContentElement.id = PAGE_NAME + "MainContent";
            mainContentElement.appendChild(pageSubjectElement);
            pageSubjectElement.id = PAGE_NAME + "Subject";
            pageSubjectElement.className = "pageSubject";
            ['en', 'zh_cn', 'zh_tw'].forEach(function (lang) {
                var span = createElement(lang);
                pageSubjectElement.appendChild(span);
                var image = createElement('img');
                image.setAttribute('class', 'pageSubject');
                var src = "./images/0common/" + lang + "/7about.png";
                image.src = src;
                image.alt = src;
                span.appendChild(image);
            });
            var contentWrap = createElement("div");
            contentWrap.id = "aboutPageContent";
            mainContentElement.appendChild(contentWrap);
            [
                {
                    lang: "en",
                    html: "<h3>Seed germination: pure kindness</h3>\n\t<p>Sonya: \"When I grow up, I will be a biologist, astronomer and teacher at the same time... to protect the lovely animals and plants and lead the students to protect our beautiful home - the earth.\"</p>\n\t<p></p>\n\t<p>His father: \"When I was young, I was very thoughtful and always wanted to help others. I would like to become a scientist from my ancestors and bring benefits to thousands of people. I'm sorry that I didn't get what I wanted because of changes. Although I'm middle-aged, I haven't forgotten this ambition.\"</p>\n\t<p>His mother: \"You have good intentions. You have collected many pages. If you don't stop working, you can share the world's best wishes for the website.\"</p>\n\t<p>Friends: \"I would like to go with you.\"</p>\n\t<p></p>\n\t<p>The Three Character Classic: \"At the beginning of human life, human nature is inherently good\" - you, I, TA, all people in the world have good intentions in their hearts.</p>\n\t<p></p>\n\t<h3>Spark: sincere blessing</h3>\n\t<p>The earth is home to an increasing population of 8 billion people. Resources are scarce and species are endangered. It is like the sixth biological extinction.</p>\n\t<p>However, consumerism prevails, the gap between rich and poor increases, and there are extremely poor people who have no food, clothing, shelter, and learning opportunities.</p>\n\t<p>We wish all the students in the world can have good teachers and friends, have no worries about food and clothing, be safe and healthy, have good luck, study quietly, and achieve this life!</p>\n\t<p></p>\n\t<h3>Looking ahead</h3>\n\t<p>Spruce is a tiny species, which has broken through the ground and become a timber for a hundred years, reaching a hundred meters. It stands tall and protects the world;</p>\n\t<p>In the dim light of the spark, people gather firewood and gather charity like a torch. It can reach ten thousand hectares and shine through the darkness of the night.</p>"
                },
                {
                    lang: "zh_cn",
                    html: "<h3>\u79CD\u5B50\u840C\u82BD\uFF1A\u7EAF\u51C0\u5584\u5FF5</h3>\n<p>sonya\uFF1A\u201C\u7B49\u6211\u957F\u5927\uFF0C\u6211\u8981\u540C\u65F6\u5F53\u751F\u7269\u5B66\u5BB6\u3001\u5929\u6587\u5B66\u5BB6\u3001\u8001\u5E08\u2026\u2026\u4FDD\u62A4\u53EF\u7231\u7684\u52A8\u690D\u7269\u4EEC\uFF0C\u5E26\u9886\u5B66\u751F\u4EEC\u5171\u540C\u5B88\u62A4\u6211\u4EEC\u7F8E\u4E3D\u7684\u5BB6\u56ED\u2014\u2014\u5730\u7403\u3002\u201D</p>\n<p>\u5176\u7236\uFF1A\u201C\u543E\u5E7C\u597D\u601D\uFF0C\u5E38\u6B32\u52A9\u4EBA\uFF0C\u613F\u4ECE\u5148\u7956\uFF0C\u6210\u79D1\u5B66\u5BB6\uFF0C\u9020\u798F\u4E07\u65B9\u3002\u60DC\u56E0\u53D8\u6545\uFF0C\u672A\u5F97\u5982\u613F\uFF0C\u4ECA\u867D\u4E2D\u5E74\uFF0C\u672A\u5FD8\u6B64\u5FD7\u3002\u201D</p>\n<p>\u5176\u6BCD\uFF1A\u201C\u6C5D\u6709\u5584\u5FF5\uFF0C\u5DF2\u96C6\u8BF8\u9875\uFF0C\u4E0D\u82E5\u6682\u505C\u5DE5\u4F5C\uFF0C\u5E76\u4E3A\u7F51\u7AD9\uFF0C\u5206\u4EAB\u5168\u7403\uFF0C\u5706\u6EE1\u5584\u613F\u3002\u201D</p>\n<p>\u8BF8\u53CB\uFF1A\u201C\u613F\u4E0E\u540C\u884C\u3002\u201D</p>\n<p></p>\n<p>\u300A\u4E09\u5B57\u7ECF\u300B\uFF1A\u201C\u4EBA\u4E4B\u521D\uFF0C\u6027\u672C\u5584\u201D\u2014\u2014\u60A8\u3001\u6211\u3001TA\uFF0C\u4E16\u95F4\u8BF8\u4EBA\uFF0C\u5185\u5FC3\u6DF1\u5904\uFF0C\u7686\u6709\u5584\u5FF5\u3002</p>\n<p></p>\n<h3>\u661F\u661F\u4E4B\u706B\uFF1A\u771F\u8BDA\u795D\u798F</h3>\n<p>\u5730\u7403\u5BB6\u56ED\uFF0C\u4EBA\u53E3\u6E10\u589E\uFF0C\u5DF2\u8FBE80\u4EBF\uFF0C\u8D44\u6E90\u7D27\u7F3A\uFF0C\u7269\u79CD\u6FD2\u5371\uFF0C\u4FE8\u7136\u7B2C\u516D\u6B21\u751F\u7269\u5927\u706D\u7EDD\u4E4B\u52BF\u3002</p>\n<p>\u7136\u5219\u6D88\u8D39\u4E3B\u4E49\u76DB\u884C\uFF0C\u8D2B\u5BCC\u5DEE\u8DDD\u52A0\u5927\uFF0C\u6709\u6781\u5EA6\u8D2B\u56F0\u8005\uFF0C\u65E0\u8863\u65E0\u98DF\u3001\u65E0\u6709\u5C45\u6240\u3001\u65E0\u6709\u5B66\u4E60\u673A\u4F1A\u3002</p>\n<p>\u795D\u613F\u5929\u4E0B\u5B66\u7AE5\uFF0C\u7686\u5F97\u826F\u5E08\u76CA\u53CB\uFF0C\u8863\u98DF\u65E0\u5FE7\uFF0C\u5E73\u5B89\u5065\u5EB7\uFF0C\u5F97\u8BF8\u826F\u7F18\uFF0C\u9759\u5FC3\u5B66\u4E60\uFF0C\u6210\u5C31\u6B64\u751F\uFF01</p>\n<p></p>\n<h3>\u5C55\u671B\u672A\u6765</h3>\n<p>\u4E91\u6749\u79CD\u5FAE\uFF0C\u7834\u571F\u800C\u51FA\uFF0C\u767E\u5E74\u6210\u6750\uFF0C\u53EF\u8FBE\u767E\u7C73\uFF0C\u53C2\u5929\u800C\u7ACB\uFF0C\u5E87\u4F51\u5929\u4E0B\u751F\u7075\uFF1B</p>\n<p>\u661F\u706B\u5FAE\u5149\uFF0C\u4F17\u4EBA\u62FE\u67F4\uFF0C\u96C6\u5584\u5982\u70AC\uFF0C\u53EF\u8FBE\u4E07\u9877\uFF0C\u7EF5\u5EF6\u957F\u660E\uFF0C\u7167\u5F7B\u957F\u591C\u9ED1\u6697\u3002</p>"
                },
                {
                    lang: "zh_tw",
                    html: "<h3>\u7A2E\u5B50\u840C\u82BD\uFF1A\u7D14\u6DE8\u5584\u5FF5</h3>\n<p>sonya\uFF1A\u201C\u7B49\u6211\u9577\u5927\uFF0C\u6211\u8981\u540C\u6642\u7576\u751F\u7269\u5B78\u5BB6\u3001\u5929\u6587\u5B78\u5BB6\u3001\u8001\u5E2B\u2026\u2026\u4FDD\u8B77\u53EF\u611B\u7684\u52D5\u690D\u7269\u5011\uFF0C\u5E36\u9818\u5B78\u751F\u5011\u5171\u540C\u5B88\u8B77\u6211\u5011\u7F8E\u9E97\u7684\u5BB6\u5712\u2014\u2014\u5730\u7403\u3002\u201D</p>\n<p>\u5176\u7236\uFF1A\u201C\u543E\u5E7C\u597D\u601D\uFF0C\u5E38\u6B32\u52A9\u4EBA\uFF0C\u9858\u5F9E\u5148\u7956\uFF0C\u6210\u79D1\u5B78\u5BB6\uFF0C\u9020\u798F\u842C\u65B9\u3002\u60DC\u56E0\u8B8A\u6545\uFF0C\u672A\u5F97\u5982\u9858\uFF0C\u4ECA\u96D6\u4E2D\u5E74\uFF0C\u672A\u5FD8\u6B64\u5FD7\u3002\u201D</p>\n<p>\u5176\u6BCD\uFF1A\u201C\u6C5D\u6709\u5584\u5FF5\uFF0C\u5DF2\u96C6\u8AF8\u9801\uFF0C\u4E0D\u82E5\u66AB\u505C\u5DE5\u4F5C\uFF0C\u4E26\u70BA\u7DB2\u7AD9\uFF0C\u5206\u4EAB\u5168\u7403\uFF0C\u5713\u6EFF\u5584\u9858\u3002\u201D</p>\n<p>\u8AF8\u53CB\uFF1A\u201C\u9858\u8207\u540C\u884C\u3002\u201D</p>\n<p></p>\n<p>\u300A\u4E09\u5B57\u7D93\u300B\uFF1A\u201C\u4EBA\u4E4B\u521D\uFF0C\u6027\u672C\u5584\u201D\u2014\u2014\u60A8\u3001\u6211\u3001TA\uFF0C\u4E16\u9593\u8AF8\u4EBA\uFF0C\u5167\u5FC3\u6DF1\u8655\uFF0C\u7686\u6709\u5584\u5FF5\u3002</p>\n<p></p>\n<h3>\u661F\u661F\u4E4B\u706B\uFF1A\u771F\u8AA0\u795D\u798F</h3>\n<p>\u5730\u7403\u5BB6\u5712\uFF0C\u4EBA\u53E3\u6F38\u589E\uFF0C\u5DF2\u905480\u5104\uFF0C\u8CC7\u6E90\u7DCA\u7F3A\uFF0C\u7269\u7A2E\u7015\u5371\uFF0C\u513C\u7136\u7B2C\u516D\u6B21\u751F\u7269\u5927\u6EC5\u7D55\u4E4B\u52E2\u3002</p>\n<p>\u7136\u5247\u6D88\u8CBB\u4E3B\u7FA9\u76DB\u884C\uFF0C\u8CA7\u5BCC\u5DEE\u8DDD\u52A0\u5927\uFF0C\u6709\u6975\u5EA6\u8CA7\u56F0\u8005\uFF0C\u7121\u8863\u7121\u98DF\u3001\u7121\u6709\u5C45\u6240\u3001\u7121\u6709\u5B78\u7FD2\u6A5F\u6703\u3002</p>\n<p>\u795D\u9858\u5929\u4E0B\u5B78\u7AE5\uFF0C\u7686\u5F97\u826F\u5E2B\u76CA\u53CB\uFF0C\u8863\u98DF\u7121\u6182\uFF0C\u5E73\u5B89\u5065\u5EB7\uFF0C\u5F97\u8AF8\u826F\u7DE3\uFF0C\u975C\u5FC3\u5B78\u7FD2\uFF0C\u6210\u5C31\u6B64\u751F\uFF01</p>\n<p></p>\n<h3>\u5C55\u671B\u672A\u4F86</h3>\n<p>\u96F2\u6749\u7A2E\u5FAE\uFF0C\u7834\u571F\u800C\u51FA\uFF0C\u767E\u5E74\u6210\u6750\uFF0C\u53EF\u9054\u767E\u7C73\uFF0C\u53C3\u5929\u800C\u7ACB\uFF0C\u5E87\u4F51\u5929\u4E0B\u751F\u9748\uFF1B</p>\n<p>\u661F\u706B\u5FAE\u5149\uFF0C\u773E\u4EBA\u62FE\u67F4\uFF0C\u96C6\u5584\u5982\u70AC\uFF0C\u53EF\u9054\u842C\u9803\uFF0C\u7DBF\u5EF6\u9577\u660E\uFF0C\u7167\u5FB9\u9577\u591C\u9ED1\u6697\u3002</p>"
                },
            ].forEach(function (_a) {
                var lang = _a.lang, html = _a.html;
                var span = createElement(lang);
                contentWrap.appendChild(span);
                span.innerHTML = html;
            });
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
    }
    AboutPage.prototype.initTitleElement = function () {
        var titleElement = getTitleElement();
        titleElement.i18n = {
            en: "Sparks of Fire",
            zh_cn: "星星之火",
            zh_tw: "星星之火"
        };
    };
    return AboutPage;
}(ActualPageBase));
var aboutPage = new AboutPage();
aboutPage.init();

__instantiate("about", false);
