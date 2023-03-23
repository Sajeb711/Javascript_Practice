
// প্রতিতা condition এ দুইটি নিয়ম আছে। একটি বের হবে true আর একটি বের হবে false । if statement অনুসারে যদি condition true হয় তাহলে socument print হবে । যদি condition false হয় তাহলে document print হবে না। এই false condition print  করার জন্যই if else statement ব্যবহার করা হয়। যেমন ঃ 

var naMe = "Sajeb Chakraborty"
var aGe = 23;
if (aGe > 30 ){
  document.write("You are mature person " + naMe );
}
else{
  document.write ('you are mature but not Perfect mr.' + naMe + "<br>");
}

// এখানে condition অনুসারে বয়স ৩০ থেকে কম বা false তাই  else statement এর document print হয়েছে। যদি condition টি true হতো তাহলে if statement print হতো । 

let male = "রবীন্দ্রনাথ ঠাকুর";
let female = "মোনালি ঠাকুর";

if (male === female){
  document.write("hello mr. " + male)
}
else{
  document.write("Hello Miss " + female + "<br>")
}


const num1 = 45;
const num2 = 11;
if(!(45+11) && (11+45)){
  document.write(56);
}
else{
  document.write(54);
}

// এখানে ৪৫ আর ১১ যোগ করলে ৫৬ হয়। কিন্তু not operator এর জন্য document ৫৪ print করেছে । 