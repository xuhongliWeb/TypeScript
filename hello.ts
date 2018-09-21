function appendBody(fn){
    document.body.innerHTML = fn
}
function hello(name:string) {
    return 'Hello ' + name
}
let user = 'Typescript'
// document.body.innerHTML = hello(user)
appendBody(hello(user))

// 
interface Person {
    firstName: string,
    lastName: string
}

function greeter(person:Person){
    return "Hello" + person.firstName + "-" + person.lastName
}

let json1 = {
    firstName:"Xu",
    lastName:"Li"
}

let json2 = {
    f: "f",
    l: "l"
}

// document.body.innerHTML = greeter(json)

appendBody(greeter(json1))


// 类
// 在构造函数的参数上使用pullic 等同于创建了同名的成员变量
class Student {
    fullName: string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName = firstName + "-" + middleInitial + "-" + lastName
    }
}

let s = new Student("f","m","l")

interface studentInter {
    firstName: string,
    middleInitial: string,
    lastName: string,
    fullName: string
}


console.log(s, 'student')

function studentFn(student: studentInter){
    return student.firstName + '-' + student.middleInitial + '-合并' +student.lastName + "-" + student.fullName
}
appendBody(studentFn(s))