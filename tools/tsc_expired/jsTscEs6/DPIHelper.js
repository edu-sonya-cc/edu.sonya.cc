export class DPIHelper {
  constructor() {
    this.dpiArray = [];
    this.dpiX = 0;
    this.mmToPxScale = 0;
    this.pxToMmScale = 0;
    this.convertPxToMm = (px) => px / this.dpiX * 25.4;
    this.convertMmToPx = (mm) => mm / 25.4 * this.dpiX;
    this.getMmToPxScale = () => this.mmToPxScale;
    this.getPxToMmScale = () => this.pxToMmScale;
    // https://blog.csdn.net/baidu_25343343/article/details/84950269
    const screen = window.screen;
    const { dpiArray } = this;
    if (screen.deviceXDPI) {
      dpiArray.push(screen.deviceXDPI);
      dpiArray.push(screen.deviceYDPI);
    } else {
      const div = document.createElement("div");
      div.style.cssText =
        "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
      document.body.appendChild(div);
      dpiArray.push(parseInt(div.offsetWidth.toString()));
      dpiArray.push(parseInt(div.offsetHeight.toString()));
      document.body.removeChild(div);
    }
    const dpiX = dpiArray[0];
    this.dpiX = dpiX;
    this.mmToPxScale = dpiX / 25.4;
    this.pxToMmScale = 25.4 / dpiX;
  }
}
