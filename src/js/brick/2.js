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

var BrickCore = (function (_super) {
    __extends(BrickCore, _super);
    function BrickCore() {
        var _this = this;
        var NOW = new Date();
        _this = _super.call(this, {
            onlyMentalArithmetic: false,
            pageSubjectFontSize: '22px',
            questionFontSize: '16px',
            year: NOW.getFullYear().toString(),
            month: (NOW.getMonth() + 1).toString(),
            day: NOW.getDate().toString()
        }, {}) || this;
        _this.idOrClassPrefix = 'brickPageMathStage';
        _this.updateOtherDataLevel3 = function (newData) {
            var onlyMentalArithmetic = newData.onlyMentalArithmetic, pageSubjectFontSize = newData.pageSubjectFontSize, questionFontSize = newData.questionFontSize;
            var _a = _this, data = _a.data, onlyMentalArithmeticRadioArray = _a.onlyMentalArithmeticRadioArray, pageSubjectFontSizeElement = _a.pageSubjectFontSizeElement, questionFontSizeElement = _a.questionFontSizeElement;
            data.onlyMentalArithmetic = onlyMentalArithmetic;
            data.pageSubjectFontSize = pageSubjectFontSize;
            data.questionFontSize = questionFontSize;
            onlyMentalArithmeticRadioArray[onlyMentalArithmetic ? 1 : 0].checked = true;
            pageSubjectFontSizeElement.value = pageSubjectFontSize;
            questionFontSizeElement.value = questionFontSize;
        };
        _this.initExhaustibleAMultiplyBInfo = function () {
            var exhaustibleAMultiplyBInfo = _this.exhaustibleAMultiplyBInfo;
            var aMultiplyBMaybeCarryArray = exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryArray, aMultiplyBMaybeNotCarryArray = exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryArray, aMultiplyBMaybeDebitMinusArray = exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusArray, aMultiplyBMaybeNotDebitMinusArray = exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusArray;
            for (var a = 1; a < 10; ++a) {
                for (var b = 1; b < 10; ++b) {
                    var aMultiplyB = a * b;
                    var digits = aMultiplyB % 10;
                    var item = { A: a, B: b, aMultiplyB: aMultiplyB };
                    if (digits > 0) {
                        aMultiplyBMaybeCarryArray.push(item);
                    }
                    if (digits < 9) {
                        if (aMultiplyB > 9)
                            aMultiplyBMaybeDebitMinusArray.push(item);
                    }
                    aMultiplyBMaybeNotDebitMinusArray.push(item);
                    aMultiplyBMaybeNotCarryArray.push(item);
                }
            }
            exhaustibleAMultiplyBInfo.aMultiplyBMaybeCarryMaxIndex = aMultiplyBMaybeCarryArray.length - 1;
            exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotCarryMaxIndex =
                aMultiplyBMaybeNotCarryArray.length - 1;
            exhaustibleAMultiplyBInfo.aMultiplyBMaybeDebitMinusMaxIndex =
                aMultiplyBMaybeDebitMinusArray.length - 1;
            exhaustibleAMultiplyBInfo.aMultiplyBMaybeNotDebitMinusMaxIndex =
                aMultiplyBMaybeNotDebitMinusArray.length - 1;
        };
        _this.initPlusOrSubtractDictionaryNotGreatThan100Array = function () {
            for (var a = 0; a <= 100; ++a) {
                var aDigits = a % 10;
                var addendWithCarryArray = [];
                var addendWithoutCarryArray = [];
                var subtractorWithDebitMinusArray = [];
                var subtractorWithoutDebitMinusArray = [];
                var addendMax = 100 - a;
                var subtractorMax = a;
                var bMax = Math.max(addendMax, subtractorMax);
                var bDigitMinWhenCarry = Math.max(1, 10 - aDigits);
                for (var b = 0; b <= bMax; ++b) {
                    var bDigits = b % 10;
                    if (b <= addendMax) {
                        if (bDigits >= bDigitMinWhenCarry) {
                            addendWithCarryArray.push(b);
                        }
                        else {
                            addendWithoutCarryArray.push(b);
                        }
                    }
                    if (b <= subtractorMax) {
                        if (bDigits > aDigits) {
                            subtractorWithDebitMinusArray.push(b);
                        }
                        else {
                            subtractorWithoutDebitMinusArray.push(b);
                        }
                    }
                }
                _this.plusOrSubtractDictionaryNotGreatThan100Array.push({
                    addendWithCarryArray: addendWithCarryArray,
                    addendWithoutCarryArray: addendWithoutCarryArray,
                    subtractorWithDebitMinusArray: subtractorWithDebitMinusArray,
                    subtractorWithoutDebitMinusArray: subtractorWithoutDebitMinusArray,
                    addendWithCarryMaxIndex: addendWithCarryArray.length - 1,
                    addendWithoutCarryMaxIndex: addendWithoutCarryArray.length - 1,
                    subtractorWithDebitMinusMaxIndex: subtractorWithDebitMinusArray.length - 1,
                    subtractorWithoutDebitMinusMaxIndex: subtractorWithoutDebitMinusArray.length - 1
                });
            }
        };
        _this.initExhaustibleArray = function () {
            _this.fillExhaustibleArray1();
            _this.fillExhaustibleArray2();
            _this.fillExhaustibleArray3();
            _this.fillExhaustibleArray4();
            _this.fillExhaustibleArray5();
        };
        _this.exhaustibleAMultiplyBInfo = {
            aMultiplyBMaybeCarryArray: [],
            aMultiplyBMaybeNotCarryArray: [],
            aMultiplyBMaybeDebitMinusArray: [],
            aMultiplyBMaybeNotDebitMinusArray: [],
            aMultiplyBMaybeCarryMaxIndex: -1,
            aMultiplyBMaybeNotCarryMaxIndex: -1,
            aMultiplyBMaybeDebitMinusMaxIndex: -1,
            aMultiplyBMaybeNotDebitMinusMaxIndex: -1
        };
        _this.fillExhaustibleArray1 = function () {
            var catalog = 'A+B=C';
            var exhaustibleArray = _this.exhaustibleArray;
            ['1-5', '0-5', '0-10', '0-20'].forEach(function (scope) {
                var segArray = scope.split('-');
                var min = parseInt(segArray[0], 0);
                var max = parseInt(segArray[1], 0);
                var list = [];
                for (var a = min; a <= max; ++a) {
                    var bMax = max - a;
                    for (var b = min; b <= bMax; ++b) {
                        var result = a + b;
                        var commonHtml = (a + " + " + b + " = ").replace(/ /g, '<i> </i>');
                        var question = "<p>" + commonHtml + "</p>";
                        var answer = "<p>" + commonHtml + "<answer chars=\"2\">" + result + "</answer></p>";
                        list.push({
                            question: question,
                            questionFull: question,
                            answer: answer,
                            answerFull: answer
                        });
                    }
                }
                exhaustibleArray.push({
                    kind: catalog + "_" + scope,
                    list: list,
                    countPerSet: list.length
                });
            });
        };
        _this.fillExhaustibleArray2 = function () {
            var catalog = 'A-B=C';
            var exhaustibleArray = _this.exhaustibleArray;
            ['1-5', '0-5', '0-10', '0-20'].forEach(function (scope) {
                var segArray = scope.split('-');
                var min = parseInt(segArray[0], 0);
                var max = parseInt(segArray[1], 0);
                var list = [];
                for (var a = min * 2; a <= max; ++a) {
                    var bMax = a - min;
                    for (var b = min; b <= bMax; ++b) {
                        var result = a - b;
                        var commonHtml = (a + " - " + b + " = ").replace(/ /g, '<i> </i>');
                        var question = "<p>" + commonHtml + "</p>";
                        var answer = "<p>" + commonHtml + "<answer chars=\"2\">" + result + "</answer></p>";
                        list.push({
                            question: question,
                            questionFull: question,
                            answer: answer,
                            answerFull: answer
                        });
                    }
                }
                exhaustibleArray.push({
                    kind: catalog + "_" + scope,
                    list: list,
                    countPerSet: list.length
                });
            });
        };
        _this.fillExhaustibleArray3 = function () {
            var catalog = 'A+B=C D-E=F';
            var exhaustibleArray = _this.exhaustibleArray;
            ['1-5', '0-5', '0-10', '0-20'].forEach(function (scope) {
                var segArray = scope.split('-');
                var min = parseInt(segArray[0], 0);
                var max = parseInt(segArray[1], 0);
                var list = [];
                for (var a = min; a <= max; ++a) {
                    var bMax = max - a;
                    for (var b = min; b <= bMax; ++b) {
                        var result = a + b;
                        var commonHtml = (a + " + " + b + " = ").replace(/ /g, '<i> </i>');
                        var question = "<p>" + commonHtml + "</p>";
                        var answer = "<p>" + commonHtml + "<answer chars=\"2\">" + result + "</answer></p>";
                        list.push({
                            question: question,
                            questionFull: question,
                            answer: answer,
                            answerFull: answer
                        });
                    }
                }
                for (var a = min * 2; a <= max; ++a) {
                    var bMax = a - min;
                    for (var b = min; b <= bMax; ++b) {
                        var result = a - b;
                        var commonHtml = (a + " - " + b + " = ").replace(/ /g, '<i> </i>');
                        var question = "<p>" + commonHtml + "</p>";
                        var answer = "<p>" + commonHtml + "<answer chars=\"2\">" + result + "</answer></p>";
                        list.push({
                            question: question,
                            questionFull: question,
                            answer: answer,
                            answerFull: answer
                        });
                    }
                }
                exhaustibleArray.push({
                    kind: catalog + "_" + scope,
                    list: list,
                    countPerSet: list.length
                });
            });
        };
        _this.fillExhaustibleArray4 = function () {
            var catalog = 'A×B=C';
            var exhaustibleArray = _this.exhaustibleArray;
            ['9×9A', '9×9B'].forEach(function (scope) {
                var bStartFrom1 = scope === '9×9B';
                var list = [];
                for (var a = 1; a < 10; ++a) {
                    for (var b = bStartFrom1 ? 1 : a; b < 10; ++b) {
                        var result = a * b;
                        var commonHtml = (a + " \u00D7 " + b + " = ").replace(/ /g, '<i> </i>');
                        var question = "<p>" + commonHtml + "</p>";
                        var answer = "<p>" + commonHtml + (result < 10 ? ' ' : '') + result + "</p>";
                        list.push({
                            question: question,
                            questionFull: question,
                            answer: answer,
                            answerFull: answer
                        });
                    }
                }
                exhaustibleArray.push({
                    kind: catalog + "_" + scope,
                    list: list,
                    countPerSet: list.length
                });
            });
        };
        _this.fillExhaustibleArray5 = function () {
            var catalog = 'A+B+C=10/20/n';
            var exhaustibleArray = _this.exhaustibleArray;
            var scope = 'A';
            var list = [];
            for (var a = 1; a < 10; ++a) {
                for (var b = 1; b < 10; ++b) {
                    var c = (20 - a - b) % 10;
                    var result = a + b + c;
                    var commonHtml = (a + " + " + b + " + " + c + " = ").replace(/ /g, '<i> </i>');
                    var question = "<p>" + commonHtml + "</p>";
                    var answer = "<p>" + commonHtml + result + "</p>";
                    list.push({
                        question: question,
                        questionFull: question,
                        answer: answer,
                        answerFull: answer
                    });
                }
            }
            exhaustibleArray.push({
                kind: catalog + "_" + scope,
                list: list,
                countPerSet: list.length
            });
        };
        _this.countDataAndComputedData = function () {
            _this.countDataAndComputedDataInBrickWithTableBase();
            var _a = _this, computedData = _a.computedData, mmToPxScale = _a.mmToPxScale;
            var _b = _this.data, paperSize = _b.paperSize, isLandscape = _b.isLandscape, MAX_X = _b.maxX, MAX_Y = _b.maxY, pageMarginTop = _b.pageMarginTop, pageMarginBottom = _b.pageMarginBottom, pageMarginLeft = _b.pageMarginLeft, pageMarginRight = _b.pageMarginRight, list = _b.list, pageSubjectFontSize = _b.pageSubjectFontSize, questionFontSize = _b.questionFontSize;
            computedData.css = "/* common.css */\n* { margin:0;border:0;padding:0; }\n* { box-sizing:border-box; }\n\n/* landscape \u6A2A\u5411 portrait \u7EB5\u5411*/\n@media print { @page { size: " + paperSize + " " + (isLandscape ? 'landscape' : 'portrait') + "; margin:" + pageMarginTop + "mm " + pageMarginRight + "mm " + pageMarginBottom + "mm " + pageMarginLeft + "mm; } }\npage:not(page:last-child){page-break-after:always;}\n\nhtml{font-size:" + (pageSubjectFontSize.length === 0 ? pageSubjectFontSize : 'inherit') + ";}\n.questionPage row:not(row.subject), .answerPage row:not(row.subject)\n{font-size:" + (questionFontSize.length === 0 ? questionFontSize : 'inherit') + ";}\n\nbody {width:" + MAX_X + "mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}\npage { display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start; }\n\n/* page { width:" + MAX_X + "mm;height:" + MAX_Y + "mm;margin-left:" + pageMarginLeft + "mm;margin-top:" + pageMarginTop + "mm; } */\npage { width:" + (MAX_X + pageMarginLeft) + "mm;padding-left:" + pageMarginLeft + "mm;padding-top:" + pageMarginTop + "mm; }\n    page{height:" + MAX_Y + "mm;} /* 2023\u5E745\u670825\u65E5\u91CD\u65B0\u52A0\u56DE */\n\nrow{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;}\nrow.subject{justify-content:flex-start;align-items:flex-start;height:4%;}\nrow[row-count-per-page=\"6\"]{height: 16%;}\nrow[row-count-per-page=\"8\"]{height: 12%;}\nrow[row-count-per-page=\"10\"]{height: 9.6%;}\nrow[row-count-per-page=\"25\"]{height: 3.84%;}\nrow:not(row.subject) cell p{text-align:right;flex:1;}\nrow:not(row.subject) cell p i {font-size:0.8em;}\n\n.questionPage row:not(row.subject) cell p{width:80%;}\n.answerPage row:not(row.subject) cell p{width:96%;}\n.questionPage row:not(row.subject) cell p,\n.answerPage row:not(row.subject) cell p\n{position:relative;}\n\n.subjectLeft{width:20%;justify-content:flex-start;align-items:flex-start;}\n.subjectCenter{flex:1;justify-content:center;align-items:flex-end;flex-direction:row;}\n.subjectRight{justify-content:flex-end;align-items:flex-end;width:20%;}\n\n.subject{font-size:1em;}\n.subtitle{font-size:0.6em;}\n\nrow.subject cell{display:inline-flex;}\nrow:not(row.subject) cell{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;height:100%;}\n.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]){border-top:1px solid #aaaaaa;}\n.answerPage row:not(row.subject) cell:not(cell[edu-without-outer-line]):not(:last-child){border-right:1px solid #aaaaaa;}\n\nrow:not(row.subject) cell>div{display:flex;width:100%;align-items:flex-end;justify-content:space-evenly;letter-spacing:0.5em;}\n/*\n\tdiv[edu-flex=\"3\"]{flex:3;}\n  div[edu-flex=\"4\"]{flex:4;}\n  div[edu-flex=\"6\"]{flex:6;}\n  div[edu-flex=\"8\"]{flex:8;}\n  div[edu-flex=\"9\"]{flex:9;}\n  div[edu-flex=\"10\"]{flex:10;}\n*/\nrow:not(row.subject) cell div[edu-flex] p {flex:unset;}\ndiv[edu-flex=\"3\"]{height:73%;} row:not(row.subject) cell div[edu-flex=\"3\"] p {height:33%;}\ndiv[edu-flex=\"4\"]{height:78%;} row:not(row.subject) cell div[edu-flex=\"4\"] p {height:25%;}\ndiv[edu-flex=\"6\"]{height:84%;} row:not(row.subject) cell div[edu-flex=\"6\"] p {height:16.6%;}\ndiv[edu-flex=\"8\"]{height:86%;} row:not(row.subject) cell div[edu-flex=\"8\"] p {height:12.5%;}\ndiv[edu-flex=\"9\"]{height:88%;} row:not(row.subject) cell div[edu-flex=\"9\"] p {height:11.1%;}\ndiv[edu-flex=\"10\"]{height:88%;} row:not(row.subject) cell div[edu-flex=\"10\"] p {height:10%;}\np.debit{top:-0.4em;}\ndiv[edu-flex=\"4\"] p.debit {top:0.1em;}\n\nrow:not(row.subject) cell div hr {margin-bottom:5%;}\n\ncell answer-option{display:flex;height:100%;flex-direction:column;justify-content:flex-end;align-items:flex-end;}\nanswer-option:not(:last-child){border-right:1px solid #ff00ff;}\nanswer-option[edu-chars=\"2\"]{width:2em;}\nanswer-option[edu-chars=\"3\"]{width:3em;}\nanswer-option[edu-chars=\"4\"]{width:4em;}\nanswer-option[edu-chars=\"5\"]{width:5em;}\nanswer-option[edu-chars=\"6\"]{width:6em;}\nanswer-option[edu-chars=\"7\"]{width:7em;}\nanswer-option[edu-chars=\"8\"]{width:8em;}\nanswer-option[edu-chars=\"9\"]{width:9em;}\n\nanswer-option p{display:flex;width:100%;justify-content:flex-end;align-items:flex-end;}\noperator{display:inline-block;width:1em;text-align:left;}\nnumber{flex:1;}\ncarry{color:#ff0000;font-size:0.5em;position:absolute;bottom:0.15em;}\n\n.questionPage row:not(row.subject) cell hr{width:80%;border:0;border-bottom:1px dashed #aaaaaa;}\n.answerPage row:not(row.subject) cell hr{width:100%;border:0;border-bottom:1px solid #555555;}\n.answerPage row:not(row.subject) cell hr.step{border-bottom:1px solid #ff00ff;}\n\ncarry[edu-digit=\"tens\"]{right:1.3em;}\ncarry[edu-digit=\"hundreds\"]{right:3.4em;}\ncarry[edu-digit=\"thousands\"]{right:5.1em;}\ncarry[edu-digit=\"ten-thousands\"]{right:7.9em;}\ncarry[edu-digit=\"hundred-thousands\"]{right:10.1em;}\ncarry[edu-digit=\"millions\"]{right:12.3em;}\ncarry[edu-digit=\"ten-millions\"]{right:14.5em;}\ncarry[edu-digit=\"billions\"]{right:16.7em;}\ncarry[edu-digit=\"ten-billions\"]{right:18.9em;}\ncarry[edu-digit=\"hundrend-billions\"]{right:21.1em;}\ncarry[edu-digit=\"thousands-billions\"]{right:23.3em;}\n\nanswer{display:inline-block;}\nanswer[chars=\"1\"]{width:0.5em;}\nanswer[chars=\"2\"]{width:1.0em;}\nanswer[chars=\"3\"]{width:1.5em;}\nanswer[chars=\"4\"]{width:2.0em;}\nanswer[chars=\"5\"]{width:2.5em;}\nanswer[chars=\"6\"]{width:3.0em;}\nanswer[chars=\"7\"]{width:3.5em;}\nanswer[chars=\"8\"]{width:4.0em;}\nanswer[chars=\"9\"]{width:4.5em;}\nanswer[chars=\"10\"]{width:5.0em;}\nanswer[chars=\"11\"]{width:5.5em;}\nanswer[chars=\"12\"]{width:6.0em;}\nanswer[chars=\"13\"]{width:6.5em;}\nanswer[chars=\"14\"]{width:7.0em;}\nanswer[chars=\"15\"]{width:7.5em;}\n\ndebit[edu-digit=\"digit\"]{right:0.3em;}\ndebit[edu-digit=\"tens\"]{right:1.2em;}\ndebit[edu-digit=\"hundreds\"]{right:2.3em;}\ndebit{position:absolute;letter-spacing:0;width:1em;height:100%;display:inline-block;}\n\n/*\ndebit{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;position:absolute;letter-spacing:0;}\ndebit-number, debit-circle{display:flex;align-items:flex-end;justify-content:center;flex-direction:row;}\ndebit-number{color:#aaa;font-size:0.8em;align-items:flex-end;flex:3;}\ndebit-circle{color:#ff0000;font-size:2em;align-items:center;flex:1;}\n*/\n\ndebit-number, debit-circle{text-align:center;width:100%;height:100%;position:absolute;display:block;}\ndebit-number{color:#aaa;font-size:0.8em;top:10%;height:50%;z-index:1;}\ndebit-circle{color:#ff0000;font-size:2em;height:25%;top:-0.2em;}\n\np[edu-right-char=\"1\"]{padding-right:1em;}\np[edu-right-char=\"2\"]{padding-right:2em;}\np[edu-right-char=\"3\"]{padding-right:3em;}\np[edu-right-char=\"4\"]{padding-right:4em;}\np[edu-right-char=\"5\"]{padding-right:5em;}\np[edu-right-char=\"6\"]{padding-right:6em;}\np[edu-right-char=\"7\"]{padding-right:7em;}\np[edu-right-char=\"8\"]{padding-right:8em;}\np[edu-right-char=\"9\"]{padding-right:9em;}\n\t\t";
            var NOW = new Date();
            var LANG = getCurrentLang();
            var i18nSubject = {
                en: 'Five minute pass',
                zh_cn: '五分钟闯关',
                zh_tw: '五分鐘闖關'
            };
            var i18nSeparator = {
                en: '_',
                zh_cn: '：',
                zh_tw: '：'
            };
            var i18nSubtitlePrefix = {
                en: '____ ____, ',
                zh_cn: '',
                zh_tw: ''
            };
            var i18nSubtitlePostfix = {
                en: '',
                zh_cn: '年____月____日',
                zh_tw: '年____月____日'
            };
            var i18nAnswerFlag = {
                en: 'Answer',
                zh_cn: '答案',
                zh_tw: '答案'
            };
            var _c = _this.data, year = _c.year, month = _c.month, day = _c.day;
            var i18nSubtitle = {
                en: "<span class=\"subtitleDay\">" + day + "</span> <span class=\"subtitleMonth\">" + month + "</span>, <span class=\"subtitleYear\">" + year + "</span>",
                zh_cn: "<span class=\"subtitleYear\">" + year + "</span>\u5E74<span class=\"subtitleMonth\">" + month + "</span>\u6708<span class=\"subtitleDay\">" + day + "</span>\u65E5",
                zh_tw: "<span class=\"subtitleYear\">" + year + "</span>\u5E74<span class=\"subtitleMonth\">" + month + "</span>\u6708<span class=\"subtitleDay\">" + day + "</span>\u65E5"
            };
            var HTML_SUBJECT = "<span class=\"subject\">" + i18nSubject[LANG] + "&nbsp;</span>&nbsp;";
            var HTML_SUBTITLE = "<div class=\"subtitle\">" + i18nSubtitle[LANG] + "</div>";
            var titlePostfix = ("_" + NOW.getFullYear() + '0'
                .concat((NOW.getMonth() + 1).toString())
                .substr(-2) + '0'.concat(NOW.getDate().toString()).substr(-2)).concat("_" + '0'.concat(NOW.getHours().toString()).substr(-2) + '0'
                .concat(NOW.getMinutes().toString())
                .substr(-2) + '0'.concat(NOW.getSeconds().toString()).substr(-2), list.length < 4
                ? '_'.concat(list.map(function (_a) {
                    var kind = _a.kind;
                    return kind;
                }).join('_and_'))
                : '');
            var en = FILENAME_POSTFIX + "mathStage_" + titlePostfix;
            var zh_cn = FILENAME_POSTFIX + "\u6570\u5B66\u4E94\u5206\u949F\u95EF\u5173_" + titlePostfix;
            var zh_tw = FILENAME_POSTFIX + "\u6578\u5B78\u4E94\u5206\u9418\u95D6\u95DC_" + titlePostfix;
            computedData.title = { en: en, zh_cn: zh_cn, zh_tw: zh_tw };
            var pageSubjectRowLeftHtml = '<cell class="subjectLeft"><div>edu.sonya.cc</div></cell>';
            var pageSubjectRowCenterHtml = "<cell class=\"subjectCenter\">" + HTML_SUBJECT + HTML_SUBTITLE + "</cell>";
            var questionPageSubjectRowRightHtml = "<cell class=\"subjectRight\">~reporterPageIndex~/~reporterPageCount~</cell>";
            var answerPageSubjectRowRightHtml = "<cell class=\"subjectRight\">" + i18nAnswerFlag[LANG] + "~reporterPageIndex~/~reporterPageCount~</cell>";
            var pageSubjectRowHtmlStart = "<row class=\"subject\">" + pageSubjectRowLeftHtml + pageSubjectRowCenterHtml;
            var questionPageSubjectRowHtml = "" + pageSubjectRowHtmlStart + questionPageSubjectRowRightHtml + "</row>";
            var answerPageSubjectRowHtml = "" + pageSubjectRowHtmlStart + answerPageSubjectRowRightHtml + "</row>";
            var questionPageStartHtml = "<page class=\"questionPage\">" + questionPageSubjectRowHtml;
            var answerPageStartHtml = "<page class=\"answerPage\">" + answerPageSubjectRowHtml;
            computedData.html = _this.getReportHtml(questionPageStartHtml, answerPageStartHtml);
        };
        _this.getReportHtml = function (questionPageStartHtml, answerPageStartHtml) {
            var list = _this.data.list;
            var questionRowsArray = [];
            var answerRowsArray = [];
            var questionHtml = '';
            var answerHtml = '';
            var questionPageIndex = 0;
            var answerPageIndex = 0;
            list
                .filter(function (_a) {
                var independentPagination = _a.independentPagination;
                return independentPagination;
            })
                .forEach(function (info) {
                _this.appendReportElements(info, questionRowsArray, answerRowsArray);
            });
            questionRowsArray.forEach(function (_a) {
                var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
                questionHtml += _this.getIndependentPaginationHtml(rowsOccupied, rows, questionPageStartHtml, questionPageIndex);
            });
            answerRowsArray.forEach(function (_a) {
                var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
                answerHtml += _this.getIndependentPaginationHtml(rowsOccupied, rows, answerPageStartHtml, answerPageIndex);
            });
            questionPageIndex = questionHtml.split('</page>').length - 1;
            answerPageIndex = answerHtml.split('</page>').length - 1;
            questionRowsArray.length = 0;
            answerRowsArray.length = 0;
            list
                .filter(function (_a) {
                var independentPagination = _a.independentPagination;
                return !independentPagination;
            })
                .forEach(function (info) {
                _this.appendReportElements(info, questionRowsArray, answerRowsArray);
            });
            questionHtml += _this.getDependentPagingHtml(questionRowsArray, questionPageStartHtml, questionPageIndex);
            answerHtml += _this.getDependentPagingHtml(answerRowsArray, answerPageStartHtml, answerPageIndex);
            var questionPageCount = (questionHtml.split('</page>').length - 1).toString();
            var answerPageCount = (answerHtml.split('</page>').length - 1).toString();
            return questionHtml
                .replace(/~reporterPageCount~/g, questionPageCount)
                .concat(answerHtml.replace(/~reporterPageCount~/g, answerPageCount));
        };
        _this.getIndependentPaginationHtml = function (rowsOccupied, rows, pageStartHtml, pageIndex) {
            if (!rows.length)
                return '';
            if (_this.data.onlyMentalArithmetic)
                rowsOccupied = _this.defaultRowsOccupied;
            var smallRowCountPerPage = _this.smallRowCountPerPage;
            var html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
            var remainingRowCount = smallRowCountPerPage;
            rows.forEach(function (row) {
                if (rowsOccupied > remainingRowCount) {
                    html += "</page>" + pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
                    remainingRowCount = smallRowCountPerPage;
                }
                html += row.outerHTML;
                remainingRowCount = _this.formatCentile(remainingRowCount - rowsOccupied);
            });
            html += '</page>';
            return html;
        };
        _this.smallRowCountPerPage = 48;
        _this.defaultRowCountPerPage = 25;
        _this.defaultRowsOccupied = _this.smallRowCountPerPage / _this.defaultRowCountPerPage;
        _this.getDependentPagingHtml = function (rowArray, pageStartHtml, pageIndex) {
            if (!rowArray.length)
                return '';
            var forceSetRowsOccupiedToDefault = _this.data.onlyMentalArithmetic;
            var _a = _this, smallRowCountPerPage = _a.smallRowCountPerPage, defaultRowsOccupied = _a.defaultRowsOccupied;
            var html = pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
            var remainingRowCount = smallRowCountPerPage;
            rowArray.forEach(function (_a) {
                var rowsOccupied = _a.rowsOccupied, rows = _a.rows;
                if (forceSetRowsOccupiedToDefault)
                    rowsOccupied = defaultRowsOccupied;
                rows.forEach(function (row) {
                    if (rowsOccupied > remainingRowCount) {
                        html += "</page>" + pageStartHtml.replace('~reporterPageIndex~', (++pageIndex).toString());
                        remainingRowCount = smallRowCountPerPage;
                    }
                    html += row.outerHTML;
                    remainingRowCount = _this.formatCentile(remainingRowCount - rowsOccupied);
                });
            });
            html += '</page>';
            return html;
        };
        _this.plusOrSubtractDictionaryNotGreatThan100Array = [];
        _this.getAddendWithCarry = function (other) {
            var plusOrSubtractDictionaryNotGreatThan100 = _this.plusOrSubtractDictionaryNotGreatThan100Array[other];
            if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
                return 0;
            }
            return plusOrSubtractDictionaryNotGreatThan100.addendWithCarryArray[_this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.addendWithCarryMaxIndex)];
        };
        _this.getAddendWithoutCarry = function (other) {
            var plusOrSubtractDictionaryNotGreatThan100 = _this.plusOrSubtractDictionaryNotGreatThan100Array[other];
            if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
                return 0;
            }
            var array = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryArray;
            var maxIndex = plusOrSubtractDictionaryNotGreatThan100.addendWithoutCarryMaxIndex;
            if (maxIndex === 0)
                return array[0];
            var getIntegerRandom = _this.getIntegerRandom;
            return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
        };
        _this.getSubtractorWithDebitMinus = function (minuend) {
            var plusOrSubtractDictionaryNotGreatThan100 = _this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
            if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
                return 0;
            }
            return plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusArray[_this.getIntegerRandom(0, plusOrSubtractDictionaryNotGreatThan100.subtractorWithDebitMinusMaxIndex)];
        };
        _this.getSubtractorWithoutDebitMinus = function (minuend) {
            var plusOrSubtractDictionaryNotGreatThan100 = _this.plusOrSubtractDictionaryNotGreatThan100Array[minuend];
            if (typeof plusOrSubtractDictionaryNotGreatThan100 === 'undefined') {
                return 0;
            }
            var array = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusArray;
            var maxIndex = plusOrSubtractDictionaryNotGreatThan100.subtractorWithoutDebitMinusMaxIndex;
            if (maxIndex === 0)
                return array[0];
            var getIntegerRandom = _this.getIntegerRandom;
            return array[getIntegerRandom(!getIntegerRandom(0, 100) ? 0 : 1, maxIndex)];
        };
        _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3 = '<div edu-flex="3"></div>';
        _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4 = '<div edu-flex="4"></div>';
        _this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6 = '<div edu-flex="6"></div>';
        _this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8 = '<div edu-flex="8"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p><p></p><p></p><p></p><p></p></answer-option></div>';
        _this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4 = '<div edu-flex="4"><answer-option edu-chars="8"><p></p><hr><p></p><p></p><p></p></answer-option></div>';
        _this.questionElementHtmlAppendStart8 = '<div edu-flex="8">';
        _this.questionElementHtmlAppendStart6 = '<div edu-flex="6">';
        _this.questionElementHtmlAppendStart4 = '<div edu-flex="4">';
        _this.questionElementHtmlAppendStart3 = '<div edu-flex="3">';
        _this.getSimleHtmlOfAMultiplyB = function (A, B, result) {
            return "<p><number>" + A + "</number></p><p><operator>\u00D7</operator><number>" + B + "</number></p><hr><p><number>" + result + "</number></p>";
        };
        _this.isOnlyFirstIsNotZero = function (numberal) {
            var str = numberal.toString();
            var length = str.length;
            while (length) {
                var lastChar = str.substring(length - 1, length);
                if (lastChar === '0') {
                    str = str.substring(0, length - 1);
                    --length;
                }
                else {
                    break;
                }
            }
            return length <= 1;
        };
        _this.eduDigitArray = [
            'tens',
            'hundreds',
            'thousands',
            'ten-thousands',
            'hundred-thousands',
            'millions',
            "ten-millions",
            "billions",
            "ten-billions",
            "hundrend-billions",
            "thousands-billions",
        ];
        _this.fillElementArrayOfAPlusBThenC = function (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets) {
            var _a;
            if (withBrackets === void 0) { withBrackets = false; }
            var a, b, c, d;
            (_a = _this.getMaybeCarryTwiceNumbers(has), a = _a.a, b = _a.b, c = _a.c, d = _a.d);
            var A = a;
            var B = b;
            var C = c;
            var result = d;
            var charsStr = (result.toString().length + 1).toString();
            var commonHtml = withBrackets
                ? C + "<i> </i>+<i> </i>(" + A + "<i> </i>+<i> </i>" + B + ")<i> </i>=<i> </i>"
                : A + "<i> </i>+<i> </i>" + B + "<i> </i>+<i> </i>" + C + "<i> </i>=<i> </i>";
            var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
            var answerElementHtml = "<p>" + commonHtml + result + "</p>";
            if (!onlyMentalArithmetic) {
                var A_B = A + B;
                var aDidits = A % 10;
                var bDidits = B % 10;
                var cDidits = C % 10;
                var abDidits = A_B % 10;
                var tensCarry1 = aDidits + bDidits > 9;
                var tensCarry2 = abDidits + cDidits > 9;
                var tensCarry = aDidits + bDidits + cDidits > 9;
                var aLastTowDigits = A % 100;
                var bLastTowDigits = B % 100;
                var cLastTowDigits = C % 100;
                var abLastTowDigits = A_B % 100;
                var hundredsCarry1 = aLastTowDigits + bLastTowDigits > 99;
                var hundredsCarry2 = abLastTowDigits + cLastTowDigits > 99;
                var hundredsCarry = aLastTowDigits + bLastTowDigits + cLastTowDigits > 99;
                var tensCarryHtml1 = tensCarry1 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml1 = hundredsCarry1 ? '<carry edu-digit="hundreds">1</carry>' : '';
                var tensCarryHtml2 = tensCarry2 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml2 = hundredsCarry2 ? '<carry edu-digit="hundreds">1</carry>' : '';
                var tensCarryHtml = tensCarry
                    ? "<carry edu-digit=\"tens\">" + Math.floor((aDidits + bDidits + cDidits) / 10) + "</carry>"
                    : '';
                var hundredsCarryHtml = hundredsCarry
                    ? "<carry edu-digit=\"hundreds\">" + Math.floor((aLastTowDigits + bLastTowDigits + cLastTowDigits) / 100) + "</carry>"
                    : '';
                answerElementHtml += _this.questionElementHtmlAppendStart6;
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += "<p></p><p><number>" + A + "</number></p><p><operator>+</operator><number>" + B + "</number>" + hundredsCarryHtml1 + tensCarryHtml1 + "</p><hr><p><number>" + A_B + "</number></p>";
                answerElementHtml += '<hr class="step"/><p></p>';
                answerElementHtml += "<p></p><p><number>" + A_B + "</number></p><p><operator>+</operator><number>" + C + "</number>" + hundredsCarryHtml2 + tensCarryHtml2 + "</p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\"><p></p><p></p>";
                answerElementHtml += "<p><number>" + A + "</number></p><p><operator>+</operator><number>" + B + "</number>" + hundredsCarryHtml1 + tensCarryHtml1 + "</p><hr><p><number>" + A_B + "</number></p>";
                answerElementHtml += "<p><operator>+</operator><number>" + C + "</number>" + hundredsCarryHtml2 + tensCarryHtml2 + "</p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\"><p></p><p></p><p></p><p>";
                answerElementHtml += "<number>" + A + "</number></p><p><number>" + B + "</number></p>";
                answerElementHtml += "<p><operator>+</operator><number>" + C + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
                answerElementHtml += '</div>';
            }
            _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
        };
        _this.fillElementArrayOfASubtractBThenC = function (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets) {
            var _a, _b;
            if (withBrackets === void 0) { withBrackets = false; }
            var _c = _this, getIntegerRandom = _c.getIntegerRandom, getAddendWithCarry = _c.getAddendWithCarry, getAddendWithoutCarry = _c.getAddendWithoutCarry, getDebitHtml = _c.getDebitHtml, getHtmlOfAPlusB = _c.getHtmlOfAPlusB;
            var a, b, c, d;
            if (withBrackets) {
                if (has) {
                    var bTens = getIntegerRandom(2, 8);
                    var bDigits = getIntegerRandom(1, 9);
                    b = 10 * bTens + bDigits;
                    c = _this.getAddendWithCarry(b);
                    var bPlusC_1 = b + c;
                    if (bPlusC_1 % 10 === 0) {
                        a = bPlusC_1 === 100 ? 100 : 10 * getIntegerRandom(Math.ceil(bPlusC_1 / 10), 10);
                    }
                    else {
                        a = bPlusC_1 + getAddendWithCarry(bPlusC_1);
                    }
                }
                else {
                    var bTens = getIntegerRandom(2, 8);
                    var bDigits = getIntegerRandom(1, 8);
                    b = 10 * bTens + bDigits;
                    c = _this.getAddendWithoutCarry(b);
                    var bPlusC_2 = b + c;
                    if (bPlusC_2 % 10 === 0) {
                        a = bPlusC_2 === 100 ? 100 : 10 * getIntegerRandom(Math.ceil(bPlusC_2 / 10), 10);
                    }
                    else {
                        a = bPlusC_2 + getAddendWithoutCarry(bPlusC_2);
                    }
                }
                d = a - b - c;
                (_a = { a: b, b: c, c: d, d: a }, a = _a.a, b = _a.b, c = _a.c, d = _a.d);
            }
            else {
                (_b = _this.getMaybeCarryTwiceNumbers(has), a = _b.a, b = _b.b, c = _b.c, d = _b.d);
            }
            var A = d;
            var B = a;
            var C = b;
            var result = c;
            var charsStr = (A.toString().length + 1).toString();
            var commonHtml = withBrackets
                ? A + "<i> </i>-<i> </i>(" + B + "<i> </i>+<i> </i>" + C + ")<i> </i>=<i> </i>"
                : A + "<i> </i>-<i> </i>" + B + "<i> </i>-<i> </i>" + C + "<i> </i>=<i> </i>";
            var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
            var answerElementHtml = "<p>" + commonHtml + result + "</p>";
            if (onlyMentalArithmetic) {
                _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
                return;
            }
            answerElementHtml += _this.questionElementHtmlAppendStart8;
            var aDidits = A % 10;
            var bDidits = B % 10;
            var cDidits = C % 10;
            var aSubstractB = A - B;
            var bPlusC = B + C;
            function doneBPlusCAndThenASubstractIt() {
                var debitHtml = getDebitHtml(A, bPlusC);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += getHtmlOfAPlusB(B, C, bPlusC);
                answerElementHtml += '<hr class="step"/>';
                answerElementHtml += debitHtml + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + bPlusC + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
            }
            function doneASubstractCSubstractB() {
                var aSubstractC = A - C;
                var debitHtmlStep1 = getDebitHtml(A, C);
                var debitHtmlStep2 = getDebitHtml(aSubstractC, B);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtmlStep1 + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr>";
                answerElementHtml += debitHtmlStep2 + "<p><number>" + aSubstractC + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
            }
            function doneASubstractBSubstractC() {
                var aSubstractB = A - B;
                var debitHtmlStep1 = getDebitHtml(A, B);
                var debitHtmlStep2 = getDebitHtml(aSubstractB, C);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtmlStep1 + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr>";
                answerElementHtml += debitHtmlStep2 + "<p><number>" + aSubstractB + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
            }
            if (withBrackets) {
                doneBPlusCAndThenASubstractIt();
                if (aDidits === cDidits && aDidits !== bDidits) {
                    doneASubstractCSubstractB();
                }
                else if (aDidits === bDidits && aDidits !== cDidits) {
                    doneASubstractBSubstractC();
                }
            }
            else {
                var debitHtml1 = getDebitHtml(A, B);
                var debitHtml2 = getDebitHtml(aSubstractB, C);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtml1 + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + aSubstractB + "</number></p>";
                answerElementHtml += '<hr class="step"/>';
                answerElementHtml += debitHtml2 + "<p><number>" + aSubstractB + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += '</answer-option>';
                var htmlSubstractTwice = ''.concat("<answer-option edu-chars=\"" + charsStr + "\">", debitHtml1 + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr>", debitHtml2 + "<p><number>" + aSubstractB + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + result + "</number></p>", '</answer-option>');
                if (aDidits === cDidits && aDidits !== bDidits) {
                    answerElementHtml += htmlSubstractTwice;
                    doneASubstractCSubstractB();
                }
                else if ((bDidits + cDidits) % 10 === 0 || aDidits === (bDidits + cDidits) % 10) {
                    answerElementHtml += htmlSubstractTwice;
                    doneBPlusCAndThenASubstractIt();
                }
                else {
                    doneBPlusCAndThenASubstractIt();
                    answerElementHtml += htmlSubstractTwice;
                }
            }
            answerElementHtml += '</div>';
            _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
        };
        _this.fillElementArrayOfASubtractBThenPlusC = function (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets) {
            if (withBrackets === void 0) { withBrackets = false; }
            var _a = _this, getIntegerRandom = _a.getIntegerRandom, getAddendWithCarry = _a.getAddendWithCarry, getAddendWithoutCarry = _a.getAddendWithoutCarry, getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus, getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus, getDebitHtml = _a.getDebitHtml, getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
            var A, B, C, aSubstractB;
            if (withBrackets) {
                var bRandom = getIntegerRandom(0, 99);
                var bTens = bRandom > 10 ? 10 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
                if (has) {
                    var bDidits = bTens === 10 ? 0 : getIntegerRandom(0, 8);
                    B = 10 * bTens + bDidits;
                    C = getSubtractorWithDebitMinus(B);
                    var bSubstractC = B - C;
                    A =
                        bSubstractC +
                            (getIntegerRandom(0, 4) && bSubstractC % 10
                                ? getAddendWithCarry(bSubstractC)
                                : getAddendWithoutCarry(bSubstractC));
                }
                else {
                    var bDidits = getIntegerRandom(1, 9);
                    B = 10 * Math.min(9, bTens) + bDidits;
                    C = getSubtractorWithoutDebitMinus(B);
                    var bSubstractC = B - C;
                    A =
                        bSubstractC +
                            (getIntegerRandom(0, 4) && bSubstractC % 10
                                ? getAddendWithCarry(bSubstractC)
                                : getAddendWithoutCarry(bSubstractC));
                }
                aSubstractB = A - B;
            }
            else {
                var aRandom = getIntegerRandom(0, 99);
                var aTens = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
                if (has) {
                    var aDigits_1 = getIntegerRandom(1, aRandom > 5 ? 5 : 8);
                    A = 10 * aTens + aDigits_1;
                    B = _this.getSubtractorWithDebitMinus(A);
                    aSubstractB = A - B;
                    C =
                        aRandom > 30
                            ? _this.getAddendWithCarry(aSubstractB)
                            : _this.getAddendWithoutCarry(aSubstractB);
                }
                else {
                    var aDigits_2 = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
                    A = 10 * aTens + aDigits_2;
                    B = _this.getSubtractorWithoutDebitMinus(A);
                    aSubstractB = A - B;
                    C = _this.getAddendWithoutCarry(aSubstractB);
                }
            }
            var result = A - B + C;
            var commonHtml = withBrackets
                ? A + "<i> </i>-<i> </i>(" + B + "<i> </i>-<i> </i>" + C + ")<i> </i>=<i> </i>"
                : A + "<i> </i>-<i> </i>" + B + "<i> </i>+<i> </i>" + C + "<i> </i>=<i> </i>";
            var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
            var answerElementHtml = "<p>" + commonHtml + result + "</p>";
            if (onlyMentalArithmetic) {
                _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
                return;
            }
            var aPlusC = A + C;
            var aDigits = A % 10;
            var bDigits = B % 10;
            var cDigits = C % 10;
            var aLastTowDigits = A % 100;
            var cLastTowDigits = C % 100;
            var acDigits = aPlusC % 10;
            var charsStr = (aPlusC.toString().length + 1).toString();
            answerElementHtml += "<div edu-flex=\"8\">";
            function doneAPlusCSubstractB() {
                var tensCarryHtml = aDigits + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml = aLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
                var debitHtmlAPlusCSubstractB = getDebitHtml(aPlusC, B);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += "<p><number>" + A + "</number></p><p><operator>+</operator><number>" + C + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr>";
                answerElementHtml += debitHtmlAPlusCSubstractB + "<p><number>" + aPlusC + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += "</answer-option>";
            }
            if (withBrackets) {
                var bSubstractC = B - C;
                var debitHtmlStep1 = getDebitHtml(B, C);
                var debitHtmlStep2 = getDebitHtml(A, bSubstractC);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtmlStep1 + "<p><number>" + B + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + bSubstractC + "</number></p>";
                answerElementHtml += '<hr class="step"/><p></p>';
                answerElementHtml += debitHtmlStep2 + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + bSubstractC + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += "</answer-option>";
                if (bDigits !== cDigits) {
                    if (A >= B && aDigits === bDigits) {
                        var debitHtmlASubstractB = getDebitHtml(A, B);
                        answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                        answerElementHtml += debitHtmlASubstractB + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + aSubstractB + "</number></p>";
                        answerElementHtml += "" + getHtmlOfAPlusB(aSubstractB, C, result);
                        answerElementHtml += "</answer-option>";
                    }
                    else if (cDigits && (acDigits === 0 || acDigits === bDigits)) {
                        doneAPlusCSubstractB();
                    }
                }
            }
            else {
                var debitExtendHtmlASubstractB = getDebitHtml(A, B) + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr>";
                var htmlOfASubstractBPlubC = getHtmlOfAPlusB(aSubstractB, C, result);
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += "" + debitExtendHtmlASubstractB;
                answerElementHtml += "<p><number>" + aSubstractB + "</number></p>";
                answerElementHtml += '<hr class="step"/><p></p>';
                answerElementHtml += "" + htmlOfASubstractBPlubC;
                answerElementHtml += "</answer-option>";
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\"><p></p><p></p>";
                answerElementHtml += "" + debitExtendHtmlASubstractB;
                answerElementHtml += "" + htmlOfASubstractBPlubC;
                answerElementHtml += "</answer-option>";
                if (bDigits === cDigits && aDigits !== cDigits) {
                    var BC = B - C;
                    var debitHtml = getDebitHtml(B, C);
                    answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\"><p></p><p></p>";
                    answerElementHtml += debitHtml + "<p><number>" + B + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr>";
                    answerElementHtml += "" + getHtmlOfAPlusB(BC, A, result);
                    answerElementHtml += "</answer-option>";
                }
                else if (bDigits === acDigits || acDigits === 0) {
                    doneAPlusCSubstractB();
                }
            }
            answerElementHtml += "</div>";
            _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
        };
        _this.fillElementArrayOfAPlusBThenSubtractC = function (has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets) {
            if (withBrackets === void 0) { withBrackets = false; }
            var _a = _this, getIntegerRandom = _a.getIntegerRandom, getDebitHtml = _a.getDebitHtml, getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
            var A, B, C;
            if (withBrackets) {
                var bRandom = getIntegerRandom(0, 99);
                if (has) {
                    var bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
                    var bDigits_1 = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 8);
                    B = 10 * bTens + bDigits_1;
                    C = _this.getSubtractorWithDebitMinus(B);
                    A = _this.getAddendWithCarry(B - C);
                }
                else {
                    var bTens = getIntegerRandom(2, !bRandom ? 10 : 9);
                    var bDigits_2 = !bRandom ? 0 : getIntegerRandom(bRandom > 5 ? 5 : 1, 9);
                    B = 10 * bTens + bDigits_2;
                    C = _this.getSubtractorWithoutDebitMinus(B);
                    A = _this.getAddendWithoutCarry(B - C);
                }
            }
            else {
                if (has) {
                    var aRandom = getIntegerRandom(0, 99);
                    var aTens = getIntegerRandom(0, 9);
                    var aDigits_3 = getIntegerRandom(aRandom > 5 ? 5 : 1, 9);
                    A = 10 * aTens + aDigits_3;
                    B = _this.getAddendWithCarry(A);
                    C =
                        aRandom > 30
                            ? _this.getSubtractorWithDebitMinus(A + B)
                            : _this.getSubtractorWithoutDebitMinus(A + B);
                }
                else {
                    var cRandom = getIntegerRandom(0, 99);
                    var cTens = getIntegerRandom(2, 10);
                    if (!cRandom) {
                        C = 10 * cTens;
                        A = 10 * getIntegerRandom(1, cTens);
                    }
                    else {
                        var cDigits_1 = getIntegerRandom(cRandom > 5 ? 5 : 1, 9);
                        C = 10 * Math.min(9, cTens) + cDigits_1;
                        A = 10 * getIntegerRandom(1, cTens) + getIntegerRandom(0, cDigits_1);
                    }
                    B = C - A;
                }
            }
            var result = A + B - C;
            var commonHtml = withBrackets
                ? A + "<i> </i>+<i> </i>(" + B + "<i> </i>-<i> </i>" + C + ")<i> </i>=<i> </i>"
                : A + "<i> </i>+<i> </i>" + B + "<i> </i>-<i> </i>" + C + "<i> </i>=<i> </i>";
            var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
            var answerElementHtml = "<p>" + commonHtml + result + "</p>";
            if (onlyMentalArithmetic) {
                _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
                return;
            }
            var AB = A + B;
            var charsStr = (AB.toString().length + 1).toString();
            answerElementHtml += "<div edu-flex=\"8\">";
            var aDigits = A % 10;
            var bDigits = B % 10;
            var cDigits = C % 10;
            var aLastTowDigits = A % 100;
            var bLastTowDigits = B % 100;
            function doneASubstractCPlusB() {
                var AC = A - C;
                var debitHtml = getDebitHtml(A, C);
                var acDigits = AC % 10;
                var bDigits = B % 10;
                var acLastTowDigits = AC % 100;
                var bLastTowDigits = B % 100;
                var tensCarryHtml = acDigits + bDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml = acLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtml + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr>";
                answerElementHtml += "<p><number>" + AC + "</number></p><p><operator>+</operator><number>" + B + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += "</answer-option>";
            }
            function doneAPlusBSubstractC(twoOption) {
                if (twoOption === void 0) { twoOption = false; }
                var debitHtmlABSubstractC = getDebitHtml(AB, C);
                if (twoOption) {
                    answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                    answerElementHtml += "<p></p>" + getHtmlOfAPlusB(A, B, AB);
                    answerElementHtml += '<hr class="step"/><p></p>';
                    answerElementHtml += debitHtmlABSubstractC + "<p><number>" + AB + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + result + "</number></p>";
                    answerElementHtml += "</answer-option>";
                }
                var tensCarryHtml = aDigits + bDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml = aLastTowDigits + bLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += "<p><number>" + A + "</number></p><p><operator>+</operator><number>" + B + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr>";
                answerElementHtml += debitHtmlABSubstractC + "<p><number>" + AB + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += "</answer-option>";
            }
            function doneBSubstractCThenPlusA(twoOption) {
                if (twoOption === void 0) { twoOption = false; }
                var BC = B - C;
                var debitHtml = getDebitHtml(B, C);
                var bcDigits = BC % 10;
                var cDigits = C % 10;
                var bcLastTowDigits = BC % 100;
                var cLastTowDigits = C % 100;
                var tensCarryHtml = bcDigits + cDigits > 9 ? '<carry edu-digit="tens">1</carry>' : '';
                var hundredsCarryHtml = bcLastTowDigits + cLastTowDigits > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
                if (twoOption) {
                    answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                    answerElementHtml += debitHtml + "<p><number>" + B + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr><p><number>" + BC + "</number></p>";
                    answerElementHtml += '<hr class="step"/><p></p>';
                    answerElementHtml += "<p><number>" + BC + "</number></p><p><operator>+</operator><number>" + A + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr><p><number>" + result + "</number></p>";
                    answerElementHtml += "</answer-option>";
                }
                answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                answerElementHtml += debitHtml + "<p><number>" + B + "</number></p><p><operator>-</operator><number>" + C + "</number></p><hr>";
                answerElementHtml += "<p><number>" + BC + "</number></p><p><operator>+</operator><number>" + A + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr><p><number>" + result + "</number></p>";
                answerElementHtml += "</answer-option>";
            }
            if (withBrackets) {
                doneBSubstractCThenPlusA();
                if (bDigits !== cDigits) {
                    if (bDigits && A >= C && aDigits === cDigits) {
                        doneASubstractCPlusB();
                    }
                    else if ((aDigits + bDigits) % 10 === 0) {
                        doneAPlusBSubstractC();
                    }
                }
            }
            else {
                doneAPlusBSubstractC(true);
                if (bDigits && A >= C && aDigits === cDigits) {
                    doneASubstractCPlusB();
                }
                else if (aDigits && B >= C && bDigits === cDigits) {
                    doneBSubstractCThenPlusA();
                }
            }
            answerElementHtml += "</div>";
            _this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
        };
        _this.appendReportElements = function (info, questionRowsArray, answerRowsArray) {
            var onlyMentalArithmetic = _this.data.onlyMentalArithmetic;
            var kind = info.kind, catalog = info.catalog;
            var filterResult = _this.exhaustibleArray.filter(function (_a) {
                var kindIndicator = _a.kind;
                return kindIndicator === kind;
            });
            if (filterResult.length) {
                _this.fillExhaustibleList(filterResult[0], info, onlyMentalArithmetic, questionRowsArray, answerRowsArray);
                return;
            }
            switch (catalog) {
                case 'A+B=C':
                    _this.countByArithmetic1(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A-B=C':
                    _this.countByArithmetic2(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A+B=C D-E=F':
                    _this.countByArithmetic3(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A+B+C=D':
                    _this.countByArithmetic4(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A-B-C=D':
                    _this.countByArithmetic5(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A±B±C=D':
                    _this.countByArithmetic6(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A±(B±C)=D':
                    _this.countByArithmetic7(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A×B±C=D':
                    _this.countByArithmetic8(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A±B×C=D':
                    _this.countByArithmetic9(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A×(B±C)=D':
                    _this.countByArithmetic10(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A+B+C=10/20/n':
                    _this.countByArithmetic11(info, questionRowsArray, answerRowsArray);
                    break;
                case 'A+B+C+D+E<br/>=10+n/20+n/n':
                    _this.countByArithmetic12(info, questionRowsArray, answerRowsArray);
                    break;
                default:
                    break;
            }
        };
        _this.exhaustibleArray = [];
        _this.getIntegerRandom = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        _this.fillElementList = function (onlyMentalArithmetic, item, questionElementArray, answerElementArray) {
            var question = onlyMentalArithmetic ? item.question : item.questionFull;
            var answer = onlyMentalArithmetic ? item.answer : item.answerFull;
            _this.fillElementListCore(question, answer, questionElementArray, answerElementArray);
        };
        _this.createTableBodyRow = function (item) {
            var _a = item, kind = _a.kind, catalog = _a.catalog, scope = _a.scope, rows = _a.rows, countPerRow = _a.countPerRow, rowsOccupied = _a.rowsOccupied, rowCountPerPage = _a.rowCountPerPage, independentPagination = _a.independentPagination, textStyle = _a.textStyle;
            var tableBodyElement = _this.tableBodyElement;
            var tr = createElement('tr');
            tableBodyElement.appendChild(tr);
            _this.appendOperationTd(tr, item);
            _this.appendReadonlyTd(tr, catalog);
            _this.appendReadonlyTd(tr, scope);
            _this.appendNumberTd(tr, rows, item, 'rows', 1, null, 1);
            _this.appendCheckboxTdWithoutText(tr, independentPagination, item, 'independentPagination');
            _this.appendTextboxTd(tr, textStyle, item, 'textStyle');
            _this.appendReadonlyTd(tr, countPerRow);
            _this.appendReadonlyTd(tr, rowsOccupied);
            _this.appendReadonlyTd(tr, rowCountPerPage);
        };
        _this.initTableHead = function () {
            _this.appendTableHeadCell({ en: 'Catalog', zh_cn: '大类', zh_tw: '大類' });
            _this.appendTableHeadCell({ en: 'Scope', zh_cn: '范围', zh_tw: '範圍' });
            _this.appendTableHeadCell({ en: 'Rows', zh_cn: '行数', zh_tw: '行數' });
            _this.appendTableHeadCell({
                en: 'Independent Pagination',
                zh_cn: '独立分页',
                zh_tw: '獨立分頁'
            });
            _this.appendTableHeadCell({
                en: 'Text Style',
                zh_cn: '文本样式',
                zh_tw: '文字樣式'
            });
            _this.appendTableHeadCell({
                en: 'Count Per Row',
                zh_cn: '每行题数',
                zh_tw: '每行題數'
            });
            _this.appendTableHeadCell({
                en: 'Item Row Count',
                zh_cn: '题目占行',
                zh_tw: '題目占行'
            });
            _this.appendTableHeadCell({
                en: 'Item Count Per Page',
                zh_cn: '每页题行',
                zh_tw: '每頁題行'
            });
        };
        _this.onPageSizeChanged = function (newPageSize) {
            var _a = _this, isLandscapeRadioArray = _a.isLandscapeRadioArray, data = _a.data;
            switch (newPageSize) {
                case 'A3':
                    isLandscapeRadioArray[0].value = true;
                    data.isLandscape = true;
                    break;
                case 'A4':
                    isLandscapeRadioArray[1].value = true;
                    data.isLandscape = false;
                    break;
                default:
                    return;
            }
        };
        _this.getUsableList = function () {
            var _a = _this, appendUsableItem = _a.appendUsableItem, addCommonItem = _a.addCommonItem, smallRowCountPerPage = _a.smallRowCountPerPage, formatCentile = _a.formatCentile;
            var usableList = [];
            var buttonList = [];
            var catalog;
            var independentPagination = false;
            var textStyle = '';
            var countPerRow = 5;
            var rowCountPerPage = 25;
            var rowsOccupied = formatCentile(smallRowCountPerPage / rowCountPerPage);
            var rows = rowCountPerPage;
            var rowCountPerPageOf10 = 10;
            var rowsOccupiedOf10 = formatCentile(smallRowCountPerPage / rowCountPerPageOf10);
            var rowsOf10 = rowCountPerPageOf10;
            var rowCountPerPageOf8 = 8;
            var rowsOccupiedOf8 = formatCentile(smallRowCountPerPage / rowCountPerPageOf8);
            var rowsOf8 = rowCountPerPageOf8;
            var rowCountPerPageOf6 = 6;
            var rowsOccupiedOf6 = formatCentile(smallRowCountPerPage / rowCountPerPageOf6);
            var rowsOf6 = rowCountPerPageOf6;
            var kindArray = [];
            catalog = 'A+B=C';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '1-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-10',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-20',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf10,
                rowsOccupied: rowsOccupiedOf10,
                rowCountPerPage: rowCountPerPageOf10,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf10,
                rowsOccupied: rowsOccupiedOf10,
                rowCountPerPage: rowCountPerPageOf10,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf10,
                rowsOccupied: rowsOccupiedOf10,
                rowCountPerPage: rowCountPerPageOf10,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A-B=C';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '1-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-10',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-20',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A+B=C D-E=F';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '1-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-5',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-10',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-20',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf8,
                rowsOccupied: rowsOccupiedOf8,
                rowCountPerPage: rowCountPerPageOf8,
                countPerRow: 5,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A+B+C=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A-B-C=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A±B±C=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A±(B±C)=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A×B=C';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '9×9A',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '9×9B',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: countPerRow,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A×B±C=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A±B×C=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100A',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100B',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '0-100C',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A×(B±C)=D';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '9×9',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '20×20',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: '100×100',
                rows: rowsOf6,
                rowsOccupied: rowsOccupiedOf6,
                rowCountPerPage: rowCountPerPageOf6,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A+B+C=10/20/n';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: 'A',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: 'B',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: 4,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            catalog = 'A+B+C+D+E<br/>=10+n/20+n/n';
            buttonList.length = 0;
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: 'A',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: 3,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            addCommonItem({
                kind: '',
                catalog: catalog,
                scope: 'B',
                rows: rows,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage,
                countPerRow: 3,
                independentPagination: independentPagination,
                textStyle: textStyle
            }, kindArray, buttonList);
            appendUsableItem(catalog, buttonList, usableList);
            return usableList;
        };
        _this.initCoreElementsBeforeTable = function () {
            var _a = _this, configCoreElement = _a.configCoreElement, getWrapElement = _a.getWrapElement, idOrClassPrefix = _a.idOrClassPrefix, initTextboxElement = _a.initTextboxElement, initRadioGroupByBooleanOrNumberValue = _a.initRadioGroupByBooleanOrNumberValue;
            var wrapElement;
            wrapElement = getWrapElement({
                en: 'Date (Not Saved)',
                zh_cn: '日期（不存储）',
                zh_tw: '日期（不存儲）'
            });
            wrapElement.id = idOrClassPrefix + "DateWrap";
            _this.initDateElements(wrapElement);
            wrapElement = getWrapElement({
                en: 'Arithmetic and Font Size',
                zh_cn: '算法与字号',
                zh_tw: '算法與字號'
            });
            wrapElement.id = idOrClassPrefix + "ArithmeticAndTextStyleWrap";
            initRadioGroupByBooleanOrNumberValue([
                {
                    value: false,
                    i18nHtml: getI18nInnerHTML({
                        en: 'Normal',
                        zh_cn: '常规',
                        zh_tw: '常規'
                    })
                },
                {
                    value: true,
                    i18nHtml: getI18nInnerHTML({
                        en: 'Mental',
                        zh_cn: '口算',
                        zh_tw: '口算'
                    })
                },
            ], 'onlyMentalArithmetic', _this.onlyMentalArithmeticRadioArray, wrapElement);
            initTextboxElement({
                en: 'Subject:',
                zh_cn: '标题：',
                zh_tw: '標題：'
            }, 'pageSubjectFontSize', _this.pageSubjectFontSizeElement, wrapElement);
            initTextboxElement({
                en: 'Question:',
                zh_cn: '问题：',
                zh_tw: '問題：'
            }, 'questionFontSize', _this.questionFontSizeElement, wrapElement);
            hide(getElementById('brickPageBasePaperSizeOrDirectionWrap'));
        };
        _this.pageSubjectFontSizeElement = createElement('input');
        _this.questionFontSizeElement = createElement('input');
        _this.onlyMentalArithmeticRadioArray = [];
        _this.yearElement = createElement('input');
        _this.monthElement = createElement('input');
        _this.dayElement = createElement('input');
        _this.initDateElements = function (wrapElement) {
            var _a = _this, _b = _a.data, year = _b.year, month = _b.month, day = _b.day, yearElement = _a.yearElement, monthElement = _a.monthElement, dayElement = _a.dayElement;
            var span = createElement('span');
            wrapElement.appendChild(span);
            var yearLabel = createElement('label');
            yearLabel.innerHTML = getI18nInnerHTML({
                en: 'Year:',
                zh_cn: '年：',
                zh_tw: '年：'
            });
            yearElement.value = year;
            yearElement.type = 'text';
            var onYearhanged = function () {
                _this.data.year = parseInt(yearElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            yearElement.onchange = onYearhanged;
            yearElement.onblur = onYearhanged;
            span.appendChild(yearLabel);
            span.appendChild(yearElement);
            var monthLabel = createElement('label');
            monthLabel.innerHTML = getI18nInnerHTML({
                en: 'Month:',
                zh_cn: '月：',
                zh_tw: '月：'
            });
            monthElement.value = _this.data.month;
            monthElement.type = 'text';
            var onMonthChanged = function () {
                _this.data.month = parseInt(monthElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            monthElement.onchange = onMonthChanged;
            monthElement.onblur = onMonthChanged;
            span.appendChild(monthLabel);
            span.appendChild(monthElement);
            var dayLabel = createElement('label');
            dayLabel.innerHTML = getI18nInnerHTML({
                en: 'Day:',
                zh_cn: '日：',
                zh_tw: '日：'
            });
            dayElement.value = _this.data.day;
            dayElement.type = 'text';
            var onDayChanged = function () {
                _this.data.day = parseInt(dayElement.value, 0);
                _this.saveConfigAndBuildIfAllowed();
            };
            dayElement.onchange = onDayChanged;
            dayElement.onblur = onDayChanged;
            span.appendChild(dayLabel);
            span.appendChild(dayElement);
        };
        _this.initCoreElementsAfterTable = function () { };
        _this.initExhaustibleArray();
        _this.initPlusOrSubtractDictionaryNotGreatThan100Array();
        _this.initExhaustibleAMultiplyBInfo();
        return _this;
    }
    BrickCore.prototype.getMaybeCarryTwiceNumbers = function (has) {
        var getIntegerRandom = this.getIntegerRandom;
        var a, b, c, d;
        if (has) {
            if (getIntegerRandom(1, 10) < 3) {
                var digitsOfC = getIntegerRandom(1, 9);
                var tensOfC = getIntegerRandom(0, 7);
                c = 10 * tensOfC + digitsOfC;
                var A_B = 0;
                if (getIntegerRandom(0, 2)) {
                    A_B = 10 * getIntegerRandom(1, 10 - tensOfC) + getIntegerRandom(11 - digitsOfC, 9);
                    if (A_B > 100)
                        A_B -= 10;
                    if (A_B + c > 100)
                        A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
                }
                else {
                    A_B = 100 - c;
                }
                var aMaxDigit = Math.floor(A_B % 10);
                a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) + getIntegerRandom(0, aMaxDigit);
                b = A_B - a;
                if (getIntegerRandom(0, 1)) {
                    a += c;
                    c = a - c;
                    a = a - c;
                }
                if (c === 0)
                    c = 100 - a - b;
            }
            else {
                var digitsOfC = getIntegerRandom(2, 9);
                var tensOfC = getIntegerRandom(0, 7);
                c = 10 * tensOfC + digitsOfC;
                var A_B = 0;
                if (getIntegerRandom(0, 2)) {
                    A_B = 10 * getIntegerRandom(1, 10 - tensOfC) + getIntegerRandom(11 - digitsOfC, 9);
                    if (A_B > 100)
                        A_B -= 10;
                    if (A_B + c > 100)
                        A_B -= 10 * Math.ceil((A_B + c - 100) / 10);
                }
                else {
                    A_B = 100 - c;
                }
                var aMinDigit = (A_B % 10) + 1;
                if (A_B < 10) {
                    a = getIntegerRandom(aMinDigit, 9);
                }
                else {
                    a = 10 * getIntegerRandom(0, Math.floor(A_B / 10)) + getIntegerRandom(aMinDigit, 9);
                    if (a > A_B)
                        a -= 10;
                }
                b = A_B - a;
            }
        }
        else {
            a = 10 * getIntegerRandom(2, 8);
            var randomA = getIntegerRandom(1, 100);
            if (randomA > 1) {
                if (randomA < 6) {
                    a += 8;
                }
                else {
                    a += getIntegerRandom(1, 7);
                }
            }
            if (a > 60) {
                a -= 10 * getIntegerRandom(0, 4);
            }
            var aDigits = a % 10;
            var B_C = 10 * getIntegerRandom(1, 10 - Math.floor(a / 10));
            var randomBC = getIntegerRandom(1, 100);
            if (randomBC > 1) {
                var maxDigitOfBPlusC = 9 - aDigits;
                if (maxDigitOfBPlusC <= 3) {
                    B_C += maxDigitOfBPlusC;
                }
                else if (maxDigitOfBPlusC >= 6) {
                    B_C += getIntegerRandom(6, maxDigitOfBPlusC);
                }
                else {
                    B_C += getIntegerRandom(4, maxDigitOfBPlusC);
                }
            }
            if (a + B_C > 100)
                B_C -= 10;
            var tensOfBPlusC = Math.floor(B_C / 10);
            b = 10 * getIntegerRandom(Math.floor(tensOfBPlusC / 2), tensOfBPlusC);
            var digitOfBPlusC = B_C % 10;
            if (B_C % 10) {
                b += getIntegerRandom(1, Math.min(digitOfBPlusC, Math.floor(digitOfBPlusC / 2) * 1.5));
            }
            c = B_C - b;
        }
        d = a + b + c;
        return { a: a, b: b, c: c, d: d };
    };
    BrickCore.prototype.fillElementArrayOfAPlusB = function (has, min, max, questionElementArray, answerElementArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom, getAddendWithCarry = _a.getAddendWithCarry, getAddendWithoutCarry = _a.getAddendWithoutCarry, getHtmlOfAPlusB = _a.getHtmlOfAPlusB;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic3;
        var A;
        var B;
        if (has) {
            while (true) {
                A = getIntegerRandom(min, max);
                if (A % 10)
                    break;
            }
            B = getAddendWithCarry(A);
        }
        else {
            A = getIntegerRandom(min, max);
            B = getAddendWithoutCarry(A);
        }
        var result = A + B;
        var commonHtml = A + "<i> </i>+<i> </i>" + B + "<i> </i>=<i> </i>";
        var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
        var answerElementHtml = "<p>" + commonHtml + result + "</p>";
        if (!onlyMentalArithmetic) {
            var charsStr = (result.toString().length + 1).toString();
            answerElementHtml += this.questionElementHtmlAppendStart4 + "<answer-option edu-chars=\"" + charsStr + "\"><p></p>" + getHtmlOfAPlusB(A, B, result) + "</answer-option></div>";
        }
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    BrickCore.prototype.getHtmlOfAPlusB = function (A, B, result) {
        var tensCarryHtml = (A % 10) + (B % 10) > 9 ? '<carry edu-digit="tens">1</carry>' : '';
        var hundredsCarryHtml = (A % 100) + (B % 100) > 99 ? '<carry edu-digit="hundreds">1</carry>' : '';
        return "<p><number>" + A + "</number></p><p><operator>+</operator><number>" + B + "</number>" + hundredsCarryHtml + tensCarryHtml + "</p><hr><p><number>" + result + "</number></p>";
    };
    BrickCore.prototype.getHtmlOfAMultiplyB = function (A, B, result) {
        var getSimleHtmlOfAMultiplyB = this.getSimleHtmlOfAMultiplyB;
        if (B < 10) {
            return getSimleHtmlOfAMultiplyB(A, B, result);
        }
        if (A < 10) {
            return getSimleHtmlOfAMultiplyB(B, A, result);
        }
        var isOnlyFirstIsNotZero = this.isOnlyFirstIsNotZero;
        if (isOnlyFirstIsNotZero(B)) {
            return getSimleHtmlOfAMultiplyB(A, B, result);
        }
        if (isOnlyFirstIsNotZero(A)) {
            return getSimleHtmlOfAMultiplyB(B, A, result);
        }
        var aLength = A.toString().length;
        var bStr = B.toString();
        var bLength = bStr.length;
        if (aLength < bLength) {
            A += B;
            B = A - B;
            A = A - B;
            bStr = B.toString();
            bLength = bStr.length;
        }
        var html = "<p><number>" + A + "</number></p><p><operator>\u00D7</operator><number>" + B + "</number></p><hr>";
        var numberArray = [];
        var carryArray = [];
        var resultLength = result.toString().length;
        for (var i = 0; i < resultLength; ++i) {
            carryArray.push(0);
            numberArray.push(0);
        }
        for (var i = bLength; i > 0; --i) {
            html += "<p edu-right-char=\"" + (bLength - i) + "\">";
            var product = A * parseInt(bStr.substring(i - 1, i), 0);
            html += "<number>" + product + "</number>";
            var productChars = product.toString().split('');
            var productCharCount = productChars.length;
            for (var charLoop = productCharCount; charLoop > 0; --charLoop) {
                var char = productChars[charLoop - 1];
                var arrayIndex = resultLength - 1 - (bLength - i) - (productCharCount - charLoop);
                console.log(JSON.stringify({
                    product: product,
                    charLoop: charLoop,
                    char: char,
                    resultLength: resultLength,
                    i: i,
                    arrayIndex: arrayIndex
                }));
                numberArray.splice(arrayIndex, 1, numberArray[arrayIndex] + parseInt(char, 0));
            }
            if (i !== 1)
                html += "</p>";
        }
        console.log(A, B, result, JSON.stringify(numberArray));
        for (var i = resultLength - 1; i > 0; --i) {
            var arrayIndex = i;
            var numeral = numberArray[arrayIndex];
            if (numeral > 9) {
                var carry = Math.floor(numeral / 10);
                var previousIndex = arrayIndex - 1;
                carryArray.splice(previousIndex, 1, carry);
                numberArray.splice(previousIndex, 1, numberArray[previousIndex] + carry);
            }
        }
        console.log(JSON.stringify(numberArray), JSON.stringify(carryArray));
        var eduDigitArray = this.eduDigitArray;
        for (var i = 0; i < resultLength; ++i) {
            var carryNumber = carryArray[i];
            if (carryNumber > 0) {
                html += "<carry edu-digit=\"" + eduDigitArray[resultLength - 2 - i] + "\">" + carryNumber + "</carry>";
            }
        }
        html += "</p>";
        html += "<hr><p><number>" + result + "</number></p>";
        return html;
    };
    BrickCore.prototype.fillElementArrayOfASubtractB = function (has, min, max, questionElementArray, answerElementArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getDebitHtml = _a.getDebitHtml, getIntegerRandom = _a.getIntegerRandom, getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus, getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
        var A;
        var B;
        if (has) {
            while (true) {
                A = getIntegerRandom(min, max);
                if (A % 10 < 9)
                    break;
            }
            B = getSubtractorWithDebitMinus(A);
        }
        else {
            A = getIntegerRandom(min, max);
            B = getSubtractorWithoutDebitMinus(A);
        }
        var charsStr = (A.toString().length + 1).toString();
        var result = A - B;
        var commonHtml = A + " - " + B + " = ";
        var questionElementHtml = "<p>" + commonHtml.replace(/ /g, '<i> </i>') + "</p>" + questionElementHtmlAppend;
        var answerElementHtml = "<p>" + commonHtml.replace(/ /g, '<i> </i>') + result + "</p>";
        if (!onlyMentalArithmetic) {
            var debitHtml = getDebitHtml(A, B);
            answerElementHtml += this.questionElementHtmlAppendStart4 + "<answer-option edu-chars=\"" + charsStr + "\">" + debitHtml + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + result + "</number></p></answer-option></div>";
        }
        this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
    };
    BrickCore.prototype.getDebitHtml = function (A, B) {
        var aDigits = A % 10;
        var bDigits = B % 10;
        var tensNeedDebit = aDigits < bDigits;
        var aHundreds = A % 100;
        var hundredsNeedDebit = aHundreds < B % 100;
        var aThousands = A % 1000;
        var thousandsNeedDebit = aThousands < B % 1000;
        if (!tensNeedDebit && !hundredsNeedDebit)
            return '';
        var digitDebitHtml = tensNeedDebit
            ? "<debit edu-digit=\"digit\"><debit-number>" + (10 + aDigits) + "</debit-number></debit>"
            : '';
        var tensDebitHtml = tensNeedDebit || hundredsNeedDebit
            ? "<debit edu-digit=\"tens\"><debit-number>" + ((hundredsNeedDebit ? 10 : 0) + Math.floor(aHundreds / 10) - (tensNeedDebit ? 1 : 0)) + "</debit-number>" + (tensNeedDebit ? '<debit-circle>·</debit-circle>' : '') + "</debit>"
            : '';
        var hundredsDebitHtml = hundredsNeedDebit
            ? "<debit edu-digit=\"hundreds\"><debit-number>" + ((thousandsNeedDebit ? 10 : 0) + Math.floor((A % 1000) / 100) - (hundredsNeedDebit ? 1 : 0)) + "</debit-number><debit-circle>\u00B7</debit-circle></debit>"
            : '';
        return "<p class=\"debit\">&nbsp;" + hundredsDebitHtml + tensDebitHtml + digitDebitHtml + "</p>";
    };
    BrickCore.prototype.getDebitHtmlOfASubstractB = function (A, B, aSubstractB) {
        return this.getDebitHtml(A, B) + "<p><number>" + A + "</number></p><p><operator>-</operator><number>" + B + "</number></p><hr><p><number>" + aSubstractB + "</number></p>";
    };
    BrickCore.prototype.countByArithmetic1 = function (info, questionRowsArray, answerRowsArray) {
        var getIntegerRandom = this.getIntegerRandom;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        var min = 11;
        var max = 100;
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
                this.fillElementArrayOfAPlusB(has, min, max, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic2 = function (info, questionRowsArray, answerRowsArray) {
        var getIntegerRandom = this.getIntegerRandom;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        var min = 11;
        var max = 100;
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
                this.fillElementArrayOfASubtractB(has, min, max, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic3 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom, getAddendWithCarry = _a.getAddendWithCarry, getAddendWithoutCarry = _a.getAddendWithoutCarry, getSubtractorWithDebitMinus = _a.getSubtractorWithDebitMinus, getSubtractorWithoutDebitMinus = _a.getSubtractorWithoutDebitMinus;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var questionElementHtmlAppendOfAddition = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic4;
        var questionElementHtmlAppendOfSubstraction = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic4;
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        var min = 11;
        var max = 100;
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 1);
                if (getIntegerRandom(0, 1)) {
                    this.fillElementArrayOfAPlusB(has, min, max, questionElementArray, answerElementArray);
                }
                else {
                    this.fillElementArrayOfASubtractB(has, min, max, questionElementArray, answerElementArray);
                }
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic4 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfAdditionWhenNotMentalArithmetic6;
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
                this.fillElementArrayOfAPlusBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic5 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
                this.fillElementArrayOfASubtractBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic6 = function (info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, false);
    };
    BrickCore.prototype.countByArithmetic6Or7 = function (info, questionRowsArray, answerRowsArray, withBrackets) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        var scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
                var operatorRandom = getIntegerRandom(0, 3);
                switch (operatorRandom) {
                    case 0:
                        this.fillElementArrayOfAPlusBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        break;
                    case 1:
                        this.fillElementArrayOfASubtractBThenC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        break;
                    default:
                        if (operatorRandom === 2) {
                            this.fillElementArrayOfAPlusBThenSubtractC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        }
                        else {
                            this.fillElementArrayOfASubtractBThenPlusC(has, questionElementHtmlAppend, onlyMentalArithmetic, questionElementArray, answerElementArray, withBrackets);
                        }
                        break;
                }
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic7 = function (info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic6Or7(info, questionRowsArray, answerRowsArray, true);
    };
    BrickCore.prototype.countByArithmetic8 = function (info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, false);
    };
    BrickCore.prototype.countByArithmetic8Or9 = function (info, questionRowsArray, answerRowsArray, switchOrder) {
        var _a, _b, _c, _d;
        var _e = this, onlyMentalArithmetic = _e.data.onlyMentalArithmetic, getIntegerRandom = _e.getIntegerRandom, getAddendWithCarry = _e.getAddendWithCarry, getAddendWithoutCarry = _e.getAddendWithoutCarry, getSubtractorWithDebitMinus = _e.getSubtractorWithDebitMinus, getSubtractorWithoutDebitMinus = _e.getSubtractorWithoutDebitMinus;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var _f = this.exhaustibleAMultiplyBInfo, aMultiplyBMaybeCarryArray = _f.aMultiplyBMaybeCarryArray, aMultiplyBMaybeNotCarryArray = _f.aMultiplyBMaybeNotCarryArray, aMultiplyBMaybeDebitMinusArray = _f.aMultiplyBMaybeDebitMinusArray, aMultiplyBMaybeNotDebitMinusArray = _f.aMultiplyBMaybeNotDebitMinusArray, aMultiplyBMaybeCarryMaxIndex = _f.aMultiplyBMaybeCarryMaxIndex, aMultiplyBMaybeNotCarryMaxIndex = _f.aMultiplyBMaybeNotCarryMaxIndex, aMultiplyBMaybeDebitMinusMaxIndex = _f.aMultiplyBMaybeDebitMinusMaxIndex, aMultiplyBMaybeNotDebitMinusMaxIndex = _f.aMultiplyBMaybeNotDebitMinusMaxIndex;
        var mustHasnot = scope === '0-100A';
        var mustHas = scope === '0-100B';
        var maybeHas = scope === '0-100C';
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var has = mustHasnot ? false : mustHas || (maybeHas && getIntegerRandom(1, 10) > 3);
                var isPlus = getIntegerRandom(0, 1) === 1;
                var operator = isPlus ? '+' : '-';
                var A = void 0, B = void 0, aMultiplyB = void 0;
                var C = void 0;
                switch ((isPlus ? 0 : 2) + (has ? 0 : 1)) {
                    case 0:
                        (_a = aMultiplyBMaybeCarryArray[getIntegerRandom(0, aMultiplyBMaybeCarryMaxIndex)], A = _a.A, B = _a.B, aMultiplyB = _a.aMultiplyB);
                        C = getAddendWithCarry(aMultiplyB);
                        break;
                    case 1:
                        (_b = aMultiplyBMaybeNotCarryArray[getIntegerRandom(0, aMultiplyBMaybeNotCarryMaxIndex)], A = _b.A, B = _b.B, aMultiplyB = _b.aMultiplyB);
                        C = getAddendWithoutCarry(aMultiplyB);
                        break;
                    case 2:
                        (_c = aMultiplyBMaybeDebitMinusArray[getIntegerRandom(0, aMultiplyBMaybeDebitMinusMaxIndex)], A = _c.A, B = _c.B, aMultiplyB = _c.aMultiplyB);
                        C = getSubtractorWithDebitMinus(aMultiplyB);
                        if (switchOrder)
                            C += aMultiplyB;
                        break;
                    case 3:
                    default:
                        (_d = aMultiplyBMaybeNotDebitMinusArray[getIntegerRandom(0, aMultiplyBMaybeNotDebitMinusMaxIndex)], A = _d.A, B = _d.B, aMultiplyB = _d.aMultiplyB);
                        C = getSubtractorWithoutDebitMinus(aMultiplyB);
                        if (switchOrder)
                            C += aMultiplyB;
                        break;
                }
                var result = switchOrder ? A * B * (isPlus ? 1 : -1) + C : A * B + C * (isPlus ? 1 : -1);
                var charsStr = ((isPlus ? result : aMultiplyB).toString().length + 1).toString();
                var commonHtml = switchOrder
                    ? "<i> </i>" + C + "<i> </i>" + operator + "<i> </i>" + A + "<i> </i>\u00D7<i> </i>" + B + "<i> </i>=<i> </i>"
                    : A + "<i> </i>\u00D7<i> </i>" + B + "<i> </i>" + operator + "<i> </i>" + C + "<i> </i>=<i> </i>";
                var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
                var answerElementHtml = "<p>" + commonHtml + result + "</p>";
                if (!onlyMentalArithmetic) {
                    answerElementHtml += "<div edu-flex=\"8\">";
                    answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                    answerElementHtml += this.getHtmlOfAMultiplyB(A, B, aMultiplyB);
                    answerElementHtml += '<hr class="step"/>';
                    if (isPlus) {
                        answerElementHtml += this.getHtmlOfAPlusB(aMultiplyB, C, result);
                    }
                    else {
                        answerElementHtml += switchOrder
                            ? this.getDebitHtmlOfASubstractB(C, aMultiplyB, result)
                            : this.getDebitHtmlOfASubstractB(aMultiplyB, C, result);
                    }
                    answerElementHtml += '</answer-option>';
                    answerElementHtml += "</div>";
                }
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic9 = function (info, questionRowsArray, answerRowsArray) {
        this.countByArithmetic8Or9(info, questionRowsArray, answerRowsArray, true);
    };
    BrickCore.prototype.countByArithmetic10 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var questionElementHtmlAppend = onlyMentalArithmetic
            ? ''
            : this.questionElementHtmlAppendOfSubstractionWhenNotMentalArithmetic8;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, independentPagination = info.independentPagination, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var minMultiplier = 1;
        var maxMultiplier = 9;
        var fontSizeCss = '';
        var flexStr = '8';
        switch (scope) {
            case '20×20':
                minMultiplier = 11;
                maxMultiplier = 20;
                fontSizeCss = ' style="font-size:0.9em;"';
                flexStr = '10';
                break;
            case '100×100':
                minMultiplier = 11;
                maxMultiplier = 100;
                fontSizeCss = ' style="font-size:0.8em;"';
                flexStr = '10';
                break;
            case 'A':
            default:
                break;
        }
        var questionRows = [];
        var answerRows = [];
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var A = getIntegerRandom(minMultiplier, maxMultiplier);
                var B_C = getIntegerRandom(1, maxMultiplier);
                var isPlus = B_C < 3 || getIntegerRandom(1, 2) < 2;
                var B = void 0;
                var C = void 0;
                if (isPlus) {
                    B = getIntegerRandom(1, B_C);
                    C = B_C - B;
                }
                else {
                    C = getIntegerRandom(1, 100 - B_C);
                    B = C + B_C;
                }
                var result = A * (B + C * (isPlus ? 1 : -1));
                var charsStr = ((isPlus ? result : Math.max(result, B)).toString().length + 1).toString();
                var commonHtml = A + "<i> </i>\u00D7<i> </i>(" + B + "<i> </i>" + (isPlus ? '+' : '-') + "<i> </i>" + C + ")<i> </i>=<i> </i>";
                var questionElementHtml = "<p>" + commonHtml + "</p>" + questionElementHtmlAppend;
                var answerElementHtml = "<p" + fontSizeCss + ">" + commonHtml + result + "</p>";
                if (!onlyMentalArithmetic) {
                    answerElementHtml += "<div edu-flex=\"" + flexStr + "\">";
                    answerElementHtml += "<answer-option edu-chars=\"" + charsStr + "\">";
                    if (isPlus) {
                        answerElementHtml += this.getHtmlOfAPlusB(B, C, B_C);
                    }
                    else {
                        answerElementHtml += this.getDebitHtmlOfASubstractB(B, C, B_C);
                    }
                    if (A < 10) {
                        answerElementHtml += "<p><operator>\u00D7</operator><number>" + A + "</number></p><hr><p><number>" + result + "</number></p>";
                    }
                    else {
                        answerElementHtml += '<hr class="step"/>';
                        answerElementHtml += this.getHtmlOfAMultiplyB(B_C, A, result);
                    }
                    answerElementHtml += '</answer-option>';
                    answerElementHtml += "</div>";
                }
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic11 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, independentPagination = info.independentPagination, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var B = void 0;
                var C = void 0;
                var questionElementHtml = void 0;
                var answerElementHtml = void 0;
                var A = getIntegerRandom(1, 9);
                while (true) {
                    B = getIntegerRandom(1, 9);
                    if ((A + B) % 10)
                        break;
                }
                var A_B = A + B;
                if (getIntegerRandom(1, 10) < 2) {
                    while (true) {
                        C = getIntegerRandom(1, 9);
                        if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10)
                            break;
                    }
                }
                else {
                    C = 10 - ((A + B) % 10);
                }
                answerElementHtml = (A + B + C).toString();
                var html = [A, B, C].join(' + ').concat(' = ');
                questionElementHtml = "<p>" + html.replace(/ /g, '<i> </i>') + "</p>";
                answerElementHtml = "<p>" + html.replace(/ /g, '<i> </i>') + answerElementHtml + "</p>";
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.countByArithmetic12 = function (info, questionRowsArray, answerRowsArray) {
        var _a = this, onlyMentalArithmetic = _a.data.onlyMentalArithmetic, getIntegerRandom = _a.getIntegerRandom;
        var kind = info.kind, catalog = info.catalog, scope = info.scope, rows = info.rows, independentPagination = info.independentPagination, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        for (var rowIndex = 0; rowIndex < rows; ++rowIndex) {
            var questionElementArray = [];
            var answerElementArray = [];
            for (var questionIndex = 0; questionIndex < countPerRow; ++questionIndex) {
                var B = void 0;
                var C = void 0;
                var D = void 0;
                var E = void 0;
                var F = void 0;
                var A_B = void 0;
                var A_B_C = void 0;
                var A_B_C_D = void 0;
                var questionElementHtml = void 0;
                var answerElementHtml = void 0;
                var A = getIntegerRandom(1, 9);
                if (scope === 'B' && getIntegerRandom(1, 10) < 2) {
                    while (true) {
                        B = getIntegerRandom(1, 9);
                        if ((A + B) % 10)
                            break;
                    }
                    A_B = A + B;
                    while (true) {
                        C = getIntegerRandom(1, 9);
                        if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10)
                            break;
                    }
                    A_B_C = A_B + C;
                    while (true) {
                        D = getIntegerRandom(1, 9);
                        if ((A_B_C + D) % 10 &&
                            (A + D) % 10 &&
                            (B + D) % 10 &&
                            (C + D) % 10 &&
                            (A_B + D) % 10) {
                            break;
                        }
                    }
                    A_B_C_D = A_B_C + D;
                    while (true) {
                        E = getIntegerRandom(1, 9);
                        if ((A_B_C_D + E) % 10)
                            break;
                    }
                    answerElementHtml = '×';
                }
                else {
                    switch (getIntegerRandom(1, 4)) {
                        case 1:
                            B = 10 - A;
                            C = getIntegerRandom(1, 9);
                            D = getIntegerRandom(1, 9);
                            E = getIntegerRandom(1, 9);
                            answerElementHtml = [A, B].sort(function (prev, next) { return prev - next; }).join(' ');
                            break;
                        case 2:
                            while (true) {
                                B = getIntegerRandom(1, 9);
                                if ((A + B) % 10)
                                    break;
                            }
                            C = 10 - ((A + B) % 10);
                            D = getIntegerRandom(1, 9);
                            E = getIntegerRandom(1, 9);
                            answerElementHtml = [A, B, C].sort(function (prev, next) { return prev - next; }).join(' ');
                            break;
                        case 3:
                            while (true) {
                                B = getIntegerRandom(1, 9);
                                if ((A + B) % 10)
                                    break;
                            }
                            A_B = A + B;
                            while (true) {
                                C = getIntegerRandom(1, 9);
                                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10)
                                    break;
                            }
                            D = 10 - ((A + B + C) % 10);
                            E = getIntegerRandom(1, 9);
                            answerElementHtml = [A, B, C, D].sort(function (prev, next) { return prev - next; }).join(' ');
                            break;
                        case 4:
                        default:
                            while (true) {
                                B = getIntegerRandom(1, 9);
                                if ((A + B) % 10)
                                    break;
                            }
                            A_B = A + B;
                            while (true) {
                                C = getIntegerRandom(1, 9);
                                if ((A_B + C) % 10 && (A + C) % 10 && (B + C) % 10)
                                    break;
                            }
                            A_B_C = A_B + C;
                            while (true) {
                                D = getIntegerRandom(1, 9);
                                if ((A_B_C + D) % 10 &&
                                    (A + D) % 10 &&
                                    (B + D) % 10 &&
                                    (C + D) % 10 &&
                                    (A_B + D) % 10) {
                                    break;
                                }
                            }
                            E = 10 - ((A + B + C + D) % 10);
                            answerElementHtml = [A, B, C, D, E].sort(function (prev, next) { return prev - next; }).join(' ');
                            break;
                    }
                }
                questionElementHtml = '10n: '.concat([A, B, C, D, E].sort(function (prev, next) { return prev - next; }).join(' '));
                answerElementHtml = questionElementHtml + " => " + answerElementHtml;
                this.fillElementListCore(questionElementHtml, answerElementHtml, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.fillElementListCore = function (question, answer, questionElementArray, answerElementArray) {
        var questionElement = createElement('cell');
        questionElement.innerHTML = question;
        questionElementArray.push(questionElement);
        var answerElement = createElement('cell');
        answerElement.innerHTML = answer;
        answerElementArray.push(answerElement);
        var withoutOuterLine = answer.indexOf('<div edu-flex=') === -1;
        if (withoutOuterLine) {
            answerElement.setAttribute('edu-without-outer-line', '');
        }
    };
    BrickCore.prototype.fillExhaustibleList = function (exhaustibleItem, info, onlyMentalArithmetic, questionRowsArray, answerRowsArray) {
        var getIntegerRandom = this.getIntegerRandom;
        var catalog = info.catalog, rows = info.rows, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage, textStyle = info.textStyle;
        var questionCount = countPerRow * rows;
        var list = exhaustibleItem.list, countPerSet = exhaustibleItem.countPerSet;
        var listJson = JSON.stringify(list);
        var itemList = [];
        var listClone;
        var fullSetCount = Math.floor(questionCount / countPerSet);
        for (var fullSetLoop = 0; fullSetLoop < fullSetCount; ++fullSetLoop) {
            listClone = JSON.parse(listJson);
            for (var itemLoop = countPerSet; itemLoop > 0; --itemLoop) {
                var currentIndex = getIntegerRandom(1, itemLoop) - 1;
                itemList.push(listClone.splice(currentIndex, 1)[0]);
            }
        }
        var remainingCount = questionCount - countPerSet * fullSetCount;
        if (remainingCount) {
            listClone = JSON.parse(listJson);
            var listRemainingCount = listClone.length;
            for (var itemLoop = remainingCount; itemLoop > 0; --itemLoop) {
                var currentIndex = getIntegerRandom(1, listRemainingCount--) - 1;
                itemList.push(listClone.splice(currentIndex, 1)[0]);
            }
        }
        var rowCountPerPageStr = rowCountPerPage.toString();
        var questionRows = [];
        var answerRows = [];
        var questionRowCount = questionCount / countPerRow;
        for (var index = 0; index < questionRowCount; ++index) {
            var offset = countPerRow * index;
            var questionElementArray = [];
            var answerElementArray = [];
            for (var subIndex = 0; subIndex < countPerRow; ++subIndex) {
                var item = itemList[subIndex + offset];
                this.fillElementList(onlyMentalArithmetic, item, questionElementArray, answerElementArray);
            }
            this.fillRowsArray(rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows);
        }
        questionRowsArray.push({ rowsOccupied: rowsOccupied, rows: questionRows });
        answerRowsArray.push({ rowsOccupied: rowsOccupied, rows: answerRows });
    };
    BrickCore.prototype.fillRowsArray = function (rowCountPerPageStr, textStyle, questionElementArray, questionRows, answerElementArray, answerRows) {
        if (this.data.onlyMentalArithmetic) {
            rowCountPerPageStr = this.defaultRowCountPerPage.toString();
        }
        var questionRow = createElement('row');
        questionRow.setAttribute('row-count-per-page', rowCountPerPageStr);
        questionElementArray.forEach(function (cell) { return questionRow.appendChild(cell); });
        questionRows.push(questionRow);
        var answerRow = createElement('row');
        answerRow.setAttribute('row-count-per-page', rowCountPerPageStr);
        answerElementArray.forEach(function (cell) { return answerRow.appendChild(cell); });
        answerRows.push(answerRow);
        if (textStyle.length) {
            questionRow.setAttribute('style', textStyle);
            answerRow.setAttribute('style', textStyle);
        }
    };
    BrickCore.prototype.addCommonItem = function (info, kindArray, buttonList) {
        var catalog = info.catalog, scope = info.scope, rows = info.rows, independentPagination = info.independentPagination, textStyle = info.textStyle, countPerRow = info.countPerRow, rowsOccupied = info.rowsOccupied, rowCountPerPage = info.rowCountPerPage;
        var kind = catalog + "_" + scope;
        kindArray.push(kind);
        buttonList.push({
            nameI18n: getI18nableWithSameContent(scope),
            info: {
                kind: kind,
                catalog: catalog,
                scope: scope,
                rows: rows,
                independentPagination: independentPagination,
                textStyle: textStyle,
                countPerRow: countPerRow,
                rowsOccupied: rowsOccupied,
                rowCountPerPage: rowCountPerPage
            }
        });
    };
    BrickCore.prototype.appendUsableItem = function (label, buttonList, usableList) {
        var strongI18n = getI18nableWithSameContent(label);
        usableList.push({
            strongI18n: strongI18n,
            buttonList: JSON.parse(JSON.stringify(buttonList))
        });
        return strongI18n;
    };
    return BrickCore;
}(BrickWithTableBase));
var brickCore = new BrickCore();
window.brickCore = brickCore;

__instantiate("2", false);

