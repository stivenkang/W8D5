function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num) {
        numbers.push(num)

        if (numbers.length === numArgs) {
            let total = 0;
            numbers.forEach(function (num) {
                total += num;
            })
            return total;
        } else {
            return _curriedSum
        }
    }
}


// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
  
// sumThree(4, 20, 6); // == 30
  
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// // you'll write `Function#curry`!
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
  
// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56