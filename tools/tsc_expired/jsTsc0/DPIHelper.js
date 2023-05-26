var DPIHelper = /** @class */ (function () {
  function DPIHelper() {
    var _this = this;
    this.dpiArray = [];
    this.dpiX = 0;
    this.mmToPxScale = 0;
    this.pxToMmScale = 0;
    this.convertPxToMm = function (px) {
      return px / _this.dpiX * 25.4;
    };
    this.convertMmToPx = function (mm) {
      return mm / 25.4 * _this.dpiX;
    };
    this.getMmToPxScale = function () {
      return _this.mmToPxScale;
    };
    this.getPxToMmScale = function () {
      return _this.pxToMmScale;
    };
    // https://blog.csdn.net/baidu_25343343/article/details/84950269
    var screen = window.screen;
    var dpiArray = this.dpiArray;
    if (screen.deviceXDPI) {
      dpiArray.push(screen.deviceXDPI);
      dpiArray.push(screen.deviceYDPI);
    } else {
      var div = document.createElement("div");
      div.style.cssText =
        "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(div);
      dpiArray.push(parseInt(div.offsetWidth.toString()));
      dpiArray.push(parseInt(div.offsetHeight.toString()));
      document.body.removeChild(div);
    }
    var dpiX = dpiArray[0];
    this.dpiX = dpiX;
    this.mmToPxScale = dpiX / 25.4;
    this.pxToMmScale = 25.4 / dpiX;
  }
  return DPIHelper;
}());
export { DPIHelper };
