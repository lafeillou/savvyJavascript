// import curry from "./curry";

const curry = (fn) => { 
    if (typeof fn !== 'function') { 
        throw Error('No function provided');
    }

    return function curriedFn(...args) { 
        if (args.length < fn.length) { 
            return function () { 
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            }
        }
        return fn.apply(null, args);
    }
}

let match = curry(function (expr, str) {
    return str.match(expr);
});

let hasNumber = match(/[0-9]+/);

let filter = curry(function (f, ary) {
    return ary.filter(f);
});

let findNumbersInArray = filter(hasNumber);

console.log(findNumbersInArray(["js","number1"]))