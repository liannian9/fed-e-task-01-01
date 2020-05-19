//class 是一个语法糖


// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };

//以上代码可以写为

class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  
  }
}

//以上两套代码功能一致


class Sub extends Point {
  constructor (x, y, z) {
    super(x,y); //相当于Point.prototype.constructor.call(this, x, y), 子类必须执行super 因为没有自己的this
    this.z =z;
  }
}

new Sub(1, 2, 3).toString()
