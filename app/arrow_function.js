// 六种语言中的简单函数示例
/*
	function (a) { return a > 0; } // JS
	[](int a) { return a > 0; }  // C++
	(lambda (a) (> a 0))  ;; Lisp
	lambda a: a > 0  # Python
	a => a > 0  // C#
	a -> a > 0  // Java
*/

// 废弃 arguments


// --------------------函数名称
// 函数名 匿名
() => { }
// 函数名 自定义 略

// ------------------参数
// 参数 无
var log = () => {
    console.log('no param')
}
// 参数 1个
var single = a => a
// 参数 1+个
var add = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    } else {
        return 0
    }
}

// ------------------返回值
// 返回值 无  略
// 返回值 1个 略

// 返回值 1+个
var getHash = arr => {
    // ...
    return ({
        name: 'Jack',
        age: 33
    })
}