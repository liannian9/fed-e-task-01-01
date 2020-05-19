export {}
//object类型代表所有非原始类型如数组 函数 对象等，如想要只定义对象 使用对象字面量{a:string}
const a:object = function () {}
const b:object = [1, 2, 3]
const c:object = {a:1}

const d:{} = {}
// const e:{a:string} = [1, 2, 3] //必须严格对应每一项属性