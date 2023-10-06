// video ----  learn with sumit (49)


// hoisting অর্থ উত্তোলন ।  Hoisting হচ্ছে  javascript default behabiour যা declaretion কে সবসময় ওপরে  নিয়ে যায় ।   javascipt এ  কোন variable decalre করার  আগেই সেটা ব্যবহার করা যায়। যেমন ঃ 

 i = 10 ;    // assign 10 to i 
 document.write(i + `&nbsp;&nbsp;&nbsp;`) ; 
 var  i ;    // declare i   

 hoisting = 'Model';  // assign 
 document.write(hoisting + '<br>');
 var hoisting;    // declare 

 // ওপরের code টি javascript অনুযায়ী ঠিক আছে ।  আমরা জানি প্রথমে  variable declare করতে হয় তারপর value assign করতে হয় । কিন্তু javascript এ variable যেখানেই declare করা হোক না কেন hoisting এর মাধ্যমে সেটা সবসময়  ঠিক দেখাবে ।   কারন  যখন কোন variable যেকোনো জায়গায় declare করা হয় javascript সেই code গুলোকে read করার সময় সকল variable declare কে সবার ওপরের নিয়ে যায় ।  তাই যেকোনো জায়গায় variable declare করলেও কোন ভুল দেখায় না । 
 


                               // Hoisting In  Let And Const Keyword :

consOle = 'browser';  // declare
let consOle;     // assign 
document.write(consOle);   // console will show runtime error .......


function LetHoisting(){
  x = 5102;
  document.write(x);
  let x ;
}
LetHoisting();   // console will show runtime error .......  


 // hoisting এর ক্ষেত্রে  var ও  let এর ব্যবহার আলাদা ।  var দ্বারা যখন কোন variable declare করা হয় তখন  browser সেই variable তার জন্য আলাদা একটা  জায়গা  memore তে রেখে  দেয়  ।  কিন্তু  let দ্বারা যখন কোন variable declare করা হয় তখন  browser সেই variable তার  জন্য আলাদা জায়গা  memore তে রেখে  দেয়  না  ।  ফলে var দ্বারা variable declare করলে  সেই variable টা প্রথমে ওপরে যায়  তারপর memore টা তার জন্য আলাদা জায়গা থাকার জন্য সেটা print হয় । কিন্তু  let দ্বারা variable declare করলেও সেই variable টা ও প্রথমে ওপরে যায় কিন্তু let এর জন্য memore তে জায়গা টা থাকার কারণে সেটা Runtime error দেখায় । 


              // const

 /*
     drugName = 'SoftOlax Sf ' ;
     const drugName;

     hoisting এর ক্ষেত্রে const দ্বারা variable declare করলে সেটা  syntax error দেখাবে ।  আর সবচেয়ে  বড় কথা আমরা জানি const দ্বারা কোন  variable declare করলে সেই  variable পুনরায়  declare বা reassign করা যায় না । তাই const দ্বারা hoisting হয় না । 
*/


                   

                                                                      // Disclaimer : 
// অনেক সময় এই hoisting টা অনেকের কাছে কঠিন লাগতে পারে ।  তাই  কেউ চাইলে hoisting এর মতো করে চিন্তা না করে  সাধারন এর মতো করে variable গুলো declare করা যায় ।  hoisting ব্যবহার করতে হবে এমন কোন  বাধ্যবাধকতা নেই । javascript এ যেভাবে  variable decalre করে সে ভাবে করলেও হবে । 