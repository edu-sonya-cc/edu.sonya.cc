export class DPIHelper {
  private dpiArray: Array<number> = [];
  private dpiX = 0;
  private mmToPxScale = 0;
  private pxToMmScale = 0;
  constructor() {
    // https://blog.csdn.net/baidu_25343343/article/details/84950269
    const screen =
      (window.screen as unknown as { deviceXDPI?: number; deviceYDPI: number });

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

  public convertPxToMm = (px: number) => px / this.dpiX * 25.4;

  public convertMmToPx = (mm: number) => mm / 25.4 * this.dpiX;

  public getMmToPxScale = () => this.mmToPxScale;

  public getPxToMmScale = () => this.pxToMmScale;
}
