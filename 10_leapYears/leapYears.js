const leapYears = function(year) {
if (year % 4 == 0){
    
    if(year % 100 == 0){
        
        if(year % 400 == 0){
            
            return true;
            
        }else{  //its 400 divisible else
            return false;  }
        
        } else {   // this is 100 divisible else
            return true; }
        
        } else{  // this is 4 divisible else
    return false;}

};
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);


// Do not edit below this line
module.exports = leapYears;
