// class MyCoolArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
// }
// var a = new MyCoolArray(1, 2, 3),
//   b = a.map(function (v) {
//     return v * 2;
//   });

// console.log(b instanceof MyCoolArray); // false
// console.log(b instanceof Array); // true

class Foo {
  static get [Symbol.species]() {
    return this;
  }
  spawn() {
    return new this.constructor[Symbol.species]();
  }
}

class Bar extends Foo {
  static get [Symbol.species]() {
    return Foo;
  }
}

// var a = new Foo();
// var b = a.spawn();
// console.log(b instanceof Foo);

var x = new Bar();
var y = x.spawn();
console.log(x instanceof Bar);
console.log(x instanceof Foo);
console.log(y instanceof Bar);
console.log(y instanceof Foo);
