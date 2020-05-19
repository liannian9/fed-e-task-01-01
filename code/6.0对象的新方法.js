Object.is(+0, -0)// false
Object.is(true, 'true')// false
Object.is(NaN, NaN)// true
NaN === NaN // false
+0 === -0; // true

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
let newTarget = Object.assign(target, source1, source2); // 在原数组上修改
//target // {a:1, b:2, c:3}
newTarget === target // true


const obj1 = {a: {b: 1}, b:3};
const obj2 = Object.assign({}, obj1);//浅拷贝

obj1.a.b = 2;
obj1.b = 5;
obj2.a.b // 2
obj2.b // 3

console.log(obj2.b, obj1.b);

// Object.keys()，Object.values()，Object.entries() Object.fromEntries()
console.log(Object.keys(obj1)) // [a, b]
console.log(Object.values(obj1)) // [ { b: 2 }, 5 ]
console.log(Object.entries(obj1)) // [ [ 'a', { b: 2 } ], [ 'b', 5 ] ]
