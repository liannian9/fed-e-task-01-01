const a:string = "foo";

const b:number = 1;

const c:boolean = true;

const d:null = null;

const e:undefined = undefined;

const f:void = undefined;

// Symbol' only refers to a type, but is being used as a value here. 
// Do you need to change your target library? 
// Try changing the `lib` compiler option to es2015 or later
//上述报错是因为es6之前没有symbol的声明文件 将lib添加es6
//需要引入对应的标准库
const g:symbol = Symbol();

console.log();
