#ES6学习笔记

>
+ 一个模块只能使用 export default 一次

```
  // default 导出
  export default function getAge() {} 
 
  // 或者写成
  function getAge() {}
  export default getAge;

  // 导入的时候不需要花括号
  import test from './test.js';
```

###demo01

```
let fruits = [
  {id: 100, name: '草莓'},
  {id: 101, name: '柚子'},
  {id: 102, name: '李子'}
];
for (let fruit of fruits) {
  let message = `ID: ${fruit.id} Name: ${fruit.name}`;
  console.log(message);
}
console.log(`List total: ${fruits.length}`);
```


**报错：Uncaught SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode**

>在文件第一行加　"use strict";


```
function* a(){
	yield 'a1';
	yield 'a2';
	yield 'a3';
	yield 'a4';
}
```


**报错：Uncaught ReferenceError: regeneratorRuntime is not defined**


>
+ As documented in the caveats, generators use require the 6to5 polyfill or the regenerator runtime
+ Generators a supported by default by chrome ( 45.0.2454.93 (64-bit)). It still doesn't work.

**方案：**

>

** npm install --save-dev babel-polyfill; **
** 在对应文件中 import 'babel-polyfill'; **


####set

>
+ 对象的键名总是字符串（当然，ES6 中也可以是Symbol）而不能是另一个对象。
+ ES6中又出现了新问题：纯粹的对象不可遍历，也就是，它们不能配合for-of循环或...操作符等语法。
