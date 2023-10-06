// video - learn with sumit  (6, 7, 8)

/* 
variable হচ্ছে কোন value ধরে রাখার জায়গা। javascript এ variables তিন ভাবে লেখা যায়।  
1. var
2. let
3. const
*/

                // VAR ::
// var keyword দ্বারা variable declear করা যায় । var keyword এক এর অধিক বার declear করা যায়।  অর্থাৎ var এর assign কর value এক এর অধিক বার ব্যবহার করা যায়। 

var x = 'Sajeb';
var y = ' Chakraborty';
var xy = x + y;    
document.write(xy + '<br>') ;


var price = 15;
var price = 45;  // var এর মাধ্যমে assign করা value আবার assign করা যায় । 
var price = 66;
document.write(price + '<br>');




               //let
// একবার let declare করলে সেটা আবার declare করা যায় না । block scope এর মধ্যে let declare করা হলে সেই let কে block scope কে access করা যাবে না। যদি access করতে হয় তাহলে সেটাকে block scope এর বাহিরে declare করতে হবে। 

/*
let sajeb = 'name';
let sajeb = 'name';    // let cannot be redeclared ... 
document.write(sajeb) 
*/

///////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
{
  let z = 'number';
  document.write(z + '<br>');
}
document.write(z + '<br>');  //cannot access 'z' from outside the block scope .

      console খুললে এটার error দেখা যাবে। 


//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
{
  let f = 45;  Not allowed
  var f = 3453;
}
//cannot declared same thing in other variable keyword ..

{
  var p = 'topr asae'; Not allowed
  let p = "42";
}

var point = '84'; Not allowed
let point = 'pass';
document.write(point);
//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*/


let boy_named = 'Sajeb';
{
  let boy_named = 'Sajeb';
  document.write(boy_named);
}
{
   let boy_named = ' Chakraborty';
   document.write(boy_named + '<br>');
}

document.write(boy_named + '<br>');

// let hoisting :
// carName = "BMW";
// let carName;
// document.write(carName);




                                                                             //Const
// const ও let অনেকটা প্রায় একই তবে কিছু পার্থক্য আছে । let এর ক্ষেত্রে একই variable কে দুইবার declare করা যায় না কিন্তু সেটাকে আবাব reassign করা যায় । const এর ক্ষেত্রে একই variable কে দুইবার declare করা যায় না  আবার সেটাকে reassign ও করা যায় না।  new array , new object, new function , new regularExpression তৈরি করার জন্য const ব্যবহার করা ভাল । 

/*
const d;
d = 78;    Const cannot redeclare 


const j = 'samsung';
const j = 'samsung';    const can't reassiagn

*/

const car = ['Audi', 'Benz', 'Rolls Royce' , 'Bugatti'];
car[1] = 'Lamborgini';
document.write(car + '<br>');
// constant array এর element পরিবর্তন কর যায় const এ । 

// const block scope ::  
// same as let ...

/*
{
  const w = 0.123456789;
  document.write(w)
  
}
document.write(w)  cannot access w outside from block scope .  
*/
