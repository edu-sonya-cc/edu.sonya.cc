/*
  Author: anqisoft@gmail.com
  Date: 2023-09-22
*/

let ANOTHER_CSS = '';
let LANG = 'zh_cn';

function getFixedHtml(original) {
  if (!original || !original.length) {
    return '';
  }
  return original.replace(/([69])/g, `<span style="text-decoration:underline;">$1</span>`);
}

function getPokerHtmlOfCarryAdditionLessThan20() {
  // 9+1=10, 9+2=11, ..., 9+9=18, 8+2=10, 8+3=11, ..., 8+9=17, ..., 1+9=10
  let html = '';
  for (let i = 9; i > 0; --i) {
    for (let j = 10 - i; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i}&nbsp;+&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i + j}`)}</answer></topic>`;
    }
  }

  return `${html}${html}`;
}


function getPokerHtmlOfCarryAdditionLessThan20() {
  // 9+1=10, 9+2=11, ..., 9+9=18, 8+2=10, 8+3=11, ..., 8+9=17, ..., 1+9=10
  let html = '';
  for (let i = 9; i > 0; --i) {
    for (let j = 10 - i; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i}&nbsp;+&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i + j}`)}</answer></topic>`;
    }
  }

  return `${html}${html}`;
}

function getPokerHtmlOfAbdicationMinusLessThan20() {
  // 10-1=9, 10-2=8, ..., 10-9=1, 11-2=9, 11-3=8, ..., 11-9=2, ..., 18-9=9
  let html = '';
  for (let i = 10; i < 19; ++i) {
    for (let j = i - 9; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i}&nbsp;-&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i - j}`)}</answer></topic>`;
    }
  }

  return `${html}${html}`;
}

function getPokerHtmlOfMultiplicationFormulasFullLessThan9() {
  let html = '';
  for (let i = 1; i < 10; ++i) {
    for (let j = 1; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i}&nbsp;×&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i * j}`)}</answer></topic>`;
    }
  }

  return `${html}`;
}

function getPokerHtmlOfDivisionTableLessThan9() {
  let html = '';
  for (let i = 1; i < 10; ++i) {
    for (let j = 1; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i * j}&nbsp;÷&nbsp;${i}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${j}`)}</answer></topic>`;
    }
  }

  return `${html}`;
}


function getPokerHtmlOfMultiplicationFormulasSimpleLessThan9() {
  let html = '';
  for (let i = 1; i < 10; ++i) {
    for (let j = i; j < 10; ++j) {
      html += `<topic><question>${getFixedHtml(
        `${i}&nbsp;×&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i * j}`)}</answer></topic>`;
    }
  }

  return `${html}${html}`;
}



function getPokerHtmlOfCarryAdditionAndAbdicationMinusLessThan20() {
  // 9+1=10, 9+2=11, ..., 9+9=18, 8+2=10, 8+3=11, ..., 8+9=17, ..., 1+9=10
  let htmlA = '';
  for (let i = 9; i > 0; --i) {
    for (let j = 10 - i; j < 10; ++j) {
      htmlA += `<topic><question>${getFixedHtml(
        `${i}&nbsp;+&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i + j}`)}</answer></topic>`;
    }
  }
  htmlA += htmlA;

  // 10-1=9, 10-2=8, ..., 10-9=1, 11-2=9, 11-3=8, ..., 11-9=2, ..., 18-9=9
  // Changed the order.
  let htmlB = '';
  for (let i = 18; i >= 10; --i) {
    for (let j = 9; j >= i - 9; --j) {
      htmlB += `<topic><question>${getFixedHtml(
        `${i}&nbsp;-&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i - j}`)}</answer></topic>`;
    }
  }
  htmlB += htmlB;

  return { htmlA, htmlB };
}

function getPokerHtmlOfMultiplicationTableAndDivisionTableLessThan9() {
  let htmlA = '';
  for (let i = 1; i < 10; ++i) {
    for (let j = i; j < 10; ++j) {
      htmlA += `<topic><question>${getFixedHtml(
        `${i}&nbsp;×&nbsp;${j}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${i * j}`)}</answer></topic>`;
    }
  }
  htmlA += htmlA;

  // Changed the order.
  let htmlB = '';
  // for (let i = 9; i >= 1; --i) {
  //   for (let j = 9; j >= i; --j) {
  //     htmlB += `<topic><question>${getFixedHtml(
  //       `${i * j}&nbsp;÷&nbsp;${i}`,
  //     )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${j}`)}</answer></topic>`;
  //   }
  // }
  // htmlB += htmlB;
  for (let i = 9; i >= 1; --i) {
    for (let j = 9; j >= 1; --j) {
      if (i === 1 && j === 1) { continue; }

      htmlB += `<topic><question>${getFixedHtml(
        `${i * j}&nbsp;÷&nbsp;${i}`,
      )}&nbsp;=&nbsp;</question><answer>${getFixedHtml(`${j}`)}</answer></topic>`;
    }
  }

  return { htmlA, htmlB };
}

function getMiniPokerCss(sameColor) {
  return getPageCss(
    A3,
    LANDSCAPE,
    PAGE_PADDING_TOP,
    PAGE_PADDING_LEFT,
  ).concat(
    // https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
    'page{overflow:hidden;display:-webkit-flex;display:flex;flex-flow:row wrap;justify-content:center;align-items:flex-start;align-content:flex-start;}',
    'page{font-size:32;font-family:"Times New Roman", "KaiTi";}',
    ('undefined' === typeof sameColor || sameColor) ? '' : 'page:nth-of-type(2n){color:#F00;}',
    'topic,question, answer{height:16mm;}',
    'topic{display:flex;width:52mm;}',
    'question, answer{display:inline-flex;border-radius:4mm;border:1px solid #999;align-items:center;}answer{border-radius:2mm;}',
    'question{width:36mm;justify-content:flex-end;}',
    'answer{width:16mm;justify-content: center;}',

    'page:nth-of-type(2n), page:nth-of-type(2n) topic{flex-direction:row-reverse;}',

    // AnQi, 2023-09-22
    // <en>Cancel the border lines on the back page, because printers often have deviations that make it difficult to align horizontally.</en>
    // <zh_cn>取消背面页的框线，因为打印机经常有偏差而导致横向难以对齐。</zh_cn>
    // <zh_tw>取消背面頁的框線，因為打印機經常有偏差而導致橫向難以對齊。</zh_tw>
    // 'page:nth-of-type(2n) question, page:nth-of-type(2n) answer{border-left-color:transparent;border-right-color:transparent;border-radius:0;}',
    'page:nth-of-type(2n) question, page:nth-of-type(2n) answer{border-color:transparent;border-radius:0;}',
    // AnQi, 2023-09-22
    // <en>In order to facilitate cutting the transparent edges after converting the PDF to the picture, the first question retains the upper border, and the last answer retains the lower border.</en>
    // <zh_cn>为方便pdf转图片后切透明边，第一个题目保留上边线，最后一个答案保留下边线。</zh_cn>
    // <zh_tw>為方便pdf轉圖片後切透明邊，第一個題目保留上邊線，最後一個答案保留下邊線。</zh_tw >
    'page:nth-of-type(2n) topic:first-of-type question{border-top-color:#999;}',
    'page:nth-of-type(2n) topic:last-of-type answer{border-bottom-color:#999;}',
  );
}

// use ./anqi_mini_poker.js
function getFirstPageAppendHtml(BIG_COVER_TEXT, SMALL_COVER_TEXT, USED_DICES) {
  const { BoxGenerator, BoxKind } = boxSpace.edu.sonya.cc;
  const boxGenerator = new BoxGenerator();

  const ROTATE = false;
  const MOVE = false;
  const TOP_WITHOUT_HALF_CIRCLE = false;
  const OUTER_LINE_STYLE = 'stroke:#555;stroke-width:0.2mm;';
  const INNER_LINE_STYLE = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
  // const TEXT_STYLE = `font-size:${window.LANG === 'en' ? 3.5 : 4.5}mm;font-family:"Times New Roman", "Kaiti";`;
  const TEXT_STYLE = 'font-size:4.5mm;font-family:"Times New Roman", "Kaiti";';
  const OPTIONS = {};

  let svgId = 0;
  let html = '';

  [
    { WIDTH: 54, POKER_COVER_TEXT: BIG_COVER_TEXT },
    { WIDTH: 18, POKER_COVER_TEXT: SMALL_COVER_TEXT },
  ].forEach(({ WIDTH, POKER_COVER_TEXT }, n) => {
    // const LENGTHS = [WIDTH, 30, 20]; // 206*100、130*100
    // const LENGTHS = [30, WIDTH, 20]; // 234*156、120*80
    // const LENGTHS = [WIDTH, 20, 30]; // 176*90, 100*90
    // const LENGTHS = [WIDTH, 20, 28];
    const ADDITIONAL_SPACE = 1 * (n === 0 ? 2 : 1);
    const LENGTHS = [WIDTH + ADDITIONAL_SPACE, 18 + ADDITIONAL_SPACE, 22 + ADDITIONAL_SPACE];
    const CONTENTS = [
      POKER_COVER_TEXT.replace(/<br>/g, ''),
      POKER_COVER_TEXT,
      POKER_COVER_TEXT.replace(/<br>/g, ''),
      POKER_COVER_TEXT.replace(/<br>/g, ''),
      POKER_COVER_TEXT,
      POKER_COVER_TEXT.replace(/<br>/g, ''),
    ];

    // boxGenerator.create() => { id, svg: nested ? outerSvg : svg, css }
    html += boxGenerator.create({
      id: `svg_${++svgId}`,
      boxKind: BoxKind.cuboid,
      lengths: LENGTHS,
      contents: CONTENTS,
      outerLineStyle: OUTER_LINE_STYLE,
      innerLineStyle: INNER_LINE_STYLE,
      textStyle: TEXT_STYLE,
      rotate: ROTATE,
      move: MOVE,
      topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE,
      options: OPTIONS,
    }).svg.outerHTML;
  });

  for (let i = 0; i < 8; ++i) {
    const SIDE = 10;  // (i > 0 && i < 4) ? 7.5 : 8;  // i === 0 ? 8 : 7;
    const LENGTHS = [SIDE, SIDE, SIDE];
    // const CONTENTS = i % 2 === 0 ? ['1', '2', '3', '4', '5', '6'] : ['0', '1', '2', '3', '4', '5'];
    const CONTENTS = i === 0 ? ['0', '1', '2', '3', '4', '5'] : ['1', '2', '3', '4', '5', '6'];
    html += boxGenerator.create({
      id: `svg_${++svgId}`,
      boxKind: BoxKind.cuboid,
      lengths: LENGTHS,
      contents: CONTENTS,
      outerLineStyle: OUTER_LINE_STYLE,
      innerLineStyle: INNER_LINE_STYLE,
      textStyle: TEXT_STYLE,
      rotate: ROTATE,
      move: MOVE,
      topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE,
      options: OPTIONS,
    }).svg.outerHTML;
  }

  for (let i = 0; i < 14; ++i) {
    const SIDE = 5;
    const LENGTHS = [SIDE, SIDE, SIDE];
    // const CONTENTS = i % 2 === 0 ? ['1', '2', '3', '4', '5', '6'] : ['0', '1', '2', '3', '4', '5'];
    const CONTENTS = i === 0 ? ['0', '1', '2', '3', '4', '5'] : ['1', '2', '3', '4', '5', '6'];
    html += boxGenerator.create({
      id: `svg_${++svgId}`,
      boxKind: BoxKind.cuboid,
      lengths: LENGTHS,
      contents: CONTENTS,
      outerLineStyle: OUTER_LINE_STYLE,
      innerLineStyle: INNER_LINE_STYLE,
      textStyle: 'font-size:3mm;font-family:"Times New Roman", "Kaiti";', //TEXT_STYLE,
      rotate: ROTATE,
      move: MOVE,
      topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE,
      options: OPTIONS,
    }).svg.outerHTML;
  }

  // const { USED_DICES, html: DICES_HTML, css: DICES_CSS } = getDicesInfo();
  const { html: DICES_HTML, css: DICES_CSS } = getDicesInfo(USED_DICES);
  // console.log(DICES_CSS);
  if (USED_DICES) {
    html += DICES_HTML;
  }

  return `<div>${html}</div>`.concat(
    '<style>',
    'page>div{margin-top:0.5mm;position:relative;height:124mm;box-sizing:border-box;padding-top:20mm;}',

    'page div>svg{position:absolute;}',

    '#svg_1,#svg_2{position:relative;}#svg_2{top:1mm;}',

    '#svg_3,#svg_5,#svg_6{ top: 0;}',
    '#svg_4,#svg_7,#svg_8{ bottom: 0mm;}',

    // '#svg_3{bottom:unset; top:5mm;right:40mm;transform:rotate(90deg); }',
    // '#svg_4{bottom:unset; top:5mm;right:65mm;transform:rotate(90deg); }',

    // '#svg_3{right:18mm; }',
    // '#svg_4{bottom:unset; top:5mm;right:65mm;transform:rotate(90deg); }',

    // '#svg_3{right:18mm; }',
    // '#svg_4{bottom:unset; top:5mm;right:55mm;transform:rotate(90deg); }',

    '#svg_3{right:28mm; }',
    '#svg_4{bottom:unset; top:5mm;right:64mm;transform:rotate(90deg); }',

    '#svg_5{bottom:unset; top:5mm;left:0mm;transform:rotate(90deg); }',
    '#svg_6{bottom:unset; top:5mm;left:25mm;transform:rotate(90deg); }',

    // '#svg_5{left:0mm;}',
    // '#svg_6{left:50mm;}',
    // '#svg_7{left:91mm;bottom:0mm;}',
    // '#svg_8{left:141mm;bottom:0mm;}',
    // '#svg_7{left:75mm;bottom:0mm;}',
    // '#svg_8{left:134mm;bottom:0mm;}',

    '#svg_7, #svg_8, #svg_9{bottom:5mm;transform:rotate(90deg); }',
    '#svg_7{left:90mm;}',
    '#svg_8{left:115mm;}',
    '#svg_9{left:140mm;}',

    '#svg_10{bottom:7.5mm;right:0mm; }',

    // AnQi, add 11 to 24 of 4-faces dices.
    '#svg_11,#svg_12,#svg_13,#svg_14{top:0mm;}',
    '#svg_11{left:55mm;}',
    '#svg_12{left:80mm;}',
    '#svg_13{left:105mm;}',
    '#svg_14{left:130mm;}',

    '#svg_15,#svg_16,#svg_17{bottom:0mm;}',
    '#svg_15{left:0mm;}',
    '#svg_16{left:25mm;}',
    '#svg_17{left:50mm;}',

    '#svg_18,#svg_19,#svg_20{transform:rotate(90deg);}',
    '#svg_18,#svg_19{bottom:1.75mm;}',
    '#svg_18{left:73mm;}',
    '#svg_19{left:88mm;}',
    '#svg_20{left:-3mm;top:25mm;}',

    '#svg_21,#svg_22{transform:rotate(90deg); }',
    '#svg_21{top:2.5mm;right:10.5mm;}',
    '#svg_22{top:22.5mm;right:-3mm;}',

    '#svg_23{bottom:0mm;right:45mm;}',
    '#svg_24{bottom:0mm;right:0mm;}',

    USED_DICES ? DICES_CSS : '',
    ANOTHER_CSS,
    '</style>'
  );
}

function getDicesInfo2(USED_DICES) {
  // const USED_DICES = typeof edu !== 'undefined'
  //   && typeof edu.sonya !== 'undefined'
  //   && typeof edu.sonya.cc !== 'undefined'
  //   && typeof edu.sonya.cc.DiceGenerator !== 'undefined'
  //   ;
  const HTML = !USED_DICES ? '' : (() => {
    const diceGenerator = new edu.sonya.cc.DiceGenerator();
    const DiceKind = edu.sonya.cc.DiceKind;

    let
      svgId = 21,
      contents,
      diceKind,
      sideLength,
      outerLineStyle,
      innerLineStyle,
      textStyle,
      options;

    diceKind = DiceKind.four;
    sideLength = 10;
    contents = '1,2,3,4'.split(',');
    outerLineStyle = 'stroke:#555;stroke-width:0.2mm;';
    innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
    // textStyle= 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";';
    textStyle = 'font-size:3mm;font-family: "Kaiti";';
    options = {};

    let html = '';
    svgId = 41;
    // for (let i = 0; i < 10; ++i) {
    for (let i = 0; i < 23; ++i) {
      html += diceGenerator.create({
        id: `svg_${svgId++}`,
        diceKind,
        sideLength,
        // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
        contents,
        outerLineStyle,
        innerLineStyle,
        // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        textStyle,
        options,
      }).svg.outerHTML;
    }

    sideLength = 10;
    svgId = 81;
    diceKind = DiceKind.eight;
    contents = '1,2,3,4,5,6,7,8'.split(',');
    // contents = ',,,,,,,'.split(',');
    for (let i = 0; i < 4; ++i) {
      html += diceGenerator.create({
        id: `svg_${svgId++}`,
        diceKind,
        sideLength,
        // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
        contents,
        outerLineStyle,
        innerLineStyle,
        // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        textStyle,
        options,
      }).svg.outerHTML;
    }

    sideLength = 10;
    svgId = 121;
    diceKind = DiceKind.twelve;
    // contents = ',,,,,,,,,,,'.split(',');
    contents = '1,2,3,4,5,6,7,8,9,10,11,12'.split(',');
    for (let i = 0; i < 1; ++i) {
      html += diceGenerator.create({
        id: `svg_${svgId++}`,
        diceKind,
        sideLength,
        // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
        contents,
        outerLineStyle,
        innerLineStyle,
        // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        textStyle,
        options,
      }).svg.outerHTML;
    }


    sideLength = 15;
    svgId = 201;
    diceKind = DiceKind.twenty;
    // contents = ',,,,,,,,,,,,,,,,,,,'.split(',');
    // contents = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'.split(',');
    // contents = '1,2,3,4,5,20,19,18,17,16,11,12,13,14,15,10,9,8,7,6'.split(',');

    // 未修改dice代码前，直接强行修正
    // contents = '1,5,9,13,17,18,15,19,11,14,10,7,3,6,2,12,8,4,20,16'.split(',');
    contents = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'.split(',');
    for (let i = 0; i < 1; ++i) {
      html += diceGenerator.create({
        id: `svg_${svgId++}`,
        diceKind,
        sideLength,
        // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
        contents,
        outerLineStyle,
        innerLineStyle,
        // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        textStyle,
        options,
      }).svg.outerHTML;
    }


    sideLength = 8;
    // sideLength = 25;
    svgId = 241;
    diceKind = DiceKind.twentyFour;
    // contents = ',,,,,,,,,,,,,,,,,,,,,,,'.split(',');
    contents = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24'.split(',');
    for (let i = 0; i < 1; ++i) {
      html += diceGenerator.create({
        id: `svg_${svgId++}`,
        diceKind,
        sideLength,
        // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
        contents,
        outerLineStyle,
        innerLineStyle,
        // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
        // textStyle,
        textStyle: 'font-size:3mm;font-family:"Times New Roman", "Kaiti";',
        options,
      }).svg.outerHTML;
    }

    return html;
  })();
  return {
    USED_DICES,
    html: HTML,
    css: USED_DICES ? ''.concat(
      // '#svg_21{left:-3mm;top: 25mm;transform: rotate(-28deg);}',
      // '#svg_22,#svg_23{right: 0mm;transform:rotate(-18deg)}',
      // '#svg_22{top:0mm;}',
      // '#svg_23{top:22mm;}',

      // '#svg_24,#svg_25{top:0mm;}',
      // '#svg_24{left:92mm;}',
      // '#svg_25{left:113mm;}',

      // '#svg_26,#svg_27{bottom:0mm;}',
      // '#svg_26{left:35mm;transform:rotate(180deg);}',
      // '#svg_27{left:49mm;}',

      // '#svg_28,#svg_29,#svg_30{bottom:0mm;}',
      // '#svg_28{right:44mm;}',
      // '#svg_29{right: 60mm;transform:rotate(180deg); }',
      // '#svg_50{transform:rotate(-17deg);right:22mm;bottom:29mm;}',

      // // '#svg_51,#svg_52{top:0mm;}',
      // // '#svg_51{left:56mm;}',
      // // '#svg_52{left:130.5mm;}',

      // '#svg_53,#svg_54{bottom:0mm;}',
      // '#svg_53{left:2mm;}',
      // '#svg_54{left:62mm;}',

      // '#svg_121{top:-15mm;left:0mm;}',
      // '#svg_52{top:0mm;left:130.5mm;}',
      // '#svg_51{top:23mm;left:20mm;}',
      // '#svg_21{left: 0mm;top: 25mm;transform:unset;}',

      '#svg_11,#svg_12,#svg_13,#svg_14,#svg_15,#svg_16,#svg_17,#svg_18,#svg_19{display:none;}',
      '#svg_20,#svg_21,#svg_22,#svg_23,#svg_24{display:none;}',

      '#svg_41{left:-3mm;top: 25mm;transform: rotate(-28deg);}',

      '#svg_42,#svg_43,#svg_44{transform: rotate(180deg);}',
      '#svg_42,#svg_62{top:-15mm;left:75mm;}#svg_62{left:89mm;}',
      '#svg_43{top:30mm;left:55mm;}',
      '#svg_44{left:83mm;top:10mm;}',
      '#svg_45{left:113mm;top:0mm;}',

      // '#svg_44,#svg_45{top:0mm;}',
      // '#svg_44{left:92mm;}',
      // '#svg_45{left:113mm;}',

      '#svg_46,#svg_47{bottom:0mm;}',
      '#svg_46{left:35mm;transform:rotate(180deg);}',
      '#svg_47{left:49mm;}',

      '#svg_48,#svg_49,#svg_30{bottom:0mm;}',
      '#svg_48{right:44mm;}',
      '#svg_49{right: 60mm;transform:rotate(180deg); }',
      // '#svg_50{transform:rotate(-17deg);right:22mm;bottom:29mm;}',
      '#svg_50{right:0mm;bottom:0mm;}',
      '#svg_51{left: 167mm;top: 17mm;transform: rotate(180deg);}',
      '#svg_52{left:174mm;top:34mm;}',
      '#svg_53{left: 207.75mm;top: 24mm;}',

      '#svg_54{top: -15mm;right: 24mm;}',
      '#svg_55{top:-15mm;right:10mm;transform: rotate(180deg);}',

      '#svg_56{top: 5mm;right: 10.5mm;}',
      // '#svg_57{top: 21mm;right: 2mm;transform: rotate(-41deg);}',
      '#svg_57{top:-1mm;right:1mm;transform: rotate(-61deg);}',
      '#svg_58{bottom: 28mm;left: 90mm;transform: rotate(-16deg);}',
      '#svg_59{bottom: 31mm;left: 114mm;transform: rotate(180deg);}',
      '#svg_60{bottom: 31mm;left: 144mm;transform: rotate(180deg);}',
      '#svg_61{bottom:0mm;right:74mm;}',
      '#svg_63{top: 18mm;right: 1mm;transform: rotate(-60deg);}',

      // '#svg_81,#svg_82{top:0mm;}',
      // '#svg_81{left:56mm;}',
      // '#svg_82{left:130.5mm;}',

      '#svg_83,#svg_84{bottom:0mm;}',
      '#svg_83{left:2mm;}',
      '#svg_84{left:62mm;}',

      '#svg_121{top:-15mm;left:0mm;}',
      '#svg_82{top:0mm;left:130.5mm;}',
      '#svg_81{top:23mm;left:20mm;}',
      '#svg_41{left: 0mm;top: 25mm;transform:unset;}',

      // '#svg_201{top:0mm;right:10mm;}',
      '#svg_7,#svg_8,#svg_9{display:none;}',
      '#svg_201{bottom:0mm;left:100mm;}',
      // '#svg_241_wrapper{top:-15mm;right:29mm;position:absolute;}',
      '#svg_241{top:-15mm;right:29mm;position:absolute;}',
      // 'topic, div>svg{display:none;}#svg_241{display:inline-block;top:0mm;left:-120mm;}',

      'page>div{margin-top:1mm;}',
    )
      : '',
  }
}

function getDicesInfo3() {
  const { BoxGenerator, BoxKind } = boxSpace.edu.sonya.cc;
  const boxGenerator = new BoxGenerator();

  const ROTATE = false;
  const MOVE = false;
  const TOP_WITHOUT_HALF_CIRCLE = false;
  const OUTER_LINE_STYLE = 'stroke:#555;stroke-width:0.2mm;';
  const INNER_LINE_STYLE = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
  const TEXT_STYLE = 'font-size:3mm;font-family:"Times New Roman", "Kaiti";';
  const OPTIONS = {};

  let html = '';
  // 已有11到24
  // svgId = 10;
  // for (let i = 0; i < 21; ++i) {
  svgId = 24;
  for (let i = 0; i < 9; ++i) {
    const SIDE = 5;
    const LENGTHS = [SIDE, SIDE, SIDE];
    const CONTENTS = ['1', '2', '3', '4', '5', '6'];
    html += boxGenerator.create({
      id: `svg_${++svgId}`,
      boxKind: BoxKind.cuboid,
      lengths: LENGTHS,
      contents: CONTENTS,
      outerLineStyle: OUTER_LINE_STYLE,
      innerLineStyle: INNER_LINE_STYLE,
      textStyle: TEXT_STYLE,
      rotate: ROTATE,
      move: MOVE,
      topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE,
      options: OPTIONS,
    }).svg.outerHTML;
  }

  return {
    USED_DICES: true,
    html,
    css: ''.concat(
      '#svg_21{transform: unset;top:-15mm;left:0mm;}',

      // '#svg_22,#svg_23,#svg_24{transform:rotate(90deg);top:27.5mm;}',
      '#svg_22,#svg_23,#svg_24{top:-15mm;transform: unset;}',
      '#svg_22{left:29mm;}',
      '#svg_23{left:54mm;}',
      '#svg_24{left:79mm;}',

      // '#svg_3{right:28mm; }',
      // '#svg_4{bottom:unset; top:5mm;right:64mm;transform:rotate(90deg); }',
      // '#svg_3{right:18mm;}',
      // '#svg_4{right:55mm;}',

      '#svg_3{right:25mm;}',
      // ,#svg_30
      '#svg_25,#svg_26,#svg_27,#svg_28,#svg_29{transform:rotate(90deg);top:-13mm;}',
      // '#svg_25{left:58mm;}',
      // '#svg_26{left:71mm;}',
      // '#svg_27{left:84mm;}',
      // '#svg_25{left:182mm;}',
      // '#svg_26{left:195mm;}',
      // '#svg_27{left:208mm;}',
      '#svg_25{left:173mm;}',
      '#svg_26{left:186mm;}',
      '#svg_27{left:199mm;}',
      '#svg_28{left:222mm;}',
      '#svg_29{left:235mm;}',

      '#svg_30{top:4mm;right:0mm;}',
      '#svg_31{transform:rotate(90deg);top:22mm;right:-3mm;}',

      '#svg_32,#svg_33{bottom:0mm;right:0mm;}',
      '#svg_33{right:45mm;}',
    ),
  };
}


function getDicesInfo(USED_DICES) {
  // const USED_DICES = typeof edu !== 'undefined'
  //   && typeof edu.sonya !== 'undefined'
  //   && typeof edu.sonya.cc !== 'undefined'
  //   && typeof edu.sonya.cc.DiceGenerator !== 'undefined'
  //   ;
  return {
    USED_DICES,
    html: USED_DICES ? getDicesHtml() : '',
    css: USED_DICES ? ''.concat(
      // '#svg_11,#svg_12,#svg_13,#svg_14,#svg_15,#svg_16,#svg_17,#svg_18,#svg_19,#svg_20,#svg_21,#svg_22,#svg_23,#svg_24{top:unset;left:unset;right:unset;bottom:unset;transform:unset;}',
      '#svg_11,#svg_12,#svg_13,#svg_14,#svg_15,#svg_16,#svg_17,#svg_18,#svg_19,#svg_20,#svg_21,#svg_22,#svg_23,#svg_24{display:none;}',
      '#svg_3{right:18mm;}',
      '#svg_4{right:55mm;}',

      '#svg_31{left:-3mm;top: 25mm;transform: rotate(-28deg);}',
      '#svg_32,#svg_33{right: 0mm;transform:rotate(-18deg)}',
      '#svg_32{top:0mm;}',
      '#svg_33{top:22mm;}',

      '#svg_34,#svg_35{top:0mm;}',
      '#svg_34{left:92mm;}',
      '#svg_35{left:113mm;}',

      '#svg_36,#svg_37{bottom:0mm;}',
      '#svg_36{left:35mm;transform:rotate(180deg);}',
      '#svg_37{left:49mm;}',

      '#svg_38,#svg_39,#svg_30{bottom:0mm;}',
      '#svg_38{right:44mm;}',
      '#svg_39{right: 60mm;transform:rotate(180deg); }',
      // '#svg_40{transform:rotate(-17deg);right:22mm;bottom:29mm;}',
      '#svg_40{right:0mm;bottom:0mm;}',

      '#svg_51,#svg_52{top:0mm;}',
      '#svg_51{left:56mm;}',
      '#svg_52{left:130.5mm;}',

      '#svg_53,#svg_54{bottom:0mm;}',
      '#svg_53{left:2mm;}',
      '#svg_54{left:62mm;}',
    )
      : '',
  }
}

function getDicesHtml() {
  const diceGenerator = new edu.sonya.cc.DiceGenerator();
  const DiceKind = edu.sonya.cc.DiceKind;

  let
    svgId = 0,
    contents,
    diceKind,
    sideLength,
    outerLineStyle,
    innerLineStyle,
    textStyle,
    options;

  diceKind = DiceKind.four;
  sideLength = 10;
  contents = '1,2,3,4'.split(',');
  outerLineStyle = 'stroke:#555;stroke-width:0.2mm;';
  innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
  // textStyle= 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";';
  textStyle = 'font-size:3mm;font-family: "Kaiti";';
  options = {};

  let html = '';

  svgId = 31;
  for (let i = 0; i < 10; ++i) {
    html += diceGenerator.create({
      id: `svg_${svgId++}`,
      diceKind,
      sideLength,
      // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
      contents,
      outerLineStyle,
      innerLineStyle,
      // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
      textStyle,
      options,
    }).svg.outerHTML;
  }

  sideLength = 10;
  svgId = 51;
  diceKind = DiceKind.eight;
  contents = '1,2,3,4,5,6,7,8'.split(',');
  // contents = ',,,,,,,'.split(',');
  for (let i = 0; i < 4; ++i) {
    html += diceGenerator.create({
      id: `svg_${svgId++}`,
      diceKind,
      sideLength,
      // contents: 'ˉ,ˊ,ˇ,ˋ'.split(','),
      contents,
      outerLineStyle,
      innerLineStyle,
      // textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
      textStyle,
      options,
    }).svg.outerHTML;
  }

  return html;
}

function drawCore(getPokerHtml, firstPageAppendHtmlParamI18n, useDice, sameColor, mixed) {
  console.log(window.LANG);
  const { longText, shortText } = firstPageAppendHtmlParamI18n[window.LANG];
  const firstPageAppendHtml = getFirstPageAppendHtml(longText, shortText, useDice);

  document.getElementById('style').innerHTML = getMiniPokerCss(sameColor);

  const body = document.getElementsByTagName('body')[0];
  if (mixed) {
    const { htmlA, htmlB } = getPokerHtml(useDice);
    for (let i = 0; i < 2; ++i) {
      const pageElement = createPageElement();
      pageElement.innerHTML = i === 0 ? htmlA.concat(firstPageAppendHtml) : htmlB;
      body.appendChild(pageElement);
    }
  } else {
    const POKER_HTML = getPokerHtml(useDice);
    for (let i = 0; i < 2; ++i) {
      const pageElement = createPageElement();
      pageElement.innerHTML = POKER_HTML.concat(i === 0 ? firstPageAppendHtml : '');
      body.appendChild(pageElement);
    }
  }

  window.print();

}

function draw() {
  /*<en>
      Only A3. Kinds = 3 * 7 * 2 = 42: 3 languages, 7 types, and use dice or not.

      lang: en, zh_cn, zh_tw. Default value is en.
      no: Default value is 1
        1 Carry Plus
        2 Abdication Minus
        3 Full Multiplication Table Less Than 9
        4 Simple Multiplication Table Less Than 9
        5 Division Table Less Than 9
        6 Multiplication Table and Division Table Less Than 9
        7 Carry Plus and Abdication Minus
      useDice: true, false. Default value is true.
    </en>
  */
  /*<zh_cn>
      仅允许A3竖排。种类 = 3 * 7 * 2 = 42: 3种语言，7类口诀，及使用骰子与否。
      lang: en, zh_cn, zh_tw. 默认en
      no: 默认1
        1 20内进位加
        2 20内退位减
        3 大九九乘法口诀表
        4 小九九乘法口诀表
        5 九九除法口诀表
        6 九九乘除口诀表
        7 20内进位加退位减
      useDice: true, false. 默认true.
    </zh_cn>
  */
  /*<zh_tw>
      僅允許A3豎排。種類 = 3 * 7 * 2 = 42: 3種語言，7類口訣，及使用骰子與否。
      lang: en, zh_cn, zh_tw. 默認en.
      no: 默認1
        1 20內進位加
        2 20內退位减
        3 大九九乘法口訣表
        4 小九九乘法口訣表
        5 九九除法口訣錶
        6 九九乘除口訣錶
        7 20內進位加退位减
      useDice: true, false. 默認true.
    </zh_tw>
  */
  setF1Content('?lang=en&no=1&useDice=true');

  const url = window.location.href.replace('?', '&');
  parsePageParamsFromUrl(url);

  const USE_DICE = url.concat('&useDice=true').replace('&useDice=', '厶').split('厶')[1].split('&')[0] === 'true';

  let getPokerHtml, firstPageAppendHtmlParamI18n, sameColor = true, mixed = false;
  let titleI18n;
  const NO = parseInt(url.concat('&no=1').replace('&no=', '厶').split('厶')[1].split('&')[0]);
  switch (NO) {
    case 1:
    default:
      getPokerHtml = getPokerHtmlOfCarryAdditionLessThan20;
      firstPageAppendHtmlParamI18n = {
        en: { longText: 'Carry Plus', shortText: 'Plus' },
        zh_cn: { longText: '20内进位加', shortText: '进位加' },
        zh_tw: { longText: '20內進位加', shortText: '進位加' },
      };
      titleI18n = {
        en: 'Carry Plus Poker',
        zh_cn: '迷你扑克：20内进位加',
        zh_tw: '迷你撲克：20內進位加',
      }
      break;
    case 2:
      getPokerHtml = getPokerHtmlOfAbdicationMinusLessThan20;
      firstPageAppendHtmlParamI18n = {
        // en: { longText: 'Abdication Minus', shortText: 'Minus' },
        en: { longText: 'Subtraction', shortText: 'Minus' },
        zh_cn: { longText: '20内退位减', shortText: '退位减' },
        zh_tw: { longText: '20內退位减', shortText: '退位减' },
      };
      titleI18n = {
        en: 'Abdication Minus Poker',
        zh_cn: '迷你扑克：20内退位减',
        zh_tw: '迷你撲克：20內退位减',
      }
      break;
    case 3:
      ANOTHER_CSS = USE_DICE ? '#svg_3,#svg_4,#svg_5,#svg_6{display:none;}' : '';
      getDicesInfo = USE_DICE ? getDicesInfo2 : getDicesInfo3;

      getPokerHtml = getPokerHtmlOfMultiplicationFormulasFullLessThan9;
      firstPageAppendHtmlParamI18n = {
        en: { longText: 'Multiply 2', shortText: 'Multiply2' },
        zh_cn: { longText: '大九九<br>乘法口诀表', shortText: '大九九' },
        zh_tw: { longText: '大九九<br>乘法口訣表', shortText: '大九九' },

      };
      titleI18n = {
        en: 'Full Multiplication Table Less Than 9 Poker',
        zh_cn: '迷你扑克：大九九乘法口诀表',
        zh_tw: '迷你撲克：大九九乘法口訣表',
      }
      break;
    case 4:
      getPokerHtml = getPokerHtmlOfMultiplicationFormulasSimpleLessThan9;
      firstPageAppendHtmlParamI18n = {
        en: { longText: 'Multiply 1', shortText: 'Multiply1' },
        zh_cn: { longText: '小九九<br>乘法口诀表', shortText: '小九九' },
        zh_tw: { longText: '小九九<br>乘法口訣表', shortText: '小九九' },
      };
      titleI18n = {
        en: 'Simple Multiplication Table Less Than 9 Poker',
        zh_cn: '迷你扑克：小九九乘法口诀表',
        zh_tw: '迷你撲克：小九九乘法口訣表',
      }
      break;
    case 5:
      ANOTHER_CSS = USE_DICE ? '#svg_3,#svg_4,#svg_5,#svg_6{display:none;}' : '';
      getDicesInfo = USE_DICE ? getDicesInfo2 : getDicesInfo3;

      getPokerHtml = getPokerHtmlOfDivisionTableLessThan9;
      firstPageAppendHtmlParamI18n = {
        en: { longText: 'Division', shortText: 'Division' },
        zh_cn: { longText: '九九除法<br>口诀表', shortText: '九九除法' },
        zh_tw: { longText: '九九除法<br>口訣錶', shortText: '九九除法' },
      };
      titleI18n = {
        en: 'Division Table Less Than 9 Poker',
        zh_cn: '迷你扑克：九九除法口诀表',
        zh_tw: '迷你撲克：九九除法口訣錶',
      }
      break;
    case 6:
      mixed = true;
      getPokerHtml = getPokerHtmlOfMultiplicationTableAndDivisionTableLessThan9;
      firstPageAppendHtmlParamI18n = {
        en: { longText: 'Complex2', shortText: 'Complex2' },
        zh_cn: { longText: '九九乘除<br>口诀表', shortText: '九九乘除' },
        zh_tw: { longText: '九九乘除<br>口訣錶', shortText: '九九乘除' },
      };
      titleI18n = {
        en: 'Multiplication Table and Division Table Less Than 9 Poker',
        zh_cn: '迷你扑克：九九乘除口诀表',
        zh_tw: '迷你撲克：九九乘除口訣錶',
      }
      break;
    case 7:
      mixed = true;
      getPokerHtml = getPokerHtmlOfCarryAdditionAndAbdicationMinusLessThan20;
      firstPageAppendHtmlParamI18n = {
        // en: { longText: 'Carry Plus <br>and Abdication Minus', shortText: 'Addition<br>Minus' },
        en: { longText: 'Complex1', shortText: 'Complex1' },
        zh_cn: { longText: '20内<br>进位加<br>退位减', shortText: '加减' },
        zh_tw: { longText: '20內<br>進位加<br>退位减', shortText: '加减' },
      };
      titleI18n = {
        en: 'Carry Plus and Abdication Minus Poker',
        zh_cn: '迷你扑克：20内进位加退位减',
        zh_tw: '迷你撲克：20內進位加退位减',
      }
      break;
  }

  document.getElementsByTagName('title')[0].innerText =
    `${(USE_DICE ? 10 : 0) + NO} ${A3 ? 'A3' : 'A4'} ${titleI18n[LANG]}`;

  drawCore(getPokerHtml, firstPageAppendHtmlParamI18n, USE_DICE, sameColor, mixed);
}

draw();
