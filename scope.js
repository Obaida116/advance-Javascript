let number3 = 20;
function sum(number1, number2){
    let result = number1 + number2 + number3;
    console.log(result); /**this only workable here */
    return result;
    
}

const output = sum(7, 13);
console.log(output);
console.log(result); /**is not workable. because 'result' is local variable**/