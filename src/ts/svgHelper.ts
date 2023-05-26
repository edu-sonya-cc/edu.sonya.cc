// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, getBodyElement } from './dom';
// import { getCurrentLang } from './storage';

/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />

// namespace svgSpace.edu.sonya.cc {
namespace svgSpace {
  export namespace edu {
    export namespace sonya {
      export namespace cc {
        export type ViewBoxType = {
          left: number;
          right: number;
          top: number;
          bottom: number;
        };

        export type RotateType = "auto" | "auto-reverse" | number;

        export type SvgTextInfo = {
          content: I18nable | string;
          x: number;
          y: number;
          rotate: RotateType;
        };
        export type DivOrSvgElementWithSize = (HTMLDivElement | SVGElement) & {
          widthMm: number;
          heightMm: number;
        };
        export type WrapElementWithInfo = {
          element: DivOrSvgElementWithSize;
          alone?: boolean;
          linkToPreview?: boolean;
        };

        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        const SVG_NS = "http://www.w3.org/2000/svg";
        const SVG_XLINKNS = "http://www.w3.org/1999/xlink";

        export class SvgHelper {
          public static createSvg = (): SVGElement => {
            const svg = document.createElementNS(SVG_NS, "svg") as SVGElement;
            svg.setAttribute("version", "1.1");
            svg.setAttribute("xmlns", SVG_NS);
            svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
            return svg;
          };
          public static createSvgPath = (): SVGPathElement => {
            return document.createElementNS(SVG_NS, "path");
          };

          public static appendLine(
            svg: SVGElement,
            STYLE: string,
            x1: number,
            x2: number,
            y1: number,
            y2: number,
            viewBox: ViewBoxType | null,
          ) {
            const line = document.createElementNS(SVG_NS, "line") as SVGLineElement;
            line.setAttribute("x1", `${x1}mm`);
            line.setAttribute("x2", `${x2}mm`);
            line.setAttribute("y1", `${y1}mm`);
            line.setAttribute("y2", `${y2}mm`);

            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }

            line.setAttribute("style", STYLE);
            svg.appendChild(line);
          }

          public static appendCircle(
            svg: SVGElement,
            STYLE: string,
            cx: number,
            cy: number,
            radius: number,
            viewBox: ViewBoxType | null,
          ) {
            const circle = document.createElementNS(
              SVG_NS,
              "circle",
            ) as SVGCircleElement;
            circle.setAttribute("cx", `${cx}mm`);
            circle.setAttribute("cy", `${cy}mm`);
            circle.setAttribute("r", `${radius}mm`);
            circle.setAttribute("fill", "#ffffff");

            if (viewBox) {
              viewBox.left = Math.min(viewBox.left, cx - radius);
              viewBox.right = Math.max(viewBox.right, cx + radius);
              viewBox.top = Math.min(viewBox.top, cy - radius);
              viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
            }

            circle.setAttribute("style", STYLE);
            svg.appendChild(circle);
          }

          public static appendTspan(
            text: SVGTextElement,
            STYLE: string,
            CHAR: string,
            dx: string,
            dy: string,
          ) {
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
            const tspan = document.createElementNS(
              SVG_NS,
              "tspan",
            ) as SVGTSpanElement;
            // tspan.setAttribute('dx', `${dx}mm`);
            // tspan.setAttribute('dy', `${dy}mm`);
            tspan.setAttribute("dx", `${dx}`);
            tspan.setAttribute("dy", `${dy}`);
            // tspan.setAttribute('rotate', rotate.toString());
            tspan.setAttribute(
              "style",
              STYLE.concat(
                "dominant-baseline:middle;text-anchor:middle;",
                CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "",
                CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
              ),
            );

            tspan.innerHTML = CHAR;
            text.appendChild(tspan);
          }

          public static appendText(
            svg: SVGElement,
            STYLE: string,
            CONTENT: string,
            x: number,
            y: number,
            rotate: RotateType,
            transformOrigin: string,
            viewBox: ViewBoxType | null,
            maybeNumber: boolean = false,
          ) {
            const g = document.createElementNS(SVG_NS, "g") as SVGGElement;
            // g.setAttribute('x', `${x}mm`);
            // g.setAttribute('y', `${y}mm`);
            // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
            if (rotate) {
              g.setAttribute(
                "style",
                `transform: rotate(${rotate}deg);transform-origin:${transformOrigin};`,
              );
            }

            svg.appendChild(g);

            const text = document.createElementNS(SVG_NS, "text") as SVGTextElement;
            text.setAttribute("x", `${x}mm`);
            text.setAttribute("y", `${y}mm`);
            text.setAttribute(
              "style",
              "dominant-baseline:middle;text-anchor:middle;",
            );
            // text.setAttribute('dx', '0');
            // text.setAttribute('dy', '0');
            // text.setAttribute('rotate', rotate.toString());

            if (CONTENT.indexOf("<en>") > -1) {
              const lang = getCurrentLang();
              const startTag = `<${lang}>`;
              const endTag = `</${lang}>`;
              if (CONTENT.indexOf(startTag) > -1) {
                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
              }
            }

            // if(CONTENT.indexOf('<') > -1) {
            //   CONTENT = CONTENT.replace(/<br \/>/gi, '<br/>').replace(/<br\/>/gi, '<br>').replace(/\\n/g, '<br>');
            //   if (CONTENT.indexOf('<br>') > -1) {
            //     const fontSize = STYLE.indexOf('font-size:') > -1 ? STYLE.split('font-size:')[1].split(';')[0] : '2mm';
            //     const unit = fontSize.replace(/[0-9.]/gi, '');
            //     const dyNumber = parseFloat(fontSize.replace(unit, ''));
            //     // console.log(fontSize, unit, dyNumber);
            //     const segs = CONTENT.split('<br>');
            //     // let maxLength = 0;
            //     // segs.forEach((seg)=>{ maxLength = Math.max(maxLength, seg.length); });
            //     // const dyOffset = `${dyNumber}${unit}`;
            //     // segs.forEach((seg, index)=>{
            //     //     SvgHelper.appendTspan(text, '', seg, `${(seg.length - maxLength) * 0.5}em`, index ? dyOffset : '0');
            //     // });

            //     let lastLength = 0;
            //     const dyOffset = `${dyNumber}${unit}`;
            //     segs.forEach((seg, index)=>{
            //         // SvgHelper.appendTspan(text, '', seg, index ? `-${(seg.length + lastLength) * 0.5}em` : '0', index ? dyOffset : '0');
            //         SvgHelper.appendTspan(text, '', seg, index ? `-${lastLength}em` : '0', index ? dyOffset : '0');
            //         lastLength = seg.length;
            //     });
            //   } else {
            //     text.innerHTML = CONTENT;
            //   }
            // } else {
            //   CONTENT.split('').forEach((char, index) => {
            //     SvgHelper.appendTspan(text, '', char, '0', '0');
            //   });
            // }

            CONTENT = CONTENT.replace(/<br \/>/gi, "<br/>").replace(
              /<br\/>/gi,
              "<br>",
            ).replace(
              /\\n/gi,
              "<br>",
            );
            if (CONTENT.indexOf("<br>") > -1) {
              const fontSize = STYLE.indexOf("font-size:") > -1
                ? STYLE.split("font-size:")[1].split(";")[0]
                : "2mm";
              const unit = fontSize.replace(/[0-9.]/gi, "");
              const dyNumber = parseFloat(fontSize.replace(unit, ""));
              // console.log(fontSize, unit, dyNumber);
              const segs = CONTENT.split("<br>");
              // let maxLength = 0;
              // segs.forEach((seg)=>{ maxLength = Math.max(maxLength, seg.length); });
              // const dyOffset = `${dyNumber}${unit}`;
              // segs.forEach((seg, index)=>{
              //     // SvgHelper.appendTspan(text, '', seg, index ? `-${seg.length}em` : '0', index ? dyOffset : '0');
              //     SvgHelper.appendTspan(text, '', seg, `${(seg.length - maxLength) * 0.5}em`, index ? dyOffset : '0');
              // });

              let lastLength = 0;
              const dyOffset = `${dyNumber}${unit}`;
              segs.forEach((seg, index) => {
                // SvgHelper.appendTspan(text, '', seg, index ? `-${(seg.length + lastLength) * 0.5}em` : '0', index ? dyOffset : '0');
                SvgHelper.appendTspan(
                  text,
                  "",
                  seg,
                  index ? `-${lastLength}em` : "0",
                  index ? dyOffset : "0",
                );
                lastLength = seg.length;
              });
            } else {
              if (maybeNumber) {
                CONTENT.split("").forEach((char, index) => {
                  SvgHelper.appendTspan(text, "", char, "0", "0");
                });
              } else {
                SvgHelper.appendTspan(text, "", CONTENT, "0", "0");
              }
            }

            g.appendChild(text);

            if (viewBox) {
              // left/top/right/bottom/width/height
              const clientRects = text.getClientRects();
              const { left: x1, right: x2, top: y1, bottom: y2 } = (clientRects.length
                ? clientRects.item(0)
                : text.getBoundingClientRect()) as DOMRect;
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }

            text.setAttribute("style", STYLE);
          }

          public static setSvgTextInfo(
            info: SvgTextInfo,
            x: number,
            y: number,
            rotate: RotateType,
          ) {
            info.x = x;
            info.y = y;
            info.rotate = rotate;
          }

          public static appendOuterPath(
            svg: SVGElement,
            WIDTH: number,
            HEIGHT: number,
            mmToPxScale: number,
            OUTER_LINE_COLOR: string,
          ) {
            svg.setAttribute("width", `${WIDTH}mm`);
            svg.setAttribute("height", `${HEIGHT}mm`);
            // svg.setAttribute('style', `width:${WIDTH}mm;height:${HEIGHT}mm;`);

            const WIDTH_PX = mmToPxScale * WIDTH;
            const HEIGHT_PX = mmToPxScale * HEIGHT;

            const path = svgSpace.edu.sonya.cc.SvgHelper.createSvgPath();
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", OUTER_LINE_COLOR);
            path.setAttribute(
              "d",
              `M 0, 0 `
                .concat(
                  `h ${WIDTH_PX} `,
                  `v ${HEIGHT_PX} `,
                  `h -${WIDTH_PX} `,
                  " z",
                ),
            );
            svg.appendChild(path);
          }

          public static appendOuterLine(
            svg: SVGElement,
            WIDTH: number,
            HEIGHT: number,
            OUTER_LINE_STYLE: string,
          ) {
            svg.setAttribute("width", `${WIDTH}mm`);
            svg.setAttribute("height", `${HEIGHT}mm`);
            // svg.setAttribute('style', `width:${WIDTH}mm;height:${HEIGHT}mm;`);

            const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
          }

          public static getTextStyleFontSizePatchCss(
            NUMBER: number,
            TEXT_STYLE: string,
          ) {
            if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
              const fontSizeSeg = TEXT_STYLE.split("font-size:")[1].split(";")[0];
              const fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
              const fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
              return `font-size:${fontValue * 2 /
                NUMBER.toString().length}${fontUnit};`;
            }
            return "";
          }
        }
      }
    }
  }
}

// export default svgSpace.edu.sonya.cc;
// export default svgSpace;
