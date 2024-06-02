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

"use strict";

var svgSpace;

(function (svgSpace) {
  var edu;

  (function (edu) {
    var sonya;

    (function (sonya) {
      var cc;

      (function (cc) {
        var SVG_NS = "http://www.w3.org/2000/svg";
        var SVG_XLINKNS = "http://www.w3.org/1999/xlink";

        var SvgHelper = function () {
          function SvgHelper() {}

          SvgHelper.appendLine = function (svg, STYLE, x1, x2, y1, y2, viewBox) {
            var line = document.createElementNS(SVG_NS, "line");
            line.setAttribute("x1", x1 + "mm");
            line.setAttribute("x2", x2 + "mm");
            line.setAttribute("y1", y1 + "mm");
            line.setAttribute("y2", y2 + "mm");

            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }

            line.setAttribute("style", STYLE);
            svg.appendChild(line);
          };

          SvgHelper.appendCircle = function (svg, STYLE, cx, cy, radius, viewBox) {
            var circle = document.createElementNS(SVG_NS, "circle");
            circle.setAttribute("cx", cx + "mm");
            circle.setAttribute("cy", cy + "mm");
            circle.setAttribute("r", radius + "mm");
            circle.setAttribute("fill", "#ffffff");

            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, cx - radius);
              viewBox.right = Math.max(viewBox.right, cx + radius);
              viewBox.top = Math.min(viewBox.top, cy - radius);
              viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
            }

            circle.setAttribute("style", STYLE);
            svg.appendChild(circle);
          };

          SvgHelper.appendTspan = function (text, STYLE, CHAR, dx, dy) {
            var tspan = document.createElementNS(SVG_NS, "tspan");
            tspan.setAttribute("dx", "" + dx);
            tspan.setAttribute("dy", "" + dy);
            tspan.setAttribute("style", STYLE.concat("dominant-baseline:middle;text-anchor:middle;", CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "", CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : ""));
            tspan.innerHTML = CHAR;
            text.appendChild(tspan);
          };

          SvgHelper.appendText = function (svg, STYLE, CONTENT, x, y, rotate, transformOrigin, viewBox, maybeNumber) {
            if (maybeNumber === void 0) {
              maybeNumber = false;
            }

            var g = document.createElementNS(SVG_NS, "g");

            if (rotate) {
              g.setAttribute("style", "transform: rotate(" + rotate + "deg);transform-origin:" + transformOrigin + ";");
            }

            svg.appendChild(g);
            var text = document.createElementNS(SVG_NS, "text");
            text.setAttribute("x", x + "mm");
            text.setAttribute("y", y + "mm");
            text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");

            if (CONTENT.indexOf("<en_us>") > -1) {
              var lang = getCurrentLang();
              var startTag = "<" + lang + ">";
              var endTag = "</" + lang + ">";

              if (CONTENT.indexOf(startTag) > -1) {
                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
              }
            }

            CONTENT = CONTENT.replace(/<br \/>/gi, "<br/>").replace(/<br\/>/gi, "<br>").replace(/\\n/gi, "<br>");

            if (CONTENT.indexOf("<br>") > -1) {
              var fontSize = STYLE.indexOf("font-size:") > -1 ? STYLE.split("font-size:")[1].split(";")[0] : "2mm";
              var unit = fontSize.replace(/[0-9.]/gi, "");
              var dyNumber = parseFloat(fontSize.replace(unit, ""));
              var segs = CONTENT.split("<br>");
              var lastLength_1 = 0;
              var dyOffset_1 = "" + dyNumber + unit;
              segs.forEach(function (seg, index) {
                SvgHelper.appendTspan(text, "", seg, index ? "-" + lastLength_1 + "em" : "0", index ? dyOffset_1 : "0");
                lastLength_1 = seg.length;
              });
            } else {
              if (maybeNumber) {
                CONTENT.split("").forEach(function (_char, index) {
                  SvgHelper.appendTspan(text, "", _char, "0", "0");
                });
              } else {
                SvgHelper.appendTspan(text, "", CONTENT, "0", "0");
              }
            }

            g.appendChild(text);

            if (viewBox) {
              var clientRects = text.getClientRects();

              var _a = clientRects.length ? clientRects.item(0) : text.getBoundingClientRect(),
                  x1 = _a.left,
                  x2 = _a.right,
                  y1 = _a.top,
                  y2 = _a.bottom;

              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }

            text.setAttribute("style", STYLE);
          };

          SvgHelper.setSvgTextInfo = function (info, x, y, rotate) {
            info.x = x;
            info.y = y;
            info.rotate = rotate;
          };

          SvgHelper.appendOuterPath = function (svg, WIDTH, HEIGHT, mmToPxScale, OUTER_LINE_COLOR) {
            svg.setAttribute("width", WIDTH + "mm");
            svg.setAttribute("height", HEIGHT + "mm");
            var WIDTH_PX = mmToPxScale * WIDTH;
            var HEIGHT_PX = mmToPxScale * HEIGHT;
            var path = svgSpace.edu.sonya.cc.SvgHelper.createSvgPath();
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", OUTER_LINE_COLOR);
            path.setAttribute("d", "M 0, 0 ".concat("h " + WIDTH_PX + " ", "v " + HEIGHT_PX + " ", "h -" + WIDTH_PX + " ", " z"));
            svg.appendChild(path);
          };

          SvgHelper.appendOuterLine = function (svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
            svg.setAttribute("width", WIDTH + "mm");
            svg.setAttribute("height", HEIGHT + "mm");
            var appendLine = svgSpace.edu.sonya.cc.SvgHelper.appendLine;
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
          };

          SvgHelper.getTextStyleFontSizePatchCss = function (NUMBER, TEXT_STYLE) {
            if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
              var fontSizeSeg = TEXT_STYLE.split("font-size:")[1].split(";")[0];
              var fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
              var fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
              return "font-size:" + fontValue * 2 / NUMBER.toString().length + fontUnit + ";";
            }

            return "";
          };

          SvgHelper.createSvg = function () {
            var svg = document.createElementNS(SVG_NS, "svg");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("xmlns", SVG_NS);
            svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
            return svg;
          };

          SvgHelper.createSvgPath = function () {
            return document.createElementNS(SVG_NS, "path");
          };

          return SvgHelper;
        }();

        cc.SvgHelper = SvgHelper;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = svgSpace.edu || (svgSpace.edu = {}));
})(svgSpace || (svgSpace = {}));

_instantiate("svgHelper", false);