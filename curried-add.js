function curriedAdd(total = 0) {
    // Define a new function that takes a single argument 'num'.
    // This function will return a new 'curriedAdd' function.
    function add(num) {
      if (num === undefined) {
        // If 'num' is not provided, return the current 'total'.
        return total;
      } else {
        // If 'num' is provided, calculate the new total and return a new 'curriedAdd' function.
        return curriedAdd(total + num);
      }
    }
  
    // Return the 'add' function.
    return add;
  }
  
  module.exports = { curriedAdd };

  
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

console.log(firstAdder()); // 0
console.log(secondAdder(1)(2)()); // 3
console.log(thirdAdder(2)(8)(5)(1)()); // 16
