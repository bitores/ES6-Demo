"use strict";
//定义类
export default class Point {
 
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
 
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
 
}

console.log('Point');