//回调函数：由调用者定义，交由执行者执行的函数，将函数作为参数传递

//promise pending=》fulfiled成功/rejected失败 明确结果后不可在改变

//基本用法

new Promise((resolve, reject) => {
  //同步代码
  resolve(100) //修改状态为fulfiled成功
  // reject(new Error("promise rejected"))//修改状态为rejected失败
}).then(function(res) {//onFulfilled
    //异步微任务
    console.log(res)
    return ajax('./tesst.json') 
}, function(err) {//onRejected 只能捕获上一个异常
  //异步微任务
  console.log(err)
}).then(function(res) {//onFulfilled
    //异步微任务
    console.log(res)
    
}, function(err) {//onRejected 只能捕获上一个异常
  //异步微任务
  console.log(err)
})

new Promise((resolve, reject) => {
  //同步代码
  resolve(100) //修改状态为fulfiled成功
  // reject(new Error("promise rejected"))//修改状态为rejected失败
}).then(function(res) {//onFulfilled
    //异步微任务
    console.log(res)
    return 123;
}).then(function(res) {//onFulfilled
  //异步微任务
  console.log(res)
  return ajax('./tesst.json')
}).catch(err => {//可以捕获在它之前的所有错误
  console.log(err);
})

function ajax (url) {
  return new Promise((resolve, rejected) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function() {
      if (this.status === 200) {
          resolve(this.response)
      } else {
        rejected(new Error(this.statusText))
      }
    }
    xhr.send();
  })
}

ajax('./test.json').then(res=> {
  console.log(res)
  return 23;
}, err => {
  console.log(err)
}).then(res => {
  console.log(res) // 23
})

Promise.all([ajax('./test.json'), ajax('./test.json')]).then(arr => {
  console.log(arr)//[{name: "John"},{name: "John"}]
})
Promise.all([ajax('./test.json'), ajax('./tests.json')]).then(arr => {
  console.log(arr)
}).catch(err => {//只要有任何一个请求失败i就会报错
  console.log(err)//Error: Not Found at XMLHttpRequest.xhr.onload (2.0异步相关.js:28)
})

Promise.resolve(2).then(res => console.log(res)) //2
Promise.reject(2).catch(res => console.log(res)) //2
Promise.reject(new Error(2)).catch(res => console.log(res)) 
/* Error: 2
    at Object.<anonymous> (2.0异步相关.js:79)
    at __webpack_require__ (bootstrap:19)
    at Object.<anonymous> (bootstrap:83)
    at __webpack_require__ (bootstrap:19)
    at bootstrap:83
    at bootstrap:83
2.0异步相关.js:37 123 */

let timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'))
  }, 500)
})
//第一个返回的结果
Promise.race([ajax('./test.json'), timeout]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err, 'errossssssssr')
})
/* Error: timeout
    at 2.0异步相关.js:91  */