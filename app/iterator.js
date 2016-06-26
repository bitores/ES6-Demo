console.log('iterator');
// 为什么 [Symbol.iterator] 语法看起来如此奇怪？这句话到底是什么意思？问题的关键在于方法名，ES 标准委员会完全可以将该方法命名为 iterator()，但是，现有对象中可能已经存在名为“iterator”的方法，这将导致代码混乱，违背了最大兼容性原则。所以，标准委员会引入了 Symbol，而不仅仅是一个字符串，来作为方法名。
// Symbol 也是 ES6 的新特性，后面将会有单独的文章来介绍。现在你只需要知道标准委员会引入全新的 Symbol，比如 Symbol.iterator，是为了不与之前的代码冲突。唯一不足就是语法有点奇怪，但对于这个强大的新特性和完美的后向兼容来说，这个就显得微不足道了。
// 一个拥有 [Symbol.iterator]() 方法的对象被认为是可遍历的（iterable）。在后面的文章中，我们将看到“可遍历对象”的概念贯穿在整个语言中，不仅在 for-of 语句中，而且在 Map和 Set 的构造函数和析构（Destructuring）函数中，以及新的扩展操作符中，都将涉及到。

//---------实现自己的迭代器
// 通常我们不会从头开始去实现一个迭代器对象,而借助Symbol.iterator来实现
var zeroesForeverIterator = {
  [Symbol.iterator]: function () {
    return this;
  },
  next: function () {
    return {done: false, value: 0};
  }
};

// ??为什么要实现迭代器呢？
// 答：因为在ES6中如果你要使用for...of来遍历你的自定义对象

var students = {}

students[Symbol.iterator] = ()=> {
  let index = 1;
  return {
    next() {
      return {done: index>5, value: index++}
    }
  }
}


// 使用for...of遍历
for(var i of students) {
  console.log('students for...of',i);
}
//使用while遍历
var iterator = students[Symbol.iterator]();

var s=iterator.next();
while(!s.done) {
  console.log('students while',s.value);
  s=iterator.next();
}

import 'babel-polyfill';
let teachers = {
  [Symbol.iterator]: function*() {
    for(var i=0;i<=5;i++) {
    //基本认为 yield 只是 iterator 的语法糖，它其实就是最终生成了一个 iterator
      yield i;
    }
  }
}

// 使用for...of遍历
for(var i of teachers) {
  console.log('teachers for...of',i);
}
//使用while遍历
var iterator = teachers[Symbol.iterator]();

var s=iterator.next();
while(!s.done) {
  console.log('teachers while',s.value);
  s=iterator.next();
}