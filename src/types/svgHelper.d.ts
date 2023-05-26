declare namespace svgSpace.edu.sonya.cc {
  type ViewBoxType = {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  type RotateType = "auto" | "auto-reverse" | number;
  type SvgTextInfo = {
    content: I18nable | string;
    x: number;
    y: number;
    rotate: RotateType;
  };
  type DivOrSvgElementWithSize = (HTMLDivElement | SVGElement) & {
    widthMm: number;
    heightMm: number;
  };
  type WrapElementWithInfo = {
    element: DivOrSvgElementWithSize;
    alone?: boolean;
    linkToPreview?: boolean;
  };
  class SvgHelper {
    static createSvg: () => SVGElement;
    static createSvgPath: () => SVGPathElement;
    static appendLine(
      svg: SVGElement,
      STYLE: string,
      x1: number,
      x2: number,
      y1: number,
      y2: number,
      viewBox: ViewBoxType | null,
    ): void;
    static appendCircle(
      svg: SVGElement,
      STYLE: string,
      cx: number,
      cy: number,
      radius: number,
      viewBox: ViewBoxType | null,
    ): void;
    static appendTspan(
      text: SVGTextElement,
      STYLE: string,
      CHAR: string,
      dx: string,
      dy: string,
    ): void;
    static appendText(
      svg: SVGElement,
      STYLE: string,
      CONTENT: string,
      x: number,
      y: number,
      rotate: RotateType,
      transformOrigin: string,
      viewBox: ViewBoxType | null,
      maybeNumber?: boolean,
    ): void;
    static setSvgTextInfo(
      info: SvgTextInfo,
      x: number,
      y: number,
      rotate: RotateType,
    ): void;
    static appendOuterPath(
      svg: SVGElement,
      WIDTH: number,
      HEIGHT: number,
      mmToPxScale: number,
      OUTER_LINE_COLOR: string,
    ): void;
    static appendOuterLine(
      svg: SVGElement,
      WIDTH: number,
      HEIGHT: number,
      OUTER_LINE_STYLE: string,
    ): void;
    static getTextStyleFontSizePatchCss(
      NUMBER: number,
      TEXT_STYLE: string,
    ): string;
  }
}
declare const _default: typeof svgSpace.edu.sonya.cc;
export default _default;
