// import { getNumbersArray } from '../utils.ts';
/// <reference path='../../types/utils.d.ts' />
var diceGenerator = new edu.sonya.cc.DiceGenerator();
var DiceKind = edu.sonya.cc.DiceKind;
var body = getBodyElement();
var svgId = 0;
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.four,
    sideLength: 25,
    contents: "ˉ,ˊ,ˇ,ˋ".split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    // textStyle: 'font-size:8.5mm;font-family:"Kaiti";',
    textStyle: 'font-size:8.5mm;font-family:"Times New Roman", "Kaiti";',
    options: {}
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.four,
    sideLength: 25,
    contents: "2,3,4,5".split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:5mm;font-family:"Times New Roman", "Kaiti";',
    options: {}
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.four,
    sideLength: 25,
    contents: "+,-,×,÷".split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:6mm;font-family:"Times New Roman", "Kaiti";font-weight:bold;',
    options: {}
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.six,
    sideLength: 25,
    contents: getNumbersArray(1, 6),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"Times New Roman", "Kaiti";',
    options: {}
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.eight,
    sideLength: 25,
    contents: getNumbersArray(1, 8),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {}
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: getNumbersArray(1, 12),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: "子丑寅卯辰巳午未申酉戌亥".split(""),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: "鼠牛虎兔龙蛇马羊猴鸡狗猪".split(""),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: "鼠牛虎兔龍蛇馬羊猴雞狗猪".split(""),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:7.5mm;font-family:"Times New Roman";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
    ],
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:10.5mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May.",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dec.",
    ],
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"Times New Roman";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ],
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:10.5mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twelve,
    sideLength: 25,
    contents: [
        "正月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "冬月",
        "腊月",
    ],
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:10.5mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twenty,
    sideLength: 25,
    contents: getNumbersArray(1, 20),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: getNumbersArray(1, 24),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: getNumbersArray(0, 23),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: "b,p,m,f,d,t,n,l,g,k,h,j,q,x,zh,ch,sh,r,z,c,s,y,w,".replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    // textStyle: 'font-size:12mm;font-family:"PinYinok";',
    textStyle: 'font-size:12mm;font-family:"KaiTi";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: "a,o,e,i,u,ü,ai,ei,ui,ao,ou,iu,ie,üe,er,an,en_us,in,un,ün,ang,eng,ing,ong"
        .replace(/a/g, "ɑ").replace(/g/g, "ɡ").split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    // textStyle: 'font-size:12mm;font-family:"PinYinok";',
    textStyle: 'font-size:12mm;font-family:"KaiTi";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: "立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒"
        .split("、"),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:10.5mm;font-family:"KaiTi";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: "zhi,chi,shi,ri,zi,ci,si,yi,wu,yu,ye,yue,yuan,yin,yun,ying,,,,,,,,"
        .replace(/a/g, "ɑ")
        .replace(/g/g, "ɡ").split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    // textStyle: 'font-size:12mm;font-family:"PinYinok";',
    textStyle: 'font-size:12mm;font-family:"Kaiti";',
    options: {
        withHole: false
    }
}).svg);
body.appendChild(diceGenerator.create({
    id: "svg_" + svgId++,
    diceKind: DiceKind.twentyFour,
    sideLength: 25,
    contents: "ā,á,ǎ,à,ō,ó,ǒ,ò,ē,é,ě,è,ī,í,ǐ,ì,ū,ú,ǔ,ù,ǖ,ǘ,ǚ,ǜ".split(","),
    outerLineStyle: "stroke:#555;stroke-width:0.2mm;",
    innerLineStyle: "stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;",
    textStyle: 'font-size:12mm;font-family:"Kaiti";font-weight:normal;',
    options: {
        withHole: false
    }
}).svg);
