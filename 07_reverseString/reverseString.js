const reverseString = function(arr) {
 let str = [...arr];
 let i = str.length-1 ;
 let reverse = "";
 for(let s = i; s >= 0 ; s--){
    reverse += str[s];
     }
     return reverse;
};
 
reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
