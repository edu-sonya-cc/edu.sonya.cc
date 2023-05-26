// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

class BrickCore extends BrickWithTableBase {
    idOrClassPrefix = 'brickPageHundredthLattice';
    constructor(){
        super({}, {});
    }
    countDataAndComputedData = ()=>{
        this.countDataAndComputedDataInBrickWithTableBase();
        const { computedData , mmToPxScale  } = this;
        const { paperSize , isLandscape , maxX: MAX_X , maxY: MAX_Y , pageMarginTop , pageMarginBottom , pageMarginLeft , pageMarginRight , list  } = this.data;
        const css = `/* common.css */
		* { margin:0;border:0;padding:0; }
		* { box-sizing:border-box; }

		/* landscape 横向 portrait 纵向*/ 
		@media print { @page { size: ${paperSize} ${isLandscape ? 'landscape' : 'portrait'}; margin:${pageMarginTop}mm ${pageMarginRight}mm ${pageMarginBottom}mm ${pageMarginLeft}mm; } }
		page:not(page:last-child){page-break-after:always;}

		body {width:${MAX_X}mm;overflow-x:hidden;overflow-y:auto;page-break-inside:avoid;}
		page { display:flex;flex-flow:wrap;justify-content:flex-start;align-items:flex-start;column-gap:0;row-gap:0; }
		/* page { height:${MAX_Y}mm; } */
		page { width:${MAX_X}mm;margin-left:${pageMarginLeft}mm;margin-top:${pageMarginTop}mm; }
		`;
        let html = '<page>';
        let usedX = 0;
        let usedY = 0;
        let currentRowHeight = 0;
        let svgIndex = 0;
        list.forEach(({ length , showNumber , digitalOverlay , startNumber , count , innerLineStyle , outerLineStyle , textStyle  })=>{
            const WIDTH = length * 10;
            const HEIGHT = length * 10;
            let numberOffset = 0;
            for(let regionIndex = 0; regionIndex < count; ++regionIndex){
                let newPage = usedY + HEIGHT > MAX_Y;
                let newRow = false;
                if (!newPage && usedX + WIDTH > MAX_X) {
                    usedY += currentRowHeight;
                    if (usedY + HEIGHT > MAX_Y) {
                        newPage = true;
                    } else {
                        newRow = true;
                    }
                }
                if (newPage) {
                    html += '</page><page>';
                    usedX = 0;
                    usedY = 0;
                    currentRowHeight = 0;
                } else if (newRow) {
                    usedX = 0;
                    currentRowHeight = 0;
                }
                currentRowHeight = Math.max(currentRowHeight, HEIGHT);
                usedX += WIDTH;
                const { createSvg , appendOuterLine , appendLine , appendText , getTextStyleFontSizePatchCss  } = svgSpace.edu.sonya.cc.SvgHelper;
                const svg = createSvg();
                svg.id = `svg_${++svgIndex}`;
                appendOuterLine(svg, WIDTH, HEIGHT, outerLineStyle);
                for(let i = 1; i < 10; ++i){
                    const X = length * i;
                    appendLine(svg, innerLineStyle, X, X, 0, HEIGHT, null);
                    const Y = length * i;
                    appendLine(svg, innerLineStyle, 0, WIDTH, Y, Y, null);
                }
                if (showNumber) {
                    for(let i1 = 0; i1 < 10; ++i1){
                        const Y1 = length * (i1 + 0.5);
                        for(let j = 0; j < 10; ++j){
                            const X1 = length * (j + 0.5);
                            const NUMBER = numberOffset + startNumber + 10 * i1 + j;
                            appendText(svg, textStyle.concat(getTextStyleFontSizePatchCss(NUMBER, textStyle)), NUMBER.toString(), X1, Y1, 0, 'center', null, true);
                        }
                    }
                }
                html += svg.outerHTML;
                if (digitalOverlay) numberOffset += 100;
            }
        });
        html += '</page>';
        const en = `${FILENAME_POSTFIX}hundredthLattice`;
        const zh_cn = `${FILENAME_POSTFIX}百数格`;
        const zh_tw = `${FILENAME_POSTFIX}百數格`;
        computedData.title = {
            en,
            zh_cn,
            zh_tw
        };
        computedData.css = css;
        computedData.html = html;
    };
    createTableBodyRow = (item)=>{
        const { length , showNumber , digitalOverlay , startNumber , count , innerLineStyle , outerLineStyle , textStyle  } = item;
        const { tableBodyElement  } = this;
        const tr = createElement('tr');
        tableBodyElement.appendChild(tr);
        this.appendOperationTd(tr, item);
        this.appendNumberTd(tr, length, item, 'length', 1, null, 1);
        this.appendCheckboxTdWithoutText(tr, showNumber, item, 'showNumber');
        this.appendCheckboxTdWithoutText(tr, digitalOverlay, item, 'digitalOverlay');
        this.appendNumberTd(tr, startNumber, item, 'startNumber', null, null, 1);
        this.appendNumberTd(tr, count, item, 'count', 1, null, 1);
        this.appendTextareaTd(tr, innerLineStyle, item, 'innerLineStyle', 'string');
        this.appendTextareaTd(tr, outerLineStyle, item, 'outerLineStyle', 'string');
        this.appendTextareaTd(tr, textStyle, item, 'textStyle', 'string');
    };
    initTableHead = ()=>{
        this.appendTableHeadCell({
            en: 'Length',
            zh_cn: '边长',
            zh_tw: '邊長'
        });
        this.appendTableHeadCell({
            en: 'Show Number',
            zh_cn: '显示数字',
            zh_tw: '顯示數字'
        });
        this.appendTableHeadCell({
            en: 'Digital Overlay',
            zh_cn: '数字叠加',
            zh_tw: '數位疊加'
        });
        this.appendTableHeadCell({
            en: 'Start Number',
            zh_cn: '开始值',
            zh_tw: '開始值'
        });
        this.appendTableHeadCell({
            en: 'Count',
            zh_cn: '数量',
            zh_tw: '數量'
        });
        this.appendTableHeadCell({
            en: 'Inner Line Style',
            zh_cn: '内部线样式',
            zh_tw: '內部線樣式'
        });
        this.appendTableHeadCell({
            en: 'Outer Line Style',
            zh_cn: '外边线样式',
            zh_tw: '外邊線樣式'
        });
        this.appendTableHeadCell({
            en: 'Text Style',
            zh_cn: '文本样式',
            zh_tw: '文字樣式'
        });
    };
    getUsableList = ()=>{
        const innerLineStyle = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
        const outerLineStyle = 'stroke:#000;stroke-width:0.2mm;';
        const textStyle = 'font-size:6mm;';
        const buttonList = [
            {
                nameI18n: {
                    en: 'Hide numbers',
                    zh_cn: '无数字',
                    zh_tw: '無數字'
                },
                info: {
                    length: 10,
                    showNumber: false,
                    digitalOverlay: true,
                    startNumber: 1,
                    count: 2,
                    innerLineStyle,
                    outerLineStyle,
                    textStyle
                }
            },
            {
                nameI18n: {
                    en: 'Start from zero',
                    zh_cn: '从0开始',
                    zh_tw: '從0開始'
                },
                info: {
                    length: 10,
                    showNumber: true,
                    digitalOverlay: true,
                    startNumber: 0,
                    count: 1,
                    innerLineStyle,
                    outerLineStyle,
                    textStyle
                }
            },
            {
                nameI18n: {
                    en: 'Start from one',
                    zh_cn: '从1开始',
                    zh_tw: '從1開始'
                },
                info: {
                    length: 10,
                    showNumber: true,
                    digitalOverlay: true,
                    startNumber: 1,
                    count: 1,
                    innerLineStyle,
                    outerLineStyle,
                    textStyle
                }
            }
        ];
        const strongI18n = {
            en: 'Shortcuts',
            zh_cn: '快捷按钮',
            zh_tw: '快捷按鈕'
        };
        return [
            {
                strongI18n,
                buttonList
            }
        ];
    };
}
const brickCore = new BrickCore();
window.brickCore = brickCore;
