const removeFromArray = function(arr, a,b) {
    if(!arr.includes(a)){ a = null;}
    if(!arr.includes(b)){b = null};
    if(!arr.includes(a) && !arr.includes(b)){ return arr;}
if(a == null || b == null){
    if(a == null){ a = b;}
    let as = arr.slice();
    let Boo = true;
while(Boo){
    let bs = as.findIndex(fid => fid === a);
as.splice(bs, 1);
if(!as.includes(a)){
    Boo = false;
}
}
return as;
}else{ 
      let as = arr.slice();
      let Boo =true;
  while(Boo){
          let bs = as.findIndex(fid => fid === a );
as.splice(bs,1);
let bc = as.findIndex(fid => fid === b );
as.splice(bc,1);
if(!as.includes(a) && !as.includes(b)){
 Boo=false;
}
  }
return as;
}
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1,2,2,3],2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);


// Do not edit below this line
module.exports = removeFromArray;
