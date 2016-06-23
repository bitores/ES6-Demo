// ES6中引入的新特性——生成器（Generators）

// 在ES6中，它的名字是生成器函数，其与普通函数有很多相似的地方。但有两点不同：

// 生成器函数以function*开头；
// 在生成器函数中，yield是一个关键字，如同return。yield可以多次使用，作用是中断生成器，
// 而在需要的时候可以恢复生成器的执行。

// 所以生成器函数最大的特点是可以中断自己，但普通函数不可以。
import 'babel-polyfill';


// yield仍然保持着它的原始含义：暂停生成器，返回值给调用者

function* a(){
	yield 'a1';
	yield 'a2';
	yield 'a3';
	yield 'a4';
}

var b = function*(){
	yield 'b1';
	yield 'b2';
	yield 'b3';
	yield 'b4';
}

console.log('generators...');

var iter = a();

console.log(iter.next());
console.log(iter.next());

// 如何关停生成器

iter.return()
iter.next()
// iter.throw('error')
// yield*

///////////////////生成器就是迭代器/////////////////////