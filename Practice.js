var elm = prompt("Enter No. of Element");
let num1 = [56, 78, 67, 15, 90, 98, 101, 546, 678, 987, 876, 765,898, 1101, 465, 999, 345, 267, 167, 34];
// let num1 =['Shaheer', 'Muzammil', 'Talib', 'Jabbar', 'Zulqarnain', 'Zohaib', 'Sattar', 'Jibran', 'Asad', 'Adeel', 'Zain' , 'Wadood', 'Noman', 'Farman', 'Fahad', 'Majid', 'Waqas', 'Jalal','Nadeem','Fahim'];

    for(var i =0 ;  i<= num1.length; i++){
        // console.log('-');
        if(elm==num1[i]) {
            console.log(num1[i],'found');
            alert('This number is found at'+ " " + i);
            break;

        }
        else {
            if(num1.length== i){
                console.log('not found');
                alert('This number not found!');
            }
            // break;
        }
    }
     
    // alert('This number not found!' );

//     var fruits_arr = ['Apple','Mango','Grapes','Orange','Fig','Cherry'];

//     function checkValue(value,arr){
//       var status = 'Not exist';
    
//       for(var i=0; i<arr.length; i++){
//         var name = arr[i];
//         if(name == value){
//           status = 'Exist';
//           break;
//         }
//       }
    
//       return status;
//     }
//     console.log('status : ' + checkValue('Mango', fruits_arr) );
// console.log('status : ' + checkValue('Peach', fruits_arr) );
  
// let cup = {
//     colour : 'green',
//     shape : 'Round',
// }

// console.log('cup',cup);

// let Ball = {
//     colour : 'Yellow',
//     shape : 'Round',
// }

// console.log ('Ball', Ball);


     