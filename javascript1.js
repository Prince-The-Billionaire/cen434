// Code for finding the average of ten numbers

let A = [0,1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for (var i = 0; i < A.length; i++){    
    sum += A[i];
}

let average = sum / A.length;
console.log("The average of all 10 number is ",average);

// code for finding the factorial of my matric number

const factorial = (x) => {
    let total = 1;
    for(let i = 1; i <= x; i++){
        total *= i
    }
    return total
}

console.log("The factorial of ",5, " is ",factorial(5))


const combination = (x,y) => {
    let combination_value
    if (x > y){
        console.log("X is greater than Y\n")
        combination_value = (factorial(x)/(factorial(y)*factorial(x-y)))
    }
    else if(x <y){
        console.log("X is less than than Y\n")
        combination_value = (factorial(y)/(factorial(x)*factorial(y-x)))
    }
    else{
        console.log("X is equal to  Y\n")
        combination_value = (factorial(x+1)/(factorial(y)*factorial(x-y+1)))
    }
    console.log("The combination of the two numbers ",x," ",y, " is ",combination_value)
}

combination(9,6)


