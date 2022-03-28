const curry = (fn, ...args) => {
  return function (...newArgs) {
    return fn.apply(null, [...args, ...newArgs]);
  };
};

function sum(a, b) {
  return a + b;
}

const addFive = curry(sum, 5);
console.log({ addFive });

console.log(addFive(4));
