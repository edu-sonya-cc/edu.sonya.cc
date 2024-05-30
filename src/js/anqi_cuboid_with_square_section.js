
// ?top=4&left=3.5&landscape=false&a3=true
function draw() {
  setF1Content('?lang=en&landscape=false&no=1\nlang:en, zh_cn, zh_tw\nlandscape:true, false\nno:1,2');

  // Force to A3 paper, and use the default margins.
  const ORIGINAL_URL = window.location.href;
  parseExpressBoxParamsFromUrl(ORIGINAL_URL);
  parsePageParamsFromUrl(ORIGINAL_URL);

  const url = `&a3=true&landscape=${LANDSCAPE}&lang=${LANG}&no=${NO}`;
  parsePageParamsFromUrl(url);
  parseExpressBoxParamsFromUrl(url);

  document.getElementsByTagName('title')[0].innerText = `${[
    {
      en: 'A3 Cuboid with Square Section Landscape ',
      zh_cn: 'A3_带正方形截面的长方体_横排',
      zh_tw: 'A3_帶正方形截面的長方體_橫排',
    },
    {
      en: 'A3 Cuboid with Square Section Portrait ',
      zh_cn: 'A3_带正方形截面的长方体_竖排',
      zh_tw: 'A3_帶正方形截面的長方體_豎排',
    },
  ][LANDSCAPE ? 0 : 1][LANG]}${NO}`;

  document.getElementById('style').innerHTML = getPageCss(
    A3,
    LANDSCAPE,
    PAGE_PADDING_TOP,
    PAGE_PADDING_LEFT,
  );



  const body = document.getElementsByTagName('body')[0];

  const pageElement = createPageElement();
  body.appendChild(pageElement);

  if (LANDSCAPE) {
    switch (NO) {
      case 1:
      default:
        appendLandscapeDices1(pageElement);
        break;
      case 2:
        appendLandscapeDices2(pageElement);
        break;
    }
  } else {
    appendPortraitDices(pageElement);
  }

  window.print();
}

function appendPortraitDices(pageElement) {
  createAndAppendCuboids(pageElement, 80, 40, 12, 3);
  createAndAppendCuboids(pageElement, 40, 20, 6, 4);
  createAndAppendCuboids(pageElement, 20, 10, 4, 12);

  const { ceil, floor } = Math;
  const LONG = 10, SIDE = 5, PASTE_WIDTH = 4;

  function getSvgElements(COUNT) {
    return createAndAppendCuboids(pageElement, LONG, SIDE, PASTE_WIDTH, COUNT);
  }

  getSvgElements(24 + 1);

  getSvgElements(12).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 40 * 6}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 2 * floor(i / 4) + 40 * 1.5 * floor(i % 4 / 2) + 40 * 0.25 * (i % 2)}mm`;
  });
  getSvgElements(12).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 40 * 6 + 12}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 0.5 + 40 * 2 * floor(i / 4) + 40 * 0.25 * (i % 4)}mm`;
  });
  getSvgElements(2).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.transform = 'rotate(90deg)';
    svgStyle.right = `-8mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 1.5 + 40 * 2 * i + 12}mm`;
  });

  getSvgElements(4).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 20 * 6 * 2 + 6}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 2 * 3 + 20 * 2 * floor(i / 2) + 20 * 1.5 * floor(i % 2)}mm`;
  });
  getSvgElements(4).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 20 * 6 * 2 + 6 * 2}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 2 * 3 + 20 * 2 * floor(i / 2) + 20 * 0.5 + 20 * 0.5 * floor(i % 2)}mm`;
  });

  getSvgElements(5).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + (10 * 6 + 4) * 4}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 40 * 2 * 3 + 20 * 2 * 2 + 10 * i}mm`;
  });
  getSvgElements(1).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.transform = 'rotate(90deg)';
    svgStyle.right = `-8mm`;
    svgStyle.bottom = `11mm`;
  });
}

function appendLandscapeDices1(pageElement) {
  // Count： 1, 2, 8, 14, 19
  [
    { long: 128, side: 64, pasteWidth: 16, count: 1 },
    { long: 64, side: 32, pasteWidth: 8, count: 2 },
    { long: 32, side: 16, pasteWidth: 4, count: 8 },
    { long: 16, side: 8, pasteWidth: 4, count: 14 },

    // { long:8, side:4, pasteWidth: 4, count: 14 },
  ].forEach(({ long, side, pasteWidth, count }) => {
    createAndAppendCuboids(pageElement, long, side, pasteWidth, count);
  });

  const { ceil, floor } = Math;
  // const LONG = 16, SIDE = 8, PASTE_WIDTH = 4;
  const LONG = 8, SIDE = 4, PASTE_WIDTH = 4;

  function getSvgElements(COUNT) {
    return createAndAppendCuboids(pageElement, LONG, SIDE, PASTE_WIDTH, COUNT);
  }

  getSvgElements(8).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 64 * 6}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 64 * 1.5 * floor(i / 4) + SIDE * 2 * (i % 4)}mm`;
  });

  getSvgElements(7).forEach((svgElement, i) => {
    rotate90(svgElement);

    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    const { widthMm: WIDTH } = svgElement;
    svgStyle.left = `${PAGE_PADDING_LEFT + 64 * 6 + 16}mm`;
    if (i < 2) {
      svgStyle.top = `${PAGE_PADDING_TOP + 64 * 0.5 + WIDTH * (i % 2)}mm`;
    } else {
      svgStyle.top = `${PAGE_PADDING_TOP + 64 * 2 + WIDTH * ((i - 2) % 5)}mm`;
    }
  });

  // Right of { long:8, side:4, pasteWidth: 4 }
  {
    const LEFT = PAGE_PADDING_LEFT + (8 * 6 + 4) * 7;
    const HEIGHT = SIDE * 2;

    getSvgElements(4).forEach((svgElement, i) => {
      const svgStyle = svgElement.style;
      svgStyle.position = 'absolute';

      svgStyle.left = `${LEFT}mm`;
      svgStyle.bottom = `${HEIGHT * i}mm`;
    });
  }
}

function appendLandscapeDices2(pageElement) {
  // Count： 1, 4, 4, 0, 17
  [
    { long: 128, side: 64, pasteWidth: 16, count: 1 },
    { long: 64, side: 32, pasteWidth: 8, count: 4 },
    { long: 32, side: 16, pasteWidth: 4, count: 4 },

  ].forEach(({ long, side, pasteWidth, count }) => {
    createAndAppendCuboids(pageElement, long, side, pasteWidth, count);
  });

  const { ceil, floor } = Math;
  // const LONG = 16, SIDE = 8, PASTE_WIDTH = 4;
  const LONG = 8, SIDE = 4, PASTE_WIDTH = 4;

  function getSvgElements(COUNT) {
    return createAndAppendCuboids(pageElement, LONG, SIDE, PASTE_WIDTH, COUNT);
  }

  getSvgElements(8).forEach((svgElement, i) => {
    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 64 * 6}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 64 * 1.5 * floor(i / 4) + SIDE * 2 * (i % 4)}mm`;
  });

  getSvgElements(7).forEach((svgElement, i) => {
    rotate90(svgElement);

    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    const { widthMm: WIDTH } = svgElement;
    svgStyle.left = `${PAGE_PADDING_LEFT + 64 * 6 + 16}mm`;
    if (i < 2) {
      svgStyle.top = `${PAGE_PADDING_TOP + 64 * 0.5 + WIDTH * (i % 2)}mm`;
    } else {
      svgStyle.top = `${PAGE_PADDING_TOP + 64 * 2 + WIDTH * ((i - 2) % 5)}mm`;
    }
  });

  getSvgElements(2).forEach((svgElement, i) => {
    rotate90(svgElement);

    const svgStyle = svgElement.style;
    svgStyle.position = 'absolute';

    svgStyle.left = `${PAGE_PADDING_LEFT + 32 * 6 * (i + 1) + 8 * i}mm`;
    svgStyle.top = `${PAGE_PADDING_TOP + 64 * 2 + 32 * 1.5}mm`;
  });
}

draw();
