Function.prototype.curry = function (numArgs) {
    const numbers = [];
    const that = this

    return function _curry (num){
        numbers.push(num)

        if (arguments.length === numArgs){
            return that(...numbers)
        } else {
            return _curry
        };
    } 
};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

const janira = sumThree.curry(3)
console.log(janira)
console.log(janira(5)(30)(20));

// const sum = curry(4);
// console.log(sum(5)(30)(20)(1));
