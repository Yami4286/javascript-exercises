const palindromes = function (srr) {
   let fr = srr.toLowerCase().replace(/[^a-z0-9]/g,"");
  const arr = fr.split("").reverse().join('');
   if(arr === fr){
       return true;
   }
   return false;
};
palindromes('racecar');
palindromes('racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Racecar!');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
