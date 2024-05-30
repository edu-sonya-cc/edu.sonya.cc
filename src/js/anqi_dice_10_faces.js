
// ?top=4&left=3.5&landscape=false&a3=true
function draw() {
  setF1Content('?lang=en&landscape=true&no=1\nlang:en, zh_cn, zh_tw\nlandscape:true, false\nno:1,2');

  // Force to A3 paper, and use the default margins.
  const ORIGINAL_URL = window.location.href;
  parseExpressBoxParamsFromUrl(ORIGINAL_URL);
  parsePageParamsFromUrl(ORIGINAL_URL);

  // const url = `&a3=true&landscape=${LANDSCAPE}&lang=${LANG}&no=${NO}`;
  const url = `&a3=true&landscape=false&lang=${LANG}&no=${NO}`;
  parsePageParamsFromUrl(url);
  parseExpressBoxParamsFromUrl(url);

  document.getElementsByTagName('title')[0].innerText = `${[
    {
      en: 'A3 D10 Landscape ',
      zh_cn: 'A3_带正方形截面的长方体_横排',
      zh_tw: 'A3_帶正方形截面的長方體_橫排',
    },
    {
      en: 'A3 D10 Portrait ',
      zh_cn: 'A3_带正方形截面的长方体_竖排',
      zh_tw: 'A3_帶正方形截面的長方體_豎排',
    },
  ][LANDSCAPE ? 0 : 1][LANG]}${NO}`;

  document.getElementById('style').innerHTML = getPageCss(
    A3,
    LANDSCAPE,
    PAGE_PADDING_TOP,
    PAGE_PADDING_LEFT,
  ).concat(
    // 'page{display:flex;flex-wrap:wrap;justify-content:space-around;align-content:space-between;}',
    'svg{}', // flex:0 0 16.67%
  );



  const body = document.getElementsByTagName('body')[0];

  const pageElement = createPageElement();
  body.appendChild(pageElement);

  // if (LANDSCAPE) {
  //   switch (NO) {
  //     case 1:
  //     default:
  //       appendLandscapeDices1(pageElement);
  //       break;
  //     case 2:
  //       appendLandscapeDices2(pageElement);
  //       break;
  //   }
  // } else {
  //   appendPortraitDices(pageElement);
  // }
  appendPortraitDices2(pageElement);

  // window.print();
}

function appendPortraitDices2(PAGE_ELEMENT) {
  const { floor, ceil } = Math;
  const CONTENTS_ARRAY = [
    [], // 1-10
    [], // 0-9
    [], // 0, 10, 20, ..., 90
    '1,2,3,4,5,1,2,3,4,5'.split(','), // 1-5
    '甲、乙、丙、丁、戊、己、庚、辛、壬、癸'.split('、'),
    '甲木、乙木、丙火、丁火、戊土、己土、庚金、辛金、壬水、癸水'.split('、'),
    '阏逢、旃蒙、柔兆、强圉、著雍、屠维、上章、重光、玄黓、昭阳'.split('、'),
  ];
  for (let i = 0; i < 10; ++i) {
    CONTENTS_ARRAY[0].push((i + 1).toString());
    CONTENTS_ARRAY[1].push(i.toString());
    CONTENTS_ARRAY[2].push((10 * i).toString());
  }
  const CONTENTS_ARRAY_LENGTH = CONTENTS_ARRAY.length;

  const COL_COUNT = 7;
  const ROW_COUNT = 4;
  const HORIZTONTAL_COUNT = COL_COUNT * ROW_COUNT;
  let svgId = 0;
  [
    { SIDE: 10, PASTE_WIDTH: 6, COUNT: HORIZTONTAL_COUNT + 3 },
  ].forEach(({ SIDE, PASTE_WIDTH, COUNT }, n) => {
    for (let i = 0; i < COUNT; ++i) {
      const { html, width, height } = getSvgOfDice10(SIDE, PASTE_WIDTH, CONTENTS_ARRAY[i % CONTENTS_ARRAY_LENGTH]);
      const { svgElement } = createSvgElement(html, width, height);
      PAGE_ELEMENT.appendChild(svgElement);

      svgElement.widthMm = width;
      svgElement.heightMm = height;

      svgElement.setAttribute('id', `svg${++svgId}`);

      const style = svgElement.style;
      if (i >= HORIZTONTAL_COUNT) {
        // style.position = 'relative';
        // style.transform = 'rotate(-90deg)';

        // const HALF_WIDTH_MM = `${width * 0.5}mm`;
        // style.transformOrigin = `${HALF_WIDTH_MM} ${HALF_WIDTH_MM}`;

        // if (i > HORIZTONTAL_COUNT) {
        //   const LEFT_MOVE = `${(height - width) * 0.5 * (i - HORIZTONTAL_COUNT)}mm`;

        //   style.left = LEFT_MOVE;
        //   style.marginLeft = LEFT_MOVE;
        //   style.marginRight = `-${LEFT_MOVE}`;
        // }

        style.position = 'absolute';
        style.transform = 'rotate(-90deg)';

        const HALF_WIDTH_MM = `${width * 0.5}mm`;
        style.transformOrigin = `${HALF_WIDTH_MM} ${HALF_WIDTH_MM}`;

        const HALF_HEIGHT_SUBSTRACT_WIDTH = (height - width) * 0.5 * 1.7;
        style.bottom = `-${PAGE_PADDING_TOP + HALF_HEIGHT_SUBSTRACT_WIDTH}mm`;
        style.left = `${PAGE_PADDING_LEFT + height * (i % HORIZTONTAL_COUNT)}mm`;
      } else {
        // style.position = 'relative';
        // const RIGHT_MOVE = `-${SIDE * 0.28 * ((i + 2) % COL_COUNT
        // )}mm`;
        // const LEFT_MOVE = `-${SIDE * 0.25 * (i % COL_COUNT
        // )}mm`;
        // style.left = LEFT_MOVE;
        // style.marginLeft = LEFT_MOVE;
        // style.marginRight = RIGHT_MOVE;

        style.position = 'absolute';
        style.left = `${PAGE_PADDING_LEFT + (width - SIDE * 1.3) * (i % COL_COUNT)}mm`;
        style.top = `${PAGE_PADDING_TOP + height * floor(i / COL_COUNT)}mm`;
      }
    }
  });
}

function appendPortraitDices1(PAGE_ELEMENT) {
  let svgId = 0;
  [
    { SIDE: 20, PASTE_WIDTH: 8, COUNT: 3 },
    { SIDE: 10, PASTE_WIDTH: 6, COUNT: 12 },
  ].forEach(({ SIDE, PASTE_WIDTH, COUNT }, n) => {
    for (let i = 0; i < COUNT; ++i) {
      const { html, width, height } = getSvgOfDice10(SIDE, PASTE_WIDTH, CONTENTS_ARRAY[i % CONTENTS_ARRAY_LENGTH]);
      const { svgElement } = createSvgElement(html, width, height);
      PAGE_ELEMENT.appendChild(svgElement);

      svgElement.widthMm = width;
      svgElement.heightMm = height;

      svgElement.setAttribute('id', `svg${++svgId}`);

      if (i > 0) {
        const style = svgElement.style;
        style.position = 'relative';

        if (n === 0) {
          const LEFT_MOVE = `-${SIDE * 0.5 * i}mm`;
          style.left = LEFT_MOVE;
          style.marginLeft = LEFT_MOVE;
        } else {
          const COUNT_PER_ROW = 6;
          if (i % COUNT_PER_ROW) {
            const LEFT_MOVE = `-${SIDE * 0.25 * (i % COUNT_PER_ROW
            )}mm`;
            style.left = LEFT_MOVE;
            style.marginLeft = LEFT_MOVE;
          }
        }
      }
    }
  });
}

function appendLandscapeDices1(pageElement) {

}

function appendLandscapeDices2(pageElement) {

}


function getInnerLine(X1, X2, Y1, Y2) {
  return `<line x1="${X1}mm" x2="${X2}mm" y1="${Y1}mm" y2="${Y2}mm" style="stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;"></line>`;
}

function getOuterLine(X1, X2, Y1, Y2) {
  return `<line x1="${X1}mm" x2="${X2}mm" y1="${Y1}mm" y2="${Y2}mm" style="stroke:#555;stroke-width:0.2mm;"></line>`;

  /*

      outerLineStyle = 'stroke:#555;stroke-width:0.2mm;';
      innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
      // textStyle= 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";';
      textStyle = 'font-size:3mm;font-family: "Kaiti";';
      */
}

function getSvgTextHtml(X, Y, STYLE, CONTENT, rotate) {
  // return `<text x="${X}mm" y="${Y}mm" style="font-size:3mm;font-family: "Kaiti";${STYLE}"></text>`;
  // const result = `<g${rotate ? ` style="transform: rotate(${rotate}deg);transform-origin: 50% 50%;"` : ''}><text x="${X}mm" y="${Y}mm" style="dominant-baseline:middle;text-anchor:middle;font-size:3mm;font-family: 'Kaiti';${STYLE}" >${CONTENT.indexOf('<') > -1 ? CONTENT : CONTENT.split('').map((__char) => getSvgTsSpanHtml(STYLE, __char, 0, 0, 0)).join('')}</text></g>`;
  // console.log(CONTENT, result);
  // const result = `<g><text x="${X}mm" y="${Y}mm" style="dominant-baseline:middle;text-anchor:middle;font-size:3mm;font-family: 'Kaiti';${STYLE}${rotate ? `transform: rotate(${rotate}deg);transform-origin: ${X}mm ${Y}mm;` : ''}" >${CONTENT.indexOf('<') > -1 ? CONTENT : CONTENT.split('').map((__char) => getSvgTsSpanHtml(STYLE, __char, 0, 0, 0)).join('')}</text></g>`;

  const result = `<text x="${X}mm" y="${Y}mm" style="dominant-baseline:middle;text-anchor:middle;font-size:3mm;font-family: 'Kaiti';${rotate ? `transform: rotate(${rotate}deg);transform-origin: ${X}mm ${Y}mm;` : ''}${STYLE}" >${CONTENT.indexOf('<') > -1 ? CONTENT : CONTENT.split('').map((__char) => getSvgTsSpanHtml(STYLE, __char, 0, 0, 0)).join('')}</text>`;

  return result;
}


function getSvgTsSpanHtml(STYLE, CHAR, dx, dy, rotate) {
  rotate = rotate || 0;
  return `<tspan dx="${dx}mm" dy="${dy}mm" rotate="${rotate}" style="${STYLE}dominant-baseline:middle;text-anchor:middle;${CHAR === '6' || CHAR === '9' ? 'text-decoration:underline;' : ''}${CHAR === 'ü' ? 'opacity:0.85;font-size:0.9em;' : ''}">${CHAR}</tspan>`;
}

function getSvgOfDice10(SIDE, PASTE_WIDTH, CONTENTS, FONT_SIZE) {
  const { max, min, sin, cos, tan, atan, PI, abs } = Math;

  SIDE = max(1, SIDE || 10);
  PASTE_WIDTH = max(1, PASTE_WIDTH || 5);

  if (!CONTENTS) {
    CONTENTS = '1,2,3,4,5,6,7,8,9,10'.split(',');
  }
  if (!FONT_SIZE) {
    FONT_SIZE = `${5 * SIDE / 10}mm`;
  }

  const X_O1 = SIDE * 2.55;
  const Y_O1 = SIDE * 2.55;

  // const ANGLE_SMALL = 50.22 * PI / 180;
  // const ANGLE_MIDDLE = 94.5 * PI / 180;
  // const ANGLE_BIG = 120.4 * PI / 180;

  // const ANGLE_SMALL = 50.22 * PI / 180;
  const ANGLE_SMALL_DEGREE = 50.22;
  const ANGLE_SMALL = ANGLE_SMALL_DEGREE * PI / 180;
  const HALF_ANGLE_SMALL = ANGLE_SMALL * 0.5;
  const ANGLE_MIDDLE = 94.7 * PI / 180;
  // const ANGLE_BIG = 120.4 * PI / 180;

  const ANGLE_BIG = (PI - HALF_ANGLE_SMALL - ANGLE_MIDDLE) * 2;

  const ANGLE_90 = PI * 0.5;
  // const ANGLE_EXTEND = 30 * PI / 180;  // PI * 0.25;
  const ANGLE_EXTEND = 45 * PI / 180;  // PI * 0.25;

  const ANGLE_B1 = ANGLE_90 - HALF_ANGLE_SMALL;
  const ANGLE_B2 = ANGLE_MIDDLE - ANGLE_B1;
  const SIDE_V1 = SIDE * sin(ANGLE_B2);
  const SIDE_H1 = SIDE * cos(ANGLE_B2);
  const SIDE_LONG = SIDE_H1 / sin(HALF_ANGLE_SMALL);
  const SIDE_V2 = SIDE_LONG * sin(ANGLE_B1);
  const SIZE_LONG_MIDLINE = SIDE_V1 + SIDE_V2;
  // const SIZE_SHORT_MIDLINE = SIDE_H1 * 2;

  const ANGLE_A1 = HALF_ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
  const X_B1 = X_O1, Y_B1 = Y_O1 + SIZE_LONG_MIDLINE;
  const X_A1_DELTA = SIDE_LONG * sin(ANGLE_A1);
  const Y_A1_DELTA = SIDE_LONG * cos(ANGLE_A1);
  const X_A1 = X_O1 - X_A1_DELTA, X_C1 = X_O1 + X_A1_DELTA;
  const Y_A1 = Y_O1 + Y_A1_DELTA, Y_C1 = Y_O1 + Y_A1_DELTA;

  const ANGLE_D1 = ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
  const X_D1 = X_O1 + SIZE_LONG_MIDLINE * sin(ANGLE_D1);
  const Y_D1 = Y_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_D1);

  const ANGLE_E1 = ANGLE_SMALL * 1.5; // 其实是逆时针的，但用绝对值比较方便计算
  const X_E1 = X_O1 + SIDE_LONG * sin(ANGLE_E1);
  const Y_E1 = Y_O1 + SIDE_LONG * cos(ANGLE_E1);

  const ANGLE_F1 = ANGLE_SMALL * 2 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_F1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_F1);
  const Y_F1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_F1);

  const ANGLE_G1 = ANGLE_SMALL * 2.5 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_G1 = X_O1 + SIDE_LONG * cos(ANGLE_G1);
  const Y_G1 = Y_O1 - SIDE_LONG * sin(ANGLE_G1);

  const ANGLE_H1 = ANGLE_SMALL * 3 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_H1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_H1);
  const Y_H1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_H1);

  const ANGLE_I1 = PI - ANGLE_SMALL * 3.5; // 其实是逆时针的，但用绝对值比较方便计算
  const X_I1 = X_O1 + SIDE_LONG * sin(ANGLE_I1);
  const Y_I1 = Y_O1 - SIDE_LONG * cos(ANGLE_I1);

  const ANGLE_J1 = ANGLE_SMALL * 4 - PI; // 其实是逆时针的，但用绝对值比较方便计算
  const X_J1 = X_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_J1);
  const Y_J1 = Y_O1 - SIZE_LONG_MIDLINE * cos(ANGLE_J1);

  const ANGLE_K1 = ANGLE_SMALL * 4.5 - PI; // 其实是逆时针的，但用绝对值比较方便计算
  const X_K1 = X_O1 - SIDE_LONG * sin(ANGLE_K1);
  const Y_K1 = Y_O1 - SIDE_LONG * cos(ANGLE_K1);

  // X_A1 + X_B1 = X_O1 + X_O2
  const X_O2 = (X_A1 + X_B1) - X_O1;
  const Y_O2 = (Y_A1 + Y_B1) - Y_O1;

  const X_B2 = X_A1, Y_B2 = Y_A1;
  const X_C2 = X_B1, Y_C2 = Y_B1;
  // X_C2 - X_O2 = X_O2 - X_A2 => X_A2 = X_O2 * 2 - X_C2;
  const X_A2 = X_O2 * 2 - X_C2, Y_A2 = Y_C2;

  const ANGLE_D2 = ANGLE_SMALL; // 其实是逆时针的，但用绝对值比较方便计算
  const X_D2 = X_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_D2);
  const Y_D2 = Y_O2 - SIZE_LONG_MIDLINE * cos(ANGLE_D2);

  const ANGLE_E2 = ANGLE_SMALL * 1.5; // 其实是逆时针的，但用绝对值比较方便计算
  const X_E2 = X_O2 + SIDE_LONG * sin(ANGLE_E2);
  const Y_E2 = Y_O2 - SIDE_LONG * cos(ANGLE_E2);

  const ANGLE_F2 = ANGLE_SMALL * 2 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_F2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_F2);
  const Y_F2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_F2);

  const ANGLE_G2 = ANGLE_SMALL * 2.5 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_G2 = X_O2 + SIDE_LONG * cos(ANGLE_G2);
  const Y_G2 = Y_O2 + SIDE_LONG * sin(ANGLE_G2);

  const ANGLE_H2 = ANGLE_SMALL * 3 - ANGLE_90; // 其实是逆时针的，但用绝对值比较方便计算
  const X_H2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_H2);
  const Y_H2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_H2);

  const ANGLE_I2 = PI - ANGLE_SMALL * 3.5; // 其实是逆时针的，但用绝对值比较方便计算
  const X_I2 = X_O2 + SIDE_LONG * sin(ANGLE_I2);
  const Y_I2 = Y_O2 + SIDE_LONG * cos(ANGLE_I2);

  const ANGLE_J2 = ANGLE_SMALL * 4 - PI; // 其实是逆时针的，但用绝对值比较方便计算
  const X_J2 = X_O2 - SIZE_LONG_MIDLINE * sin(ANGLE_J2);
  const Y_J2 = Y_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_J2);

  const ANGLE_K2 = ANGLE_SMALL * 4.5 - PI; // 其实是逆时针的，但用绝对值比较方便计算
  const X_K2 = X_O2 - SIDE_LONG * sin(ANGLE_K2);
  const Y_K2 = Y_O2 + SIDE_LONG * cos(ANGLE_K2);

  // (QUARTER_PI + HALF_PI - HALF_ANGLE_SMALL) - HALF_PI;
  const ANGLE_A2E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
  const X_A2E = X_A2 - PASTE_WIDTH * sin(ANGLE_A2E);
  const Y_A2E = Y_A2 + PASTE_WIDTH * cos(ANGLE_A2E);

  const ANGLE_O2E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
  const X_O2E = X_O2 - PASTE_WIDTH * sin(ANGLE_O2E);
  const Y_O2E = Y_O2 - PASTE_WIDTH * cos(ANGLE_O2E);

  const ANGLE_O1E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
  const X_O1E = X_O1 - PASTE_WIDTH * sin(ANGLE_O1E);
  const Y_O1E = Y_O1 + PASTE_WIDTH * cos(ANGLE_O1E);

  const ANGLE_K1E = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + ANGLE_SMALL * 4.5 - PI);
  const X_K1E = X_K1 + PASTE_WIDTH * sin(ANGLE_K1E);
  const Y_K1E = Y_K1 - PASTE_WIDTH * cos(ANGLE_K1E);

  // (QUARTER_PI + HALF_PI - HALF_ANGLE_SMALL) - HALF_PI
  const ANGLE_A1E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
  const X_A1E = X_A1 - PASTE_WIDTH * sin(ANGLE_A1E);
  const Y_A1E = Y_A1 - PASTE_WIDTH * cos(ANGLE_A1E);

  const ANGLE_B1E = ANGLE_BIG * 0.5 + ANGLE_EXTEND - ANGLE_90;
  // console.log({ ANGLE_B1E });
  const X_B1E = X_B1 + PASTE_WIDTH * cos(ANGLE_B1E);
  const Y_B1E = Y_B1 + PASTE_WIDTH * sin(ANGLE_B1E);

  const ANGLE_C1E1 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + HALF_ANGLE_SMALL);
  const X_C1E1 = X_C1 - PASTE_WIDTH * sin(ANGLE_C1E1);
  const Y_C1E1 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E1);

  const ANGLE_C1E2 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE - HALF_ANGLE_SMALL);
  const X_C1E2 = X_C1 + PASTE_WIDTH * sin(ANGLE_C1E2);
  const Y_C1E2 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E2);

  const ANGLE_D1E1 = atan((X_D1 - X_C1) / (Y_C1 - Y_D1)) - ANGLE_EXTEND;
  const X_D1E1 = X_D1 - PASTE_WIDTH * sin(ANGLE_D1E1);
  const Y_D1E1 = Y_D1 + PASTE_WIDTH * cos(ANGLE_D1E1);

  const ANGLE_DE = atan((X_E1 - X_D1) / (Y_D1 - Y_E1))
  const ANGLE_D1E2 = ANGLE_DE - ANGLE_EXTEND;
  const X_D1E2 = X_D1 + PASTE_WIDTH * cos(ANGLE_D1E2);
  const Y_D1E2 = Y_D1 + PASTE_WIDTH * sin(ANGLE_D1E2);

  const ANGLE_E1E1 = ANGLE_EXTEND - ANGLE_DE;  //(HALF_PI - ANGLE_DE);
  const X_E1E1 = X_E1 + PASTE_WIDTH * sin(ANGLE_E1E1);
  const Y_E1E1 = Y_E1 + PASTE_WIDTH * cos(ANGLE_E1E1);

  const ANGLE_EF = atan((X_F1 - X_E1) / (Y_E1 - Y_F1)); // console.log(ANGLE_EF, QUARTER_PI);
  const ANGLE_E1E2 = ANGLE_EXTEND - ANGLE_EF;
  const X_E1E2 = X_E1 + PASTE_WIDTH * cos(ANGLE_E1E2);
  const Y_E1E2 = Y_E1 - PASTE_WIDTH * sin(ANGLE_E1E2);

  // const ANGLE_F1E1 = HALF_PI - ANGLE_EF - QUARTER_PI;
  const ANGLE_F1E1 = ANGLE_90 - (ANGLE_EF + ANGLE_EXTEND);
  const X_F1E1 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E1);
  const Y_F1E1 = Y_F1 + PASTE_WIDTH * cos(ANGLE_F1E1);

  // OK
  const ANGLE_FG = atan((X_F1 - X_G1) / (Y_F1 - Y_G1));
  const ANGLE_F1E2 = ANGLE_90 - (ANGLE_FG + ANGLE_EXTEND);
  const X_F1E2 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E2);
  const Y_F1E2 = Y_F1 - PASTE_WIDTH * cos(ANGLE_F1E2);

  // OK
  const ANGLE_G1E1 = ANGLE_FG - ANGLE_EXTEND;
  const X_G1E1 = X_G1 + PASTE_WIDTH * cos(ANGLE_G1E1);
  const Y_G1E1 = Y_G1 - PASTE_WIDTH * sin(ANGLE_G1E1);

  // OK
  const ANGLE_GH = atan((X_G1 - X_H1) / (Y_G1 - Y_H1));
  const ANGLE_G1E2 = ANGLE_90 - (ANGLE_GH + ANGLE_EXTEND);
  const X_G1E2 = X_G1 + PASTE_WIDTH * sin(ANGLE_G1E2);
  const Y_G1E2 = Y_G1 - PASTE_WIDTH * cos(ANGLE_G1E2);

  // OK
  const ANGLE_H1E1 = ANGLE_EXTEND - ANGLE_GH; //  console.log('ANGLE_H1E1', ANGLE_H1E1);
  const X_H1E1 = X_H1 + PASTE_WIDTH * cos(ANGLE_H1E1);
  const Y_H1E1 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E1);

  // OK
  const ANGLE_HI = atan((X_H1 - X_I1) / (Y_H1 - Y_I1));
  const ANGLE_H1E2 = ANGLE_EXTEND + ANGLE_HI;
  const X_H1E2 = X_H1 - PASTE_WIDTH * cos(ANGLE_H1E2);
  const Y_H1E2 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E2);

  // OK
  const ANGLE_I1E1 = ANGLE_EXTEND + ANGLE_HI;  // QUARTER_PI - ANGLE_HI;
  const X_I1E1 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E1);
  const Y_I1E1 = Y_I1 + PASTE_WIDTH * sin(ANGLE_I1E1);

  // OK
  const ANGLE_IJ = atan((X_I1 - X_J1) / (Y_I1 - Y_J1));
  const ANGLE_I1E2 = ANGLE_EXTEND + ANGLE_IJ;
  const X_I1E2 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E2);
  const Y_I1E2 = Y_I1 - PASTE_WIDTH * sin(ANGLE_I1E2);

  const ANGLE_J1E1 = ANGLE_IJ - ANGLE_EXTEND; // OK
  const X_J1E1 = X_J1 + PASTE_WIDTH * cos(ANGLE_J1E1);
  const Y_J1E1 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E1);

  const ANGLE_JK = atan((X_J1 - X_K1) / (Y_K1 - Y_J1)); // OK
  const ANGLE_J1E2 = ANGLE_JK - ANGLE_EXTEND;
  const X_J1E2 = X_J1 - PASTE_WIDTH * cos(ANGLE_J1E2);
  const Y_J1E2 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E2);

  // const CONTENTS = '1,2,3,4,5,6,7,8,9,10'.split(',');
  // const TEXT_STYLE = `font-size:${5 * SIDE / 10}mm`;

  const TEXT_STYLE = `font-size:${FONT_SIZE}`;
  const html = ''.concat(
    [
      // { x: (X_A2 + X_C2) * 0.5, y: (Y_A2 + Y_C2) * 0.5, rotate: 0 }, // 2OABC, 1
      // { x: (X_I1 + X_K1) * 0.5, y: (Y_I1 + Y_K1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 4 }, // 1OIJK, 2

      // { x: (X_E2 + X_G2) * 0.5, y: (Y_E2 + Y_G2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 2 }, // 2OEFG, 3
      // { x: (X_C1 + X_E1) * 0.5, y: (Y_C1 + Y_E1) * 0.5, rotate: - ANGLE_SMALL_DEGREE }, // 1OCDE, 4

      // { x: (X_I2 + X_K2) * 0.5, y: (Y_I2 + Y_K2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 4 }, // 2OIJK, 5
      // { x: (X_E1 + X_G1) * 0.5, y: (Y_E1 + Y_G1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 2 }, // 1OEFG, 6

      // { x: (X_G2 + X_I2) * 0.5, y: (Y_G2 + Y_I2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 3 }, // 2OGHI, 7
      // { x: (X_A1 + X_C1) * 0.5, y: (Y_A1 + Y_C1) * 0.5, rotate: 0 }, // 1OABC, 8

      // { x: (X_C2 + X_E2) * 0.5, y: (Y_C2 + Y_E2) * 0.5, rotate: ANGLE_SMALL_DEGREE }, // 2OCDE, 9
      // { x: (X_G1 + X_I1) * 0.5, y: (Y_G1 + Y_I1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 3 }, // 1OGHI, 10

      { x: (X_A2 + X_C2) * 0.5, y: (Y_A2 + Y_C2) * 0.5, rotate: 0 }, // 2OABC, 1
      { x: (X_G1 + X_I1) * 0.5, y: (Y_G1 + Y_I1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 3 },// 1OIJK, 2

      { x: (X_E2 + X_G2) * 0.5, y: (Y_E2 + Y_G2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 2 }, // 2OEFG, 3
      { x: (X_A1 + X_C1) * 0.5, y: (Y_A1 + Y_C1) * 0.5, rotate: 0 }, // 1OCDE, 4

      { x: (X_I2 + X_K2) * 0.5, y: (Y_I2 + Y_K2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 4 }, // 2OIJK, 5
      { x: (X_C1 + X_E1) * 0.5, y: (Y_C1 + Y_E1) * 0.5, rotate: - ANGLE_SMALL_DEGREE }, // 1OEFG, 6

      { x: (X_G2 + X_I2) * 0.5, y: (Y_G2 + Y_I2) * 0.5, rotate: ANGLE_SMALL_DEGREE * 3 }, // 2OGHI, 7
      { x: (X_I1 + X_K1) * 0.5, y: (Y_I1 + Y_K1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 4 },// 1OABC, 8

      { x: (X_C2 + X_E2) * 0.5, y: (Y_C2 + Y_E2) * 0.5, rotate: ANGLE_SMALL_DEGREE }, // 2OCDE, 9
      { x: (X_E1 + X_G1) * 0.5, y: (Y_E1 + Y_G1) * 0.5, rotate: 360 - ANGLE_SMALL_DEGREE * 2 },// 1OGHI, 10
    ].map(({ x, y, rotate }, i) => {
      const X = x, Y = y;

      // X, Y, STYLE, CONTENT, rotate
      return getSvgTextHtml(X, Y, TEXT_STYLE, CONTENTS[i], rotate);
    }).join(''),

    getOuterLine(X_B1E, X_B1, Y_B1E, Y_B1),
    getOuterLine(X_B1E, X_C1E1, Y_B1E, Y_C1E1),
    getOuterLine(X_C1E1, X_C1, Y_C1E1, Y_C1),

    // getOuterLine(X_C1, X_C1E2, Y_C1, Y_C1E2),
    // getOuterLine(X_C1E2, X_D1E1, Y_C1E2, Y_D1E1),
    // getOuterLine(X_D1E1, X_D1, Y_D1E1, Y_D1),
    getOuterLine(X_C1, X_C1E2, Y_C1, Y_C1E2),
    getOuterLine(X_C1E2, X_D1E1, Y_C1E2, Y_D1E1),
    getOuterLine(X_D1E1, X_D1, Y_D1E1, Y_D1),

    getOuterLine(X_D1, X_D1E2, Y_D1, Y_D1E2),
    getOuterLine(X_D1E2, X_E1E1, Y_D1E2, Y_E1E1),
    getOuterLine(X_E1E1, X_E1, Y_E1E1, Y_E1),

    getOuterLine(X_E1, X_E1E2, Y_E1, Y_E1E2),
    getOuterLine(X_E1E2, X_F1E1, Y_E1E2, Y_F1E1),
    getOuterLine(X_F1E1, X_F1, Y_F1E1, Y_F1),

    getOuterLine(X_F1, X_F1E2, Y_F1, Y_F1E2),
    getOuterLine(X_F1E2, X_G1E1, Y_F1E2, Y_G1E1),
    getOuterLine(X_G1E1, X_G1, Y_G1E1, Y_G1),

    getOuterLine(X_G1, X_G1E2, Y_G1, Y_G1E2),
    getOuterLine(X_G1E2, X_H1E1, Y_G1E2, Y_H1E1),
    getOuterLine(X_H1E1, X_H1, Y_H1E1, Y_H1),

    getOuterLine(X_H1, X_H1E2, Y_H1, Y_H1E2),
    getOuterLine(X_H1E2, X_I1E1, Y_H1E2, Y_I1E1),
    getOuterLine(X_I1E1, X_I1, Y_I1E1, Y_I1),

    getOuterLine(X_I1, X_I1E2, Y_I1, Y_I1E2),
    getOuterLine(X_I1E2, X_J1E1, Y_I1E2, Y_J1E1),
    getOuterLine(X_J1E1, X_J1, Y_J1E1, Y_J1),

    getOuterLine(X_J1, X_J1E2, Y_J1, Y_J1E2),
    getOuterLine(X_J1E2, X_K1E, Y_J1E2, Y_K1E),
    getOuterLine(X_K1E, X_K1, Y_K1E, Y_K1),
    // getOuterLine(X_J1E2, X_K1E1, Y_J1E2, Y_K1E1),
    // getOuterLine(X_K1E1, X_K1, Y_K1E1, Y_K1),

    // getOuterLine(X_K1, X_K1E2, Y_K1, Y_K1E2),
    // getOuterLine(X_K1E2, X_1E1, Y_K1E2, Y_1E1),
    // getOuterLine(X_1E1, X_1, Y_1E1, Y_1),

    getOuterLine(X_O1, X_K1, Y_O1, Y_K1),
    getInnerLine(X_K1, X_J1, Y_K1, Y_J1),
    getInnerLine(X_J1, X_I1, Y_J1, Y_I1),
    getInnerLine(X_I1, X_H1, Y_I1, Y_H1),
    getInnerLine(X_H1, X_G1, Y_H1, Y_G1),
    getInnerLine(X_G1, X_F1, Y_G1, Y_F1),
    getInnerLine(X_F1, X_E1, Y_F1, Y_E1),
    getInnerLine(X_E1, X_D1, Y_E1, Y_D1),
    getInnerLine(X_D1, X_C1, Y_D1, Y_C1),
    getInnerLine(X_C1, X_B1, Y_C1, Y_B1),
    getInnerLine(X_B1, X_A1, Y_B1, Y_A1),
    getInnerLine(X_O1, X_I1, Y_O1, Y_I1),
    getInnerLine(X_O1, X_G1, Y_O1, Y_G1),
    getInnerLine(X_O1, X_E1, Y_O1, Y_E1),
    getInnerLine(X_O1, X_C1, Y_O1, Y_C1),
    getInnerLine(X_O1, X_A1, Y_O1, Y_A1),

    getOuterLine(X_O2, X_K2, Y_O2, Y_K2),
    getOuterLine(X_K2, X_J2, Y_K2, Y_J2),
    getOuterLine(X_J2, X_I2, Y_J2, Y_I2),
    getOuterLine(X_I2, X_H2, Y_I2, Y_H2),
    getOuterLine(X_H2, X_G2, Y_H2, Y_G2),
    getOuterLine(X_G2, X_F2, Y_G2, Y_F2),
    getOuterLine(X_F2, X_E2, Y_F2, Y_E2),
    getOuterLine(X_E2, X_D2, Y_E2, Y_D2),
    getOuterLine(X_D2, X_C2, Y_D2, Y_C2),
    getInnerLine(X_C2, X_B2, Y_C2, Y_B2),
    getOuterLine(X_B2, X_A2, Y_B2, Y_A2),
    getInnerLine(X_O2, X_I2, Y_O2, Y_I2),
    getInnerLine(X_O2, X_G2, Y_O2, Y_G2),
    getInnerLine(X_O2, X_E2, Y_O2, Y_E2),
    getInnerLine(X_O2, X_C2, Y_O2, Y_C2),
    getInnerLine(X_O2, X_A2, Y_O2, Y_A2),

    getOuterLine(X_O1, X_O1E, Y_O1, Y_O1E),
    getOuterLine(X_O1E, X_A1E, Y_O1E, Y_A1E),
    getOuterLine(X_A1E, X_A1, Y_A1E, Y_A1),

    getOuterLine(X_K1E, X_K1, Y_K1E, Y_K1),

    getOuterLine(X_O2, X_O2E, Y_O2, Y_O2E),
    getOuterLine(X_O2E, X_A2E, Y_O2E, Y_A2E),
    getOuterLine(X_A2E, X_A2, Y_A2E, Y_A2),
  );
  // console.log(X_O2, X_O2E, Y_O2, Y_O2E);

  // const SVG_WIDTH = max(X_A1, X_B1, X_C1, X_D1, X_E1, X_F1, X_G1, X_H1, X_I1, X_J1, X_K1,
  //   X_A2, X_B2, X_C2, X_D2, X_E2, X_F2, X_G2, X_H2, X_I2, X_J2, X_K2)
  //   - min(X_A1, X_B1, X_C1, X_D1, X_E1, X_F1, X_G1, X_H1, X_I1, X_J1, X_K1,
  //     X_A2, X_B2, X_C2, X_D2, X_E2, X_F2, X_G2, X_H2, X_I2, X_J2, X_K2);
  // const SVG_HEIGHT = max(Y_A1, Y_B1, Y_C1, Y_D1, Y_E1, Y_F1, Y_G1, Y_H1, Y_I1, Y_J1, Y_K1,
  //   Y_A2, Y_B2, Y_C2, Y_D2, Y_E2, Y_F2, Y_G2, Y_H2, Y_I2, Y_J2, Y_K2)
  //   - min(Y_A1, Y_B1, Y_C1, Y_D1, Y_E1, Y_F1, Y_G1, Y_H1, Y_I1, Y_J1, Y_K1,
  //     Y_A2, Y_B2, Y_C2, Y_D2, Y_E2, Y_F2, Y_G2, Y_H2, Y_I2, Y_J2, Y_K2);


  const MAX_X = max(X_A1, X_B1, X_C1, X_D1, X_E1, X_F1, X_G1, X_H1, X_I1, X_J1, X_K1,
    X_A2, X_B2, X_C2, X_D2, X_E2, X_F2, X_G2, X_H2, X_I2, X_J2, X_K2,
    X_F1E2, X_F1E1, X_E1E2, X_E1E1,
  ) + SIDE * 0.1;
  const MIN_X = min(X_A1, X_B1, X_C1, X_D1, X_E1, X_F1, X_G1, X_H1, X_I1, X_J1, X_K1,
    X_A2, X_B2, X_C2, X_D2, X_E2, X_F2, X_G2, X_H2, X_I2, X_J2, X_K2);
  const MAX_Y = max(Y_A1, Y_B1, Y_C1, Y_D1, Y_E1, Y_F1, Y_G1, Y_H1, Y_I1, Y_J1, Y_K1,
    Y_A2, Y_B2, Y_C2, Y_D2, Y_E2, Y_F2, Y_G2, Y_H2, Y_I2, Y_J2, Y_K2);
  const MIN_Y = min(Y_A1, Y_B1, Y_C1, Y_D1, Y_E1, Y_F1, Y_G1, Y_H1, Y_I1, Y_J1, Y_K1,
    Y_A2, Y_B2, Y_C2, Y_D2, Y_E2, Y_F2, Y_G2, Y_H2, Y_I2, Y_J2, Y_K2);

  const SVG_WIDTH = MAX_X;
  const SVG_HEIGHT = MAX_Y;

  // console.log(MAX_X, MIN_X, MAX_X - MIN_X, MAX_Y, MIN_Y, MAX_Y - MIN_Y);

  return {
    html: html,
    width: SVG_WIDTH,
    height: SVG_HEIGHT,
  };
}
draw();
