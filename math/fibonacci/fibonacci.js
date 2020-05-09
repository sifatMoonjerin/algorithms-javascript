// Calculate fibonacci number at Nth position

const fibonacci = n => {
    if(n === 1){
        return 1;
    }

    let previousValue = 0;
    let currentValue = 1;

    for(let i = 1; i < n; i++){
        [previousValue, currentValue] = [currentValue, previousValue+currentValue];
    }

    return currentValue;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));