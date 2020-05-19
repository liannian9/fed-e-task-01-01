//this指向分为（优先级由上往下，箭头函数this由上一级决定）
  // 1.默认绑定{全局或者undefined，es6、node为当前模块} 普通函数中的this，浏览器环境为全局或者undefined，node为global对象
  // 2.隐式绑定{对象调用}
  // 3.显示绑定{call,apply,bing}
  // 4.new绑定{实例对象}


//在node环境下模块中this指向当前模块 某种情况下this === exports === module.exports
//exports.a = module.exports.a = this.a
//this {}
//this === module.exports true 当不给module.exports赋值的情况下
exports.a = 10;
this.b = 20;
module.exports.c = 30

//此时导出的数据为{ a: 10, b: 20, c: 30 } 此时this === exports === module.exports
module.exports = {
  d:50
}
//定义了module.exports 此时导出的数据为{ d: 50 }

//定义了module.exports 外部只能访问到module.exports导出的对象 exports定义的属性方法无法访问
console.log(this, module.exports, exports) //{ a: 10, b: 20, c: 30 } { d: 50 } { a: 10, b: 20, c: 30 }


//函数中的this指向全局对象 global
function fn(){
  function fn2(){
    this.age = 18;
  }
  fn2();
  console.log(this); //global对象
  console.log(this.age); //18
  console.log(global.age); //18
}
// fn();

