/*var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(str2)
*/


// loops

var num:number = 0;
var count:number = 0;
for(num = 0; num <= 20; num++){
    if(num % 2 == 0){
        continue;
    }
    count++
}
console.log(" The count of odd values between 0 and 20 is: " + count);