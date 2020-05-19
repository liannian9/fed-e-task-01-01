//7.0proxy与Reflect
// get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
// set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
// has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
// deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
// ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
// getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
// defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
// preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
// getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
// isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
// setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
// apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
// construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
let arr = [1, 2, 3]
let newArr = new Proxy(arr, {
    set:function(target, propKey, value, receiver) {
      console.log(target, propKey, value, receiver,"===>set");
      return Reflect.set(target, propKey, value, receiver);
    },
    get:function(target, propKey, receiver) {
      console.log(target, propKey, receiver,"===>get");
      return Reflect.get(target, propKey, receiver);
    },
    defineProperty(target, key, descriptor) {
      console.log(target, key, descriptor,"===>defineProperty");
      return Reflect.defineProperty(target, key, descriptor);
    },
    deleteProperty(target, propKey) {
      console.log(target, propKey,"===>deleteProperty");
      return Reflect.deleteProperty(target, propKey);
    },
    has(target, propKey) {
      console.log(target, propKey,"===>has");
      return Reflect.has(target, propKey);
    },
    ownKeys(target) {
      console.log(target, Reflect.ownKeys(target), "===>ownKeys");
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(target, propKey) {
      console.log(target, propKey, "===>getOwnPropertyDescriptor");
      return Reflect.getOwnPropertyDescriptor(target, propKey);
    }

});
  // newArr.push(4)
  // newArr.pop()
  // 3 in newArr;
  // Object.keys(newArr)
  //Object.getOwnPropertyDescriptor(newArr, 'length') //[1, 2, 3] "length" "===>getOwnPropertyDescriptor"

/* 
** [1, 2, 3] "push" Proxy {0: 1, 1: 2, 2: 3} "===>get"
** [1, 2, 3] "length" Proxy {0: 1, 1: 2, 2: 3} "===>get"
** [1, 2, 3] "3" 4 Proxy {0: 1, 1: 2, 2: 3} "===>set"
** [1, 2, 3] "3" {value: 4, writable: true, enumerable: true, configurable: true} "===>defineProperty"
** [1, 2, 3, 4] "length" 4 Proxy {0: 1, 1: 2, 2: 3, 3: 4} "===>set"
** [1, 2, 3, 4] "length" {value: 4} "===>defineProperty"
** [1, 2, 3, 4] "pop" Proxy {0: 1, 1: 2, 2: 3, 3: 4} "===>get"
** [1, 2, 3, 4] "length" Proxy {0: 1, 1: 2, 2: 3, 3: 4} "===>get"
** [1, 2, 3, 4] "3" Proxy {0: 1, 1: 2, 2: 3, 3: 4} "===>get"
** [1, 2, 3, 4] "3" "===>deleteProperty"
** [1, 2, 3, empty] "length" 3 Proxy {0: 1, 1: 2, 2: 3} "===>set"
** [1, 2, 3, empty]0: 11: 22: 3length: 3__proto__: Array(0) "length" 3 Proxy {0: 1, 1: 2, 2: 3} "===>set"
** [1, 2, 3, empty] "length" {value: 3}value: 3__proto__: Object "===>defineProperty"
** [1, 2, 3] "3" "===>has"
** [1, 2, 3] (4) ["0", "1", "2", "length"] "===>ownKeys"
*/

let arr1 = [2, 3, 4];

let newArr1 = new Proxy(arr1, {
  //禁止扩展属性
  preventExtensions(target) {
    console.log(target, "===>preventExtensions");
      return Reflect.preventExtensions(target);
  },
  //是否可以扩展
  isExtensible(target) {
    console.log(target, "===>isExtensible");
    return Reflect.isExtensible(target);
  },

});

Object.preventExtensions(newArr1);

console.log(Object.isExtensible(newArr1)); //false
//不能在扩展属性 报错
// newArr1.push(4)//Cannot define property 3, object is not extensible

console.log(newArr1); 


function proto () {

}



let sum = function (x, y) {
  return x + y
};
let sum1 = function (x, y) {

}
sum1.prototype.method = function () {
  console.log('this id prototype')
}

let Sum = new Proxy(sum, {
  // call apply 或者作为函数调用时触发
  apply(target, object, args) {
    console.log(target, object, args, "===>apply");
    return Reflect.apply(target, object, args);
  },
  // new触发
  construct(target, args) {
    console.log(target, args, "===>construct");
    return Reflect.construct(target, args);
  },
  setPrototypeOf(target, proto) {
    console.log(target, proto, "===>setPrototypeOf");
    return Reflect.setPrototypeOf(target, proto);

  },
  getPrototypeOf(target) {
    console.log(target, "===>getPrototypeOf");
    return Reflect.getPrototypeOf(target);
  },
});

// Object.setPrototypeOf(Sum, sum1.prototype) // 定于原型链

// console.log(Sum.__proto__)  
// Object.getPrototypeOf(newArr1)
console.log(Sum.call(null, 1, 2)); // 3
// console.log(Sum( 1, 2)); // 3

// console.log(new Sum(1, 2));