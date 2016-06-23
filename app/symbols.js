// ---------生成唯一标识 的 symbol

// 1、可以用作属性键的值
// 2、它能避免命名冲突的风险
// 3、生成唯一标识
// ...

var mySymbol = Symbol("I'm Symbol");
console.log(mySymbol);

var mySymbol2 = Symbol();
console.log(mySymbol2);

var mySymbol3 = Symbol();
console.log(mySymbol3);

// Symbol的类型不再是Object或Function
// > typeof Symbol()
// "symbol"