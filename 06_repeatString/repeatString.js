const repeatString = function (arr, times){
    let yr = "";
    if(times < 0){
        return 'ERROR';
    }
 for(let i = 1; i <= times ; i++){
    yr += arr;
 }
 return yr;
}

 repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('hey', 25);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
