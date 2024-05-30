/*
  Author: anqisoft@gmail.com
  Date: 2023-09-09
*/
function countScaleMmAndPx() {
  // https://blog.csdn.net/baidu_25343343/article/details/84950269
  const { screen } = window; // (window.screen as unknown as { deviceXDPI?: number; deviceYDPI: number });

  const dpiArray = []; // : Array<number>
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
  window.mmToPxScale = dpiX / 25.4;
  window.pxToMmScale = 25.4 / dpiX;
}
countScaleMmAndPx();


function createSvgElement(html, width, height) {
  // console.log('createSvgElement', width, height);
  // https://blog.csdn.net/longtengg1/article/details/116784565
  // Don't use: const svgElement = document.createElement('svg');
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svgElement.innerHTML = html;
  svgElement.setAttribute('version', '1.1');
  svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  // svgElement.setAttribute('style', `width:${width} mm; height:${height} mm; `);
  svgElement.setAttribute('width', `${width}mm`);
  svgElement.setAttribute('height', `${height}mm`);

  return { svgElement, width, height };
}

function createSvgGElement(html, width, height) {
  const gElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  gElement.innerHTML = html;
  gElement.setAttribute('width', `${width}mm`);
  gElement.setAttribute('height', `${height}mm`);

  return { gElement, width, height };
}

function createSvgAndGElement({ html, width, height }) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttribute('version', '1.1');
  svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  svgElement.setAttribute('width', `${width}mm`);
  svgElement.setAttribute('height', `${height}mm`);

  const gElement = createSvgGElement(html, width, height).gElement;
  svgElement.appendChild(gElement);

  return { svgElement, gElement, width, height };
}


function createTopSvgElement() {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svgElement.setAttribute('version', '1.1');
  // svgElement.setAttribute('style', `width:${PAGE_WIDTH} mm; height:${PAGE_HEIGHT} mm; `);
  svgElement.setAttribute('width', `${PAGE_WIDTH}mm`);
  svgElement.setAttribute('height', `${PAGE_HEIGHT}mm`);

  return svgElement;
}

function appendSvgAndG(parentElement, info, options) {
  const { abs, sin, cos, PI } = Math;

  const { svgElement, gElement, width, height } = info;
  const { left, right, top, bottom, transform, degree } = options;

  const x = 'undefined' !== typeof left ? left : PAGE_WIDTH - width - right;
  const y = 'undefined' !== typeof top ? top : PAGE_HEIGHT - height - bottom;
  parentElement.appendChild(svgElement);
  svgElement.setAttribute('x', `${x}mm`);
  svgElement.setAttribute('y', `${y}mm`);

  if (!degree) { return; }

  // transform: `rotate(${DEGREE_90})`,
  gElement.setAttribute('transform', `rotate(${degree})`);
  gElement.style.transformOrigin = '50% 50%';

  if (degree === 180 || degree === -180) { return; }

  let newWidth, newHeight, gTranslateScaleX, gTranslateScaleY, xScale, yScale;


  if (degree <= -90) {
    // -180 < degree <= -90
    const newDegree = -90 - degree;
    const radian = PI * newDegree / 180;
    newWidth = width * sin(radian) + height * cos(radian);
    newHeight = width * cos(radian) + height * sin(radian);
    xScale = -1;
    yScale = -1;
    gTranslateScaleX = -1;
    gTranslateScaleY = 1;
  } else if (degree < 0) {
    // -90 < degree < 0
    const newDegree = -degree;
    const radian = PI * newDegree / 180;
    newWidth = width * cos(radian) + height * sin(radian);
    newHeight = width * sin(radian) + height * cos(radian);
    xScale = -1;
    yScale = 1;
    gTranslateScaleX = 1;
    gTranslateScaleY = 1;
  } else if (degree <= 90) {
    const radian = PI * degree / 180;

    newWidth = width * cos(radian) + height * sin(radian);
    newHeight = width * sin(radian) + height * cos(radian);
    xScale = -1;
    yScale = -1;
    gTranslateScaleX = 1;
    gTranslateScaleY = -1;
  } else if (degree < 180) {
    // 90 < degree < 180
    const newDegree = degree - 90;
    const radian = PI * newDegree / 180;
    newWidth = width * cos(radian) + height * sin(radian);
    newHeight = width * sin(radian) + height * cos(radian);
    xScale = -1;
    yScale = 1;
    gTranslateScaleX = 1;
    gTranslateScaleY = 1;
  }

  const DELTA_WIDTH = newWidth - width;
  const DELTA_HEIGHT = newHeight - height;

  const HALF_DELTA_WIDTH = DELTA_WIDTH * 0.5;
  const HALF_DELTA_HEIGHT = DELTA_HEIGHT * 0.5;

  const G_DELTA_X = HALF_DELTA_WIDTH * gTranslateScaleX;
  const G_DELTA_Y = HALF_DELTA_HEIGHT * gTranslateScaleY;

  if (newWidth < 0 || newHeight < 0) {
    console.log({
      degree,
      cos: cos(degree),
      sin: sin(degree),

      newWidth,
      newHeight,
      x, HALF_DELTA_WIDTH,
      fixValueByRight: ('undefined' !== typeof right ? 2 : 1),
      newX: x + HALF_DELTA_WIDTH * ('undefined' !== typeof right ? 2 : 1),
      y, HALF_DELTA_HEIGHT,
      newY: y + HALF_DELTA_HEIGHT,
      G_DELTA_X,
      G_DELTA_Y,
    });
  }

  svgElement.setAttribute('width', `${newWidth}mm`);
  svgElement.setAttribute('height', `${newHeight}mm`);

  svgElement.setAttribute('x', `${x + HALF_DELTA_WIDTH * xScale * ('undefined' !== typeof right ? 2 : 1)}mm`);
  svgElement.setAttribute('y', `${y + HALF_DELTA_HEIGHT * yScale}mm`);
  gElement.style.translate = `${G_DELTA_X}mm ${G_DELTA_Y}mm`;
}
