class MyCoolArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}

var a = new MyCoolArray(1, 2, 3);

console.log(a.length);
console.log(a);

console.log(a.first());
console.log(a.last());
