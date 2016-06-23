
// 1、Set的数据存储结构专门为一种操作作了速度优化：包含性检测。

// > // 检查"zythum"是不是一个单词
// > arrayOfWords.indexOf("zythum") !== -1  // 慢
//     true
// > setOfWords.has("zythum")               // 快
//     true


// 2、Set不能提供的则是索引。

//     > arrayOfWords[15000]
//         "anapanapa"
//     > setOfWords[15000]   // Set不支持索引
//         undefined


// 3、以下是Set支持的所有操作：

// new Set：创建一个新的、空的Set。
// new Set(iterable)：从任何可遍历数据中提取元素，构造出一个新的集合。
// set.size：获取集合的大小，即其中元素的个数。
// set.has(value)：判定集合中是否含有指定元素，返回一个布尔值。
// set.add(value)：添加元素。如果与已有重复，则不产生效果。
// set.delete(value)：删除元素。如果并不存在，则不产生效果。.add()和.delete()都会返回集合自身，所以我们可以用链式语法。
// set[Symbol.iterator]()：返回一个新的遍历整个集合的迭代器。一般这个方法不会被直接调用，因为实际上就是它使集合能够被遍历，也就是说，我们可以直接写for (v of set) {...}等等。
// set.forEach(f)：直接用代码来解释好了，它就像是for (let value of set) { f(value, value, set); }的简写，类似于数组的.forEach()方法。
// set.clear()：清空集合。
// set.keys()、set.values()和set.entries()返回各种迭代器，它们是为了兼容Map而提供的，所以我们待会儿再来看。