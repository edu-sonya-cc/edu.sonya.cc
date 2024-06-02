// import { REPORT_PROPERTY, LANG_PROPERTY, PAPER_SIZE_PROPERTY } from '../const';
// import { I18nable, createElement, getHtmlElement, getHeadElement, getBodyElement, getTitleElement, getMainElement, getHeaderElement, getFooterElement } from '../dom';
// import { Language, getCurrentLang } from '../storage';
// import { ActualPageBase } from './actualPageBase';
// import { global } from '../global';
// import { DPIHelper } from '../DPIHelper';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path='../../types/const.d.ts' />
/// <reference path='../../types/dom.d.ts' />
/// <reference path='../../types/storage.d.ts' />
/// <reference path='../../types/actualPageBase.d.ts' />
/// <reference path='../../types/global.d.ts' />
/// <reference path='../../types/DPIHelper.d.ts' />
var ReportPage = /** @class */ (function (_super) {
    __extends(ReportPage, _super);
    function ReportPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.styleElement = createElement("style");
        _this.reportElement = createElement("div");
        _this.titleElement = getTitleElement();
        _this.paperSize = "A4";
        _this.isLandscape = false;
        _this.pageMarginTop = 0;
        _this.pageMarginLeft = 0;
        _this.pageMarginBottom = 0;
        _this.pageMarginRight = 0;
        _this.initMainElement = function () {
            var idPrefix = "reportPage";
            getHeaderElement().remove();
            getFooterElement().remove();
            getMainElement().remove();
            var body = getBodyElement();
            body.setAttribute(REPORT_PROPERTY, "");
            var _a = _this, styleElement = _a.styleElement, reportElement = _a.reportElement;
            styleElement.id = idPrefix + "Style";
            var headElement = getHeadElement();
            headElement.appendChild(styleElement);
            body.appendChild(reportElement);
            reportElement.id = idPrefix + "Core";
            // mainElement.appendChild(imageElement);
        };
        _this.init = function () {
            _super.prototype.init.call(_this);
        };
        return _this;
        // public download2PDF = () => {
        //   // https://juejin.cn/post/6844903886994538510
        //   // https://zhuanlan.zhihu.com/p/117557509
        //   // https://cdn.bootcss.com/jspdf/1.4.0/jspdf.debug.js
        //   // P:\ecs_person\websites\sonya.cc\www_old\96_codes\00005_pokerBox\js\core.js
        //   const body = getBodyElement();
        //   const { titleElement, isLandscape, paperSize, pageMarginTop, pageMarginLeft } = this;
        // 	// printableList没有forEach方法
        // 	const	printableList = document.getElementsByTagName('page');
        // 	const count = printableList.length;
        // 	const printableArray = [];
        // 	for(let index = 0; index < count; ++index) {
        // 		const printableElement = printableList[index];
        // 		printableArray.push(printableElement);
        // 	}
        //   // const mmToPxScale = new DPIHelper().getMmToPxScale();
        //   const pdfPageData: Array<{ // 将当前页面的数据存入pageData数组
        //     img: any,
        //     width: number,
        //     height: number
        //   }> = [];
        //   // const PDF_IMAGE_TOP = 50;
        //   // const PDF_IMAGE_TOP = 0;
        //   // const PDF_IMAGE_LEFT = 0;
        //   function addPdfPage(printableArray: Array<HTMLElement>) {
        //     const scale = 1; //放大倍数
        //     // const body = document.getElementsByTagName('body')[0];
        //     // const IMAGE_WIDTH = 1024; // 595.28
        //     // const IMAGE_WIDTH = parseFloat(body.style.width.replace('mm', '')) * mmToPxScale; // 595.28
        //     const page = new Promise(function(resolve, reject) {
        //       printableArray.forEach((copyDom: HTMLElement, index: number) => {
        //         // const svgs = copyDom.querySelectorAll('svg');
        //         // if (svgs.length) {
        //         //   svgs.forEach((svg: SVGElement) => {
        //         //     const img = new Image();
        //         //     img.src = `data:image/svg+xml,${encodeURIComponent((new XMLSerializer()).serializeToString(svg))}`;
        //         //     img.crossOrigin = 'anonymous';
        //         //     img.onload = function(){
        //         //       // 获取当前svg的宽高，onload方法为异步
        //         //       const width = svg.getBoundingClientRect().width;
        //         //       const height = svg.getBoundingClientRect().height;
        //         //       const canvas = document.createElement('canvas');
        //         //       canvas.width = width;
        //         //       canvas.height = height;
        //         //         const ctx = canvas.getContext("2d");
        //         //         ctx.drawImage(img, 0, 0, width,height);
        //         //         // copyDom.appendChild(canvas);
        //         //         // 删除之前的svg和图片，只保留canvas
        //         //         copyDom.removeChild(svg);
        //         //         copyDom.removeChild(img);
        //         //     }
        //         //     copyDom.append(img);
        //         //   });
        //         // } else {
        //           // const width = copyDom.offsetWidth;
        //           // const height = copyDom.offsetHeight;
        //           // document.defaultView.innerWidth => 400
        //           // copyDom.innerWidth => undefined
        //           // copyDom.offsetWidth, copyDom.offsetHeight => 400, 1081
        //           //  copyDom.top, copyDom.left => undefined, undefined
        //           // console.log(copyDom.offsetWidth, copyDom.offsetHeight, copyDom.getBoundingClientRect(), copyDom.childNodes[0].getBoundingClientRect());
        //           const pageElement = copyDom; // copyDom.childNodes.length ? copyDom.childNodes[0] : null;
        //           // console.log(pageElement.width, pageElement.height, pageElement.left, pageElement.top);
        //           const rect = pageElement.getBoundingClientRect();
        //           // console.log(rect);
        //           // console.log(pageElement && pageElement.getBoundingClientRect(), pageElement);
        //           // console.log(pageElement && pageElement.getBoundingClientRect(), pageElement);
        //           // const width = copyDom.offsetWidth;
        //           // const height = copyDom.offsetHeight;
        //           // const width = rect.width;
        //           // const height = rect.height;
        //           const width = pageElement.offsetWidth;
        //           const height = pageElement.offsetHeight;
        //           const canvas = document.createElement('canvas');
        //           canvas.setAttribute('class', 'canvas-pdf');
        //           canvas.setAttribute('id', 'canvas'.concat(index.toString()));
        //           canvas.width = width * scale;
        //           canvas.height = height * scale;
        //           body.appendChild(canvas);
        //           const content = canvas.getContext('2d') as CanvasRenderingContext2D;
        //           content.scale(scale, scale);
        //           // const rect = copyDom.getBoundingClientRect(); //获取元素相对于视察的偏移量
        //           // content.translate(-rect.left, -rect.top); //设置context位置，值为相对于视窗的偏移量负值，让图片复位
        //           // content.translate(-rect.left, 0); //设置context位置，值为相对于视窗的偏移量负值，让图片复位
        //           content.translate(0, 0);
        //           copyDom.innerHTML = '<span style="position:absolute;left:40px;top:40px;width:100px;height:10px;display:block;font-size:12px;text-align:center;">test</span>';
        //           html2canvas(copyDom, {
        //             useCORS: true,
        //             dpi: window.devicePixelRatio, // * scale,
        //             scale: scale,
        //             canvas: canvas,
        //             width: width,
        //             heigth: height,
        //           }).then(function(canvas) {
        //             const contentWidth = canvas.width;
        //             const contentHeight = canvas.height;
        //             const imgWidth = IMAGE_WIDTH;
        //             const imgHeight = IMAGE_WIDTH / contentWidth * contentHeight;
        //             pdfPageData.push({ // 将当前页面的数据存入pageData数组
        //               img: canvas.toDataURL('image/jpeg', 1.0),
        //               width: imgWidth,
        //               height: imgHeight
        //             })
        //             resolve();
        //           });
        //         // }
        //       });
        //     });
        //     return page;
        //   }
        //   // const paperSize = body.hasAttribute(PAPER_SIZE_PROPERTY) ? body.getAttribute(PAPER_SIZE_PROPERTY) as string : '';
        // 	// const pdf = new (window as any).jsPDF('', 'pt', paperSize);
        // 	// const pdf = new (window as any).jsPDF(isLandscape ? 'landscape' : 'portrait', 'mm', paperSize.toLocaleLowerCase());
        //   let IMAGE_WIDTH = 210;
        //   // let IMAGE_HEIGHT = 297;
        //   switch(paperSize) {
        //   case 'A3':
        //     IMAGE_WIDTH = isLandscape ? 420 : 297;
        //     // IMAGE_HEIGHT = isLandscape ? 297 : 420;
        //     break;
        //   case 'A4':
        //     IMAGE_WIDTH = isLandscape ? 297 : 210;
        //     // IMAGE_HEIGHT = isLandscape ? 210 : 297;
        //     break;
        //   case 'A5':
        //     IMAGE_WIDTH = isLandscape ? 210 : 148.5;
        //     // IMAGE_HEIGHT = isLandscape ? 148.5 : 210;
        //     break;
        //   default:
        //     break;
        //   }
        // 	// const pdf = new (window as any).jsPDF(
        //   //   // isLandscape ? 'landscape' : 'portrait', 'mm', paperSize.toLocaleLowerCase()
        //   //   {
        //   //     orientation: isLandscape ? 'landscape' : 'portrait',
        //   //     unit: 'mm',
        //   //     format: [IMAGE_WIDTH, IMAGE_HEIGHT]
        //   //   }
        //   // );
        // 	const pdf = new (window as any).jsPDF(isLandscape ? 'landscape' : 'portrait', 'mm', paperSize.toLocaleLowerCase());
        // 	// //添加并设置字体
        // 	// pdf.addFont('华文仿宋.ttf', 'custom', 'normal');
        // 	// pdf.setFont('custom');
        //   const PDF_IMAGE_IMAGE_EXTENSTION = 'JPEG';
        // 	pdfPageData.length = 0;
        // 	addPdfPage(printableArray).then(function() {
        // 		pdfPageData.forEach((pageData) => {
        // 			const { img, width, height } = pageData;
        // 			// pdf.addImage(img, PDF_IMAGE_IMAGE_EXTENSTION, PDF_IMAGE_LEFT, PDF_IMAGE_TOP, width, height);
        // 			pdf.addImage(img, PDF_IMAGE_IMAGE_EXTENSTION, pageMarginLeft, pageMarginTop, width, height);
        // 		});
        // 		// pdf.save(m_pageTitle.concat('.pdf'));
        //     pdf.save(titleElement.innerHTML.concat('.pdf'));
        //     // printableArray.forEach((_printableElement, index) => {
        // 		// 	document.getElementById('canvas'.concat(index.toString())).remove();
        // 		// });
        // 	});
        // };
    }
    ReportPage.prototype.initTitleElement = function () {
        this.titleElement.i18n = { en_us: "Report", zh_cn: "报表", zh_tw: "報表" };
    };
    ReportPage.prototype.updateReport = function (title, css, html) {
        var _a = this, styleElement = _a.styleElement, reportElement = _a.reportElement, titleElement = _a.titleElement;
        styleElement.innerHTML = css;
        reportElement.innerHTML = html;
        titleElement.i18n = title;
        titleElement.innerHTML = title[getCurrentLang()];
    };
    ReportPage.prototype.getCss = function () {
        return this.styleElement.innerHTML;
    };
    ReportPage.prototype.getHtml = function () {
        return this.reportElement.innerHTML;
    };
    ReportPage.prototype.changeLang = function (lang) {
        getHtmlElement().setAttribute(LANG_PROPERTY, lang);
    };
    ReportPage.prototype.changePaperSize = function (paperSize, isLandscape, pageMarginTop, pageMarginLeft, pageMarginBottom, pageMarginRight) {
        getBodyElement().setAttribute(PAPER_SIZE_PROPERTY, paperSize);
        this.paperSize = paperSize;
        this.isLandscape = isLandscape;
        this.pageMarginTop = pageMarginTop;
        this.pageMarginLeft = pageMarginLeft;
        this.pageMarginBottom = pageMarginBottom;
        this.pageMarginLeft = pageMarginLeft;
    };
    ReportPage.prototype.print = function () {
        // window.print();
        // if (global.IS_MOBILE_OR_PAD) {
        if (global.CAN_NOT_PRINT) {
            // this.download2PDF();
            // (window as any).parent.brickCore.download2PDF({
            //     css: this.styleElement.innerHTML,
            //     html: this.reportElement.innerHTML,
            //     paperSize: this.paperSize,
            //     isLandscape: this.isLandscape,
            //     pageMarginTop: this.pageMarginTop,
            //     pageMarginLeft: this.pageMarginLeft,
            //     pageMarginBottom: this.pageMarginBottom,
            //     pageMarginRight: this.pageMarginRight,
            //     title: this.titleElement.innerHTML,
            // });
            window.parent.brickCore.download2PDF();
        }
        else {
            window.print();
        }
    };
    return ReportPage;
}(ActualPageBase));
var reportPage = new ReportPage();
reportPage.init();
window.addEventListener("message", function (event) {
    var _a = event.data, command = _a.command, _b = _a.data, title = _b.title, css = _b.css, html = _b.html, lang = _b.lang, paperSize = _b.paperSize, isLandscape = _b.isLandscape, pageMarginTop = _b.pageMarginTop, pageMarginLeft = _b.pageMarginLeft;
    switch (command) {
        case "build":
            reportPage.updateReport(title, css, html);
            break;
        case "changeLang":
            reportPage.changeLang(lang);
            break;
        case "changePaperSize":
            // reportPage.changePaperSize(paperSize, isLandscape, pageMarginTop, pageMarginLeft, parent);
            reportPage.changePaperSize(paperSize, isLandscape, pageMarginTop, pageMarginLeft);
            break;
        case "print":
            reportPage.print();
            break;
        default:
            break;
    }
});
