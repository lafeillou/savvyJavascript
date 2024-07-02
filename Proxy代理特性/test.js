// import * as _ from "../node_modules/lodash";

const _ = require("lodash");

let jsonUrlObj = {
  "/pages/category/index?storeId": "11123232",
  deskId: "23423423423424",
};

_.forEach(jsonUrlObj, (v, k) => {
  if (k.indexOf("?") !== -1) {
    jsonUrlObj[k.split("?")[1]] = v;
  }
});

console.log(jsonUrlObj);
