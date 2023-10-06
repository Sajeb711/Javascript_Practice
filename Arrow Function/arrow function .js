//   video.......  learn with sumit (52,72)  ,  stack learner (141, 142)

// normal function লিখের সময় প্রথমে function keyword লিখতে হয় তারপর সেই function  call( ) কতে হয় । কিন্তু arrow function লিখার সময়  প্রথমে একটি  variable declare করতে হয় তারপর সেই variable কে  function আকারে call() করতে হয় । //* arrow function এ this এর  ব্যবহার করা যায় না । this শুধু normal function এ  ব্যবহার করা যায় । arrow function  hoisting হয় না । এই জন্য arrow function  ব্যবহার  করার আগে  define করে নিতে হয় । arrow function  এ  var keyword ব্যবহার না  const keyword ব্যবহার করা  ভাল ।  arrow function  এ return keyword ব্যবহার না করলেও হবে । কিন্তু  যেকোনো function সবসময় return keyword ব্যবহার করা good habit .  

 function edU(){
  document.write('Hello World ! ')   // Normal function
}
edU();
//  ওপরের  function declare টি সাধারন নিয়ম । 
//  নিচে arrow function এর মাধ্যমে fuction declare করা হয়েছে ।  একই function দুইভাবে তৈরি করা যায় . 
 Doct = () =>{
  document.write(' Hello world !  <br>')  // with arrow function
};
Doct() ;





 Identity = () => 'Who the hell are You  ?? '  ;
 document.write(Identity());

 var potion = () => ' World Is cruel -_- '  ;
 document.write(potion());

 let pati = () => 'Covid 19 is DISEASE ~_~ '  ;
 document.write(pati());

 const Name  = () => " Sajeb Chakraborty <br> ";
 document.write(Name());

 // arrow function সাধারন function থেকে  সহজ করে লিখা হয় ।  যদি কোন function এর body ' র মধ্যে শুধুমাত্র একটি লাইন লিখতে হয় বা এমন কিছু লিখতে হবে যা শুধুমাত্র return করবে তাহলে ওপরের এই নিয়ম অনুযায়ী করলেও হবে । এখানে প্রথমে একটি variable declare করতে হবে  প্রথম বন্ধনি () দিতে হবে তারপর arrow চিহ্ন দিতে হবে তারপর statement লিখতে হবে । এখানে দ্বিতীয় বন্ধনি {} দিতে হবে না । আবার return keyword ও ব্যবহার করতে হবে না ।  শুধুমাত্র একটি লাইন থাকলে তারমধ্যে default ভাবে return keyword থাকেই।  





const hello = values => " vendor is " + values ;
document.write(hello('train bogi .....')); 

const world = (num1,num2) => num1 * num2 + ',,,,,';
 document.write(world(10,12 ));  

 let js = (progam,sum3) => 'javscript is ' + progam + ' language' + sum3 + ' is good';
 document.write(js(' programming',1))

 // arrow function এ variable declare করার পর যে প্রথম বন্ধনি () দেওয়া হয় তার মধ্যে parameter দেওয়া হয় ।  parameter যদি একটা হয় তাহলে প্রথম বন্ধনি ()না দিলেও হবে । শুধু variable declare এর পর parameter লিখে arrow চিহ্ন দিলেই হবে ।  parameter যদি এক এর অধিক হয় তাহলে  প্রথম বন্ধনি () অবশ্যই দিতে হবে ।  এখানে parameter দেওয়ার উপায় হল প্রথমে প্রথম বন্ধনি () 'র মধ্যে parameter এর নাম লিখতে হবে ,তারপর function এর body ' র মধ্যে প্রথম বন্ধনির () মধ্যে দেওয়া parameter গুলোর নাম লিখতে হবে , তারপর print করার সময় fuction call করে প্রথম বন্ধনির() মধ্যে parameter অনুযায়ী লিখতে হবে । 
 
function done() {
  let a = new Date() ;
  document.write(a)
}
document.getElementById('click').addEventListener('click', done)

 

 







