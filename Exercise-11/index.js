function factorial_reduce_method(n) {
    let arr = []
    for (let i=1; i<=n; i++) {
        arr.push(i);
    }
    if (arr.length === 0) {
        return arr.push(1);
    }
    return arr.reduce((a, b)=> {return a * b;})
}

function factorial_loop_method(n) {
    let result = 1;
    for (let i=1; i<=n; i++) {
        result *= i;
    }
    return result;
}

let n=0;
console.log(factorial_reduce_method(n), factorial_loop_method(n)); // 120