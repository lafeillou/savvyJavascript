const person = {
  name: "张三",
};

const proxy = new Proxy(person, {
  get: function (target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError('Property "' + property + '" does not exist.');
    }
  },
});

console.log(proxy.name);
console.log(proxy.age);
