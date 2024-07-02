function* foo() {
  var x = yield 2;
  z++;
  var y = yield x * z;
  console.log(x, y, z); // 第二次暂停求值的时候 就会执行
}

var z = 1;

var it1 = foo();
var it2 = foo();

// 启动，it1第一次暂停 x=2 z=1
var val1 = it1.next().value; // 2
// 启动  it2第一次暂停 x=2 z=1
var val2 = it2.next().value; // 2

//console.log(it1);

//console.log(val1);
//console.log(val2);

// it1 第二次暂停, z=2,y=40, x=20
val1 = it1.next(val2 * 10).value; // 40
// it2 第二次暂停, z=3, y=600, x =200
val2 = it2.next(val1 * 5).value; // 600

// console.log(val1); // 40
// console.log(val2); // 600
// it1 第三次不会暂停，直接执行到末尾
const res1 = it1.next(val2 / 2);
const res2 = it2.next(val1 / 4);
// console.log(res1);
// console.log(res2);
