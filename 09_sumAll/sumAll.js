const sumAll = function(num1,num2) {
    if(num1 <0 || num2 < 0 || !Number.isInteger(num2)|| !Number.isInteger(num1)){return 'ERROR'}
    if(num2< num1){
     let a = num2;
     num2 = num1;
     num1 = a;
    }
 let Sum = 0;
 for(let i = num1; i <= num2; i++){
    Sum += i;
 }
 return Sum;
};
sumAll(2,4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
