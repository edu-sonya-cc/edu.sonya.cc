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

var PokerBase = function (_super) {
  __extends(PokerBase, _super);

  function PokerBase(appendData, otherComputedData) {
    var _this = _super.call(this, __assign({
      pokerWidth: 40,
      pokerHeight: 56,
      fontSize: '32px',
      backFontSize: '24px',
      pokerKind: 1
    }, appendData), __assign({
      backCover: '',
      count: 32,
      pokerCss: ''
    }, otherComputedData)) || this;

    _this.countDataAndComputedData = function () {
      var _a = _this.data,
          paperSize = _a.paperSize,
          isLandscape = _a.isLandscape,
          MAX_X = _a.maxX,
          MAX_Y = _a.maxY,
          pokerWidth = _a.pokerWidth,
          pokerHeight = _a.pokerHeight,
          pageMarginTop = _a.pageMarginTop,
          pageMarginLeft = _a.pageMarginLeft,
          CARD_WIDTH = _a.pokerWidth,
          CARD_HEIGHT = _a.pokerHeight,
          fontSize = _a.fontSize,
          backFontSize = _a.backFontSize,
          pokerKind = _a.pokerKind;
      var ROW_COUNT = Math.floor(MAX_Y / pokerHeight);
      var COLUMN_COUNT = Math.floor(MAX_X / pokerWidth);
      var COUNT_PER_PAGE = ROW_COUNT * COLUMN_COUNT;

      _this.countPokerDataAndComputedData(pokerKind, COUNT_PER_PAGE);

      var _b = _this,
          getForePageHtml = _b.getForePageHtml,
          getBackPageHtml = _b.getBackPageHtml;
      _this.computedData.html = getForePageHtml().concat(getBackPageHtml());
      _this.computedData.css = ("/* common.css */\n    * { margin:0;border:0;padding:0; }\n    * { box-sizing:border-box; }\n\n    /* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n    @media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; } }\n    page:not(page:last-child){page-break-after:always;}\n\n    /* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n    page { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page { display:block;overflow:hidden; }\n\n    page { font-weight:bolder;dominant-baseline:middle;text-anchor:start; }\n\n    page.forePage{font-family:'Times New Roman', 'KaiTi';font-size:" + fontSize + ";}\n    page.backPage{font-family:'Times New Roman', 'KaiTi';font-size:" + backFontSize + ";}\n\n    /* page > row > cell > top/bottom/center > text.top-left/.top-right/.bottom-left/.bottom-right */\n    /* top > text.top-left/.top-right */\n    /* bottom > text.bottom-left/.bottom-right */\n    /* center >  */\n    row {display:flex;width:auto;height:" + CARD_HEIGHT + "mm;}\n    cell {width:" + CARD_WIDTH + "mm;height:" + CARD_HEIGHT + "mm;border-radius:" + CARD_WIDTH * 3 / 40 + "mm;border:1px solid #aaaaaa;overflow:hidden;}\n    cell{display:inline-flex;flex-direction:column;justify-content:space-between;}\n    top,bottom{display:flex;justify-content:space-between;align-items:center;}\n    center {flex:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;}\n    text{display:block;vertical-align:center;}\n\n    .top-left, .bottom-right{padding-left:" + CARD_WIDTH * 3 / 40 + "mm;}\n    .top-right, .bottom-left{padding-right:" + CARD_WIDTH * 3 / 40 + "mm;}\n\n    bottom {\n      transform:rotate(180deg);\n      -ms-transform:rotate(180deg); \t/* IE 9 */\n      -moz-transform:rotate(180deg); \t/* Firefox */\n      -webkit-transform:rotate(180deg); /* Safari \u548C Chrome */\n      -o-transform:rotate(180deg); \t/* Opera */\n\n      transform-origin:center center;\n      -ms-transform-origin:center center;\n      -moz-transform-origin:center center;\n      -webkit-transform-origin:center center;\n      -o-transform-origin:center center;\n    }\n\n    /* https://blog.csdn.net/scotfield_msn/article/details/52564829 */\n    /* black/red/orange/yellow/green/Cyan/blue/purple/pink/Light green */\n    /* \u9ED1/\u7EA2/\u6A59/\u9EC4/\u7EFF/\u9752/\u84DD/\u7D2B/\u7C89/\u6DE1\u7EFF/\t*/\n    /* \u9ED1/\u7D05/\u6A59/\u9EC3/\u7DA0/\u9752/\u85CD/\u7D2B/\u7C89/\u6DE1\u7DA0/\t*/\n    /*\n      [edu-color=\"1\"] {color:#000000;}\n      [edu-color=\"2\"] {color:#FF0000;}\n      [edu-color=\"3\"] {color:#FF7F00;}\n      [edu-color=\"4\"] {color:#FFFF00;}\n      [edu-color=\"5\"] {color:#00FF00;}\n      [edu-color=\"6\"] {color:#00FFFF;}\n      [edu-color=\"7\"] {color:#0000FF;}\n      [edu-color=\"8\"] {color:#8B00FF;}\n      [edu-color=\"9\"] {color:#F19EC2;}\n      [edu-color=\"10\"]{color:#6B8E23;}\n    */\n    /* [edu-color=\"3\"] {color:#FFFF00;} \u9EC4\u8272 \u9EC3\u8272 yellow */\n\n    [edu-color=\"1\"] {color:#000000;} /* \u9ED1\u8272 \u9ED1\u8272 black */\n    [edu-color=\"2\"] {color:#FF0000;} /* \u7EA2\u8272 \u7D05\u8272 red */\n    [edu-color=\"3\"] {color:#0000FF;} /* \u84DD\u8272 \u85CD\u8272 blue */\n    [edu-color=\"4\"] {color:#CCCC00;} /* \u9EC4 \u9EC3 yellow */\n    [edu-color=\"5\"] {color:#00FF00;} /* \u7EFF\u8272 \u7DA0\u8272 green */\n    [edu-color=\"6\"] {color:#00FFFF;} /* \u9752\u8272 \u9752\u8272 cyan */\n    [edu-color=\"7\"] {color:#8B00FF;} /* \u7D2B\u8272 \u7D2B\u8272 purple */\n    [edu-color=\"8\"] {color:#F19EC2;} /* \u7C89\u7EA2 \u7C89\u7D05 pink */\n    [edu-color=\"9\"] {color:#6B8E23;} /* \u6DE1\u7EFF \u6DE1\u7DA0 light green */\n    [edu-color=\"10\"]{color:#FF7F00;} /* \u6A59\u8272 \u6A59\u8272 orange */\n\n    [edu-color=\"-1\"] {color:#DDDDDD;}\n    ").concat(_this.computedData.pokerCss);
    };

    _this.updateOtherDataOfPoker = function (_newData) {};

    _this.initCoreElements = function () {
      var configCoreElement = _this.configCoreElement;
      configCoreElement.setAttribute(REPORT_KIND_PROPERTY, 'poker');
      var getWrapElement = _this.getWrapElement;
      var wrapElement = getWrapElement({
        en_us: 'Poker size',
        zh_cn: '扑克尺寸',
        zh_tw: '撲克尺寸'
      });

      _this.initPokerWidthElements(wrapElement);

      _this.initPokerHeightElements(wrapElement);

      _this.appendPokerSizeButtons(wrapElement);

      wrapElement = getWrapElement({
        en_us: 'Font size',
        zh_cn: '字号',
        zh_tw: '字型大小'
      });

      _this.initFontSizeElements(wrapElement);

      _this.initBackFontSizeElements(wrapElement);

      wrapElement = getWrapElement({
        en_us: 'Poker Kind',
        zh_cn: '扑克类型',
        zh_tw: '撲克類型'
      });

      _this.initPokerKindElements(wrapElement);
    };

    _this.onPageSizeChanged = function (newPageSize) {
      switch (newPageSize) {
        case 'A3':
          _this.data.pokerWidth = 48;
          _this.data.pokerHeight = 68;
          break;

        case 'A4':
          _this.data.pokerWidth = 40;
          _this.data.pokerHeight = 56;
          break;

        default:
          break;
      }

      _this.pokerWidthElement.value = _this.data.pokerWidth.toString();
      _this.pokerHeightElement.value = _this.data.pokerHeight.toString();
    };

    _this.pokerWidthElement = createElement('input');

    _this.initPokerWidthElements = function (wrapElement) {
      var _a = _this,
          pokerWidth = _a.data.pokerWidth,
          pokerWidthElement = _a.pokerWidthElement;
      var labelElement = createElement('label');
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en_us: 'Width:',
        zh_cn: '宽：',
        zh_tw: '寬：'
      });
      pokerWidthElement.value = pokerWidth.toString();
      pokerWidthElement.type = 'number';
      pokerWidthElement.setAttribute('min', '0');

      var changeValue = function changeValue() {
        _this.data.pokerWidth = parseInt(pokerWidthElement.value, 0);

        _this.saveConfigAndBuildIfAllowed();
      };

      pokerWidthElement.onchange = changeValue;
      pokerWidthElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pokerWidthElement);
    };

    _this.pokerHeightElement = createElement('input');

    _this.initPokerHeightElements = function (wrapElement) {
      var _a = _this,
          pokerHeight = _a.data.pokerHeight,
          pokerHeightElement = _a.pokerHeightElement;
      var labelElement = createElement('label');
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en_us: 'Height:',
        zh_cn: '高：',
        zh_tw: '高：'
      });
      pokerHeightElement.value = pokerHeight.toString();
      pokerHeightElement.type = 'number';
      pokerHeightElement.setAttribute('min', '0');

      var changeValue = function changeValue() {
        _this.data.pokerHeight = parseInt(pokerHeightElement.value, 0);

        _this.saveConfigAndBuildIfAllowed();
      };

      pokerHeightElement.onchange = changeValue;
      pokerHeightElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(pokerHeightElement);
    };

    _this.fontSizeElement = createElement('input');

    _this.initFontSizeElements = function (wrapElement) {
      var _a = _this,
          fontSize = _a.data.fontSize,
          fontSizeElement = _a.fontSizeElement;
      var labelElement = createElement('label');
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en_us: 'Front:',
        zh_cn: '正面：',
        zh_tw: '正面：'
      });
      fontSizeElement.type = 'text';
      fontSizeElement.value = fontSize;

      var changeValue = function changeValue() {
        _this.data.fontSize = fontSizeElement.value;

        _this.saveConfigAndBuildIfAllowed();
      };

      fontSizeElement.onchange = changeValue;
      fontSizeElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(fontSizeElement);
    };

    _this.backFontSizeElement = createElement('input');

    _this.initBackFontSizeElements = function (wrapElement) {
      var _a = _this,
          backFontSize = _a.data.backFontSize,
          backFontSizeElement = _a.backFontSizeElement;
      var labelElement = createElement('label');
      wrapElement.appendChild(labelElement);
      labelElement.innerHTML = getI18nInnerHTML({
        en_us: 'Back:',
        zh_cn: '背面：',
        zh_tw: '背面：'
      });
      backFontSizeElement.type = 'text';
      backFontSizeElement.value = backFontSize;

      var changeValue = function changeValue() {
        _this.data.backFontSize = backFontSizeElement.value;

        _this.saveConfigAndBuildIfAllowed();
      };

      backFontSizeElement.onchange = changeValue;
      backFontSizeElement.onblur = changeValue;
      wrapElement.appendChild(labelElement);
      wrapElement.appendChild(backFontSizeElement);
    };

    _this.pokerKindElementArray = [];

    _this.appendPokerSizeButtons = function (wrapElement) {
      [{
        i18n: {
          en_us: 'Small',
          zh_cn: '小',
          zh_tw: '小'
        },
        width: 40,
        height: 56
      }, {
        i18n: {
          en_us: 'Big',
          zh_cn: '大',
          zh_tw: '大'
        },
        width: 48,
        height: 68
      }].forEach(function (_a, i) {
        var i18n = _a.i18n,
            width = _a.width,
            height = _a.height;
        var buttonElement = createElement('button');
        buttonElement.innerHTML = getI18nInnerHTML(i18n);
        buttonElement.type = 'button';
        buttonElement.setAttribute('edu-to-width', width.toString());
        buttonElement.setAttribute('edu-to-height', height.toString());
        buttonElement.name = 'pokerSizeButtons';

        buttonElement.onclick = function (event) {
          var widthValue = parseInt(buttonElement.getAttribute('edu-to-width'), 0);
          var heightValue = parseInt(buttonElement.getAttribute('edu-to-height'), 0);
          _this.data.pokerWidth = widthValue;
          _this.data.pokerHeight = heightValue;
          _this.pokerWidthElement.value = widthValue.toString();
          _this.pokerHeightElement.value = heightValue.toString();

          _this.saveConfigAndBuildIfAllowed();

          return stopEventBubble(event);
        };

        wrapElement.appendChild(buttonElement);
      });
    };

    _this.updateOtherData = function (newData) {
      var pokerWidth = newData.pokerWidth,
          pokerHeight = newData.pokerHeight,
          fontSize = newData.fontSize,
          backFontSize = newData.backFontSize,
          pokerKind = newData.pokerKind;
      var _a = _this,
          pokerWidthElement = _a.pokerWidthElement,
          pokerHeightElement = _a.pokerHeightElement,
          fontSizeElement = _a.fontSizeElement,
          backFontSizeElement = _a.backFontSizeElement,
          pokerKindElementArray = _a.pokerKindElementArray;
      pokerKindElementArray.forEach(function (element) {
        element.checked = element.value === pokerKind.toString();
      });
      pokerWidthElement.value = pokerWidth;
      pokerHeightElement.value = pokerHeight;
      fontSizeElement.value = fontSize;
      backFontSizeElement.value = backFontSize;
      _this.data.pokerWidth = pokerWidth;
      _this.data.pokerHeight = pokerHeight;
      _this.data.fontSize = fontSize;
      _this.data.backFontSize = backFontSize;
      _this.data.pokerKind = pokerKind;

      _this.updateOtherDataOfPoker(newData);
    };

    return _this;
  }

  return PokerBase;
}(BrickBase);

_instantiate("pokerBase", false);