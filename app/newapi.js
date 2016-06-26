// Math，Number，String，Object 的新API

// 对Math,Number,String还有Object等添加了许多新的API。下面代码同样来自es6features，对这些新API进行了简单展示。
import 'babel-polyfill';
console.log();
console.log(Number.EPSILON);
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isNaN("NaN")); // false

console.log(Math.acosh(3)); // 1.762747174039086
console.log(Math.hypot(3, 4)); // 5
console.log(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2)); // 2


var str = "abcde";
// str.contains("cd") // true error 不支持
// "abc".repeat(3) // "abcabcabc"

// Array.from(document.querySelectorAll('*')) // Returns a real Array
// Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[0, 0, 0].fill(7, 1) // [0,7,7]
// [1,2,3].findIndex(x => x == 2) // 1
// ["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
// ["a", "b", "c"].keys() // iterator 0, 1, 2
// ["a", "b", "c"].values() // iterator "a", "b", "c"

// Object.assign(Point, { origin: new Point(0,0) })