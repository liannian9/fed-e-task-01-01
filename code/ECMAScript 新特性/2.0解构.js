//解构
//数组解构
let arr = [1, 2, 3];
const [a, b, c, d = 5] = arr;//a = 1, b = 2, c =3, d = 4
// const [a, ...rest] = arr;//a = 1, rest=[2,3]



//对象解构
let obj = {
  a:1,
  b:2
}
// const {a, b} = obj; 报错 a,b已经定义 需要重命名
// console.log(a, b)
const {a : newA = 'sss', b:newB = 'ssss', c:newC = 'newC'} = obj;
console.log(newA, newB, newC) //1 2 'newC'

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x // 1
// y // 2
// z // { a: 3, b: 4 }

let foo = { ...['a', 'b', 'c'] };

// {0: "a", 1: "b", 2: "c"}