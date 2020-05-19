//对象不能被for of循环是因为没有迭代器 Symbol.iterator接口

let obj = {
  a:1,
  b:2,
  [Symbol.iterator]:function() {
    let arr = Object.keys(obj) // [a, b]
    let i = 0;
    return {
      next:function () {
        return {
          value:obj[arr[i++]],
          done:i > arr.length
        }
      }
    }
  }
}

for (let val of obj) {
  console.log(val)
}
let generator = obj[Symbol.iterator]()
console.log(generator.next())//{ value: 1, done: false }
console.log(generator.next())//{ value: 2, done: false }
console.log(generator.next())//{ value: undefined, done: true }

//以上在es6中有一个 生成器generator

let obj1 = {
  a:1,
  b:2,
  [Symbol.iterator]:function *() {
    // let res = yield 1;
    // console.log(res); //second
    // let res1 = yield 2;
    // console.log(res1); //second
    // return res1
    let arr = Object.keys(obj1)
    for (var i of arr) {
      yield obj1[i]
    }
  }
}
let generator1 = obj1[Symbol.iterator]()
console.log(generator1.next('first'))//{ value: 1, done: false }
console.log(generator1.next('second'))//{ value: 2, done: false }
console.log(generator1.next('third'))//{ value: undefined, done: true }

for (let val of obj1) {
  console.log(val)
}