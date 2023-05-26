// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec');
class DPIHelper {
    dpiArray = [];
    dpiX = 0;
    mmToPxScale = 0;
    pxToMmScale = 0;
    constructor(){
        const screen = window.screen;
        const { dpiArray  } = this;
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
    convertPxToMm = (px)=>px / this.dpiX * 25.4;
    convertMmToPx = (mm)=>mm / 25.4 * this.dpiX;
    getMmToPxScale = ()=>this.mmToPxScale;
    getPxToMmScale = ()=>this.pxToMmScale;
}
const DOMAIN = 'edu.sonya.cc';
DOMAIN.concat('_');
const CURRENT_URL = window.location.href;
const HOME_URL = CURRENT_URL.startsWith('file:///') ? 'file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm' : 'http://edu.sonya.cc/';
(function() {
    const myWindow = window;
    if (!myWindow.top || CURRENT_URL.startsWith('file:///')) {
        return;
    }
    if (!myWindow.top.location.href.startsWith(HOME_URL)) {
        myWindow.top.location.replace(HOME_URL);
    }
})();
HOME_URL.length;
var ActualPage;
(function(ActualPage) {
    ActualPage[ActualPage["home"] = 0] = "home";
    ActualPage[ActualPage["bricks"] = 1] = "bricks";
    ActualPage[ActualPage["brick"] = 2] = "brick";
    ActualPage[ActualPage["treasures"] = 3] = "treasures";
    ActualPage[ActualPage["stories"] = 4] = "stories";
    ActualPage[ActualPage["story"] = 5] = "story";
    ActualPage[ActualPage["about"] = 6] = "about";
    ActualPage[ActualPage["report"] = 7] = "report";
})(ActualPage || (ActualPage = {}));
const ACTUAL_PAGE_NAME_ARRAY = [
    'home',
    'bricks',
    'brick',
    'treasures',
    'stories',
    'story',
    'about',
    'report'
];
const getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
const PARAMETER_FOR_ACTUAL_PAGE = 'go';
const ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf('?'.concat(PARAMETER_FOR_ACTUAL_PAGE, '=')) > -1 ? getActualPageValueByName(CURRENT_URL.split('?')[1].split('&')[0].split('=')[1]) : ActualPage.home;
const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf('/') + 1);
`${SITE_ROOT}images/`;
`${SITE_ROOT}js/`;
`${SITE_ROOT}css/`;
const getPageParameterByName = (name, defaultValue)=>{
    return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || '' : CURRENT_URL.split('&').slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split('=')[1];
};
getPageParameterByName('kind', null);
parseInt(getPageParameterByName('page', '1'), 0) - 1;
parseInt(getPageParameterByName('id', '1'), 0);
const LOCAL_STORAGE_KEY_OF_LANG = 'lang';
CURRENT_URL.includes('?') ? CURRENT_URL.split('?')[1] : ACTUAL_PAGE_NAME;
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || 'zh_cn';
var svgSpace1;
(function(svgSpace11) {
    let edu;
    (function(edu) {
        let sonya;
        (function(sonya) {
            let cc;
            (function(cc) {
                const SVG_NS = 'http://www.w3.org/2000/svg';
                const SVG_XLINKNS = 'http://www.w3.org/1999/xlink';
                class SvgHelper {
                    static createSvg = ()=>{
                        const svg = document.createElementNS(SVG_NS, 'svg');
                        svg.setAttribute('version', '1.1');
                        svg.setAttribute('xmlns', SVG_NS);
                        svg.setAttribute('xmlns:xlink', SVG_XLINKNS);
                        return svg;
                    };
                    static createSvgPath = ()=>{
                        return document.createElementNS(SVG_NS, 'path');
                    };
                    static appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
                        const line = document.createElementNS(SVG_NS, 'line');
                        line.setAttribute('x1', `${x1}mm`);
                        line.setAttribute('x2', `${x2}mm`);
                        line.setAttribute('y1', `${y1}mm`);
                        line.setAttribute('y2', `${y2}mm`);
                        if (viewBox) {
                            viewBox.left = Math.min(viewBox.left, x1, x2);
                            viewBox.right = Math.max(viewBox.right, x1, x2);
                            viewBox.top = Math.min(viewBox.top, y1, y2);
                            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                        }
                        line.setAttribute('style', STYLE);
                        svg.appendChild(line);
                    }
                    static appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
                        const circle = document.createElementNS(SVG_NS, 'circle');
                        circle.setAttribute('cx', `${cx}mm`);
                        circle.setAttribute('cy', `${cy}mm`);
                        circle.setAttribute('r', `${radius}mm`);
                        circle.setAttribute('fill', '#ffffff');
                        if (viewBox) {
                            viewBox.left = Math.min(viewBox.left, cx - radius);
                            viewBox.right = Math.max(viewBox.right, cx + radius);
                            viewBox.top = Math.min(viewBox.top, cy - radius);
                            viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
                        }
                        circle.setAttribute('style', STYLE);
                        svg.appendChild(circle);
                    }
                    static appendTspan(text, STYLE, CHAR, dx, dy) {
                        const tspan = document.createElementNS(SVG_NS, 'tspan');
                        tspan.setAttribute('dx', `${dx}`);
                        tspan.setAttribute('dy', `${dy}`);
                        tspan.setAttribute('style', STYLE.concat('dominant-baseline:middle;text-anchor:middle;', CHAR === '6' || CHAR === '9' ? 'text-decoration:underline;' : '', CHAR === 'ü' ? 'opacity:0.85;font-size:0.9em;' : ''));
                        tspan.innerHTML = CHAR;
                        text.appendChild(tspan);
                    }
                    static appendText(svg, STYLE, CONTENT, x, y, rotate, transformOrigin, viewBox, maybeNumber = false) {
                        const g = document.createElementNS(SVG_NS, 'g');
                        if (rotate) {
                            g.setAttribute('style', `transform: rotate(${rotate}deg);transform-origin:${transformOrigin};`);
                        }
                        svg.appendChild(g);
                        const text = document.createElementNS(SVG_NS, 'text');
                        text.setAttribute('x', `${x}mm`);
                        text.setAttribute('y', `${y}mm`);
                        text.setAttribute('style', 'dominant-baseline:middle;text-anchor:middle;');
                        if (CONTENT.indexOf('<en>') > -1) {
                            const lang = getCurrentLang();
                            const startTag = `<${lang}>`;
                            const endTag = `</${lang}>`;
                            if (CONTENT.indexOf(startTag) > -1) {
                                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
                            }
                        }
                        CONTENT = CONTENT.replace(/<br \/>/gi, '<br/>').replace(/<br\/>/gi, '<br>').replace(/\\n/gi, '<br>');
                        if (CONTENT.indexOf('<br>') > -1) {
                            const fontSize = STYLE.indexOf('font-size:') > -1 ? STYLE.split('font-size:')[1].split(';')[0] : '2mm';
                            const unit = fontSize.replace(/[0-9.]/gi, '');
                            const dyNumber = parseFloat(fontSize.replace(unit, ''));
                            const segs = CONTENT.split('<br>');
                            let lastLength = 0;
                            const dyOffset = `${dyNumber}${unit}`;
                            segs.forEach((seg, index)=>{
                                SvgHelper.appendTspan(text, '', seg, index ? `-${lastLength}em` : '0', index ? dyOffset : '0');
                                lastLength = seg.length;
                            });
                        } else {
                            if (maybeNumber) {
                                CONTENT.split('').forEach((__char, index)=>{
                                    SvgHelper.appendTspan(text, '', __char, '0', '0');
                                });
                            } else {
                                SvgHelper.appendTspan(text, '', CONTENT, '0', '0');
                            }
                        }
                        g.appendChild(text);
                        if (viewBox) {
                            const clientRects = text.getClientRects();
                            const { left: x1 , right: x2 , top: y1 , bottom: y2  } = clientRects.length ? clientRects.item(0) : text.getBoundingClientRect();
                            viewBox.left = Math.min(viewBox.left, x1, x2);
                            viewBox.right = Math.max(viewBox.right, x1, x2);
                            viewBox.top = Math.min(viewBox.top, y1, y2);
                            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
                        }
                        text.setAttribute('style', STYLE);
                    }
                    static setSvgTextInfo(info, x, y, rotate) {
                        info.x = x;
                        info.y = y;
                        info.rotate = rotate;
                    }
                    static appendOuterPath(svg, WIDTH, HEIGHT, mmToPxScale, OUTER_LINE_COLOR) {
                        svg.setAttribute('width', `${WIDTH}mm`);
                        svg.setAttribute('height', `${HEIGHT}mm`);
                        const WIDTH_PX = mmToPxScale * WIDTH;
                        const HEIGHT_PX = mmToPxScale * HEIGHT;
                        const path = svgSpace1.edu.sonya.cc.SvgHelper.createSvgPath();
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke', OUTER_LINE_COLOR);
                        path.setAttribute('d', `M 0, 0 `.concat(`h ${WIDTH_PX} `, `v ${HEIGHT_PX} `, `h -${WIDTH_PX} `, ' z'));
                        svg.appendChild(path);
                    }
                    static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
                        svg.setAttribute('width', `${WIDTH}mm`);
                        svg.setAttribute('height', `${HEIGHT}mm`);
                        const { appendLine  } = svgSpace1.edu.sonya.cc.SvgHelper;
                        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
                        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
                        appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
                        appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
                    }
                    static getTextStyleFontSizePatchCss(NUMBER, TEXT_STYLE) {
                        if (NUMBER > 99 && TEXT_STYLE.indexOf('font-size:') > -1) {
                            const fontSizeSeg = TEXT_STYLE.split('font-size:')[1].split(';')[0];
                            const fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, '');
                            const fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ''));
                            return `font-size:${fontValue * 2 / NUMBER.toString().length}${fontUnit};`;
                        }
                        return '';
                    }
                }
                cc.SvgHelper = SvgHelper;
            })(cc = sonya.cc || (sonya.cc = {}));
        })(sonya = edu.sonya || (edu.sonya = {}));
    })(edu = svgSpace11.edu || (svgSpace11.edu = {}));
})(svgSpace1 || (svgSpace1 = {}));
var boxSpace;
(function(boxSpace) {
    let edu;
    (function(edu) {
        let sonya;
        (function(sonya) {
            let cc;
            (function(cc) {
                let BoxKind;
                (function(BoxKind) {
                    BoxKind[BoxKind["none"] = 0] = "none";
                    BoxKind[BoxKind["cuboid"] = 1] = "cuboid";
                    BoxKind[BoxKind["cuboidWithoutTop"] = 2] = "cuboidWithoutTop";
                    BoxKind[BoxKind["cuboidWithoutBottom"] = 3] = "cuboidWithoutBottom";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSide"] = 4] = "cuboidCoverOnTheSameSide";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutTop"] = 5] = "cuboidCoverOnTheSameSideWithoutTop";
                    BoxKind[BoxKind["cuboidCoverOnTheSameSideWithoutBottom"] = 6] = "cuboidCoverOnTheSameSideWithoutBottom";
                })(BoxKind = cc.BoxKind || (cc.BoxKind = {}));
                const SVG_NS = 'http://www.w3.org/2000/svg';
                class BoxGenerator {
                    batchCreate(createParameters) {
                        createParameters.forEach((createParameter, index)=>{
                            if (createParameter.id.length === 0) {
                                createParameter.id = `svg_index`;
                            }
                        });
                        return createParameters.map((createParameter)=>this.create(createParameter));
                    }
                    create({ id , boxKind , lengths: LENGTHS , contents: CONTENTS , outerLineStyle: OUTER_LINE_STYLE , innerLineStyle: INNER_LINE_STYLE , textStyle: TEXT_STYLE , rotate: ROTATE , move: MOVE , topWithoutHalfCircle: TOP_WITHOUT_HALF_CIRCLE , options: OPTIONS  }) {
                        if (id.length === 0) {
                            id = 'svg_0';
                        }
                        const FIRST_LENGTH = LENGTHS[0];
                        let FIXED_FIRST_LENGTH = FIRST_LENGTH;
                        let nested = false;
                        const { createSvg , appendText  } = svgSpace.edu.sonya.cc.SvgHelper;
                        const svg = createSvg();
                        svg.setAttribute('id', id);
                        const viewBox = {
                            left: 999999,
                            right: 0,
                            top: 999999,
                            bottom: 0
                        };
                        const infos = [];
                        switch(boxKind){
                            default:
                                CONTENTS.forEach((content)=>{
                                    infos.push({
                                        content,
                                        x: 0,
                                        y: 0,
                                        rotate: 0
                                    });
                                });
                                break;
                        }
                        const mmToPxScale = new DPIHelper().getMmToPxScale();
                        switch(boxKind){
                            case BoxKind.cuboid:
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSide:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                this.drawGraphsOfCuboidBox(svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE);
                                this.drawTextsOfCuboiBox(infos, LENGTHS, boxKind);
                                break;
                            default:
                                break;
                        }
                        infos.forEach(({ content , x , y , rotate  })=>{
                            appendText(svg, TEXT_STYLE, content, x, y, rotate, 'left top', null);
                        });
                        const width = `${viewBox.right}mm`;
                        const height = `${viewBox.bottom}mm`;
                        svg.setAttribute('width', width);
                        svg.setAttribute('height', height);
                        const outerSvg = createElement('wrap');
                        outerSvg.appendChild(svg);
                        outerSvg.setAttribute('id', id.concat('_wrapper'));
                        if (FIXED_FIRST_LENGTH !== FIRST_LENGTH) {
                            const scale = FIRST_LENGTH / FIXED_FIRST_LENGTH;
                            const widthOuterSvg = `${scale * viewBox.right}mm`;
                            const heightOuterSvg = `${scale * viewBox.bottom}mm`;
                            const transformScale = mmToPxScale * (scale - 1) / 2;
                            outerSvg.setAttribute('style', `width:${widthOuterSvg};height:${heightOuterSvg};display:inline-block;`);
                            svg.setAttribute('transform', `translate(${viewBox.right * transformScale}, ${viewBox.bottom * transformScale}) scale(${scale}, ${scale})`);
                            svg.setAttribute('transform-origin', 'center');
                        }
                        const css = 'page,wrap{page-break-inside:avoid;}wrap{display:inline-flex;}';
                        return {
                            id,
                            svg: nested ? outerSvg : svg,
                            css
                        };
                    }
                    drawGraphsOfCuboidBox(svg, LENGTHS, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, boxKind, ROTATE, MOVE, TOP_WITHOUT_HALF_CIRCLE) {
                        const isSameSide = boxKind >= 4;
                        const LENGTH = LENGTHS[0];
                        const WIDTH = LENGTHS[2];
                        const HEIGHT = LENGTHS[1];
                        const OTHER_SIZE = isSameSide ? LENGTHS[3] : 0;
                        const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
                        const LENGTH_PX = LENGTH * mmToPxScale;
                        const WIDTH_PX = WIDTH * mmToPxScale;
                        const HEIGHT_PX = HEIGHT * mmToPxScale;
                        const OTHER_SIZE_PX = OTHER_SIZE * mmToPxScale;
                        const duckTongueHeight = MIN_LENGTH * 0.5;
                        const duckTongueHeightPx = duckTongueHeight * mmToPxScale;
                        const pasteRegionHeight = LENGTH * 0.45;
                        const pasteRegionHeightPx = pasteRegionHeight * mmToPxScale;
                        const offsetXPx = LENGTH_PX * 0.1;
                        const pasteRegionWidthPx = HEIGHT_PX - offsetXPx * 2;
                        const duckTongueWidth = LENGTH * (1 - 0.1 * 2);
                        const duckTongueWidthPx = duckTongueWidth * mmToPxScale;
                        const YDifference = boxKind === BoxKind.cuboidWithoutTop || boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? duckTongueHeight + HEIGHT : 0;
                        const YDifferencePx = YDifference * mmToPxScale;
                        const diameter = duckTongueHeight * 0.8;
                        const radius = diameter * 0.5;
                        const lengthSubtractDiameter = LENGTH - diameter;
                        const halfLengthSubtractDiameter = lengthSubtractDiameter * 0.5;
                        const halfLengthSubtractDiameterPx = halfLengthSubtractDiameter * mmToPxScale;
                        const radiusPx = radius * mmToPxScale;
                        const diameterPx = diameter * mmToPxScale;
                        const pathStartY = duckTongueHeightPx + HEIGHT_PX - YDifferencePx;
                        const path = document.createElementNS(SVG_NS, 'path');
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke', '#000000');
                        if (boxKind < 4) {
                            path.setAttribute('d', `M 0, ${pathStartY} `.concat(boxKind === BoxKind.cuboidWithoutTop ? `h ${HEIGHT_PX * 3 + LENGTH_PX * 2} ` : ''.concat(TOP_WITHOUT_HALF_CIRCLE ? ''.concat(`h ${HEIGHT_PX + halfLengthSubtractDiameterPx} `, `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`, `h ${halfLengthSubtractDiameterPx} `) : ''.concat(`h ${HEIGHT_PX + LENGTH_PX} `), `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, `v -${HEIGHT_PX} `, `l ${offsetXPx}, -${duckTongueHeightPx} `, `h ${duckTongueWidthPx} `, `l ${offsetXPx}, ${duckTongueHeightPx} `, `v ${HEIGHT_PX} `, `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `), `v ${WIDTH_PX} `, `h -${LENGTH_PX + HEIGHT_PX} `, boxKind === BoxKind.cuboidWithoutBottom ? `h -${HEIGHT_PX * 2 + LENGTH_PX} ` : ''.concat(`l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `, `v ${HEIGHT_PX} `, `l -${offsetXPx}, ${duckTongueHeightPx} `, `h -${duckTongueWidthPx} `, `l -${offsetXPx}, -${duckTongueHeightPx} `, `v -${HEIGHT_PX} `, `l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `), ' z'));
                        } else {
                            path.setAttribute('d', `M 0, ${pathStartY} `.concat(boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? `h ${HEIGHT_PX * 2.5 + LENGTH_PX * 2} ` : ''.concat(`l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, `v -${HEIGHT_PX} `, `l ${offsetXPx}, -${duckTongueHeightPx} `, `h ${duckTongueWidthPx} `, `l ${offsetXPx}, ${duckTongueHeightPx} `, `v ${HEIGHT_PX} `, `l ${offsetXPx}, -${pasteRegionHeightPx} `, `h ${pasteRegionWidthPx} `, `l ${offsetXPx}, ${pasteRegionHeightPx} `, TOP_WITHOUT_HALF_CIRCLE ? ''.concat(`h ${halfLengthSubtractDiameterPx} `, `a ${radiusPx} ${radiusPx} 0 1 0 ${diameterPx} 0`, `h ${halfLengthSubtractDiameterPx + OTHER_SIZE_PX} `) : ''.concat(`h ${LENGTH_PX + OTHER_SIZE_PX} `)), `v ${WIDTH_PX} `, `h -${LENGTH_PX + OTHER_SIZE_PX} `, boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutBottom ? `h -${HEIGHT_PX * 2 + LENGTH_PX} ` : ''.concat(`l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `, `v ${HEIGHT_PX} `, `l -${offsetXPx}, ${duckTongueHeightPx} `, `h -${duckTongueWidthPx} `, `l -${offsetXPx}, -${duckTongueHeightPx} `, `v -${HEIGHT_PX} `, `l -${offsetXPx}, ${pasteRegionHeightPx} `, `h -${pasteRegionWidthPx} `, `l -${offsetXPx}, -${pasteRegionHeightPx} `), ' z'));
                        }
                        svg.appendChild(path);
                        let style = '';
                        if (ROTATE) {
                            style = 'transform:rotate(180deg);';
                        }
                        if (MOVE) {
                            style += `position:relative;margin-top:-${HEIGHT + duckTongueHeight - Math.max(0, pasteRegionHeight * 2 - (HEIGHT + duckTongueHeight))}mm;`;
                        }
                        if (style.length) {
                            svg.setAttribute('style', style);
                        }
                        const X2 = 0 + HEIGHT;
                        const X3 = X2 + LENGTH;
                        const X4 = X3 + HEIGHT;
                        const X5 = X4 + LENGTH;
                        const X6 = X5 + (isSameSide ? OTHER_SIZE : HEIGHT);
                        const Y1 = 0 - YDifference;
                        const Y2 = Y1 + duckTongueHeight;
                        const Y4 = Y2 + HEIGHT;
                        const Y5 = Y4 + WIDTH;
                        const Y7 = Y5 + HEIGHT;
                        const Y8 = Y7 + duckTongueHeight;
                        const { appendLine  } = svgSpace.edu.sonya.cc.SvgHelper;
                        if (boxKind < 4) {
                            if (boxKind !== BoxKind.cuboidWithoutTop) {
                                appendLine(svg, INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
                                appendLine(svg, INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
                            }
                        } else {
                            if (boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutTop) {
                                appendLine(svg, INNER_LINE_STYLE, X2, X3, Y2, Y2, null);
                                appendLine(svg, INNER_LINE_STYLE, 0, X4, Y4, Y4, null);
                            }
                        }
                        if (boxKind !== BoxKind.cuboidWithoutBottom && boxKind !== BoxKind.cuboidCoverOnTheSameSideWithoutBottom) {
                            appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);
                        }
                        appendLine(svg, INNER_LINE_STYLE, 0, X4, Y5, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
                        appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);
                        viewBox.left = 0;
                        viewBox.top = 0;
                        viewBox.right = X6;
                        switch(boxKind){
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                viewBox.bottom = Y8 - (duckTongueHeight + HEIGHT);
                                break;
                            default:
                                viewBox.bottom = Y8;
                                break;
                        }
                    }
                    drawTextsOfCuboiBox(infos, LENGTHS, boxKind) {
                        const { setSvgTextInfo  } = svgSpace.edu.sonya.cc.SvgHelper;
                        const LENGTH = LENGTHS[0];
                        const WIDTH = LENGTHS[2];
                        const HEIGHT = LENGTHS[1];
                        const MIN_LENGTH = Math.min(LENGTH, WIDTH, HEIGHT);
                        const duckTongueHeight = MIN_LENGTH * 0.5;
                        const YDifference = boxKind === BoxKind.cuboidWithoutTop || boxKind === BoxKind.cuboidCoverOnTheSameSideWithoutTop ? duckTongueHeight + HEIGHT : 0;
                        const X1 = -1 * (HEIGHT * 2 + LENGTH * 1.5);
                        const X2 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
                        const X3 = HEIGHT + LENGTH * 0.5;
                        const X4 = X1;
                        const X5 = -X2;
                        const X6 = X3;
                        const Y1 = -1 * (duckTongueHeight + HEIGHT * 0.5);
                        const Y2 = -1 * (HEIGHT * 0.5);
                        const Y3 = duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference;
                        const Y4 = -1 * (duckTongueHeight + HEIGHT + WIDTH * 0.5 - YDifference);
                        const Y5 = HEIGHT * 1.5 + LENGTH;
                        const Y6 = duckTongueHeight + HEIGHT + WIDTH + HEIGHT * 0.5 - YDifference;
                        switch(boxKind){
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                                infos[0].content = '';
                                break;
                            case BoxKind.cuboid:
                            case BoxKind.cuboidWithoutBottom:
                                setSvgTextInfo(infos[0], X1, Y1, 180);
                                break;
                            case BoxKind.cuboidCoverOnTheSameSide:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                setSvgTextInfo(infos[0], -1 * (HEIGHT + LENGTH * 0.5), Y1, 180);
                                break;
                            default:
                                break;
                        }
                        setSvgTextInfo(infos[1], X2, Y2, 90);
                        setSvgTextInfo(infos[2], X3, Y3, 0);
                        setSvgTextInfo(infos[3], X4, Y4, 180);
                        setSvgTextInfo(infos[4], X5, Y5, -90);
                        switch(boxKind){
                            case BoxKind.cuboidWithoutBottom:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutBottom:
                                infos[5].content = '';
                                break;
                            case BoxKind.cuboidWithoutTop:
                            case BoxKind.cuboidCoverOnTheSameSideWithoutTop:
                            case BoxKind.cuboid:
                            case BoxKind.cuboidCoverOnTheSameSide:
                                setSvgTextInfo(infos[5], X6, Y6, 0);
                                break;
                            default:
                                break;
                        }
                    }
                }
                cc.BoxGenerator = BoxGenerator;
            })(cc = sonya.cc || (sonya.cc = {}));
        })(sonya = edu.sonya || (edu.sonya = {}));
    })(edu = boxSpace.edu || (boxSpace.edu = {}));
})(boxSpace || (boxSpace = {}));
