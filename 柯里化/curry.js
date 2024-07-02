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

export default curry;
// const multiply = (x, y, z) => x * y * z;

// console.log(curry(multiply)(3)(2)(1).toString());

// let curry2 = function (a, b) { 
//     return a + b;
// }
//console.log(curry2.length);

// console.log([].slice.call([1,2,3]))