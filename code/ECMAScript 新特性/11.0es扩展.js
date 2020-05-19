const arr = [1,3 ,NaN, 'rr']


console.log(arr.includes(NaN)) //true
console.log(arr.indexOf(NaN)) //-1 不能查找NaN


const num = 2**3
console.log(num) //8
let obj = {
  a:1,
  b:'2',
  c:3,
  get fullName() {
    return this.a + this.b + this.c
  }
}
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

console.log(obj.fullName) //123
console.log(obj) //123

let obj2 = Object.assign({}, obj)
console.log(obj2) //123  { a: 1, b: '2', c: 3, fullName: '123' }
console.log(obj2.fullName) //123  fullName复制时被当作属性复制 不是方法

const des = Object.getOwnPropertyDescriptors(obj)//复制属性描述
let obj3 = Object.defineProperties({}, des)
console.log(des);
console.log(obj3.a = 7) 
console.log(obj3.fullName) //723  


//padStart padEnd 字符串的方法
const book = {
  h:5,
  c:10,
  j:55555
}

for(var [key, val] of Object.entries(book)) {
  console.log(String(key).padEnd(11, '-') + "|" + String(val).padStart(10, 0))
}
/* h----------|0000000005
c----------|0000000010
j----------|0000055555 */