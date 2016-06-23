var [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]

console.log([][0]);
// undefined
var [missing] = [];
console.log(missing);
// undefined



var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };
var { name: nameA } = robotA;
var { name: nameB } = robotB;
console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"

// 只遍历键：

    for (var [key] of map) {
      // ...
    }
// 或只遍历值：

    for (var [,value] of map) {
      // ...
    }