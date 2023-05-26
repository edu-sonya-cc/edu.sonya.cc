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

System.register("data", [], function (exports_1, context_1) {
    "use strict";
    var treasures, bricks, stories, teachers, searchSources, PageSize;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("treasures", treasures = [
                {
                    image: "0001.jpg",
                    link: [
                        "https://tv.cctv.com/2017/03/04/VIDEhOELsnCYlUtKhOmfO4Qu170304.shtml",
                        "https://tv.cctv.com/2019/04/08/VIDEK0hxH6lJEgOJTBnd6Zxd190408.shtml",
                        "https://tv.cctv.com/2020/05/25/VIDE3JWBNMchRN5x8IBwxTAU200525.shtml",
                    ],
                    title: {
                        en: "Aerial photography of China",
                        zh_cn: "航拍中国",
                        zh_tw: "航拍中國"
                    },
                    summary: {
                        en: 'The large-scale aerial documentary "Aerial China", produced by CCTV and produced by CCTV Record International Media Co., Ltd., is a documentary that looks down on China from an aerial perspective and comprehensively and stereoscopically demonstrates China\'s historical and cultural landscape, natural and geographical features, and economic and social development and changes.',
                        zh_cn: "由中央电视台出品，央视纪录国际传媒有限公司承制的大型航拍纪录片《航拍中国》是一部以空中视角俯瞰中国，全方位、立体化展示中国历史人文景观、自然地理风貌及经济社会发展变化的纪录片。",
                        zh_tw: "由中央電視臺出品，央視紀錄國際傳媒有限公司承制的大型航拍紀錄片《航拍中國》是一部以空中視角俯瞰中國，全方位、立體化展示中國歷史人文景觀、自然地理風貌及經濟社會發展變化的紀錄片。"
                    }
                },
                {
                    image: "0002.jpg",
                    link: [
                        "http://www.docuchina.cn/2021/10/14/VIDACIKE9BTRYjQ9vgb42Em5211014.shtml",
                        "http://www.docuchina.cn/2022/08/08/VIDAjijG5w3t2oRoMOPBUFX3220808.shtml",
                    ],
                    title: {
                        en: "China",
                        zh_cn: "中国",
                        zh_tw: "中國"
                    },
                    summary: {
                        en: 'Five thousand years ago, China is a great country. The large-scale cultural and historical documentary "China" explores people and things that have a profound impact on today\'s China from Chinese historical stories, tells Chinese stories, spreads the voice of China, and demonstrates the great evolution of Chinese civilization',
                        zh_cn: "溯五千年，泱泱中华，何以《中国》。大型人文历史纪录片《中国》从中国历史故事中，挖掘对今日中国影响深远的人和事，讲中国故事，传中国之声，展中华文明演进的伟大历程。",
                        zh_tw: "溯五千年，泱泱中華，何以《中國》。 大型人文歷史紀錄片《中國》從中國歷史故事中，挖掘對今日中國影響深遠的人和事，講中國故事，傳中國之聲，展中華文明演進的偉大歷程"
                    }
                },
                {
                    image: "0003.jpg",
                    link: "https://www.bilibili.com/video/BV12S4y1u75V/",
                    title: {
                        en: "Chinese Poetry Choir",
                        zh_cn: "中国唱诗班",
                        zh_tw: "中國唱詩班"
                    },
                    summary: {
                        en: 'The animation series of "Chinese Choir" was invested and produced by the Propaganda Department of the CPC Jiading District Committee. The animation was completely original and hand-painted by the Chinese youth team. The stories, scenes, characters and costumes were repeatedly researched and modified according to historical documents, with a view to restoring the historical scene at that time to the greatest extent in detail, making the film not only a cartoon with a story, but also a painting volume that can provide a glimpse of the style of an era.',
                        zh_cn: "“中国唱诗班”系列动画由中共嘉定区委宣传部投资出品，动画完全由中国青年团队独立原创手绘，在故事、场景、人物、服饰方面都根据历史文献，进行反复考证修改，以期能在细节上最大程度还原当时历史情景，使影片不仅成为一个有故事的动画作品，更成为一个可以管窥一个时代风貌的绘卷。",
                        zh_tw: "“中國唱詩班”系列動畫由中共嘉定區委宣傳部投資出品，動畫完全由中國青年團隊獨立原創手繪，在故事、場景、人物、服飾方面都根據歷史文獻，進行反復考證修改，以期能在細節上最大程度還原當時歷史情景，使影片不僅成為一個有故事的動畫作品，更成為一個可以管窺一個時代風貌的繪卷。"
                    }
                },
                {
                    image: "0004.jpg",
                    link: "https://tv.cctv.com/2021/02/08/VIDAHc9krezHR6EXJAq7w0nM210208.shtml",
                    title: {
                        en: "A Brief Reading of China",
                        zh_cn: "书简阅中国",
                        zh_tw: "書簡閱中國"
                    },
                    summary: {
                        en: 'The six episode documentary "Reading about China" has collected 30 letters from the ancients, focusing on digging out the stories and historical details of the characters from the letters, exploring the ups and downs of the individuals and the times behind the letters, and understanding the wisdom of the sages hidden in the letters. It is hoped that the philosophic thoughts precipitated for thousands of years can enlighten us at present; I hope that the truth of history will become more vivid in the description of these individuals.',
                        zh_cn: "六集纪录片《书简阅中国》收集了30封古人的书信，着重从书信中挖掘人物故事和历史细节，去窥探书信背后个体与时代的沉浮，去领悟潜藏在书信中的先贤智慧。希望沉淀千年的哲思，可以给当下的我们以启发；希望历史的真相，在这些个体的描述中，变得更加生动。",
                        zh_tw: "六集紀錄片《書簡閱中國》收集了30封古人的書信，著重從書信中挖掘人物故事和歷史細節，去窺探書信背後個體與時代的沉浮，去領悟潜藏在書信中的先賢智慧。 希望沉澱千年的哲思，可以給當下的我們以啟發； 希望歷史的真相，在這些個體的描述中，變得更加生動。"
                    }
                },
                {
                    image: "0005.jpg",
                    link: "https://tv.cctv.com/2022/04/04/VIDACO0Ql6L8Q7t41qzriSTy220404.shtml",
                    title: {
                        en: "Word never met you",
                        zh_cn: "字从遇见你",
                        zh_tw: "字從遇見你"
                    },
                    summary: {
                        en: "The program starts with the most basic Chinese characters, tells stories about the origin of Chinese characters and their cultural development, excavates the cultural code behind Chinese characters, presents the beauty of Chinese characters, and unifies the image, philosophy and artistry of Chinese characters.",
                        zh_cn: "节目从最基本的汉字开始，故事化的讲述汉字的造型来源及文化发展，挖掘汉字背后的文化密码，呈现汉字之美，将汉字的形象性、哲理性和艺术性统一表现。",
                        zh_tw: "節目從最基本的漢字開始，故事化的講述漢字的造型來源及文化發展，挖掘漢字背後的文化密碼，呈現漢字之美，將漢字的形象性、哲理性和藝術性統一表現。"
                    }
                },
                {
                    image: "0006.jpg",
                    link: "http://tv.cctv.com/2017/12/21/VIDAWE377ZDQH69msDk6KUle171221.shtml",
                    title: {
                        en: "If the national treasure can speak",
                        zh_cn: "如果国宝会说话",
                        zh_tw: "如果國寶會說話"
                    },
                    summary: {
                        en: '100 pieces of national treasures tell about the creativity of ancient Chinese people, and each episode of the documentary "If the National Treasure Can Speak" takes 5 minutes to understand Chinese culture from a new perspective. From the Neolithic Age to the Song, Yuan, Ming and Qing Dynasties, the 100 episode documentary "If a National Treasure Can Speak" has a vision spanning eight thousand years. The production team has traveled all over the country, shooting nearly 100 museums and archaeological research institutes, more than 50 archaeological sites, and more than 1000 cultural relics. It is the first time to talk about cultural relics with cultural relics and comb civilization with cultural relics.',
                        zh_cn: "100件国宝述说中国古人的创造力，百集纪录片《如果国宝会说话》每集5分钟以全新视角认识读懂中华文化。从新石器时代到宋元明清，百集纪录片《如果国宝会说话》目光跨越八千年，摄制组足迹遍布全国，拍摄了近百家博物馆和考古研究所，五十余处考古遗址，千余件文物。首次用文物讲文物，用文物梳理文明。",
                        zh_tw: "100件國寶述說中國古人的創造力，百集紀錄片《如果國寶會說話》每集5分鐘以全新視角認識讀懂中華文化。從新石器時代到宋元明清，百集紀錄片《如果國寶會說話》目光跨越八千年，攝製組足迹遍佈全國，拍攝了近百家博物館和考古研究所，五十餘處考古遺址，千餘件文物。 首次用文物講文物，用文物梳理文明。"
                    }
                },
            ]);
            exports_1("bricks", bricks = [
                {
                    id: 1,
                    subKind: "01_chinese",
                    version: "20221220",
                    image: "00001.jpg",
                    title: {
                        en: "Phonetic Notation and Writing",
                        zh_cn: "\u6CE8\u97F3\u4E0E\u5199\u5B57",
                        zh_tw: "\u6CE8\u97F3\u8207\u5BEB\u5B57"
                    },
                    summary: {
                        en: "The foundation of learning lies in the mother tongue. In today's China, there are two mother tongues, one is Mandarin, and the other is local dialect. The former is conducive to communication, while the latter can spread culture deeply, and people with lofty ideals can learn at the same time. Being in Minnan, his language is fluent in Tang Dynasty, but he has no literature. Only word of mouth can be passed on. Today, Yigong has developed software and translated it from Fujian to English, which is really a feat.<br/><br/>\nThe learning of Chinese begins with sound and shape, which should have two characters: pinyin.<br/>\nThose who speak Chinese characters: three-level character list (General Specification Chinese Character List), 8105 (3500+3000+1605); Kangxi Dictionary, more than 40000 words.<br/>\nOn Pinyin: there are more than four hundred (about 413) non tone Pinyin; Pinyin with tone, more than one thousand three.<br/>\nChildren often need dictation or phonetic transcription to learn, so this page is developed for printing and review.",
                        zh_cn: "\u5B66\u4E60\u4E4B\u672C\uFF0C\u5728\u4E8E\u6BCD\u8BED\u3002\u4ECA\u4E4B\u4E2D\u56FD\uFF0C\u6BCD\u8BED\u6709\u4E8C\uFF0C\u4E00\u666E\u901A\u8BDD\uFF0C\u4E8C\u4E3A\u672C\u5730\u65B9\u8A00\u3002\u524D\u8005\u5229\u4E8E\u4EA4\u6D41\uFF0C\u540E\u8005\u6DF1\u4F20\u6587\u5316\uFF0C\u6709\u5FD7\u4E4B\u58EB\uFF0C\u53EF\u517C\u5B66\u4E4B\u3002\u8EAB\u5728\u95FD\u5357\uFF0C\u5176\u8BED\u901A\u5510\uFF0C\u60DC\u5176\u65E0\u6587\uFF0C\u552F\u6709\u53E3\u53E3\u76F8\u4F20\u3002\u4ECA\u6709\u4E00\u516C\uFF0C\u5F00\u53D1\u8F6F\u4EF6\uFF0C\u95FD\u82F1\u4E92\u8BD1\uFF0C\u5B9E\u4E3A\u58EE\u4E3E\u3002<br/>\n\u6C49\u8BED\u5B66\u4E60\uFF0C\u59CB\u4E8E\u97F3\u5F62\uFF0C\u5176\u8981\u6709\u4E8C\uFF0C\u5B57\u8BCD\u62FC\u97F3\u3002<br/>\n\u8A00\u6C49\u5B57\u8005\uFF1A\u4E09\u7EA7\u5B57\u8868\uFF08\u300A\u901A\u7528\u89C4\u8303\u6C49\u5B57\u8868\u300B\uFF09\uFF0C8105\uFF083500+3000+1605\uFF09\uFF1B\u5EB7\u7199\u5B57\u5178\uFF0C\u56DB\u4E07\u4F59\u5B57\u3002<br/>\n\u8BBA\u62FC\u97F3\u8005\uFF1A\u65E0\u8C03\u62FC\u97F3\uFF0C\u56DB\u767E\u6709\u4F59\uFF08\u7EA6413\uFF09\uFF1B\u5E26\u8C03\u62FC\u97F3\uFF0C\u5343\u4E09\u6709\u4F59\u3002<br/>\n\u5B69\u7AE5\u5B66\u4E4B\uFF0C\u5E38\u9700\u542C\u5199\uFF0C\u6291\u6216\u6CE8\u97F3\uFF0C\u6545\u800C\u5F00\u53D1\u672C\u9875\uFF0C\u4EE5\u4FBF\u6253\u5370\uFF0C\u4F9B\u7AE5\u590D\u4E60\u3002",
                        zh_tw: "\u5B78\u7FD2\u4E4B\u672C\uFF0C\u5728\u65BC\u6BCD\u8A9E\u3002\u4ECA\u4E4B\u4E2D\u570B\uFF0C\u6BCD\u8A9E\u6709\u4E8C\uFF0C\u4E00\u666E\u901A\u8A71\uFF0C\u4E8C\u70BA\u672C\u5730\u65B9\u8A00\u3002\u524D\u8005\u5229\u65BC\u4EA4\u6D41\uFF0C\u5F8C\u8005\u6DF1\u50B3\u6587\u5316\uFF0C\u6709\u5FD7\u4E4B\u58EB\uFF0C\u53EF\u517C\u5B78\u4E4B\u3002\u8EAB\u5728\u95A9\u5357\uFF0C\u5176\u8A9E\u901A\u5510\uFF0C\u60DC\u5176\u7121\u6587\uFF0C\u552F\u6709\u53E3\u53E3\u76F8\u50B3\u3002\u4ECA\u6709\u4E00\u516C\uFF0C\u958B\u767C\u8EDF\u4EF6\uFF0C\u95A9\u82F1\u4E92\u8B6F\uFF0C\u5BE6\u70BA\u58EF\u8209\u3002<br/>\n\u6F22\u8A9E\u5B78\u7FD2\uFF0C\u59CB\u65BC\u97F3\u5F62\uFF0C\u5176\u8981\u6709\u4E8C\uFF0C\u5B57\u8A5E\u62FC\u97F3\u3002<br/>\n\u8A00\u6F22\u5B57\u8005\uFF1A\u4E09\u7D1A\u5B57\u8868\uFF08\u300A\u901A\u7528\u898F\u7BC4\u6F22\u5B57\u9336\u300B\uFF09\uFF0C8105\uFF083500+3000+1605\uFF09\uFF1B\u5EB7\u7199\u5B57\u5178\uFF0C\u56DB\u842C\u9918\u5B57\u3002<br/>\n\u8AD6\u62FC\u97F3\u8005\uFF1A\u7121\u8ABF\u62FC\u97F3\uFF0C\u56DB\u767E\u6709\u9918\uFF08\u7D04413\uFF09\uFF1B\u5E36\u8ABF\u62FC\u97F3\uFF0C\u5343\u4E09\u6709\u9918\u3002<br/>\n\u5B69\u7AE5\u5B78\u4E4B\uFF0C\u5E38\u9700\u807D\u5BEB\uFF0C\u6291\u6216\u6CE8\u97F3\uFF0C\u6545\u800C\u958B\u767C\u672C\u9801\uFF0C\u4EE5\u4FBF\u5217\u5370\uFF0C\u4F9B\u7AE5\u8907\u7FD2\u3002"
                    }
                },
                {
                    id: 2,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00002.jpg",
                    title: {
                        en: "Math Challenge",
                        zh_cn: "\u6570\u5B66\u95EF\u5173",
                        zh_tw: "\u6578\u5B78\u95D6\u95DC"
                    },
                    summary: {
                        en: "Mathematics is very important, which is slightly inferior to the mother tongue. Its source is the root of rational thinking.<br/>\n<br/>\nMathematics learning often requires a combination of the two: thinking and memory. Learn from others and meditate deeply.<br/>\nThe process of learning is obvious in order, so it needs to break through the barriers in stages and lay a solid foundation in the future. At the beginning, the misunderstanding was reduced. I wanted to practice a little, but eventually it was too short, and the foundation was gradually weak. Fortunately, I corrected the deviation in time, developed relevant pages, and printed the message, which gradually improved.",
                        zh_cn: "\u6570\u5B66\u751A\u4E3A\u91CD\u8981\uFF0C\u5176\u7565\u6B21\u4E8E\u6BCD\u8BED\uFF0C\u7A76\u5176\u6E90\u8005\uFF0C\u7406\u6027\u601D\u7EF4\u4E4B\u6839\u3002<br/>\n\u6570\u5B66\u5B66\u4E60\uFF0C\u5E38\u9700\u4E24\u8005\u7ED3\u5408\uFF1A\u4E00\u4E3A\u601D\u7EF4\uFF0C\u4E8C\u4E3A\u8BB0\u5FC6\u3002\u5E7F\u5B66\u4ED6\u4EBA\u4E4B\u957F\uFF0C\u9759\u601D\u6DF1\u5165\u5DF1\u5FC3\u3002<br/>\n\u5B66\u4E4B\u8FC7\u7A0B\uFF0C\u6B21\u7B2C\u660E\u663E\uFF0C\u6545\u9700\u9636\u6BB5\u95EF\u5173\uFF0C\u624E\u5B9E\u65E5\u540E\u6839\u57FA\u3002\u521D\u65F6\u8BEF\u89E3\u53CC\u51CF\uFF0C\u672C\u6B32\u7EC3\u4E60\u6709\u8282\uFF0C\u6700\u7EC8\u8FC7\u4E8E\u7F3A\u5C11\uFF0C\u57FA\u7840\u6E10\u6E10\u4E0D\u7262\uFF0C\u6240\u5E78\u53CA\u65F6\u7EA0\u504F\uFF0C\u5F00\u53D1\u76F8\u5173\u9875\u9762\uFF0C\u6253\u5370\u4E88\u5B50\uFF0C\u6E10\u6E10\u6709\u6240\u597D\u8F6C\u3002",
                        zh_tw: "\u6578\u5B78\u751A\u70BA\u91CD\u8981\uFF0C\u5176\u7565\u6B21\u65BC\u6BCD\u8A9E\uFF0C\u7A76\u5176\u6E90\u8005\uFF0C\u7406\u6027\u601D\u7DAD\u4E4B\u6839\u3002<br/>\n\u6578\u5B78\u5B78\u7FD2\uFF0C\u5E38\u9700\u5169\u8005\u7D50\u5408\uFF1A\u4E00\u70BA\u601D\u7DAD\uFF0C\u4E8C\u70BA\u8A18\u61B6\u3002\u5EE3\u5B78\u4ED6\u4EBA\u4E4B\u9577\uFF0C\u975C\u601D\u6DF1\u5165\u5DF1\u5FC3\u3002<br/>\n\u5B78\u4E4B\u904E\u7A0B\uFF0C\u6B21\u7B2C\u660E\u986F\uFF0C\u6545\u9700\u968E\u6BB5\u95D6\u95DC\uFF0C\u624E\u5BE6\u65E5\u5F8C\u6839\u57FA\u3002\u521D\u6642\u8AA4\u89E3\u96D9\u51CF\uFF0C\u672C\u6B32\u7DF4\u7FD2\u6709\u7BC0\uFF0C\u6700\u7D42\u904E\u65BC\u7F3A\u5C11\uFF0C\u57FA\u790E\u6F38\u6F38\u4E0D\u7262\uFF0C\u6240\u5E78\u53CA\u6642\u7CFE\u504F\uFF0C\u958B\u767C\u76F8\u95DC\u9801\u9762\uFF0C\u5217\u5370\u4E88\u5B50\uFF0C\u6F38\u6F38\u6709\u6240\u597D\u8F49\u3002"
                    }
                },
                {
                    id: 3,
                    subKind: "03_english",
                    version: "20221220",
                    image: "00003.jpg",
                    title: {
                        en: "English Poker",
                        zh_cn: "\u82F1\u6587\u6251\u514B",
                        zh_tw: "\u82F1\u6587\u64B2\u514B"
                    },
                    summary: {
                        en: "English reading, the letter is the beginning, generate poker, so that the game can learn.<br/>\nTwo sizes are available for your choice. The ratio of height to width is 1.414. The smaller is suitable for A4, and the larger is suitable for A3.<br/>\nOr single, upper left and lower right, lower case or upper case; Or both, upper left and lower right lower case, upper right and lower left upper case.",
                        zh_cn: "\u82F1\u6587\u9605\u8BFB\uFF0C\u5B57\u6BCD\u4E3A\u59CB\uFF0C\u751F\u6210\u6251\u514B\uFF0C\u4EE5\u4FBF\u6E38\u620F\u5B66\u4E60\u3002<br/>\n\u4E24\u79CD\u5C3A\u5BF8\uFF0C\u4F9B\u541B\u9009\u62E9\uFF0C\u9AD8\u5BBD\u4E4B\u6BD4\uFF0C\u7686\u4E3A1.414\uFF0C\u5C0F\u8005\u9002\u4E8EA4\uFF0C\u5927\u8005\u9002\u4E8EA3\u3002<br/>\n\u6216\u4E3A\u5355\u4E00\uFF0C\u5DE6\u4E0A\u53F3\u4E0B\uFF0C\u5C0F\u5199\u6291\u6216\u5927\u5199\uFF1B\u6216\u517C\u4E8C\u8005\uFF0C\u5DE6\u4E0A\u53F3\u4E0B\u5C0F\u5199\uFF0C\u53F3\u4E0A\u5DE6\u4E0B\u5927\u5199\u3002",
                        zh_tw: "\u82F1\u6587\u95B1\u8B80\uFF0C\u5B57\u6BCD\u70BA\u59CB\uFF0C\u751F\u6210\u64B2\u514B\uFF0C\u4EE5\u4FBF\u904A\u6232\u5B78\u7FD2\u3002<br/>\n\u5169\u7A2E\u5C3A\u5BF8\uFF0C\u4F9B\u541B\u9078\u64C7\uFF0C\u9AD8\u5BEC\u4E4B\u6BD4\uFF0C\u7686\u70BA1.414\uFF0C\u5C0F\u8005\u9069\u65BCA4\uFF0C\u5927\u8005\u9069\u65BCA3\u3002<br/>\n\u6216\u70BA\u55AE\u4E00\uFF0C\u5DE6\u4E0A\u53F3\u4E0B\uFF0C\u5C0F\u5BEB\u6291\u6216\u5927\u5BEB\uFF1B\u6216\u517C\u4E8C\u8005\uFF0C\u5DE6\u4E0A\u53F3\u4E0B\u5C0F\u5BEB\uFF0C\u53F3\u4E0A\u5DE6\u4E0B\u5927\u5BEB\u3002"
                    }
                },
                {
                    id: 4,
                    subKind: "04_programming",
                    version: "20221220",
                    image: "00004.jpg",
                    title: {
                        en: "Poker boxes/boxes",
                        zh_cn: "\u6251\u514B\u76D2/\u76D2\u5B50",
                        zh_tw: "\u64B2\u514B\u76D2/\u76D2\u5B50"
                    },
                    summary: {
                        en: "The existing cards are easy to lose if they are scattered, so this page is developed for storage.<br/>\nThere can be a semicircle on the top of the box to facilitate box opening. If you want to separate the main roof, you should not add a semicircle.<br/>\nThe top and bottom covers can be on the same side or on the other side. It can be used without top or bottom. If it is used together, it will become an ordinary small box, and the box without top must be slightly smaller.<br/>\nRelevant length: one poker is wide, two is box height, three is poker height, and four is pasting area (only available on the same side).<br/>\nAdd words on the box to facilitate classification, and add the column of \"all aspects of content\".<br/>\nTo save paper, it can be rotated and moved up for combined printing. There are still some defects at present, which will be improved in the future.",
                        zh_cn: "\u65E2\u6709\u6251\u514B\uFF0C\u6563\u653E\u5219\u6613\u4E22\u5931\uFF0C\u6545\u800C\u5F00\u53D1\u672C\u9875\uFF0C\u4EE5\u4F9B\u5B58\u653E\u3002<br/>\n\u76D2\u9876\u53EF\u6709\u534A\u5706\uFF0C\u4EE5\u5229\u5F00\u76D2\u3002\u82E5\u6B32\u5206\u79BB\u4E3B\u9876\uFF0C\u5219\u4E0D\u5B9C\u52A0\u534A\u5706\u3002<br/>\n\u9876\u5E95\u4E24\u76D6\uFF0C\u53EF\u540C\u4FA7\u53EF\u5F02\u4FA7\u3002\u53EF\u65E0\u9876\u53EF\u65E0\u5E95\uFF0C\u914D\u5957\u4F7F\u7528\uFF0C\u5219\u6210\u666E\u901A\u5C0F\u76D2\uFF0C\u65E0\u9876\u8005\u987B\u7565\u5C0F\u3002<br/>\n\u76F8\u5173\u957F\u5EA6\uFF0C\u4E00\u6251\u514B\u5BBD\uFF0C\u4E8C\u4E3A\u76D2\u9AD8\uFF0C\u4E09\u6251\u514B\u9AD8\uFF0C\u56DB\u7C98\u8D34\u533A\uFF08\u540C\u4FA7\u624D\u6709\uFF09\u3002<br/>\n\u76D2\u4E0A\u52A0\u5B57\uFF0C\u53EF\u5229\u5F52\u7C7B\uFF0C\u589E\u201C\u5404\u9762\u5185\u5BB9\u201D\u5217\u3002<br/>\n\u8282\u7EA6\u7EB8\u6545\uFF0C\u53EF\u4EE5\u65CB\u8F6C\uFF0C\u53EF\u4EE5\u4E0A\u79FB\uFF0C\u4EE5\u4FBF\u5408\u5E76\u6253\u5370\u3002\u76EE\u524D\u5C1A\u6709\u7F3A\u9677\uFF0C\u4E14\u5F85\u4ECA\u540E\u5B8C\u5584\u3002",
                        zh_tw: "\u65E2\u6709\u64B2\u514B\uFF0C\u6563\u653E\u5247\u6613\u907A\u5931\uFF0C\u6545\u800C\u958B\u767C\u672C\u9801\uFF0C\u4EE5\u4F9B\u5B58\u653E\u3002<br/>\n\u76D2\u9802\u53EF\u6709\u534A\u5713\uFF0C\u4EE5\u5229\u958B\u76D2\u3002\u82E5\u6B32\u5206\u96E2\u4E3B\u9802\uFF0C\u5247\u4E0D\u5B9C\u52A0\u534A\u5713\u3002<br/>\n\u9802\u5E95\u5169\u84CB\uFF0C\u53EF\u540C\u5074\u53EF\u5F02\u5074\u3002\u53EF\u7121\u9802\u53EF\u7121\u5E95\uFF0C\u914D\u5957\u4F7F\u7528\uFF0C\u5247\u6210\u666E\u901A\u5C0F\u76D2\uFF0C\u7121\u9802\u8005\u9808\u7565\u5C0F\u3002<br/>\n\u76F8\u95DC\u9577\u5EA6\uFF0C\u4E00\u64B2\u514B\u5BEC\uFF0C\u4E8C\u70BA\u76D2\u9AD8\uFF0C\u4E09\u64B2\u514B\u9AD8\uFF0C\u56DB\u7C98\u8CBC\u5340\uFF08\u540C\u5074\u624D\u6709\uFF09\u3002<br/>\n\u76D2\u4E0A\u52A0\u5B57\uFF0C\u53EF\u5229\u6B78\u985E\uFF0C\u589E\u201C\u5404\u9762\u5167\u5BB9\u201D\u5217\u3002<br/>\n\u7BC0\u7D04\u7D19\u6545\uFF0C\u53EF\u4EE5\u65CB\u8F49\uFF0C\u53EF\u4EE5\u4E0A\u79FB\uFF0C\u4EE5\u4FBF\u5408\u4F75\u5217\u5370\u3002\u73FE\u6642\u5C1A\u6709\u7F3A\u9677\uFF0C\u4E14\u5F85\u4ECA\u5F8C\u5B8C\u5584\u3002"
                    }
                },
                {
                    id: 5,
                    subKind: "01_chinese",
                    version: "20221220",
                    image: "00005.jpg",
                    title: {
                        en: "Pinyin Poker",
                        zh_cn: "\u62FC\u97F3\u6251\u514B",
                        zh_tw: "\u62FC\u97F3\u64B2\u514B"
                    },
                    summary: {
                        en: "Teacher told my daughter, you need make cards to learn. Therefore, consult the materials and make Pinyin Poker.<br/>\nIt is divided into five categories: initial, final, overall recognition and tone, three syllables, simple final with tone.<br/>\nSome of them are turned into dice. See the <a href=\"?go=brick&id=9\">Dice Page</a> for details.",
                        zh_cn: "\u5E08\u8A00\u5236\u4F5C\u5361\u7247\uFF0C\u4EE5\u4F9B\u5B69\u5B50\u5B66\u4E60\u3002\u6545\u800C\u67E5\u9605\u8D44\u6599\uFF0C\u5236\u4F5C\u62FC\u97F3\u6251\u514B\u3002<br/>\n\u5206\u4E3A\u4E94\u7C7B\uFF1A\u58F0\u6BCD\u3001\u97F5\u6BCD\u3001\u6574\u4F53\u8BA4\u8BFB\u4E0E\u58F0\u8C03\u3001\u4E09\u62FC\u97F3\u8282\u3001\u5E26\u58F0\u8C03\u5355\u97F5\u6BCD\u3002<br/>\n\u90E8\u5206\u8F6C\u4E3A\u9AB0\u5B50\uFF0C\u8BE6\u89C1<a href=\"?go=brick&id=9\">\u9AB0\u5B50\u9875\u9762</a>\u3002",
                        zh_tw: "\u5E2B\u8A00\u88FD\u4F5C\u5361\u7247\uFF0C\u4EE5\u4F9B\u5B69\u5B50\u5B78\u7FD2\u3002\u6545\u800C\u67E5\u95B1\u8CC7\u6599\uFF0C\u88FD\u4F5C\u62FC\u97F3\u64B2\u514B\u3002<br/>\n\u5206\u70BA\u4E94\u985E\uFF1A\u8072\u6BCD\u3001\u97FB\u6BCD\u3001\u6574\u9AD4\u8A8D\u8B80\u8207\u8072\u8ABF\u3001\u4E09\u62FC\u97F3\u7BC0\u3001\u5E36\u8072\u8ABF\u55AE\u97FB\u6BCD\u3002<br/>\n\u90E8\u5206\u8F49\u70BA\u9AB0\u5B50\uFF0C\u8A73\u898B<ahref=\"?go=brick&id=9\">\u9AB0\u5B50\u9801\u9762</a>\u3002"
                    }
                },
                {
                    id: 6,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00006.jpg",
                    title: {
                        en: "Gustavo block",
                        zh_cn: "\u53E4\u6C0F\u79EF\u6728",
                        zh_tw: "\u53E4\u6C0F\u7A4D\u6728"
                    },
                    summary: {
                        en: "Gushi building blocks, originated in Belgium, are often used to teach mathematics. Make this page for the first time and print it on ten color paper to get ten building blocks. After improvement, the top and bottom can be removed to avoid the influence of thickness, and the number can also be stacked to facilitate reciting pithy formula.",
                        zh_cn: "\u53E4\u6C0F\u79EF\u6728\uFF0C\u8D77\u6E90\u4E8E\u6BD4\u5229\u65F6\uFF0C\u5E38\u7528\u4E8E\u6559\u6570\u5B66\u3002\u521D\u4F5C\u672C\u9875\uFF0C\u4EE5\u5341\u8272\u7EB8\u6253\u5370\uFF0C\u53EF\u5F97\u5341\u6570\u79EF\u6728\u3002\u540E\u4F5C\u6539\u8FDB\uFF0C\u53EF\u53BB\u9876\u5E95\uFF0C\u4EE5\u907F\u539A\u5EA6\u5F71\u54CD\uFF0C\u4EA6\u53EF\u53E0\u52A0\u8BA1\u6570\uFF0C\u4EE5\u5229\u80CC\u8BF5\u53E3\u8BC0\u3002",
                        zh_tw: "\u53E4\u6C0F\u7A4D\u6728\uFF0C\u8D77\u6E90\u65BC\u6BD4\u5229\u6642\uFF0C\u5E38\u7528\u65BC\u6559\u6578\u5B78\u3002\u521D\u4F5C\u672C\u9801\uFF0C\u4EE5\u5341\u8272\u7D19\u5217\u5370\uFF0C\u53EF\u5F97\u5341\u6578\u7A4D\u6728\u3002\u5F8C\u4F5C\u6539\u9032\uFF0C\u53EF\u53BB\u9802\u5E95\uFF0C\u4EE5\u907F\u539A\u5EA6\u5F71\u97FF\uFF0C\u4EA6\u53EF\u758A\u52A0\u8A08\u6578\uFF0C\u4EE5\u5229\u80CC\u8AA6\u53E3\u8A23\u3002"
                    }
                },
                {
                    id: 7,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00007.jpg",
                    title: {
                        en: "Mathematical Poker",
                        zh_cn: "\u6570\u5B66\u6251\u514B",
                        zh_tw: "\u6578\u5B78\u64B2\u514B"
                    },
                    summary: {
                        en: "Make mathematical poker for children to learn, which is divided into five categories: 1-5, 0-9, 0-20+- \u00D7 \u00F7\u30011-100.",
                        zh_cn: "\u5236\u4F5C\u6570\u5B66\u6251\u514B\uFF0C\u4EE5\u4FBF\u5B69\u5B50\u5B66\u4E60\uFF0C\u5206\u4E3A\u4E94\u7C7B\uFF1A1-9\u51D1\u5341\uFF08\u56DB\u8272\u6253\u5370\uFF0C\u4EE5\u4EFF\u6C11\u95F4\u6E38\u620F\u3002\u53EF\u4EE5\u6253\u5370\u63D0\u793A\uFF09\u30011-5\u30010-9\u30010-20+-\u00D7\u00F7\u30011-100\u3002",
                        zh_tw: "\u88FD\u4F5C\u6578\u5B78\u64B2\u514B\uFF0C\u4EE5\u4FBF\u5B69\u5B50\u5B78\u7FD2\uFF0C\u5206\u70BA\u4E94\u985E\uFF1A1-9\u51D1\u5341\uFF08\u56DB\u8272\u5217\u5370\uFF0C\u4EE5\u4EFF\u6C11\u9593\u904A\u6232\u3002\u53EF\u4EE5\u5217\u5370\u63D0\u793A\uFF09\u30011-5\u30010-9\u30010-20+-\u00D7\u00F7\u30011-100\u3002"
                    }
                },
                {
                    id: 8,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00008.jpg",
                    title: {
                        en: "Rummikub",
                        zh_cn: "\u62C9\u5BC6",
                        zh_tw: "\u62C9\u5BC6"
                    },
                    summary: {
                        en: "Rummikub, Israel, originated from Chinese mahjong, is used to learn mathematics.<br/>\nNo bracket can be generated, only poker can be generated, which is divided into four categories: diagonal (similar to ordinary poker), center (similar to Chinese mahjong), diagonal extended version, and center extended version. For the latter two, three kinds of changeable cards, namely, mirror image, double number and color change, are added.<br/>\nIt can be increased by 0. You can set your own rules and study together with your son to enjoy your family.",
                        zh_cn: "\u4EE5\u8272\u5217\u62C9\u5BC6\uFF0C\u6E90\u81EA\u4E2D\u56FD\u9EBB\u5C06\uFF0C\u7528\u4E8E\u5B66\u4E60\u6570\u5B66\u3002<br/>\n\u4E0D\u53EF\u751F\u6210\u652F\u67B6\uFF0C\u4EC5\u53EF\u751F\u6210\u6251\u514B\uFF0C\u5206\u4E3A\u56DB\u7C7B\uFF1A\u5BF9\u89D2\u7EBF\uFF08\u7C7B\u4F3C\u666E\u901A\u6251\u514B\uFF09\u3001\u4E2D\u5FC3\uFF08\u7C7B\u4F3C\u4E2D\u56FD\u9EBB\u5C06\uFF09\u3001\u5BF9\u89D2\u7EBF\u6269\u5C55\u7248\u3001\u4E2D\u5FC3\u6269\u5C55\u7248\u3002\u540E\u9762\u4E24\u8005\uFF0C\u589E\u52A0\u955C\u50CF\u3001\u53CC\u6570\u3001\u53D8\u8272\u4E09\u79CD\u767E\u53D8\u724C\u3002<br/>\n\u53EF\u589E\u52A00\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u89C4\u5219\uFF0C\u4E0E\u5B50\u5171\u7814\uFF0C\u800C\u957F\u5929\u4F26\u4E4B\u4E50\u3002",
                        zh_tw: "\u4EE5\u8272\u5217\u62C9\u5BC6\uFF0C\u6E90\u81EA\u4E2D\u570B\u9EBB\u5C07\uFF0C\u7528\u65BC\u5B78\u7FD2\u6578\u5B78\u3002<br/>\n\u4E0D\u53EF\u751F\u6210\u652F\u67B6\uFF0C\u50C5\u53EF\u751F\u6210\u64B2\u514B\uFF0C\u5206\u70BA\u56DB\u985E\uFF1A\u5C0D\u89D2\u7DDA\uFF08\u985E\u4F3C\u666E\u901A\u64B2\u514B\uFF09\u3001\u4E2D\u5FC3\uFF08\u985E\u4F3C\u4E2D\u570B\u9EBB\u5C07\uFF09\u3001\u5C0D\u89D2\u7DDA\u64F4\u5C55\u7248\u3001\u4E2D\u5FC3\u64F4\u5C55\u7248\u3002\u5F8C\u9762\u5169\u8005\uFF0C\u65B0\u589E\u93E1\u50CF\u3001\u96D9\u6578\u3001\u8B8A\u8272\u4E09\u7A2E\u767E\u8B8A\u724C\u3002<br/>\n\u53EF\u65B0\u589E0\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u898F\u5247\uFF0C\u8207\u5B50\u5171\u7814\uFF0C\u800C\u9577\u5929\u502B\u4E4B\u6A02\u3002"
                    }
                },
                {
                    id: 9,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00009.jpg",
                    title: {
                        en: "Dices",
                        zh_cn: "\u9AB0\u5B50",
                        zh_tw: "\u9AB0\u5B50"
                    },
                    summary: {
                        en: "Random algorithm, dice first. Plato's regular polyhedron is especially suitable for four, six, eight, twelve, and twenty sided dice.<br/>\nThe online shop bought ten and twenty dice, and then obtained Archimedes' polyhedron pictures, adding twenty-four dice.",
                        zh_cn: "\u968F\u673A\u7B97\u6CD5\uFF0C\u9AB0\u5B50\u5148\u884C\u3002\u67CF\u62C9\u56FE\u6B63\u591A\u9762\u4F53\uFF0C\u5C24\u5176\u9002\u5408\uFF0C\u6545\u5F97\u56DB\u9762\u3001\u516D\u9762\u3001\u516B\u9762\u3001\u5341\u4E8C\u9762\u3001\u4E8C\u5341\u9762\u9AB0\u5B50\u3002<br/>\n\u7F51\u5E97\u8D2D\u5F97\u5341\u9762\u3001\u4E8C\u5341\u9762\u9AB0\u5B50\uFF0C\u540E\u5F97\u963F\u57FA\u7C73\u5FB7\u591A\u9762\u4F53\u56FE\u7247\uFF0C\u589E\u52A0\u4E8C\u5341\u56DB\u9762\u9AB0\u5B50\u3002",
                        zh_tw: "\u96A8\u6A5F\u7B97\u704B\uFF0C\u9AB0\u5B50\u5148\u884C\u3002\u67CF\u62C9\u5716\u6B63\u591A\u9762\u9AD4\uFF0C\u5C24\u5176\u9069\u5408\uFF0C\u6545\u5F97\u56DB\u9762\u3001\u516D\u9762\u3001\u516B\u9762\u3001\u5341\u4E8C\u9762\u3001\u4E8C\u5341\u9762\u9AB0\u5B50\u3002<br/>\n\u7DB2\u5E97\u8CFC\u5F97\u5341\u9762\u3001\u4E8C\u5341\u9762\u9AB0\u5B50\uFF0C\u5F8C\u5F97\u963F\u57FA\u7C73\u5FB7\u591A\u9762\u9AD4\u5716\u7247\uFF0C\u65B0\u589E\u4E8C\u5341\u56DB\u9762\u9AB0\u5B50\u3002"
                    }
                },
                {
                    id: 10,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00010.jpg",
                    title: {
                        en: "Hundred grids",
                        zh_cn: "\u767E\u6570\u683C",
                        zh_tw: "\u767E\u6578\u683C"
                    },
                    summary: {
                        en: "Read \"This is Math\" and know hundreds of figures.<br/>\nThe development of this page, a total of four kinds: countless word grid, can play \"hundred grid game\"; 0, the diagonal line can solve the problem of \"one to nine beads, one to two places\"; 1. The beginning of a book is the beginning of a book; If it is repeated, the wonderful meaning of \"one but ten, ten but one hundred, and one hundred but one thousand\" in the Three Character Classic can be explained.",
                        zh_cn: "\u8BFB\u300A\u8FD9\u624D\u662F\u6570\u5B66\u300B\uFF0C\u77E5\u767E\u6570\u683C\u3002<br/>\n\u5F00\u53D1\u6B64\u9875\uFF0C\u5171\u5F97\u56DB\u79CD\uFF1A\u65E0\u6570\u5B57\u683C\uFF0C\u53EF\u73A9\u201C\u767E\u683C\u6E38\u620F\u201D\uFF1B0\u59CB\u4E4B\u683C\uFF0C\u659C\u7EBF\u53EF\u89E3\u201C\u4E00\u81F3\u4E5D\u73E0\uFF0C\u6446\u653E\u4E00\u81F3\u4E8C\u4F4D\u201D\u4E4B\u9898\uFF1B1\u59CB\u4E4B\u683C\uFF0C\u53EF\u5F97\u6559\u6750\u4E4B\u683C\uFF1B\u82E5\u590D\u53E0\u52A0\uFF0C\u53EF\u91CA\u300A\u4E09\u5B57\u7ECF\u300B\u4E4B\u201C\u4E00\u800C\u5341\uFF0C\u5341\u800C\u767E\uFF0C\u767E\u800C\u5343\u201D\u4E4B\u5999\u4E49\u3002",
                        zh_tw: "\u8B80\u300A\u9019\u624D\u662F\u6578\u5B78\u300B\uFF0C\u77E5\u767E\u6578\u683C\u3002<br/>\n\u958B\u767C\u6B64\u9801\uFF0C\u5171\u5F97\u56DB\u7A2E\uFF1A\u7121\u6578\u5B57\u683C\uFF0C\u53EF\u73A9\u201C\u767E\u683C\u904A\u6232\u201D\uFF1B0\u59CB\u4E4B\u683C\uFF0C\u659C\u7DDA\u53EF\u89E3\u201C\u4E00\u81F3\u4E5D\u73E0\uFF0C\u64FA\u653E\u4E00\u81F3\u4E8C\u6BD4\u7279\u201D\u4E4B\u984C\uFF1B1\u59CB\u4E4B\u683C\uFF0C\u53EF\u5F97\u6559\u6750\u4E4B\u683C\uFF1B\u82E5\u8907\u758A\u52A0\uFF0C\u53EF\u91CB\u300A\u4E09\u5B57\u7D93\u300B\u4E4B\u201C\u4E00\u800C\u5341\uFF0C\u5341\u800C\u767E\uFF0C\u767E\u800C\u5343\u201D\u4E4B\u5999\u7FA9\u3002"
                    }
                },
                {
                    id: 11,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00011.jpg",
                    title: {
                        en: "Football",
                        zh_cn: "\u8DB3\u7403",
                        zh_tw: "\u8DB3\u7403"
                    },
                    summary: {
                        en: "Sticking football is fun for all of you. There are two methods for online learning: overall hollowing out and pasting on five sides and six sides. Therefore, this page is developed for children to use.<br/>\nAfter thinking about football again, due to its complexity and failure, Jin Bo said: \"This is a truncated Archimedes polyhedron\". Looking at the pictures in the previous collection, it was suddenly clear, so the item of \"overall\" was added - there is redundancy in the pasting area. I hope you will forgive me.",
                        zh_cn: "\u7C98\u8D34\u8DB3\u7403\uFF0C\u8BF8\u541B\u4E4B\u4E50\u3002\u7F51\u7EDC\u5B66\u4E60\uFF0C\u800C\u77E5\u4E8C\u6CD5\uFF1A\u6574\u4F53\u9542\u7A7A\u3001\u4E94\u8FB9\u516D\u8FB9\u7C98\u8D34\uFF0C\u6545\u800C\u5F00\u53D1\u6B64\u9875\uFF0C\u4EE5\u4F9B\u5B69\u7AE5\u4F7F\u7528\u3002<br/>\n\u518D\u601D\u5C55\u5F00\u8DB3\u7403\uFF0C\u56E0\u5176\u590D\u6742\uFF0C\u672A\u80FD\u6210\u529F\uFF0C\u540E\u89C1\u9773\u535A\u6240\u8A00\uFF1A\u201C\u6B64\u4E43\u622A\u89D2\u963F\u57FA\u7C73\u5FB7\u591A\u9762\u4F53\u201D\uFF0C\u67E5\u9605\u4E4B\u524D\u6240\u96C6\u56FE\u7247\uFF0C\u8C41\u7136\u5F00\u6717\uFF0C\u6545\u589E\u201C\u6574\u4F53\u201D\u4E4B\u9879\u2014\u2014\u7C98\u8D34\u533A\u6709\u5197\u4F59\uFF0C\u8FD8\u671B\u89C1\u8C05\u3002",
                        zh_tw: "\u7C98\u8CBC\u8DB3\u7403\uFF0C\u8AF8\u541B\u4E4B\u6A02\u3002\u7DB2\u7D61\u5B78\u7FD2\uFF0C\u800C\u77E5\u4E8C\u6CD5\uFF1A\u6574\u9AD4\u93E4\u7A7A\u3001\u4E94\u908A\u516D\u908A\u7C98\u8CBC\uFF0C\u6545\u800C\u958B\u767C\u6B64\u9801\uFF0C\u4EE5\u4F9B\u5B69\u7AE5\u4F7F\u7528\u3002<br/>\n\u518D\u601D\u5C55\u958B\u8DB3\u7403\uFF0C\u56E0\u5176\u8907\u96DC\uFF0C\u672A\u80FD\u6210\u529F\uFF0C\u5F8C\u898B\u9773\u535A\u6240\u8A00\uFF1A\u201C\u6B64\u4E43\u622A\u89D2\u963F\u57FA\u7C73\u5FB7\u591A\u9762\u9AD4\u201D\uFF0C\u67E5\u95B1\u4E4B\u524D\u6240\u96C6\u5716\u7247\uFF0C\u8C41\u7136\u958B\u6717\uFF0C\u6545\u589E\u201C\u6574\u9AD4\u201D\u4E4B\u9805\u2014\u2014\u7C98\u8CBC\u5340\u6709\u5197\u9918\uFF0C\u9084\u671B\u898B\u8AD2\u3002"
                    }
                },
                {
                    id: 12,
                    subKind: "02_math",
                    version: "20221220",
                    image: "00012.jpg",
                    title: {
                        en: "Multiplication table",
                        zh_cn: "\u4E58\u6CD5\u53E3\u8BC0\u8868",
                        zh_tw: "\u4E58\u6CD5\u53E3\u8A23\u8868"
                    },
                    summary: {
                        en: "Chinese style 99, 99, 80 together, one as one stop, since ancient times, recited: small 99, 45; In the ninth year, there are 81 items. This page is developed because it can be changed into a card and used for games.<br/>\nThere is also Western style, multiplying to twelve; There is another print, multiply to nineteen.<br/>\nAnd because of the hundred grid game (\"hundred grid\" page, no digital version, two rows and two columns playing at the same time, you can get 20 \u00D7 20 grid), plus horizontal grid and vertical grid, which is convenient for printing, to help the game.",
                        zh_cn: "\u4E2D\u5F0F\u4E5D\u4E5D\uFF0C\u4E5D\u4E5D\u516B\u5341\u4E00\u8D77\uFF0C\u4E00\u4E00\u5982\u4E00\u6B62\uFF0C\u81EA\u53E4\u8BF5\u4E4B\uFF1A\u5C0F\u4E5D\u4E5D\u8005\uFF0C\u56DB\u5341\u4E94\u9879\uFF1B\u5927\u4E5D\u4E5D\u8005\uFF0C\u516B\u5341\u4E00\u9879\u3002\u7591\u53EF\u6539\u4E3A\u5361\u7247\uFF0C\u800C\u4E3A\u6E38\u620F\u4E4B\u7528\uFF0C\u6545\u800C\u5F00\u53D1\u672C\u9875\u3002<br/>\n\u53C8\u6709\u897F\u5F0F\uFF0C\u4E58\u81F3\u5341\u4E8C\uFF1B\u518D\u6709\u5370\u5F0F\uFF0C\u4E58\u81F3\u5341\u4E5D\u3002<br/>\n\u53C8\u56E0\u767E\u683C\u6E38\u620F\uFF08\u201C\u767E\u6570\u683C\u201D\u9875\uFF0C\u65E0\u6570\u5B57\u7248\uFF0C\u4E24\u6392\u4E24\u5217\u5E76\u6253\uFF0C\u5219\u53EF\u5F9720\u00D720\u4E4B\u683C\uFF09\uFF0C\u590D\u52A0\u6A2A\u683C\u7AD6\u683C\uFF0C\u4FBF\u4E8E\u6253\u5370\uFF0C\u4EE5\u52A9\u6E38\u620F\u3002",
                        zh_tw: "\u4E2D\u5F0F\u4E5D\u4E5D\uFF0C\u4E5D\u4E5D\u516B\u5341\u4E00\u8D77\uFF0C\u4E00\u4E00\u5982\u4E00\u6B62\uFF0C\u81EA\u53E4\u8AA6\u4E4B\uFF1A\u5C0F\u4E5D\u4E5D\u8005\uFF0C\u56DB\u5341\u4E94\u9805\uFF1B\u5927\u4E5D\u4E5D\u8005\uFF0C\u516B\u5341\u4E00\u9805\u3002\u7591\u53EF\u6539\u70BA\u5361\u7247\uFF0C\u800C\u70BA\u904A\u6232\u4E4B\u7528\uFF0C\u6545\u800C\u958B\u767C\u672C\u9801\u3002<br/>\n\u53C8\u6709\u897F\u5F0F\uFF0C\u4E58\u81F3\u5341\u4E8C\uFF1B\u518D\u6709\u5370\u5F0F\uFF0C\u4E58\u81F3\u5341\u4E5D\u3002<br/>\n\u53C8\u56E0\u767E\u683C\u904A\u6232\uFF08\u201C\u767E\u6578\u683C\u201D\u9801\uFF0C\u7121\u6578\u4F4D\u7248\uFF0C\u5169\u6392\u5169\u5217\u4E26\u6253\uFF0C\u5247\u53EF\u5F9720\u00D720\u4E4B\u683C\uFF09\uFF0C\u8907\u52A0\u6A6B\u683C\u8C4E\u683C\uFF0C\u4FBF\u65BC\u5217\u5370\uFF0C\u4EE5\u52A9\u904A\u6232\u3002"
                    }
                },
            ]);
            exports_1("stories", stories = [
                {
                    id: 1,
                    date: new Date(2014, 0, 1, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "Sonya was born",
                        zh_cn: "sonya\u51FA\u751F",
                        zh_tw: "sonya\u51FA\u751F"
                    },
                    summary: {
                        en: "In 2014, sonya was born.<br/>\nAs new parents, we looked at this little angel. We were very excited and nervous. Her birth has opened a new life course of \"love is a common growth\" for us.",
                        zh_cn: "2014\u5E74\uFF0Csonya\u51FA\u751F\u4E86\u3002<br/>\n\u521D\u4E3A\u4EBA\u7236\u4EBA\u6BCD\u7684\u6211\u4EEC\uFF0C\u770B\u7740\u8FD9\u5982\u540C\u5929\u4F7F\u7684\u5C0F\u5973\u5B69\uFF0C\u6211\u4EEC\u975E\u5E38\u5174\u594B\uFF0C\u4E5F\u6709\u4E9B\u7D27\u5F20\u3002\u5979\u7684\u51FA\u751F\uFF0C\u5F00\u542F\u4E86\u6211\u4EEC\u201C\u7231\u662F\u4E00\u6B21\u5171\u540C\u7684\u6210\u957F\u201D\u7684\u65B0\u7684\u4EBA\u751F\u5386\u7A0B\u3002",
                        zh_tw: "2014\u5E74\uFF0Csonya\u51FA\u751F\u4E86\u3002<br/>\n\u521D\u70BA\u4EBA\u7236\u4EBA\u6BCD\u7684\u6211\u5011\uFF0C\u770B\u8457\u9019\u500B\u5C0F\u5929\u4F7F\uFF0C\u6211\u5011\u975E\u5E38\u8208\u596E\uFF0C\u4E5F\u6709\u4E9B\u7DCA\u5F35\u3002 \u5979\u7684\u51FA\u751F\uFF0C\u958B\u555F\u4E86\u6211\u5011\u201C\u611B\u662F\u4E00\u6B21\u5171\u540C\u7684\u6210\u9577\u201D\u7684\u65B0\u7684\u4EBA\u751F\u6B77\u7A0B\u3002"
                    },
                    html: {
                        en: "<h1>Sonya was born</h1>In 2014, sonya was born.<br/>\nAs new parents, we looked at this little angel. We were very excited and nervous. Her birth has opened a new life course of \"love is a common growth\" for us.",
                        zh_cn: "<h1>sonya\u51FA\u751F</h1>2014\u5E74\uFF0Csonya\u51FA\u751F\u4E86\u3002<br/>\n\u521D\u4E3A\u4EBA\u7236\u4EBA\u6BCD\u7684\u6211\u4EEC\uFF0C\u770B\u7740\u8FD9\u5982\u540C\u5929\u4F7F\u7684\u5C0F\u5973\u5B69\uFF0C\u6211\u4EEC\u975E\u5E38\u5174\u594B\uFF0C\u4E5F\u6709\u4E9B\u7D27\u5F20\u3002\u5979\u7684\u51FA\u751F\uFF0C\u5F00\u542F\u4E86\u6211\u4EEC\u201C\u7231\u662F\u4E00\u6B21\u5171\u540C\u7684\u6210\u957F\u201D\u7684\u65B0\u7684\u4EBA\u751F\u5386\u7A0B\u3002",
                        zh_tw: "<h1>sonya\u51FA\u751F</h1>2014\u5E74\uFF0Csonya\u51FA\u751F\u4E86\u3002<br/>\n\u521D\u70BA\u4EBA\u7236\u4EBA\u6BCD\u7684\u6211\u5011\uFF0C\u770B\u8457\u9019\u500B\u5C0F\u5929\u4F7F\uFF0C\u6211\u5011\u975E\u5E38\u8208\u596E\uFF0C\u4E5F\u6709\u4E9B\u7DCA\u5F35\u3002 \u5979\u7684\u51FA\u751F\uFF0C\u958B\u555F\u4E86\u6211\u5011\u201C\u611B\u662F\u4E00\u6B21\u5171\u540C\u7684\u6210\u9577\u201D\u7684\u65B0\u7684\u4EBA\u751F\u6B77\u7A0B\u3002"
                    }
                },
                {
                    id: 2,
                    date: new Date(2017, 0, 1, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "Start to collect various resources",
                        zh_cn: "\u5F00\u59CB\u6536\u96C6\u5404\u7C7B\u8D44\u6E90",
                        zh_tw: "\u958B\u59CB\u6536\u96C6\u5404\u985E\u8CC7\u6E90"
                    },
                    summary: {
                        en: "In 2017, we started to make stickers required by sonya through Office<br/>\nAfter that, we bought <a href=\"https://mathforlove.com/\">mathforlove</a> company's \"Tiny Polka Dot\" and \"Prime Climb\", and purchased ten sided dice and other special-shaped dice, and then generated relevant dice through the web page and other ways to share them with some WeChat groups.",
                        zh_cn: "2017\u5E74\uFF0C\u5F00\u59CB\u901A\u8FC7Office\u5236\u4F5Csonya\u9700\u8981\u7684\u8D34\u8D34\u7EB8\u7B49\u3002<br/>\n\u4E4B\u540E\uFF0C\u6211\u4EEC\u8D2D\u4E70\u4E86<a href=\"https://mathforlove.com/\">mathforlove</a>\u516C\u53F8\u7684\u201CTiny Polka Dot\u201D\u548C\u201CPrime Climb\u201D\uFF0C\u5E76\u4E14\u8D2D\u4E70\u4E86\u5341\u9762\u9AB0\u5B50\u7B49\u5F02\u5F62\u9AB0\u5B50\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u9875\u7B49\u65B9\u5F0F\uFF0C\u751F\u6210\u4E86\u76F8\u5173\u7684\u9AB0\u5B50\uFF0C\u5206\u4EAB\u7ED9\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u91CC\u9762\u3002",
                        zh_tw: "2017\u5E74\uFF0C\u958B\u59CB\u901A\u904EOffice\u88FD\u4F5Csonya\u9700\u8981\u7684\u8CBC\u8CBC\u7D19\u7B49\u3002<br/>\n\u4E4B\u5F8C\uFF0C\u6211\u5011\u8CFC\u8CB7\u4E86<a href=\"https://mathforlove.com/\">mathforlove</a>\u516C\u53F8\u7684\u201CTiny Polka Dot\u201D\u548C\u201CPrime Climb\u201D\uFF0C\u4E26\u4E14\u8CFC\u8CB7\u4E86\u5341\u9762\u9AB0\u5B50\u7B49\u5F02\u5F62\u9AB0\u5B50\uFF0C\u7136\u5F8C\u901A\u904E\u7DB2\u9801\u7B49\u7BA1\u9053\uFF0C\u751F\u6210\u4E86\u76F8\u95DC\u7684\u9AB0\u5B50\uFF0C\u5206\u4EAB\u7D66\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u88E1\u9762\u3002"
                    },
                    html: {
                        en: "<h1>Start to collect various resources</h1>In 2017, we started to make stickers required by sonya through Office<br/>\nAfter that, we bought <a href=\"https://mathforlove.com/\">mathforlove</a> company's \"Tiny Polka Dot\" and \"Prime Climb\", and purchased ten sided dice and other special-shaped dice, and then generated relevant dice through the web page and other ways to share them with some WeChat groups.",
                        zh_cn: "<h1>\u5F00\u59CB\u6536\u96C6\u5404\u7C7B\u8D44\u6E90</h1>2017\u5E74\uFF0C\u5F00\u59CB\u901A\u8FC7Office\u5236\u4F5Csonya\u9700\u8981\u7684\u8D34\u8D34\u7EB8\u7B49\u3002<br/>\n\u4E4B\u540E\uFF0C\u6211\u4EEC\u8D2D\u4E70\u4E86<a href=\"https://mathforlove.com/\">mathforlove</a>\u516C\u53F8\u7684\u201CTiny Polka Dot\u201D\u548C\u201CPrime Climb\u201D\uFF0C\u5E76\u4E14\u8D2D\u4E70\u4E86\u5341\u9762\u9AB0\u5B50\u7B49\u5F02\u5F62\u9AB0\u5B50\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u9875\u7B49\u65B9\u5F0F\uFF0C\u751F\u6210\u4E86\u76F8\u5173\u7684\u9AB0\u5B50\uFF0C\u5206\u4EAB\u7ED9\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u91CC\u9762\u3002",
                        zh_tw: "<h1>\u958B\u59CB\u6536\u96C6\u5404\u985E\u8CC7\u6E90</h1>2017\u5E74\uFF0C\u958B\u59CB\u901A\u904EOffice\u88FD\u4F5Csonya\u9700\u8981\u7684\u8CBC\u8CBC\u7D19\u7B49\u3002<br/>\n\u4E4B\u5F8C\uFF0C\u6211\u5011\u8CFC\u8CB7\u4E86<a href=\"https://mathforlove.com/\">mathforlove</a>\u516C\u53F8\u7684\u201CTiny Polka Dot\u201D\u548C\u201CPrime Climb\u201D\uFF0C\u4E26\u4E14\u8CFC\u8CB7\u4E86\u5341\u9762\u9AB0\u5B50\u7B49\u5F02\u5F62\u9AB0\u5B50\uFF0C\u7136\u5F8C\u901A\u904E\u7DB2\u9801\u7B49\u7BA1\u9053\uFF0C\u751F\u6210\u4E86\u76F8\u95DC\u7684\u9AB0\u5B50\uFF0C\u5206\u4EAB\u7D66\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u88E1\u9762\u3002"
                    }
                },
                {
                    id: 3,
                    date: new Date(2020, 11, 31, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "Successfully registered the sonya.cc domain name",
                        zh_cn: "sonya.cc\u57DF\u540D\u6CE8\u518C\u6210\u529F",
                        zh_tw: "sonya.cc\u57DF\u540D\u8A3B\u518A\u6210\u529F"
                    },
                    summary: {
                        en: "In 2020, it was accidentally found that the sonya.cc domain name had not been registered, and the cc domain name registration had been restored in Chinese Mainland. So we immediately registered the domain name and took it as a special adult gift we gave her<br/>\nBefore she reaches adulthood, we will make learning gadgets related to her through edu.sonya.cc, collect relevant public free resources, and share them with children as lovely as her.",
                        zh_cn: "2020\u5E74\uFF0C\u5076\u7136\u53D1\u73B0sonya.cc\u57DF\u540D\u5C1A\u672A\u6CE8\u518C\uFF0C\u4E14\u4E2D\u56FD\u5927\u9646\u5DF2\u6062\u590Dcc\u57DF\u540D\u7684\u5907\u6848\u3002\u4E8E\u662F\u6211\u4EEC\u7ACB\u5373\u6CE8\u518C\u4E86\u8FD9\u4E2A\u57DF\u540D\uFF0C\u5E76\u5C06\u5B83\u4F5C\u4E3A\u6211\u4EEC\u9001\u7ED9\u5979\u7684\u4E00\u4EFD\u7279\u522B\u7684\u6210\u5E74\u793C\u7269\u3002<br/>\n\u5728\u5979\u6210\u5E74\u4E4B\u524D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7edu.sonya.cc\u5236\u4F5C\u4E0E\u5979\u76F8\u5173\u7684\u5B66\u4E60\u5C0F\u5DE5\u5177\uFF0C\u6536\u96C6\u76F8\u5173\u7684\u516C\u5F00\u7684\u514D\u8D39\u8D44\u6E90\u7B49\uFF0C\u5E76\u4E14\u5206\u4EAB\u7ED9\u548C\u5979\u4E00\u6837\u53EF\u7231\u7684\u5B69\u5B50\u4EEC\u3002",
                        zh_tw: "2020\u5E74\uFF0C\u5076\u7136\u767C\u73FEsonya.cc\u529F\u80FD\u8B8A\u6578\u540D\u7A31\u5C1A\u672A\u6CE8\u518C\uFF0C\u4E14\u4E2D\u570B\u5927\u9678\u5DF2\u6062\u5FA9cc\u529F\u80FD\u8B8A\u6578\u540D\u7A31\u7684\u5099\u6848\u3002 \u65BC\u662F\u6211\u5011\u7ACB\u5373\u6CE8\u518C\u4E86\u9019\u500B\u529F\u80FD\u8B8A\u6578\u540D\u7A31\uFF0C\u4E26\u5C07\u5B83\u4F5C\u70BA\u6211\u5011\u9001\u7D66\u5979\u7684\u4E00\u4EFD\u7279\u5225\u7684\u6210\u5E74\u79AE\u7269\u3002<br/>\n\u5728\u5979\u6210\u5E74\u4E4B\u524D\uFF0C\u6211\u5011\u6703\u901A\u904Eedu.sonya.cc\u88FD\u4F5C\u8207\u5979\u76F8\u95DC\u7684\u5B78\u7FD2\u5C0F\u5DE5\u5177\uFF0C\u6536\u96C6\u76F8\u95DC\u7684\u516C\u958B\u7684\u514D\u8CBB\u8CC7\u6E90\u7B49\uFF0C\u4E26\u4E14\u5206\u4EAB\u7D66\u548C\u5979\u4E00\u6A23\u53EF\u611B\u7684\u5B69\u5B50\u5011\u3002"
                    },
                    html: {
                        en: "<h1>Successfully registered the sonya.cc domain name</h1>In 2020, it was accidentally found that the sonya.cc domain name had not been registered, and the cc domain name registration had been restored in Chinese Mainland. So we immediately registered the domain name and took it as a special adult gift we gave her<br/>\nBefore she reaches adulthood, we will make learning gadgets related to her through edu.sonya.cc, collect relevant public free resources, and share them with children as lovely as her.",
                        zh_cn: "<h1>sonya.cc\u57DF\u540D\u6CE8\u518C\u6210\u529F</h1>2020\u5E74\uFF0C\u5076\u7136\u53D1\u73B0sonya.cc\u57DF\u540D\u5C1A\u672A\u6CE8\u518C\uFF0C\u4E14\u4E2D\u56FD\u5927\u9646\u5DF2\u6062\u590Dcc\u57DF\u540D\u7684\u5907\u6848\u3002\u4E8E\u662F\u6211\u4EEC\u7ACB\u5373\u6CE8\u518C\u4E86\u8FD9\u4E2A\u57DF\u540D\uFF0C\u5E76\u5C06\u5B83\u4F5C\u4E3A\u6211\u4EEC\u9001\u7ED9\u5979\u7684\u4E00\u4EFD\u7279\u522B\u7684\u6210\u5E74\u793C\u7269\u3002<br/>\n\u5728\u5979\u6210\u5E74\u4E4B\u524D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7edu.sonya.cc\u5236\u4F5C\u4E0E\u5979\u76F8\u5173\u7684\u5B66\u4E60\u5C0F\u5DE5\u5177\uFF0C\u6536\u96C6\u76F8\u5173\u7684\u516C\u5F00\u7684\u514D\u8D39\u8D44\u6E90\u7B49\uFF0C\u5E76\u4E14\u5206\u4EAB\u7ED9\u548C\u5979\u4E00\u6837\u53EF\u7231\u7684\u5B69\u5B50\u4EEC\u3002",
                        zh_tw: "<h1>sonya.cc\u57DF\u540D\u8A3B\u518A\u6210\u529F</h1>2020\u5E74\uFF0C\u5076\u7136\u767C\u73FEsonya.cc\u529F\u80FD\u8B8A\u6578\u540D\u7A31\u5C1A\u672A\u6CE8\u518C\uFF0C\u4E14\u4E2D\u570B\u5927\u9678\u5DF2\u6062\u5FA9cc\u529F\u80FD\u8B8A\u6578\u540D\u7A31\u7684\u5099\u6848\u3002 \u65BC\u662F\u6211\u5011\u7ACB\u5373\u6CE8\u518C\u4E86\u9019\u500B\u529F\u80FD\u8B8A\u6578\u540D\u7A31\uFF0C\u4E26\u5C07\u5B83\u4F5C\u70BA\u6211\u5011\u9001\u7D66\u5979\u7684\u4E00\u4EFD\u7279\u5225\u7684\u6210\u5E74\u79AE\u7269\u3002<br/>\n\u5728\u5979\u6210\u5E74\u4E4B\u524D\uFF0C\u6211\u5011\u6703\u901A\u904Eedu.sonya.cc\u88FD\u4F5C\u8207\u5979\u76F8\u95DC\u7684\u5B78\u7FD2\u5C0F\u5DE5\u5177\uFF0C\u6536\u96C6\u76F8\u95DC\u7684\u516C\u958B\u7684\u514D\u8CBB\u8CC7\u6E90\u7B49\uFF0C\u4E26\u4E14\u5206\u4EAB\u7D66\u548C\u5979\u4E00\u6A23\u53EF\u611B\u7684\u5B69\u5B50\u5011\u3002"
                    }
                },
                {
                    id: 4,
                    date: new Date(2022, 2, 2, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "First edition website sharing",
                        zh_cn: "\u521D\u7248\u7F51\u7AD9\u5206\u4EAB",
                        zh_tw: "\u521D\u7248\u7DB2\u7AD9\u5206\u4EAB"
                    },
                    summary: {
                        en: "On March 2, 2022, we started to put some web pages scattered in the hard disk directly into www.sonya.cc, forming a first version of the website that can be shared<br/>\nHowever, the usability and interface aesthetics of this version of the website are not considered, and it is basically only available to IT professionals. Therefore, the results generated during this period are mainly shared through some WeChat groups.",
                        zh_cn: "2022\u5E743\u67082\u65E5\uFF0C\u6211\u4EEC\u5F00\u59CB\u5C06\u96F6\u6563\u4E8E\u786C\u76D8\u4E2D\u7684\u90E8\u5206\u7F51\u9875\uFF0C\u76F4\u63A5\u653E\u5230www.sonya.cc\u7F51\u7AD9\u4E2D\uFF0C\u5F62\u6210\u4E86\u521D\u7248\u53EF\u5206\u4EAB\u7684\u7F51\u7AD9\u3002<br/>\n\u4F46\u662F\uFF0C\u8FD9\u4E00\u7248\u7F51\u7AD9\u672A\u8003\u8651\u53EF\u4F7F\u7528\u6027\u53CA\u754C\u9762\u7F8E\u89C2\u5EA6\u7B49\uFF0C\u57FA\u672C\u4E0A\u53EA\u6709IT\u4E1A\u5185\u4EBA\u58EB\u624D\u80FD\u4F7F\u7528\uFF0C\u6240\u4EE5\u8FD9\u6BB5\u65F6\u95F4\u4E3B\u8981\u901A\u8FC7\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u5206\u4EAB\u6240\u751F\u6210\u7684\u7ED3\u679C\u3002",
                        zh_tw: "2022\u5E743\u67082\u65E5\uFF0C\u6211\u5011\u958B\u59CB\u5C07\u96F6\u6563\u65BC\u786C\u789F\u4E2D\u7684\u90E8\u5206\u7DB2\u9801\uFF0C\u76F4\u63A5\u653E\u5230www.sonya.cc\u7DB2\u7AD9\u4E2D\uFF0C\u5F62\u6210\u4E86\u521D\u7248\u53EF\u5206\u4EAB\u7684\u7DB2\u7AD9\u3002<br/>\n\u4F46\u662F\uFF0C\u9019\u4E00\u7248\u7DB2\u7AD9\u672A\u8003\u616E\u53EF\u4F7F\u7528\u6027\u53CA\u4ECB\u9762\u7F8E\u89C0\u5EA6\u7B49\uFF0C\u57FA\u672C\u4E0A\u53EA\u6709IT\u696D\u5167\u4EBA\u58EB\u624D\u80FD\u4F7F\u7528\uFF0C\u6240\u4EE5\u9019\u6BB5\u6642\u9593\u4E3B\u8981\u901A\u904E\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u5206\u4EAB\u6240\u751F\u6210\u7684\u7D50\u679C\u3002"
                    },
                    html: {
                        en: "<h1>First edition website sharing</h1>On March 2, 2022, we started to put some web pages scattered in the hard disk directly into www.sonya.cc, forming a first version of the website that can be shared<br/>\nHowever, the usability and interface aesthetics of this version of the website are not considered, and it is basically only available to IT professionals. Therefore, the results generated during this period are mainly shared through some WeChat groups.",
                        zh_cn: "<h1>\u521D\u7248\u7F51\u7AD9\u5206\u4EAB</h1>2022\u5E743\u67082\u65E5\uFF0C\u6211\u4EEC\u5F00\u59CB\u5C06\u96F6\u6563\u4E8E\u786C\u76D8\u4E2D\u7684\u90E8\u5206\u7F51\u9875\uFF0C\u76F4\u63A5\u653E\u5230www.sonya.cc\u7F51\u7AD9\u4E2D\uFF0C\u5F62\u6210\u4E86\u521D\u7248\u53EF\u5206\u4EAB\u7684\u7F51\u7AD9\u3002<br/>\n\u4F46\u662F\uFF0C\u8FD9\u4E00\u7248\u7F51\u7AD9\u672A\u8003\u8651\u53EF\u4F7F\u7528\u6027\u53CA\u754C\u9762\u7F8E\u89C2\u5EA6\u7B49\uFF0C\u57FA\u672C\u4E0A\u53EA\u6709IT\u4E1A\u5185\u4EBA\u58EB\u624D\u80FD\u4F7F\u7528\uFF0C\u6240\u4EE5\u8FD9\u6BB5\u65F6\u95F4\u4E3B\u8981\u901A\u8FC7\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u5206\u4EAB\u6240\u751F\u6210\u7684\u7ED3\u679C\u3002",
                        zh_tw: "<h1>\u521D\u7248\u7DB2\u7AD9\u5206\u4EAB</h1>2022\u5E743\u67082\u65E5\uFF0C\u6211\u5011\u958B\u59CB\u5C07\u96F6\u6563\u65BC\u786C\u789F\u4E2D\u7684\u90E8\u5206\u7DB2\u9801\uFF0C\u76F4\u63A5\u653E\u5230www.sonya.cc\u7DB2\u7AD9\u4E2D\uFF0C\u5F62\u6210\u4E86\u521D\u7248\u53EF\u5206\u4EAB\u7684\u7DB2\u7AD9\u3002<br/>\n\u4F46\u662F\uFF0C\u9019\u4E00\u7248\u7DB2\u7AD9\u672A\u8003\u616E\u53EF\u4F7F\u7528\u6027\u53CA\u4ECB\u9762\u7F8E\u89C0\u5EA6\u7B49\uFF0C\u57FA\u672C\u4E0A\u53EA\u6709IT\u696D\u5167\u4EBA\u58EB\u624D\u80FD\u4F7F\u7528\uFF0C\u6240\u4EE5\u9019\u6BB5\u6642\u9593\u4E3B\u8981\u901A\u904E\u4E00\u4E9B\u5FAE\u4FE1\u7FA4\u5206\u4EAB\u6240\u751F\u6210\u7684\u7D50\u679C\u3002"
                    }
                },
                {
                    id: 5,
                    date: new Date(2022, 8, 28, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "A new round of revision begins",
                        zh_cn: "\u65B0\u4E00\u8F6E\u6539\u7248\u5F00\u59CB",
                        zh_tw: "\u65B0\u4E00\u8F2A\u6539\u7248\u958B\u59CB"
                    },
                    summary: {
                        en: "On September 28, 2022, Sonya's mother suddenly said excitedly to Sonya's father: \"These tools are easy to use, but others can't use them. Let me design them and make them available to everyone. Let's make the simplified Chinese computer browser version first.\"<br/>\nLater, Sonya's mother designed a simplified Chinese computer browser version using sketch, and Sonya's father started a new round of reconstruction that lasted several months.",
                        zh_cn: "2022\u5E749\u670828\u65E5\uFF0Csonya\u5988\u5988\u7A81\u7136\u5174\u594B\u5730\u5BF9sonya\u7238\u7238\u8BF4\uFF1A\u201C\u8FD9\u4E9B\u5DE5\u5177\u597D\u7528\u662F\u597D\u7528\uFF0C\u4F46\u522B\u4EBA\u7528\u4E0D\u8D77\u6765\uFF0C\u4E0D\u5982\u6211\u6765\u8BBE\u8BA1\u4E00\u4E0B\uFF0C\u4F60\u6539\u7248\u6210\u5927\u5BB6\u53EF\u7528\u7684\u7F51\u7AD9\u3002\u6211\u4EEC\u5148\u505A\u7B80\u4F53\u4E2D\u6587\u7535\u8111\u6D4F\u89C8\u5668\u7248\u7684\u5427\u3002\u201D<br/>\n\u968F\u540E\uFF0Csonya\u5988\u5988\u4F7F\u7528sketch\u8BBE\u8BA1\u4E86\u7B80\u4F53\u4E2D\u6587\u7535\u8111\u6D4F\u89C8\u5668\u7248\uFF0Csonya\u7238\u7238\u5F00\u59CB\u4E86\u4E3A\u671F\u6570\u6708\u7684\u4E00\u8F6E\u65B0\u7684\u91CD\u6784\u3002",
                        zh_tw: "2022\u5E749\u670828\u65E5\uFF0Csonya\u5ABD\u5ABD\u7A81\u7136\u8208\u596E\u5730\u5C0Dsonya\u7238\u7238\u8AAA\uFF1A\u201C\u9019\u4E9B\u5DE5\u5177\u597D\u7528\u662F\u597D\u7528\uFF0C\u4F46\u5225\u4EBA\u7528\u4E0D\u8D77\u4F86\uFF0C\u4E0D\u5982\u6211\u4F86\u8A2D\u8A08\u4E00\u4E0B\uFF0C\u4F60\u6539\u7248\u6210\u5927\u5BB6\u53EF\u7528\u7684\u7DB2\u7AD9\u3002\u6211\u5011\u5148\u505A\u7C21\u9AD4\u4E2D\u6587\u96FB\u8166\u700F\u89BD\u5668\u7248\u7684\u5427\u3002\u201D<br/>\n\u96A8\u5F8C\uFF0Csonya\u5ABD\u5ABD\u4F7F\u7528sketch\u8A2D\u8A08\u4E86\u7C21\u9AD4\u4E2D\u6587\u96FB\u8166\u700F\u89BD\u5668\u7248\uFF0Csonya\u7238\u7238\u958B\u59CB\u4E86\u70BA\u671F\u6578\u6708\u7684\u4E00\u8F2A\u65B0\u7684\u91CD\u69CB\u3002"
                    },
                    html: {
                        en: "<h1>A new round of revision begins</h1>On September 28, 2022, Sonya's mother suddenly said excitedly to Sonya's father: \"These tools are easy to use, but others can't use them. Let me design them and make them available to everyone. Let's make the simplified Chinese computer browser version first.\"<br/>\nLater, Sonya's mother designed a simplified Chinese computer browser version using sketch, and Sonya's father started a new round of reconstruction that lasted several months.",
                        zh_cn: "<h1>\u65B0\u4E00\u8F6E\u6539\u7248\u5F00\u59CB</h1>2022\u5E749\u670828\u65E5\uFF0Csonya\u5988\u5988\u7A81\u7136\u5174\u594B\u5730\u5BF9sonya\u7238\u7238\u8BF4\uFF1A\u201C\u8FD9\u4E9B\u5DE5\u5177\u597D\u7528\u662F\u597D\u7528\uFF0C\u4F46\u522B\u4EBA\u7528\u4E0D\u8D77\u6765\uFF0C\u4E0D\u5982\u6211\u6765\u8BBE\u8BA1\u4E00\u4E0B\uFF0C\u4F60\u6539\u7248\u6210\u5927\u5BB6\u53EF\u7528\u7684\u7F51\u7AD9\u3002\u6211\u4EEC\u5148\u505A\u7B80\u4F53\u4E2D\u6587\u7535\u8111\u6D4F\u89C8\u5668\u7248\u7684\u5427\u3002\u201D<br/>\n\u968F\u540E\uFF0Csonya\u5988\u5988\u4F7F\u7528sketch\u8BBE\u8BA1\u4E86\u7B80\u4F53\u4E2D\u6587\u7535\u8111\u6D4F\u89C8\u5668\u7248\uFF0Csonya\u7238\u7238\u5F00\u59CB\u4E86\u4E3A\u671F\u6570\u6708\u7684\u4E00\u8F6E\u65B0\u7684\u91CD\u6784\u3002",
                        zh_tw: "<h1>\u65B0\u4E00\u8F2A\u6539\u7248\u958B\u59CB</h1>2022\u5E749\u670828\u65E5\uFF0Csonya\u5ABD\u5ABD\u7A81\u7136\u8208\u596E\u5730\u5C0Dsonya\u7238\u7238\u8AAA\uFF1A\u201C\u9019\u4E9B\u5DE5\u5177\u597D\u7528\u662F\u597D\u7528\uFF0C\u4F46\u5225\u4EBA\u7528\u4E0D\u8D77\u4F86\uFF0C\u4E0D\u5982\u6211\u4F86\u8A2D\u8A08\u4E00\u4E0B\uFF0C\u4F60\u6539\u7248\u6210\u5927\u5BB6\u53EF\u7528\u7684\u7DB2\u7AD9\u3002\u6211\u5011\u5148\u505A\u7C21\u9AD4\u4E2D\u6587\u96FB\u8166\u700F\u89BD\u5668\u7248\u7684\u5427\u3002\u201D<br/>\n\u96A8\u5F8C\uFF0Csonya\u5ABD\u5ABD\u4F7F\u7528sketch\u8A2D\u8A08\u4E86\u7C21\u9AD4\u4E2D\u6587\u96FB\u8166\u700F\u89BD\u5668\u7248\uFF0Csonya\u7238\u7238\u958B\u59CB\u4E86\u70BA\u671F\u6578\u6708\u7684\u4E00\u8F2A\u65B0\u7684\u91CD\u69CB\u3002"
                    }
                },
                {
                    id: 6,
                    date: new Date(2022, 11, 22, 0, 0, 0),
                    isTop: true,
                    version: "20221222A",
                    title: {
                        en: "Computer browser version is initially launched",
                        zh_cn: "\u7535\u8111\u6D4F\u89C8\u5668\u7248\u521D\u6B65\u4E0A\u7EBF",
                        zh_tw: "\u96FB\u8166\u700F\u89BD\u5668\u7248\u521D\u6B65\u4E0A\u7DDA"
                    },
                    summary: {
                        en: "On December 22, 2022, at the winter solstice, the computer browser version will be initially launched.<br/>\nAfter more than two and a half months, Sonya's father finally completed this round of preliminary reconstruction. Although this website still has many defects, the annotations are not perfect, and the English translation is not ideal, it can finally give some small help to children, parents and teachers who have been suspended due to the epidemic<br/>\nIn this round, we shared 12 gadgets, a small part of essence resources and a small part of reference pages. As time goes by, we will continue to improve and provide more and better free resources for everyone.",
                        zh_cn: "2022\u5E7412\u670822\u65E5\uFF0C\u51AC\u81F3\uFF0C\u7535\u8111\u6D4F\u89C8\u5668\u7248\u521D\u6B65\u4E0A\u7EBF\u3002<br/>\n\u5386\u65F6\u4E24\u4E2A\u534A\u6708\u591A\uFF0Csonya\u7238\u7238\u7EC8\u4E8E\u5B8C\u6210\u4E86\u8FD9\u4E00\u8F6E\u7684\u521D\u6B65\u91CD\u6784\u3002\u867D\u7136\u8FD9\u4E2A\u7F51\u7AD9\u8FD8\u6709\u4E0D\u5C11\u7F3A\u9677\uFF0C\u6CE8\u91CA\u4E5F\u4E0D\u5B8C\u5584\uFF0C\u82F1\u6587\u6587\u5B57\u4E5F\u4E0D\u7FFB\u8BD1\u5F97\u4E0D\u7406\u60F3\uFF0C\u4F46\u603B\u7B97\u53EF\u4EE5\u7ED9\u56E0\u75AB\u60C5\u800C\u505C\u8BFE\u7684\u5B69\u5B50\u4EEC\u53CA\u5BB6\u957F\u4EEC\u3001\u8001\u5E08\u4EEC\u4E00\u4E9B\u5C0F\u5C0F\u7684\u5E2E\u52A9\u4E86\u3002<br/>\n\u8FD9\u4E00\u8F6E\uFF0C\u6211\u4EEC\u5206\u4EAB\u4E86\u5341\u4E8C\u4E2A\u5C0F\u5DE5\u5177\uFF0C\u4E00\u5C0F\u90E8\u5206\u7CBE\u534E\u8D44\u6E90\uFF0C\u4E00\u5C0F\u90E8\u5206\u53C2\u8003\u9875\u9762\u3002\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u6211\u4EEC\u5C06\u4E0D\u65AD\u5B8C\u5584\uFF0C\u4E3A\u5927\u5BB6\u63D0\u4F9B\u66F4\u591A\u3001\u66F4\u597D\u7684\u514D\u8D39\u7684\u8D44\u6E90\u3002",
                        zh_tw: "2022\u5E7412\u670822\u65E5\uFF0C\u51AC\u81F3\uFF0C\u96FB\u8166\u700F\u89BD\u5668\u7248\u521D\u6B65\u4E0A\u7DDA\u3002<br/>\n\u6B77\u6642\u5169\u500B\u534A\u6708\u591A\uFF0Csonya\u7238\u7238\u7D42\u65BC\u5B8C\u6210\u4E86\u9019\u4E00\u8F2A\u7684\u521D\u6B65\u91CD\u69CB\u3002 \u96D6\u7136\u9019\u500B\u7DB2\u7AD9\u9084\u6709\u4E0D\u5C11\u7F3A\u9677\uFF0C\u6CE8\u91CB\u4E5F\u4E0D\u5B8C\u5584\uFF0C\u82F1\u6587\u6587\u5B57\u4E5F\u4E0D\u7FFB\u8B6F\u5F97\u4E0D\u7406\u60F3\uFF0C\u4F46\u7E3D\u7B97\u53EF\u4EE5\u7D66\u56E0\u75AB\u60C5\u800C\u505C\u8AB2\u7684\u5B69\u5B50\u5011\u53CA\u5BB6\u9577\u5011\u3001\u8001\u5E2B\u5011\u4E00\u4E9B\u5C0F\u5C0F\u7684\u5E6B\u52A9\u4E86\u3002<br/>\n\u9019\u4E00\u8F2A\uFF0C\u6211\u5011\u5206\u4EAB\u4E86\u5341\u4E8C\u500B\u5C0F\u5DE5\u5177\uFF0C\u4E00\u5C0F\u90E8\u5206\u7CBE\u83EF\u8CC7\u6E90\uFF0C\u4E00\u5C0F\u90E8\u5206\u53C3\u6537\u9801\u9762\u3002 \u96A8\u8457\u6642\u9593\u7684\u63A8\u79FB\uFF0C\u6211\u5011\u5C07\u4E0D\u65B7\u5B8C\u5584\uFF0C\u70BA\u5927\u5BB6\u63D0\u4F9B\u66F4\u591A\u3001\u66F4\u597D\u7684\u514D\u8CBB\u7684\u8CC7\u6E90\u3002"
                    },
                    html: {
                        en: "<h1>Computer browser version is initially launched</h1>On December 22, 2022, at the winter solstice, the computer browser version will be initially launched.<br/>\nAfter more than two and a half months, Sonya's father finally completed this round of preliminary reconstruction. Although this website still has many defects, the annotations are not perfect, and the English translation is not ideal, it can finally give some small help to children, parents and teachers who have been suspended due to the epidemic<br/>\nIn this round, we shared 12 gadgets, a small part of essence resources and a small part of reference pages. As time goes by, we will continue to improve and provide more and better free resources for everyone.",
                        zh_cn: "<h1>\u7535\u8111\u6D4F\u89C8\u5668\u7248\u521D\u6B65\u4E0A\u7EBF</h1>2022\u5E7412\u670822\u65E5\uFF0C\u51AC\u81F3\uFF0C\u7535\u8111\u6D4F\u89C8\u5668\u7248\u521D\u6B65\u4E0A\u7EBF\u3002<br/>\n\u5386\u65F6\u4E24\u4E2A\u534A\u6708\u591A\uFF0Csonya\u7238\u7238\u7EC8\u4E8E\u5B8C\u6210\u4E86\u8FD9\u4E00\u8F6E\u7684\u521D\u6B65\u91CD\u6784\u3002\u867D\u7136\u8FD9\u4E2A\u7F51\u7AD9\u8FD8\u6709\u4E0D\u5C11\u7F3A\u9677\uFF0C\u6CE8\u91CA\u4E5F\u4E0D\u5B8C\u5584\uFF0C\u82F1\u6587\u6587\u5B57\u4E5F\u4E0D\u7FFB\u8BD1\u5F97\u4E0D\u7406\u60F3\uFF0C\u4F46\u603B\u7B97\u53EF\u4EE5\u7ED9\u56E0\u75AB\u60C5\u800C\u505C\u8BFE\u7684\u5B69\u5B50\u4EEC\u53CA\u5BB6\u957F\u4EEC\u3001\u8001\u5E08\u4EEC\u4E00\u4E9B\u5C0F\u5C0F\u7684\u5E2E\u52A9\u4E86\u3002<br/>\n\u8FD9\u4E00\u8F6E\uFF0C\u6211\u4EEC\u5206\u4EAB\u4E86\u5341\u4E8C\u4E2A\u5C0F\u5DE5\u5177\uFF0C\u4E00\u5C0F\u90E8\u5206\u7CBE\u534E\u8D44\u6E90\uFF0C\u4E00\u5C0F\u90E8\u5206\u53C2\u8003\u9875\u9762\u3002\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u6211\u4EEC\u5C06\u4E0D\u65AD\u5B8C\u5584\uFF0C\u4E3A\u5927\u5BB6\u63D0\u4F9B\u66F4\u591A\u3001\u66F4\u597D\u7684\u514D\u8D39\u7684\u8D44\u6E90\u3002",
                        zh_tw: "<h1>\u96FB\u8166\u700F\u89BD\u5668\u7248\u521D\u6B65\u4E0A\u7DDA</h1>2022\u5E7412\u670822\u65E5\uFF0C\u51AC\u81F3\uFF0C\u96FB\u8166\u700F\u89BD\u5668\u7248\u521D\u6B65\u4E0A\u7DDA\u3002<br/>\n\u6B77\u6642\u5169\u500B\u534A\u6708\u591A\uFF0Csonya\u7238\u7238\u7D42\u65BC\u5B8C\u6210\u4E86\u9019\u4E00\u8F2A\u7684\u521D\u6B65\u91CD\u69CB\u3002 \u96D6\u7136\u9019\u500B\u7DB2\u7AD9\u9084\u6709\u4E0D\u5C11\u7F3A\u9677\uFF0C\u6CE8\u91CB\u4E5F\u4E0D\u5B8C\u5584\uFF0C\u82F1\u6587\u6587\u5B57\u4E5F\u4E0D\u7FFB\u8B6F\u5F97\u4E0D\u7406\u60F3\uFF0C\u4F46\u7E3D\u7B97\u53EF\u4EE5\u7D66\u56E0\u75AB\u60C5\u800C\u505C\u8AB2\u7684\u5B69\u5B50\u5011\u53CA\u5BB6\u9577\u5011\u3001\u8001\u5E2B\u5011\u4E00\u4E9B\u5C0F\u5C0F\u7684\u5E6B\u52A9\u4E86\u3002<br/>\n\u9019\u4E00\u8F2A\uFF0C\u6211\u5011\u5206\u4EAB\u4E86\u5341\u4E8C\u500B\u5C0F\u5DE5\u5177\uFF0C\u4E00\u5C0F\u90E8\u5206\u7CBE\u83EF\u8CC7\u6E90\uFF0C\u4E00\u5C0F\u90E8\u5206\u53C3\u6537\u9801\u9762\u3002 \u96A8\u8457\u6642\u9593\u7684\u63A8\u79FB\uFF0C\u6211\u5011\u5C07\u4E0D\u65B7\u5B8C\u5584\uFF0C\u70BA\u5927\u5BB6\u63D0\u4F9B\u66F4\u591A\u3001\u66F4\u597D\u7684\u514D\u8CBB\u7684\u8CC7\u6E90\u3002"
                    }
                },
            ]);
            stories.sort(function (prev, next) {
                return ((next.isTop ? Math.pow(10, 14) : 0) + next.date.getTime()) -
                    ((prev.isTop ? Math.pow(10, 14) : 0) + prev.date.getTime());
            });
            exports_1("teachers", teachers = [
                {
                    name: "deno",
                    link: "https://deno.land/",
                    i18n: { en: "Deno", zh_cn: "deno\u9996\u9875", zh_tw: "deno\u9996\u9801" }
                },
                {
                    name: "khanacademy",
                    link: "https://www.khanacademy.org/",
                    i18n: { en: "Khan Academy", zh_cn: "\u53EF\u6C57\u5B66\u9662", zh_tw: "\u53EF\u6C57\u5B78\u9662" }
                },
                {
                    name: "canonCreativePark",
                    link: "https://creativepark.canon/sc/",
                    i18n: {
                        en: "Canon free paper mold printing",
                        zh_cn: "\u4F73\u80FD\u514D\u8D39\u7EB8\u6A21\u6253\u5370",
                        zh_tw: "\u4F73\u80FD\u514D\u8CBB\u7D19\u6A21\u5217\u5370"
                    }
                },
                {
                    name: "unicef",
                    link: "https://www.unicef.cn/",
                    i18n: {
                        en: "UNICEF (China)",
                        zh_cn: "\u8054\u5408\u56FD\u513F\u7AE5\u57FA\u91D1\u4F1A\uFF08\u4E2D\u56FD\uFF09",
                        zh_tw: "\u806F\u5408\u570B\u5152\u7AE5\u57FA\u91D1\u6703\uFF08\u4E2D\u570B\uFF09"
                    }
                },
                {
                    name: "cctf",
                    link: "https://www.cctf.org.cn/",
                    i18n: {
                        en: "China Children's Fund",
                        zh_cn: "\u4E2D\u56FD\u513F\u7AE5\u5C11\u5E74\u57FA\u91D1\u4F1A",
                        zh_tw: "\u4E2D\u570B\u5152\u7AE5\u5C11\u5E74\u57FA\u91D1\u6703"
                    }
                },
                {
                    name: "kidsNationalGeographic",
                    link: "https://kids.nationalgeographic.com/",
                    i18n: {
                        en: "National Geographic Children's Edition",
                        zh_cn: "\u56FD\u5BB6\u5730\u7406\u513F\u7AE5\u7248",
                        zh_tw: "\u570B\u5BB6\u5730\u7406\u5152\u7AE5\u7248"
                    }
                },
                {
                    name: "mozilla",
                    link: "https://developer.mozilla.org/en-US/",
                    i18n: {
                        en: "Mozilla Developer Community",
                        zh_cn: "mozilla\u5F00\u53D1\u8005\u793E\u533A",
                        zh_tw: "mozilla\u958B\u767C\u8005\u793E\u5340"
                    }
                },
                {
                    name: "typescript",
                    link: "https://www.typescriptlang.org/",
                    i18n: {
                        en: "Microsoft typescript",
                        zh_cn: "\u5FAE\u8F6Ftypescript\u9996\u9875",
                        zh_tw: "\u5FAE\u8EDFtypescript\u9996\u9801"
                    }
                },
                {
                    name: "vuejs",
                    link: "https://vuejs.org/",
                    i18n: { en: "vue3", zh_cn: "vue3\u9996\u9875", zh_tw: "vue3\u9996\u9801" }
                },
                {
                    name: "threejs",
                    link: "https://threejs.org/",
                    i18n: { en: "threejs", zh_cn: "threejs\u9996\u9875", zh_tw: "threejs\u9996\u9801" }
                },
                {
                    name: "fontawesome",
                    link: "https://fontawesome.com/",
                    i18n: {
                        en: "fontawesome",
                        zh_cn: "fontawesome\u9996\u9875",
                        zh_tw: "fontawesome\u9996\u9801"
                    }
                },
                {
                    name: "echarts",
                    link: "https://echarts.apache.org/",
                    i18n: {
                        en: "Baidu Echarts",
                        zh_cn: "\u767E\u5EA6\u56FE\u8868echarts",
                        zh_tw: "\u767E\u5EA6\u5716\u8868echarts"
                    }
                },
                {
                    name: "element-plus",
                    link: "https://element-plus.gitee.io/en-US/",
                    i18n: {
                        en: "element-plus",
                        zh_cn: "\u997F\u4E86\u4E48vue3\u7248\u7EC4\u4EF6",
                        zh_tw: "\u9913\u4E86\u9EBCvue3\u7248\u7D44\u4EF6"
                    }
                },
            ]);
            exports_1("searchSources", searchSources = bricks.map(function (brick) {
                return __assign({ kind: "brick" }, brick);
            }).concat(treasures.map(function (treasure) {
                return __assign({ kind: "treasure" }, treasure);
            })));
            exports_1("PageSize", PageSize = {
                homePage: {
                    stories: 6,
                    teachers: global.IS_MOBILE_OR_PAD ? 2 : 4
                },
                treasuresPage: 6,
                bricksPage: {
                    subKind: 4,
                    list: 5
                },
                storiesPage: 5
            });
        }
    };
});

__exp = __instantiate("data", false);
var treasures = __exp["treasures"];
var bricks = __exp["bricks"];
var stories = __exp["stories"];
var teachers = __exp["teachers"];
var searchSources = __exp["searchSources"];
var PageSize = __exp["PageSize"];

