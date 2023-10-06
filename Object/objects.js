// video -- Stack learner (50,51,52,53,54,55,56,57) -  learn with sumit (62,63,64,65,66,67,68,69,70,71)


                                                // What is Object ?

/* object হচ্ছে javascript এর special data type । object   array এর advance version । যা আমরা নিজের মতো করে define করতে পারি। javascript  এ সব কিছুই object । number , string , boobleans, dates, maths,regular expressions, arrays , functions , object সবকিছুই object . যদি number , strings, booleans এর সাথে new keyword ব্যবহার করা হয় তাহলে সেটা object হয়ে যায় ।  
 javascript এ mainly দুই ধরণের data type আছে।  
1. primitive type (number, integer, null, undefined, boolean)
2. object type. (object)

এই object type এ আমরা নিজেদের মতো করে data type তৈরি করতে পারি primitiv type এর সাহায্যে ।  উধাহরনস্বরূপ আমরা যদি কোন মানুষের কোন তথ্য দিতে চাই তাহলে আমাদের object এর সাহায্য নিতে হবে। আমরা এই কাজ array এর মাধ্যমেও করতে পারি । তবে সেটা করলে আমি ছাড়া অন্য কেউ দেখলে সেই code বুঝতে পারবে না ।  অর্থাৎ যে বস্তুটা define করার জন্য একটা data যথেষ্ট না অনেক গুলো data লাগছে define করার জন্য সেই বস্তুকে আমরা object দ্বারা কল্পনা করতে পারি। 

  javascript এ  কয়েকভাবে object  তৈরি করা যায় । 
1.  object literal ব্যবহার করে object তৈরি করা যায় । 
   const person : {
  firstNmae : 'Sajeb',
  lastName : 'chakraborty',
  fullName : "sajeb Chakraborty"
}

2.  new keyword ব্যবহার করে object তৈরি করা যায় । 
   const book = new Object();  // new keyword দ্বারা object তৈরি করা ঠিক না  । 
   book.subject1 = " Perl "; 
   book.subject2 = ' math'; 
  book.subject3 = ' english';
  console.log( 'My Favourite book is '  + book.subject2 + book.subject3 + book.subject1) 

*/

let man_details = {
  name : 'Sajeb Chakraborty',
  age : 23,
  Address : 'Rajshshi',
  college : 'Rajshahi government city college' ,
  language : 'Bangla, Hindi',
  Proffession : 'web development'
  
  };

let man_detail = ['Sajeb Chakraborty ', 23 , ' Rajshahi',' Web Development'] ;
console.log(man_details);
document.write(man_detail + '<br>');

// এখানের man_details নামে একটি object ও একটি array আছে।  এখানে data type আলাদা হলেও value গুলো একই। array এর value গুলো দেখা বোঝা যাচ্ছে না সেগুলো কি বোজাচ্ছে । কিন্তু object দেখলেই বোঝা যাচ্ছে যাচ্ছে এটি কি বোজাচ্ছে । তাই object ব্যবহার করা সহজ ।   


                // Object Declaretion 
/*
object কে দুই ভাবে declare করা যায়। 
1. object literal ব্যবহার করে 
2. object constructor ব্যবহার করে।  
javascript এ object declare করার জন্য প্রথমে একটি variable declare করতে হয় তারপর দ্বিতীয় বন্ধনির {} মধ্যে object এর value গুলো লিখতে হয়। 
 
*/

                // literal object 

let lit_obj = {
  xy : 1,
  xx : 50,
  yy : 100
}  
lit_obj.xy = 150,  // updating existing value . 
lit_obj.xyz = 400. // new value added . 
console.log(lit_obj);  
// ওপরের এই object এর মধ্যে যদি কোন value পরিবর্তন করতে চাই  বা তার মধ্যে কোন নতুন value দিতে চাই তাহলে তার উপায় হল ;



let const_obj = Object();
const_obj.number1 = 74
const_obj.number2 = 47
console.log(const_obj); // object constructor

let const_objs = new Object();
const_objs.man = 'sajeb'
const_objs.women = 'Zara'
console.log(const_objs); // object constructor




                                //   Displaying object (not in console in web page)
  
  /*
   object সাধারানত সরাসরি web page এ  print  করানো যায় না ।  object web page এ সরাসরি  print করলে [object , object ] দেখায় ।  object console এ সরাসরি print করা যায় । web page এ object print করানোর কয়েকটি মাধ্যম আছে । যেমন ঃ 
   1.  সরাসরি object এর properties'র নাম দ্বারা ।
   2.  loop এর মাধ্যমে  properties গুলো access করা যায় ।  
   3.  object.values()  এর মাধ্যমে ।
   4.  JSON.Stringify() এর মাধ্যমে । 
*/
1.
const byproperties ={
  bottle1color : 'Blue',
  bottle1size : ' 1 liter'
}   //  displaying object properties by  properties
document.getElementById('byproperties').innerHTML = byproperties.bottle1color;

2.
const byloops = {
  bottle2color : ' Red ',
  bottle2size : ' 2 liter ',
}
let emtytxt = " ";
for (let bottle2 in byloops){
emtytxt += byloops[bottle2]
}   // displaying object by useing  in loop
document.write(emtytxt)


3.
const dictionary = {
  lettuce: 'a veggie ',
  banana: ' a fruit',
  tomato: ' it depends on who you ask',
  apple: ' a fruit',
  Apple: ' Steve Jobs rocks!'
}  // displaying object by Object.value() .. if you want only object values then you can use this method . this method only shows object values . 
document.getElementById('byobjectvalues').innerHTML = Object.values(dictionary) ;


4.
const byjson = {
  bottle3color : ' Black ',
  bottle3size : ' Half Liter ',
}  // displaying object by json.stringify()
document.getElementById('byjsonstringify').innerHTML = JSON.stringify(byjson);

const byjsonstring = {
  bottle3color : ' Black ',
  bottle3size : ' Half Liter ',
  bottle3prise : function (){
    return 70
  }
}  //  you  cannot simply show  function in web page . if you want to show function in web page then first you have to convert that function in tring then you can display that function in web page . example in above and below check out .... 
byjsonstring.bottle3prise = byjsonstring.bottle3prise.toString()
document.getElementById('byjsonstringifying').innerHTML = JSON.stringify(byjsonstring);




                                                   //  Object Constructors 
//  যখন প্রায় একই রকমের অনেক গুলো  object  তৈরি করতে হয় তখন সেই object এর blueprint লাগে ।  কোন কিছুর blueprint থাকলে একই জিনিস অনেক বার আলাদা আলাদা ভাবে করা যায় ।  ঠিক তেমনি যখন কোন object এর  কাঠামোর blueprint থাকে তখন  অনেক গুলো object সহজেই তৈরি করা যায় ।  Object Constructors  অনেকটা class এর মতো করা ব্যবহার করতে হয় ।  class সম্পর্কে ভাল ধারনা থাকে Object Constructors  পারা খুবই সহজ ।  যেমন ঃ 

  function Pen(pname, pcolor, pprice){
     this.penName = pname; 
     this.penColor = pcolor; 
     this.penPrice = pprice; 
     this.descriptions = function () {
      return "this is best Pen"
     }
  }

  const pen1 = new Pen ('Matador', 'Black', ' 5 taka');
  const pen2 = new Pen ('Fresh', 'Green', ' 8 taka');
  const pen3 = new Pen ('Good Luck', 'White', ' 10 taka');
  
  pen2.pheight = ' 6 inch ';
  pen1.ptype = 'Ball Pen' ;     //  আলাদা ভাবে কোন  object এর মধ্যে properties add করতে চাইলে এই পদ্ধতি ব্যবহার করতে হবে । 
  console.log(pen2);
  console.log(pen3.descriptions());

// এখানে  Pen নামে যে  কাঠামো আছে সেটা হল Object Constructors । এখানে প্রথমে  একটি Constructors এর কাঠামো তৈরি করে নেওয়া হয়েছে তারপর সেই কাঠামোর  মধ্যে  মন মতো value বশিতে নেওয়া হয়েছে ।  এই  Object Constructors এর মাধ্যমে  খুব সহজেই অনেক object তৈরি করে ফেলা যায় । 


                        // accessing Object 
/* 
কোন object access করার দুইটি পদ্ধতি আছে । 
1. dot notetion
2. array notetion
প্রায় সবসময় dot notetion ব্যবহার করা হয়। কিন্তু আমরা যদি না জানি আমাদের কোন properties value টা access করতে হবে তখন array notetion ব্যবহার করতে হবে। 
*/

   // dot notetion
let point = {
  Microeconomics : 55,
  Macroeconomics : 65,
  Math : 60,
  Statistic : 60
}
document.write(point.Microeconomics + '<br>'); //accessing object by dot notetion
document.write(point.Macroeconomics + '<br>');
document.write(point.Math + '<br>');
document.write(point.Statistic + '<br>');
document.write(point.Statistic / point.Math + '<br>');
document.write(point.Microeconomics * point.Macroeconomics + '<br>');
// এখানে point নামে একটি object আছে। এই object এর বিভিন্ন properties access করার জন্য প্রথমে variable এর নাম তারপর dot দিয়ে properties এর নাম লিখতে হবে । object এর মধ্যে এক properties এর সাথে আরেক properties কে বিভিন্ন operator এর মাধ্যমে access করা যায়। dot দিয়ে object এর properties এর access নেওয়া হয় জন্য একে dot notetion বলা হয়। 

    // array notetion 
let drugs = {
  Fever : 'Napa' ,
  Pain : 'Paracetamol',
  Cencer : 'Cemotheraphy'
}

document.write(drugs['Cencer'] + '<br>');
document.write(drugs['Fever'] + '<br>');
document.write(drugs['Pain'] + '<br>');

// এখানে drugs নামক object access করা হচ্ছে array এর মাধ্যমে । তাই একে array notetion বলা হয়। এখানে object access করার জন্য array এর মধ্যে peoperties এর নাম এর সাথে সাথে quote ও অবশ্যই দিতে হবে। 



           // update & Added object
/* 
যে পদ্ধতিতে object access করা যায় সেই একই পদ্ধতিতে object update ও করা যায়। কোন object এর properties access করার জন্য dot notation ও  array notetion ব্যবহার করা হয়। 

*/

    // update object
let update = {
  a : 'first word',
  d : 'fourth word',
  g : 'seventh word',
  s : 'nineteenth word',
}
update.a = 'second word'; // update and added by dot notetion
update.s = 'twentieth word';
document.write(update.a + '<br>');
document.write(update.s + '<br>'); // update existing object poperties
console.log(update);

update.z = 'twentysixth word';
update.y = 'twentyfifth word'; // adding new properties in object
console.log(update + '<br>');


let mobile = {
  Company_1 : "vivo",
  Company_2 : "oppo",
  Company_3 : "iphone",
  Company_4 : "samsung"
}
mobile['Company_4'] = 'Blackberry'; // udating peoperties by array notrtion
mobile['Company_5'] = 'Nokia'; // adding properties by array notetion
let ASUS = 'Company_6';
mobile[ASUS] = 'ASUS'
console.log(mobile);



        // remove object properties 
// কোন object এর properties remove করার জন্য javascript এর build-in keyword 'delet' ব্যবহার করলেই হবে।  delet keyword শুধু মাত্র object এর জন্য ব্যবহার করা যায় । অন্য কোন জায়গায় delet ব্যবহার করলে সেটা কাজ করবে না । 
let pc = {
  screen : 1300 + '*' +  980,
  processor : 'core i 5' ,
  Ram : '4 GB',
  Rom : '720 GB'
}
console.log(pc); 

delete pc.Rom; // removing properties . 
delete pc.Ram;
console.log(pc); 


        // Comparing two Object -
// 
let obj1 = {
  ps : 'sajeb',
  sp : 85,
  pp : true,
  ss : ['all']
} 

let obj2 = {
  ps : 'sajeb',
  sp : 85,
  pp : true,
  ss : ['all']
}  

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
// দুইটা object compare করার জন্য ওপরের পদ্ধতি অনুসরণ করতে হবে । যদি উত্তর true আসে তাহলে দুটো object এর সকল কিছু একই আর যদি উত্তর false আসে তাহলে obhect দুটোর মধ্যে মিল নেই । 



                                  // object iterable 
//   iterate দ্বারা বুঝায় কোন object বা array বা যে কোন কিছুর মধ্যে দিয়ে  loop করে করে যে পারা ।  javascript এ array এর মধ্যে দিয়ে সহজেই iterate করে যাওয়া যায়  কিন্তু object এর মধ্যে দিয়ে সহজেই  iterate করে যাওয়া যায় না  ।  

const person = {
  Name : ' Sajeb Chakraborty  <br>',
  Address : ' Rajshahi, Bangladesh <br> ',
  College : ' Rajshahi Government City College <br> ',
  Number : ' 01995046112 <br> ',
  Email : ' sajibkumar711@gmail.com <br>',
}
// console.log ('Email' in person);
// console.log ('Number' in person);

for (let s in person){
  document.write(s);
  document.write(' : '+ person[s]);
};

const names = ['bob', ' alejandro', ' zandra', ' anna', 'bob'];
 console.log(names);

const namesg = {
  dod: 'bob alejandro zandra anna bob'
}
 console.dir( namesg);




