// relational operator ->   > (greater than), >= (greater than or equal), < (less than), <= (less than of equal),  == (equal), === (equal) != (not equal), !== (not dobul equal). 

//relational operator publish result only "true" or "false"  (boolean value) ... 

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
document.write(c +"<br>")

// এখানে "not true" value এর মান true হলেও সেটার মান false দেখাবে। 
// এখানে "not flase" value এর মান false হলেও সেটার মান true দেখাবে। 

var saj = 50;
var eb = 40;

var sajeb = !(saj > eb) //true but false.
document.write(sajeb +"<br>")

var sajeb = !(saj < eb) //false but true.
document.write(sajeb +"<br>")


