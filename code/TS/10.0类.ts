/*
 * @Descripttion: 
 * @version: 
 * @Author: liannian9
 * @Date: 2020-05-20 07:31:48
 * @LastEditors: liannian9
 * @LastEditTime: 2020-05-20 07:49:15
 */ 
export{} //确保不于与其他文件变量冲突

class Person {
  protected name:string
  private  age:number
  readonly  title:number = 44 //readonly 修饰属性不能被修改，只能在初始化时赋值
  constructor(name:string, age:number, title:number) {
    this.name = name;
    this.age = age
    this.title = title //readonly 修饰属性不能被修改，只能在初始化时赋值 二者选其一
  }

  sayHi(msg:string):void {
    console.log(`${this.name} ${this.age} ${msg} ${this.title}`)
    // this.title = 20// 只读不能被修改
  }
}

// console.log(new Person('liannian9', 18, 30).title)


class Son extends Person {

  constructor(name:string, age:number) {
    super(name, age)
  }
  sayHi() {
    console.log(this.name)
    // console.log(this.age) 只能在person中访问
  }
}


// new Son('liannian9', 18).name//报错 protected 只允许在当前或者子类访问 

// new Person('liannian9', 18).name//报错 protected 只允许在当前或者子类访问 

// new Person('liannian9', 18).age //报错 private 只允许在当前被访问


interface eat {
  eat ():void
}
interface run {
  run ():void
}
//implements 实现接口
class Person1 implements eat,run {
  eat():void {
    console.log('eat')
  }
  run():void {
    console.log('run')
  }
}

abstract class EatAndRun {
    abstract eat():void
    abstract run():void
}
//继承的抽象类中的抽象方法必须实现
class Person2 extends EatAndRun {
  eat(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
  
}


//函数重载
interface test {
  (name:string):void
  (num:number):void
}
declare var Test:test;
Test('sss')
Test(123)

declare function cache(masg:string) : void;
declare function cache(masg:number) : void;

cache('sss');
cache(234);

