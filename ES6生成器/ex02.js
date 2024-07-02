// 同步错误处理
function* main() {
  var x = yield "Hello World";
  console.log(x); // 永远不会执行到这里
}

var it = main();
it.next(); // 启动生成器

try {
  it.throw("Oops");
} catch (err) {
  console.error(err);
}
