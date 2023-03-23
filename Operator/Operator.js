// operator গাণিতিক symbol যার মাধ্যমে গাণিতিক কাজকর্ম করা হয়। যেমন ঃ + - * / % ইত্যাদি। 

/* 
 Arithmetic Operator --> + (plus), - (minus). * (asterisk), / (divide) , % (modulus), ** (exponent) , ++ (increment ( increment দ্বারা ১ বাড়ানো যায়।)),
 -- (decrememt (decrememt দ্বারা ১ কমানো যায়। )).
*/

var num = 5 + 2  ; // Plus Operators
document.write(num +" Plus Operator" +'<br>');

var a = 45;
var s = 54;
var j = a + s;
document.write(j +" Plus Operator"+"<br>"); 

var num = 50-9;// minus Operators
document.write(num + " Minus Operator"+ '<br>');

var c = 100;
var d = 54;
var e = c - d;
document.write(j + " Minus Operator"+ "<br>"); 


var num = 8*4 ; // asterisk Operators
document.write(num + " Asterisk Operator"+ '<br>');

var h = 100;
var e = 54;
var l = h * e;
document.write(l + " Asterisk Operator"+ "<br>"); 

var num = 4**3 ; // double asterisk Operators (এটি ব্যবহার করা হয় power বের করার জন্য।)
document.write(num +  " double Asterisk Operator"+ '<br>');

var h = 10;
var e = 10;
var l = h ** e;
document.write(l + " double Asterisk Operator"+ "<br>"); 


var num = 81/9 ; // devide Operators
document.write(num +" Devide Operator" + '<br>');

var n = 1000;
var o = 50;
var t = n / o;
document.write(t + " Devide Operator"+ "<br>"); 

var num = 56%9 ; // modulas Operators
document.write(num +  " modulas Operator"+ '<br>'); // ভাগ করার ভাগশেষ  modulas দ্বারা বের করা হয়। 

var n = 1000;
var o = 51;
var t = n % o;
document.write(t + " modulas Operator"+ "<br>"); 





var abc = 9 ;
--abc; //(pre-decrement)
document.write(abc + ' pre-decrement' + '<br>');
// decrement চিহ্ন variable এর আগে ও পরে দুই জায়গাতেই ব্যবহার করা যায়। 
var abc = 9;
abc--; //(post-decrement)
document.write(abc +  ' Post-decrement' + '<br>');



var def = 5 ;
++def; //(pre-increment)
document.write(def + ' pre-increment' + '<br>');
// increment চিহ্ন variable এর আগে ও পরে দুই জায়গাতেই ব্যবহার করা যায়। 
var def = 5;
def++; //(post-increment)
document.write(def + ' Post-increment' +'<br>');



document.write(48*78 + '<br>');
document.write(48+78 + '<br>');
document.write(68/11 + '<br>');

let com1 = 12;
let com2 = 25;
let com3 = 5;
let com4 = 43;
let coms = (com1 * com2) / (com4 + com3)
document.write(coms + '<br>')


/*
assignment Operator --> = (assign), += (plus assign), -= (minus assign), *= (asterisk assign), /= (devide assign), %= (modulus assign), ** (double asterisk assign) .

*/ 


var fax = 5; // fax = fax+ 5
fax += 5; // plus assign
document.write(fax + ' plus assign' + '<br>');

var fax = 30; // fax = fax- 5
fax -= 23; // minus assign
document.write(fax + ' Minus assign' + '<br>');


var fax = 15; // fax = fax* 5
fax *= 6; // asterisk assign
document.write(fax + ' asterisk assign' +'<br>');


var fax = 15; // fax = fax/ 5
fax /= 3; // devide assign
document.write(fax + ' devide assign' + '<br>');


var fax = 60; // fax = fax% 5
fax %= 15; // modulus assign
document.write(fax + ' modulus assign' +'<br>');



var fax = 2; // fax = fax** 5
fax **= 5; // double asterisk assign
document.write(fax + ' double asterisk assign' + '<br>');