//创建promise
var promise = new Promise(function(resolve, reject) {
    // 进行一些异步或耗时操作
    let index = 10;
    if ( index >8 ) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});
//绑定处理程序
promise.then(function(result) {
	//promise成功的话会执行这里
    console.log('!!!',result); // "Stuff worked!"
}, function(err) {
	//promise失败会执行这里
    console.log(err); // Error: "It broke"
});