// operator গাণিতিক symbol যার মাধ্যমে গাণিতিক কাজকর্ম করা হয়। যেমন ঃ + - * / % ইত্যাদি। 

/* 
 Arithmetic Operator --> + (plus), - (minus). * (asterisk), / (divide) , % (modulus), ** (exponent) , ++ (increment ( increment দ্বারা ১ বাড়ানো যায়।)),
 -- (decrememt (decrememt দ্বারা ১ কমানো যায়। )).
*/

var num = 5+2 + "<br>"; // Plus Operators
document.write(num);

var num = 15-9 + "<br>";// minus Operators
document.write(num);

var num = 8*4 + "<br>"; // asterisk Operators
document.write(num);

var num = 81/9 + "<br>"; // devide Operators
document.write(num);

var num = 56%9 + "<br>"; // modulas Operators
document.write(num); // ভাগ করার ভাগশেষ  modulas দ্বারা বের করা হয়। 

var num = 4**3 + "<br>"; // double asterisk Operators (এটি ব্যবহার করা হয় power বের করার জন্য।)
document.write(num);




var abc = 9 ;
--abc; //(pre-decrement)
document.write(abc);
// decrement চিহ্ন variable এর আগে ও পরে দুই জায়গাতেই ব্যবহার করা যায়। 
var abc = 9;
abc--; //(post-decrement)
document.write(abc);



var def = 5 ;
++def; //(pre-increment)
document.write(def);
// increment চিহ্ন variable এর আগে ও পরে দুই জায়গাতেই ব্যবহার করা যায়। 
var def = 5;
def++; //(post-increment)
document.write(def);


/*
assignment Operator --> = (assign), += (plus assign), -= (minus assign), *= (asterisk assign), /= (devide assign), %= (modulus assign), ** (double asterisk assign) .

*/ 


var fax = 5; // fax = fax+ 5
fax += 5; // plus assign
document.write(fax);

var fax = 30; // fax = fax- 5
fax -= 23; // minus assign
document.write(fax);


var fax = 15; // fax = fax* 5
fax *= 6; // asterisk assign
document.write(fax);


var fax = 15; // fax = fax/ 5
fax /= 3; // devide assign
document.write(fax);


var fax = 60; // fax = fax% 5
fax %= 15; // modulus assign
document.write(fax);



var fax = 2; // fax = fax** 5
fax **= 5; // double asterisk assign
document.write(fax);