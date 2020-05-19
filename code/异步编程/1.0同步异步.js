//同步模式  代码排队执行，前一个代码没执行完不会执行后一个代码
//异步模式  不会等待当前任务结束采取执行下一个任务，而是任务开启后就往下执行


console.log('global start');
setTimeout(function timer1() {
  console.log('timer1 invoke')
}, 1800)
setTimeout(function timer2() {
  console.log('timer2 invoke')
  setTimeout(function inner() {
    console.log('inner invoke')
  }, 1000)
}, 1000)
console.log('global end');

//以上就时一个异步 执行顺序大致如下

/* 
**1.压入匿名全局调用，
**2.console.log('global start') 入栈，执行完毕出栈
**3.setTimeout入栈，异步调用，内部timer1移入eventTable，倒计时，setTimeOut执行完毕出栈
**4.setTimeout入栈，异步调用，内部timer2移入eventTable，倒计时，setTimeOut执行完毕出栈
**5.console.log('global end') 入栈，执行完毕出栈，最后清空全局调用
**6.此时eventLoop监听到调用栈清空，开始从消息队列取出第一个函数压入调用栈，当没有时就暂时停滞，继续监听
**7.timer1 与timer2两个倒计时结束后加入消息队列，根据倒计时timer2先进入，
**8.此时eventLoop监听到消息队列不为空，就将第一个函数timer2压入调用栈，异步调用，内部inner移入eventTable，倒计时，timer2执行完毕出栈
**9.第二个函数timer1压入调用栈，执行完毕出栈，以此循环
*/