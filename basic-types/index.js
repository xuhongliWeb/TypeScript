// 布尔值
var isD = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(hexLiteral, "hexLiteral");
console.log(binaryLiteral, "binaryLiteral");
console.log(octalLiteral, "octalLiteral");
// 字符串
var str = "str";
var user = "XuHongLi";
var age = 24;
var sentence = "Hello my name is " + user + " I' ii " + age + " years old next month.";
console.log(sentence, "sentence");
// 数组
var list = [1, 2, 3];
var list2 = ["s"];
console.log(list, "list");
console.log(list2, "list2");
// 元组
var x;
x = ["string", 123]; // ok
// x = [123,'string'] // Error
// 访问跨界元素 会使用联合类型替代
x[3] = "hello";
// x[2] = true // 布尔不是(string | number)
console.log(x, "x");
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var Colorq = Color[2];
console.log(Colorq, 'colorQ');
var colorB = Color[5];
console.log(colorB, 'colorB');
