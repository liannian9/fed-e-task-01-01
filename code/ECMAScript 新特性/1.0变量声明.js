// 1.let const 为es6新增的变量声明，会绑定当前代码块生成一个块级作用域；
// 2.var 声明的变量会挂载在全局变量上可以使用window调用，let，const不行；
// 3.var可以进行变量提升，let const不行；
// 4.let const会形成暂时性死区，在let const的作用域中，在let const定义之前调用声明的变量会报错
// 5.let const 不能重复声明；
// 6.const 为常量，一旦定义必须赋值，不能二次修改值，如果是对象数组，
// 只要不改变引用地址，内部的属性及值是可以改变的

for (let i=0;i<10; i++) {
  // let i = 'foo'
  setTimeout(function() {
    console.log(i);
  })
}
//在for循环中使用let 每次循环都相当于重新定义了i，形成了一个新的作用域
//伪代码
  /* (let i=0){
    setTimeout(function() {
      console.log(i);
    })
    }
    (let i=1){
    setTimeout(function() {
      console.log(i);
    })
    }
    (let i=2){
    setTimeout(function() {
      console.log(i);
    })
    }; */
    // 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//另外在for循环中相当于有两层作用域
  /* (let i=0){
      let i = foo;
    setTimeout(function() {
      console.log(i);
    })
    }
    (let i=1){
      let i = foo;
    setTimeout(function() {
      console.log(i);
    })
    }
    (let i=2){
      let i = foo;
    setTimeout(function() {
      console.log(i);
    })
    }; */

// }
// foo
// foo
// foo
// foo
// foo
// foo
// foo
// foo
// foo
// foo


// for (var i=0; i<10;i++) {
//   setTimeout(function() {
//     console.log(i);
//   })
// }
//var不能形成块级作用域
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

