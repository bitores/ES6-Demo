var path = require('path');

var config = {
  entry: 
    {
    	main:[
    	'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:8080',
    	'./app/main.js'
    	]
    }
    
	,
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
		  	test: /\.js?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
		  	loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
		  	query: {
				presets: ['es2015']
		  	}
		}]
	}
};


module.exports = config;