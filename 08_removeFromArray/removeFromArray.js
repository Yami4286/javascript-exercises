// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const removeFromArray = function(arr, ...num) {
    let ar = [];
    for(let i = 0; i < arr.length ; i++){
    if(!num.find(val => val === arr[i])){ar.push(arr[i]);}
}
return ar;
};
  


removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1,2,2,3],2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);


// Do not edit below this line
module.exports = removeFromArray;
