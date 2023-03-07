
/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/*
var num = 69 ;
var reasult = num + num ;
document.write( "Reasult = "+ reasult + "<br>");


var num = 96 ;
var reasult = num + num ;
document.write( "Reasult = "+ reasult  + "<br>");


var num = 33 ;
var reasult = num + num ;
document.write( "Reasult = "+ reasult  + "<br>"); */

/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//ওপরের একই যোগগুলো করার জন্য বার বার একই variable লিখতে হচ্ছে। বার বার একই variable গুলো না লিখতে চাইলে function এর মাধ্যমে লিখা যায়। যেমন ঃ 

function plus(){
var num = 35 ;
var reasult = num * num ;
document.write( "Reasult = "+ reasult  + "<br>");
}

plus();
plus();
plus();

//function ব্যবহার করার জন্য প্রথমে function keyword টি ব্যবহার করতে হবে। তারপর function এর নাম লিখতে হবে তারপর প্রথম ব্র্যাকেট () দিতে হবে। তারপর দ্বিতীয় ব্র্যাকেট {} এর মধ্যে যা যা চাই টা লিখতে হবে। তারপর function এর নাম লিখে fuction টি call করতে হবে। 


/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//parameter function :

function into(num){
var reasult = num * num ;
document.write( "Reasult = "+ reasult  + "<br>");
}

into(5);
into(6);
into(9);
into(15);


/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// multiple parameter function :

function intos(num1 , num2){
var reasult = num1 * num2 ;
document.write( "Reasult = "+ reasult  + "<br>");
}

intos(5 , 10);



/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// multiple parameter function :

function intoi(num1 , num2, num3 , num4 , num5){
var reasult = num1 * num2 - num3 + num4 / num5 ;
document.write( "Results = "+ reasult  + "<br>");
}

intoi(5 , 10, 45 , 55 , 2);



/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// return Function 

function add(num1,num2){
  var result = num1 + num2
  return result;
}
var plus = add(8, 9)
document.write( "Result is = " +  plus + "<br>");

// কোন সংখ্যার যোগ বিয়োগ ইত্যাদি করার জন্য return keyword ও ব্যবহার করা যায়। 


/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\