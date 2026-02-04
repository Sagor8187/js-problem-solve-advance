// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function totalPrice(laptopquantity,tabletquantity,mobilequantity){
        costlaptop = 35000 
        costtablet = 15000 
        costmobile = 20000 

        totalPrice =laptopquantity*costlaptop + tabletquantity*costtablet + mobilequantity*costmobile;

        return totalPrice
}
console.log(totalPrice(2,4,6))