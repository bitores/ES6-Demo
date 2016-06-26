// Map
// 一个Map对象由若干键值对组成，支持：

// new Map：返回一个新的、空的Map。
// new Map(pairs)：根据所含元素形如[key, value]的数组pairs来创建一个新的Map。这里提供的pairs可以是一个已有的Map 对象，可以是一个由二元数组组成的数组，也可以是逐个生成二元数组的一个生成器，等等。
// map.size：返回Map中项目的个数。
// map.has(key)：测试一个键名是否存在，类似key in obj。
// map.get(key)：返回一个键名对应的值，若键名不存在则返回undefined，类似obj[key]。
// map.set(key, value)：添加一对新的键值对，如果键名已存在就覆盖。
// map.delete(key)：按键名删除一项，类似delete obj[key]。
// map.clear()：清空Map。
// map[Symbol.iterator]()：返回遍历所有项的迭代器，每项用一个键和值组成的二元数组表示。
// map.forEach(f) 类似for (let [key, value] of map) { f(value, key, map); }。这里诡异的参数顺序，和Set中一样，是对应着Array.prototype.forEach()。
// map.keys()：返回遍历所有键的迭代器。
// map.values()：返回遍历所有值的迭代器。
// map.entries()：返回遍历所有项的迭代器，就像map[Symbol.iterator]()。实际上，它们就是同一个方法，不同名字。
// 还有什么要抱怨的？以下是我觉得会有用而ES6还没提供的特性：

// 键不存在时返回的默认值，类似 Python 中的collections.defaultdict。
// 一个可以叫Map.fromObject(obj)的辅助函数，以便更方便地用构造对象的语法来写出一个Map。
// Weak Maps
// var wm = new WeakMap();
// wm.set(s, { extra: 42 });
// wm.size === undefined