function daz() {}

var obj = {
  foo: function () {},
  bar: function baz() {},
  bam: daz,
  zim() {},
};

console.log(obj.foo.name);
console.log(obj.bar.name);
console.log(obj.bam.name);
console.log(obj.zim.name);
