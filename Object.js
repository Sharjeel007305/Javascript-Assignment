// var Student = [
//     {name : 'Shahroz', age : 32},
//     {name : 'Shaheer', age : 34},
//     {name : 'Jalal', age : 25},
// ]
//     // console.log [Student];

// for(var a= 0; a < Student.length;a++){
//     document.write(Student[a].name + " "+ Student[a].age +"<br>");
// }

// let a = {
//     name : "Sharjeel",
//     age :21,
//     residence : "korangi"
// }

// console.log(a.age);

// let ball = {
//     shape : 'Round',
//     colour : 'yellow'
// }

// console.log(ball.colour);

// let bat = {
//     shape : 'Square',
//     colour : 'White'

// }

// console.log(bat.shape);

// let Laptop = {
//     shape : 'Square',
//     colour : 'Black',
//     Brand : 'Dell'
// }

// console.log(Laptop.Brand);

// let Mobile = {
//     shape : 'Square',
//     colour : 'Pink',
//     Brand : 'Techno',
// }
// console.log(Mobile.colour);

// let Halmite = {
//     shape : 'Round',
//     colour : 'Black',
//     Brand :  'Simpson'
// }

// console.log (Halmite.Brand);

// let Product = {
//     name : 'Peanut Pik Biscuits',
//     Brand : 'Peack Frean'
// }

// console.log(Product.name)

// let Glasses = {
//     Style : 'Rimless Frames',
//     Brand : 'Ray-Ban',
//     shape : 'Oval'
// }

// console.log (Glasses.shape);

// let Paint = {
//     Colour : 'Pink',
//     Brand : 'Dunn-Edwards',
//     shape : 'Round'
// }

// console.log (Paint. Brand);


// let TShirt = {
//     Style : 'Polo t shirt collar',
//     Design : 'Funky Print',
//     Colour : 'White'
// }

// console.log (TShirt.Style);

// let cup = {
//     Shape : 'Round',
//     Colour : 'White',
//     Brand: 'MugArt'
// }

// console.log (cup.Designer);


// let DrinkProucts = {
//     Manufacture : 'Pepsi Company',
//     Brand : 'Pepsi',
//     shape : 'Round'
// }

// console.log (DrinkProucts.Manufacture);


// let Flag = {
//     Colour : 'Green',
//     Designer : 'Syed Amir-uddin Kedwaii',
//     shape : 'Square'
// }

// console.log (Flag.Designer);

// var elm = prompt("Enter Number of Student");


var student = [];

for (var i=0 ; i < 2  ; i++){
    
    var Name = prompt("Enter Name");
    var Id = prompt("Enter Id");
    var Class = prompt("Enter Class");

    var Studentinf = {Name: Name, Id :Id  , Class: Class};
    console.log(Studentinf);
    student.push(Studentinf);
                      
}
console.log(student);
SearchBy = prompt('Press 1 for Search by Name \n Press 2 for Search by Id \n Press 3 for Search by Class');
if('1'=== SearchBy){
  // console.log(student[0].Name);  
  let nameSearch = prompt("Enter Name");
  for(let i = 0; i < 2; i++){
    if(nameSearch===student[i].Name){
     console.log(student[i].Name);
    }
  }

}
else if ('2'=== SearchBy) {
    // console.log(student[1].Id);
    let searchid = prompt("Enter Id");
    for(let i = 0; i < 2 ; i++) {
      if(searchid===student[i].Id){
        console.log(student[i].Id);
      }
    }
}
else if('3'=== SearchBy) {
    // console.log();
    let searchclass = prompt("Enter Class");
    for (let i=0; i < 2; i++){
      if(searchclass=== student[i].Class){
        console.log(student[i].Class);
      }
    }
}