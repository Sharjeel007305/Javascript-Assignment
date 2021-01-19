// let cityToCheck = 'Karachi';
// let cleanestCities = ['Lahore','Islamabad','Karachi','Multan'];

// var matchFound = "no";
// for (var i = 0; i < cleanestCities.length; i++){
//     console.log('a', cleanestCities[i]);
// if (cityToCheck === cleanestCities[i]) {
//     matchFound = "yes";
//     console.log('yes', cleanestCities[i]);
//     console.log("It's one of the cleanest cities");
 
// }
// // console.log("It's not one of the cleanest cities");
// //  if (matchFound === "no") {
// // alert("It's not on the list");
// // }
// }

let AreaToCheck = 'Nazimabad';
let cleanestArea =['Quaidabad', 'Shah Faisal', 'Nazimabad', 'North Karachi'];

var matchFound ="no";
for (var i = 0; i < cleanestArea.length; i++){
    // console.log ('no', cleanestArea[i]);
if(AreaToCheck == cleanestArea[i]) {
    matchFound = "yes";
    console.log('yes', cleanestArea[i]);
    console.log("It's one of the cleanest Area");

}
else {
    matchFound ="no";
    console.log('no', cleanestArea[i]);
    console.log("It's no one of the cleanest Area");
}
 }