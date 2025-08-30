const findTheOldest = function(array) {
let way = array.reduce((name,value) => {
 const oldestAge = getage(name.yearOfDeath,name.yearOfBirth);
 const currentAge = getage(value.yearOfDeath,value.yearOfBirth);
 return oldestAge > currentAge ? name : value;
}, array[0]);
return way;
        
};

function getage(death,age){
       if(!death){
        death = new Date().getFullYear();;
       }
       return death - age;
}

// Do not edit below this line
module.exports = findTheOldest;
