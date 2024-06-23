function calculator(num1, num2, op, fault_prob = .1){
    ran_number = Math.random();
    if (ran_number < fault_prob){
        if (op === "+"){
            return num1 - num2;
        }
        else if (op === "-"){
            return num1 / num2;
        }
        else if (op === "*"){
            return num1 + num2;
        }
        else if (op === "/"){
            return num1 ** num2;
        }
        else if (op === "^"){
            return num1 * num2;
        }
        else {
            console.log(`Operator not Suppored`);
        }
    }
    else {
        if (op === "+"){
            return num1 + num2;
        }
        else if (op === "-"){
            return num1 - num2;
        }
        else if (op === "*"){
            return num1 * num2;
        }
        else if (op === "/"){
            return num1 / num2;
        }
        else if (op === "^"){
            return num1 ** num2;
        }
        else {
            console.log(`Operator not Suppored`);
        }
    }
}


/*
Supported Operations:
   1). Addition "+"
   2). Subtraction "-"
   3). Multiplication "*"
   4). Division "/"
   5). Exponent "^"
*/
console.log(calculator(2, 4, "+", .5));