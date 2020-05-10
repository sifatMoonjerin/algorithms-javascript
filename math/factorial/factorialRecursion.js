const factorialRecursion = n => {
    return n > 1 ? (factorialRecursion(n-1) * n) : 1;    
}

console.log(factorialRecursion(0))