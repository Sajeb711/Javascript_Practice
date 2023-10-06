// video :-  learn with sumit (21, 22, 23, 24, 25),,,,,

// array খুবই গুরুত্বপূর্ণ একটি javascript data type । single একটি variable এর মধ্যে একাধিক value store করে রাখার জন্য javascript array ব্যবহার করা হয় । সাধারণত তৃতীয় বন্ধনীর মধ্যে array লিখা হয় ।

//array দুইভবে লিখা যায়।
// 1.
let arrays = [15, " Sajeb", undefined, 12, true, false];
console.log(arrays);
console.log(typeof array);

// 2.
let identity = new Array();
(identity["name"] = "Sajeb Chakraborty"),
  (identity["age"] = 23),
  (identity["home"] = "Rajshahi"),
  (identity["Profession"] = "Web Developer"),
  console.log(identity);
console.log(typeof identity);

// Changing an Array Element :>
let cars = ["audi", "toyota", " bugatti"];
cars[1] = " bmw";
document.write(cars + "<br>");
// কোন array এর নাম পাল্টানোর উপায় উপরে দেওয়া আছে ।

let name1, name2, name3, name4, name5;
name1 = "sajeb";
name2 = "rakib";
name3 = "sakib";
name4 = "makib";
name5 = "akib";

document.write(name1 + "<br>");
document.write(name2 + "<br>");

//এখানে যদি আমি ১০০ বা আরও বেশি নাম storage করে রাখতে চাই তাহলে এক এক করে নামে লিখতে হবে যা অনেক সময় সাপেক্ষ । এই program টি array এর সাহায্যেও করা যায় । নিচে টা দেখানো হল ঃ

//  accesing array Elements :--

// first element:
let firele = ["macro", "micro", "math", "statistic"];
document.write(`First Element '-' ` + firele[0] + "<br>");

// Last Element :
let lasele = ["English", "science", "geography", "physices", "biology"];
document.write(`Last Element '-' ` + lasele[lasele.length - 1] + "<br>");

// কোন variable সবার শেষের array access করার জন্য variable এর length থেকে ১ বিয়োগ করলে সবার শেষের array টার access করা যায় । আবার এই array এর শেষে আরও value add করলেও সবার শেষের array টা দেখাবে ।

// looping in array :--

let fruits = [
  "banana ",
  "mango ",
  "pineapple ",
  "apple ",
  "orange ",
  "grape ",
  "berry ",
  "watermelon ",
  "strawberry",
];
for (s = 0; s < fruits.length; s++) {
  document.write(fruits[s] + "<br>");
};


             // for each :

const computer = ['monitor ', 'mouse ', 'keybord ', ' cpu' , '<br>'];
computer.forEach(function(values){
  document.write(values)
})

// array এর মধ্যে for loop ও for each এর কাজ একই । তবে  for loop থেকে for each এর করা সহজ । 
     


              // Recognize An Array :
// কোন variable array কি না টা আমরা বুঝবো কিভাবে ? কারন আমরা variable এর typeof দিলে সেটা object দেখায় । এই জন্য কোন variable  array কি না টা বুঝার দুই টা উপায় আছে । যদি উত্তর true হয় তবে সেটা array আর যদি  উত্তর false হয় তবে সেটা array নয়। 

const gender = ['man', 'women', 'custom ', 'other'];
document.write(`Array.isArray = `+ Array.isArray(gender) + '<br>');

const mobile = ['vivo' , 'oppo' , 'iphone' , 'samsung'];
console.log(mobile instanceof Array );



                 // Array Method :-




                 // converting arrays to string :
const company = ['vivo' , 'oppo' , 'iphone' , 'samsung'];
company.toString();
// এটার output দেখার জন্য পুরো code তাকে কপি করে console এ গিয়ে paste করলেই সেখা যাবে । 


// join() --

const companys = ['vivo' , 'oppo' , 'iphone' , 'samsung'];
console.log(company.join(' &#@ '));

// আমরা জানি array এর মধ্যে কমা দিয়ে দিয়ে লিখতে হয় । কিন্তু আমি যদি চাই যে কমা না দিয়ে অন্য যা খুশি তাই দিব তাহলে join() method ব্যবহার করতে হবে। এই join() method এর মধ্যে যা খুশি তাই লিখা যাবে আবার যত খুশু তত space ও দেওয়া যাবে । 

   //pop-
 
let cold = ['ac ','cealing-fan ', 'water ', 'table-fan ' , 'air'];
cold.pop();
cold.pop();
document.write(cold + "<br>");
document.write('Cold length = '+ cold.length + "<br>");

// যত বার pop লিখা হবে শেষের একটা একটা করে property মুছে যাবে। ওপরে দুইবার pop লেখা হয়েছে তাই শেষের দুইটা নাম মুছে গেছে।


    //Push() -

let named = [" Sajeb", "Sakib", "Rakib", "Makib", "Lakib",];
named.push("latin", "matin");
console.log(named);
    
// যত বার push লিখা হবে তত বার নতুন নাম যোগ হবে। এখানে মোট ৫ টা নাম আছে। এখন যদি এই নামে গুলোর মধ্যে আরও  একটা নাম যোগ করতে চাই তাহলে push keyword লেখা যায়। যদি সবার শেষের নাম delet করতে চাই pop keyword লেখা যায়।  যেমন ঃ


     //Shift --

let saj = [" my", " name", ` is`, " Sajeb"];
document.write(saj + "<br>");

saj.shift();
document.write(saj + "<br>");

//pop এর কাজ হচ্ছে শেষের একটা element বাদ দেওয়া। এর shift এর কাজ হচ্ছে শুরুর একটা element বাদ দেওয়া। যেমন ঃ এখানে একবার shift ব্যবহারের কারণে শুরুতে " my " বাদ দেওয়া হয়েছে। অর্থাৎ shift is opposite of POP .


       //Unshift -

let sajeb = [" my", " name", ` is`, " Sajeb"];
sajeb.unshift("happy ?");
document.write(sajeb + "<br>");

// push এর কাজ হচ্ছে শেষের দিকে element যুক্ত করে। এর unshift এর কাজ হচ্ছে শুরুর দিকে element যুক্ত করে। যেমন: এখানে একবার unshift ব্যাবহারের কারণে " happy " element টা প্রথমে যুক্ত হয়েছে।  অর্থাৎ unshift is opposite of PUSH .

//delet keyword এর মাধ্যমে কোন element কে বাদ দেওয়া যায় । 
delete sajeb[3];
document.write(sajeb + "<br>");


        // Splice --
          
// splice এর মাধ্যমে element যোগ করা যায় আবার বাদ দেওয়া যায়। আমরা pop এর মাধ্যমে শেষের element কে বাদ দিতে পারি আবার unshift এর মাধ্যমে প্রথমের element add করতে পারি ।কিন্তু আমি যদি যেখানে খুশি সেখানে element add করতে চাই তখন Splice method ব্যবহার করা হয়। 

     // adding element using splice...

let id =[" who ", " are", " you", " what", " are", " you", "doing"];
id.splice(3, 2, " ?", " hmm");
document.write(id + "<br>");

// এখানে index এর গণনা শুরু হয় ০ থেকে। splice  এ কোন element যোগ করার জন্য প্রথমে বলে দিতে হবে কোন জায়গা থেকে কোন element যোগ হবে যা যা element আমি যোগ করতে চাই তারপর যোগ করার পর কত গুলো বাদ দিব টা বলে দিতে হবে। যেমন ঃ আমি '?' এবং "hmm" যোগ করতে চাই 3 নাম্বার position এ ।  তারপর  '?' এবং "hmm" যোগ করার পর ২ টা element ("what" "are") বাদ দিতে চাই ।

    // Removing element using splice...

let ids = [" who ", " are", " you", " what", " are", " you", " doing"];
ids.splice(0, 3);
document.write(ids + "<br>");
// এখানে index এর গণনা শুরু হয় ০ থেকে।
// splice  এ কোন element বাদ দেওয়ার জন্য প্রথমে বলে দিতে হবে কোন জায়গা শুরু হবে এবং কোন জায়গা পর্যন্ত চলবে। যেমন ঃ এখানে আমি ০ (who থেহে শুরু) নাম্বার index থেকে ৩ (you পর্যন্ত) নাম্বার index পর্যন্ত বাদ দিয়েছি ।



           // Merging (Concatenating) Array :--

  // Only Two variable --
const boy = [`Akash , Rohit , Kunal, Bhuban `];
const girl = [`Dipika, Prianka, Monali,Shreya `];
const boyGirl = boy.concat(girl);
document.write(boyGirl + '<br>');


  // More Then Two Variale --
let country1 = [`Bangladesh , India , Nepal `];
let country2 = [`Malaysia , Indoneshia , Dubai `];
let country3 = [`England, France , Denmark `];
let country4 = [`America , Canada , Greenland`];
let country5 = [`Argentina , Brazil, Peru `];
let country6 = [` Morocco , Libiya ,Congo <br>`];

let countrys = country1.concat(country2, country3, country4, country5, country6);
document.write(countrys);


  // adding string in Array -- 
let BoysName = [`mehedi, Sajeb , Sakib `];
document.write(BoysName.concat('Mark ', 'Jack ', 'Oggy') + '<br>')
///concate method এর মাধ্যমে কোন concate এর মধ্যে string ও দেওয়া যায় । যেমন উপরের টা উদাহরণ । 




// Slicing an Array -- slice()>

// slice এর কাজ হচ্ছে কোন একটা element কে কেটে নতুন একটা array তৈরি করে । 

let arr = [" How ", " are", " you", " what", " are", " you", " doing"];

document.write(arr.slice(2) +'<br>')

//slice নতুন array তৈরি কিন্তু মূল  array এর কোন পরিবর্তন করে না।  এখানে প্রথম ২ টা element ("how" "are")  কেটে নেওয়া হয়েছে slice এর সাহায্যে । 




                 // Sorting An Array : -

// Alphabetically Sort --

let alphabets = ["and "," doctor"," elephent", " box"," sajeb"," mango"," people"];
document.write(alphabets.sort() +'<br>')

// sort ব্যবহার করা হয় element গুলোকে a,b,c,d,e,f.... ইত্যাদি পর্যায়ক্রমে অথবা  z, y, x,w,v,u.... ইত্যাদি পর্যায়ক্রমে .এখানে element গুলোকে a,b,c,d,e,f.... ইত্যাদি পর্যায়ক্রমে সাজানো হয়েছে।  এইভাবে অক্ষর কে sort করা যায় .  

var alphabet = [" hipps ", " bowl", " pc", " point", " bottol", " ox", " mean"];
alphabet.sort();
alphabet.reverse();
document.write(alphabet +'<br>') 

// এখানে element গুলোকে z, y, x,w,v,u.... ইত্যাদি পর্যায়ক্রমে সাজানো হয়েছে reverse এর মাধ্যমে। এইভাবে শুধুমাত্র অক্ষর কে sort করা যায় নাম্বার কে ঠিক ভাবে sort করা যায় না। 

  // Number Sort 

// নিম্বের বড় থেকে ছোট বা ছোট থেকে বড় অনুযায়ী সাজাতে হলে নিচের পদ্ধতি অনুসরণ করতে হবে। 

let numberAcc = [45 , 98,10, 6,47,94,3,48,34,87,1,54,94,2,11,78 ]
numberAcc.sort(function(a,b){
  return a-b ;
})              
document.write ( numberAcc + " <br>" )

// এখানে সংখ্যা ছোট থেকে বড় ঊর্ধ্বক্রমে সাজানো হয়েছে। 

let numberDec = [45 , 98,10, 6,47,94,3,48,34,87,1,54,94,2,11,78 ]
numberDec.sort(function(a,b){
  return b-a ;
})              
document.write (numberDec + '<br>')

// এখানে সংখ্যা বড় থেকে ছোট নিম্নক্রমে সাজানো হয়েছে। 


    //Find highest and lowest Array Value --
// javascript এ কোন variable এর মধ্যের সর্বচ্চ ও সর্বনিম্ন নাম্বার খুঁজে বের করার জন্য আলাদা কোন build-in-functions নেই । সর্বচ্চ ও সর্বনিম্ন নাম্বার খুঁজে বের করার জন্য sort method এর সাহায্যে দরকার ।  যেমন ঃ 

let ascendingNumber = [1,10,20,30,40,50,60,70,80,90,100];
ascendingNumber.sort( function (big,small){
 return big-small;
});
document.write(ascendingNumber + '<br>');


let descendingNumber = [1, 10,20,30,40,50,60,70,80,90,100];
descendingNumber.sort( function (big,small){
  return small-big;
});
document.write(descendingNumber + '<br>');

// ওপরের দুই ভাবে সর্বচ্চ ও সর্বনিম্ন নাম্বার খুঁজে বের করা যায় । যদি সর্বচ্চ নাম্বার খুঁজে বের করতে চাই তাহলে ওপরের পদ্ধতি অনুসরন করতে হবে । আর যদি সর্বনিম্ন নাম্বার খুঁজে বের করতে চাই তাহলে নিচের পদ্ধতি অনুসরন করতে হবে ।





                     // Array Iteration --


