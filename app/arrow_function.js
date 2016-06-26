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
// 不定参数
var add = (...x) => {
    x.reduce((m,n)=>m+n);
}
// 拓展参数 - 要求接收多个参数，但传入一个，自动分解
var fu = (p1,p2,p3) => {
    console.log(`Hello ${p1} ${p2} ${p3}`);
}
var people=['Wayou','John','Shaerlock'];
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
fu(...people);
//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
fu.apply(null,people);//输出：Hello Wayou,John,Sherlock 

// 参数有默认值
var sayHello = (name='dude') =>{
    console.log(`Hello ${name}`);
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

// 函数体的中花括号有无：简单的，函数体可以没有
(a) => console.log(a);