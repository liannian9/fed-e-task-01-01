const message = 'new methods of string';

console.log(message.startsWith('new'));
console.log(message.endsWith('string'))
console.log(message.includes('methods'));
// true
// true
// true
const proto = {
  foo: () => console.log('hello')
};

const obj = {
  foo: 'world',
  find() {
    super.foo();
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() 