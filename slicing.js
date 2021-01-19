

// let cityToCheck =['Quaidabad', 'Shah Faisal', 'Nazimabad', 'North Karachi'];
// var firstChar = cityToCheck.slice(0, 2);
// var otherChars = cityToCheck.slice(1);
// firstChar = cityToCheck.toUpperCase();
// console.log();

// var fruits = ["Banana", "Orange", "Lemon" , "Apple", "Mango"];
// var citrus =  fruits.slice (0,3);
// console.log(citrus);

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(0);
// // for (var i = 0; i < cityToCheck.length; i++) {
// //     console.log(cityToCheck[i].toUpperCase());
// // }
//     for (var i = 0 ; i < cityToCheck.length; i++){
// console.log  (otherChars[i].toLowerCase());

// console.log ('Frist',firstChar);
// console.log (otherChars[i].toLowerCase());
//  var cappedCity = firstChar + otherChars;
// console.log (cappedCity);
    // }

// let text =['Muzammil', 'Asad', 'Jibran','hashim'];
// let text = `The New Yorker magazine doesn't allow the phrase "World War II"`
//     for (var i = 0; i < text.length; i++) {
        
//         // console.log(text[i]);
//         // console.log('--',text.slice(i, i + 12))
//          if (text.slice(i, i + 12) === "World War II") {
//             console.log(text[i], text[i + 11])
//             console.log('abc');
//            text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//            console.log(text)
//           }
//           }
//           console.log(text.length)
// let text = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should World War II be "the Second World War."`
// var firstChar = text.indexOf("World War II");
// console.log(firstChar)

// let text = `Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices"`
//     for (var i = 0; i < text.length; i++) {
//         if (text.slice(i, i + 3) === "com") {
//             console.log(text[i], text[i + 11])
//             console.log('abc');
//            text = text.slice(0, i) + "typically co" + text.slice(i + 12);
//            console.log(text)
//           }
//           }
//           console.log(text.length)

// let text = `Text messaging, or texting, is the act of composing and sending electronic messages`
//     for (var i = 0; i < text.length; i++) {
//         if(text.slice(i, i + 4) === "comp") {
//             console.log(text[i], text[i + 4])
//             console.log('abc');
//             text = text.slice(0, i) + "and send"+ text.slice(i + 9);
//             console.log(text)

//         }
//     }
//     console.log(text.length)

// var CharsInMonth = ['January', 'February', 'March'];

// var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//     if (charsInMonth > 3) {
//     monthAbbrev = month.slice(0, 3);
//     console.log(monthAbbrev);
// }
// console.log(CharsInMonth);

// let text = 'Text messaging,  or texting!';

// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 9) === "messaging") {
//          alert("Exclamation point found!");
//          break;
//      }
//      }

// var firstName ='Muhammad Sharjeel'
// var lastName = 'Khan'
// var name ='Muhammad Sharjeel Khan'

// var firstChar = firstName.slice(0,17);
// var firstChar = firstName.slice(0);
// var lastChar = name.slice(name.length - 17);


// console.log(lastChar);
// console.log (firstChar);
// console.log (firstChar);

// var text =`The New Yorker magazine doesn't allow the phrase "World War II.`

// var firstChar = text.indexOf("World War II");
// // var newText = text.replace("World War II", "the Second World War");
//      if (firstChar!== -1) {
//         // text =  text.slice(0, newText) + newText ;
//         text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);

//          console.log(text);
//      }

    //  var text =`The New Yorker magazine doesn't allow the phrase "World War II`;
    //  var firstChar = text.indexOf("World War II");
    //      if (firstChar !== -1) {
    //         text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
        
    //         console.log(text);    
    //     }

    // var scoreAvg = -1.2

    // var numberOfStars = Math.round(scoreAvg);
    
    // console.log(numberOfStars);


    // var scoreAvg = Math.floor(-.000001);

    // console.log(scoreAvg);

    // var scoreAvg = Math.ceil(-0.999999);

    // console.log(scoreAvg);

    // var randomNumber = Math.random();
    
    // console.log(randomNumber*10);


var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
     var numberOfStars = Math.floor(improvedNum);
     console.log(numberOfStars);