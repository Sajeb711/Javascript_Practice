// video --- learn with sumit (43).....

//কোন variable এর datatype খোঁজার দেখার জন্য typeOf operator ব্যবহার করা হয়। typeOf কোন variable না। এটি একটি operator . typeof একটি keyword. typeof operator সবসময় string return করে । typeof এর typeof করলে সেটা string return করবে .
console.log(typeof typeof function(){});


/*
javascript এ ৫ ধরণের data types আছে যারা value ধরে রাখতে পারে। যেমনঃ 

 1. string;
 2. number;
 3. boolean;
 4. object;
 5. function;

আর ২ ধরণের data type আছে যারা value ধরে রাখতে পারে না । যেমন ঃ
 1. Null;
 2. Undefined;


javsecript এ ৬ ধরণের object আছে । যেমন ঃ 

 1. object;
 2. date;
 3. array;
 4.string;
 5. number;
 6. boolean;

*/

document.write(typeof 85 + '<br>');
document.write(typeof NaN + '<br>');
document.write(typeof null + '<br>');
document.write(typeof false + '<br>');
document.write(typeof 'sajeb' + '<br>');
document.write(typeof [4,2,1] + '<br>');
document.write(typeof {age:23} + '<br>');
document.write(typeof new Date + '<br>');
document.write(typeof undefined + '<br>');
document.write(typeof function(){} + '<br>');


                                `primitive Data :  `
/* primitive data হচ্ছে যে data গুলোর মধ্যে আলাদা কোন properties বা method যোগ করা নেই। যে data গুলোকে typeof করলে সেই primitive type গুলোই return করে । typs গুলো হল ঃ 
  
  1. string
  2. number
  3. boolean
  4. undefined
এই type গুলোকে typeof করলে এই type গুলোই return করবে।  যেমন ঃ 
*/
document.write('&nbsp; &nbsp;&nbsp; &nbsp;'+ typeof 'Computer' + '&nbsp; &nbsp; &nbsp;');
document.write(typeof .2500 + '&nbsp; &nbsp; &nbsp;');
document.write(typeof true + '&nbsp; &nbsp; &nbsp;');
document.write(typeof false + '&nbsp; &nbsp; &nbsp;');
document.write(typeof undefined + '<br>');


                  `Complex Data`
/* 
দুই ধরণের data typr আছে যারা খুবই complex ধরণের। 
  1. object
  2. Function
typeof operator object ব্যবহার করলে সেটাকে object দেখায় আবার array কেও object দেখায় আবার null কেও object দেখায়  ।

আবার function ও একটি object . কিন্তু function কে typeOf করলে সেটা function type return করে ।   
*/

document.write(typeof {name:'john',age:43}+'&nbsp; &nbsp;' );
document.write(typeof [54,41,'sano','null']+'&nbsp; &nbsp;' );
document.write(typeof null +'&nbsp; &nbsp;' );
document.write(typeof function(){} + '<br>' );





document.write('sajeb'.constructor  + '<br>')
document.write(['44'].constructor  + '<br>')
document.write({}.constructor  + '<br>')

