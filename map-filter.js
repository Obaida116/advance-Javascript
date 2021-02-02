// finding square through for loop

const numbers = [12, 13, 17, 19, 21, 22];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers [i];
    const result = element * element;
    output.push(result);
}

console.log(output);

// finding square through Map

const squareOutput = numbers.map(function(element){
    const result = element * element;
    return result;
})

console.log(squareOutput);

// finding square through Map and using Arrow function
const squareResult = numbers.map(element => element * element);

console.log(squareResult);

// shorter version of using map and arrow function

const getSquare = numbers.map(x => x * x);

console.log(getSquare);

// using filter
const squareEven = numbers.filter(x => x > 15);

console.log(squareEven);
