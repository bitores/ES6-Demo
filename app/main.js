// 整体的导入
// 方法一：
import {getName, getAge} from './modules.js';
console.log(getAge(),getName());
// 方法二：
import * as module from './modules.js';
console.log(module.getAge(),module.getName(),module.name);

import ColorPoint from './subclass.js';

import * as n from './arrow_function.js';

import * as ge from './generators.js';

import * as sy from './symbols.js';