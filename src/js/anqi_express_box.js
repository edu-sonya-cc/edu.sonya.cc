/*
  Author: anqisoft@gmail.com
  Date: 2023-09-09
*/

function parseExpressBoxParamsFromUrl(url) {
  url = url.replace('?', '&').toLowerCase();
  const { max, min } = Math;
  window.THICKESS = max(0, min(
    1,
    parseFloat(
      url.concat('&thickess=1').replace('&thickess=', '厶').split('厶')[1].split('&')[0],
    ),
  ));
  window.NO = max(0,
    parseInt(
      url.concat('&no=1').replace('&no=', '厶').split('厶')[1].split('&')[0],
    ),
  );

  window.LANG =
    url.concat('&lang=en').replace('&lang=', '厶').split('厶')[1].split('&')[0];
  if (['en', 'zh_cn', 'zh_tw'].indexOf(window.LANG) === -1) {
    window.LANG = 'en';
  }
}

function getExpressBoxSvgHtml(long, width, height, extend) {
  const { max, min } = Math;

  long = max(1, long || 40);
  width = max(1, width || 30);
  height = max(1, height || 20);
  extend = max(2, extend || 5);

  const SVG_WIDTH = long + height * 4 + extend * 2;
  const SVG_HEIGHT = height * 3 + width * 2;

  const HALF_LONG = long * 0.5;
  const CENTER_X = HALF_LONG + height * 2 + extend * 1;

  const LONG_PX = mmToPxScale * long;
  const WIDTH_PX = mmToPxScale * width;
  const HEIGHT_PX = mmToPxScale * height;
  const EXTEND_PX = mmToPxScale * extend;
  const THICKESS_PX = mmToPxScale * THICKESS;

  const HALF_HEIGHT = height * 0.5;
  // const SMALL_RADIUS = height * 0.125;
  // const BIG_RADIUS = width * 0.2;
  const SMALL_RADIUS = height * 0.25;
  const BIG_RADIUS = width * 0.25;
  const HALF_WIDTH = width * 0.5;

  const HALF_HEIGHT_PX = mmToPxScale * HALF_HEIGHT;
  const HALF_WIDTH_PX = mmToPxScale * HALF_WIDTH;

  const SMALL_RADIUS_PX = mmToPxScale * SMALL_RADIUS;  // height * 0.25;
  const BIG_RADIUS_PX = mmToPxScale * BIG_RADIUS;  // width * 0.25;
  const THIRD_RADIUS_PX = mmToPxScale * max(width, height) * 0.25;

  const FIRST_V_PX = HEIGHT_PX - SMALL_RADIUS_PX * 2 - THICKESS_PX * 2;
  const SECOND_V_PX = WIDTH_PX - BIG_RADIUS_PX * 2 - THICKESS_PX * 2;
  const THIRD_V_PX = HEIGHT_PX - THIRD_RADIUS_PX * 2 - THICKESS_PX * 2;
  const FOURTH_V_PX = WIDTH_PX - EXTEND_PX * 2 - THICKESS_PX * 2;

  // const HEIGHT_2_ADD_EXTEND_PX = mmToPxScale * (height * 2 + extend);
  // const HEIGHT_2TIMES_PX = mmToPxScale * height * 2;

  // let html = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:${SVG_WIDTH}mm;height:${SVG_HEIGHT}mm;">`;

  let html = '';

  const Y1 = 0;
  const Y2 = Y1 + height;
  const Y3 = Y2 + width;
  const Y4 = Y3 + height;
  const Y5 = Y4 + width;
  const Y6 = Y5 + height;
  const Y4_OFFSET = Y4 + THICKESS;
  const Y5_OFFSET = Y5 - THICKESS;

  const X4 = CENTER_X - HALF_LONG;
  const X3 = X4 - height;
  const X2 = X3 - height;
  const X1 = X2 - extend;

  const X5 = CENTER_X + HALF_LONG;
  const X6 = X5 + height;
  const X7 = X6 + height;
  const X8 = X7 + extend;

  // https://blog.csdn.net/cuixiping/article/details/79663611
  // (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+

  html += `<path fill="none" stroke="#000000" d="M ${mmToPxScale * X4},0 h ${LONG_PX}

v ${THICKESS_PX}
a ${HALF_HEIGHT_PX} ${SMALL_RADIUS_PX} 0 0 1 ${HALF_HEIGHT_PX},${SMALL_RADIUS_PX}
v ${FIRST_V_PX}
a ${HALF_HEIGHT_PX} ${SMALL_RADIUS_PX} 0 0 1 -${HALF_HEIGHT_PX},${SMALL_RADIUS_PX}
v ${THICKESS_PX}

v ${THICKESS_PX}
a ${HEIGHT_PX} ${BIG_RADIUS_PX} 0 0 1 ${HEIGHT_PX},${BIG_RADIUS_PX}
v ${SECOND_V_PX}
a ${HEIGHT_PX} ${BIG_RADIUS_PX} 0 0 1 -${HEIGHT_PX},${BIG_RADIUS_PX}
v ${THICKESS_PX}

v ${THICKESS_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 ${HALF_WIDTH_PX},${THIRD_RADIUS_PX}
v ${THIRD_V_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 -${HALF_WIDTH_PX},${THIRD_RADIUS_PX}
v ${THICKESS_PX}

h ${HEIGHT_PX}
v ${THICKESS_PX}
h ${HEIGHT_PX}
a ${EXTEND_PX} ${EXTEND_PX} 0 0 1 ${EXTEND_PX},${EXTEND_PX}
v ${FOURTH_V_PX}
a ${EXTEND_PX} ${EXTEND_PX} 0 0 1 -${EXTEND_PX},${EXTEND_PX}
h -${HEIGHT_PX}
v ${THICKESS_PX}
h -${HEIGHT_PX}

v ${THICKESS_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 ${HALF_WIDTH_PX},${THIRD_RADIUS_PX}
v ${THIRD_V_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 -${HALF_WIDTH_PX},${THIRD_RADIUS_PX}
v ${THICKESS_PX}

h -${LONG_PX}

v -${THICKESS_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 -${HALF_WIDTH_PX},-${THIRD_RADIUS_PX}
v -${THIRD_V_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 ${HALF_WIDTH_PX},-${THIRD_RADIUS_PX}
v -${THICKESS_PX}

h -${HEIGHT_PX}
v -${THICKESS_PX}
h -${HEIGHT_PX}
a ${EXTEND_PX} ${EXTEND_PX} 0 0 1 -${EXTEND_PX},-${EXTEND_PX}
v -${FOURTH_V_PX}
a ${EXTEND_PX} ${EXTEND_PX} 0 0 1 ${EXTEND_PX},-${EXTEND_PX}
h ${HEIGHT_PX}
v -${THICKESS_PX}
h ${HEIGHT_PX}

v -${THICKESS_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 -${HALF_WIDTH_PX},-${THIRD_RADIUS_PX}
v -${THIRD_V_PX}
a ${HALF_WIDTH_PX} ${THIRD_RADIUS_PX} 0 0 1 ${HALF_WIDTH_PX},-${THIRD_RADIUS_PX}
v -${THICKESS_PX}

v -${THICKESS_PX}
a ${HEIGHT_PX} ${BIG_RADIUS_PX} 0 0 1 -${HEIGHT_PX},-${BIG_RADIUS_PX}
v -${SECOND_V_PX}
a ${HEIGHT_PX} ${BIG_RADIUS_PX} 0 0 1 ${HEIGHT_PX},-${BIG_RADIUS_PX}
v -${THICKESS_PX}

v -${THICKESS_PX}
a ${HALF_HEIGHT_PX} ${SMALL_RADIUS_PX} 0 0 1 -${HALF_HEIGHT_PX},-${SMALL_RADIUS_PX}
v -${FIRST_V_PX}
a ${HALF_HEIGHT_PX} ${SMALL_RADIUS_PX} 0 0 1 ${HALF_HEIGHT_PX},-${SMALL_RADIUS_PX}
v -${THICKESS_PX}

z"></path>

${getInlineVerticalLine(X4, 0, SVG_HEIGHT)}
${getInlineVerticalLine(X5, 0, SVG_HEIGHT)}

${getInlineVerticalLine(X2, Y4_OFFSET, Y5_OFFSET)}
${getInlineVerticalLine(X3, Y4_OFFSET, Y5_OFFSET)}

${getInlineVerticalLine(X6, Y4_OFFSET, Y5_OFFSET)}
${getInlineVerticalLine(X7, Y4_OFFSET, Y5_OFFSET)}

${getInnerHorizontalLine(X4, X5, Y2)}
${getInnerHorizontalLine(X4, X5, Y3)}
${getInnerHorizontalLine(X4, X5, Y4)}
${getInnerHorizontalLine(X4, X5, Y5)}

`;

  return {
    html: html,
    width: SVG_WIDTH,
    height: SVG_HEIGHT,
  };
}

function getCuboidWithSquareSectionSvgHtml(long, side, pasteWidth) {
  const { max, min } = Math;

  long = max(1, long || 40);
  width = max(1, side || long * 0.5);
  if (width > long) { width += long; long -= width - long; width = width - long; }
  height = width;

  return getCuboidWithHalfExtend(long, width, height, pasteWidth);
}

function getCuboidWithHalfExtend(long, width, height, pasteWidth) {
  const { max, min } = Math;

  long = max(1, long || 40);
  width = max(1, width || 40);
  height = max(1, height || 40);
  pasteWidth = max(1, pasteWidth || 40);

  extend = min(width, height) * 0.5;

  const SVG_WIDTH = long * 2 + height * 2 + pasteWidth;
  const SVG_HEIGHT = width + extend * 2;

  const LONG_PX = mmToPxScale * long;
  const WIDTH_PX = mmToPxScale * width;
  const HEIGHT_PX = mmToPxScale * height;
  const EXTEND_PX = mmToPxScale * extend;
  const PASTE_WIDTH_PX = mmToPxScale * pasteWidth;

  const Y1 = 0;
  const Y2 = Y1 + extend;
  const Y3 = Y2 + width;
  // const Y4 = Y3 + extend;

  const X1 = 0;
  const X2 = X1 + height;
  const X3 = X2 + long;
  const X4 = X3 + height;
  const X5 = X4 + long;
// const X6 = X5 + pasteWidth;

  const html = `<path fill="none" stroke="#000000"
d="M 0, ${EXTEND_PX}

v -${EXTEND_PX}
h ${HEIGHT_PX}
v ${EXTEND_PX}

v -${EXTEND_PX}
h ${LONG_PX}
v ${EXTEND_PX}

v -${EXTEND_PX}
h ${HEIGHT_PX}
v ${EXTEND_PX}

v -${EXTEND_PX}
h ${LONG_PX}
v ${EXTEND_PX}

h ${PASTE_WIDTH_PX}

v ${WIDTH_PX}
h -${PASTE_WIDTH_PX}

v ${EXTEND_PX}
h -${LONG_PX}
v -${EXTEND_PX}

v ${EXTEND_PX}
h -${HEIGHT_PX}
v -${EXTEND_PX}

v ${EXTEND_PX}
h -${LONG_PX}
v -${EXTEND_PX}

v ${EXTEND_PX}
h -${HEIGHT_PX}
v -${EXTEND_PX}
z"></path>

${getInnerHorizontalLine(X1, X5, Y2)}
${getInnerHorizontalLine(X1, X5, Y3)}

${getInlineVerticalLine(X2, Y2, Y3)}
${getInlineVerticalLine(X3, Y2, Y3)}
${getInlineVerticalLine(X4, Y2, Y3)}
${getInlineVerticalLine(X5, Y2, Y3)}
`;

  return {
    html: html,
    width: SVG_WIDTH,
    height: SVG_HEIGHT,
  };
}

function getInnerHorizontalLine(X1, X2, Y) {
  return `<line x1="${X1}mm" x2="${X2}mm" y1="${Y}mm" y2="${Y}mm" style="stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;"></line>`;
}

function getInlineVerticalLine(X, Y1, Y2) {
  return `<line x1="${X}mm" x2="${X}mm" y1="${Y1}mm" y2="${Y2}mm" style="stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;"></line>`;
}

function createAndAppendCuboids(PAGE_ELEMENT, LONG, SIDE, PASTE_WIDTH, COUNT) {
  const result = [];
  for (let i = 0; i < COUNT; ++i) {
    const { html, width, height } = getCuboidWithSquareSectionSvgHtml(LONG, SIDE, PASTE_WIDTH);
    const { svgElement } = createSvgElement(html, width, height);
    PAGE_ELEMENT.appendChild(svgElement);

    svgElement.widthMm = width;
    svgElement.heightMm = height;
    result.push(svgElement);
  }

  return result;
}

function createAndAppendCuboid(PAGE_ELEMENT, LONG, SIDE, PASTE_WIDTH) {
  const { html, width, height } = getCuboidWithSquareSectionSvgHtml(LONG, SIDE, PASTE_WIDTH);
  const { svgElement } = createSvgElement(html, width, height);
  PAGE_ELEMENT.appendChild(svgElement);

  svgElement.widthMm = width;
  svgElement.heightMm = height;
  return svgElement;
}

function rotate90(svgElement) {
  const svgStyle = svgElement.style;

  const { heightMm: HEIGHT } = svgElement;
  const HALF_HEIGHT = HEIGHT * 0.5;
  svgStyle.transform = 'rotate(90deg)';
  svgStyle.transformOrigin = `${HALF_HEIGHT}mm ${HALF_HEIGHT}mm`;
}
