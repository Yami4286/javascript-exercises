const add = function(...srr) {
  return srr.reduce((sum,current) => sum + current, 0);
 

};

const subtract = function(...srr) {
	  return srr.reduce((sum,current) => sum - current);
};

const sum = function(srr) {
	 let be = srr.reduce((sum,current) => sum + current, 0);
    return parseInt(be);
};

const multiply = function(srr) {
let be = srr.reduce((sum,current) => sum * current);
    return parseInt(be);
};

const power = function(a,b) {
	  let c = 1;
for (let i = 0; i < b ; i++){
  c *=a;
}
  return c;
};

const factorial = function(a) {
  if(a == 0){
    return 1;
  }
		  let c = 1;
for (let i = 1; i < a+1 ; i++){
  c *= i;
}
  return c;
};

add(0,0);
add(2,2);
add(2, 6);
subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);
multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(4, 3);
power(3, 10);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
