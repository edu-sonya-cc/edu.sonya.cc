export declare class DPIHelper {
  private dpiArray;
  private dpiX;
  private mmToPxScale;
  private pxToMmScale;
  constructor();
  convertPxToMm: (px: number) => number;
  convertMmToPx: (mm: number) => number;
  getMmToPxScale: () => number;
  getPxToMmScale: () => number;
}
