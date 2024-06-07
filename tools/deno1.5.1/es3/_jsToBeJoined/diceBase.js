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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("diceBase", [], function (exports_1, context_1) {
    "use strict";
    var DiceBase;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DiceBase = (function (_super) {
                __extends(DiceBase, _super);
                function DiceBase() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.idOrClassPrefix = 'brickPageDice';
                    _this.countDataAndComputedData = function () {
                        _this.countDataAndComputedDataInBrickWithTableBase();
                        var DiceGenerator = edu.sonya.cc.DiceGenerator;
                        var diceGenerator = new DiceGenerator();
                        var _a = _this, data = _a.data, computedData = _a.computedData;
                        var paperSize = data.paperSize, isLandscape = data.isLandscape, MAX_X = data.maxX, MAX_Y = data.maxY, pageMarginTop = data.pageMarginTop, pageMarginLeft = data.pageMarginLeft, list = data.list;
                        var css = "/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    page { display:flex;flex-flow:wrap; }\n    page:not(page:last-child){page-break-after:always;}\n\n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n    @media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; } }\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n    ";
                        var svgList = [];
                        list.forEach(function (_a) {
                            var id = _a.id, diceKind = _a.diceKind, sideLength = _a.sideLength, contents = _a.contents, outerLineStyle = _a.outerLineStyle, innerLineStyle = _a.innerLineStyle, textStyle = _a.textStyle, options = _a.options;
                            var _b = diceGenerator.create({
                                id: id,
                                diceKind: diceKind,
                                sideLength: sideLength,
                                contents: contents,
                                outerLineStyle: outerLineStyle,
                                innerLineStyle: innerLineStyle,
                                textStyle: textStyle,
                                options: options
                            }), svgCss = _b.css, svg = _b.svg;
                            svgList.push(svg);
                            css += svgCss;
                        });
                        var en_us = FILENAME_POSTFIX + "Dices";
                        var zh_cn = FILENAME_POSTFIX + "\u9AB0\u5B50";
                        var zh_tw = FILENAME_POSTFIX + "\u9AB0\u5B50";
                        computedData.title = { en_us: en_us, zh_cn: zh_cn, zh_tw: zh_tw };
                        computedData.css = css;
                        computedData.html = _this.getAutomaticPaginationHtmlFromChildList(svgList, MAX_X, MAX_Y);
                    };
                    _this.idOrClassPrefix = 'brickPageDice';
                    _this.getUsableList = function () {
                        var usableDices = [];
                        _this.appendDiceOfSides4(usableDices);
                        _this.appendDiceOfSides6(usableDices);
                        _this.appendDiceOfSides8(usableDices);
                        _this.appendDiceOfSides10(usableDices);
                        _this.appendDiceOfSides12(usableDices);
                        _this.appendDiceOfSides20(usableDices);
                        _this.appendDiceOfSides24(usableDices);
                        var usableList = [];
                        usableDices.forEach(function (_a) {
                            var diceFace = _a.diceFace, infos = _a.infos;
                            var buttonList = [];
                            infos.forEach(function (info) {
                                var captionI18n = info.captionI18n;
                                buttonList.push({
                                    nameI18n: typeof captionI18n === 'string'
                                        ? {
                                            en_us: captionI18n,
                                            zh_cn: captionI18n,
                                            zh_tw: captionI18n
                                        }
                                        : captionI18n,
                                    info: info
                                });
                            });
                            var strongI18n = {
                                en_us: diceFace + "-sides",
                                zh_cn: diceFace + "\u9762",
                                zh_tw: diceFace + "\u9762"
                            };
                            usableList.push({
                                strongI18n: strongI18n,
                                buttonList: buttonList
                            });
                        });
                        return usableList;
                    };
                    _this.initTableHead = function () {
                        _this.appendTableHeadCell({ en_us: 'Faces', zh_cn: '面', zh_tw: '面' });
                        _this.appendTableHeadCell({ en_us: 'Side', zh_cn: '边', zh_tw: '邊' });
                        _this.appendTableHeadCell({
                            en_us: 'Contents of all sides',
                            zh_cn: '各面内容',
                            zh_tw: '各面內容'
                        });
                        _this.appendTableHeadCell({
                            en_us: 'Outside Boundary Line Style',
                            zh_cn: '外边界线样式',
                            zh_tw: '外邊界線樣式'
                        });
                        _this.appendTableHeadCell({
                            en_us: 'Interior Line Style',
                            zh_cn: '内部线样式',
                            zh_tw: '內部線樣式'
                        });
                        _this.appendTableHeadCell({
                            en_us: 'Text Style',
                            zh_cn: '文本样式',
                            zh_tw: '文字樣式'
                        });
                    };
                    _this.appendDiceOfSides4 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.four,
                            sideLength: 20,
                            contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Pinyin Tone', zh_cn: '拼音声调', zh_tw: '拼音聲調' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.four,
                            sideLength: 20,
                            contents: '1,2,3,4'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:5mm;font-family:"Times New Roman", "Kaiti";',
                            options: {},
                            captionI18n: '1-4'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.four,
                            sideLength: 20,
                            contents: '+,-,×,÷'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
                            options: {},
                            captionI18n: {
                                en_us: 'Quad operator',
                                zh_cn: '四则运算符',
                                zh_tw: '四則運算子'
                            }
                        });
                        usableDices.push({
                            diceFace: 4,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides6 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.six,
                            sideLength: 20,
                            contents: getNumbersArray(1, 6),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"Times New Roman", "Kaiti";',
                            options: {},
                            captionI18n: '1-6'
                        });
                        usableDices.push({
                            diceFace: 6,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides8 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.eight,
                            sideLength: 20,
                            contents: getNumbersArray(1, 8),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: '1-8'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.eight,
                            sideLength: 20,
                            contents: '☰☵☶☳☴☲☷☱'.split(''),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Eight Diagrams', zh_cn: '八卦', zh_tw: '八卦' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.eight,
                            sideLength: 20,
                            contents: '利、衰、毁、誉、称、讥、苦、乐'.split('、'),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Eight winds', zh_cn: '八风', zh_tw: '八風' }
                        });
                        usableDices.push({
                            diceFace: 8,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides10 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.ten,
                            sideLength: 20,
                            contents: getNumbersArray(1, 10),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: '1-10'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.ten,
                            sideLength: 20,
                            contents: '0,10,20,30,40,50,60,70,80,90'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Tens', zh_cn: '整十数', zh_tw: '整十數' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.ten,
                            sideLength: 20,
                            contents: '0,100,200,300,400,500,600,700,800,900'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Hundreds', zh_cn: '整百数', zh_tw: '整佰數' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.ten,
                            sideLength: 20,
                            contents: '0,1000,2000,3000,4000,5000,6000,7000,8000,9000'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: { en_us: 'Thousands', zh_cn: '整千数', zh_tw: '整仟數' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.ten,
                            sideLength: 20,
                            contents: '甲乙丙丁戊己庚辛壬癸'.split(''),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {},
                            captionI18n: {
                                en_us: 'The ten heavenly stems',
                                zh_cn: '天干',
                                zh_tw: '天干'
                            }
                        });
                        usableDices.push({
                            diceFace: 10,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides12 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: getNumbersArray(1, 12),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: '1-12'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: '子丑寅卯辰巳午未申酉戌亥'.split(''),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Terrestrial branch', zh_cn: '地支', zh_tw: '地支' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: '鼠牛虎兔龙蛇马羊猴鸡狗猪'.split(''),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'Chinese zodiac 1',
                                zh_cn: '十二生肖',
                                zh_tw: '十二生肖'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: '鼠牛虎兔龍蛇馬羊猴雞狗猪'.split(''),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'Chinese zodiac 2',
                                zh_cn: '生肖繁体',
                                zh_tw: '生肖繁體'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ],
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:7.5mm;font-family:"Times New Roman";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'English Months',
                                zh_cn: '英文月份',
                                zh_tw: '英文月份'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: [
                                '一月',
                                '二月',
                                '三月',
                                '四月',
                                '五月',
                                '六月',
                                '七月',
                                '八月',
                                '九月',
                                '十月',
                                '十一月',
                                '十二月',
                            ],
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Months', zh_cn: '月份', zh_tw: '月份' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: [
                                'Jan.',
                                'Feb.',
                                'Mar.',
                                'Apr.',
                                'May.',
                                'Jun.',
                                'Jul.',
                                'Aug.',
                                'Sep.',
                                'Oct.',
                                'Nov.',
                                'Dec.',
                            ],
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"Times New Roman";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'Month abbreviation',
                                zh_cn: '月份缩写',
                                zh_tw: '月份縮寫'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: [
                                '1月',
                                '2月',
                                '3月',
                                '4月',
                                '5月',
                                '6月',
                                '7月',
                                '8月',
                                '9月',
                                '10月',
                                '11月',
                                '12月',
                            ],
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'Month (number)',
                                zh_cn: '月份（数字）',
                                zh_tw: '月份（數字）'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twelve,
                            sideLength: 20,
                            contents: [
                                '正月',
                                '二月',
                                '三月',
                                '四月',
                                '五月',
                                '六月',
                                '七月',
                                '八月',
                                '九月',
                                '十月',
                                '冬月',
                                '腊月',
                            ],
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Lunar month', zh_cn: '农历月份', zh_tw: '農曆月份' }
                        });
                        usableDices.push({
                            diceFace: 12,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides20 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twenty,
                            sideLength: 20,
                            contents: getNumbersArray(1, 20),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:8mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: '1-20'
                        });
                        usableDices.push({
                            diceFace: 20,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.appendDiceOfSides24 = function (usableDices) {
                        var infos = [];
                        var DiceKind = edu.sonya.cc.DiceKind;
                        infos.length = 0;
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: getNumbersArray(1, 24),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: '1-24'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: getNumbersArray(0, 23),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: '0-23'
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,'
                                .replace(/a/g, 'ɑ')
                                .replace(/g/g, 'ɡ')
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Initial Consonant', zh_cn: '声母', zh_tw: '聲母' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en,in,un,ün,ang,eng,ing,ong'
                                .replace(/a/g, 'ɑ')
                                .replace(/g/g, 'ɡ')
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Finals', zh_cn: '韵母', zh_tw: '韻母' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,'
                                .replace(/a/g, 'ɑ')
                                .replace(/g/g, 'ɡ')
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"kaiti";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'Overall recognition',
                                zh_cn: '整体认读',
                                zh_tw: '整體認讀'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:12mm;font-family:"Kaiti";font-weight:normal;',
                            options: {
                                withHole: false
                            },
                            captionI18n: { en_us: 'Simple final', zh_cn: '单韵母', zh_tw: '單韻母' }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: '立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒'
                                .split('、'),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"KaiTi";',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: '24 Solar Terms',
                                zh_cn: '二十四节气',
                                zh_tw: '二十四節氣'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: '/i/,/ɪ/,/e/,/ɛ/,/æ/,/ɑ/,/ɑr/,/ɔ/,/ɔr/,/ɔɪ/,/o/,/u/,/ᴜ/,/ᴜr/,/ʌ/,/ə/,/ɝ/,/ɚ/,/aɪ/,/aᴜ/,/ɛr/,/ɪr/,/ɪə/,/iə/'
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"Times New Roman";font-weight:bold;',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'KK Vowels',
                                zh_cn: 'KK元音',
                                zh_tw: 'KK元音'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'i,ɪ,e,ɛ,æ,ɑ,ɑr,ɔ,ɔr,ɔɪ,o,u,ᴜ,ᴜr,ʌ,ə,ɝ,ɚ,aɪ,aᴜ,ɛr,ɪr,ɪə,iə'
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"Times New Roman";font-weight:bold;',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'KK Vowels',
                                zh_cn: 'KK元音',
                                zh_tw: 'KK元音'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: '/p/,/b/,/t/,/d/,/k/,/ɡ/,/f/,/v/,/θ/,/ð/,/s/,/z/,/ʃ/,/ʒ/,/tʃ/,/dʒ/,/m/,/n/,/ŋ/,/l/,/r/,/j/,/h/,/w/'
                                .split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"Times New Roman";font-weight:bold;',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'KK Consonants',
                                zh_cn: 'KK辅音',
                                zh_tw: 'KK辅音'
                            }
                        });
                        infos.push({
                            id: '',
                            diceKind: DiceKind.twentyFour,
                            sideLength: 20,
                            contents: 'p,b,t,d,k,ɡ,f,v,θ,ð,s,z,ʃ,ʒ,tʃ,dʒ,m,n,ŋ,l,r,j,h,w'.split(','),
                            outerLineStyle: 'stroke:#555;stroke-width:0.2mm;',
                            innerLineStyle: 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;',
                            textStyle: 'font-size:10.5mm;font-family:"Times New Roman";font-weight:bold;',
                            options: {
                                withHole: false
                            },
                            captionI18n: {
                                en_us: 'KK Consonants',
                                zh_cn: 'KK辅音',
                                zh_tw: 'KK辅音'
                            }
                        });
                        usableDices.push({
                            diceFace: 24,
                            infos: JSON.parse(JSON.stringify(infos))
                        });
                    };
                    _this.createTableBodyRow = function (dice) {
                        var _a = dice, id = _a.id, diceKind = _a.diceKind, sideLength = _a.sideLength, contents = _a.contents, outerLineStyle = _a.outerLineStyle, innerLineStyle = _a.innerLineStyle, textStyle = _a.textStyle, options = _a.options;
                        var tableBodyElement = _this.tableBodyElement;
                        var tr = createElement('tr');
                        tableBodyElement.appendChild(tr);
                        _this.appendOperationTd(tr, dice);
                        _this.appendDiceKindTd(tr, dice);
                        _this.appendNumberTd(tr, sideLength, dice, 'sideLength', 0, 200, null);
                        _this.appendContentsTd(tr, dice);
                        _this.appendTextareaTd(tr, outerLineStyle, dice, 'outerLineStyle', 'string');
                        _this.appendTextareaTd(tr, innerLineStyle, dice, 'innerLineStyle', 'string');
                        _this.appendTextareaTd(tr, textStyle, dice, 'textStyle', 'string');
                    };
                    _this.appendDiceKindTd = function (tr, dice) {
                        var DiceKind = edu.sonya.cc.DiceKind;
                        var td = createElement('td');
                        tr.appendChild(td);
                        var span = createElement('span');
                        td.appendChild(span);
                        var value = '';
                        switch (dice.diceKind) {
                            case DiceKind.four:
                                value = '4';
                                break;
                            case DiceKind.six:
                                value = '6';
                                break;
                            case DiceKind.eight:
                                value = '8';
                                break;
                            case DiceKind.ten:
                                value = '10';
                                break;
                            case DiceKind.twelve:
                                value = '12';
                                break;
                            case DiceKind.twenty:
                                value = '20';
                                break;
                            case DiceKind.twentyFour:
                                value = '24';
                                break;
                            default:
                                break;
                        }
                        span.innerHTML = value;
                    };
                    _this.appendContentsTd = function (tr, dice) {
                        var td = createElement('td');
                        tr.appendChild(td);
                        var DiceKind = edu.sonya.cc.DiceKind;
                        var diceKind = dice.diceKind, contents = dice.contents;
                        var idOrClassPrefix = _this.idOrClassPrefix;
                        var count = 0;
                        switch (diceKind) {
                            case DiceKind.four:
                                count = 4;
                                break;
                            case DiceKind.six:
                                count = 6;
                                break;
                            case DiceKind.eight:
                                count = 8;
                                break;
                            case DiceKind.ten:
                                count = 10;
                                break;
                            case DiceKind.twelve:
                                count = 12;
                                break;
                            case DiceKind.twenty:
                                count = 20;
                                break;
                            case DiceKind.twentyFour:
                                count = 24;
                                break;
                            default:
                                break;
                        }
                        var div = createElement('div');
                        td.appendChild(div);
                        div.className = idOrClassPrefix + "ContentValueWrap";
                        var i18nNameArray = ['en_us', 'zh_cn', 'zh_tw'];
                        var emptyArray = [];
                        pushSameValueTimes(emptyArray, '\n', count);
                        var isText = typeof contents[0] === 'string';
                        if (isText) {
                            var textarea_1 = createElement('textarea');
                            td.appendChild(textarea_1);
                            textarea_1.value = dice.contents.join('\n');
                            textarea_1.rows = 4;
                            textarea_1.onchange = textarea_1.focus = function () {
                                textarea_1.value
                                    .split('\n')
                                    .concat(emptyArray)
                                    .slice(0, count)
                                    .forEach(function (item, index) {
                                    dice.contents[index] = item;
                                });
                                _this.build();
                            };
                        }
                        else {
                            i18nNameArray.forEach(function (lang) {
                                var textarea = createElement('textarea');
                                td.appendChild(textarea);
                                textarea.value = dice.contents.map(function (content) { return content[lang]; }).join('\n');
                                textarea.rows = 4;
                                textarea.onchange = textarea.focus = function () {
                                    textarea.value
                                        .split('\n')
                                        .concat(emptyArray)
                                        .slice(0, count)
                                        .forEach(function (item, index) {
                                        dice.contents[index][lang] = item;
                                    });
                                    _this.build();
                                };
                            });
                        }
                    };
                    return _this;
                }
                return DiceBase;
            }(BrickWithTableBase));
            exports_1("DiceBase", DiceBase);
        }
    };
});

__exp = __instantiate("diceBase", false);
var DiceBase = __exp["DiceBase"];

