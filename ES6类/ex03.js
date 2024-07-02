class Oops extends Error {
  constructor(reason) {
    super();
    this.oops = reason;
  }
}

var ouch = new Oops("I messed up!");
throw ouch;
