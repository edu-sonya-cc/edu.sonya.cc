// import { I18nable, createElement, getI18nInnerHTML, getElementById, getTitleElement, getBodyElement } from './dom';
// import { getCurrentLang } from './storage';
/// <reference path='../types/dom.d.ts' />
/// <reference path='../types/storage.d.ts' />
var svgSpace;
(function (svgSpace) {
  var edu;
  (function (edu) {
    var sonya;
    (function (sonya) {
      var cc;
      (function (cc) {
        // https://blog.csdn.net/yiyueqinghui/article/details/108004272
        const SVG_NS = "http://www.w3.org/2000/svg";
        const SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        class SvgHelper {
          static appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
            const line = document.createElementNS(SVG_NS, "line");
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
          static appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
            const circle = document.createElementNS(SVG_NS, "circle");
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
          static appendTspan(text, STYLE, CHAR, dx, dy) {
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
            const tspan = document.createElementNS(SVG_NS, "tspan");
            // tspan.setAttribute('dx', `${dx}mm`);
            // tspan.setAttribute('dy', `${dy}mm`);
            tspan.setAttribute("dx", `${dx}`);
            tspan.setAttribute("dy", `${dy}`);
            // tspan.setAttribute('rotate', rotate.toString());
            tspan.setAttribute(
              "style",
              STYLE.concat(
                "dominant-baseline:middle;text-anchor:middle;",
                CHAR === "6" || CHAR === "9"
                  ? "text-decoration:underline;"
                  : "",
                CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
              ),
            );
            tspan.innerHTML = CHAR;
            text.appendChild(tspan);
          }
          static appendText(
            svg,
            STYLE,
            CONTENT,
            x,
            y,
            rotate,
            transformOrigin,
            viewBox,
            maybeNumber = false,
          ) {
            const g = document.createElementNS(SVG_NS, "g");
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
            const text = document.createElementNS(SVG_NS, "text");
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
            ).replace(/\\n/gi, "<br>");
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
              const { left: x1, right: x2, top: y1, bottom: y2 } =
                (clientRects.length
                  ? clientRects.item(0)
                  : text.getBoundingClientRect());
              viewBox.left = Math.min(viewBox.left, x1, x2);
              viewBox.right = Math.max(viewBox.right, x1, x2);
              viewBox.top = Math.min(viewBox.top, y1, y2);
              viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
            }
            text.setAttribute("style", STYLE);
          }
          static setSvgTextInfo(info, x, y, rotate) {
            info.x = x;
            info.y = y;
            info.rotate = rotate;
          }
          static appendOuterPath(
            svg,
            WIDTH,
            HEIGHT,
            mmToPxScale,
            OUTER_LINE_COLOR,
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
          static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
            svg.setAttribute("width", `${WIDTH}mm`);
            svg.setAttribute("height", `${HEIGHT}mm`);
            // svg.setAttribute('style', `width:${WIDTH}mm;height:${HEIGHT}mm;`);
            const { appendLine } = svgSpace.edu.sonya.cc.SvgHelper;
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
            appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
          }
          static getTextStyleFontSizePatchCss(NUMBER, TEXT_STYLE) {
            if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
              const fontSizeSeg =
                TEXT_STYLE.split("font-size:")[1].split(";")[0];
              const fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
              const fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
              return `font-size:${fontValue * 2 /
                NUMBER.toString().length}${fontUnit};`;
            }
            return "";
          }
        }
        SvgHelper.createSvg = () => {
          const svg = document.createElementNS(SVG_NS, "svg");
          svg.setAttribute("version", "1.1");
          svg.setAttribute("xmlns", SVG_NS);
          svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
          return svg;
        };
        SvgHelper.createSvgPath = () => {
          return document.createElementNS(SVG_NS, "path");
        };
        cc.SvgHelper = SvgHelper;
      })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
  })(edu = svgSpace.edu || (svgSpace.edu = {}));
})(svgSpace || (svgSpace = {}));
export default svgSpace.edu.sonya.cc;
