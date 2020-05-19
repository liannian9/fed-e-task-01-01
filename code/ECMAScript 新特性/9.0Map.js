//Map 是一种类似于对象的数据结构，可以用任意数据作为键名
//Symbol 是独一无二的值永远不可能取到相同的两个Symbol，主要用于为对象设置独一无二的属性
//对象 键名会转换为字符串，只能用字符串作为键名
let arr = [,2,3]
let obj = {
  [Symbol()]:1,
  [Symbol()]:2,
  [arr]:3,
  [{}]:4,
  [{a:1}]:6,
  [Symbol.toStringTag]:'newObject'

} //{ ',2,3': 3, '[object Object]': 6, [Symbol()]: 1, [Symbol()]: 2 }
console.log(obj['[object Object]']) //6 对象toString在之后都会转变为[object Object] 因此同名覆盖， 4的结果就被覆盖掉了
console.log(obj.toString()) //[object newObject] toStringTag

let obj1 = {a:1}
let arr1 = [2,3,4]
let map = new Map([[obj1, 'obj'], [arr1, 'arr1']])
map.set(null, 'null')
for (let [key, value] of map) {
  console.log(key, value)
}
/* { a: 1 } 'obj'
[ 2, 3, 4 ] 'arr1'
null 'null' */
console.log(map) //Map { { a: 1 } => 'obj', [ 2, 3, 4 ] => 'arr1', null => 'null' }
console.log(map.get(null))  //字符串null
console.log(map.get(obj1))  //字符串obj
map.clear()
console.log(map)//Map {}

