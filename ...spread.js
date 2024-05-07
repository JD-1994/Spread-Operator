// Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, 
// and returns a single array that combines both (using the spread operator).

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let combineArrays = [...arr1, ...arr2];

console.log(combineArrays);

// Exercise 2: Write a function called addEveryOther that takes
//  in any amount of arguments, and returns the sum of every other argument.
function addEveryOther(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i += 2) {
        sum += args[i];
    }
    return sum;
}

// Example usage:
console.log(addEveryOther(4, 7, 3, 2, 10)); // Output: 17
console.log(addEveryOther(2, 8, 3, 1)); // Output: 5
