function appendBody(fn) {
    document.body.innerHTML = fn;
}
function hello(name) {
    return 'Hello ' + name;
}
var user = 'Typescript';
// document.body.innerHTML = hello(user)
appendBody(hello(user));
function greeter(person) {
    return "Hello" + person.firstName + "-" + person.lastName;
}
var json1 = {
    firstName: "Xu",
    lastName: "Li"
};
var json2 = {
    f: "f",
    l: "l"
};
// document.body.innerHTML = greeter(json)
appendBody(greeter(json1));
// 类
// 在构造函数的参数上使用pullic 等同于创建了同名的成员变量
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "-" + middleInitial + "-" + lastName;
    }
    return Student;
}());
var s = new Student("f", "m", "l");
console.log(s, 'student');
function studentFn(student) {
    return student.firstName + '-' + student.middleInitial + '-合并' + student.lastName + "-" + student.fullName;
}
appendBody(studentFn(s));
