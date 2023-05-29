/// video -- learn with sumit  (19, 20)

// javascript এ এক প্রকার নাম্বার আছে । নাম্বার দশমিক সহ বা দশমিক ছাড়া লেখা যায় । 
  
  // javascript এ integer (পূর্ণসংখ্যা) এর ক্ষেত্রে javascript ১৫ সংখ্যা পর্যন্ত সঠিক গণনা করতে পারে । ১৫ সংখ্যার বেশি হলে সব সময় ১০০% সঠিক নাও হতে পারে ।

  let q = `555555555555555`;
  document.write(q + `<br>`);

  let aw = `87451235987410347`;
  document.write(aw + `<br>`);
  
  // দশমিক সংখ্যার ক্ষেত্রে সবসময় সঠিক মান নাও দিতে পারে । যেমন   
  let x = 0.2 + 0.1;
  document.write(`0.2 + 0.1 => `+ x + '<br>');
  
  let p = 0.6 + 0.3;
  document.write(`0.6 + 0.3 => `+ p + '<br>');
  // এখানে .২ ও .১ যোগ করলে .৩ হওয়ার কথা কিন্তু এখানে দেখাচ্ছে অন্য মান । ঠিক তেমনি .৬ ও .৩ খেত্রেও একই দেখাচ্ছে । তাই দশমিক সংখ্যার ক্ষেত্রে মান শবসময় সঠিক মান নাও দিতে পারে ।  এই সমস্যা সমাধানের উপায় হল গুন ও ভাগ করা । অর্থাৎ যে যে সংখ্যাকে যোগ করব সেই সব সংখ্যাকে প্রথমে ১০ দিয়ে গুন করতে হবে তারপর সেই সব সংখ্যাকে ১০ দিয়ে ভাগ করতে হবে ।  যেমন :
  
  let e = (0.2 * 10 + 0.1 * 10) / 10;
  document.write(`0.2 + 0.1 => `+ e + '<br>');

  let r =( 0.6 * 10 + 0.3 * 10) / 10 ;
  document.write(`0.6 + 0.3 => `+ r + '<br>');

// string এবং number যোগ করলে প্রথমে string বসবে তারপর নাম্বার বসবে । যেমন :
let y = 54;
let t = `Sajeb`;
document.write(t + y + '<br>');

// দুই বা ততধিক string number যোগ করলে নাম্বার যোগ হবে না বরং সেগুলো string আকারে হবে। যেমন :

let u = `25`;
let i = `35`;
document.write(`'25' + "35" = `+ u + i + '<br>');

// কিন্তু string number গুলো যদি যোগ ছাড়া গুন , ভাগ , বিয়োগ করা যায় তাহলে কিন্তু সেগুলো গুন , ভাগ , বিয়োগ হবে, string আকারে বসবে না । যেমন :

let o = `25`;
let a = `35`;
document.write(`'25' * "35" = `+ o * a + '<br>');

let d = `35`;
let s = `5`;
document.write(`'35' / "5" = `+ d / s + '<br>');

let g = `35`;
let f = `25`;
document.write( g - f + `<br>`);

let myNumber = 2;
while(myNumber != Infinity){
  myNumber = myNumber * myNumber
  myNumber++;
  document.write(`Infinity Number = `+ myNumber + '<br>')
}
  

                     // NUMBER Method :-


  var num = 54;
  num = toString(num);
  document.write("toString '-' " + typeof(num) + "<br>"); 

  //এখানে ৫৪ হচ্ছে number । ৫৪ কে number থেকে srting করতে হলে toString Method বাবহার করতে হবে। 
  

  let expo = 3.9574;
  let expon = expo.toExponential(6);
  document.write(`Exponential '-' ` + expon + '<br>')
  
  let exponen = 19.31715;
  let exponnenti = exponen.toExponential(8);
  document.write(`Exponential '-' ` + exponnenti + '<br>')
  
  // অনেক বড় সংখ্যাকে ছোট করে দেখানোর উপায় হল  সূচক (exponent) এর মাধ্যমে । ঠিক তেমনি toexponential এর মাধ্যমে অনেক ছোট করে দেখানে যায় । আবার দশমিক এর পরে কত ঘর পর্যন্ত সংখ্যা হবে তাও বলে দেওয়া যায় । দশমিক এর পরে ৮ তা সংখ্যা থাকবে তা যদি আমি চাই আর variable এ ৫ তা সংখ্যা দেওয়া থাকে তাজলে বাকি ৩ ঘর toexponential ০ দিবে পূরণ করবে । 


  var number = 5.67198;
  document.write(" toFixed '-' " + number.toFixed(4) + "<br>");
  
  //toFixed দ্বারা শুধু দশমিক এর পরের ঘর দেখাবে। এখানে দশমিক এর ৪ ঘর পর্যন্ত দেখাচ্ছে।  
  
 
  var number = 3.16398;
  document.write(" toPrecision `-` " + number.toPrecision(5) + "<br>");
  
  //toPrecision দ্বারা শুরু থেকে সংখ্যা গণনা করা হয়। এখানে ৫ দ্বারা প্রথম থেকে মোট ৫ টি সংখ্যা কে বুঝাবে। 


  
 
 document.write(`Number '-'  ` + Number("81") + "<br>");
 document.write(" Number '-' " +  typeof(Number("75.9")) + "<br>");
 
 //এখানে Number দ্বারা কোন string কে number এ convert করা যায়। এক্ষেত্রে  parseInt  এবং parseFloat ব্যবহার করা যায়। এখানে 81 এবং 75.9 string । Number এর মাধ্যমে 81 এবং 75.9 কে number এ  convert করা হয়েছে। 
 
 document.write(Number(true));
 document.write(" &nbsp; " + Number(false) + "<br>");

 //এখানে true এর মান হচ্ছে ১ এবং false এর মান হচ্ছে ০ । Number এর মাধ্যমে true এবং 75.false কে number এ  convert করা হয়েছে।  

 

  var man = "36";
  man = parseInt(man);
 document.write(" parseInt '-' " + typeof(man) + "<br>"); 
 
 let pers = '25.12';
 document.write(" parseInt '-' " + parseInt(pers)+ '<br>') 

 //এখানে ৩৬ হচ্ছে intiger । ৩৬ কে intiger থেকে number করতে হলে parseInt Method ব্যবহার করতে হবে। parseInt Method কোন string কে integer এ convert করে । যদি integer এর সাথে দশমিক থাকে তবে সে দশমিক বাদ দিয়ে শুধু পূর্ণসংখ্যা নিবে । 

 
 var man = "36.6";
 man = parseFloat(man);
 document.write(" parseFloat '-' " + typeof(man) + "<br>"); 

 //দশমিক সংখ্যার ক্ষেত্রে parseInt ব্যবহার না করে parseFloat ব্যবহার করা উচিত। 
 
 // javascript এ number এবং float কে number হিসেবে গণনা করা হয়। 

