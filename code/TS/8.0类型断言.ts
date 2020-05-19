export{} //确保不于与其他文件变量冲突

const arr:number[] = [1, 3, 4]

const res = arr.find(i => i > 0);

const num1 = res as number;

const num2 = <number>res;//会与html标签起冲突

const squar = num1 * num2;