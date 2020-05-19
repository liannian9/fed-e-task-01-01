// 模板字符串 带标签

function tag(...arg) {
  console.log(arg);//[ [ 'this is ', ' not ', '' ], 'aaaa', 'bbbb' ]
  const [[one, two, three], a, b] = arg;
  return one + a + two + b + three + '(this is a tag)';
}

const a = "aaaa";
const b = "bbbb";
const result = tag`this is ${a} not ${b}`;
console.log(result);//this is aaaa not bbbb(this is a tag)