export{} //确保不于与其他文件变量冲突


enum aaa {
    a,//0
    b,
    c,
}

console.log(aaa.a) //0

//作为接口值为 枚举项对应的值
const g:aaa = 0;