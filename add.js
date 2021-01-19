let num1 = Number(prompt('Enter a Number'));
let num2 = Number(prompt('Enter a Number'));
let op = prompt('Enter operator');

if(op == '+'){
    alert('Sum is ' + (num1 + num2));
}
else if (op == '-' ){

    alert('Sub is ' + (num1 - num2));
}

else{
    alert('I only know to add, subtraction two number, provided operator is not familiar to me!');
}



