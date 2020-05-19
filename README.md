# fed-e-task-01-01
part1模块一作业

## 1. 执行结果 10
    var a = [];
    for (var i=0; i<10; i++) {
      a[i] = function(){console.log(i)}
    }
    a[6]();

 ### 解析 以上for循环代码可以解析为：
    (代码块1;代码块2；代码块3) { 语句}
    执行顺序： 代码块1(var了一个全局变量) => 代码块2 (符合条件) =>语句 => 代码块3(i自增) =>...(循环)=> 代码块2 (不符合条件) =>循环结束执行下一步 a[6]()
     (在代码块2的条件符合情况下循环调用,不符合条件跳出)
    var定义的变量为全局变量 每次循环变量i自增,因此循环结束 i为全局变量 值为10
    因此a[6]()打印的结果为10

## 2. 执行结果 报错
    var temp = 123;
    if (true) {
      console.log(temp);
      let temp;
    }
 ### 解析 ：    
    es6中新增的let const会在当前代码块生成一个块状作用域,且不会进行变量提升，
    因此在let的块级作用域中在初始化之前调用temp会形成暂时性死区

## 3. 结合es6新语法，找出数组中的最小值 Math.min(...new Set(arr));
    var arr = [12, 34, 32, 86, 4]
### 解析 ： set去重
    Math.min(...new Set(arr));

## 4. let const var 三种变量声明的具体差异

### 解析 ： 
        1.let const 为es6新增的变量声明，会绑定当前代码块生成一个块级作用域；
        2.var 声明的变量会挂载在全局变量上可以使用window调用，let，const不行；
        3.var可以进行变量提升，let const不行；
        4.let const会形成暂时性死区，在let const的作用域中，在let const定义之前调用声明的变量会报错
        5.let const 不能重复声明；
        6.const 为常量，一旦定义必须赋值，不能二次修改值，如果是对象数组，
        只要不改变引用地址，内部的属性及值是可以改变的
## 5. 执行结果 20
    var a = 10;
    var obj = {
      a:20,
      fn () {
        setTimeout(() => {
          console.log(this.a)
        })
      }
    }
    obj.fn()
### 解析 ： 
    1.函数内部的this指向调用他的对象；2.箭头函数没有自己的this，其内部的this是定义时所处的对象决定的

    因此obj.fn()调用时，fn内部this指向obj对象，此时进入fn函数对箭头函数进行定义，
    此时箭头函数定义所处的对象为obj，因此箭头函数中的this也指向obj

## 6.简述Symbol的用途

### 解析 ：   Symbol的值是独一无二
      1.可以为对象添加独一无二的属性名；
      2.可以定义对象的私有属性，因为值是独一无二的，因此在对象外部无法通过属性名获取这个属性值，
      并且forin等方法无法获取到Symbol设置的属性

## 7.什么是浅拷贝，什么是深拷贝

### 解析 ：
      1.数据类型分为基本数据类型（存储在栈中）与引用数据类型（真实数据存储在堆中，栈中只是存储了引用，指向真实数据的指针）；
      2.浅拷贝与深拷贝只针对于引用数据类型； 
      3.浅拷贝浅拷贝生成一个新对象，如果对象的属性值为基本类型，则数据修改互不影响，如果是引用类型，就相当于是拷贝了引用地址
      （指针），但是新旧引用指向的还是同一个真实数据，当一个对象发生改变时，另一个对象也随之改变，因为引用的同一个对象；
      4.深拷贝相当于是生成一个新的对象，只是对象内部的属性值与原对象一模一样，当改变一个对象的值不会影响另一个对象，
      因为两个对象引用不一样，对应的真实数据在堆中也是两个互不影响的数据

## 8.你是如何理解javascript的异步编程，eventLoop是做什么的，微任务与宏任务

### 解析：
    1.javascript的异步编程：
      js是一门单线程的语言，同一时间只能处理一个任务，因此当有任务耗时严重时会导致线程阻塞，而异步编程就是让我们在等待当前任务的响
      应返回之前，可以继续执行后续代码，即当前执行任务不会阻塞后续执行（回调函数，事件监听，promise，发布订阅等）。

    2.eventLoop：
      js中事件循环分为三个队列：主线程，job queue（微任务队列）， message queue(宏任务队列)， 优先级为主线程 > job > message;
      js中任务分为同步任务与异步任务，代码开始执行，同步任务顺序执行，当遇到异步调用，会根据任务区分为微任务与宏任务，微任务放入放
      入一个event Table进行执行，完毕后放入job queue，宏任务放入另一个event Table进行执行，根据完成时间放入message queue，当主线
      程为空时会检测job queue与message queue，优先顺序执行job queue（当加入新的微任务会在message queue之前继续执行），当job queue
      为空开始调用message queue（其中每个任务执行完毕后都需要在检测job queue，若有能执行微任务，没有继续下一个宏任务）

    3.宏任务与微任务：
      微任务：当前主线程执行完之后立即执行的代码，下一个主线程之前 （promise 等）
      宏任务：消息队列中的任务可以称为宏任务，当前队列主线程任务及微任务执行完之后才执行的任务（setTimeOut，script等）
## 9.使用Promise重构
    setTimeout(function () {
      var a = 'hello';
      setTimeout(function () {
        var b = 'lagou';
        setTimeout(function () {
          var c = 'I ♥ U';
          console.log(a + b +c )			  
        })			  
      })
		})
### 解析：
    new Promise((resolve, reject) => {
      resolve('hello');
    }).then(res => {
      return res + 'lagou';
    }).then(res => {
        console.log(res + 'I ♥ U')
    })

## 10. 请简述Typescript 与javascript的关系

### 解析：
    TypeScript是Javascript的超集，实现以面向对象编程的方式使用Javascript。但是代码最后还是需要编译为javascript。

## 11. 请简述Typescript优缺点

### 解析：
    优点： 1.静态类型检测避免开发中出现的类型异常，开发更高效；
          2.代码更健壮，适合大型项目多人协助开发；
          3.更加智能的语法提示，重构更方便；
          4.前端框架 Angular vue3.0已经开始使用TS
    缺点: 1.新增了许多新特性如接口，泛型等，需要一定的学习成本；
          2.不适于多人开发；
          3.需要编写类型声明，会增加一定的成本

![逐浪软件高新技术企业证书](https://www.z01.com/UploadFiles/Anony/content/md/HyjMvO5XZP..jpg#pic_right)