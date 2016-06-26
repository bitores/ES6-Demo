// 整体的导入
// 方法一：
import {getName, getAge} from './modules.js';
console.log(getAge(),getName());
// 方法二：
import * as module from './modules.js';
console.log(module.getAge(),module.getName(),module.name);

import ColorPoint from './subclass.js';

import * as n from './arrow_function.js';

import * as mapp from './map.js';
import * as setp from './set.js';
import * as newapi from './newapi.js';

import * as sy from './symbols.js';
import * as p from './promises.js';

import * as s from './iterator.js';
import * as pro from './proxy.js';
import * as ge from './generators.js';