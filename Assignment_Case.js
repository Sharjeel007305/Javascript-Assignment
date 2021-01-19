// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// let n = str.charCodeAt(25);
// console.log(n);


// let uppername ="Pakistan";
// let x = uppername.toUpperCase();
// console.log(x);

// let lowname ="PAKISTAN";
// let y = lowname.toLowerCase();
// console.log(y);

// var student = [];
    
//  Name = prompt("Enter Name");
// // var Count = "()";

// var Studentinf = {Name: Name};
// console.log(Studentinf);
// student.push(Studentinf); 
// // console.log(Count);


// for (let i=0 ; i < Name.length; i++){
//     let n = Name[i].charCodeAt();
//     console.log("This is ASCII Code",+n);
// }


let str = prompt("Enter Name");
let sL = str.length;
let uppercaseCount = 0;
let lowercaseCount = 0;
let numericcount = 0;

for (let  i = 0; i < sL; i++) {
    let n = str.charCodeAt(i);
    console.log("This is ASCII Code",+n);

    let chr = str.charAt(i);

    if (chr >= "A" && chr <= "Z") {
        uppercaseCount += 1; 
        console.log('uppercase:',chr);
    }
    else if(chr >= "a" && chr <= "z"){
        console.log('lowercase:', chr);
        lowercaseCount += 1;

    }
}
console.log("upper case letter Count", +uppercaseCount);
console.log("lower case letter Count", +lowercaseCount);

// function convertToBinary(x) {
//     let bin = 0;  
//     let rem , i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`);
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Decimal to Binary: ${bin}`);
// }

// convertToBinary(876);

