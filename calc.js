let num1 = Number(prompt('Enter the Number'));
let num2 = Number(prompt('Enter the Number'));
let op = prompt('Enter Operator');

if (op == '/'){
    alert('div is'+ (num1 / num2));
}
else if(op == '*'){
    alert('mul is'+ (num1 * num2));
}
else if(op == '+'){
    alert('sum is'+ (num1 + num2));
}

else if(op == '-'){
    alert('sub is'+ (num1 - num2));
}
else {
    alert('I only know to multiply, divide, add, subtraction two number, provide operator is not familiar me!');

}