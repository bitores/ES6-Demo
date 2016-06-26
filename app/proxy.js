// 类似拦截器。。。代理。。。
console.log('要开始拦截了。。');
// 设置第一个代理器
var obj = new Proxy({},{
	get:(target, prop)=>{
		console.log('我要获取值了');
		return target[prop];
	},

	set:(target, prop, value)=>{
		console.log('我要设置值了');
		target[prop] = value;
	}
});
// 设置第二个代理器
obj = new Proxy(obj,{
	get:(target, prop)=>{
		console.log('我要第二次获取值了');
		return target[prop];
	},

	set:(target, prop, value)=>{
		console.log('我要第二次设置值了');
		target[prop] = value;
	}
});

// --
// obj.vvv = 1;//设置值
// obj.vvv;    //取值

//--------------------验证
let validator = {
	getPrototypeOf:() => {}, //obj.[__proto__]或Object.getPrototypeOf(obj)
　　setPrototypeOf:() => {}, 
　　isExtensible:() => {}, 
　　preventExtensions:() => {}, 
　　getOwnPropertyDescriptor:() => {}, 
　　defineProperty:() => {console.log(77)}, 
　　has:() => {console.log(888);}, // key in obj
　　deleteProperty:() => {}, 
　　ownKeys:() => {}, 
　　apply:() => {}, 
	enumerate:() => {},//for (key in obj) 
	call:() => {},//functionObj()或x.method()
　　construct:() => {console.log(11111);}, //new Date()
	get:() => {}, //obj.prop或obj[key]
	set: (target, prop, value) =>{//obj.prop = value或obj[key] = value

		console.log(prop);

		// if(prop === 'age'){
			// 其它验证操作
			// if(!Number.isInteger(value)){
			// 	throw new TypeError('The age is not an integer');
			// }

			// if(value > 200){
			// 	throw new RangeError('The age seems invalid');
			// }
		// }

		target[prop] = value;
	}
}

var man = {age:10,name:'na'};//
var person = new Proxy(man, validator);

'age' in person;
Object.defineProperty(person,"newP",{
	value: 3.14,
    writable: false
});



// man.age = 50;
console.log(man.age);
// person.age = 1;// 抛异常
// person.age = 60;// 值太大了，也抛出异常