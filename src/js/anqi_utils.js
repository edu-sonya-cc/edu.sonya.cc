/*
  Author: anqisoft@gmail.com
  Date: 2023-09-09
*/

const MONTHS = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');


const DEGREE_180 = 180;
const DEGREE_90 = 90;
const DEGREE_90_COUNTERCLOCKWISE = -90;

class DPIHelper {
  dpiArray = [];
  dpiX = 0;
  mmToPxScale = 0;
  pxToMmScale = 0;
  constructor() {
    const screen = window.screen;
    const { dpiArray } = this;
    if (screen.deviceXDPI) {
      dpiArray.push(screen.deviceXDPI);
      dpiArray.push(screen.deviceYDPI);
    } else {
      const div = document.createElement("div");
      div.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
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
  convertPxToMm = (px) => px / this.dpiX * 25.4;
  convertMmToPx = (mm) => mm / 25.4 * this.dpiX;
  getMmToPxScale = () => this.mmToPxScale;
  getPxToMmScale = () => this.pxToMmScale;
}

function getBodyElement() {
  return document.getElementsByTagName('body')[0];
}

function getNumbersArray(min, max) {
  const array = [];
  for (let i = min; i <= max; ++i) {
    array.push(i.toString());
  }

  return array;
}

function createElement(tagName, options) {
  return document.createElement(tagName, options);
}

function createPageElement() {
  return document.createElement('page');
}

function setF1Content(content) {
  // Change the event from 'onkeyup' to 'onkeydown', because the chrome browser doesn't work.
  document.onkeydown = function (e) {
    // 27 ESC
    // alert(e.keyCode);
    // var html = ''; for (var p in e) { html += p.concat('=>', e[p], '<br/>'); } document.getElementsByTagName('body')[0].innerHTML = html;
    switch (e.keyCode) {
      case 112: // F1
        alert(content); // 'box.htm?long=80&width=60&height=50&landscape=false&a3=true&thickess=1&top=3&left=3&extend=5'
        e.preventDefault();
        e.stopPropagation();
        break;
      default:
        break;
    }

    return false;
  }
}


function parsePageParamsFromUrl(url) {
  url = url.replace('?', '&').toLowerCase();
  window.LANG =
    url.concat('&lang=en').replace('&lang=', '厶').split('厶')[1].split('&')[0];
  if (['en', 'zh_cn', 'zh_tw'].indexOf(window.LANG) === -1) {
    window.LANG = 'en';
  }

  window.LANDSCAPE =
    url.concat('&landscape=false').replace('&landscape=', '厶').split('厶')[1].split('&')[0] ===
    'true';
  window.A3 =
    url.concat('&a3=true').replace('&a3=', '厶').split('厶')[1].split('&')[0] === 'true';

  window.PAGE_PADDING_TOP = Math.max(
    0,
    // parseInt(url.concat('&top=4').replace('&top=', '厶').split('厶')[1].split('&')[0]),
    parseFloat(url.concat('&top=3.5').replace('&top=', '厶').split('厶')[1].split('&')[0]),
  );
  window.PAGE_PADDING_LEFT = Math.max(
    0,
    // parseInt(url.concat('&left=3').replace('&left=', '厶').split('厶')[1].split('&')[0]),
    parseFloat(url.concat('&left=3.5').replace('&left=', '厶').split('厶')[1].split('&')[0]),
  );

  const PAPER_WIDTH = A3 ? (LANDSCAPE ? 420 : 297) : (LANDSCAPE ? 297 : 210);
  const PAPER_HEIGHT = A3 ? (LANDSCAPE ? 297 : 420) : (LANDSCAPE ? 210 : 297);
  const PAGE_WIDTH = PAPER_WIDTH - PAGE_PADDING_LEFT * 2;
  const PAGE_HEIGHT = PAPER_HEIGHT - PAGE_PADDING_TOP * 2;

  window.PAPER_WIDTH = PAPER_WIDTH;
  window.PAPER_HEIGHT = PAPER_HEIGHT;
  window.PAGE_WIDTH = PAGE_WIDTH;
  window.PAGE_HEIGHT = PAGE_HEIGHT;
}

function getPageCss() {
  return `\@media print\{\@page\{size:${A3 ? 'A3' : 'A4'} ${LANDSCAPE ? 'landscape' : 'portrait'};\} \}
*\{margin:0;border:0;padding:0;\}
page:not(:last-of-type)\{page-break-after:always;\}
page\{padding-top:${PAGE_PADDING_TOP}mm;padding-left:${PAGE_PADDING_LEFT}mm;display:block;width:${PAGE_WIDTH}mm;height:${PAGE_HEIGHT}mm;position:relative;overflow:hidden;\}`;
}

function getSvgCss() {
  return `\@media print\{\@page\{size:${A3 ? 'A3' : 'A4'} ${LANDSCAPE ? 'landscape' : 'portrait'};\} \}
*\{margin:0;border:0;padding:0;\}
body>svg:not(:last-child)\{page-break-after:always;\}
body>svg\{display:block;width:${PAGE_WIDTH}mm;height:${PAGE_HEIGHT}mm;\}`;
}
