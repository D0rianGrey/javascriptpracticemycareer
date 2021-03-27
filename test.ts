class Test {
    name: string;
    age: number;
}

let x = new Test();
let userName1 = x.name = "Eugene";
let userName2 = x.name = "Alina";
x.age = 10;

console.log(userName1);
console.log(userName2);
