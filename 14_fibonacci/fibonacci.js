const fibonacci = function(fib) {
  parseInt(fib);
  if(fib < 0){
    return "OOPS";
  }
  if(fib === 1)
{
    return 0;
}    

let a = 0;
    let b = 1;
 let c;
    for(let i = 0; i < fib; i++ ){
        c = a + b;
        b = a;
        a = c;
        
    }
    return a;
};
fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
