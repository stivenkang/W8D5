// function sum(...args) {
//     let nums = args;
//     let total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i]
//     };
//     return total
// }

console.log(sum(1, 2, 3, 4)) // === 10;
console.log(sum(1, 2, 3, 4, 5)) // === 15;


function sum(args) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments)
        total += arguments[i]
    };
    return total
}