"use strict";
// 更详细实现
import Point from './class.js';

export default class ColorPoint extends Point {
 
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
 
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
 
}



console.log('ColorPoint');