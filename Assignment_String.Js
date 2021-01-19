let str = 'Our client a leading multinational tech start';
// const words = str.split(' ')
str = str.replaceAll(' ', '');
console.log(str)
// let substr = str.slice(0,5);
// console.log(substr)


for (let i = 0; i < str.length;) {
    let substr = str.slice(i,i+5);
    i=i+5
    console.log(substr);
}

// console.log(words[0]);


// const chars = str.split('');
// console.log(chars[8]);

// const strcopy =str.split();
// console.log(strcopy);













