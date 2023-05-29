// Math Properties (Constants) --
document.write(Math.E + '<br>') //Euler's number
document.write('PI = '+ Math.PI + '<br>') // Pi 
document.write('PI = '+ Math.SQRT1_2 + '<br>') // Pi 


  // Math Method -- 

 // Number to Integer --
 /* সাধারনত ৪ ধরণের round করার method আছে নাম্বার কে পূর্ণসংখ্যা করার জন্য ।   
 1.Math.round(x);
 2.Math.ceil(x);
 3.Math.floor(x);
 4.Math.trunc(x);
 */


// 1.Math.round(x);

document.write('Round = ' + Math.round(9.3) + '<Br>');
document.write('Round = ' + Math.round(- 100.39) + '<Br>');
document.write('Round = ' + Math.round(50.50) + '<Br>');
document.write('Round = ' + Math.round(50.49) + '<Br>');
// round এর কাজ হচ্ছে দশমিক এর পরের সংখ্যা যদি .৫০ বা .৫০ এর বেশি হয় তাহলে সেটাকে সামনের পূর্ণসংখ্যা তে convert করে দিবে। 


//2.Math.ceil(x);

document.write('Ceil = '+ Math.ceil(5.1) + '<br>');
document.write('Ceil = '+ Math.ceil(9.99) + '<br>');
document.write('Ceil = '+ Math.ceil(100.0001) + '<br>');
document.write('Ceil = '+ Math.ceil(- 45.32) + '<br>');
// ceil এর কাজ হচ্ছে যদি কোন সংখ্যার দশমিক থাকে তাহলে সেই সংখ্যাকে সামনের পূর্ণসংখ্যা তে convert করে দিবে। দশমিক যা খুশি তাই হতে পারে । 


//3.Math.floor(x);

document.write('Floor = ' + Math.floor(8.1)+ '<br>');
document.write('Floor = ' + Math.floor(65.99)+ '<br>');
document.write('Floor = ' + Math.floor(1000.321445)+ '<br>');
document.write('Floor = ' + Math.floor(-59.32)+ '<br>');
// floor হচ্ছে ceil এর বিপরীত । floor এর কাজ হচ্ছে যে দশমিক সংখ্যাগুলো থাকে শেগুলকে বাদ দিয়ে শুধু পূর্ণসংখ্যা রাখে।  


//4.Math.trunc(x);

document.write('Trunc = ' + Math.trunc(4.5) + '<br>');
document.write('Trunc = ' + Math.trunc(90.54) + '<br>');
document.write('Trunc = ' + Math.trunc(-33.74) + '<br>');
document.write('Trunc = ' + Math.trunc(70.111) + '<br>');
// trunc অর্থ কেটে ফেলা। তাই দশমিক এর পরে কোন সংখ্যা থাকেলে টা কেটে বাদ দিয়ে শুধু পূর্ণসংখ্যা দিবে । 


// math.Sign()--
document.write('Sign = '+ Math.sign(-.36554)+ '<br>');
document.write('Sign = '+ Math.sign(0)+ '<br>');
document.write('Sign = '+ Math.sign(+154.60)+ '<br>');
// sing এর মাধ্যমে কোন সংখ্যা positive না zero না negetive তা জানা যায় । 


  //math.power() --
document.write('Power = '+ Math.pow(2 , 8) + '<br>');
document.write('Power = '+ Math.pow(5 , 5) + '<br>');
document.write('Power = '+ Math.pow(99 , 10) + '<br>');


  //math.square root() --
document.write('Square Root = ' + Math.sqrt(49) + '<br>');
document.write('Square Root = ' + Math.sqrt(25) + '<br>');
document.write('Square Root = ' + Math.sqrt(81) + '<br>');

  // Math.absolute() --
document.write(`Absolute = ` + Math.abs(-98)+ '<br>');
document.write(`Absolute = ` + Math.abs(.645)+ '<br>');
// absolute দ্বারা কোন negetive মানকে positive মান করা যায়। 

   // Math.Min && Math.Max --
document.write('minimum = '+ Math.min(10,65,74,-54,4,-8,7,-355) + '<br>');
document.write('minimum = '+ Math.min(4,8,14,4564,14,741,36) + '<br>');
// min দ্বারা অনেকগুলো সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা দেখাবে । 

document.write('Maximum = '+Math.max(-84,-987,-254,-1348,-9) + '<br>');
document.write('Maximum = '+Math.max(45,454,311,97,4511,945) + '<br>');
 // max দ্বারা অনেকগুলো সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা দেখাবে । 

 
 //math.log() log2() log10()  --
document.write('log = ' + Math.log(1) + '<br>' );
document.write('log = ' + Math.log(10) + '<br>' );
document.write('log 2 = ' + Math.log2(51) + '<br>' );
document.write('log 2 = ' + Math.log2(925) + '<br>' );
document.write('log 10 = ' + Math.log10(741) + '<br>' );
document.write('log 10 = ' + Math.log10(5416) + '<br>' );



          
                       // Ramdom --


//Math.random() --
document.write('Random = ' + Math.random() + '<br>');
// random ব্যবহার করলে ০ থে ১ এর মধ্যে যেকোনো মান দিতে থাকে । এবং শূন্যও দিতে পারে তবে কখনো ১ দিবে না ১ এর থেকে ছোট মান দিবে । 



 // Random to integer --
 
  // সাধারণ ভাবে random ব্যবহার করলে সেটা ০ থেকে ১ এর মধ্যে যে কোন মান দেয় । কিন্তু আমি এমন random number চাই যা পূর্ণসংখ্যা(integer) হবে তাহলে সরাসরি random keyword ব্যবহার করা যাবে না । যেমন ঃ 


// 0 to 9 :
document.write('Random = ' + Math.floor(Math.random() * 10) + 1 + '<br>');

document.write('Random = ' + Math.floor(Math.random() * 10) + '<br>');

// 0 to 10 :
document.write('Random = ' + Math.floor(Math.random() * 11) + '<br>');

// 0 to 99 :
document.write('Random = ' + Math.floor(Math.random() * 100) + '<br>');

// 0 to 100 :
document.write('Random = ' + Math.floor(Math.random() * 101) + 1 + '<br>');


   // Proper random Function --

function ranfloo(min,max){
   return Math.floor(Math.random() * (max - min) )+ min ;
  }
document.write(ranfloo(1,9) + '<br>');



function ranfloot(min,max){
   return Math.floor(Math.random() * (max - min + 1) )+ min ;
  }
document.write(ranfloot(1,6));

