//   video --- learn with sumi (09)
// operator হচ্ছে গাণিতিক symbol যার মাধ্যমে গাণিতিক কাজকর্ম করা হয়।  javascript এ অনেক ধরণের operator রয়েছে। যেমন ঃ 
/*  
1. Arithmetic Operator.
2. assignment Operator .
3. relational / comparison operator .
4. logical Operator .
5. Type Operator . 
6. Bitwise operator .

 নিচে এদের উধাহরন দেওয়া হল । 

*/



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


var fax = 65; // fax = fax% 5
fax %= 15; // modulus assign
document.write(fax + ' modulus assign' +'<br>');



var fax = 2; // fax = fax** 5
fax **= 5; // double asterisk assign
document.write(fax + ' double asterisk assign' + '<br>');


// relational / comparison operator ->   > (greater than), >= (greater than or equal), < (less than), <= (less than of equal),  == (equal), === (equal) != (not equal), !== (not dobul equal). 

//relational / comparison operator publish result only "true" or "false"  (boolean value) ... 

var a = 50;
var b = 50;

var ab = a > b ;
document.write ( "a > b = "+ ab +"<br>");

var ab = a >= b ;
document.write ( "a >= b = "+ ab +"<br>");
//its printing true because here one value true and one value wrong.

var ab = a < b ;
document.write ( "a < b = "+ ab +"<br>");

var ab = a <= b ;
document.write ( "a <= b = "+ ab +"<br>"); //its printing true because here on value true and one value wrong.


var ab = a == b ;
document.write ( "a == b = "+ ab +"<br>");


var ab = a === b ;
document.write ( "a === b = "+ ab +"<br>");

var ab = a != b ;
document.write ( "a != b = "+ ab +"<br>");

var ab = a !== b ;
document.write ( "a !== b = "+ ab +"<br>");





var a = 50;
var b = "50";
var ab = a == b ;
document.write ( "a == b = "+ ab +"<br>"); 

var ab = a === b ;
document.write ( "a === b = "+ ab +"<br>");

// 2 assignment means its only chack value. here one variable is integer and one is string. dispite of deffarent variable its printed true 'cause double assign check only value not data type..

// 3 assign check value and data type. thats why 3 assign printed false .


var ab = a != b ;
document.write ( "a != b = "+ ab +"<br>");


var ab = a !== b ;
document.write ( "a !== b = "+ ab +"<br>");

// "not equal" and "not dobul equal" are the same like "dobul equal" and "triple equal". "!= " check only value not data type . but "!==" check value and data type both .  




// logical Operator -> && (logical and), || (logical or), !(true) (not true), !(false) (not false).


var num1 = 60;
var num2 = 40;
var num3 = 55;
var num4 = 45;

document.write(num1>num2 && num3<num4  );

// && operator তখনি true result প্রকাশ করবে যখন সকল value true হবে। যদি একটি value true এবং একটি value false হয় তাহলে result দেখাবে false । অর্থাৎ প্রতিটা value true হলেই result true দেখাবে । একটি false হলেই সব false দেখাবে। 


document.write(num1>num2 || num3<num4 || num1<num3 || num4 > num1 );

// or operation এর যদি একটি value true হয় আর বাকি সব false হয় তাহলে result দেখাবে true। অর্থাৎ একটি value true হলেই result true দেখাবে সেখানে বাকি সব flase হলেও। 

var c = !(true);
document.write(c + "<br>")

var c = !(false);
document.write(c +" <br>")

// এখানে "not true" value এর মান true হলেও সেটার মান false দেখাবে। 
// এখানে "not flase" value এর মান false হলেও সেটার মান true দেখাবে। 

var saj = 50;
var eb = 40;

var sajeb = !(saj > eb) //true but false.
document.write(sajeb +"<br>")

var sajeb = !(saj < eb) //false but true.
document.write(sajeb +"<br>")




// Type Operator =>  
let bix = "Name" ;
let cat = 15 ;
let cats = '15' ;
let mat = 45 + 'Sajeb' ;
let dog = ['my' , 'name', 'is' , 'sajeb'] ;
let rabbit ;
document.write('Typeof bix = '+ typeof bix + '<br>');
document.write('Typeof cat = '+ typeof cat + '<br>');
document.write('Typeof cats = '+ typeof cats + '<br>');
document.write('Typeof mat = '+ typeof mat + '<br>');
document.write('Typeof dog = '+ typeof dog + '<br>');
document.write('Typeof rabbit = '+ typeof rabbit + '<br>');