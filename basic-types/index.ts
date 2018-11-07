// 布尔值
let isD: boolean = false;

// 数字

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log(hexLiteral, "hexLiteral");
console.log(binaryLiteral, "binaryLiteral");
console.log(octalLiteral, "octalLiteral");

// 字符串
let str: string = "str";

let user: string = "XuHongLi";
let age: number = 24;
let sentence = `Hello my name is ${user} I' ii ${age} years old next month.`;
console.log(sentence, "sentence");
// 数组
let list: number[] = [1, 2, 3];
let list2: Array<string> = ["s"];

console.log(list, "list");
console.log(list2, "list2");

// 元组

let x: [string, number];
x = ["string", 123]; // ok
// x = [123,'string'] // Error

// 访问跨界元素 会使用联合类型替代
x[3] = "hello";

// x[2] = true // 布尔不是(string | number)
console.log(x, "x");


// 枚举

enum Color {Red=1 , Green=2, Blue=5}

let Colorq:string = Color[2]

console.log(Colorq, 'colorQ')
let colorB:number = Color.Blue
console.log(colorB, 'colorB')