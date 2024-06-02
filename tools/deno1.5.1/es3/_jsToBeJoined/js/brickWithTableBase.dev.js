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

var BrickWithTableBase = function (_super) {
  __extends(BrickWithTableBase, _super);

  function BrickWithTableBase(appendData, otherComputedData) {
    var _this = _super.call(this, __assign({
      list: []
    }, appendData), __assign({}, otherComputedData)) || this;

    _this.initCoreElementsBeforeTable = function () {};

    _this.initCoreElementsAfterTable = function () {};

    _this.tableWrapElement = createElement("div");
    _this.tableElement = createElement("table");
    _this.tableHeadElement = createElement("thead");
    _this.tableBodyElement = createElement("tbody");
    _this.trHead = createElement("tr");
    _this.trArray = [];
    _this.idOrClassPrefix = "brickPage";

    _this.initCoreElements = function () {
      var configCoreElement = _this.configCoreElement;
      var _a = _this,
          tableWrapElement = _a.tableWrapElement,
          tableElement = _a.tableElement,
          tableHeadElement = _a.tableHeadElement,
          tableBodyElement = _a.tableBodyElement,
          trHead = _a.trHead,
          idOrClassPrefix = _a.idOrClassPrefix;

      _this.initCoreElementsBeforeTable();

      _this.initUsableButtonsWrap();

      configCoreElement.appendChild(tableWrapElement);

      _this.initCoreElementsAfterTable();

      tableWrapElement.id = idOrClassPrefix + "TableWrap";
      tableWrapElement.appendChild(tableElement);
      tableElement.appendChild(tableHeadElement);
      tableElement.appendChild(tableBodyElement);
      tableHeadElement.appendChild(trHead);

      _this.appendTableHeadCell({
        en_us: "Operations",
        zh_cn: "操作",
        zh_tw: "操作"
      });

      _this.initTableHead();
    };

    _this.updateOtherDataLevel3 = function (newData) {};

    _this.updateOtherData = function (newData) {
      var list = newData.list;
      _this.data.list.length = 0;
      list.forEach(function (item) {
        return _this.data.list.push(item);
      });

      _this.updateOtherDataLevel3(newData);

      _this.showDataInTable();
    };

    _this.initUsableButtonsWrap = function () {
      var configCoreElement = _this.configCoreElement;
      var _a = _this,
          idOrClassPrefix = _a.idOrClassPrefix,
          list = _a.data.list;
      var usableButtonsWrap = createElement("div");
      configCoreElement.appendChild(usableButtonsWrap);
      usableButtonsWrap.id = idOrClassPrefix + "UsableButtonsWrap";

      _this.getUsableList().forEach(function (_a) {
        var strongI18n = _a.strongI18n,
            buttonList = _a.buttonList;

        var wrapElement = _this.getWrapElement(strongI18n);

        wrapElement.setAttribute("style", "margin-bottom:1em;");
        usableButtonsWrap.appendChild(wrapElement);
        var span = createElement("span");
        span.setAttribute("style", "display:inline-flex;");
        wrapElement.appendChild(span);
        buttonList.forEach(function (_a) {
          var nameI18n = _a.nameI18n,
              info = _a.info;
          var button = createElement("button");
          span.appendChild(button);
          button.type = "button";
          button.innerHTML = getI18nInnerHTML(nameI18n);

          button.onclick = function (event) {
            var infoClone = JSON.parse(JSON.stringify(info));
            list.push(infoClone);

            _this.createTableBodyRow(infoClone);

            _this.build();

            return stopEventBubble(event);
          };
        });
      });
    };

    _this.showDataInTable = function () {
      var _a = _this,
          tableBodyElement = _a.tableBodyElement,
          trArray = _a.trArray,
          list = _a.data.list;
      tableBodyElement.innerHTML = "";
      trArray.length = 0;
      list.forEach(function (item, index) {
        _this.createTableBodyRow(item, tableBodyElement, index);
      });
    };

    _this.appendTableHeadCell = function (i18n) {
      var trHead = _this.trHead;
      var td = createElement("td");
      trHead.appendChild(td);
      td.innerHTML = getI18nInnerHTML(i18n);
    };

    _this.appendReadonlyTd = function (tr, innerHTML) {
      var td = createElement("td");
      tr.appendChild(td);
      var span = createElement("span");
      td.appendChild(span);
      span.innerHTML = innerHTML;
    };

    _this.appendTextareaTd = function (tr, value, data, fieldName, valueKind) {
      if (valueKind === void 0) {
        valueKind = "string";
      }

      var td = createElement("td");
      tr.appendChild(td);
      var textarea = createElement("textarea");
      td.appendChild(textarea);
      textarea.value = value;
      textarea.rows = 4;

      textarea.onchange = textarea.focus = function () {
        switch (valueKind) {
          case "numberArray":
            data[fieldName] = textarea.value.split("\n").map(function (value) {
              return parseFloat(value);
            });
            break;

          case "stringArray":
            data[fieldName] = textarea.value.split("\n");
            break;

          case "string":
          default:
            data[fieldName] = textarea.value;
            break;
        }

        _this.build();
      };
    };

    _this.appendTextboxTd = function (tr, value, data, fieldName) {
      var td = createElement("td");
      tr.appendChild(td);
      var input = createElement("input");
      td.appendChild(input);
      input.value = value;
      input.type = "text";

      input.onchange = input.focus = function () {
        data[fieldName] = input.value;

        _this.build();
      };
    };

    _this.appendCheckboxTdWithoutText = function (tr, value, data, fieldName) {
      var td = createElement("td");
      tr.appendChild(td);
      var checkbox = createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = fieldName;
      checkbox.checked = value;
      td.appendChild(checkbox);

      checkbox.onchange = function () {
        data[fieldName] = checkbox.checked;

        _this.build();
      };
    };

    _this.appendNumberTd = function (tr, value, data, fieldName, min, max, step) {
      var td = createElement("td");
      tr.appendChild(td);
      var input = createElement("input");
      input.type = "number";
      input.name = fieldName;
      input.value = value.toString();
      if (min) input.min = min.toString();
      if (max) input.max = max.toString();
      if (step) input.step = step.toString();
      td.appendChild(input);

      input.onchange = input.focus = function () {
        data[fieldName] = parseFloat(input.value);

        _this.build();
      };
    };

    _this.appendSelectTd = function (tr, value, data, fieldName, options) {
      var td = createElement("td");
      tr.appendChild(td);
      var lang = getCurrentLang();
      var select = createElement("select");
      options.forEach(function (_a) {
        var value = _a.value,
            captions = _a.captions;
        var option = createElement("option");
        option.value = value;
        option.setAttribute("i18n", getI18nInnerHTML(captions));
        option.innerHTML = captions[lang];
        select.appendChild(option);
      });
      select.value = value;
      td.appendChild(select);

      select.onchange = function () {
        data[fieldName] = select.value;

        _this.build();
      };
    };

    _this.appendOperationTd = function (tr, data) {
      var td = createElement("td");
      tr.appendChild(td);
      "↑↓×".split("").forEach(function (caption, index) {
        var button = createElement("button");
        td.appendChild(button);
        button.type = "button";
        button.innerHTML = caption;

        if (index === 2) {
          button.className = "warning";
        }

        button.onclick = function (event) {
          var tableBodyElement = _this.tableBodyElement;
          var trList = tableBodyElement.children;
          var trCount = trList.length;
          var trIndex = -1;

          for (var i = 0; i < trCount; ++i) {
            if (trList[i] === tr) {
              trIndex = i;
              break;
            }
          }

          if (trIndex === -1) return stopEventBubble(event);
          var newlist = [];

          _this.data.list.forEach(function (item) {
            return newlist.push(item);
          });

          switch (index) {
            case 0:
              if (trIndex === 0) return stopEventBubble(event);
              var removeItemWhenMoveUp = newlist.splice(trIndex, 1);
              newlist.splice(trIndex - 1, 0, removeItemWhenMoveUp[0]);
              break;

            case 1:
              if (trIndex === trCount - 1) return stopEventBubble(event);
              var removeItemWhenMoveDown = newlist.splice(trIndex, 1);
              newlist.splice(trIndex + 1, 0, removeItemWhenMoveDown[0]);
              break;

            case 2:
              newlist.splice(trIndex, 1);
              break;

            default:
              break;
          }

          _this.updateOtherData({
            list: newlist
          });

          _this.build();

          return stopEventBubble(event);
        };
      });
    };

    _this.countDataAndComputedDataInBrickWithTableBase = function () {
      var _a = _this,
          tableHeadElement = _a.tableHeadElement,
          list = _a.data.list;
      tableHeadElement.style.display = list.length ? "table-header-group" : "none";
    };

    return _this;
  }

  return BrickWithTableBase;
}(BrickBase);

_instantiate("brickWithTableBase", false);