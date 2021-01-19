function dec_to_bin (n) { 
    let bin = 0;
    let rem, a =1, step = 1;
    while (n != 0) {
        rem = n % 2;
        console.log(`Step ${step++}: ${n}/2, Remainder = ${rem}, Quotient = ${parseInt(n/2)}`);
        n = parseInt(n / 2);
        bin = bin + rem * a;
        a = a * 10;
    }
    console.log(`Decimal to Binary: ${bin}`);

    // return parseInt(n, 10).toString(2);
}

dec_to_bin(115);
