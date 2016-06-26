#ES6学习笔记

> npm install
> npm start
> npm build
> npm publish
> or npm run compile


>语法糖（Syntactic sugar），也译为糖衣语法，是由英国计算机科学家彼得·约翰·兰达（Peter J. Landin）发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。

>简单说，语法糖就是为了避免coder出现错误并提高效率的语法层面的一种优雅的解决方案

>语法糖是指语言中的一个构件，当去掉该构件后并不影响语言的功能和表达能力。

>ES6的新特性-让前后端差异越来越小

>
>ES6新特性：Proxy； 要使用的话， 直接在浏览器中执行即可， node和babel目前还没有Proxy的polyfill;，要使用的话，直接在浏览器中运行就好了，浏览器的兼容性为：chrome>49或者firefox>18；

>代理器Proxy有点像Object的geter和seter,  可以认为是geter和seter的扩展：

>截获代码
>
+ handler.getPrototypeOf() 
+ handler.setPrototypeOf() 
+ handler.isExtensible() 
+ handler.preventExtensions() 
+ handler.getOwnPropertyDescriptor() 
+ handler.defineProperty() 
+ handler.has() 
+ handler.get() 
+ handler.set() 
+ handler.deleteProperty() 
+ handler.ownKeys() 
+ handler.apply() 
+ handler.construct()

>getPrototypeOf方法必须返回一个对象， 否则会报错：

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
