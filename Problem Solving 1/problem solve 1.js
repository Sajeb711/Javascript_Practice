// Video ---   Learn With Sumit ....

// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা Randomly  প্রিন্ট করতে পারি -- 

function ludo(min , max){
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}
document.write('Ludo = '+ ludo(1 , 6) + '<br>');


// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি। 

const clAss = [' Sajeb ',' Poly' ,' Mohona',' Sohorab',' Rifat',' Subash', ' Rafikul',' Joy' ,' Jakir'];
document.write('Friends = '+ clAss.sort() + '<br>');


// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি ।

const rollNumber = [ 45 , 32 , 15 , 35 , 124 , 23 , 165 , 15 , 14 + '<br>'];
document.write('Roll Number = '+ rollNumber.sort(function (Big , Small){
return Big - Small;
}));


// কোন সাল Leap Year কি না তা বের করতে পারি কিভাবে ? 

function leap_Year(year){
if((year % 400 === 0) || ((year % 4 ===0) && (year % 100 !== 0))){
  document.write(`${year} Is a leap Year`  + '<br>');
}
else{
  
  document.write(`${year} Is Not a leap Year` + '<br>');
}
}
leap_Year(2050);


// কোন Sentence এ কতগুলো vowel আছে তা নির্ণয় করা যায় কি ভাবে ? 

const vowel = ['a','e','i','o','u','A','E','I','O','U'];
function vowelcount(sentence){
let count = 0;
const letters = Array.from(sentence);

letters.forEach(function(value){
  if(vowel.includes(value)){
    count++;
  }
});
return count;
}
document.write(`Vowels = `+ vowelcount( `Sajeb Chakraborty`) + '<br>');


// কোন array থেকে duplicate নাম্বার গুলোকে কিভাবে বের করে আনতে পারি ? 

const numbers = [1,2,3,4,5,1,4,3,7,8,9,6,5,4,7,3,7,9,11,1,];
const duplicate = numbers.filter(function(value , index, array){
 return array.indexOf(value) !== index
});
document.write('Duplicate Number = '+ duplicate + '<br>');


// কোন array থেকে Unique নাম্বার গুলোকে কিভাবে বের করে আনতে পারি ? 

const uniqnumbers = [11 , 74, 1, 59, 64, 3, 11, 78, 641,1 , 6, 78, 14 , 90];
const unique = uniqnumbers.filter(function(value , index, array){
 return array.indexOf(value) === index
});
document.write('Unique Number = '+ unique);