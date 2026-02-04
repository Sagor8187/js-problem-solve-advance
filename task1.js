// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNUmber(numbers){
    let lowNumber = numbers[0];
    // let lowNumber = Infinity;
    for (let number of numbers){
        if(number < lowNumber ){
            lowNumber = number
        }
    }
    return lowNumber
}

let numbers = [167, 190, 120, 165, 137];
let output = lowestNUmber(numbers);
console.log(output)