//*  video ---     learn with sumit (72,73,74,75,76,77) 

                                                               // function definitions

/*একই লেখা বার বার লেখার জন্য function ব্যবহার করা হয়। একই code অনেক বার লিখার পর সহজে পরিবর্তন করার জন্য function ব্যবহার করা হয়। function ব্যবহার করার জন্য প্রথমে function keyword টি ব্যবহার করতে হবে। তারপর function এর নাম লিখতে হবে তারপর প্রথম ব্র্যাকেট () দিতে হবে। তারপর দ্বিতীয় ব্র্যাকেট {} এর মধ্যে যা যা চাই টা লিখতে হবে। তারপর function এর নাম লিখে function টি call করতে হবে। javascript  এ function দুইভাবে ব্যবহার করা যায় ।  
 1. function declaration
 2. function expression
*/
1. 
function functionName(value,kalue){
  return value + kalue
} //* function declaration
console.log( functionName('i am value',' and i am kalue'));

2.
const x = function(a,b){
  return a * b
} //* function expression
console.log(x(4,5));
// javascript  expression ব্যবহার করেও define করা যায় ।  function যদি variable দ্বারা define করা হয় তাহলে  সেটাকে function expression বলা হয় ।  function expression কে anonymous function  বলা হয় । কারন  এই function এর কোন নাম নেই ।  আর এই  function কে variable এর নাম অনুযায়ী call করা হয় । 


                                //* function hoisting

console.log(hoistfun());
function hoistfun(){
  return 'this is function hositing'
}
// hoisting  অর্থ  উত্তোলন । hoisting এর কাজ হচ্ছে  code এর মধ্যে যতগুলো declaration আছে hoisting সেই সব গুলোকে প্রথমে ওপরে তুলে দায় ।  function define করার আগে যদি function call করা হয় তাহলেও সেটা কাজ করবে ।  উপরের উদাহরণটা তার প্রমান ।  //* কিন্তু function যদি expression আকারে define করা হয় সেটা কিন্তু hoisted হবে না । শুধু  যে function সরাসরি  declare করা হয় তবেই সেটা hoisted হবে ..................



                                //* self invoking function

(function(){
  console.log('this is self invoke functions')
}) ();

// self invoke function হল এমন একটি function যেখানে  function নিজে নিজেই call হয় । আলাদা করে function কে  call করতে হয় না ।  এই self invoke function  কে IIFE(immediately invoke function expression ) বলাও হয় ।  self invoke function  এর মধ্যে parameter দেওয়া যায় কিনা  তা জানি না ।  




                                                       // function parameter :

// একই কাজ বার বার করার জন্য function ব্যবহার করা হয়। কিন্তু যখন কোন function এর কাজ করার পদ্ধতি একই থাকে কিন্তু function এর value গুলো আলাদা আলাদা  হয় তখন function with parameter ব্যবহার করা হয়।  function এর  মধ্যে parameter ও arguments থাকে । //* function এর  মধ্যে যে parameter দেওয়া হয়  সেটা যেকোনো  data type এর হতে পারে ।  javascript  function এ যদি ৩ তা parameter দেওয়া হয় আর  arguments যদি ৫ তা দেওয়া হয় তাহলেও সেটা ভুল দেখাবে না ।  javascript প্রথম ৩ তা arguments নিবে বাকি ২ তা বাদ দিবে । অর্থাৎ javascript function এর মধ্যে  কতগুলো arguments দেওয়া হল তা check করে না ।  

function Saj(prefirstname, fname, midname, lname) {
  document.write(prefirstname, fname, midname, lname + "<br>");
}
Saj("Sree ", "Sajeb ", "kumar ", "chakraborty ");
Saj("are ", "you ", "okey ", "bro ? ");




                                       //* default parameters
 // যদি একটি function এ ২ টা parameter দেওয়া থাকে আর  তার যদি arguments দেওয়া হয় দেওয়া হয় ১ টি তাহলে বাকি  missing 1 টি arguments  undefine দেখাবে ।  যেমন ঃ
 function apps(para0,para88){
  return para0 + para88
 }
 console.log(apps(10))

// এখানে arguments ১ টি দেওয়া হয়েছে আরেকটি দেওয়া হয় নি । যার ফলে  missing arguments টি undefine ধরে নেওয়া হয়েছে  এবং নাম্বার এর সাথে undefine যোগ করার কারণে উত্তর NaN এসেছে ।   //* কোন নাম্বার এর সাথে  অন্য কোন  data type  যোগ করলে  সেটা  NaN  দেখায় । 



//  কোন function এর মধ্যে  arguments না দিলে  javascript missing argument কে default ভাবে undefine ধরে নেয় । function এর মধ্যে arguments না দিলেও  function কে বলে দেওয়া যায় যে সে missing argument কে কি ধরবে ।  function এর parameter এর মধ্যেই বলে দেওয়া যায় arguments না দিলেও সে কি ধরবে । যেমন ঃ 
function missingArgument(missargu1,missargu2 = 7){
  return missargu1 + missargu2
};
console.log(missingArgument(10))
//  এখানে function call করার সময় arguments একটা দেওয়া  হয়েছে কিন্তু আরেক্তা দেওয়া হয় নি ।  এর ফলে missing arguments টি undefine দেখাবে না । কারন  parameter দেওয়ার সময়ই arguments টির default value বলে দেওয়া হয়েছে  । এর ফলে  আলাদা করে arguments না দিলেও  সেটা undefine দেখাবে না । //* কিন্তু  function call করার সময় যদি সব arguments দিয়ে  দেওয়া হয় তাহলে  parameter দেওয়ার সময় যে argument এর value দিয়ে দেওয়া হয়েছিল তখন সেটা function ingore করেবে । নিচে তার উদাহরণ দেওয়া হয়েছে ।  

function missingArgument(missargu1,missargu2 = 7){
  return missargu1 + missargu2
}
console.log(missingArgument(10,10)) ;
// এখানে  function call করার সময় arguments দিয়ে  দেওয়া  হয়েছে তাই  parameter দেওয়ার সময় যে argument এর value দেওয়া হয়েছে  function সেই value কে ignore করছে । 




                                       //  function call() ; 
// javascript এ call ও  invokeing দুটো  আলাদা বিষয় ।  invoke  ও  call কে একই বলে মনে হয় । কিন্তু আসলে তারা আলাদা ।  function call() করাকে  invoke বলা হয় । কিন্তু javascript এ আলাদা করে call  method আছে ।  invoketion উদাহরণ হল ঃ
function invfun(para1){
  this.name 
  this.age 
}
invfun(45); 
new invfun(12); //* constructor function হিসেবে call
// object.invfun(65);  //* function টি কোন object এর মধ্যে  থাকলে । 
//* এখানে ওপরের ৩ টি  হল function invoketion .  normal function call কে invoke বলা হয় কারন javascript এ আলাদা করে built- in  call function আছে ।  তাই  normal function call কে call না বলে invoke বলা হয় ।  


//* javascript এ সবগুলো function method . যখন কোন object এর  propertie হিসেবে  function দেওয়া হয় তখন তাকে method বলা হয় ।  আমরা  যখন  কোন  object এর মধ্যে function,  properties হিসেবে দেওয়া হয় তখন  সেই function কে invoke করার জন্য প্রথমে object এর নাম তারপর  function এর নাম লিখতে হয় । কিন্তু যখন কোন সাধারন function invoke করা হয় তখন সেই function invoke এর আগে সরাসরি কোন কিছু লিখতে হয় না । কিন্তু invisible ভাবে  সেই function এর আগে windows object থাকে  । যা দেখা যায় না । তাই  javascript এ সবগুলো function কেই method বলা হয়  ।


           //* javascript call() Method
const person = {
  fullName: function (country, mobile) {
    return this.firstName + " " + this.lastName + country, mobile
  },
  // deta : function () {
  //   return this.age , this.prefession
  // }
};
const person1 = {
  firstName: "Sajeb",
  lastName: "Chakraborty",
};
const person2 = {
  age: 23,
  profession: "web developer ",
};

console.log(person.fullName.call(person1,' bangaldesh', "vivo"))
// console.log(person.deta.call(person2))
// call এর কাজ হল  অন্য object থেকে woner object এ this এর মাধ্যমে data গুলো আনা । call এর  মধ্যে  argument দেওয়া যায় । 



                                                           // function apply();
//* apply ও  call প্রায় একই ।  তাহলে  apply ও call এর মধ্যে পার্থক্য হল  , , , , , , , , call method এর  মধ্যে  arguments গুলো  আলাদা আলাদা ভাবে দেওয়া হয় । কিন্তু apply method এর  মধ্যে  arguments গুলো  array আকারে  দেওয়া হয় ।  

const person3 = {
  fullName: function (country, mobile,number1,number2) {
    return this.firstName + " " + this.lastName + country + mobile + number1+ " "+ number2
  }
}
const person4 = {
  firstName: "Sajeb",
  lastName: "Chakraborty",
};

document.getElementById('demo1').innerHTML = person3.fullName.apply(person4,[ ' bangaldesh ', "vivo ",45,211])

// ওপরের call উদাহরণে call invoke করার সময় তার argument গুলো আলাদা আলাদা করে দিতে  হয়েছে। কিন্তু আমার  যদি অনেক গুলো arguments  দিতে হয় তখন আলাদা আলাদ করে দেওয়া কঠিন । তখন apply method ব্যবহার করা হয় । apply method এর মধ্যে data গুলো array আকারে দেওয়া হয় । যার ফলে  অসীম data দেওয়া যায় array এর মধ্যে ।  এটাই call ও  apply এর মধ্যে পার্থক্য ।।

//* apply method এর আরেকটি  বৈশিষ্ট্য আছে ।  অনেকগুলো সংখ্যার মধ্যে  সবচেয়ে বড় সংখ্যা খুঁজে বের করার জন্য আমরা Math.max() function ব্যবহার করি ।  কিন্তু যদি array এর মধ্যে থেকে সবচেয়ে বড় সংখ্যা বের করতে হয় তাহলে  সেটা বের করা যাবে কিন্তু অনেক কঠিন হবে ।  তাই array এর মধ্যে থেকে সবচেয়ে বড় সংখ্যা বের করার জন্য apply methodব্যবহার করা যায় ।   যেমন ঃ 


document.getElementById('demo2').innerHTML = Math.max(41,78,69,41,6,45,89,54,123,990,12,44,30,33,10,64,44,770564,95064,50,4664);   // সাধারন Math.max() function এর ব্যবহার । 

document.getElementById('demo3').innerHTML = Math.max.apply(null, [32,54,45,5,78,4,5,6,4,78,45,1,2,3,5,4,87,7,79,99,65,45,45,45,45,6,56,8,89,78,45,45,65,65,56,8,7,45,45,56,56,65,89,9,657,1371,1711]) ;   //  Math.max.apply() function এর ব্যবহার । 




                                                      //   function closures
//*  যদি কোন scope এর ভেতরে  বাহিরের কোন scope থেকে কোন data আসে  সেটাকেই closure বলে । 

                                        //*  অসম্পূর্ণ  বুঝতে  পারিনি   CLOSURE